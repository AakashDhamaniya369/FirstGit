//Treversing the dom
let itemList =document.querySelector('#items')
//parantNOde
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor="grey"
// console.log(itemList.parentNode.parentNode.parentNode)
//parentElement
// console.log(itemList.parentElement)

//childNodes
// console.log(itemList.childNodes);
  // createElement 
  //crreate a div
  var newDiv= document.createElement('div');
  console.log(newDiv)
  newDiv.className='hello';
  console.log(newDiv)
  // crateing text node
  var newDivText= document.createTextNode('hello');
  //add text to div
  newDiv.appendChild(newDivText);
  var container =document.querySelector('header .container')
  var h1 =document.querySelector('header  h1');
    container.insertBefore(newDiv,h1)