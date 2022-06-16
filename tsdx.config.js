const postcss = require('rollup-plugin-postcss');

module.exports = {
    rollup(config) {
        config.plugins.push(
            postcss({
                inject: true,
                // extract: !!options.writeMeta,
                extract: false,
                modules: true,
                camelCase: true,
                less: true,
                autoModules: false,
            }),
        );
        return config;
    },
};
