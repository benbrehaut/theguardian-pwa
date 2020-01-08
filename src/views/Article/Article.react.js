import React, { Component } from 'react';
import api from '../../services/api.js'
import AppBar from './../../Components/AppBar'
import ActionBadge from '../../Components/Common/ActionBadge'
import { ReactComponent as BackArrowIcon } from './../../Static/icons/chevron-left.svg';
import { ReactComponent as ShareIcon } from './../../Static/icons/share.svg';

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: [],
      isLoading: true
    }

    this.shareArticle = this.shareArticle.bind(this);
    this.goBack = this.goBack.bind(this);
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

  /**
   * goBack
   * Check how the user has come to the article and either go back to the previous app page
   * or take them to the homepage
   */
  goBack = () => {
    const {history} = this.props;

    // if user has come directly to the article
    if (history.action === "POP") {
      history.push('/')
    }
    // else they have come from isde the app
    else {
      history.goBack()
    }
  }
  
  // TODO
  shareArticle() {
    const $this = this;

    if (navigator.share !== undefined) {
      navigator.share({
        title: 'Guardian PWA Article',
        text: 'Check out this article',
        url: window.location.href
      })
    }
    else {
      console.log($this)
    }
  }

  render() {
    const { article, isLoading } = this.state;
    return(
      <>
        <AppBar title="Article" 
          leftIcon={
            <ActionBadge fill="#C70000" onClick={this.goBack} text="Return to previous page">
              <BackArrowIcon />
            </ActionBadge>
          }
          rightIcon={
            <ActionBadge fill="#C70000" onClick={this.shareArticle} text="Share article">
              <ShareIcon />
            </ActionBadge>
          }
        />
        {!isLoading ? (
          <article className="c-article" role="article">
            <img src={article.fields.thumbnail} alt={ article.fields.byline } />
            <h1>{ article.webTitle }</h1>
            <p dangerouslySetInnerHTML={{ __html: article.fields.standfirst }} />
            <time>{ article.fields.firstPublicationDate }</time>
            { article.fields.byline }
            <div dangerouslySetInnerHTML={{ __html: article.fields.body }} />
          </article>
        ) : (
          <div>
            <p>Is loading</p>
          </div>
        )}
      </>
    )
  }
}