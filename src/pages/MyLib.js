import React, {Component} from "react";

import SideBar from 'parts/SideBar';
import MyLibContent from 'parts/MyLibContent';

export default class Mylib extends Component{
    render(){
        console.log(this.props);
        return(
<>

<SideBar></SideBar>
<MyLibContent></MyLibContent>
</>
        );
    }
}