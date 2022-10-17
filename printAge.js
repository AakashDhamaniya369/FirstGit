var student ={
    age:20
}
var print=function()
{
    console.log(this.age);
    
}
var Age=print.bind(student);
Age();