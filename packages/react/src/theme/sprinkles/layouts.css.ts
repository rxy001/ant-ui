// import { forEach } from '@nex-ui/utils'
// import { style } from '@vanilla-extract/css'
// import { defineProperties } from '@vanilla-extract/sprinkles'

// export const layouts = defineProperties({
//   properties: {
//     display: ['none', 'block', 'flex', 'grid', 'inline-block'],
//     flexDirection: ['row', 'column'],
//     alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
//     justifyContent: ['stretch', 'flex-start', 'center', 'flex-end'],
//     position: ['absolute', 'relative'],
//   },
// })

// export function createUtilityClasses(obj) {
//   const map = {}

//   forEach(obj, (value, key) => {
//     map[key] = style(value)
//   })

//   console.log(map)

//   return function utilityClasses(key) {
//     return map[key]
//   }
// }

// const layouts = createUtilityClasses({
//   flex: {
//     display: 'flex',
//   },
// })

// console.log(layouts('flex'))
