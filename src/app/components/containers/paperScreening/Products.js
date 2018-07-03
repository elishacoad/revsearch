import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../../redux/actions/productActions';


class ProductList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }

    render() {
        const { error, loading, products } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <ul>
                    {products.map((product, i) =>
                        <li key={i}>{product}</li>)
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error,
});

export default connect(mapStateToProps)(ProductList);
