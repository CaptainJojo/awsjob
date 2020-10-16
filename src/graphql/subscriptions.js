/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBillSplittingGroup = /* GraphQL */ `
  subscription OnCreateBillSplittingGroup {
    onCreateBillSplittingGroup {
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
export const onUpdateBillSplittingGroup = /* GraphQL */ `
  subscription OnUpdateBillSplittingGroup {
    onUpdateBillSplittingGroup {
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
export const onDeleteBillSplittingGroup = /* GraphQL */ `
  subscription OnDeleteBillSplittingGroup {
    onDeleteBillSplittingGroup {
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
export const onCreateBill = /* GraphQL */ `
  subscription OnCreateBill($owner: String) {
    onCreateBill(owner: $owner) {
      id
      title
      amount
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateBill = /* GraphQL */ `
  subscription OnUpdateBill($owner: String) {
    onUpdateBill(owner: $owner) {
      id
      title
      amount
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteBill = /* GraphQL */ `
  subscription OnDeleteBill($owner: String) {
    onDeleteBill(owner: $owner) {
      id
      title
      amount
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction($owner: String) {
    onCreateTransaction(owner: $owner) {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction($owner: String) {
    onUpdateTransaction(owner: $owner) {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction($owner: String) {
    onDeleteTransaction(owner: $owner) {
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
