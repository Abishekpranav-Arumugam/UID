// ChildTwo.js
import React from 'react';
import Component3 from './Components3';

const Component2 = ({ data, moreData }) => {
    return (
        <div>
            <h2>Child Two Component</h2>
            <p>Received prop: {data}</p>
            {/* Passing moreData as prop to ChildThree */}
            <Component3 info={moreData} />
        </div>
    );
};

export default Component2;
