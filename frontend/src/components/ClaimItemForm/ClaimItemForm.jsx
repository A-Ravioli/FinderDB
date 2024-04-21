import * as Form from "@radix-ui/react-form";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import FormField from "../FormField/FormField";
import ClaimItemFormCSS from "./ClaimItemForm.module.css";

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
      method: "PUT",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Employee does not exist");
        }

        setModalIsOpen(false);
        toast.success("Claim successful!");
        queryClient.invalidateQueries({ queryKey: ["items"] });
      })
      .catch((err) => {
        toast.error(err.message);
        return;
      });
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
