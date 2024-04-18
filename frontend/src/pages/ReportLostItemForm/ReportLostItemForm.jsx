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
        <Form.Root className={ReportLostItemFormCSS["reportForm"]} onSubmit={handleSubmit}>
        <Form.Field className="FormField" name="Your ID">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Email</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
            Please enter your ID
            </Form.Message>
        </div>

        </Form.Field>
        <Form.Field className="FormField" name="Item Name">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Question</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
            Please enter an item name
            </Form.Message>
        </div>
        </Form.Field>

        <Form.Field className="FormField" name="Description">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Question</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
            Please enter a sescription
            </Form.Message>
        </div>
        </Form.Field>

        <Form.Field className="FormField" name="Date Lost">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Question</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
            Please enter a date
            </Form.Message>
        </div>
        </Form.Field>

        <Form.Field className="FormField" name="Location">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Question</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
            Please enter a location
            </Form.Message>
        </div>
        </Form.Field>

        <Form.Field className="FormField" name="Status">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Question</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
            Please enter a status
            </Form.Message>
        </div>
        </Form.Field>

        <Form.Submit asChild>
        <button className="Button" style={{ marginTop: 10 }}>
            Post question
        </button>
        </Form.Submit>
    </Form.Root>
    );
}

export default ReportLostItemForm;