let items=document.querySelectorAll('li')
items[1].style.color="green"
const oddItem=document.querySelectorAll("li:nth-child(odd)");

for(let i=0;i<oddItem.length;i++)
{
    oddItem[i].style.backgroundColor="green";
}