import React, {Component} from "react";

import SideBar from 'parts/SideBar';
import MyProfContent from 'parts/MyProfContent';

export default class MyProf extends Component{
    render(){
        console.log(this.props);
        return(
<>

<SideBar></SideBar>
<MyProfContent></MyProfContent>
</>
        );
    }
}