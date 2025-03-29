import React from 'react';

const ReadMoreOrLess = ({ limit, children }) => {
  const text = children;

  return (
    <p>
      {text.substr(0, limit)}
      ...
    </p>
  );
};

export default ReadMoreOrLess;
