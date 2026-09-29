import StatusBadge from "./StatusBadge";

export default function ScholarshipTable({
  scholarships,
  onStatusChange,
  onEdit,
  onPreview
}) {

  if (!scholarships.length) {
    return (
      <div className="empty-state">

        <div className="empty-icon">
          ⌕
        </div>

        <h3>No scholarships found</h3>

        <p>
          Try changing the search text or clearing your filters.
        </p>

      </div>
    );
  }


  return (
    <div className="table-wrap">

      <table>

        <thead>

          <tr>
            <th>Scholarship</th>
            <th>State</th>
            <th>Class</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

        </thead>


        <tbody>

          {scholarships.map((scholarship) => (

            <tr key={scholarship.id}>

              <td>

                <div className="scholarship-name">

                  <div className="scholarship-avatar">
                    {scholarship.name.charAt(0)}
                  </div>

                  <div>

                    <strong>
                      {scholarship.name}
                    </strong>

                    <small>
                      {scholarship.provider}
                    </small>

                  </div>

                </div>

              </td>


              <td>

                <span className="state-pill">
                  {scholarship.state}
                </span>

              </td>


              <td>
                {scholarship.classLevel}
              </td>


              <td>
                {scholarship.deadline}
              </td>


              <td>

                <select
                  className={`status-select status-${scholarship.status.toLowerCase()}`}
                  value={scholarship.status}
                  onChange={(e) =>
                    onStatusChange(
                      scholarship.id,
                      e.target.value
                    )
                  }
                >

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

              </td>


              <td>

                <div className="row-actions">

                  <button
                    className="table-button"
                    onClick={() =>
                      onPreview(scholarship)
                    }
                  >
                    Preview
                  </button>

                  <button
                    className="table-button table-button-dark"
                    onClick={() =>
                      onEdit(scholarship)
                    }
                  >
                    Edit
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}