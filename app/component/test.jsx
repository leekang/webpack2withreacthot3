class TestA{
    constructor (){
        this.a = 2;
    }
    
    test(){
        console.log(this.a)
    }
}
let testA = new TestA;
export  default testA;