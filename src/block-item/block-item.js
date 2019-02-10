import React, {Component} from 'react';
import imgX from '../assets/img/X.png';
import img0 from '../assets/img/0.png'

export default class BlockItem extends Component {

    showImg = ()=> {
        if (this.props.img < 0) {
            const value = this.props.step % 2 === 0 ? 2 : 1;
            this.props.stepInc(this.props.itemId, value);
        }
    }

    chooseImg = ()=> {
        const { img } = this.props;
        if (img > 0 && img < 3) {
            return img===1? imgX: img0;
        }
        else return '';
    }

    render() {
        const img = this.chooseImg();
        return (
            <div className="wrapp"
                onClick={this.showImg}>
                <img src={img} 
                    alt="" className="icon-img" />
            </div>
        )
    }
}