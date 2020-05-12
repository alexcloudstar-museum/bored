import React from 'react';
import 'components/Welcome/index.scss';
import Logo from 'assets/images/logo.png';

import Button from 'components/Button';
import Redirect from 'components/Redirect';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { sayHi } from 'actions';

class Welcome extends React.Component {
  componentDidMount() {
    this.props.sayHi();
  }

  render() {
    return (
      <div className="Welcome">
        <Route
          path="/alexcloudstar.com"
          component={Redirect}
          loc="http://alexcloudstar.com/"
        >
          <img src={Logo} alt="Logo image" />
        </Route>
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
