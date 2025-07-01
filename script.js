function calculatePower() {
  const base = parseFloat(document.getElementById("base").value);
  const exponent = parseInt(document.getElementById("exponent").value);
  
  if (isNaN(base) || isNaN(exponent)) {
    document.getElementById("result").innerText = "Please enter valid numbers.";
    return;
  }

  const result = Math.pow(base, exponent);
  document.getElementById("result").innerText = `${base} ^ ${exponent} = ${result}`;
}
