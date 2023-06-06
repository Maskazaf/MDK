/*
№6
Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).*
*/
/*
const fioInput = document.getElementById('fio-input');

fioInput.addEventListener('blur', function() {
  const fio = fioInput.value.trim().toLowerCase().split(' ');

  const capitalizedFio = fio.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
  const formattedFio = capitalizedFio.join(' ');

  fioInput.value = formattedFio;
});
*/
/*
№7
Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.
*/
/*
const textInput = document.getElementById('text-input');

textInput.addEventListener('blur', function() {
  const text = textInput.value.trim();
  
  const words = text.split(' ');
  
  const wordCount = words.length;
	
  document.write(`Количество слов: ${wordCount}`);
});
*/
/*
№8
Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
*/
/*
const dateInput = document.getElementById('date-input');

dateInput.addEventListener('blur', function() {
  const date = dateInput.value.trim();

  const parts = date.split('.');

  const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;

  dateInput.value = formattedDate;
});
*/
/*
N9
Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).
*/
/*
function checkPalindrome() {
	const word = document.getElementById("word-input").value.toLowerCase();
	const reversed = word.split("").reverse().join("");
	if (word === reversed) {
	  document.getElementById("result").textContent = "Слово читается с начала и с конца одинаково";
	} else {
	  document.getElementById("result").textContent = "Слово НЕ читается с начала и с конца одинаково";
	}
  }
*/
/*
№10
Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
*/
/*
const input = document.getElementById("number-input");
input.addEventListener("blur", function() {
  const number = input.value;
  if (number.includes("3")) {
	document.getElementById("result").textContent = "Это число содержит внутри себя цифру 3";
  } else {
	document.getElementById("result").textContent = "Это число НЕ содержит внутри себя цифру 3";
  }
});
*/
/*
№11
Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
*/
/*
function numberParagraphs() {
	const paragraphs = document.getElementsByTagName("p");
	for (let i = 0; i < paragraphs.length; i++) {
	  paragraphs[i].textContent += " " + (i + 1);
	}
  }
*/
/*
№12
Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.
*/
/*
const links = document.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
    links[i].textContent += " (" + links[i].href + ")";
}
*/
/*
№13
Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).
*/
/*
function addArrowToLinks() {
    const links = document.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
      if (links[i].href.startsWith("http://")) {
        links[i].textContent += " \u2192";
      }
    }
}
*/
/*
№14
Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.
*/
/*
const paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener("click", function() {
        const number = parseFloat(this.textContent);
        this.textContent = number * number;
    });
}
*/
/*
№15
Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.
*/
/*
const dateInput = document.getElementById("date-input"); 
const resultElem = document.getElementById("result");
dateInput.addEventListener("blur", getDayOfWeek); 

function getDayOfWeek() {
  const dateString = dateInput.value; 
  const dateParts = dateString.split("."); 
  const dateObj = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); 

  const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const dayOfWeekIndex = dateObj.getDay(); 
  const dayOfWeekString = daysOfWeek[dayOfWeekIndex];

  resultElem.innerHTML = `День недели: ${dayOfWeekString}`;
}
*/
/*
№16
Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.
*/
/*
const numberInput = document.getElementById("number-input");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");

incrementBtn.addEventListener("click", incrementNumber);
decrementBtn.addEventListener("click", decrementNumber);

function incrementNumber() {
  const currentValue = Number(numberInput.value);
  const newValue = currentValue + 1;
  numberInput.value = newValue;
}

function decrementNumber() {
  const currentValue = Number(numberInput.value);
  const newValue = Math.max(currentValue - 1, 0);
  numberInput.value = newValue;
}
*/
/*
№17
Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.
*/
/*
const counterInput = document.getElementById('counter-input');
const para1 = document.getElementById('para1');
const para2 = document.getElementById('para2');
const para3 = document.getElementById('para3');

let count = 0;

para1.addEventListener('click', incrementCounter);
para2.addEventListener('click', incrementCounter);
para3.addEventListener('click', incrementCounter);

function incrementCounter() {
  count++;
  counterInput.value = count;
}
*/
/*
№18
На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста
*/
/*
const divs = document.querySelectorAll("div");

for (let i = 0; i < divs.length; i++) {
  const text = divs[i].textContent;
  const truncatedText = text.substring(0, 10) + "...";
  divs[i].textContent = truncatedText;
}
*/
/*
№19
Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.
*/
/*
const numberInput = document.getElementById("number-input");
    numberInput.addEventListener("blur", checkNumber);

    function checkNumber() {
      const number = parseInt(numberInput.value);
      if (number >= 1 && number <= 100) {
        numberInput.style.backgroundColor = "green";
      } else {
        numberInput.style.backgroundColor = "red";
      }
    }
*/
/*
№20
Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.
*/
/*
const input = document.getElementById('my-input');
  const generateBtn = document.getElementById('generate-btn');

  generateBtn.addEventListener('click', function() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    input.value = result; 
  });
  */
 /*
 №21
 Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.
 */
/*
function shuffle(str) {

const arr = str.split('');

for (let i = arr.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[arr[i], arr[j]] = [arr[j], arr[i]];
}
return arr.join('');
}
const input = document.getElementById('input');
const shuffleButton = document.getElementById('shuffle-button');

shuffleButton.addEventListener('click', () => {
const inputValue = input.value;
const shuffledValue = shuffle(inputValue);
input.value = shuffledValue;
});
*/
/*
№22
Дан инпут, кнопка и абзац. В инпут вводится температура в градусах Фаренгейта. По клику на кнопку выведите в абзац температуру в градусах Цельсия.
*/
/*
const fahrenheitInput = document.getElementById('fahrenheit');
const convertBtn = document.getElementById('convert-btn');
const resultElement = document.getElementById('result');

convertBtn.addEventListener('click', () => {
  const fahrenheit = parseFloat(fahrenheitInput.value);
  const celsius = (fahrenheit - 32) * 5 / 9;
  resultElement.textContent = `Температура по Цельсию: ${celsius.toFixed(2)}°C`;
});
*/
/*
№23
Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.
*/

