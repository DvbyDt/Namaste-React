
        // const h1 = document.createElement("h2");
        // h1.innerHTML = "Heading Using JS.................................";
        // document.getElementById("root").appendChild(h1);
    
        const heading1 = React.createElement(
        "h1",
        {style:{color:"red"}},
        "This is heading 1");    
        //React element is an object because if you console.log(heading) 
        console.log(heading1);

        const heading2 = React.createElement(
        "h1",
        {style:{color:"green"}},
        "This is heading 2");

        const container = React.createElement(
            "div",
            {id:"container"},
            //If you want mulitple children you have to specify them as arrays
            [heading1,heading2]
        );
        const root = ReactDOM.createRoot(document.getElementById("root"));    
        //passing a react element inside the root
        root.render(container);     
