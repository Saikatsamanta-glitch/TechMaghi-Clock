// DOM---> document object model
// document
console.log(document);

// Objects are nothing but data in pair=>  key: value
obj = {
    name: "Albin",
    role: "SD2",
    arr: [12, 23, "animal", "hey", 23, 54]
}
console.log(obj.arr[2]);

// Methods to access elements 3

// 1. Tagname
// head = document.getElementsByTagName('h1')[0];
// head.innerText = 'Welcome to Awesome Javascript 🔥'

// 2. class
// head = document.getElementsByClassName('heading')[0];
// head.innerText = 'Welcome to Awesome Javascript 👋'

// 3. id
// head = document.getElementById('head');
// head.innerText = 'Welcome to Awesome Javascript 💪'

// Today our final project: working Clock

// Date and time
console.log(new Date().toLocaleTimeString());



setInterval(function () {
    // clock
    t = document.getElementById('time');
    t.innerText = new Date().toLocaleTimeString()
}, 1000)

body = document.body;



btn = document.getElementById('btn')
state  = true
function theme(){
    state = !state
    // if else
    if(!state){
        
        btn.classList.add('btn_color')
        body.classList.add('dark')
        btn.innerText = 'Day ☀'
    }else{
        btn.classList.remove('btn_color')
        body.classList.remove('dark')
        btn.innerText = 'Night 🌙'
    }
    
    console.log(state);
}