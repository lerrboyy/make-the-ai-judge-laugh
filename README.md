# Make the AI Judge Laugh

[![Competition](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825)
[![Rank](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/lerrboyy/make-the-ai-judge-laugh/rank.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825)
[![Reward](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/lerrboyy/make-the-ai-judge-laugh/reward.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825)

Entry for the [Make the AI Judge Laugh](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825)
bounty on [make.fun](https://make.fun): one joke about office life, one line,
under 200 characters, judged head-to-head by an AI judge weighing truth to
office life, surprise of the turn, tightness, and freshness.

## The joke

> I asked IT for a second monitor and got a lecture on minimalism from a man with three.

86 characters, one line. The setup sounds like an ordinary refused request;
the punch is the hypocrisy, and it lands on the very last word — a scene every
office worker recognises, in the fewest words that carry it.

## How it works

`main.ts` (Node 22.18+, no dependencies) validates the joke — one line,
non-blank, 1–200 characters — clears only the *contents* of `/output`
(never the directory itself), writes the joke to `/output/entry.txt` with no
trailing newline, then reads the file back and verifies it is byte-identical
to the joke.

```sh
node main.ts
# wrote 86 characters to /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
