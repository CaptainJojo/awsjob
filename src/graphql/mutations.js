/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBillSplittingGroup = /* GraphQL */ `
  mutation CreateBillSplittingGroup(
    $input: CreateBillSplittingGroupInput!
    $condition: ModelBillSplittingGroupConditionInput
  ) {
    createBillSplittingGroup(input: $input, condition: $condition) {
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
export const updateBillSplittingGroup = /* GraphQL */ `
  mutation UpdateBillSplittingGroup(
    $input: UpdateBillSplittingGroupInput!
    $condition: ModelBillSplittingGroupConditionInput
  ) {
    updateBillSplittingGroup(input: $input, condition: $condition) {
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
export const deleteBillSplittingGroup = /* GraphQL */ `
  mutation DeleteBillSplittingGroup(
    $input: DeleteBillSplittingGroupInput!
    $condition: ModelBillSplittingGroupConditionInput
  ) {
    deleteBillSplittingGroup(input: $input, condition: $condition) {
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
export const createBill = /* GraphQL */ `
  mutation CreateBill(
    $input: CreateBillInput!
    $condition: ModelBillConditionInput
  ) {
    createBill(input: $input, condition: $condition) {
      id
      title
      amount
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateBill = /* GraphQL */ `
  mutation UpdateBill(
    $input: UpdateBillInput!
    $condition: ModelBillConditionInput
  ) {
    updateBill(input: $input, condition: $condition) {
      id
      title
      amount
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteBill = /* GraphQL */ `
  mutation DeleteBill(
    $input: DeleteBillInput!
    $condition: ModelBillConditionInput
  ) {
    deleteBill(input: $input, condition: $condition) {
      id
      title
      amount
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
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
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
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
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
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
