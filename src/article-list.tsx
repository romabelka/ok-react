import * as React from 'react'
import Article from './article-new'
import {IArticle} from './article'

interface Props {
    articles: IArticle[]
}

interface State {
}

export default class ArticleList extends React.Component<Props, State> {
    render() {
        return (
            <div>
                {this.props.articles.map((article) =>
                    <Article article={article} key={article.id}/>
                )}
            </div>
        )
    }
}
