import React,{Component} from 'react'
import axios from 'axios';

class Request extends Component{
    
state = {
   todo:null
}


componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/users/1')
  .then(res=>{
      this.setState({
          todo:res.data
      })
  })
  .catch(err=>console.log(err))
}


    render(){
        return (
            <div>
            <h1>Http requests in react</h1>
            {this.state.todo ? <p>{this.state.todo.username}</p> : <p>Loading...</p>}
            </div>
        )
    }

}

export default Request;