# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!-- auto-changelog-above -->

2.1.3 / 2020-11-22
=================
  * [Deps] update `string.prototype.trimstart`; use `call-bind` instead of `es-abstract`
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape`; add `aud`
  * [actions] add "Allow Edits" workflow
  * [actions] switch Automatic Rebase workflow to `pull_request_target` event
  * [Tests] migrate tests to Github Actions
  * [Tests] run `nyc` on all tests
  * [Tests] add `implementation` test; run `es-shim-api` in postlint; use `tape` runner

2.1.2 / 2020-03-30
=================
* [Refactor] use `string.prototype.trimstart` for the implementation
* [Refactor] use `es-abstract`’s `callBind` helper instead of `function-bind` directly
* [meta] correct spec year
* [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape`, `functions-have-names`; add `safe-publish-latest`

2.1.1 / 2019-12-17
=================
  * [meta] add `funding` field
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `functions-have-names`, `tape`
  * [Tests] use shared travis-ci configs
  * [actions] add automatic rebasing / merge commit blocking

2.1.0 / 2019-09-09
=================
  * [New] add `auto` entry point
  * [Deps] update `function-bind`, `define-properties`
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `covert`, `tape`, `@es-shims/api`
  * [meta] clean up scripts
  * [meta] Only apps should have lockfiles
  * [Tests] up to `node` `v12.10`, `v11.15`, `v10.16`, `v9.11`, `v8.16`, `v7.10`, `v6.17`, `v5.10`, `v4.9`; use `nvm install-latest-npm`
  * [Tests] allow a name of `trimLeft` or `trimStart`
  * [Tests] fix tests for the mongolian vowel separator
  * [Tests] use `functions-have-names`
  * [Tests] use `npx aud` instead of `nsp` or `npm audit` with hoops
  * [Tests] remove `jscs`
  * [Tests] use pretest/posttest for linting/security

2.0.0 / 2016-02-06
=================
  * [Breaking] conform to the es-shim API
  * [Deps] update `define-properties`
  * [Dev Deps] update `tape`, `jscs`, `nsp`, `eslint`, `@ljharb/eslint-config`
  * [Tests] up to `node` `v5.5`
  * [Tests] fix npm upgrades on older nodes

1.0.1 / 2015-07-29
=================
  * Fix deps mistakenly being dev deps

1.0.0 / 2015-07-29
=================
  * v1.0.0
