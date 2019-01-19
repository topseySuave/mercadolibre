import * as React from 'react';

const Loading = () => (
  <div style={{ width: '50%', margin: '100px auto' }}>
    <progress className="progress is-small is-info" max="100">15%</progress>
  </div>
);

export default Loading;
