import FormField from "../FormField/FormField";
import * as Form from "@radix-ui/react-form";
import ClaimItemFormCSS from "./ClaimItemForm.module.css";

function ClaimItemForm({ itemData, setModalIsOpen }) {
  const submitClaim = async (e) => {
    e.preventDefault();
    const id = e.target[0].value;

    const res = await fetch(`/api/employee-exists/${id}`);
    const data = await res.json();

    if (!data) {
      toast.error("Employee ID does not exist");
      return;
    }

    const params = new URLSearchParams({
      employeeId: id,
      itemId: itemData.itemid,
    });

    await fetch(`/api/claim-item?` + params, {
      method: "PATCH",
    });

    setModalIsOpen(false);
  };

  return (
    <Form.Root className={ClaimItemFormCSS["FormRoot"]} onSubmit={submitClaim}>
      <FormField
        formLabel={"Employee ID"}
        formName={"employeeId"}
        missingValueMessage={"Please enter your employee ID"}
      />
      <Form.Submit asChild>
        <button className="btn-style" style={{ marginTop: 10 }}>
          Submit
        </button>
      </Form.Submit>
    </Form.Root>
  );
}

export default ClaimItemForm;
