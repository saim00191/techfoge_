const CircuitPattern = () => (
  <div className="absolute inset-0 opacity-10">
    <svg className="w-full h-full" viewBox="0 0 1200 800">
      <defs>
        <pattern id="circuit-about" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <path d="M20 20h80v80h-80z" fill="none" stroke="#00D1FF" strokeWidth="0.8" />
          <circle cx="20" cy="20" r="3" fill="#00D1FF" />
          <circle cx="100" cy="20" r="3" fill="#00D1FF" />
          <circle cx="20" cy="100" r="3" fill="#00D1FF" />
          <circle cx="100" cy="100" r="3" fill="#00D1FF" />
          <path d="M20 60h80M60 20v80" stroke="#00D1FF" strokeWidth="0.5" />
          <path d="M40 40h40v40h-40z" fill="none" stroke="#66E5FF" strokeWidth="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit-about)" />
    </svg>
  </div>
)

export default CircuitPattern
