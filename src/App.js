import styled from "styled-components";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "@mui/material";
import GlobalFonts from "./fonts/fonts";
import ServicePage from "./Pages/ServicePage";
import RentalPage from "./Pages/RentalPage";
function App() {
  return (
    <Wrappper>
      <GlobalFonts />
      <GlobalStyles />
      <Router>
        <Header />
        <AppBody>
          <Routes>
            <Route path="/" element={<ServicePage />} />
          </Routes>
          <Routes>
            <Route path="/Rent" element={<RentalPage />} />
          </Routes>
        </AppBody>
      </Router>
    </Wrappper>
  );
}

export default App;

const Wrappper = styled.div`
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  text-align: center;
  flex-direction: column;
  flex-wrap: initial;
  height: 100vh;
`;
const AppBody = styled.div``;
