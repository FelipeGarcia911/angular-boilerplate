import gql from 'graphql-tag'

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      id
      title
    }
  }
`

export default CATEGORIES_QUERY
