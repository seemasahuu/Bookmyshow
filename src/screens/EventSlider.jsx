import React from "react";
import EventCard from "./EventCard";

export default function EventSlider({ data, title }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        <button
          onClick={() => {
            alert(title);
          }}
          className="text-blue-500"
        >
          See All
        </button>
      </div>

      <div className="flex justify-between items-centern">
        {data.map((event, index) => (
             
          <EventCard key={index} event={event} />
        
        ))}
      </div>
    </div>
  );
}

// import React from "react";
// import EventCard from "./EventCard";

// export default function EventSlider({ data, title }) {
//   return (
//     <div className="mb-8">
//       <div className="flex items-center justify-between mb-4">
//         <h1 className="text-2xl font-bold">{title}</h1>
//         <button
//           onClick={() => {
//             alert(title);
//           }}
//           className="text-blue-500"
//         >
//           See All
//         </button>
//       </div>

//       <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide">
//         {data.map((event, index) => (
//           <div key={index} className="inline-block">
//             <EventCard event={event} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
