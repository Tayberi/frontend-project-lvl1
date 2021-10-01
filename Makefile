install:
	npm ci

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

lint:
	npx eslint .

link:
	npm link
