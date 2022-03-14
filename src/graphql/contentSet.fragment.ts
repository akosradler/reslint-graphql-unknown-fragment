import { gql } from '@apollo/client'

export const contentSetFragment = gql`
  fragment ContentSet on ContentSet {
    id
    title
    type
  }
`
