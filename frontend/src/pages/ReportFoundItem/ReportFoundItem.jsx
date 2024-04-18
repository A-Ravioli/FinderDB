import * as Form from "@radix-ui/react-form";
import { useState } from "react";
import ReportFoundItemCSS from "./ReportFoundItem.module.css";
import uploadImage from "../../../data/uploadImage";
import { useNavigate } from "react-router-dom";

function ReportItem() {
  const [img, setImg] = useState();
  const navigate = useNavigate();

  const submitReport = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const id = uuid();
    await uploadImage(data.image, id);

    const params = new URLSearchParams({
      dateFound: data.dateFound,
      description: data.description,
      employeeId: data.employeeId,
      itemId: id,
    });

    await fetch(`/api/report-found-item?` + params, {
      method: "POST",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("An input was formatted incorrectly");
        }

        toast.success("Report successful!");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
        return;
      });
  };

  return (
    <>
      <h1>Report found item</h1>
      <Form.Root onSubmit={submitReport}>
        <Form.Field
          className={ReportFoundItemCSS["FormField"]}
          name="employeeId"
        >
          <div>
            <Form.Label className={ReportFoundItemCSS["FormLabel"]}>
              Employee ID
            </Form.Label>
            <Form.Message
              className={ReportFoundItemCSS["FormMessage"]}
              match="valueMissing"
            >
              Please enter your employee ID
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className="Input" type="number" required />
          </Form.Control>
        </Form.Field>
        <Form.Field
          className={ReportFoundItemCSS["FormField"]}
          name="description"
        >
          <div>
            <Form.Label className={ReportFoundItemCSS["FormLabel"]}>
              Description
            </Form.Label>
            <Form.Message
              className={ReportFoundItemCSS["FormMessage"]}
              match="valueMissing"
            >
              Please enter the item's description
            </Form.Message>
          </div>
          <Form.Control asChild>
            <textarea className="Input" type="text" required />
          </Form.Control>
        </Form.Field>
        <Form.Field
          className={ReportFoundItemCSS["FormField"]}
          name="dateFound"
        >
          <div>
            <Form.Label className={ReportFoundItemCSS["FormLabel"]}>
              Date found (YY-MM-DD)
            </Form.Label>
            <Form.Message
              className={ReportFoundItemCSS["FormMessage"]}
              match="valueMissing"
            >
              Please add the date the item was found
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="Input"
              type="text"
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
