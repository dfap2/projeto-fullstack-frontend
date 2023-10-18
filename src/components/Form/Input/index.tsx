import { StyledFieldset } from "./style";

interface IInput {
    id: string;
    label: string;
    error: string | undefined;
    register: any;
}

const Input = () => {
    <>
        <StyledFieldset>
            <label htmlFor="input" className="input-label"></label>
            <input type="text" id="input" className="input-placeholder" />
        </StyledFieldset>
    </>;
};

export default Input;
