/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/AmanSingh-01")
  //     .then((respons) => respons.json())
  //     .then((res) => {
  //       setData(res);
  //     });
  // }, []);

  return (
    <>
      <div className="flex flex-col items-center gap-5 bg-gray-600 p-5 text-3xl font-bold text-white text-center">
        <div> Github Followers: {data.following}</div>
        <div>
          <img
            className="rounded-md shadow-2xl shadow-white border-2 border-gray-600 hover:shadow-lime-200"
            width={200}
            src={data.avatar_url}
            alt="git picture"
          />
        </div>
      </div>
    </>
  );
}
export default Github;

export const gitInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/AmanSingh-01");
  return response.json();
};
