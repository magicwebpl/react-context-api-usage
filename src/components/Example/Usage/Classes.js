import React from 'react';

import ExampleContext from '../Context/ExampleContext';

class Classes extends React.Component {

    static contextType = ExampleContext;

    render() {
        return (
            <div>
                <strong>Classes:</strong> {this.context}
            </div>
        );
    }
}

export default Classes;
