import React from "react";

export default function Form() {
  return (
    <div>
      <form id="searchForm" className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search a city 🏙..."
              className="form-control"
              id="city-input"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
        </div>
      </form>
    </div>
  );
}