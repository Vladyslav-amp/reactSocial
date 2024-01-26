import './CustomersInfo.scss';
import React from "react";

export const CustomersInfo = ({ user, page }) => {

  return (
    <>
      <table className="customer">

        <tbody className="customer__body">
          <tr className="customer__block-title">
            <th className="customer__field-title">Customer Name</th>
            <th className="customer__field-title">Company</th>
            <th className="customer__field-title">Phone Number</th>
            <th className="customer__field-title">Email</th>
            <th className="customer__field-title">Country</th>
            <th className="customer__field-title">Status</th>
          </tr>

          {user.map((item) => (
            <tr className="customer__block" key={item.id}>
              <td className="customer__name customer__field">
                {item.customerName}
              </td>

              <td className="customer__company customer__field">
                {item.customerCompany}
              </td>

              <td className="customer__phone customer__field">
                {item.customerPhone}
              </td>

              <td className="customer__email customer__field">
                {item.customerEmail}
              </td>

              <td className="customer__country customer__field">
                {item.customerCountry}
              </td>

              <td className="customer__status customer__field">
                {item.customerStatus === true
                  ?
                  <div className="customer__active">
                    active
                  </div>
                  :
                  <div className="customer__inactive">
                    inactive
                  </div>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}


// { <ul className="customers-block__list">
//   {users.filter((user) =>
//     user.customerName.toLowerCase().includes(search) ||
//     user.customerCompany.toLowerCase().includes(search) ||
//     user.customerPhone.toLowerCase().includes(search) ||
//     user.customerEmail.toLowerCase().includes(search) ||
//     user.customerCountry.toLowerCase().includes(search)
//   ).map(user => (
//     <CustomersInfo user={user} key={user.id} />
//   ))}
// </ul> }