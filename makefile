publish:
	git pull
	node script.js
	git add .
	git commit -m $m
	git push
	npm publish