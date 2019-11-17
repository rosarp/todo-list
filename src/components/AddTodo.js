import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

function AddTodo(props) {
  const [input, setInput] = useState('');

  updateInput = input => {
    setInput(input);
  }

  handleAddTodo = () => {
    props.addTodo(input);
    setInput('');
  }

  return (
    <div>
      <input onChange{e => updateInput(e.target.value)} value={input} />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
}

export default connect(null, { addTodo })(AddTodo);
