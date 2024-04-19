import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

function LostItemRequests() {
  // const { data: requests } = useQuery({
  //   queryKey: ["requests"],
  //   queryFn: getRequests,
  // });
  const navigate = useNavigate();

  return (
    <>
      <h1>Lost item requests</h1>
      <button
        className={`btn-style`}
        onClick={() => navigate("/report-lost-item")}
      >
        Report lost item
      </button>
    </>
  );
}

export default LostItemRequests;
