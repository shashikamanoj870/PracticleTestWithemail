import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
         <div className="mh-50px">
          <div class="wrapper mh-100">
            <div class="border-end bg-white" id="sidebar-wrapper">
                    <div class="list-group list-group-flush">
                            <a class="list-group-item list-group-item-action list-group-item-light p-3 fa fa-bar-chart-o" href="/">  Home</a>
                            <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/check">Check on channel</a>
                            <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/list">List Of Patiant</a>
                    </div>
                  </div>
                
              </div>
          </div>
    )
  }
}


