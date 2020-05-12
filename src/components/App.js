import React from 'react';
import 'components/App.scss';
import Routes from 'Routes';

class App extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('nightmode') === 'active') {
      document.querySelector('#root').classList.add('dark-mode-active');
    }
  }
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
