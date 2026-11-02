# MindArcade multiplayer

Created by Phuc Vu. The frontend is hosted on GitHub Pages; a single Node.js server handles live Tiến Lên, Cờ Caro, and Tic-Tac-Toe.

## Deploy the free server

[Deploy to Render](https://dashboard.render.com/blueprint/new?repo=https://github.com/chamavn123/mindarcade)

1. Connect GitHub in Render and select the intended workspace.
2. Review the Blueprint: one **free** Node web service, no database or paid resources.
3. Deploy and wait for **Live**. Its build command runs multiplayer integration tests.
4. Copy the exact HTTPS service URL from Render. Verify `/health` returns `{"ok":true,"version":1}`.
5. Set `window.MINDARCADE_API` in `online-config.js` to that verified origin, without a trailing slash. Commit the change to publish it on GitHub Pages.

The checked-in config deliberately starts empty until a real backend URL is verified. The online controls explain this and remain disabled while hosting is unconfigured.

## Operation

- `node server/server.cjs` listens on `0.0.0.0` and `PORT` (default 10000).
- No npm dependencies or credentials are required. `node server/test.cjs` runs the rule and HTTP integration tests.
- Allowed frontend origin defaults to `https://chamavn123.github.io`. For a new frontend domain, set `ALLOWED_ORIGINS` to a comma-separated list of exact origins, without trailing slashes.
- Public matchmaking pairs two guests in the same game queue. Tiến Lên private rooms allow 2–4 players; the host starts the match. Caro and Tic-Tac-Toe use two players.
- Server-generated random guest tokens authenticate requests. Names are public and are not verified identities. Hands are dealt with cryptographic randomness and only the caller's hand is returned. All moves and turn versions are validated server-side.
- State sync uses HTTP polling every 1.5 seconds. Turn deadline: 45 seconds. Tiến Lên timeouts pass or lead the lowest card; grid-game timeouts lose. A client absent for 65 seconds ends its match. Refreshing can resume a session while its token remains valid; explicitly closing the game leaves the room.
- Sessions and matches live in memory on a **single instance**. Restarts/deployments lose active matches, and free hosting may sleep. No persistent accounts, ranked ladder, or match history. Do not scale instances without a shared state store.
- Rooms expire after inactivity, and the service bounds rooms, sessions, body sizes, and request rates. This is a casual first release, not a high-traffic competitive platform.
- Tiến Lên uses the southern casual house rules displayed in the table. First player out wins; no money, scoring penalties, or automatic-win hands. Caro uses five-or-more in a row, including blocked ends.

## Verification before declaring online play live

Open the frontend in two separate browsers/devices, enter different guest names, select the same game and Find match. Confirm both see the same room and moves. Also test a private room invite, hidden hands, invalid turns, cancellation, leave, and reconnect. HTTP integration tests cover these server paths locally, but they do not replace real-device UI testing.
