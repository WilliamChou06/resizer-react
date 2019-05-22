import React from 'react';
import Resizable from '../Resizable';

const App = () => {
  return (
    // Quick test no styled-components
    <div style={{padding: 100, }}>
      <Resizable background="#fff" height={240} width={240} >
        <p>asdasdaasdasdsd</p>
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At voluptas id vitae tempore laudantium perspiciatis odio earum aliquam veniam velit consequuntur, a aut. Quod, mollitia! Enim sequi odit maiores tempora, est numquam eaque? Nobis sint reiciendis ad error ex asperiores praesentium voluptas placeat fuga officiis, enim culpa eius quae necessitatibus vel dignissimos, temporibus quod, quas in quo recusandae distinctio a.</h2>
        {/* <div style={{ width: 400, background: 'blue', height: 200 }}></div> */}
      </Resizable>
    </div>
  );
}

export default App;
