const details= document.getElementById('details')

const ul=document.querySelector('ul')

details.addEventListener('submit',store)
function store(e)
{
    e.preventDefault();
    const name=event.target.name.value
    const email=event.target.email.value
    let users={
        name,
        email
    }
    localStorage.setItem(users.email,JSON.stringify(users))
    showData(users);
    
}
window.addEventListener('DOMContentLoaded',()=>{
    const localStoragekeys=Object.keys(localStorage)
    const  localStorageObj=localStorage;
    for(var i=0;i<localStoragekeys.length;i++)
    {
        const key=localStoragekeys[i];
        const userDetailsString =localStorageObj[key];
        const userDetailsobj=JSON.parse(userDetailsString);
        showData(userDetailsobj)
    }
})

function showData(user)
{
    const parentNode=document.getElementById('listUsers');
    const childHTML=`<li> ${user.name} - ${user.email} <button>X</button>`
    parentNode.innerHTML=parentNode.innerHTML+childHTML
}


