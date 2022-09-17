import React from "react";
import PageHead from "../components/PageHead";

const Settings = () => {
  return (
    <>
      <PageHead name="Settings" />
      <div className="text-center border-bottom p-4">
        <div className="profile-img-box">
          <img
            src="/user/user2.jpg"
            alt=""
            className="rounded-circle avatar-lg img-thumbnail"
          />
          <button className="btn bg-light avatar-xs p-0 rounded-circle profile-photo-edit">
            <i className="fas fa-pencil"></i>
          </button>
        </div>
        <h5 className="font-size-24 mb-1 text-truncate">John bobs</h5>
        <p className="text- text-truncate mb-1 text-success">online</p>
      </div>
      <div className="p-4 setting-box">
        <div>
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
            <div className="mb-3">
              <button className="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Settings;
