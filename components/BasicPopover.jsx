import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function BasicPopover(props) {
  return (
    <div className={`w-full ${props.className}`}>
      <Popover className={` ${props.popoverStyles} relative`}>
        {({ open }) => (
          <div>
            <Popover.Button
              className={` ${props.btnStyles}
                  ${
                    open ? "" : "text-opacity-90"
                  } flex items-center hover:text-opacity-100 focus:outline-none`}
            >
              {props.btn}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className={`z-10 absolute transform -translate-x-[15px] -translate-y-[15px] overflow-hidden rounded-[5px] shadow-lg ring-1 ring-black ring-opacity-5  ${props.contentStyles} `}
              >
                {props.children}
              </Popover.Panel>
            </Transition>
          </div>
        )}
      </Popover>
    </div>
  );
}
