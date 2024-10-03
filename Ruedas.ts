export class Ruedas{
    private ruedas:number;

    constructor (ruedas:number){
        this.ruedas=ruedas;
    }
    getRuedas():number{
        return this.ruedas;
    }
    setRuedas(ruedas:number):void{
        this.ruedas=ruedas;
    }
}