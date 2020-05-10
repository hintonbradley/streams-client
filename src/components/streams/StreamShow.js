import React from 'react';
import {connect} from 'react-redux';
import {fetchStream} from '../../actions';

// const StreamShow = () => {
class StreamShow extends React.Component {
    componentDidMount (props) {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderStream () {
        console.log(this.props.stream)
        if(!this.props.stream) {
            return (
                <div>Loading...</div>
            )
        }
        return (
            <div className="main-page">
                <h1>{this.props.stream.title}</h1>
                <h4>{this.props.stream.description}</h4>
            </div>
        )
    }

    render () {
        return (
            <div>{this.renderStream()}</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchStream})(StreamShow);