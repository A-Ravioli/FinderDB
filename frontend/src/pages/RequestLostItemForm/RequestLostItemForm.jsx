import { useState } from "react";
import * as Form from "@radix-ui/react-form";
import { useNavigate } from "react-router-dom";
import RequestLostItemForm from "./RequestLostItemForm.module.css";
import { toast } from "react-toastify";

function ReportLostItemForm() {
  const navigate = useNavigate();

  const submitReport = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    const params = new URLSearchParams({
      requesterID: data.Requester_ID,
      itemName: data.ItemName,
      description: data.Description,
      dateLost: data.DateLost,
      location: data.Location,
    });

    console.log(params.toString());

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

      toast.success("Report successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <h1>Report Lost Item</h1>
      <p>Please fill out the form below to report a lost item.</p>
      <Form.Root className="FormRoot" onSubmit={submitReport}>
        <Form.Field
          className={RequestLostItemForm["FormField"]}
          name="Requester_ID"
        >
          <Form.Label className={RequestLostItemForm["FormLabel"]}>
            Requester ID
          </Form.Label>
          <Form.Control asChild>
            <input className="Input" type="text" name="Requester_ID" required />
          </Form.Control>
        </Form.Field>
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
