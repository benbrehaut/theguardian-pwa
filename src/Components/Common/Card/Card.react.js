import React from 'react';
import {Link } from 'react-router-dom'

import './Card.scss'

const Card = ({ image, title, text, link, imgLoading, micro }) => { 
  if (micro) {
    return(
      <article className="o-card o-card--micro">
        <Link className="o-card__link" to={ link }></Link>
        <h2 className="o-card__title">
          <Link to={link}>{ title }</Link>
        </h2>
      </article>
    )
  }
  else {
    return(
      <article className="o-card">
        <>
          {image ? <img className="o-card__img" src={image} alt={text} loading={imgLoading} /> : null}
          <div className="o-card__inner">
            <h2 className="o-card__title">
              <Link to={link}>{title}</Link>
            </h2>
            <p className="o-card__content" dangerouslySetInnerHTML={{ __html: text }} />
          </div>
          <Link className="o-card__link" tabIndex="-1" aria-hidden={true} to={link}>{title}</Link>
        </>
      </article>
    )
  }
}

export default Card;
