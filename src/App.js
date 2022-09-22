import styled from "styled-components";
import Header from "./components/Header";
import { GlobalStyles } from "@mui/material";
import GlobalFonts from "./fonts/fonts"; 
import ServicePage from "./Pages/ServicePage";
function App() {
  return (
    <Wrappper>
      <GlobalFonts/>
      <GlobalStyles/>
      <Header />
      <ServicePage/>
    </Wrappper>
  );
}

export default App;

const Wrappper = styled.div``;
