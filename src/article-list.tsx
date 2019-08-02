import * as React from 'react'
import Article from './article-new'
import {IArticle} from './article'

interface Props {
    articles: IArticle[]
}

interface State {
    openArticleId?: string
}

export default class ArticleList extends React.Component<Props, State> {
    state: State = {
        openArticleId: undefined
    }

    toggleOpenArticle = (article: IArticle) => this.setState({ openArticleId: article.id })

    render() {
        return (
            <div>
                {this.props.articles.map((article) =>
                    <Article article={article}
                             isOpen={article.id === this.state.openArticleId}
                             onBtnClick={this.toggleOpenArticle}
                             key={article.id}/>
                )}
            </div>
        )
    }
}
