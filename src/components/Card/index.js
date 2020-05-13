import React from 'react';
import 'components/Card/index.scss';

import Button from 'components/Button';

import { findActivity, findRandomActivity } from 'actions';
import { connect } from 'react-redux';

class Card extends React.Component {
  render() {
    const {
      type,
      accessibility,
      participants,
      price,
      activity,
    } = this.props.activity;
    const error = (
      <div className="Card__notFound">
        <h4>
          {this.props.activity.error
            ? 'No activities found, please try with others options or try a random activity'
            : ''}
        </h4>
      </div>
    );

    return (
      <React.Fragment>
        <div className="Card">
          <div className="Card__header">
            {/* Need to find a solution to show this conditionally */}
            {error}
            <h5>Your activity:</h5>
            <h5>Accessibility:</h5>
            <h5>Type:</h5>
            <h5>Participants:</h5>
            <h5>Price:</h5>
          </div>
          <div className="Card__body">
            <p>{activity}</p>
            <p>{accessibility === '' ? 'High' : accessibility}</p>
            <p>{type}</p>
            <p>{participants}</p>
            <p>{price === '' ? 'Free' : price}</p>
          </div>
        </div>
        <Button onClick={() => this.props.findRandomActivity()}>
          Get Random Activity
        </Button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  activity: state.findActivty.activity,
});

export default connect(mapStateToProps, { findActivity, findRandomActivity })(
  Card
);
