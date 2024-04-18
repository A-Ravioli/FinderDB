import * as Dialog from "@radix-ui/react-dialog";
import ClaimItemButtonCSS from "./Profile.module.css";
import { useState } from "react";

const ProfilePage = () => {
    const [name, setName] = useState('');
    const [aboutMe, setAboutMe] = useState('');
    const [picture, setPicture] = useState(null);
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleAboutMeChange = (e) => {
      setAboutMe(e.target.value);
    };
  
  
    const handlePictureChange = (e) => {
      const file = e.target.files[0];
      setPicture(file);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ name, aboutMe, picture });
    };
  
    return (
      <div className={ProfileCSS.container}>
        <h1>Profile</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
  
          <label htmlFor="aboutMe">About Me:</label>
          <textarea id="aboutMe" value={aboutMe} onChange={handleAboutMeChange} />
  
          <label htmlFor="picture">Profile Picture:</label>
          <input type="file" id="picture" onChange={handlePictureChange} />
  
          <button type="submit">Save</button>
        </form>
      </div>
    );
  };
  
  export default ProfilePage;