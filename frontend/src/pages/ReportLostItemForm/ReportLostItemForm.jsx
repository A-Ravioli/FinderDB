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
        <Form.Root className="FormRoot">
        <Form.Field className="FormField" name="email">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Email</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
            Please enter your email
            </Form.Message>
            <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a valid email
            </Form.Message>
        </div>
        <Form.Control asChild>
            <input className="Input" type="email" required />
        </Form.Control>
        </Form.Field>
        <Form.Field className="FormField" name="question">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Question</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
            Please enter a question
            </Form.Message>
        </div>
        <Form.Control asChild>
            <textarea className="Textarea" required />
        </Form.Control>
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