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
    // localStorage.setItem(users.email,JSON.stringify(users))
    //store data to server
    axios.post('https://crudcrud.com/api/94f8282046ad46ed8ff412638d66e29b/appointment',users
        ).then(res=>showData(res.data)).catch(err=>console.log(err))
    
    
}

window.addEventListener('DOMContentLoaded',()=>{
    // const localStoragekeys=Object.keys(localStorage)
    // const  localStorageObj=localStorage;
    // for(var i=0;i<localStoragekeys.length;i++)
    // {
    //     const key=localStoragekeys[i];
    //     const userDetailsString =localStorageObj[key];
    //     const userDetailsobj=JSON.parse(userDetailsString);
    //     showData(userDetailsobj)
    // }
    // show data from crud crud
    const crudObj=axios.get('https://crudcrud.com/api/94f8282046ad46ed8ff412638d66e29b/appointment')
    crudObj.then(res=>{
        for(let i=0;i<res.data.length;i++)
        {
            showData(res.data[i]);
        }
    }).catch(err=>console.log(err))
    
    //  for(var i=0;i<crudKey.length;i++)
    //     {
    //     const key=crudKey[i];
    //     const userDetailsString =crudObj[key];
    //     const userDetailsobj=JSON.parse(userDetailsString);
    //     console.log("hello")
        
    //  }b
})

function showData(user)
{
    const parentNode=document.getElementById('listUsers');
    
    const childHTML=`<li id=${user._id}> ${user.name} - ${user.email}
    <button onclick=deleteuser('${user._id}')>X</button>
    <button onclick=editUser('${user.email}','${user.name}','${user._id}')>✎</button>
    </li>`
    parentNode.innerHTML=parentNode.innerHTML+childHTML
    //for clear inpusts
    document.getElementById('email').value=""
    document.getElementById('name').value="";
}
function deleteuser(userId){
axios.delete(`https://crudcrud.com/api/94f8282046ad46ed8ff412638d66e29b/appointment/${userId}`).then(res=>{
    removeOnScreem(userId)
})
    
}

function removeOnScreem(emailId)
{
    const parentNode=document.getElementById('listUsers')
    const childNode=document.getElementById(emailId)
    parentNode.removeChild(childNode)

}
function editUser(emailId,name,userId)
{
    document.getElementById('email').value=emailId
    document.getElementById('name').value=name;
    //to ramove wrong details
    deleteuser(userId)
    
}