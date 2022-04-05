import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/authReducer";
import Navibar from "./Navibar";

class HeaderContainer extends React.Component {
  render() {
    return <Navibar {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { logout })(HeaderContainer);
