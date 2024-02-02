// import './CustomersList.scss';
// import { CustomersInfo } from '../CustomersInfo/CustomersInfo';
// import { useState } from 'react';
// import customerData from '../../data/customerData.json';
// import { ReactComponent as User } from '../../img/user.svg';
// import { Table } from '../TableBlock/TableBlock';

// // import { Pagination } from '../Pagination/Pagination';


// export const CustomersList = ({ users }) => {
//   // const [search, setSearch] = useState("");

//   // const [currentPage, setCurrentPage] = useState(1);
//   // const [itemsPerPage, setItemsPerPage] = useState(8);
//   // const [pageLimit, setPageLimit] = useState(4);
//   // const [maxPageLimit, setMaxPageLimit] = useState(4);
//   // const [minPageLimit, setMinPageLimit] = useState(0);

//   // const keys = ["customerName", "customerCompany", "customerPhone", "customerEmail", "customerCountry"];

//   // const pages = [];
//   // const indexOfLastItem = currentPage * itemsPerPage;
//   // const indexOfFirstItem = indexOfLastItem - itemsPerPage;

//   // const searchData = (data, term) => {
//   //   return data.filter(item =>
//   //     keys.some((key) => item[key].toLowerCase().match(search.toLowerCase())));
//   // };

//   // const filteredData = searchData(customerData, setSearch);
//   // const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);


//   // //how many num of pages have a pagination
//   // for (let i = 1; i <= Math.ceil(customerData.length / itemsPerPage); i++) {
//   //   pages.push(i);
//   // }

//   // //handle click to change page num
//   // const handleClick = (event) => {
//   //   setCurrentPage(Number(event.target.id));
//   // }

//   // //prev btn
//   // const handlePrevBtn = () => {
//   //   setCurrentPage(currentPage - 1);

//   //   if ((currentPage - 1) % pageLimit === 0) {
//   //     setMaxPageLimit(maxPageLimit - pageLimit);
//   //     setMinPageLimit(minPageLimit - pageLimit);
//   //   }
//   // }

//   // //next btn
//   // const handleNextBtn = () => {
//   //   setCurrentPage(currentPage + 1);

//   //   if (currentPage + 1 > maxPageLimit) {
//   //     setMaxPageLimit(maxPageLimit + pageLimit);
//   //     setMinPageLimit(minPageLimit + pageLimit);
//   //   }
//   // }

//   // //show pages number
//   // const renderPageNumbers = pages.map((number) => {
//   //   if (number < maxPageLimit + 1 && number > minPageLimit) {
//   //     return (
//   //       <li
//   //         className={currentPage === number ? "pagination__list-item--active" : "pagination__list-item"}
//   //         key={number}
//   //         id={number}
//   //         onClick={handleClick}
//   //       >
//   //         {number}
//   //       </li>
//   //     )
//   //   } else {
//   //     return null;
//   //   }
//   // });

//   // //add increment to num page
//   // let pageIncrementBtn = null;

//   // if (pages.length > maxPageLimit) {
//   //   pageIncrementBtn = <li className="pagination__dots" onClick={handleNextBtn}> &hellip; </li>
//   // }

//   // //add decrement to num page
//   // let pageDecrementBtn = null;

//   // if (pages.length > maxPageLimit) {
//   //   pageDecrementBtn = <li className="pagination__dots" onClick={handlePrevBtn}> &hellip; </li>
//   // }

//   // //show max num pages
//   // let pageMaxNum = <li className="pagination__list-item">{pages.length}</li>;

//   // //show num of data pages
//   // let dataShow = <li className="pagination__data">
//   //   {`Showing data ${indexOfFirstItem + 1} to ${indexOfLastItem} of ${customerData.length} entries`}
//   // </li>;

//   return (
//     <section className="customers">

//       <div className="customers-block">

//         <Table />

//         {/* <CustomersInfo user={searchData(currentData)} />

//         <div className="pagination">
//           <div className="pagination__num-block">
//             <ul className="pagination__list">
//               <li className="pagination__buttons">
//                 <button
//                   className="pagination__button pagination__button--prev"
//                   onClick={handlePrevBtn}
//                   disabled={currentPage === pages[0] ? true : false}
//                 >
//                   Prev
//                 </button>
//               </li>

//               {renderPageNumbers}

//               {pageIncrementBtn}

//               {pageMaxNum}

//               <li className="pagination__buttons">
//                 <button
//                   className="pagination__button pagination__button--next"
//                   onClick={handleNextBtn}
//                   disabled={currentPage === pages.length ? true : false}
//                 >
//                   Next
//                 </button>
//               </li>
//             </ul>
//           </div>

//           <div className="pagination__data-show">
//             {dataShow}
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// }
