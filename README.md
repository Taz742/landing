# BUILD & DEPLOY

```sh
$ npm install      (initially or when new packages are added)
$ npm run build
```
create pm2 configuration file (/var/www/ecosystem.config.js)

```javascript
module.exports = {
  apps: [
    {
      name: "landing", // your project name
      script: "npm",
      args: "start",
      cwd: "/var/www/landing/", // (replace with your project path)
      env: {
        COMMON_VARIABLE: "true",
        NODE_ENV: "production",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
```
in terminal go to your ecosystem.config.js file 
```
$ cd /var/www/
$ pm2 restart ecosystem.config.js
$ pm2 save (save processes for accidental reboot)
```