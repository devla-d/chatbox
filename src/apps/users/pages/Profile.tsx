import PageHead from "../components/PageHead";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import Dialogs from "../components/Dialogs";
import { openDialog, uploadImg, closeDialog } from "../helper";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useState } from "react";
import SubmitButton from "@/components/SubmitButton";
import { ImgUploadRes } from "@/types";
import { updateUser } from "@/apps/auth/slicer";

const Profile = () => {
  const user = useAppSelector((state) => state.auth.user!);
  const [loading, setLoading] = useState(false);
  const [profileImg, setprofileImg] = useState<File>();
  const dispatch = useAppDispatch();
  const axiosPrivate = useAxiosPrivate();

  const previeIMG = (event: React.ChangeEvent<HTMLInputElement>) => {
    var { target } = event;
    if (!target.files) return;
    setprofileImg(target.files[0]);
    openDialog();
    var outPut = document.getElementById("uploadPreview") as HTMLImageElement;
    outPut.src = URL.createObjectURL(target.files[0]);
    outPut.onload = () => {
      URL.revokeObjectURL(outPut.src);
    };
  };

  const sendImg = async () => {
    setLoading(true);
    try {
      const { data } = await axiosPrivate.post<ImgUploadRes>(
        "/change-profile",
        { image: profileImg },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch(updateUser(data.user));
      closeDialog();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
      <PageHead name="Profile" />
      <div className="text-center border-bottom p-4">
        <div className="profile-img-box">
          <img
            src={
              user.image
                ? `http://localhost:3000${user.image}`
                : `https://ui-avatars.com/api/?name=${user.username}`
            }
            alt=""
            className="rounded-circle avatar-lg img-thumbnail"
          />
          <button
            id="uploadimgBtn"
            className="btn bg-light avatar-xs p-0 rounded-circle profile-photo-edit"
            onClick={() => uploadImg()}
          >
            <i className="fas fa-pencil"></i>
          </button>
          <input
            type="file"
            accept="image/*"
            onChange={previeIMG}
            id="fileUpload"
            hidden={true}
          />
        </div>
        <h5 className="font-size-24 mb-1 text-truncate">{user.username}</h5>

        {user.online ? (
          <p className="text- text-truncate mb-1 text-success">online</p>
        ) : (
          <p className="text- text-truncate mb-1 text-danger">offline</p>
        )}
      </div>
      <div className="p-4 user-profile-desc">
        <div className="text-muted">
          <p className="mb-4 text-muted font-15">{user.bio}</p>
        </div>
        <div className="about-box">
          <div className="about-item">
            <p className="font-size-15 text-muted mb-1"> Email </p>
            <h5 className="font-size-14"> {user.email} </h5>
          </div>

          <div className="about-item">
            <p className="font-size-15 text-muted mb-1"> NO of friends </p>
            <h5 className="font-size-14"> {user.friends.length} </h5>
          </div>
        </div>
      </div>
      <Dialogs>
        <div className="dialog-content">
          <div className="upload-img">
            <img src="" id="uploadPreview" alt="" />
          </div>
          <div className="upload-img">
            <SubmitButton type="button" loading={loading} function_={sendImg}>
              <span>Update</span>
            </SubmitButton>
          </div>
        </div>
      </Dialogs>
    </>
  );
};

export default Profile;
