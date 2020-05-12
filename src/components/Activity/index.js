import React from 'react';
import 'components/Activity/index.scss';
import Select from 'components/Select';
import Card from 'components/Card';

const Activity = () => {
  return (
    <>
      <Select />
      <div className="Activity">
        <Card />
      </div>
    </>
  );
};

export default Activity;
