import React, { Component } from 'react';

import AppBar from './../../Components/AppBar'

import api from '../../services/api.js'


export default class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: [],
      isLoading: true
    }
  }

  componentDidMount() {
    this.getArticle(this.props.location.pathname)
  }

  getArticle = (articleID) => {    
    api.get(`${articleID}?show-fields=all`)
      .then((res) => {
        this.setState({
          article: res.data.response.content,
          isLoading: false
        })
      })
      .catch((res) => {
        console.error(res);
      })
  }

  render() {
    const { article, isLoading } = this.state;
    return(
      <>
        <AppBar>
          Article
        </AppBar>
        {!isLoading ? (
          <div>
            { article.sectionName }
            <img src={article.fields.thumbnail} alt={ article.fields.byline } />
            <h1>{ article.webTitle }</h1>
            <p dangerouslySetInnerHTML={{ __html: article.fields.standfirst }} />
            <time>{ article.fields.firstPublicationDate }</time>
            { article.fields.byline }
            <div dangerouslySetInnerHTML={{ __html: article.fields.body }} />
          </div>
        ) : (
          <div>
            <p>Is loading</p>
          </div>
        )}
      </>
    )
  }
}