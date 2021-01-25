import React from 'react'

import './ShapeController.css';

type Props = {
    handleInputChange: (e:any, id:string) => void;
    handleDelete: (id:string) => void;
    shape: any;
}

const capitalize = (str:string) => {
    return str && str[0].toUpperCase() + str.slice(1);

}
const ShapeController:React.FC<Props> = ({handleInputChange, shape, handleDelete}) => {

    const {id, type, count} = shape;

    let InputElements;
    if(type === "rectangle"){
        InputElements = (
            <>
                <div>
                    <label htmlFor="fill_color">Fill Color</label>
                    <input onChange={(e) => handleInputChange(e, id)} value={shape.fill_color} type="text" name="fill_color"/>
                </div>
                <div>
                    <label htmlFor="left">Left</label>
                    <input onChange={(e) => handleInputChange(e, id)} value={shape.left} type="number" name="left"/>
                </div>
                <div>
                    <label htmlFor="top">Top</label>
                    <input onChange={(e) => handleInputChange(e, id)} value={shape.top} type="number" name="top"/>
                </div>
                <div>
                    <label htmlFor="width">Width</label>
                    <input onChange={(e) => handleInputChange(e, id)} value={shape.width} type="number" name="width"/>
                </div>
                <div>
                    <label htmlFor="height">Height</label>
                    <input onChange={(e) => handleInputChange(e, id)} value={shape.height} type="number" name="height"/>
                </div>
            </>
        )
    }else if (type === "circle"){
        InputElements = (
            <>
                <div>
                    <label htmlFor="fill_color">Fill Color</label>
                    <input onChange={(e) => handleInputChange(e, id)} value={shape.fill_color} type="text" name="fill_color"/>
                </div>
                <div>
                    <label htmlFor="left">Left</label>
                    <input onChange={(e) => handleInputChange(e, id)} value={shape.left} type="number" name="left"/>
                </div>
                <div>
                    <label htmlFor="top">Top</label>
                    <input onChange={(e) => handleInputChange(e, id)} value={shape.top} type="number" name="top"/>
                </div>
                <div>
                    <label htmlFor="radius">Radius</label>
                    <input onChange={(e) => handleInputChange(e, id)} value={shape.radius} type="number" name="radius"/>
                </div>
            </>
        )
    }else if(type === "line"){
        InputElements = (
            <>
                <div>
                    <label htmlFor="color">Color</label>
                    <input onChange={(e) => handleInputChange(e, id)} value={shape.color} type="text" name="color"/>
                </div>
                <div>
                    <label htmlFor="thickness">Thickness</label>
                    <input onChange={(e) => handleInputChange(e, id)} value={shape.thickness} type="number" name="thickness"/>
                </div>
                <div>
                    <label htmlFor="x1">X1</label>
                    <input onChange={(e) => handleInputChange(e, id)} value={shape.x1} type="number" name="x1"/>
                </div>
                <div>
                    <label htmlFor="x2">X2</label>
                    <input onChange={(e) => handleInputChange(e, id)} value={shape.x2} type="number" name="x2"/>
                </div>
                <div>
                    <label htmlFor="y1">Y1</label>
                    <input onChange={(e) => handleInputChange(e, id)} value={shape.y1} type="number" name="y1"/>
                </div>
                <div>
                    <label htmlFor="y2">Y2</label>
                    <input onChange={(e) => handleInputChange(e, id)} value={shape.y2} type="number" name="y2"/>
                </div>
               
            </>
        )
    }
    return (
        <div className="shape-controller">
            <div className="shape-title">
                <p>{capitalize(type)} {count}</p>
            </div>
            <div className="input-container">
                {InputElements}
            </div>
        
            <button onClick={() => handleDelete(id)} className="delete-btn">delete</button>
        </div>
    )
}

export default ShapeController
