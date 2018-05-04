import React, {Component} from 'react';

class SidebarHeader extends Component {

  render() {
    return (
      <div className="sidebar-header">
          <img src={'img/avatars/9.jpg'} className="img-avatar" alt="Avatar"/>
          <div><strong>JOHN DOE</strong></div>
          <div className="text-muted"><small>Senior Professor</small></div>
          <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
           
          </div>
        </div>
    )
  }
}

export default SidebarHeader;
