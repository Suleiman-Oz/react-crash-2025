import React from "react";

function Card(props) {
  const { img, alt, username, post } = props.cardObj;
  return (
    <div>
      <h1 className="text-2xl bg-green-500 p-3 rounded">card for photos</h1>
      <figure className="bg-slate-100 rounded-xl dark:bg-slate-800">
        <img className="rounded" src={img} alt={alt} />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg">
              Tailwind CSS is the only framework that I've seen scale
            </p>
          </blockquote>
          <figcaption>
            <div>{username}</div>
            <div>{post}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
