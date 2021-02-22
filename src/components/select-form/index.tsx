import * as React from 'react'
import {useTheme} from '../../context/theme-context'
import * as S from './styles'

type SelectFormProps = {
  data: string
  value: string
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: JSX.Element[]
}

function SelectForm({data, value, handleChange, options}: SelectFormProps) {
  const {dark} = useTheme()

  return (
    <S.SelectContainer>
      <S.SelectLabel htmlFor={data.toLowerCase()}>{data} :</S.SelectLabel>
      <S.SelectInput
        theme={dark}
        id={data.toLowerCase()}
        value={value}
        onChange={handleChange}
      >
        {options}
      </S.SelectInput>
    </S.SelectContainer>
  )
}

export default SelectForm
