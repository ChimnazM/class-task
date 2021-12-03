
class calculator{
   constructor(num1,num2,num3,num4,num5){
       this.num=num1;
       this.sum=num2;
       this.sub=num3;
       this.mul=num4;
       this.div=num5;
   }
   Sum(){
       this.num=this.num+this.sum;
       return this.num;
    }
    Sub(){
        this.num=this.Sum();
        this.num=this.num-this.sub;
        return this.num;
    }
    Mul(){
        this.num=this.Sub();
        this.num=this.num*this.mul;
        return this.num;
    }
    Div() {
        this.num=this.Mul();
        this.num=this.num/this.div;
        return this.num;
    }
    



   
}
var result=new calculator(50,6,30,3,2);
console.log(result.Div());
        
        
    