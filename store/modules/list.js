import {
  ref
} from 'vue'
import {
  defineStore
} from 'pinia'

// 猫咪存储pinia
import {
  ref
} from 'vue'
export const soupListStore = defineStore('chickenSoup-list', () => {
  const soupList = ref([])
  const state = ref("今天")
  return {
    state
  }
})