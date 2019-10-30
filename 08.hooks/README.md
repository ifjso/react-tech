## Hooks

함수형 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 해줌

### useState

- 함수형 컴포넌트에서 상태 관리가 필요할 때 사용
- 하나의 컴포넌트에서 여러 상태를 관리하려면 여러번 사용하면 된다.

```javascript
const [value, setValue] = useState(initialValue);
```

### useEffect

- 컴포넌트가 렌더릴될 때마다 특정 작업을 수행
- componentDidMount, componentDidUpdate를 합찬 형태

```javascript
useEffect(() => {
  console.log('effect');
  console.log({
    name,
    nickname
  })
});

useEffect(() => console.log('마운트될 때만 실행됩니다.'), []);

// name의 값이 업데이트될 때만 작업 실행
useEffect(() => console.log(name), [name]);

// 컴포넌트가 언마운트되기 전이나 업데이트 되기 직전에 특정 작업을 하기 위해 
// 뒷정리(cleanup) 함수 반환
useEffect(() => {
  console.log('effect');
  console.log(name);
  return () => {
    console.log('cleanup');
    console.log(name);
  }
})
```

### useReducer
- useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 할 때 사용

```javascript
const reducer = (state, action) => {
  swtich (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1};
    case 'DECREMENT':
      return { value: state.value - 1};
    default:
      return { ...state };
  }
};

const [state, dispatch] = useReducer(reducer, initialState);

dispatch({ type: 'INCREMENT' });
```

### useMemo
- 함수형 컴포넌트 내부에서 발생하는 연산 최적화를 위해 사용
- 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행

```javascript
const avg = useMemo(() => getAverage(list), [list]);

return (
  <div>{avg}<div>
);
```

### useCallback
- useMemo와 같은 개념으로 함수를 재사용할 때 사용

```javascript
// 컴포넌트가 처음 렌더링될 때만 함수 생성
const onChange = useCallback((e) => setNumber(e.target.value), []);

const onInsert = useCallback(() => {
  const nextList = list.concat(parseInt(number));
  setList(nextList);
  setNumber('');
}, [number, list]);   // number 또는 list가 바뀌었을 때만 함수 생성
```

### useRef
- 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해줌

```javascript
const button = useRef(null);

return (
  <button ref={button}>
);
```

### Custom Hooks
- 여러 컴포넌트에서 비슷한 기능을 공유할 경우 직접 Hook를 만들 수 있음

```javascript
const reducer = (state, action) => ({
  ...state, [action.name]: action.value
});

// Custom Hook
const useInputs = (initialForm) => {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = e => dispatch(e.target);
  return [state, onChange];
};
```