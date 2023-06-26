import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/tosz/code_only/back-up/nft-investment-back-office-admin/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}