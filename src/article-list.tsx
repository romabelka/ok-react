import * as React from 'react'
import {observer} from 'mobx-react'
import Article from './article-new'
import withAccordion from './decorators/accordion'
import articlesStore from './stores'
import {IArticle} from './article'

interface Props {
    articles: IArticle[]
    toggleOpenItem: (article: { id: string }) => void
    openItemId?: string
}

class ArticleList extends React.PureComponent<Props> {

    render() {
        const { openItemId, toggleOpenItem } = this.props
        return (
            <div>
                {articlesStore.entities.map((article) =>
                    <Article article={article}
                             isOpen={openItemId === article.id}
                             onBtnClick={toggleOpenItem}
                             key={article.id}/>
                )}
            </div>
        )
    }
}

export default withAccordion(ArticleList)
