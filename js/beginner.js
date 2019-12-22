let body = document.body;
body.style.margin = 0

let divNav = document.createElement('div')
divNav.setAttributeNode(createAttr('navbar', 'class'))
divNav.style.backgroundColor = '#6C63FF'
divNav.style.zIndex = 100
divNav.style.width = '100%'

let nav = document.createElement('nav')
nav.setAttributeNode(createAttr('container', 'class'))
nav.style.width = '88%'
nav.style.margin = '0 auto'
nav.style.position = 'relative'

let innerNav = document.createElement('div')
innerNav.setAttributeNode(createAttr('navbar_inner', 'class'))
innerNav.style.display = 'flex';
innerNav.style.justifyContent = 'space-between';
innerNav.style.height = '60px';
innerNav.style.alignItems = 'center';

let logo = document.createElement('a')
logo.setAttributeNode(createAttr('logo', 'class'))
logo.setAttribute('href', 'index.html')
let back = document.createElement('img')
back.src = './assets/back.svg'
back.style.width = '36px'
back.style.height = '36px'
logo.appendChild(back)

divNav.appendChild(nav)
nav.appendChild(innerNav)
innerNav.append(logo)

let box = document.createElement('div')
box.setAttributeNode(createAttr('container', 'class'))
box.style.width = '88%'
box.style.margin = '0 auto'
box.style.position = 'relative'

let step = document.createElement('div')
step.setAttributeNode(createAttr('step', 'class'))
step.style.padding = '16px 0'
step.style.textAlign = 'center'
step.style.width = '100%'
step.style.borderTop = '1px solid #eee'
step.style.overflow = 'auto'

let quizForm = document.createElement('form')
quizForm.setAttribute('id', 'quiz_container')

step.appendChild(quizForm)

for (index in questions) {
    let number = parseInt(index) + 1
    let quizContainer = document.createElement('div')
    quizContainer.style.display = 'inline-block';
    quizContainer.style.fontWeight = 'bold';
    quizContainer.style.marginLeft = '4px';
    quizContainer.style.marginRight = '4px';
    quizContainer.style.marginBottom = '48px';
    quizContainer.style.width = '30%';
    quizContainer.style.verticalAlign = 'top'
    quizContainer.style.padding = '12px';
    quizContainer.style.border = '1px solid #ddd'

    let question = document.createElement('p')
    question.style.textAlign = 'left'
    question.innerHTML = number + '. ' + questions[index]['question']
    quizContainer.appendChild(question)

    if (questions[index]['img'] != '') {
        let img = document.createElement('img')
        img.src = questions[index]['img']
        img.style.width = '100%'
        img.style.height = 'auto'
        quizContainer.appendChild(img)
    }

    for (let optionIndex in questions[index]['choice']) {
        console.log(optionIndex)
        var label = document.createElement("label");
        label.style.display = 'block'
        label.style.textAlign = 'left'
        quizContainer.appendChild(label);

        var option = document.createElement("input");
        option.type = "radio";
        option.value = optionIndex;
        option.required = true;
        option.classList.add('option')

        option.name = "quiz-" + number;
        label.appendChild(option);

        var otext = document.createTextNode(questions[index]['choice'][optionIndex]);
        label.appendChild(otext);
    }
    quizForm.appendChild(quizContainer)
}

let submit = document.createElement('input')
submit.type = 'submit'
submit.value = 'Kumpulkan'.toUpperCase()
submit.style.fontWeight = 'bold'
submit.style.background = 'lightblue'
submit.style.borderRadius = '8px'
submit.style.outline = 'none'
submit.style.display = 'block'
submit.style.paddingLeft = '48px'
submit.style.paddingRight = '48px'
submit.style.paddingTop = '12px'
submit.style.paddingBottom = '12px'
submit.style.marginTop = '24px'

quizForm.appendChild(submit)
quizForm.addEventListener('submit', (quizForm) => {
    quizForm.preventDefault();
    quizForm.stopPropagation();
    var selected = document.querySelectorAll(".option:checked");
    var score = 0;
    for (var index in questions) {
        // console.log(selected[index].value, questions[index]['a'])
        if (selected[index].value == questions[index]['answer']) {
            score++;
        }
    }
    var total = selected.length;
    var percent = score / total;

    var html = "<h1>";
    if (percent >= 0.7) {
        html += "WELL DONE!";
    } else if (percent >= 0.4) {
        html += "NOT BAD!";
    } else {
        html += "TRY HARDER!";
    }
    html += "</h1>";
    html += "<div>You scored " + score + " out of " + total + ".</div>";
    document.getElementById("quiz_container").innerHTML = html;
})
step.appendChild(quizForm)

let title = document.createElement('h1')
title.textContent = 'JavaScript Beginner'
box.append(title, step)
body.append(divNav, box)


function createAttr(value, option) {
    let temp = document.createAttribute(option)
    temp.value = value
    console.log(temp)
    return temp
}
