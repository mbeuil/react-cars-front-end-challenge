import * as React from 'react'
import * as T from '../types/types'

type DataProps = T.CarItemProps[] | number

type InitialStateProps = {
  status: string
  data: DataProps
  error: string
}
type ActionType =
  | {type: 'START'}
  | {type: 'SUCCESS'; data: DataProps}
  | {type: 'ERROR'; error: Error}
  | {type: 'RESET'}

const initialState: InitialStateProps = {
  status: 'idle',
  data: [],
  error: '',
}

const asyncReducer = (state: InitialStateProps, action: ActionType) => {
  switch (action.type) {
    case 'START': {
      return {...state, status: 'pending'}
    }
    case 'SUCCESS': {
      return {...state, status: 'resolved', data: action.data}
    }
    case 'ERROR': {
      return {...state, status: 'rejected', error: action.error.message}
    }
    case 'RESET': {
      return {...state, initialState}
    }
    default: {
      throw new Error(`Unhandled action type`)
    }
  }
}

function useAsync() {
  const [{status, data, error}, dispatch] = React.useReducer(
    asyncReducer,
    initialState,
  )

  const reset = () => dispatch({type: 'RESET'})

  const run = React.useCallback(
    promise => {
      if (!promise || !promise.then) {
        throw new Error(
          `The argument passed to useAsync().run must be a promise. Maybe a function that's passed isn't returning anything?`,
        )
      }
      dispatch({type: 'START'})
      return promise
        .then((data: DataProps) => dispatch({type: 'SUCCESS', data}))
        .catch((error: Error) => dispatch({type: 'ERROR', error}))
    },
    [dispatch],
  )

  return {
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isError: status === 'rejected',
    isSuccess: status === 'resolved',
    data,
    error,
    run,
    reset,
  }
}

export default useAsync
