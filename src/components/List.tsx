import React from 'react';
import './List.scss';
import violences from '../data/violences.json';
import ViolenceItem from './ViolenceItem';

const List = () => {
  return (
    <div className="violence-list">
      {violences.map((item) => (
        <ViolenceItem violence={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
