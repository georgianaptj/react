import React from 'react';

export default class Button extends React.Component<{data: string}>{

    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <button>
                {this.props.data}
            </button>
        )
    }

}