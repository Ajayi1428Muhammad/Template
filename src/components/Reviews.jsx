import React from 'react'

const reviews= [ 
  {
    id: 1,
    name: 'Muadh Alhajri',
    reviewType: "Compliment",
    content: 'So far, moot restaurant has been a great experience.',
  },
  {
    id: 2,
    name: 'Mustapha Coman',
    reviewType: "Compliment",
    content: 'I love the food here!',
  },
  {
    id: 3,
    name: 'Cynthia Johnson',
    reviewType: "Good Service",
    content: 'The service is excellent.',
  },
  {
    id: 4,
    name: 'Meryem Sherbini',
    reviewType: "Compliment",
    content: 'I will definitely be coming back.',
  }
]
const Reviews = () => {
  return (
    <div className="bg-white/20 rounded-xl inset-shadow-insertcard p-6 z-10 max-h-89 overflow-y-auto scrollbar-none">
      <div className="grid grid-cols-1 gap-4">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="rounded-xl p-6 bg-[#b98330] font-bold"
          >
            <div className="relative flex items-center justify-start gap-2 mb-4">
              <img
                src="/Person.jpg"
                alt=""
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm text-white">{item.name}</span>
            </div>
            <div className="text-xs text-white/60">{item.reviewType}</div>
            <div className="text-white">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews
