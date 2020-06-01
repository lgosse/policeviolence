import React from 'react';
import './List.scss';
import violences from '../data/violences.json';
import ViolenceItem from './ViolenceItem';

const List = () => {
  return (
    <div className="violence-list">
      {violences.map((item, idx) => (
        <ViolenceItem violence={item} key={idx} />
      ))}
    </div>
  );
};

export default List;
