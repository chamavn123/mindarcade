# MindArcade — Created by Phuc Vu

[Play MindArcade](https://chamavn123.github.io/mindarcade/)

10 games: Tiến Lên Miền Nam, Cờ Caro, 2048, Minesweeper, Cube Lab 3D, Memory Match, Sliding 15, Pattern Pulse, Tic-Tac-Toe, and Spirit Duel.

Tiến Lên practice has three bots. Caro supports local two-player play. Online matchmaking and private rooms for Tiến Lên, Caro, and Tic-Tac-Toe require the multiplayer server. The frontend clearly disables online actions until its server URL is configured.

[Deploy the free multiplayer server](https://dashboard.render.com/blueprint/new?repo=https://github.com/chamavn123/mindarcade)

See [MULTIPLAYER.md](MULTIPLAYER.md) for deployment, verification, house rules, and server limitations. Run `node server/test.cjs` for game-rule and real HTTP multiplayer tests. Run `node check-games.cjs` for cube and combat checks.

GitHub Pages: main branch, root folder. Static assets have versioned URLs to avoid stale updates. No build required for the frontend.
