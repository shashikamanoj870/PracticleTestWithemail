import React, { Component } from 'react'
import axios from 'axios';
import * as dayjs from 'dayjs';


export default class Home extends Component {
constructor(props){
  super(props);

  this.state={
    posts:[]
  };
}

componentDidMount(){
  this.retrivePosts();

}

retrivePosts(){
  axios.get("/posts").then(res=>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });
      console.log(this.state.posts)
    }
  });
}

onDelete=(id) =>{
  console.log(id);  axios.delete(`/delete/${id}`).then((res)=>{
    alert("Delete succseccfully");
    this.retrivePosts();
  })
}


render() {
    return (
      <div className= "container">
        <table className="table">
          <thead>
            <div className="col-lg-9 mt-2 mb-2">
             
            </div>
            <tr>
              <th scope="col">App..No</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Contact No</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index)=>(
              <tr key={index}>
                
                <td>{posts.appno}</td>
                <td>{posts.name}</td>
                <td>{dayjs(posts.date).format("MM/DD/YYYY")}</td>
                <td>{posts.email}</td>
                <td>{posts.address}</td>
                <td>{posts.mobileno}</td>
                <td>{posts.doctorname}</td>
                <td>
                  <buttton className="btn btn-warning btn-sm" >
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </buttton> 
                  <br/>
                  <buttton className="btn btn-danger btn-sm" onClick={() => this.onDelete(posts._id)}>
                    <i className="fas fa-trash"></i>&nbsp;Delete
                  </buttton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       
      </div>
    )
  }
}
