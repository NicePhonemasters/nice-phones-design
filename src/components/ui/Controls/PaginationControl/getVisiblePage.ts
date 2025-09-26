export function getVisiblePages(
  pageCount: number,
  currentPage: number,
  maxVisible: number,
) {
  const pages: (string | number)[] = [];

  if (pageCount <= maxVisible + 1) {
    return Array.from({ length: pageCount }, (_, i) => (i + 1).toString());
  }

  const half = (maxVisible - 1) / 2;
  let start = currentPage - half;
  let end = currentPage + half;

  // корректировка диапазона для крайних страниц
  if (start < 1) {
    start = 1;
    end = maxVisible;
  }
  if (end > pageCount) {
    end = pageCount;
    start = pageCount - maxVisible + 1;
  }

  // добавляем первую страницу и многоточие слева только если нужно
  if (start > 1) {
    pages.push(1);
    if (start > 2) pages.push('...');
  }

  // центральные страницы
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  // многоточие и последняя страница справа
  if (end < pageCount) {
    if (end < pageCount - 1) pages.push('...');
    pages.push(pageCount);
  }

  return pages.map(String);
}
