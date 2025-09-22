export default function getPaginationParams(url: URL) {
  const sortBy = url.searchParams.get('sortBy');
  const currentPage = url.searchParams.get('currentPage');
  const perPage = url.searchParams.get('perPage');

  return { sortBy, currentPage, perPage };
}
