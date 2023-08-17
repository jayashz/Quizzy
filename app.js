let answer;
function level(){
    
    var selectBox = document.getElementById("label");
    var selectedValue = selectBox.value;
    getter(selectedValue);
}

async function getQuestions(level){

    const url = 'https://food-quiz.p.rapidapi.com/questions/'+level;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2fa55f152fmsh4cd6e7e4559009dp1eaba4jsna001eefec566',
		'X-RapidAPI-Host': 'food-quiz.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    let random=Math.floor(Math.random()*result.length);
    let question = result[random].question;
    let a1=result[random].option1;
    let a2=result[random].option2;
    let a3=result[random].option3;
    answer=result[random].answer;
    return ([question,a1,a2,a3]);
} catch (error) {

	console.error(error);
}
}

let array=[];
const question=document.getElementById('qno');
const option1=document.getElementById('op1');
const option2=document.getElementById('op2');
const option3=document.getElementById('op3');

window.onload=()=>{
    level();
    // getter();
}
async function getter(level){
    array= await getQuestions(level);
    question.innerHTML=array[0];
    option1.innerText=array[1];
    option2.innerHTML=array[2];
    option3.innerHTML=array[3];
    }
const op=document.querySelectorAll('.op');

function submitter(){
    //this checks for the selected options and gets the value 

    for(const f of op){
        if (f.checked){
            checker(f.value);
        }
    }
}
const result=document.getElementById('result');


function checker(ans){
    if(ans==answer){
        result.innerText='Correct answer!!!!';
    }
    else{
        result.innerHTML='Wrong answer!!!!';

    }
}

function next(){
    level();
}


