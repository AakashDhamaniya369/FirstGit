let obj={
    value:10
}
let sum=function(a)
    {
        return this.value+a;
    }
    console.log(sum.call(obj,5))