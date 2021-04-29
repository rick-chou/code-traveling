import hook from '@/containers/Hook'
import useState from '@hooks/useState'
import useEffect from '@hooks/useEffect'
import useReducer from '@hooks/useReducer'
import useContext from '@hooks/useContext'
import useMemo from '@hooks/useMemo'
import useCallback from '@hooks/useCallback'
import useRef from '@hooks/useRef'

import router from '@containers/Router'

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
  {
    path: '/router',
    component: router,
  },
]

export default routes
