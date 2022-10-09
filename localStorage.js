const name=document.getElementById('name');
const number=document.getElementById('mobileNumber');
const email=document.getElementById('email');
const form=document.getElementById('details');
form.addEventListener('submit',local)
function local(e)
{
    e.preventDefault();
    localStorage.setItem('name',name.value)
    localStorage.setItem('mobileNumber',number.value)
    localStorage.setItem('email',email.value)
    
}