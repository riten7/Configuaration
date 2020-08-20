function capital(string) {
  const capitalizedString = string.split("").reverse().join("");
  return capitalizedString
}

export default capital