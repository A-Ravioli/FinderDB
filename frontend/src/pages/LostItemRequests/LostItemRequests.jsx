import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import RequestCard from "../../components/RequestCard/RequestCard";
import getRequests from "../../data/getRequests";
import LostItemRequestsCSS from "./LostItemRequests.module.css";

function LostItemRequests() {
  const { data: requests } = useQuery({
    queryKey: ["requests"],
    queryFn: getRequests,
  });
  const navigate = useNavigate();

  return (
    <div className={LostItemRequestsCSS["container"]}>
      <h1>Lost item requests</h1>
      <button
        className={`btn-style`}
        onClick={() => navigate("/report-lost-item")}
      >
        Report lost item
      </button>
      {requests?.map((requestData) => (
        <RequestCard requestData={requestData} />
      ))}
    </div>
  );
}

export default LostItemRequests;
