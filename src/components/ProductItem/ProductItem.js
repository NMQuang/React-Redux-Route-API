import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {

    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    showRatings = (rating) => {
        var result = [];
        for(var i = 1;i <= rating;i++){
            result.push(<i key={i} className="fa fa-star" style={{color: "#CFE535"}}></i>);
        }
        for(var j = 1; j <= ( 5-rating);j++){
            result.push(<i key={i + j} className="fa fa-star-o"></i>);
        }
        return result;
    }

    render() {
        const contentTable  = {
            textAlign: 'center',
            flex: 1,
            justifyContent: 'center',
            justifyItems: 'center'
        };

        var { product, index } = this.props;
        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.status ? 'warning' : 'default';
        return (
            <tr style={contentTable}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>
                    <img alt="" src={`${product.image}`} style={{width: 100, height: 100}}/>
                </td>             
                <td>{product.price}</td>
                <td>{this.showRatings(product.rate)}</td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <Link
                        to={`/product/${product.id}/edit`}
                        className="btn btn-success mr-10"
                    >
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(product.id)}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }

}

export default ProductItem;
