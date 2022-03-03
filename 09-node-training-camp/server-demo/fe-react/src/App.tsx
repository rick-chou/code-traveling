import ReactCodeInput from 'react-code-input';

function App() {
  return (
    <div>
      <h1>React && Koa && Mysql... TODO</h1>
      <ReactCodeInput
        type="password"
        fields={6}
        name={'password'}
        inputMode={'numeric'}
        onChange={(v) => {
          console.log(v);
        }}
      />
    </div>
  );
}

export default App;
