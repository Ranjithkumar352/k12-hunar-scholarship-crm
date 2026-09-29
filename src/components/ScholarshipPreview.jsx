import StatusBadge from "./StatusBadge";

export default function ScholarshipPreview({
  scholarship,
  onClose
}) {

  if (!scholarship) {
    return null;
  }


  return (

    <div
      className="modal-backdrop"
      onMouseDown={onClose}
    >

      <div
        className="modal preview-modal"
        onMouseDown={(e) =>
          e.stopPropagation()
        }
      >

        <div className="modal-header">

          <div>

            <span className="eyebrow">
              Student view
            </span>

            <h2>
              Scholarship preview
            </h2>

          </div>

          <button
            className="icon-button"
            onClick={onClose}
          >
            ×
          </button>

        </div>


        <div className="student-card">

          <div className="student-card-top">

            <div className="student-logo">
              {scholarship.name.charAt(0)}
            </div>

            <StatusBadge
              status={scholarship.status}
            />

          </div>


          <h3>
            {scholarship.name}
          </h3>

          <p className="student-provider">
            {scholarship.provider}
          </p>


          <div className="student-meta">

            <div>
              <span>State</span>
              <strong>
                {scholarship.state}
              </strong>
            </div>

            <div>
              <span>Applicable class</span>
              <strong>
                {scholarship.classLevel}
              </strong>
            </div>

            <div>
              <span>Deadline</span>
              <strong>
                {scholarship.deadline}
              </strong>
            </div>

          </div>


          <div className="student-section">

            <span>Eligibility</span>

            <p>
              {scholarship.eligibility}
            </p>

          </div>


          <div className="benefit-box">

            <span>
              Scholarship amount / benefit
            </span>

            <strong>
              {scholarship.benefit}
            </strong>

          </div>


          <a
            className="apply-button"
            href={scholarship.link}
            target="_blank"
            rel="noreferrer"
          >
            View application link

            <span>↗</span>
          </a>

        </div>

      </div>

    </div>

  );
}