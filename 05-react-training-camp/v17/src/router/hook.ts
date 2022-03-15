import useCallback from '@basic/hook/useCallback';
import useContext from '@basic/hook/useContext';
import useEffect from '@basic/hook/useEffect';
import useMemo from '@basic/hook/useMemo';
import useReducer from '@basic/hook/useReducer';
import useRef from '@basic/hook/useRef';
import useState from '@basic/hook/useState';

const routes = [
  { path: 'basic/hook/useCallback', component: useCallback },
  { path: 'basic/hook/useContext', component: useContext },
  { path: 'basic/hook/useEffect', component: useEffect },
  { path: 'basic/hook/useMemo', component: useMemo },
  { path: 'basic/hook/useReducer', component: useReducer },
  { path: 'basic/hook/useRef', component: useRef },
  { path: 'basic/hook/useState', component: useState },
];

export default routes;
