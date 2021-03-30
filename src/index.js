import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tabs from "./components/Tabs";

class QuizBuilder extends React.Component {
  render() {
    return (
      <div className="quizbuilder">
        <div className="titlebar">
          <h1>Make Your Own Quiz!</h1>
        </div>
        
        <Tabs>
          <div label="Write Questions">
            <p>Here will be the section for writing questions, need to develop forms for it</p>
          </div>
          <div label="Map Results">
            <p>Here we will be able to map the quesitons to results</p>
          </div>
          <div label="Save Your Quiz">
            <p>Have to figure out how to save the quiz</p>
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