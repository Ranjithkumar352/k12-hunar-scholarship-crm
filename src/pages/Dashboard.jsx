import { useMemo, useState } from "react";

import SummaryCards from "../components/SummaryCards";
import Filters from "../components/Filters";
import ScholarshipTable from "../components/ScholarshipTable";
import ScholarshipForm from "../components/ScholarshipForm";
import ScholarshipPreview from "../components/ScholarshipPreview";


export default function Dashboard({
  scholarships,
  setScholarships
}) {

  const [stateFilter, setStateFilter] =
    useState("All");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [search, setSearch] =
    useState("");

  const [formOpen, setFormOpen] =
    useState(false);

  const [editingScholarship, setEditingScholarship] =
    useState(null);

  const [previewScholarship, setPreviewScholarship] =
    useState(null);


  /*
    Calculate dashboard statistics
  */

  const counts = useMemo(() => {

    return {

      total: scholarships.length,

      Published:
        scholarships.filter(
          (item) =>
            item.status === "Published"
        ).length,

      Draft:
        scholarships.filter(
          (item) =>
            item.status === "Draft"
        ).length,

      Expired:
        scholarships.filter(
          (item) =>
            item.status === "Expired"
        ).length

    };

  }, [scholarships]);


  /*
    Filter scholarships
  */

  const filtered = useMemo(() => {

    const query =
      search.trim().toLowerCase();


    return scholarships.filter((item) => {

      const matchesState =
        stateFilter === "All" ||
        item.state === stateFilter;


      const matchesStatus =
        statusFilter === "All" ||
        item.status === statusFilter;


      const matchesSearch =
        !query ||
        item.name
          .toLowerCase()
          .includes(query) ||

        item.provider
          .toLowerCase()
          .includes(query) ||

        item.state
          .toLowerCase()
          .includes(query);


      return (
        matchesState &&
        matchesStatus &&
        matchesSearch
      );

    });

  }, [
    scholarships,
    stateFilter,
    statusFilter,
    search
  ]);


  /*
    Change scholarship status
  */

  const updateStatus = (
    id,
    status
  ) => {

    setScholarships((current) =>

      current.map((item) =>

        item.id === id
          ? {
              ...item,
              status
            }
          : item

      )

    );

  };


  /*
    Open edit modal
  */

  const openEdit = (scholarship) => {

    setEditingScholarship(
      scholarship
    );

    setFormOpen(true);

  };


  /*
    Save Add/Edit form
  */

  const saveScholarship = (form) => {

    if (editingScholarship) {

      setScholarships((current) =>

        current.map((item) =>

          item.id ===
          editingScholarship.id

            ? {
                ...item,
                ...form
              }

            : item

        )

      );

    } else {

      setScholarships((current) => [

        ...current,

        {
          id: Date.now(),
          ...form
        }

      ]);

    }


    setFormOpen(false);
    setEditingScholarship(null);

  };


  /*
    Clear filters
  */

  const clearFilters = () => {

    setStateFilter("All");
    setStatusFilter("All");
    setSearch("");

  };


  return (

    <main className="dashboard">

      {/* Header */}

      <div className="hero-row">

        <div>

          <span className="eyebrow">
            Scholarship management
          </span>

          <h1>
            Scholarship dashboard
          </h1>

          <p>
            Manage state-wise scholarships,
            update status, and preview the
            student experience.
          </p>

        </div>


        <button
          className="primary-button add-button"
          onClick={() => {

            setEditingScholarship(null);
            setFormOpen(true);

          }}
        >
          <span>+</span>
          Add scholarship
        </button>

      </div>


      {/* Summary */}

      <SummaryCards
        counts={counts}
      />


      {/* Filters */}

      <Filters

        stateFilter={stateFilter}

        statusFilter={statusFilter}

        search={search}

        onStateChange={
          setStateFilter
        }

        onStatusChange={
          setStatusFilter
        }

        onSearchChange={
          setSearch
        }

        onClear={
          clearFilters
        }

      />


      {/* Table */}

      <section className="records-panel">

        <div className="records-header">

          <div>

            <h2>
              Scholarships
            </h2>

            <p>
              Showing{" "}
              <strong>
                {filtered.length}
              </strong>{" "}
              of{" "}
              {scholarships.length}
              {" "}records
            </p>

          </div>

        </div>


        <ScholarshipTable

          scholarships={filtered}

          onStatusChange={
            updateStatus
          }

          onEdit={
            openEdit
          }

          onPreview={
            setPreviewScholarship
          }

        />

      </section>


      {/* Add / Edit */}

      {formOpen && (

        <ScholarshipForm

          scholarship={
            editingScholarship
          }

          onClose={() => {

            setFormOpen(false);

            setEditingScholarship(
              null
            );

          }}

          onSave={
            saveScholarship
          }

        />

      )}


      {/* Preview */}

      {previewScholarship && (

        <ScholarshipPreview

          scholarship={
            previewScholarship
          }

          onClose={() =>
            setPreviewScholarship(
              null
            )
          }

        />

      )}

    </main>

  );
}