import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BmNalCr5.mjs';
import { manifest } from './manifest_C3vC8fNo.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/aliados.astro.mjs');
const _page2 = () => import('./pages/api/contacto.astro.mjs');
const _page3 = () => import('./pages/contactos.astro.mjs');
const _page4 = () => import('./pages/coordinaciones.astro.mjs');
const _page5 = () => import('./pages/sobrenosotros.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.15.2_rollup@4.21.2_typescript@5.5.4/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/aliados.astro", _page1],
    ["src/pages/api/contacto.js", _page2],
    ["src/pages/contactos.astro", _page3],
    ["src/pages/coordinaciones.astro", _page4],
    ["src/pages/sobreNosotros.astro", _page5],
    ["src/pages/index.astro", _page6]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
