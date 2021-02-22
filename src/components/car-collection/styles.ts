import styled from '@emotion/styled'
import {RiErrorWarningLine} from 'react-icons/ri'
import * as M from '../../styles/media-queries'

export const CollectionContainer = styled.li({
  margin: '0px 16px',
  padding: '20px 0px',
  listStyle: 'none',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridGap: '1em',

  [M.large]: {
    margin: '0px',
  },

  [M.medium]: {
    gridTemplateColumns: '1fr 1fr',
  },

  [M.small]: {
    margin: '0px 6px',
    gridTemplateColumns: '1fr',
  },
})

export const CollectionInfo = styled.span({
  padding: '20px 16px 0px 16px',
  textAlign: 'justify',
  color: 'var(--color-txt-primary)',
})

export const SpinnerContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  padding: '16px',
  margin: '20px',
})

export const ErrorContainer = styled.div({
  width: '100%',
  color: 'var(--color-red-primary)',
  margin: '20px',
  padding: '20px',
  border: '1px solid rgba(181,180,186,.25)',
  borderRadius: '5px',
  backgroundColor: 'var(--color-bg-secondary)',
  boxShadow: '0 0 0 1px var(--color=bs-primary)',

  [M.medium]: {
    maxWidth: '700px',
  },

  [M.small]: {
    borderRight: '0px',
    borderLeft: '0px',
    borderRadius: '0px',
  },
})

export const ErrorAlertBox = styled.div({
  display: 'grid',
  gridTemplateColumns: '40px auto',
  gridGap: '10px',
})

export const Icon = styled(RiErrorWarningLine)({
  height: '24px',
  width: '24px',
  color: 'var(--colr-red-primary)',
})
