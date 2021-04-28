import useState from '@hooks/useState'
import useEffect from '@hooks/useEffect'
import useReducer from '@hooks/useReducer'
import useContext from '@hooks/useContext'
import useMemo from '@hooks/useMemo'
import useCallback from '@hooks/useCallback'
import useRef from '@hooks/useRef'

const routes = [
  {
    path: '/hook',
    exact: true,
    routes: [
      {
        path: '/hook/useState',
        exact: true,
        component: useState,
      },
      {
        path: '/hook/useEffect',
        exact: true,
        component: useEffect,
      },
      {
        path: '/hook/useReducer',
        exact: true,
        component: useReducer,
      },
      {
        path: '/hook/useContext',
        exact: true,
        component: useContext,
      },
      {
        path: '/hook/useRef',
        exact: true,
        component: useRef,
      },
      {
        path: '/hook/useMemo',
        exact: true,
        component: useMemo,
      },
      {
        path: '/hook/useCallback',
        exact: true,
        component: useCallback,
      },
    ],
  },
]

export default routes
