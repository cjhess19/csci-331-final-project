import React from 'react';
import './AutoCompleteText.css';
export default class AutoCompleteText extends React.Component{
    constructor(props){
        super(props);
        this.items = [
            'Bridger Bowl Ski Resort',
            'Whitefish Ski Resort',
            'Big Sky Ski Resort',
            'Blacktail Mountain',
            'Red Lodge Ski Resort',
            'Discovery Ski Resort',
            'Lost Trail Ski Resort',
            'Showdown Ski Resort',
            'Great Divide Ski Resort',
            'Montana Snow Bowl',
            'Maverik Ski Resort',
            'Turner Mountain',
            'Blacktail Mountain',
            'Teton Pass',
            'Lookout Pass Ski Area',
            'Bear Pass Ski Bowl'
        ];
        this.state ={
            suggestions: [],
        };
    }

onTextChanged = (e) =>{
const value = e.target.value;
let suggestions = [];
if(value.length > 0){
    const regex = new RegExp(`^${value}`, 'i');
    suggestions = this.items.sort().filter(v => regex.test(v));
}
this.setState(() => ({suggestions, text: value}));
}
renderSuggestions(){
    const { suggestions } = this.state;
    if(suggestions.legnth === 0){
        return null;
    }
    return(
        <ul>
                    {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
                </ul>
    )
}    

suggestionSelected(value){
    this.setState(() =>({
        text: value,
        suggestions: [],
    }))
}

    render(){
        const { text } = this.state;
        return(
            <div className="AutoCompleteText">
                <input value={text} onChange={this.onTextChanged} type="text" />
                {this.renderSuggestions()}
            </div>
        )
    }
}