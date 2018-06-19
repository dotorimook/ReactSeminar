import React, {Component} from 'react';

//css보다는 inline-style을 권장.
const style = {
    fontSize:24,
    fontWeight:600
}

export default class SimpleComponent extends Component {
    //arrow function으로도 가능하다.
    render = () => <div style={style}>it's simple!</div>;
}