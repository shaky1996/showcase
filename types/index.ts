import { MouseEventHandler } from "react";


//  types for CustomButton to accept props

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit';

}