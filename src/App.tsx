import { RoutesMain } from "./routes";
import { GlobalReset, GlobalStyle, Typography } from "./styles";

function App() {
    return (
        <>
            <GlobalReset />
            <GlobalStyle />
            <Typography />
            <RoutesMain />
        </>
    );
}

export default App;
