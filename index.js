const dob = document.querySelector("#dob");
const num = document.querySelector("#num");
const check = document.querySelector("#check");
const result=document.querySelector("#result");


function sumOfDob(dateOfBirth){
    dateOfBirth=dateOfBirth.replaceAll("-","");
 let sumD=0;
for(let i=0 ; i<dateOfBirth.length ; i++)
{sumD = sumD + Number(dateOfBirth.charAt(i));}
return sumD;
}



function equalValues(sumD,num){
    if(sumD%num=== 0){result.innerText="Your Birthday is lucky";}
    else{result.innerText="Your Birthday is unlucky";}
    }






function isBirthDayLucky(){
const dateOfBirth=dob.value;
const sumD=sumOfDob(dateOfBirth);
equalValues(sumD,num.value);

}


check.addEventListener("click", isBirthDayLucky)

