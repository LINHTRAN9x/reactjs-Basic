import React from "react";

class MyComponent extends React.Component {
    state = {
        name : 'Ronaldo',
        channel: 'Hoi dan IT',
    }

    handleOnChangeName = (event) => {
        this.setState({
            name : event.target.value
        })
    }

    handleClickButton = () => {
        alert('Click me');
    }

    //  JSX 
    render() {


        return (/*className not class*/
        // <></> React.Fragment shortcut
        <>
            <div className="first">
                <input type="text" value={this.state.name} onChange={(event) => this.handleOnChangeName(event)}></input>
                Hello my name is {this.state.name} 
            </div>
            <div>My youtube channel {this.state['channel']}</div>
            <div className="third">
                <button onClick={() => this.handleClickButton()}>Click me</button>
            </div>
        </>
        )
    }
}

export default MyComponent;