// App.js
import React from 'react';
import Components1 from './components/Components1';
import Components2 from './components/Components2';
import Components3 from './components/Components3';

const App = () => {
    return (
        <div>
            <h1>Parent Component (App)</h1>
            {/* Using the imported components */}
            <Components1 />
            <Components2 />
            <Components3 />
        </div>
    );
};

export default App;
