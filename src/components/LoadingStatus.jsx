import React from "react";
import { VscLoading } from "react-icons/vsc";

import { useSelector } from "react-redux";

export default function LoadingStatus() {
  const isLoading = useSelector((store) => store.weather.isLoading);
  const error = useSelector((store) => store.weather.error);

  return (
    <div className="my-10">
      {isLoading && <VscLoading className="animate-spin w-full py-10 h-60" />}
      {error && (
        <div className="flex place-items-center h-60">
          <p className="rounded-lg shadow-lg text-center text-lg w-full py-5 text-white bg-red-500/40">
            {error}
          </p>
        </div>
      )}
    </div>
  );
}
