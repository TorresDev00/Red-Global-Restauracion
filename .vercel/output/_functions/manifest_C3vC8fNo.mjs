import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_c1WxEP0d.mjs';
import { e as decodeKey } from './chunks/astro/server_CqITIgGt.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/wamp64/www/Red-Global-Restauracion/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.15.2_rollup@4.21.2_typescript@5.5.4/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BTFnp7_g.js"}],"styles":[{"type":"external","src":"/_astro/aliados.mhMq0F9e.css"},{"type":"external","src":"/_astro/index.BswZJUt7.css"},{"type":"inline","content":":root{--swiper-pagination-color: #ffffff94;--swiper-pagination-bullet-size: 8px;--swiper-pagination-bullet-inactive-color: #999999;--swiper-pagination-bullet-inactive-opacity: .5}.video-youtube[data-astro-cid-xpne4gfx]{border-radius:18px;overflow:hidden}@media (max-width: 767px){.video-youtube[data-astro-cid-xpne4gfx]{border-radius:0}}.video-wesley[data-astro-cid-xpne4gfx]{display:block;border-radius:0 0 18px 18px;overflow:hidden}@media (max-width: 767px){.video-wesley[data-astro-cid-xpne4gfx]{border-radius:0}}.img[data-astro-cid-xpne4gfx]{transition:opacity .5s ease-in-out;opacity:0;z-index:0}.img[data-astro-cid-xpne4gfx].visible{opacity:1;z-index:1}.img[data-astro-cid-xpne4gfx].hidden{opacity:0;z-index:0}\n"},{"type":"external","src":"/_astro/coordinaciones.B0a9OMnn.css"}],"routeData":{"route":"/aliados","isIndex":false,"type":"page","pattern":"^\\/aliados\\/?$","segments":[[{"content":"aliados","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/aliados.astro","pathname":"/aliados","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contacto","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contacto\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contacto.js","pathname":"/api/contacto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DIP7Xv-0.js"}],"styles":[{"type":"external","src":"/_astro/aliados.mhMq0F9e.css"},{"type":"inline","content":".input-error[data-astro-cid-rd5qy42k]{border:solid 1px!important;border-color:red!important;background-image:url(data:image/png;base64,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)!important;background-repeat:no-repeat!important;background-position:right calc(.375em + .1875rem) center!important;background-size:calc(.75em + .375rem) calc(.75em + .375rem)!important}\n"}],"routeData":{"route":"/contactos","isIndex":false,"type":"page","pattern":"^\\/contactos\\/?$","segments":[[{"content":"contactos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contactos.astro","pathname":"/contactos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BBn-gelN.js"}],"styles":[{"type":"external","src":"/_astro/aliados.mhMq0F9e.css"},{"type":"external","src":"/_astro/coordinaciones.B0a9OMnn.css"}],"routeData":{"route":"/coordinaciones","isIndex":false,"type":"page","pattern":"^\\/coordinaciones\\/?$","segments":[[{"content":"coordinaciones","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/coordinaciones.astro","pathname":"/coordinaciones","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BxidNP3r.js"}],"styles":[{"type":"external","src":"/_astro/aliados.mhMq0F9e.css"},{"type":"external","src":"/_astro/coordinaciones.B0a9OMnn.css"}],"routeData":{"route":"/sobrenosotros","isIndex":false,"type":"page","pattern":"^\\/sobreNosotros\\/?$","segments":[[{"content":"sobreNosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sobreNosotros.astro","pathname":"/sobreNosotros","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BsLt4-rd.js"}],"styles":[{"type":"external","src":"/_astro/aliados.mhMq0F9e.css"},{"type":"inline","content":".loader-container[data-astro-cid-ywefevtn]{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.spinner[data-astro-cid-ywefevtn]{font-size:28px;position:relative;display:inline-block;width:1em;height:1em}.spinner-blade[data-astro-cid-ywefevtn]{position:absolute;left:.4629em;bottom:0;width:.074em;height:.2777em;border-radius:.0555em;background-color:transparent;transform-origin:center -.2222em;animation:spinner-fade 1s infinite linear}.spinner-blade[data-astro-cid-ywefevtn]:nth-child(1){animation-delay:0s;transform:rotate(0)}.spinner-blade[data-astro-cid-ywefevtn]:nth-child(2){animation-delay:83ms;transform:rotate(30deg)}.spinner-blade[data-astro-cid-ywefevtn]:nth-child(3){animation-delay:.166s;transform:rotate(60deg)}.spinner-blade[data-astro-cid-ywefevtn]:nth-child(4){animation-delay:.249s;transform:rotate(90deg)}.spinner-blade[data-astro-cid-ywefevtn]:nth-child(5){animation-delay:.332s;transform:rotate(120deg)}.spinner-blade[data-astro-cid-ywefevtn]:nth-child(6){animation-delay:.415s;transform:rotate(150deg)}.spinner-blade[data-astro-cid-ywefevtn]:nth-child(7){animation-delay:.498s;transform:rotate(180deg)}.spinner-blade[data-astro-cid-ywefevtn]:nth-child(8){animation-delay:.581s;transform:rotate(210deg)}.spinner-blade[data-astro-cid-ywefevtn]:nth-child(9){animation-delay:.664s;transform:rotate(240deg)}.spinner-blade[data-astro-cid-ywefevtn]:nth-child(10){animation-delay:.747s;transform:rotate(270deg)}.spinner-blade[data-astro-cid-ywefevtn]:nth-child(11){animation-delay:.83s;transform:rotate(300deg)}.spinner-blade[data-astro-cid-ywefevtn]:nth-child(12){animation-delay:.913s;transform:rotate(330deg)}@keyframes spinner-fade{0%{background-color:#69717d}to{background-color:transparent}}.rotate-45[data-astro-cid-qvjntdkp]{transform:rotate(45deg)}.rotate-0[data-astro-cid-qvjntdkp]{transform:rotate(0)}.transition-bg[data-astro-cid-qvjntdkp]{transition:background-color .5s ease-in-out,background-image .5s ease-in-out}.transition-all[data-astro-cid-qvjntdkp]{transition:all .5s ease-in-out}.transition-opacity[data-astro-cid-qvjntdkp]{transition:opacity .5s ease-in-out}:root{--swiper-pagination-color: #0891b2;--swiper-pagination-bullet-size: 8px;--swiper-pagination-bullet-inactive-color: #999999;--swiper-pagination-bullet-inactive-opacity: .5}\n"},{"type":"external","src":"/_astro/index.BswZJUt7.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/wamp64/www/Red-Global-Restauracion/src/pages/aliados.astro",{"propagation":"none","containsHead":true}],["C:/wamp64/www/Red-Global-Restauracion/src/pages/contactos.astro",{"propagation":"none","containsHead":true}],["C:/wamp64/www/Red-Global-Restauracion/src/pages/coordinaciones.astro",{"propagation":"none","containsHead":true}],["C:/wamp64/www/Red-Global-Restauracion/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/wamp64/www/Red-Global-Restauracion/src/pages/sobreNosotros.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/api/contacto@_@js":"pages/api/contacto.astro.mjs","\u0000@astro-page:src/pages/contactos@_@astro":"pages/contactos.astro.mjs","\u0000@astro-page:src/pages/sobreNosotros@_@astro":"pages/sobrenosotros.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.15.2_rollup@4.21.2_typescript@5.5.4/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/coordinaciones@_@astro":"pages/coordinaciones.astro.mjs","\u0000@astro-page:src/pages/aliados@_@astro":"pages/aliados.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-manifest":"manifest_C3vC8fNo.mjs","/astro/hoisted.js?q=4":"_astro/hoisted.BsLt4-rd.js","/astro/hoisted.js?q=3":"_astro/hoisted.BBn-gelN.js","/astro/hoisted.js?q=2":"_astro/hoisted.BxidNP3r.js","/astro/hoisted.js?q=0":"_astro/hoisted.BTFnp7_g.js","/astro/hoisted.js?q=1":"_astro/hoisted.DIP7Xv-0.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/logoLight.CRL6fJvs.webp","/_astro/logo.BKI9pW8B.webp","/_astro/aliados.mhMq0F9e.css","/_astro/coordinaciones.B0a9OMnn.css","/_astro/index.BswZJUt7.css","/iconoLogo.ico","/iconoLogo.png","/logo.webp","/logoLight.webp","/logoSectionAnimate.svg","/Obispo-Carlos-Pirona-y-Maria.webp","/portada-telefono.webp","/portada.webp","/telefono.svg","/Triangulo_exclamacion.png","/video.mp4","/Aliados/CentroMedico01.webp","/Aliados/CentroMedico02.webp","/Aliados/CentroMedico03.webp","/Aliados/CentroMedico04.webp","/Aliados/CentroMedico05.webp","/Aliados/CentroMedico06.webp","/Aliados/Eslogan.svg","/Aliados/Semwesven-01.webp","/Aliados/Semwesven-02.webp","/Aliados/Semwesven-03.webp","/Aliados/telefonoAnimada.webp","/Aliados/venezuelaNow.webp","/Aliados/zonaCrecer.webp","/Aliados/zonaCrecerAmpliada.webp","/Aliados/zonaCrecerTelefono.webp","/Aliados/ZonaCrecer_1.webp","/Aliados/ZonaCrecer_2.webp","/Aliados/ZonaCrecer_3.webp","/Aliados/ZonaCrecer_4.webp","/Aliados/ZonaCrecer_5.webp","/Coordinaciones/Ayuda-Social.webp","/Coordinaciones/Discipulado.webp","/Coordinaciones/Iglesia.webp","/Coordinaciones/Liderazgo-juvenil.webp","/Coordinaciones/Marketing.webp","/Coordinaciones/Ministerio-Infantil.webp","/Coordinaciones/Pastoreo-de-pastores.webp","/fonts/BebasNeue-Bold.woff2","/fonts/levenim-mt-2.woff2","/Fundamentos/Adoro.webp","/Fundamentos/Conecto.webp","/Fundamentos/Discipulo.webp","/Fundamentos/Evangelizo.webp","/Fundamentos/Sirvo.webp","/LogosAliados/ILI.svg","/LogosAliados/Semwesven.svg","/LogosAliados/SemwesvenBlack.svg","/LogosAliados/VenezuelaNow.svg","/LogosAliados/Wesley.svg","/LogosAliados/ZonaCrecer.svg","/nosotros/Fundamento.webp","/nosotros/Global.webp","/nosotros/Iglesia.webp","/nosotros/Liderazgo.webp","/nosotros/Mentoria.webp","/nosotros/Unidad.webp","/_astro/aos.CJF53SJF.js","/_astro/autoplay.qGssRRZi.js","/_astro/hoisted.BBn-gelN.js","/_astro/hoisted.BsLt4-rd.js","/_astro/hoisted.BTFnp7_g.js","/_astro/hoisted.BxidNP3r.js","/_astro/hoisted.DIP7Xv-0.js","/_astro/themeToggle.DRKiWlwc.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"ZPyuo7ujYhTEoM08duxEsBUbsOSa0vz41cdYBpjgMk4=","experimentalEnvGetSecretEnabled":false});

export { manifest };
