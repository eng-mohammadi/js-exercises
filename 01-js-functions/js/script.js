function evenOdd() {
  const input = document.getElementById("input1");
  const num = Number(input.value);
  if (input.value === "") {
    window.alert("لطفاً یک عدد وارد کنید");
    return;
  }
  if (num % 2 === 0) {
    window.alert("عدد وارد شده زوج است");
  } else {
    window.alert("عدد وارد شده فرد است");
  }
}

function sum() {
  const input = document.getElementById("input2");
  const num = Number(input.value);
  let sum = 0;
  if (input.value === "") {
    window.alert("لطفاً یک عدد وارد کنید");
    return;
  }
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  window.alert("جمع عدد وارد شده بین 0 تا  " + num + " ، " + sum + " است ");
}

function drawTriangle() {
  const input = document.getElementById("input3");
  const num = Number(input.value);
  if (input.value === "") {
    window.alert("لطفاً یک عدد وارد کنید");
    return;
  }
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      document.write("*");
    }
    document.write("<br/>");
  }
}

function countNonDivisibleBy3Or7() {
  let count = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 3 !== 0 && i % 7 !== 0) {
      count++;
    }
  }
  window.alert("تعداد اعدادی که بر ۳ یا ۷ بخش‌پذیر نیستند: " + count);
}
