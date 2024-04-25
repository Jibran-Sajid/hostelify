import { RadioGroup } from "@headlessui/react";
import React from "react";

export default function Roommates(props) {

  let {selectedMates} = props;
  let {setSelectedMates} = props;
  let {roommates} = props;
  let {priceHandler} = props;
  let {classNames} = props;

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-900">
          Numbers of roommates
        </h2>
      </div>

      <RadioGroup
        value={selectedMates}
        onChange={setSelectedMates}
        className="mt-2"
      >
        <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {roommates.map((mate) => (
            <RadioGroup.Option
              onClick={() => {
                priceHandler(mate.name);
              }}
              key={mate.name}
              value={mate}
              className={({ active, checked }) =>
                classNames(
                  mate.isAvailable
                    ? "cursor-pointer focus:outline-none"
                    : "cursor-not-allowed opacity-25",
                  active ? "ring-2 ring-indigo-500 ring-offset-2" : "",
                  checked
                    ? "border-transparent bg-indigo-600 text-white hover:bg-indigo-700"
                    : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50",
                  "flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1"
                )
              }
              disabled={!mate.isAvailable}
            >
              <RadioGroup.Label as="span">1/{mate.name}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
