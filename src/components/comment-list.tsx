import * as React from 'react'
import {IComment} from '../article'
import Comment from './comment'
import {observer} from 'mobx-react'

interface Props {
    comments?: IComment[]
}

interface State {
}

@observer
export default class CommentList extends React.Component<Props, State> {
    render() {
        const {comments} = this.props
        if (!comments) return <h3>No Comments yet</h3>
        return (
            <div>
                {comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
            </div>
        )
    }
}
