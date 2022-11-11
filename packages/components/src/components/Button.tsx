// Importing the react library
import React from "react";

export default function Welcome(props: any) {
 // Display the name passed as props
 return (
  <button className="tw-bg-red-500 tw-text-3xl tw-font-bold tw-underline">
   Hello, {props.name}
  </button>
 );
}
