import React from 'react';
import Button from "@material-ui/core/Button";
import '@fontsource/roboto';

class App extends React.Component{
    render(){
        return (
            <div>
                <h1><span className="sec">Hello, </span><span className="prim">{this.props.name}</span></h1>
                <Button variant="contained">wow man cool!</Button>
            </div>
        );
    }
}

export default App;