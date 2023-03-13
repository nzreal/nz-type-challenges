interface VueOptions {
 data: () => Record<string, unknown>
}

declare function SimpleVue<O extends VueOptions>(options: O): any
