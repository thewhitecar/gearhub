import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from '../../redux/reducers/auth_reducer'
import menu_icon from './menu.png';
import add_icon from './add.png';
import logo from './gearHubWhite.png'
import left from './left.png'
import right from './right.png'
import './form2.css';
import ReactS3Uploader from 'react-s3-uploader';
import { update_photo1, update_photo2, update_photo3, update_photo4 } from '../../redux/reducers/photos_reducer'
import logout_icon from './logout.png'


class Form2 extends Component {
    constructor(props){
        super(props);
        this.state={
            uploaderVisible : true
        }
    }



    // componentDidMount() {
    //     axios.get('/api/images').then(response => {
    //       this.setState({
    //         images: response.data
    //       })
    //     }) 
    //   }

    // onFinish = (response) => {
    //     let imageUrl = response.signedUrl.split('?').shift()
    //     let userID = this.props.user.id
    //     axios.post('/api/images', { imageUrl, userID }).then(response => {
    //       update_photo1(response.data.image_url_1)
    //       this.setState({
    //         images: [ ...this.state.images, response.data ]
    //       })
    //     }) 
    //   }

    toggleUploader(){
        this.setState({
            uploaderVisible : false
        })
    }

    onFinish = (response) => {
        const { update_photo1, update_photo2, update_photo3, update_photo4 } = this.props;
        let imageUrl = response.signedUrl.split('?').shift();
        if (this.props.photo1 === "/static/media/none.db88a501.png"){
            update_photo1(imageUrl);
            console.log("photo 1: ", this.props.photo1);
        } else if (this.props.photo2 === "/static/media/none.db88a501.png"){
            update_photo2(imageUrl)
            // console.log("photo 2: ", this.props.photo2)
        } else if (this.props.photo3 === "/static/media/none.db88a501.png"){
            update_photo3(imageUrl)
            console.log("photo 3: ", this.props.photo3)
        } else if (this.props.photo4 === "/static/media/none.db88a501.png"){
            update_photo4(imageUrl);
            console.log("photo 4: ", this.props.photo4)
            this.toggleUploader();
        } else {alert("You can only upload four photos for each instrument")}
        
    }

    render() {  

        let Uploader = <ReactS3Uploader
        signingUrl="/s3/sign"
        accept="image/*"
        onFinish={this.onFinish}
        server="http://localhost:4000"
        uploadRequestHeaders={{ 'x-amz-acl': 'public-read' }} />
 
        return (
            <div className="background">
                <div className="header">
                    <img src={menu_icon} className="buttons" alt="" />
                    <img alt="" src={add_icon} onClick={this.toggleAddGear} className="buttons" />
                    <Link to="/"><img src={logout_icon} alt="logout" onClick={this.props.logOut} className="buttons"/></Link>
                    <div className="spacer" />
                    <Link to="/home"><img alt="" src={logo} className="logo" /></Link>
                </div>
                <div className="content-box">
                    <div className="left-div-photos">
                        <Link to="/form"><img src={left} alt=""/></Link>
                    </div>
                    <div className="photos-center-div">
                        <h1 className="photos-title"> add photos </h1>
                        {this.state.uploaderVisible && Uploader}
                        <div className="photos_box">
                            <img alt="" className="photo" src={this.props.photo1} />
                            <img alt="" className="photo" src={this.props.photo2} />
                            <img alt="" className="photo" src={this.props.photo3} />
                            <img alt="" className="photo" src={this.props.photo4} />
                        </div>
                    </div>
                <div className="right-div">
                <Link to="/form3"><img src={right} alt=""/></Link>
                </div>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        user: state.auth.data,
        photo1: state.photo.photos1,
        photo2: state.photo.photos2,
        photo3: state.photo.photos3,
        photo4: state.photo.photos4
    };
}

export default connect(mapStateToProps, { update_photo1, update_photo2, update_photo3, update_photo4, logOut })(Form2);