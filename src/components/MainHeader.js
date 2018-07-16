import React from "react";

export function MainHeader() {
  return (
    <header>
      <div className="pre-header">
        <div className="header-logo">Logo Image</div>
        <div className="profile-navigation"><ul>
            <a href="" className="profile-img">
              S
            </a>
        </ul></div>
      </div>
      <div className="container">
        <div className="page-title">Front Extension 42 Willow Way SE15</div>
        <ol className="breadcrumbs">
          <li>Project Details</li>
          <li className="is-active">Advice</li>
          <li>Next Steps</li>
        </ol>
      </div>
    </header>
  )
}
