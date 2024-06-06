import {
  button,
  buttonStartIcon,
  buttonEndIcon,
  dynamicVars,
  btnTokens,
  styles,
} from '@nex-ui/theme'
import { useMemo } from 'react'
import classNames from 'classnames'
import { useNexUIConfig, useNexUITheme } from '../provider'
import type { ButtonIconProps, ButtonProps } from './types'
import { Icon } from '../icon'

const ButtonStartIcon = ({ children, size, spin }: ButtonIconProps) => (
  // @ts-ignore
  <span className={buttonStartIcon({ size, spin })}>{children}</span>
)

const ButtonEndIcon = ({ children, size }: ButtonIconProps) => (
  // @ts-ignore
  <span className={buttonEndIcon({ size })}>{children}</span>
)

console.log(styles.style)

export const useButton = ({
  style,
  className,
  iconOnly = false,
  size = 'medium',
  loading = false,
  disabled = false,
  shape = 'default',
  variant = 'primary',
  block = false,
  type = 'button',
  startIcon: startIconProp,
  endIcon: endIconProp,
  onClick: onClickProp,
  ...restProps
}: ButtonProps) => {
  const theme = useNexUITheme('button')
  const { prefix } = useNexUIConfig()

  const mergedStyle = useMemo(
    () => ({
      ...dynamicVars(btnTokens, theme),
      ...style,
    }),
    [style, theme],
  )

  const mergedClassName = useMemo(
    () =>
      classNames(
        `${prefix}-btn`,
        // button({ variant, size, disabled, block, shape, loading, iconOnly }),
        styles.className,
        className,
      ),
    [
      prefix,
      block,
      className,
      disabled,
      shape,
      size,
      variant,
      loading,
      iconOnly,
    ],
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
      className: mergedClassName,
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
