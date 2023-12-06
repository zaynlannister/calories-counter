const genders = [
  { name: "Мужчина", id: "male" },
  { name: "Женщина", id: "female" },
];

const CalculatorApp = () => {
  return (
    <div>
      <div className="gender">
        <p className="gender-title">Пол</p>
        <div className="flex"></div>
      </div>
    </div>
  );
};

export default CalculatorApp;
