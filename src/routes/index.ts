const routes = {
  listTransactions: "/transactions",
  newTransaction: "/transactions/new",
  editTransactionWithId: (id: string) => `/transactions/edit/${id}`,
  editTransaction: "/transactions/edit/:id",
};

export default routes;
