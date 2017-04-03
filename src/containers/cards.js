import React from 'react';
import TextCard from '../cards/textCard';

export default () => {
  return (
    <ul>
      <li>
        <TextCard name="this is a text card" format="editor" />
      </li>
    </ul>
  );  
}
