import { useContext } from "react";
import { UserContext } from "../providers/UserContext";

const useUserContext = () => {
    const userContext = useContext(UserContext);

    if (!userContext) {
        throw "Erro contexto não encontrado";
    }

    return userContext;
};

export default useUserContext;
