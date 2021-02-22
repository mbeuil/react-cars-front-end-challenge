import * as React from 'react'
import * as S from './styles'

type SelectFormProps = {
  data: string
  value: string
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: JSX.Element[]
}

function SelectForm({data, value, handleChange, options}: SelectFormProps) {
  return (
    <S.SelectContainer>
      <S.SelectLabel htmlFor={data.toLowerCase()}>{data} :</S.SelectLabel>
      <S.SelectInput
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
