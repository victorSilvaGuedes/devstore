'use client'

import React, { forwardRef, useCallback, useState } from 'react'

import { AnimationProps, motion } from 'framer-motion'

import { tv } from 'tailwind-variants'

import { AlertCircle } from 'lucide-react'

interface InputFocusBlurProps extends React.ComponentProps<'input'> {
  children: React.ReactNode
  feedbackError?: string
}

const EIXO_X_PLACEHOLDER = 24
const STANDARD_DURATION = 0.3

const inputFocusBlurStyles = tv({
  slots: {
    baseStyle: `w-full h-[42px] px-2 flex items-center rounded-xl border border-zinc-800 focus-within:border-violet-500 
    bg-zinc-900 transition-all duration-200 relative data-[filled=true]:border-violet-500 focus-within:text-violet-500 text-zinc-500`,
    inputStyle: `flex-1 h-full p-2 outline-none text-sm text-zinc-300 bg-transparent relative z-[9999] placeholder:sr-only 
    disabled:cursor-not-allowed`,
    placeholderStyle: `text-sm text-zinc-500 absolute left-3`,
    feedbackErrorStyle: `flex items-center gap-1 text-xs text-red-300 mt-1`,
  },
  variants: {
    error: {
      true: {
        baseStyle: `border-red-300`,
      },
    },
    disabled: {
      true: {
        baseStyle: `bg-neutral-800 cursor-not-allowed`,
      },
    },
  },
})

const { baseStyle, inputStyle, placeholderStyle, feedbackErrorStyle } =
  inputFocusBlurStyles()

export const InputFocusBlur = forwardRef<HTMLInputElement, InputFocusBlurProps>(
  (
    { placeholder, feedbackError = '', disabled, value, children, ...props },
    ref,
  ) => {
    const [isFocus, setIsFocus] = useState(false)
    const [internalValue, setInternalValue] = useState('')

    const handle = useCallback((type: 'focus' | 'blur') => {
      setIsFocus(type === 'focus')
    }, [])

    function observeFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
      setInternalValue(event.target.value)
    }

    const isFilled = internalValue.length > 0 || !!value
    const isFocusOrFilled = isFocus || isFilled

    const isError = feedbackError.length > 0 && !disabled

    const placeholderAnimation: AnimationProps['animate'] = isFocusOrFilled
      ? {
          x: EIXO_X_PLACEHOLDER,
          filter: 'blur(4px)',
          opacity: 0,
        }
      : {
          x: 0,
        }

    return (
      <div className="w-full">
        <div
          className={baseStyle({ error: isError, disabled })}
          data-filled={isFilled}
        >
          <input
            ref={ref}
            type="text"
            className={inputStyle()}
            placeholder={placeholder}
            onFocus={() => handle('focus')}
            onBlur={() => handle('blur')}
            onChange={observeFieldChange}
            disabled={disabled}
            value={value}
            {...props}
          />

          <motion.span
            key={1}
            className={placeholderStyle()}
            initial={{
              x: 0,
            }}
            animate={placeholderAnimation}
            transition={{
              easings: ['easeOut'],
              duration: STANDARD_DURATION,
            }}
          >
            {placeholder}
          </motion.span>
          {children}
        </div>

        {isError && (
          <motion.span
            key={2}
            className={feedbackErrorStyle()}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: STANDARD_DURATION,
            }}
          >
            <AlertCircle size={12} />
            {feedbackError}
          </motion.span>
        )}
      </div>
    )
  },
)

InputFocusBlur.displayName = 'InputFocusBlur'
