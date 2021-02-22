import * as React from 'react'

type ReducerPropsType = {
  duration: string
  distance: string
}

type ActionType =
  | {type: 'SELECTPARAMS'; day: string; km: string}
  | {type: 'RESET'}

const initialState = {
  duration: '',
  distance: '',
}

const searchParamsReducer = (state: ReducerPropsType, action: ActionType) => {
  switch (action.type) {
    case 'SELECTPARAMS': {
      return {
        ...state,
        duration: action.day,
        distance: action.km,
      }
    }
    case 'RESET': {
      return {...initialState}
    }
    default: {
      throw new Error(`Unhandled action type`)
    }
  }
}

function useSearchParams() {
  const [params, dispatch] = React.useReducer(searchParamsReducer, initialState)

  const setSearchParams = React.useCallback(
    ({day, km}) => {
      dispatch({type: 'SELECTPARAMS', day, km})
    },
    [dispatch],
  )

  const resetSearchParams = React.useCallback(() => {
    dispatch({type: 'RESET'})
  }, [dispatch])

  return {params, setSearchParams, resetSearchParams}
}

export default useSearchParams
