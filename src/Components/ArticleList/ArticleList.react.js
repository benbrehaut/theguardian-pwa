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
              <div className="c-articles-list__article" key={id} >
                <Card as="article" index={id + 1} data={article} />
              </div>
            )
          })}
        </div>
        ) : (
        <>
          <p>Loading...</p>
        </>
      )}

    </div>
  )
}

export default ArticleList;