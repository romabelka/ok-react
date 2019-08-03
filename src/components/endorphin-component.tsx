import * as React from 'react'

interface Props {
}

interface State {
}

export default class EndorphinComponent extends React.Component<Props, State> {
    containerRef: React.RefObject<HTMLDivElement> = React.createRef()

    componentDidMount(): void {
        //do something with this.containerRef
    }

    componentDidUpdate(): void {
        //update
    }

    componentWillUnmount(): void {
        //perform cleanup
    }

    render() {
        return <div ref={this.containerRef}/>
    }
}
