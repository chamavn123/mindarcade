# MindArcade Cloudflare release

Public site: https://mindarcade-91a.pages.dev/
Author: Phuc Vu
GitHub release branch: codex/cloudflare-release

This release adds Chess (computer or local two-player), Blackjack (2–4 real players), and heads-up fixed-limit Texas Hold’em (2 real players). Casino chips are free and have no cash value. Chess uses chess.js 1.4.0; its BSD license is in vendor/CHESS-LICENSE.txt.

The 13-game frontend is hosted only on Cloudflare Pages. GitHub main retains the previous GitHub Pages release. Do not merge this branch into main to publish frontend updates.

The Blackjack, Poker, Tiến Lên, Caro and Tic-Tac-Toe matchmaking API remains on the free Render service at https://mindarcade-multiplayer-phuc.onrender.com. Its ALLOWED_ORIGINS includes https://mindarcade-91a.pages.dev and the previous GitHub Pages origin. Chess remains computer/local play. Casino tiles open online matchmaking by default, with optional solo practice. Poker cards and deck are private on the server, moves and payouts are authoritative, and every player must ready up before a rematch. Free chips are room-local and reset when the table ends. The Render service deploys the codex/cloudflare-release branch; it serves only the API, not the frontend.

Deploy this repository’s root static assets with Wrangler Pages, project mindarcade, production branch codex/cloudflare-release. In the local development workspace, deploy the dist directory instead. Do not deploy the server or local development files as frontend assets.

Verification: legal chess moves, checkmate, castling, en passant, promotion and undo; blackjack ace totals; poker hand rankings, ties, ace-low straights and 35 full rounds with chip conservation; existing multiplayer tests and cube/combat regressions. Browser checked desktop chess/blackjack, mobile poker, and live Cloudflare private-room creation.
