import React, { FormEventHandler } from 'react';
import './styles.scss';

type Props = {
    text: string
    onClick?: FormEventHandler
}


const ButtonIcon = ({ text, onClick }: Props) => (
    <div className="d-flex">
        <button className="btn btn-icon" onSubmit={onClick}>
            <h5>{text}</h5>
        </button>
    </div>
);

export default ButtonIcon;