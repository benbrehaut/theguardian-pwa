import React, { Component } from 'react';

import api from '../../services/api.js'

import AppBar from './../../Components/AppBar'
import ArticleList from './../../Components/ArticleList'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ukNewsArticles: [],
      isLoading: true
    }

    this.getNews = this.getNews.bind(this);
  }

  componentDidMount() {
    this.getNews();
  }

  getNews = () => {
    const $this = this;

    api.get(`/uk-news?show-fields=all`)
      .then((res) => {
        setTimeout(function() {
          $this.setState({
            ukNewsArticles: res.data.response,
            isLoading: false
          })
        }, 1000)
      })
      .catch((res) => {
        console.error(res);
      })
  }

  render() {
    const { isLoading, ukNewsArticles } = this.state;

    return(
      <>
        <AppBar>
          Home
        </AppBar>
        <ArticleList title="UK News" loading={isLoading} articles={ukNewsArticles} />
      </>
    )
  }
}