import * as React from 'react'
import {IComment} from '../article'
import {observer} from 'mobx-react'

interface Props {
    comment: IComment
}

interface State {
}

@observer
export default class Comment extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <h3>{this.props.comment.user}</h3>
                <p>{this.props.comment.text}</p>
            </div>
        )
    }
}
