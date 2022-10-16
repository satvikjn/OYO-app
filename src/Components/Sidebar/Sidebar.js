import React, { PureComponent } from 'react'
import "./Sidebar.css"

export default class Sidebar extends PureComponent {
  render() {
    return (
      <div className='main-box'>
         <div className="s-logo">
            <div className='logo-box'>
            </div>
            Logo
         </div>
         <div className="s-menu"><img src = ".\icons\menu.svg" style={{height : "15px", marginRight: "2em"}}/>Hide Menu</div>
         <div className="s-menu-items">
            <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button"><img src = ".\icons\dashboard.svg"/>Dashboard</button>
            <button class="btn btn-primary" type="button"><img src = ".\icons\task.svg"/>Projects</button>
            <button class="btn btn-primary" type="button"><img src = ".\icons\dollar.svg"/>Earnings</button>
            <button class="btn btn-primary" type="button"><img src = ".\icons\settings.svg"/>Profiles</button>
            </div>
         </div>
         <div className="s-support">Support</div>
         <div className="s-tickets">
            <img src = ".\icons\ticket.svg"/> Tickets
            <div className='alert-dot'>
            4
            </div>
        </div>
      </div>
    )
  }
}
