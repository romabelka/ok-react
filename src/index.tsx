import * as React from 'react'
import * as ReactDOM from 'react-dom'
import articles from './fixtures.json'
import ArticleListWithAccordion from './article-list'

ReactDOM.render(<ArticleListWithAccordion articles={articles}/>, document.getElementById('root'))
