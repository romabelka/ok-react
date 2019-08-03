import * as React from 'react'

interface Props {
}

interface State {
}

export default class MenuItem extends React.Component<Props, State> {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
