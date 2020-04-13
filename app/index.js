import React from 'react';
import ReactDOM from "react-dom";
import './index.css';


// SEPARATION OF CONCERN:
    // since a Component is concerned with State, UI and Lifecycle 
    // The HTML inside render function doesn't violate separation of concern
    // Component
        // State
        // Lifecycle
        // UI

//Component definition

class App extends React.Component { 
    render() { 
        return (
            <div>
                Hello World!
            </div>
            ) //jsx
        }
    }


//Component Call

ReactDOM.render(
    <App />, //React.Element
    document.getElementById('app') // Where to render the element
)