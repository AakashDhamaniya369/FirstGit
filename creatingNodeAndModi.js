//adding HEllo before item Lister
var newDiv =document.createElement('div');
newDiv.className='hello'
var newDivText=document.createTextNode('HEllo');
newDiv.appendChild(newDivText);
var container =document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1)

//adding HEllo beafore item 1
var newDiv2=document.createElement('div');
newDiv2.className='hello2'
var newDivText2=document.createTextNode('HEllo');
newDiv2.appendChild(newDivText2);
  var container2=document.querySelector('.list-group');
 var item1=document.querySelector('.list-group li')
 container2.insertBefore(newDiv2,item1)
