class Demo {
    myVar : string;

    constructor(myVar:string){
        this.myVar =myVar;
    }
    getmyVar():string{
        return this.myVar;
    }
    setmyVar(str:string):void{
        this.myVar = str;
    }

}

const demo1 = new Demo("hii")
const res = demo1.getmyVar();
console.log(res);

//
class Demo2 {
  private  id:number;
  private Name : string;
  private  address : string;
    tele: number;

    constructor(id:number,Name:string,address:string,tele:number){
        this.id =id;
        this.Name = Name;
        this.address = address;
        this.tele = tele;
    }
    getid():number{
        return this.id;
    }
    setid(num:number):void{
        this.id = num;
    }

      getName():string{
        return this.Name;
    }
    setName(str:string):void{
        this.Name = str;
    }
     getaddress():string{
        return this.address;
    }
    setaddress(str:string):void{
        this.address = str;
    }
     gettele():number{
        return this.tele;
    }
    settele(num:number):void{
        this.tele = num;
    }

}

const demo = new Demo2(123,"sachini","matara",123456);
const getid = demo.getid();
const getName = demo.getName();
const getaddress = demo.getaddress();
const gettele = demo.gettele();

console.log(getid,getName,getaddress,gettele);
demo.settele(12345);
console.log(getid);


//============ interface ==============//
interface Icustomer{
    id:number;
    name:string;
}

class SimpleCustomer implements Icustomer{
         id:number;
         name:string;

         
}

class VIPCustomer implements Icustomer{
         id:number;
         name:string;
         membershipNumber:number;

  
}

//=============== inheritence ==================//
// inheriteuna class eke withryi eke acc athule withrk krnn pulunw ek protect hinda
class Parent {
   protected myMethod(str:string){
        console.log(str);
    }

    constructor(massage:string){
        console.log(massage,'from psrent class');
    }
}

class Chiled extends Parent{
    constructor(massage:string){
        super(massage);
        this.myMethod("hellow");
    }
}

const Chiled1 = new Chiled('hellow world');
//Chiled1.myMethod('hellow');
//Chiled1.id;