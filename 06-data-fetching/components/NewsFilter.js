"use client";

import { useState, useEffect } from "react";

export default function NewsFilter({ onFilterChange, currentFilters }) {
  const [filterOptions, setFilterOptions] = useState({ years: [], months: [] });
  const [selectedYear, setSelectedYear] = useState(currentFilters?.year || "");
  const [selectedMonth, setSelectedMonth] = useState(
    currentFilters?.month || ""
  );
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    async function fetchFilterOptions() {
      try {
        const response = await fetch(
          "http://localhost:8080/news/filters/options"
        );
        if (response.ok) {
          const options = await response.json();
          setFilterOptions(options);
        }
      } catch (error) {
        console.error("Error fetching filter options:", error);
      }
    }

    fetchFilterOptions();
  }, []);

  const handleYearChange = (year) => {
    setSelectedYear(year);
    onFilterChange({
      year: year || undefined,
      month: selectedMonth || undefined,
    });
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    onFilterChange({
      year: selectedYear || undefined,
      month: month || undefined,
    });
  };

  const clearFilters = () => {
    setSelectedYear("");
    setSelectedMonth("");
    onFilterChange({});
  };

  const hasActiveFilters = selectedYear || selectedMonth;
  const resultsCount = currentFilters?.resultsCount || 0;

  return (
    <div className="news-filters-container">
      <div className="news-filters">
        <div className="filters-header">
          <div className="filters-title-section">
            <h3 className="filters-title">
              <svg
                className="filter-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                  clipRule="evenodd"
                />
              </svg>
              Filter News
            </h3>
            <span className="results-count">
              {resultsCount} {resultsCount === 1 ? "article" : "articles"} found
            </span>
          </div>

          <button
            className={`expand-toggle ${isExpanded ? "expanded" : ""}`}
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? "Collapse filters" : "Expand filters"}
          >
            <svg
              className="expand-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className={`filters-content ${isExpanded ? "expanded" : ""}`}>
          <div className="filters-grid">
            <div className="filter-group">
              <label htmlFor="year-filter" className="filter-label">
                <svg
                  className="label-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                Year
              </label>
              <div className="select-wrapper">
                <select
                  id="year-filter"
                  value={selectedYear}
                  onChange={(e) => handleYearChange(e.target.value)}
                  className="filter-select"
                >
                  <option value="">All Years</option>
                  {filterOptions.years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <svg
                  className="select-arrow"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="filter-group">
              <label htmlFor="month-filter" className="filter-label">
                <svg
                  className="label-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                Month
              </label>
              <div className="select-wrapper">
                <select
                  id="month-filter"
                  value={selectedMonth}
                  onChange={(e) => handleMonthChange(e.target.value)}
                  className="filter-select"
                >
                  <option value="">All Months</option>
                  {filterOptions.months.map((month) => (
                    <option key={month.value} value={month.value}>
                      {month.label}
                    </option>
                  ))}
                </select>
                <svg
                  className="select-arrow"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="filter-actions">
              <button
                onClick={clearFilters}
                className={`clear-filters-button ${
                  hasActiveFilters ? "active" : ""
                }`}
                disabled={!hasActiveFilters}
              >
                <svg
                  className="button-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Clear All
              </button>
            </div>
          </div>

          {hasActiveFilters && (
            <div className="active-filters">
              <div className="active-filters-header">
                <span className="active-filters-label">Active Filters:</span>
              </div>
              <div className="filter-tags">
                {selectedYear && (
                  <span className="filter-tag year-tag">
                    <svg
                      className="tag-icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Year: {selectedYear}
                    <button
                      className="tag-remove"
                      onClick={() => handleYearChange("")}
                      aria-label="Remove year filter"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedMonth && (
                  <span className="filter-tag month-tag">
                    <svg
                      className="tag-icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Month:{" "}
                    {
                      filterOptions.months.find(
                        (m) => m.value === selectedMonth
                      )?.label
                    }
                    <button
                      className="tag-remove"
                      onClick={() => handleMonthChange("")}
                      aria-label="Remove month filter"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
