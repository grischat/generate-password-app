import "../Options/Options.scss";
import SliderComponent from "../Slider/Slider";
import CheckboxMui from "../Checkbox/Checkbox";
const Options = () => {
  return (
    <div className="options__container">
      <h4 className="character__text">Character length</h4>
      <SliderComponent />
      <CheckboxMui checboxText={'Include Uppercase Letters'}/>
      <CheckboxMui checboxText={'Include Lowercase Letters'}/>
      <CheckboxMui checboxText={'Include Numbers'}/>
      <CheckboxMui checboxText={'Include Symbols'}/>
    </div>
  );
};

export default Options;
