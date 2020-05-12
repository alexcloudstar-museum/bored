import React from 'react';
import 'components/Welcome/index.scss';
import Logo from 'assets/images/logo.png';

import Button from 'components/Button';
import NightMode from 'components/NightMode';

import { connect } from 'react-redux';
import { sayHi } from 'actions';

class Welcome extends React.Component {
  componentDidMount() {
    this.props.sayHi();
  }

  render() {
    return (
      <div className="Welcome">
        <a
          href="https://www.alexcloudstar.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Logo} alt="Logo image" />
        </a>
        <h3>
          Are you Bored?
          <br />
          We help you to find your next activity!
        </h3>
        <br />
        {/* Margin top more  */}
        <Button />
        <NightMode />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  welcome: state.welcome.message,
});

export default connect(mapStateToProps, { sayHi })(Welcome);
