install:
	npm ci

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games

brain-even:
	node bin/brain-even.js


lint:
	npx eslint .

link:
	npm link
