import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const ModalPortal = ({ children, selector, onClosed, hasShadow, modalBackgroundZIndex }) => {
  const ref = useRef(null)

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  return mounted
    ? createPortal(
        <>
          <div
            style={{
              opacity: 1,
              zIndex: modalBackgroundZIndex,
              position: 'fixed',
              inset: 0,
              background: `${hasShadow ? 'rgb(0,0,0,0.5)' : 'rgb(0,0,0,0.1)'}`
            }}
            onClick={onClosed}
          ></div>
          {children}
        </>,
        ref.current
      )
    : null
}

export default ModalPortal
