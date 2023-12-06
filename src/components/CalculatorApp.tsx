import React from "react";
import styled from "styled-components";
import CustomInput from "./CustomInput";

const genders = [
  { name: "Male", id: "male" },
  { name: "Female", id: "female" },
];

const CalculatorApp = () => {
  const [gender, setGender] = React.useState<string>("male");
  const [age, setAge] = React.useState<number>(0);
  const [height, setHeight] = React.useState<number>(0);
  const [weight, setWeight] = React.useState<number>(0);

  const handleGender = (gender: string) => {
    setGender(gender);
  };

  const handleAge = (event: React.FocusEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setAge(parseInt(value));
  };

  const handleHeight = (event: React.FocusEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setHeight(parseInt(value));
  };

  const handleWeight = (event: React.FocusEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setWeight(parseInt(value));
  };
  return (
    <StyledCalculator>
      <p className="font-bold text-[35px] border-b mb-4">Calories Counter</p>
      <div>
        <div className="gender">
          <p className="gender-title text-[20px] font-bold mb-2">Gender</p>
          <div className="flex justify-between">
            {genders.map((item, index) => (
              <span
                className={`text-center w-[50%] cursor-pointer px-1 py-2 border border-[#fd7d36] ${
                  index === 0 ? "rounded-l" : "rounded-r"
                }  ${gender === item.id ? "bg-[#fd7d36] text-white" : ""}`}
                onClick={() => handleGender(item.id)}
                key={index}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
        <div className="inputs flex gap-20 mt-4">
          <div className="input-content">
            <p className="input-content__title">Age</p>
            <CustomInput
              value={age}
              onBlur={handleAge}
              type="text"
              id="age"
              name="age"
              placeholder="0"
              inputMode="decimal"
              maxLength={3}
            />
          </div>
          <div className="input-content">
            <p className="input-content__title">Height</p>
            <CustomInput
              value={height}
              onBlur={handleHeight}
              type="text"
              id="age"
              name="age"
              placeholder="0"
              inputMode="decimal"
              maxLength={3}
            />
          </div>
          <div className="input-content">
            <p className="input-content__title">Weight</p>
            <CustomInput
              value={weight}
              onBlur={handleWeight}
              type="text"
              id="age"
              name="age"
              placeholder="0"
              inputMode="decimal"
              maxLength={3}
            />
          </div>
        </div>
      </div>
    </StyledCalculator>
  );
};

const StyledCalculator = styled.div`
  width: 500px;
  background-color: #fff;
  padding: 20px 30px;
  border-radius: 10px;

  .input-content__title {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 6px;
  }
`;

export default CalculatorApp;
