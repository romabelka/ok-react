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

    @action addArticle = (article: typeof defaultArticles[0]) => {}

    @action deleteArticle = (id: string) => {
        this.entities = this.entities.filter(article => article.id !== id)
    }

    @action fetchAll = () => {}
}



