module.exports = (api, options, rootOptions) => {
    api.extendPackage({
        'dependencies': {
            'core-js': '^3.6.5',
            'vue': '^3.0.0',
            'vue-class-component': '^8.0.0-0',
            'vue-router': '^4.0.0-0',
            'vuex': '^4.0.0-0'
        },
        'devDependencies': {
            '@typescript-eslint/eslint-plugin': '^4.18.0',
            '@typescript-eslint/parser': '^4.18.0',
            '@vue/cli-plugin-babel': '~4.5.15',
            '@vue/cli-plugin-eslint': '~4.5.15',
            '@vue/cli-plugin-router': '~4.5.15',
            '@vue/cli-plugin-typescript': '~4.5.15',
            '@vue/cli-plugin-vuex': '~4.5.15',
            '@vue/cli-service': '~4.5.15',
            '@vue/compiler-sfc': '^3.0.0',
            '@vue/eslint-config-prettier': '^6.0.0',
            '@vue/eslint-config-typescript': '^7.0.0',
            'eslint': '^6.7.2',
            'eslint-plugin-prettier': '^3.3.1',
            'eslint-plugin-vue': '^7.0.0',
            'less': '^3.0.4',
            'less-loader': '^5.0.0',
            'prettier': '^2.2.1',
            'typescript': '~4.1.5'
        },
        'scripts': {
            'serve': 'vue-cli-service serve',
            'build': 'vue-cli-service build',
            'lint': 'vue-cli-service lint'
        }
    })

    api.render('./template')
}
