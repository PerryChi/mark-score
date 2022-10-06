# @perrychi/mark-score

> A react editable and sortable tree component based on antd tree

## Interaction

![demo demo](./image/interaction.gif)

## 📦 Install

```bash
npm install @perrychi/mark-score --save
```

```bash
yarn add @perrychi/mark-score
```

## 🔨 Usage

### A simple example

```jsx
import React from 'react';
import MarkScore from '@perrychi/mark-score';

function App() {
  const handleChange = (score) => {
    console.log('This is the score: ', score);
  }
  return (
    <div className="App">
      <MarkScore onChange={handleChange} />
    </div>
  );
}

export default App;
```

### A complex example

```jsx
import React from 'react';
import MarkScore from '@perrychi/mark-score';

function App() {
  const handleChange = (score) => {
    console.log('This is the score: ', score);
  }
  return (
    <div className="App">
      <MarkScore
        {...{
          starCount: 6,
          allowHalf: true,
          value: 3.5,
          onChange: handleChange,
          size: 'm',
          style: {
            color: '#e1251b'
          }
        }}
      />
    </div>
  );
}

export default App;
```

> UI display

![demo demo](./image/complex-example.jpg)

## Props

| Prop       | Description                                                                                      | Type          | Default |
|:---------- | ------------------------------------------------------------------------------------------------ | ------------- | ------- |
| starCount  | Total number of stars                                                                            | number        | 5       |
| allowClear | Whether to allow clearing the value when the last clicked star is clicked again                  | boolean       | true    |
| allowHalf  | Whether to allow half stars                                                                      | boolean       | false   |
| disabled   | Is it possible to operate                                                                        | boolean       | false   |
| value      | The current value                                                                                | number        | 0       |
| onChange   | The callback when the score value changes, the latest score value will be passed to the callback | (value) => {} | -       |
| size       | xxs \| xs \| s \| m \| l \| xl \| xxl \| xxxl \| xxxxl                                           | string        | m       |
| style      | The custom style object                                                                          | CSSProperties | -       |
