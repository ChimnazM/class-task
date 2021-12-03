class calculator{
    constructor(num){
       this.num=num; 
    }
    plus(numtoadd){
        this.num+=numtoadd;
        return this;
    }
    minus(numtosub){
        this.num-=numtosub;
        return this;
    }
    mul(numtomult){
        this.num*=numtomult;
        return this;
    }
    div(numtodiv){
        this.num/=numtodiv;
        return this;
    }
   value(){
       return this.num
   }
  

    
}
var res=new calculator(50).plus(6).minus(30).mul(3).div(2);
console.log(res);
        
        
    