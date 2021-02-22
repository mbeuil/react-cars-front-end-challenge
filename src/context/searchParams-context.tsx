import * as React from 'react'

type ReducerPropsType = {
  duration: string
  distance: string
}

type ActionType =
  | {type: 'SELECTPARAMS'; day: string; km: string}
  | {type: 'RESET'}

type ParamsContextType = ReducerPropsType | undefined

type SetSearchProps = {
  day: string
  km: string
}

type DispatchContextType =
  | {
      setSearch: ({}: SetSearchProps) => void
      resetSearch: () => void
    }
  | undefined

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

const SearchParamsContext = React.createContext<ParamsContextType>(undefined)

const SearchDispatchContext = React.createContext<DispatchContextType>(
  undefined,
)

function useSearchParams() {
  const context = React.useContext(SearchParamsContext)

  if (!context) {
    throw new Error('useSearchParams should be used within a SearchProvider')
  }
  return context
}

function useSearchDispatch() {
  const context = React.useContext(SearchDispatchContext)

  if (!context) {
    throw new Error('useSearchParams should be used within a SearchProvider')
  }
  return context
}

function SearchProvider({...props}) {
  const [params, dispatch] = React.useReducer(searchParamsReducer, initialState)

  const setSearch = ({day, km}: SetSearchProps) =>
    dispatch({type: 'SELECTPARAMS', day, km})

  const resetSearch = () => dispatch({type: 'RESET'})

  return (
    <SearchParamsContext.Provider value={{...params}}>
      <SearchDispatchContext.Provider
        value={{setSearch, resetSearch}}
        {...props}
      />
    </SearchParamsContext.Provider>
  )
}

export {useSearchDispatch, useSearchParams, SearchProvider}
