import { useMemo } from 'react'
import classNames from 'classnames'
// import { button, buttonStartIcon, buttonEndIcon } from '@theme'
import { useNexContext } from '../provider'
import type { ButtonIconProps, ButtonProps } from './types'
import { Icon } from '../icon'

const ButtonStartIcon = ({ children, size, spin }: ButtonIconProps) => {
  const { prefix } = useNexContext()

  return (
    <span
      className={classNames(
        `${prefix}-start-icon`,
        // buttonStartIcon({ size: size === 'small' ? size : undefined, spin }),
      )}
    >
      {children}
    </span>
  )
}

const ButtonEndIcon = ({ children, size }: ButtonIconProps) => {
  const { prefix } = useNexContext()

  return (
    <span
      className={classNames(
        `${prefix}-end-icon`,
        // buttonEndIcon({ size: size === 'small' ? size : undefined }),
      )}
    >
      {children}
    </span>
  )
}

export const useButton = ({
  style,
  className,
  iconOnly = false,
  size = 'medium',
  loading = false,
  disabled = false,
  shape = 'default',
  variant = 'solid',
  block = false,
  type = 'button',
  startIcon: startIconProp,
  endIcon: endIconProp,
  onClick: onClickProp,
  ...restProps
}: ButtonProps) => {
  const { prefix, theme } = useNexContext()

  console.log(theme)

  const mergedStyle = useMemo(
    () => ({
      ...style,
    }),
    [style],
  )

  const onClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
  ) => {
    if (loading || disabled) {
      event.preventDefault()
      return
    }

    ;(onClickProp as ButtonProps['onClick'])?.(event)
  }

  return {
    getRootProps: () => ({
      onClick,
      type,
      disabled,
      style: mergedStyle,
      ...restProps,
    }),
    startIcon:
      loading || startIconProp ? (
        <ButtonStartIcon size={size} spin={loading}>
          {loading ? (
            <Icon icon="ant-design:loading-outlined" />
          ) : (
            startIconProp
          )}
        </ButtonStartIcon>
      ) : null,
    endIcon: endIconProp ? (
      <ButtonEndIcon size={size}>{endIconProp}</ButtonEndIcon>
    ) : null,
  }
}
