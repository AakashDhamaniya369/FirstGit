let obj={
    value:10
}
let sum=function(a,b,c)
    {
        return this.value+a+b+c;
    }
    let fun=sum.bind(obj)
    console.log(fun(1,2,3))
