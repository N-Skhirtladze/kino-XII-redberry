import { useEffect, useState } from "react";
import { upload } from "../../assets";

const AvatarUpload = ({ avatar, setAvatar }) => {
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (image) setAvatar(image);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const image = e.dataTransfer.files[0];
    if (image) setAvatar(image);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (!avatar) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(avatar);

    setPreview(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [avatar]);

  return (
    <label htmlFor="avatar-input" className="sign-up-avatar" onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className="avatar-preview">
        {!preview ? (
          <img src={upload} alt="" />
        ) : (
          <img src={preview} alt="" style={{ width: "40px", height: "40px" }} />
        )}
      </div>
      <input
        type="file"
        accept=".jpg, .png, .webp"
        name="avatar"
        id="avatar-input"
        onChange={handleChange}
      />
      <div className="avatar-text-wrapper">
        <p className="avatar-upper-text">Upload avatar (optional)</p>
        <p className="avatar-lower-text">JPG, PNG or WEBP</p>
      </div>
    </label>
  );
};

export default AvatarUpload;
