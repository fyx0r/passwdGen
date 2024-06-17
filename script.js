
document.getElementById('copyButton').addEventListener('click', function() {
    const button = document.getElementById('copyButton');
    const textToCopy = document.getElementById('passwordOutput').value;

    navigator.clipboard.writeText(textToCopy).catch(function(err) {
    });

    button.style.backgroundColor = 'purple';

    setTimeout(function() {
        button.style.backgroundColor = 'white';
    }, 20); 
});

// ------------Generate Password button working----------------

let genPswd = document.querySelector('#generateButton');

genPswd.addEventListener('click',function(){

    let y = document.getElementById('sliderValue');
    let z = parseInt(y.innerText);
    

    let ps = document.getElementById('passwordOutput');
    ps.value=genPassword(z,checked());
    const psValue = ps.value;
    

    let indColor1 = document.querySelector('.strength-indicator');

    if ((psValue)){
        if (checked().length <=2 || z<8)
            indColor1.style.backgroundColor='orangered';
        else 
            indColor1.style.backgroundColor= "#90EE90";
        
    }else{
        indColor1.style.backgroundColor= "#a6aba3";
    }
    }
    )

// ---------------------------


// -----------------change slider value--------------

let pswdLen = document.getElementById('passwordLength');

pswdLen.addEventListener('input',function(x){
    y = x.target.value;
    d = document.getElementById('sliderValue');
    d.innerHTML=y
    
})

// -------------------------------------------

// change indicator color


function RandomNum() {
    return Math.trunc(Math.random()*10)
}

function RandomStrLower(){
    return String.fromCharCode((Math.trunc(Math.random()*26)+1)+96);
}

function RandomStrUpper(){
    return String.fromCharCode((Math.trunc(Math.random()*26)+1)+64);
}

function RandomSymbol() {
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?"; // Define your symbol set
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function returnOpt(inc){
    let opt = [];
    for (let i of inc){
        if (i=='uppercase'){
            opt.push(RandomStrUpper())
        }else if (i=='lowercase'){
            opt.push(RandomStrLower())
        }else if (i=='numbers'){
            opt.push(RandomNum())
        }else if (i=='symbols'){
            opt.push(RandomSymbol())
        }; 
    }; 
    return opt;
}
function genPassword(n,inc){
    const psswd = [];    
    for (let i = 0 ; i < n ; i++){
        let opt = returnOpt(inc)
        psswd.push(opt[Math.trunc(Math.random()*opt.length)]);
    };

    return psswd.join('');
};

function checked(){
    let boxes = [];
    document.querySelectorAll('.checkbox').forEach(function(el){
        let obj = el.getAttribute('id');
        if (el.checked){  
            boxes.push(obj);
        }   
    });
    return boxes;
};

