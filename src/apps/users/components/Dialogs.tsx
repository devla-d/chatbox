import { DialogProps } from "@/types";
import ReactDOM from "react-dom";
import { closeDialog } from "../helper";

const Dialogs = (props: DialogProps) => {
  const dialog = document.getElementById("dialog-wrapper") as HTMLDivElement;
  return ReactDOM.createPortal(
    <div className="dialog " id="dialogComp">
      <div className="close-dialog">
        <i className="fas fa-times" onClick={() => closeDialog()}></i>
      </div>
      {props.children}
    </div>,
    dialog
  );
};

export default Dialogs;
