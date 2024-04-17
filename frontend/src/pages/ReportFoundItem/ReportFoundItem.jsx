import * as Form from "@radix-ui/react-form";

function ReportItem() {
  return (
    <>
      <h1>Report item</h1>
      <Form.Root>
        <Form.Field className="FormField" name="email">
          <div>
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
      </Form.Root>
    </>
  );
}

export default ReportItem;
