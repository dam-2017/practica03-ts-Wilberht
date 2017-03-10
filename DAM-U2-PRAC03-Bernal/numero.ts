export class Numero{
    private n1:number;
    private n2:number;
    constructor(num1 : number,num2 : number){
        this.n1 = num1;
        this.n2 = num2;
    }

    get getAdd():number{
        return this.n1 + this.n2;
    }

    get getSubstract():number{
        return this.n1 - this.n2;
    }

    get getFactorial():Array<number>{
        let array :Array<number> = [1,1];
        if((this.n1 == 0 || this.n1 == 1) && (this.n2 == 0 || this.n2 == 1)){
            return array;
        }
        for(let i = 2; i <= this.n1; i++)
            array[0] = array[0] * i;
        for(let j = 2; j <= this.n2; j++)
            array[1] = array[1] * j;   
        return array;
    }

    get getPrimo():Array<boolean>{
        let array : Array<boolean> = [true,true];
        let count : number = 0;
        for(let i = 1; i <= this.n1; i++){
            if(this.n1 % i == 0)
                count++;
        }
        if(count > 2)
            array[0] = false;
        count = 0;
        for(let j = 1; j <= this.n2; j++){
            if(this.n2 % j == 0)
                count++;
        }
        if(count > 2)
            array[1] = false;
        return array;
    }

    get getvalue1():number{
        return this.n1;
    }

    get getvalue2():number{
        return this.n2;
    }
}