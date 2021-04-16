import React from 'react'
import styles from './CustomButton.module.scss'
interface ICustomButton {
    type: string
    onClick?: (e:React.MouseEvent) => void;
    children:React.ReactNode
}

export const CustomButton = (props:ICustomButton) => {
    const cls = [
        styles.CustomButton,
        styles[props.type]
    ]
    return (
        <button 
            onClick={props.onClick}
            className={cls.join(' ')}
        >
            {props.children}
        </button>
    )
}

