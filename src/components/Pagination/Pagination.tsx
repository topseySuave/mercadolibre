import Pagination from 'rc-pagination';
import * as React from 'react';

import 'rc-pagination/assets/index.css';

interface IProps {
  currentPage?: number;
  handlePageChange: (c, p) => void;
  pagination?: {
    onChange: () => void;
    pageSize: number;
    total: number;
    limit: number;
  };
}

const itemRender = (current: any, type: any, element: any) => {
  if(type === 'page') {
    return <a href={`?page=${current}`}>{current}</a>;
  }
  return element;
};

const AppPaginate = ({ currentPage, pagination, handlePageChange }: IProps) => {
  return <Pagination
    total={pagination.total}
    itemRender={itemRender}
    current={currentPage}
    hideOnSinglePage
    onChange={handlePageChange}
    pageSize={pagination.pageSize}
  />;
};

export default AppPaginate;
