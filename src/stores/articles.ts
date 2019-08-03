import {observable, computed, autorun, action, set} from 'mobx'
import defaultArticles from '../fixtures.json'
import {IArticle} from '../article'

interface ICommentInput {
    text: string
    user: string
}

interface ResponseArticle {
    id: string
    title: string
    text: string
    date: string
    comments?: string[]
}

interface EntitiesMap {
    [id: string]: IArticle
}

export default class ArticlesStore {
    constructor() {
        autorun(() => {
            console.log(this.size)
        })
    }

    @observable loading = false
    @observable entities: Map<string, IArticle> = new Map()

    @computed get size() {
        return this.list.length
    }

    @computed get list() {
        return [...this.entities.values()]
    }

    @action private processData = (data: ResponseArticle[]) => {
        this.entities = new Map(data.map(
            (article) => [article.id, {...article, comments: []}]
        ))

        this.loading = false
    }

    getById = (id: string): IArticle | undefined => this.entities.get(id)

    @action addComment = (comment: ICommentInput, articleId: string) => {
        const article = this.getById(articleId)

        if (article) {
            if (!article.comments) set(article,{comments: []})
            article.comments!.push({id: Date.now().toString(), ...comment})
        }
    }

    @action addArticle = (article: typeof defaultArticles[0]) => {}

    @action deleteArticle = (id: string) => {
        this.entities.delete(id)
    }

    @action fetchAll = async () => {
        this.loading = true

        const res = await fetch('/api/article')
        this.processData(await res.json())

    }
}



