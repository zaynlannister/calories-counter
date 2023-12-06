import React, { ChangeEvent } from "react";
import styled from "styled-components";
import CustomInput from "./CustomInput";
import ActivityComponents from "./ActivityComponents";
import { formatNumber } from "../utils/formatNumber";

const genders = [
  { name: "Male", id: "male", number: 5 },
  { name: "Female", id: "female", number: -161 },
];

const CalculatorApp = () => {
  const [gender, setGender] = React.useState<string>("male");
  const [age, setAge] = React.useState<number>(0);
  const [height, setHeight] = React.useState<number>(0);
  const [weight, setWeight] = React.useState<number>(0);
  const [currentActivity, setActivity] = React.useState<number>(1.2);
  const [isAllowed, setIsAllowed] = React.useState<boolean>(false);

  const [caloriesNorm, setCaloriesNorm] = React.useState<number>(0);
  const [caloriesMinimal, setCaloriesMinimal] = React.useState<number>(0);
  const [caloriesMaximal, setCaloriesMaximal] = React.useState<number>(0);

  const handleGender = (gender: string) => {
    setGender(gender);
  };

  const handleAge = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setAge(parseInt(value));
  };

  const handleHeight = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setHeight(parseInt(value));
  };

  const handleWeight = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setWeight(parseInt(value));
  };

  const getGenderNumber = () => {
    const genderObject = genders.find((item) => item.id === gender);
    if (genderObject) {
      return genderObject?.number;
    } else {
      return 0;
    }
  };

  const submitCount = () => {
    if (isAllowed) {
      const norm = 10 * weight + 6.25 * height - 5 * age + getGenderNumber();

      setCaloriesNorm(Math.round(norm * currentActivity));
      setCaloriesMinimal(Math.round(norm * currentActivity * 0.85));
      setCaloriesMaximal(Math.round(norm * currentActivity * 1.15));
    }
  };

  const isReadyToCount = () => {
    if (age && height && weight) {
      setIsAllowed(true);
    } else {
      setIsAllowed(false);
    }
  };

  React.useEffect(() => {
    isReadyToCount();
  }, [age, height, weight]);
  return (
    <StyledCalculator>
      <div className="bg-white py-[20px] px-[30px] rounded-[10px]">
        <p className="header-title font-bold text-[35px] border-b mb-4">
          Calories Counter
        </p>
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
          <div className="inputs flex gap-4 mt-4 mb-6">
            <div className="input-content">
              <p className="input-content__title">Age</p>
              <CustomInput
                value={age}
                onInput={handleAge}
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
                onInput={handleHeight}
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
                onInput={handleWeight}
                type="text"
                id="age"
                name="age"
                placeholder="0"
                inputMode="decimal"
                maxLength={3}
              />
            </div>
          </div>

          <ActivityComponents
            currentActivity={currentActivity}
            setActivity={setActivity}
          />

          <div className="mt-6">
            <button
              onClick={submitCount}
              className={`count-btn primary-button ${
                !isAllowed ? "disabled" : ""
              }`}
            >
              Count
            </button>
          </div>
        </div>
      </div>
      {caloriesNorm && caloriesMinimal && caloriesMaximal ? (
        <div className="bg-white py-[20px] px-[30px] rounded-[10px] mt-4">
          <p className="text-[#fd7d36] font-bold text-[24px]">
            Your calories norm
          </p>
          <div className="flex flex-col gap-2 mt-4">
            <div>
              <p className="text-[18px] font-[600]">
                Weight maintenance: {formatNumber(caloriesNorm)} kcal
              </p>
            </div>
            <div className="text-[18px] font-[600]">
              <p>Weight loss: {formatNumber(caloriesMinimal)} kcal</p>
            </div>
            <div className="text-[18px] font-[600]">
              <p>Weight gain: {formatNumber(caloriesMaximal)} kcal</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </StyledCalculator>
  );
};

const StyledCalculator = styled.div`
  width: 500px;
  border-radius: 10px;

  .input-content__title {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 6px;
  }

  .count-btn.disabled {
    background-color: #d1d1d1;
    cursor: not-allowed;
  }

  @media (max-width: 540px) {
    width: 100%;
  }

  @media (max-width: 430px) {
    .header-title {
      font-size: 25px;
    }
  }
`;

export default CalculatorApp;
