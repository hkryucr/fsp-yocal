import { connect } from 'react-redux';
import { fetchBusinesses } from 'actions/business_actions';
import { logout } from 'actions/session_actions';
import { clearupData } from 'actions/clearup_actions';
import BizSearch from 'js/components/biz_search/biz_search';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    entities: state.entities,
    businesses: state.entities.businesses.businessItems,
    businessList: state.entities.businesses.businessList,
    categoryList: state.entities.businesses.categoryList
})

const mapDispatchToProps = (dispatch) => ({
    fetchBusinesses: (bounds) => dispatch(fetchBusinesses(bounds)),
    logout: () => dispatch(logout()),
    clearupData: () => dispatch(clearupData())
    // updateBounds: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(BizSearch);
