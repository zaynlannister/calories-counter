import { ChangeEvent, useState } from "react";
import styled from "styled-components";

const LEAD_ZERO = /^0+/;
const NOT_NUMBERS = /[^\d]/g;

const CustomInput = (props: any) => {
  const [formattedValue, setFormattedValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const formattedInput = value
      .replace(NOT_NUMBERS, "")
      .replace(LEAD_ZERO, "");

    setFormattedValue(formattedInput);
  };

  return (
    <StyledInput onChange={handleChange} {...props} value={formattedValue} />
  );
};

const StyledInput = styled.input`
  font-size: 18px;
  width: 100%;
  outline: none;
  border: 1px solid #000;
  padding: 5px;
  border-radius: 4px;
  text-align: center;
  transition: 150ms all;

  &:focus {
    border-color: #fd7d36;
  }
`;

export default CustomInput;
