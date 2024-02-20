function resultNumPow() {
  num1 = parseFloat(document.getElementById("numPow").value);
  num2 = parseInt(document.getElementById("numToPow").value);

  result = 1;
  for (i = 0; i < num2; i++) {
    result *= num1;
  }
  document.getElementById("resultNumPow").style.background = "#7674BA";
  document.getElementById("resultNumPow").innerHTML = `Результат: ${result}`;
}

function resultCommonDiv() {
  num1 = parseInt(document.getElementById("numСommonDiv1").value);
  num2 = parseInt(document.getElementById("numСommonDiv2").value);
  while (num2 !== 0) {
    temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  document.getElementById("resultСommonDiv").style.background = "#7674BA";
  document.getElementById("resultСommonDiv").innerHTML = `Результат: ${num1}`;
}

function findMaxNum() {
  number = document.getElementById("numMax").value;
  temp = number.toString();
  max = 0;
  for (i = 0; i < temp.length; i++) {
    dig = parseInt(temp[i]);
    if (dig > max) {
      max = dig;
    }
  }

  document.getElementById("resultnumMax").style.background = "#7674BA";
  document.getElementById("resultnumMax").innerHTML = `Результат: ${max}`;
}

function numSimple() {
  number = document.getElementById("numSimple").value;
  isPrime = true;

  if (number < 2) {
    isPrime = false;
  } else if (number === 2 || number === 3) {
    isPrime = true;
  } else if (number % 2 === 0) {
    isPrime = false;
  } else {
    for (var i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  document.getElementById("resultnumSimple").style.background = "#7674BA";
  if (isPrime == true) {
    document.getElementById("resultnumSimple").innerText = "Число просте";
  } else {
    document.getElementById("resultnumSimple").innerText = "Число не просте";
  }
}

function findFactors() {
  number = document.getElementById("numFactors").value;
  factors = [];
  divisor = 2;
  while (number > 1) {
    if (number % divisor === 0) {
      factors.push(divisor);
      number /= divisor;
    } else {
      divisor++;
    }
  }

  document.getElementById("resultnumFactors").style.background = "#7674BA";
  document.getElementById(
    "resultnumFactors"
  ).innerHTML = `Результат: ${factors.join("*")}`;
}

function findFib() {
  a = 0;
  b = 1;
  let temp;
  number = parseInt(document.getElementById("numFib").value);
  for (i = 1; b < number; i++) {
    temp = a;
    a = b;
    b = temp + b;
    // console.log(a);
    console.log(b);
  }

  // console.log(number, typeof number);
  document.getElementById("resultnumFib").style.background = "#7674BA";
  document.getElementById("resultnumFib").innerText = `Результат: ${i}`;
}
