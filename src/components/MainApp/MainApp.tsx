import axios from "axios";
import queryString from 'query-string';
import * as React from "react";

export interface IContextProps {
  pagination?: {
    pageSize: number;
    total: number;
    limit: number;
    offset: number;
  };
  data?: any;
}

interface IState extends IContextProps {
  currentPage: number;
  isLoading: boolean;
  sortBy: string;
}

interface IProps {
  history: any;
  location: any;
  children: any;
  match: any;
  staticContext: any;
}

const initialContextProps: IContextProps = {
  data: {},
  pagination: {
    limit: 20,
    offset: 0,
    pageSize: 20,
    total: 0,
  }
};

export const MainContext = React.createContext(initialContextProps);

export default class Main extends React.Component<IProps, IState> {
  public state: IState = {
    currentPage: 1,
    data: {},
    isLoading: true,
    pagination: initialContextProps.pagination,
    sortBy: ''
  };

  constructor(props: any) {
    super(props);
    this.getMercadolibreData = this.getMercadolibreData.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  public componentWillMount() {
    // parse the page param string to an object
    const params = queryString.parse(this.props.location.search);
    
    // Update the current page on when
    // the params objects ia available
    if(params.page || params.sortBy) {
      const currentPage = parseInt(params.page, 10);
      const offset = currentPage * this.state.pagination.pageSize || 0;
      this.setState({
        currentPage,
        pagination: {...this.state.pagination, offset },
        sortBy: params.sortBy,
      });
    }
  }

  public async componentDidMount() {
    const data = await this.getMercadolibreData();
    if (data) {
      this.setState({
        data,
        isLoading: false,
        pagination: {
          ...this.state.pagination,
          total: data.paging.primary_results
        }
      });
    }
  }

  public handleSortChange(event: any) {
    const value = event.target.value;
    const { search } = this.props.location;
    const newSearch = queryString.parse(search);
    let newQuery;
    if (search.includes('page')) {
      newQuery = queryString.stringify({ page: newSearch.page, sortBy: value });
    } else {
      newQuery = queryString.stringify({ sortBy: value });
    }
    window.location.href = `/?${newQuery}`;
  }

  public async getMercadolibreData(): Promise<any> {
    const { pagination, sortBy } = this.state;
    let api = `https://api.mercadolibre.com/sites/MLB/search?q=phone&offset=${pagination.offset}&limit=${pagination.pageSize}`;
    
    // append the sort query params if provided;
    if (sortBy) api = `${api}&sort=${sortBy}`;

    try {
      const res = await axios.get(api);
      return res.data;
    } catch (err) {
      alert("Error Connecting...");
    }
  }

  public render() {
    return (
      <MainContext.Provider
        value={{
          ...this.state,
          handleSortChange: this.handleSortChange
        }}
      >
        {this.props.children}
      </MainContext.Provider>
    );
  }
}
