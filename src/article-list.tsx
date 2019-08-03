import * as React from 'react'
import {inject, observer} from 'mobx-react'
import Article from './article-new'
import withAccordion from './decorators/accordion'
import ArticlesStore from './stores/articles'

interface Props {
    toggleOpenItem: (article: { id: string }) => void
    openItemId?: string
    articlesStore?: ArticlesStore
}

@inject('articlesStore')
@observer
class ArticleList extends React.PureComponent<Props> {

    render() {
        const { openItemId, toggleOpenItem } = this.props
        return (
            <div>
                {this.props.articlesStore!.entities.map((article) =>
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
