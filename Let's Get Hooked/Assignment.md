# Chapter 05 - Let's Get Hooked

1. What is the difference between Named Export, Default and * as export ?
- **Named Export:** It is usually a way to import individual components into your JSX file. These are used when we want to import only a specific component from a particular JSX file containing many components. It is written like:

```jsx
export const Test = () => {
	return(<h1>This is the Test for Named Export</h1>)
}

//While importing it in another file we can import it using the {} braces
import { Test } from './Location_Name_from_where_component_is_imported' 
```

- **Default Export:** It is basically used to Export the whole component it is the default behaviour when you create a functional component.

```jsx
const Test = () => {
return <h1>This is a functional component with Default Export</h1>
}

//In the file where you want to import it you can use.
import Test from './Location_Name_from_where_component_is_imported'
```

- *** as Export:**

It is basically used to import all the functional component from a particular file. You can do it like:

```jsx
import * as XYZ from './Location_Name_from_where_component_is_imported'
//and can later use this XYZ

const AppLayout = () => {
return(
	<h1>XYZ.Header</h1>
		<h1>XYZ.Body</h1>
	<h1>XYZ.Footer</h1>
)
}
```

2. What is the importance of config.js file?
- In config.js file we can store the constants or the things that won’t change throughout our application. e.g. : IMG_CDN_URL in our project. So, even if the value changes I won’t have to replace it every time and in each and every file. I can just replace it in one config.js file and import it every where be it named or default import.

3. What are React Hooks?
- React Hooks are basically JavaScript functions which are used to perform a specific task. Hooks basically let’s the developer hook into various React features. These features can be the use of state and lifecycle methods inside of functional components. Hooks are meant for functional components and not for class based components because in class based components you can easily implement lifecycle methods and can use state. But since, it gets messy that’s why we use React Hooks.

 4. Why do we need useState() Hooks?

- React has one way data binding. In React we can’t directly modify the local variables we can just display them. In order to modify the local variables and keep them in-sync with the UI we use something called as useState() hook. Using this hook we can create local state variables and modify them. The advantage of using the useState hook is it keeps UI insync with the state variables.
- The syntax of useState hook is:

```jsx
//const[var_name,setVar_Name] = useState(DefaultValue) -> syntax
const[searchText,setSearchText] = useState("") 
```

- It returns two things one is the local state variable and other is the set method which is used to set the value of this searchText local state variable.
