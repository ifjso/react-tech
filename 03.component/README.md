## Component

### props

- 컴포넌트 속성을 설정할 때 사용하는 요소
- 부모 컴포넌트에서 값 설정

```JSX
// MyComponent.js
import React from 'react';
import PropTypes from 'prop-types'

const MyComponent =  ({ name, favoriteNumber, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br/>
      children 값은 {children}입니다. <br/>
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  )
};

MyComponent.defaultProps = {
  name: '기본 이름'
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};

...

// App.js
...

const App = () => {
  return (
    <MyComponent name="React" favoriteNumber={1}>
      리액트
    </MyComponent>
  );
};

...
```

### state

- 컴포넌트 내부에서 바뀔 수 있는 값

```JSX
...

const [message, setMessage] = useState('');
const [color, setColor] = useState('black');

...

return (
  <div>
    <h1 style={{color}}>{message}</h1>
  </div>
)

```
