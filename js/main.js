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
logo.style.color = '#ffffff'
logo.style.fontWeight = 'bold'
logo.style.fontSize = '20px'
logo.textContent = 'Mazda94'
logo.style.textDecoration = 'none'


let menu = document.createElement('div')
menu.setAttributeNode(createAttr('navbar_menu', 'class'))

let ul = document.createElement('ul')
let label = ['JavaScript Quiz', 'BMI Calculator']
for (let i = 0; i < label.length; i++) {
    let li = document.createElement("li");
    let item = document.createElement('a')
    item.textContent = label[i]
    item.setAttribute('href', '#')
    item.style.color = '#fff'
    item.style.textDecoration = 'none'
    li.style.display = 'inline-block'
    li.style.marginLeft = '16px'
    li.appendChild(item)
    ul.appendChild(li);
}

menu.appendChild(ul)
divNav.appendChild(nav)
nav.appendChild(innerNav)
innerNav.append(logo, menu)

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

let javaScriptQuiz = [
    {
        id: 1,
        title: 'Beginner',
        img: './assets/beginner.svg'
    },
    {
        id: 2,
        title: 'Medium',
        img: './assets/medium.svg'
    },
    {
        id: 3,
        title: 'Expert',
        img: './assets/expert.svg'
    }
]

for (let i = 0; i < javaScriptQuiz.length; i++) {
    let item = document.createElement('div')
    item.style.display = 'inline-block'
    item.style.fontWeight = 'bold'
    item.style.margin = '24px'
    item.style.width = '20%'
    item.style.padding = '12px'
    item.style.border = '1px solid #ddd'
    item.style.paddingBottom = '24px'

    let img = document.createElement('img')
    img.src = javaScriptQuiz[i].img
    img.style.width = '100%'
    img.style.height = '200px'
    img.style.marginBottom = '24px'

    let title = document.createElement('h2')
    title.textContent = javaScriptQuiz[i]['title']

    let button = document.createElement('a')
    button.setAttribute('href', javaScriptQuiz[i].title.concat('.html'))
    button.style.background = '#ddd'
    button.style.paddingLeft = '24px'
    button.style.paddingRight = '24px'
    button.style.textDecoration = 'none'
    button.style.borderRadius = '8px'
    button.style.paddingTop = '8px'
    button.style.paddingBottom = '8px'
    button.innerHTML = 'Mulai'

    item.append(title, img, button)
    step.appendChild(item)
}

let title = document.createElement('h1')
title.textContent = 'JavaScript Quiz'
box.append(title, step)
body.append(divNav, box)

function createAttr(value, option) {
    let temp = document.createAttribute(option)
    temp.value = value
    console.log(temp)
    return temp
}