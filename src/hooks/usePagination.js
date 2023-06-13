import { useMemo } from 'react';

export const usePagination = ({
    totalPosts,
    pageSize,
    nearNumbersCount,
    currentPage,
}) => {
    const range = (start, end) => {
        let length = end - start + 1;
        return Array.from({ length }, (_, idx) => idx + start);
    };

    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalPosts / pageSize);
        const totalPageNumbers = nearNumbersCount + 5;

        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - nearNumbersCount, 1);
        const rightSiblingIndex = Math.min(
            currentPage + nearNumbersCount,
            totalPageCount
        );

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * nearNumbersCount;
            let leftRange = range(1, leftItemCount);

            return [...leftRange, 'DOTS', totalPageCount];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * nearNumbersCount;
            let rightRange = range(
                totalPageCount - rightItemCount + 1,
                totalPageCount
            );
            return [firstPageIndex, 'DOTS', ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [
                firstPageIndex,
                'DOTS',
                ...middleRange,
                'DOTS',
                lastPageIndex,
            ];
        }
    }, [totalPosts, pageSize, nearNumbersCount, currentPage]);

    return paginationRange;
};
