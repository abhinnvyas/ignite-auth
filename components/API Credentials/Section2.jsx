"use client";
import React, { useEffect, useState } from "react";
import { KeyIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import {
  getApiKey,
  regenerateApiKey,
} from "@/app/api/api_credentials/getApiKey";
import Cookies from "js-cookie";

function Section2() {
  const [ApiKey, setApiKey] = useState("your-api-key");
  useEffect(() => {
    const clientId = Cookies.get("ClientId");
    const token = Cookies.get("token");
    getApiKey(clientId, token).then((res) => {
      setApiKey(res.APIKey);
    });
  }, []);

  const regeneratekey = async (e) => {
    e.preventDefault();
    const clientId = Cookies.get("ClientId");
    const token = Cookies.get("token");
    await regenerateApiKey(clientId, token).then((res) => {
      setApiKey(res.APIKey);
    });
  };

  const handleCopyClick = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(ApiKey);
      alert("Text copied to clipboard!");
    } catch (error) {}
  };

  return (
    <div className="flex w-full items-center space-x-4 border-2 p-2 rounded-lg">
      <div className="w-40 p-4 border-r-2">
        <KeyIcon className=" bg-my_secondary text-my_background rounded-lg p-4" />
      </div>
      <div className="flex-1 w-full">
        <h1 className="font-semibold text-2xl mb-5">API Key</h1>
        <h1 className="font-normal text-xl mb-2">Key</h1>
        <div className="flex space-x-4 items-center  ">
          <input
            className="bg-my_extra_light w-fit h-12 p-2 text-lg text-my_light rounded-lg opacity-80 border-2 border-gray-400 px-4 flex-1 max-w-lg cursor-not-allowed "
            type="text"
            placeholder
            value={ApiKey}
            disabled
            onCopy={() => {}}
          />
          <button
            onClick={regeneratekey}
            className=" bg-my_secondary text-white text-lg px-4 rounded-lg hover:shadow-lg transition-all ease-in-out p-2"
          >
            Change Credentials
          </button>
          <button
            onClick={handleCopyClick}
            className="bg-white border-2 border-my_secondary hover:bg-my_secondary text-lg p-2 rounded-lg hover:shadow-lg transition-all ease-in-out flex items-center justify-center "
          >
            <ClipboardIcon className="w-8 h-8 text-my_secondary hover:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section2;
