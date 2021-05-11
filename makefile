publish:
	git pull
	node script
	git add .
	git commit -m $m
	git push
	npm publish