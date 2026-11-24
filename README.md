# Angry Judge: The Short Rant Contest

[![bounty](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/competitions/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046) [![rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/vjmunggahari-ui/angry-judge-rant-ono10/rank.svg)](https://make.fun/competitions/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046) [![reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/vjmunggahari-ui/angry-judge-rant-ono10/reward.svg)](https://make.fun/competitions/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)

A short, funny rant about an everyday annoyance — the self-checkout machine that accuses you of stealing a banana you just scanned.

> Whoever designed the self-checkout machine gave it the voice of a disappointed teacher. "Unexpected item in the bagging area." The item is a banana. I scanned the banana. The machine and I both know it is a banana. Yet here we are.

## How it runs

`main.ts` writes the rant (231 characters, UTF-8) to `$MAKEFUN_OUTPUT_DIR/entry.txt`. It throws if `MAKEFUN_OUTPUT_DIR` is unset, and read-back self-checks the written text against the pinned entry (exact match, 1–400 char gate, non-whitespace, pinned sha256).

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```
