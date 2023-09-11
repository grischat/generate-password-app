
const PasswordGenerator = (
  length,
  lowCase,
  upCase,
  symbols,
  numbers
) => {
  let chars = "";
  if (upCase) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (lowCase) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (symbols) {
    chars += "!@#$%^&*()";
  }
  if (numbers) {
    chars += "0123456789";
  }
  let passwordResult = "";

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    passwordResult += chars.substring(randomNumber, randomNumber + 1);
  }
  return passwordResult;
}

export default PasswordGenerator;
