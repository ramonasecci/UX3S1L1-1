import { Component } from "react";

class ImageClass extends Component {
    render(){
        return <img src={this.props.src} alt={this.props.nameI} />
    }
}

export default ImageClass;