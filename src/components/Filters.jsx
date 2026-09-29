export default function Filters({
  stateFilter,
  statusFilter,
  search,
  onStateChange,
  onStatusChange,
  onSearchChange,
  onClear
}) {
  return (
    <section className="filter-panel">

      <div className="filter-heading">

        <div>
          <span className="eyebrow">
            Scholarship records
          </span>

          <h2>Manage scholarships</h2>
        </div>

        <button
          className="ghost-button"
          onClick={onClear}
        >
          Clear filters
        </button>

      </div>


      <div className="filter-grid">

        {/* Search */}

        <label className="field search-field">

          <span>Search</span>

          <div className="input-with-icon">

            <span>⌕</span>

            <input
              value={search}
              onChange={(e) =>
                onSearchChange(e.target.value)
              }
              placeholder="Search scholarship name..."
            />

          </div>

        </label>


        {/* State */}

        <label className="field">

          <span>State</span>

          <select
            value={stateFilter}
            onChange={(e) =>
              onStateChange(e.target.value)
            }
          >

            <option value="All">
              All states
            </option>

            <option value="Bihar">
              Bihar
            </option>

            <option value="Haryana">
              Haryana
            </option>

            <option value="Jharkhand">
              Jharkhand
            </option>

          </select>

        </label>


        {/* Status */}

        <label className="field">

          <span>Status</span>

          <select
            value={statusFilter}
            onChange={(e) =>
              onStatusChange(e.target.value)
            }
          >

            <option value="All">
              All statuses
            </option>

            <option value="Published">
              Published
            </option>

            <option value="Draft">
              Draft
            </option>

            <option value="Expired">
              Expired
            </option>

          </select>

        </label>

      </div>

    </section>
  );
}