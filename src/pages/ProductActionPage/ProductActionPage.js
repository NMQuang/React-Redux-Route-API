import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from './../../actions/index';
import { connect } from 'react-redux';


class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtImage:'',
            txtName: '',
            txtPrice: '',
            txtRate:'',
            chkbStatus: ''
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            var {itemEditing} = nextProps;
            this.setState({
                id : itemEditing.id,
                txtName : itemEditing.name,
                txtImage: itemEditing.image,
                txtPrice : itemEditing.price,
                txtRate : itemEditing.rate,
                chkbStatus : itemEditing.status
            });
        }
    }

    onChange = (e) => {
        var target = e.target;    
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        if (name === 'txtImage') {
            value = "image/" + target.files[0].name
        }
       
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        var { id, txtImage, txtName, txtPrice, txtRate, chkbStatus } = this.state;
        var { history } = this.props;
        var product = {
            id : id,
            name : txtName,
            image: txtImage,
            price : txtPrice,
            rate: txtRate,
            status : chkbStatus
        };

        if (id) {
            this.props.onUpdateProduct(product);
        } else {
            this.props.onAddProduct(product);
        }
        history.goBack();
    }

    render() {
        var { txtName, txtImage, txtPrice, txtRate, chkbStatus } = this.state;
        txtImage = "../../" + txtImage;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên Sản Phẩm: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Ảnh Sản Phẩm: </label>
                        
                        <input
                            type="file"
                            accept=".png, .jpg, .jpeg" 
                            className="form-control"
                            name="txtImage"                                              
                            onChange={this.onChange}
                        />
                       <img className = "img-responsive" alt="" src={`${txtImage}`} style={{width: 80, height: 120}}/>
                    </div>
                    <div className="form-group">
                        <label>Giá: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Chất lượng: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txtRate"
                            value={txtRate}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Trạng Thái: </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="chkbStatus"
                                value={chkbStatus}
                                onChange={this.onChange}
                                checked={chkbStatus}
                            />
                            Còn Hàng
                        </label>
                    </div>
                    <Link to="/product-list" className="btn btn-danger mr-10">
                        Trở Lại
                    </Link>
                    <button type="submit" className="btn btn-primary">Lưu Lại</button>
                </form>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        itemEditing : state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct : (product) => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct : (id) => {
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct : (product) => {
            dispatch(actUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
