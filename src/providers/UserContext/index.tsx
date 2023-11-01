import { ReactNode, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services";

import {
    TRegisterFormData,
    addressFormSchema,
    userFormSchema,
} from "../../components/Forms/RegisterForm/formSchemaRegister";

interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    cpf: string;
    phoneNumber: string;
    birthDate: string;
    description: string;
    account: "anunciante" | "comprador";
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

interface IUserRes extends Omit<IUser, "password"> {}

interface ILoginRes {
    userId: number;
    token: string;
}

interface IAddressRes {
    id: number;
    zipCode: string;
    state: string;
    city: string;
    street: string;
    number: number;
    complement: string;
}

interface IRegisterRes extends IUserRes {
    address: IAddressRes;
}

export interface ILoginFormData {
    email: string;
    password: string;
}

interface IUserContext {
    user: IUserRes[];
    onSubmitLogin: (data: ILoginFormData) => void;
    onSubmitRegister: (data: TRegisterFormData) => void;
}

interface IUserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext<IUserContext | null>(null);

export const UserProvider = ({ children }: IUserProviderProps) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<IUserRes[]>([]);

    const onSubmitLogin = async (data: ILoginFormData) => {
        try {
            const res = await api.post<ILoginRes>("/login", data);

            localStorage.clear();
            localStorage.setItem("@TOKEN", res.data.token);
            localStorage.setItem("@USERID", res.data.userId.toString());

            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    const token = localStorage.getItem("@TOKEN");

    if (token) {
        useEffect(() => {
            const token = localStorage.getItem("@TOKEN");
            const userId = localStorage.getItem("@USERID");

            const getUser = async () => {
                try {
                    const { data } = await api.get(`users/${userId}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    setUser(data);
                } catch (error) {
                    console.error(error);
                }
            };

            getUser();

            console.log(user);
        }, []);
    }

    const onSubmitRegister = async (data: TRegisterFormData) => {
        const user = userFormSchema.parse(data);
        const address = addressFormSchema.parse(data);

        const body = {
            ...user,
            address: { ...address },
        };

        try {
            const res = await api.post<IRegisterRes>("/users", body);

            navigate("/login");
        } catch (error) {}
    };

    return (
        <UserContext.Provider value={{ user, onSubmitLogin, onSubmitRegister }}>
            {children}
        </UserContext.Provider>
    );
};
