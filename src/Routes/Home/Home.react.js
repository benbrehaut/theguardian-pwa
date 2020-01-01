import React, { Component } from 'react';

import api from '../../services/api.js'

import AppBar from './../../Components/AppBar'
import ArticleList from './../../Components/ArticleList'
import ActionBadge from './../../Components/Common/ActionBadge'

import { ReactComponent as SearchIcon } from './../../Static/icons/search.svg';
import { ReactComponent as RefreshIcon } from './../../Static/icons/refresh.svg';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ukNewsArticles: [],
      isLoading: true
    }

    this.getNews = this.getNews.bind(this);
    this.refreshApp = this.refreshApp.bind(this);
    this.openSearch = this.openSearch.bind(this);
  }

  componentDidMount() {
    this.getNews();
  }

  refreshApp = () => {
    console.log('Refresh')
  }

  openSearch = () => {
    console.log('Open search')
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
        <AppBar title="Home" 
          leftIcon={
            <ActionBadge fill="#000" onClick={this.openSearch} text="Open search menu">
              <SearchIcon />
            </ActionBadge>
          }
          rightIcon={
            <ActionBadge fill="#000" onClick={this.refreshApp} text="Refresh app">
              <RefreshIcon />
            </ActionBadge>
          }
        />
        {isLoading ? "" : <ArticleList title={ukNewsArticles.edition.webTitle} articles={ukNewsArticles.results} viewMorePath={ukNewsArticles.edition.id} />}
      </>
    )
  }
}