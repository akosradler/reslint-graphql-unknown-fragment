import { gql } from '@apollo/client'

export const introductionFragment = gql`
  fragment Introduction on Introduction {
    id
    title
    contentUnits {
      ...ContentUnit
    }
  }
`
