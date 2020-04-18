import * as React from "react";

function ReadMore({ href, onClick }) {
  return (
    <a className="text-purple-900 w-10 h-10" href={href} onClick={onClick}>
      <svg fill="none" viewBox="0 0 46 46" width="100%" height="100%">
        <path
          d="M33.925 34.19a1.917 1.917 0 00-1.771-1.183h-5.8a.478.478 0 01-.479-.48V2.876a2.875 2.875 0 10-5.75 0v29.653a.48.48 0 01-.48.479h-5.803a1.917 1.917 0 00-1.355 3.272l9.156 9.157a1.916 1.916 0 002.712 0l9.158-9.157a1.917 1.917 0 00.412-2.09z"
          fill="currentColor"
        />
      </svg>
      <span className="visually-hidden">Begin met lezen</span>
    </a>
  );
}

export default ReadMore;
