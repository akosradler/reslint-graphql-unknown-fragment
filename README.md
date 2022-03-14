# Reproduction Repo for the following GitHub issue 

https://github.com/B2o5T/graphql-eslint/issues/976

### How to reproduce

1. Install dependecies via pnpm
2. Run "pnpm lint"

### Schema used

```
  type ContentSet {
    id: ID!
    title: String
  }

  interface ContentUnit {
    id: ID!
    contentSets: [ContentSet!]
  }

  type IntroText implements ContentUnit {
    id: ID!
    contentSets: [ContentSet!]
  }

  interface Module {
    id: ID!
    contentUnits: [ContentUnit!]
  }

  type Introduction implements Module {
    id: ID!
    introText: IntroText
    contentUnits: [ContentUnit!]
  }

  type Theme {
    id: ID!
    title: String!
    introduction: Introduction
  }

  type Query {
    theme: Theme
  }
```
