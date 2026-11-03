# MindArcade Cloudflare release

Public site: https://mindarcade-91a.pages.dev/
Author: Phuc Vu
GitHub release branch: codex/cloudflare-release

This release adds Chess (computer or local two-player), Blackjack (solo), and heads-up fixed-limit Texas Hold’em (bot). Casino chips are free and have no cash value. Chess uses chess.js 1.4.0; its BSD license is in vendor/CHESS-LICENSE.txt.

The 13-game frontend is hosted only on Cloudflare Pages. GitHub main retains the previous GitHub Pages release. Do not merge this branch into main to publish frontend updates.

The existing Tiến Lên, Caro and Tic-Tac-Toe matchmaking API remains on the free Render service at https://mindarcade-multiplayer-phuc.onrender.com. Its ALLOWED_ORIGINS includes https://mindarcade-91a.pages.dev and the previous GitHub Pages origin. Chess and casino games are not online matchmaking games in this release.

Deploy this repository’s root static assets with Wrangler Pages, project mindarcade, production branch codex/cloudflare-release. In the local development workspace, deploy the dist directory instead. Do not deploy the server or local development files as frontend assets.

Verification: legal chess moves, checkmate, castling, en passant, promotion and undo; blackjack ace totals; poker hand rankings, ties, ace-low straights and 35 full rounds with chip conservation; existing multiplayer tests and cube/combat regressions. Browser checked desktop chess/blackjack, mobile poker, and live Cloudflare private-room creation.
