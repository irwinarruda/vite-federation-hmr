# Vite Federation HMR

## Step By Step

1. Open a new terminal window and run:

```bash
$ cd ./counter
$ pnpm install
$ pnpm start
```

2. Open another terminal window and run:

```bash
$ cd ./host
$ pnpm install
$ pnpm dev
```

3. Open your browser and go to `http://localhost:3000/`;
4. Go to the `./host/src/NotReloadedWhenChanged.jsx` and try to change some text;
5. You will see that the changes are not reflected in the browser (HMR is not working);
6. If any file other than `NotReloadedWhenChanged.jsx` hot reloads, then everything starts working fine;
7. If everything is working, restart the server with `pnpm dev` and clean up browser cache.
