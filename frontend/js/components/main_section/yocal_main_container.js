import { connect } from 'react-redux';
import { logout } from 'actions/session_actions';
import { fetchBusinesses } from 'actions/business_actions';
import YocalMain from 'js/components/main_section/yocal_main';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    entities: state.entities,
    businesses: state.entities.businesses.businessItems,
    businessList: state.entities.businesses.businessList,
    categoryList: state.entities.businesses.categoryList,
})

const mapDispatchToProps = (dispatch) => ({
    fetchBusinesses: (bounds) => dispatch(fetchBusinesses(bounds)),
    logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(YocalMain);
