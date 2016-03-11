npm_bin= $$(npm bin)

all: test
install:
	npm install
lint:
	@${npm_bin}/eslint index
server: install
	@${npm_bin}/startserver
.PHONY: test
