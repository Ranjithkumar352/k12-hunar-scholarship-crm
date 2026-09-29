import { useEffect, useState } from "react";
import { STATES, STATUSES } from "../data/scholarships";

const emptyForm = {
  name: "",
  state: "Bihar",
  provider: "",
  classLevel: "",
  eligibility: "",
  benefit: "",
  deadline: "",
  link: "",
  status: "Draft"
};

export default function ScholarshipForm({
  scholarship,
  onClose,
  onSave
}) {

  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});


  useEffect(() => {

    if (scholarship) {

      setForm({
        name: scholarship.name || "",
        state: scholarship.state || "Bihar",
        provider: scholarship.provider || "",
        classLevel: scholarship.classLevel || "",
        eligibility: scholarship.eligibility || "",
        benefit: scholarship.benefit || "",
        deadline:
          scholarship.deadline === "Not stated"
            ? ""
            : scholarship.deadline || "",
        link: scholarship.link || "",
        status: scholarship.status || "Draft"
      });

    } else {

      setForm(emptyForm);

    }

    setErrors({});

  }, [scholarship]);


  const update = (key, value) => {

    setForm((current) => ({
      ...current,
      [key]: value
    }));

    setErrors((current) => ({
      ...current,
      [key]: ""
    }));

  };


  const validate = () => {

    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name =
        "Scholarship name is required.";
    }

    if (!form.provider.trim()) {
      nextErrors.provider =
        "Provider name is required.";
    }

    if (!form.classLevel.trim()) {
      nextErrors.classLevel =
        "Applicable class is required.";
    }

    if (!form.eligibility.trim()) {
      nextErrors.eligibility =
        "Eligibility criteria is required.";
    }

    if (!form.benefit.trim()) {
      nextErrors.benefit =
        "Benefit is required.";
    }

    if (!form.link.trim()) {

      nextErrors.link =
        "Application link is required.";

    } else if (
      !/^https?:\/\//i.test(form.link)
    ) {

      nextErrors.link =
        "Use a valid URL starting with http:// or https://";

    }

    return nextErrors;
  };


  const submit = (e) => {

    e.preventDefault();

    const nextErrors = validate();

    if (Object.keys(nextErrors).length) {

      setErrors(nextErrors);

      return;
    }


    onSave({

      ...form,

      name: form.name.trim(),

      provider: form.provider.trim(),

      classLevel:
        form.classLevel.trim(),

      eligibility:
        form.eligibility.trim(),

      benefit:
        form.benefit.trim(),

      deadline:
        form.deadline.trim() ||
        "Not stated",

      link:
        form.link.trim()

    });

  };


  return (

    <div
      className="modal-backdrop"
      onMouseDown={onClose}
    >

      <div
        className="modal modal-form"
        onMouseDown={(e) =>
          e.stopPropagation()
        }
      >

        <div className="modal-header">

          <div>

            <span className="eyebrow">
              Employee workspace
            </span>

            <h2>
              {scholarship
                ? "Edit scholarship"
                : "Add scholarship"}
            </h2>

          </div>

          <button
            className="icon-button"
            onClick={onClose}
          >
            ×
          </button>

        </div>


        <form onSubmit={submit}>

          <div className="form-grid">

            {/* Name */}

            <label className="field full">

              <span>
                Scholarship name *
              </span>

              <input
                value={form.name}
                onChange={(e) =>
                  update(
                    "name",
                    e.target.value
                  )
                }
                placeholder="Enter scholarship name"
              />

              {errors.name && (
                <small className="error">
                  {errors.name}
                </small>
              )}

            </label>


            {/* State */}

            <label className="field">

              <span>State *</span>

              <select
                value={form.state}
                onChange={(e) =>
                  update(
                    "state",
                    e.target.value
                  )
                }
              >

                {STATES.map((state) => (
                  <option
                    key={state}
                    value={state}
                  >
                    {state}
                  </option>
                ))}

              </select>

            </label>


            {/* Provider */}

            <label className="field">

              <span>
                Provider name *
              </span>

              <input
                value={form.provider}
                onChange={(e) =>
                  update(
                    "provider",
                    e.target.value
                  )
                }
                placeholder="Provider name"
              />

              {errors.provider && (
                <small className="error">
                  {errors.provider}
                </small>
              )}

            </label>


            {/* Class */}

            <label className="field">

              <span>
                Applicable class *
              </span>

              <input
                value={form.classLevel}
                onChange={(e) =>
                  update(
                    "classLevel",
                    e.target.value
                  )
                }
                placeholder="Class 11-12"
              />

              {errors.classLevel && (
                <small className="error">
                  {errors.classLevel}
                </small>
              )}

            </label>


            {/* Deadline */}

            <label className="field">

              <span>
                Application deadline
              </span>

              <input
                value={form.deadline}
                onChange={(e) =>
                  update(
                    "deadline",
                    e.target.value
                  )
                }
                placeholder="30 Sep 2026"
              />

            </label>


            {/* Eligibility */}

            <label className="field full">

              <span>
                Eligibility criteria *
              </span>

              <textarea
                rows="3"
                value={form.eligibility}
                onChange={(e) =>
                  update(
                    "eligibility",
                    e.target.value
                  )
                }
                placeholder="Describe eligibility..."
              />

              {errors.eligibility && (
                <small className="error">
                  {errors.eligibility}
                </small>
              )}

            </label>


            {/* Benefit */}

            <label className="field full">

              <span>
                Scholarship amount or benefit *
              </span>

              <input
                value={form.benefit}
                onChange={(e) =>
                  update(
                    "benefit",
                    e.target.value
                  )
                }
                placeholder="Financial assistance..."
              />

              {errors.benefit && (
                <small className="error">
                  {errors.benefit}
                </small>
              )}

            </label>


            {/* Link */}

            <label className="field full">

              <span>
                Official application link *
              </span>

              <input
                value={form.link}
                onChange={(e) =>
                  update(
                    "link",
                    e.target.value
                  )
                }
                placeholder="https://..."
              />

              {errors.link && (
                <small className="error">
                  {errors.link}
                </small>
              )}

            </label>


            {/* Status */}

            <label className="field">

              <span>Status *</span>

              <select
                value={form.status}
                onChange={(e) =>
                  update(
                    "status",
                    e.target.value
                  )
                }
              >

                {STATUSES.map((status) => (
                  <option
                    key={status}
                    value={status}
                  >
                    {status}
                  </option>
                ))}

              </select>

            </label>

          </div>


          <div className="modal-footer">

            <button
              className="secondary-button"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              className="primary-button"
              type="submit"
            >
              {scholarship
                ? "Save changes"
                : "Add scholarship"}
            </button>

          </div>

        </form>

      </div>

    </div>

  );
}