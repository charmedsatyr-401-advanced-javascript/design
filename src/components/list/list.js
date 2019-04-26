import React from 'react';

const List = props => {
  // Currently supporting ordered and unordered types
  // Style can be `bright` or `vampire`
  const { items, type, style } = props;
  const content = items.map((item, index) => <li key={index}>{item}</li>);

  return type === 'unordered' ? (
    <ul className={style}>{content}</ul>
  ) : (
    <ol className={style}>{content}</ol>
  );
};

export default List;
