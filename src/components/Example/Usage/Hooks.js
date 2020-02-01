import React from 'react';

import ExampleContext from '../Context/ExampleContext';

function Hooks() {
    const value = React.useContext(ExampleContext);

    return (
        <div>
            <strong>Hooks:</strong> {value}
        </div>
    );
}

export default Hooks;
