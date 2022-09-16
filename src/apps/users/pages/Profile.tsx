import PageHead from "../components/PageHead";

const Profile = () => {
  return (
    <>
      <PageHead name="Profile" />
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
    </>
  );
};

export default Profile;
