import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import ClaimItemForm from "../ClaimItemForm/ClaimItemForm";
import ClaimItemButtonCSS from "./ClaimItemButton.module.css";

function ClaimItemButton({ itemData }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Dialog.Root open={modalIsOpen} onOpenChange={setModalIsOpen}>
      <Dialog.Trigger asChild>
        {/* Prevent from claiming if already claimed */}
        {itemData.status != "Claimed" && (
          <button
            className={`btn-style ${ClaimItemButtonCSS["claim-item-btn"]}`}
          >
            Claim item
          </button>
        )}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={ClaimItemButtonCSS["DialogOverlay"]} />
        <Dialog.Content className={ClaimItemButtonCSS["DialogContent"]}>
          <Dialog.Title>Claim "{itemData.itemname}"</Dialog.Title>
          <ClaimItemForm itemData={itemData} setModalIsOpen={setModalIsOpen} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ClaimItemButton;
