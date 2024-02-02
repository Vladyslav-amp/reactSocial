import './TableBlock.scss';
import React, { useState, useEffect } from "react";
import Select from 'react-select';
import {
  usePagination,
  useTable,
  useGlobalFilter,
  useBlockLayout,
  useFilters,
  useSortBy
} from 'react-table';
import customerData from '../../data/customerData.json';
import searchIcon from '../../img/icon/search.svg';


export const Table = () => {

  const data = React.useMemo(() => customerData, []);

  const columns = React.useMemo(() => [
    {
      Header: "Customer Name",
      accessor: "customerName",
      width: 200,
      canSort: true,
    },

    {
      Header: "Company",
      accessor: "customerCompany",
      width: 270,
    },

    {
      Header: "Phone Number",
      accessor: "customerPhone",
      width: 230,
    },

    {
      Header: "Email",
      accessor: "customerEmail",
      width: 320,
    },

    {
      Header: "Country",
      accessor: "customerCountry",
      width: 150,
    },

    {
      Header: "Status",
      accessor: "customerStatus",
      Cell: (cellProps) => {
        if (cellProps.value === true) {
          return <span className="ac">active</span>
        } else {
          return <span className="pas">inactive</span>
        }
      }
    },
  ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    toggleSortBy,
    state: { sortBy },
    state,
    setPageSize,
    setFilter,
    setGlobalFilter,
    gotoPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 8 },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination,
    useBlockLayout,

  );

  // useEffect(() => {
  //   // Tworzenie hasha z aktualnych filtrów
  //   const hash = state.filters
  //     .map((filter) => `#${filter.id}:${filter.value}`)
  //     .join('');

  //   setHashFilters(hash);
  // }, [state.filters]);



  const { pageIndex, pageSize } = state;
  const { globalFilter } = state;

  const initialPageNumber = 1;
  const inputRef = React.createRef();

  const firstTableIndex = pageIndex * pageSize + 1;
  const lastTableIndex = pageIndex * pageSize + page.length;

  const generatePageButtons = () => {
    const buttons = [];
    const pageCount = pageOptions.length;

    //display how many visible page num you want 
    const start = Math.max(0, pageIndex - 3);
    const end = Math.min(pageOptions.length, start + 4);

    //clickable and navigate page num button
    for (let i = start; i < end; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => gotoPage(i)}
          className={i === pageIndex
            ? "customers-pagination__button--active"
            : "customers-pagination__button--passive"}
        >
          {i + 1}
        </button>
      );
    }

    //dots button
    if (pageIndex < pageCount - 1) {
      buttons.push(
        <button
          key="dots"
          onClick={() => gotoPage(pageIndex + 1)}
          className="customers-pagination__button--dots"
        >
          ...
        </button>
      );
    }

    return buttons;
  };

  const options = [
    {
      value: 'A-z',
      label: (
        <button onClick={() => toggleSortBy('customerName')}>
          A-z
        </button>
      ),
    },

    {
      value: 'Online',
      label: (
        <button onClick={() => setFilter('customerStatus', 'true')}>
          Online
        </button>
      ),
    },

    {
      value: 'Offline',
      label: (
        <button onClick={() => setFilter('customerStatus', 'false')}>
          Offline
        </button>
      ),
    },
  ];

  // const CustomOption = ({ innerProps, label }) => {
  //   return <div {...innerProps}>{label}</div>;
  // };

  //Change value to default after unfocus input
  const handleBlur = () => {
    if (inputRef.current) {
      inputRef.current.value = initialPageNumber;
    }
  };

  const user = {
    id: 1,
    name: "Evano",
    info: "Project Manager"
  }

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (selectedOption) => {
    // Check if we chose filter online
    const isOnlineSelected = selectedOption.some((option) => option.value === 'Online');

    // If chose online, delete offline
    if (isOnlineSelected) {
      setSelectedOptions(selectedOption.filter((option) => option.value !== 'Offline'));
    } else {
      setSelectedOptions(selectedOption);
    }
  };

  return (
    <section className="customers">
      <div className="customers-welcome">
        <h1 className="customers-welcome__user-block">
          {`Hello ${user.name} \u{1F44B}`}
        </h1>
      </div>

      <div className="customers-filters">
        <div className="customers-filters__block">
          <div className="customers-filters__head">
            <h1 className="customers-filters__head-title">
              All Customers
            </h1>

            <Select
              className="customers-filters__head-select"
              options={options}
              isSearchable={false}
              onChange={handleSelectChange}
              isMulti
              value={selectedOptions}
              isClearable={false}
              theme={(theme) => ({
                ...theme,
                borderRadius: 10,
                colors: {
                  ...theme.colors,
                  primary25: 'neutral0',
                  primary: 'black',
                },
              })}
            />
          </div>

          <div className="customers-filters__search">
            <img
              src={searchIcon}
              alt="search"
              className="customers-filters__search-icon"
            />

            <input
              value={globalFilter}
              onChange={e => setGlobalFilter(e.target.value)}
              placeholder="Search..."
              className="customers-filters__search-block"
            />
          </div>
        </div>
      </div>

      <div className="customers-table">
        <table
          className="customers-table__block"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                className="customers-table__head-group"
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => (
                  <th
                    className="customers-table__head-title"
                    {...column.getHeaderProps()}
                    style={{ width: column.width || 'auto' }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody
            {...getTableBodyProps()}
            className="customers-table__tbody"
          >
            {page.map((row) => {
              prepareRow(row)

              return (
                <tr
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => (
                    <td
                      className="customers-table__row-field"
                      {...cell.getCellProps()}
                      style={{ width: cell.column.width }}
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="customers-pagination">
        <div className="customers-pagination__show-data">
          {`Showing data form ${firstTableIndex} to ${lastTableIndex} entries of ${rows.length}`}
        </div>

        <div className="customers-pagination__searcher customers-pagination__searcher-block">
          <span className="customers-pagination__searcher-title">
            Go to page:
          </span>

          <input
            type="number"
            className="customers-pagination__searcher-input"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            onBlur={handleBlur}
            min="1"
            max={pageOptions.length}
            ref={inputRef}
          />
        </div>

        <div className="customers-pagination__page-size">
          <select
            className="customers-pagination__page-show"
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[4, 8, 16].map(pageSizeOption => (
              <option
                className="customers-pagination__page-option"
                key={pageSizeOption}
                value={pageSizeOption}
              >
                Show {pageSizeOption}
              </option>
            ))}
          </select>
        </div>

        <div className="customers-pagination__button-block">
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="customers-pagination__button"
          >
            &lt;
          </button>

          {generatePageButtons()}

          <button
            onClick={() => gotoPage(pageOptions.length - 1)}
            disabled={!canNextPage}
            className="customers-pagination__button"
          >
            {pageOptions.length}
          </button>

          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="customers-pagination__button"
          >
            &gt;
          </button>
        </div>
      </div>
    </section >
  );
}