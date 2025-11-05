import { useMemo } from 'react';

export const usePagination = (
  items: Event[],
  itemsPerPage: number,
  currentPage: number
) => {
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  }, [items, currentPage, itemsPerPage]);

  return { paginatedItems, totalPages };
};

