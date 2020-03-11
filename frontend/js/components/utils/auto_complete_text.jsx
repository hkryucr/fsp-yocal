import React from 'react';

class AutoCompleteText extends React.Component{

    constructor(props){
        super(props)
        this.items = [
            "this",
            "is",
            "auto",
            "complete",
            "text"
        ];
        this.state = {
            candidates: [],
            text: ""
        }
        this.candidateSelected = this.candidateSelected.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(e){
        const value = e.target.value;
        let candidates;
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            candidates = this.items.sort().filter(item => regex.test(item));
        }
        this.setState({
            candidates,
            text: value
        })
    }

    renderCandidates(){
        const { candidates } = this.state;
        if (candidates.length === 0) return null;
        return (
            <ul>
                {candidates.map((item) => <li>{item}</li>)}
            </ul>
        )
    }

    candidateSelected(value){
        this.setState({
            text: value, 
            candidates: []
        })
    }
    
    render(){
        const { text } = this.state;

        return(
            <div className="auto-complete-text">
                <input value={text} onChange={this.handleTextChange} type="text"/>
                <ul>
                    {this.items.map((item, idx)=> <li key={idx} onClick={this.candidateSelected} >{item}</li>)}
                </ul>
            </div>
        )
    }
}

export default AutoCompleteText;
