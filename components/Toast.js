'use client';

import * as ToastPrimitive from '@radix-ui/react-toast';

export default function Toast({
  title,
  description,
  isSuccess,
  showToast,
  setShowToast,
  children
}) {
  const iconColor = isSuccess ? '#4cb782' : '#b75c4c';
  const iconName = isSuccess ? 'checkbox-circle' : 'error-warning';

  return (
    <ToastPrimitive.Provider>
      {children}
      <ToastPrimitive.Root
        open={showToast}
        onOpenChange={setShowToast}
        className="bg-hover z-2 m-0 flex overflow-hidden rounded border border-[rgb(48,50,54)] p-3 text-sm text-[rgb(138,143,152)] shadow-[rgb(0_0_0/8%)_0_.25rem_.8125rem] data-[state=closed]:animate-[slideDownAndFade_100ms_ease-in_forwards] data-[state=open]:animate-[slideUpAndFade_100ms_ease-in_forwards]"
      >
        <div className="-mt-0.5 mr-2 text-base" style={{ color: iconColor }}>
          <i className={`ri-${iconName}-fill`} />
        </div>
        <div>
          <ToastPrimitive.Title className="text-primary leading-7">
            {title}
          </ToastPrimitive.Title>
          <ToastPrimitive.Description className="-mt-1.25 leading-7">
            {description}
          </ToastPrimitive.Description>
        </div>
        <ToastPrimitive.Close
          aria-label="Close"
          className="hover:text-primary absolute top-0 right-0 h-8 w-8 border-0 bg-transparent text-lg text-[rgb(138,143,152)] transition-[color_0.2s_ease-in-out]"
        >
          <span aria-hidden>×</span>
        </ToastPrimitive.Close>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport className="fixed right-5 bottom-5 z-2" />
    </ToastPrimitive.Provider>
  );
}
