import { connect } from 'react-redux';
import RegisterSignup from 'js/components/user_auth/register_signup';
import UserAuth from 'js/components/user_auth/user_auth';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors,
    formType: 'Log In'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (action_name) => dispatch(action_name)
})

export default connect(mapStateToProps, mapDispatchToProps)(UserAuth);
