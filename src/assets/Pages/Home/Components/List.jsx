import RoomCard from './RoomCard'

const rooms = [
  {
    id: 1,
    name: 'Hostel room 1',
    rating: 5,
    reviewCount: 38,
    imageSrc: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvc3RlbHN8ZW58MHx8MHx8fDA%3D',
    imageAlt: 'TODO',
    href: '/room-details',
  },
  {
    id: 2,
    name: 'Hostel room 2',
    rating: 5,
    reviewCount: 18,
    imageSrc: 'https://images.unsplash.com/photo-1633411187642-f84216917af1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9zdGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    imageAlt: 'TODO',
    href: '/room-details',
  },
  {
    id: 3,
    name: 'Hostel room 3',
    rating: 5,
    reviewCount: 14,
    imageSrc: 'https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zdGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    imageAlt: 'TODO',
    href: '/room-details',
  },
  {
    id: 4,
    name: 'Hostel room 4',
    rating: 4,
    reviewCount: 21,
    imageSrc: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zdGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    imageAlt: 'TODO',
    href: '/room-details',
  },
  {
    id: 5,
    name: 'Hostel room 5',
    rating: 2,
    reviewCount: 14,
    imageSrc: 'https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zdGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    imageAlt: 'TODO',
    href: '/room-details',
  },
  {
    id: 6,
    name: 'Hostel room 6',
    rating: 4,
    reviewCount: 21,
    imageSrc: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zdGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    imageAlt: 'TODO',
    href: '/room-details',
  },
  // More products...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function List() {
  return (
    <div className="bg-white mb-8">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>
        <h2 className="text-xl font-bold text-blue-900 mb-4">Room Available</h2>

        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {rooms.map((room) => (
            <RoomCard classNames={classNames} room={room} />
          ))}
        </div>
      </div>
    </div>
  )
}