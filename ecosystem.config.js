
// write file config for pm2
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const config = {
  apps: [
    {
      name: 'app',
      script: 'dist/index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};

const filePath = path.join(__dirname, 'ecosystem.config.js');
fs.writeFileSync(filePath, `module.exports = ${JSON.stringify(config)}`);