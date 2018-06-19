import React, {Component} from 'react';

//css보다는 inline-style을 권장.
const style = {
    fontSize:24,
    fontWeight:600
}

export default class SimpleComponent extends Component {
    //arrow function으로도 가능하다.

    onClick = (name) => {
        const {onUpdate} = this.props;
        onUpdate(name);
    }

    render = () => {
        const {name, data} = this.props;

        return (
            <div style={style}>
                {name} and {data.name} is simple!
                <div>
                    <button
                        onClick={()=>this.onClick(data.name)}
                    >
                    update
                    </button>
                </div>
            </div>
        );
    };
}