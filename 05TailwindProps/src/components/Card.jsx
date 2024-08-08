/* eslint-disable react/prop-types */
function Card({ username="Example", btn="View" }) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md mb-3">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjzy_WsObZ9go0VGpk3DHTSZEuchWBoqK22A&s"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {btn} →
        </button>
      </div>
    </div>
  );
}

export default Card;
