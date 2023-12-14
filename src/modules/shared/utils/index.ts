export const getPaginationParams = (query: any) => {
  const cursor = query.cursor && typeof query.cursor === 'string' ? query.cursor : '';
  const limitStr = typeof query.limit === 'string' ? query.limit : '';
  const limit = Number.isInteger(parseInt(limitStr)) && parseInt(limitStr) > 0 ? parseInt(limitStr) : 30;
  return { cursor, limit };
};
