// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
      title: 'AgroAurora | Impulsando el Desarrollo Local',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no'},
        { hid: 'description', name: 'description', content:'AgroAurora S.A.C. es una empresa industrial dedicada a la producción de Alcohol Anhidro, y la siembra y cultivo de caña de azúcar' },
        { name: 'subject', content: 'AgroAurora' },
        { hid: 'og_locale', property: 'og:locale', content: 'es_ES' },
        { hid: 'og_type', property: 'og:type', content: 'website' },
        { hid: 'og_title', property: 'og:title', content: 'AgroAurora | Impulsando el Desarrollo Local' },
        { hid: 'og_description', property: 'og:description', content: 'AgroAurora S.A.C. es una empresa industrial dedicada a la producción de Alcohol Anhidro, y la siembra y cultivo de caña de azúcar.' },
        //{ hid: 'og_url', property: 'og:url', content: process.env.HOST_PUBLIC },
        { hid: 'og_site_name', property: 'og:site_name', content: 'AgroAurora' },
        //{ hid: 'og_image', property: 'og:image', content: static_url + '/Url-Prestamype.png' },
        //{ hid: 'og_image_type', property: 'og:image:type', content: 'image/png' }
      ],
      link: [
        //{ rel: 'icon', type: 'image/x-icon', href: static_url + '/favicon.ico' },
        //{ hid: 'url_canonical', rel: 'canonical', href: process.env.HOST_PUBLIC },
      ]
    }
  },

  css: [
    '@/assets/scss/main.scss'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss:{
          additionalData: '@use "~/assets/scss/tools/_mixins.scss" as *;'
        }
      }
    }
  },

  image: {
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },

  modules: ["vue3-carousel-nuxt", "@nuxt/image"],
  plugins: ['@/plugins/vue3-google-map']
})