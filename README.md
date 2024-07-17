# Redux VS Zustand in Next.js 2024

* Let's compare Redux Toolkit and Zustand in Next.js 14 using basic counter as of July 2024.
* I tried to create very simple counter based on (i.e. copy paste from) each official docs.
* please refer also npm trends
  - https://npmtrends.com/jotai-vs-mobx-vs-react-redux-vs-recoil-vs-redux-vs-zustand

## Getting Started

```bash
npm ci
npm run dev

# with port number
npm run dev -- -p 3030
```

Open [http://localhost:3000](http://localhost:3000)

## Comparison

|                   | Redux | Zustand | Winner |
| ---               | ---   | ---     | ---     |
| setup package     | official doc is not clear what's required.<br>you will need `react-redux`<br> as well as `@reduxjs/toolkit` | just `zustand` | Zustand |
| coding experience | official doc is not so friendly<br> so you will need to google a lot | official doc provides clear info | Zustand |
| readability       | still mysterious boilerplate required<br> even in Redux Toolkit<br>cf. [`src/lib/hooks.ts`](./src/lib/hooks.ts) | you just need one interface<br> and useStore custom hook | Zustand |
| number of lines   | 38 lines<br>cf. [`counterSlice.ts`](./src/lib/features/counter/counterSlice.ts) | 7 lines<br>cf. [`useStore.tsx`](./src/zustand-lib/useStore.tsx) | Zustand |
| impression        | always come with `dispatch` looks not DRY nowadays<br>need to wrap children by [`<StoreProvider>`](./src/app/StoreProvider.tsx)<br> in root `layout.tsx` almost like `Context` | no `Provider` pyramids required | Zustand |

* Redux
  - code: [`src/lib`](./src/lib/)
  - http://localhost:3000/redux-counter
* Zustand
  - code: [`src/zustand-lib`](./src/zustand-lib/)
  - http://localhost:3000/zustand-counter
* Note: both will need `"use client";` since it's about the state of client side.

## Conclusion

* Overall, Zustand is much simpler to create basic stuff like counter.
* if it's more than counter, you may need to consider other factors.

## Setup Notes

### Next.js

* Next.js
  - https://nextjs.org/docs/getting-started/installation
  - `npx create-next-app@latest`

### Redux

* Redux Toolkit
  - https://redux-toolkit.js.org/introduction/getting-started
    - `npx create-next-app --example with-redux my-app` is not recommended
    - it will create old style app.
  - `npm install @reduxjs/toolkit`

* React Redux
  - https://react-redux.js.org/introduction/getting-started
  - `npm install react-redux`

* Redux Next.js
  - https://redux-toolkit.js.org/usage/nextjs
  - official doc suggest to put Redux stuff in `src/lib`

### Zustand

* Zustand
  - https://github.com/pmndrs/zustand
  - https://zustand-demo.pmnd.rs/
  - `npm install zustand`

### NextUI

* https://nextui.org/docs/guide/installation
  - `npm install @nextui-org/react framer-motion`

### Tailwind CSS Typography plugin

* https://github.com/tailwindlabs/tailwindcss-typography
  - `npm install -D @tailwindcss/typography`

## Reference

Special thanks to these blogs to create Redux counters.

* https://qiita.com/ekzemplaro/items/bb6af7a3c758e5455105
* https://zako-lab929.hatenablog.com/entry/20240308/1709899974
* https://zenn.dev/matsutoba/articles/a9695787d616bf
