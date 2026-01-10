export const PostMain = ({ className = '', ...props }) => (
  <main
    className={`mx-auto flex w-full max-w-200 flex-1 items-center overflow-hidden py-14 md:py-28 ${className}`}
    {...props}
  />
);

export const Post = ({ className = '', ...props }) => (
  <main className={`flex-1 overflow-hidden ${className}`} {...props} />
);

export const PostContainer = ({ className = '', ...props }) => (
  <div className={`mx-auto max-w-200 px-5 ${className}`} {...props} />
);

export const PostContent = ({ className = '', ...props }) => (
  <div
    className={`bg-background text-secondary [&_.post-image-caption]:text-secondary [&_.side-by-side-caption]:text-secondary relative z-1 h-full py-5 text-base leading-8.5 [&_.iframe-wrap]:relative [&_.iframe-wrap]:mb-5 [&_.iframe-wrap]:h-0 [&_.iframe-wrap]:overflow-hidden [&_.iframe-wrap]:pt-7.5 [&_.iframe-wrap]:pb-[56.25%] [&_.iframe-wrap_iframe]:absolute [&_.iframe-wrap_iframe]:top-0 [&_.iframe-wrap_iframe]:left-0 [&_.iframe-wrap_iframe]:h-full [&_.iframe-wrap_iframe]:w-full [&_.iframe-wrap_iframe]:border-0 [&_.post-image-caption]:text-center [&_.post-image-caption]:text-sm [&_.post-image-caption]:italic [&_.post-image-full]:my-5 [&_.post-image-full]:mt-5 [&_.post-image-full]:w-[70vw] [&_.post-image-full]:max-w-none max-lg:[&_.post-image-full]:ml-0 md:[&_.post-image-full]:ml-[calc(-1*(70vw-47.5rem)/2)] [&_.side-by-side]:my-10 [&_.side-by-side]:flex [&_.side-by-side]:w-[90vw] [&_.side-by-side]:flex-row max-lg:[&_.side-by-side]:ml-0 max-lg:[&_.side-by-side]:flex-col md:[&_.side-by-side]:ml-[calc(-1*(90vw-47.5rem)/2)] [&_.side-by-side-caption]:-mt-7.5 [&_.side-by-side-caption]:text-center [&_.side-by-side-caption]:text-sm [&_.side-by-side-caption]:italic [&_.side-by-side-img]:min-w-[50%] md:[&_.side-by-side-img]:min-w-full ${className}`}
    {...props}
  />
);
