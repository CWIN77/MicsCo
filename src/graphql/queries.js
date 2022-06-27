/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComic = /* GraphQL */ `
  query GetComic($id: ID!) {
    getComic(id: $id) {
      writer
      owner
      publishDate
      assess {
        owner
        comment
        score
      }
      createdAt
    }
  }
`;
export const listComics = /* GraphQL */ `
  query ListComics(
    $filter: ModelComicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        explane
        img
        safety
        genre
        ownerScore
        assess {
          score
        }
        publishInform
      }
      nextToken
    }
  }
`;
