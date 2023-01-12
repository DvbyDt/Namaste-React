import React from 'react'
import ReactDOM from 'react-dom/client'

//JSX - HTML like syntax inside JavaSCript.
//JSX => Converts to React.createElement using Babel => Object => Rendered as HTML on DOM.
//React element is basically an object
const heading = <h1>Namaste React Using JSX</h1>

//React Components : Functional Component is nothing but a JavaScript function that returns 
//some piece of JSX or React Element or a component or a combination of all these  
//Components starts with a capital letter is a great practice.
//JSX is safe because it runs sanitisation for the data that's coming from an API.
const HeaderComponent = () => {
    return (
        <div>
            {heading}
            <h1>Namaste React Using Component</h1>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);