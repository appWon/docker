import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

import TodoList from './components/TodoList';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleKeyPress = ({ code }) => {
    if (code === 'Enter' && inputValue !== '') {
      setTodoList([...todoList, inputValue]);
      setInputValue('');
    }
  };

  useEffect(async () => {
    const getData = async () => {
      const result = await axios('');

      setTodoList(result.data);
    };

    getData();
  }, []);

  return (
    <div>
      {console.log(11)}
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="입력 후 엔터를 눌러주세요."
      />
      <TodoList todoList={todoList} />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
