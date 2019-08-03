import {observable, computed, autorun, action} from 'mobx'
import defaultArticles from '../fixtures.json'

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

    @action addArticle = (article: typeof defaultArticles[0]) => this.entities = [article, ...this.entities]

    @action deleteArticle = (id: string) => {
        const article = this.fetchAll()
        this.addArticle(article!)
    }

    @action fetchAll = () => this.entities.pop()
}



