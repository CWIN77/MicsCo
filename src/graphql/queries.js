/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComic = /* GraphQL */ `
  query GetComic($id: ID!) {
    getComic(id: $id) {
      id
      title
      explane
      writer
      img
      safety
      genre
      score
      publish
      createdAt
      updatedAt
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
        writer
        img
        safety
        genre
        score
        publish
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
