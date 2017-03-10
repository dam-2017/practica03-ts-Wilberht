export class Cadena{
    private cad: string;
    constructor(cadena:string){
        this.cad = cadena;
    }

    get getPalindromo():boolean{
        if(this.cad == '')
            return false;
        let t :string = "";
        let temp :string[] = this.cad.split("");
        for(let w in temp){
            if(temp[w] != " ")
                t = t + temp[w];
        }
        
        let a : number = 0, b : number = t.length - 1;
        let size : number = parseInt((t.length / 2).toFixed(0));

        if(t.length == 1)
            return true;

        for(;a < size; a++, b-- ){
            if(t[a] != t[b])
                return false;
        }
        return true;
    }

    get getLetters():Array<number>{
        let data : Array<number> = [0,0,0,0,0];    
        let text : string[] = this.cad.trim().split("");    
        //let size : number = this.cad.length;        
        for(let a in text){
            if(text[a] == "a")
                data[0] = data[0] + 1;
            else if(text[a] == "e")
                data[1] = data[1] + 1;
            else if(text[a] == "i")
                data[2] = data[2] + 1;
            else if(text[a] == "o")
                data[3] = data[3] + 1;
            else if(text[a] == "u")
                data[4] = data[4] + 1;
        }
        /*for(let i = 0; i < size; i++){
            if(this.cad.charAt(i) in vowels){
                count++;
            }
        }*/
        return data;
    }

    get getCountLetters():number{
        return this.cad.trim().length;
    }

    get getCountWords():number{
        return this.cad.split(" ").length;
    }

    get getText():string{
        return this.cad;
    }
}