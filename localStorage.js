const name=document.getElementById('name');
const number=document.getElementById('mobileNumber');
const email=document.getElementById('email');
const form=document.getElementById('details');
form.addEventListener('submit',local)
let id=1;
function local(e)
{
    e.preventDefault();
    let userDtails={
        name:name.value,
        number:number.value,
        email:email.value

    }
    localStorage.setItem(id,JSON.stringify(userDtails))
    id++;
    
}