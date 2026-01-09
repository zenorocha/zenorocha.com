export const ListGroup = ({ className = '', ...props }) => (
  <ul
    className={`text-secondary my-2.5 mt-2.5 list-none p-0 no-underline ${className}`}
    {...props}
  />
);
