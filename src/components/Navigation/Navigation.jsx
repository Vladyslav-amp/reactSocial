import './Navigation.scss';
import dashboard from '../../img/icon/keySquare.svg';
import { Product, Customers, Arrow, Income, Promote, Help } from '../Icons/Icons';
import logo from '../../img/icon/setting.svg';
import { ReactComponent as User } from '../../img/user.svg';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = ({ borderColor }) => {

  const user = {
    id: 1,
    logo: <User />,
    name: "Evano",
    info: "Project Manager"
  }

  const currentVersion = {
    version: "v.01",
  }


  return (
    <div className="aside">
      <div className="navigation">
        <div className="navigation__container">
          <div className="navigation__title">
            <div className="navigation__title-logo">
              <img
                src={logo}
                alt="title-logo"
                className="navigation__title-icon"
              />
            </div>

            <div className="navigation__title-block">
              <h1 className="navigation__title-head">
                Dashboard
                <span className="navigation__title-span">
                  {currentVersion.version}
                </span>
              </h1>
            </div>
          </div>

          <nav className="navigation__block">
            <NavLink
              to="/header"
              className={({ isActive }) => isActive
                ? "navigation__link--active"
                : "navigation__link"
              }
            >
              <img
                src={dashboard}
                alt="Dashboard"
                className="navigation__icon"
              />
              Dashboard
            </NavLink>

            <NavLink
              to="/productList"
              className={({ isActive }) => isActive
                ? "navigation__link--active"
                : "navigation__link"
              }
            >
              <Product className={"icon-stroke"}/>
              Product
              <Arrow className={"navigation__icon--arrow"} />
            </NavLink>

            <NavLink
              to="/customerslist"
              className={({ isActive }) => isActive ? "navigation__link--active" : "navigation__link"}
            >
              <Customers />

              Customers

              <Arrow className={"navigation__icon--arrow"} />
            </NavLink>

            <NavLink
              to="/income"
              className={({ isActive }) => isActive ? "navigation__link--active" : "navigation__link"}
            >
              <Income />
              Income
              <Arrow className={"navigation__icon--arrow"} />
            </NavLink>

            <NavLink
              to="/promote"
              className={({ isActive }) => isActive ? "navigation__link--active" : "navigation__link"}
            >
              <Promote className={"icon-stroke"} />
              Promote
              <Arrow className={"navigation__icon--arrow"} />
            </NavLink>

            <NavLink
              to="/help"
              className={({ isActive }) => isActive ? "navigation__link--active" : "navigation__link"}
            >
              <Help className={"icon-stroke"} />
              Help
              <Arrow className={"navigation__icon--arrow"} />
            </NavLink>
          </nav>
        </div>

        <div className="navigation__user">
          <div className="navigation__user-block navigation__user-block--top">
            <div className="navigation__user-logo">
              {user.logo}
            </div>
          </div>

          <div className="navigation__user-block navigation__user-block--bottom">
            <div className="navigation__user-title">
              <h3 className="navigation__user-head">
                {user.name}
              </h3>
            </div>

            <div className="navigation__user-info">
              <p className="navigation__user-about">
                {user.info}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

//I used FontAwesome inside React
//npm install --save @fortawesome/fontawesome-svg-core
//npm install --save @fortawesome/free-solid-svg-icons
//npm install --save @fortawesome/react-fontawesome