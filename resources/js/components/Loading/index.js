import React from 'react';
import './Loading.css';

export const Loading = () => (
    <div className="center">
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
);