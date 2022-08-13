function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

import { useState, createElement } from 'react';
import { withTheme } from 'styled-components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

___$insertStyle(".filter-parent-container {\n  background: #16142B;\n  padding: 24px;\n  height: 620px;\n}\n\n.filter-parent-header {\n  display: flex;\n  align-items: center;\n}\n\n.filter-checkedList-div {\n  display: flex;\n  overflow: auto;\n  align-items: center;\n}\n\n.filter-checked-text {\n  background: #344054;\n  border-radius: 8px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 125%;\n  padding: 8px;\n  margin: 0 4px;\n  color: #E4E7EC;\n  display: flex;\n  align-items: center;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.cross-btn {\n  display: flex;\n}\n\n.filter-btn {\n  margin-right: 8px;\n}\n\n.filter-checked-delete-icon {\n  padding-right: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n\n.filter-click-cta {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 125%;\n  color: #FFFFFF;\n  background: #1967FF;\n  border-radius: 8px;\n  padding: 8px 24px;\n  cursor: pointer;\n  border: 1px solid #1967FF;\n  border: none;\n  box-sizing: border-box;\n  margin-right: 8px;\n  display: flex;\n  align-items: center;\n}\n\n.filter-unclick-cta {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 125%;\n  color: #1967FF;\n  border: 1px solid #344054;\n  border-radius: 8px;\n  padding: 8px 24px;\n  cursor: pointer;\n  background: #16142B;\n  box-sizing: border-box;\n  margin-right: 8px;\n  display: flex;\n  align-items: center;\n}\n\n.filterbox-container {\n  width: 383px;\n  background: #1D2939;\n  box-shadow: 0px 4px 54px 10px rgba(0, 0, 0, 0.35);\n  border-radius: 14px;\n  margin: 24px 0;\n  padding: 0 0 24px 0;\n}\n\n.filterbox-container-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px;\n}\n\n.filterbox-heading {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 125%;\n  color: #FFFFFF;\n}\n\n.filterbox-reset {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 125%;\n  color: #4785FF;\n  cursor: pointer;\n  display: flex;\n}\n\n.refresh-btn {\n  margin-right: 8px;\n}\n\n.downArrow-btn {\n  float: right;\n}\n\n.filterbox-content {\n  display: flex;\n  flex-direction: column;\n  padding: 15px 20px;\n  margin: 24px;\n  background: #101828;\n  border-radius: 8px;\n}\n\n.filterbox-content-heading {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 125%;\n  color: #FFFFFF;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  cursor: pointer;\n}\n\n.filterbox-content-options {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 8px 0;\n  cursor: pointer;\n}\n\n.filterbox-content-data {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 125%;\n  display: flex;\n  margin: 8px 0;\n  color: #E4E7EC;\n  cursor: pointer;\n}");

var Filter = function (_a) {
    var dataRadio = _a.dataRadio;
    var closeImage = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M12.6667 4.27331L11.7267 3.33331L8 7.05998L4.27333 3.33331L3.33333 4.27331L7.06 7.99998L3.33333 11.7266L4.27333 12.6666L8 8.93998L11.7267 12.6666L12.6667 11.7266L8.93999 7.99998L12.6667 4.27331Z\" fill=\"white\"/>\n      </svg>\n      ";
    var refreshImage = "<svg width=\"12\" height=\"14\" viewBox=\"0 0 12 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M1.5 7.96375C1.5 6.72624 2.0025 5.60125 2.82 4.78375L1.755 3.71875C0.675 4.80625 0 6.30624 0 7.96375C0 11.0237 2.2875 13.5437 5.25 13.9112V12.3962C3.1275 12.0362 1.5 10.1912 1.5 7.96375ZM12 7.96375C12 4.64875 9.315 1.96375 6 1.96375C5.955 1.96375 5.91 1.97125 5.865 1.97125L6.6825 1.15375L5.625 0.0887451L3 2.71375L5.625 5.33875L6.6825 4.28125L5.8725 3.47125C5.9175 3.47125 5.9625 3.46375 6 3.46375C8.4825 3.46375 10.5 5.48125 10.5 7.96375C10.5 10.1912 8.8725 12.0362 6.75 12.3962V13.9112C9.7125 13.5437 12 11.0237 12 7.96375Z\" fill=\"#4785FF\"/>\n      </svg>";
    var arrowDown = "<svg width=\"14\" height=\"8\" viewBox=\"0 0 14 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M1.96263 1.10711L7.01921 6.77058L12.1527 1.17676\" stroke=\"#2F80ED\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      </svg>\n      ";
    var arrowUp = "<svg width=\"14\" height=\"8\" viewBox=\"0 0 14 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M12.1397 6.75969L7.03239 1.14189L1.94934 6.78162\" stroke=\"#2F80ED\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      </svg>\n      ";
    var filterWhite = "<svg width=\"18\" height=\"12\" viewBox=\"0 0 18 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M7 12H11V10H7V12ZM0 0V2H18V0H0ZM3 7H15V5H3V7Z\" fill=\"white\"/>\n      </svg>\n      ";
    var filterBlue = "<svg width=\"18\" height=\"12\" viewBox=\"0 0 18 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M7 12H11V10H7V12ZM0 0V2H18V0H0ZM3 7H15V5H3V7Z\" fill=\"#1967FF\"/>\n      </svg>\n      ";
    var checkboxData = [
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
    var _b = useState(checkboxData), dataCheckbox = _b[0], setDataCheckbox = _b[1];
    var _c = useState(true), filterClick = _c[0], setFilterClick = _c[1];
    var _d = useState(false), accordionClick1 = _d[0], setAccordionClick1 = _d[1];
    var _e = useState(false), accordionClick2 = _e[0], setAccordionClick2 = _e[1];
    var _f = useState(""), radioVal = _f[0], setRadioVal = _f[1];
    var handleCheck = function (e, ind) {
        var dta = __spreadArrays(dataCheckbox);
        dta[ind].isChecked = !dta[ind].isChecked;
        setDataCheckbox(__spreadArrays(dta));
    };
    var resetValues = function () {
        setDataCheckbox(checkboxData);
        setRadioVal("");
    };
    var checkedArr = dataCheckbox.filter(function (dt, ind) {
        return dt.isChecked == true;
    });
    var handleCrossClick = function (dt) {
        dt.isChecked = false;
        var newArr = __spreadArrays(dataCheckbox);
        var updatedArr = newArr.map(function (dta, ind) {
            if (dta.value == dt.value) {
                dta.isChecked = false;
            }
            return dta;
        });
        setDataCheckbox(updatedArr);
    };
    return (createElement("div", { className: "filter-parent-container" },
        createElement("div", { className: "filter-parent-header" },
            createElement("button", { className: filterClick ? "filter-click-cta" : "filter-unclick-cta", onClick: function () {
                    setFilterClick(!filterClick);
                } },
                createElement("div", { className: "filter-btn", dangerouslySetInnerHTML: filterClick ? { __html: filterWhite } : { __html: filterBlue } }),
                " Filter"),
            createElement("div", { className: "filter-checkedList-div" },
                checkedArr.map(function (dt, ind) {
                    return (createElement("div", { className: "filter-checked-text" },
                        createElement("div", { className: "filter-checked-delete-icon", onClick: function () {
                                handleCrossClick(dt);
                            } },
                            " ",
                            createElement("div", { className: "cross-btn", dangerouslySetInnerHTML: { __html: closeImage } })),
                        "Severity: ",
                        dt.value));
                }),
                radioVal.length ? (createElement("div", { className: "filter-checked-text" },
                    createElement("div", { className: "filter-checked-delete-icon", onClick: function () { return setRadioVal(""); } },
                        " ",
                        createElement("div", { className: "cross-btn", dangerouslySetInnerHTML: { __html: closeImage } })),
                    "Time: ",
                    radioVal)) : null)),
        filterClick ? (createElement("div", { className: "filterbox-container" },
            createElement("div", { className: "filterbox-container-heading" },
                createElement("div", { className: "filterbox-heading" }, "Filter data by"),
                createElement("div", { className: "filterbox-reset", onClick: function () {
                        resetValues();
                    } },
                    createElement("div", { className: "refresh-btn", dangerouslySetInnerHTML: { __html: refreshImage } }),
                    "Reset")),
            createElement("div", { className: "filterbox-content" },
                createElement("div", { className: "filterbox-content-heading", onClick: function () {
                        setAccordionClick1(!accordionClick1);
                    } },
                    "Severity  ",
                    createElement("div", { className: "downArrow-btn", dangerouslySetInnerHTML: accordionClick1 ? { __html: arrowUp } : { __html: arrowDown } })),
                accordionClick1 ? (createElement("div", { className: "filterbox-content-options" }, dataCheckbox.map(function (dt, ind) {
                    return (createElement("label", { className: "filterbox-content-data" },
                        createElement("input", { type: "checkbox", style: { cursor: "pointer" }, id: "checkbox" + dt.key, checked: dt.isChecked, value: dt.value, onChange: function (e) {
                                handleCheck(e, ind);
                            } }),
                        dt.value));
                }))) : null),
            createElement("div", { className: "filterbox-content" },
                createElement("div", { className: "filterbox-content-heading", onClick: function () {
                        setAccordionClick2(!accordionClick2);
                    } },
                    "Time ",
                    createElement("div", { className: "downArrow-btn", dangerouslySetInnerHTML: accordionClick2 ? { __html: arrowUp } : { __html: arrowDown } })),
                accordionClick2 ? (createElement("div", { className: "filterbox-content-options" }, dataRadio.map(function (dt, ind) {
                    return (createElement("label", { className: "filterbox-content-data" },
                        createElement("input", { style: { cursor: "pointer" }, type: "radio", id: "radio" + dt.key, checked: dt.value == radioVal, value: dt.value, onChange: function (e) { return setRadioVal(e.target.value); } }),
                        dt.value));
                }))) : null))) : null));
};
var Filter$1 = withTheme(Filter);

export { Filter$1 as Filter };
//# sourceMappingURL=index.es.js.map
