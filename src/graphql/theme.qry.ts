import { gql } from '@apollo/client'

export const themeQuery = gql`
  query Theme {
    theme {
      id
      introduction {
        ...Introduction
      }
    }
  }
`
