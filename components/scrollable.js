import React from "react";

export default function Scrollable(props) {
  return (
    <div style={{ maxHeight: '600px', overflow: 'auto' }}>
      {props.children}
    </div>
  );
}
