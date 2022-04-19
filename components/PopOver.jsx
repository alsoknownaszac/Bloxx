import React, { useState } from "react";

export function PopOver(props) {
  const { btn } = props;
  const [open, setOpen] = useState(false);
  const [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 });

  const productNameHandleHover = (event) => {
    setMouseLocation({
      x: event.pageX,
      y: event.pageY,
    });
    setOpen(true);
  };

  return (
    <div className="relative  ">
      <div
        className="cursor-pointer "
        onMouseEnter={(e) => productNameHandleHover(e)}
        onMouseLeave={() => {
          setOpen(false);
        }}
      >
        {btn}
      </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            display: open ? "block" : "none",
            top: mouseLocation.y,
            left: mouseLocation.x,
          }}
          className={`fixed p-4 z-[100] overflow-auto rounded-md text-white bg-[rgba(10,10,10,0.4)]`}
        >
          {props.children}
        </div>
      )}
    </div>
  );
}
