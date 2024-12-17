export const BackgroundPattern = () => (
    <svg
      className="absolute inset-0 -z-10 h-full w-full stroke-gray-600/20 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="coding-pattern"
          width={50}
          height={50}
          patternUnits="userSpaceOnUse"
        >
          <rect width="100%" height="100%" fill="none" />
          <path
            d="M10 25 L40 25 M10 10 L10 40 M40 10 L40 40 M25 10 L25 40"
            stroke="gray"
            strokeWidth="1"
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#coding-pattern)" />
    </svg>
  );