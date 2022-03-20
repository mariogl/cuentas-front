const routes = {
  listTransactions: "/transactions",
  newTransaction: "/transactions/new",
  editTransactionWithId: (id: string) => `/transactions/edit/${id}`,
  editTransaction: "/transactions/edit/:id",
  filterTagWithId: (id: string) => `/transactions/tag/${id}`,
  filterTag: "/transactions/tag/:id",
};

export default routes;
