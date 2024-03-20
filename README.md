# Equipment Manager Frontend

## React + TypeScript + Vite

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Set environment

Create .env configuration file for this project.

Available environments:

- .env.**local**
- .env.**staging**
- .env.**production**

### Environment properties

```
PUBLIC_URL=""                           # eg. "/equipment-manager"
                                        # relative app location in server where deployed  
                                           
#HOST VARIABLES
VITE_APP_HOST_CORE="PLACEHOLDER"       # eg. "http://localhost:port"
VITE_APP_HOST_IDP="PLACEHOLDER"        # eg. "https://your.keycloak.domain.com/keycloak/auth"
VITE_APP_HOST_APPSHUB="PLACEHOLDER"    # eg. "https://wanted.appshub.instance.com"

#KEYCLOAK REALM CONFIGURATION
VITE_APP_REALM="PLACEHOLDER"           # eg. "example-app-realm"
VITE_APP_CLIENT_ID="PLACEHOLDER"       # eg. "example-app-client-id"

#MOCKED ENVIRONMENT
VITE_APP_MOCKED="false"                 # eg. true | false (or empty string eg. "")
VITE_APP_MOCKED_USER_ROLE               # available roles are ADMIN, MANAGER and GUEST
```

## Run

```bash
yarn run dev
```


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list