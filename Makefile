help:
	@echo 'Makefile for Unirede-Client                                              '
	@echo '                                                                      '
	@echo 'Usage:                                                                '
	@echo '   run                     Run api in localhost:3000                  '
	@echo '   setup                   Install all dependencies to dev            '

setup:
	docker-compose build

run:
	docker-compose up

.PHONY: help, setup, run