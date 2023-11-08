import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
import Color from "../HOC/Color";
//import images :
import logo from "../../assets/images/logo.png";
//redux
import { connect } from "react-redux";

class Home extends React.Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.history.push("/todo");
  //   }, 3000);
  // }

  render() {
    console.log("... checkProps: ", this.props);
    return (
      <>
        <div>Hello world from Homepage!</div>
        <div>
          <img
            src={logo}
            width="200px"
            height="200px"
            style={{ borderRadius: "50%" }}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};
export default connect(mapStateToProps)(Color(Home));
