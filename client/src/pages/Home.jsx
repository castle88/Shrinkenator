import Content from "../components/Content";
import Header from "../components/Header";
import { useState } from "react";

export default function Home() {
  const [response, setReponse] = useState({
    active: false,
    message: "",
  });

  const [link, setLink] = useState({
    active: false,
    url: "",
    name: "",
  });

  const handleLink = (serverData) => {
    setLink((prev) => {
      return {
        active: serverData.message.match("link has already been crushed")
          ? true
          : serverData.success,
        url: serverData.crushedLink.url,
        name: serverData.crushedLink.name,
      };
    });
  };

  const [form, setForm] = useState({
    url: "",
    name: "",
  });
  const { url, name } = form;

  const handleChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleMessage = (message) => {
    setReponse((prev) => {
      return {
        active: true,
        message: message,
      };
    });

    setTimeout(() => {
      setReponse(() => {
        return {
          active: false,
          message: "",
        };
      });
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (url === "") {
        return handleMessage("please enter a url");
      }
      if (name === "") {
        return handleMessage("please enter a nickname for your url");
      }

      const res = await fetch("http://localhost:2121/api/link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
          name,
        }),
      });
      const data = await res.json();
      //       console.log(data);

      handleMessage(data.message);
      handleLink(data);
    } catch (err) {
      console.log(err);
      handleMessage(err.message);
    }
  };

  return (
    <>
      <Header
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        form={form}
      />
      <Content name={name} link={link} response={response} />
    </>
  );
}
