import * as React from 'react'
import Article from './article-new'
import {IArticle} from './article'
import Accordion from './components/accordion'

interface Props {
    articles: IArticle[]
}

export default class ArticleList extends Accordion<Props> {

    render() {
        return (
            <div>
                {this.props.articles.map((article) =>
                    <Article article={article}
                             isOpen={article.id === this.state.openItemId}
                             onBtnClick={this.toggleOpenItem}
                             key={article.id}/>
                )}
            </div>
        )
    }
}
