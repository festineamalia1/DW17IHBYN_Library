import React, {Component} from "react";

import ContentLanding from 'parts/ContentLanding';

export default class LandingPage extends Component{
    render(){
        console.log(this.props);
        return(
<>

<ContentLanding/>
</>
        );
    }
}
