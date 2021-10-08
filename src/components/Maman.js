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


    render() {
        return (
            <div>

                <h1>Je suis la Maman</h1>
                <button onClick={this.ordreMaman}>Ordre de la Mére</button>
                <p>{this.state.messageMaman}</p>
                <hr />

                <Toto name ='Je suis Toto' />

            </div>
        )
    }
}

export default Maman