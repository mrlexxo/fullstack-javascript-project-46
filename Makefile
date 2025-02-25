install: #dependencies installation
	npm ci
lint: #launch linter
	npx eslint .
gendiff: #launch gendiff
	node bin/gendiff.js