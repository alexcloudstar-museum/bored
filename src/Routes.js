import React from 'react';

import { Switch, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Welcome from 'components/Welcome';
import Activity from 'components/Activity';

const Routes = () => {
  let location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: 'translate(100%, 0)' },
    enter: { opacity: 1, transform: 'translate(0%, 0)' },
    leave: { opacity: 0, transform: 'translate(-50%, 0)' },
  });

  return (
    <div className="Routes">
      <main className="main">
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route exact path="/" component={Welcome} />
              <Route path="/activity" component={Activity} />
            </Switch>
          </animated.div>
        ))}
      </main>
    </div>
  );
};

export default Routes;
