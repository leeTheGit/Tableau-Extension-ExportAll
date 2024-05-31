import React from "react";
import { Button } from "@tableau/tableau-ui";

function ExportBtn(props) {
  return (
    <div>
      <Button
        className="export-button"
        kind={props.style}
        disabled={props.disabled}
        onClick={props.export}
      >
        {props.label}
      </Button>
    </div>
  );
}

export default ExportBtn;
