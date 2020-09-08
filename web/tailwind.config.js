// tailwind.config.js
module.exports = {
  future: [
   removeDeprecatedGapUtilities: true,
  ],
    purge: [],
    theme: {
    extend: {}
  },
    variants: {},
    plugins: [
     require('@tailwindcss/ui')
  ]
}
