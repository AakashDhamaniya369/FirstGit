
const posts= [
];
function getPost()
{ 
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`;
            
        });
        
        document.getElementById('ul').innerHTML=output
        
    },1000)
    
}
function createPost(post){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        posts.push(post);
        const error=false;
        if(!error)
        {
            resolve();
        }
        else{
            reject('somthing went wrong')
        }
    },1000)
   })
}
createPost({title:'post1',post:'this is post 1 body'})
createPost({title:'post2',post:'this is post 2 body'})
createPost({title:'post3',body:'this is post 3 body'})
createPost({title:'post4',body:'this is post 3 body'}).then(()=>{
    getPost()
    deletPost().then((deletElement)=>{
        getPost()
        deletPost().then(()=>{
            getPost()
            deletPost().then(()=>{
                getPost()
                deletPost().then(()=>{
                    getPost()
                    deletPost().catch((err)=>{
                        console.log('inside catch block',err)
                    })
                })
            })
        })
    })
}).catch(err=>console.log(err))
function deletPost()
    {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(posts.length>0)
                {
                   let lastElement= posts.pop();
                   resolve(lastElement);
                }
                else{
                    reject("Array is empty now")
                }

            },1000)
        })
    }