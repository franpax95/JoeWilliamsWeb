import React from 'react';

export const SpaceBetween = ({ height = '100px'}) => {
    return(
        <div style={{ height: height, minHeight: height}}></div>
    )
}