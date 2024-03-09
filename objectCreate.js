//1. Object Literals : 

let user ={
    name:'Vindesh Prasad',
    age:30,
    city:'Abad',
    state:'Gujarat' 
 };

 console.log(user.name) // Vindesh Prasad

//2. Constructor Functions : 
function Car(brand,model,price){
    this.brand=brand;
    this.model=model;
    this.price=price;
};
let c1 = new Car('BMW','500D','50000')
c1 = new Car('Audi','A100','49000')
console.log(c1.brand) // Audi

//3. class style : 
class Customer{
    constructor(name,product){
        this.name=name;
        this.product=product;
    }
    addToCart(){
        console.log(`${this.name} added ${this.product} to cart`);
    }
}
cust1 = new Customer("Vindesh","iPhone") 
console.log(cust1.addToCart()); //Vindesh added iPhone to cart
console.log(cust1.name); //Vindesh
console.log(cust1.product); //iPhone

//4. Object.create(): with prototype object

const EmpProt = {
    printInfo:function(){
        console.log(`Employee name is ${this.name}`);
    }
};
const e1 = Object.create(EmpProt);
e1.name="Vindesh";
e1.printInfo(); //Employee name is Vindesh

//5. Using Factory Functions : returns an Object.

function createDepart(deptName,HOD){
    return{
        deptName: deptName,
        HOD:HOD,
        getDepartName:function(){
            console.log(`Employee name is ${this.deptName} and HOD is ${this.HOD}`);
        }

    }
}
const dept1 = createDepart("Physics","V P Kori");
const dept2 = createDepart("Maths", "S P KORI");
dept1.getDepartName(); //Employee name is Physics and HOD is V P Kori
dept2.getDepartName(); //Employee name is Maths and HOD is S P KORI
