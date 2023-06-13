import React from 'react';
import { Pagination } from 'react-bootstrap';
import { usePagination } from '../hooks/usePagination';

const Paginator = ({
    currentPage,
    totalPosts,
    onPageChange,
    pageSize,
    nearNumbersCount,
}) => {
    const paginationRange = usePagination({
        totalPosts,
        currentPage,
        nearNumbersCount,
        pageSize,
    });

    if (currentPage === 0) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <Pagination>
            <Pagination.Prev
                disabled={currentPage === 1}
                onClick={onPrevious}
            />

            {paginationRange.map((pageNumber, index) => {
                if (pageNumber === 'DOTS') {
                    return <Pagination.Ellipsis disabled key={index} />;
                }

                return (
                    <Pagination.Item
                        key={index}
                        active={pageNumber === currentPage}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </Pagination.Item>
                );
            })}
            <Pagination.Next
                disabled={currentPage === lastPage}
                onClick={onNext}
            />
        </Pagination>
    );
};

export default Paginator;
