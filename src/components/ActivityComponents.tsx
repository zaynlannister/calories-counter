import React from "react";
import styled from "styled-components";

const activityTypes = [
  {
    type: "Minimal",
    description: "Sedentary work and no physical activity.",
    id: "minimal",
    number: 1.2,
  },
  {
    type: "Low",
    description: "Rare, irregular workouts, household activity.",
    id: "low",
    number: 1.375,
  },
  {
    type: "Moderate",
    description: "Workouts 3-5 times a week.",
    id: "moderate",
    number: 1.55,
  },
  {
    type: "High",
    description: "Workouts 6-7 times a week.",
    id: "high",
    number: 1.725,
  },
  {
    type: "Very high",
    description: "More than 6 workouts a week and physical labor.",
    id: "veryHigh",
    number: 1.9,
  },
];

interface ActivityComponentsProps {
  setActivity: (value: number) => void;
}

const ActivityComponents = (props: ActivityComponentsProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    const findActivityNumber = activityTypes.find((item) => item.id === value);

    if (findActivityNumber) {
      props.setActivity(findActivityNumber?.number);
    }
  };

  return (
    <StyledActivity className="activity">
      <fieldset>
        <legend className="text-[22px] font-bold mb-2">
          Physical activity:
        </legend>
        {activityTypes.map((item, index) => (
          <div className="mb-2" key={index}>
            <input
              onChange={handleInputChange}
              type="radio"
              id={item.id}
              name="activity"
              value={item.id}
              defaultChecked={index === 0 ? true : false}
            />
            <div>
              <label
                className="text-[19px] cursor-pointer hover:text-[#fd7d36] transition-all"
                htmlFor={item.id}
              >
                {item.type}
              </label>
              <p className="text-[#bdbdbd] text-[18px]">{item.description}</p>
            </div>
          </div>
        ))}
      </fieldset>
    </StyledActivity>
  );
};

const StyledActivity = styled.div`
  div:has(input[type="radio"]) {
    line-height: 1.1;
    display: flex;
    gap: 0.5em;
    cursor: pointer;

    &:not(& ~ &) {
      margin-block-start: 1em;
    }

    > input[type="radio"] {
      appearance: none;
      background-color: transparent;
      margin: 0;
      font: inherit;
      color: currentColor;

      width: 16px;
      height: 16px;
      border: 0.15em solid #c8c8c8;
      border-radius: 50%;
      transform: translateY(-0.075em);

      display: grid;
      place-content: center;
      cursor: pointer;

      &::before {
        content: "";
        width: 0.42em;
        height: 0.42em;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em #fd7d36;
        background-color: CanvasText;
      }

      &:is(:active):not(:checked) {
        &::after {
          background-color: #fd7d36;
        }
      }

      &:checked {
        border-color: #fd7d36;

        &::after {
          opacity: 0;
        }

        &::before {
          transform: scale(1);
        }

        &:is(:hover, :focus) {
          &::after {
            background-color: #fd7d36;
          }
        }

        &:is(:active) {
          &::after {
            background-color: #fd7d36;
          }
        }
      }

      &:focus {
        outline: unset;
        &::after {
          opacity: 0.12;
        }
      }
    }
  }
`;

export default ActivityComponents;
