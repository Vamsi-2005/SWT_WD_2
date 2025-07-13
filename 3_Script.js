
const screen = document.getElementById('screen');

// Display digits and operators
function typeDigit(value) {
  if (screen.innerText === '0') {
    screen.innerText = value;
  } else {
    screen.innerText += value;
  }
}

// Clear all
function clearDisplay() {
  screen.innerText = '0';
}

// Delete last character
function deleteLast() {
  if (screen.innerText.length === 1 || screen.innerText === 'Error') {
    screen.innerText = '0';
  } else {
    screen.innerText = screen.innerText.slice(0, -1);
  }
}

// Percentage 
function percentage() {
try {
    let value = eval(screen.innerText);
    screen.innerText = value / 100;
  } catch {
    screen.innerText = "Error";
  }
}

// Perform calculation
function calculate() {
  try {
    // Replace "÷" and "×" with JS-friendly symbols
    let expression = screen.innerText.replace(/÷/g, '/').replace(/×/g, '*');
    // Evaluate the expression
    const result = eval(expression);
    screen.innerText = result;
  } catch (error) {
    screen.innerText = 'Error';
  }
}