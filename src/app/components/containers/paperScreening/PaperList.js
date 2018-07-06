import React from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { fetchPapers } from '../../../redux/actions/papersActions';

class PaperList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchPapers());
    }

    render() {
        const { error, loading, papers } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <ul>
                    {papers.map(paper =>
                        <li key={uuid.v4()}>{paper.title}</li>)
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    papers: state.paperstate.items,
    loading: state.paperstate.loading,
    error: state.paperstate.error,
});

export default connect(mapStateToProps)(PaperList);
