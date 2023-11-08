import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            {id:"abcJob1",title:"Developer", salary:"500"},
            {id:"abcJob2",title:"Testers", salary:"400"},
            {id:"abcJob3",title:"Project managers", salary:"1000"},
        ],
    }
    
    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job],
        })
       

    }

    deleteAJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob,
        })
    }
    
    // state = {
    //     name : 'Ronaldo',
    //     channel: 'Hoi dan IT',
    // }

    // handleOnChangeName = (event) => {
    //     // this.state.name = event.target.name; BAD CODE NEVER USE
    //     this.setState({
    //         name : event.target.value,
    //     })
    // }

    // handleClickButton = () => {
    //     alert('Click me');
    // }

    //  JSX 
    render() {
        console.log(this.state);
        return(
            <>
            <AddComponent 
                addNewJob = {this.addNewJob}
            />
                
                <ChildComponent 
                    arrJobs={this.state.arrJobs} 
                    deleteAJob = {this.deleteAJob}
                />
            </>
        )

        
    }
}

export default MyComponent;