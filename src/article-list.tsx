import * as React from 'react'
import Article from './article-new'
import {IArticle} from './article'
import withAccordion from './decorators/accordion'

interface Props {
    articles: IArticle[]
    toggleOpenItem: (article: IArticle) => void
    openItemId?: string
}

class ArticleList extends React.PureComponent<Props> {
    render() {
        const { articles, openItemId, toggleOpenItem } = this.props
        return (
            <div>
                {articles.map((article) =>
                    <Article article={article}
                             isOpen={openItemId === article.id}
                             onBtnClick={toggleOpenItem}
                             key={article.id}/>
                )}
            </div>
        )
    }
}

export default withAccordion<any>(ArticleList)
