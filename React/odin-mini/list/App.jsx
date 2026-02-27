import './App.css'
import './test'
import Test from './test'
function List(props){
  if(!props){
    return <div>Loading...</div>
  }
  if( props.animals.length == 0){
    return <div>No values inside list</div>
  }
  var list = props.animals.map(animal=><li key={animal}>{animal}</li>)
  return(
    <ul>
      {list}
    </ul>
  )
}
function App() {
  let animals =["lion","tiger","elephant","horse"];
  return (
    <>
    <List animals={animals}></List>
    <Test></Test>
    </>
  )
}

export default App
