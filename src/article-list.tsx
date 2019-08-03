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

    componentDidMount(): void {
        this.props.articlesStore!.fetchAll()
    }

    render() {
        const { openItemId, toggleOpenItem, articlesStore } = this.props

        articlesStore!.getObj()

        if (articlesStore!.loading) return <h1>Loading...</h1>

        return (
            <div>
                {this.props.articlesStore!.list.map((article) =>
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
