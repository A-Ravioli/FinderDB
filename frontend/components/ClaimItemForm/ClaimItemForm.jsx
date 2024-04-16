import FormField from "../FormField/FormField";
import * as Form from "@radix-ui/react-form";
import ClaimItemFormCSS from "./ClaimItemForm.module.css";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";

function ClaimItemForm({ itemData, setModalIsOpen }) {
  const queryClient = useQueryClient();
  const submitClaim = async (e) => {
    e.preventDefault();
    const id = e.target[0].value;

    const params = new URLSearchParams({
      employeeId: id,
      itemId: itemData.itemid,
    });

    await fetch(`/api/claim-item?` + params, {
      method: "PATCH",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Employee does not exist");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });

    setModalIsOpen(false);
    toast.success("Claim successful!");
    queryClient.invalidateQueries({ queryKey: ["items"] });
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
