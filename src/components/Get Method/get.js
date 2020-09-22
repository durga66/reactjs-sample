import React,{Component} from 'react'
import {Table} from 'react-bootstrap'
import axios from 'axios'
export class GetMethod extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:[],
            errorMsg:''
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error=>{
            console.log(error)
           
            this.setState({errorMsg:'Error retreiving data'})

        })
    }
    render(){
        const {posts,errorMsg}=this.state
        
        return(
            <div className="get">
                <br/>
              List of Posts(Get Method){
                         
<Table striped bordered hover>
  <thead>
    <tr>
      <th>UserId</th>
      <th>Id</th>
      <th>Title</th>
      <th>Body</th>
     
    </tr>
  </thead>

  <tbody>
  { (posts.length > 0) ? posts.map( (post, index) => {
    return (
            <tr key={ index } >
              <td>{ post.userId }</td>
              <td>{ post.id }</td>
              <td>{ post.title }</td>
              <td>{post.body}</td>
            </tr>
          )
         }) : <tr><td colSpan="4">Loading...</td></tr> }
      </tbody>
</Table>
}
{errorMsg ? <div>{errorMsg}</div>:null} 
             
</div>
)
    
}

}