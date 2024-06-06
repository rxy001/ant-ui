import stylex from '@stylexjs/stylex'

const s = stylex.create({
  base: {
    fontSize: 16,
    lineHeight: 1.5,
    color: 'rgb(60,60,60)',
  },
  heightLine: {
    lineHeight: 3,
  },
})

/**
 *
 * {
 *    base: {},
 *    slots: {
 *
 *    },
 *    variants: {
 *      size: {
 *        small: {},
 *        medium: {}
 *      },
 *      loading: {
 *
 *      }
 *    }
 * }
 *
 */

export const styles = stylex.props(s.heightLine, s.base)
