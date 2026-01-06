export const Wrapper = ({ className = '', ...props }) => (
  <div
    className={`relative z-0 flex min-h-screen flex-col ${className}`}
    {...props}
  />
);
