const Loading = () => (
  <div className="flex h-full items-center p-2">
    <svg
      className="h-10 w-10 animate-spin text-youtube-font"
      viewBox="0 0 24 24"
    >
      <circle
        cx="12"
        cy="12"
        r="5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="15 95"
        transform="rotate(-90 12 12)"
      ></circle>
    </svg>
  </div>
);

export default Loading;
