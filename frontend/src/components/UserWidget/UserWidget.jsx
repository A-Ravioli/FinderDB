import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import UserWidgetCSS from "./UserWidget.module.css";

function UserWidget() {
  const { user, setUser } = useContext(UserContext);
  const eric = { name: "Eric", id: "002828141" };
  const sally = { name: "Sally", id: "4204204204" };
  const kendrick = { name: "Kendrick", id: "696969696" };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        asChild
        className={UserWidgetCSS["DropdownMenuTrigger"]}
      >
        <div>
          {user.name} (ID: {user.id})
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={UserWidgetCSS["DropdownMenuContent"]}>
          <DropdownMenu.Item
            onSelect={() => setUser(sally)}
            className={UserWidgetCSS["DropdownMenuItem"]}
          >
            <div className="RightSlot">Sally</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onSelect={() => setUser(kendrick)}
            className={UserWidgetCSS["DropdownMenuItem"]}
          >
            <div className="RightSlot">Kendrick</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onSelect={() => setUser(eric)}
            className={UserWidgetCSS["DropdownMenuItem"]}
          >
            <div className="RightSlot">Eric</div>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default UserWidget;
