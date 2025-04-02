import React from "react";
import { withRouter } from "react-router-dom";
import logo from "../../assets/images/img_logo_blue.png";
import { connect } from "react-redux";
class Home extends React.Component {
  render() {
    return (
      <>
        <div>
          <h1>Home Page</h1>
        </div>
        <div>
          <img src={logo} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};
export default connect(mapStateToProps)(withRouter(Home));
