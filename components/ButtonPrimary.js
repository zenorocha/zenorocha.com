export const ButtonPrimary = ({ className = '', ...props }) => (
  <div
    className={`text-primary hover:bg-hover hover:text-primary [&:hover_kbd]:bg-primary -ml-2.5 inline-block cursor-pointer appearance-none rounded-lg border-0 bg-transparent px-2.5 py-2 text-base leading-6 font-semibold no-underline outline-0 transition-[background_0.2s_ease-in-out,color_0.2s_ease-in-out] hover:opacity-100 ${className}`}
    {...props}
  />
);
