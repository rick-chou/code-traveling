import routesConfig from '@router';

function App() {
  return (
    <div className="App">
      {
        routesConfig.map((item,idx)=>{
          return(
            <div></div>
          )
        })
      }
    </div>
  );
}

export default App;
