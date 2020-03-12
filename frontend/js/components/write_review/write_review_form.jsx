import React from 'react';
import { faImages, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class WriteReviewForm extends React.Component{    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectRating = this.selectRating.bind(this);
        this.changeRatingText = this.changeRatingText.bind(this);
        this.handleText = this.handleText.bind(this);

        this.state = {
            author_id: 1,
            business_id: 1,
            business_name: 1,
            text: "",
            rating: 0,
            review_date: "",
            useful: 0,
            funny: 0,
            cool: 0,
            curRating: 0
        }
    }

    selectRating(e){
        e.preventDefault();
        let curDate = new Date();
        curDate = curDate.getFullYear() + '-' + (curDate.getMonth() + 1) + '-' + curDate.getDate();

        let curSpan = e.currentTarget;
        let siblingSpans = curSpan.parentNode.childNodes
        for (let i = 0; i < siblingSpans.length ;i++ ){
            siblingSpans[i].classList.remove("checked")
        }
        curSpan.classList.add("checked");
        const curRating = curSpan.firstElementChild.value
        this.setState({
            rating: curRating,
            review_date: curDate
        })
    }

    changeRatingText(e){
        e.preventDefault();
        const curInputVal = e.target.firstElementChild;
        if (curInputVal != null){
            this.setState({
                curRating: curInputVal.value
            })
        };
    }

    handleText(e){
        e.preventDefault();
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createReview({
            author_id: this.props.currentUser.id,
            business_id: this.props.businessId,
            business_name: this.props.businessName,
            text: this.state.text,
            rating: this.state.rating,
            review_date: this.state.review_date,
            useful: 0,
            funny: 0,
            cool: 0
        }).then(()=>{
            this.props.history.push(`/biz/${this.props.businessId}`);
        })
    }

    render(){
        console.log(this.props);

        const reviewSample = "Doesn’t look like much when you walk past, but I was practically dying of hunger so I popped in. The definition of a hole-in-the-wall. I got the regular hamburger and wow…  there are no words. A classic burger done right. Crisp bun, juicy patty, stuffed with all the essentials (ketchup, shredded lettuce, tomato, and pickles). There’s about a million options available between the menu board and wall full of specials, so it can get a little overwhelming, but you really can’t go wrong. Not much else to say besides go see for yourself! You won’t be disappointed."

        const ratingComments = {
            0: "Select your rating",
            1: "Eek!, Methinks not.",
            2: "Meh.I've experienced better.",
            3: "A-OK.",
            4: "Yay! I'm a fan.",
            5: "Woohoo! As good as it gets!"
        }

        const curComment = ratingComments[this.state.curRating];

        return (
            <div className="wrtie-review-form">
                <form>
                    <div className="wrtie-review-form-text">
                        <div className="wrtie-review-form-text-ratings">
                            <div className="star-ratings">
                                <span onClick={this.selectRating} onMouseOver={this.changeRatingText}>
                                    <input type="radio" name="rating" id="str5" value="5"/> 
                                    <label htmlFor="str5"></label>
                                </span>
                                <span onClick={this.selectRating} onMouseOver={this.changeRatingText}>
                                    <input type="radio" name="rating" id="str4" value="4"/>
                                    <label htmlFor="str4"></label>
                                </span>
                                <span onClick={this.selectRating} onMouseOver={this.changeRatingText}>
                                    <input type="radio" name="rating" id="str3" value="3"/>
                                    <label htmlFor="str3"></label>
                                </span>
                                <span onClick={this.selectRating} onMouseOver={this.changeRatingText}>
                                    <input type="radio" name="rating" id="str2" value="2"/>
                                    <label htmlFor="str2"></label>
                                </span>
                                <span onClick={this.selectRating} onMouseOver={this.changeRatingText}>
                                    <input type="radio" name="rating" id="str1" value="1"/>
                                    <label htmlFor="str1"></label>
                                </span>
                            </div>
                            <span>{curComment}</span>
                        </div>
                        <textarea onChange={this.handleText} type="text" placeholder={reviewSample}></textarea>
                    </div>
                    <div className="wrtie-review-form-photo">
                        <span>Attach Photos</span>
                        <span>Optional</span>
                    </div>
                    <div className="wrtie-review-form-photo-upload">
                        <input type="file" name="file" id="file" className="input-file"/>
                        <label htmlFor="file">
                            <FontAwesomeIcon icon={faImages} size="2x" color="#999999" />
                            <div>Upload</div>
                        </label>
                    </div>
                    <div className="wrtie-review-form-button">
                        <button type="submit" onClick={this.handleSubmit}>Post Review</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default WriteReviewForm;