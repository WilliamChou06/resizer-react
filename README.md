# Resizer Component for React

## Installation

Install the package using npm or yarn:

```
npm i reactsizer-wc
yarn add reactsizer-wc
```

## Usage

Import the resizable component and wrap it around elements to create a resizable div.

```
import React, { Component } from 'react'
import Resizable from 'reactsizer-wc';

export class App extends Component {
  render() {
    return (
      <div style={{ height: '50vh' }}>
        <Resizable background="black" height={365} width={260}>
          <h1>Hello World</h1>
          <p>Hello Hooman</p>
          <p>Lorem Ipsum bacon sandwich</p>
        </Resizable>
      </div>
    )
  }
}

export default App
```
## Props

- **height**(number) - height of the component in pixels.
- **width**(number) - width of the component in pixels.
- **background**(string) - background of the component.

## Misc
- Resizable component takes 100% of parent div's height and width if none is provided as props.

## Links
- **NPM:** https://www.npmjs.com/package/reactsizer-wc
- **Live Demo:** https://reactsizer-williamc.netlify.com/