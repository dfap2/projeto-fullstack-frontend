import { IInputPropsCSS, StyledFieldset } from "./style";

interface IInputProps extends IInputPropsCSS {
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
    $inputSize,
    register,
}: IInputProps) => {
    return (
        <StyledFieldset $inputSize={$inputSize}>
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
    );
};

export default InputField;
