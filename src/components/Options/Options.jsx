import "../Options/Options.scss";
import { useState } from "react";
import SliderComponent from "../Slider/Slider";
import CheckboxMui from "../Checkbox/Checkbox";
import Strength from "../Strength/Strength";
import ButtonMui from "../Button/Button";
import PasswordGenerator from "../PasswordGenerator/PasswordGenerator";
const Options = () => {
  const [checkboxesCheckedCount, setCheckboxesCheckedCount] = useState(0);
  const [includeLowCase, setLowCase] = useState(false);
  const [includeUpCase, setUpCase] = useState(false);
  const [includeNumbers, setNumbers] = useState(false);
  const [includeSymbols, setSymbols] = useState(false);
  const [sliderValue, setSliderValue] = useState(10);
  const [passwordGenerated, setPassword] = useState("");
  const handleCheckboxChange = (isChecked, checkboxType) => {
    //Change checkbox type due to value
    switch (checkboxType) {
      case "lowercase":
        setLowCase(isChecked);
        break;
      case "uppercase":
        setUpCase(isChecked);
        break;
      case "numbers":
        setNumbers(isChecked);
        break;
      case "symbols":
        setSymbols(isChecked);
        break;
      default:
        break;
    }

    setCheckboxesCheckedCount((prevCount) => {
      if (isChecked) {
        return prevCount + 1;
      } else {
        return prevCount - 1;
      }
    });
  };
  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };

  const handleGeneratedPassword = () => {
    const password = PasswordGenerator(
      sliderValue,
      includeUpCase,
      includeLowCase,
      includeSymbols,
      includeNumbers,
    );
    setPassword(password);
    console.log(password)
  };

  return (
    <div>
      <input
        className="input__container"
        placeholder="Click Generate"
        value={passwordGenerated}
        readOnly
      ></input>
      <div className="options__container">
        <h4 className="character__text">Character length</h4>
        <SliderComponent onChangeSliderValue={handleSliderChange}/>
        <CheckboxMui
          onChange={(isChecked) => handleCheckboxChange(isChecked, "uppercase")}
          checboxText={"Include Uppercase Letters"}
        />
        <CheckboxMui
          onChange={(isChecked) => handleCheckboxChange(isChecked, "lowercase")}
          checboxText={"Include Lowercase Letters"}
        />
        <CheckboxMui
          onChange={(isChecked) => handleCheckboxChange(isChecked, "numbers")}
          checboxText={"Include Numbers"}
        />
        <CheckboxMui
          onChange={(isChecked) => handleCheckboxChange(isChecked, "symbols")}
          checboxText={"Include Symbols"}
        />
        <Strength isCheckboxChecked={checkboxesCheckedCount} />
        <ButtonMui onClick={handleGeneratedPassword} />
      </div>
    </div>
  );
};

export default Options;
