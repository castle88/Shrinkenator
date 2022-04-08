import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Link() {
  const navigate = useNavigate();
  const { link } = useParams();

  const getLink = async () => {
    try {
      const response = await fetch(`/api/link/${link}`);
      const data = await response.json();
      console.log(data);

      window.location = `http://${data.crushedLink.url}`;
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };

  useEffect(() => {
    getLink();
  }, []);
  return <div></div>;
}
