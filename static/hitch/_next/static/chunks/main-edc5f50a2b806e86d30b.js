(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[179], {
    60400: function() {
        "trimStart"in String.prototype || (String.prototype.trimStart = String.prototype.trimLeft),
        "trimEnd"in String.prototype || (String.prototype.trimEnd = String.prototype.trimRight),
        "description"in Symbol.prototype || Object.defineProperty(Symbol.prototype, "description", {
            configurable: !0,
            get: function() {
                var e = /\((.*)\)/.exec(this.toString());
                return e ? e[1] : void 0
            }
        }),
        Array.prototype.flat || (Array.prototype.flat = function(e, t) {
            return t = this.concat.apply([], this),
            e > 1 && t.some(Array.isArray) ? t.flat(e - 1) : t
        }
        ,
        Array.prototype.flatMap = function(e, t) {
            return this.map(e, t).flat()
        }
        ),
        Promise.prototype.finally || (Promise.prototype.finally = function(e) {
            if ("function" != typeof e)
                return this.then(e, e);
            var t = this.constructor || Promise;
            return this.then((function(r) {
                return t.resolve(e()).then((function() {
                    return r
                }
                ))
            }
            ), (function(r) {
                return t.resolve(e()).then((function() {
                    throw r
                }
                ))
            }
            ))
        }
        )
    },
    92771: function(e, t) {
        "use strict";
        t.__esModule = !0,
        t.default = function() {
            var e = null;
            return {
                mountedInstances: new Set,
                updateHead: function(t) {
                    var r = e = Promise.resolve().then((function() {
                        if (r === e) {
                            e = null;
                            var a = {};
                            t.forEach((function(e) {
                                var t = a[e.type] || [];
                                t.push(e),
                                a[e.type] = t
                            }
                            ));
                            var o = a.title ? a.title[0] : null
                              , i = "";
                            if (o) {
                                var u = o.props.children;
                                i = "string" === typeof u ? u : Array.isArray(u) ? u.join("") : ""
                            }
                            i !== document.title && (document.title = i),
                            ["meta", "base", "link", "style", "script"].forEach((function(e) {
                                !function(e, t) {
                                    var r = document.getElementsByTagName("head")[0]
                                      , a = r.querySelector("meta[name=next-head-count]");
                                    0;
                                    for (var o = Number(a.content), i = [], u = 0, c = a.previousElementSibling; u < o; u++,
                                    c = c.previousElementSibling)
                                        c.tagName.toLowerCase() === e && i.push(c);
                                    var s = t.map(n).filter((function(e) {
                                        for (var t = 0, r = i.length; t < r; t++) {
                                            if (i[t].isEqualNode(e))
                                                return i.splice(t, 1),
                                                !1
                                        }
                                        return !0
                                    }
                                    ));
                                    i.forEach((function(e) {
                                        return e.parentNode.removeChild(e)
                                    }
                                    )),
                                    s.forEach((function(e) {
                                        return r.insertBefore(e, a)
                                    }
                                    )),
                                    a.content = (o - i.length + s.length).toString()
                                }(e, a[e] || [])
                            }
                            ))
                        }
                    }
                    ))
                }
            }
        }
        ,
        t.DOMAttributeNames = void 0;
        var r = {
            acceptCharset: "accept-charset",
            className: "class",
            htmlFor: "for",
            httpEquiv: "http-equiv",
            noModule: "noModule"
        };
        function n(e) {
            var t = e.type
              , n = e.props
              , a = document.createElement(t);
            for (var o in n)
                if (n.hasOwnProperty(o) && "children" !== o && "dangerouslySetInnerHTML" !== o && void 0 !== n[o]) {
                    var i = r[o] || o.toLowerCase();
                    "script" !== t || "async" !== i && "defer" !== i && "noModule" !== i ? a.setAttribute(i, n[o]) : a[i] = !!n[o]
                }
            var u = n.children
              , c = n.dangerouslySetInnerHTML;
            return c ? a.innerHTML = c.__html || "" : u && (a.textContent = "string" === typeof u ? u : Array.isArray(u) ? u.join("") : ""),
            a
        }
        t.DOMAttributeNames = r
    },
    7403: function(e, t, r) {
        "use strict";
        var n = r(809)
          , a = r(38561)
          , o = r(2553)
          , i = r(62012)
          , u = r(9807)
          , c = r(27690)
          , s = r(99828)
          , l = r(53848);
        function f(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = s(e);
                if (t) {
                    var a = s(this).constructor;
                    r = Reflect.construct(n, arguments, a)
                } else
                    r = n.apply(this, arguments);
                return c(this, r)
            }
        }
        var p = r(69448)
          , d = r(62426);
        t.__esModule = !0,
        t.render = oe,
        t.renderError = ue,
        t.default = t.emitter = t.router = t.version = void 0;
        var m = d(r(9566));
        d(r(69448));
        r(60400);
        var h = d(r(67294))
          , v = d(r(73935))
          , y = r(74287)
          , g = d(r(7332))
          , S = r(61642)
          , b = r(11689)
          , E = r(93288)
          , w = p(r(74915))
          , _ = p(r(79186))
          , x = r(13937)
          , T = d(r(92771))
          , P = d(r(27365))
          , A = d(r(74829))
          , k = r(72441)
          , C = JSON.parse(document.getElementById("__NEXT_DATA__").textContent);
        window.__NEXT_DATA__ = C;
        t.version = "10.0.9";
        var N = function(e) {
            return [].slice.call(e)
        }
          , L = C.props
          , R = C.err
          , M = C.page
          , F = C.query
          , D = C.buildId
          , I = C.assetPrefix
          , B = C.runtimeConfig
          , j = C.dynamicIds
          , O = C.isFallback
          , q = C.locale
          , H = C.locales
          , U = C.domainLocales
          , X = C.isPreview
          , G = C.defaultLocale
          , V = I || "";
        r.p = "".concat(V, "/_next/"),
        _.setConfig({
            serverRuntimeConfig: {},
            publicRuntimeConfig: B || {}
        });
        var J = (0,
        x.getURL)();
        (0,
        b.hasBasePath)(J) && (J = (0,
        b.delBasePath)(J));
        var W = new P.default(D,V)
          , Y = function(e) {
            var t = l(e, 2)
              , r = t[0]
              , n = t[1];
            return W.routeLoader.onEntrypoint(r, n)
        };
        window.__NEXT_P && window.__NEXT_P.map((function(e) {
            return setTimeout((function() {
                return Y(e)
            }
            ), 0)
        }
        )),
        window.__NEXT_P = [],
        window.__NEXT_P.push = Y;
        var Q, $, z, K, Z = (0,
        T.default)(), ee = document.getElementById("__next");
        t.router = $;
        var te, re = function(e) {
            u(r, e);
            var t = f(r);
            function r() {
                return o(this, r),
                t.apply(this, arguments)
            }
            return i(r, [{
                key: "componentDidCatch",
                value: function(e, t) {
                    this.props.fn(e, t)
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.scrollToHash(),
                    $.isSsr && (O || C.nextExport && ((0,
                    E.isDynamicRoute)($.pathname) || location.search) || L && L.__N_SSG && location.search) && $.replace($.pathname + "?" + String(w.assign(w.urlQueryToSearchParams($.query), new URLSearchParams(location.search))), J, {
                        _h: 1,
                        shallow: !O
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.scrollToHash()
                }
            }, {
                key: "scrollToHash",
                value: function() {
                    var e = location.hash;
                    if (e = e && e.substring(1)) {
                        var t = document.getElementById(e);
                        t && setTimeout((function() {
                            return t.scrollIntoView()
                        }
                        ), 0)
                    }
                }
            }, {
                key: "render",
                value: function() {
                    return this.props.children
                }
            }]),
            r
        }(h.default.Component), ne = (0,
        g.default)();
        t.emitter = ne;
        var ae = function() {
            var e = a(n.mark((function e() {
                var r, a, o, i, u, c, s = arguments;
                return n.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return s.length > 0 && void 0 !== s[0] ? s[0] : {},
                            e.next = 4,
                            W.routeLoader.whenEntrypoint("/_app");
                        case 4:
                            if (!("error"in (r = e.sent))) {
                                e.next = 7;
                                break
                            }
                            throw r.error;
                        case 7:
                            a = r.component,
                            o = r.exports,
                            z = a,
                            o && o.reportWebVitals && (K = function(e) {
                                var t, r = e.id, n = e.name, a = e.startTime, i = e.value, u = e.duration, c = e.entryType, s = e.entries, l = "".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12);
                                s && s.length && (t = s[0].startTime),
                                o.reportWebVitals({
                                    id: r || l,
                                    name: n,
                                    startTime: a || t,
                                    value: null == i ? u : i,
                                    label: "mark" === c || "measure" === c ? "custom" : "web-vital"
                                })
                            }
                            ),
                            i = R,
                            e.prev = 11,
                            e.next = 16;
                            break;
                        case 16:
                            return e.next = 18,
                            W.routeLoader.whenEntrypoint(M);
                        case 18:
                            e.t0 = e.sent;
                        case 19:
                            if (!("error"in (u = e.t0))) {
                                e.next = 22;
                                break
                            }
                            throw u.error;
                        case 22:
                            te = u.component,
                            e.next = 27;
                            break;
                        case 27:
                            e.next = 32;
                            break;
                        case 29:
                            e.prev = 29,
                            e.t1 = e.catch(11),
                            i = e.t1;
                        case 32:
                            if (!window.__NEXT_PRELOADREADY) {
                                e.next = 36;
                                break
                            }
                            return e.next = 36,
                            window.__NEXT_PRELOADREADY(j);
                        case 36:
                            return t.router = $ = (0,
                            k.createRouter)(M, F, J, {
                                initialProps: L,
                                pageLoader: W,
                                App: z,
                                Component: te,
                                wrapApp: me,
                                err: i,
                                isFallback: Boolean(O),
                                subscription: function(e, t, r) {
                                    return oe(Object.assign({}, e, {
                                        App: t,
                                        scroll: r
                                    }))
                                },
                                locale: q,
                                locales: H,
                                defaultLocale: G,
                                domainLocales: U,
                                isPreview: X
                            }),
                            oe(c = {
                                App: z,
                                initial: !0,
                                Component: te,
                                props: L,
                                err: i
                            }),
                            e.abrupt("return", ne);
                        case 44:
                            return e.abrupt("return", {
                                emitter: ne,
                                render: oe,
                                renderCtx: c
                            });
                        case 45:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[11, 29]])
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }();
        function oe(e) {
            return ie.apply(this, arguments)
        }
        function ie() {
            return (ie = a(n.mark((function e(t) {
                return n.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!t.err) {
                                e.next = 4;
                                break
                            }
                            return e.next = 3,
                            ue(t);
                        case 3:
                            return e.abrupt("return");
                        case 4:
                            return e.prev = 4,
                            e.next = 7,
                            he(t);
                        case 7:
                            e.next = 16;
                            break;
                        case 9:
                            if (e.prev = 9,
                            e.t0 = e.catch(4),
                            !e.t0.cancelled) {
                                e.next = 13;
                                break
                            }
                            throw e.t0;
                        case 13:
                            return e.next = 16,
                            ue((0,
                            m.default)({}, t, {
                                err: e.t0
                            }));
                        case 16:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[4, 9]])
            }
            )))).apply(this, arguments)
        }
        function ue(e) {
            var t = e.App
              , r = e.err;
            return console.error(r),
            W.loadPage("/_error").then((function(n) {
                var a = n.page
                  , o = n.styleSheets
                  , i = me(t)
                  , u = {
                    Component: a,
                    AppTree: i,
                    router: $,
                    ctx: {
                        err: r,
                        pathname: M,
                        query: F,
                        asPath: J,
                        AppTree: i
                    }
                };
                return Promise.resolve(e.props ? e.props : (0,
                x.loadGetInitialProps)(t, u)).then((function(t) {
                    return he((0,
                    m.default)({}, e, {
                        err: r,
                        Component: a,
                        styleSheets: o,
                        props: t
                    }))
                }
                ))
            }
            ))
        }
        t.default = ae;
        var ce = "function" === typeof v.default.hydrate;
        function se() {
            x.ST && (performance.mark("afterHydrate"),
            performance.measure("Next.js-before-hydration", "navigationStart", "beforeRender"),
            performance.measure("Next.js-hydration", "beforeRender", "afterHydrate"),
            K && performance.getEntriesByName("Next.js-hydration").forEach(K),
            fe())
        }
        function le() {
            if (x.ST) {
                performance.mark("afterRender");
                var e = performance.getEntriesByName("routeChange", "mark");
                e.length && (performance.measure("Next.js-route-change-to-render", e[0].name, "beforeRender"),
                performance.measure("Next.js-render", "beforeRender", "afterRender"),
                K && (performance.getEntriesByName("Next.js-render").forEach(K),
                performance.getEntriesByName("Next.js-route-change-to-render").forEach(K)),
                fe(),
                ["Next.js-route-change-to-render", "Next.js-render"].forEach((function(e) {
                    return performance.clearMeasures(e)
                }
                )))
            }
        }
        function fe() {
            ["beforeRender", "afterHydrate", "afterRender", "routeChange"].forEach((function(e) {
                return performance.clearMarks(e)
            }
            ))
        }
        function pe(e) {
            var t = e.children;
            return h.default.createElement(re, {
                fn: function(e) {
                    return ue({
                        App: z,
                        err: e
                    }).catch((function(e) {
                        return console.error("Error rendering page: ", e)
                    }
                    ))
                }
            }, h.default.createElement(S.RouterContext.Provider, {
                value: (0,
                k.makePublicRouterInstance)($)
            }, h.default.createElement(y.HeadManagerContext.Provider, {
                value: Z
            }, t)))
        }
        var de, me = function(e) {
            return function(t) {
                var r = (0,
                m.default)({}, t, {
                    Component: te,
                    err: R,
                    router: $
                });
                return h.default.createElement(pe, null, h.default.createElement(e, r))
            }
        };
        function he(e) {
            var t = e.App
              , r = e.Component
              , n = e.props
              , a = e.err
              , o = "initial"in e ? void 0 : e.styleSheets;
            r = r || de.Component,
            n = n || de.props;
            var i = (0,
            m.default)({}, n, {
                Component: r,
                err: a,
                router: $
            });
            de = i;
            var u, c = !1, s = new Promise((function(e, t) {
                Q && Q(),
                u = function() {
                    Q = null,
                    e()
                }
                ,
                Q = function() {
                    c = !0,
                    Q = null;
                    var e = new Error("Cancel rendering route");
                    e.cancelled = !0,
                    t(e)
                }
            }
            ));
            var l, f, p = h.default.createElement(ve, {
                callback: function() {
                    u()
                }
            }, h.default.createElement(ye, {
                callback: function() {
                    if (o && !c) {
                        for (var t = new Set(o.map((function(e) {
                            return e.href
                        }
                        ))), r = N(document.querySelectorAll("style[data-n-href]")), n = r.map((function(e) {
                            return e.getAttribute("data-n-href")
                        }
                        )), a = 0; a < n.length; ++a)
                            t.has(n[a]) ? r[a].removeAttribute("media") : r[a].setAttribute("media", "x");
                        var i = document.querySelector("noscript[data-n-css]");
                        i && o.forEach((function(e) {
                            var t = e.href
                              , r = document.querySelector('style[data-n-href="'.concat(t, '"]'));
                            r && (i.parentNode.insertBefore(r, i.nextSibling),
                            i = r)
                        }
                        )),
                        N(document.querySelectorAll("link[data-n-p]")).forEach((function(e) {
                            e.parentNode.removeChild(e)
                        }
                        )),
                        getComputedStyle(document.body, "height")
                    }
                    e.scroll && window.scrollTo(e.scroll.x, e.scroll.y)
                }
            }), h.default.createElement(pe, null, h.default.createElement(t, i)));
            return function() {
                if (!o)
                    return !1;
                var e = N(document.querySelectorAll("style[data-n-href]"))
                  , t = new Set(e.map((function(e) {
                    return e.getAttribute("data-n-href")
                }
                )))
                  , r = document.querySelector("noscript[data-n-css]")
                  , n = null == r ? void 0 : r.getAttribute("data-n-css");
                o.forEach((function(e) {
                    var r = e.href
                      , a = e.text;
                    if (!t.has(r)) {
                        var o = document.createElement("style");
                        o.setAttribute("data-n-href", r),
                        o.setAttribute("media", "x"),
                        n && o.setAttribute("nonce", n),
                        document.head.appendChild(o),
                        o.appendChild(document.createTextNode(a))
                    }
                }
                ))
            }(),
            l = p,
            f = ee,
            x.ST && performance.mark("beforeRender"),
            ce ? (v.default.hydrate(l, f, se),
            ce = !1) : v.default.render(l, f, le),
            s
        }
        function ve(e) {
            var t = e.callback
              , r = e.children;
            return h.default.useLayoutEffect((function() {
                return t()
            }
            ), [t]),
            h.default.useEffect((function() {
                (0,
                A.default)(K)
            }
            ), []),
            r
        }
        function ye(e) {
            var t = e.callback;
            return h.default.useLayoutEffect((function() {
                return t()
            }
            ), [t]),
            null
        }
    },
    95778: function(e, t, r) {
        "use strict";
        var n = r(69448)(r(7403));
        window.next = n,
        (0,
        n.default)().catch(console.error)
    },
    27365: function(e, t, r) {
        "use strict";
        var n = r(2553)
          , a = r(62012)
          , o = r(69448)
          , i = r(62426);
        t.__esModule = !0,
        t.default = void 0;
        var u = r(11689)
          , c = i(r(77892))
          , s = r(93288)
          , l = r(94436)
          , f = r(36528)
          , p = o(r(7599));
        function d(e) {
            if ("/" !== e[0])
                throw new Error('Route name should start with a "/", got "'.concat(e, '"'));
            return "/" === e ? e : e.replace(/\/$/, "")
        }
        var m = function() {
            function e(t, r) {
                n(this, e),
                this.buildId = void 0,
                this.assetPrefix = void 0,
                this.promisedSsgManifest = void 0,
                this.promisedDevPagesManifest = void 0,
                this.routeLoader = void 0,
                this.routeLoader = (0,
                p.default)(r),
                this.buildId = t,
                this.assetPrefix = r,
                this.promisedSsgManifest = new Promise((function(e) {
                    window.__SSG_MANIFEST ? e(window.__SSG_MANIFEST) : window.__SSG_MANIFEST_CB = function() {
                        e(window.__SSG_MANIFEST)
                    }
                }
                ))
            }
            return a(e, [{
                key: "getPageList",
                value: function() {
                    return (0,
                    p.getClientBuildManifest)().then((function(e) {
                        return e.sortedPages
                    }
                    ))
                }
            }, {
                key: "getDataHref",
                value: function(e, t, r, n) {
                    var a = this
                      , o = (0,
                    l.parseRelativeUrl)(e)
                      , i = o.pathname
                      , p = o.query
                      , m = o.search
                      , h = (0,
                    l.parseRelativeUrl)(t).pathname
                      , v = d(i)
                      , y = function(e) {
                        var t = (0,
                        c.default)((0,
                        f.removePathTrailingSlash)((0,
                        u.addLocale)(e, n)), ".json");
                        return (0,
                        u.addBasePath)("/_next/data/".concat(a.buildId).concat(t).concat(r ? "" : m))
                    }
                      , g = (0,
                    s.isDynamicRoute)(v)
                      , S = g ? (0,
                    u.interpolateAs)(i, h, p).result : "";
                    return g ? S && y(S) : y(v)
                }
            }, {
                key: "_isSsg",
                value: function(e) {
                    var t = d((0,
                    l.parseRelativeUrl)(e).pathname);
                    return this.promisedSsgManifest.then((function(e) {
                        return e.has(t)
                    }
                    ))
                }
            }, {
                key: "loadPage",
                value: function(e) {
                    return this.routeLoader.loadRoute(e).then((function(e) {
                        if ("component"in e)
                            return {
                                page: e.component,
                                mod: e.exports,
                                styleSheets: e.styles.map((function(e) {
                                    return {
                                        href: e.href,
                                        text: e.content
                                    }
                                }
                                ))
                            };
                        throw e.error
                    }
                    ))
                }
            }, {
                key: "prefetch",
                value: function(e) {
                    return this.routeLoader.prefetch(e)
                }
            }]),
            e
        }();
        t.default = m
    },
    74829: function(e, t, r) {
        "use strict";
        t.__esModule = !0,
        t.default = void 0;
        var n, a = r(5866), o = (location.href,
        !1);
        function i(e) {
            n && n(e)
        }
        t.default = function(e) {
            n = e,
            o || (o = !0,
            (0,
            a.getCLS)(i),
            (0,
            a.getFID)(i),
            (0,
            a.getFCP)(i),
            (0,
            a.getLCP)(i),
            (0,
            a.getTTFB)(i))
        }
    },
    5866: function(e) {
        e.exports = function() {
            var e = {
                599: function(e, t) {
                    !function(e) {
                        "use strict";
                        var t, r, n = function() {
                            return "".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
                        }, a = function(e) {
                            return {
                                name: e,
                                value: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                                delta: 0,
                                entries: [],
                                id: n(),
                                isFinal: !1
                            }
                        }, o = function(e, t) {
                            try {
                                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                                    var r = new PerformanceObserver((function(e) {
                                        return e.getEntries().map(t)
                                    }
                                    ));
                                    return r.observe({
                                        type: e,
                                        buffered: !0
                                    }),
                                    r
                                }
                            } catch (e) {}
                        }, i = !1, u = !1, c = function(e) {
                            i = !e.persisted
                        }, s = function() {
                            addEventListener("pagehide", c),
                            addEventListener("beforeunload", (function() {}
                            ))
                        }, l = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            u || (s(),
                            u = !0),
                            addEventListener("visibilitychange", (function(t) {
                                var r = t.timeStamp;
                                "hidden" === document.visibilityState && e({
                                    timeStamp: r,
                                    isUnloading: i
                                })
                            }
                            ), {
                                capture: !0,
                                once: t
                            })
                        }, f = function(e, t, r, n) {
                            var a;
                            return function() {
                                r && t.isFinal && r.disconnect(),
                                t.value >= 0 && (n || t.isFinal || "hidden" === document.visibilityState) && (t.delta = t.value - (a || 0),
                                (t.delta || t.isFinal || void 0 === a) && (e(t),
                                a = t.value))
                            }
                        }, p = function() {
                            return void 0 === t && (t = "hidden" === document.visibilityState ? 0 : 1 / 0,
                            l((function(e) {
                                var r = e.timeStamp;
                                return t = r
                            }
                            ), !0)),
                            {
                                get timeStamp() {
                                    return t
                                }
                            }
                        }, d = function() {
                            return r || (r = new Promise((function(e) {
                                return ["scroll", "keydown", "pointerdown"].map((function(t) {
                                    addEventListener(t, e, {
                                        once: !0,
                                        passive: !0,
                                        capture: !0
                                    })
                                }
                                ))
                            }
                            ))),
                            r
                        };
                        e.getCLS = function(e) {
                            var t, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = a("CLS", 0), i = function(e) {
                                e.hadRecentInput || (n.value += e.value,
                                n.entries.push(e),
                                t())
                            }, u = o("layout-shift", i);
                            u && (t = f(e, n, u, r),
                            l((function(e) {
                                var r = e.isUnloading;
                                u.takeRecords().map(i),
                                r && (n.isFinal = !0),
                                t()
                            }
                            )))
                        }
                        ,
                        e.getFCP = function(e) {
                            var t, r = a("FCP"), n = p(), i = o("paint", (function(e) {
                                "first-contentful-paint" === e.name && e.startTime < n.timeStamp && (r.value = e.startTime,
                                r.isFinal = !0,
                                r.entries.push(e),
                                t())
                            }
                            ));
                            i && (t = f(e, r, i))
                        }
                        ,
                        e.getFID = function(e) {
                            var t = a("FID")
                              , r = p()
                              , n = function(e) {
                                e.startTime < r.timeStamp && (t.value = e.processingStart - e.startTime,
                                t.entries.push(e),
                                t.isFinal = !0,
                                u())
                            }
                              , i = o("first-input", n)
                              , u = f(e, t, i);
                            i ? l((function() {
                                i.takeRecords().map(n),
                                i.disconnect()
                            }
                            ), !0) : window.perfMetrics && window.perfMetrics.onFirstInputDelay && window.perfMetrics.onFirstInputDelay((function(e, n) {
                                n.timeStamp < r.timeStamp && (t.value = e,
                                t.isFinal = !0,
                                t.entries = [{
                                    entryType: "first-input",
                                    name: n.type,
                                    target: n.target,
                                    cancelable: n.cancelable,
                                    startTime: n.timeStamp,
                                    processingStart: n.timeStamp + e
                                }],
                                u())
                            }
                            ))
                        }
                        ,
                        e.getLCP = function(e) {
                            var t, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = a("LCP"), i = p(), u = function(e) {
                                var r = e.startTime;
                                r < i.timeStamp ? (n.value = r,
                                n.entries.push(e)) : n.isFinal = !0,
                                t()
                            }, c = o("largest-contentful-paint", u);
                            if (c) {
                                t = f(e, n, c, r);
                                var s = function() {
                                    n.isFinal || (c.takeRecords().map(u),
                                    n.isFinal = !0,
                                    t())
                                };
                                d().then(s),
                                l(s, !0)
                            }
                        }
                        ,
                        e.getTTFB = function(e) {
                            var t, r = a("TTFB");
                            t = function() {
                                try {
                                    var t = performance.getEntriesByType("navigation")[0] || function() {
                                        var e = performance.timing
                                          , t = {
                                            entryType: "navigation",
                                            startTime: 0
                                        };
                                        for (var r in e)
                                            "navigationStart" !== r && "toJSON" !== r && (t[r] = Math.max(e[r] - e.navigationStart, 0));
                                        return t
                                    }();
                                    r.value = r.delta = t.responseStart,
                                    r.entries = [t],
                                    r.isFinal = !0,
                                    e(r)
                                } catch (e) {}
                            }
                            ,
                            "complete" === document.readyState ? setTimeout(t, 0) : addEventListener("pageshow", t)
                        }
                        ,
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }(t)
                }
            }
              , t = {};
            function r(n) {
                if (t[n])
                    return t[n].exports;
                var a = t[n] = {
                    exports: {}
                }
                  , o = !0;
                try {
                    e[n].call(a.exports, a, a.exports, r),
                    o = !1
                } finally {
                    o && delete t[n]
                }
                return a.exports
            }
            return r.ab = "//",
            r(599)
        }()
    },
    9566: function(e) {
        function t() {
            return e.exports = t = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ,
            t.apply(this, arguments)
        }
        e.exports = t
    }
}, 0, [[95778, 272, 774, 351, 433]]]);
//# sourceMappingURL=main-edc5f50a2b806e86d30b.js.map
