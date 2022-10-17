import React, { Component } from 'react'

class Check extends Component {
  
  constructor(props){
    super(props);
      this.state={
        speciality:"",
        doctor:""
      }
    }

  handleInputchange =(e)=>{
      const {name,value} = e.target;
  
      this.setState({
        ...this.state,
        [name]:value

      })
  }
  
  onSubmit = (e) =>{

      e.preventDefault();
  
      const{speciality,doctor}=this.state;
  
      const data={
        speciality:speciality,
        doctor:doctor  
      }
      console.log(data);
  }

  render() {
    return (
            <div className='col-md-4 mt-6 ' >
              <h5 className='h3 mb3 font-weight-normal'>Please Select Doctor !...</h5>
              &nbsp;
                <form className='needs-validation' noValidate>
                  <select className="form-select " name="speciality" aria-label="Default select example"
                    value={this.state.speciality} onChange={this.handleInputchange}>
                    <option selected>Open this select Specialty</option>
                    <option value="AYURVEDIC">AYURVEDIC</option>
                    <option value="CARDO THORACIC">CARDO THORACIC</option>
                    <option value="CARDOLOGIST">CARDOLOGIST</option>
                    <option value="DERMATOLOGIST">DERMATOLOGIST</option>
                    <option value="ENT SURGEN">ENT SURGEN</option>
                  </select>
                  &nbsp;
                  <select className="form-select" name="doctor" aria-label="Default select example"  
                  value={this.state.doctor} onChange={this.handleInputchange}>
                    <option selected>Open this select Doctor</option>
                    <option value="Sunitha Wickramasinghe">Sunitha Wickramasinghe</option>
                    <option value="G A W ABEYSINGHE">G A W ABEYSINGHE</option>
                    <option value="DARSHANA ABEYGUNAWARDANA">DARSHANA ABEYGUNAWARDANA</option>
                    <option value="ARUNA BANDARA">ARUNA BANDARA</option>
                  </select>

                  <button className="btn btn-primary float-end"  type='submit' style={{marginTop:'15px'}}>
                  <a href="/appoinment" style={{textDecoration:'none',color:'white'}}>Submit</a></button>
                </form>
            </div>
      
    )
  }
}

export default Check;

