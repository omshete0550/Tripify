import { Component } from "react";
import "./DestinationStyles.css";
import Mumbai from "../assets/p-1.jpg"
import Mountain from "../assets/p-2.jpg"
import America from "../assets/p-3.jpg"
import Paris from "../assets/p-4.jpg"

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>

                <div className="image">
                    <img src={this.props.img1} alt="img" />
                    <img src={this.props.img2} alt="img" />
                </div>
            </div>
        )
    }
}

export default DestinationData