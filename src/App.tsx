import React, {useState} from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

// Components
import Button from './components/Button/Button';
import Circle from './components/Circle/Circle';
import Rectangle from './components/Rectangle/Rectangle'
import Line from './components/Line/Line';
import ShapeController from './components/ShapeController/ShapeController';

const App:React.FC  = () => {
  const [shapes, setShapes] = useState<[] | any>([]);

  type ShapeProps = {
    type: string;
    color?: string;
    fill_color?: string;
    left?: number;
    top?: number;
    radius?: number;
    width?: number;
    height?: number;
    thickness?: number;
    x1?: number;
    x2?: number;
    y1?: number;
    y2?: number;
  }


  // Method that adds shape to the UI
  const handleShape:any = (type:string) => {
    
    const id = uuidv4();

    let newShape:ShapeProps;
    if(type === "circle"){
        newShape = {
          type,
          fill_color: "blue",
          left: 150,
          top: 190,
          radius: 100,
        }
      }else if(type === "rectangle"){
        newShape = {
          type,
          fill_color: "green",
          left: 400,
          top: 160,
          width: 320,
          height: 200,
        }
      }else if(type === "line"){
        newShape = {
          type,
          color: "black",
          thickness: 10,
          x1: 420,
          x2: 17,
          y1: 326,
          y2: 173,
      }
      }

      // Determine the number of previously added shapes of the same type
      const existing = shapes.filter((item:any) => item.type === type);
      const count = existing.length ? existing.length + 1 : 1;

  
      setShapes((previousState:any) => [...previousState, {id, ...newShape, count}])
  }

  // Method to handle onChange event on input element
  const handleInputChange = (e:any, id:string) => {
    const {name, value} = e.target;

    let checkedValue = name !== "fill_color" && name !== "color" ? +value : value;

    setShapes((previousShapes:any) => [...previousShapes].map((shape) => shape.id === id ? {...shape, [name]: checkedValue} : shape))
  }

  // Method to delete shape
  const handleDelete = (id:string) => {
    setShapes((previousShapes:any) => [...previousShapes].filter((shape) => shape.id !== id));
  }

  return (
    <div id="container">
      <div id="shape-area">
        {!shapes?.length && <p className="error">Your Drawing is Empty</p>}
       
        {shapes.map((shape:any) => shape.type === "circle" ?  <Circle {...shape} /> : shape.type === "rectangle" ? <Rectangle {...shape} /> : shape.type === "line"? <Line {...shape} /> : <></>)}
          
      </div>
      <div id="button-container">
        <Button handleClick={handleShape} type="circle" title="Add Circle"/>
        <Button handleClick={handleShape} type="rectangle" title="Add Rectangle"/>
        <Button handleClick={handleShape} type="line" title="Add Add Line"/>
      </div>

      <div id="shapes-controller">
        <h4>Shapes</h4>
        {!shapes?.length && <p>You haven't add any shapes yet</p>}
        
        {shapes?.map((shape:any) => <ShapeController handleDelete={handleDelete} shape={shape} handleInputChange={handleInputChange}/> )}
        
      </div>
    </div>
   
  );
}

export default App;
