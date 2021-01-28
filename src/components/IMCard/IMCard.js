import React from 'react';
import PropTypes from 'prop-types';

class IMCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
       
        }
    }

    render() {
        return (
            <div ref={this.props.innerRef}>
                Div has ref
            </div>
        )
    }
}

IMCard.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    raised: PropTypes.bool,
};

const Card = React.forwardRef(function Card(props, ref) {
    return <Card innerRef={ref} {...props}/>;
});
console.log(Card);

export default IMCard;