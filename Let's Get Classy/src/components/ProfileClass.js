import React from "react"
//Class component of Profile
class ProfileClass extends React.Component{
    //For using state in Class components we have to first use constructor
    constructor(props){
        super(props);
        //Creating local state variable
        this.state = {
            count:0,
            //Creating multiple state variables in class based components
            count2:0,
            userInfo:{
                name:"DummyName",
                location:"DummyLocation"
            }
        };
        console.log("child construcor ",this.props.name)
    }
    /*In case of class based components the best place to make an API call is in a lifecycle method called as componentDidMount()
    because like useEffect it is also called after the inital render thereby solving the problem of waiting for the API to get the data and in the process 
    you render is paused waiting for the API data. 
    Making an API call here 
    */
    async componentDidMount(){
        //console.log("child ComponentDidMount being called ",this.props.name)
        //Fetching API here.
        const data = await fetch("https://api.github.com/users/dvbydt")
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json
        })
        
    }

    /**
     * In useEffect hook if I wanted to call the useEffect on change of a particular local state variable 
     * I will do something like: 
     * useEffect(()=>{
     * },[local_state_variable_name])
     * But similar thing in class based components is different 
     * and we write it inside componentDidUpdate() because it is the methodd being called at every subsequent render.
     */

    componentDidUpdate(prevProps,prevState){
        if(this.state.count !== prevState.count){
            //code
        }
        //For multiple state variable we can use:
        if(this.state.count2 !== prevState.count2){
            //code
        }

        console.log("Child ComponentDidUpdate")
        //this.timer = setInterval(()=>{console.log("Hello")},1000)
    } 

    componentWillUnmount(){
        console.log("Child ComponentWillUnmount")
        //clearInterval(this.timer)
    }

    //Render method is the most important in a class component
    render(){
        console.log("child render ",this.props.name);
        return (
            <>
                <h1>This is a class Component</h1>
                {/* Props can be accessed by using this.props.name */}
                <h2>{this.props.name}</h2>
                <h2>Count in Class Component : {this.state.count}</h2>
                <h2>Mulitple state variables in class based components: {this.state.count2}</h2>
                <h2>Github Name: {this.state?.userInfo?.name}</h2>
                <h2>Github location: {this.state?.userInfo?.location}</h2>
                <img src={this.state?.userInfo?.avatar_url} />
                <button onClick={()=>{
                    //For setting values of local state variables created in class based components
                    //In this setstate we basically send a modified object
                    //WE DO NOT MUTATE STATE DIRECTLY
                    this.setState(
                        {
                            count: this.state.count+1,
                            //Modifying local state variable using this.setstate
                            count2:this.state.count2+1
                        }
                    );
                }}>Click</button>
            </>)            
    }
}
export default ProfileClass