
function myFunc(){
    
    // document.write(20+20+'\n');
    
    // console.log(20+20);
    
    // alert(20+20);

    // var a = prompt(20+20);
    // document.write(`\nPrompt Value : ${a}`);

    // var b = Math.ceil(Math.random()*10);
    // var c = Math.ceil(Math.random()*10);

    // console.log(`b : ${b}`);
    // console.log(`c : ${c}`);

    // var min = Math.min(b,c);
    // var max = Math.max(b,c);

    // console.log(`min : ${min}`);
    // console.log(`max : ${max}`);

    // var d = Math.random()*10;

    // console.log(d);
    // console.log(Math.round(d));


    var arr = ['mango', 'apple', 'orange', 'grapes', 'kiwi', 'lichi'];

    console.log(arr);
    console.log(`arr.length() : ${arr.length}`);
    console.log(`arr.toString() : ${arr.toString()}`);
    console.log(arr.join(' * '));

    for(let i =0; i<arr.length; i++){
        console.log(`arr element at ${i} : ${arr[i]}`);
    }

    var str = 'Hey There whatcha doing !!';

    var str_arr = str.split(' ');

    console.log(str_arr);

    var str_2 = '10+20';
    var str_2_arr = str_2.split(/(\+)/);
    console.log(str_2_arr);

    var i = 0;

    while(i<5){
        console.log('i'+ i);
        i++;
    }

    var j=5;

    do {
        console.log('j'+ j);
        j++;
    }
    while (j<5);


    for(let v = 0; v<10;v++){
        if(v%2!=0){
            continue;
        }
        else{
            console.log(v);
        }
    }

    for(let w=0; w<10;w++){
        if(w>5){
            break;
        }
        else{
            console.log(w);
        }
    }

}


function newFunc(){

    var date = new Date();

    console.log(date);
    console.log(date.getDay());
    console.log(date.getMonth());
    console.log(date.getFullYear());
    console.log(date.getHours());
    console.log(date.getDate());

    

    console.log(date.getUTCDate()+'/'+date.getMonth()+'/'+date.getFullYear());
    console.log(date.getHours()+':'+date.getMinutes()+':'+date.getSeconds());
}

function colorChange(){

    var bgcolor = ['red', 'green', 'yellow', 'tomato', 'bisque', 'lightgrey', 'grey', 'blue'];
    
    var clr = Math.round(Math.random()*bgcolor.length);
    console.log(clr);

    document.body.style.background = bgcolor[clr];

}



// Self Practise


function calculator(){

    var a = Number(window.prompt('Enter value of a : '));
    var op = window.prompt('+,-,*,/\nEnter the operator :');
    var b = Number(window.prompt('Enter value of b : '));
    let result = 0;

    if(op==='+'){
        result = a+b;
    }
    else if(op==='-'){
        result=a-b
    }
    else if(op==='*'){
        result=a*b
    }
    else if(op==='/'){
        result= `remainder : ${a%b}, quotient : ${a/b}`
    }
    else{
        result = 'Wrong Input operator please try again!!'
    }

    document.getElementById('math').innerHTML = result;
}


function calculator_2(){
    var a = Number(document.getElementById('a').value);
    var op = document.getElementById('op').value;
    var b = Number(document.getElementById('b').value);
    var result = 0;

    console.log(a,b,op);

    if(op==='+'){
        result = a+b;
    }
    else if(op==='-'){
        result=a-b
    }
    else if(op==='*'){
        result=a*b
    }
    else if(op==='/'){
        result= a/b
    }
    else{
        result = 'Wrong Input operator please try again!!'
    }

    document.getElementById('result').value = result;
}

// Section 4


function opFunc(){
    document.getElementById('oper').value = op;
}

function calculator_3(){

    var a_sec4 = document.getElementById('a_sec4');
    var b_sec4 = document.getElementById('b_sec4');
    
    var a = Number(a_sec4.value);
    var ope = op;
    var b = Number(b_sec4.value);
    var result;
    
    if(a !== 0 & b !== 0){
        if(ope === '+'){
            console.log('+')
            result = a+b;
        }
        else if(ope === '-'){
            console.log('-')
            result = a-b;
        }
        else if(ope === '*'){
            console.log('*')
            result = a*b;
        }
        else if(ope === '/'){
            console.log('/')
            result = a/b;
        }
        else if(ope === '^'){
            console.log('^')
            result = a**b;
        }
        else if(ope === 'CE'){
            console.log('CE')
            a=0;
            b=0;
            result=0;
            ope = "~";
        }
        else{
            result = 'Error!!'
        }
    }

    else{
        result = 'Error!!'
    }

    a_sec4.value = a;
    b_sec4.value = b;
    document.getElementById('oper').value = ope;
    document.getElementById('output').value = result;

}