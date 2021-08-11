import React from 'react';
import {IonButton} from "@ionic/react";
import './Button.css'

const Button = () => {
    return (
        <div>
            <IonButton className='btn' href="/tab1">Click me</IonButton>
        </div>
    );
};

export default Button;