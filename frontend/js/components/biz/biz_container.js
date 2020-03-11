import { connect } from 'react-redux';
import { fetchBusiness } from 'actions/business_actions';
import { logout } from 'actions/session_actions';
import Biz from 'js/components/biz/biz';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    curBusinessId: ownProps.match.params.id,
    businesses: state.entities.businesses,
    hours: state.entities.hours,
    reviews: state.entities.reviews,
    categories: state.entities.categories,
    users: state.entities.users,
    reviewers: state.entities.reviewers
})

const mapDispatchToProps = (dispatch) => ({
    fetchBusiness: (id) => dispatch(fetchBusiness(id)),
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Biz);
