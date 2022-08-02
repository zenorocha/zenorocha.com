import * as ToastPrimitive from '@radix-ui/react-toast'
import { styled, keyframes } from '../stitches.config'

export default function Toast({ title, description, isSuccess, showToast, setShowToast, children }) {
  const iconColor = isSuccess ? '#4cb782' : '#b75c4c'
  const iconName = isSuccess ? 'checkbox-circle' : 'error-warning'

  return <ToastPrimitive.Provider asChild>
    {children}
    <Root
      open={showToast}
      onOpenChange={setShowToast}
    >
      <IconContainer style={{ color: iconColor }}>
        <i className={`ri-${iconName}-fill`} />
      </IconContainer>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
      <Close aria-label="Close">
        <span aria-hidden>×</span>
      </Close>
    </Root>
    <Viewport />
  </ToastPrimitive.Provider>
}

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(20px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 1, transform: 'translateY(0)' },
  '100%': { opacity: 0, transform: 'translateY(20px)' },
});

const Root = styled(ToastPrimitive.Root, {
  background: '$hover',
  borderRadius: '4px',
  border: '1px solid rgb(48, 50, 54)',
  boxShadow: 'rgb(0 0 0 / 8%) 0px 4px 13px',
  color: 'rgb(138, 143, 152)',
  fontSize: '14px',
  overflow: 'hidden',
  margin: '0px',
  padding: '12px',
  display: 'flex',
  '&[data-state="open"]': {
    animation: `100ms ease-in forwards ${slideUpAndFade}`
  },
  '&[data-state="closed"]': {
    animation: `100ms ease-in forwards ${slideDownAndFade}`
  },
  zIndex: 2
})

const IconContainer = styled('div', {
  fontSize: '16px',
  marginTop: '-2px',
  marginRight: '8px'
})

const Title = styled(ToastPrimitive.Title, {
  color: '$primary',
  lineHeight: '28px'
})

const Description = styled(ToastPrimitive.Description, {
  marginTop: '-5px',
  lineHeight: '28px',
})

const Close = styled(ToastPrimitive.Close, {
  position: 'absolute',
  right: '0',
  top: '0',
  width: '32px',
  height: '32px',
  background: 'transparent',
  border: '0',
  fontSize: '18px',
  color: 'rgb(138, 143, 152)',
  transition: 'color 0.2s ease-in-out',
  '&:hover': { color: '$primary' }
})

const Viewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 2
})