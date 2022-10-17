let obj={
    value:10
}
let sum=function(a,b,c)
    {
        return this.value+a+b+c;
    }
    let arr=[1,2,3]
    console.log(sum.apply(obj,arr))