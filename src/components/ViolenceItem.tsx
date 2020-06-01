import React, { Fragment } from 'react';
import './ViolenceItem.scss'

type Props = {
  violence: Violence;
}

interface Violence {
  title: string;
  names?: string[];
  description: string;
  sources: string[];
};

const ViolenceItem = (props: Props) => {
  const { violence } = props;

  return (
    <div className="violence-item">
      <h3 className="violence-item__title">
        {violence.title}
      </h3>
      {
        violence.names &&
        <p className="violence-item__names">
          {violence.names.map(name => <span key={name}>{name}</span>)}
        </p>
      }
      <p className="violence-item__description">
        {violence.description}
      </p>
      <p className="violence-item__sources">
        Sources:
        &nbsp;
        {
          violence.sources.map((source, idx) => (
            <Fragment key={idx}>
              <a href={source} target="_blank" rel="noopener noreferrer">
                {source.replace(/https:\/\//, '').replace(/\/*/, '')}
              </a>
              , &nbsp;
            </ Fragment>
          ))
        }
      </p>
    </div>
  );
}

export default ViolenceItem;
