import "../Strength/Strength.scss";

const Strength = ({ children, isCheckboxChecked }) => {
  let value = "TOO WEAK";
  let colorClass = "";
  

  if (isCheckboxChecked === 1) {
    value = "TOO WEAK";
    colorClass = "-TooWeak";
    
  } else if (isCheckboxChecked === 2) {
    value = "WEAK";
    colorClass = "-Weak";
   
  } else if (isCheckboxChecked === 3) {
    value = "MEDIUM";
    colorClass = "-Medium";
   
  } else if (isCheckboxChecked === 4){
    value = "STRONG";
    colorClass = "-Strong";
    
  }
  const barsToHighlight = Math.min(4, isCheckboxChecked);
 
  return (
    <div className={`strength__container`}>
      {children}
      <p className="strength__header">STRENGTH</p>
      <div className="strength__valuecontainer">
        <p className="strength__valuetext">{value}</p>
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`vertical__bar vertical__bar${
              index < barsToHighlight ? colorClass : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Strength;
