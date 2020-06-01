import React from 'react';
import './ViolenceItem.scss'

type Props = {
  violence: Violence;
}

interface Violence {
  id: number;
  name: string;
  age?: number;
  picture?: string;
  location: string;
  description: string;
  disposition: string;
  article: string;
  date: string;
};

const ViolenceItem = (props: Props) => {
  const { violence } = props;

  return (
    <div className="violence-item">
      <h3 className="violence-item__name">
        {violence.name}, {violence.age}
      </h3>
      {
        <p className="violence-item__location">
          {violence.location}, {new Date(violence.date).toLocaleString()}
        </p>
      }
      <p className="violence-item__description">
        {violence.description}
      </p>
      <p className="violence-item__sources">
        Article:&nbsp;
        <a href={violence.article} target="_blank" rel="noopener noreferrer">
          {violence.article.replace(/https:\/\//, '').replace(/\/.+/, '')}
        </a>
      </p>
    </div>
  );
}

export default ViolenceItem;
