import Link from "next/link"
import React from "react"

interface ICard {
  title : string
  image : string
  image_profile : string
  author : string
  slug : string
}


export const Card:React.FC<ICard> = ({title, image, image_profile, slug}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={`https:${image}`}
          alt={`${title}`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link href={`/blog/${slug}`}>
            
          <button className="btn btn-primary">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
