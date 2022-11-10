// Importing the react library
import React from "react";

export default function Welcome(props: any) {
 // Display the name passed as props
 return (
  <button className="bg-indigo-500 text-3xl font-bold underline ">
   Hello, {props.name}
  </button>
 );
}
