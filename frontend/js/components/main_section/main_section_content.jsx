import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';
import 'css/components/biz/biz_header_upper_items.css';
import "babel-polyfill";

class MainSectionContent extends React.Component {
    constructor(props) {
        super(props)
        this.items = [...this.props.businessList.map((biz) => biz.split("_").join(" ")), ...this.props.categoryList];
        this.state = {
            candidates: [],
            text: ""
        };
        this.candidateSelected = this.candidateSelected.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/search?desc=${this.state.text}`)
    }

    handleTextChange(e) {
        const value = e.target.value;
        let candidates = [];
        if (value.length > 0) {
            const regex = new RegExp(`${value.toLowerCase()}`, 'i');
            candidates = this.items.sort().filter(item => regex.test(item.toLowerCase()));
        }
        this.setState({
            candidates,
            text: value
        })
    }

    renderCandidates() {
        const { candidates } = this.state;
        if (candidates.length === 0) return null;
        return (
            <div className="auto-complete-text-container">
                {candidates.slice(0, 5).map((item, idx) => <li onClick={this.candidateSelected} key={idx}><span>{item}</span></li>)}
            </div>
        )
    }

    async candidateSelected(e) {
        await this.setState({
            text: e.nativeEvent.target.innerText,
            candidates: []
        })
        this.handleSubmit(e);
    }

    render (){
        const { text } = this.state;
        return (
            <div className="main-section-container-content">
                <Link to="/" className="logo">
                    <img src="/assets/yelp_logo.png" className="logo-image" />
                </Link>
                <div className="header-search">
                    <div className="biz-header-container-content">
                        <form onSubmit={this.handleSubmit} className="header-search-form">
                            <div className="header-search-form-container">
                                <div className="header-search-form-arrange-unit">
                                    <div className="pseudo-input-label-header-search">
                                        <span className="pseudo-input-wrapper-biz">
                                            <span className="pseudo-input-field-holder-biz">
                                                <label>
                                                    <input value={text} onChange={this.handleTextChange} type="text" placeholder="burgers, barbers, spas, handymen..." />
                                                </label>
                                            </span>
                                        </span>
                                    </div>

                                    <div className="auto-complete-text">
                                        {this.renderCandidates()}
                                    </div>

                                </div>
                                <div className="header-search-form-arrange-unit arrange-unit-right">
                                    <div className="header-search-form-middle-border"></div>
                                    <div className="pseudo-input-label-near" aria-label="The search boundary in Yocal is limited to the city of San Francisco." data-balloon-pos="up">
                                        <span className="pseudo-input-wrapper">
                                            <span className="pseudo-input-field-holder-biz">
                                                <input type="text" placeholder="San Francisco, CA" disabled/>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <button className="header-search-form-button">
                                    <FontAwesomeIcon icon={faSearch} style={{ color: 'white' }} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainSectionContent;
