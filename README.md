# ENAPSO&#x26A1;boost - Hierarchical Enterprise Configuration Management

## Intention

ENAPSO Config helps you easily manage your application configuration in enterprise environments.

It enables you

-   to hierachically organize your configuration data to inherit company or department down to user or specific machine level
-   to easily switch between development, stage or production settings
-   to use defaults and optionally expose information log in case
-   to expose warnings or errors in case an application setting is missing
-   to easily use and maintain local node.js packages without the need to embed them as submodules or even deploy them to npm
-   to calculate compound configuration settings based on single or other compound settings
-   to version control your configuration data opposed to environment variables, according to the version specific configuration requirements of your application
-   to easily track missing configurations in your specific configuration file

The `.env` file in the project root folder just requires a single reference to the configuration file in the form:

```
ENAPSO_CONFIG_FILE = [path_to_config_file]
```

## Example

```
ENAPSO_CONFIG_FILE = /git/enapso-config/config/extjs_assistant_alex_imac.js
```

## Installation

Just import the `@innotrade/enapso-config` package as follows:

```
npm i @innotrade/enapso-config --save
```

## Usage

Just require the `@innotrade/enapso-config` package as follows:

```javascript
const { config } = new require('@innotrade/enapso-config');
```

require('@innotrade/enapso-config');

and use it where ever you need, with fields or as entire object:

```javascript
console.log(config.getApplicationString());
console.log(config.getCopyrightString());

const instance = new mynamespace.MyClass(
    {
        appName: config.generator.appName,
        modelName: 'hardcoded'
    },
    config
);
```
