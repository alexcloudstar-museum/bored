import React from 'react';
import 'components/Welcome/index.scss';

import Button from 'components/Button';

import { connect } from 'react-redux';
import { sayHi } from 'actions';

class Welcome extends React.Component {
  componentDidMount() {
    this.props.sayHi();
  }

  render() {
    return (
      <div className="Welcome">
        <h3>
          Are you Bored?
          <br />
          We help you to find your next activity!
        </h3>
        <br />
        {/* Margin top more  */}
        <Button />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  welcome: state.welcome.message,
});

export default connect(mapStateToProps, { sayHi })(Welcome);
