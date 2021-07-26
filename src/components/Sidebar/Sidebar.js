import React from "react"
import { useLocation, NavLink } from "react-router-dom"
import { Nav } from "react-bootstrap"

function Sidebar({ color, image, routes }) {
  const location = useLocation()
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : ""
  }
  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")",
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a href="#" className="simple-text logo-mini mx-1">
            <div className="logo-img">
              <img
                src={
                  "https://w7.pngwing.com/pngs/984/903/png-transparent-psychology-logo-organization-psychology-symbol-logo-psychology-psychologist.png"
                }
                alt="..."
              />
            </div>
          </a>
          <a className="simple-text" href="#">
            Anamsein
          </a>
        </div>
        <Nav>
          {routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li
                  className={
                    prop.upgrade
                      ? "active active-pro"
                      : activeRoute(prop.layout + prop.path)
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              )
            return null
          })}
        </Nav>
      </div>
    </div>
  )
}

export default Sidebar
