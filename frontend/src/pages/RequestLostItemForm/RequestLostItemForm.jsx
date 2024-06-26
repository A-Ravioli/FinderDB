import * as Form from "@radix-ui/react-form";
import { useContext } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserContext from "../../context/UserContext";
import RequestLostItemForm from "./RequestLostItemForm.module.css";

function ReportLostItemForm() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const queryClient = useQueryClient();

  const submitReport = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    const params = new URLSearchParams({
      requesterID: user.id,
      itemName: data.ItemName,
      description: data.Description,
      dateLost: data.DateLost,
      location: data.Location,
    });

    try {
      const res = await fetch(`/api/request-lost-item?` + params, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Something went wrong, check your inputs");
      }

      queryClient.invalidateQueries("requests");
      toast.success("Report successful!");
      navigate("/lost-item-requests");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <h1>Report Lost Item</h1>
      <Form.Root className="FormRoot" onSubmit={submitReport}>
        <Form.Field
          className={RequestLostItemForm["FormField"]}
          name="ItemName"
        >
          <Form.Label className={RequestLostItemForm["FormLabel"]}>
            Item Name
          </Form.Label>
          <Form.Control asChild>
            <input className="Input" type="text" name="ItemName" required />
          </Form.Control>
        </Form.Field>
        <Form.Field
          className={RequestLostItemForm["FormField"]}
          name="Description"
        >
          <Form.Label className={RequestLostItemForm["FormLabel"]}>
            Description
          </Form.Label>
          <Form.Control asChild>
            <textarea className="Textarea" name="Description" required />
          </Form.Control>
        </Form.Field>
        <Form.Field
          className={RequestLostItemForm["FormField"]}
          name="DateLost"
        >
          <Form.Label className={RequestLostItemForm["FormLabel"]}>
            Date Lost
          </Form.Label>
          <Form.Control asChild>
            <input className="Input" type="date" name="DateLost" required />
          </Form.Control>
        </Form.Field>
        <Form.Field
          className={RequestLostItemForm["FormField"]}
          name="Location"
        >
          <Form.Label className={RequestLostItemForm["FormLabel"]}>
            Location
          </Form.Label>
          <Form.Control asChild>
            <input className="Input" type="text" name="Location" required />
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

export default ReportLostItemForm;
