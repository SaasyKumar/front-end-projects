import { Component } from "react";
import Count from './Count'
class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            todoList : ['test1','test2'],
            currentEdit: null,
            currentText: ""
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.setCurrentEdit = this.setCurrentEdit.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.resubmit = this.resubmit.bind(this);
    }
    deleteItem(index,ev) {
        this.setState((state)=>{
            const temp = state.todoList;
            temp.splice(index,1);
            return{
                todoList : [...temp]
            }
        });
    }
    setCurrentEdit(index){
        this.setState({
            currentEdit : index
        })
    }
    changeValue(ev){
        this.setState({
            currentText: ev.target.value
        });
    }
    resubmit(index){
        this.setState((state)=>{
            let temp = state.todoList;
            temp[index] = state.currentText;
            return{
                todoList : [...temp],
                currentText: "",
                currentEdit: null
            }
        });
    }
    render(){
        return(
            <>
                <Count count={this.state.todoList.length}></Count>
                {this.state.todoList.map((item,index)=>{
                    if(this.state.currentEdit == index){
                        return <div key={index}><input defaultValue={item} onChange={this.changeValue}></input><button onClick={this.resubmit.bind(null,index)}>RESUBMIT</button></div>
                    }
                    return <div key={index}><div>{item}</div><button onClick={this.setCurrentEdit.bind(null,index)}>EDIT</button><button onClick={this.deleteItem.bind(null,index)}>DELETE</button></div>
                })}
            </>
        )
    }
}
export default App;