// esbuild-register により、 TypeScript を esbuild でトランスパイル
const { register } = require('esbuild-register/dist/node')

register({
  target: 'node16'
})

// gatsby-config.ts を re-export
module.exports = require('./gatsby-config.ts')
