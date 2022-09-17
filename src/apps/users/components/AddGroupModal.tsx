import ReactDOM from "react-dom";

const AddGroupModal = () => {
  const dialog = document.getElementById("dialog-wrapper") as HTMLDivElement;
  return ReactDOM.createPortal(
    <>
      <div
        className="modal fade"
        id="groupModal"
        tabIndex={-1}
        aria-labelledby="groupModal"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="groupModalLabel">
                Create New Group
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="">
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className={"form-control "}
                    id="username"
                    placeholder=""
                  />

                  <p className="invalid-feedback"></p>
                </div>
                <div className="mb-1">
                  <label htmlFor="groupDescription" className="form-label">
                    Description
                  </label>
                  <textarea
                    id="groupDescription"
                    rows={3}
                    placeholder="Enter description"
                    className="form-control"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    dialog
  );
};

export default AddGroupModal;
