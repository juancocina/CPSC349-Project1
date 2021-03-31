import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tabs from "./components/Tabs";

class QuizBuilder extends React.Component {
  addQuestion() {
    const handleClick = event => {
      event.preventDefault();
      alert('add a question was clicked');
    }

    return (
      <div className="questionSection">
        <h1>Add Questions</h1>
        <div className="question">
          <fieldset>
            <label>
              <p>test</p>
              <input name="question"/>
            </label>
          </fieldset>
          <button onClick={handleClick}>Add a Question</button>
        </div>
      </div>
    )
  }
  quizName() {
    const handleSubmit = event => {
      event.preventDefault();
      alert('You have submitted the form');
    }

    return (
      <div className="questionSection">
        <h1>Title Your Quiz</h1>
        <div className="quizName">
          <form onSubmit={handleSubmit}>
           <fieldset>
              <label>
                <p>Ex: Which Harry Potter Character Are You?</p>
                <input name="title"/>
              </label>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="quizbuilder">
        <div className="titlebar">
          <h1>Make Your Own Quiz!</h1>
          <p>Code Bros - CPSC 349: Project 1</p>
        </div>
        
        <Tabs>
          <div label="Create">
            <p>Here will be the section for writing questions, need to develop forms for it</p>
            {this.quizName()}
            {this.addQuestion()}
          </div>
          <div label="Map Results">
            <p>Here we will be able to map the quesitons to results</p>
          </div>
          <div label="Save Your Quiz">
            <p>Have to figure out how to save the quiz</p>
          </div>
          <div label="How To Use">
            <p>Once everything runs and works, need to write this section down to explain how it works</p>
          </div>
        </Tabs>
      </div>
    );
  }
}

ReactDOM.render(
  <QuizBuilder />,
  document.getElementById('root')
);
