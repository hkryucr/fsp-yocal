import { connect } from 'react-redux';
import UserAuth from 'js/components/user_auth/user_auth';
import { fetchClearErrors } from 'actions/session_actions'

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors,
    formType: 'Log In'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (action_name) => dispatch(action_name),
    fetchClearErrors: () => dispatch(fetchClearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserAuth);
