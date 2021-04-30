import hook from '@/containers/Hook'
import useState from '@containers/Hook/useState'
import useEffect from '@containers/Hook/useEffect'
import useReducer from '@containers/Hook/useReducer'
import useContext from '@/containers/Hook/useContext'
import useMemo from '@containers/Hook/useMemo'
import useCallback from '@/containers/Hook/useCallback'
import useRef from '@containers/Hook/useRef'

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
]

export default routes
