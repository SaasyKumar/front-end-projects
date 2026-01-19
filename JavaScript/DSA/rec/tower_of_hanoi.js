class Hanoi{
    static moves = 0;
    constructor(n){
        this.tower =[];
        this.top_index = -1;
        if( n ){
            this.top_index = n-1;
            for(let i=n;i>0;i--){
                this.tower.push(i);
            }
        }
    }
    pop(){
        if( this.tower.length < 0){
            console.error("no elements in stack to pop");
            return;
        }
        this.top_index--;
        return this.tower.pop();
    }
    push(value){
        if( this.top_index > -1 && value >= this.tower[this.top_index]){
            console.error("bigger than or equal to the top element. Top element: "+this.getTopValue());
            return;
        }
        this.top_index++;
        Hanoi.moves++;
        return this.tower.push(value);
    }
    getTopValue(){
        return this.tower[this.top_index];
    }
    get length(){
        return this.tower.length;
    }
    get topElement(){
        return this.tower[this.top_index];
    }
    get empty(){
        return this.tower.length == 0;
    }
}

var n = 3;
var first_tower = new Hanoi(n);
var second_tower = new Hanoi();
var answer_tower = new Hanoi();
    console.log(first_tower);
    console.log(second_tower);
    console.log(answer_tower);
    console.log(Hanoi.moves);

function Rearrange(){
    second_tower.push(first_tower.pop());
    return;
    if( !first_tower.empty && ( second_tower.empty || first_tower.topElement < second_tower.topElement) ){
        second_tower.push(first_tower.pop());
    } else if(!second_tower.empty && ( first_tower.empty || second_tower.topElement < first_tower.topElement) ){
        first_tower.push(second_tower.pop());
    }
        return;
    if( second_tower.length == 1 && second_tower.topElement == answer_tower.topElement -1 ){
        answer_tower.push(second_tower.pop());
        return;
    } else if(first_tower.length == 1 && first_tower.topElement == answer_tower.topElement -1){
        answer_tower.push(first_tower.pop());
        return;
    } else{
        if( !first_tower.empty && ( second_tower.empty || first_tower.topElement < second_tower.topElement) ){
            second_tower.push(first_tower.pop());
        } else if(!second_tower.empty && ( first_tower.empty || second_tower.topElement < first_tower.topElement) ){
            first_tower.push(second_tower.pop());
        }
    }
};

function solveHanoi(){
    if( answer_tower.length == n){
        console.log(first_tower);
        console.log(second_tower);
        console.log(answer_tower);
        console.log(Hanoi.moves);
        return;
    }
    if( first_tower.length == 1 && ( answer_tower.empty || first_tower.topElement == answer_tower.topElement - 1) ){
        answer_tower.push(first_tower.pop());
        solveHanoi();
    }else{
        Rearrange();
        solveHanoi();
    }
};
solveHanoi();
