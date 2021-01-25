import React from 'react'


import './Button.css';


type Props = {
    title: string;
    type: string;
    handleClick: (type:string) => void;
}


const Button:React.FC<Props> = ({title, handleClick, type}) => {
    return (
        <button onClick={() => handleClick(type)} className="add-button">
            {title}
        </button>
    )
}

export default Button
