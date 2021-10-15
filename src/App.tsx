import MainContextProvider from "context/MainContext";
import Routes from "routes";
import GlobalStyles from "./styles/globalstyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <MainContextProvider>
        <Routes />
      </MainContextProvider>
    </>
  );
}

export default App;
