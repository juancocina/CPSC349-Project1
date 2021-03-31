import React, { Component } from 'react';

class Question extends Component {
    constructor(props){
        super(props);

        this.state = {
            question1: '',
            answer1: '', answer2: '', answer3: '', answer4: '',
            answer5: '', answer6: '', answer7: '', answer8: '',
            answer9: '', answer10: '', answer11: '', answer12: '',
            answer13: '', answer14: '', answer15: '', answer16: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        /* what happens when the value is changed and for what section */
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('A value was submitted ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="question">
                <h1>Add Questions</h1>
                <form onSubmit={this.handleSubmit}>
                   <fieldset>
                       <label>
                            <p>Question1:</p>
                            <input name="question1" type="text" value={this.state.question1} onChange={this.handleChange} />
                        </label> 
                        <label>
                            <p>Write Your Answers</p>
                        </label>
                        <p>1. <input name="answer1" type="text" value={this.state.answer1} onChange={this.handleChange}/></p>
                        <p>2. <input name="answer2" type="text" value={this.state.answer2} onChange={this.handleChange}/></p>
                        <p>3. <input name="answer3" type="text" value={this.state.answer3} onChange={this.handleChange}/></p>
                        <p>4. <input name="answer4" type="text" value={this.state.answer4} onChange={this.handleChange}/></p>
                    </fieldset>
                    <fieldset>
                    <label>
                            <p>Question2:</p>
                            <input name="question2" type="text" value={this.state.question2} onChange={this.handleChange} />
                        </label> 
                        <label>
                            <p>Write Your Answers</p>
                        </label>
                        <p>5. <input name="answer5" type="text" value={this.state.answer5} onChange={this.handleChange}/></p>
                        <p>6. <input name="answer6" type="text" value={this.state.answer6} onChange={this.handleChange}/></p>
                        <p>7. <input name="answer7" type="text" value={this.state.answer7} onChange={this.handleChange}/></p>
                        <p>8. <input name="answer8" type="text" value={this.state.answer8} onChange={this.handleChange}/></p>
                    </fieldset>
                    <fieldset>
                    <label>
                            <p>Question3:</p>
                            <input name="question3" type="text" value={this.state.question3} onChange={this.handleChange} />
                        </label> 
                        <label>
                            <p>Write Your Answers</p>
                        </label>
                        <p>9.  <input name="answer9"  type="text" value={this.state.answer9}  onChange={this.handleChange}/></p>
                        <p>10. <input name="answer10" type="text" value={this.state.answer10} onChange={this.handleChange}/></p>
                        <p>11. <input name="answer11" type="text" value={this.state.answer11} onChange={this.handleChange}/></p>
                        <p>12. <input name="answer12" type="text" value={this.state.answer12} onChange={this.handleChange}/></p>
                    </fieldset>
                    <fieldset>
                    <label>
                            <p>Question4:</p>
                            <input name="question4" type="text" value={this.state.question4} onChange={this.handleChange} />
                        </label> 
                        <label>
                            <p>Write Your Answers</p>
                        </label>
                        <p>13. <input name="answer13" type="text" value={this.state.answer13} onChange={this.handleChange}/></p>
                        <p>14. <input name="answer14" type="text" value={this.state.answer14} onChange={this.handleChange}/></p>
                        <p>15. <input name="answer15" type="text" value={this.state.answer15} onChange={this.handleChange}/></p>
                        <p>16. <input name="answer16" type="text" value={this.state.answer16} onChange={this.handleChange}/></p>
                    </fieldset>
                <input type="submit" value="Submit"/>
                </form> 
            </div>
        )
    }
}

export default Question;