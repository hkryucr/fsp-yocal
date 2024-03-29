import { connect } from 'react-redux';
import { createReview } from 'actions/review_actions';
import { clearupData } from 'actions/clearup_actions';
import { fetchBusiness } from 'actions/business_actions';
import { logout } from 'actions/session_actions';
import WriteReview from 'js/components/write_review/write_review';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    curBusinessId: ownProps.match.params.id,
    businesses: state.entities.businesses,
    reviews: state.entities.reviews,
    reviewers: state.entities.reviewers
})

const mapDispatchToProps = (dispatch) => ({
    fetchBusiness: (id) => dispatch(fetchBusiness(id)),
    logout: () => dispatch(logout()),
    createReview: (review) => dispatch(createReview(review)),
    clearupData: ()=> dispatch(clearupData())
})

export default connect(mapStateToProps, mapDispatchToProps)(WriteReview);
