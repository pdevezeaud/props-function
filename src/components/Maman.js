import { Component } from "react";

class Maman extends Component {

    state = {
        messageMaman: null,
        messageToto: null
    }


    


    render() {
        return (
            <div>

                <h1>Je suis la Maman</h1>
                <button>Ordre de la Mére</button>
                <p></p>
                <hr />

            </div>
        )
    }
}

export default Maman