import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div classNmae="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
