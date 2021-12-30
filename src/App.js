import { ThemeProvider } from "styled-components";
import NTFCard from "./components/NTFCard/NTFCard";
import theme from "./lib/theme";
import { Container } from "./App.styles";

const App = () => {
  return(
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <NTFCard />
        </Container>
      </ThemeProvider>
    </>    
  );
};

export default App;