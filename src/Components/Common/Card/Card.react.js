import React from 'react';
import {Link } from 'react-router-dom'
import styles from './Card.scss'

const Card = ({ data, micro }) => {
  if (micro) {
    return(
      <article className="o-card o-card--micro">
        <Link className="o-card__link" to={ data.id }></Link>
        <h2 className="o-card__title">{ data.webTitle }</h2>
        {/* {JSON.stringify(data)} */}
      </article>
    )
  }
  else {
    return(
      <article className="o-card">
        <img className="o-card__img" src={ data.fields.thumbnail } alt={ data.fields.trailText } />
        <div className="o-card__inner">
          <h2 className="o-card__title">{ data.webTitle }</h2>
          <p className="o-card__content" dangerouslySetInnerHTML={{ __html: data.fields.trailText }} />
          {/* <span>By { data.fields.byline } </span> */}
          {/* {JSON.stringify(data)} */}
        </div>
        <Link className="o-card__link" tabIndex="-1" aria-hidden={true} to={ data.id }>{ data.webTitle }</Link>
      </article>
    )
  }
}

export default Card;
