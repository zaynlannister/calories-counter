import CalculatorApp from "./components/CalculatorApp";
import styled from "styled-components";

const App = () => {
  return (
    <StyledApp className="flex flex-col items-center mt-10">
      <CalculatorApp />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  @media (max-width: 540px) {
    margin: 0;
  }
`;

export default App;
