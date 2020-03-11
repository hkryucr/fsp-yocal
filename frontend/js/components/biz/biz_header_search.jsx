import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BizHeaderSearch extends React.Component{
    constructor(props) {
        super(props)
        this.items = [...this.props.businessList.map((biz)=>biz.split("_").join(" ")), ...this.props.categoryList];
        this.state = {
            candidates: [],
            text: ""
        }
        this.candidateSelected = this.candidateSelected.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(e, "handle submit")
        this.props.fetchBusinesses({
            text: this.state.text
        }).then(()=>{
            this.setState({
                candidates: [],
                text: ""
            })
        })
    }

    handleTextChange(e) {
        const value = e.target.value;
        let candidates = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            candidates = this.items.sort().filter(item => regex.test(item));
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

    candidateSelected(e) {        
        this.setState({
            text: e.nativeEvent.target.innerText,
            candidates: []
        })
    }

    render(){

        const { text } = this.state;

        return (
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
                                <div className="pseudo-input-label-near">
                                    <span className="pseudo-input-wrapper">
                                        <span className="pseudo-input-field-holder-biz">
                                            <input type="text" placeholder="San Francisco, CA" />
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
        )
    }
}

export default BizHeaderSearch