import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

var root = ReactDOM.createRoot(document.getElementById('root'));

function Calculator(){

    var [disVal, setDisVal] = useState({
        current : '0',
        total : '0',
        isInitial : true,
        preOp : '~'
    });



    function handleNum(value){

        var newVal = value; // getting the initial value

        // the below conditional block will run from the second time,
        // the value pressed.
        
        if(disVal.current.length<12){
            if(!disVal.isInitial){
                newVal = disVal.current + value;
            }
        }
        else{
            alert('Number can not exceed 12 digits!!');
            newVal = disVal.current;
        }
        

            
            // this code block will run if isInitial value is false
            // we are using it to uupdate the display value 
            //  while replacing the initial value, i.e. 0
        
        // concating the pressed value to the current value

        // here we are updating the JSON object 
        // current value of disVal to newVal, i.e. the concated value
        // total value pf disVal to disVal.total, same as it was
        setDisVal({current : newVal, total : disVal.total, isInitial: false, preOp: disVal.preOp});

    }

    function handleOp(value){

        let total = calculation();

        console.log(`handleOp : ${value}`);
        console.log(disVal);
        setDisVal({current: String(total), total: String(total), isInitial:  true, preOp: value});
        console.log(disVal);

    }

    function calculation(){

        var total = Number(disVal.total);
        var opVal = String(disVal['preOp']);

        if(opVal==='+'){
            total += Number(disVal.current);
        }
        else if(opVal==='-'){
            total -= Number(disVal.current);
        }
        else if(opVal==='/'){
            total /= Number(disVal.current);
        }
        else if(opVal==='*'){
            total *= Number(disVal.current);
        }
        else{
            total = Number(disVal.current);
        }

        return total;
    }

    function handleC(){
        setDisVal({
            current : '0',
            total : '0',
            isInitial : true,
            preOp: '~'
        });
    }

    function Button(props){
        return (
            <button className={props.className} onClick={()=>{props.onClick(props.value)}}>{props.value}</button>
        )
    }

    // function display(){

    //     const displayVal = disVal.current;

    //     if(displayVal.length<=12){
    //         return disVal.current;
    //     }
        
    // }

    return (
        <>
        <div id="head">
        <h1>Calci</h1>
        <h4>The Calculator App</h4>
        </div>
        <div id='calculator'>
        <div id='containerDiv'>{disVal.current}</div>
        <div id="opDiv">{disVal['preOp']}</div>
        <div id='btnDiv'>
        <Button className='num' onClick={handleNum} value='7'/>
        <Button className='num' onClick={handleNum} value='8'/>
        <Button className='num' onClick={handleNum} value='9'/>
        <Button className='operator' onClick={handleOp} value='/'/>

        <Button className='num' onClick={handleNum} value='4'/>
        <Button className='num' onClick={handleNum} value='5'/>
        <Button className='num' onClick={handleNum} value='6'/>
        <Button className='operator' onClick={handleOp} value='*'/>
        
        <Button className='num' onClick={handleNum} value='1'/>
        <Button className='num' onClick={handleNum} value='2'/>
        <Button className='num' onClick={handleNum} value='3'/>
        <Button className='operator' onClick={handleOp} value='-'/>
        
        <Button className='num' onClick={handleC} value='C'/>
        <Button className='num' onClick={handleNum} value='0'/>
        <Button className='num' onClick={handleOp} value='='/>
        <Button className='operator' onClick={handleOp} value='+'/>
        </div>
        </div>
        </>
    )
}

root.render(<Calculator/>);
