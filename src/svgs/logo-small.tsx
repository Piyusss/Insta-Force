export const LogoSmall = () => {
  return (
    <svg
      width="200"
      height="61"
      viewBox="0 0 200 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Define the gradient */}
      <defs>
        <linearGradient id="instaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F58529" />
          <stop offset="33%" stopColor="#DD2A7B" />
          <stop offset="66%" stopColor="#8134AF" />
          <stop offset="100%" stopColor="#515BD4" />
        </linearGradient>
      </defs>

      {/* Single text element with gradient fill */}
      <text
        x="10"
        y="40"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="30"
        fontWeight="bold"
        fill="url(#instaGradient)"
      >
        InstaForce
      </text>
    </svg>
  );
};
