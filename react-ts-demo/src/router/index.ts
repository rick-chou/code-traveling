import useState from '@hooks/useState';
import useEffect from '@hooks/useEffect';
import useReducer from '@hooks/useReducer';
import useContext from '@hooks/useContext';
import useMemo from '@hooks/useMemo';
import useCallback from '@hooks/useCallback';
import useRef from '@hooks/useRef';

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
  {
    path: '/useRef',
    exact: true,
    component: useRef,
  },
  {
    path: '/useMemo',
    exact: true,
    component: useMemo,
  },
  {
    path: '/useCallback',
    exact: true,
    component: useCallback,
  },
]


export default routes;