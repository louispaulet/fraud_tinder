.PHONY: up kill deploy build test

PORT ?= 5173

up:
	npm run dev -- --host 127.0.0.1 --port $(PORT)

kill:
	@pids="$$(lsof -ti tcp:$(PORT))"; \
	if [ -n "$$pids" ]; then \
		kill -9 $$pids; \
	else \
		echo "No process listening on port $(PORT)."; \
	fi

deploy:
	npm run deploy

build:
	npm run build

test:
	npm test
