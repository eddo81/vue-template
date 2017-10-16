const _CONFIG = require('../config');

const _SEED = {
  name: _CONFIG.appname,
  short_name: _CONFIG.appname,
  description:  _CONFIG.package.description,
  icons: [
    {
      src: `${_CONFIG.directories.output.icons}android-chrome-192x192.png`,
      sizes: '192x192',
      type: 'image/png'
    },
    {
      src: `${_CONFIG.directories.output.icons}android-chrome-512x512.png`,
      sizes: '512x512',
      type: 'image/png'
    }
  ],
  start_url: _CONFIG.filenames.output.html,
  display: 'standalone',
  orientation: 'portrait',
  background_color: _CONFIG.scssvars['$black-color'],
  theme_color: _CONFIG.scssvars['$theme-color']
};

module.exports = _SEED;