import createNextIntlPlugin from 'next-intl/plugin';

export default createNextIntlPlugin({
  experimental: {
    srcPath: './',
    extract: {
      sourceLocale: 'en'
    },
    messages: {
      format: 'json',
      locales: 'infer',
      path: './messages'
    }
  }
})()
