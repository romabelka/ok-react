import {observable, computed, autorun, action, set} from 'mobx'
import defaultArticles from '../fixtures.json'
import {IArticle} from '../article'

interface ICommentInput {
    text: string
    user: string
}

export default class ArticlesStore {
    constructor() {
        autorun(() => {
            console.log(this.size)
        })
    }

    @observable entities = defaultArticles

    @computed get size() {
        return this.entities.length
    }

    private processData = () => {
    }

    getById = (id: string): IArticle | undefined => this.entities.find(article => article.id === id)

    @action addComment = (comment: ICommentInput, articleId: string) => {
        const article = this.getById(articleId)

        if (article) {
            if (!article.comments) set(article,{comments: []})
            article.comments!.push({id: Date.now().toString(), ...comment})
        }
    }

    @action addArticle = (article: typeof defaultArticles[0]) => {}

    @action deleteArticle = (id: string) => {
        this.entities = this.entities.filter(article => article.id !== id)
    }

    @action fetchAll = () => {}
}



