// import React from "react";

// export default function EventCard({ event }) {
//   return (
//     <div className="shadow-lg w-[20%] rounded-sm flex flex-col items-center justify-center">
//       <img
//         src={event.image}
//         alt={event.name}
//         className="w-[100%] h-[100%] object-cover rounded-md"
//       />
//       <h1 className="text-center text-lg font-bold p-4">{event.name}</h1>
//       {/* <h1 className="text-center text-lg  p-2">{event.type}</h1> */}
//     </div>
//   );
// }
import React from "react";

export default function EventCard({ event }) {
  return (
    <div className="shadow-lg w-[200px] m-2 rounded-sm flex flex-col items-center justify-center">
      <img
        src={event.image}
        alt={event.name}
        className="w-full h-full object-cover rounded-md"
      />
      <h1 className="text-center text-lg font-bold p-4">{event.name}</h1>
    </div>
  );
}
