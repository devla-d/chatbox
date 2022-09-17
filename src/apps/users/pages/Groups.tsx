import AddGroupModal from "../components/AddGroupModal";
import PageHead from "../components/PageHead";

const Groups = () => {
  return (
    <>
      <PageHead name="Groups">
        <button
          className="add-user-btn"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#groupModal"
        >
          <i className="fas fa-users"></i>
        </button>
      </PageHead>
      <div className="p-4">
        <div className="search-box">
          <input
            type="text"
            className="form-control bg-ligh"
            placeholder="Search Groups"
          />
          <i className="fa fa-search"></i>
        </div>
      </div>
      <div className="p-4 group-list">
        <ul className="list-unstyled ">
          <li>
            <a href="#">
              <div className="media align-items-center">
                <div className="chat-user-img mr-3">
                  <div className="avatar-xs">
                    <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                      G
                    </span>
                  </div>
                </div>
                <div className="media-body overflow-hidden">
                  <h5 className="text-truncate fontSize mb-0" data-font={20}>
                    {" "}
                    #General{" "}
                  </h5>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="media align-items-center">
                <div className="chat-user-img mr-3">
                  <div className="avatar-xs">
                    <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                      G
                    </span>
                  </div>
                </div>
                <div className="media-body overflow-hidden">
                  <h5 className="text-truncate fontSize mb-0" data-font={20}>
                    {" "}
                    #General{" "}
                  </h5>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="media align-items-center">
                <div className="chat-user-img mr-3">
                  <div className="avatar-xs">
                    <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                      G
                    </span>
                  </div>
                </div>
                <div className="media-body overflow-hidden">
                  <h5 className="text-truncate fontSize mb-0" data-font={20}>
                    {" "}
                    #General{" "}
                  </h5>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="media align-items-center">
                <div className="chat-user-img mr-3">
                  <div className="avatar-xs">
                    <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                      G
                    </span>
                  </div>
                </div>
                <div className="media-body overflow-hidden">
                  <h5 className="text-truncate fontSize mb-0" data-font={20}>
                    {" "}
                    #General{" "}
                  </h5>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="media align-items-center">
                <div className="chat-user-img mr-3">
                  <div className="avatar-xs">
                    <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                      G
                    </span>
                  </div>
                </div>
                <div className="media-body overflow-hidden">
                  <h5 className="text-truncate fontSize mb-0" data-font={20}>
                    {" "}
                    #General{" "}
                  </h5>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="media align-items-center">
                <div className="chat-user-img mr-3">
                  <div className="avatar-xs">
                    <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                      G
                    </span>
                  </div>
                </div>
                <div className="media-body overflow-hidden">
                  <h5 className="text-truncate fontSize mb-0" data-font={20}>
                    {" "}
                    #General{" "}
                  </h5>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="media align-items-center">
                <div className="chat-user-img mr-3">
                  <div className="avatar-xs">
                    <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                      G
                    </span>
                  </div>
                </div>
                <div className="media-body overflow-hidden">
                  <h5 className="text-truncate fontSize mb-0" data-font={20}>
                    {" "}
                    #General{" "}
                  </h5>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="media align-items-center">
                <div className="chat-user-img mr-3">
                  <div className="avatar-xs">
                    <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                      G
                    </span>
                  </div>
                </div>
                <div className="media-body overflow-hidden">
                  <h5 className="text-truncate fontSize mb-0" data-font={20}>
                    {" "}
                    #General{" "}
                  </h5>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="media align-items-center">
                <div className="chat-user-img mr-3">
                  <div className="avatar-xs">
                    <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                      G
                    </span>
                  </div>
                </div>
                <div className="media-body overflow-hidden">
                  <h5 className="text-truncate fontSize mb-0" data-font={20}>
                    {" "}
                    #General{" "}
                  </h5>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <AddGroupModal />
    </>
  );
};

export default Groups;
