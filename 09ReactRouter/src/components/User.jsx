import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  return (
    <>
      <div className="text-white text-center bg-gray-600 p-4">User: {userid}</div>
    </>
  );
}

export default User;
