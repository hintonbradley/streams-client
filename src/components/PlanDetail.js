import React from 'react';
import './PlanDetail.css';

class PlanDetail extends React.Component {

    renderHtml(item, i){
        if(item.type==='text') {
            return (
                <div key={`txt-${i}`} className={`txt ${item.classes}`}>
                    <p>{item.text}</p>
                </div>
            )
        } else if (item.type==='image') {
            return (
                <img key={`img-${i}`} className={`plan-img ${item.classes}`} src={require(`../img/${item.src}.jpg`)} alt={item.description} />
            )
        } else if (item.type==='header') {
            return (
                <h3 className="txt-ctr plan-title" key={`head-${i}`}>{item.text}</h3>
            )
        }
                // } else if (item.type==='link') {
                //     return (
                //         <div key={`link-${item.link}`} className="txt">
                //             < a href={item.link}>{item.text}</a>
                //         </div>
                //     )
            //     }
    }
    
    render () {
        return (
            <div className={`plan-card plan-card-${ this.props.card }`}>
                {this.props.obj.map((item, i) => {
                    return this.renderHtml(item, i);
                })}
            </div>
        )
    }
}

export default PlanDetail;