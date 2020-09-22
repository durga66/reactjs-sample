import React,{Component} from 'react'
import axios from 'axios'
export class PostMethod extends Component{
    constructor(props){
        super(props)
        this.state={
            userId:'',
            title:'',
        body:''
            }
    }
    changedHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler=e=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response=>{
            console.log(response)
        }).catch(error=>{
            console.log(error)
        })
    }
    
    render(){
        const {userId,title,body}=this.state
        return(
            <div className="post">
                <br/>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <input type="text" name="userId"  className="form-control" value={userId} onChange={this.changedHandler}/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="title"  className="form-control" value={title} onChange={this.changedHandler}/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="body"  className="form-control" value={body } onChange={this.changedHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                
            </div>
                   )
    }
   
}

