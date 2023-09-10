import "../Options/Options.scss";
import { useState } from "react";
import SliderComponent from "../Slider/Slider";
import CheckboxMui from "../Checkbox/Checkbox";
import Strength from "../Strength/Strength";
const Options = () => {
    const [checkboxesCheckedCount, setCheckboxesCheckedCount] = useState(0);
    
  const handleCheckboxChange = (isChecked) => {
    
    setCheckboxesCheckedCount((prevCount) => {
        if(isChecked) {
            return prevCount + 1
        } else {
            return prevCount - 1
        }
    })
    
  };
  
  return (
    <div className="options__container">
      <h4 className="character__text">Character length</h4>
      <SliderComponent />
      <CheckboxMui onChange={handleCheckboxChange} checboxText={'Include Uppercase Letters'}/>
      <CheckboxMui onChange={handleCheckboxChange} checboxText={'Include Lowercase Letters'}/>
      <CheckboxMui onChange={handleCheckboxChange} checboxText={'Include Numbers'}/>
      <CheckboxMui onChange={handleCheckboxChange} checboxText={'Include Symbols'}/>
      <Strength isCheckboxChecked={checkboxesCheckedCount}/>
    </div>
  );
};

export default Options;
