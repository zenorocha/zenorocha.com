export const FeaturedProjects = ({ className = '', ...props }) => (
  <div
    className={`my-2.5 mt-2.5 -ml-5 flex flex-col flex-wrap md:flex-row ${className}`}
    {...props}
  />
);
