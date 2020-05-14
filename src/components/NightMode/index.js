import React from 'react';
import 'components/NightMode/index.scss';

import { nightModeActive, nightModeInactive } from 'actions';
import { connect } from 'react-redux';

class NightMode extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('nightmode') === 'active') {
      document.querySelector('#root').classList.add('dark-mode-active');
    }
  }

  switchMode = () => {
    const input = document.querySelector('#toggler');
    if (!input.classList.contains('active')) {
      document.documentElement.setAttribute('theme', 'dark');
      this.props.nightModeActive();
    } else {
      document.documentElement.removeAttribute('theme', 'dark');
      this.props.nightModeInactive();
    }
  };

  render() {
    return (
      <div className="NightMode">
        <input
          type="checkbox"
          id="toggler"
          className={
            localStorage.getItem('nightmode') === 'active' ? 'active' : ''
          }
        ></input>
        <label htmlFor="toggler" onClick={this.switchMode}>
          <i></i>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  status: state.nightToggler.status,
});

export default connect(mapStateToProps, { nightModeActive, nightModeInactive })(
  NightMode
);
