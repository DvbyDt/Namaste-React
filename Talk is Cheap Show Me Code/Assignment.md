# Chapter 04 - Talk is Cheap Show me Code

### Is JSX mandatory for React ? 
- No, JSX is not mandatory for React we can even write it using React.createElement() because JSX is itslef converted to React.createElement by the transpiler called as Babel.

### Is ES6 mandatory for React ? 
- No, ES6 is also not mandatory for React we can write our content using simple plane JavaScript also.

### `{TitleComponent}` vs `{<TitleComponent />}` vs `{<TitleComponent></TitleComponent>}`
- `{TitleComponent}`: It is a React element. It is basically an object in JS.
- `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}`: Both of them are React functional components which are basically javaScript functions. One is self closing and another has the closing tag with it.  

### How to write comments in JSX ? 
- Comments in JSX have to be written inside of `{` and `}` and there are basically two types of comments:
- Single line comment: It can be written using // 
- Multi-line comment: This starts with /* and end with */.
- Here is one example: 

 ```jsx
 {
    // - Single line comment
    /* - Multi line 
         comment  */
} 
 ```
 
### What is `<React.Fragement></React.Fragement>` and `<></>` ?
- `<React.Fragement></React.Fragement>` are basically functional components imported from the React library. These are basically like an empty tag and are not shown in the browser. These are used because JSX expressions in React should have one parent element the reason behind that is JSX will be converted to JavaScript and only one element can be returned from the JSX expression i.e. the parent element. It's shorthand is `<></>` .



