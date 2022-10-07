var form=document.getElementById('addForm')
var itemslist=document.getElementById('items')


form.addEventListener('submit',additems)
itemslist.addEventListener('click',removeItem)
// add element
function additems(e)
{
e.preventDefault();
//get inlut value
var newItem =document.getElementById('item').value;
// create new li element
var li= document.createElement('li');
// add class
li.className='list-group-item';
// add text node whith iput value
li.appendChild(document.createTextNode(newItem))

// create del button element 
var editbtn =document.createElement('button');
// add classes to del button
editbtn.className='edit float-right '
editbtn.appendChild(document.createTextNode('edit'));
li.appendChild(editbtn);
// create del button element 
var deleteBtn =document.createElement('button');
// add classes to del button
deleteBtn.className='btn btn-danger btn-sm float-right delete'
deleteBtn.appendChild(document.createTextNode('x'));
li.appendChild(deleteBtn);

itemslist.appendChild(li);

}
// remove item
function removeItem(e){
   if(e.target.classList.contains('delete')){
   if(confirm('are you sure?'))
   {
    var li=e.target.parentElement;
    itemslist.removeChild(li)
   }
}}