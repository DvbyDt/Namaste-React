# Laying the Foundation Assignment

### What is JSX ?
- JSX is a HTML like syntax but **it's not HTML inside JS**. Bable compiles the JSX scripts to implements React.createElement behind the scenes which in-turn creates an object and this Object is rendered using ReactDOM.It was designed to write the markup and the logic code inside the same function or component.

### Superpowers of JSX : 
 - It prevents XSS(Cross side scripting). By default ReactDOM escapes all the insertions before rendering all the code. It ensures that no value can be injected into the code that's not being explicitly specified in React. It converts it to a string and then renders the values.
 - It ensures readability
 - It ensures maintainability
 - It's a syntatic sugar for React.createElement(component,props,...children);
 
 ### Role of type attribute in script tag ? What options can I use there ?
 - type attribute is basically used to specify which is the type of the script that you are using in your document. It's value can be of 4 types:
   1. If no value is specified in type it is basically considered as a classic script file containing JavaScript code. You can even skip the type attribute altogether for thi one.
   2. type = "module" this specifies that your script should be treated as a JavaScript module.A module is basically the JavaScript code being divided into smaller chunks.
   3. type = "importmap" indicates that the body of element contains an import map. It is a JSON object which specifies to the browser how to resolve these modules when importing them.


### {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}
- {TitleComponent}: It is a react element. It is basically an object in JS.
- {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}: Both of them are React functional components which are basically javaScript functions. One is self closing and another has the closing tag with it.  
