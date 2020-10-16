/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBillSplittingGroup = /* GraphQL */ `
  query GetBillSplittingGroup($id: ID!) {
    getBillSplittingGroup(id: $id) {
      id
      bill {
        id
        title
        amount
        createdAt
        updatedAt
        owner
      }
      transactions {
        id
        user
        amount
        isPay
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBillSplittingGroups = /* GraphQL */ `
  query ListBillSplittingGroups(
    $filter: ModelBillSplittingGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBillSplittingGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bill {
          id
          title
          amount
          createdAt
          updatedAt
          owner
        }
        transactions {
          id
          user
          amount
          isPay
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBill = /* GraphQL */ `
  query GetBill($id: ID!) {
    getBill(id: $id) {
      id
      title
      amount
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listBills = /* GraphQL */ `
  query ListBills(
    $filter: ModelBillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        amount
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
      id
      user
      amount
      isPay
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        amount
        isPay
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
