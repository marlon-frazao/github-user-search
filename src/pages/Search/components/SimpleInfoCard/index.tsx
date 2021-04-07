import React from 'react';
import './styles.scss';

type Props = {
    text: string
}

const SimpleInfoCard = ({ text }: Props) => {
    return (
        <div className="info-card">
            {text}
        </div>
    );
}

export default SimpleInfoCard;