import ReactDOM from "react-dom";

const AddFriendModal = () => {
  const dialog = document.getElementById("dialog-wrapper") as HTMLDivElement;
  return ReactDOM.createPortal(
    <>
      <div
        className="modal fade"
        id="addUserModal"
        tabIndex={-1}
        aria-labelledby="addUserModal"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              {" "}
              <h5 className="modal-title" id="addUserModal">
                Add new friends
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
                    Username
                  </label>
                  <input
                    type="text"
                    className={"form-control "}
                    id="username"
                    placeholder=""
                  />

                  <p className="invalid-feedback"></p>
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
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    dialog
  );
};

export default AddFriendModal;
