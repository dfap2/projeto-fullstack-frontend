import { StyledFieldset } from "./style";

interface IInput {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    error: string | undefined;
    register: any;
}

const InputField = ({
    id,
    label,
    type,
    error,
    placeholder,
    register,
}: IInput) => {
    return (
        <>
            <StyledFieldset>
                <label id="label" htmlFor="input" className="input-label">
                    {label}
                </label>
                <input
                    type={type}
                    id={id}
                    className="input-placeholder"
                    placeholder={placeholder}
                    {...register(id)}
                />
                <span className="input-label">{error}</span>
            </StyledFieldset>
        </>
    );
};

export default InputField;
