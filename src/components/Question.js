import React from 'react';

function Question(props) {

  return (
    <div>
     <h2 className="question">{props.content}</h2>

  </div>
  );
}

Question.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Question;
