import { StarIcon } from '@heroicons/react/20/solid'

const products = [
  {
    id: 1,
    name: 'Hostel 1',
    rating: 5,
    reviewCount: 38,
    imageSrc: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvc3RlbHN8ZW58MHx8MHx8fDA%3D',
    imageAlt: 'TODO',
    href: '/room-details/',
  },
  {
    id: 2,
    name: 'Hostel 2',
    rating: 5,
    reviewCount: 18,
    imageSrc: 'https://images.unsplash.com/photo-1633411187642-f84216917af1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9zdGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    imageAlt: 'TODO',
    href: '/room-details/',
  },
  {
    id: 3,
    name: 'Hostel 3',
    rating: 5,
    reviewCount: 14,
    imageSrc: 'https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zdGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    imageAlt: 'TODO',
    href: '/room-details/',
  },
  {
    id: 4,
    name: 'Hostel 4',
    rating: 4,
    reviewCount: 21,
    imageSrc: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zdGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    imageAlt: 'TODO',
    href: '/room-details/',
  },
  {
    id: 5,
    name: 'Hostel 5',
    rating: 2,
    reviewCount: 14,
    imageSrc: 'https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zdGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    imageAlt: 'TODO',
    href: '/room-details/',
  },
  {
    id: 6,
    name: 'Hostel 6',
    rating: 4,
    reviewCount: 21,
    imageSrc: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zdGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    imageAlt: 'TODO',
    href: '/room-details/',
  },
  // More products...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function List() {
  return (
    <div className="bg-white my-8">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="pb-4 pt-10 text-center">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <div className="mt-3 flex flex-col items-center">
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{product.reviewCount} reviews</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}