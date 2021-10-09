import { Component } from "react";
import Toto from "./Toto";

class Maman extends Component {

    state = {
        messageMaman: null,
        messageToto: null
    }


    ordreMaman = () => {
        this.setState({
            messageMaman: "Va ranger ta chambre"
        })
    }


    reponseToto = () => {
        this.setState({
            messageToto: "je vais le faire de suite Maman"
        })
    }


    render() {
        return (
            <div>

                <h1>Je suis la Maman</h1>
                <button onClick={this.ordreMaman}>Ordre de la Mére</button>
                <p>{this.state.messageMaman}</p>
                <hr />

                <Toto name ='Je suis Toto' reponseToto={this.reponseToto} leState = {this.state} />

            </div>
        )
    }
}

export default Maman