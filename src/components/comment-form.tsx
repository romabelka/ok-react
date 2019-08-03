import * as React from 'react'
import {action, observable} from 'mobx'
import {observer} from 'mobx-react'
import articleStore from '../stores'

interface Props {
    articleId: string
}

interface State {
}

@observer
export default class CommentForm extends React.Component<Props, State> {
    @observable user = ''
    @observable comment = ''

    @action handleUserChange = (ev: React.ChangeEvent<HTMLInputElement>) => this.user = ev.target.value
    @action handleCommentChange = (ev: React.ChangeEvent<HTMLInputElement>) => this.comment = ev.target.value

    submit = (ev: React.FormEvent) => {
        ev.preventDefault()
        articleStore.addComment({
            user: this.user,
            text: this.comment
        }, this.props.articleId)
    }

    render() {
        return (
            <form onSubmit = {this.submit}>
                user: <input value={this.user} onChange={this.handleUserChange}/>
                comment: <input value={this.comment} onChange={this.handleCommentChange} />
                <button>Submit</button>
            </form>
        )
    }
}
