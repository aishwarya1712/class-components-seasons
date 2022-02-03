import React, {useState} from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner  from "./Spinner";

// const AppFunction = () => {
//     const [lat, setLat] = useState("ABC");

//     window.navigator.geolocation.getCurrentPosition(
//         (position) => {console.log(position); setLat(position.coords.latitude)}, // the success callback, i.e the function that's called when location has successfully been retrieved
//         (positionError) => {console.log(positionError)} // the failure callback, i.e the function that's called when location hasn't been retrived successfully
//     )

//     return (
//         <div>Hi from Functional App! Lat is: {lat}
//             <SeasonDisplay/>
//         </div>
//     )
// }

// ReactDOM.render(<AppFunction/>, document.querySelector("#root"))

class AppClass extends React.Component{

    // The constructor function is particular to JavaScript and not React
    // This is the very first function that is called when an instance of this Class is created.
    // We can initialize state here
    constructor(props){
        console.log("In constructor")
        super(props); // Super is a reference to parent's constructor reference. this is called to make sure the React.Component class's constructor is called.
        
        // this is the only time we do a direct assignment to this.state
        this.state = {
            lat: null,
            error: false,
            errorMessage: "",
            loaded: false
        }
    }

    componentDidMount(){
        console.log("Inside component did mount")
        window.navigator.geolocation.getCurrentPosition(
                    (position) => {
                        console.log(position); 
                        // setState also came from React.Component
                        this.setState({
                        lat: position.coords.latitude,
                        loaded: true
                    }) 
                    }, // the success callback, i.e the function that's called when location has successfully been retrieved
                    (positionError) => {
                        console.log(positionError);
                        this.setState({
                            loaded: true,
                            error: true,
                            errorMessage: positionError.message
                        })

                    } // the failure callback, i.e the function that's called when location hasn't been retrived successfully
                )
    }

    componentDidUpdate(){
        console.log("Component was updated and re-rendered")
    }


    renderContent(){
       return this.state.loaded ? 
            this.state.error ? 
                 <div> {this.state.errorMessage} </div>
                :  <SeasonDisplay lat={this.state.lat}/>
       : <Spinner message="Please acceept location request"/>

    }
    // React says we HAVE to define render. It gets called very frequently, so we shouldn't put time consuming calls like window.navigator.geolocation inside render.
    render(){
        console.log("In render")
        return (
           <div>
               {this.renderContent()}
           </div>
        )
    }
}

ReactDOM.render(<AppClass/>, document.querySelector("#root"))