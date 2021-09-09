import { useGetPokemonByNameQuery } from '../models/services/pokemon';
import { Provider } from 'react-redux';

import { setupStore } from '../models/store';

const store = setupStore();

function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
  console.log(data, error, isLoading);
  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  );
}
const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
