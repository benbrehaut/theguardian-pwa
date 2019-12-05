import React from 'react';

import Article from './../Article'
import Section from './../Section'

export default function RedirectSectionArticle(props) {
    if (props.match.isExact) {
        return <Section {...props} />
    }
    else {
        return <Article {...props} />
    }
}