import Button from "../../Buttons";
import InputField from "../Inputs";
import useUserContext from "../../../hooks/useUserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ILoginFormData } from "../../../providers/UserContext";
import { loginFormSchema } from "./formSchemaLogin";
import { StyledLoginForm } from "./style";

const LoginForm = () => {
    const { onSubmitLogin } = useUserContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginFormData>({
        resolver: zodResolver(loginFormSchema),
    });

    return (
        <StyledLoginForm>
            <h2>Login</h2>
            <div className="form-container">
                <div className="form-inputs">
                    <InputField
                        id="input"
                        type="text"
                        label="Email"
                        placeholder="Digitar email"
                        error={undefined}
                        register={register}
                    />
                    <InputField
                        id="input"
                        type="password"
                        label="Senha"
                        placeholder="Digitar senha"
                        error={undefined}
                        register={register}
                    />
                </div>
                <div className="form-footer">
                    <Button
                        buttonColor="--brand-1"
                        buttonFontColor="--white"
                        buttonWidth="full"
                        size="default"
                        text="Entrar"
                        type="submit"
                    />
                </div>
            </div>
        </StyledLoginForm>
    );
};

export default LoginForm;
