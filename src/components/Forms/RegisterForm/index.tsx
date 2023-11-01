import Button from "../../Buttons";
import InputField from "../Inputs";
import useUserContext from "../../../hooks/useUserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TRegisterFormData, registerFormSchema } from "./formSchemaRegister";
import { StyledRegisterForm } from "./style";

const RegisterForm = () => {
    const { onSubmitRegister } = useUserContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TRegisterFormData>({
        resolver: zodResolver(registerFormSchema),
    });

    return (
        <StyledRegisterForm onSubmit={handleSubmit(onSubmitRegister)}>
            <h2 className="heading-5-500">Cadastro</h2>
            <div className="form-container">
                <div className="user-info-container">
                    <h3 className="body-2-500">Informações pessoais</h3>
                    <div className="user-info">
                        <InputField
                            id="name"
                            label="Nome"
                            placeholder="Ex: Samuel Leão"
                            type=""
                            $inputSize="default"
                            error={errors.name?.message}
                            register={register}
                        />
                        <InputField
                            id="email"
                            label="Email"
                            placeholder="Ex: samuel@kenzie.com.br"
                            type=""
                            $inputSize="default"
                            error={errors.email?.message}
                            register={register}
                        />
                        <InputField
                            id="cpf"
                            label="CPF"
                            placeholder="000.000.000-00"
                            type=""
                            $inputSize="default"
                            error={errors.cpf?.message}
                            register={register}
                        />
                        <InputField
                            id="phoneNumber"
                            label="Celular"
                            placeholder="(DDD) 90000-0000"
                            type=""
                            $inputSize="default"
                            error={errors.phoneNumber?.message}
                            register={register}
                        />
                        <InputField
                            id="birthDate"
                            label="Data de nascimento"
                            placeholder="00/00/0000"
                            type=""
                            $inputSize="default"
                            error={errors.birthDate?.message}
                            register={register}
                        />
                        <InputField
                            id="description"
                            label="Descrição"
                            placeholder="Digitar descrição"
                            type=""
                            $inputSize="text"
                            error={errors.description?.message}
                            register={register}
                        />
                    </div>
                    <div className="address-info">
                        <InputField
                            id="zipCode"
                            label="CEP"
                            placeholder="00000.000"
                            type=""
                            $inputSize="default"
                            error={errors.zipCode?.message}
                            register={register}
                        />
                        <div className="city-state-container">
                            <InputField
                                id="state"
                                label="Estado"
                                placeholder="Digitar estado"
                                type=""
                                $inputSize="default"
                                error={errors.state?.message}
                                register={register}
                            />
                            <InputField
                                id="city"
                                label="Cidade"
                                placeholder="Digitar cidade"
                                type=""
                                $inputSize="default"
                                error={errors.city?.message}
                                register={register}
                            />
                        </div>
                    </div>
                </div>
                <h3 className="body-2-500">Tipo de conta</h3>
                <fieldset>
                    <input type="radio" name="" id="input" />
                    <input type="radio" name="" id="" />
                </fieldset>
                <InputField
                    id="password"
                    label="Senha"
                    placeholder="Digitar senha"
                    type="password"
                    $inputSize="default"
                    error={errors.password?.message}
                    register={register}
                />
                <InputField
                    id="confirm"
                    label="Confirmar senha"
                    placeholder="Digitar senha"
                    type="password"
                    $inputSize="default"
                    error={errors.confirm?.message}
                    register={register}
                />
                <Button
                    $buttonSize="default"
                    $buttonType="brand-1"
                    $buttonWidth="full"
                    text="Finalizar cadastro"
                />
            </div>
        </StyledRegisterForm>
    );
};

export default RegisterForm;
