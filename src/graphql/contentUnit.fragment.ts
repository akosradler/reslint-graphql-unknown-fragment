import { gql } from '@apollo/client'

export const contentUnitFragment = gql`
  fragment ContentUnit on ContentUnit {
    id
    title
  }
`
