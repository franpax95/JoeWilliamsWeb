import React from 'react';
import './Fatal.css';

const defaultMsg = 'Oops! An unexpected error... Please, try again later.';

export const Fatal = ({ message = defaultMsg }) => (
    <div className="Fatal">{message}</div>
);