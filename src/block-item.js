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
        const value = this.props.step%2===0? 2: 1;
        this.setState({hidden: false, img: img});
        this.props.stepInc(this.props.itemId, value);
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