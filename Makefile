install: install-deps

run:
	npx babel-node 'src/bin/brain-games.js' 10
	npx babel-node 'src/bin/brain-even.js' 10
	npx babel-node 'src/bin/brain-calc.js' 10

install-deps:
	npm install

build:
	rm -rf dist
	npm run build

test:
	npm test

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