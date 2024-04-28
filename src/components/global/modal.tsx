import type { FC } from 'react'

import ModalPortal from './modalPortal'
import { TProps } from '../../types/components/global/basicModal'

const Modal: FC<TProps> = props => {
  return (
    props.visible && (
      <ModalPortal
        selector="#modal"
        onClosed={props.staticModal ? null : props.closeModal}
        hasShadow={props.hasShadow}
        modalBackgroundZIndex={props.modalBackgroundZIndex}
      >
        <div
          className={`flex bg-white rounded-lg shadow z-${props.modalContentZIndex} w-fit flex-col m-auto fixed translate-y-[-50%] translate-x-[-50%] top-[50%] left-[50%]`}
        >
          <div
            className={`flex items-center justify-between ${
              props.hasTitle ? `border-b p-6` : 'border-none py-4 pl-6 pr-6'
            } rounded-t`}
          >
            {props.hasTitle && (
              <h3 className="text-sm font-psp-bold text-gray-900">{props.title}</h3>
            )}
            {props.hasCloseButton && (
              <button
                type="button"
                className={
                  'text-gray-400 bg-transparent  rounded-lg text-sm p-0 ltr:ml-auto rtl:mr-auto inline-flex items-center'
                }
                onClick={props.closeModal}
              >
                <div>X</div>
              </button>
            )}
          </div>
          <div className={`${props.isMinimizedSpace ? '' : 'p-6 space-y-6'} font-psp-normal`}>
            {props.children}
          </div>
          {props.hasSubmit && (
            <div
              className={`flex items-center p-6 space-x-2 ${
                props.hasSubmit ? 'border-t border-gray-200' : 'border-none'
              } rounded-b`}
            >
              <button
                type="button"
                className={
                  'text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                }
              >
                {props.submitTitle}
              </button>
            </div>
          )}
        </div>
      </ModalPortal>
    )
  )
}

export default Modal
