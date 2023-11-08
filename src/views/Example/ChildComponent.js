import React from "react";
import './Demo.scss';

class ChildComponent extends React.Component {
    state = {
        showJobs: false,
    }
    handleShowHide = () => {
        this.setState(
            {
            showJobs : !this.state.showJobs
            }
        )
    };

    handleOnClickDelete = (job) => {
        this.props.deleteAJob(job);
    }

    //  JSX 
    render() {
        console.log('props: ', this.props);
        //syntax rut gon cua js;
        let { arrJobs} = this.props;
        let {showJobs} = this.state;
        return(
            <>
                
            {showJobs === false ? 
                <div><button className="btn-show" onClick={() => this.handleShowHide()}>Show</button></div>
            :
               <>
                <div className="job-lists">
                    {
                        arrJobs.map((item) =>{
                            if(item.salary >= 500){
                                return (
                                    <div key={item.id}>
                                        {item.title} - {item.salary}$ &nbsp; 
                                        <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                    </div>
                                )

                            }
                        })
                    }
                </div>
                <div>
                    <button onClick={() => this.handleShowHide()}>Hide</button>
                </div>
               </>
            }
            </>
        )

    }
}

export default ChildComponent;