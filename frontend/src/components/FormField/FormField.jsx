import FormFieldCSS from "./FormField.module.css";
import * as Form from "@radix-ui/react-form";

function FormField({ missingValueMessage, formLabel, formName }) {
  return (
    <Form.Field className={FormFieldCSS["FormField"]} name={formName}>
      <Form.Label className={FormFieldCSS["FormLabel"]}>{formLabel}</Form.Label>
      <Form.Message
        className={FormFieldCSS["FormMessage"]}
        match="valueMissing"
      >
        {missingValueMessage}
      </Form.Message>
      <Form.Control asChild>
        <input className="Input" type="number" required />
      </Form.Control>
    </Form.Field>
  );
}

export default FormField;
