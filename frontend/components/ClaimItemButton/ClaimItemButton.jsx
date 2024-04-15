import * as Dialog from "@radix-ui/react-dialog";
import ClaimItemButtonCSS from "./ClaimItemButton.module.css";

function ClaimItemButton({ itemData }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={`btn-style ${ClaimItemButtonCSS["claim-item-btn"]}`}>
          Claim item
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={ClaimItemButtonCSS["DialogOverlay"]} />
        <Dialog.Content className={ClaimItemButtonCSS["DialogContent"]}>
          <Dialog.Title>Claim "{itemData.itemname}"</Dialog.Title>
          <Dialog.Description>
            Please fill out this form to claim this item
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ClaimItemButton;
