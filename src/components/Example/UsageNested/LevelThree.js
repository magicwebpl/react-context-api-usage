import React from 'react';

import ExampleContext from '../Context/ExampleContext';

function LevelThree() {
    const value = React.useContext(ExampleContext);

    return (
        <div>
            <strong>Hooks level three:</strong> {value}
        </div>
    );
}

export default LevelThree;
