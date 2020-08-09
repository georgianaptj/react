import React from 'react';

export default class Welcome extends React.Component<{name: string}> {
    constructor(props: any) {
        super(props);
    }   

    render() {
      return <h1>Hello, {this.props.name}!</h1>;
    }
}