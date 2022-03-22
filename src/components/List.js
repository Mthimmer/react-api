import React from "react";

export default function list({ name, id, img }) {
  // console.log(item);

  return (
    <>
      <ul key={id}>
        <div className="list">
          <img src={img} />
          <h3>{name}</h3>

          <p>{id}</p>
        </div>
      </ul>
    </>
  );
}
