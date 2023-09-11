import Button from "@mui/material/Button";

const ButtonMui = ({onClick}) => {
  return (
    <Button
    
      variant="contained"
      sx={{ "&.MuiButtonBase-root": {
        width: '19.4rem',
        height: '3.5rem',
        position: 'relative',
        bottom: '3.5rem',
        left: '1.5rem',
        backgroundColor: 'rgb(164, 255, 175)',
        color: "black", 
        fontFamily: "JetBrains Mono, monospace"
      } }}
      onClick={onClick}
    >{`GENERATE ->`}</Button>
  );
};

export default ButtonMui;
