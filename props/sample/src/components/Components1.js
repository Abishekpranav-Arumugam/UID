// ChildOne.js
import React from 'react';

const Component1 = ({ data }) => {
    return (
        <div>
            <h2>Child One Component</h2>
            <p>Received prop: {data}</p>
        </div>
    );
};

export default Component1;
