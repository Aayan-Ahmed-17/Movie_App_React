// const Cards = () => {
//   return (
//     <div className="h-[650px] relative text-white flex justify-center items-center shrink-0 p-2 bg-gray-600 group:">
//       <div className="w-[97%] h-[97%] flex flex-col justify-center gap-y-2 p-2 cursor-pointer m-auto absolute rounded-lg bg-black/50">
//         <h1>Dhamaal</h1>
//         <div>
//           <span>Genres: </span>
//           <span>Crime Dramas</span>
//         </div>
//         <span>
//           Original Language: <span>Hindi</span>
//         </span>
//         <span>
//           Release Date: <span>08-04-2006</span>
//         </span>
//       </div>
//       <img src="/dhamaal.png" alt="movie image" className="size-full"/>
//     </div>
//   );
// };

// export default Cards;

const Card = () => {
  return (
    <div className="h-[650px] relative flex justify-center items-center shrink-0 p-2 bg-gray-600 group">
      <div className="w-[97%] h-[97%] m-auto text-white absolute rounded-lg bg-black/50 flex flex-col justify-center gap-y-2 p-10 cursor-pointer">
        <h1 className="text-4xl"> The Godfather</h1>
        <div className="flex gap-x-2 items-center">
          <span className="text-lg">Genres: </span>
          <span className="font-semibold text-red-600">Crime Drama</span>
        </div>
        <span className="flex gap-x-2">
          Original Language: <span className="mr-2 uppercase">EN</span>
        </span>
        <span className="flex gap-x-2">
          Release Date: <span className="mr-2 text-yellow-400">1972-03-04</span>
        </span>
        <p className="flex flex-col gap-y-1">
          <span className="text-red-500">Summary: </span>
          <span className="first-letter:pl-2">Summary text</span>
        </p>
      </div>
      <img src="/dhamaal.png" alt="Movie Image" className="object-cover rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};
export default Card;
