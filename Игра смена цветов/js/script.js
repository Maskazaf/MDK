let field = document.querySelector('#field');
let counter = document.querySelector('#counter')
let colors = ['red', 'green', 'blue']

for (let i = 0; i < 3; i++) {
    let tr = document.createElement('tr');
    field.appendChild(tr);;
    for (let j = 0; j < 3; j++) {
        let td = document.createElement('td')
        tr.appendChild(td)
        td.classList.add(colors[getRandomInt(0, 2)]);
    }
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getNextElem(arr, elem) {
    for (let i = 0; i < arr.length; i++) {
        if (elem.getAttribute('class') == arr[i]) {
            if (arr[i] !== 'blue') {
                return arr[i + 1]
            } else {
                return arr[0]
            }
        }
    }
}

let tds = field.querySelectorAll('td')

for (let td of tds) {
    td.addEventListener('click', function () {
        this.setAttribute('class', getNextElem(colors, this))
    })
}

let count = 0;

field.addEventListener('click', (event) => {
    let target = event.target;
    if (target.tagName == 'TD') {
        count++;
        let arr = []
        for (let i = 0; i < tds.length; i++) {
        let elem = tds[i].getAttribute('class');
        
        arr.push(elem)
        }
        let dublicates = arr.filter((number, index, numbers) => {
            return numbers.indexOf(number) !== index
        })
        if (dublicates.length == 8) {
            alert('Победа, победа вместо обеда)')
        }
    }
    counter.textContent = count;
})

