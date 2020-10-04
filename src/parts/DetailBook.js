import React, {Component} from "react";

import SideBar from 'parts/SideBar';
import DetBookIsi from 'parts/DetBookIsi';

export default class DetailBook extends Component{
    render(){
        console.log(this.props);
        return(
<>

<SideBar></SideBar>
<DetBookIsi></DetBookIsi>
</>
        );
    }
}