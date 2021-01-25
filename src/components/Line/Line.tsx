import React from 'react'

type LineProps = {
    color: string;
    thickness: number;
    x1: number;
    x2: number;
    y1: number;
    y2: number;
}
const Line:React.FC<LineProps> = ({color, thickness, x1, x2,y1, y2,}) => {
    return (
        <svg style={{position: "absolute"}} height="500" width="800">
        <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={thickness} stroke={color}  />
      </svg>
    )
}

export default Line
