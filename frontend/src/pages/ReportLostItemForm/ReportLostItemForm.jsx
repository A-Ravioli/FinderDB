import { useState } from 'react';
import * as Form from '@radix-ui/react-form';
import { useNavigate } from "react-router-dom";
import ReportLostItemFormCSS from './ReportLostItemForm.module.css';
import { toast } from "react-toastify";

function ReportLostItemForm() {
    // const [formData, setFormData] = useState({
    //     Requester_ID: '',
    //     ItemName: '',
    //     Description: '',
    //     DateLost: '',
    //     Location: '',
    //     Status: 'Unclaimed'
    // });

    const navigate = useNavigate();
  
    const submitReport = async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.currentTarget));

      console.log(data)

      const params = new URLSearchParams({
        RequesterID: data.Requester_ID,
        ItemName: data.ItemName,
        Description: data.Description,
        DateLost: data.DateLost,
        Location: data.Location,
        Status: 'Unclaimed'
      });
  
      try {
        const res = await fetch(`/api/request-lost-item?` + params, {
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
            <h1>Report Lost Item</h1>
            <p>Please fill out the form below to report a lost item.</p>
        <Form.Root className="FormRoot" onSubmit={submitReport}>
            <Form.Field className={ReportLostItemFormCSS["FormField"]} name="Requester_ID">
                <Form.Label className={ReportLostItemFormCSS["FormLabel"]}>Requester ID</Form.Label>
                <Form.Control asChild>
                    <input className="Input" type="number" name="Requester_ID" required />
                </Form.Control>
            </Form.Field>
            <Form.Field className={ReportLostItemFormCSS["FormField"]} name="ItemName">
                <Form.Label className={ReportLostItemFormCSS["FormLabel"]}>Item Name</Form.Label>
                <Form.Control asChild>
                    <input className="Input" type="text" name="ItemName" required />
                </Form.Control>
            </Form.Field>
            <Form.Field className={ReportLostItemFormCSS["FormField"]} name="Description">
                <Form.Label className={ReportLostItemFormCSS["FormLabel"]}>Description</Form.Label>
                <Form.Control asChild>
                    <textarea className="Textarea" name="Description" required />
                </Form.Control>
            </Form.Field>
            <Form.Field className={ReportLostItemFormCSS["FormField"]} name="DateLost">
                <Form.Label className={ReportLostItemFormCSS["FormLabel"]}>Date Lost</Form.Label>
                <Form.Control asChild>
                    <input className="Input" type="date" name="DateLost" required />
                </Form.Control>
            </Form.Field>
            <Form.Field className={ReportLostItemFormCSS["FormField"]} name="Location">
                <Form.Label className={ReportLostItemFormCSS["FormLabel"]}>Location</Form.Label>
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