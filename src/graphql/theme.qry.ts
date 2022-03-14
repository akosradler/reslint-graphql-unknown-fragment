import { gql } from '@apollo/client'

export const themeQuery = gql`
  query Theme {
    theme {
      id
      title
      introduction {
        id
        ...Introduction
      }
    }
  }
`
