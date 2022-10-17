import { Component } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './component/NavBar';
import  HeaderImg from './component/HearderImg';
import Home from './component/Home';
import Check from './component/Check';
import ContactUs from './component/ContactUs';
import List from './component/List';



export default class App extends Component {
  render() {
    return (
      <div className='container p-3 mb-2'>
        <div className='col mt-2'>
          <div >
          <HeaderImg/>
          </div>
          <div className="row">
            <div className="col-lg-2 mt-2 mb-2" >
            <NavBar/>
            </div>
            <div className="col-lg-10 mt-2 mb-2">
              <BrowserRouter>
                  <Routes>
                  <Route path='/'  element={<Home/>} exact></Route>
                  <Route path='/check'  element={<Check/>} ></Route>
                  <Route path='/appoinment'  element={<ContactUs/>}></Route>
                  <Route path='/list'  element={<List/>}></Route>
                  </Routes>
              </BrowserRouter>
            </div>
          </div>
        </div>
    
      </div>
     
    )
  };
};



