import * as Form from "@radix-ui/react-form";
import { useState } from "react";
import ReportFoundItemCSS from "./ReportFoundItem.module.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ReportItem() {
  const [img, setImg] = useState();
  const navigate = useNavigate();

  const submitReport = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    const params = new URLSearchParams({
      dateFound: data.dateFound,
      description: data.description,
      employeeId: data.employeeId,
      name: data.name,
      location: data.location,
    });

    try {
      const res = await fetch(`/api/report-found-item?` + params, {
        method: "POST",
      });
      if (!res.ok) {
        throw new Error("Something went wrong, check your inputs");
      }

      // const id = await res.json();
      // await uploadImage(data.image, id);

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
        <Form.Field
          className={ReportFoundItemCSS["FormField"]}
          name="employeeId"
        >
          <Form.Label className={ReportFoundItemCSS["FormLabel"]}>
            Employee ID
          </Form.Label>
          <Form.Message
            className={ReportFoundItemCSS["FormMessage"]}
            match="valueMissing"
          >
            Please enter your employee ID
          </Form.Message>
          <Form.Control asChild>
            <input className="Input" type="number" required />
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
            <input
              className="Input"
              type="date"
              onChange={(e) => {
                setImg(e.target.value);
              }}
              required
            />
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
            <input
              className="Input"
              type="file"
              onChange={(e) => {
                setImg(e.target.value);
              }}
              required
            />
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

export default ReportItem;
