class Student
{
    constructor(name,age)
    {
        this.n=name;
        this.a=age;
    }
    stu()
    {
        console.log("the name of the student is:",this.n);
        console.log("the age of the student is:",this.a);

    }
}
var stuobj=new Student('sakshi',21);
stuobj.stu();