import React, { PureComponent } from 'react';
import api from '../../services/api'
import AppBar from './../../Components/AppBar'
import ArticleList from './../../Components/ArticleList'

export class Section extends PureComponent {
    constructor() {
        super()

        this.state = {
            sectionNewsArticles: [],
            isLoading: true
        }

        this.getSectionNews = this.getSectionNews.bind(this);
    }

    getSectionNews = (url) => {
        const sectionURL = url;

        api.get(`${sectionURL}?show-fields=all`)
            .then((res) => {
                this.setState({
                    sectionNewsArticles: res.data.response,
                    isLoading: false
                })
            })
            .catch((res) => {
                console.error(res);
            })
    }

    componentDidMount() {
        const {pathname} = this.props.location
        this.getSectionNews(pathname);
    }

    render() {
        const {isLoading} = this.state;
        const section = this.state.sectionNewsArticles;

        return(
            <>
                {isLoading ? (
                    <>
                        Loading
                    </>
                ) : (
                    <>
                        <AppBar title={section.section.webTitle} />
                        <ArticleList articles={section.results} />
                    </>
                )}
            </>
        )
    }
}