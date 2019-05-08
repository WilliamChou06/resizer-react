import React from 'react';
import Resizable from './Resizable';

const App = () => {
  return (
    <Resizable>
      <p>asdasdaasdasdsd</p>
      <div style={{width: 400, background: 'blue', height: 200}}></div>
    </Resizable>
  );
}

export default App;
