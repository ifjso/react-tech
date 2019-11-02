## JSX

- 자바스크립트 문법의 확장판
- React에서의 Element를 제공

### 장점

- 보기 쉽고 익숙하다.
- 더욱 높은 활용도 (component in component)

### 문법

- 감싸인 요소

```JSX
return (
  <div>
    <h1>Hello React!</h1>
    <h1>Hello</h1>
  </div>
)

return (
  <Fragment>
    <h1>Hello React!</h1>
    <h1>Hello</h1>
  </Fragment>
)

return (
  <>
    <h1>Hello React!</h1>
    <h1>Hello</h1>
  </>
)
```

- 자바스크립트 표현

```JSX
function App() {
  const name = 'React';
  return (
    <>
      <h1>Hello {name}!</h1>
      <h1>Hello</h1>
    </>
  )
}
```

- if 문 대신 조건부 연산자

```JSX
function App() {
  const name = 'React';
  return (
    <div>
      { name === 'React' ? <h1>React 입니다.</h1> : <h1>React가 아닙니다.</h1> }
    </div>
    )
  )
}

function App() {
  const name = 'React';
  return <div>{ name === 'React' && <h1>React 입니다.</h1>}</div>
}
```

- undefined를 렌더링하지 않기

```JSX
function App() {
  const name = undefined;
  return { name || 'React'}
}
```

- 인라인 스타일링

```JSX
function App() {
  const name = 'React';
  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: 16
      }}
    >
      {name}
    </div>
  )
}
```

- class 대신 className

```JSX
function App() {
  const name = 'React';
  return <div className="react">{name}</div>
}
```

- 꼭 닫아야 하는 태그

```JSX
function App() {
  const name = 'React';
  return (
    <>
      <div className="react">{name}</div>
      <input />
      <br />
    </>
  )
}
```

- 주석

```JSX
function App() {
  const name = 'React';
  return (
    <>
      {/* 주석입니다. */}
      <div
        className="react" // 주석입니다.
      >
        {name}
      </div>
      // 주석이 아닙니다.
      /* 주석이 아닙니다. */
      <input />
    </>
  )
}
```
