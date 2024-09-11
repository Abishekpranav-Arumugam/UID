// ChildThree.js
import React from 'react';

const Component3 = ({ info }) => {
    return (
        <div>
            <h3>Child Three Component</h3>
            <p>Received prop: {info}</p>
        </div>
    );
};

export default Component3;
