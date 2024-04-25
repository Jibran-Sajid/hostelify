const cities = [
  {
    id: 1,
    name: "Multan",
    imageSrc:
      "https://images.unsplash.com/photo-1600434890250-44df6e4c0d05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVsdGFufGVufDB8fDB8fHww",
    imageAlt: "Multan",
  },
  {
    id: 2,
    name: "Lahore",
    imageSrc:
      "https://images.unsplash.com/photo-1628755614942-970eff827e16?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Lahore",
  },
  {
    id: 3,
    name: "Karachi",
    imageSrc:
      "https://images.unsplash.com/photo-1611068661807-c850d6a24f62?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Karachi",
  },
  // More cities...
];

export default function Cities() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {cities.map((city) => (
            <a key={city.id} href={`#`} className="group">
              <div key={city.id}>
                <div className="relative">
                  <div className="relative h-96 w-full overflow-hidden rounded-lg">
                    <img
                      src={city.imageSrc}
                      alt={city.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-96 items-end justify-center overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">
                      {city.name}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
