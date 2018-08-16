import React, { Component } from 'react';
import BrandList from './../../components/BrandList/BrandList';
import BrandItem from './../../components/BrandItem/BrandItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchBrandsRequest } from './../../actions/brand';

class BrandListPage extends Component {

    componentDidMount() {
        this.props.fetchAllBrands();
    }

    render() {
        var { brands } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/brand/add" className="btn btn-info mb-10">
                    Thêm Hiệu Sản Phẩm
                </Link>
                <BrandList>
                    {this.showBrands(brands)}
                </BrandList>
            </div>
        );
    }

    showBrands = brands => {
        var result = null;
        if (brands.length > 0) {
            result = brands.map((brand, index) => {
                return(
                    <BrandItem
                        key = {index}
                        index = {index}
                        brand = {brand}
                    />
                );
            });
        }
        return result;
    }

}

const mapStateToProps = state => {
    return {
        brands: state.brands
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllBrands : () => {
            dispatch(actFetchBrandsRequest());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrandListPage);

