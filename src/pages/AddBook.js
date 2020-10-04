import React, {Component} from "react";
import SideBar from 'parts/SideBar';
import IsiAddBook from 'parts/IsiAddBook';
export default class AddBook extends Component{
    render(){
        console.log(this.props);
        return(
<>
<SideBar></SideBar>
<IsiAddBook></IsiAddBook>
</>
        );
    }
}
