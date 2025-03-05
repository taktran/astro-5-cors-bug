# Astro 5 CORS bug

## To reproduce

1. [On MacOSX] Update `/etc/hosts` with `127.0.0.1 astro.local`
   
   You might need to use `sudo` to edit it.
   
   On other platforms, you will need to update the equivalent file to allow for different domains for `localhost`
2. Run `npm run all:install`
3. In separate terminals run
   1. `npm run astro5:dev`
   2. `npm run astro4:dev`
   3. `npm run astro5:buildPreview`
   4. `npm run astro4:buildPreview`
   5. `npm run site:dev`
4. Open `http://astro.local:4000`
   
   Click on the buttons, and view the dev console for errors and results
