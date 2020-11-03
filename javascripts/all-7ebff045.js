function log() {
  var t = Array.prototype.slice.call(arguments);
  window.console && window.console.log && window.console.log.apply && console.log(t.join(" "))
}

function checkPlugin(t) {
  return jQuery()[t] ? !0 : !1
}

function layoutResize(t, e) {
  "use strict";
  var n = $(t).get(0),
    i = $(e).get(0);
  i || $(n).removeClass(t.replace(/./, "")), n || $(i).removeClass(e.replace(/./, "")), isMobile.any() || !n && !i || $(t + ", " + e).css("minHeight", Math.max($(n).outerHeight(!0), $(i).outerHeight(!0)) + "px")
}

function getParameterByName(t) {
  t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var e = "[\\?&]" + t + "=([^&#]*)",
    n = new RegExp(e),
    i = n.exec(window.location.search);
  return null == i ? "" : decodeURIComponent(i[1].replace(/\+/g, " "))
}
window.jQuery || function (t, e) {
    function n(t) {
      var e = fe[t] = {};
      return K.each(t.split(ee), function (t, n) {
        e[n] = !0
      }), e
    }

    function i(t, n, i) {
      if (i === e && 1 === t.nodeType) {
        var r = "data-" + n.replace(ye, "-$1").toLowerCase();
        if (i = t.getAttribute(r), "string" == typeof i) {
          try {
            i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : me.test(i) ? K.parseJSON(i) : i
          } catch (o) {}
          K.data(t, n, i)
        } else i = e
      }
      return i
    }

    function r(t) {
      var e;
      for (e in t)
        if (("data" !== e || !K.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
      return !0
    }

    function o() {
      return !1
    }

    function s() {
      return !0
    }

    function a(t) {
      return !t || !t.parentNode || 11 === t.parentNode.nodeType
    }

    function l(t, e) {
      do t = t[e]; while (t && 1 !== t.nodeType);
      return t
    }

    function p(t, e, n) {
      if (e = e || 0, K.isFunction(e)) return K.grep(t, function (t, i) {
        var r = !!e.call(t, i, t);
        return r === n
      });
      if (e.nodeType) return K.grep(t, function (t) {
        return t === e === n
      });
      if ("string" == typeof e) {
        var i = K.grep(t, function (t) {
          return 1 === t.nodeType
        });
        if (Me.test(e)) return K.filter(e, i, !n);
        e = K.filter(e, i)
      }
      return K.grep(t, function (t) {
        return K.inArray(t, e) >= 0 === n
      })
    }

    function c(t) {
      var e = Le.split("|"),
        n = t.createDocumentFragment();
      if (n.createElement)
        for (; e.length;) n.createElement(e.pop());
      return n
    }

    function u(t, e) {
      return t.getElementsByTagName(e)[0] || t.appendChild(t.ownerDocument.createElement(e))
    }

    function h(t, e) {
      if (1 === e.nodeType && K.hasData(t)) {
        var n, i, r, o = K._data(t),
          s = K._data(e, o),
          a = o.events;
        if (a) {
          delete s.handle, s.events = {};
          for (n in a)
            for (i = 0, r = a[n].length; r > i; i++) K.event.add(e, n, a[n][i])
        }
        s.data && (s.data = K.extend({}, s.data))
      }
    }

    function d(t, e) {
      var n;
      1 === e.nodeType && (e.clearAttributes && e.clearAttributes(), e.mergeAttributes && e.mergeAttributes(t), n = e.nodeName.toLowerCase(), "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), K.support.html5Clone && t.innerHTML && !K.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Je.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.selected = t.defaultSelected : "input" === n || "textarea" === n ? e.defaultValue = t.defaultValue : "script" === n && e.text !== t.text && (e.text = t.text), e.removeAttribute(K.expando))
    }

    function f(t) {
      return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName("*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll("*") : []
    }

    function m(t) {
      Je.test(t.type) && (t.defaultChecked = t.checked)
    }

    function y(t, e) {
      if (e in t) return e;
      for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = xn.length; r--;)
        if (e = xn[r] + n, e in t) return e;
      return i
    }

    function g(t, e) {
      return t = e || t, "none" === K.css(t, "display") || !K.contains(t.ownerDocument, t)
    }

    function x(t, e) {
      for (var n, i, r = [], o = 0, s = t.length; s > o; o++) n = t[o], n.style && (r[o] = K._data(n, "olddisplay"), e ? (!r[o] && "none" === n.style.display && (n.style.display = ""), "" === n.style.display && g(n) && (r[o] = K._data(n, "olddisplay", _(n.nodeName)))) : (i = nn(n, "display"), !r[o] && "none" !== i && K._data(n, "olddisplay", i)));
      for (o = 0; s > o; o++) n = t[o], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[o] || "" : "none"));
      return t
    }

    function k(t, e, n) {
      var i = un.exec(e);
      return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function v(t, e, n, i) {
      for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > r; r += 2) "margin" === n && (o += K.css(t, n + gn[r], !0)), i ? ("content" === n && (o -= parseFloat(nn(t, "padding" + gn[r])) || 0), "margin" !== n && (o -= parseFloat(nn(t, "border" + gn[r] + "Width")) || 0)) : (o += parseFloat(nn(t, "padding" + gn[r])) || 0, "padding" !== n && (o += parseFloat(nn(t, "border" + gn[r] + "Width")) || 0));
      return o
    }

    function b(t, e, n) {
      var i = "width" === e ? t.offsetWidth : t.offsetHeight,
        r = !0,
        o = K.support.boxSizing && "border-box" === K.css(t, "boxSizing");
      if (0 >= i || null == i) {
        if (i = nn(t, e), (0 > i || null == i) && (i = t.style[e]), hn.test(i)) return i;
        r = o && (K.support.boxSizingReliable || i === t.style[e]), i = parseFloat(i) || 0
      }
      return i + v(t, e, n || (o ? "border" : "content"), r) + "px"
    }

    function _(t) {
      if (fn[t]) return fn[t];
      var e = K("<" + t + ">").appendTo(O.body),
        n = e.css("display");
      return e.remove(), ("none" === n || "" === n) && (rn = O.body.appendChild(rn || K.extend(O.createElement("iframe"), {
        frameBorder: 0,
        width: 0,
        height: 0
      })), on && rn.createElement || (on = (rn.contentWindow || rn.contentDocument).document, on.write("<!doctype html><html><body>"), on.close()), e = on.body.appendChild(on.createElement(t)), n = nn(e, "display"), O.body.removeChild(rn)), fn[t] = n, n
    }

    function E(t, e, n, i) {
      var r;
      if (K.isArray(e)) K.each(e, function (e, r) {
        n || bn.test(t) ? i(t, r) : E(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
      });
      else if (n || "object" !== K.type(e)) i(t, e);
      else
        for (r in e) E(t + "[" + r + "]", e[r], n, i)
    }

    function S(t) {
      return function (e, n) {
        "string" != typeof e && (n = e, e = "*");
        var i, r, o, s = e.toLowerCase().split(ee),
          a = 0,
          l = s.length;
        if (K.isFunction(n))
          for (; l > a; a++) i = s[a], o = /^\+/.test(i), o && (i = i.substr(1) || "*"), r = t[i] = t[i] || [], r[o ? "unshift" : "push"](n)
      }
    }

    function w(t, n, i, r, o, s) {
      o = o || n.dataTypes[0], s = s || {}, s[o] = !0;
      for (var a, l = t[o], p = 0, c = l ? l.length : 0, u = t === In; c > p && (u || !a); p++) a = l[p](n, i, r), "string" == typeof a && (!u || s[a] ? a = e : (n.dataTypes.unshift(a), a = w(t, n, i, r, a, s)));
      return (u || !a) && !s["*"] && (a = w(t, n, i, r, "*", s)), a
    }

    function D(t, n) {
      var i, r, o = K.ajaxSettings.flatOptions || {};
      for (i in n) n[i] !== e && ((o[i] ? t : r || (r = {}))[i] = n[i]);
      r && K.extend(!0, t, r)
    }

    function A(t, n, i) {
      var r, o, s, a, l = t.contents,
        p = t.dataTypes,
        c = t.responseFields;
      for (o in c) o in i && (n[c[o]] = i[o]);
      for (;
        "*" === p[0];) p.shift(), r === e && (r = t.mimeType || n.getResponseHeader("content-type"));
      if (r)
        for (o in l)
          if (l[o] && l[o].test(r)) {
            p.unshift(o);
            break
          } if (p[0] in i) s = p[0];
      else {
        for (o in i) {
          if (!p[0] || t.converters[o + " " + p[0]]) {
            s = o;
            break
          }
          a || (a = o)
        }
        s = s || a
      }
      return s ? (s !== p[0] && p.unshift(s), i[s]) : void 0
    }

    function F(t, e) {
      var n, i, r, o, s = t.dataTypes.slice(),
        a = s[0],
        l = {},
        p = 0;
      if (t.dataFilter && (e = t.dataFilter(e, t.dataType)), s[1])
        for (n in t.converters) l[n.toLowerCase()] = t.converters[n];
      for (; r = s[++p];)
        if ("*" !== r) {
          if ("*" !== a && a !== r) {
            if (n = l[a + " " + r] || l["* " + r], !n)
              for (i in l)
                if (o = i.split(" "), o[1] === r && (n = l[a + " " + o[0]] || l["* " + o[0]])) {
                  n === !0 ? n = l[i] : l[i] !== !0 && (r = o[0], s.splice(p--, 0, r));
                  break
                } if (n !== !0)
              if (n && t["throws"]) e = n(e);
              else try {
                e = n(e)
              } catch (c) {
                return {
                  state: "parsererror",
                  error: n ? c : "No conversion from " + a + " to " + r
                }
              }
          }
          a = r
        } return {
        state: "success",
        data: e
      }
    }

    function C() {
      try {
        return new t.XMLHttpRequest
      } catch (e) {}
    }

    function T() {
      try {
        return new t.ActiveXObject("Microsoft.XMLHTTP")
      } catch (e) {}
    }

    function B() {
      return setTimeout(function () {
        Un = e
      }, 0), Un = K.now()
    }

    function P(t, e) {
      K.each(e, function (e, n) {
        for (var i = (ti[e] || []).concat(ti["*"]), r = 0, o = i.length; o > r; r++)
          if (i[r].call(t, e, n)) return
      })
    }

    function G(t, e, n) {
      var i, r = 0,
        o = Zn.length,
        s = K.Deferred().always(function () {
          delete a.elem
        }),
        a = function () {
          for (var e = Un || B(), n = Math.max(0, l.startTime + l.duration - e), i = 1 - (n / l.duration || 0), r = 0, o = l.tweens.length; o > r; r++) l.tweens[r].run(i);
          return s.notifyWith(t, [l, i, n]), 1 > i && o ? n : (s.resolveWith(t, [l]), !1)
        },
        l = s.promise({
          elem: t,
          props: K.extend({}, e),
          opts: K.extend(!0, {
            specialEasing: {}
          }, n),
          originalProperties: e,
          originalOptions: n,
          startTime: Un || B(),
          duration: n.duration,
          tweens: [],
          createTween: function (e, n) {
            var i = K.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
            return l.tweens.push(i), i
          },
          stop: function (e) {
            for (var n = 0, i = e ? l.tweens.length : 0; i > n; n++) l.tweens[n].run(1);
            return e ? s.resolveWith(t, [l, e]) : s.rejectWith(t, [l, e]), this
          }
        }),
        p = l.props;
      for (V(p, l.opts.specialEasing); o > r; r++)
        if (i = Zn[r].call(l, t, p, l.opts)) return i;
      return P(l, p), K.isFunction(l.opts.start) && l.opts.start.call(t, l), K.fx.timer(K.extend(a, {
        anim: l,
        queue: l.opts.queue,
        elem: t
      })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function V(t, e) {
      var n, i, r, o, s;
      for (n in t)
        if (i = K.camelCase(n), r = e[i], o = t[n], K.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = K.cssHooks[i], s && "expand" in s) {
          o = s.expand(o), delete t[i];
          for (n in o) n in t || (t[n] = o[n], e[n] = r)
        } else e[i] = r
    }

    function N(t, e, n) {
      var i, r, o, s, a, l, p, c, u = this,
        h = t.style,
        d = {},
        f = [],
        m = t.nodeType && g(t);
      n.queue || (p = K._queueHooks(t, "fx"), null == p.unqueued && (p.unqueued = 0, c = p.empty.fire, p.empty.fire = function () {
        p.unqueued || c()
      }), p.unqueued++, u.always(function () {
        u.always(function () {
          p.unqueued--, K.queue(t, "fx").length || p.empty.fire()
        })
      })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === K.css(t, "display") && "none" === K.css(t, "float") && (K.support.inlineBlockNeedsLayout && "inline" !== _(t.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", K.support.shrinkWrapBlocks || u.done(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
      }));
      for (i in e)
        if (o = e[i], Qn.exec(o)) {
          if (delete e[i], o === (m ? "hide" : "show")) continue;
          f.push(i)
        } if (s = f.length)
        for (a = K._data(t, "fxshow") || K._data(t, "fxshow", {}), m ? K(t).show() : u.done(function () {
            K(t).hide()
          }), u.done(function () {
            var e;
            K.removeData(t, "fxshow", !0);
            for (e in d) K.style(t, e, d[e])
          }), i = 0; s > i; i++) r = f[i], l = u.createTween(r, m ? a[r] : 0), d[r] = a[r] || K.style(t, r), r in a || (a[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
    }

    function M(t, e, n, i, r) {
      return new M.prototype.init(t, e, n, i, r)
    }

    function I(t, e) {
      var n, i = {
          height: t
        },
        r = 0;
      for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = gn[r], i["margin" + n] = i["padding" + n] = t;
      return e && (i.opacity = i.width = t), i
    }

    function j(t) {
      return K.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var L, H, O = t.document,
      R = t.location,
      q = t.navigator,
      z = t.jQuery,
      $ = t.$,
      W = Array.prototype.push,
      X = Array.prototype.slice,
      U = Array.prototype.indexOf,
      J = Object.prototype.toString,
      Q = Object.prototype.hasOwnProperty,
      Y = String.prototype.trim,
      K = function (t, e) {
        return new K.fn.init(t, e, L)
      },
      Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
      te = /\S/,
      ee = /\s+/,
      ne = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ie = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
      re = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      oe = /^[\],:{}\s]*$/,
      se = /(?:^|:|,)(?:\s*\[)+/g,
      ae = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      le = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
      pe = /^-ms-/,
      ce = /-([\da-z])/gi,
      ue = function (t, e) {
        return (e + "").toUpperCase()
      },
      he = function () {
        O.addEventListener ? (O.removeEventListener("DOMContentLoaded", he, !1), K.ready()) : "complete" === O.readyState && (O.detachEvent("onreadystatechange", he), K.ready())
      },
      de = {};
    K.fn = K.prototype = {
      constructor: K,
      init: function (t, n, i) {
        var r, o, s;
        if (!t) return this;
        if (t.nodeType) return this.context = this[0] = t, this.length = 1, this;
        if ("string" == typeof t) {
          if (r = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : ie.exec(t), r && (r[1] || !n)) {
            if (r[1]) return n = n instanceof K ? n[0] : n, s = n && n.nodeType ? n.ownerDocument || n : O, t = K.parseHTML(r[1], s, !0), re.test(r[1]) && K.isPlainObject(n) && this.attr.call(t, n, !0), K.merge(this, t);
            if (o = O.getElementById(r[2]), o && o.parentNode) {
              if (o.id !== r[2]) return i.find(t);
              this.length = 1, this[0] = o
            }
            return this.context = O, this.selector = t, this
          }
          return !n || n.jquery ? (n || i).find(t) : this.constructor(n).find(t)
        }
        return K.isFunction(t) ? i.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), K.makeArray(t, this))
      },
      selector: "",
      jquery: "1.8.2",
      length: 0,
      size: function () {
        return this.length
      },
      toArray: function () {
        return X.call(this)
      },
      get: function (t) {
        return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
      },
      pushStack: function (t, e, n) {
        var i = K.merge(this.constructor(), t);
        return i.prevObject = this, i.context = this.context, "find" === e ? i.selector = this.selector + (this.selector ? " " : "") + n : e && (i.selector = this.selector + "." + e + "(" + n + ")"), i
      },
      each: function (t, e) {
        return K.each(this, t, e)
      },
      ready: function (t) {
        return K.ready.promise().done(t), this
      },
      eq: function (t) {
        return t = +t, -1 === t ? this.slice(t) : this.slice(t, t + 1)
      },
      first: function () {
        return this.eq(0)
      },
      last: function () {
        return this.eq(-1)
      },
      slice: function () {
        return this.pushStack(X.apply(this, arguments), "slice", X.call(arguments).join(","))
      },
      map: function (t) {
        return this.pushStack(K.map(this, function (e, n) {
          return t.call(e, n, e)
        }))
      },
      end: function () {
        return this.prevObject || this.constructor(null)
      },
      push: W,
      sort: [].sort,
      splice: [].splice
    }, K.fn.init.prototype = K.fn, K.extend = K.fn.extend = function () {
      var t, n, i, r, o, s, a = arguments[0] || {},
        l = 1,
        p = arguments.length,
        c = !1;
      for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, l = 2), "object" != typeof a && !K.isFunction(a) && (a = {}), p === l && (a = this, --l); p > l; l++)
        if (null != (t = arguments[l]))
          for (n in t) i = a[n], r = t[n], a !== r && (c && r && (K.isPlainObject(r) || (o = K.isArray(r))) ? (o ? (o = !1, s = i && K.isArray(i) ? i : []) : s = i && K.isPlainObject(i) ? i : {}, a[n] = K.extend(c, s, r)) : r !== e && (a[n] = r));
      return a
    }, K.extend({
      noConflict: function (e) {
        return t.$ === K && (t.$ = $), e && t.jQuery === K && (t.jQuery = z), K
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function (t) {
        t ? K.readyWait++ : K.ready(!0)
      },
      ready: function (t) {
        if (t === !0 ? !--K.readyWait : !K.isReady) {
          if (!O.body) return setTimeout(K.ready, 1);
          K.isReady = !0, t !== !0 && --K.readyWait > 0 || (H.resolveWith(O, [K]), K.fn.trigger && K(O).trigger("ready").off("ready"))
        }
      },
      isFunction: function (t) {
        return "function" === K.type(t)
      },
      isArray: Array.isArray || function (t) {
        return "array" === K.type(t)
      },
      isWindow: function (t) {
        return null != t && t == t.window
      },
      isNumeric: function (t) {
        return !isNaN(parseFloat(t)) && isFinite(t)
      },
      type: function (t) {
        return null == t ? String(t) : de[J.call(t)] || "object"
      },
      isPlainObject: function (t) {
        if (!t || "object" !== K.type(t) || t.nodeType || K.isWindow(t)) return !1;
        try {
          if (t.constructor && !Q.call(t, "constructor") && !Q.call(t.constructor.prototype, "isPrototypeOf")) return !1
        } catch (n) {
          return !1
        }
        var i;
        for (i in t);
        return i === e || Q.call(t, i)
      },
      isEmptyObject: function (t) {
        var e;
        for (e in t) return !1;
        return !0
      },
      error: function (t) {
        throw new Error(t)
      },
      parseHTML: function (t, e, n) {
        var i;
        return t && "string" == typeof t ? ("boolean" == typeof e && (n = e, e = 0), e = e || O, (i = re.exec(t)) ? [e.createElement(i[1])] : (i = K.buildFragment([t], e, n ? null : []), K.merge([], (i.cacheable ? K.clone(i.fragment) : i.fragment).childNodes))) : null
      },
      parseJSON: function (e) {
        return e && "string" == typeof e ? (e = K.trim(e), t.JSON && t.JSON.parse ? t.JSON.parse(e) : oe.test(e.replace(ae, "@").replace(le, "]").replace(se, "")) ? new Function("return " + e)() : (K.error("Invalid JSON: " + e), void 0)) : null
      },
      parseXML: function (n) {
        var i, r;
        if (!n || "string" != typeof n) return null;
        try {
          t.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
        } catch (o) {
          i = e
        }
        return (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) && K.error("Invalid XML: " + n), i
      },
      noop: function () {},
      globalEval: function (e) {
        e && te.test(e) && (t.execScript || function (e) {
          t.eval.call(t, e)
        })(e)
      },
      camelCase: function (t) {
        return t.replace(pe, "ms-").replace(ce, ue)
      },
      nodeName: function (t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
      },
      each: function (t, n, i) {
        var r, o = 0,
          s = t.length,
          a = s === e || K.isFunction(t);
        if (i)
          if (a) {
            for (r in t)
              if (n.apply(t[r], i) === !1) break
          } else
            for (; s > o && n.apply(t[o++], i) !== !1;);
        else if (a) {
          for (r in t)
            if (n.call(t[r], r, t[r]) === !1) break
        } else
          for (; s > o && n.call(t[o], o, t[o++]) !== !1;);
        return t
      },
      trim: Y && !Y.call(" ") ? function (t) {
        return null == t ? "" : Y.call(t)
      } : function (t) {
        return null == t ? "" : (t + "").replace(ne, "")
      },
      makeArray: function (t, e) {
        var n, i = e || [];
        return null != t && (n = K.type(t), null == t.length || "string" === n || "function" === n || "regexp" === n || K.isWindow(t) ? W.call(i, t) : K.merge(i, t)), i
      },
      inArray: function (t, e, n) {
        var i;
        if (e) {
          if (U) return U.call(e, t, n);
          for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
            if (n in e && e[n] === t) return n
        }
        return -1
      },
      merge: function (t, n) {
        var i = n.length,
          r = t.length,
          o = 0;
        if ("number" == typeof i)
          for (; i > o; o++) t[r++] = n[o];
        else
          for (; n[o] !== e;) t[r++] = n[o++];
        return t.length = r, t
      },
      grep: function (t, e, n) {
        var i, r = [],
          o = 0,
          s = t.length;
        for (n = !!n; s > o; o++) i = !!e(t[o], o), n !== i && r.push(t[o]);
        return r
      },
      map: function (t, n, i) {
        var r, o, s = [],
          a = 0,
          l = t.length,
          p = t instanceof K || l !== e && "number" == typeof l && (l > 0 && t[0] && t[l - 1] || 0 === l || K.isArray(t));
        if (p)
          for (; l > a; a++) r = n(t[a], a, i), null != r && (s[s.length] = r);
        else
          for (o in t) r = n(t[o], o, i), null != r && (s[s.length] = r);
        return s.concat.apply([], s)
      },
      guid: 1,
      proxy: function (t, n) {
        var i, r, o;
        return "string" == typeof n && (i = t[n], n = t, t = i), K.isFunction(t) ? (r = X.call(arguments, 2), o = function () {
          return t.apply(n, r.concat(X.call(arguments)))
        }, o.guid = t.guid = t.guid || K.guid++, o) : e
      },
      access: function (t, n, i, r, o, s, a) {
        var l, p = null == i,
          c = 0,
          u = t.length;
        if (i && "object" == typeof i) {
          for (c in i) K.access(t, n, c, i[c], 1, s, r);
          o = 1
        } else if (r !== e) {
          if (l = a === e && K.isFunction(r), p && (l ? (l = n, n = function (t, e, n) {
              return l.call(K(t), n)
            }) : (n.call(t, r), n = null)), n)
            for (; u > c; c++) n(t[c], i, l ? r.call(t[c], c, n(t[c], i)) : r, a);
          o = 1
        }
        return o ? t : p ? n.call(t) : u ? n(t[0], i) : s
      },
      now: function () {
        return (new Date).getTime()
      }
    }), K.ready.promise = function (e) {
      if (!H)
        if (H = K.Deferred(), "complete" === O.readyState) setTimeout(K.ready, 1);
        else if (O.addEventListener) O.addEventListener("DOMContentLoaded", he, !1), t.addEventListener("load", K.ready, !1);
      else {
        O.attachEvent("onreadystatechange", he), t.attachEvent("onload", K.ready);
        var n = !1;
        try {
          n = null == t.frameElement && O.documentElement
        } catch (i) {}
        n && n.doScroll && function r() {
          if (!K.isReady) {
            try {
              n.doScroll("left")
            } catch (t) {
              return setTimeout(r, 50)
            }
            K.ready()
          }
        }()
      }
      return H.promise(e)
    }, K.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (t, e) {
      de["[object " + e + "]"] = e.toLowerCase()
    }), L = K(O);
    var fe = {};
    K.Callbacks = function (t) {
      t = "string" == typeof t ? fe[t] || n(t) : K.extend({}, t);
      var i, r, o, s, a, l, p = [],
        c = !t.once && [],
        u = function (e) {
          for (i = t.memory && e, r = !0, l = s || 0, s = 0, a = p.length, o = !0; p && a > l; l++)
            if (p[l].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
              i = !1;
              break
            } o = !1, p && (c ? c.length && u(c.shift()) : i ? p = [] : h.disable())
        },
        h = {
          add: function () {
            if (p) {
              var e = p.length;
              ! function n(e) {
                K.each(e, function (e, i) {
                  var r = K.type(i);
                  "function" !== r || t.unique && h.has(i) ? i && i.length && "string" !== r && n(i) : p.push(i)
                })
              }(arguments), o ? a = p.length : i && (s = e, u(i))
            }
            return this
          },
          remove: function () {
            return p && K.each(arguments, function (t, e) {
              for (var n;
                (n = K.inArray(e, p, n)) > -1;) p.splice(n, 1), o && (a >= n && a--, l >= n && l--)
            }), this
          },
          has: function (t) {
            return K.inArray(t, p) > -1
          },
          empty: function () {
            return p = [], this
          },
          disable: function () {
            return p = c = i = e, this
          },
          disabled: function () {
            return !p
          },
          lock: function () {
            return c = e, i || h.disable(), this
          },
          locked: function () {
            return !c
          },
          fireWith: function (t, e) {
            return e = e || [], e = [t, e.slice ? e.slice() : e], p && (!r || c) && (o ? c.push(e) : u(e)), this
          },
          fire: function () {
            return h.fireWith(this, arguments), this
          },
          fired: function () {
            return !!r
          }
        };
      return h
    }, K.extend({
      Deferred: function (t) {
        var e = [
            ["resolve", "done", K.Callbacks("once memory"), "resolved"],
            ["reject", "fail", K.Callbacks("once memory"), "rejected"],
            ["notify", "progress", K.Callbacks("memory")]
          ],
          n = "pending",
          i = {
            state: function () {
              return n
            },
            always: function () {
              return r.done(arguments).fail(arguments), this
            },
            then: function () {
              var t = arguments;
              return K.Deferred(function (n) {
                K.each(e, function (e, i) {
                  var o = i[0],
                    s = t[e];
                  r[i[1]](K.isFunction(s) ? function () {
                    var t = s.apply(this, arguments);
                    t && K.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n : this, [t])
                  } : n[o])
                }), t = null
              }).promise()
            },
            promise: function (t) {
              return null != t ? K.extend(t, i) : i
            }
          },
          r = {};
        return i.pipe = i.then, K.each(e, function (t, o) {
          var s = o[2],
            a = o[3];
          i[o[1]] = s.add, a && s.add(function () {
            n = a
          }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = s.fire, r[o[0] + "With"] = s.fireWith
        }), i.promise(r), t && t.call(r, r), r
      },
      when: function (t) {
        var e, n, i, r = 0,
          o = X.call(arguments),
          s = o.length,
          a = 1 !== s || t && K.isFunction(t.promise) ? s : 0,
          l = 1 === a ? t : K.Deferred(),
          p = function (t, n, i) {
            return function (r) {
              n[t] = this, i[t] = arguments.length > 1 ? X.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
            }
          };
        if (s > 1)
          for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && K.isFunction(o[r].promise) ? o[r].promise().done(p(r, i, o)).fail(l.reject).progress(p(r, n, e)) : --a;
        return a || l.resolveWith(i, o), l.promise()
      }
    }), K.support = function () {
      var e, n, i, r, o, s, a, l, p, c, u, h = O.createElement("div");
      if (h.setAttribute("className", "t"), h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = h.getElementsByTagName("*"), i = h.getElementsByTagName("a")[0], i.style.cssText = "top:1px;float:left;opacity:.5", !n || !n.length) return {};
      r = O.createElement("select"), o = r.appendChild(O.createElement("option")), s = h.getElementsByTagName("input")[0], e = {
        leadingWhitespace: 3 === h.firstChild.nodeType,
        tbody: !h.getElementsByTagName("tbody").length,
        htmlSerialize: !!h.getElementsByTagName("link").length,
        style: /top/.test(i.getAttribute("style")),
        hrefNormalized: "/a" === i.getAttribute("href"),
        opacity: /^0.5/.test(i.style.opacity),
        cssFloat: !!i.style.cssFloat,
        checkOn: "on" === s.value,
        optSelected: o.selected,
        getSetAttribute: "t" !== h.className,
        enctype: !!O.createElement("form").enctype,
        html5Clone: "<:nav></:nav>" !== O.createElement("nav").cloneNode(!0).outerHTML,
        boxModel: "CSS1Compat" === O.compatMode,
        submitBubbles: !0,
        changeBubbles: !0,
        focusinBubbles: !1,
        deleteExpando: !0,
        noCloneEvent: !0,
        inlineBlockNeedsLayout: !1,
        shrinkWrapBlocks: !1,
        reliableMarginRight: !0,
        boxSizingReliable: !0,
        pixelPosition: !1
      }, s.checked = !0, e.noCloneChecked = s.cloneNode(!0).checked, r.disabled = !0, e.optDisabled = !o.disabled;
      try {
        delete h.test
      } catch (d) {
        e.deleteExpando = !1
      }
      if (!h.addEventListener && h.attachEvent && h.fireEvent && (h.attachEvent("onclick", u = function () {
          e.noCloneEvent = !1
        }), h.cloneNode(!0).fireEvent("onclick"), h.detachEvent("onclick", u)), s = O.createElement("input"), s.value = "t", s.setAttribute("type", "radio"), e.radioValue = "t" === s.value, s.setAttribute("checked", "checked"), s.setAttribute("name", "t"), h.appendChild(s), a = O.createDocumentFragment(), a.appendChild(h.lastChild), e.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, e.appendChecked = s.checked, a.removeChild(s), a.appendChild(h), h.attachEvent)
        for (p in {
            submit: !0,
            change: !0,
            focusin: !0
          }) l = "on" + p, c = l in h, c || (h.setAttribute(l, "return;"), c = "function" == typeof h[l]), e[p + "Bubbles"] = c;
      return K(function () {
        var n, i, r, o, s = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
          a = O.getElementsByTagName("body")[0];
        a && (n = O.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", a.insertBefore(n, a.firstChild), i = O.createElement("div"), n.appendChild(i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = i.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", e.reliableHiddenOffsets = c && 0 === r[0].offsetHeight, i.innerHTML = "", i.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", e.boxSizing = 4 === i.offsetWidth, e.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(i, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(i, null) || {
          width: "4px"
        }).width, o = O.createElement("div"), o.style.cssText = i.style.cssText = s, o.style.marginRight = o.style.width = "0", i.style.width = "1px", i.appendChild(o), e.reliableMarginRight = !parseFloat((t.getComputedStyle(o, null) || {}).marginRight)), "undefined" != typeof i.style.zoom && (i.innerHTML = "", i.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === i.offsetWidth, i.style.display = "block", i.style.overflow = "visible", i.innerHTML = "<div></div>", i.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== i.offsetWidth, n.style.zoom = 1), a.removeChild(n), n = i = r = o = null)
      }), a.removeChild(h), n = i = r = o = s = a = h = null, e
    }();
    var me = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
      ye = /([A-Z])/g;
    K.extend({
      cache: {},
      deletedIds: [],
      uuid: 0,
      expando: "jQuery" + (K.fn.jquery + Math.random()).replace(/\D/g, ""),
      noData: {
        embed: !0,
        object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
        applet: !0
      },
      hasData: function (t) {
        return t = t.nodeType ? K.cache[t[K.expando]] : t[K.expando], !!t && !r(t)
      },
      data: function (t, n, i, r) {
        if (K.acceptData(t)) {
          var o, s, a = K.expando,
            l = "string" == typeof n,
            p = t.nodeType,
            c = p ? K.cache : t,
            u = p ? t[a] : t[a] && a;
          if (u && c[u] && (r || c[u].data) || !l || i !== e) return u || (p ? t[a] = u = K.deletedIds.pop() || K.guid++ : u = a), c[u] || (c[u] = {}, p || (c[u].toJSON = K.noop)), ("object" == typeof n || "function" == typeof n) && (r ? c[u] = K.extend(c[u], n) : c[u].data = K.extend(c[u].data, n)), o = c[u], r || (o.data || (o.data = {}), o = o.data), i !== e && (o[K.camelCase(n)] = i), l ? (s = o[n], null == s && (s = o[K.camelCase(n)])) : s = o, s
        }
      },
      removeData: function (t, e, n) {
        if (K.acceptData(t)) {
          var i, o, s, a = t.nodeType,
            l = a ? K.cache : t,
            p = a ? t[K.expando] : K.expando;
          if (l[p]) {
            if (e && (i = n ? l[p] : l[p].data)) {
              K.isArray(e) || (e in i ? e = [e] : (e = K.camelCase(e), e = e in i ? [e] : e.split(" ")));
              for (o = 0, s = e.length; s > o; o++) delete i[e[o]];
              if (!(n ? r : K.isEmptyObject)(i)) return
            }(n || (delete l[p].data, r(l[p]))) && (a ? K.cleanData([t], !0) : K.support.deleteExpando || l != l.window ? delete l[p] : l[p] = null)
          }
        }
      },
      _data: function (t, e, n) {
        return K.data(t, e, n, !0)
      },
      acceptData: function (t) {
        var e = t.nodeName && K.noData[t.nodeName.toLowerCase()];
        return !e || e !== !0 && t.getAttribute("classid") === e
      }
    }), K.fn.extend({
      data: function (t, n) {
        var r, o, s, a, l, p = this[0],
          c = 0,
          u = null;
        if (t === e) {
          if (this.length && (u = K.data(p), 1 === p.nodeType && !K._data(p, "parsedAttrs"))) {
            for (s = p.attributes, l = s.length; l > c; c++) a = s[c].name, a.indexOf("data-") || (a = K.camelCase(a.substring(5)), i(p, a, u[a]));
            K._data(p, "parsedAttrs", !0)
          }
          return u
        }
        return "object" == typeof t ? this.each(function () {
          K.data(this, t)
        }) : (r = t.split(".", 2), r[1] = r[1] ? "." + r[1] : "", o = r[1] + "!", K.access(this, function (n) {
          return n === e ? (u = this.triggerHandler("getData" + o, [r[0]]), u === e && p && (u = K.data(p, t), u = i(p, t, u)), u === e && r[1] ? this.data(r[0]) : u) : (r[1] = n, this.each(function () {
            var e = K(this);
            e.triggerHandler("setData" + o, r), K.data(this, t, n), e.triggerHandler("changeData" + o, r)
          }), void 0)
        }, null, n, arguments.length > 1, null, !1))
      },
      removeData: function (t) {
        return this.each(function () {
          K.removeData(this, t)
        })
      }
    }), K.extend({
      queue: function (t, e, n) {
        var i;
        return t ? (e = (e || "fx") + "queue", i = K._data(t, e), n && (!i || K.isArray(n) ? i = K._data(t, e, K.makeArray(n)) : i.push(n)), i || []) : void 0
      },
      dequeue: function (t, e) {
        e = e || "fx";
        var n = K.queue(t, e),
          i = n.length,
          r = n.shift(),
          o = K._queueHooks(t, e),
          s = function () {
            K.dequeue(t, e)
          };
        "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
      },
      _queueHooks: function (t, e) {
        var n = e + "queueHooks";
        return K._data(t, n) || K._data(t, n, {
          empty: K.Callbacks("once memory").add(function () {
            K.removeData(t, e + "queue", !0), K.removeData(t, n, !0)
          })
        })
      }
    }), K.fn.extend({
      queue: function (t, n) {
        var i = 2;
        return "string" != typeof t && (n = t, t = "fx", i--), arguments.length < i ? K.queue(this[0], t) : n === e ? this : this.each(function () {
          var e = K.queue(this, t, n);
          K._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && K.dequeue(this, t)
        })
      },
      dequeue: function (t) {
        return this.each(function () {
          K.dequeue(this, t)
        })
      },
      delay: function (t, e) {
        return t = K.fx ? K.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
          var i = setTimeout(e, t);
          n.stop = function () {
            clearTimeout(i)
          }
        })
      },
      clearQueue: function (t) {
        return this.queue(t || "fx", [])
      },
      promise: function (t, n) {
        var i, r = 1,
          o = K.Deferred(),
          s = this,
          a = this.length,
          l = function () {
            --r || o.resolveWith(s, [s])
          };
        for ("string" != typeof t && (n = t, t = e), t = t || "fx"; a--;) i = K._data(s[a], t + "queueHooks"), i && i.empty && (r++, i.empty.add(l));
        return l(), o.promise(n)
      }
    });
    var ge, xe, ke, ve = /[\t\r\n]/g,
      be = /\r/g,
      _e = /^(?:button|input)$/i,
      Ee = /^(?:button|input|object|select|textarea)$/i,
      Se = /^a(?:rea|)$/i,
      we = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      De = K.support.getSetAttribute;
    K.fn.extend({
      attr: function (t, e) {
        return K.access(this, K.attr, t, e, arguments.length > 1)
      },
      removeAttr: function (t) {
        return this.each(function () {
          K.removeAttr(this, t)
        })
      },
      prop: function (t, e) {
        return K.access(this, K.prop, t, e, arguments.length > 1)
      },
      removeProp: function (t) {
        return t = K.propFix[t] || t, this.each(function () {
          try {
            this[t] = e, delete this[t]
          } catch (n) {}
        })
      },
      addClass: function (t) {
        var e, n, i, r, o, s, a;
        if (K.isFunction(t)) return this.each(function (e) {
          K(this).addClass(t.call(this, e, this.className))
        });
        if (t && "string" == typeof t)
          for (e = t.split(ee), n = 0, i = this.length; i > n; n++)
            if (r = this[n], 1 === r.nodeType)
              if (r.className || 1 !== e.length) {
                for (o = " " + r.className + " ", s = 0, a = e.length; a > s; s++) o.indexOf(" " + e[s] + " ") < 0 && (o += e[s] + " ");
                r.className = K.trim(o)
              } else r.className = t;
        return this
      },
      removeClass: function (t) {
        var n, i, r, o, s, a, l;
        if (K.isFunction(t)) return this.each(function (e) {
          K(this).removeClass(t.call(this, e, this.className))
        });
        if (t && "string" == typeof t || t === e)
          for (n = (t || "").split(ee), a = 0, l = this.length; l > a; a++)
            if (r = this[a], 1 === r.nodeType && r.className) {
              for (i = (" " + r.className + " ").replace(ve, " "), o = 0, s = n.length; s > o; o++)
                for (; i.indexOf(" " + n[o] + " ") >= 0;) i = i.replace(" " + n[o] + " ", " ");
              r.className = t ? K.trim(i) : ""
            } return this
      },
      toggleClass: function (t, e) {
        var n = typeof t,
          i = "boolean" == typeof e;
        return K.isFunction(t) ? this.each(function (n) {
          K(this).toggleClass(t.call(this, n, this.className, e), e)
        }) : this.each(function () {
          if ("string" === n)
            for (var r, o = 0, s = K(this), a = e, l = t.split(ee); r = l[o++];) a = i ? a : !s.hasClass(r), s[a ? "addClass" : "removeClass"](r);
          else("undefined" === n || "boolean" === n) && (this.className && K._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : K._data(this, "__className__") || "")
        })
      },
      hasClass: function (t) {
        for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
          if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ve, " ").indexOf(e) >= 0) return !0;
        return !1
      },
      val: function (t) {
        var n, i, r, o = this[0]; {
          if (arguments.length) return r = K.isFunction(t), this.each(function (i) {
            var o, s = K(this);
            1 === this.nodeType && (o = r ? t.call(this, i, s.val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : K.isArray(o) && (o = K.map(o, function (t) {
              return null == t ? "" : t + ""
            })), n = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== e || (this.value = o))
          });
          if (o) return n = K.valHooks[o.type] || K.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (i = n.get(o, "value")) !== e ? i : (i = o.value, "string" == typeof i ? i.replace(be, "") : null == i ? "" : i)
        }
      }
    }), K.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = t.attributes.value;
            return !e || e.specified ? t.value : t.text
          }
        },
        select: {
          get: function (t) {
            var e, n, i, r, o = t.selectedIndex,
              s = [],
              a = t.options,
              l = "select-one" === t.type;
            if (0 > o) return null;
            for (n = l ? o : 0, i = l ? o + 1 : a.length; i > n; n++)
              if (r = a[n], !(!r.selected || (K.support.optDisabled ? r.disabled : null !== r.getAttribute("disabled")) || r.parentNode.disabled && K.nodeName(r.parentNode, "optgroup"))) {
                if (e = K(r).val(), l) return e;
                s.push(e)
              } return l && !s.length && a.length ? K(a[o]).val() : s
          },
          set: function (t, e) {
            var n = K.makeArray(e);
            return K(t).find("option").each(function () {
              this.selected = K.inArray(K(this).val(), n) >= 0
            }), n.length || (t.selectedIndex = -1), n
          }
        }
      },
      attrFn: {},
      attr: function (t, n, i, r) {
        var o, s, a, l = t.nodeType;
        if (t && 3 !== l && 8 !== l && 2 !== l) return r && K.isFunction(K.fn[n]) ? K(t)[n](i) : "undefined" == typeof t.getAttribute ? K.prop(t, n, i) : (a = 1 !== l || !K.isXMLDoc(t), a && (n = n.toLowerCase(), s = K.attrHooks[n] || (we.test(n) ? xe : ge)), i !== e ? null === i ? (K.removeAttr(t, n), void 0) : s && "set" in s && a && (o = s.set(t, i, n)) !== e ? o : (t.setAttribute(n, i + ""), i) : s && "get" in s && a && null !== (o = s.get(t, n)) ? o : (o = t.getAttribute(n), null === o ? e : o))
      },
      removeAttr: function (t, e) {
        var n, i, r, o, s = 0;
        if (e && 1 === t.nodeType)
          for (i = e.split(ee); s < i.length; s++) r = i[s], r && (n = K.propFix[r] || r, o = we.test(r), o || K.attr(t, r, ""), t.removeAttribute(De ? r : n), o && n in t && (t[n] = !1))
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (_e.test(t.nodeName) && t.parentNode) K.error("type property can't be changed");
            else if (!K.support.radioValue && "radio" === e && K.nodeName(t, "input")) {
              var n = t.value;
              return t.setAttribute("type", e), n && (t.value = n), e
            }
          }
        },
        value: {
          get: function (t, e) {
            return ge && K.nodeName(t, "button") ? ge.get(t, e) : e in t ? t.value : null
          },
          set: function (t, e, n) {
            return ge && K.nodeName(t, "button") ? ge.set(t, e, n) : (t.value = e, void 0)
          }
        }
      },
      propFix: {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
      },
      prop: function (t, n, i) {
        var r, o, s, a = t.nodeType;
        if (t && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !K.isXMLDoc(t), s && (n = K.propFix[n] || n, o = K.propHooks[n]), i !== e ? o && "set" in o && (r = o.set(t, i, n)) !== e ? r : t[n] = i : o && "get" in o && null !== (r = o.get(t, n)) ? r : t[n]
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            var n = t.getAttributeNode("tabindex");
            return n && n.specified ? parseInt(n.value, 10) : Ee.test(t.nodeName) || Se.test(t.nodeName) && t.href ? 0 : e
          }
        }
      }
    }), xe = {
      get: function (t, n) {
        var i, r = K.prop(t, n);
        return r === !0 || "boolean" != typeof r && (i = t.getAttributeNode(n)) && i.nodeValue !== !1 ? n.toLowerCase() : e
      },
      set: function (t, e, n) {
        var i;
        return e === !1 ? K.removeAttr(t, n) : (i = K.propFix[n] || n, i in t && (t[i] = !0), t.setAttribute(n, n.toLowerCase())), n
      }
    }, De || (ke = {
      name: !0,
      id: !0,
      coords: !0
    }, ge = K.valHooks.button = {
      get: function (t, n) {
        var i;
        return i = t.getAttributeNode(n), i && (ke[n] ? "" !== i.value : i.specified) ? i.value : e
      },
      set: function (t, e, n) {
        var i = t.getAttributeNode(n);
        return i || (i = O.createAttribute(n), t.setAttributeNode(i)), i.value = e + ""
      }
    }, K.each(["width", "height"], function (t, e) {
      K.attrHooks[e] = K.extend(K.attrHooks[e], {
        set: function (t, n) {
          return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
        }
      })
    }), K.attrHooks.contenteditable = {
      get: ge.get,
      set: function (t, e, n) {
        "" === e && (e = "false"), ge.set(t, e, n)
      }
    }), K.support.hrefNormalized || K.each(["href", "src", "width", "height"], function (t, n) {
      K.attrHooks[n] = K.extend(K.attrHooks[n], {
        get: function (t) {
          var i = t.getAttribute(n, 2);
          return null === i ? e : i
        }
      })
    }), K.support.style || (K.attrHooks.style = {
      get: function (t) {
        return t.style.cssText.toLowerCase() || e
      },
      set: function (t, e) {
        return t.style.cssText = e + ""
      }
    }), K.support.optSelected || (K.propHooks.selected = K.extend(K.propHooks.selected, {
      get: function (t) {
        var e = t.parentNode;
        return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
      }
    })), K.support.enctype || (K.propFix.enctype = "encoding"), K.support.checkOn || K.each(["radio", "checkbox"], function () {
      K.valHooks[this] = {
        get: function (t) {
          return null === t.getAttribute("value") ? "on" : t.value
        }
      }
    }), K.each(["radio", "checkbox"], function () {
      K.valHooks[this] = K.extend(K.valHooks[this], {
        set: function (t, e) {
          return K.isArray(e) ? t.checked = K.inArray(K(t).val(), e) >= 0 : void 0
        }
      })
    });
    var Ae = /^(?:textarea|input|select)$/i,
      Fe = /^([^\.]*|)(?:\.(.+)|)$/,
      Ce = /(?:^|\s)hover(\.\S+|)\b/,
      Te = /^key/,
      Be = /^(?:mouse|contextmenu)|click/,
      Pe = /^(?:focusinfocus|focusoutblur)$/,
      Ge = function (t) {
        return K.event.special.hover ? t : t.replace(Ce, "mouseenter$1 mouseleave$1")
      };
    K.event = {
        add: function (t, n, i, r, o) {
          var s, a, l, p, c, u, h, d, f, m, y;
          if (3 !== t.nodeType && 8 !== t.nodeType && n && i && (s = K._data(t))) {
            for (i.handler && (f = i, i = f.handler, o = f.selector), i.guid || (i.guid = K.guid++), l = s.events, l || (s.events = l = {}), a = s.handle, a || (s.handle = a = function (t) {
                return "undefined" == typeof K || t && K.event.triggered === t.type ? e : K.event.dispatch.apply(a.elem, arguments)
              }, a.elem = t), n = K.trim(Ge(n)).split(" "), p = 0; p < n.length; p++) c = Fe.exec(n[p]) || [], u = c[1], h = (c[2] || "").split(".").sort(), y = K.event.special[u] || {}, u = (o ? y.delegateType : y.bindType) || u, y = K.event.special[u] || {}, d = K.extend({
              type: u,
              origType: c[1],
              data: r,
              handler: i,
              guid: i.guid,
              selector: o,
              needsContext: o && K.expr.match.needsContext.test(o),
              namespace: h.join(".")
            }, f), m = l[u], m || (m = l[u] = [], m.delegateCount = 0, y.setup && y.setup.call(t, r, h, a) !== !1 || (t.addEventListener ? t.addEventListener(u, a, !1) : t.attachEvent && t.attachEvent("on" + u, a))), y.add && (y.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), o ? m.splice(m.delegateCount++, 0, d) : m.push(d), K.event.global[u] = !0;
            t = null
          }
        },
        global: {},
        remove: function (t, e, n, i, r) {
          var o, s, a, l, p, c, u, h, d, f, m, y = K.hasData(t) && K._data(t);
          if (y && (h = y.events)) {
            for (e = K.trim(Ge(e || "")).split(" "), o = 0; o < e.length; o++)
              if (s = Fe.exec(e[o]) || [], a = l = s[1], p = s[2], a) {
                for (d = K.event.special[a] || {}, a = (i ? d.delegateType : d.bindType) || a, f = h[a] || [], c = f.length, p = p ? new RegExp("(^|\\.)" + p.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, u = 0; u < f.length; u++) m = f[u], !(!r && l !== m.origType || n && n.guid !== m.guid || p && !p.test(m.namespace) || i && i !== m.selector && ("**" !== i || !m.selector) || (f.splice(u--, 1), m.selector && f.delegateCount--, !d.remove || !d.remove.call(t, m)));
                0 === f.length && c !== f.length && ((!d.teardown || d.teardown.call(t, p, y.handle) === !1) && K.removeEvent(t, a, y.handle), delete h[a])
              } else
                for (a in h) K.event.remove(t, a + e[o], n, i, !0);
            K.isEmptyObject(h) && (delete y.handle, K.removeData(t, "events", !0))
          }
        },
        customEvent: {
          getData: !0,
          setData: !0,
          changeData: !0
        },
        trigger: function (n, i, r, o) {
          if (!r || 3 !== r.nodeType && 8 !== r.nodeType) {
            var s, a, l, p, c, u, h, d, f, m, y = n.type || n,
              g = [];
            if (Pe.test(y + K.event.triggered)) return;
            if (y.indexOf("!") >= 0 && (y = y.slice(0, -1), a = !0), y.indexOf(".") >= 0 && (g = y.split("."), y = g.shift(), g.sort()), (!r || K.event.customEvent[y]) && !K.event.global[y]) return;
            if (n = "object" == typeof n ? n[K.expando] ? n : new K.Event(y, n) : new K.Event(y), n.type = y, n.isTrigger = !0, n.exclusive = a, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, u = y.indexOf(":") < 0 ? "on" + y : "", !r) {
              s = K.cache;
              for (l in s) s[l].events && s[l].events[y] && K.event.trigger(n, i, s[l].handle.elem, !0);
              return
            }
            if (n.result = e, n.target || (n.target = r), i = null != i ? K.makeArray(i) : [], i.unshift(n), h = K.event.special[y] || {}, h.trigger && h.trigger.apply(r, i) === !1) return;
            if (f = [
                [r, h.bindType || y]
              ], !o && !h.noBubble && !K.isWindow(r)) {
              for (m = h.delegateType || y, p = Pe.test(m + y) ? r : r.parentNode, c = r; p; p = p.parentNode) f.push([p, m]), c = p;
              c === (r.ownerDocument || O) && f.push([c.defaultView || c.parentWindow || t, m])
            }
            for (l = 0; l < f.length && !n.isPropagationStopped(); l++) p = f[l][0], n.type = f[l][1], d = (K._data(p, "events") || {})[n.type] && K._data(p, "handle"), d && d.apply(p, i), d = u && p[u], d && K.acceptData(p) && d.apply && d.apply(p, i) === !1 && n.preventDefault();
            return n.type = y, !(o || n.isDefaultPrevented() || h._default && h._default.apply(r.ownerDocument, i) !== !1 || "click" === y && K.nodeName(r, "a") || !K.acceptData(r) || !u || !r[y] || ("focus" === y || "blur" === y) && 0 === n.target.offsetWidth || K.isWindow(r) || (c = r[u], c && (r[u] = null), K.event.triggered = y, r[y](), K.event.triggered = e, !c || !(r[u] = c))), n.result
          }
        },
        dispatch: function (n) {
          n = K.event.fix(n || t.event);
          var i, r, o, s, a, l, p, c, u, h = (K._data(this, "events") || {})[n.type] || [],
            d = h.delegateCount,
            f = X.call(arguments),
            m = !n.exclusive && !n.namespace,
            y = K.event.special[n.type] || {},
            g = [];
          if (f[0] = n, n.delegateTarget = this, !y.preDispatch || y.preDispatch.call(this, n) !== !1) {
            if (d && (!n.button || "click" !== n.type))
              for (o = n.target; o != this; o = o.parentNode || this)
                if (o.disabled !== !0 || "click" !== n.type) {
                  for (a = {}, p = [], i = 0; d > i; i++) c = h[i], u = c.selector, a[u] === e && (a[u] = c.needsContext ? K(u, this).index(o) >= 0 : K.find(u, this, null, [o]).length), a[u] && p.push(c);
                  p.length && g.push({
                    elem: o,
                    matches: p
                  })
                } for (h.length > d && g.push({
                elem: this,
                matches: h.slice(d)
              }), i = 0; i < g.length && !n.isPropagationStopped(); i++)
              for (l = g[i], n.currentTarget = l.elem, r = 0; r < l.matches.length && !n.isImmediatePropagationStopped(); r++) c = l.matches[r], (m || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) && (n.data = c.data, n.handleObj = c, s = ((K.event.special[c.origType] || {}).handle || c.handler).apply(l.elem, f), s !== e && (n.result = s, s === !1 && (n.preventDefault(), n.stopPropagation())));
            return y.postDispatch && y.postDispatch.call(this, n), n.result
          }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
          props: "char charCode key keyCode".split(" "),
          filter: function (t, e) {
            return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
          }
        },
        mouseHooks: {
          props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
          filter: function (t, n) {
            var i, r, o, s = n.button,
              a = n.fromElement;
            return null == t.pageX && null != n.clientX && (i = t.target.ownerDocument || O, r = i.documentElement, o = i.body, t.pageX = n.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), t.pageY = n.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? n.toElement : a), !t.which && s !== e && (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
          }
        },
        fix: function (t) {
          if (t[K.expando]) return t;
          var e, n, i = t,
            r = K.event.fixHooks[t.type] || {},
            o = r.props ? this.props.concat(r.props) : this.props;
          for (t = K.Event(i), e = o.length; e;) n = o[--e], t[n] = i[n];
          return t.target || (t.target = i.srcElement || O), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, r.filter ? r.filter(t, i) : t
        },
        special: {
          load: {
            noBubble: !0
          },
          focus: {
            delegateType: "focusin"
          },
          blur: {
            delegateType: "focusout"
          },
          beforeunload: {
            setup: function (t, e, n) {
              K.isWindow(this) && (this.onbeforeunload = n)
            },
            teardown: function (t, e) {
              this.onbeforeunload === e && (this.onbeforeunload = null)
            }
          }
        },
        simulate: function (t, e, n, i) {
          var r = K.extend(new K.Event, n, {
            type: t,
            isSimulated: !0,
            originalEvent: {}
          });
          i ? K.event.trigger(r, null, e) : K.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
        }
      }, K.event.handle = K.event.dispatch, K.removeEvent = O.removeEventListener ? function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
      } : function (t, e, n) {
        var i = "on" + e;
        t.detachEvent && ("undefined" == typeof t[i] && (t[i] = null), t.detachEvent(i, n))
      }, K.Event = function (t, e) {
        return this instanceof K.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? s : o) : this.type = t, e && K.extend(this, e), this.timeStamp = t && t.timeStamp || K.now(), this[K.expando] = !0, void 0) : new K.Event(t, e)
      }, K.Event.prototype = {
        preventDefault: function () {
          this.isDefaultPrevented = s;
          var t = this.originalEvent;
          t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function () {
          this.isPropagationStopped = s;
          var t = this.originalEvent;
          t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
          this.isImmediatePropagationStopped = s, this.stopPropagation()
        },
        isDefaultPrevented: o,
        isPropagationStopped: o,
        isImmediatePropagationStopped: o
      }, K.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
      }, function (t, e) {
        K.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function (t) {
            var n, i = this,
              r = t.relatedTarget,
              o = t.handleObj;
            return o.selector, (!r || r !== i && !K.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
          }
        }
      }), K.support.submitBubbles || (K.event.special.submit = {
        setup: function () {
          return K.nodeName(this, "form") ? !1 : (K.event.add(this, "click._submit keypress._submit", function (t) {
            var n = t.target,
              i = K.nodeName(n, "input") || K.nodeName(n, "button") ? n.form : e;
            i && !K._data(i, "_submit_attached") && (K.event.add(i, "submit._submit", function (t) {
              t._submit_bubble = !0
            }), K._data(i, "_submit_attached", !0))
          }), void 0)
        },
        postDispatch: function (t) {
          t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && K.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function () {
          return K.nodeName(this, "form") ? !1 : (K.event.remove(this, "._submit"), void 0)
        }
      }), K.support.changeBubbles || (K.event.special.change = {
        setup: function () {
          return Ae.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (K.event.add(this, "propertychange._change", function (t) {
            "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
          }), K.event.add(this, "click._change", function (t) {
            this._just_changed && !t.isTrigger && (this._just_changed = !1), K.event.simulate("change", this, t, !0)
          })), !1) : (K.event.add(this, "beforeactivate._change", function (t) {
            var e = t.target;
            Ae.test(e.nodeName) && !K._data(e, "_change_attached") && (K.event.add(e, "change._change", function (t) {
              this.parentNode && !t.isSimulated && !t.isTrigger && K.event.simulate("change", this.parentNode, t, !0)
            }), K._data(e, "_change_attached", !0))
          }), void 0)
        },
        handle: function (t) {
          var e = t.target;
          return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
          return K.event.remove(this, "._change"), !Ae.test(this.nodeName)
        }
      }), K.support.focusinBubbles || K.each({
        focus: "focusin",
        blur: "focusout"
      }, function (t, e) {
        var n = 0,
          i = function (t) {
            K.event.simulate(e, t.target, K.event.fix(t), !0)
          };
        K.event.special[e] = {
          setup: function () {
            0 === n++ && O.addEventListener(t, i, !0)
          },
          teardown: function () {
            0 === --n && O.removeEventListener(t, i, !0)
          }
        }
      }), K.fn.extend({
        on: function (t, n, i, r, s) {
          var a, l;
          if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = e);
            for (l in t) this.on(l, n, i, t[l], s);
            return this
          }
          if (null == i && null == r ? (r = n, i = n = e) : null == r && ("string" == typeof n ? (r = i, i = e) : (r = i, i = n, n = e)), r === !1) r = o;
          else if (!r) return this;
          return 1 === s && (a = r, r = function (t) {
            return K().off(t), a.apply(this, arguments)
          }, r.guid = a.guid || (a.guid = K.guid++)), this.each(function () {
            K.event.add(this, t, r, i, n)
          })
        },
        one: function (t, e, n, i) {
          return this.on(t, e, n, i, 1)
        },
        off: function (t, n, i) {
          var r, s;
          if (t && t.preventDefault && t.handleObj) return r = t.handleObj, K(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
          if ("object" == typeof t) {
            for (s in t) this.off(s, n, t[s]);
            return this
          }
          return (n === !1 || "function" == typeof n) && (i = n, n = e), i === !1 && (i = o), this.each(function () {
            K.event.remove(this, t, i, n)
          })
        },
        bind: function (t, e, n) {
          return this.on(t, null, e, n)
        },
        unbind: function (t, e) {
          return this.off(t, null, e)
        },
        live: function (t, e, n) {
          return K(this.context).on(t, this.selector, e, n), this
        },
        die: function (t, e) {
          return K(this.context).off(t, this.selector || "**", e), this
        },
        delegate: function (t, e, n, i) {
          return this.on(e, t, n, i)
        },
        undelegate: function (t, e, n) {
          return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        },
        trigger: function (t, e) {
          return this.each(function () {
            K.event.trigger(t, e, this)
          })
        },
        triggerHandler: function (t, e) {
          return this[0] ? K.event.trigger(t, e, this[0], !0) : void 0
        },
        toggle: function (t) {
          var e = arguments,
            n = t.guid || K.guid++,
            i = 0,
            r = function (n) {
              var r = (K._data(this, "lastToggle" + t.guid) || 0) % i;
              return K._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), e[r].apply(this, arguments) || !1
            };
          for (r.guid = n; i < e.length;) e[i++].guid = n;
          return this.click(r)
        },
        hover: function (t, e) {
          return this.mouseenter(t).mouseleave(e || t)
        }
      }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        K.fn[e] = function (t, n) {
          return null == n && (n = t, t = null), arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }, Te.test(e) && (K.event.fixHooks[e] = K.event.keyHooks), Be.test(e) && (K.event.fixHooks[e] = K.event.mouseHooks)
      }),
      function (t, e) {
        function n(t, e, n, i) {
          n = n || [], e = e || B;
          var r, o, s, a, l = e.nodeType;
          if (!t || "string" != typeof t) return n;
          if (1 !== l && 9 !== l) return [];
          if (s = b(e), !s && !i && (r = ne.exec(t)))
            if (a = r[1]) {
              if (9 === l) {
                if (o = e.getElementById(a), !o || !o.parentNode) return n;
                if (o.id === a) return n.push(o), n
              } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && _(e, o) && o.id === a) return n.push(o), n
            } else {
              if (r[2]) return M.apply(n, I.call(e.getElementsByTagName(t), 0)), n;
              if ((a = r[3]) && he && e.getElementsByClassName) return M.apply(n, I.call(e.getElementsByClassName(a), 0)), n
            } return m(t.replace(Y, "$1"), e, n, i, s)
        }

        function i(t) {
          return function (e) {
            var n = e.nodeName.toLowerCase();
            return "input" === n && e.type === t
          }
        }

        function r(t) {
          return function (e) {
            var n = e.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && e.type === t
          }
        }

        function o(t) {
          return L(function (e) {
            return e = +e, L(function (n, i) {
              for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
            })
          })
        }

        function s(t, e, n) {
          if (t === e) return n;
          for (var i = t.nextSibling; i;) {
            if (i === e) return -1;
            i = i.nextSibling
          }
          return 1
        }

        function a(t, e) {
          var i, r, o, s, a, l, p, c = R[C][t];
          if (c) return e ? 0 : c.slice(0);
          for (a = t, l = [], p = k.preFilter; a;) {
            (!i || (r = Z.exec(a))) && (r && (a = a.slice(r[0].length)), l.push(o = [])), i = !1, (r = te.exec(a)) && (o.push(i = new T(r.shift())), a = a.slice(i.length), i.type = r[0].replace(Y, " "));
            for (s in k.filter)(r = ae[s].exec(a)) && (!p[s] || (r = p[s](r, B, !0))) && (o.push(i = new T(r.shift())), a = a.slice(i.length), i.type = s, i.matches = r);
            if (!i) break
          }
          return e ? a.length : a ? n.error(t) : R(t, l).slice(0)
        }

        function l(t, e, n) {
          var i = e.dir,
            r = n && "parentNode" === e.dir,
            o = V++;
          return e.first ? function (e, n, o) {
            for (; e = e[i];)
              if (r || 1 === e.nodeType) return t(e, n, o)
          } : function (e, n, s) {
            if (s) {
              for (; e = e[i];)
                if ((r || 1 === e.nodeType) && t(e, n, s)) return e
            } else
              for (var a, l = G + " " + o + " ", p = l + g; e = e[i];)
                if (r || 1 === e.nodeType) {
                  if ((a = e[C]) === p) return e.sizset;
                  if ("string" == typeof a && 0 === a.indexOf(l)) {
                    if (e.sizset) return e
                  } else {
                    if (e[C] = p, t(e, n, s)) return e.sizset = !0, e;
                    e.sizset = !1
                  }
                }
          }
        }

        function p(t) {
          return t.length > 1 ? function (e, n, i) {
            for (var r = t.length; r--;)
              if (!t[r](e, n, i)) return !1;
            return !0
          } : t[0]
        }

        function c(t, e, n, i, r) {
          for (var o, s = [], a = 0, l = t.length, p = null != e; l > a; a++)(o = t[a]) && (!n || n(o, i, r)) && (s.push(o), p && e.push(a));
          return s
        }

        function u(t, e, n, i, r, o) {
          return i && !i[C] && (i = u(i)), r && !r[C] && (r = u(r, o)), L(function (o, s, a, l) {
            if (!o || !r) {
              var p, u, h, d = [],
                m = [],
                y = s.length,
                g = o || f(e || "*", a.nodeType ? [a] : a, [], o),
                x = !t || !o && e ? g : c(g, d, t, a, l),
                k = n ? r || (o ? t : y || i) ? [] : s : x;
              if (n && n(x, k, a, l), i)
                for (h = c(k, m), i(h, [], a, l), p = h.length; p--;)(u = h[p]) && (k[m[p]] = !(x[m[p]] = u));
              if (o)
                for (p = t && k.length; p--;)(u = k[p]) && (o[d[p]] = !(s[d[p]] = u));
              else k = c(k === s ? k.splice(y, k.length) : k), r ? r(null, s, k, l) : M.apply(s, k)
            }
          })
        }

        function h(t) {
          for (var e, n, i, r = t.length, o = k.relative[t[0].type], s = o || k.relative[" "], a = o ? 1 : 0, c = l(function (t) {
              return t === e
            }, s, !0), d = l(function (t) {
              return j.call(e, t) > -1
            }, s, !0), f = [function (t, n, i) {
              return !o && (i || n !== D) || ((e = n).nodeType ? c(t, n, i) : d(t, n, i))
            }]; r > a; a++)
            if (n = k.relative[t[a].type]) f = [l(p(f), n)];
            else {
              if (n = k.filter[t[a].type].apply(null, t[a].matches), n[C]) {
                for (i = ++a; r > i && !k.relative[t[i].type]; i++);
                return u(a > 1 && p(f), a > 1 && t.slice(0, a - 1).join("").replace(Y, "$1"), n, i > a && h(t.slice(a, i)), r > i && h(t = t.slice(i)), r > i && t.join(""))
              }
              f.push(n)
            } return p(f)
        }

        function d(t, e) {
          var i = e.length > 0,
            r = t.length > 0,
            o = function (s, a, l, p, u) {
              var h, d, f, m = [],
                y = 0,
                x = "0",
                v = s && [],
                b = null != u,
                _ = D,
                E = s || r && k.find.TAG("*", u && a.parentNode || a),
                S = G += null == _ ? 1 : Math.E;
              for (b && (D = a !== B && a, g = o.el); null != (h = E[x]); x++) {
                if (r && h) {
                  for (d = 0; f = t[d]; d++)
                    if (f(h, a, l)) {
                      p.push(h);
                      break
                    } b && (G = S, g = ++o.el)
                }
                i && ((h = !f && h) && y--, s && v.push(h))
              }
              if (y += x, i && x !== y) {
                for (d = 0; f = e[d]; d++) f(v, m, a, l);
                if (s) {
                  if (y > 0)
                    for (; x--;) !v[x] && !m[x] && (m[x] = N.call(p));
                  m = c(m)
                }
                M.apply(p, m), b && !s && m.length > 0 && y + e.length > 1 && n.uniqueSort(p)
              }
              return b && (G = S, D = _), v
            };
          return o.el = 0, i ? L(o) : o
        }

        function f(t, e, i, r) {
          for (var o = 0, s = e.length; s > o; o++) n(t, e[o], i, r);
          return i
        }

        function m(t, e, n, i, r) {
          var o, s, l, p, c, u = a(t);
          if (u.length, !i && 1 === u.length) {
            if (s = u[0] = u[0].slice(0), s.length > 2 && "ID" === (l = s[0]).type && 9 === e.nodeType && !r && k.relative[s[1].type]) {
              if (e = k.find.ID(l.matches[0].replace(se, ""), e, r)[0], !e) return n;
              t = t.slice(s.shift().length)
            }
            for (o = ae.POS.test(t) ? -1 : s.length - 1; o >= 0 && (l = s[o], !k.relative[p = l.type]); o--)
              if ((c = k.find[p]) && (i = c(l.matches[0].replace(se, ""), ie.test(s[0].type) && e.parentNode || e, r))) {
                if (s.splice(o, 1), t = i.length && s.join(""), !t) return M.apply(n, I.call(i, 0)), n;
                break
              }
          }
          return E(t, u)(i, e, r, n, ie.test(t)), n
        }

        function y() {}
        var g, x, k, v, b, _, E, S, w, D, A = !0,
          F = "undefined",
          C = ("sizcache" + Math.random()).replace(".", ""),
          T = String,
          B = t.document,
          P = B.documentElement,
          G = 0,
          V = 0,
          N = [].pop,
          M = [].push,
          I = [].slice,
          j = [].indexOf || function (t) {
            for (var e = 0, n = this.length; n > e; e++)
              if (this[e] === t) return e;
            return -1
          },
          L = function (t, e) {
            return t[C] = null == e || e, t
          },
          H = function () {
            var t = {},
              e = [];
            return L(function (n, i) {
              return e.push(n) > k.cacheLength && delete t[e.shift()], t[n] = i
            }, t)
          },
          O = H(),
          R = H(),
          q = H(),
          z = "[\\x20\\t\\r\\n\\f]",
          $ = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
          W = $.replace("w", "w#"),
          X = "([*^$|!~]?=)",
          U = "\\[" + z + "*(" + $ + ")" + z + "*(?:" + X + z + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + z + "*\\]",
          J = ":(" + $ + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + U + ")|[^:]|\\\\.)*|.*))\\)|)",
          Q = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)",
          Y = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
          Z = new RegExp("^" + z + "*," + z + "*"),
          te = new RegExp("^" + z + "*([\\x20\\t\\r\\n\\f>+~])" + z + "*"),
          ee = new RegExp(J),
          ne = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
          ie = /[\x20\t\r\n\f]*[+~]/,
          re = /h\d/i,
          oe = /input|select|textarea|button/i,
          se = /\\(?!\\)/g,
          ae = {
            ID: new RegExp("^#(" + $ + ")"),
            CLASS: new RegExp("^\\.(" + $ + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + $ + ")['\"]?\\]"),
            TAG: new RegExp("^(" + $.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + U),
            PSEUDO: new RegExp("^" + J),
            POS: new RegExp(Q, "i"),
            CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)", "i"),
            needsContext: new RegExp("^" + z + "*[>+~]|" + Q, "i")
          },
          le = function (t) {
            var e = B.createElement("div");
            try {
              return t(e)
            } catch (n) {
              return !1
            } finally {
              e = null
            }
          },
          pe = le(function (t) {
            return t.appendChild(B.createComment("")), !t.getElementsByTagName("*").length
          }),
          ce = le(function (t) {
            return t.innerHTML = "<a href='#'></a>", t.firstChild && typeof t.firstChild.getAttribute !== F && "#" === t.firstChild.getAttribute("href")
          }),
          ue = le(function (t) {
            t.innerHTML = "<select></select>";
            var e = typeof t.lastChild.getAttribute("multiple");
            return "boolean" !== e && "string" !== e
          }),
          he = le(function (t) {
            return t.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", t.getElementsByClassName && t.getElementsByClassName("e").length ? (t.lastChild.className = "e", 2 === t.getElementsByClassName("e").length) : !1
          }),
          de = le(function (t) {
            t.id = C + 0, t.innerHTML = "<a name='" + C + "'></a><div name='" + C + "'></div>", P.insertBefore(t, P.firstChild);
            var e = B.getElementsByName && B.getElementsByName(C).length === 2 + B.getElementsByName(C + 0).length;
            return x = !B.getElementById(C), P.removeChild(t), e
          });
        try {
          I.call(P.childNodes, 0)[0].nodeType
        } catch (fe) {
          I = function (t) {
            for (var e, n = []; e = this[t]; t++) n.push(e);
            return n
          }
        }
        n.matches = function (t, e) {
          return n(t, null, null, e)
        }, n.matchesSelector = function (t, e) {
          return n(e, null, null, [t]).length > 0
        }, v = n.getText = function (t) {
          var e, n = "",
            i = 0,
            r = t.nodeType;
          if (r) {
            if (1 === r || 9 === r || 11 === r) {
              if ("string" == typeof t.textContent) return t.textContent;
              for (t = t.firstChild; t; t = t.nextSibling) n += v(t)
            } else if (3 === r || 4 === r) return t.nodeValue
          } else
            for (; e = t[i]; i++) n += v(e);
          return n
        }, b = n.isXML = function (t) {
          var e = t && (t.ownerDocument || t).documentElement;
          return e ? "HTML" !== e.nodeName : !1
        }, _ = n.contains = P.contains ? function (t, e) {
          var n = 9 === t.nodeType ? t.documentElement : t,
            i = e && e.parentNode;
          return t === i || !!(i && 1 === i.nodeType && n.contains && n.contains(i))
        } : P.compareDocumentPosition ? function (t, e) {
          return e && !!(16 & t.compareDocumentPosition(e))
        } : function (t, e) {
          for (; e = e.parentNode;)
            if (e === t) return !0;
          return !1
        }, n.attr = function (t, e) {
          var n, i = b(t);
          return i || (e = e.toLowerCase()), (n = k.attrHandle[e]) ? n(t) : i || ue ? t.getAttribute(e) : (n = t.getAttributeNode(e), n ? "boolean" == typeof t[e] ? t[e] ? e : null : n.specified ? n.value : null : null)
        }, k = n.selectors = {
          cacheLength: 50,
          createPseudo: L,
          match: ae,
          attrHandle: ce ? {} : {
            href: function (t) {
              return t.getAttribute("href", 2)
            },
            type: function (t) {
              return t.getAttribute("type")
            }
          },
          find: {
            ID: x ? function (t, e, n) {
              if (typeof e.getElementById !== F && !n) {
                var i = e.getElementById(t);
                return i && i.parentNode ? [i] : []
              }
            } : function (t, n, i) {
              if (typeof n.getElementById !== F && !i) {
                var r = n.getElementById(t);
                return r ? r.id === t || typeof r.getAttributeNode !== F && r.getAttributeNode("id").value === t ? [r] : e : []
              }
            },
            TAG: pe ? function (t, e) {
              return typeof e.getElementsByTagName !== F ? e.getElementsByTagName(t) : void 0
            } : function (t, e) {
              var n = e.getElementsByTagName(t);
              if ("*" === t) {
                for (var i, r = [], o = 0; i = n[o]; o++) 1 === i.nodeType && r.push(i);
                return r
              }
              return n
            },
            NAME: de && function (t, e) {
              return typeof e.getElementsByName !== F ? e.getElementsByName(name) : void 0
            },
            CLASS: he && function (t, e, n) {
              return typeof e.getElementsByClassName === F || n ? void 0 : e.getElementsByClassName(t)
            }
          },
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function (t) {
              return t[1] = t[1].replace(se, ""), t[3] = (t[4] || t[5] || "").replace(se, ""), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
            },
            CHILD: function (t) {
              return t[1] = t[1].toLowerCase(), "nth" === t[1] ? (t[2] || n.error(t[0]), t[3] = +(t[3] ? t[4] + (t[5] || 1) : 2 * ("even" === t[2] || "odd" === t[2])), t[4] = +(t[6] + t[7] || "odd" === t[2])) : t[2] && n.error(t[0]), t
            },
            PSEUDO: function (t) {
              var e, n;
              return ae.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[3] : (e = t[4]) && (ee.test(e) && (n = a(e, !0)) && (n = e.indexOf(")", e.length - n) - e.length) && (e = e.slice(0, n), t[0] = t[0].slice(0, n)), t[2] = e), t.slice(0, 3))
            }
          },
          filter: {
            ID: x ? function (t) {
              return t = t.replace(se, ""),
                function (e) {
                  return e.getAttribute("id") === t
                }
            } : function (t) {
              return t = t.replace(se, ""),
                function (e) {
                  var n = typeof e.getAttributeNode !== F && e.getAttributeNode("id");
                  return n && n.value === t
                }
            },
            TAG: function (t) {
              return "*" === t ? function () {
                return !0
              } : (t = t.replace(se, "").toLowerCase(), function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
              })
            },
            CLASS: function (t) {
              var e = O[C][t];
              return e || (e = O(t, new RegExp("(^|" + z + ")" + t + "(" + z + "|$)"))),
                function (t) {
                  return e.test(t.className || typeof t.getAttribute !== F && t.getAttribute("class") || "")
                }
            },
            ATTR: function (t, e, i) {
              return function (r) {
                var o = n.attr(r, t);
                return null == o ? "!=" === e : e ? (o += "", "=" === e ? o === i : "!=" === e ? o !== i : "^=" === e ? i && 0 === o.indexOf(i) : "*=" === e ? i && o.indexOf(i) > -1 : "$=" === e ? i && o.substr(o.length - i.length) === i : "~=" === e ? (" " + o + " ").indexOf(i) > -1 : "|=" === e ? o === i || o.substr(0, i.length + 1) === i + "-" : !1) : !0
              }
            },
            CHILD: function (t, e, n, i) {
              return "nth" === t ? function (t) {
                var e, r, o = t.parentNode;
                if (1 === n && 0 === i) return !0;
                if (o)
                  for (r = 0, e = o.firstChild; e && (1 !== e.nodeType || (r++, t !== e)); e = e.nextSibling);
                return r -= i, r === n || 0 === r % n && r / n >= 0
              } : function (e) {
                var n = e;
                switch (t) {
                  case "only":
                  case "first":
                    for (; n = n.previousSibling;)
                      if (1 === n.nodeType) return !1;
                    if ("first" === t) return !0;
                    n = e;
                  case "last":
                    for (; n = n.nextSibling;)
                      if (1 === n.nodeType) return !1;
                    return !0
                }
              }
            },
            PSEUDO: function (t, e) {
              var i, r = k.pseudos[t] || k.setFilters[t.toLowerCase()] || n.error("unsupported pseudo: " + t);
              return r[C] ? r(e) : r.length > 1 ? (i = [t, t, "", e], k.setFilters.hasOwnProperty(t.toLowerCase()) ? L(function (t, n) {
                for (var i, o = r(t, e), s = o.length; s--;) i = j.call(t, o[s]), t[i] = !(n[i] = o[s])
              }) : function (t) {
                return r(t, 0, i)
              }) : r
            }
          },
          pseudos: {
            not: L(function (t) {
              var e = [],
                n = [],
                i = E(t.replace(Y, "$1"));
              return i[C] ? L(function (t, e, n, r) {
                for (var o, s = i(t, null, r, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
              }) : function (t, r, o) {
                return e[0] = t, i(e, null, o, n), !n.pop()
              }
            }),
            has: L(function (t) {
              return function (e) {
                return n(t, e).length > 0
              }
            }),
            contains: L(function (t) {
              return function (e) {
                return (e.textContent || e.innerText || v(e)).indexOf(t) > -1
              }
            }),
            enabled: function (t) {
              return t.disabled === !1
            },
            disabled: function (t) {
              return t.disabled === !0
            },
            checked: function (t) {
              var e = t.nodeName.toLowerCase();
              return "input" === e && !!t.checked || "option" === e && !!t.selected
            },
            selected: function (t) {
              return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
            },
            parent: function (t) {
              return !k.pseudos.empty(t)
            },
            empty: function (t) {
              var e;
              for (t = t.firstChild; t;) {
                if (t.nodeName > "@" || 3 === (e = t.nodeType) || 4 === e) return !1;
                t = t.nextSibling
              }
              return !0
            },
            header: function (t) {
              return re.test(t.nodeName)
            },
            text: function (t) {
              var e, n;
              return "input" === t.nodeName.toLowerCase() && "text" === (e = t.type) && (null == (n = t.getAttribute("type")) || n.toLowerCase() === e)
            },
            radio: i("radio"),
            checkbox: i("checkbox"),
            file: i("file"),
            password: i("password"),
            image: i("image"),
            submit: r("submit"),
            reset: r("reset"),
            button: function (t) {
              var e = t.nodeName.toLowerCase();
              return "input" === e && "button" === t.type || "button" === e
            },
            input: function (t) {
              return oe.test(t.nodeName)
            },
            focus: function (t) {
              var e = t.ownerDocument;
              return !(t !== e.activeElement || e.hasFocus && !e.hasFocus() || !t.type && !t.href)
            },
            active: function (t) {
              return t === t.ownerDocument.activeElement
            },
            first: o(function () {
              return [0]
            }),
            last: o(function (t, e) {
              return [e - 1]
            }),
            eq: o(function (t, e, n) {
              return [0 > n ? n + e : n]
            }),
            even: o(function (t, e) {
              for (var n = 0; e > n; n += 2) t.push(n);
              return t
            }),
            odd: o(function (t, e) {
              for (var n = 1; e > n; n += 2) t.push(n);
              return t
            }),
            lt: o(function (t, e, n) {
              for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
              return t
            }),
            gt: o(function (t, e, n) {
              for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
              return t
            })
          }
        }, S = P.compareDocumentPosition ? function (t, e) {
          return t === e ? (w = !0, 0) : (t.compareDocumentPosition && e.compareDocumentPosition ? 4 & t.compareDocumentPosition(e) : t.compareDocumentPosition) ? -1 : 1
        } : function (t, e) {
          if (t === e) return w = !0, 0;
          if (t.sourceIndex && e.sourceIndex) return t.sourceIndex - e.sourceIndex;
          var n, i, r = [],
            o = [],
            a = t.parentNode,
            l = e.parentNode,
            p = a;
          if (a === l) return s(t, e);
          if (!a) return -1;
          if (!l) return 1;
          for (; p;) r.unshift(p), p = p.parentNode;
          for (p = l; p;) o.unshift(p), p = p.parentNode;
          n = r.length, i = o.length;
          for (var c = 0; n > c && i > c; c++)
            if (r[c] !== o[c]) return s(r[c], o[c]);
          return c === n ? s(t, o[c], -1) : s(r[c], e, 1)
        }, [0, 0].sort(S), A = !w, n.uniqueSort = function (t) {
          var e, n = 1;
          if (w = A, t.sort(S), w)
            for (; e = t[n]; n++) e === t[n - 1] && t.splice(n--, 1);
          return t
        }, n.error = function (t) {
          throw new Error("Syntax error, unrecognized expression: " + t)
        }, E = n.compile = function (t, e) {
          var n, i = [],
            r = [],
            o = q[C][t];
          if (!o) {
            for (e || (e = a(t)), n = e.length; n--;) o = h(e[n]), o[C] ? i.push(o) : r.push(o);
            o = q(t, d(r, i))
          }
          return o
        }, B.querySelectorAll && function () {
          var t, e = m,
            i = /'|\\/g,
            r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            o = [":focus"],
            s = [":active", ":focus"],
            l = P.matchesSelector || P.mozMatchesSelector || P.webkitMatchesSelector || P.oMatchesSelector || P.msMatchesSelector;
          le(function (t) {
            t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || o.push("\\[" + z + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), t.querySelectorAll(":checked").length || o.push(":checked")
          }), le(function (t) {
            t.innerHTML = "<p test=''></p>", t.querySelectorAll("[test^='']").length && o.push("[*^$]=" + z + "*(?:\"\"|'')"), t.innerHTML = "<input type='hidden'/>", t.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled")
          }), o = new RegExp(o.join("|")), m = function (t, n, r, s, l) {
            if (!(s || l || o && o.test(t))) {
              var p, c, u = !0,
                h = C,
                d = n,
                f = 9 === n.nodeType && t;
              if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                for (p = a(t), (u = n.getAttribute("id")) ? h = u.replace(i, "\\$&") : n.setAttribute("id", h), h = "[id='" + h + "'] ", c = p.length; c--;) p[c] = h + p[c].join("");
                d = ie.test(t) && n.parentNode || n, f = p.join(",")
              }
              if (f) try {
                return M.apply(r, I.call(d.querySelectorAll(f), 0)), r
              } catch (m) {} finally {
                u || n.removeAttribute("id")
              }
            }
            return e(t, n, r, s, l)
          }, l && (le(function (e) {
            t = l.call(e, "div");
            try {
              l.call(e, "[test!='']:sizzle"), s.push("!=", J)
            } catch (n) {}
          }), s = new RegExp(s.join("|")), n.matchesSelector = function (e, i) {
            if (i = i.replace(r, "='$1']"), !(b(e) || s.test(i) || o && o.test(i))) try {
              var a = l.call(e, i);
              if (a || t || e.document && 11 !== e.document.nodeType) return a
            } catch (p) {}
            return n(i, null, null, [e]).length > 0
          })
        }(), k.pseudos.nth = k.pseudos.eq, k.filters = y.prototype = k.pseudos, k.setFilters = new y, n.attr = K.attr, K.find = n, K.expr = n.selectors, K.expr[":"] = K.expr.pseudos, K.unique = n.uniqueSort, K.text = n.getText, K.isXMLDoc = n.isXML, K.contains = n.contains
      }(t);
    var Ve = /Until$/,
      Ne = /^(?:parents|prev(?:Until|All))/,
      Me = /^.[^:#\[\.,]*$/,
      Ie = K.expr.match.needsContext,
      je = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
    K.fn.extend({
      find: function (t) {
        var e, n, i, r, o, s, a = this;
        if ("string" != typeof t) return K(t).filter(function () {
          for (e = 0, n = a.length; n > e; e++)
            if (K.contains(a[e], this)) return !0
        });
        for (s = this.pushStack("", "find", t), e = 0, n = this.length; n > e; e++)
          if (i = s.length, K.find(t, this[e], s), e > 0)
            for (r = i; r < s.length; r++)
              for (o = 0; i > o; o++)
                if (s[o] === s[r]) {
                  s.splice(r--, 1);
                  break
                } return s
      },
      has: function (t) {
        var e, n = K(t, this),
          i = n.length;
        return this.filter(function () {
          for (e = 0; i > e; e++)
            if (K.contains(this, n[e])) return !0
        })
      },
      not: function (t) {
        return this.pushStack(p(this, t, !1), "not", t)
      },
      filter: function (t) {
        return this.pushStack(p(this, t, !0), "filter", t)
      },
      is: function (t) {
        return !!t && ("string" == typeof t ? Ie.test(t) ? K(t, this.context).index(this[0]) >= 0 : K.filter(t, this).length > 0 : this.filter(t).length > 0)
      },
      closest: function (t, e) {
        for (var n, i = 0, r = this.length, o = [], s = Ie.test(t) || "string" != typeof t ? K(t, e || this.context) : 0; r > i; i++)
          for (n = this[i]; n && n.ownerDocument && n !== e && 11 !== n.nodeType;) {
            if (s ? s.index(n) > -1 : K.find.matchesSelector(n, t)) {
              o.push(n);
              break
            }
            n = n.parentNode
          }
        return o = o.length > 1 ? K.unique(o) : o, this.pushStack(o, "closest", t)
      },
      index: function (t) {
        return t ? "string" == typeof t ? K.inArray(this[0], K(t)) : K.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
      },
      add: function (t, e) {
        var n = "string" == typeof t ? K(t, e) : K.makeArray(t && t.nodeType ? [t] : t),
          i = K.merge(this.get(), n);
        return this.pushStack(a(n[0]) || a(i[0]) ? i : K.unique(i))
      },
      addBack: function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
      }
    }), K.fn.andSelf = K.fn.addBack, K.each({
      parent: function (t) {
        var e = t.parentNode;
        return e && 11 !== e.nodeType ? e : null
      },
      parents: function (t) {
        return K.dir(t, "parentNode")
      },
      parentsUntil: function (t, e, n) {
        return K.dir(t, "parentNode", n)
      },
      next: function (t) {
        return l(t, "nextSibling")
      },
      prev: function (t) {
        return l(t, "previousSibling")
      },
      nextAll: function (t) {
        return K.dir(t, "nextSibling")
      },
      prevAll: function (t) {
        return K.dir(t, "previousSibling")
      },
      nextUntil: function (t, e, n) {
        return K.dir(t, "nextSibling", n)
      },
      prevUntil: function (t, e, n) {
        return K.dir(t, "previousSibling", n)
      },
      siblings: function (t) {
        return K.sibling((t.parentNode || {}).firstChild, t)
      },
      children: function (t) {
        return K.sibling(t.firstChild)
      },
      contents: function (t) {
        return K.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : K.merge([], t.childNodes)
      }
    }, function (t, e) {
      K.fn[t] = function (n, i) {
        var r = K.map(this, e, n);
        return Ve.test(t) || (i = n), i && "string" == typeof i && (r = K.filter(i, r)), r = this.length > 1 && !je[t] ? K.unique(r) : r, this.length > 1 && Ne.test(t) && (r = r.reverse()), this.pushStack(r, t, X.call(arguments).join(","))
      }
    }), K.extend({
      filter: function (t, e, n) {
        return n && (t = ":not(" + t + ")"), 1 === e.length ? K.find.matchesSelector(e[0], t) ? [e[0]] : [] : K.find.matches(t, e)
      },
      dir: function (t, n, i) {
        for (var r = [], o = t[n]; o && 9 !== o.nodeType && (i === e || 1 !== o.nodeType || !K(o).is(i));) 1 === o.nodeType && r.push(o), o = o[n];
        return r
      },
      sibling: function (t, e) {
        for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
        return n
      }
    });
    var Le = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      He = / jQuery\d+="(?:null|\d+)"/g,
      Oe = /^\s+/,
      Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      qe = /<([\w:]+)/,
      ze = /<tbody/i,
      $e = /<|&#?\w+;/,
      We = /<(?:script|style|link)/i,
      Xe = /<(?:script|object|embed|option|style)/i,
      Ue = new RegExp("<(?:" + Le + ")[\\s/>]", "i"),
      Je = /^(?:checkbox|radio)$/,
      Qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ye = /\/(java|ecma)script/i,
      Ke = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
      Ze = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
      },
      tn = c(O),
      en = tn.appendChild(O.createElement("div"));
    Ze.optgroup = Ze.option, Ze.tbody = Ze.tfoot = Ze.colgroup = Ze.caption = Ze.thead, Ze.th = Ze.td, K.support.htmlSerialize || (Ze._default = [1, "X<div>", "</div>"]), K.fn.extend({
        text: function (t) {
          return K.access(this, function (t) {
            return t === e ? K.text(this) : this.empty().append((this[0] && this[0].ownerDocument || O).createTextNode(t))
          }, null, t, arguments.length)
        },
        wrapAll: function (t) {
          if (K.isFunction(t)) return this.each(function (e) {
            K(this).wrapAll(t.call(this, e))
          });
          if (this[0]) {
            var e = K(t, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
              for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
              return t
            }).append(this)
          }
          return this
        },
        wrapInner: function (t) {
          return K.isFunction(t) ? this.each(function (e) {
            K(this).wrapInner(t.call(this, e))
          }) : this.each(function () {
            var e = K(this),
              n = e.contents();
            n.length ? n.wrapAll(t) : e.append(t)
          })
        },
        wrap: function (t) {
          var e = K.isFunction(t);
          return this.each(function (n) {
            K(this).wrapAll(e ? t.call(this, n) : t)
          })
        },
        unwrap: function () {
          return this.parent().each(function () {
            K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
          }).end()
        },
        append: function () {
          return this.domManip(arguments, !0, function (t) {
            (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(t)
          })
        },
        prepend: function () {
          return this.domManip(arguments, !0, function (t) {
            (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(t, this.firstChild)
          })
        },
        before: function () {
          if (!a(this[0])) return this.domManip(arguments, !1, function (t) {
            this.parentNode.insertBefore(t, this)
          });
          if (arguments.length) {
            var t = K.clean(arguments);
            return this.pushStack(K.merge(t, this), "before", this.selector)
          }
        },
        after: function () {
          if (!a(this[0])) return this.domManip(arguments, !1, function (t) {
            this.parentNode.insertBefore(t, this.nextSibling)
          });
          if (arguments.length) {
            var t = K.clean(arguments);
            return this.pushStack(K.merge(this, t), "after", this.selector)
          }
        },
        remove: function (t, e) {
          for (var n, i = 0; null != (n = this[i]); i++)(!t || K.filter(t, [n]).length) && (!e && 1 === n.nodeType && (K.cleanData(n.getElementsByTagName("*")), K.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
          return this
        },
        empty: function () {
          for (var t, e = 0; null != (t = this[e]); e++)
            for (1 === t.nodeType && K.cleanData(t.getElementsByTagName("*")); t.firstChild;) t.removeChild(t.firstChild);
          return this
        },
        clone: function (t, e) {
          return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
            return K.clone(this, t, e)
          })
        },
        html: function (t) {
          return K.access(this, function (t) {
            var n = this[0] || {},
              i = 0,
              r = this.length;
            if (t === e) return 1 === n.nodeType ? n.innerHTML.replace(He, "") : e;
            if (!("string" != typeof t || We.test(t) || !K.support.htmlSerialize && Ue.test(t) || !K.support.leadingWhitespace && Oe.test(t) || Ze[(qe.exec(t) || ["", ""])[1].toLowerCase()])) {
              t = t.replace(Re, "<$1></$2>");
              try {
                for (; r > i; i++) n = this[i] || {}, 1 === n.nodeType && (K.cleanData(n.getElementsByTagName("*")), n.innerHTML = t);
                n = 0
              } catch (o) {}
            }
            n && this.empty().append(t)
          }, null, t, arguments.length)
        },
        replaceWith: function (t) {
          return a(this[0]) ? this.length ? this.pushStack(K(K.isFunction(t) ? t() : t), "replaceWith", t) : this : K.isFunction(t) ? this.each(function (e) {
            var n = K(this),
              i = n.html();
            n.replaceWith(t.call(this, e, i))
          }) : ("string" != typeof t && (t = K(t).detach()), this.each(function () {
            var e = this.nextSibling,
              n = this.parentNode;
            K(this).remove(), e ? K(e).before(t) : K(n).append(t)
          }))
        },
        detach: function (t) {
          return this.remove(t, !0)
        },
        domManip: function (t, n, i) {
          t = [].concat.apply([], t);
          var r, o, s, a, l = 0,
            p = t[0],
            c = [],
            h = this.length;
          if (!K.support.checkClone && h > 1 && "string" == typeof p && Qe.test(p)) return this.each(function () {
            K(this).domManip(t, n, i)
          });
          if (K.isFunction(p)) return this.each(function (r) {
            var o = K(this);
            t[0] = p.call(this, r, n ? o.html() : e), o.domManip(t, n, i)
          });
          if (this[0]) {
            if (r = K.buildFragment(t, this, c), s = r.fragment, o = s.firstChild, 1 === s.childNodes.length && (s = o), o)
              for (n = n && K.nodeName(o, "tr"), a = r.cacheable || h - 1; h > l; l++) i.call(n && K.nodeName(this[l], "table") ? u(this[l], "tbody") : this[l], l === a ? s : K.clone(s, !0, !0));
            s = o = null, c.length && K.each(c, function (t, e) {
              e.src ? K.ajax ? K.ajax({
                url: e.src,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
              }) : K.error("no ajax") : K.globalEval((e.text || e.textContent || e.innerHTML || "").replace(Ke, "")), e.parentNode && e.parentNode.removeChild(e)
            })
          }
          return this
        }
      }), K.buildFragment = function (t, n, i) {
        var r, o, s, a = t[0];
        return n = n || O, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, 1 === t.length && "string" == typeof a && a.length < 512 && n === O && "<" === a.charAt(0) && !Xe.test(a) && (K.support.checkClone || !Qe.test(a)) && (K.support.html5Clone || !Ue.test(a)) && (o = !0, r = K.fragments[a], s = r !== e), r || (r = n.createDocumentFragment(), K.clean(t, n, r, i), o && (K.fragments[a] = s && r)), {
          fragment: r,
          cacheable: o
        }
      }, K.fragments = {}, K.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function (t, e) {
        K.fn[t] = function (n) {
          var i, r = 0,
            o = [],
            s = K(n),
            a = s.length,
            l = 1 === this.length && this[0].parentNode;
          if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === a) return s[e](this[0]), this;
          for (; a > r; r++) i = (r > 0 ? this.clone(!0) : this).get(), K(s[r])[e](i), o = o.concat(i);
          return this.pushStack(o, t, s.selector)
        }
      }), K.extend({
        clone: function (t, e, n) {
          var i, r, o, s;
          if (K.support.html5Clone || K.isXMLDoc(t) || !Ue.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (en.innerHTML = t.outerHTML, en.removeChild(s = en.firstChild)), !(K.support.noCloneEvent && K.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || K.isXMLDoc(t)))
            for (d(t, s), i = f(t), r = f(s), o = 0; i[o]; ++o) r[o] && d(i[o], r[o]);
          if (e && (h(t, s), n))
            for (i = f(t), r = f(s), o = 0; i[o]; ++o) h(i[o], r[o]);
          return i = r = null, s
        },
        clean: function (t, e, n, i) {
          var r, o, s, a, l, p, u, h, d, f, y, g = e === O && tn,
            x = [];
          for (e && "undefined" != typeof e.createDocumentFragment || (e = O), r = 0; null != (s = t[r]); r++)
            if ("number" == typeof s && (s += ""), s) {
              if ("string" == typeof s)
                if ($e.test(s)) {
                  for (g = g || c(e), u = e.createElement("div"), g.appendChild(u), s = s.replace(Re, "<$1></$2>"), a = (qe.exec(s) || ["", ""])[1].toLowerCase(), l = Ze[a] || Ze._default, p = l[0], u.innerHTML = l[1] + s + l[2]; p--;) u = u.lastChild;
                  if (!K.support.tbody)
                    for (h = ze.test(s), d = "table" !== a || h ? "<table>" !== l[1] || h ? [] : u.childNodes : u.firstChild && u.firstChild.childNodes, o = d.length - 1; o >= 0; --o) K.nodeName(d[o], "tbody") && !d[o].childNodes.length && d[o].parentNode.removeChild(d[o]);
                  !K.support.leadingWhitespace && Oe.test(s) && u.insertBefore(e.createTextNode(Oe.exec(s)[0]), u.firstChild), s = u.childNodes, u.parentNode.removeChild(u)
                } else s = e.createTextNode(s);
              s.nodeType ? x.push(s) : K.merge(x, s)
            } if (u && (s = u = g = null), !K.support.appendChecked)
            for (r = 0; null != (s = x[r]); r++) K.nodeName(s, "input") ? m(s) : "undefined" != typeof s.getElementsByTagName && K.grep(s.getElementsByTagName("input"), m);
          if (n)
            for (f = function (t) {
                return !t.type || Ye.test(t.type) ? i ? i.push(t.parentNode ? t.parentNode.removeChild(t) : t) : n.appendChild(t) : void 0
              }, r = 0; null != (s = x[r]); r++) K.nodeName(s, "script") && f(s) || (n.appendChild(s), "undefined" != typeof s.getElementsByTagName && (y = K.grep(K.merge([], s.getElementsByTagName("script")), f), x.splice.apply(x, [r + 1, 0].concat(y)), r += y.length));
          return x
        },
        cleanData: function (t, e) {
          for (var n, i, r, o, s = 0, a = K.expando, l = K.cache, p = K.support.deleteExpando, c = K.event.special; null != (r = t[s]); s++)
            if ((e || K.acceptData(r)) && (i = r[a], n = i && l[i])) {
              if (n.events)
                for (o in n.events) c[o] ? K.event.remove(r, o) : K.removeEvent(r, o, n.handle);
              l[i] && (delete l[i], p ? delete r[a] : r.removeAttribute ? r.removeAttribute(a) : r[a] = null, K.deletedIds.push(i))
            }
        }
      }),
      function () {
        var t, e;
        K.uaMatch = function (t) {
          t = t.toLowerCase();
          var e = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
          return {
            browser: e[1] || "",
            version: e[2] || "0"
          }
        }, t = K.uaMatch(q.userAgent), e = {}, t.browser && (e[t.browser] = !0, e.version = t.version), e.chrome ? e.webkit = !0 : e.webkit && (e.safari = !0), K.browser = e, K.sub = function () {
          function t(e, n) {
            return new t.fn.init(e, n)
          }
          K.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function n(n, i) {
            return i && i instanceof K && !(i instanceof t) && (i = t(i)), K.fn.init.call(this, n, i, e)
          }, t.fn.init.prototype = t.fn;
          var e = t(O);
          return t
        }
      }();
    var nn, rn, on, sn = /alpha\([^)]*\)/i,
      an = /opacity=([^)]*)/,
      ln = /^(top|right|bottom|left)$/,
      pn = /^(none|table(?!-c[ea]).+)/,
      cn = /^margin/,
      un = new RegExp("^(" + Z + ")(.*)$", "i"),
      hn = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
      dn = new RegExp("^([-+])=(" + Z + ")", "i"),
      fn = {},
      mn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      yn = {
        letterSpacing: 0,
        fontWeight: 400
      },
      gn = ["Top", "Right", "Bottom", "Left"],
      xn = ["Webkit", "O", "Moz", "ms"],
      kn = K.fn.toggle;
    K.fn.extend({
      css: function (t, n) {
        return K.access(this, function (t, n, i) {
          return i !== e ? K.style(t, n, i) : K.css(t, n)
        }, t, n, arguments.length > 1)
      },
      show: function () {
        return x(this, !0)
      },
      hide: function () {
        return x(this)
      },
      toggle: function (t, e) {
        var n = "boolean" == typeof t;
        return K.isFunction(t) && K.isFunction(e) ? kn.apply(this, arguments) : this.each(function () {
          (n ? t : g(this)) ? K(this).show(): K(this).hide()
        })
      }
    }), K.extend({
      cssHooks: {
        opacity: {
          get: function (t, e) {
            if (e) {
              var n = nn(t, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {
        "float": K.support.cssFloat ? "cssFloat" : "styleFloat"
      },
      style: function (t, n, i, r) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var o, s, a, l = K.camelCase(n),
            p = t.style;
          if (n = K.cssProps[l] || (K.cssProps[l] = y(p, l)), a = K.cssHooks[n] || K.cssHooks[l], i === e) return a && "get" in a && (o = a.get(t, !1, r)) !== e ? o : p[n];
          if (s = typeof i, "string" === s && (o = dn.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(K.css(t, n)), s = "number"), !(null == i || "number" === s && isNaN(i) || ("number" === s && !K.cssNumber[l] && (i += "px"), a && "set" in a && (i = a.set(t, i, r)) === e))) try {
            p[n] = i
          } catch (c) {}
        }
      },
      css: function (t, n, i, r) {
        var o, s, a, l = K.camelCase(n);
        return n = K.cssProps[l] || (K.cssProps[l] = y(t.style, l)), a = K.cssHooks[n] || K.cssHooks[l], a && "get" in a && (o = a.get(t, !0, r)), o === e && (o = nn(t, n)), "normal" === o && n in yn && (o = yn[n]), i || r !== e ? (s = parseFloat(o), i || K.isNumeric(s) ? s || 0 : o) : o
      },
      swap: function (t, e, n) {
        var i, r, o = {};
        for (r in e) o[r] = t.style[r], t.style[r] = e[r];
        i = n.call(t);
        for (r in e) t.style[r] = o[r];
        return i
      }
    }), t.getComputedStyle ? nn = function (e, n) {
      var i, r, o, s, a = t.getComputedStyle(e, null),
        l = e.style;
      return a && (i = a[n], "" === i && !K.contains(e.ownerDocument, e) && (i = K.style(e, n)), hn.test(i) && cn.test(n) && (r = l.width, o = l.minWidth, s = l.maxWidth, l.minWidth = l.maxWidth = l.width = i, i = a.width, l.width = r, l.minWidth = o, l.maxWidth = s)), i
    } : O.documentElement.currentStyle && (nn = function (t, e) {
      var n, i, r = t.currentStyle && t.currentStyle[e],
        o = t.style;
      return null == r && o && o[e] && (r = o[e]), hn.test(r) && !ln.test(e) && (n = o.left, i = t.runtimeStyle && t.runtimeStyle.left, i && (t.runtimeStyle.left = t.currentStyle.left), o.left = "fontSize" === e ? "1em" : r, r = o.pixelLeft + "px", o.left = n, i && (t.runtimeStyle.left = i)), "" === r ? "auto" : r
    }), K.each(["height", "width"], function (t, e) {
      K.cssHooks[e] = {
        get: function (t, n, i) {
          return n ? 0 === t.offsetWidth && pn.test(nn(t, "display")) ? K.swap(t, mn, function () {
            return b(t, e, i)
          }) : b(t, e, i) : void 0
        },
        set: function (t, n, i) {
          return k(t, n, i ? v(t, e, i, K.support.boxSizing && "border-box" === K.css(t, "boxSizing")) : 0)
        }
      }
    }), K.support.opacity || (K.cssHooks.opacity = {
      get: function (t, e) {
        return an.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
      },
      set: function (t, e) {
        var n = t.style,
          i = t.currentStyle,
          r = K.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
          o = i && i.filter || n.filter || "";
        n.zoom = 1, e >= 1 && "" === K.trim(o.replace(sn, "")) && n.removeAttribute && (n.removeAttribute("filter"), i && !i.filter) || (n.filter = sn.test(o) ? o.replace(sn, r) : o + " " + r)
      }
    }), K(function () {
      K.support.reliableMarginRight || (K.cssHooks.marginRight = {
        get: function (t, e) {
          return K.swap(t, {
            display: "inline-block"
          }, function () {
            return e ? nn(t, "marginRight") : void 0
          })
        }
      }), !K.support.pixelPosition && K.fn.position && K.each(["top", "left"], function (t, e) {
        K.cssHooks[e] = {
          get: function (t, n) {
            if (n) {
              var i = nn(t, e);
              return hn.test(i) ? K(t).position()[e] + "px" : i
            }
          }
        }
      })
    }), K.expr && K.expr.filters && (K.expr.filters.hidden = function (t) {
      return 0 === t.offsetWidth && 0 === t.offsetHeight || !K.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || nn(t, "display"))
    }, K.expr.filters.visible = function (t) {
      return !K.expr.filters.hidden(t)
    }), K.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (t, e) {
      K.cssHooks[t + e] = {
        expand: function (n) {
          var i, r = "string" == typeof n ? n.split(" ") : [n],
            o = {};
          for (i = 0; 4 > i; i++) o[t + gn[i] + e] = r[i] || r[i - 2] || r[0];
          return o
        }
      }, cn.test(t) || (K.cssHooks[t + e].set = k)
    });
    var vn = /%20/g,
      bn = /\[\]$/,
      _n = /\r?\n/g,
      En = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
      Sn = /^(?:select|textarea)/i;
    K.fn.extend({
      serialize: function () {
        return K.param(this.serializeArray())
      },
      serializeArray: function () {
        return this.map(function () {
          return this.elements ? K.makeArray(this.elements) : this
        }).filter(function () {
          return this.name && !this.disabled && (this.checked || Sn.test(this.nodeName) || En.test(this.type))
        }).map(function (t, e) {
          var n = K(this).val();
          return null == n ? null : K.isArray(n) ? K.map(n, function (t) {
            return {
              name: e.name,
              value: t.replace(_n, "\r\n")
            }
          }) : {
            name: e.name,
            value: n.replace(_n, "\r\n")
          }
        }).get()
      }
    }), K.param = function (t, n) {
      var i, r = [],
        o = function (t, e) {
          e = K.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
      if (n === e && (n = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(t) || t.jquery && !K.isPlainObject(t)) K.each(t, function () {
        o(this.name, this.value)
      });
      else
        for (i in t) E(i, t[i], n, o);
      return r.join("&").replace(vn, "+")
    };
    var wn, Dn, An = /#.*$/,
      Fn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Cn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
      Tn = /^(?:GET|HEAD)$/,
      Bn = /^\/\//,
      Pn = /\?/,
      Gn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      Vn = /([?&])_=[^&]*/,
      Nn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      Mn = K.fn.load,
      In = {},
      jn = {},
      Ln = ["*/"] + ["*"];
    try {
      Dn = R.href
    } catch (Hn) {
      Dn = O.createElement("a"), Dn.href = "", Dn = Dn.href
    }
    wn = Nn.exec(Dn.toLowerCase()) || [], K.fn.load = function (t, n, i) {
      if ("string" != typeof t && Mn) return Mn.apply(this, arguments);
      if (!this.length) return this;
      var r, o, s, a = this,
        l = t.indexOf(" ");
      return l >= 0 && (r = t.slice(l, t.length), t = t.slice(0, l)), K.isFunction(n) ? (i = n, n = e) : n && "object" == typeof n && (o = "POST"), K.ajax({
        url: t,
        type: o,
        dataType: "html",
        data: n,
        complete: function (t, e) {
          i && a.each(i, s || [t.responseText, e, t])
        }
      }).done(function (t) {
        s = arguments, a.html(r ? K("<div>").append(t.replace(Gn, "")).find(r) : t)
      }), this
    }, K.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (t, e) {
      K.fn[e] = function (t) {
        return this.on(e, t)
      }
    }), K.each(["get", "post"], function (t, n) {
      K[n] = function (t, i, r, o) {
        return K.isFunction(i) && (o = o || r, r = i, i = e), K.ajax({
          type: n,
          url: t,
          data: i,
          success: r,
          dataType: o
        })
      }
    }), K.extend({
      getScript: function (t, n) {
        return K.get(t, e, n, "script")
      },
      getJSON: function (t, e, n) {
        return K.get(t, e, n, "json")
      },
      ajaxSetup: function (t, e) {
        return e ? D(t, K.ajaxSettings) : (e = t, t = K.ajaxSettings), D(t, e), t
      },
      ajaxSettings: {
        url: Dn,
        isLocal: Cn.test(wn[1]),
        global: !0,
        type: "GET",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        processData: !0,
        async: !0,
        accepts: {
          xml: "application/xml, text/xml",
          html: "text/html",
          text: "text/plain",
          json: "application/json, text/javascript",
          "*": Ln
        },
        contents: {
          xml: /xml/,
          html: /html/,
          json: /json/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText"
        },
        converters: {
          "* text": t.String,
          "text html": !0,
          "text json": K.parseJSON,
          "text xml": K.parseXML
        },
        flatOptions: {
          context: !0,
          url: !0
        }
      },
      ajaxPrefilter: S(In),
      ajaxTransport: S(jn),
      ajax: function (t, n) {
        function i(t, n, i, s) {
          var p, u, x, k, b, E = n;
          2 !== v && (v = 2, l && clearTimeout(l), a = e, o = s || "", _.readyState = t > 0 ? 4 : 0, i && (k = A(h, _, i)), t >= 200 && 300 > t || 304 === t ? (h.ifModified && (b = _.getResponseHeader("Last-Modified"), b && (K.lastModified[r] = b), b = _.getResponseHeader("Etag"), b && (K.etag[r] = b)), 304 === t ? (E = "notmodified", p = !0) : (p = F(h, k), E = p.state, u = p.data, x = p.error, p = !x)) : (x = E, (!E || t) && (E = "error", 0 > t && (t = 0))), _.status = t, _.statusText = (n || E) + "", p ? m.resolveWith(d, [u, E, _]) : m.rejectWith(d, [_, E, x]), _.statusCode(g), g = e, c && f.trigger("ajax" + (p ? "Success" : "Error"), [_, h, p ? u : x]), y.fireWith(d, [_, E]), c && (f.trigger("ajaxComplete", [_, h]), --K.active || K.event.trigger("ajaxStop")))
        }
        "object" == typeof t && (n = t, t = e), n = n || {};
        var r, o, s, a, l, p, c, u, h = K.ajaxSetup({}, n),
          d = h.context || h,
          f = d !== h && (d.nodeType || d instanceof K) ? K(d) : K.event,
          m = K.Deferred(),
          y = K.Callbacks("once memory"),
          g = h.statusCode || {},
          x = {},
          k = {},
          v = 0,
          b = "canceled",
          _ = {
            readyState: 0,
            setRequestHeader: function (t, e) {
              if (!v) {
                var n = t.toLowerCase();
                t = k[n] = k[n] || t, x[t] = e
              }
              return this
            },
            getAllResponseHeaders: function () {
              return 2 === v ? o : null
            },
            getResponseHeader: function (t) {
              var n;
              if (2 === v) {
                if (!s)
                  for (s = {}; n = Fn.exec(o);) s[n[1].toLowerCase()] = n[2];
                n = s[t.toLowerCase()]
              }
              return n === e ? null : n
            },
            overrideMimeType: function (t) {
              return v || (h.mimeType = t), this
            },
            abort: function (t) {
              return t = t || b, a && a.abort(t), i(0, t), this
            }
          };
        if (m.promise(_), _.success = _.done, _.error = _.fail, _.complete = y.add, _.statusCode = function (t) {
            if (t) {
              var e;
              if (2 > v)
                for (e in t) g[e] = [g[e], t[e]];
              else e = t[_.status], _.always(e)
            }
            return this
          }, h.url = ((t || h.url) + "").replace(An, "").replace(Bn, wn[1] + "//"), h.dataTypes = K.trim(h.dataType || "*").toLowerCase().split(ee), null == h.crossDomain && (p = Nn.exec(h.url.toLowerCase()) || !1, h.crossDomain = p && p.join(":") + (p[3] ? "" : "http:" === p[1] ? 80 : 443) !== wn.join(":") + (wn[3] ? "" : "http:" === wn[1] ? 80 : 443)), h.data && h.processData && "string" != typeof h.data && (h.data = K.param(h.data, h.traditional)), w(In, h, n, _), 2 === v) return _;
        if (c = h.global, h.type = h.type.toUpperCase(), h.hasContent = !Tn.test(h.type), c && 0 === K.active++ && K.event.trigger("ajaxStart"), !h.hasContent && (h.data && (h.url += (Pn.test(h.url) ? "&" : "?") + h.data, delete h.data), r = h.url, h.cache === !1)) {
          var E = K.now(),
            S = h.url.replace(Vn, "$1_=" + E);
          h.url = S + (S === h.url ? (Pn.test(h.url) ? "&" : "?") + "_=" + E : "")
        }(h.data && h.hasContent && h.contentType !== !1 || n.contentType) && _.setRequestHeader("Content-Type", h.contentType), h.ifModified && (r = r || h.url, K.lastModified[r] && _.setRequestHeader("If-Modified-Since", K.lastModified[r]), K.etag[r] && _.setRequestHeader("If-None-Match", K.etag[r])), _.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ln + "; q=0.01" : "") : h.accepts["*"]);
        for (u in h.headers) _.setRequestHeader(u, h.headers[u]);
        if (!h.beforeSend || h.beforeSend.call(d, _, h) !== !1 && 2 !== v) {
          b = "abort";
          for (u in {
              success: 1,
              error: 1,
              complete: 1
            }) _[u](h[u]);
          if (a = w(jn, h, n, _)) {
            _.readyState = 1, c && f.trigger("ajaxSend", [_, h]), h.async && h.timeout > 0 && (l = setTimeout(function () {
              _.abort("timeout")
            }, h.timeout));
            try {
              v = 1, a.send(x, i)
            } catch (D) {
              if (!(2 > v)) throw D;
              i(-1, D)
            }
          } else i(-1, "No Transport");
          return _
        }
        return _.abort()
      },
      active: 0,
      lastModified: {},
      etag: {}
    });
    var On = [],
      Rn = /\?/,
      qn = /(=)\?(?=&|$)|\?\?/,
      zn = K.now();
    K.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var t = On.pop() || K.expando + "_" + zn++;
        return this[t] = !0, t
      }
    }), K.ajaxPrefilter("json jsonp", function (n, i, r) {
      var o, s, a, l = n.data,
        p = n.url,
        c = n.jsonp !== !1,
        u = c && qn.test(p),
        h = c && !u && "string" == typeof l && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && qn.test(l);
      return "jsonp" === n.dataTypes[0] || u || h ? (o = n.jsonpCallback = K.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, s = t[o], u ? n.url = p.replace(qn, "$1" + o) : h ? n.data = l.replace(qn, "$1" + o) : c && (n.url += (Rn.test(p) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
        return a || K.error(o + " was not called"), a[0]
      }, n.dataTypes[0] = "json", t[o] = function () {
        a = arguments
      }, r.always(function () {
        t[o] = s, n[o] && (n.jsonpCallback = i.jsonpCallback, On.push(o)), a && K.isFunction(s) && s(a[0]), a = s = e
      }), "script") : void 0
    }), K.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /javascript|ecmascript/
      },
      converters: {
        "text script": function (t) {
          return K.globalEval(t), t
        }
      }
    }), K.ajaxPrefilter("script", function (t) {
      t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), K.ajaxTransport("script", function (t) {
      if (t.crossDomain) {
        var n, i = O.head || O.getElementsByTagName("head")[0] || O.documentElement;
        return {
          send: function (r, o) {
            n = O.createElement("script"), n.async = "async", t.scriptCharset && (n.charset = t.scriptCharset), n.src = t.url, n.onload = n.onreadystatechange = function (t, r) {
              (r || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, i && n.parentNode && i.removeChild(n), n = e, r || o(200, "success"))
            }, i.insertBefore(n, i.firstChild)
          },
          abort: function () {
            n && n.onload(0, 1)
          }
        }
      }
    });
    var $n, Wn = t.ActiveXObject ? function () {
        for (var t in $n) $n[t](0, 1)
      } : !1,
      Xn = 0;
    K.ajaxSettings.xhr = t.ActiveXObject ? function () {
        return !this.isLocal && C() || T()
      } : C,
      function (t) {
        K.extend(K.support, {
          ajax: !!t,
          cors: !!t && "withCredentials" in t
        })
      }(K.ajaxSettings.xhr()), K.support.ajax && K.ajaxTransport(function (n) {
        if (!n.crossDomain || K.support.cors) {
          var i;
          return {
            send: function (r, o) {
              var s, a, l = n.xhr();
              if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                for (a in n.xhrFields) l[a] = n.xhrFields[a];
              n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), !n.crossDomain && !r["X-Requested-With"] && (r["X-Requested-With"] = "XMLHttpRequest");
              try {
                for (a in r) l.setRequestHeader(a, r[a])
              } catch (p) {}
              l.send(n.hasContent && n.data || null), i = function (t, r) {
                var a, p, c, u, h;
                try {
                  if (i && (r || 4 === l.readyState))
                    if (i = e, s && (l.onreadystatechange = K.noop, Wn && delete $n[s]), r) 4 !== l.readyState && l.abort();
                    else {
                      a = l.status, c = l.getAllResponseHeaders(), u = {}, h = l.responseXML, h && h.documentElement && (u.xml = h);
                      try {
                        u.text = l.responseText
                      } catch (t) {}
                      try {
                        p = l.statusText
                      } catch (d) {
                        p = ""
                      }
                      a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                    }
                } catch (f) {
                  r || o(-1, f)
                }
                u && o(a, p, u, c)
              }, n.async ? 4 === l.readyState ? setTimeout(i, 0) : (s = ++Xn, Wn && ($n || ($n = {}, K(t).unload(Wn)), $n[s] = i), l.onreadystatechange = i) : i()
            },
            abort: function () {
              i && i(0, 1)
            }
          }
        }
      });
    var Un, Jn, Qn = /^(?:toggle|show|hide)$/,
      Yn = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"),
      Kn = /queueHooks$/,
      Zn = [N],
      ti = {
        "*": [function (t, e) {
          var n, i, r = this.createTween(t, e),
            o = Yn.exec(e),
            s = r.cur(),
            a = +s || 0,
            l = 1,
            p = 20;
          if (o) {
            if (n = +o[2], i = o[3] || (K.cssNumber[t] ? "" : "px"), "px" !== i && a) {
              a = K.css(r.elem, t, !0) || n || 1;
              do l = l || ".5", a /= l, K.style(r.elem, t, a + i); while (l !== (l = r.cur() / s) && 1 !== l && --p)
            }
            r.unit = i, r.start = a, r.end = o[1] ? a + (o[1] + 1) * n : n
          }
          return r
        }]
      };
    K.Animation = K.extend(G, {
      tweener: function (t, e) {
        K.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
        for (var n, i = 0, r = t.length; r > i; i++) n = t[i], ti[n] = ti[n] || [], ti[n].unshift(e)
      },
      prefilter: function (t, e) {
        e ? Zn.unshift(t) : Zn.push(t)
      }
    }), K.Tween = M, M.prototype = {
      constructor: M,
      init: function (t, e, n, i, r, o) {
        this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (K.cssNumber[n] ? "" : "px")
      },
      cur: function () {
        var t = M.propHooks[this.prop];
        return t && t.get ? t.get(this) : M.propHooks._default.get(this)
      },
      run: function (t) {
        var e, n = M.propHooks[this.prop];
        return this.pos = e = this.options.duration ? K.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
      }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
      _default: {
        get: function (t) {
          var e;
          return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = K.css(t.elem, t.prop, !1, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
        },
        set: function (t) {
          K.fx.step[t.prop] ? K.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[K.cssProps[t.prop]] || K.cssHooks[t.prop]) ? K.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
        }
      }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
      set: function (t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
      }
    }, K.each(["toggle", "show", "hide"], function (t, e) {
      var n = K.fn[e];
      K.fn[e] = function (i, r, o) {
        return null == i || "boolean" == typeof i || !t && K.isFunction(i) && K.isFunction(r) ? n.apply(this, arguments) : this.animate(I(e, !0), i, r, o)
      }
    }), K.fn.extend({
      fadeTo: function (t, e, n, i) {
        return this.filter(g).css("opacity", 0).show().end().animate({
          opacity: e
        }, t, n, i)
      },
      animate: function (t, e, n, i) {
        var r = K.isEmptyObject(t),
          o = K.speed(e, n, i),
          s = function () {
            var e = G(this, K.extend({}, t), o);
            r && e.stop(!0)
          };
        return r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
      },
      stop: function (t, n, i) {
        var r = function (t) {
          var e = t.stop;
          delete t.stop, e(i)
        };
        return "string" != typeof t && (i = n, n = t, t = e), n && t !== !1 && this.queue(t || "fx", []), this.each(function () {
          var e = !0,
            n = null != t && t + "queueHooks",
            o = K.timers,
            s = K._data(this);
          if (n) s[n] && s[n].stop && r(s[n]);
          else
            for (n in s) s[n] && s[n].stop && Kn.test(n) && r(s[n]);
          for (n = o.length; n--;) o[n].elem === this && (null == t || o[n].queue === t) && (o[n].anim.stop(i), e = !1, o.splice(n, 1));
          (e || !i) && K.dequeue(this, t)
        })
      }
    }), K.each({
      slideDown: I("show"),
      slideUp: I("hide"),
      slideToggle: I("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (t, e) {
      K.fn[t] = function (t, n, i) {
        return this.animate(e, t, n, i)
      }
    }), K.speed = function (t, e, n) {
      var i = t && "object" == typeof t ? K.extend({}, t) : {
        complete: n || !n && e || K.isFunction(t) && t,
        duration: t,
        easing: n && e || e && !K.isFunction(e) && e
      };
      return i.duration = K.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in K.fx.speeds ? K.fx.speeds[i.duration] : K.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
        K.isFunction(i.old) && i.old.call(this), i.queue && K.dequeue(this, i.queue)
      }, i
    }, K.easing = {
      linear: function (t) {
        return t
      },
      swing: function (t) {
        return .5 - Math.cos(t * Math.PI) / 2
      }
    }, K.timers = [], K.fx = M.prototype.init, K.fx.tick = function () {
      for (var t, e = K.timers, n = 0; n < e.length; n++) t = e[n], !t() && e[n] === t && e.splice(n--, 1);
      e.length || K.fx.stop()
    }, K.fx.timer = function (t) {
      t() && K.timers.push(t) && !Jn && (Jn = setInterval(K.fx.tick, K.fx.interval))
    }, K.fx.interval = 13, K.fx.stop = function () {
      clearInterval(Jn), Jn = null
    }, K.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, K.fx.step = {}, K.expr && K.expr.filters && (K.expr.filters.animated = function (t) {
      return K.grep(K.timers, function (e) {
        return t === e.elem
      }).length
    });
    var ei = /^(?:body|html)$/i;
    K.fn.offset = function (t) {
      if (arguments.length) return t === e ? this : this.each(function (e) {
        K.offset.setOffset(this, t, e)
      });
      var n, i, r, o, s, a, l, p = {
          top: 0,
          left: 0
        },
        c = this[0],
        u = c && c.ownerDocument;
      if (u) return (i = u.body) === c ? K.offset.bodyOffset(c) : (n = u.documentElement, K.contains(n, c) ? ("undefined" != typeof c.getBoundingClientRect && (p = c.getBoundingClientRect()), r = j(u), o = n.clientTop || i.clientTop || 0, s = n.clientLeft || i.clientLeft || 0, a = r.pageYOffset || n.scrollTop, l = r.pageXOffset || n.scrollLeft, {
        top: p.top + a - o,
        left: p.left + l - s
      }) : p)
    }, K.offset = {
      bodyOffset: function (t) {
        var e = t.offsetTop,
          n = t.offsetLeft;
        return K.support.doesNotIncludeMarginInBodyOffset && (e += parseFloat(K.css(t, "marginTop")) || 0, n += parseFloat(K.css(t, "marginLeft")) || 0), {
          top: e,
          left: n
        }
      },
      setOffset: function (t, e, n) {
        var i = K.css(t, "position");
        "static" === i && (t.style.position = "relative");
        var r, o, s = K(t),
          a = s.offset(),
          l = K.css(t, "top"),
          p = K.css(t, "left"),
          c = ("absolute" === i || "fixed" === i) && K.inArray("auto", [l, p]) > -1,
          u = {},
          h = {};
        c ? (h = s.position(), r = h.top, o = h.left) : (r = parseFloat(l) || 0, o = parseFloat(p) || 0), K.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (u.top = e.top - a.top + r), null != e.left && (u.left = e.left - a.left + o), "using" in e ? e.using.call(t, u) : s.css(u)
      }
    }, K.fn.extend({
      position: function () {
        if (this[0]) {
          var t = this[0],
            e = this.offsetParent(),
            n = this.offset(),
            i = ei.test(e[0].nodeName) ? {
              top: 0,
              left: 0
            } : e.offset();
          return n.top -= parseFloat(K.css(t, "marginTop")) || 0, n.left -= parseFloat(K.css(t, "marginLeft")) || 0, i.top += parseFloat(K.css(e[0], "borderTopWidth")) || 0, i.left += parseFloat(K.css(e[0], "borderLeftWidth")) || 0, {
            top: n.top - i.top,
            left: n.left - i.left
          }
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var t = this.offsetParent || O.body; t && !ei.test(t.nodeName) && "static" === K.css(t, "position");) t = t.offsetParent;
          return t || O.body
        })
      }
    }), K.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (t, n) {
      var i = /Y/.test(n);
      K.fn[t] = function (r) {
        return K.access(this, function (t, r, o) {
          var s = j(t);
          return o === e ? s ? n in s ? s[n] : s.document.documentElement[r] : t[r] : (s ? s.scrollTo(i ? K(s).scrollLeft() : o, i ? o : K(s).scrollTop()) : t[r] = o, void 0)
        }, t, r, arguments.length, null)
      }
    }), K.each({
      Height: "height",
      Width: "width"
    }, function (t, n) {
      K.each({
        padding: "inner" + t,
        content: n,
        "": "outer" + t
      }, function (i, r) {
        K.fn[r] = function (r, o) {
          var s = arguments.length && (i || "boolean" != typeof r),
            a = i || (r === !0 || o === !0 ? "margin" : "border");
          return K.access(this, function (n, i, r) {
            var o;
            return K.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + t], o["scroll" + t], n.body["offset" + t], o["offset" + t], o["client" + t])) : r === e ? K.css(n, i, r, a) : K.style(n, i, r, a)
          }, n, s ? r : e, s, null)
        }
      })
    }), t.jQuery = t.$ = K, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
      return K
    })
  }(window),
  /*! jQuery Validation Plugin - v1.10.0 - 9/7/2012
   * https://github.com/jzaefferer/jquery-validation
   * Copyright (c) 2012 JÃ¶rn Zaefferer; Licensed MIT, GPL */
  function (t) {
    t.extend(t.fn, {
      validate: function (e) {
        if (!this.length) return e && e.debug && window.console && console.warn("nothing selected, can't validate, returning nothing"), void 0;
        var n = t.data(this[0], "validator");
        return n ? n : (this.attr("novalidate", "novalidate"), n = new t.validator(e, this[0]), t.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function (e) {
          n.settings.submitHandler && (n.submitButton = e.target), t(e.target).hasClass("cancel") && (n.cancelSubmit = !0)
        }), this.submit(function (e) {
          function i() {
            var i;
            return n.settings.submitHandler ? (n.submitButton && (i = t("<input type='hidden'/>").attr("name", n.submitButton.name).val(n.submitButton.value).appendTo(n.currentForm)), n.settings.submitHandler.call(n, n.currentForm, e), n.submitButton && i.remove(), !1) : !0
          }
          return n.settings.debug && e.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
        })), n)
      },
      valid: function () {
        if (t(this[0]).is("form")) return this.validate().form();
        var e = !0,
          n = t(this[0].form).validate();
        return this.each(function () {
          e &= n.element(this)
        }), e
      },
      removeAttrs: function (e) {
        var n = {},
          i = this;
        return t.each(e.split(/\s/), function (t, e) {
          n[e] = i.attr(e), i.removeAttr(e)
        }), n
      },
      rules: function (e, n) {
        var i = this[0];
        if (e) {
          var r = t.data(i.form, "validator").settings,
            o = r.rules,
            s = t.validator.staticRules(i);
          switch (e) {
            case "add":
              t.extend(s, t.validator.normalizeRule(n)), o[i.name] = s, n.messages && (r.messages[i.name] = t.extend(r.messages[i.name], n.messages));
              break;
            case "remove":
              if (!n) return delete o[i.name], s;
              var a = {};
              return t.each(n.split(/\s/), function (t, e) {
                a[e] = s[e], delete s[e]
              }), a
          }
        }
        var l = t.validator.normalizeRules(t.extend({}, t.validator.metadataRules(i), t.validator.classRules(i), t.validator.attributeRules(i), t.validator.staticRules(i)), i);
        if (l.required) {
          var p = l.required;
          delete l.required, l = t.extend({
            required: p
          }, l)
        }
        return l
      }
    }), t.extend(t.expr[":"], {
      blank: function (e) {
        return !t.trim("" + e.value)
      },
      filled: function (e) {
        return !!t.trim("" + e.value)
      },
      unchecked: function (t) {
        return !t.checked
      }
    }), t.validator = function (e, n) {
      this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = n, this.init()
    }, t.validator.format = function (e, n) {
      return 1 === arguments.length ? function () {
        var n = t.makeArray(arguments);
        return n.unshift(e), t.validator.format.apply(this, n)
      } : (arguments.length > 2 && n.constructor !== Array && (n = t.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), t.each(n, function (t, n) {
        e = e.replace(new RegExp("\\{" + t + "\\}", "g"), n)
      }), e)
    }, t.extend(t.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        validClass: "valid",
        errorElement: "label",
        focusInvalid: !0,
        errorContainer: t([]),
        errorLabelContainer: t([]),
        onsubmit: !0,
        ignore: ":hidden",
        ignoreTitle: !1,
        onfocusin: function (t) {
          this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
        },
        onfocusout: function (t) {
          !this.checkable(t) && (t.name in this.submitted || !this.optional(t)) && this.element(t)
        },
        onkeyup: function (t, e) {
          (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastActive) && this.element(t)
        },
        onclick: function (t) {
          t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
        },
        highlight: function (e, n, i) {
          "radio" === e.type ? this.findByName(e.name).addClass(n).removeClass(i) : t(e).addClass(n).removeClass(i)
        },
        unhighlight: function (e, n, i) {
          "radio" === e.type ? this.findByName(e.name).removeClass(n).addClass(i) : t(e).removeClass(n).addClass(i)
        }
      },
      setDefaults: function (e) {
        t.extend(t.validator.defaults, e)
      },
      messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        maxlength: t.validator.format("Please enter no more than {0} characters."),
        minlength: t.validator.format("Please enter at least {0} characters."),
        rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
        range: t.validator.format("Please enter a value between {0} and {1}."),
        max: t.validator.format("Please enter a value less than or equal to {0}."),
        min: t.validator.format("Please enter a value greater than or equal to {0}.")
      },
      autoCreateRanges: !1,
      prototype: {
        init: function () {
          function e(e) {
            var n = t.data(this[0].form, "validator"),
              i = "on" + e.type.replace(/^validate/, "");
            n.settings[i] && n.settings[i].call(n, this[0], e)
          }
          this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
          var n = this.groups = {};
          t.each(this.settings.groups, function (e, i) {
            t.each(i.split(/\s/), function (t, i) {
              n[i] = e
            })
          });
          var i = this.settings.rules;
          t.each(i, function (e, n) {
            i[e] = t.validator.normalizeRule(n)
          }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
        },
        form: function () {
          return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
        },
        checkForm: function () {
          this.prepareForm();
          for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
          return this.valid()
        },
        element: function (e) {
          e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
          var n = this.check(e) !== !1;
          return n ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), n
        },
        showErrors: function (e) {
          if (e) {
            t.extend(this.errorMap, e), this.errorList = [];
            for (var n in e) this.errorList.push({
              message: e[n],
              element: this.findByName(n)[0]
            });
            this.successList = t.grep(this.successList, function (t) {
              return !(t.name in e)
            })
          }
          this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
        },
        resetForm: function () {
          t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
        },
        numberOfInvalids: function () {
          return this.objectLength(this.invalid)
        },
        objectLength: function (t) {
          var e = 0;
          for (var n in t) e++;
          return e
        },
        hideErrors: function () {
          this.addWrapper(this.toHide).hide()
        },
        valid: function () {
          return 0 === this.size()
        },
        size: function () {
          return this.errorList.length
        },
        focusInvalid: function () {
          if (this.settings.focusInvalid) try {
            t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
          } catch (e) {}
        },
        findLastActive: function () {
          var e = this.lastActive;
          return e && 1 === t.grep(this.errorList, function (t) {
            return t.element.name === e.name
          }).length && e
        },
        elements: function () {
          var e = this,
            n = {};
          return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
            return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in n || !e.objectLength(t(this).rules()) ? !1 : (n[this.name] = !0, !0)
          })
        },
        clean: function (e) {
          return t(e)[0]
        },
        errors: function () {
          var e = this.settings.errorClass.replace(" ", ".");
          return t(this.settings.errorElement + "." + e, this.errorContext)
        },
        reset: function () {
          this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
        },
        prepareForm: function () {
          this.reset(), this.toHide = this.errors().add(this.containers)
        },
        prepareElement: function (t) {
          this.reset(), this.toHide = this.errorsFor(t)
        },
        elementValue: function (e) {
          var n = t(e).attr("type"),
            i = t(e).val();
          return "radio" === n || "checkbox" === n ? t('input[name="' + t(e).attr("name") + '"]:checked').val() : "string" == typeof i ? i.replace(/\r/g, "") : i
        },
        check: function (e) {
          e = this.validationTargetFor(this.clean(e));
          var n, i = t(e).rules(),
            r = !1,
            o = this.elementValue(e);
          for (var s in i) {
            var a = {
              method: s,
              parameters: i[s]
            };
            try {
              if (n = t.validator.methods[s].call(this, o, e, a.parameters), "dependency-mismatch" === n) {
                r = !0;
                continue
              }
              if (r = !1, "pending" === n) return this.toHide = this.toHide.not(this.errorsFor(e)), void 0;
              if (!n) return this.formatAndAdd(e, a), !1
            } catch (l) {
              throw this.settings.debug && window.console && console.log("exception occured when checking element " + e.id + ", check the '" + a.method + "' method", l), l
            }
          }
          if (!r) return this.objectLength(i) && this.successList.push(e), !0
        },
        customMetaMessage: function (e, n) {
          if (t.metadata) {
            var i = this.settings.meta ? t(e).metadata()[this.settings.meta] : t(e).metadata();
            return i && i.messages && i.messages[n]
          }
        },
        customDataMessage: function (e, n) {
          return t(e).data("msg-" + n.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + n.toLowerCase())
        },
        customMessage: function (t, e) {
          var n = this.settings.messages[t];
          return n && (n.constructor === String ? n : n[e])
        },
        findDefined: function () {
          for (var t = 0; t < arguments.length; t++)
            if (void 0 !== arguments[t]) return arguments[t];
          return void 0
        },
        defaultMessage: function (e, n) {
          return this.findDefined(this.customMessage(e.name, n), this.customDataMessage(e, n), this.customMetaMessage(e, n), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[n], "<strong>Warning: No message defined for " + e.name + "</strong>")
        },
        formatAndAdd: function (e, n) {
          var i = this.defaultMessage(e, n.method),
            r = /\$?\{(\d+)\}/g;
          "function" == typeof i ? i = i.call(this, n.parameters, e) : r.test(i) && (i = t.validator.format(i.replace(r, "{$1}"), n.parameters)), this.errorList.push({
            message: i,
            element: e
          }), this.errorMap[e.name] = i, this.submitted[e.name] = i
        },
        addWrapper: function (t) {
          return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
        },
        defaultShowErrors: function () {
          var t, e;
          for (t = 0; this.errorList[t]; t++) {
            var n = this.errorList[t];
            this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message)
          }
          if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
            for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
          if (this.settings.unhighlight)
            for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
          this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
        },
        validElements: function () {
          return this.currentElements.not(this.invalidElements())
        },
        invalidElements: function () {
          return t(this.errorList).map(function () {
            return this.element
          })
        },
        showLabel: function (e, n) {
          var i = this.errorsFor(e);
          i.length ? (i.removeClass(this.settings.validClass).addClass(this.settings.errorClass), i.attr("generated") && i.html(n)) : (i = t("<" + this.settings.errorElement + "/>").attr({
            "for": this.idOrName(e),
            generated: !0
          }).addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (i = i.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(i).length || (this.settings.errorPlacement ? this.settings.errorPlacement(i, t(e)) : i.insertAfter(e))), !n && this.settings.success && (i.text(""), "string" == typeof this.settings.success ? i.addClass(this.settings.success) : this.settings.success(i, e)), this.toShow = this.toShow.add(i)
        },
        errorsFor: function (e) {
          var n = this.idOrName(e);
          return this.errors().filter(function () {
            return t(this).attr("for") === n
          })
        },
        idOrName: function (t) {
          return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
        },
        validationTargetFor: function (t) {
          return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
        },
        checkable: function (t) {
          return /radio|checkbox/i.test(t.type)
        },
        findByName: function (e) {
          return t(this.currentForm).find('[name="' + e + '"]')
        },
        getLength: function (e, n) {
          switch (n.nodeName.toLowerCase()) {
            case "select":
              return t("option:selected", n).length;
            case "input":
              if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
          }
          return e.length
        },
        depend: function (t, e) {
          return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
        },
        dependTypes: {
          "boolean": function (t) {
            return t
          },
          string: function (e, n) {
            return !!t(e, n.form).length
          },
          "function": function (t, e) {
            return t(e)
          }
        },
        optional: function (e) {
          var n = this.elementValue(e);
          return !t.validator.methods.required.call(this, n, e) && "dependency-mismatch"
        },
        startRequest: function (t) {
          this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
        },
        stopRequest: function (e, n) {
          this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
        },
        previousValue: function (e) {
          return t.data(e, "previousValue") || t.data(e, "previousValue", {
            old: null,
            valid: !0,
            message: this.defaultMessage(e, "remote")
          })
        }
      },
      classRuleSettings: {
        required: {
          required: !0
        },
        email: {
          email: !0
        },
        url: {
          url: !0
        },
        date: {
          date: !0
        },
        dateISO: {
          dateISO: !0
        },
        number: {
          number: !0
        },
        digits: {
          digits: !0
        },
        creditcard: {
          creditcard: !0
        }
      },
      addClassRules: function (e, n) {
        e.constructor === String ? this.classRuleSettings[e] = n : t.extend(this.classRuleSettings, e)
      },
      classRules: function (e) {
        var n = {},
          i = t(e).attr("class");
        return i && t.each(i.split(" "), function () {
          this in t.validator.classRuleSettings && t.extend(n, t.validator.classRuleSettings[this])
        }), n
      },
      attributeRules: function (e) {
        var n = {},
          i = t(e);
        for (var r in t.validator.methods) {
          var o;
          "required" === r ? (o = i.get(0).getAttribute(r), "" === o && (o = !0), o = !!o) : o = i.attr(r), o ? n[r] = o : i[0].getAttribute("type") === r && (n[r] = !0)
        }
        return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
      },
      metadataRules: function (e) {
        if (!t.metadata) return {};
        var n = t.data(e.form, "validator").settings.meta;
        return n ? t(e).metadata()[n] : t(e).metadata()
      },
      staticRules: function (e) {
        var n = {},
          i = t.data(e.form, "validator");
        return i.settings.rules && (n = t.validator.normalizeRule(i.settings.rules[e.name]) || {}), n
      },
      normalizeRules: function (e, n) {
        return t.each(e, function (i, r) {
          if (r === !1) return delete e[i], void 0;
          if (r.param || r.depends) {
            var o = !0;
            switch (typeof r.depends) {
              case "string":
                o = !!t(r.depends, n.form).length;
                break;
              case "function":
                o = r.depends.call(n, n)
            }
            o ? e[i] = void 0 !== r.param ? r.param : !0 : delete e[i]
          }
        }), t.each(e, function (i, r) {
          e[i] = t.isFunction(r) ? r(n) : r
        }), t.each(["minlength", "maxlength", "min", "max"], function () {
          e[this] && (e[this] = Number(e[this]))
        }), t.each(["rangelength", "range"], function () {
          e[this] && (e[this] = [Number(e[this][0]), Number(e[this][1])])
        }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e.messages && delete e.messages, e
      },
      normalizeRule: function (e) {
        if ("string" == typeof e) {
          var n = {};
          t.each(e.split(/\s/), function () {
            n[this] = !0
          }), e = n
        }
        return e
      },
      addMethod: function (e, n, i) {
        t.validator.methods[e] = n, t.validator.messages[e] = void 0 !== i ? i : t.validator.messages[e], n.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
      },
      methods: {
        required: function (e, n, i) {
          if (!this.depend(i, n)) return "dependency-mismatch";
          if ("select" === n.nodeName.toLowerCase()) {
            var r = t(n).val();
            return r && r.length > 0
          }
          return this.checkable(n) ? this.getLength(e, n) > 0 : t.trim(e).length > 0
        },
        remote: function (e, n, i) {
          if (this.optional(n)) return "dependency-mismatch";
          var r = this.previousValue(n);
          if (this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), r.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = r.message, i = "string" == typeof i && {
              url: i
            } || i, this.pending[n.name]) return "pending";
          if (r.old === e) return r.valid;
          r.old = e;
          var o = this;
          this.startRequest(n);
          var s = {};
          return s[n.name] = e, t.ajax(t.extend(!0, {
            url: i,
            mode: "abort",
            port: "validate" + n.name,
            dataType: "json",
            data: s,
            success: function (i) {
              o.settings.messages[n.name].remote = r.originalMessage;
              var s = i === !0 || "true" === i;
              if (s) {
                var a = o.formSubmitted;
                o.prepareElement(n), o.formSubmitted = a, o.successList.push(n), delete o.invalid[n.name], o.showErrors()
              } else {
                var l = {},
                  p = i || o.defaultMessage(n, "remote");
                l[n.name] = r.message = t.isFunction(p) ? p(e) : p, o.invalid[n.name] = !0, o.showErrors(l)
              }
              r.valid = s, o.stopRequest(n, s)
            }
          }, i)), "pending"
        },
        minlength: function (e, n, i) {
          var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), n);
          return this.optional(n) || r >= i
        },
        maxlength: function (e, n, i) {
          var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), n);
          return this.optional(n) || i >= r
        },
        rangelength: function (e, n, i) {
          var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), n);
          return this.optional(n) || r >= i[0] && r <= i[1]
        },
        min: function (t, e, n) {
          return this.optional(e) || t >= n
        },
        max: function (t, e, n) {
          return this.optional(e) || n >= t
        },
        range: function (t, e, n) {
          return this.optional(e) || t >= n[0] && t <= n[1]
        },
        email: function (t, e) {
          return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
        },
        url: function (t, e) {
          return this.optional(e) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
        },
        date: function (t, e) {
          return this.optional(e) || !/Invalid|NaN/.test(new Date(t))
        },
        dateISO: function (t, e) {
          return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
        },
        number: function (t, e) {
          return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
        },
        digits: function (t, e) {
          return this.optional(e) || /^\d+$/.test(t)
        },
        creditcard: function (t, e) {
          if (this.optional(e)) return "dependency-mismatch";
          if (/[^0-9 \-]+/.test(t)) return !1;
          var n = 0,
            i = 0,
            r = !1;
          t = t.replace(/\D/g, "");
          for (var o = t.length - 1; o >= 0; o--) {
            var s = t.charAt(o);
            i = parseInt(s, 10), r && (i *= 2) > 9 && (i -= 9), n += i, r = !r
          }
          return 0 === n % 10
        },
        equalTo: function (e, n, i) {
          var r = t(i);
          return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
            t(n).valid()
          }), e === r.val()
        }
      }
    }), t.format = t.validator.format
  }(jQuery),
  function (t) {
    var e = {};
    if (t.ajaxPrefilter) t.ajaxPrefilter(function (t, n, i) {
      var r = t.port;
      "abort" === t.mode && (e[r] && e[r].abort(), e[r] = i)
    });
    else {
      var n = t.ajax;
      t.ajax = function (i) {
        var r = ("mode" in i ? i : t.ajaxSettings).mode,
          o = ("port" in i ? i : t.ajaxSettings).port;
        return "abort" === r ? (e[o] && e[o].abort(), e[o] = n.apply(this, arguments)) : n.apply(this, arguments)
      }
    }
  }(jQuery),
  function (t) {
    !jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener && t.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, n) {
      function i(e) {
        return e = t.event.fix(e), e.type = n, t.event.handle.call(this, e)
      }
      t.event.special[n] = {
        setup: function () {
          this.addEventListener(e, i, !0)
        },
        teardown: function () {
          this.removeEventListener(e, i, !0)
        },
        handler: function (e) {
          var i = arguments;
          return i[0] = t.event.fix(e), i[0].type = n, t.event.handle.apply(this, i)
        }
      }
    }), t.extend(t.fn, {
      validateDelegate: function (e, n, i) {
        return this.bind(n, function (n) {
          var r = t(n.target);
          return r.is(e) ? i.apply(r, arguments) : void 0
        })
      }
    })
  }(jQuery);
var JSON;
JSON || (JSON = {}),
  function () {
    "use strict";

    function f(t) {
      return 10 > t ? "0" + t : t
    }

    function quote(t) {
      return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function (t) {
        var e = meta[t];
        return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
      }) + '"' : '"' + t + '"'
    }

    function str(t, e) {
      var n, i, r, o, s, a = gap,
        l = e[t];
      switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(t)), "function" == typeof rep && (l = rep.call(e, t, l)), typeof l) {
        case "string":
          return quote(l);
        case "number":
          return isFinite(l) ? String(l) : "null";
        case "boolean":
        case "null":
          return String(l);
        case "object":
          if (!l) return "null";
          if (gap += indent, s = [], "[object Array]" === Object.prototype.toString.apply(l)) {
            for (o = l.length, n = 0; o > n; n += 1) s[n] = str(n, l) || "null";
            return r = 0 === s.length ? "[]" : gap ? "[\n" + gap + s.join(",\n" + gap) + "\n" + a + "]" : "[" + s.join(",") + "]", gap = a, r
          }
          if (rep && "object" == typeof rep)
            for (o = rep.length, n = 0; o > n; n += 1) "string" == typeof rep[n] && (i = rep[n], r = str(i, l), r && s.push(quote(i) + (gap ? ": " : ":") + r));
          else
            for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (r = str(i, l), r && s.push(quote(i) + (gap ? ": " : ":") + r));
          return r = 0 === s.length ? "{}" : gap ? "{\n" + gap + s.join(",\n" + gap) + "\n" + a + "}" : "{" + s.join(",") + "}", gap = a, r
      }
    }
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
      return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
      return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      gap, indent, meta = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
      },
      rep;
    "function" != typeof JSON.stringify && (JSON.stringify = function (t, e, n) {
      var i;
      if (gap = "", indent = "", "number" == typeof n)
        for (i = 0; n > i; i += 1) indent += " ";
      else "string" == typeof n && (indent = n);
      if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
      return str("", {
        "": t
      })
    }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
      function walk(t, e) {
        var n, i, r = t[e];
        if (r && "object" == typeof r)
          for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (i = walk(r, n), void 0 !== i ? r[n] = i : delete r[n]);
        return reviver.call(t, e, r)
      }
      var j;
      if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (t) {
          return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
        })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
        "": j
      }, "") : j;
      throw new SyntaxError("JSON.parse")
    })
  }(),
  /**
   * jQuery Cookie plugin
   *
   * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
   * Dual licensed under the MIT and GPL licenses:
   * http://www.opensource.org/licenses/mit-license.php
   * http://www.gnu.org/licenses/gpl.html
   *
   */
  jQuery.cookie = function (t, e, n) {
    if (arguments.length > 1 && "[object Object]" !== String(e)) {
      if (n = jQuery.extend({}, n), (null === e || void 0 === e) && (n.expires = -1), "number" == typeof n.expires) {
        var i = n.expires,
          r = n.expires = new Date;
        r.setDate(r.getDate() + i)
      }
      return e = String(e), document.cookie = [encodeURIComponent(t), "=", n.raw ? e : encodeURIComponent(e), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
    }
    n = e || {};
    var o, s = n.raw ? function (t) {
      return t
    } : decodeURIComponent;
    return (o = new RegExp("(?:^|; )" + encodeURIComponent(t) + "=([^;]*)").exec(document.cookie)) ? s(o[1]) : null
  }, ("undefined" == typeof console || "undefined" == typeof console.log) && (console = {}, console.log = function () {});
var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i)
    },
    any: function () {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()
    }
  },
  session_fetch = function (t, e, n) {
    var i = .4,
      r = {
        use_html5_location: !1,
        ipinfodb_key: "5762384f7e95020da94cfd030d79770c3ec19e238d7cf1dc090f15f576b8c968",
        gapi_location: !1,
        location_cookie: "location",
        location_cookie_timeout: 5,
        session_timeout: 32,
        session_cookie: "first_session"
      },
      o = function () {
        if (String.prototype.contains = function (t) {
            if ("string" == typeof t) return -1 !== this.indexOf(t);
            for (var e = 0; e < t.length; e++)
              if (-1 !== this.indexOf(t[e])) return !0;
            return !1
          }, t.session && t.session.options)
          for (option in t.session.options) r[option] = t.session.options[option];
        var e = {
          api_version: i,
          locale: a.locale(),
          current_session: a.session(),
          original_session: a.session(r.session_cookie, 1e3 * 60 * 60 * 24 * r.session_timeout),
          browser: a.browser(),
          plugins: a.plugins(),
          time: a.time(),
          device: a.device()
        };
        if (r.use_html5_location ? e.location = a.html5_location() : r.ipinfodb_key ? e.location = a.ipinfodb_location(r.ipinfodb_key) : r.gapi_location && (e.location = a.gapi_location()), t.session && t.session.start) var n = t.session.start;
        var o, s = 0,
          l = function (e) {
            e && s--, 0 === s && n && n(t.session)
          };
        t.session = {};
        for (var p in e)
          if (o = e[p], "function" == typeof o) try {
            o(function (e) {
              t.session[p] = e, l(!0)
            }), s++
          } catch (c) {
            t.console && "function" == typeof console.log && (console.log(c), l(!0))
          } else t.session[p] = o;
        l()
      },
      s = {
        detect: function () {
          return {
            browser: this.search(this.data.browser),
            version: this.search(n.userAgent) || this.search(n.appVersion),
            os: this.search(this.data.os)
          }
        },
        search: function (t) {
          if ("object" != typeof t) {
            var e = t.indexOf(this.version_string);
            if (-1 == e) return;
            return parseFloat(t.substr(e + this.version_string.length + 1))
          }
          for (var n = 0; n < t.length; n++) {
            var i = t[n].string,
              r = t[n].prop;
            if (this.version_string = t[n].versionSearch || t[n].identity, i) {
              if (-1 != i.indexOf(t[n].subString)) return t[n].identity
            } else if (r) return t[n].identity
          }
        },
        data: {
          browser: [{
            string: n.userAgent,
            subString: "Chrome",
            identity: "Chrome"
          }, {
            string: n.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
          }, {
            string: n.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
          }, {
            prop: t.opera,
            identity: "Opera",
            versionSearch: "Version"
          }, {
            string: n.vendor,
            subString: "iCab",
            identity: "iCab"
          }, {
            string: n.vendor,
            subString: "KDE",
            identity: "Konqueror"
          }, {
            string: n.userAgent,
            subString: "Firefox",
            identity: "Firefox"
          }, {
            string: n.vendor,
            subString: "Camino",
            identity: "Camino"
          }, {
            string: n.userAgent,
            subString: "Netscape",
            identity: "Netscape"
          }, {
            string: n.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
          }, {
            string: n.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
          }, {
            string: n.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
          }],
          os: [{
            string: n.platform,
            subString: "Win",
            identity: "Windows"
          }, {
            string: n.platform,
            subString: "Mac",
            identity: "Mac"
          }, {
            string: n.userAgent,
            subString: "iPhone",
            identity: "iPhone/iPod"
          }, {
            string: n.userAgent,
            subString: "iPad",
            identitiy: "iPad"
          }, {
            string: n.platform,
            subString: "Linux",
            identity: "Linux"
          }, {
            string: n.userAgent,
            subString: "Android",
            identity: "Android"
          }]
        }
      },
      a = {
        browser: function () {
          return s.detect()
        },
        time: function () {
          var t = new Date,
            e = new Date;
          return t.setMonth(0), t.setDate(1), e.setMonth(6), e.setDate(1), {
            tz_offset: -(new Date).getTimezoneOffset() / 60,
            observes_dst: t.getTimezoneOffset() !== e.getTimezoneOffset()
          }
        },
        locale: function () {
          var t = (n.language || n.browserLanguage || n.systemLanguage || n.userLanguage || "").split("-");
          return 2 == t.length ? {
            lang: t[0].toLowerCase()
          } : t ? {
            lang: t[0].toLowerCase()
          } : {
            lang: null
          }
        },
        device: function () {
          var i = {
            screen: {
              width: t.screen.width,
              height: t.screen.height
            }
          };
          return i.viewport = {
            width: t.innerWidth || e.body.clientWidth || e.documentElement.clientWidth,
            height: t.innerHeight || e.body.clientHeight || e.documentElement.clientHeight
          }, i.is_tablet = !!n.userAgent.match(/(iPad|SCH-I800|xoom|kindle)/i), i.is_phone = !i.is_tablet && !!n.userAgent.match(/(iPhone|iPod|blackberry|android 0.5|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|symbian|treo mini|Playstation Portable|SonyEricsson|Samsung|MobileExplorer|PalmSource|Benq|Windows Phone|Windows Mobile|IEMobile|Windows CE|Nintendo Wii)/i), i.is_mobile = i.is_tablet || i.is_phone, i
        },
        plugins: function () {
          var t = function (t) {
            if (n.plugins) {
              for (var e, i = 0, r = n.plugins.length; r > i; i++)
                if (e = n.plugins[i], e && e.name && -1 !== e.name.toLowerCase().indexOf(t)) return !0;
              return !1
            }
            return !1
          };
          return {
            flash: t("flash"),
            silverlight: t("silverlight"),
            java: t("java"),
            quicktime: t("quicktime")
          }
        },
        session: function (n, i) {
          var r = l.get_obj(n);
          if (null == r) {
            r = {
              visits: 1,
              start: (new Date).getTime(),
              last_visit: (new Date).getTime(),
              url: t.location.href,
              path: t.location.pathname,
              referrer: e.referrer || t.parent.location.href,
              referrer_info: l.parse_url(e.referrer),
              search: {
                engine: null,
                query: null
              }
            };
            var o, s = [{
                name: "Google",
                host: "google",
                query: "q"
              }, {
                name: "Bing",
                host: "bing.com",
                query: "q"
              }, {
                name: "Yahoo",
                host: "search.yahoo",
                query: "p"
              }, {
                name: "AOL",
                host: "search.aol",
                query: "q"
              }, {
                name: "Ask",
                host: "ask.com",
                query: "q"
              }, {
                name: "Baidu",
                host: "baidu.com",
                query: "wd"
              }],
              a = s.length,
              p = 0,
              c = "q query term p wd query text".split(" ");
            for (p = 0; a > p; p++)
              if (o = s[p], -1 !== r.referrer_info.host.indexOf(o.host)) {
                r.search.engine = o.name, r.search.query = r.referrer_info.query[o.query], r.search.terms = r.search.query ? r.search.query.split(" ") : null;
                break
              } if (null === r.search.engine && r.referrer_info.search.length > 1)
              for (p = 0; p < c.length; p++) {
                var u = r.referrer_info.query[c[p]];
                if (u) {
                  r.search.engine = "Unknown", r.search.query = u, r.search.terms = u.split(" ");
                  break
                }
              }
          } else r.last_visit = (new Date).getTime(), r.visits++;
          return l.set_cookie(n, l.package_obj(r), i), r
        },
        html5_location: function () {
          return function (t) {
            n.geolocation.getCurrentPosition(function (e) {
              e.source = "html5", t(e)
            }, function () {
              r.gapi_location ? a.gapi_location()(t) : t({
                error: !0,
                source: "html5"
              })
            })
          }
        },
        gapi_location: function () {
          return function (e) {
            var n = l.get_obj(r.location_cookie);
            n && "google" === n.source ? e(n) : (t.gloader_ready = function () {
              "google" in t && (t.google.loader.ClientLocation ? (t.google.loader.ClientLocation.source = "google", e(t.google.loader.ClientLocation)) : e({
                error: !0,
                source: "google"
              }), l.set_cookie(r.location_cookie, l.package_obj(t.google.loader.ClientLocation), 1e3 * 60 * 60 * r.location_cookie_timeout))
            }, l.embed_script("https://www.google.com/jsapi?callback=gloader_ready"))
          }
        },
        ipinfodb_location: function (e) {
          return function (n) {
            var i = l.get_obj(r.location_cookie);
            i && "ipinfodb" === i.source && n(i), t.ipinfocb = function (t) {
              if ("OK" === t.statusCode) t.source = "ipinfodb", l.set_cookie(r.location_cookie, l.package_obj(t), 1e3 * 60 * 60 * r.location_cookie), n(t);
              else {
                if (r.gapi_location) return a.gapi_location()(n);
                n({
                  error: !0,
                  source: "ipinfodb",
                  message: t.statusMessage
                })
              }
            }, l.embed_script("https://api.ipinfodb.com/v3/ip-city/?key=" + e + "&format=json&callback=ipinfocb")
          }
        }
      },
      l = {
        parse_url: function (t) {
          var n = e.createElement("a"),
            i = {};
          if (n.href = t, query_str = n.search.substr(1), "" != query_str)
            for (var r, o = query_str.split("&"), s = 0, a = o.length; a > s; s++) r = o[s].split("="), 2 === r.length && (i[r[0]] = decodeURI(r[1]));
          return {
            host: n.host,
            path: n.pathname,
            protocol: n.protocol,
            port: "" === n.port ? 80 : n.port,
            search: n.search,
            query: i
          }
        },
        set_cookie: function (n, i, r, o) {
          if (!n) return null;
          if (!o) var o = {};
          return (null === i || void 0 === i) && (r = -1), r && (o.expires = (new Date).getTime() + r), e.cookie = [encodeURIComponent(n), "=", encodeURIComponent(String(i)), o.expires ? "; expires=" + new Date(o.expires).toUTCString() : "", "; path=" + (o.path ? o.path : "/"), o.domain ? "; domain=" + o.domain : "", t.location && "https:" === t.location.protocol ? "; secure" : ""].join("")
        },
        get_cookie: function (t, n) {
          return (n = new RegExp("(?:^|; )" + encodeURIComponent(t) + "=([^;]*)").exec(e.cookie)) ? decodeURIComponent(n[1]) : null
        },
        embed_script: function (t) {
          var n = e.createElement("script");
          n.type = "text/javascript", n.src = t, e.getElementsByTagName("body")[0].appendChild(n)
        },
        package_obj: function (t) {
          if (t) {
            t.version = i;
            var e = p.stringify(t);
            return delete t.version, e
          }
        },
        get_obj: function (t) {
          var e;
          try {
            e = p.parse(l.get_cookie(t))
          } catch (n) {}
          return e && e.version == i ? (delete e.version, e) : void 0
        }
      },
      p = {
        parse: t.JSON && t.JSON.parse || function (t) {
          return "string" == typeof t && t ? new Function("return " + t)() : null
        },
        stringify: t.JSON && t.JSON.stringify || function (t) {
          var e = typeof t;
          if ("object" === e && null !== t) {
            var n, i, r = [],
              o = t && t.constructor === Array;
            for (n in t) i = t[n], e = typeof i, "string" === e ? i = '"' + i + '"' : "object" === e && null !== i && (i = this.stringify(i)), r.push((o ? "" : '"' + n + '":') + i);
            return (o ? "[" : "{") + r.join(",") + (o ? "]" : "}")
          }
          return "string" === e ? '"' + t + '"' : void 0
        }
      };
    o()
  };
if ("undefined" == typeof window.exports ? session_fetch(window, document, navigator) : window.exports.session = session_fetch, session) {
  $.cookie("fd_fr") || $.cookie("fd_fr", session.current_session.referrer, {
    expires: 365
  }), $.cookie("fd_flu") || $.cookie("fd_flu", session.current_session.url, {
    expires: 365
  }), $.cookie("fd_se") || $.cookie("fd_se", session.current_session.search.engine, {
    expires: 365
  }), $.cookie("fd_sq") || $.cookie("fd_sq", session.current_session.search.query, {
    expires: 365
  });
  var visits = $.cookie("fd_vi") || 0;
  $.cookie("fd_vi", parseInt(visits) + 1, {
    expires: 365
  })
}! function (t) {
  t(function () {
    t.fn.customerPopup = function (t, e, n, i) {
      t.preventDefault(), e = e || "500", n = n || "400", strResize = i ? "yes" : "no";
      var r = "undefined" != typeof this.attr("title") ? this.attr("title") : "Social Share",
        o = "width=" + e + ",height=" + n + ",resizable=" + strResize;
      window.open(this.attr("href"), r, o).focus()
    }
  }), t(document).ready(function () {
    t(".share-list li a").on("click", function (e) {
      t(this).customerPopup(e)
    }), t("#faqExpand").click(function () {
      var e = t(this).parent();
      t(".faq-list").slideToggle("2000", "swing"), t("html, body").animate({
        scrollTop: (t(e).offset() || {
          top: 0 / 0
        }).top - 90
      }, 1e3)
    }), t(".faq-articles").children(".faq-content").first().slideToggle("slow"), t(".faq-articles .faq-title").on("click", function () {
      t(".faq-articles").removeClass("active"), t(".faq-articles .faq-content").each(function () {
        t(this).slideUp()
      }), t(this).parent().children(".faq-content").is(":visible") ? t(this).parent().children(".faq-content").slideUp() : (t(this).parent().toggleClass("active"), t(this).parent().children(".faq-content").slideToggle())
    }), t(".register-app li").on("click", function () {
      t(".register-app li.active").removeClass("active"), t(this).addClass("active"), t(this).children("input").prop("checked", !0);
      var e = t(this).data("app");
      t("#app_name").val(e)
    }), t(document).on("click", ".tees .shirt-size", function () {
      t(this).siblings().removeClass("active"), t(this).addClass("active");
      var e = t(this).data("shirt");
      t(this).parent().next("input").val(e)
    }), t(".form-back").on("click", function () {
      t(".form-2,.form-2-btn").hide(), t(".form-1,.form-1-btn").show(), t(".path-status li[data-path='form-2']").removeClass("active")
    });
    var e = [1, 2, 3];
    t(".add-more").click(function () {
      var n = Math.min.apply(Math, e);
      t("#field_" + n).slideDown("slow"), e.splice(e.indexOf(n), 1), "undefined" != typeof e && e.length || t(this).parent().fadeOut()
    }), t(".remove-field").livequery(function () {
      t(this).click(function () {
        t(this).parent().slideUp();
        var n = t(this).parent().data("fieldvalue");
        e.push(n), Math.min.apply(Math, e), ("undefined" != typeof e || e.length > 0) && t(".add-field").fadeIn()
      })
    }), t(window).on("scroll", function () {
      var e = t(this).scrollTop(),
        n = (t(".sth-about-container").offset() || {
          top: 0 / 0
        }).top,
        i = !1;
      i ? n > e && (t(".header").removeClass("stuck"), i = !1) : (t(".header").removeClass("stuck"), e > n && (t(".header").addClass("stuck"), i = !0))
    }), t(".nav-link,.header-btn,.register-wrapper .sth-btn").on("click", function (e) {
      e.preventDefault();
      var n = t(this).attr("href");
      t("html, body").animate({
        scrollTop: t(n).offset().top - 69
      }, 1e3)
    }), t(".site-nav li").on("click", function () {
      t(".header,.site-nav,.c-hamburger,.main").removeClass("active")
    });
    var n = t(".c-hamburger");
    t(document).on("click", function (e) {
      if (n.is(e.target)) t(".site-nav").hasClass("active") ? (t(".header,.site-nav,.c-hamburger,.main").removeClass("active"), setTimeout(function () {
        t(".widget").show()
      }, 300)) : (t(".widget").hide(), t(".header,.site-nav,.c-hamburger,.main").addClass("active"));
      else {
        var i = t(".site-nav");
        !i.is(e.target) && 0 === i.has(e.target).length && t(".site-nav").hasClass("active") && t(".header,.site-nav,.c-hamburger,.main").removeClass("active")
      }
    }), t(".widget").on("click", function () {
      t(this).hasClass("active") ? (t(this).removeClass("active"), t(".widget .icon-share").show(), t(".widget .icon-close").hide()) : (t(this).addClass("active"), t(".widget .icon-share").hide(), t(".widget .icon-close").show())
    })
  })
}(window.jQuery);