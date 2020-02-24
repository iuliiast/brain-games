install: install-deps

install-deps:
	npm install

build:
	rm -rf dist
	npm run build

lint:
	npx eslint .

publish:
	npm publish --dry-run

.PHONY: test

start:
	npx babel-node src/bin/brain-games.js

brain-even:
	npx babel-node src/bin/brain-even.js

brain-calc:
	npx babel-node src/bin/brain-calc.js

brain-gcd:
	npx babel-node src/bin/brain-gcd.js

brain-progression:
	npx babel-node src/bin/brain-progression.js

brain-prime:
	npx babel-node src/bin/brain-prime.js