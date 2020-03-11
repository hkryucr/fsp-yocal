import React from 'react';

class HideableSearchBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isHidden: false,
        }
    }

    toggleIsHidden(){
        this.setState(()=>({
            isHidden: !currentState.isHidden,
        }))
    }

    render(){
        return (
            <div>
                <button onClick={()=>this.toggleIsHidden()}>Toggle</button>
                {this.state && this.props.text }
            </div>
        )
    }

}
export default HideableSearchBox;