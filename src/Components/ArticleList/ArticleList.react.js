import React from 'react';
import { Link } from 'react-router-dom'

import Button from './../Common/Button'
import ScreenReaderText from './../Common/ScreenReaderText'
import Card from './../Common/Card'

import './ArticleList.scss'

const ArticleList = ({ articles, title, viewMorePath }) => {
  return(
    <section className="c-articles-list">
      <h2 className="c-articles-list__title">{title}</h2>
      <Link to={viewMorePath} className="c-articles-list__link">View more <ScreenReaderText>articles about {title}</ScreenReaderText></Link>

      <div className="c-articles-list__articles">
        {articles.map((article, id) => {
          return(
            <div className="c-articles-list__article" key={id}>
              <Card 
                as="article"
                index={id + 1}
                title={article.webTitle}
                link={article.id}
                text={article.fields.trailText}
                image={article.fields.thumbnail}
                imgLoading="lazy"
              />
            </div>
          )
        })}
      </div>
      <div className="c-articles-list__more">
        <Button>More {title}</Button>
      </div>
    </section>
  )
}

export default ArticleList;