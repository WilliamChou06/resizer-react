import React from 'react';
import Resizable from './Resizable';

const App = () => {
  return (
    // Quick test no styled-components
    <div style={{padding: 100, }}>
      <Resizable background="#333">
        <p>asdasdaasdasdsd</p>
        {/* <div style={{ width: 400, background: 'blue', height: 200 }}></div> */}
      </Resizable>
    </div>
  );
}

export default App;
