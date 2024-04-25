import { StarIcon } from '@heroicons/react/20/solid'
import React from "react";

export default function RoomCard(props) {
  let { room } = props;
  let { classNames } = props;
  return (
    <div
      key={room.id}
      className="group relative border-b border-r border-gray-200 p-4 sm:p-6"
    >
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
        <img
          src={room.imageSrc}
          alt={room.imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="pb-4 pt-10 text-center">
        <h3 className="text-sm font-medium text-gray-900">
          <a href={room.href}>
            <span aria-hidden="true" className="absolute inset-0" />
            {room.name}
          </a>
        </h3>
        <div className="mt-3 flex flex-col items-center">
          <p className="sr-only">{room.rating} out of 5 stars</p>
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames(
                  room.rating > rating ? "text-yellow-400" : "text-gray-200",
                  "h-5 w-5 flex-shrink-0"
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="mt-1 text-sm text-gray-500">
            {room.reviewCount} reviews
          </p>
        </div>
      </div>
    </div>
  );
}
