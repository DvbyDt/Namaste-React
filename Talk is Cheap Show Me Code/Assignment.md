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

### What is Virtual DOM and Reconciliation? 
- Virtual DOM is just a representation of the actual DOM which is stored in memory.In our React application suppose a particular component's state is changed or props value change then it won't update this virtual DOM but it will create another virtual DOM and diffs it with the initial virtual DOM and then updates UI or re-render the component whose state or props value had changed. So, this process of diff between the two DOMs is called as virtual DOM and updating the UI thorugh batch updates is called as reconciliation. Batch updates are nothing but React identifies the optimal time at which it will re-render the components so, that is basically called as batch update.![image](https://user-images.githubusercontent.com/68496657/216110769-5f95329d-8fcd-4408-b1c4-befb89666118.png)

### What is React Fiber?
- React fiber is basically the newest engine for reconciliation from React 16.It's responsible for the diff.Here is the link that I referred to for learning React Fibre: https://www.youtube.com/watch?v=0ympFIwQFJw&t=833s

### Why do we need keys in React? When do we need keys in React?
- Key is a string attribute that has to be specified whenever you are dealing with list of elements in React. 
- Keys can be used to identify which of the list of element was added,removed or modified. 
- If there are no keys specified then react will have to re-render the entire list of elements again and again for change in any of the list of elements and that might be an overkill.

### Can we use index as keys in react? 
- Indexes can be used as keys in React **but it must always be the last option** i.e. if don't have any unique value specified as key you can make use of the index value. The actual problem with using indexes lies in that they are sequential and if a list of element with the index as 0 has been removed and another element with the index 99 is placed before the index 0 then it might lead to inconsistencies i.e. basically it's not recomended because if the order of the items changes then it might lead to problems and the component might not function. 
- More on this can be read here: https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/ , https://adhithiravi.medium.com/why-do-i-need-keys-in-react-lists-dbb522188bbb

### What is props in React? 
- Props are properties and they have similar to that of receving arguments to functions and passing parameters to functions. They help to provide different attributes to the functional components which are basically JS functions.
- There are many ways to pase a prop in React and they are, consider the below example: 
```React
const Test = (props) => { {/*Way 1 of passing props*/
  return (
    <h1>Hi my name is {props.name} and my hobbies are {props.hobbies}</h1>
  )
}

{/*Another way of passing the props are directly giving the values*/}
const Test = ({name,hobbies}) => {
 return (
    <h1>Hi my name is {name} and my hobbies are {hobbies}</h1>
  )
}

{/* Consider the App Component making use of the Test Component */}
const App = () => {
 return <Test name="Majnu bhai" hobbies="painting,killing">
}
```

### What is Config Driven UI?
- It is basically a design approach to develop applications wherein the application is customizable based on different users and the different use cases. 
