import React from 'react';

import ExampleContext from "./Example/Context/ExampleContext";

import Classes from "./Example/Usage/Classes";
import Functional from "./Example/Usage/Functional";
import Hooks from "./Example/Usage/Hooks";

import LevelOne from "./Example/UsageNested/LevelOne";

function Example() {
    return (
        <div>
            <ExampleContext.Provider value={'https://magicweb.pl'}>
                <Classes/>
                <Functional />
                <Hooks />
                <LevelOne />
            </ExampleContext.Provider>
        </div>
    );
}

export default Example;
