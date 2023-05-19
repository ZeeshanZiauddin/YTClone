import React from "react";

const loading = () => {
  return (
    <button type="button" class="bg-indigo-500 ..." disabled>
      <svg
        class="animate-spin h-5 w-5 mr-3 text-red-500"
        viewBox="0 0 24 24"
      ></svg>
      loading videos ...
    </button>
  );
};

export default loading;
