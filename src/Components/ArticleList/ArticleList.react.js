import React from 'react';

import Card from './../Common/Card'

import './ArticleList.scss'

const ArticleList = ({ articles, title, loading }) => {
  return(
    <div className="c-articles-list">
      <h2 className="c-articles-list__title">{ title }</h2>
      {!loading ? (
        <div className="c-articles-list__articles">
          {articles.results.map((article, id) => {
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
        ) : (
          <div className="c-articles-list__articles">
            <div className="c-articles-list__article c-articles-list__article--loading">
              <Card isLoading={true} />
            </div>
          </div>
      )}

    </div>
  )
}

export default ArticleList;