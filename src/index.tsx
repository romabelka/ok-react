import * as React from 'react'
import * as ReactDOM from 'react-dom'
import articles from './fixtures.json'
import {IArticle} from "./article";
import withAccordion from "./decorators/accordion";
import ArticleList from "./article-list";

const ArticleListWithAccordion = withAccordion<{articles: IArticle[]}>(ArticleList);

ReactDOM.render(<ArticleListWithAccordion articles={articles}/>, document.getElementById('root'));
