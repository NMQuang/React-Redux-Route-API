import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BrandItem extends Component {
    render() {
        var { brand, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{brand.name}</td>            
                <td>{brand.company}</td>
                <td>{brand.country}</td>
                <td>{ this.showRatings(brand.rate) }</td>
                <td>
                    <Link
                        to={`/brand/${brand.id}/edit`}
                        className="btn btn-success mr-10"
                    >
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
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
}

export default BrandItem;