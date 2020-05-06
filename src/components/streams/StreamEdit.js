import React from 'react';
import {connect} from 'react-redux';
import {fetchStream, editStream} from '../../actions';
import StreamForm from './StreamForm';

// const StreamEdit = (props) => {
class StreamEdit extends React.Component {
    componentDidMount () {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStream( this.props.match.params.id, formValues )
    }
    
    renderForm () {
        if (this.props.stream){
            return (
                <div className="main-page">
                    <h3>Edit a Stream</h3>
                    <StreamForm 
                        initialValues={{
                            title: this.props.stream.title,
                            description: this.props.stream.description
                        }}
                        onSubmit={this.onSubmit}
                    />
                </div>
            )
        } else {
            return <div>Loading...</div>;
        }
    }

    render () {
        return this.renderForm();
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);




 