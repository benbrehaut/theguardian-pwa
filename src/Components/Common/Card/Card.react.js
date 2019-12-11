import React from 'react';
import {Link } from 'react-router-dom'

import './Card.scss'

const Card = ({ image, title, text, link, imgLoading, micro, isLoading }) => { 
  if (micro) {
    return(
      <article className="o-card o-card--micro">
        <Link className="o-card__link" to={ link }></Link>
        <h2 className="o-card__title">{ title }</h2>
      </article>
    )
  }
  else {
    return(
      <article className={`o-card ${isLoading ? 'is-loading' : ''}`}>
        {isLoading ? (
            <>
              <div className="o-card__img"></div>
                <div className="o-card__inner">
                <div className="o-card__title"></div>
                <div className="o-card__content"></div>
              </div>
            </>
          ) : (
            <>
              {image ? <img className="o-card__img" src={ image } alt={ text } loading={imgLoading} /> : null}
              <div className="o-card__inner">
                <h2 className="o-card__title">{ title }</h2>
                <p className="o-card__content" dangerouslySetInnerHTML={{ __html: text }} />
              </div>
              <Link className="o-card__link" tabIndex="-1" aria-hidden={true} to={ link }>{ title }</Link>
            </>
        )}
      </article>
    )
  }
}

export default Card;
