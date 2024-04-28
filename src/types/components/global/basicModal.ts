import type { ReactNode } from 'react'

export type TProps = {
  title?: string | JSX.Element
  children: ReactNode
  hasTitle?: boolean
  hasSubmit?: boolean
  submitTitle?: string
  visible?: boolean
  hasCloseButton?: boolean
  staticModal?: boolean
  closeModal?: () => void
  hasShadow?: boolean
  isMinimizedSpace?: boolean
  modalContentZIndex?: 0 | 10 | 20 | 30 | 40 | 50
  modalBackgroundZIndex?: number
}
