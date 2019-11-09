## ref

DOM에 이름을 다는 방법

### ref를 써야하는 상황

- DOM을 꼭 직접적으로 건드려야 할 때
- 특정 input에 포커스 주기
- 스크롤 박스 조작하기
- Canvas 요소에 그림 그리기 등

### 콜백 함수를 통한 ref 설정

```JSX
handleFocus = () => this.input.focus();

render() {
  return <input ref={ref => (this.input = ref)}/>;
}
```

### createRef를 통한 ref 설정

```JSX
class RefSample extends Component {
  input = React.createRef();

  handleFouus = () => this.input.current.focus();

  render() {
    return <input ref={this.input} />;
  }
}
```

### 컴포넌트에 ref 달기

- 컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할 때 쓰임

```JSX
<MyComponent ref={ref => (this.myComponent = ref)}>
<button onClick={() => this.myComponent.scrollToBottom()}>맨 밑으로</button>
```

### 잘못된 사용

- 서로 다른 컴포넌트끼리 데이터를 교류할 때 ref를 사용하는 것
- 컴포넌트끼리 데이터를 교류할 때는 언제나 데이터를 부모 <-> 자식 흐름으로 교류
