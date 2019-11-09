## Event Handling

리액트에서 이벤트를 다루는 방법

### 이벤트를 사용할 때 주의 사항

- 이벤트 이름은 카멜 표기법으로 적성한다.
- 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달한다.
- DOM 요소에만 이벤트를 설정할 수 있다.

### 이벤트 종류

- Clipboard
- Composition
- Keyboard
- Focus
- Form
- Mouse
- Selection
- Touch
- UI
- Wheel
- Media
- Image
- Animation
- Transition

### onChange 이벤트

```JSX
const [form, setForm] = useState({ username: '', message: '' });
const { username, message } = form;

const onChange = e => {
  const nextForm = {
    ...form,
    [e.target.name]: e.target.value
  };
  setForm(nextForm);
};

return <input name="message" onChange={onChange} />;
```

### onClick 이벤트

```JSX
const [form, setForm] = useState({ username: '', message: '' });
const { username, message } = form;

const onClick = () => {
  alert(username + ': ' + message);
  setForm({ username: '', message: ''});
};

return <button onClick={onClick}>확인</button>;
```

### onKeyPress 이벤트

```JSX
const [form, setForm] = useState({ username: '', message: '' });
const { username, message } = form;

const onClick = () => {
  alert(username + ': ' + message);
  setForm({ username: '', message: ''});
};

const onKeyPress = e => {
  if (e.key === 'Enter') {
    onClick();
  }
};

return <input onKeyPress={onKeyPress} />;
```
