import React, { useRef ,useState} from 'react';
import * as emailjs from 'emailjs-com';
import axios from 'axios';

import * as dayjs from 'dayjs';


const ContactUs = () => {
const form = useRef();

const [inputField , setInputField] = useState({
            appno:"",     
            name:"",
            date:"",
            email:"",
            address:"",
            mobileno:"",
            docname:""
})

    const sendEmail = (e) => {
    e.preventDefault();

   

    const msg = {"message":"NAME:" + inputField.name +"/"+ "APPOINMENT NO:" + inputField.appno +"/"+ "DATE:" + inputField.date +"/"+ "TIME:" + "6.00"}
    
    let templateParams = {
        from_name: 'Test Channel Center',
        to_name: inputField.email,
        subject: inputField.address,
        message: msg['message']
       }

       emailjs.send('service_oo7f72n','template_6xcuf9n',templateParams,'A1nRSo_mLEpbCHw7l').then((result) => {
        console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    const{appno,name,date,email,address,mobileno}=inputField;

    const data ={
      appno:appno,
      name:name,
      date:dayjs(date).format("MM/DD"),
      email:email,
      address:address,
      mobileno:mobileno

    }

    axios.post("/post/save",data).then((res)=>{
      if(res.data.success){
        setInputField(
          {
            appno:"",
            name:"",
            date:"",
            email:"",
            address:"",
            mobileno:""
          }
        )
      }
    });

    setInputField('');
    }

      const handleChange = (e) => {
        e.preventDefault();
        setInputField({
          ...inputField,
          [e.target.name]: e.target.value,
        });
      };

      return (
        <div className='col-md-6 mt-2 '>
          <h5 className='h3 mb3 font-weight-normal'>New Appoinment...</h5>
          &nbsp;
          <form  onSubmit={sendEmail}>
            <div className='form-group' style={{marginbBottom:'15px'}}></div>
              <label style={{marginbBottom:'5px'}}>Apppoinment No</label>
              <input type="text" name="appno" className='form-control' value= {inputField.appno} onChange={handleChange} />
            <div/>

            <div className='form-group' style={{marginbBottom:'15px'}}></div>
              <label style={{marginbBottom:'5px'}}>Name</label>
              <input type="text" name="name" className='form-control' value={inputField.name} onChange={handleChange} />
            <div/>

            <div className='form-group' style={{marginbBottom:'15px'}}></div>
              <label style={{marginbBottom:'5px'}}>Date</label>
              <input type="date" name="date" className='form-control' value= {inputField.date} onChange={handleChange}/>
            <div/>

            <div className='form-group' style={{marginbBottom:'15px'}}></div>
              <label style={{marginbBottom:'5px'}}>Email</label>
              <input type="text" name="email" className='form-control' value={inputField.email}onChange={handleChange}/>
            <div/>

            <div className='form-group' style={{marginbBottom:'15px'}}></div>
              <label style={{marginbBottom:'5px'}}>Address</label>
              <input type="text" name="address" className='form-control' value={inputField.address} onChange={handleChange}/>
            <div/>

            <div className='form-group' style={{marginbBottom:'15px'}}></div>
              <label style={{marginbBottom:'5px'}}>Mobile No</label>
              <input type="mobileno" name="mobileno" className='form-control'value={inputField.mobileno} onChange={handleChange}/>
              <div/>

            <button className='btn btn-primary float-end' type='submit' value="Send" style={{marginTop:'15px'}} >
              <i className='fa fa-check-squre' />
              &nbsp; Book Now..
            </button>

          </form>
        </div>
  );
};

export default ContactUs;