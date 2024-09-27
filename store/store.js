import {
  createPinia
} from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

// //统一导出pinia
// export default pinia
// export * from "./modules/list.js"