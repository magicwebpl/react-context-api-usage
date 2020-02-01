import React from 'react';

import ExampleContext from "../Context/ExampleContext";

function Functional() {
    return (
        <ExampleContext.Consumer>
            {value => (
                <div>
                    <strong>Functional:</strong> {value}
                </div>
            )}
        </ExampleContext.Consumer>
    );
}

export default Functional;
