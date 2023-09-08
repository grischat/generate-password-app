import Checkbox from "@mui/material/Checkbox";
import '../Checkbox/Checkbox.scss'
const CheckboxMui = ({checboxText}) => {
  return (
    <div className="checkboxes__container">
      <Checkbox
        defaultChecked={true}
        sx={{
          "&.MuiButtonBase-root": {
            display: "flex",
            width: "0",
            left: '1rem'
          },
          "&.Mui-checked": {
            color: "rgb(164, 255, 175)",
          },
          "&:not(.Mui-checked)": {
            color: "white",
          },
        }}
      />
      <p className="settings__text">{checboxText}</p>
    </div>
  );
};

export default CheckboxMui;
