class Student{
    static count=0;
    constructor(name,age,phone,marks,){
        this.name=name;
        this.age=age;
        this.phone=phone;
        this.marks=marks;
        Student.countStudent();
    }
    static countStudent(){
       return(Student.count++)
    }
    getStudent()
    {
        console.log(`Name=${this.name}`)
        console.log(`Age=${this.age}`)
        console.log(`PhoneNumber=${this.phone}`)
        console.log(`Board marks=${this.marks}`)
    }
    eligible()
    {
        if(this.marks>40)
        {
            console.log(`${this.name} is eligible for collage`)
        }
        else{
            console.log(`${this.name} not eligible for collage`)
        }

    }
    setPlaceMent(minuMum)
    {
        return (age)=>{
            if(this.marks>minuMum&&this.age>age)
            {
                console.log("you are eligible")
            }
            else{
                console.log("you not eligible")
            }
        }
    }
}
let rahul= new Student('rahul',15,8800556688,80);
let aakash= new Student('aakash',26,880055656,80);
let sauarbh= new Student('sauarbh',26,880055665,24);
let neel= new Student('neel',19,8800556682,80);
let raghav= new Student('raghav',20,8800556688,100);
// rahul.getStudent()
 rahul.eligible()
 aakash.eligible()
 sauarbh.eligible()
 neel.eligible()
 raghav.eligible()
console.log(Student.countStudent())
rahul.setPlaceMent(40)(17)

