import Slider from "@mui/material/Slider";
import '../Slider/Slider.scss'
import { useState } from "react";
const SliderComponent = () => {
  const [sliderValue, setSliderValue] = useState(10);
  const handleChangeValue = (event,newValue) => {
    console.log(newValue)
    setSliderValue(newValue);
  };
  
  return (
    <div>
      <Slider
        defaultValue={10}
        max={20}
        min={0}
        onChange={handleChangeValue}
        sx={{
          width: 320,
          color: "rgb(164, 255, 175)",
          position: "relative",
          left: "1.2rem",
          top: "1rem",

          "& .MuiSlider-thumb": {
            color: "rgb(230, 229, 234)",
            "&:hover, &.Mui-focusVisible": {
              boxShadow: "none",
            },
            "&.Mui-active": {
              boxShadow: "none",
            },
          },
          "& .MuiSlider-track": {
            borderRadius: "0",
          },
          "& .MuiSlider-rail": {
            color: "rgb(24, 23, 31)",
            borderRadius: "0",
            height: "0.4rem",
          },
        }}
      />
      <p className="characters-counter">{sliderValue}</p>
    </div>
  );
};

export default SliderComponent;