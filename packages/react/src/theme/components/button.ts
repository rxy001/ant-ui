import { defineVariants, keyframes } from '@nex-ui/css-system'

function variantStyle(
  backgroundColor?: string,
  borderColor?: string,
  color?: string,
  hoverBgc?: string,
  hoverBorderColor?: string,
  hoverColor?: string,
  activeBgc?: string,
  activeBorderColor?: string,
  activeFontColor?: string,
) {
  return {
    backgroundColor,
    borderColor,
    color,
    selectors: {
      '&:not(:disabled):not([data-disabled=true]):hover': {
        backgroundColor: hoverBgc,
        borderColor: hoverBorderColor,
        color: hoverColor,
      },
      '&:not(:disabled):not([data-disabled=true]):active': {
        backgroundColor: activeBgc,
        borderColor: activeBorderColor,
        color: activeFontColor,
      },
    },
  }
}

function sizeStyle(
  padding?: string,
  borderRadius?: string,
  height?: string,
  fontSize?: string,
) {
  return { padding, borderRadius, height, fontSize }
}

function roundStyle(controlHeight: number) {
  return {
    borderRadius: controlHeight,
    paddingInlineStart: controlHeight / 2,
    paddingInlineEnd: controlHeight / 2,
  }
}

export const button = defineVariants({
  base: {
    outline: 'none',
    userSelect: 'none',
    border: '1px solid transparent',
    cursor: 'pointer',
    position: 'relative',
    transition: '.3s',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    lineHeight: 1.5666,
    backgroundColor: 'transparent',
  },
  variants: {
    variant: {
      outline: variantStyle(
        '#fff',
        '#d9d9d9',
        'rgba(0, 0, 0, 0.88)',
        '#fff',
        '#4096ff',
        '#4096ff',
        '#fff',
        '#0958d9',
        '#0958d9',
      ),
      solid: variantStyle(
        '#1677ff',
        'transparent',
        '#fff',
        '#69b1ff',
        undefined,
        '#fff',
        '#1677ff',
        undefined,
        '#fff',
      ),
      text: variantStyle(
        undefined,
        undefined,
        'rgba(0, 0, 0, 0.88)',
        'rgba(0, 0, 0, 0.06)',
        undefined,
        undefined,
        'rgba(0, 0, 0, 0.15)',
        undefined,
        undefined,
      ),
      link: variantStyle(
        undefined,
        undefined,
        '#1677ff',
        'transparent',
        undefined,
        '#69b1ff',
        'transparent',
        undefined,
        '#1677ff',
      ),
    },
    size: {
      small: sizeStyle(`0px 7px`, '4px', '24px', '14px'),
      medium: sizeStyle(`4px 15px`, '6px', '32px', '14px'),
      large: sizeStyle(`7px 15px`, '8px', '40px', '16px'),
    },
    disabled: {
      true: {
        '&:disabled, &[data-disabled=true]': {
          cursor: 'not-allowed',
          color: 'rgba(0, 0, 0, 0.25)',
        },
      },
    },
    shape: {
      default: {},
      round: {},
    },
    block: {
      true: {
        width: '100%',
      },
    },
    loading: {
      true: {
        cursor: 'default',
        opacity: 0.65,
      },
    },
    iconOnly: {
      true: {
        paddingInlineStart: 0,
        paddingInlineEnd: 0,
        borderRadius: '50%',
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'medium',
  },
  compoundVariants: [
    {
      variant: ['outline', 'solid'],
      disabled: true,
      css: {
        '&:disabled, &[data-disabled=true]': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
          borderColor: '#d9d9d9',
        },
      },
    },
    {
      size: 'large',
      shape: 'round',
      css: roundStyle(40),
    },
    {
      size: 'small',
      shape: 'round',
      css: roundStyle(24),
    },
    {
      size: 'medium',
      shape: 'round',
      css: roundStyle(32),
    },
    {
      size: 'large',
      iconOnly: true,
      css: {
        width: 40,
      },
    },
    {
      size: 'medium',
      iconOnly: true,
      css: {
        width: 32,
      },
    },
    {
      size: 'small',
      iconOnly: true,
      css: {
        width: 24,
      },
    },
  ],
})

const loadingCircle = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const buttonStartIcon = defineVariants({
  base: {
    display: 'inherit',
    marginRight: 8,
    marginLeft: -4,
  },
  variants: {
    size: {
      small: {
        marginLeft: -2,
      },
    },
    spin: {
      true: {
        animation: `${loadingCircle} 1s infinite linear`,
      },
    },
  },
})

export const buttonEndIcon = defineVariants({
  base: {
    display: 'inherit',
    marginLeft: 8,
    marginRight: -4,
  },
  variants: {
    size: {
      small: {
        marginRight: -2,
      },
    },
  },
})

// export type ButtonVariants = RecipeVariants<typeof button>
