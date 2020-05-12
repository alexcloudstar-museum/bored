import React from 'react';
import 'components/Select/index.scss';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { findActivity, findRandomActivity, clearActivity } from 'actions';

class selectActivity extends React.Component {
  onSubmit = (formProps) => {
    this.props.findActivity(formProps);
    this.props.reset('findActivity');
  };

  clearValues = () => {
    // this.props.reset('findActivity');

    this.props.clearActivity();
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="Select">
        <div className="Select__form">
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <div>
              <label>Type of activity</label>
              <Field name="type" component="select">
                <option></option>
                <option value="education">education</option>
                <option value="recreational">recreational</option>
                <option value="social">social</option>
                <option value="diy">diy</option>
                <option value="charity">charity</option>
                <option value="cooking">cooking</option>
                <option value="relaxation">relaxation</option>
                <option value="music">music</option>
                <option value="busywork">busywork</option>
              </Field>
            </div>
            <div>
              <label>Accessibility</label>
              <Field name="accessibility" component="select">
                <option></option>
                <option value="1">low</option>
                <option value="0.5">medium</option>
                <option value="0">high</option>
              </Field>
            </div>
            <div>
              <label>Participants</label>
              <Field name="participants" component="select">
                <option></option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3+</option>
              </Field>
            </div>
            <div>
              <label>Price</label>
              <Field name="price" component="select">
                <option></option>
                <option value="0.0">free</option>
                <option value="0.5">not expensive</option>
                <option value="1.0">expensive</option>
              </Field>
            </div>
            <div className="Select__btns">
              <button>Find my activity!</button>
            </div>
          </form>
          <div className="Select__clear">
            <button onClick={this.clearValues}>Clear</button>
          </div>
          <div className="Select__random__btn">
            <button onClick={() => this.props.findRandomActivity()}>
              Get Random Activity
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activity: state.findActivty.activity,
});

export default compose(
  connect(mapStateToProps, { findActivity, findRandomActivity, clearActivity }),
  reduxForm({ form: 'findActivity' })
)(selectActivity);
