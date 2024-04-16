import * as Dialog from "@radix-ui/react-dialog";
import ClaimItemButtonCSS from "./ClaimItemButton.module.css";
import FormField from "../FormField/FormField";
import * as Form from "@radix-ui/react-form";
import { toast } from "react-toastify";
import { useState } from "react";

function ClaimItemButton({ itemData }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Dialog.Root open={modalIsOpen} onOpenChange={setModalIsOpen}>
      <Dialog.Trigger asChild>
        <button className={`btn-style ${ClaimItemButtonCSS["claim-item-btn"]}`}>
          Claim item
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={ClaimItemButtonCSS["DialogOverlay"]} />
        <Dialog.Content className={ClaimItemButtonCSS["DialogContent"]}>
          <Dialog.Title>Claim "{itemData.itemname}"</Dialog.Title>
          <Form.Root
            className={ClaimItemButtonCSS["FormRoot"]}
            onSubmit={async (e) => {
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
            }}
          >
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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ClaimItemButton;
