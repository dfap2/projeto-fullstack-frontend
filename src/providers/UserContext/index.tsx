import { ReactNode, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services";

interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    cpf: string;
    phoneNumber: string;
    birthDate: string;
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

export interface ILoginFormData {
    email: string;
    password: string;
}

interface IUserContext {
    user: IUserRes[];
    onSubmitLogin: (data: ILoginFormData) => void;
}

interface IUserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext<IUserContext | null>(null);

export const UserProvider = ({ children }: IUserProviderProps) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<IUserRes[]>([]);

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
    }, []);

    const onSubmitLogin = async (data: ILoginFormData) => {
        try {
            const res = await api.post<ILoginRes>("/login", data);

            localStorage.clear();
            localStorage.setItem("@TOKEN", res.data.token);
            localStorage.setItem("@USERID", res.data.userId.toString());

            navigate("/");
        } catch (error) {}
    };

    // const onSubmitRegister = async (data: IRegisterFormData) => {
    //     try {
    //         const res = await api.post<IRegisteRes>("/users", data);

    //         navigate("/");
    //     } catch (error) {}
    // };

    return (
        <UserContext.Provider
            value={{ user, onSubmitLogin /*onSubmitRegister*/ }}
        >
            {children}
        </UserContext.Provider>
    );
};
