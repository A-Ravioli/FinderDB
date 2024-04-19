import * as Form from "@radix-ui/react-form";
import { useState } from "react";
import ReportFoundItemCSS from "./ReportFoundItem.module.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import uploadImage from "../../../data/uploadImage";

function ReportFoundItem() {
  const navigate = useNavigate();

  const submitReport = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const formData = new FormData();

      formData.append("file", data.image);
      formData.append("api_key", "661321119737593");
      formData.append("timestamp", Date.now());
      formData.append("upload_preset", "ggjghr8y");
      formData.append("folder", "items");

      const imageData = await uploadImage(formData, "asdf");
      console.log(imageData.secure_url);
      const params = new URLSearchParams({
        dateFound: data.dateFound,
        description: data.description,
        name: data.name,
        location: data.location,
        image: imageData.secure_url,
      });
      const res = await fetch(`/api/report-found-item?` + params, {
        method: "POST",
      });
      if (!res.ok) {
        throw new Error("Something went wrong, check your inputs");
      }

      toast.success("Report successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <h1>Report found item</h1>
      <Form.Root onSubmit={submitReport}>
        <Form.Field className={ReportFoundItemCSS["FormField"]} name="name">
          <Form.Label className={ReportFoundItemCSS["FormLabel"]}>
            Item name
          </Form.Label>
          <Form.Message
            className={ReportFoundItemCSS["FormMessage"]}
            match="valueMissing"
          >
            Please enter the item name
          </Form.Message>
          <Form.Control asChild>
            <input className="Input" type="text" required />
          </Form.Control>
        </Form.Field>
        <Form.Field className={ReportFoundItemCSS["FormField"]} name="location">
          <Form.Label className={ReportFoundItemCSS["FormLabel"]}>
            Location
          </Form.Label>
          <Form.Message
            className={ReportFoundItemCSS["FormMessage"]}
            match="valueMissing"
          >
            Please enter the location the item was found
          </Form.Message>
          <Form.Control asChild>
            <input className="Input" type="text" required />
          </Form.Control>
        </Form.Field>
        <Form.Field
          className={ReportFoundItemCSS["FormField"]}
          name="description"
        >
          <Form.Label className={ReportFoundItemCSS["FormLabel"]}>
            Description
          </Form.Label>
          <Form.Message
            className={ReportFoundItemCSS["FormMessage"]}
            match="valueMissing"
          >
            Please enter the item description
          </Form.Message>
          <Form.Control asChild>
            <textarea className="Input" type="text" required />
          </Form.Control>
        </Form.Field>
        <Form.Field
          className={ReportFoundItemCSS["FormField"]}
          name="dateFound"
        >
          <Form.Label className={ReportFoundItemCSS["FormLabel"]}>
            Date found (YY-MM-DD)
          </Form.Label>
          <Form.Message
            className={ReportFoundItemCSS["FormMessage"]}
            match="valueMissing"
          >
            Please add the date the item was found
          </Form.Message>
          <Form.Control asChild>
            <input className="Input" type="date" required />
          </Form.Control>
        </Form.Field>
        <Form.Field className={ReportFoundItemCSS["FormField"]} name="image">
          <div>
            <Form.Label className={ReportFoundItemCSS["FormLabel"]}>
              Upload image
            </Form.Label>
            <Form.Message
              className={ReportFoundItemCSS["FormMessage"]}
              match="valueMissing"
            >
              Please add an image of the item
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className="Input" type="file" required />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button className="btn-style" style={{ marginTop: 10 }}>
            Submit report
          </button>
        </Form.Submit>
      </Form.Root>
    </>
  );
}

export default ReportFoundItem;
