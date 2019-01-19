import * as React from 'react';
import './App.scss';

import Card from './components/Card';
import Loading from './components/Loading';
import Main, { MainContext } from './components/MainApp';
import Paginate from './components/Pagination';

interface IProps {
  currentPage: number;
  data: any;
  pagination: any;
  isLoading: boolean;
  handleSortChange: (e: any) => void;
}

const App = (props) => (
  <Main {...props}>
    <section className="hero hero-content is-medium is-dark">
      <div className="hero-body hero-content-body">
        <div className="container">
          <h1 className="title">
            Mercadolibre Demo
          </h1>
          <h2 className="subtitle">
            Mobile Phones and devices
          </h2>
        </div>
      </div>
    </section>
    <MainContext.Consumer>
      {({ data, isLoading, pagination, currentPage, handleSortChange }: IProps) => {
        const renderCard = () => {
          return data.results.map((item, index) => (
            <Card key={index} data={item} />
          ));
        };

        const renderAvailableSorts = () => {
          if(!data.available_sorts) return;
          return data.available_sorts.map(sort => (
            <option value={sort.id} key={sort.id}>{sort.name}</option>
          ));
        }

        const RenderPagination = () => {
          return (
            <div style={{
              alignContent: 'center',
              margin: '50px auto',
              width: '50%'
            }}>
              <Paginate pagination={pagination} currentPage={currentPage} />
            </div>
          );
        }

        // if the showing value is less than the offset, it should 0
        const showing = (pagination.offset - pagination.pageSize) < 0 ? 0 :
        pagination.offset - pagination.pageSize;

        return (
          <>
            <div className="App screen-shrink">
              <div className="panel columns">
                <div className="column is-full">
                  <div className="sort-area">
                    <span>Sort By: </span>
                    <div className="control">
                      <div className="select">
                        <select name="sort" onChange={handleSortChange}>
                          <option value="">Select dropdown</option>
                          {renderAvailableSorts()}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="showing">
                    {data.paging &&
                      `Showing ${showing}–${pagination.offset || pagination.pageSize} of
                      ${pagination.total} results`
                    }
                  </div>
                </div>
              </div>
              <RenderPagination />
              <div className="product-list columns is-multiline">
                {isLoading ? <Loading /> : renderCard()}
              </div>
              <RenderPagination />
            </div>
          </>
        );
      }}
    </MainContext.Consumer>
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          Made with ❤️ from Gabriel Micah 😎
        </p>
      </div>
    </footer>
  </Main>
);

export default App;
