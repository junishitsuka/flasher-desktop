import * as actions from "../actions/RootAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MainView from "../components/MainView.jsx";
import RootReducer from "../reducers/RootReducer";

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {state};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainView);
