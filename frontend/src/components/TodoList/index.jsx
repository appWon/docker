import React from 'react';
import * as S from './TodoList.style';

const TodoList = ({ todoList }) => {
  return (
    <S.TodoList>
      <ul>
        {todoList.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </S.TodoList>
  );
};

export default TodoList;
