import {observable, computed, autorun, action, set} from 'mobx'
import {IArticle, IComment} from '../article'

interface ICommentInput {
    text: string
    user: string
}

interface ArticleResponse {
    id: string
    title: string
    date: string
    comments?: string[]
}

interface FullArticleResponse extends ArticleResponse {
    text: string
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

    @action private processData = (data: ArticleResponse[]) => {
        this.entities = new Map(data.map(
            (article) => [article.id, {...article, loading: false, text: '', comments: []}]
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

    @action addArticle = ({comments, ...rest}: FullArticleResponse) => {
        const oldArticle = this.getById(rest.id) || {...rest, comments: [] as IComment[]}

        this.entities.set(rest.id, {...rest, ...oldArticle, loading: false})
    }

    @action deleteArticle = (id: string) => {
        this.entities.delete(id)
    }

    @action fetchAll = async () => {
        this.loading = true

        const res = await fetch('/api/article')
        this.processData(await res.json())
    }

    @action fetchArticle = async (id: string) => {
        const article = this.getById(id)
        if (article) article.loading = true

        const res = await fetch(`/api/article/${id}`)

        this.addArticle(await res.json())
    }
}



