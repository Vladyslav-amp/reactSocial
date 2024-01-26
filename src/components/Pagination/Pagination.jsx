// import { useState } from 'react';
// import './Pagination.scss';
// import customerData from '../../data/customerData.json';

// export const Pagination = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(4);

//   const pages = [];

//   //how many num of pages have a pagination
//   for (let i = 1; i <= Math.ceil(customerData.length / itemsPerPage); i++) {
//     pages.push(i);
//   }

//   //show pages number
//   const renderPageNumbers = pages.map((number) => {
//     return (
//       <li 
//         className="Pagination__list-item" 
//         key={number} 
//         id={number}
//       >
//         {number}
//       </li>
//     )
//   });

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItem = customerData.slice(indexOfFirstItem, indexOfLastItem);


//   return (
//     <div className="Pagination">
//       <ul className="Pagination__list">
//         { renderPageNumbers }
//       </ul>
      
//     </div>
//   )
// }