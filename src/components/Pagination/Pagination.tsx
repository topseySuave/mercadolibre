import Pagination from 'rc-pagination';
import * as React from 'react';

import 'rc-pagination/assets/index.css';

interface IProps {
  currentPage?: number;
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

const AppPaginate = ({ currentPage, pagination }: IProps) => {
  return <Pagination
    total={pagination.total}
    itemRender={itemRender}
    current={currentPage}
    hideOnSinglePage
    onChange={() => 'void'}
    pageSize={pagination.pageSize}
  />;
};

export default AppPaginate;
