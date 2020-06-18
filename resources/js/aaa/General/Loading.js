import React from 'react';
import '../styles/loading.css';

const Loading = (props) => (
    <div className="center">
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
);
export default Loading;