module.exports = (api, options, rootOptions) => {
    api.extendPackage({
        dependencies: {
            "axios": "^0.18.0",
            "lodash": "^4.17.10",
            "keymirror": "^0.1.1"
          },
          devDependencies: {
            "mockjs": "^1.0.1-beta3"
          }
        // 'scripts': {
        //     'build:dev': 'vue-cli-service build --mode development',
        //     'build:prod': 'vue-cli-service build --mode production',
        //     'test:unit': 'cross-env NODE_ENV=test vue-cli-service test:unit',
        //     'test:e2e': 'cross-env NODE_ENV=test vue-cli-service test:e2e',
        //     'lint': 'vue-cli-service lint src/**/*.{js,vue} tests/**/*.js --fix'
        // },
        // 'config': {
        //     'commitizen': {
        //         'path': 'node_modules/cz-conventional-changelog'
        //     }
        // },
        // 'gitHooks': {
        //     'pre-commit': 'lint-staged',
        //     'commit-msg': 'commitlint -e $GIT_PARAMS'
        // },
        // 'lint-staged': {
        //     'src/**/*.{js,jsx,vue}': [
        //         'vue-cli-service lint --fix',
        //         'git add'
        //     ],
        //     'tests/**/*.js': [
        //         'vue-cli-service lint --fix',
        //         'git add'
        //     ]
        // }
    })

    api.render('./template')
}
