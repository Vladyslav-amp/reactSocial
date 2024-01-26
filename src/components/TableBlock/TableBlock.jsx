import './TableBlock.scss';
import React from "react";
import { usePagination, useTable, useGlobalFilter } from 'react-table';
import customerData from '../../data/customerData.json';
import searchIcon from '../../img/icon/search.svg';


export const Table = () => {

  const data = React.useMemo(() => customerData, []);

  const columns = React.useMemo(() => [
    {
      Header: "Customer Name",
      accessor: "customerName",
    },

    {
      Header: "Company",
      accessor: "customerCompany",
    },

    {
      Header: "Phone Number",
      accessor: "customerPhone",
    },

    {
      Header: "Email",
      accessor: "customerEmail",
    },

    {
      Header: "Country",
      accessor: "customerCountry",
    },

    {
      Header: "Status",
      accessor: "customerStatus",
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
    state,
    setPageSize,
    setGlobalFilter,
    gotoPage,
  } = useTable({ columns, data, initialState: { pageIndex: 0, pageSize: 8 }, }, useGlobalFilter, usePagination);


  const { pageIndex, pageSize } = state;
  const { globalFilter } = state;

  const generatePageButtons = () => {
    const buttons = [];
    const pageCount = pageOptions.length;

    const start = Math.max(0, pageIndex - 3);
    const end = Math.min(pageOptions.length, start + 4);

    for (let i = start; i < end; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => gotoPage(i)}
          className={i === pageIndex ? 'active' : 'passive'}
        >
          {i + 1}
        </button>
      );
    }


    if (pageIndex < pageCount - 1) {
      buttons.push(
        <button key="dots" onClick={() => gotoPage(pageIndex + 1)}>
          ...
        </button>
      );
    }

    return buttons;
  };


  return (
    <section className="customers">
      <div className="welcome">
        <h1 className="welcome-block">
          <h1 className="welcome-block__welcome-user">
            Hello 'Evano'&#128075;,
          </h1>
        </h1>
      </div>

      <div className="customers-container">
        <div className="customers-block">
          <div className="customers-block__head">
            <h1 className="customers-block__title">
              All Customers
            </h1>

            <p className="customers-block__members">
              Active Members
            </p>
          </div>

          <div className="customers-block__search">
            <img
              src={searchIcon}
              alt="search"
              className="customers-block__search-icon"
            />

            <input
              value={globalFilter}
              onChange={e => setGlobalFilter(e.target.value)}
              placeholder="Search..."
              className="customers-block__search-block"
            />
          </div>
        </div>

        <table
          className="customer"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                className="customer__block-title"
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => (
                  <th
                    className="customer__field-title"
                    {...column.getHeaderProps()}
                    style={{ minWidth: 150, textAlign: "start" }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row)

              return (
                <tr  {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      className="customer__name customer__field"
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>

        <div>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Prev
          </button>

          {generatePageButtons()}

          <button
            onClick={() => gotoPage(pageOptions.length - 1)}
            disabled={!canNextPage}
          >
            {pageOptions.length}
          </button>

          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}