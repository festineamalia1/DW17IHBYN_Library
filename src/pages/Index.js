import React, {Component} from "react";

import SideBar from 'parts/SideBar';
import ContentIndex from 'parts/ContentIndex';

export default class Index extends Component{
    render(){
        console.log(this.props);
        return(
<>

<SideBar></SideBar>
<ContentIndex></ContentIndex>
</>
        );
    }
}




