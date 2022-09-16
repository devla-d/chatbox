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
      <div className="p-4 user-profile-desc">
        <div className="text-muted">
          <p className="mb-4 text-muted font-15">
            If several languages coalesce, the grammar of the resulting language
            is more simple and regular than that of the individual.
          </p>
        </div>
        <div className="about-box">
          <div className="about-item">
            <p className="font-size-15 text-muted mb-1"> Name </p>
            <h5 className="font-size-14"> Patricia Smith </h5>
          </div>
          <div className="about-item">
            <p className="font-size-15 text-muted mb-1"> Email </p>
            <h5 className="font-size-14"> Patricia@Smith </h5>
          </div>
          <div className="about-item">
            <p className="font-size-15 text-muted mb-1"> Location </p>
            <h5 className="font-size-14"> Patricia@Smith </h5>
          </div>
          <div className="about-item">
            <p className="font-size-15 text-muted mb-1"> NO of friends </p>
            <h5 className="font-size-14"> 10 </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
