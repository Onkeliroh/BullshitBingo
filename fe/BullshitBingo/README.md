# BullshitBingo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Apache Settings

https://hannesh.de/web/2017/10/17/how-to-deploy-a-static-web-page-on-uberspace.html

**.htaccess**

```
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript text/javascript application/json
```
