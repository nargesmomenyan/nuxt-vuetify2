# Migrate Nuxt to Vuetify2

**Uninstall:**
<br />
    1. npm uninstall --save node-sass  <br /> 
    2. npm uninstall --save sass-loader  <br /> 
    3. remove everthing related to vuetify in package.json and nuxt.config  <br />
    4. remove (package/yarn-lock.json)  <br />
    5. remove node_modules  <br />

**Install:** <br />      
    1. npm install --dev @nuxtjs/vuetify  <br />
        after this, sass-loader version 8 should be added in package/yarn-lock.json  <br />
        * *more info on https://www.npmjs.com/package/@nuxtjs/vuetify* <br />
    2. reinstall everything: npm install <br /> 
    3. If you're using TypeScript, you'll need to add @nuxtjs/vuetify in your compilerOptions of your tsconfig.json <br />
        ```
            {
                "compilerOptions": {
                    "types": [
                    "@types/node",
                    "@nuxt/vue-app",
                    "@nuxtjs/vuetify"
                    ]
                }
            }
        ```<br />
    4. add @nuxtjs/vuetify to nuxt.config <br />
        ```
            buildModules: ['@nuxtjs/vuetify']
        ```<br />
    5. change components according to: https://vuetifyjs.com/en/getting-started/releases-and-migrations<br />

<br />

**Style:**<br />
    1. In Vuetify2, stylus was replaced with sass, so make sure to correct thses paths:  <br />
    ```
        '~vuetify/src/styles/settings/_variables.scss'
        '~vuetify/src/styles/styles.sass'
    ```<br />
    2. In order to override default vuetify sass varialbles, it is required to declare them above the initial  
style import as well as assigning them to the desired elements. consider main.scss in ~/assets/sass<br />
add main.scss in nuxt.config.ts as well:<br />
      ``` 
        vuetify: {
            customVariables: ['@/assets/sass/_variables.scss',
            '@/assets/sass/app.scss'],
        }
    ```
<br />

<br /><br />

*feel free to ask your questions in the vuetify relase-migration channel on https://discordapp.com*
<br />