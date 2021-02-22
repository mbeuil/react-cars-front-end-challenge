import * as React from 'react'
import {useSearchDispatch} from '../../context/searchParams-context'
import {optionArray} from '../../utils/array'
import SelectForm from '../select-form'
import ButtonVariant from '../variant-button'
import * as S from './styles'

function CollectionForm() {
  const [day, setDay] = React.useState('30')
  const [km, setKm] = React.useState('3000')
  const {setSearch, resetSearch} = useSearchDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch({day, km})
  }
  const handleSelectDay = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setDay(e.target.value)
  const handleSelectKm = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setKm(e.target.value)

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <SelectForm
        data="Day"
        value={day}
        handleChange={handleSelectDay}
        options={optionArray(0, 30, 1, '+')}
      />
      <SelectForm
        data="Km"
        value={km}
        handleChange={handleSelectKm}
        options={optionArray(1, 60, 50, '*')}
      />
      <S.ButtonContainer>
        <ButtonVariant
          icon="reset"
          handleClick={() => resetSearch()}
          variant="secondary"
          type="button"
        />
        <ButtonVariant icon="search" variant="primary" type="submit" />
      </S.ButtonContainer>
    </S.FormContainer>
  )
}

export default CollectionForm
