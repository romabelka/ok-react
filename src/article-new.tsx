import React, {useContext, useEffect} from 'react'
import {IArticle} from './article'
import userContext from './contexts/username';
import CommentList from './components/comment-list'
import CommentForm from './components/comment-form'
import {inject, observer} from 'mobx-react'
import ArticlesStore from './stores/articles'

interface Props {
    article: IArticle,
    isOpen: boolean,
    onBtnClick: (article: IArticle) => void,
    articlesStore?: ArticlesStore
}

export default inject('articlesStore')(observer(function ArticleNew({ article, isOpen, onBtnClick, articlesStore }: Props) {
    const username = useContext(userContext)
    useEffect(() => {
        if (isOpen) articlesStore!.fetchArticle(article.id)
    }, [article.id, isOpen])
    return (
        <div>
            <h3>{article.title}</h3>
            <button onClick = {() => onBtnClick(article)}>
                {isOpen ? 'close' : 'open'}
            </button>
            <button onClick={() => articlesStore!.deleteArticle(article.id)}>
                delete me
            </button>
            {isOpen && <section>
                {article.loading && <h2>Loading...</h2>}
                {article.text}
                <CommentList comments={article.comments}/>
            </section>}
            <h3>{username}</h3>
            <CommentForm articleId={article.id}/>
        </div>
    )
}))
