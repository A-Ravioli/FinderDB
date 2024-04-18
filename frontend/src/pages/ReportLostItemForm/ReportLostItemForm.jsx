import { useState } from 'react';
import * as Form from '@radix-ui/react-form';
import ReportLostItemFormCSS from './ReportLostItemForm.module.css';

function ReportLostItemForm() {
    const [formData, setFormData] = useState({
        Requester_ID: '',
        ItemName: '',
        Description: '',
        DateLost: '',
        Location: '',
        Status: 'Unclaimed'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (values) => {
        try {
            const response = await fetch('/api/request-lost-item', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)
            });
            if (response.status === 201) {
                alert('Lost item has been reported successfully!');
            } else {
                alert('Failed to report lost item. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting form. Please check your network connection.');
        }
    };

    return (
        <>
            <h1>Report Lost Item</h1>
            <p>Please fill out the form below to report a lost item.</p>
        <Form.Root className="FormRoot" onSubmit={handleSubmit}>
            <Form.Field className={ReportLostItemFormCSS["FormField"]} name="Requester_ID">
                <Form.Label className={ReportLostItemFormCSS["FormLabel"]}>Requester ID</Form.Label>
                <Form.Control asChild>
                    <input className="Input" type="text" value={formData.Requester_ID} onChange={handleChange} name="Requester_ID" required />
                </Form.Control>
            </Form.Field>
            <Form.Field className={ReportLostItemFormCSS["FormField"]} name="ItemName">
                <Form.Label className={ReportLostItemFormCSS["FormLabel"]}>Item Name</Form.Label>
                <Form.Control asChild>
                    <input className="Input" type="text" value={formData.ItemName} onChange={handleChange} name="ItemName" required />
                </Form.Control>
            </Form.Field>
            <Form.Field className={ReportLostItemFormCSS["FormField"]} name="Description">
                <Form.Label className={ReportLostItemFormCSS["FormLabel"]}>Description</Form.Label>
                <Form.Control asChild>
                    <textarea className="Textarea" value={formData.Description} onChange={handleChange} name="Description" required />
                </Form.Control>
            </Form.Field>
            <Form.Field className={ReportLostItemFormCSS["FormField"]} name="DateLost">
                <Form.Label className={ReportLostItemFormCSS["FormLabel"]}>Date Lost</Form.Label>
                <Form.Control asChild>
                    <input className="Input" type="date" value={formData.DateLost} onChange={handleChange} name="DateLost" required />
                </Form.Control>
            </Form.Field>
            <Form.Field className={ReportLostItemFormCSS["FormField"]} name="Location">
                <Form.Label className={ReportLostItemFormCSS["FormLabel"]}>Location</Form.Label>
                <Form.Control asChild>
                    <input className="Input" type="text" value={formData.Location} onChange={handleChange} name="Location" required />
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