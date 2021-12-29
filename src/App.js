import { ThemeProvider } from "styled-components";
import theme from "./lib/theme";

const App = () => {
  return(
    <>
      <ThemeProvider theme={theme}>
        
      </ThemeProvider>
    </>    
  );
};

export default App;