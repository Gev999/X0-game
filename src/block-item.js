import React, {Component} from 'react';
import imgX from './img/X.png';
import img0 from './img/0.png'

export default class BlockItem extends Component {

    state = {
        hidden: true,
        img: '',
    }

    showImg = ()=> {
        const img = this.props.step%2===0? img0: imgX;
        this.setState({hidden: false, img: img});
        this.props.stepInc();
    }

    render() {
        const func=this.state.hidden? this.showImg: null;
        return (
            <div className="wrapp"
                onClick={func}>
                <img src={this.state.img} 
                    alt="" className="icon-img" hidden={this.state.hidden}/>
            </div>
        )
    }
}