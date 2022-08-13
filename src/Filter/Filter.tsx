import * as React from "react";
import { FilterProps } from "./Filter.types";
import "./Filter.scss";
import { withTheme } from "styled-components";



const Filter: React.FC<FilterProps> = ({ dataRadio }) => {

      const closeImage = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6667 4.27331L11.7267 3.33331L8 7.05998L4.27333 3.33331L3.33333 4.27331L7.06 7.99998L3.33333 11.7266L4.27333 12.6666L8 8.93998L11.7267 12.6666L12.6667 11.7266L8.93999 7.99998L12.6667 4.27331Z" fill="white"/>
      </svg>
      `;

      const refreshImage =`<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 7.96375C1.5 6.72624 2.0025 5.60125 2.82 4.78375L1.755 3.71875C0.675 4.80625 0 6.30624 0 7.96375C0 11.0237 2.2875 13.5437 5.25 13.9112V12.3962C3.1275 12.0362 1.5 10.1912 1.5 7.96375ZM12 7.96375C12 4.64875 9.315 1.96375 6 1.96375C5.955 1.96375 5.91 1.97125 5.865 1.97125L6.6825 1.15375L5.625 0.0887451L3 2.71375L5.625 5.33875L6.6825 4.28125L5.8725 3.47125C5.9175 3.47125 5.9625 3.46375 6 3.46375C8.4825 3.46375 10.5 5.48125 10.5 7.96375C10.5 10.1912 8.8725 12.0362 6.75 12.3962V13.9112C9.7125 13.5437 12 11.0237 12 7.96375Z" fill="#4785FF"/>
      </svg>`

      const arrowDown = `<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.96263 1.10711L7.01921 6.77058L12.1527 1.17676" stroke="#2F80ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `

      const arrowUp= `<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.1397 6.75969L7.03239 1.14189L1.94934 6.78162" stroke="#2F80ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `
      const filterWhite = `<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 12H11V10H7V12ZM0 0V2H18V0H0ZM3 7H15V5H3V7Z" fill="white"/>
      </svg>
      `

      const filterBlue=`<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 12H11V10H7V12ZM0 0V2H18V0H0ZM3 7H15V5H3V7Z" fill="#1967FF"/>
      </svg>
      `

      let checkboxData = [
        {
          key: 1,
          value: "Low",
          isChecked: false,
        },
        {
          key: 2,
          value: "Medium",
          isChecked: false,
        },
        {
          key: 3,
          value: "High",
          isChecked: false,
        },
  ];

  const [dataCheckbox, setDataCheckbox] = React.useState(checkboxData);
  const [filterClick, setFilterClick] = React.useState(true);
  const [accordionClick1, setAccordionClick1] = React.useState(false);
  const [accordionClick2, setAccordionClick2] = React.useState(false);
  const [radioVal, setRadioVal] = React.useState("");

  const handleCheck = (e, ind) => {
    let dta = [...dataCheckbox];
    dta[ind].isChecked = !dta[ind].isChecked;
    setDataCheckbox([...dta]);
  };

  const resetValues = () => {
    setDataCheckbox(checkboxData);
    setRadioVal("");
  };

  let checkedArr = dataCheckbox.filter((dt, ind) => {
    return dt.isChecked == true;
  });

  const handleCrossClick = (dt) => {
    dt.isChecked = false;
    let newArr = [...dataCheckbox];
    let updatedArr = newArr.map((dta, ind) => {
      if (dta.value == dt.value) {
        dta.isChecked = false;
      }
      return dta;
    });
    setDataCheckbox(updatedArr);
  };

  return (
    <div className="filter-parent-container">
      <div className="filter-parent-header">
        <button
          className={filterClick ? "filter-click-cta" : "filter-unclick-cta"}
          onClick={() => {
            setFilterClick(!filterClick);
          }}
        >
          <div className="filter-btn"  dangerouslySetInnerHTML={filterClick ? { __html: filterWhite }:{__html: filterBlue}}/> Filter
        </button>
        <div className="filter-checkedList-div">
          {checkedArr.map((dt, ind) => {
            return (
              <div className="filter-checked-text">
                <div
                  className="filter-checked-delete-icon"
                  onClick={() => {
                    handleCrossClick(dt);
                  }}
                >
                  {" "}
                  <div className="cross-btn"  dangerouslySetInnerHTML={{ __html: closeImage }}/>
                </div>
                Severity: {dt.value}
              </div>
            );
          })}
          {radioVal.length ? (
            <div className="filter-checked-text">
              <div
                className="filter-checked-delete-icon"
                onClick={() => setRadioVal("")}
              >
                {" "}
                <div className="cross-btn"  dangerouslySetInnerHTML={{ __html: closeImage }}/>
              </div>
              Time: {radioVal}
            </div>
          ) : null}
        </div>
      </div>
      {filterClick ? (
        <div className="filterbox-container">
          <div className="filterbox-container-heading">
            <div className="filterbox-heading">Filter data by</div>
            <div
              className="filterbox-reset"
              onClick={() => {
                resetValues();
              }}
            >
              <div className="refresh-btn"  dangerouslySetInnerHTML={{ __html: refreshImage }}/>
               Reset
            </div>
          </div>
          <div className="filterbox-content">
            <div
              className="filterbox-content-heading"
              onClick={() => {
                setAccordionClick1(!accordionClick1);
              }}
            >
              Severity  <div className="downArrow-btn"  dangerouslySetInnerHTML={accordionClick1 ?{ __html: arrowUp }:{ __html: arrowDown }}/>
            </div>
            {accordionClick1 ? (
              <div className="filterbox-content-options">
                {dataCheckbox.map((dt, ind) => {
                  return (
                    <label className="filterbox-content-data">
                      <input
                        type="checkbox"
                        style={{ cursor: "pointer" }}
                        id={`checkbox${dt.key}`}
                        checked={dt.isChecked}
                        value={dt.value}
                        onChange={(e) => {
                          handleCheck(e, ind);
                        }}
                      />
                      {dt.value}
                    </label>
                  );
                })}
              </div>
            ) : null}
          </div>

          <div className="filterbox-content">
            <div
              className="filterbox-content-heading"
              onClick={() => {
                setAccordionClick2(!accordionClick2);
              }}
            >
              Time <div className="downArrow-btn"  dangerouslySetInnerHTML={accordionClick2 ?{ __html: arrowUp }:{ __html: arrowDown }}/>
            </div>
            {accordionClick2 ? (
              <div className="filterbox-content-options">
                {dataRadio.map((dt, ind) => {
                  return (
                    <label className="filterbox-content-data">
                      <input
                        style={{ cursor: "pointer" }}
                        type="radio"
                        id={`radio${dt.key}`}
                        checked={dt.value == radioVal}
                        value={dt.value}
                        onChange={(e) => setRadioVal(e.target.value)}
                      />
                      {dt.value}
                    </label>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default withTheme(Filter) as React.ComponentType<FilterProps>;
