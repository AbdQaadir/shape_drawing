import React from 'react'

type Props = {
    fill_color: string;
    left: number;
    top: number;
    radius: number;
}
const Circle:React.FC<Props> = ({fill_color, radius, ...styles}) => {

    return (
        <div style={{position: 'absolute', background: fill_color, borderRadius: radius, ...styles, height: 200, width: 200}}>
            
        </div>
    )
}

export default Circle
