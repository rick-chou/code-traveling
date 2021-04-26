import useState from '@hooks/useState';
import useEffect from '@hooks/useEffect';
import useReducer from '@hooks/useReducer';
import useContext from '@hooks/useContext';

const routes = [
  {
    path: '/useState',
    exact: true,
    component: useState,
  },
  {
    path: '/useEffect',
    exact: true,
    component: useEffect,
  },
  {
    path: '/useReducer',
    exact: true,
    component: useReducer,
  },
  {
    path: '/useContext',
    exact: true,
    component: useContext,
  },
]


export default routes;