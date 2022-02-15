import hook from '@/containers/hook';
import useState from '@/containers/hook/useState';
import useEffect from '@/containers/hook/useEffect';
import useReducer from '@/containers/hook/useReducer';
import useContext from '@/containers/hook/useContext';
import useMemo from '@/containers/hook/useMemo';
import useCallback from '@/containers/hook/useCallback';
import useRef from '@/containers/hook/useRef';

const routes = [
  {
    path: '/hook',
    component: hook,
    routes: [
      {
        path: '/hook/useState',
        component: useState,
      },
      {
        path: '/hook/useEffect',
        component: useEffect,
      },
      {
        path: '/hook/useReducer',
        component: useReducer,
      },
      {
        path: '/hook/useContext',
        component: useContext,
      },
      {
        path: '/hook/useRef',
        component: useRef,
      },
      {
        path: '/hook/useMemo',
        component: useMemo,
      },
      {
        path: '/hook/useCallback',
        component: useCallback,
      },
    ],
  },
];

export default routes;
