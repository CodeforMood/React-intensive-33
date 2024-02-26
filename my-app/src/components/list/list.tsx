import React, { useId } from "react";
import { Oceans } from "../../const.tsx";
import './list-style.css';

export default function List () {
  const oceanId =useId();
  return (
    <ul className="list">
      { 
        Oceans.map((ocean: string) => {
          return <li key={oceanId}>{ocean}</li>
        })
     }
    </ul>
  )
}