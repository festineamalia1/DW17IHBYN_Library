import React from 'react'
import Icon from 'assets/images/Icon.png'
import Foto from 'assets/images/Ellipse.png'
export default function SideBar(props) {
    return (
        
        
        <div className="sidenav">
            <div className="container">
        <img className="lib-icon2" src={Icon} alt="lib-iconic" />
      
    </div>
    <div className="container">
        <img className="foto-pro" src={Foto} alt="pro-foto" />
      
    </div>
<br/><br/><br/><br/><br/>
  <a href="#">Profil</a>
  <a href="#">My Library</a>
  <a href="#">Add Book</a>
  <a href="#">Log out</a>

</div>
    )
}
