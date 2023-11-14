import React,{Component} from "react";
import "./User.css";

class UserClass extends Component{
    constructor(props){
        super(props);
       
        this.state = {
            
            userInfo:{
                login:"dummy name",
                
              id:"",    
                avatar_url:"",
            }  
          
        }
        console.log("child constructor");
    }

    async componentDidMount(){
        console.log("child component Did Mount")
        // const data = await fetch("https://api.github.com/users/Dinesh528");
        // const json  = await data.json();
        // this.setState({
        //     userInfo:json,
        // })
        // console.log(json);
        
        this.timer = setInterval(()=>{
            console.log("child component setInterval");
        },1000);

    }
    componentDidUpdate(){
        console.log("child component Did Update")
    }
    componentWillUnmount(){
       
        clearInterval(this.timer);
        console.log("child component Will Unmount");
    }
    render(){
       
        const {login,id,avatar_url}= this.state.userInfo
       console.log("child RENDER ")
        return(
            <div className="usercard">
          
         <div>
            <img src={avatar_url} style={{height:"200px",width:"200px"}} />
            </div>       
        <h2>ID: {id} </h2>
        <h2>Name: {login}</h2>
        
            </div>
        )
    }
}

export default UserClass;