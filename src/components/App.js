import React from 'react';
import 'components/App.scss';
import Routes from 'Routes';

class App extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('nightmode') === 'active') {
      document.documentElement.setAttribute('theme', 'dark');
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
