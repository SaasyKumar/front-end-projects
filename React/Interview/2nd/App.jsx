import { useState } from 'react'
import './App.css'
function getRandomRadius(){
  return Math.floor(300*Math.random()) + 100;
};
function isTouching(param1,param2){
  // d - distance between center 
  let x1 = param1.x + param1.radius;
  let x2 = param2.x + param2.radius;
  let y1 = param1.y + param1.radius;
  let y2 = param2.y + param2.radius;
  let d = Math.sqrt((x1 - x2)**2+ (y1-y2)**2);
  let sum_of_radius = param1.radius + param2.radius;
  console.log(d,sum_of_radius);
  if( d <= sum_of_radius  ){
    return true;
  }
  return false;
};

function App() {
  const [circlesProps,setCirclesProps] = useState([]);
  let circles =[];
  let bg ={};
  if( circlesProps.length > 0){
    circles = circlesProps.map((props)=>(
      <div className='circle' key={props.radius} style={{
        height: 2*props.radius + "px",
        width: 2*props.radius +"px",
        left: props.x - props.radius,
        // The box starts with click point if we use x directly without subtract
        top: props.y - props.radius,
      }}></div>
    ));
    if(circlesProps.length > 1 && isTouching(circlesProps[0],circlesProps[1])){
      bg = {
        backgroundColor: "red"
      }
    }
  }

  function generateCircle(ev){
    if(circlesProps.length < 2 ){
      setCirclesProps(radii=>[
        ...radii,
        {"radius":getRandomRadius(),
          "x":ev.clientX,
          "y":ev.clientY
        }
      ])
    }else{
      setCirclesProps([circlesProps[circlesProps.length -1],
        {"radius":getRandomRadius(),
          "x":ev.clientX,
          "y":ev.clientY
        }])
    }
  }

  return (
    <div className='full' style={bg} onClick={generateCircle}>
      {circles}
    </div>
  )
}

export default App
