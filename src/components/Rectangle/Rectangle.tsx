import React from 'react'

type Props = {
    fill_color: string;
    left: number;
    top: number;
    width: number;
    height: number;
}
const Rectangle:React.FC<Props> = ({fill_color, ...styles})  =>{
    return (
        <div style={{position: 'absolute', background: fill_color, ...styles}}>
            
        </div>
    )
}

export default Rectangle
