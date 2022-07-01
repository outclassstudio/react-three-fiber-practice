import styled from "styled-components";
import CavnasPage from "./pages/CanvasPage";

function App() {
  return (
    <MainContainer>
      <CavnasPage />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default App;
