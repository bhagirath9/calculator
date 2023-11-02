var string= " ";
var buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach( (button)=>{
    button.addEventListener('click', (f)=>{
        if(f.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(f.target.innerHTML == 'Ac'){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            console.log(f.target);
            string = string + f.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})

function myFunction(){
    document.getElementById("id2").innerHTML='bhagirath choudhary';
}


var address = "GT road , prayagraj";
myFun();
function myFun()
{
    document.getElementById("demo").innerHTML= address ;
}
    

