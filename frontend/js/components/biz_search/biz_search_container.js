import { connect } from 'react-redux';
import { fetchBusinesses } from 'actions/business_actions';
import { logout } from 'actions/session_actions';
import BizSearch from 'js/components/biz_search/biz_search';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    // curBusinessId: ownProps.match.params.id,
    entities: state.entities,
    businesses: state.entities.businesses
    // hours: state.entities.hours,
    // reviews: state.entities.reviews,
    // categories: state.entities.categories,
    // users: state.entities.users,
    // reviewers: state.entities.reviewers
})

const mapDispatchToProps = (dispatch) => ({
    fetchBusinesses: (bounds) => dispatch(fetchBusinesses(bounds)),
    logout: () => dispatch(logout()),
    // updateBounds: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(BizSearch);
