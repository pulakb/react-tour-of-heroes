import React from 'react';

class HeroDetailComponent extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <h3>Hello {this.props.params.id}</h3>
        )
    }
}

export default HeroDetailComponent;