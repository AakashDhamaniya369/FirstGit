// currying by bind
// let multiply=function(x,y)
//         {
//             return x*y;
//         }
//         let multiplyBy2=multiply.bind(this,2)
//         console.log(multiplyBy2(2))
    
//curring by closer
let multiply=function(x)
        {
           return function b(y){
                console.log(x*y)
            }
            
        }
        let multiplyBy2 =multiply(2)
        multiplyBy2(3);