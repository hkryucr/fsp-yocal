import { connect } from 'react-redux';
import MainSection from 'js/components/main_section/main_section';
import { logout } from 'actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    curState: state
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
