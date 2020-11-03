! function (t, e) {
  "function" == typeof define && define.amd ? define(e) : "object" == typeof module && module.exports ? module.exports = e() : t.bodymovin = e()
}(window, function () {
  function roundValues(t) {
    bm_rnd = t ? Math.round : function (t) {
      return t
    }
  }

  function roundTo2Decimals(t) {
    return Math.round(1e4 * t) / 1e4
  }

  function roundTo3Decimals(t) {
    return Math.round(100 * t) / 100
  }

  function styleDiv(t) {
    t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = t.style.webkitTransformStyle = t.style.mozTransformStyle = "preserve-3d"
  }

  function styleUnselectableDiv(t) {
    t.style.userSelect = "none", t.style.MozUserSelect = "none", t.style.webkitUserSelect = "none", t.style.oUserSelect = "none"
  }

  function BMEnterFrameEvent(t, e, i, n) {
    this.type = t, this.currentTime = e, this.totalTime = i, this.direction = 0 > n ? -1 : 1
  }

  function BMCompleteEvent(t, e) {
    this.type = t, this.direction = 0 > e ? -1 : 1
  }

  function BMCompleteLoopEvent(t, e, i, n) {
    this.type = t, this.currentLoop = e, this.totalLoops = i, this.direction = 0 > n ? -1 : 1
  }

  function BMSegmentStartEvent(t, e, i) {
    this.type = t, this.firstFrame = e, this.totalFrames = i
  }

  function BMDestroyEvent(t, e) {
    this.type = t, this.target = e
  }

  function _addEventListener(t, e) {
    this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e)
  }

  function _removeEventListener(t, e) {
    if (e) {
      if (this._cbs[t]) {
        for (var i = 0, n = this._cbs[t].length; n > i;) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, n -= 1), i += 1;
        this._cbs[t].length || (this._cbs[t] = null)
      }
    } else this._cbs[t] = null
  }

  function _triggerEvent(t, e) {
    if (this._cbs[t])
      for (var i = this._cbs[t].length, n = 0; i > n; n++) this._cbs[t][n](e)
  }

  function randomString(t, e) {
    void 0 === e && (e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
    var i, n = "";
    for (i = t; i > 0; --i) n += e[Math.round(Math.random() * (e.length - 1))];
    return n
  }

  function HSVtoRGB(t, e, i) {
    var n, r, s, a, o, l, p, h;
    switch (1 === arguments.length && (e = t.s, i = t.v, t = t.h), a = Math.floor(6 * t), o = 6 * t - a, l = i * (1 - e), p = i * (1 - o * e), h = i * (1 - (1 - o) * e), a % 6) {
      case 0:
        n = i, r = h, s = l;
        break;
      case 1:
        n = p, r = i, s = l;
        break;
      case 2:
        n = l, r = i, s = h;
        break;
      case 3:
        n = l, r = p, s = i;
        break;
      case 4:
        n = h, r = l, s = i;
        break;
      case 5:
        n = i, r = l, s = p
    }
    return [n, r, s]
  }

  function RGBtoHSV(t, e, i) {
    1 === arguments.length && (e = t.g, i = t.b, t = t.r);
    var n, r = Math.max(t, e, i),
      s = Math.min(t, e, i),
      a = r - s,
      o = 0 === r ? 0 : a / r,
      l = r / 255;
    switch (r) {
      case s:
        n = 0;
        break;
      case t:
        n = e - i + a * (i > e ? 6 : 0), n /= 6 * a;
        break;
      case e:
        n = i - t + 2 * a, n /= 6 * a;
        break;
      case i:
        n = t - e + 4 * a, n /= 6 * a
    }
    return [n, o, l]
  }

  function addSaturationToRGB(t, e) {
    var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
    return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), HSVtoRGB(i[0], i[1], i[2])
  }

  function addBrightnessToRGB(t, e) {
    var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
    return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), HSVtoRGB(i[0], i[1], i[2])
  }

  function addHueToRGB(t, e) {
    var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
    return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), HSVtoRGB(i[0], i[1], i[2])
  }

  function componentToHex(t) {
    var e = t.toString(16);
    return 1 == e.length ? "0" + e : e
  }

  function fillToRgba(t, e) {
    if (!cachedColors[t]) {
      var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
      cachedColors[t] = parseInt(i[1], 16) + "," + parseInt(i[2], 16) + "," + parseInt(i[3], 16)
    }
    return "rgba(" + cachedColors[t] + "," + e + ")"
  }

  function RenderedFrame(t, e) {
    this.tr = t, this.o = e
  }

  function LetterProps(t, e, i, n, r, s) {
    this.o = t, this.sw = e, this.sc = i, this.fc = n, this.m = r, this.props = s
  }

  function iterateDynamicProperties(t) {
    var e, i = this.dynamicProperties;
    for (e = 0; i > e; e += 1) this.dynamicProperties[e].getValue(t)
  }

  function reversePath(t, e) {
    var i, n, r = [],
      s = [],
      a = [],
      o = {},
      l = 0;
    e && (r[0] = t.o[0], s[0] = t.i[0], a[0] = t.v[0], l = 1), n = t.i.length;
    var p = n - 1;
    for (i = l; n > i; i += 1) r.push(t.o[p]), s.push(t.i[p]), a.push(t.v[p]), p -= 1;
    return o.i = r, o.o = s, o.v = a, o
  }

  function Matrix() {}

  function matrixManagerFunction() {
    var t = new Matrix,
      e = function (e, i, n, r, s) {
        return t.reset().translate(r, s).rotate(e).scale(i, n).toCSS()
      },
      i = function (t) {
        return e(t.tr.r[2], t.tr.s[0], t.tr.s[1], t.tr.p[0], t.tr.p[1])
      };
    return {
      getMatrix: i
    }
  }

  function createElement(t, e, i) {
    if (!e) {
      var n = Object.create(t.prototype, i),
        r = {};
      return n && "[object Function]" === r.toString.call(n.init) && n.init(), n
    }
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.prototype._parent = t.prototype
  }

  function extendPrototype(t, e) {
    for (var i in t.prototype) t.prototype.hasOwnProperty(i) && (e.prototype[i] = t.prototype[i])
  }

  function bezFunction() {
    function t(t, e, i, n, r, s) {
      var a = t * n + e * r + i * s - r * n - s * t - i * e;
      return a > -1e-4 && 1e-4 > a
    }

    function e(e, i, n, r, s, a, o, l, p) {
      return t(e, i, r, s, o, l) && t(e, n, r, a, o, p)
    }

    function i(t) {
      this.segmentLength = 0, this.points = new Array(t)
    }

    function n(t, e) {
      this.partialLength = t, this.point = e
    }

    function r(t, e) {
      var i = e.segments,
        n = i.length,
        r = bm_floor((n - 1) * t),
        s = t * e.addedLength,
        a = 0;
      if (s == i[r].l) return i[r].p;
      for (var o = i[r].l > s ? -1 : 1, l = !0; l;) i[r].l <= s && i[r + 1].l > s ? (a = (s - i[r].l) / (i[r + 1].l - i[r].l), l = !1) : r += o, (0 > r || r >= n - 1) && (l = !1);
      return i[r].p + (i[r + 1].p - i[r].p) * a
    }

    function s() {
      this.pt1 = new Array(2), this.pt2 = new Array(2), this.pt3 = new Array(2), this.pt4 = new Array(2)
    }

    function a(t, e, i, n, a, o, l) {
      var p = new s;
      a = 0 > a ? 0 : a > 1 ? 1 : a;
      var h = r(a, l);
      o = o > 1 ? 1 : o;
      var c, u = r(o, l),
        d = t.length,
        m = 1 - h,
        f = 1 - u;
      for (c = 0; d > c; c += 1) p.pt1[c] = Math.round(1e3 * (m * m * m * t[c] + (h * m * m + m * h * m + m * m * h) * i[c] + (h * h * m + m * h * h + h * m * h) * n[c] + h * h * h * e[c])) / 1e3, p.pt3[c] = Math.round(1e3 * (m * m * f * t[c] + (h * m * f + m * h * f + m * m * u) * i[c] + (h * h * f + m * h * u + h * m * u) * n[c] + h * h * u * e[c])) / 1e3, p.pt4[c] = Math.round(1e3 * (m * f * f * t[c] + (h * f * f + m * u * f + m * f * u) * i[c] + (h * u * f + m * u * u + h * f * u) * n[c] + h * u * u * e[c])) / 1e3, p.pt2[c] = Math.round(1e3 * (f * f * f * t[c] + (u * f * f + f * u * f + f * f * u) * i[c] + (u * u * f + f * u * u + u * f * u) * n[c] + u * u * u * e[c])) / 1e3;
      return p
    }
    var o = function () {
        function t(t, e) {
          this.l = t, this.p = e
        }
        var e = {};
        return function (i, n, r, s) {
          var a = (i.join("_") + "_" + n.join("_") + "_" + r.join("_") + "_" + s.join("_")).replace(/\./g, "p");
          if (e[a]) return e[a];
          var o, l, p, h, c, u, d = defaultCurveSegments,
            m = 0,
            f = [],
            y = [],
            g = {
              addedLength: 0,
              segments: []
            };
          for (p = r.length, o = 0; d > o; o += 1) {
            for (c = o / (d - 1), u = 0, l = 0; p > l; l += 1) h = bm_pow(1 - c, 3) * i[l] + 3 * bm_pow(1 - c, 2) * c * r[l] + 3 * (1 - c) * bm_pow(c, 2) * s[l] + bm_pow(c, 3) * n[l], f[l] = h, null !== y[l] && (u += bm_pow(f[l] - y[l], 2)), y[l] = f[l];
            u && (u = bm_sqrt(u), m += u), g.segments.push(new t(m, c))
          }
          return g.addedLength = m, e[a] = g, g
        }
      }(),
      l = function () {
        var e = {};
        return function (r) {
          var s = r.s,
            a = r.e,
            o = r.to,
            l = r.ti,
            p = (s.join("_") + "_" + a.join("_") + "_" + o.join("_") + "_" + l.join("_")).replace(/\./g, "p");
          if (e[p]) return void(r.bezierData = e[p]);
          var h, c, u, d, m, f, y, g = defaultCurveSegments,
            v = 0,
            x = null;
          2 === s.length && (s[0] != a[0] || s[1] != a[1]) && t(s[0], s[1], a[0], a[1], s[0] + o[0], s[1] + o[1]) && t(s[0], s[1], a[0], a[1], a[0] + l[0], a[1] + l[1]) && (g = 2);
          var k = new i(g);
          for (u = o.length, h = 0; g > h; h += 1) {
            for (y = new Array(u), m = h / (g - 1), f = 0, c = 0; u > c; c += 1) d = bm_pow(1 - m, 3) * s[c] + 3 * bm_pow(1 - m, 2) * m * (s[c] + o[c]) + 3 * (1 - m) * bm_pow(m, 2) * (a[c] + l[c]) + bm_pow(m, 3) * a[c], y[c] = d, null !== x && (f += bm_pow(y[c] - x[c], 2));
            f = bm_sqrt(f), v += f, k.points[h] = new n(f, y), x = y
          }
          k.segmentLength = v, r.bezierData = k, e[p] = k
        }
      }();
    return {
      getBezierLength: o,
      getNewSegment: a,
      buildBezierData: l,
      pointOnLine2D: t,
      pointOnLine3D: e
    }
  }

  function dataFunctionManager() {
    function t(r, s, o) {
      var l, p, h, c, u, d, m, f, y = r.length;
      for (c = 0; y > c; c += 1)
        if (l = r[c], "ks" in l && !l.completed) {
          if (l.completed = !0, l.tt && (r[c - 1].td = l.tt), p = [], h = -1, l.hasMask) {
            var g = l.masksProperties;
            for (d = g.length, u = 0; d > u; u += 1)
              if (g[u].pt.k.i) n(g[u].pt.k);
              else
                for (f = g[u].pt.k.length, m = 0; f > m; m += 1) g[u].pt.k[m].s && n(g[u].pt.k[m].s[0]), g[u].pt.k[m].e && n(g[u].pt.k[m].e[0])
          }
          0 === l.ty ? (l.layers = e(l.refId, s), t(l.layers, s, o)) : 4 === l.ty ? i(l.shapes) : 5 == l.ty && a(l, o)
        }
    }

    function e(t, e) {
      for (var i = 0, n = e.length; n > i;) {
        if (e[i].id === t) return JSON.parse(JSON.stringify(e[i].layers));
        i += 1
      }
    }

    function i(t) {
      var e, r, s, a = t.length;
      for (e = a - 1; e >= 0; e -= 1)
        if ("sh" == t[e].ty)
          if (t[e].ks.k.i) n(t[e].ks.k);
          else
            for (s = t[e].ks.k.length, r = 0; s > r; r += 1) t[e].ks.k[r].s && n(t[e].ks.k[r].s[0]), t[e].ks.k[r].e && n(t[e].ks.k[r].e[0]);
      else "gr" == t[e].ty && i(t[e].it)
    }

    function n(t) {
      var e, i = t.i.length;
      for (e = 0; i > e; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
    }

    function r(t, e) {
      var i = e ? e.split(".") : [100, 100, 100];
      return t[0] > i[0] ? !0 : i[0] > t[0] ? !1 : t[1] > i[1] ? !0 : i[1] > t[1] ? !1 : t[2] > i[2] ? !0 : i[2] > t[2] ? !1 : void 0
    }

    function s(e, i) {
      o(e), t(e.layers, e.assets, i)
    }

    function a(t, e) {
      var i, n, r, s, a, o, l, p = [],
        h = t.t.d,
        c = 0,
        u = t.t.m.g,
        d = 0,
        m = 0,
        f = 0,
        y = [],
        g = 0,
        v = 0,
        x = e.getFontByName(h.f),
        k = 0,
        b = x.fStyle.split(" "),
        E = "normal",
        _ = "normal";
      for (n = b.length, i = 0; n > i; i += 1) "italic" === b[i].toLowerCase() ? _ = "italic" : "bold" === b[i].toLowerCase() ? E = "700" : "black" === b[i].toLowerCase() ? E = "900" : "medium" === b[i].toLowerCase() ? E = "500" : "regular" === b[i].toLowerCase() || "normal" === b[i].toLowerCase() ? E = "400" : ("light" === b[i].toLowerCase() || "thin" === b[i].toLowerCase()) && (E = "200");
      if (h.fWeight = E, h.fStyle = _, n = h.t.length, h.sz) {
        var S = h.sz[0],
          w = -1;
        for (i = 0; n > i; i += 1) r = !1, " " === h.t.charAt(i) ? w = i : 13 === h.t.charCodeAt(i) && (g = 0, r = !0), e.chars ? (l = e.getCharData(h.t.charAt(i), x.fStyle, x.fFamily), k = r ? 0 : l.w * h.s / 100) : k = e.measureText(h.t.charAt(i), h.f, h.s), g + k > S ? (-1 === w ? (h.t = h.t.substr(0, i) + "\r" + h.t.substr(i), n += 1) : (i = w, h.t = h.t.substr(0, i) + "\r" + h.t.substr(i + 1)), w = -1, g = 0) : g += k;
        n = h.t.length
      }
      for (g = 0, k = 0, i = 0; n > i; i += 1)
        if (r = !1, " " === h.t.charAt(i) ? s = "Â " : 13 === h.t.charCodeAt(i) ? (y.push(g), v = g > v ? g : v, g = 0, s = "", r = !0, f += 1) : s = h.t.charAt(i), e.chars ? (l = e.getCharData(h.t.charAt(i), x.fStyle, e.getFontByName(h.f).fFamily), k = r ? 0 : l.w * h.s / 100) : k = e.measureText(s, h.f, h.s), g += k, p.push({
            l: k,
            an: k,
            add: d,
            n: r,
            anIndexes: [],
            val: s,
            line: f
          }), 2 == u) {
          if (d += k, "" == s || "Â " == s || i == n - 1) {
            for (("" == s || "Â " == s) && (d -= k); i >= m;) p[m].an = d, p[m].ind = c, p[m].extra = k, m += 1;
            c += 1, d = 0
          }
        } else if (3 == u) {
        if (d += k, "" == s || i == n - 1) {
          for ("" == s && (d -= k); i >= m;) p[m].an = d, p[m].ind = c, p[m].extra = k, m += 1;
          d = 0, c += 1
        }
      } else p[c].ind = c, p[c].extra = 0, c += 1;
      if (h.l = p, v = g > v ? g : v, y.push(g), h.sz) h.boxWidth = h.sz[0], t.t.d.justifyOffset = 0;
      else switch (h.boxWidth = v, h.j) {
        case 1:
          t.t.d.justifyOffset = -h.boxWidth;
          break;
        case 2:
          t.t.d.justifyOffset = -h.boxWidth / 2;
          break;
        default:
          t.t.d.justifyOffset = 0
      }
      h.lineWidths = y;
      var D = t.t.a;
      o = D.length;
      var A, F, C = [];
      for (a = 0; o > a; a += 1) {
        for (D[a].a.sc && (h.strokeColorAnim = !0), D[a].a.sw && (h.strokeWidthAnim = !0), (D[a].a.fc || D[a].a.fh || D[a].a.fs || D[a].a.fb) && (h.fillColorAnim = !0), F = 0, A = D[a].s.b, i = 0; n > i; i += 1) p[i].anIndexes[a] = F, (1 == A && "" != p[i].val || 2 == A && "" != p[i].val && "Â " != p[i].val || 3 == A && (p[i].n || "Â " == p[i].val || i == n - 1) || 4 == A && (p[i].n || i == n - 1)) && (1 === D[a].s.rn && C.push(F), F += 1);
        t.t.a[a].s.totalChars = F;
        var T, P = -1;
        if (1 === D[a].s.rn)
          for (i = 0; n > i; i += 1) P != p[i].anIndexes[a] && (P = p[i].anIndexes[a], T = C.splice(Math.floor(Math.random() * C.length), 1)[0]), p[i].anIndexes[a] = T
      }
      0 !== o || "m" in t.t.p || (t.singleShape = !0), h.yOffset = 1.2 * h.s, h.ascent = x.ascent * h.s / 100
    }
    var o = function () {
        function t(e) {
          var i, n, r, s = e.length;
          for (i = 0; s > i; i += 1)
            if ("gr" === e[i].ty) t(e[i].it);
            else if ("fl" === e[i].ty || "st" === e[i].ty)
            if (e[i].c.k && e[i].c.k[0].i)
              for (r = e[i].c.k.length, n = 0; r > n; n += 1) e[i].c.k[n].s && (e[i].c.k[n].s[0] /= 255, e[i].c.k[n].s[1] /= 255, e[i].c.k[n].s[2] /= 255, e[i].c.k[n].s[3] /= 255), e[i].c.k[n].e && (e[i].c.k[n].e[0] /= 255, e[i].c.k[n].e[1] /= 255, e[i].c.k[n].e[2] /= 255, e[i].c.k[n].e[3] /= 255);
            else e[i].c.k[0] /= 255, e[i].c.k[1] /= 255, e[i].c.k[2] /= 255, e[i].c.k[3] /= 255
        }

        function e(e) {
          var i, n = e.length;
          for (i = 0; n > i; i += 1) 4 === e[i].ty && t(e[i].shapes)
        }
        var i = [4, 1, 9];
        return function (t) {
          if (r(i, t.v) && (e(t.layers), t.assets)) {
            var n, s = t.assets.length;
            for (n = 0; s > n; n += 1) t.assets[n].layers && e(t.assets[n].layers)
          }
        }
      }(),
      l = {};
    return l.completeData = s, l
  }

  function ShapeModifier() {}

  function TrimModifier() {}

  function RoundCornersModifier() {}

  function SVGRenderer(t) {
    this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.globalData = {
      frameNum: -1
    }, this.elements = [], this.destroyed = !1
  }

  function CanvasRenderer(t, e) {
    this.animationItem = t, this.renderConfig = {
      clearCanvas: e && e.clearCanvas || !0,
      context: e && e.context || null,
      scaleMode: e && e.scaleMode || "fit"
    }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
      frameNum: -1
    }, this.contextData = {
      saved: Array.apply(null, {
        length: 15
      }),
      savedOp: Array.apply(null, {
        length: 15
      }),
      cArrPos: 0,
      cTr: new Matrix,
      cO: 1
    };
    var i, n = 15;
    for (i = 0; n > i; i += 1) this.contextData.saved[i] = Array.apply(null, {
      length: 16
    });
    this.elements = [], this.transformMat = new Matrix
  }

  function HybridRenderer(t) {
    this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.globalData = {
      frameNum: -1
    }, this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null
  }

  function MaskElement(t, e, i) {
    this.dynamicProperties = [], this.data = t, this.element = e, this.globalData = i, this.paths = [], this.storedData = [], this.masksProperties = this.data.masksProperties, this.viewData = new Array(this.masksProperties.length), this.maskElement = null, this.firstFrame = !0;
    var n, r, s, a, o, l, p, h, c = (this.element.maskedElement, this.globalData.defs),
      u = this.masksProperties.length,
      d = this.masksProperties,
      m = 0,
      f = [],
      y = randomString(10),
      g = "clipPath",
      v = "clip-path";
    for (n = 0; u > n; n++)
      if (("a" !== d[n].mode && "n" !== d[n].mode || d[n].inv) && (g = "mask", v = "mask"), "s" != d[n].mode && "i" != d[n].mode || 0 != m || (o = document.createElementNS(svgNS, "rect"), o.setAttribute("fill", "#ffffff"), o.setAttribute("x", "0"), o.setAttribute("y", "0"), o.setAttribute("width", "100%"), o.setAttribute("height", "100%"), f.push(o)), "n" != d[n].mode && d[n].cl !== !1) {
        if (m += 1, r = document.createElementNS(svgNS, "path"), d[n].cl ? "s" == d[n].mode ? r.setAttribute("fill", "#000000") : r.setAttribute("fill", "#ffffff") : (r.setAttribute("fill", "none"), "s" == d[n].mode ? r.setAttribute("fill", "#000000") : r.setAttribute("fill", "#ffffff"), r.setAttribute("stroke-width", "1"), r.setAttribute("stroke-miterlimit", "10")), r.setAttribute("clip-rule", "nonzero"), 0 !== d[n].x.k) {
          g = "mask", v = "mask", h = PropertyFactory.getProp(this.element, d[n].x, 0, null, this.dynamicProperties);
          var x = "fi_" + randomString(10);
          l = document.createElementNS(svgNS, "filter"), l.setAttribute("id", x), p = document.createElementNS(svgNS, "feMorphology"), p.setAttribute("operator", "dilate"), p.setAttribute("in", "SourceGraphic"), p.setAttribute("radius", "0"), l.appendChild(p), c.appendChild(l), "s" == d[n].mode ? r.setAttribute("stroke", "#000000") : r.setAttribute("stroke", "#ffffff")
        } else p = null, h = null;
        if (this.storedData[n] = {
            elem: r,
            x: h,
            expan: p,
            lastPath: "",
            lastOperator: "",
            filterId: x,
            lastRadius: 0
          }, "i" == d[n].mode) {
          a = f.length;
          var k = document.createElementNS(svgNS, "g");
          for (s = 0; a > s; s += 1) k.appendChild(f[s]);
          var b = document.createElementNS(svgNS, "mask");
          b.setAttribute("mask-type", "alpha"), b.setAttribute("id", y + "_" + m), b.appendChild(r), c.appendChild(b), k.setAttribute("mask", "url(#" + y + "_" + m + ")"), f.length = 0, f.push(k)
        } else f.push(r);
        d[n].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[n] = {
          elem: r,
          lastPath: "",
          prop: ShapePropertyFactory.getShapeProp(this.element, d[n], 3, this.dynamicProperties, null)
        }, this.viewData[n].prop.k || this.drawPath(d[n], this.viewData[n].prop.v, this.viewData[n])
      } else this.viewData[n] = {
        prop: ShapePropertyFactory.getShapeProp(this.element, d[n], 3, this.dynamicProperties, null)
      };
    for (this.maskElement = document.createElementNS(svgNS, g), u = f.length, n = 0; u > n; n += 1) this.maskElement.appendChild(f[n]);
    this.maskElement.setAttribute("id", y), m > 0 && this.element.maskedElement.setAttribute(v, "url(#" + y + ")"), c.appendChild(this.maskElement)
  }

  function BaseElement() {}

  function SVGBaseElement(t, e, i, n, r) {
    this.globalData = i, this.comp = n, this.data = t, this.matteElement = null, this.parentContainer = e, this.layerId = r ? r.layerId : "ly_" + randomString(10), this.placeholder = r, this.init()
  }

  function ITextElement() {}

  function SVGTextElement(t, e, i, n, r) {
    this.textSpans = [], this.renderType = "svg", this._parent.constructor.call(this, t, e, i, n, r)
  }

  function ICompElement(t, e, i, n, r) {
    this._parent.constructor.call(this, t, e, i, n, r), this.layers = t.layers, this.isSvg = !0, this.data.tm && (this.tm = PropertyFactory.getProp(this, this.data.tm, 0, i.frameRate, this.dynamicProperties))
  }

  function IImageElement(t, e, i, n, r) {
    this.assetData = i.getAssetData(t.refId), this.path = i.getPath(), this._parent.constructor.call(this, t, e, i, n, r)
  }

  function IShapeElement(t, e, i, n, r) {
    this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.viewData = [], this.shapeModifiers = [], this.shapesContainer = document.createElementNS(svgNS, "g"), this._parent.constructor.call(this, t, e, i, n, r)
  }

  function ISolidElement(t, e, i, n, r) {
    this._parent.constructor.call(this, t, e, i, n, r)
  }

  function CVBaseElement(t, e, i) {
    this.globalData = i, this.data = t, this.comp = e, this.canvasContext = i.canvasContext, this.init()
  }

  function CVCompElement(t, e, i) {
    this._parent.constructor.call(this, t, e, i);
    var n = {};
    for (var r in i) i.hasOwnProperty(r) && (n[r] = i[r]);
    n.renderer = this, n.compHeight = this.data.h, n.compWidth = this.data.w, this.renderConfig = {
      clearCanvas: !0
    }, this.contextData = {
      saved: Array.apply(null, {
        length: 15
      }),
      savedOp: Array.apply(null, {
        length: 15
      }),
      cArrPos: 0,
      cTr: new Matrix,
      cO: 1
    };
    var s, a = 15;
    for (s = 0; a > s; s += 1) this.contextData.saved[s] = Array.apply(null, {
      length: 16
    });
    this.transformMat = new Matrix, this.parentGlobalData = this.globalData;
    var o = document.createElement("canvas");
    n.canvasContext = o.getContext("2d"), this.canvasContext = n.canvasContext, o.width = this.data.w, o.height = this.data.h, this.canvas = o, this.globalData = n, this.layers = t.layers, this.data.tm && (this.tm = PropertyFactory.getProp(this, this.data.tm, 0, i.frameRate, this.dynamicProperties))
  }

  function CVImageElement(t, e, i) {
    this.animationItem = i.renderer.animationItem, this.assetData = this.animationItem.getAssetData(t.refId), this.path = this.animationItem.getPath(), this._parent.constructor.call(this, t, e, i), this.animationItem.pendingElements += 1
  }

  function CVMaskElement(t, e) {
    this.data = t, this.element = e, this.dynamicProperties = [], this.masksProperties = this.data.masksProperties, this.viewData = new Array(this.masksProperties.length);
    var i, n = this.masksProperties.length;
    for (i = 0; n > i; i++) this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3, this.dynamicProperties, null)
  }

  function CVShapeElement(t, e, i) {
    this.shapes = [], this.stylesList = [], this.viewData = [], this.shapeModifiers = [], this.shapesData = t.shapes, this.firstFrame = !0, this._parent.constructor.call(this, t, e, i)
  }

  function CVSolidElement(t, e, i) {
    this._parent.constructor.call(this, t, e, i)
  }

  function CVTextElement(t, e, i) {
    this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
      fill: "rgba(0,0,0,0)",
      stroke: "rgba(0,0,0,0)",
      sWidth: 0,
      fValue: ""
    }, this._parent.constructor.call(this, t, e, i)
  }

  function HBaseElement(t, e, i, n, r) {
    this.globalData = i, this.comp = n, this.data = t, this.matteElement = null, this.parentContainer = e, this.layerId = r ? r.layerId : "ly_" + randomString(10), this.placeholder = r, this.init()
  }

  function HSolidElement(t, e, i, n, r) {
    this._parent.constructor.call(this, t, e, i, n, r)
  }

  function HCompElement(t, e, i, n, r) {
    this._parent.constructor.call(this, t, e, i, n, r), this.layers = t.layers, this.isSvg = !1, this.data.tm && (this.tm = PropertyFactory.getProp(this, this.data.tm, 0, i.frameRate, this.dynamicProperties)), this.data.hasMask && (this.isSvg = !0)
  }

  function HShapeElement(t, e, i, n, r) {
    this.shapes = [], this.shapeModifiers = [], this.shapesData = t.shapes, this.stylesList = [], this.viewData = [], this._parent.constructor.call(this, t, e, i, n, r)
  }

  function HTextElement(t, e, i, n, r) {
    this.textSpans = [], this.textPaths = [], this.currentBBox = {
      x: 999999,
      y: -999999,
      h: 0,
      w: 0
    }, this.renderType = "svg", this.isMasked = !1, this._parent.constructor.call(this, t, e, i, n, r)
  }

  function HImageElement(t, e, i, n, r) {
    this.assetData = i.getAssetData(t.refId), this.path = i.getPath(), this._parent.constructor.call(this, t, e, i, n, r)
  }

  function HCameraElement(t, e, i, n, r) {
    if (this._parent.constructor.call(this, t, e, i, n, r), this.pe = PropertyFactory.getProp(this, t.pe, 0, 0, this.dynamicProperties), t.ks.p.s ? (this.px = PropertyFactory.getProp(this, t.ks.p.x, 1, 0, this.dynamicProperties), this.py = PropertyFactory.getProp(this, t.ks.p.y, 1, 0, this.dynamicProperties), this.pz = PropertyFactory.getProp(this, t.ks.p.z, 1, 0, this.dynamicProperties)) : this.p = PropertyFactory.getProp(this, t.ks.p, 1, 0, this.dynamicProperties), t.ks.a && (this.a = PropertyFactory.getProp(this, t.ks.a, 1, 0, this.dynamicProperties)), t.ks.or.k.length) {
      var s, a = t.ks.or.k.length;
      for (s = 0; a > s; s += 1) t.ks.or.k[s].to = null, t.ks.or.k[s].ti = null
    }
    this.or = PropertyFactory.getProp(this, t.ks.or, 1, degToRads, this.dynamicProperties), this.or.sh = !0, this.rx = PropertyFactory.getProp(this, t.ks.rx, 0, degToRads, this.dynamicProperties), this.ry = PropertyFactory.getProp(this, t.ks.ry, 0, degToRads, this.dynamicProperties), this.rz = PropertyFactory.getProp(this, t.ks.rz, 0, degToRads, this.dynamicProperties), this.mat = new Matrix
  }

  function SliderEffect(t, e, i) {
    this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
  }

  function AngleEffect(t, e, i) {
    this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
  }

  function ColorEffect(t, e, i) {
    this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
  }

  function PointEffect(t, e, i) {
    this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
  }

  function CheckboxEffect(t, e, i) {
    this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
  }

  function NoValueEffect() {
    this.p = {}
  }

  function groupEffectFunction() {}

  function GroupEffect() {
    var t = groupEffectFunction;
    return t
  }

  function EffectsManager(t, e, i) {
    var n, r, s = t.ef,
      a = [],
      o = s.length;
    for (n = 0; o > n; n++) switch (s[n].ty) {
      case 0:
        r = new SliderEffect(s[n], e, i), a.push(r.proxyFunction.bind(r));
        break;
      case 1:
        r = new AngleEffect(s[n], e, i), a.push(r.proxyFunction.bind(r));
        break;
      case 2:
        r = new ColorEffect(s[n], e, i), a.push(r.proxyFunction.bind(r));
        break;
      case 3:
        r = new PointEffect(s[n], e, i), a.push(r.proxyFunction.bind(r));
        break;
      case 4:
      case 7:
        r = new CheckboxEffect(s[n], e, i), a.push(r.proxyFunction.bind(r));
        break;
      case 5:
        r = new EffectsManager(s[n], e, i), a.push(r);
        break;
      case 6:
        r = new NoValueEffect(s[n], e, i), a.push(r)
    }
    var l = function (e) {
      for (var i = t.ef, n = 0, r = i.length; r > n;) {
        if (e === i[n].nm || e === i[n].ix) return 5 === i[n].ty ? a[n] : a[n]();
        n += 1
      }
    };
    return l
  }

  function play(t) {
    animationManager.play(t)
  }

  function pause(t) {
    animationManager.pause(t)
  }

  function togglePause(t) {
    animationManager.togglePause(t)
  }

  function setSpeed(t, e) {
    animationManager.setSpeed(t, e)
  }

  function setDirection(t, e) {
    animationManager.setDirection(t, e)
  }

  function stop(t) {
    animationManager.stop(t)
  }

  function moveFrame(t) {
    animationManager.moveFrame(t)
  }

  function searchAnimations() {
    standalone === !0 ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
  }

  function registerAnimation(t) {
    return animationManager.registerAnimation(t)
  }

  function resize() {
    animationManager.resize()
  }

  function start() {
    animationManager.start()
  }

  function goToAndStop(t, e, i) {
    animationManager.goToAndStop(t, e, i)
  }

  function setSubframeRendering(t) {
    subframeEnabled = t
  }

  function loadAnimation(t) {
    return standalone === !0 && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
  }

  function destroy(t) {
    return animationManager.destroy(t)
  }

  function setQuality(t) {
    if ("string" == typeof t) switch (t) {
      case "high":
        defaultCurveSegments = 200;
        break;
      case "medium":
        defaultCurveSegments = 50;
        break;
      case "low":
        defaultCurveSegments = 10
    } else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
    defaultCurveSegments >= 50 ? roundValues(!1) : roundValues(!0)
  }

  function installPlugin(t, e) {
    "expressions" === t && (expressionsPlugin = e)
  }

  function getFactory(t) {
    switch (t) {
      case "propertyFactory":
        return PropertyFactory;
      case "shapePropertyFactory":
        return ShapePropertyFactory;
      case "matrix":
        return Matrix
    }
  }

  function checkReady() {
    "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
  }

  function getQueryVariable(t) {
    for (var e = queryString.split("&"), i = 0; i < e.length; i++) {
      var n = e[i].split("=");
      if (decodeURIComponent(n[0]) == t) return decodeURIComponent(n[1])
    }
  }
  var svgNS = "http://www.w3.org/2000/svg",
    subframeEnabled = !1,
    expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
    cachedColors = {},
    bm_rounder = Math.round,
    bm_rnd, bm_pow = Math.pow,
    bm_sqrt = Math.sqrt,
    bm_abs = Math.abs,
    bm_floor = Math.floor,
    bm_max = Math.max,
    bm_min = Math.min,
    BMMath = {
      pow: bm_pow,
      random: Math.random
    },
    defaultCurveSegments = 75,
    degToRads = Math.PI / 180,
    roundCorner = .5519;
  roundValues(!1);
  var rgbToHex = function () {
      var t, e, i = [];
      for (t = 0; 256 > t; t += 1) e = t.toString(16), i[t] = 1 == e.length ? "0" + e : e;
      return function (t, e, n) {
        return 0 > t && (t = 0), 0 > e && (e = 0), 0 > n && (n = 0), "#" + i[t] + i[e] + i[n]
      }
    }(),
    fillColorToString = function () {
      var t = [];
      return function (e, i) {
        return void 0 !== i && (e[3] = i), t[e[0]] || (t[e[0]] = {}), t[e[0]][e[1]] || (t[e[0]][e[1]] = {}), t[e[0]][e[1]][e[2]] || (t[e[0]][e[1]][e[2]] = {}), t[e[0]][e[1]][e[2]][e[3]] || (t[e[0]][e[1]][e[2]][e[3]] = "rgba(" + e.join(",") + ")"), t[e[0]][e[1]][e[2]][e[3]]
      }
    }(),
    Matrix = function () {
      function t() {
        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
      }

      function e(t) {
        if (0 === t) return this;
        var e = Math.cos(t),
          i = Math.sin(t);
        return this._t(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      }

      function i(t) {
        if (0 === t) return this;
        var e = Math.cos(t),
          i = Math.sin(t);
        return this._t(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1)
      }

      function n(t) {
        if (0 === t) return this;
        var e = Math.cos(t),
          i = Math.sin(t);
        return this._t(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1)
      }

      function r(t) {
        if (0 === t) return this;
        var e = Math.cos(t),
          i = Math.sin(t);
        return this._t(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      }

      function s(t, e) {
        return this._t(1, e, t, 1, 0, 0)
      }

      function a(t, e) {
        return this.shear(Math.tan(t), Math.tan(e))
      }

      function o(t, e) {
        var i = Math.cos(e),
          n = Math.sin(e);
        return this._t(i, n, 0, 0, -n, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, Math.tan(t), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(i, -n, 0, 0, n, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      }

      function l(t, e, i) {
        return i = isNaN(i) ? 1 : i, 1 == t && 1 == e && 1 == i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
      }

      function p(t, e, i, n, r, s, a, o, l, p, h, c, u, d, m, f) {
        return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = n, this.props[4] = r, this.props[5] = s, this.props[6] = a, this.props[7] = o, this.props[8] = l, this.props[9] = p, this.props[10] = h, this.props[11] = c, this.props[12] = u, this.props[13] = d, this.props[14] = m, this.props[15] = f, this
      }

      function h(t, e, i) {
        return i = isNaN(i) ? 0 : i, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
      }

      function c(t, e, i, n, r, s, a, o, l, p, h, c, u, d, m, f) {
        if (1 === t && 0 === e && 0 === i && 0 === n && 0 === r && 1 === s && 0 === a && 0 === o && 0 === l && 0 === p && 1 === h && 0 === c) return (0 !== u || 0 !== d || 0 !== m) && (this.props[12] = this.props[12] * t + this.props[13] * r + this.props[14] * l + this.props[15] * u, this.props[13] = this.props[12] * e + this.props[13] * s + this.props[14] * p + this.props[15] * d, this.props[14] = this.props[12] * i + this.props[13] * a + this.props[14] * h + this.props[15] * m, this.props[15] = this.props[12] * n + this.props[13] * o + this.props[14] * c + this.props[15] * f), this;
        var y = this.props[0],
          g = this.props[1],
          v = this.props[2],
          x = this.props[3],
          k = this.props[4],
          b = this.props[5],
          E = this.props[6],
          _ = this.props[7],
          S = this.props[8],
          w = this.props[9],
          D = this.props[10],
          A = this.props[11],
          F = this.props[12],
          C = this.props[13],
          T = this.props[14],
          P = this.props[15];
        return this.props[0] = y * t + g * r + v * l + x * u, this.props[1] = y * e + g * s + v * p + x * d, this.props[2] = y * i + g * a + v * h + x * m, this.props[3] = y * n + g * o + v * c + x * f, this.props[4] = k * t + b * r + E * l + _ * u, this.props[5] = k * e + b * s + E * p + _ * d, this.props[6] = k * i + b * a + E * h + _ * m, this.props[7] = k * n + b * o + E * c + _ * f, this.props[8] = S * t + w * r + D * l + A * u, this.props[9] = S * e + w * s + D * p + A * d, this.props[10] = S * i + w * a + D * h + A * m, this.props[11] = S * n + w * o + D * c + A * f, this.props[12] = F * t + C * r + T * l + P * u, this.props[13] = F * e + C * s + T * p + P * d, this.props[14] = F * i + C * a + T * h + P * m, this.props[15] = F * n + C * o + T * c + P * f, this
      }

      function u(t) {
        var e;
        for (e = 0; 16 > e; e += 1) t.props[e] = this.props[e]
      }

      function d(t) {
        var e;
        for (e = 0; 16 > e; e += 1) this.props[e] = t[e]
      }

      function m(t, e, i) {
        return {
          x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
          y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
          z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
        }
      }

      function f(t, e, i) {
        return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
      }

      function y(t, e, i) {
        return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
      }

      function g(t, e, i) {
        return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
      }

      function v(t, e, i) {
        return [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
      }

      function x(t, e) {
        return bm_rnd(t * this.props[0] + e * this.props[4] + this.props[12]) + "," + bm_rnd(t * this.props[1] + e * this.props[5] + this.props[13])
      }

      function k() {
        return [this.props[0], this.props[1], this.props[2], this.props[3], this.props[4], this.props[5], this.props[6], this.props[7], this.props[8], this.props[9], this.props[10], this.props[11], this.props[12], this.props[13], this.props[14], this.props[15]]
      }

      function b() {
        return isSafari ? "matrix3d(" + roundTo2Decimals(this.props[0]) + "," + roundTo2Decimals(this.props[1]) + "," + roundTo2Decimals(this.props[2]) + "," + roundTo2Decimals(this.props[3]) + "," + roundTo2Decimals(this.props[4]) + "," + roundTo2Decimals(this.props[5]) + "," + roundTo2Decimals(this.props[6]) + "," + roundTo2Decimals(this.props[7]) + "," + roundTo2Decimals(this.props[8]) + "," + roundTo2Decimals(this.props[9]) + "," + roundTo2Decimals(this.props[10]) + "," + roundTo2Decimals(this.props[11]) + "," + roundTo2Decimals(this.props[12]) + "," + roundTo2Decimals(this.props[13]) + "," + roundTo2Decimals(this.props[14]) + "," + roundTo2Decimals(this.props[15]) + ")" : (this.cssParts[1] = this.props.join(","), this.cssParts.join(""))
      }

      function E() {
        return "matrix(" + this.props[0] + "," + this.props[1] + "," + this.props[4] + "," + this.props[5] + "," + this.props[12] + "," + this.props[13] + ")"
      }

      function _() {
        return "" + this.toArray()
      }
      return function () {
        this.reset = t, this.rotate = e, this.rotateX = i, this.rotateY = n, this.rotateZ = r, this.skew = a, this.skewFromAxis = o, this.shear = s, this.scale = l, this.setTransform = p, this.translate = h, this.transform = c, this.applyToPoint = m, this.applyToX = f, this.applyToY = y, this.applyToZ = g, this.applyToPointArray = v, this.applyToPointStringified = x, this.toArray = k, this.toCSS = b, this.to2dCSS = E, this.toString = _, this.clone = u, this.cloneFromProps = d, this._t = this.transform, this.props = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], this.cssParts = ["matrix3d(", "", ")"]
      }
    }();
  ! function (t, e) {
    function i(i, p, h) {
      var d = [];
      p = 1 == p ? {
        entropy: !0
      } : p || {};
      var v = a(s(p.entropy ? [i, l(t)] : null == i ? o() : i, 3), d),
        x = new n(d),
        k = function () {
          for (var t = x.g(u), e = f, i = 0; y > t;) t = (t + i) * c, e *= c, i = x.g(1);
          for (; t >= g;) t /= 2, e /= 2, i >>>= 1;
          return (t + i) / e
        };
      return k.int32 = function () {
        return 0 | x.g(4)
      }, k.quick = function () {
        return x.g(4) / 4294967296
      }, k["double"] = k, a(l(x.S), t), (p.pass || h || function (t, i, n, s) {
        return s && (s.S && r(s, x), t.state = function () {
          return r(x, {})
        }), n ? (e[m] = t, i) : t
      })(k, v, "global" in p ? p.global : this == e, p.state)
    }

    function n(t) {
      var e, i = t.length,
        n = this,
        r = 0,
        s = n.i = n.j = 0,
        a = n.S = [];
      for (i || (t = [i++]); c > r;) a[r] = r++;
      for (r = 0; c > r; r++) a[r] = a[s = v & s + t[r % i] + (e = a[r])], a[s] = e;
      (n.g = function (t) {
        for (var e, i = 0, r = n.i, s = n.j, a = n.S; t--;) e = a[r = v & r + 1], i = i * c + a[v & (a[r] = a[s = v & s + e]) + (a[s] = e)];
        return n.i = r, n.j = s, i
      })(c)
    }

    function r(t, e) {
      return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
    }

    function s(t, e) {
      var i, n = [],
        r = typeof t;
      if (e && "object" == r)
        for (i in t) try {
          n.push(s(t[i], e - 1))
        } catch (a) {}
      return n.length ? n : "string" == r ? t : t + "\0"
    }

    function a(t, e) {
      for (var i, n = t + "", r = 0; r < n.length;) e[v & r] = v & (i ^= 19 * e[v & r]) + n.charCodeAt(r++);
      return l(e)
    }

    function o() {
      try {
        if (p) return l(p.randomBytes(c));
        var e = new Uint8Array(c);
        return (h.crypto || h.msCrypto).getRandomValues(e), l(e)
      } catch (i) {
        var n = h.navigator,
          r = n && n.plugins;
        return [+new Date, h, r, h.screen, l(t)]
      }
    }

    function l(t) {
      return String.fromCharCode.apply(0, t)
    }
    var p, h = this,
      c = 256,
      u = 6,
      d = 52,
      m = "random",
      f = e.pow(c, u),
      y = e.pow(2, d),
      g = 2 * y,
      v = c - 1;
    e["seed" + m] = i, a(e.random(), t)
  }([], BMMath);
  var BezierFactory = function () {
      function t(t, e, i, n, r) {
        var s = r || ("bez_" + t + "_" + e + "_" + i + "_" + n).replace(/\./g, "p");
        if (h[s]) return h[s];
        var a = new l([t, e, i, n]);
        return h[s] = a, a
      }

      function e(t, e) {
        return 1 - 3 * e + 3 * t
      }

      function i(t, e) {
        return 3 * e - 6 * t
      }

      function n(t) {
        return 3 * t
      }

      function r(t, r, s) {
        return ((e(r, s) * t + i(r, s)) * t + n(r)) * t
      }

      function s(t, r, s) {
        return 3 * e(r, s) * t * t + 2 * i(r, s) * t + n(r)
      }

      function a(t, e, i, n, s) {
        var a, o, l = 0;
        do o = e + (i - e) / 2, a = r(o, n, s) - t, a > 0 ? i = o : e = o; while (Math.abs(a) > d && ++l < m);
        return o
      }

      function o(t, e, i, n) {
        for (var a = 0; c > a; ++a) {
          var o = s(e, i, n);
          if (0 === o) return e;
          var l = r(e, i, n) - t;
          e -= l / o
        }
        return e
      }

      function l(t) {
        this._p = t, this._mSampleValues = g ? new Float32Array(f) : new Array(f), this._precomputed = !1, this.get = this.get.bind(this)
      }
      var p = {};
      p.getBezierEasing = t;
      var h = {},
        c = 4,
        u = .001,
        d = 1e-7,
        m = 10,
        f = 11,
        y = 1 / (f - 1),
        g = "function" == typeof Float32Array;
      return l.prototype = {
        get: function (t) {
          var e = this._p[0],
            i = this._p[1],
            n = this._p[2],
            s = this._p[3];
          return this._precomputed || this._precompute(), e === i && n === s ? t : 0 === t ? 0 : 1 === t ? 1 : r(this._getTForX(t), i, s)
        },
        _precompute: function () {
          var t = this._p[0],
            e = this._p[1],
            i = this._p[2],
            n = this._p[3];
          this._precomputed = !0, (t !== e || i !== n) && this._calcSampleValues()
        },
        _calcSampleValues: function () {
          for (var t = this._p[0], e = this._p[2], i = 0; f > i; ++i) this._mSampleValues[i] = r(i * y, t, e)
        },
        _getTForX: function (t) {
          for (var e = this._p[0], i = this._p[2], n = this._mSampleValues, r = 0, l = 1, p = f - 1; l !== p && n[l] <= t; ++l) r += y;
          --l;
          var h = (t - n[l]) / (n[l + 1] - n[l]),
            c = r + h * y,
            d = s(c, e, i);
          return d >= u ? o(t, c, e, i) : 0 === d ? c : a(t, r, r + y, e, i)
        }
      }, p
    }(),
    MatrixManager = matrixManagerFunction;
  ! function () {
    for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (e) {
      var i = (new Date).getTime(),
        n = Math.max(0, 16 - (i - t)),
        r = window.setTimeout(function () {
          e(i + n)
        }, n);
      return t = i + n, r
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
      clearTimeout(t)
    })
  }();
  var bez = bezFunction(),
    dataManager = dataFunctionManager(),
    FontManager = function () {
      function t(t, e) {
        var i = document.createElement("span");
        i.style.fontFamily = e;
        var n = document.createElement("span");
        n.innerHTML = "giItT1WQy@!-/#", i.style.position = "absolute", i.style.left = "-10000px", i.style.top = "-10000px", i.style.fontSize = "300px", i.style.fontVariant = "normal", i.style.fontStyle = "normal", i.style.fontWeight = "normal", i.style.letterSpacing = "0", i.appendChild(n), document.body.appendChild(i);
        var r = n.offsetWidth;
        return n.style.fontFamily = t + ", " + e, {
          node: n,
          w: r,
          parent: i
        }
      }

      function e() {
        var t, i, n, r = this.fonts.length,
          s = r;
        for (t = 0; r > t; t += 1)
          if (this.fonts[t].loaded) s -= 1;
          else if ("t" === this.fonts[t].fOrigin) {
          if (window.Typekit && window.Typekit.load && 0 === this.typekitLoaded) {
            this.typekitLoaded = 1;
            try {
              Typekit.load({
                async: !0,
                active: function () {
                  this.typekitLoaded = 2
                }.bind(this)
              })
            } catch (a) {}
          }
          2 === this.typekitLoaded && (this.fonts[t].loaded = !0)
        } else "n" === this.fonts[t].fOrigin ? this.fonts[t].loaded = !0 : (i = this.fonts[t].monoCase.node, n = this.fonts[t].monoCase.w, i.offsetWidth !== n ? (s -= 1, this.fonts[t].loaded = !0) : (i = this.fonts[t].sansCase.node, n = this.fonts[t].sansCase.w, i.offsetWidth !== n && (s -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
        0 !== s && Date.now() - this.initTime < l ? setTimeout(e.bind(this), 20) : setTimeout(function () {
          this.loaded = !0
        }.bind(this), 0)
      }

      function i(t, e) {
        var i = document.createElementNS(svgNS, "text");
        i.style.fontSize = "100px", i.style.fontFamily = e.fFamily, i.textContent = "1", e.fClass ? (i.style.fontFamily = "inherit", i.className = e.fClass) : i.style.fontFamily = e.fFamily, t.appendChild(i);
        var n = document.createElement("canvas").getContext("2d");
        return n.font = "100px " + e.fFamily, n
      }

      function n(n, r) {
        if (!n) return void(this.loaded = !0);
        if (this.chars) return this.loaded = !0, void(this.fonts = n.list);
        var s, a = n.list,
          o = a.length;
        for (s = 0; o > s; s += 1) {
          if (a[s].loaded = !1, a[s].monoCase = t(a[s].fFamily, "monospace"), a[s].sansCase = t(a[s].fFamily, "sans-serif"), a[s].fPath) {
            if ("p" === a[s].fOrigin) {
              var l = document.createElement("style");
              l.type = "text/css", l.innerHTML = "@font-face {font-family: " + a[s].fFamily + "; font-style: normal; src: url('" + a[s].fPath + "');}", r.appendChild(l)
            } else if ("g" === a[s].fOrigin) {
              var p = document.createElement("link");
              p.type = "text/css", p.rel = "stylesheet", p.href = a[s].fPath, r.appendChild(p)
            } else if ("t" === a[s].fOrigin) {
              var h = document.createElement("script");
              h.setAttribute("src", a[s].fPath), r.appendChild(h)
            }
          } else a[s].loaded = !0;
          a[s].helper = i(r, a[s]), this.fonts.push(a[s])
        }
        e.bind(this)()
      }

      function r(t) {
        if (t) {
          this.chars || (this.chars = []);
          var e, i, n, r = t.length,
            s = this.chars.length;
          for (e = 0; r > e; e += 1) {
            for (i = 0, n = !1; s > i;) this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (n = !0), i += 1;
            n || (this.chars.push(t[e]), s += 1)
          }
        }
      }

      function s(t, e, i) {
        for (var n = 0, r = this.chars.length; r > n;) {
          if (this.chars[n].ch === t && this.chars[n].style === e && this.chars[n].fFamily === i) return this.chars[n];
          n += 1
        }
      }

      function a(t, e, i) {
        var n = this.getFontByName(e),
          r = n.helper;
        return r.measureText(t).width * i / 100
      }

      function o(t) {
        for (var e = 0, i = this.fonts.length; i > e;) {
          if (this.fonts[e].fName === t) return this.fonts[e];
          e += 1
        }
        return "sans-serif"
      }
      var l = 5e3,
        p = function () {
          this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.loaded = !1, this.initTime = Date.now()
        };
      return p.prototype.addChars = r, p.prototype.addFonts = n, p.prototype.getCharData = s, p.prototype.getFontByName = o, p.prototype.measureText = a, p
    }(),
    PropertyFactory = function () {
      function t() {
        if (this.elem.globalData.frameId !== this.frameId) {
          this.mdf = !1;
          var t = this.comp.renderedFrame - this.offsetTime;
          if (t === this.lastFrame || this.lastFrame !== l && (this.lastFrame >= this.keyframes[this.keyframes.length - 1].t - this.offsetTime && t >= this.keyframes[this.keyframes.length - 1].t - this.offsetTime || this.lastFrame < this.keyframes[0].t - this.offsetTime && t < this.keyframes[0].t - this.offsetTime));
          else {
            for (var e, i, n = 0, r = this.keyframes.length - 1, s = 1, a = !0; a;) {
              if (e = this.keyframes[n], i = this.keyframes[n + 1], n == r - 1 && t >= i.t - this.offsetTime) {
                e.h && (e = i);
                break
              }
              if (i.t - this.offsetTime > t) break;
              r - 1 > n ? n += s : a = !1
            }
            var o, p, h, c, u, d = 0;
            if (e.to) {
              e.bezierData || bez.buildBezierData(e);
              var m = e.bezierData;
              if (t >= i.t - this.offsetTime || t < e.t - this.offsetTime) {
                var f = t >= i.t - this.offsetTime ? m.points.length - 1 : 0;
                for (p = m.points[f].point.length, o = 0; p > o; o += 1) this.v[o] = this.mult ? m.points[f].point[o] * this.mult : m.points[f].point[o], this.pv[o] = m.points[f].point[o], this.lastPValue[o] !== this.pv[o] && (this.mdf = !0, this.lastPValue[o] = this.pv[o])
              } else {
                e.__fnct ? u = e.__fnct : (u = BezierFactory.getBezierEasing(e.o.x, e.o.y, e.i.x, e.i.y, e.n).get, e.__fnct = u), h = u((t - (e.t - this.offsetTime)) / (i.t - this.offsetTime - (e.t - this.offsetTime)));
                var y, g = m.segmentLength * h,
                  v = 0;
                for (s = 1, a = !0, c = m.points.length; a;) {
                  if (v += m.points[d].partialLength * s, 0 === g || 0 === h || d == m.points.length - 1) {
                    for (p = m.points[d].point.length, o = 0; p > o; o += 1) this.v[o] = this.mult ? m.points[d].point[o] * this.mult : m.points[d].point[o], this.pv[o] = m.points[d].point[o], this.lastPValue[o] !== this.pv[o] && (this.mdf = !0, this.lastPValue[o] = this.pv[o]);
                    break
                  }
                  if (g >= v && g < v + m.points[d + 1].partialLength) {
                    for (y = (g - v) / m.points[d + 1].partialLength, p = m.points[d].point.length, o = 0; p > o; o += 1) this.v[o] = this.mult ? (m.points[d].point[o] + (m.points[d + 1].point[o] - m.points[d].point[o]) * y) * this.mult : m.points[d].point[o] + (m.points[d + 1].point[o] - m.points[d].point[o]) * y, this.pv[o] = m.points[d].point[o] + (m.points[d + 1].point[o] - m.points[d].point[o]) * y, this.lastPValue[o] !== this.pv[o] && (this.mdf = !0, this.lastPValue[o] = this.pv[o]);
                    break
                  }
                  c - 1 > d && 1 == s || d > 0 && -1 == s ? d += s : a = !1
                }
              }
            } else {
              var x, k, b, E, _, S = !1;
              for (r = e.s.length, n = 0; r > n; n += 1) {
                if (1 !== e.h && (e.o.x instanceof Array ? (S = !0, e.__fnct || (e.__fnct = []), e.__fnct[n] || (x = e.o.x[n] || e.o.x[0], k = e.o.y[n] || e.o.y[0], b = e.i.x[n] || e.i.x[0], E = e.i.y[n] || e.i.y[0])) : (S = !1, e.__fnct || (x = e.o.x, k = e.o.y, b = e.i.x, E = e.i.y)), S ? e.__fnct[n] ? u = e.__fnct[n] : (u = BezierFactory.getBezierEasing(x, k, b, E).get, e.__fnct[n] = u) : e.__fnct ? u = e.__fnct : (u = BezierFactory.getBezierEasing(x, k, b, E).get, e.__fnct = u), h = t >= i.t - this.offsetTime ? 1 : t < e.t - this.offsetTime ? 0 : u((t - (e.t - this.offsetTime)) / (i.t - this.offsetTime - (e.t - this.offsetTime)))), this.sh && 1 !== e.h) {
                  var w = e.s[n],
                    D = e.e[n]; - 180 > w - D ? w += 360 : w - D > 180 && (w -= 360), _ = w + (D - w) * h
                } else _ = 1 === e.h ? e.s[n] : e.s[n] + (e.e[n] - e.s[n]) * h;
                1 === r ? (this.v = this.mult ? _ * this.mult : _, this.pv = _, this.lastPValue != this.pv && (this.mdf = !0, this.lastPValue = this.pv)) : (this.v[n] = this.mult ? _ * this.mult : _, this.pv[n] = _, this.lastPValue[n] !== this.pv[n] && (this.mdf = !0, this.lastPValue[n] = this.pv[n]))
              }
            }
          }
          this.lastFrame = t, this.frameId = this.elem.globalData.frameId
        }
      }

      function e(t, e, i) {
        this.mult = i, this.v = i ? e.k * i : e.k, this.pv = e.k, this.mdf = !1, this.comp = t.comp, this.k = !1
      }

      function i(t, e, i) {
        this.mult = i, this.data = e, this.mdf = !1, this.comp = t.comp, this.k = !1, this.frameId = -1, this.v = new Array(e.k.length), this.pv = new Array(e.k.length), this.lastValue = new Array(e.k.length);
        var n, r = e.k.length;
        for (n = 0; r > n; n += 1) this.v[n] = i ? e.k[n] * i : e.k[n], this.pv[n] = e.k[n]
      }

      function n(e, i, n) {
        this.keyframes = i.k, this.offsetTime = e.data.st, this.lastValue = -99999, this.lastPValue = -99999, this.frameId = -1, this.k = !0, this.data = i, this.mult = n, this.elem = e, this.comp = e.comp, this.lastFrame = l, this.v = n ? i.k[0].s[0] * n : i.k[0].s[0], this.pv = i.k[0].s[0], this.getValue = t
      }

      function r(e, i, n) {
        var r, s, a, o, p, h = i.k.length;
        for (r = 0; h - 1 > r; r += 1) i.k[r].to && i.k[r].s && i.k[r].e && (s = i.k[r].s, a = i.k[r].e, o = i.k[r].to, p = i.k[r].ti, (2 == s.length && bez.pointOnLine2D(s[0], s[1], a[0], a[1], s[0] + o[0], s[1] + o[1]) && bez.pointOnLine2D(s[0], s[1], a[0], a[1], a[0] + p[0], a[1] + p[1]) || bez.pointOnLine3D(s[0], s[1], s[2], a[0], a[1], a[2], s[0] + o[0], s[1] + o[1], s[2] + o[2]) && bez.pointOnLine3D(s[0], s[1], s[2], a[0], a[1], a[2], a[0] + p[0], a[1] + p[1], a[2] + p[2])) && (i.k[r].to = null, i.k[r].ti = null));
        this.keyframes = i.k, this.offsetTime = e.data.st, this.k = !0, this.mult = n, this.elem = e, this.comp = e.comp, this.getValue = t, this.frameId = -1, this.v = new Array(i.k[0].s.length), this.pv = new Array(i.k[0].s.length), this.lastValue = new Array(i.k[0].s.length), this.lastPValue = new Array(i.k[0].s.length), this.lastFrame = l
      }

      function s(t, s, a, o, l) {
        var h;
        if (2 === a) h = new p(t, s, l);
        else if (7 === a) h = new TrimProperty(t, s, l);
        else if (s.k.length)
          if ("number" == typeof s.k[0]) h = new i(t, s, o);
          else switch (a) {
            case 0:
              h = new n(t, s, o);
              break;
            case 1:
              h = new r(t, s, o)
          } else h = new e(t, s, o);
        return h.k && l.push(h), h
      }

      function a(t, e, i, n) {
        return new h(t, e, i, n)
      }

      function o(t, e, i) {
        return new c(t, e, i)
      }
      var l = -999999,
        p = function () {
          function t() {
            return this.p.k && this.p.getValue(), this.p.v
          }

          function e() {
            return this.px.k && this.px.getValue(), this.px.v
          }

          function i() {
            return this.py.k && this.py.getValue(), this.py.v
          }

          function n() {
            return this.a.k && this.a.getValue(), this.a.v
          }

          function r() {
            return this.or.k && this.or.getValue(), this.or.v
          }

          function s() {
            return this.r.k && this.r.getValue(), this.r.v / degToRads
          }

          function a() {
            return this.s.k && this.s.getValue(), this.s.v
          }

          function o() {
            return this.o.k && this.o.getValue(), this.o.v
          }

          function l() {
            return this.sk.k && this.sk.getValue(), this.sk.v
          }

          function p() {
            return this.sa.k && this.sa.getValue(), this.sa.v
          }

          function h(t) {
            var e, i = this.dynamicProperties.length;
            for (e = 0; i > e; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.mdf = !0);
            this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
          }

          function c() {
            if (this.elem.globalData.frameId !== this.frameId) {
              this.mdf = !1;
              var t, e = this.dynamicProperties.length;
              for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t].mdf && (this.mdf = !0);
              this.mdf && (this.v.reset(), this.a && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r ? this.v.rotate(-this.r.v) : this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])), this.frameId = this.elem.globalData.frameId
            }
          }

          function u() {
            this.inverted = !0, this.iv = new Matrix, this.k || (this.data.p.s ? this.iv.translate(this.px.v, this.py.v, -this.pz.v) : this.iv.translate(this.p.v[0], this.p.v[1], -this.p.v[2]), this.r ? this.iv.rotate(-this.r.v) : this.iv.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.s && this.iv.scale(this.s.v[0], this.s.v[1], 1), this.a && this.iv.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]))
          }
          return function (d, m, f) {
            this.elem = d, this.frameId = -1, this.dynamicProperties = [], this.mdf = !1, this.data = m, this.getValue = c, this.applyToMatrix = h, this.setInverted = u, this.v = new Matrix, m.p.s ? (this.px = PropertyFactory.getProp(d, m.p.x, 0, 0, this.dynamicProperties), this.py = PropertyFactory.getProp(d, m.p.y, 0, 0, this.dynamicProperties), m.p.z && (this.pz = PropertyFactory.getProp(d, m.p.z, 0, 0, this.dynamicProperties))) : this.p = PropertyFactory.getProp(d, m.p, 1, 0, this.dynamicProperties), m.r ? this.r = PropertyFactory.getProp(d, m.r, 0, degToRads, this.dynamicProperties) : m.rx && (this.rx = PropertyFactory.getProp(d, m.rx, 0, degToRads, this.dynamicProperties), this.ry = PropertyFactory.getProp(d, m.ry, 0, degToRads, this.dynamicProperties), this.rz = PropertyFactory.getProp(d, m.rz, 0, degToRads, this.dynamicProperties), this.or = PropertyFactory.getProp(d, m.or, 0, degToRads, this.dynamicProperties)), m.sk && (this.sk = PropertyFactory.getProp(d, m.sk, 0, degToRads, this.dynamicProperties), this.sa = PropertyFactory.getProp(d, m.sa, 0, degToRads, this.dynamicProperties)), m.a && (this.a = PropertyFactory.getProp(d, m.a, 1, 0, this.dynamicProperties)), m.s && (this.s = PropertyFactory.getProp(d, m.s, 1, .01, this.dynamicProperties)), this.o = m.o ? PropertyFactory.getProp(d, m.o, 0, .01, f) : {
              mdf: !1,
              v: 1
            }, this.dynamicProperties.length ? f.push(this) : (this.a && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r ? this.v.rotate(-this.r.v) : this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? m.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])), Object.defineProperty(this, "position", {
              get: t
            }), Object.defineProperty(this, "xPosition", {
              get: e
            }), Object.defineProperty(this, "yPosition", {
              get: i
            }), Object.defineProperty(this, "orientation", {
              get: r
            }), Object.defineProperty(this, "anchorPoint", {
              get: n
            }), Object.defineProperty(this, "rotation", {
              get: s
            }), Object.defineProperty(this, "scale", {
              get: a
            }), Object.defineProperty(this, "opacity", {
              get: o
            }), Object.defineProperty(this, "skew", {
              get: l
            }), Object.defineProperty(this, "skewAxis", {
              get: p
            })
          }
        }(),
        h = function () {
          function t(t) {
            var e = 0,
              i = this.dataProps.length;
            if (this.elem.globalData.frameId !== this.frameId || t) {
              for (this.mdf = !1, this.frameId = this.elem.globalData.frameId; i > e;) {
                if (this.dataProps[e].p.mdf) {
                  this.mdf = !0;
                  break
                }
                e += 1
              }
              if (this.mdf || t)
                for ("svg" === this.renderer && (this.dasharray = ""), e = 0; i > e; e += 1) "o" != this.dataProps[e].n ? "svg" === this.renderer ? this.dasharray += " " + this.dataProps[e].p.v : this.dasharray[e] = this.dataProps[e].p.v : this.dashoffset = this.dataProps[e].p.v
            }
          }
          return function (e, i, n, r) {
            this.elem = e, this.frameId = -1, this.dataProps = new Array(i.length), this.renderer = n, this.mdf = !1, this.k = !1, this.dasharray = "svg" === this.renderer ? "" : new Array(i.length - 1), this.dashoffset = 0;
            var s, a, o = i.length;
            for (s = 0; o > s; s += 1) a = PropertyFactory.getProp(e, i[s].v, 0, 0, r), this.k = a.k ? !0 : this.k, this.dataProps[s] = {
              n: i[s].n,
              p: a
            };
            this.getValue = t, this.k ? r.push(this) : this.getValue(!0)
          }
        }(),
        c = function () {
          function t() {
            if (this.dynamicProperties.length) {
              var t, e = this.dynamicProperties.length;
              for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue()
            }
            var i = this.data.totalChars,
              n = 2 === this.data.r ? 1 : 100 / i,
              r = this.o.v / n,
              s = this.s.v / n + r,
              a = this.e.v / n + r;
            if (s > a) {
              var o = s;
              s = a, a = o
            }
            this.finalS = s, this.finalE = a
          }

          function e(t) {
            var e = BezierFactory.getBezierEasing(this.ne.v / 100, 0, 1 - this.xe.v / 100, 1).get,
              s = 0,
              a = this.finalS,
              o = this.finalE,
              l = this.data.sh;
            if (2 == l) s = o === a ? t >= o ? 1 : 0 : i(0, n(.5 / (o - a) + (t - a) / (o - a), 1)), s = e(s);
            else if (3 == l) s = o === a ? t >= o ? 0 : 1 : 1 - i(0, n(.5 / (o - a) + (t - a) / (o - a), 1)), s = e(s);
            else if (4 == l) o === a ? s = t >= o ? 0 : 1 : (s = i(0, n(.5 / (o - a) + (t - a) / (o - a), 1)), .5 > s ? s *= 2 : s = 1 - s);
            else if (5 == l)
              if (o === a) s = t >= o ? 0 : 1;
              else {
                var p = o - a;
                s = -4 / (p * p) * t * t + 4 / p * t
              }
            else 6 == l ? s = o === a ? t >= o ? 0 : 1 : (1 + (Math.cos(Math.PI + 2 * Math.PI * (t - a) / (o - a)) + 0)) / 2 : t >= r(a) && (s = 0 > t - a ? 1 - (a - t) : i(0, n(o - t, 1)));
            return s * this.a.v
          }
          var i = Math.max,
            n = Math.min,
            r = Math.floor;
          return function (i, n, r) {
            this.mdf = !1, this.k = !1, this.data = n, this.dynamicProperties = [], this.getValue = t, this.getMult = e, this.comp = i.comp, this.finalS = 0, this.finalE = 0, this.s = PropertyFactory.getProp(i, n.s || {
              k: 0
            }, 0, 0, this.dynamicProperties), this.e = "e" in n ? PropertyFactory.getProp(i, n.e, 0, 0, this.dynamicProperties) : {
              v: 2 === n.r ? n.totalChars : 100
            }, this.o = PropertyFactory.getProp(i, n.o || {
              k: 0
            }, 0, 0, this.dynamicProperties), this.xe = PropertyFactory.getProp(i, n.xe || {
              k: 0
            }, 0, 0, this.dynamicProperties), this.ne = PropertyFactory.getProp(i, n.ne || {
              k: 0
            }, 0, 0, this.dynamicProperties), this.a = PropertyFactory.getProp(i, n.a, 0, .01, this.dynamicProperties), this.dynamicProperties.length ? r.push(this) : this.getValue()
          }
        }(),
        u = {};
      return u.getProp = s, u.getDashProp = a, u.getTextSelectorProp = o, u
    }(),
    ShapePropertyFactory = function () {
      function t() {
        this.mdf = !1;
        var t = this.comp.renderedFrame - this.offsetTime;
        if (this.lastFrame !== a && (this.lastFrame < this.keyframes[0].t - this.offsetTime && t < this.keyframes[0].t - this.offsetTime || this.lastFrame > this.keyframes[this.keyframes.length - 1].t - this.offsetTime && t > this.keyframes[this.keyframes.length - 1].t - this.offsetTime));
        else {
          var e, i, n;
          if (t < this.keyframes[0].t - this.offsetTime) e = this.keyframes[0].s[0], n = !0;
          else if (t > this.keyframes[this.keyframes.length - 1].t - this.offsetTime) e = 1 === this.keyframes[this.keyframes.length - 2].h ? this.keyframes[this.keyframes.length - 2].s[0] : this.keyframes[this.keyframes.length - 2].e[0], n = !0;
          else {
            for (var r, s, o, l, p, h, c = 0, u = this.keyframes.length - 1, d = 1, m = !0; m && (r = this.keyframes[c], s = this.keyframes[c + 1], !(s.t - this.offsetTime > t && 1 == d));) u - 1 > c && 1 == d || c > 0 && -1 == d ? c += d : m = !1;
            var f;
            if (1 !== r.h) {
              var y;
              r.__fnct ? y = r.__fnct : (y = BezierFactory.getBezierEasing(r.o.x, r.o.y, r.i.x, r.i.y).get, r.__fnct = y), f = t >= s.t - this.offsetTime ? 1 : t < r.t - this.offsetTime ? 0 : y((t - (r.t - this.offsetTime)) / (s.t - this.offsetTime - (r.t - this.offsetTime))), i = r.e[0]
            }
            e = r.s[0], n = 1 === r.h
          }
          l = this.v.i.length, h = e.i[0].length;
          var g, v = !1;
          for (o = 0; l > o; o += 1)
            for (p = 0; h > p; p += 1) n ? (g = e.i[o][p], this.v.i[o][p] !== g && (this.v.i[o][p] = g, this.pv.i[o][p] = g, v = !0), g = e.o[o][p], this.v.o[o][p] !== g && (this.v.o[o][p] = g, this.pv.o[o][p] = g, v = !0), g = e.v[o][p], this.v.v[o][p] !== g && (this.v.v[o][p] = g, this.pv.v[o][p] = g, v = !0)) : (g = e.i[o][p] + (i.i[o][p] - e.i[o][p]) * f, this.v.i[o][p] !== g && (this.v.i[o][p] = g, this.pv.i[o][p] = g, v = !0), g = e.o[o][p] + (i.o[o][p] - e.o[o][p]) * f, this.v.o[o][p] !== g && (this.v.o[o][p] = g, this.pv.o[o][p] = g, v = !0), g = e.v[o][p] + (i.v[o][p] - e.v[o][p]) * f, this.v.v[o][p] !== g && (this.v.v[o][p] = g, this.pv.v[o][p] = g, v = !0));
          this.mdf = v, this.paths.length = 0, this.paths[0] = this.v
        }
        this.lastFrame = t
      }

      function e() {
        return this.v
      }

      function i() {
        this.paths.length ? (this.paths.length = 1, this.paths[0] = this.v) : this.paths = [this.v]
      }

      function n(t, n, r) {
        this.comp = t.comp, this.k = !1, this.mdf = !1, this.closed = 3 === r ? n.cl : n.closed, this.numNodes = 3 === r ? n.pt.k.v.length : n.ks.k.v.length, this.v = 3 === r ? n.pt.k : n.ks.k, this.getValue = e, this.pv = this.v, this.v.c = this.closed, this.paths = [this.v], this.reset = i
      }

      function r(e, n, r) {
        this.comp = e.comp, this.offsetTime = e.data.st, this.getValue = t, this.keyframes = 3 === r ? n.pt.k : n.ks.k, this.k = !0, this.closed = 3 === r ? n.cl : n.closed;
        var s, o = this.keyframes[0].s[0].i.length,
          l = this.keyframes[0].s[0].i[0].length;
        for (this.numNodes = o, this.v = {
            i: Array.apply(null, {
              length: o
            }),
            o: Array.apply(null, {
              length: o
            }),
            v: Array.apply(null, {
              length: o
            }),
            c: this.closed
          }, this.pv = {
            i: Array.apply(null, {
              length: o
            }),
            o: Array.apply(null, {
              length: o
            }),
            v: Array.apply(null, {
              length: o
            })
          }, s = 0; o > s; s += 1) this.v.i[s] = Array.apply(null, {
          length: l
        }), this.v.o[s] = Array.apply(null, {
          length: l
        }), this.v.v[s] = Array.apply(null, {
          length: l
        }), this.pv.i[s] = Array.apply(null, {
          length: l
        }), this.pv.o[s] = Array.apply(null, {
          length: l
        }), this.pv.v[s] = Array.apply(null, {
          length: l
        });
        this.paths = [], this.lastFrame = a, this.reset = i
      }

      function s(t, e, i, s) {
        var a;
        if (3 === i || 4 === i) {
          var h = 3 === i ? e.pt.k : e.ks.k;
          a = h.length ? new r(t, e, i) : new n(t, e, i)
        } else 5 === i ? a = new p(t, e) : 6 === i ? a = new o(t, e) : 7 === i && (a = new l(t, e));
        return a.k && s.push(a), a
      }
      var a = -999999,
        o = function () {
          function t() {
            var t = this.p.v[0],
              e = this.p.v[1],
              i = this.s.v[0] / 2,
              r = this.s.v[1] / 2;
            2 !== this.d && 3 !== this.d ? (this.v.v[0] = [t, e - r], this.v.i[0] = [t - i * n, e - r], this.v.o[0] = [t + i * n, e - r], this.v.v[1] = [t + i, e], this.v.i[1] = [t + i, e - r * n], this.v.o[1] = [t + i, e + r * n], this.v.v[2] = [t, e + r], this.v.i[2] = [t + i * n, e + r], this.v.o[2] = [t - i * n, e + r], this.v.v[3] = [t - i, e], this.v.i[3] = [t - i, e + r * n], this.v.o[3] = [t - i, e - r * n]) : (this.v.v[0] = [t, e - r], this.v.o[0] = [t - i * n, e - r], this.v.i[0] = [t + i * n, e - r], this.v.v[1] = [t - i, e], this.v.o[1] = [t - i, e + r * n], this.v.i[1] = [t - i, e - r * n], this.v.v[2] = [t, e + r], this.v.o[2] = [t + i * n, e + r], this.v.i[2] = [t - i * n, e + r], this.v.v[3] = [t + i, e], this.v.o[3] = [t + i, e - r * n], this.v.i[3] = [t + i, e + r * n]), this.paths.length = 0, this.paths[0] = this.v
          }

          function e(t) {
            var e, i = this.dynamicProperties.length;
            if (this.elem.globalData.frameId !== this.frameId) {
              for (this.mdf = !1, this.frameId = this.elem.globalData.frameId, e = 0; i > e; e += 1) this.dynamicProperties[e].getValue(t), this.dynamicProperties[e].mdf && (this.mdf = !0);
              this.mdf && (this.convertEllToPath(), this.paths.length = 0, this.paths[0] = this.v)
            }
          }
          var n = roundCorner;
          return function (n, r) {
            this.v = {
              v: Array.apply(null, {
                length: 4
              }),
              i: Array.apply(null, {
                length: 4
              }),
              o: Array.apply(null, {
                length: 4
              }),
              c: !0
            }, this.numNodes = 4, this.d = r.d, this.dynamicProperties = [], this.paths = [], r.closed = !0, this.closed = !0, this.elem = n, this.comp = n.comp, this.frameId = -1, this.mdf = !1, this.getValue = e, this.convertEllToPath = t, this.reset = i, this.p = PropertyFactory.getProp(n, r.p, 1, 0, this.dynamicProperties), this.s = PropertyFactory.getProp(n, r.s, 1, 0, this.dynamicProperties), this.dynamicProperties.length ? this.k = !0 : this.convertEllToPath()
          }
        }(),
        l = function () {
          function t() {
            var t = Math.floor(this.pt.v),
              e = 2 * Math.PI / t;
            this.v.v.length = t, this.v.i.length = t, this.v.o.length = t;
            var i, n = this.or.v,
              r = this.os.v,
              s = 2 * Math.PI * n / (4 * t),
              a = -Math.PI / 2,
              o = 3 === this.data.d ? -1 : 1;
            for (a += this.r.v, i = 0; t > i; i += 1) {
              var l = n * Math.cos(a),
                p = n * Math.sin(a),
                h = 0 === l && 0 === p ? 0 : p / Math.sqrt(l * l + p * p),
                c = 0 === l && 0 === p ? 0 : -l / Math.sqrt(l * l + p * p);
              l += +this.p.v[0], p += +this.p.v[1], this.v.v[i] = [l, p], this.v.i[i] = [l + h * s * r * o, p + c * s * r * o], this.v.o[i] = [l - h * s * r * o, p - c * s * r * o], a += e * o
            }
            this.numNodes = t, this.paths.length = 0, this.paths[0] = this.v
          }

          function e() {
            var t = 2 * Math.floor(this.pt.v),
              e = 2 * Math.PI / t;
            this.v.v.length = t, this.v.i.length = t, this.v.o.length = t;
            var i, n, r, s, a = !0,
              o = this.or.v,
              l = this.ir.v,
              p = this.os.v,
              h = this.is.v,
              c = 2 * Math.PI * o / (2 * t),
              u = 2 * Math.PI * l / (2 * t),
              d = -Math.PI / 2;
            d += this.r.v;
            var m = 3 === this.data.d ? -1 : 1;
            for (i = 0; t > i; i += 1) {
              n = a ? o : l, r = a ? p : h, s = a ? c : u;
              var f = n * Math.cos(d),
                y = n * Math.sin(d),
                g = 0 === f && 0 === y ? 0 : y / Math.sqrt(f * f + y * y),
                v = 0 === f && 0 === y ? 0 : -f / Math.sqrt(f * f + y * y);
              f += +this.p.v[0], y += +this.p.v[1], this.v.v[i] = [f, y], this.v.i[i] = [f + g * s * r * m, y + v * s * r * m], this.v.o[i] = [f - g * s * r * m, y - v * s * r * m], a = !a, d += e * m
            }
            this.numNodes = t, this.paths.length = 0, this.paths[0] = this.v
          }

          function n() {
            if (this.elem.globalData.frameId !== this.frameId) {
              this.mdf = !1, this.frameId = this.elem.globalData.frameId;
              var t, e = this.dynamicProperties.length;
              for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t].mdf && (this.mdf = !0);
              this.mdf && this.convertToPath()
            }
          }
          return function (r, s) {
            this.v = {
              v: [],
              i: [],
              o: [],
              c: !0
            }, this.elem = r, this.comp = r.comp, this.data = s, this.frameId = -1, this.d = s.d, this.dynamicProperties = [], this.mdf = !1, s.closed = !0, this.closed = !0, this.getValue = n, this.reset = i, 1 === s.sy ? (this.ir = PropertyFactory.getProp(r, s.ir, 0, 0, this.dynamicProperties), this.is = PropertyFactory.getProp(r, s.is, 0, .01, this.dynamicProperties), this.convertToPath = e) : this.convertToPath = t, this.pt = PropertyFactory.getProp(r, s.pt, 0, 0, this.dynamicProperties), this.p = PropertyFactory.getProp(r, s.p, 1, 0, this.dynamicProperties), this.r = PropertyFactory.getProp(r, s.r, 0, degToRads, this.dynamicProperties), this.or = PropertyFactory.getProp(r, s.or, 0, 0, this.dynamicProperties), this.os = PropertyFactory.getProp(r, s.os, 0, .01, this.dynamicProperties), this.paths = [], this.dynamicProperties.length ? this.k = !0 : this.convertToPath()
          }
        }(),
        p = function () {
          function t(t) {
            if (this.elem.globalData.frameId !== this.frameId) {
              this.mdf = !1, this.frameId = this.elem.globalData.frameId;
              var e, i = this.dynamicProperties.length;
              for (e = 0; i > e; e += 1) this.dynamicProperties[e].getValue(t), this.dynamicProperties[e].mdf && (this.mdf = !0);
              this.mdf && this.convertRectToPath()
            }
          }

          function e() {
            var t = this.p.v[0],
              e = this.p.v[1],
              i = this.s.v[0] / 2,
              n = this.s.v[1] / 2,
              r = bm_min(i, n, this.r.v),
              s = r * (1 - roundCorner);
            2 === this.d || 1 === this.d ? (this.v.v[0] = [t + i, e - n + r], this.v.o[0] = this.v.v[0], this.v.i[0] = [t + i, e - n + s], this.v.v[1] = [t + i, e + n - r], this.v.o[1] = [t + i, e + n - s], this.v.i[1] = this.v.v[1], this.v.v[2] = [t + i - r, e + n], this.v.o[2] = this.v.v[2], this.v.i[2] = [t + i - s, e + n], this.v.v[3] = [t - i + r, e + n], this.v.o[3] = [t - i + s, e + n], this.v.i[3] = this.v.v[3], this.v.v[4] = [t - i, e + n - r], this.v.o[4] = this.v.v[4], this.v.i[4] = [t - i, e + n - s], this.v.v[5] = [t - i, e - n + r], this.v.o[5] = [t - i, e - n + s], this.v.i[5] = this.v.v[5], this.v.v[6] = [t - i + r, e - n], this.v.o[6] = this.v.v[6], this.v.i[6] = [t - i + s, e - n], this.v.v[7] = [t + i - r, e - n], this.v.o[7] = [t + i - s, e - n], this.v.i[7] = this.v.v[7]) : (this.v.v[0] = [t + i, e - n + r], this.v.o[0] = [t + i, e - n + s], this.v.i[0] = this.v.v[0], this.v.v[1] = [t + i - r, e - n], this.v.o[1] = this.v.v[1], this.v.i[1] = [t + i - s, e - n], this.v.v[2] = [t - i + r, e - n], this.v.o[2] = [t - i + s, e - n], this.v.i[2] = this.v.v[2], this.v.v[3] = [t - i, e - n + r], this.v.o[3] = this.v.v[3], this.v.i[3] = [t - i, e - n + s], this.v.v[4] = [t - i, e + n - r], this.v.o[4] = [t - i, e + n - s], this.v.i[4] = this.v.v[4], this.v.v[5] = [t - i + r, e + n], this.v.o[5] = this.v.v[5], this.v.i[5] = [t - i + s, e + n], this.v.v[6] = [t + i - r, e + n], this.v.o[6] = [t + i - s, e + n], this.v.i[6] = this.v.v[6], this.v.v[7] = [t + i, e + n - r], this.v.o[7] = this.v.v[7], this.v.i[7] = [t + i, e + n - s]), this.paths.length = 0, this.paths[0] = this.v
          }
          return function (n, r) {
            this.v = {
              v: Array.apply(null, {
                length: 8
              }),
              i: Array.apply(null, {
                length: 8
              }),
              o: Array.apply(null, {
                length: 8
              }),
              c: !0
            }, this.paths = [], this.numNodes = 8, this.elem = n, this.comp = n.comp, this.frameId = -1, this.d = r.d, this.dynamicProperties = [], this.mdf = !1, r.closed = !0, this.closed = !0, this.getValue = t, this.convertRectToPath = e, this.reset = i, this.p = PropertyFactory.getProp(n, r.p, 1, 0, this.dynamicProperties), this.s = PropertyFactory.getProp(n, r.s, 1, 0, this.dynamicProperties), this.r = PropertyFactory.getProp(n, r.r, 0, 0, this.dynamicProperties), this.dynamicProperties.length ? this.k = !0 : this.convertRectToPath()
          }
        }(),
        h = {};
      return h.getShapeProp = s, h
    }(),
    ShapeModifiers = function () {
      function t(t, e) {
        n[t] || (n[t] = e)
      }

      function e(t, e, i, r) {
        return new n[t](e, i, r)
      }
      var i = {},
        n = {};
      return i.registerModifier = t, i.getModifier = e, i
    }();
  ShapeModifier.prototype.initModifierProperties = function () {}, ShapeModifier.prototype.addShape = function (t) {
    this.closed || this.shapes.push({
      shape: t,
      last: []
    })
  }, ShapeModifier.prototype.init = function (t, e, i) {
    this.elem = t, this.frameId = -1, this.shapes = [], this.dynamicProperties = [], this.mdf = !1, this.closed = !1, this.k = !1, this.isTrimming = !1, this.comp = t.comp, this.initModifierProperties(t, e), this.dynamicProperties.length ? (this.k = !0, i.push(this)) : this.getValue(!0)
  }, extendPrototype(ShapeModifier, TrimModifier), TrimModifier.prototype.processKeys = function (t) {
    if (this.elem.globalData.frameId !== this.frameId || t) {
      this.mdf = t ? !0 : !1, this.frameId = this.elem.globalData.frameId;
      var e, i = this.dynamicProperties.length;
      for (e = 0; i > e; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.mdf = !0);
      if (this.mdf || t) {
        var n = this.o.v % 360 / 360;
        0 > n && (n += 1);
        var r = this.s.v + n,
          s = this.e.v + n;
        if (r > s) {
          var a = r;
          r = s, s = a
        }
        this.sValue = r, this.eValue = s, this.oValue = n
      }
    }
  }, TrimModifier.prototype.initModifierProperties = function (t, e) {
    this.sValue = 0, this.eValue = 0, this.oValue = 0, this.getValue = this.processKeys, this.s = PropertyFactory.getProp(t, e.s, 0, .01, this.dynamicProperties), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this.dynamicProperties), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this.dynamicProperties), this.dynamicProperties.length || this.getValue(!0)
  }, TrimModifier.prototype.getSegmentsLength = function (t) {
    var e, i = t.c,
      n = t.v,
      r = t.o,
      s = t.i,
      a = n.length,
      o = [],
      l = 0;
    for (e = 0; a - 1 > e; e += 1) o[e] = bez.getBezierLength(n[e], n[e + 1], r[e], s[e + 1]), l += o[e].addedLength;
    return i && (o[e] = bez.getBezierLength(n[e], n[0], r[e], s[0]), l += o[e].addedLength), {
      lengths: o,
      totalLength: l
    }
  }, TrimModifier.prototype.processShapes = function () {
    var t, e, i, n, r, s, a, o = this.shapes.length,
      l = this.sValue,
      p = this.eValue,
      h = 0;
    if (p === l)
      for (e = 0; o > e; e += 1) this.shapes[e].shape.paths = [], this.shapes[e].shape.mdf = !0;
    else {
      var c, u = [],
        d = [];
      for (e = 0; o > e; e += 1)
        if (c = this.shapes[e], c.shape.mdf || this.mdf) {
          for (t = c.shape.paths, c.shape.mdf = !0, n = t.length, r = [], a = 0, i = 0; n > i; i += 1) s = this.getSegmentsLength(t[i]), r.push(s), a += s.totalLength;
          c.totalShapeLength = a, c.pathsData = r, h += a
        } else c.shape.paths = c.last;
      for (e = 0; o > e; e += 1)
        if (c = this.shapes[e], c.shape.mdf) {
          u.length = 0, 1 >= p ? u.push({
            s: c.totalShapeLength * l,
            e: c.totalShapeLength * p
          }) : l >= 1 ? u.push({
            s: c.totalShapeLength * (l - 1),
            e: c.totalShapeLength * (p - 1)
          }) : (u.push({
            s: c.totalShapeLength * l,
            e: c.totalShapeLength
          }), u.push({
            s: 0,
            e: c.totalShapeLength * (p - 1)
          }));
          var m, f = this.addShapes(c, u[0]);
          d.push(f), u.length > 1 && (c.shape.closed ? this.addShapes(c, u[1], f) : (f.i[0] = [f.v[0][0], f.v[0][1]], m = f.v.length - 1, f.o[m] = [f.v[m][0], f.v[m][1]], f = this.addShapes(c, u[1]), d.push(f))), f.i[0] = [f.v[0][0], f.v[0][1]], m = f.v.length - 1, f.o[m] = [f.v[m][0], f.v[m][1]], c.last = d, c.shape.paths = d
        }
    }
    this.dynamicProperties.length || (this.mdf = !1)
  }, TrimModifier.prototype.addSegment = function (t, e, i, n, r, s) {
    r.o[s] = e, r.i[s + 1] = i, r.v[s + 1] = n, r.v[s] = t
  }, TrimModifier.prototype.addShapes = function (t, e, i) {
    var n, r, s, a, o, l, p, h = t.pathsData,
      c = t.shape.paths,
      u = c.length,
      d = 0;
    for (i ? o = i.v.length - 1 : (i = {
        c: !1,
        v: [],
        i: [],
        o: []
      }, o = 0), n = 0; u > n; n += 1) {
      for (l = h[n].lengths, s = c[n].c ? l.length : l.length + 1, r = 1; s > r; r += 1)
        if (a = l[r - 1], d + a.addedLength < e.s) d += a.addedLength;
        else {
          if (d > e.e) break;
          e.s <= d && e.e >= d + a.addedLength ? this.addSegment(c[n].v[r - 1], c[n].o[r - 1], c[n].i[r], c[n].v[r], i, o) : (p = bez.getNewSegment(c[n].v[r - 1], c[n].v[r], c[n].o[r - 1], c[n].i[r], (e.s - d) / a.addedLength, (e.e - d) / a.addedLength, l[r - 1]), this.addSegment(p.pt1, p.pt3, p.pt4, p.pt2, i, o)), d += a.addedLength, o += 1
        } if (c[n].c && d <= e.e) {
        var m = l[r - 1].addedLength;
        e.s <= d && e.e >= d + m ? this.addSegment(c[n].v[r - 1], c[n].o[r - 1], c[n].i[0], c[n].v[0], i, o) : (p = bez.getNewSegment(c[n].v[r - 1], c[n].v[0], c[n].o[r - 1], c[n].i[0], (e.s - d) / m, (e.e - d) / m, l[r - 1]), this.addSegment(p.pt1, p.pt3, p.pt4, p.pt2, i, o))
      }
    }
    return i
  }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype(ShapeModifier, RoundCornersModifier), RoundCornersModifier.prototype.processKeys = function (t) {
    if (this.elem.globalData.frameId !== this.frameId || t) {
      this.mdf = t ? !0 : !1, this.frameId = this.elem.globalData.frameId;
      var e, i = this.dynamicProperties.length;
      for (e = 0; i > e; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.mdf = !0)
    }
  }, RoundCornersModifier.prototype.initModifierProperties = function (t, e) {
    this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this.dynamicProperties), this.dynamicProperties.length || this.getValue(!0)
  }, RoundCornersModifier.prototype.processPath = function (t, e) {
    var i, n, r, s, a, o, l, p, h, c, u = t.v.length,
      d = [],
      m = [],
      f = [];
    for (i = 0; u > i; i += 1) n = t.v[i], s = t.o[i], r = t.i[i], n[0] === s[0] && n[1] === s[1] && n[0] === r[0] && n[1] === r[1] ? 0 !== i && i !== u - 1 || t.c ? (a = 0 === i ? t.v[u - 1] : t.v[i - 1], h = Math.sqrt(Math.pow(n[0] - a[0], 2) + Math.pow(n[1] - a[1], 2)), c = Math.min(h / 2, e) / h, o = [n[0] + (a[0] - n[0]) * c, n[1] - (n[1] - a[1]) * c], p = o, l = [o[0] - (o[0] - n[0]) * roundCorner, o[1] - (o[1] - n[1]) * roundCorner], d.push(o), m.push(l), f.push(p), a = i === u - 1 ? t.v[0] : t.v[i + 1], h = Math.sqrt(Math.pow(n[0] - a[0], 2) + Math.pow(n[1] - a[1], 2)), c = Math.min(h / 2, e) / h, o = [n[0] + (a[0] - n[0]) * c, n[1] + (a[1] - n[1]) * c], p = [o[0] - (o[0] - n[0]) * roundCorner, o[1] - (o[1] - n[1]) * roundCorner], l = o, d.push(o), m.push(l), f.push(p)) : (d.push(n), m.push(s), f.push(r)) : (d.push(t.v[i]), m.push(t.o[i]), f.push(t.i[i]));
    return {
      v: d,
      o: m,
      i: f,
      c: t.c
    }
  }, RoundCornersModifier.prototype.processShapes = function () {
    var t, e, i, n, r = this.shapes.length,
      s = this.rd.v;
    if (0 !== s) {
      var a, o = [];
      for (e = 0; r > e; e += 1)
        if (a = this.shapes[e], a.shape.mdf || this.mdf) {
          for (a.shape.mdf = !0, t = a.shape.paths, n = t.length, i = 0; n > i; i += 1) o.push(this.processPath(t[i], s));
          a.shape.paths = o, a.last = o
        } else a.shape.paths = a.last
    }
    this.dynamicProperties.length || (this.mdf = !1)
  }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), SVGRenderer.prototype.createItem = function (t, e, i, n) {
    switch (t.ty) {
      case 2:
        return this.createImage(t, e, i, n);
      case 0:
        return this.createComp(t, e, i, n);
      case 1:
        return this.createSolid(t, e, i, n);
      case 4:
        return this.createShape(t, e, i, n);
      case 5:
        return this.createText(t, e, i, n);
      case 99:
        return this.createPlaceHolder(t, e)
    }
    return this.createBase(t, e, i)
  }, SVGRenderer.prototype.buildItems = function (t, e, i, n, r) {
    var s, a = t.length;
    i || (i = this.elements), e || (e = this.animationItem.container), n || (n = this);
    var o;
    for (s = a - 1; s >= 0; s--) i[s] = this.createItem(t[s], e, n, r), 0 === t[s].ty && (o = [], this.buildItems(t[s].layers, i[s].getDomElement(), o, i[s], i[s].placeholder), i[s].setElements(o)), t[s].td && i[s + 1].setMatte(i[s].layerId)
  }, SVGRenderer.prototype.includeLayers = function (t, e, i) {
    var n, r = t.length;
    i || (i = this.elements), e || (e = this.animationItem.container);
    var s, a, o, l = i.length;
    for (n = 0; r > n; n += 1)
      for (s = 0; l > s;) {
        if (i[s].data.id == t[n].id) {
          o = i[s], i[s] = this.createItem(t[n], e, this, o), 0 === t[n].ty && (a = [], this.buildItems(t[n].layers, i[s].getDomElement(), a, i[s], i[n].placeholder), i[s].setElements(a));
          break
        }
        s += 1
      }
    for (n = 0; r > n; n += 1) t[n].td && i[n + 1].setMatte(i[n].layerId)
  }, SVGRenderer.prototype.createBase = function (t, e, i, n) {
    return new SVGBaseElement(t, e, this.globalData, i, n)
  }, SVGRenderer.prototype.createPlaceHolder = function (t, e) {
    return new PlaceHolderElement(t, e, this.globalData)
  }, SVGRenderer.prototype.createShape = function (t, e, i, n) {
    return new IShapeElement(t, e, this.globalData, i, n)
  }, SVGRenderer.prototype.createText = function (t, e, i, n) {
    return new SVGTextElement(t, e, this.globalData, i, n)
  }, SVGRenderer.prototype.createImage = function (t, e, i, n) {
    return new IImageElement(t, e, this.globalData, i, n)
  }, SVGRenderer.prototype.createComp = function (t, e, i, n) {
    return new ICompElement(t, e, this.globalData, i, n)
  }, SVGRenderer.prototype.createSolid = function (t, e, i, n) {
    return new ISolidElement(t, e, this.globalData, i, n)
  }, SVGRenderer.prototype.configAnimation = function (t) {
    this.animationItem.container = document.createElementNS(svgNS, "svg"), this.animationItem.container.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.animationItem.container.setAttribute("width", t.w), this.animationItem.container.setAttribute("height", t.h), this.animationItem.container.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.animationItem.container.setAttribute("preserveAspectRatio", "xMidYMid meet"), this.animationItem.container.style.width = "100%", this.animationItem.container.style.height = "100%", this.animationItem.container.style.transform = "translate3d(0,0,0)", this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px", this.animationItem.wrapper.appendChild(this.animationItem.container);
    var e = document.createElementNS(svgNS, "defs");
    this.globalData.defs = e, this.animationItem.container.appendChild(e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getPath = this.animationItem.getPath.bind(this.animationItem), this.globalData.elementLoaded = this.animationItem.elementLoaded.bind(this.animationItem), this.globalData.frameId = 0, this.globalData.compSize = {
      w: t.w,
      h: t.h
    }, this.globalData.frameRate = t.fr;
    var i = document.createElementNS(svgNS, "clipPath"),
      n = document.createElementNS(svgNS, "rect");
    n.setAttribute("width", t.w), n.setAttribute("height", t.h), n.setAttribute("x", 0), n.setAttribute("y", 0);
    var r = "animationMask_" + randomString(10);
    i.setAttribute("id", r), i.appendChild(n);
    var s = document.createElementNS(svgNS, "g");
    s.setAttribute("clip-path", "url(#" + r + ")"), this.animationItem.container.appendChild(s), e.appendChild(i), this.animationItem.container = s, this.layers = t.layers, this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e)
  }, SVGRenderer.prototype.buildStage = function (t, e, i) {
    var n, r, s = e.length;
    for (i || (i = this.elements), n = s - 1; n >= 0; n--) r = e[n], void 0 !== r.parent && this.buildItemParenting(r, i[n], e, r.parent, i, !0), 0 === r.ty && this.buildStage(i[n].getComposingElement(), r.layers, i[n].getElements())
  }, SVGRenderer.prototype.buildItemParenting = function (t, e, i, n, r, s) {
    t.parents || (t.parents = []), s && e.resetHierarchy();
    for (var a = 0, o = i.length; o > a;) i[a].ind == n && (e.getHierarchy().push(r[a]), void 0 !== i[a].parent && this.buildItemParenting(t, e, i, i[a].parent, r, !1)), a += 1
  }, SVGRenderer.prototype.destroy = function () {
    this.animationItem.wrapper.innerHTML = "", this.animationItem.container = null, this.globalData.defs = null;
    var t, e = this.layers.length;
    for (t = 0; e > t; t++) this.elements[t].destroy();
    this.elements.length = 0, this.destroyed = !0
  }, SVGRenderer.prototype.updateContainerSize = function () {}, SVGRenderer.prototype.renderFrame = function (t) {
    if (this.renderedFrame != t && !this.destroyed) {
      null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1;
      var e, i = this.layers.length;
      for (e = i - 1; e >= 0; e--) this.elements[e].prepareFrame(t - this.layers[e].st);
      for (e = i - 1; e >= 0; e--) this.elements[e].renderFrame()
    }
  }, SVGRenderer.prototype.hide = function () {
    this.animationItem.container.style.display = "none"
  }, SVGRenderer.prototype.show = function () {
    this.animationItem.container.style.display = "block"
  }, CanvasRenderer.prototype.createItem = function (t, e, i) {
    switch (t.ty) {
      case 0:
        return this.createComp(t, e, i);
      case 1:
        return this.createSolid(t, e, i);
      case 2:
        return this.createImage(t, e, i);
      case 4:
        return this.createShape(t, e, i);
      case 5:
        return this.createText(t, e, i);
      case 99:
        return this.createPlaceHolder(t, e, i);
      default:
        return this.createBase(t, e, i)
    }
    return this.createBase(t, e, i)
  }, CanvasRenderer.prototype.buildItems = function (t, e, i) {
    e || (e = this.elements), i || (i = this);
    var n, r = t.length;
    for (n = 0; r > n; n++)
      if (e[n] = this.createItem(t[n], i, i.globalData), 0 === t[n].ty) {
        var s = [];
        this.buildItems(t[n].layers, s, e[n], i.globalData), e[e.length - 1].setElements(s)
      }
  }, CanvasRenderer.prototype.includeLayers = function (t, e, i) {
    var n, r = t.length;
    i || (i = this.elements);
    var s, a, o = i.length;
    for (n = 0; r > n; n += 1)
      for (s = 0; o > s;) {
        if (i[s].data.id == t[n].id) {
          i[s] = this.createItem(t[n], this), 0 === t[n].ty && (a = [], this.buildItems(t[n].layers, a, i[s]), i[s].setElements(a));
          break
        }
        s += 1
      }
  }, CanvasRenderer.prototype.createBase = function (t, e, i) {
    return new CVBaseElement(t, e, i)
  }, CanvasRenderer.prototype.createShape = function (t, e, i) {
    return new CVShapeElement(t, e, i)
  }, CanvasRenderer.prototype.createText = function (t, e, i) {
    return new CVTextElement(t, e, i)
  }, CanvasRenderer.prototype.createPlaceHolder = function (t, e) {
    return new PlaceHolderElement(t, null, e)
  }, CanvasRenderer.prototype.createImage = function (t, e, i) {
    return new CVImageElement(t, e, i)
  }, CanvasRenderer.prototype.createComp = function (t, e, i) {
    return new CVCompElement(t, e, i)
  }, CanvasRenderer.prototype.createSolid = function (t, e, i) {
    return new CVSolidElement(t, e, i)
  }, CanvasRenderer.prototype.ctxTransform = function (t) {
    if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13]) {
      if (!this.renderConfig.clearCanvas) return void this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
      this.transformMat.cloneFromProps(t), this.transformMat.transform(this.contextData.cTr.props[0], this.contextData.cTr.props[1], this.contextData.cTr.props[2], this.contextData.cTr.props[3], this.contextData.cTr.props[4], this.contextData.cTr.props[5], this.contextData.cTr.props[6], this.contextData.cTr.props[7], this.contextData.cTr.props[8], this.contextData.cTr.props[9], this.contextData.cTr.props[10], this.contextData.cTr.props[11], this.contextData.cTr.props[12], this.contextData.cTr.props[13], this.contextData.cTr.props[14], this.contextData.cTr.props[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
      var e = this.contextData.cTr.props;
      this.canvasContext.setTransform(e[0], e[1], e[4], e[5], e[12], e[13])
    }
  }, CanvasRenderer.prototype.ctxOpacity = function (t) {
    if (1 !== t) {
      if (!this.renderConfig.clearCanvas) return void(this.canvasContext.globalAlpha *= 0 > t ? 0 : t);
      this.contextData.cO *= 0 > t ? 0 : t, this.canvasContext.globalAlpha = this.contextData.cO
    }
  }, CanvasRenderer.prototype.reset = function () {
    return this.renderConfig.clearCanvas ? (this.contextData.cArrPos = 0, this.contextData.cTr.reset(), void(this.contextData.cO = 1)) : void this.canvasContext.restore()
  }, CanvasRenderer.prototype.save = function (t) {
    if (!this.renderConfig.clearCanvas) return void this.canvasContext.save();
    t && this.canvasContext.save();
    var e = this.contextData.cTr.props;
    (null === this.contextData.saved[this.contextData.cArrPos] || void 0 === this.contextData.saved[this.contextData.cArrPos]) && (this.contextData.saved[this.contextData.cArrPos] = new Array(16));
    var i, n = this.contextData.saved[this.contextData.cArrPos];
    for (i = 0; 16 > i; i += 1) n[i] = e[i];
    this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
  }, CanvasRenderer.prototype.restore = function (t) {
    if (!this.renderConfig.clearCanvas) return void this.canvasContext.restore();
    t && this.canvasContext.restore(), this.contextData.cArrPos -= 1;
    var e, i = this.contextData.saved[this.contextData.cArrPos],
      n = this.contextData.cTr.props;
    for (e = 0; 16 > e; e += 1) n[e] = i[e];
    this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), i = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = i, this.canvasContext.globalAlpha = i
  }, CanvasRenderer.prototype.configAnimation = function (t) {
    this.animationItem.wrapper ? (this.animationItem.container = document.createElement("canvas"), this.animationItem.container.style.width = "100%", this.animationItem.container.style.height = "100%", this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px", this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d")) : this.canvasContext = this.renderConfig.context, this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.totalFrames = Math.floor(t.tf), this.globalData.compWidth = t.w, this.globalData.compHeight = t.h, this.globalData.frameRate = t.fr, this.globalData.frameId = 0, this.globalData.compSize = {
      w: t.w,
      h: t.h
    }, this.layers = t.layers, this.transformCanvas = {}, this.transformCanvas.w = t.w, this.transformCanvas.h = t.h, this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, document)
  }, CanvasRenderer.prototype.updateContainerSize = function () {
    var t, e;
    if (this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), "fit" == this.renderConfig.scaleMode) {
      var i = t / e,
        n = this.transformCanvas.w / this.transformCanvas.h;
      n > i ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr, this.transformCanvas.ty = 0)
    } else this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0;
    this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1];
    var r, s = this.elements.length;
    for (r = 0; s > r; r += 1) 0 === this.elements[r].data.ty && this.elements[r].resize(this.transformCanvas)
  }, CanvasRenderer.prototype.buildStage = function (t, e, i) {
    i || (i = this.elements);
    var n, r, s = e.length;
    for (n = s - 1; n >= 0; n--) r = e[n], void 0 !== r.parent && this.buildItemHierarchy(r, i[n], e, r.parent, i, !0), 0 == r.ty && this.buildStage(null, r.layers, i[n].getElements());
    this.updateContainerSize()
  }, CanvasRenderer.prototype.buildItemHierarchy = function (t, e, i, n, r, s) {
    var a = 0,
      o = i.length;
    for (s && e.resetHierarchy(); o > a;) i[a].ind === n && (e.getHierarchy().push(r[a]), void 0 !== i[a].parent && this.buildItemHierarchy(t, e, i, i[a].parent, r, !1)), a += 1
  }, CanvasRenderer.prototype.destroy = function () {
    this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = "");
    var t, e = this.layers.length;
    for (t = e - 1; t >= 0; t -= 1) this.elements[t].destroy();
    this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
  }, CanvasRenderer.prototype.renderFrame = function (t) {
    if (!(this.renderedFrame == t && this.renderConfig.clearCanvas === !0 || this.destroyed || null === t)) {
      this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem.firstFrame, this.globalData.frameId += 1, this.renderConfig.clearCanvas === !0 ? (this.reset(), this.canvasContext.save(), this.canvasContext.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)) : this.save(), this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip();
      var e, i = this.layers.length;
      for (e = 0; i > e; e++) this.elements[e].prepareFrame(t - this.layers[e].st);
      for (e = i - 1; e >= 0; e -= 1) this.elements[e].renderFrame();
      this.renderConfig.clearCanvas !== !0 ? this.restore() : this.canvasContext.restore()
    }
  }, CanvasRenderer.prototype.hide = function () {
    this.animationItem.container.style.display = "none"
  }, CanvasRenderer.prototype.show = function () {
    this.animationItem.container.style.display = "block"
  }, HybridRenderer.prototype.createItem = function (t, e, i, n) {
    switch (t.ty) {
      case 2:
        return this.createImage(t, e, i, n);
      case 0:
        return this.createComp(t, e, i, n);
      case 1:
        return this.createSolid(t, e, i, n);
      case 4:
        return this.createShape(t, e, i, n);
      case 5:
        return this.createText(t, e, i, n);
      case 13:
        return this.createCamera(t, e, i, n);
      case 99:
        return this.createPlaceHolder(t, e)
    }
    return this.createBase(t, e, i)
  }, HybridRenderer.prototype.buildItems = function (t, e, i, n, r) {
    var s, a = t.length;
    i || (i = this.elements), n || (n = this);
    var o, l, p = !1;
    for (s = a - 1; s >= 0; s--) e ? i[s] = this.createItem(t[s], e, n, r) : t[s].ddd ? (p || (p = !0, o = this.getThreeDContainer()), i[s] = this.createItem(t[s], o, n, r)) : (p = !1, i[s] = this.createItem(t[s], this.animationItem.resizerElem, n, r)), 0 === t[s].ty && (l = [], this.buildItems(t[s].layers, i[s].getDomElement(), l, i[s], i[s].placeholder), i[s].setElements(l)), t[s].td && i[s + 1].setMatte(i[s].layerId);
    if (this.currentContainer = this.animationItem.resizerElem, !e && this.threeDElements.length)
      if (this.camera) this.camera.setup();
      else {
        var h = this.globalData.compSize.w,
          c = this.globalData.compSize.h;
        for (a = this.threeDElements.length, s = 0; a > s; s += 1) this.threeDElements[0][s].style.perspective = this.threeDElements[0][s].style.webkitPerspective = Math.sqrt(Math.pow(h, 2) + Math.pow(c, 2)) + "px"
      }
  }, HybridRenderer.prototype.includeLayers = function (t, e, i) {
    var n, r = t.length;
    i || (i = this.elements), e || (e = this.currentContainer);
    var s, a, o, l = i.length;
    for (n = 0; r > n; n += 1)
      if (t[n].id)
        for (s = 0; l > s;) i[s].data.id == t[n].id && (o = i[s], i[s] = this.createItem(t[n], e, this, o), 0 === t[n].ty && (a = [], this.buildItems(t[n].layers, i[s].getDomElement(), a, i[s], i[n].placeholder), i[s].setElements(a))), s += 1;
      else {
        var p = this.createItem(t[n], e, this);
        i.push(p), 0 === t[n].ty && (a = [], this.buildItems(t[n].layers, p.getDomElement(), a, p), p.setElements(a))
      } for (n = 0; r > n; n += 1) t[n].td && i[n + 1].setMatte(i[n].layerId)
  }, HybridRenderer.prototype.createBase = function (t, e, i, n) {
    return new SVGBaseElement(t, e, this.globalData, i, n)
  }, HybridRenderer.prototype.createPlaceHolder = function (t, e) {
    return new PlaceHolderElement(t, e, this.globalData)
  }, HybridRenderer.prototype.createShape = function (t, e, i, n) {
    return i.isSvg ? new IShapeElement(t, e, this.globalData, i, n) : new HShapeElement(t, e, this.globalData, i, n)
  }, HybridRenderer.prototype.createText = function (t, e, i, n) {
    return i.isSvg ? new SVGTextElement(t, e, this.globalData, i, n) : new HTextElement(t, e, this.globalData, i, n)
  }, HybridRenderer.prototype.createCamera = function (t, e, i, n) {
    return this.camera = new HCameraElement(t, e, this.globalData, i, n), this.camera
  }, HybridRenderer.prototype.createImage = function (t, e, i, n) {
    return i.isSvg ? new IImageElement(t, e, this.globalData, i, n) : new HImageElement(t, e, this.globalData, i, n)
  }, HybridRenderer.prototype.createComp = function (t, e, i, n) {
    return i.isSvg ? new ICompElement(t, e, this.globalData, i, n) : new HCompElement(t, e, this.globalData, i, n)
  }, HybridRenderer.prototype.createSolid = function (t, e, i, n) {
    return i.isSvg ? new ISolidElement(t, e, this.globalData, i, n) : new HSolidElement(t, e, this.globalData, i, n)
  }, HybridRenderer.prototype.getThreeDContainer = function () {
    var t = document.createElement("div");
    styleDiv(t), t.style.width = this.globalData.compSize.w + "px", t.style.height = this.globalData.compSize.h + "px", t.style.transformOrigin = t.style.mozTransformOrigin = t.style.webkitTransformOrigin = "50% 50%";
    var e = document.createElement("div");
    return styleDiv(e), e.style.transform = e.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)", t.appendChild(e), this.animationItem.resizerElem.appendChild(t), this.threeDElements.push([t, e]), e
  }, HybridRenderer.prototype.configAnimation = function (t) {
    var e = document.createElement("div"),
      i = this.animationItem.wrapper;
    e.style.width = t.w + "px", e.style.height = t.h + "px", this.animationItem.resizerElem = e, styleDiv(e), e.style.transformStyle = e.style.webkitTransformStyle = e.style.mozTransformStyle = "flat", i.appendChild(e), e.style.overflow = "hidden";
    var n = document.createElementNS(svgNS, "svg");
    n.setAttribute("width", "1"), n.setAttribute("height", "1"), styleDiv(n), this.animationItem.resizerElem.appendChild(n);
    var r = document.createElementNS(svgNS, "defs");
    n.appendChild(r), this.globalData.defs = r, this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getPath = this.animationItem.getPath.bind(this.animationItem), this.globalData.elementLoaded = this.animationItem.elementLoaded.bind(this.animationItem), this.globalData.frameId = 0, this.globalData.compSize = {
      w: t.w,
      h: t.h
    }, this.globalData.frameRate = t.fr, this.layers = t.layers, this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, n), this.updateContainerSize()
  }, HybridRenderer.prototype.buildStage = function (t, e, i) {
    var n, r, s = e.length;
    for (i || (i = this.elements), n = s - 1; n >= 0; n--) r = e[n], void 0 !== r.parent && this.buildItemParenting(r, i[n], e, r.parent, i, !0), 0 === r.ty && this.buildStage(i[n].getComposingElement(), r.layers, i[n].getElements())
  }, HybridRenderer.prototype.buildItemParenting = function (t, e, i, n, r, s) {
    t.parents || (t.parents = []), s && e.resetHierarchy();
    for (var a = 0, o = i.length; o > a;) i[a].ind == n && (e.getHierarchy().push(r[a]), 13 === e.data.ty && r[a].finalTransform.mProp.setInverted(), void 0 !== i[a].parent && this.buildItemParenting(t, e, i, i[a].parent, r, !1)), a += 1
  }, HybridRenderer.prototype.destroy = function () {
    this.animationItem.wrapper.innerHTML = "", this.animationItem.container = null, this.globalData.defs = null;
    var t, e = this.layers.length;
    for (t = 0; e > t; t++) this.elements[t].destroy();
    this.elements.length = 0, this.destroyed = !0
  }, HybridRenderer.prototype.updateContainerSize = function () {
    var t, e, i, n, r = this.animationItem.wrapper.offsetWidth,
      s = this.animationItem.wrapper.offsetHeight,
      a = r / s,
      o = this.globalData.compSize.w / this.globalData.compSize.h;
    o > a ? (t = r / this.globalData.compSize.w, e = r / this.globalData.compSize.w, i = 0, n = (s - this.globalData.compSize.h * (r / this.globalData.compSize.w)) / 2) : (t = s / this.globalData.compSize.h, e = s / this.globalData.compSize.h, i = (r - this.globalData.compSize.w * (s / this.globalData.compSize.h)) / 2, n = 0), this.animationItem.resizerElem.style.transform = this.animationItem.resizerElem.style.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + n + ",0,1)"
  }, HybridRenderer.prototype.renderFrame = function (t) {
    if (this.renderedFrame != t && !this.destroyed) {
      null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1;
      var e, i = this.layers.length;
      for (e = 0; i > e; e++) this.elements[e].prepareFrame(t - this.layers[e].st);
      for (e = 0; i > e; e++) this.elements[e].renderFrame()
    }
  }, HybridRenderer.prototype.hide = function () {
    this.animationItem.resizerElem.style.display = "none"
  }, HybridRenderer.prototype.show = function () {
    this.animationItem.resizerElem.style.display = "block"
  }, MaskElement.prototype.getMaskProperty = function (t) {
    return this.viewData[t].prop
  }, MaskElement.prototype.prepareFrame = function () {
    var t, e = this.dynamicProperties.length;
    for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue()
  }, MaskElement.prototype.renderFrame = function () {
    var t, e = this.masksProperties.length;
    for (t = 0; e > t; t++)
      if ("n" !== this.masksProperties[t].mode && this.masksProperties[t].cl !== !1 && ((this.viewData[t].prop.mdf || this.firstFrame) && this.drawPath(this.masksProperties[t], this.viewData[t].prop.v, this.viewData[t]), this.storedData[t].x && (this.storedData[t].x.mdf || this.firstFrame))) {
        var i = this.storedData[t].expan;
        this.storedData[t].x.v < 0 ? ("erode" !== this.storedData[t].lastOperator && (this.storedData[t].lastOperator = "erode", this.storedData[t].elem.setAttribute("filter", "url(#" + this.storedData[t].filterId + ")")), i.setAttribute("radius", -this.storedData[t].x.v)) : ("dilate" !== this.storedData[t].lastOperator && (this.storedData[t].lastOperator = "dilate", this.storedData[t].elem.setAttribute("filter", null)), this.storedData[t].elem.setAttribute("stroke-width", 2 * this.storedData[t].x.v))
      } this.firstFrame = !1
  }, MaskElement.prototype.getMaskelement = function () {
    return this.maskElement
  }, MaskElement.prototype.createLayerSolidPath = function () {
    var t = "M0,0 ";
    return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
  }, MaskElement.prototype.drawPath = function (t, e, i) {
    var n, r, s = "";
    for (r = e.v.length, n = 1; r > n; n += 1) 1 == n && (s += " M" + bm_rnd(e.v[0][0]) + "," + bm_rnd(e.v[0][1])), s += " C" + bm_rnd(e.o[n - 1][0]) + "," + bm_rnd(e.o[n - 1][1]) + " " + bm_rnd(e.i[n][0]) + "," + bm_rnd(e.i[n][1]) + " " + bm_rnd(e.v[n][0]) + "," + bm_rnd(e.v[n][1]);
    t.cl && (s += " C" + bm_rnd(e.o[n - 1][0]) + "," + bm_rnd(e.o[n - 1][1]) + " " + bm_rnd(e.i[0][0]) + "," + bm_rnd(e.i[0][1]) + " " + bm_rnd(e.v[0][0]) + "," + bm_rnd(e.v[0][1])), i.lastPath !== s && (t.inv ? i.elem.setAttribute("d", this.solidPath + s) : i.elem.setAttribute("d", s), i.lastPath = s)
  }, MaskElement.prototype.getMask = function (t) {
    for (var e = 0, i = this.masksProperties.length; i > e;) {
      if (this.masksProperties[e].nm === t) return {
        maskPath: this.viewData[e].prop.pv
      };
      e += 1
    }
  }, MaskElement.prototype.destroy = function () {
    this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.paths = null, this.masksProperties = null
  }, BaseElement.prototype.checkMasks = function () {
    if (!this.data.hasMask) return !1;
    for (var t = 0, e = this.data.masksProperties.length; e > t;) {
      if ("n" !== this.data.masksProperties[t].mode && this.data.masksProperties[t].cl !== !1) return !0;
      t += 1
    }
    return !1
  }, BaseElement.prototype.prepareFrame = function (t) {
    this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? this.isVisible !== !0 && (this.globalData.mdf = !0, this.isVisible = !0, this.firstFrame = !0, this.data.hasMask && (this.maskManager.firstFrame = !0)) : this.isVisible !== !1 && (this.globalData.mdf = !0, this.isVisible = !1);
    var e, i = this.dynamicProperties.length;
    for (e = 0; i > e; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.globalData.mdf = !0);
    return this.data.hasMask && this.maskManager.prepareFrame(t * this.data.sr), this.currentFrameNum = t * this.data.sr, this.isVisible
  }, BaseElement.prototype.setBlendMode = function () {
    var t = "";
    switch (this.data.bm) {
      case 1:
        t = "multiply";
        break;
      case 2:
        t = "screen";
        break;
      case 3:
        t = "overlay";
        break;
      case 4:
        t = "darken";
        break;
      case 5:
        t = "lighten";
        break;
      case 6:
        t = "color-dodge";
        break;
      case 7:
        t = "color-burn";
        break;
      case 8:
        t = "hard-light";
        break;
      case 9:
        t = "soft-light";
        break;
      case 10:
        t = "difference";
        break;
      case 11:
        t = "exclusion";
        break;
      case 12:
        t = "hue";
        break;
      case 13:
        t = "saturation";
        break;
      case 14:
        t = "color";
        break;
      case 15:
        t = "luminosity"
    }
    this.layerElement.style["mix-blend-mode"] = t
  }, BaseElement.prototype.init = function () {
    this.data.sr || (this.data.sr = 1), this.dynamicProperties = [], this.data.ef && expressionsPlugin && (this.effectsManager = expressionsPlugin.getEffectsManager(this.data, this, this.dynamicProperties), this.effect = this.effectsManager.bind(this.effectsManager)), this.hidden = !1, this.firstFrame = !0, this.isVisible = !1, this.currentFrameNum = -99999, this.lastNum = -99999, 11 === this.data.ty || (this.finalTransform = {
      mProp: PropertyFactory.getProp(this, this.data.ks, 2, null, this.dynamicProperties),
      matMdf: !1,
      opMdf: !1,
      mat: new Matrix,
      opacity: 1
    }, this.finalTransform.op = this.finalTransform.mProp.o, this.transform = this.finalTransform.mProp, this.createElements(), this.data.hasMask && this.addMasks(this.data))
  }, BaseElement.prototype.getType = function () {
    return this.type
  }, BaseElement.prototype.resetHierarchy = function () {
    this.hierarchy ? this.hierarchy.length = 0 : this.hierarchy = []
  }, BaseElement.prototype.getHierarchy = function () {
    return this.hierarchy || (this.hierarchy = []), this.hierarchy
  }, BaseElement.prototype.getLayerSize = function () {
    return 5 === this.data.ty ? {
      w: this.data.textData.width,
      h: this.data.textData.height
    } : {
      w: this.data.width,
      h: this.data.height
    }
  }, BaseElement.prototype.hide = function () {}, BaseElement.prototype.mHelper = new Matrix, createElement(BaseElement, SVGBaseElement), SVGBaseElement.prototype.appendNodeToParent = function (t) {
    if (this.placeholder) {
      var e = this.placeholder.phElement;
      e.parentNode.insertBefore(t, e)
    } else this.parentContainer.appendChild(t)
  }, SVGBaseElement.prototype.createElements = function () {
    if (this.data.td) {
      if (3 == this.data.td) this.layerElement = document.createElementNS(svgNS, "mask"), this.layerElement.setAttribute("id", this.layerId), this.layerElement.setAttribute("mask-type", "luminance"), this.globalData.defs.appendChild(this.layerElement);
      else if (2 == this.data.td) {
        var t = document.createElementNS(svgNS, "mask");
        t.setAttribute("id", this.layerId), t.setAttribute("mask-type", "alpha");
        var e = document.createElementNS(svgNS, "g");
        t.appendChild(e), this.layerElement = document.createElementNS(svgNS, "g");
        var i = document.createElementNS(svgNS, "filter"),
          n = randomString(10);
        i.setAttribute("id", n), i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%");
        var r = document.createElementNS(svgNS, "feComponentTransfer");
        r.setAttribute("in", "SourceGraphic"), i.appendChild(r);
        var s = document.createElementNS(svgNS, "feFuncA");
        s.setAttribute("type", "table"), s.setAttribute("tableValues", "1.0 0.0"), r.appendChild(s), this.globalData.defs.appendChild(i);
        var a = document.createElementNS(svgNS, "rect");
        a.setAttribute("width", "100%"), a.setAttribute("height", "100%"), a.setAttribute("x", "0"), a.setAttribute("y", "0"), a.setAttribute("fill", "#ffffff"), a.setAttribute("opacity", "0"), e.setAttribute("filter", "url(#" + n + ")"), e.appendChild(a), e.appendChild(this.layerElement), this.globalData.defs.appendChild(t)
      } else {
        this.layerElement = document.createElementNS(svgNS, "g");
        var o = document.createElementNS(svgNS, "mask");
        o.setAttribute("id", this.layerId), o.setAttribute("mask-type", "alpha"), o.appendChild(this.layerElement), this.globalData.defs.appendChild(o)
      }
      this.data.hasMask && (this.maskedElement = this.layerElement)
    } else this.data.hasMask ? (this.layerElement = document.createElementNS(svgNS, "g"), this.data.tt ? (this.matteElement = document.createElementNS(svgNS, "g"), this.matteElement.appendChild(this.layerElement), this.appendNodeToParent(this.matteElement)) : this.appendNodeToParent(this.layerElement), this.maskedElement = this.layerElement) : this.data.tt ? (this.matteElement = document.createElementNS(svgNS, "g"), this.matteElement.setAttribute("id", this.layerId), this.appendNodeToParent(this.matteElement), this.layerElement = this.matteElement) : this.layerElement = this.parentContainer;
    !this.data.ln && !this.data.cl || 4 !== this.data.ty && 0 !== this.data.ty || (this.layerElement === this.parentContainer && (this.layerElement = document.createElementNS(svgNS, "g"), this.appendNodeToParent(this.layerElement)), this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl)), 0 !== this.data.ty || !this.finalTransform.op.k && 1 === this.finalTransform.op.p || this.layerElement !== this.parentContainer || (this.layerElement = document.createElementNS(svgNS, "g"), this.appendNodeToParent(this.layerElement)), 0 !== this.data.bm && (this.layerElement === this.parentContainer && (this.layerElement = document.createElementNS(svgNS, "g"), this.appendNodeToParent(this.layerElement)), this.setBlendMode()), this.layerElement !== this.parentContainer && (this.placeholder = null)
  }, SVGBaseElement.prototype.setBlendMode = BaseElement.prototype.setBlendMode, SVGBaseElement.prototype.renderFrame = function (t) {
    if (3 === this.data.ty) return !1;
    if (!this.isVisible) return this.isVisible;
    this.lastNum = this.currentFrameNum, this.data.hasMask && this.maskManager.renderFrame(), this.finalTransform.opMdf = this.finalTransform.op.mdf, this.finalTransform.matMdf = this.finalTransform.mProp.mdf, this.finalTransform.opacity = this.finalTransform.op.v, this.firstFrame && (this.finalTransform.opMdf = !0, this.finalTransform.matMdf = !0);
    var e, i = this.finalTransform.mat;
    if (this.hierarchy) {
      var n, r = this.hierarchy.length;
      for (e = this.finalTransform.mProp.v.props, i.cloneFromProps(e), n = 0; r > n; n += 1) this.finalTransform.matMdf = this.hierarchy[n].finalTransform.mProp.mdf ? !0 : this.finalTransform.matMdf, e = this.hierarchy[n].finalTransform.mProp.v.props, i.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
    } else this.isVisible && (t ? (e = this.finalTransform.mProp.v.props, i.cloneFromProps(e)) : i.cloneFromProps(this.finalTransform.mProp.v.props));
    return t && (e = t.mat.props, i.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.finalTransform.opacity *= t.opacity, this.finalTransform.opMdf = t.opMdf ? !0 : this.finalTransform.opMdf, this.finalTransform.matMdf = t.matMdf ? !0 : this.finalTransform.matMdf), this.data.hasMask ? (this.finalTransform.matMdf && this.layerElement.setAttribute("transform", i.to2dCSS()), this.finalTransform.opMdf && this.layerElement.setAttribute("opacity", this.finalTransform.opacity)) : 0 === this.data.ty && this.finalTransform.opMdf && (this.finalTransform.op.k || 1 !== this.finalTransform.op.p) && (this.layerElement.setAttribute("opacity", this.finalTransform.opacity), this.finalTransform.opacity = 1), this.isVisible
  }, SVGBaseElement.prototype.destroy = function () {
    this.layerElement = null, this.parentContainer = null, this.matteElement && (this.matteElement = null), this.maskManager && this.maskManager.destroy()
  }, SVGBaseElement.prototype.getDomElement = function () {
    return this.layerElement
  }, SVGBaseElement.prototype.addMasks = function (t) {
    this.maskManager = new MaskElement(t, this, this.globalData)
  }, SVGBaseElement.prototype.setMatte = function (t) {
    this.matteElement && this.matteElement.setAttribute("mask", "url(#" + t + ")")
  }, SVGBaseElement.prototype.hide = function () {}, ITextElement.prototype.init = function () {
    this._parent.init.call(this), this.lettersChangedFlag = !1;
    var t = this.data;
    this.renderedLetters = Array.apply(null, {
      length: t.t.d.l.length
    }), this.viewData = {
      m: {
        a: PropertyFactory.getProp(this, t.t.m.a, 1, 0, this.dynamicProperties)
      }
    };
    var e = this.data.t;
    if (e.a.length) {
      this.viewData.a = Array.apply(null, {
        length: e.a.length
      });
      var i, n, r, s = e.a.length;
      for (i = 0; s > i; i += 1) r = e.a[i], n = {
        a: {},
        s: {}
      }, "r" in r.a && (n.a.r = PropertyFactory.getProp(this, r.a.r, 0, degToRads, this.dynamicProperties)), "rx" in r.a && (n.a.rx = PropertyFactory.getProp(this, r.a.rx, 0, degToRads, this.dynamicProperties)), "ry" in r.a && (n.a.ry = PropertyFactory.getProp(this, r.a.ry, 0, degToRads, this.dynamicProperties)), "sk" in r.a && (n.a.sk = PropertyFactory.getProp(this, r.a.sk, 0, degToRads, this.dynamicProperties)), "sa" in r.a && (n.a.sa = PropertyFactory.getProp(this, r.a.sa, 0, degToRads, this.dynamicProperties)), "s" in r.a && (n.a.s = PropertyFactory.getProp(this, r.a.s, 1, .01, this.dynamicProperties)), "a" in r.a && (n.a.a = PropertyFactory.getProp(this, r.a.a, 1, 0, this.dynamicProperties)), "o" in r.a && (n.a.o = PropertyFactory.getProp(this, r.a.o, 0, .01, this.dynamicProperties)), "p" in r.a && (n.a.p = PropertyFactory.getProp(this, r.a.p, 1, 0, this.dynamicProperties)), "sw" in r.a && (n.a.sw = PropertyFactory.getProp(this, r.a.sw, 0, 0, this.dynamicProperties)), "sc" in r.a && (n.a.sc = PropertyFactory.getProp(this, r.a.sc, 1, 0, this.dynamicProperties)), "fc" in r.a && (n.a.fc = PropertyFactory.getProp(this, r.a.fc, 1, 0, this.dynamicProperties)), "fh" in r.a && (n.a.fh = PropertyFactory.getProp(this, r.a.fh, 0, 0, this.dynamicProperties)), "fs" in r.a && (n.a.fs = PropertyFactory.getProp(this, r.a.fs, 0, .01, this.dynamicProperties)), "fb" in r.a && (n.a.fb = PropertyFactory.getProp(this, r.a.fb, 0, .01, this.dynamicProperties)), "t" in r.a && (n.a.t = PropertyFactory.getProp(this, r.a.t, 0, 0, this.dynamicProperties)), n.s = PropertyFactory.getTextSelectorProp(this, r.s, this.dynamicProperties), n.s.t = r.s.t, this.viewData.a[i] = n
    } else this.viewData.a = [];
    e.p && "m" in e.p ? (this.viewData.p = {
      f: PropertyFactory.getProp(this, e.p.f, 0, 0, this.dynamicProperties),
      l: PropertyFactory.getProp(this, e.p.l, 0, 0, this.dynamicProperties),
      r: e.p.r,
      m: this.maskManager.getMaskProperty(e.p.m)
    }, this.maskPath = !0) : this.maskPath = !1
  }, ITextElement.prototype.createPathShape = function (t, e) {
    var i, n, r, s, a = e.length,
      o = "";
    for (i = 0; a > i; i += 1) {
      for (r = e[i].ks.k.i.length, s = e[i].ks.k, n = 1; r > n; n += 1) 1 == n && (o += " M" + t.applyToPointStringified(s.v[0][0], s.v[0][1])), o += " C" + t.applyToPointStringified(s.o[n - 1][0], s.o[n - 1][1]) + " " + t.applyToPointStringified(s.i[n][0], s.i[n][1]) + " " + t.applyToPointStringified(s.v[n][0], s.v[n][1]);
      o += " C" + t.applyToPointStringified(s.o[n - 1][0], s.o[n - 1][1]) + " " + t.applyToPointStringified(s.i[0][0], s.i[0][1]) + " " + t.applyToPointStringified(s.v[0][0], s.v[0][1]), o += "z"
    }
    return o
  }, ITextElement.prototype.getMeasures = function () {
    var t, e, i, n, r = this.mHelper,
      s = this.renderType,
      a = this.data,
      o = a.t.d,
      l = o.l;
    if (this.maskPath) {
      var p = this.viewData.p.m;
      if (!this.viewData.p.n || this.viewData.p.mdf) {
        var h = p.v;
        this.viewData.p.r && (h = reversePath(h, p.closed));
        var c = {
          tLength: 0,
          segments: []
        };
        n = h.v.length - 1;
        var u, d = 0;
        for (i = 0; n > i; i += 1) u = {
          s: h.v[i],
          e: h.v[i + 1],
          to: [h.o[i][0] - h.v[i][0], h.o[i][1] - h.v[i][1]],
          ti: [h.i[i + 1][0] - h.v[i + 1][0], h.i[i + 1][1] - h.v[i + 1][1]]
        }, bez.buildBezierData(u), c.tLength += u.bezierData.segmentLength, c.segments.push(u), d += u.bezierData.segmentLength;
        i = n, p.closed && (u = {
          s: h.v[i],
          e: h.v[0],
          to: [h.o[i][0] - h.v[i][0], h.o[i][1] - h.v[i][1]],
          ti: [h.i[0][0] - h.v[0][0], h.i[0][1] - h.v[0][1]]
        }, bez.buildBezierData(u), c.tLength += u.bezierData.segmentLength, c.segments.push(u), d += u.bezierData.segmentLength), this.viewData.p.pi = c
      }
      var m, f, y, c = this.viewData.p.pi,
        g = this.viewData.p.f.v,
        v = 0,
        x = 1,
        k = 0,
        b = !0,
        E = c.segments;
      if (0 > g && p.closed)
        for (c.tLength < Math.abs(g) && (g = -Math.abs(g) % c.tLength), v = E.length - 1, y = E[v].bezierData.points, x = y.length - 1; 0 > g;) g += y[x].partialLength, x -= 1, 0 > x && (v -= 1, y = E[v].bezierData.points, x = y.length - 1);
      y = E[v].bezierData.points, f = y[x - 1], m = y[x];
      var _, S, w = m.partialLength
    }
    n = l.length, t = 0, e = 0;
    var D, A, F, C, T, P = .714 * 1.2 * a.t.d.s,
      B = !0,
      V = this.viewData,
      M = Array.apply(null, {
        length: n
      });
    this.lettersChangedFlag = !1, C = V.a.length;
    var G, N, I, L, j, H, O, R, z, q, W, $, X, U, J, Y, Q = -1,
      K = g,
      Z = v,
      te = x,
      ee = -1,
      ie = 0;
    for (i = 0; n > i; i += 1)
      if (r.reset(), H = 1, l[i].n) t = 0, e += o.yOffset, e += B ? 1 : 0, g = K, B = !1, ie = 0, this.maskPath && (v = Z, x = te, y = E[v].bezierData.points, f = y[x - 1], m = y[x], w = m.partialLength, k = 0), M[i] = this.emptyProp;
      else {
        if (this.maskPath) {
          if (ee !== l[i].line) {
            switch (o.j) {
              case 1:
                g += d - o.lineWidths[l[i].line];
                break;
              case 2:
                g += (d - o.lineWidths[l[i].line]) / 2
            }
            ee = l[i].line
          }
          Q !== l[i].ind && (l[Q] && (g += l[Q].extra), g += l[i].an / 2, Q = l[i].ind), g += V.m.a.v[0] * l[i].an / 200;
          var ne = 0;
          for (F = 0; C > F; F += 1) D = V.a[F].a, "p" in D && (A = V.a[F].s, N = A.getMult(l[i].anIndexes[F], a.t.a[F].s.totalChars), ne += N.length ? D.p.v[0] * N[0] : D.p.v[0] * N);
          for (b = !0; b;) k + w >= g + ne || !y ? (_ = (g + ne - k) / m.partialLength, L = f.point[0] + (m.point[0] - f.point[0]) * _, j = f.point[1] + (m.point[1] - f.point[1]) * _, r.translate(0, -(V.m.a.v[1] * P / 100) + e), b = !1) : y && (k += m.partialLength, x += 1, x >= y.length && (x = 0, v += 1, E[v] ? y = E[v].bezierData.points : p.closed ? (x = 0, v = 0, y = E[v].bezierData.points) : (k -= m.partialLength, y = null)), y && (f = m, m = y[x], w = m.partialLength));
          I = l[i].an / 2 - l[i].add, r.translate(-I, 0, 0)
        } else I = l[i].an / 2 - l[i].add, r.translate(-I, 0, 0), r.translate(-V.m.a.v[0] * l[i].an / 200, -V.m.a.v[1] * P / 100, 0);
        for (ie += l[i].l / 2, F = 0; C > F; F += 1) D = V.a[F].a, "t" in D && (A = V.a[F].s, N = A.getMult(l[i].anIndexes[F], a.t.a[F].s.totalChars), this.maskPath ? g += N.length ? D.t * N[0] : D.t * N : t += N.length ? D.t.v * N[0] : D.t.v * N);
        for (ie += l[i].l / 2, o.strokeWidthAnim && (R = a.t.d.sw || 0), o.strokeColorAnim && (O = a.t.d.sc ? [a.t.d.sc[0], a.t.d.sc[1], a.t.d.sc[2]] : [0, 0, 0]), o.fillColorAnim && (z = [a.t.d.fc[0], a.t.d.fc[1], a.t.d.fc[2]]), F = 0; C > F; F += 1) D = V.a[F].a, "a" in D && (A = V.a[F].s, N = A.getMult(l[i].anIndexes[F], a.t.a[F].s.totalChars), N.length ? r.translate(-D.a.v[0] * N[0], -D.a.v[1] * N[1], D.a.v[2] * N[2]) : r.translate(-D.a.v[0] * N, -D.a.v[1] * N, D.a.v[2] * N));
        for (F = 0; C > F; F += 1) D = V.a[F].a, "s" in D && (A = V.a[F].s, N = A.getMult(l[i].anIndexes[F], a.t.a[F].s.totalChars), N.length ? r.scale(1 + (D.s.v[0] - 1) * N[0], 1 + (D.s.v[1] - 1) * N[1], 1) : r.scale(1 + (D.s.v[0] - 1) * N, 1 + (D.s.v[1] - 1) * N, 1));
        for (F = 0; C > F; F += 1) {
          if (D = V.a[F].a, A = V.a[F].s, N = A.getMult(l[i].anIndexes[F], a.t.a[F].s.totalChars), "sk" in D && (N.length ? r.skewFromAxis(-D.sk.v * N[0], D.sa.v * N[1]) : r.skewFromAxis(-D.sk.v * N, D.sa.v * N)), "r" in D && r.rotateZ(N.length ? -D.r.v * N[2] : -D.r.v * N), "ry" in D && r.rotateY(N.length ? D.ry.v * N[1] : D.ry.v * N), "rx" in D && r.rotateX(N.length ? D.rx.v * N[0] : D.rx.v * N), "o" in D && (H += N.length ? (D.o.v * N[0] - H) * N[0] : (D.o.v * N - H) * N), o.strokeWidthAnim && "sw" in D && (R += N.length ? D.sw.v * N[0] : D.sw.v * N), o.strokeColorAnim && "sc" in D)
            for (q = 0; 3 > q; q += 1) O[q] = Math.round(N.length ? 255 * (O[q] + (D.sc.v[q] - O[q]) * N[0]) : 255 * (O[q] + (D.sc.v[q] - O[q]) * N));
          if (o.fillColorAnim) {
            if ("fc" in D)
              for (q = 0; 3 > q; q += 1) z[q] = N.length ? z[q] + (D.fc.v[q] - z[q]) * N[0] : z[q] + (D.fc.v[q] - z[q]) * N;
            "fh" in D && (z = N.length ? addHueToRGB(z, D.fh.v * N[0]) : addHueToRGB(z, D.fh.v * N)), "fs" in D && (z = N.length ? addSaturationToRGB(z, D.fs.v * N[0]) : addSaturationToRGB(z, D.fs.v * N)), "fb" in D && (z = N.length ? addBrightnessToRGB(z, D.fb.v * N[0]) : addBrightnessToRGB(z, D.fb.v * N))
          }
        }
        for (F = 0; C > F; F += 1) D = V.a[F].a, "p" in D && (A = V.a[F].s, N = A.getMult(l[i].anIndexes[F], a.t.a[F].s.totalChars), this.maskPath ? N.length ? r.translate(0, D.p.v[1] * N[0], -D.p.v[2] * N[1]) : r.translate(0, D.p.v[1] * N, -D.p.v[2] * N) : N.length ? r.translate(D.p.v[0] * N[0], D.p.v[1] * N[1], -D.p.v[2] * N[2]) : r.translate(D.p.v[0] * N, D.p.v[1] * N, -D.p.v[2] * N));
        if (o.strokeWidthAnim && (W = 0 > R ? 0 : R), o.strokeColorAnim && ($ = "rgb(" + Math.round(255 * O[0]) + "," + Math.round(255 * O[1]) + "," + Math.round(255 * O[2]) + ")"), o.fillColorAnim && (X = "rgb(" + Math.round(255 * z[0]) + "," + Math.round(255 * z[1]) + "," + Math.round(255 * z[2]) + ")"), this.maskPath) {
          if (a.t.p.p) {
            S = (m.point[1] - f.point[1]) / (m.point[0] - f.point[0]);
            var re = 180 * Math.atan(S) / Math.PI;
            m.point[0] < f.point[0] && (re += 180), r.rotate(-re * Math.PI / 180)
          }
          r.translate(L, j, 0), r.translate(V.m.a.v[0] * l[i].an / 200, V.m.a.v[1] * P / 100, 0), g -= V.m.a.v[0] * l[i].an / 200, l[i + 1] && Q !== l[i + 1].ind && (g += l[i].an / 2, g += o.tr / 1e3 * a.t.d.s)
        } else {
          switch (r.translate(t, e, 0), o.ps && r.translate(o.ps[0], o.ps[1] + o.ascent, 0), o.j) {
            case 1:
              r.translate(o.justifyOffset + (o.boxWidth - o.lineWidths[l[i].line]), 0, 0);
              break;
            case 2:
              r.translate(o.justifyOffset + (o.boxWidth - o.lineWidths[l[i].line]) / 2, 0, 0)
          }
          r.translate(I, 0, 0), r.translate(V.m.a.v[0] * l[i].an / 200, V.m.a.v[1] * P / 100, 0), t += l[i].l + o.tr / 1e3 * a.t.d.s
        }
        "html" === s ? U = r.toCSS() : "svg" === s ? U = r.to2dCSS() : J = [r.props[0], r.props[1], r.props[2], r.props[3], r.props[4], r.props[5], r.props[6], r.props[7], r.props[8], r.props[9], r.props[10], r.props[11], r.props[12], r.props[13], r.props[14], r.props[15]], Y = H, G = this.renderedLetters[i], !G || G.o === Y && G.sw === W && G.sc === $ && G.fc === X ? "svg" !== s && "html" !== s || G && G.m === U ? "canvas" !== s || G && G.props[0] === J[0] && G.props[1] === J[1] && G.props[4] === J[4] && G.props[5] === J[5] && G.props[12] === J[12] && G.props[13] === J[13] ? T = G : (this.lettersChangedFlag = !0, T = new LetterProps(Y, W, $, X, null, J)) : (this.lettersChangedFlag = !0, T = new LetterProps(Y, W, $, X, U)) : (this.lettersChangedFlag = !0, T = new LetterProps(Y, W, $, X, U, J)), this.renderedLetters[i] = T
      }
  }, ITextElement.prototype.emptyProp = new LetterProps, createElement(SVGBaseElement, SVGTextElement), SVGTextElement.prototype.init = ITextElement.prototype.init, SVGTextElement.prototype.createPathShape = ITextElement.prototype.createPathShape, SVGTextElement.prototype.getMeasures = ITextElement.prototype.getMeasures, SVGTextElement.prototype.createElements = function () {
    this._parent.createElements.call(this);
    var t = this.data.t.d;
    this.innerElem = document.createElementNS(svgNS, "g"), t.fc ? this.innerElem.setAttribute("fill", "rgb(" + Math.round(255 * t.fc[0]) + "," + Math.round(255 * t.fc[1]) + "," + Math.round(255 * t.fc[2]) + ")") : this.innerElem.setAttribute("fill", "rgba(0,0,0,0)"), t.sc && (this.innerElem.setAttribute("stroke", "rgb(" + Math.round(255 * t.sc[0]) + "," + Math.round(255 * t.sc[1]) + "," + Math.round(255 * t.sc[2]) + ")"), this.innerElem.setAttribute("stroke-width", t.sw)), this.innerElem.setAttribute("font-size", t.s);
    var e = this.globalData.fontManager.getFontByName(t.f);
    if (e.fClass) this.innerElem.setAttribute("class", e.fClass);
    else {
      this.innerElem.setAttribute("font-family", e.fFamily);
      var i = t.fWeight,
        n = t.fStyle;
      this.innerElem.setAttribute("font-style", n), this.innerElem.setAttribute("font-weight", i)
    }
    var r, s;
    this.layerElement === this.parentContainer ? this.appendNodeToParent(this.innerElem) : this.layerElement.appendChild(this.innerElem);
    var a = t.l;
    if (s = a.length) {
      var o, l, p = this.mHelper,
        h = "",
        c = this.data.singleShape;
      if (c) var u = 0,
        d = 0,
        m = t.lineWidths,
        f = t.boxWidth,
        y = !0;
      for (r = 0; s > r; r += 1) {
        if (this.globalData.fontManager.chars ? c && 0 !== r || (o = document.createElementNS(svgNS, "path")) : o = document.createElementNS(svgNS, "text"), o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), c && a[r].n && (u = 0, d += t.yOffset, d += y ? 1 : 0, y = !1), p.reset(), this.globalData.fontManager.chars && p.scale(t.s / 100, t.s / 100), c) {
          switch (t.ps && p.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
            case 1:
              p.translate(t.justifyOffset + (f - m[a[r].line]), 0, 0);
              break;
            case 2:
              p.translate(t.justifyOffset + (f - m[a[r].line]) / 2, 0, 0)
          }
          p.translate(u, d, 0)
        }
        if (this.globalData.fontManager.chars) {
          var g, v = this.globalData.fontManager.getCharData(t.t.charAt(r), e.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
          g = v ? v.data : null, g && g.shapes && (l = g.shapes[0].it, c || (h = ""), h += this.createPathShape(p, l), c || o.setAttribute("d", h)), c || this.innerElem.appendChild(o)
        } else o.textContent = a[r].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.innerElem.appendChild(o), c && o.setAttribute("transform", p.to2dCSS());
        c && (u += a[r].l), this.textSpans.push(o)
      }
      this.data.ln && this.innerElem.setAttribute("id", this.data.ln), this.data.cl && this.innerElem.setAttribute("class", this.data.cl), c && this.globalData.fontManager.chars && (o.setAttribute("d", h), this.innerElem.appendChild(o))
    }
  }, SVGTextElement.prototype.hide = function () {
    this.hidden || (this.innerElem.style.display = "none", this.hidden = !0)
  }, SVGTextElement.prototype.renderFrame = function (t) {
    var e = this._parent.renderFrame.call(this, t);
    if (e === !1) return void this.hide();
    if (this.hidden && (this.hidden = !1, this.innerElem.style.display = "block"), this.data.hasMask || (this.finalTransform.matMdf && this.innerElem.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform.opMdf && this.innerElem.setAttribute("opacity", this.finalTransform.opacity)), !this.data.singleShape && (this.getMeasures(), this.lettersChangedFlag)) {
      var i, n, r = this.renderedLetters,
        s = this.data.t.d.l;
      n = s.length;
      var a;
      for (i = 0; n > i; i += 1) s[i].n || (a = r[i], this.textSpans[i].setAttribute("transform", a.m), this.textSpans[i].setAttribute("opacity", a.o), a.sw && this.textSpans[i].setAttribute("stroke-width", a.sw), a.sc && this.textSpans[i].setAttribute("stroke", a.sc), a.fc && this.textSpans[i].setAttribute("fill", a.fc));
      this.firstFrame && (this.firstFrame = !1)
    }
  }, SVGTextElement.prototype.destroy = function () {
    this._parent.destroy.call(), this.innerElem = null
  };
  var PlaceHolderElement = function (t, e, i) {
    if (this.data = t, this.globalData = i, e) {
      this.parentContainer = e;
      var n = document.createElementNS(svgNS, "g");
      n.setAttribute("id", this.data.id), e.appendChild(n), this.phElement = n
    }
    this.layerId = "ly_" + randomString(10)
  };
  PlaceHolderElement.prototype.prepareFrame = function () {}, PlaceHolderElement.prototype.renderFrame = function () {}, PlaceHolderElement.prototype.draw = function () {}, createElement(SVGBaseElement, ICompElement), ICompElement.prototype.getComposingElement = function () {
    return this.layerElement
  }, ICompElement.prototype.hide = function () {
    if (!this.hidden) {
      var t, e = this.elements.length;
      for (t = 0; e > t; t += 1) this.elements[t].hide();
      this.hidden = !0
    }
  }, ICompElement.prototype.prepareFrame = function (t) {
    if (this._parent.prepareFrame.call(this, t), this.isVisible !== !1) {
      var e = t;
      this.tm && (e = this.tm.v, e === this.data.op && (e = this.data.op - 1)), this.renderedFrame = e / this.data.sr;
      var i, n = this.elements.length;
      for (i = 0; n > i; i += 1) this.elements[i].prepareFrame(e / this.data.sr - this.layers[i].st)
    }
  }, ICompElement.prototype.renderFrame = function (t) {
    var e, i = this._parent.renderFrame.call(this, t),
      n = this.layers.length;
    if (i === !1) return void this.hide();
    for (this.hidden = !1, e = 0; n > e; e += 1) this.data.hasMask ? this.elements[e].renderFrame() : this.elements[e].renderFrame(this.finalTransform);
    this.firstFrame && (this.firstFrame = !1)
  }, ICompElement.prototype.setElements = function (t) {
    this.elements = t
  }, ICompElement.prototype.getElements = function () {
    return this.elements
  }, ICompElement.prototype.destroy = function () {
    this._parent.destroy.call();
    var t, e = this.layers.length;
    for (t = 0; e > t; t += 1) this.elements[t].destroy()
  }, createElement(SVGBaseElement, IImageElement), IImageElement.prototype.createElements = function () {
    var t = this,
      e = function () {
        t.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t.path + t.assetData.p), t.maskedElement = t.innerElem
      },
      i = new Image;
    i.addEventListener("load", e, !1), i.addEventListener("error", e, !1), i.src = this.path + this.assetData.p, this._parent.createElements.call(this), this.innerElem = document.createElementNS(svgNS, "image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.layerElement === this.parentContainer ? this.appendNodeToParent(this.innerElem) : this.layerElement.appendChild(this.innerElem), this.data.ln && this.innerElem.setAttribute("id", this.data.ln), this.data.cl && this.innerElem.setAttribute("class", this.data.cl)
  }, IImageElement.prototype.hide = function () {
    this.hidden || (this.innerElem.setAttribute("visibility", "hidden"), this.hidden = !0)
  }, IImageElement.prototype.renderFrame = function (t) {
    var e = this._parent.renderFrame.call(this, t);
    return e === !1 ? void this.hide() : (this.hidden && (this.hidden = !1, this.innerElem.setAttribute("visibility", "visible")), this.data.hasMask || ((this.finalTransform.matMdf || this.firstFrame) && this.innerElem.setAttribute("transform", this.finalTransform.mat.to2dCSS()), (this.finalTransform.opMdf || this.firstFrame) && this.innerElem.setAttribute("opacity", this.finalTransform.opacity)), void(this.firstFrame && (this.firstFrame = !1)))
  }, IImageElement.prototype.destroy = function () {
    this._parent.destroy.call(), this.innerElem = null
  }, createElement(SVGBaseElement, IShapeElement), IShapeElement.prototype.lcEnum = {
    1: "butt",
    2: "round",
    3: "butt"
  }, IShapeElement.prototype.ljEnum = {
    1: "miter",
    2: "round",
    3: "butt"
  }, IShapeElement.prototype.buildExpressionInterface = function () {}, IShapeElement.prototype.transformHelper = {
    opacity: 1,
    mat: new Matrix,
    matMdf: !1,
    opMdf: !1
  }, IShapeElement.prototype.createElements = function () {
    this._parent.createElements.call(this), this.searchShapes(this.shapesData, this.viewData, this.dynamicProperties), this.layerElement.appendChild(this.shapesContainer), styleUnselectableDiv(this.layerElement), styleUnselectableDiv(this.shapesContainer)
  }, IShapeElement.prototype.searchShapes = function (t, e, i) {
    var n, r, s, a = t.length - 1,
      o = [],
      l = [];
    for (n = a; n >= 0; n -= 1)
      if ("fl" == t[n].ty || "st" == t[n].ty) {
        e[n] = {};
        var p;
        if (e[n].c = PropertyFactory.getProp(this, t[n].c, 1, 255, i), e[n].o = PropertyFactory.getProp(this, t[n].o, 0, .01, i), "st" == t[n].ty) {
          if (p = document.createElementNS(svgNS, "g"), p.setAttribute("stroke-linecap", this.lcEnum[t[n].lc] || "round"), p.setAttribute("stroke-linejoin", this.ljEnum[t[n].lj] || "round"), p.setAttribute("fill-opacity", "0"), 1 == t[n].lj && p.setAttribute("stroke-miterlimit", t[n].ml), e[n].c.k || p.setAttribute("stroke", "rgb(" + e[n].c.v[0] + "," + e[n].c.v[1] + "," + e[n].c.v[2] + ")"), e[n].o.k || p.setAttribute("stroke-opacity", e[n].o.v), e[n].w = PropertyFactory.getProp(this, t[n].w, 0, null, i), e[n].w.k || p.setAttribute("stroke-width", e[n].w.v), t[n].d) {
            var h = PropertyFactory.getDashProp(this, t[n].d, "svg", i);
            h.k || (p.setAttribute("stroke-dasharray", h.dasharray), p.setAttribute("stroke-dashoffset", h.dashoffset)), e[n].d = h
          }
        } else p = document.createElementNS(svgNS, "path"), e[n].c.k || p.setAttribute("fill", "rgb(" + e[n].c.v[0] + "," + e[n].c.v[1] + "," + e[n].c.v[2] + ")"), e[n].o.k || p.setAttribute("fill-opacity", e[n].o.v);
        t[n].ln && p.setAttribute("id", t[n].ln), t[n].cl && p.setAttribute("class", t[n].cl), this.shapesContainer.appendChild(p), this.stylesList.push({
          pathElement: p,
          type: t[n].ty,
          d: "",
          ld: "",
          mdf: !1
        }), e[n].style = this.stylesList[this.stylesList.length - 1], o.push(e[n].style)
      } else if ("gr" == t[n].ty) e[n] = {
      it: []
    }, this.searchShapes(t[n].it, e[n].it, i);
    else if ("tr" == t[n].ty) e[n] = {
      transform: {
        mat: new Matrix,
        opacity: 1,
        matMdf: !1,
        opMdf: !1,
        op: PropertyFactory.getProp(this, t[n].o, 0, .01, i),
        mProps: PropertyFactory.getProp(this, t[n], 2, null, i)
      },
      elements: []
    };
    else if ("sh" == t[n].ty || "rc" == t[n].ty || "el" == t[n].ty || "sr" == t[n].ty) {
      e[n] = {
        elements: [],
        styles: [],
        lStr: ""
      };
      var c = 4;
      "rc" == t[n].ty ? c = 5 : "el" == t[n].ty ? c = 6 : "sr" == t[n].ty && (c = 7), e[n].sh = ShapePropertyFactory.getShapeProp(this, t[n], c, i), this.shapes.push(e[n].sh), this.addShapeToModifiers(e[n].sh), s = this.stylesList.length;
      var u, d = !1,
        m = !1;
      for (r = 0; s > r; r += 1) this.stylesList[r].closed || ("st" === this.stylesList[r].type ? (d = !0, u = document.createElementNS(svgNS, "path"), this.stylesList[r].pathElement.appendChild(u), e[n].elements.push({
        ty: this.stylesList[r].type,
        el: u
      })) : (m = !0, e[n].elements.push({
        ty: this.stylesList[r].type,
        st: this.stylesList[r]
      })));
      e[n].st = d, e[n].fl = m
    } else if ("tm" == t[n].ty || "rd" == t[n].ty) {
      var f = ShapeModifiers.getModifier(t[n].ty);
      f.init(this, t[n], i), this.shapeModifiers.push(f), l.push(f), e[n] = f
    }
    for (a = o.length, n = 0; a > n; n += 1) o[n].closed = !0;
    for (a = l.length, n = 0; a > n; n += 1) l[n].closed = !0
  }, IShapeElement.prototype.addShapeToModifiers = function (t) {
    var e, i = this.shapeModifiers.length;
    for (e = 0; i > e; e += 1) this.shapeModifiers[e].addShape(t)
  }, IShapeElement.prototype.renderModifiers = function () {
    if (this.shapeModifiers.length) {
      var t, e = this.shapes.length;
      for (t = 0; e > t; t += 1) this.shapes[t].reset();
      for (e = this.shapeModifiers.length, t = e - 1; t >= 0; t -= 1) this.shapeModifiers[t].processShapes()
    }
  }, IShapeElement.prototype.renderFrame = function (t) {
    var e = this._parent.renderFrame.call(this, t);
    return e === !1 ? void this.hide() : (this.hidden = !1, this.finalTransform.matMdf && !this.data.hasMask && this.shapesContainer.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.transformHelper.opacity = this.finalTransform.opacity, this.transformHelper.matMdf = !1, this.transformHelper.opMdf = this.finalTransform.opMdf, this.renderModifiers(), void this.renderShape(this.transformHelper, null, null, !0))
  }, IShapeElement.prototype.hide = function () {
    if (!this.hidden) {
      var t, e = this.stylesList.length;
      for (t = e - 1; t >= 0; t -= 1) "0" !== this.stylesList[t].ld && (this.stylesList[t].ld = "0", this.stylesList[t].pathElement.style.display = "none", this.stylesList[t].pathElement.parentNode && (this.stylesList[t].parent = this.stylesList[t].pathElement.parentNode));
      this.hidden = !0
    }
  }, IShapeElement.prototype.renderShape = function (t, e, i, n) {
    var r, s;
    if (!e)
      for (e = this.shapesData, s = this.stylesList.length, r = 0; s > r; r += 1) this.stylesList[r].d = "", this.stylesList[r].mdf = !1;
    i || (i = this.viewData), s = e.length - 1;
    var a, o;
    for (a = t, r = s; r >= 0; r -= 1)
      if ("tr" == e[r].ty) {
        a = i[r].transform;
        var l = i[r].transform.mProps.v.props;
        if (a.matMdf = a.mProps.mdf, a.opMdf = a.op.mdf, o = a.mat, o.cloneFromProps(l), t) {
          var p = t.mat.props;
          a.opacity = t.opacity, a.opacity *= i[r].transform.op.v, a.matMdf = t.matMdf ? !0 : a.matMdf, a.opMdf = t.opMdf ? !0 : a.opMdf, o.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15])
        } else a.opacity = a.op.o
      } else "sh" == e[r].ty || "el" == e[r].ty || "rc" == e[r].ty || "sr" == e[r].ty ? this.renderPath(e[r], i[r], a) : "fl" == e[r].ty ? this.renderFill(e[r], i[r], a) : "st" == e[r].ty ? this.renderStroke(e[r], i[r], a) : "gr" == e[r].ty ? this.renderShape(a, e[r].it, i[r].it) : "tm" == e[r].ty;
    if (n) {
      for (s = this.stylesList.length, r = 0; s > r; r += 1) "0" === this.stylesList[r].ld && (this.stylesList[r].ld = "1", this.stylesList[r].pathElement.style.display = "block"), "fl" === this.stylesList[r].type && (this.stylesList[r].mdf || this.firstFrame) && this.stylesList[r].pathElement.setAttribute("d", this.stylesList[r].d);
      this.firstFrame && (this.firstFrame = !1)
    }
  }, IShapeElement.prototype.renderPath = function (t, e, i) {
    var n, r, s, a, o = "",
      l = i.matMdf || e.sh.mdf || this.firstFrame;
    if (l) {
      var p = e.sh.paths;
      for (a = p.length, s = 0; a > s; s += 1) {
        var h = p[s];
        if (h && h.v) {
          for (n = h.v.length, r = 1; n > r; r += 1) 1 == r && (o += " M" + i.mat.applyToPointStringified(h.v[0][0], h.v[0][1])), o += " C" + i.mat.applyToPointStringified(h.o[r - 1][0], h.o[r - 1][1]) + " " + i.mat.applyToPointStringified(h.i[r][0], h.i[r][1]) + " " + i.mat.applyToPointStringified(h.v[r][0], h.v[r][1]);
          1 == n && (o += " M" + i.mat.applyToPointStringified(h.v[0][0], h.v[0][1])), h.c && (o += " C" + i.mat.applyToPointStringified(h.o[r - 1][0], h.o[r - 1][1]) + " " + i.mat.applyToPointStringified(h.i[0][0], h.i[0][1]) + " " + i.mat.applyToPointStringified(h.v[0][0], h.v[0][1]), o += "z"), e.lStr = o
        }
      }
    } else o = e.lStr;
    for (n = e.elements.length, r = 0; n > r; r += 1) "st" === e.elements[r].ty ? (i.matMdf || e.sh.mdf || this.firstFrame) && e.elements[r].el.setAttribute("d", o) : (e.elements[r].st.mdf = l ? !0 : e.elements[r].st.mdf, e.elements[r].st.d += o)
  }, IShapeElement.prototype.renderFill = function (t, e, i) {
    var n = e.style;
    (e.c.mdf || this.firstFrame) && n.pathElement.setAttribute("fill", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o.mdf || i.opMdf || this.firstFrame) && n.pathElement.setAttribute("fill-opacity", e.o.v * i.opacity)
  }, IShapeElement.prototype.renderStroke = function (t, e, i) {
    var n = e.style,
      r = e.d;
    r && r.k && (r.mdf || this.firstFrame) && (n.pathElement.setAttribute("stroke-dasharray", r.dasharray), n.pathElement.setAttribute("stroke-dashoffset", r.dashoffset)), (e.c.mdf || this.firstFrame) && n.pathElement.setAttribute("stroke", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o.mdf || i.opMdf || this.firstFrame) && n.pathElement.setAttribute("stroke-opacity", e.o.v * i.opacity), (e.w.mdf || this.firstFrame) && n.pathElement.setAttribute("stroke-width", e.w.v)
  }, IShapeElement.prototype.destroy = function () {
    this._parent.destroy.call(), this.shapeData = null, this.viewData = null, this.parentContainer = null, this.placeholder = null
  }, createElement(SVGBaseElement, ISolidElement), ISolidElement.prototype.createElements = function () {
    this._parent.createElements.call(this);
    var t = document.createElementNS(svgNS, "rect");
    t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement === this.parentContainer ? this.appendNodeToParent(t) : this.layerElement.appendChild(t), this.innerElem = t, this.data.ln && this.innerElem.setAttribute("id", this.data.ln), this.data.cl && this.innerElem.setAttribute("class", this.data.cl)
  }, ISolidElement.prototype.hide = IImageElement.prototype.hide, ISolidElement.prototype.renderFrame = IImageElement.prototype.renderFrame, ISolidElement.prototype.destroy = IImageElement.prototype.destroy, createElement(BaseElement, CVBaseElement), CVBaseElement.prototype.createElements = function () {}, CVBaseElement.prototype.checkBlendMode = function (t) {
    if (t.blendMode !== this.data.bm) {
      t.blendMode = this.data.bm;
      var e = "";
      switch (this.data.bm) {
        case 0:
          e = "normal";
          break;
        case 1:
          e = "multiply";
          break;
        case 2:
          e = "screen";
          break;
        case 3:
          e = "overlay";
          break;
        case 4:
          e = "darken";
          break;
        case 5:
          e = "lighten";
          break;
        case 6:
          e = "color-dodge";
          break;
        case 7:
          e = "color-burn";
          break;
        case 8:
          e = "hard-light";
          break;
        case 9:
          e = "soft-light";
          break;
        case 10:
          e = "difference";
          break;
        case 11:
          e = "exclusion";
          break;
        case 12:
          e = "hue";
          break;
        case 13:
          e = "saturation";
          break;
        case 14:
          e = "color";
          break;
        case 15:
          e = "luminosity"
      }
      t.canvasContext.globalCompositeOperation = e
    }
  }, CVBaseElement.prototype.renderFrame = function (t) {
    if (3 === this.data.ty) return !1;
    if (this.checkBlendMode(0 === this.data.ty ? this.parentGlobalData : this.globalData), !this.isVisible) return this.isVisible;
    this.finalTransform.opMdf = this.finalTransform.op.mdf, this.finalTransform.matMdf = this.finalTransform.mProp.mdf, this.finalTransform.opacity = this.finalTransform.op.v;
    var e, i = this.finalTransform.mat;
    if (this.hierarchy) {
      var n, r = this.hierarchy.length;
      for (e = this.finalTransform.mProp.v.props, i.cloneFromProps(e), n = 0; r > n; n += 1) this.finalTransform.matMdf = this.hierarchy[n].finalTransform.mProp.mdf ? !0 : this.finalTransform.matMdf, e = this.hierarchy[n].finalTransform.mProp.v.props, i.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
    } else t ? (e = this.finalTransform.mProp.v.props, i.cloneFromProps(e)) : i.cloneFromProps(this.finalTransform.mProp.v.props);
    return t && (e = t.mat.props, i.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.finalTransform.opacity *= t.opacity, this.finalTransform.opMdf = t.opMdf ? !0 : this.finalTransform.opMdf, this.finalTransform.matMdf = t.matMdf ? !0 : this.finalTransform.matMdf), this.data.hasMask && (this.globalData.renderer.save(!0), this.maskManager.renderFrame(0 === this.data.ty ? null : i)), this.isVisible
  }, CVBaseElement.prototype.addMasks = function (t) {
    this.maskManager = new CVMaskElement(t, this, this.globalData)
  }, CVBaseElement.prototype.destroy = function () {
    this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager && this.maskManager.destroy()
  }, CVBaseElement.prototype.mHelper = new Matrix, createElement(CVBaseElement, CVCompElement), CVCompElement.prototype.ctxTransform = CanvasRenderer.prototype.ctxTransform, CVCompElement.prototype.ctxOpacity = CanvasRenderer.prototype.ctxOpacity, CVCompElement.prototype.save = CanvasRenderer.prototype.save, CVCompElement.prototype.restore = CanvasRenderer.prototype.restore, CVCompElement.prototype.reset = function () {
    this.contextData.cArrPos = 0, this.contextData.cTr.reset(), this.contextData.cO = 1
  }, CVCompElement.prototype.resize = function (t) {
    var e = Math.max(t.sx, t.sy);
    this.canvas.width = this.data.w * e, this.canvas.height = this.data.h * e, this.transformCanvas = {
      sc: e,
      w: this.data.w * e,
      h: this.data.h * e,
      props: [e, 0, 0, 0, 0, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    };
    var i, n = this.elements.length;
    for (i = 0; n > i; i += 1) 0 === this.elements[i].data.ty && this.elements[i].resize(t)
  }, CVCompElement.prototype.prepareFrame = function (t) {
    if (this.globalData.frameId = this.parentGlobalData.frameId, this.globalData.mdf = !1, this._parent.prepareFrame.call(this, t), this.isVisible !== !1) {
      var e = t;
      this.tm && (e = this.tm.v, e === this.data.op && (e = this.data.op - 1)), this.renderedFrame = e / this.data.sr;
      var i, n = this.elements.length;
      for (i = 0; n > i; i += 1) this.elements[i].prepareFrame(e / this.data.sr - this.layers[i].st), 0 === this.elements[i].data.ty && this.elements[i].globalData.mdf && (this.globalData.mdf = !0);
      this.globalData.mdf && (this.canvasContext.clearRect(0, 0, this.data.w, this.data.h), this.ctxTransform(this.transformCanvas.props))
    }
  }, CVCompElement.prototype.renderFrame = function (t) {
    if (this._parent.renderFrame.call(this, t) !== !1) {
      if (this.globalData.mdf) {
        var e, i = this.layers.length;
        for (e = i - 1; e >= 0; e -= 1) this.elements[e].renderFrame()
      }
      this.data.hasMask && this.globalData.renderer.restore(!0), this.firstFrame && (this.firstFrame = !1), this.parentGlobalData.renderer.save(), this.parentGlobalData.renderer.ctxTransform(this.finalTransform.mat.props), this.parentGlobalData.renderer.ctxOpacity(this.finalTransform.opacity), this.parentGlobalData.renderer.canvasContext.drawImage(this.canvas, 0, 0, this.data.w, this.data.h), this.parentGlobalData.renderer.restore(), this.globalData.mdf && this.reset()
    }
  }, CVCompElement.prototype.setElements = function (t) {
    this.elements = t
  }, CVCompElement.prototype.getElements = function () {
    return this.elements
  }, CVCompElement.prototype.destroy = function () {
    var t, e = this.layers.length;
    for (t = e - 1; t >= 0; t -= 1) this.elements[t].destroy();
    this.layers = null, this.elements = null, this._parent.destroy.call()
  }, createElement(CVBaseElement, CVImageElement), CVImageElement.prototype.createElements = function () {
    var t = this,
      e = function () {
        t.animationItem.elementLoaded()
      },
      i = function () {
        t.failed = !0, t.animationItem.elementLoaded()
      };
    this.img = new Image, this.img.addEventListener("load", e, !1), this.img.addEventListener("error", i, !1), this.img.src = this.path + this.assetData.p, this._parent.createElements.call(this)
  }, CVImageElement.prototype.renderFrame = function (t) {
    if (!this.failed && this._parent.renderFrame.call(this, t) !== !1) {
      var e = this.canvasContext;
      this.globalData.renderer.save();
      var i = this.finalTransform.mat.props;
      this.globalData.renderer.ctxTransform(i), this.globalData.renderer.ctxOpacity(this.finalTransform.opacity), e.drawImage(this.img, 0, 0), this.globalData.renderer.restore(this.data.hasMask), this.firstFrame && (this.firstFrame = !1)
    }
  }, CVImageElement.prototype.destroy = function () {
    this.img = null, this.animationItem = null, this._parent.destroy.call()
  }, CVMaskElement.prototype.getMaskProperty = function (t) {
    return this.viewData[t]
  }, CVMaskElement.prototype.prepareFrame = function (t) {
    var e, i = this.dynamicProperties.length;
    for (e = 0; i > e; e += 1) this.dynamicProperties[e].getValue(t)
  }, CVMaskElement.prototype.renderFrame = function (t) {
    var e, i, n, r, s, a = this.element.canvasContext,
      o = this.data.masksProperties.length,
      l = !1;
    for (e = 0; o > e; e++)
      if ("n" !== this.masksProperties[e].mode) {
        l === !1 && (a.beginPath(), l = !0), this.masksProperties[e].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compWidth, 0), a.lineTo(this.element.globalData.compWidth, this.element.globalData.compHeight), a.lineTo(0, this.element.globalData.compHeight), a.lineTo(0, 0)), s = this.viewData[e].v, i = t ? t.applyToPointArray(s.v[0][0], s.v[0][1], 0) : s.v[0], a.moveTo(i[0], i[1]);
        var p, h = s.v.length;
        for (p = 1; h > p; p++) i = t ? t.applyToPointArray(s.o[p - 1][0], s.o[p - 1][1], 0) : s.o[p - 1], n = t ? t.applyToPointArray(s.i[p][0], s.i[p][1], 0) : s.i[p], r = t ? t.applyToPointArray(s.v[p][0], s.v[p][1], 0) : s.v[p], a.bezierCurveTo(i[0], i[1], n[0], n[1], r[0], r[1]);
        i = t ? t.applyToPointArray(s.o[p - 1][0], s.o[p - 1][1], 0) : s.o[p - 1], n = t ? t.applyToPointArray(s.i[0][0], s.i[0][1], 0) : s.i[0], r = t ? t.applyToPointArray(s.v[0][0], s.v[0][1], 0) : s.v[0], a.bezierCurveTo(i[0], i[1], n[0], n[1], r[0], r[1])
      } l && a.clip()
  }, CVMaskElement.prototype.getMask = function (t) {
    for (var e = 0, i = this.masksProperties.length; i > e;) {
      if (this.masksProperties[e].nm === t) return {
        maskPath: this.viewData[e].pv
      };
      e += 1
    }
  }, CVMaskElement.prototype.destroy = function () {
    this.element = null
  }, createElement(CVBaseElement, CVShapeElement), CVShapeElement.prototype.lcEnum = {
    1: "butt",
    2: "round",
    3: "butt"
  }, CVShapeElement.prototype.ljEnum = {
    1: "miter",
    2: "round",
    3: "butt"
  }, CVShapeElement.prototype.transformHelper = {
    opacity: 1,
    mat: new Matrix,
    matMdf: !1,
    opMdf: !1
  }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createElements = function () {
    this._parent.createElements.call(this), this.searchShapes(this.shapesData, this.viewData, this.dynamicProperties)
  }, CVShapeElement.prototype.searchShapes = function (t, e, i) {
    var n, r, s, a, o = t.length - 1,
      l = [],
      p = [];
    for (n = o; n >= 0; n -= 1)
      if ("fl" == t[n].ty || "st" == t[n].ty) {
        if (a = {
            type: t[n].ty,
            elements: []
          }, e[n] = {}, e[n].c = PropertyFactory.getProp(this, t[n].c, 1, 255, i), e[n].c.k || (a.co = "rgb(" + bm_floor(e[n].c.v[0]) + "," + bm_floor(e[n].c.v[1]) + "," + bm_floor(e[n].c.v[2]) + ")"), e[n].o = PropertyFactory.getProp(this, t[n].o, 0, .01, i), "st" == t[n].ty && (a.lc = this.lcEnum[t[n].lc] || "round", a.lj = this.ljEnum[t[n].lj] || "round", 1 == t[n].lj && (a.ml = t[n].ml), e[n].w = PropertyFactory.getProp(this, t[n].w, 0, null, i), e[n].w.k || (a.wi = e[n].w.v), t[n].d)) {
          var h = PropertyFactory.getDashProp(this, t[n].d, "canvas", i);
          e[n].d = h, e[n].d.k || (a.da = e[n].d.dasharray, a["do"] = e[n].d.dashoffset)
        }
        this.stylesList.push(a), e[n].style = a, l.push(e[n].style)
      } else if ("gr" == t[n].ty) e[n] = {
      it: []
    }, this.searchShapes(t[n].it, e[n].it, i);
    else if ("tr" == t[n].ty) e[n] = {
      transform: {
        mat: new Matrix,
        opacity: 1,
        matMdf: !1,
        opMdf: !1,
        op: PropertyFactory.getProp(this, t[n].o, 0, .01, i),
        mProps: PropertyFactory.getProp(this, t[n], 2, null, i)
      },
      elements: []
    };
    else if ("sh" == t[n].ty || "rc" == t[n].ty || "el" == t[n].ty || "sr" == t[n].ty) {
      e[n] = {
        nodes: [],
        trNodes: [],
        tr: [0, 0, 0, 0, 0, 0]
      };
      var c = 4;
      "rc" == t[n].ty ? c = 5 : "el" == t[n].ty ? c = 6 : "sr" == t[n].ty && (c = 7), e[n].sh = ShapePropertyFactory.getShapeProp(this, t[n], c, i), this.shapes.push(e[n].sh), this.addShapeToModifiers(e[n].sh), s = this.stylesList.length;
      var u = !1,
        d = !1;
      for (r = 0; s > r; r += 1) this.stylesList[r].closed || (this.stylesList[r].elements.push(e[n]), "st" === this.stylesList[r].type ? u = !0 : d = !0);
      e[n].st = u, e[n].fl = d
    } else if ("tm" == t[n].ty || "rd" == t[n].ty) {
      var m = ShapeModifiers.getModifier(t[n].ty);
      m.init(this, t[n], i), this.shapeModifiers.push(m), p.push(m), e[n] = m
    }
    for (o = l.length, n = 0; o > n; n += 1) l[n].closed = !0;
    for (o = p.length, n = 0; o > n; n += 1) p[n].closed = !0
  }, CVShapeElement.prototype.addShapeToModifiers = function (t) {
    var e, i = this.shapeModifiers.length;
    for (e = 0; i > e; e += 1) this.shapeModifiers[e].addShape(t)
  }, CVShapeElement.prototype.renderModifiers = function () {
    if (this.shapeModifiers.length) {
      var t, e = this.shapes.length;
      for (t = 0; e > t; t += 1) this.shapes[t].reset();
      for (e = this.shapeModifiers.length, t = e - 1; t >= 0; t -= 1) this.shapeModifiers[t].processShapes()
    }
  }, CVShapeElement.prototype.renderFrame = function (t) {
    this._parent.renderFrame.call(this, t) !== !1 && (this.transformHelper.mat.reset(), this.transformHelper.opacity = this.finalTransform.opacity, this.transformHelper.matMdf = !1, this.transformHelper.opMdf = this.finalTransform.opMdf, this.renderModifiers(), this.renderShape(this.transformHelper, null, null, !0), this.data.hasMask && this.globalData.renderer.restore(!0))
  }, CVShapeElement.prototype.renderShape = function (t, e, i, n) {
    var r, s;
    if (!e)
      for (e = this.shapesData, s = this.stylesList.length, r = 0; s > r; r += 1) this.stylesList[r].d = "", this.stylesList[r].mdf = !1;
    i || (i = this.viewData), s = e.length - 1;
    var a, o;
    for (a = t, r = s; r >= 0; r -= 1)
      if ("tr" == e[r].ty) {
        a = i[r].transform;
        var l = i[r].transform.mProps.v.props;
        if (a.matMdf = a.mProps.mdf, a.opMdf = a.op.mdf, o = a.mat, o.cloneFromProps(l), t) {
          var p = t.mat.props;
          a.opacity = t.opacity, a.opacity *= i[r].transform.op.v, a.matMdf = t.matMdf ? !0 : a.matMdf, a.opMdf = t.opMdf ? !0 : a.opMdf, o.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15])
        } else a.opacity = a.op.o
      } else "sh" == e[r].ty || "el" == e[r].ty || "rc" == e[r].ty || "sr" == e[r].ty ? this.renderPath(e[r], i[r], a) : "fl" == e[r].ty ? this.renderFill(e[r], i[r], a) : "st" == e[r].ty ? this.renderStroke(e[r], i[r], a) : "gr" == e[r].ty ? this.renderShape(a, e[r].it, i[r].it) : "tm" == e[r].ty;
    if (n) {
      s = this.stylesList.length;
      var h, c, u, d, m, f, y, g = this.globalData.renderer,
        v = this.globalData.canvasContext;
      for (g.save(), g.ctxTransform(this.finalTransform.mat.props), r = 0; s > r; r += 1)
        if (y = this.stylesList[r].type, "st" !== y || 0 !== this.stylesList[r].wi) {
          for (g.save(), m = this.stylesList[r].elements, c = m.length, "st" === y ? (v.strokeStyle = this.stylesList[r].co, v.lineWidth = this.stylesList[r].wi, v.lineCap = this.stylesList[r].lc, v.lineJoin = this.stylesList[r].lj, v.miterLimit = this.stylesList[r].ml || 0) : v.fillStyle = this.stylesList[r].co, g.ctxOpacity(this.stylesList[r].coOp), "st" !== y && v.beginPath(), h = 0; c > h; h += 1) {
            for ("st" === y && (v.beginPath(), this.stylesList[r].da ? (v.setLineDash(this.stylesList[r].da), v.lineDashOffset = this.stylesList[r]["do"], this.globalData.isDashed = !0) : this.globalData.isDashed && (v.setLineDash(this.dashResetter), this.globalData.isDashed = !1)), f = m[h].trNodes, d = f.length, u = 0; d > u; u += 1) "m" == f[u].t ? v.moveTo(f[u].p[0], f[u].p[1]) : "c" == f[u].t ? v.bezierCurveTo(f[u].p1[0], f[u].p1[1], f[u].p2[0], f[u].p2[1], f[u].p3[0], f[u].p3[1]) : v.closePath();
            "st" === y && v.stroke()
          }
          "st" !== y && v.fill(), g.restore()
        } g.restore(), this.firstFrame && (this.firstFrame = !1)
    }
  }, CVShapeElement.prototype.renderPath = function (t, e, i) {
    var n, r, s, a, o = i.matMdf || e.sh.mdf || this.firstFrame;
    if (o) {
      var l = e.sh.paths;
      a = l.length;
      var p = e.trNodes;
      for (p.length = 0, s = 0; a > s; s += 1) {
        var h = l[s];
        if (h && h.v) {
          for (n = h.v.length, r = 1; n > r; r += 1) 1 == r && p.push({
            t: "m",
            p: i.mat.applyToPointArray(h.v[0][0], h.v[0][1], 0)
          }), p.push({
            t: "c",
            p1: i.mat.applyToPointArray(h.o[r - 1][0], h.o[r - 1][1], 0),
            p2: i.mat.applyToPointArray(h.i[r][0], h.i[r][1], 0),
            p3: i.mat.applyToPointArray(h.v[r][0], h.v[r][1], 0)
          });
          1 == n && p.push({
            t: "m",
            p: i.mat.applyToPointArray(h.v[0][0], h.v[0][1], 0)
          }), h.c && (p.push({
            t: "c",
            p1: i.mat.applyToPointArray(h.o[r - 1][0], h.o[r - 1][1], 0),
            p2: i.mat.applyToPointArray(h.i[0][0], h.i[0][1], 0),
            p3: i.mat.applyToPointArray(h.v[0][0], h.v[0][1], 0)
          }), p.push({
            t: "z"
          })), e.lStr = p
        }
      }
      if (e.st)
        for (r = 0; 16 > r; r += 1) e.tr[r] = i.mat.props[r];
      e.trNodes = p
    }
  }, CVShapeElement.prototype.renderFill = function (t, e, i) {
    var n = e.style;
    (e.c.mdf || this.firstFrame) && (n.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o.mdf || i.opMdf || this.firstFrame) && (n.coOp = e.o.v * i.opacity)
  }, CVShapeElement.prototype.renderStroke = function (t, e, i) {
    var n = e.style,
      r = e.d;
    r && (r.mdf || this.firstFrame) && (n.da = r.dasharray, n["do"] = r.dashoffset), (e.c.mdf || this.firstFrame) && (n.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o.mdf || i.opMdf || this.firstFrame) && (n.coOp = e.o.v * i.opacity), (e.w.mdf || this.firstFrame) && (n.wi = e.w.v)
  }, CVShapeElement.prototype.destroy = function () {
    this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.viewData.length = 0, this._parent.destroy.call()
  }, createElement(CVBaseElement, CVSolidElement), CVSolidElement.prototype.renderFrame = function (t) {
    if (this._parent.renderFrame.call(this, t) !== !1) {
      var e = this.canvasContext;
      this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.opacity), e.fillStyle = this.data.sc, e.fillRect(0, 0, this.data.sw, this.data.sh), this.globalData.renderer.restore(this.data.hasMask), this.firstFrame && (this.firstFrame = !1)
    }
  }, createElement(CVBaseElement, CVTextElement), CVTextElement.prototype.init = ITextElement.prototype.init, CVTextElement.prototype.getMeasures = ITextElement.prototype.getMeasures, CVTextElement.prototype.getMult = ITextElement.prototype.getMult, CVTextElement.prototype.tHelper = document.createElement("canvas").getContext("2d"), CVTextElement.prototype.createElements = function () {
    this._parent.createElements.call(this);
    var t = this.data.t.d,
      e = !1;
    t.fc ? (e = !0, this.values.fill = "rgb(" + Math.round(255 * t.fc[0]) + "," + Math.round(255 * t.fc[1]) + "," + Math.round(255 * t.fc[2]) + ")") : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
    var i = !1;
    t.sc && (i = !0, this.values.stroke = "rgb(" + Math.round(255 * t.sc[0]) + "," + Math.round(255 * t.sc[1]) + "," + Math.round(255 * t.sc[2]) + ")", this.values.sWidth = t.sw);
    var n, r, s = this.globalData.fontManager.getFontByName(t.f),
      a = t.l,
      o = this.mHelper;
    this.stroke = i, this.values.fValue = t.s + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, r = t.t.length, this.tHelper.font = this.values.fValue;
    var l, p, h, c, u, d, m, f, y, g, v = this.data.singleShape;
    if (v) var x = 0,
      k = 0,
      b = t.lineWidths,
      E = t.boxWidth,
      _ = !0;
    for (n = 0; r > n; n += 1) {
      l = this.globalData.fontManager.getCharData(t.t.charAt(n), s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
      var p;
      if (p = l ? l.data : null, o.reset(), v && a[n].n && (x = 0, k += t.yOffset, k += _ ? 1 : 0, _ = !1), p && p.shapes) {
        if (u = p.shapes[0].it, m = u.length, o.scale(t.s / 100, t.s / 100), v) {
          switch (t.ps && o.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
            case 1:
              o.translate(t.justifyOffset + (E - b[a[n].line]), 0, 0);
              break;
            case 2:
              o.translate(t.justifyOffset + (E - b[a[n].line]) / 2, 0, 0)
          }
          o.translate(x, k, 0)
        }
        for (y = new Array(m), d = 0; m > d; d += 1) {
          for (c = u[d].ks.k.i.length, f = u[d].ks.k, g = [], h = 1; c > h; h += 1) 1 == h && g.push(o.applyToX(f.v[0][0], f.v[0][1], 0), o.applyToY(f.v[0][0], f.v[0][1], 0)), g.push(o.applyToX(f.o[h - 1][0], f.o[h - 1][1], 0), o.applyToY(f.o[h - 1][0], f.o[h - 1][1], 0), o.applyToX(f.i[h][0], f.i[h][1], 0), o.applyToY(f.i[h][0], f.i[h][1], 0), o.applyToX(f.v[h][0], f.v[h][1], 0), o.applyToY(f.v[h][0], f.v[h][1], 0));
          g.push(o.applyToX(f.o[h - 1][0], f.o[h - 1][1], 0), o.applyToY(f.o[h - 1][0], f.o[h - 1][1], 0), o.applyToX(f.i[0][0], f.i[0][1], 0), o.applyToY(f.i[0][0], f.i[0][1], 0), o.applyToX(f.v[0][0], f.v[0][1], 0), o.applyToY(f.v[0][0], f.v[0][1], 0)), y[d] = g
        }
      } else y = [];
      v && (x += a[n].l), this.textSpans.push({
        elem: y
      })
    }
  }, CVTextElement.prototype.renderFrame = function (t) {
    if (this._parent.renderFrame.call(this, t) !== !1) {
      var e = this.canvasContext,
        i = this.finalTransform.mat.props;
      this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(i), this.globalData.renderer.ctxOpacity(this.finalTransform.opacity), e.font = this.values.fValue, e.lineCap = "butt", e.lineJoin = "miter", e.miterLimit = 4, this.data.singleShape || this.getMeasures();
      var n, r, s, a, o, l, p = this.renderedLetters,
        h = this.data.t.d.l;
      r = h.length;
      var c, u, d, m = null,
        f = null,
        y = null;
      for (n = 0; r > n; n += 1)
        if (!h[n].n) {
          if (c = p[n], c && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(c.props), this.globalData.renderer.ctxOpacity(c.o)), this.fill) {
            for (c && c.fc ? m !== c.fc && (m = c.fc, e.fillStyle = c.fc) : m !== this.values.fill && (m = this.values.fill, e.fillStyle = this.values.fill), u = this.textSpans[n].elem, a = u.length, this.globalData.canvasContext.beginPath(), s = 0; a > s; s += 1)
              for (d = u[s], l = d.length, this.globalData.canvasContext.moveTo(d[0], d[1]), o = 2; l > o; o += 6) this.globalData.canvasContext.bezierCurveTo(d[o], d[o + 1], d[o + 2], d[o + 3], d[o + 4], d[o + 5]);
            this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
          }
          if (this.stroke) {
            for (c && c.sw ? y !== c.sw && (y = c.sw, e.lineWidth = c.sw) : y !== this.values.sWidth && (y = this.values.sWidth, e.lineWidth = this.values.sWidth), c && c.sc ? f !== c.sc && (f = c.sc, e.strokeStyle = c.sc) : f !== this.values.stroke && (f = this.values.stroke, e.strokeStyle = this.values.stroke), u = this.textSpans[n].elem, a = u.length, this.globalData.canvasContext.beginPath(), s = 0; a > s; s += 1)
              for (d = u[s], l = d.length, this.globalData.canvasContext.moveTo(d[0], d[1]), o = 2; l > o; o += 6) this.globalData.canvasContext.bezierCurveTo(d[o], d[o + 1], d[o + 2], d[o + 3], d[o + 4], d[o + 5]);
            this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
          }
          c && this.globalData.renderer.restore()
        } this.globalData.renderer.restore(this.data.hasMask), this.firstFrame && (this.firstFrame = !1)
    }
  }, createElement(BaseElement, HBaseElement), HBaseElement.prototype.checkBlendMode = function () {}, HBaseElement.prototype.setBlendMode = BaseElement.prototype.setBlendMode, HBaseElement.prototype.appendNodeToParent = function (t) {
    if (this.placeholder) {
      var e = this.placeholder.phElement;
      e.parentNode.insertBefore(t, e)
    } else this.parentContainer.appendChild(t)
  }, HBaseElement.prototype.createElements = function () {
    this.data.hasMask ? (this.layerElement = document.createElementNS(svgNS, "svg"), this.appendNodeToParent(this.layerElement), this.maskedElement = this.layerElement) : this.layerElement = this.parentContainer, !this.data.ln || 4 !== this.data.ty && 0 !== this.data.ty || (this.layerElement === this.parentContainer && (this.layerElement = document.createElementNS(svgNS, "g"), this.appendNodeToParent(this.layerElement)), this.layerElement.setAttribute("id", this.data.ln)), this.setBlendMode(), this.layerElement !== this.parentContainer && (this.placeholder = null)
  }, HBaseElement.prototype.renderFrame = function (t) {
    if (3 === this.data.ty) return !1;
    if (this.currentFrameNum === this.lastNum || !this.isVisible) return this.isVisible;
    this.lastNum = this.currentFrameNum, this.data.hasMask && this.maskManager.renderFrame(), this.finalTransform.opMdf = this.finalTransform.op.mdf, this.finalTransform.matMdf = this.finalTransform.mProp.mdf, this.finalTransform.opacity = this.finalTransform.op.v, this.firstFrame && (this.finalTransform.opMdf = !0, this.finalTransform.matMdf = !0);
    var e, i = this.finalTransform.mat;
    if (this.hierarchy) {
      var n, r = this.hierarchy.length;
      for (e = this.finalTransform.mProp.v.props, i.cloneFromProps(e), n = 0; r > n; n += 1) this.finalTransform.matMdf = this.hierarchy[n].finalTransform.mProp.mdf ? !0 : this.finalTransform.matMdf, e = this.hierarchy[n].finalTransform.mProp.v.props, i.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
    } else this.isVisible && this.finalTransform.matMdf && (t ? (e = this.finalTransform.mProp.v.props, i.cloneFromProps(e)) : i.cloneFromProps(this.finalTransform.mProp.v.props));
    return t && (e = t.mat.props, i.cloneFromProps(e), this.finalTransform.opacity *= t.opacity, this.finalTransform.opMdf = t.opMdf ? !0 : this.finalTransform.opMdf, this.finalTransform.matMdf = t.matMdf ? !0 : this.finalTransform.matMdf), this.finalTransform.matMdf && (this.layerElement.style.transform = this.layerElement.style.webkitTransform = i.toCSS()), this.finalTransform.opMdf && (this.layerElement.style.opacity = this.finalTransform.opacity), this.isVisible
  }, HBaseElement.prototype.destroy = function () {
    this.layerElement = null, this.parentContainer = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
  }, HBaseElement.prototype.getDomElement = function () {
    return this.layerElement
  }, HBaseElement.prototype.addMasks = function (t) {
    this.maskManager = new MaskElement(t, this, this.globalData)
  }, HBaseElement.prototype.hide = function () {}, HBaseElement.prototype.setMatte = function () {}, createElement(HBaseElement, HSolidElement), HSolidElement.prototype.createElements = function () {
    var t = document.createElement("div");
    styleDiv(t);
    var e = document.createElementNS(svgNS, "svg");
    e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), t.appendChild(e), this.layerElement = t, this.parentContainer.appendChild(t), this.innerElem = t, this.data.ln && this.innerElem.setAttribute("id", this.data.ln), 0 !== this.data.bm && this.setBlendMode();
    var i = document.createElementNS(svgNS, "rect");
    i.setAttribute("width", this.data.sw), i.setAttribute("height", this.data.sh), i.setAttribute("fill", this.data.sc), e.appendChild(i), this.data.hasMask && (this.maskedElement = i)
  }, HSolidElement.prototype.hide = function () {
    this.hidden || (this.innerElem.style.display = "none", this.hidden = !0)
  }, HSolidElement.prototype.renderFrame = function (t) {
    var e = this._parent.renderFrame.call(this, t);
    return e === !1 ? void this.hide() : (this.hidden && (this.hidden = !1, this.innerElem.style.display = "block"), void(this.firstFrame && (this.firstFrame = !1)))
  }, HSolidElement.prototype.destroy = function () {
    this._parent.destroy.call(), this.innerElem = null
  }, createElement(HBaseElement, HCompElement), HCompElement.prototype.getDomElement = function () {
    return this.composingElement
  }, HCompElement.prototype.getComposingElement = function () {
    return this.layerElement
  }, HCompElement.prototype.createElements = function () {
    if (this.layerElement = document.createElement("div"), styleDiv(this.layerElement), this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.layerElement.style.clip = "rect(0px, " + this.data.w + "px, " + this.data.h + "px, 0px)", this.layerElement !== this.parentContainer && (this.placeholder = null), this.data.hasMask) {
      var t = document.createElementNS(svgNS, "svg");
      t.setAttribute("width", this.data.w), t.setAttribute("height", this.data.h);
      var e = document.createElementNS(svgNS, "g");
      t.appendChild(e), this.layerElement.appendChild(t), this.maskedElement = e, this.composingElement = e
    } else this.composingElement = this.layerElement;
    this.appendNodeToParent(this.layerElement)
  }, HCompElement.prototype.hide = ICompElement.prototype.hide, HCompElement.prototype.prepareFrame = ICompElement.prototype.prepareFrame, HCompElement.prototype.setElements = ICompElement.prototype.setElements, HCompElement.prototype.getElements = ICompElement.prototype.getElements, HCompElement.prototype.destroy = ICompElement.prototype.destroy, HCompElement.prototype.renderFrame = function (t) {
    var e, i = this._parent.renderFrame.call(this, t),
      n = this.layers.length;
    if (i === !1) return void this.hide();
    for (this.hidden = !1, e = 0; n > e; e += 1) this.elements[e].renderFrame();
    this.firstFrame && (this.firstFrame = !1)
  }, createElement(HBaseElement, HShapeElement);
  var parent = HShapeElement.prototype._parent;
  extendPrototype(IShapeElement, HShapeElement), HShapeElement.prototype._parent = parent, HShapeElement.prototype.createElements = function () {
    var t = document.createElement("div");
    styleDiv(t);
    var e = document.createElementNS(svgNS, "svg");
    if (999999 === this.data.bounds.l, e.setAttribute("width", this.data.bounds.r - this.data.bounds.l), e.setAttribute("height", this.data.bounds.b - this.data.bounds.t), e.setAttribute("viewBox", this.data.bounds.l + " " + this.data.bounds.t + " " + (this.data.bounds.r - this.data.bounds.l) + " " + (this.data.bounds.b - this.data.bounds.t)), e.style.transform = e.style.webkitTransform = "translate(" + this.data.bounds.l + "px," + this.data.bounds.t + "px)", this.data.hasMask) {
      var i = document.createElementNS(svgNS, "g");
      t.appendChild(e), e.appendChild(i), this.maskedElement = i, this.layerElement = i, this.shapesContainer = i
    } else t.appendChild(e), this.layerElement = e, this.shapesContainer = document.createElementNS(svgNS, "g"), this.layerElement.appendChild(this.shapesContainer);
    this.parentContainer.appendChild(t), this.innerElem = t, this.data.ln && this.innerElem.setAttribute("id", this.data.ln), this.searchShapes(this.shapesData, this.viewData, this.dynamicProperties, []), this.buildExpressionInterface(), this.layerElement = t, 0 !== this.data.bm && this.setBlendMode()
  }, HShapeElement.prototype.renderFrame = function (t) {
    var e = this._parent.renderFrame.call(this, t);
    return e === !1 ? void this.hide() : (this.hidden = !1, this.transformHelper.opacity = this.finalTransform.opacity, this.transformHelper.matMdf = !1, this.transformHelper.opMdf = this.finalTransform.opMdf, this.renderModifiers(), void this.renderShape(this.transformHelper, null, null, !0))
  }, createElement(HBaseElement, HTextElement), HTextElement.prototype.init = ITextElement.prototype.init, HTextElement.prototype.getMeasures = ITextElement.prototype.getMeasures, HTextElement.prototype.createPathShape = ITextElement.prototype.createPathShape, HTextElement.prototype.createElements = function () {
    this.isMasked = this.checkMasks();
    var t = this.data.t.d,
      e = document.createElement("div");
    if (styleDiv(e), this.layerElement = e, this.isMasked) {
      this.renderType = "svg";
      var i = document.createElementNS(svgNS, "svg");
      this.cont = i, this.compW = this.comp.data ? this.comp.data.w : this.globalData.compSize.w, this.compH = this.comp.data ? this.comp.data.h : this.globalData.compSize.h, i.setAttribute("width", this.compW), i.setAttribute("height", this.compH);
      var n = document.createElementNS(svgNS, "g");
      i.appendChild(n), e.appendChild(i), this.maskedElement = n, this.innerElem = n
    } else this.renderType = "html", this.innerElem = e;
    this.parentContainer.appendChild(e), this.innerElem.style.color = this.innerElem.style.fill = t.fc ? "rgb(" + Math.round(255 * t.fc[0]) + "," + Math.round(255 * t.fc[1]) + "," + Math.round(255 * t.fc[2]) + ")" : "rgba(0,0,0,0)", t.sc && (this.innerElem.style.stroke = "rgb(" + Math.round(255 * t.sc[0]) + "," + Math.round(255 * t.sc[1]) + "," + Math.round(255 * t.sc[2]) + ")", this.innerElem.style.strokeWidth = t.sw + "px");
    var r = this.globalData.fontManager.getFontByName(t.f);
    if (!this.globalData.fontManager.chars)
      if (this.innerElem.style.fontSize = t.s + "px", this.innerElem.style.lineHeight = t.s + "px", r.fClass) this.innerElem.className = r.fClass;
      else {
        this.innerElem.style.fontFamily = r.fFamily;
        var s = t.fWeight,
          a = t.fStyle;
        this.innerElem.style.fontStyle = a, this.innerElem.style.fontWeight = s
      } var o, l, p = t.l;
    l = p.length;
    var h, c, u, d, m = this.mHelper,
      f = "";
    for (o = 0; l > o; o += 1) {
      if (this.globalData.fontManager.chars ? (h = document.createElementNS(svgNS, "path"), this.isMasked || (c = document.createElement("div"), u = document.createElementNS(svgNS, "svg"), c.appendChild(u), u.appendChild(h), styleDiv(c)), h.setAttribute("stroke-linecap", "butt"), h.setAttribute("stroke-linejoin", "round"), h.setAttribute("stroke-miterlimit", "4")) : this.isMasked ? h = document.createElementNS(svgNS, "text") : (c = document.createElement("span"), styleDiv(c), h = document.createElement("span"), styleDiv(h), c.appendChild(h)), this.globalData.fontManager.chars) {
        var y, g = this.globalData.fontManager.getCharData(t.t.charAt(o), r.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
        if (y = g ? g.data : null, m.reset(), y && y.shapes && (d = y.shapes[0].it, m.scale(t.s / 100, t.s / 100), f = this.createPathShape(m, d), h.setAttribute("d", f)), this.isMasked) this.innerElem.appendChild(h);
        else {
          this.innerElem.appendChild(c);
          var v = t.s / 100;
          if (y && y.shapes) {
            var x = Math.ceil(y.bounds.r * v),
              k = Math.floor(y.bounds.t * v),
              b = Math.floor(y.bounds.l * v),
              E = Math.ceil(y.bounds.b * v);
            u.setAttribute("width", x - b), u.setAttribute("height", E - k), u.setAttribute("viewBox", b + " " + k + " " + (x - b) + " " + (E - k)), u.style.transform = u.style.webkitTransform = "translate(" + b + "px," + k + "px)", p[o].yOffset = k
          } else u.setAttribute("width", 1), u.setAttribute("height", 1)
        }
      } else h.textContent = p[o].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked ? this.innerElem.appendChild(h) : (this.innerElem.appendChild(c), h.style.transform = h.style.webkitTransform = "translate3d(0," + -t.s / 1.2 + "px,0)");
      this.textSpans.push(this.isMasked ? h : c), this.textPaths.push(h)
    }
  }, HTextElement.prototype.hide = SVGTextElement.prototype.hide, HTextElement.prototype.renderFrame = function (t) {
    var e = this._parent.renderFrame.call(this, t);
    if (e === !1) return void this.hide();
    if (this.hidden && (this.hidden = !1, this.innerElem.style.display = "block"), this.data.singleShape) {
      if (!this.firstFrame) return;
      this.isMasked && this.finalTransform.matMdf && (this.cont.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), this.cont.style.transform = this.cont.style.webkitTransform = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)")
    }
    if (this.getMeasures(), this.lettersChangedFlag) {
      var i, n, r = this.renderedLetters,
        s = this.data.t.d.l;
      n = s.length;
      var a;
      for (i = 0; n > i; i += 1) s[i].n || (a = r[i], this.isMasked ? this.textSpans[i].setAttribute("transform", a.m) : this.textSpans[i].style.transform = this.textSpans[i].style.webkitTransform = a.m, this.textSpans[i].style.opacity = a.o, a.sw && this.textPaths[i].setAttribute("stroke-width", a.sw), a.sc && this.textPaths[i].setAttribute("stroke", a.sc), a.fc && (this.textPaths[i].setAttribute("fill", a.fc), this.textPaths[i].style.color = a.fc));
      if (this.isMasked) {
        var o = this.innerElem.getBBox();
        this.currentBBox.w !== o.width && (this.currentBBox.w = o.width, this.cont.setAttribute("width", o.width)), this.currentBBox.h !== o.height && (this.currentBBox.h = o.height, this.cont.setAttribute("height", o.height)), (this.currentBBox.w !== o.width || this.currentBBox.h !== o.height || this.currentBBox.x !== o.x || this.currentBBox.y !== o.y) && (this.currentBBox.w = o.width, this.currentBBox.h = o.height, this.currentBBox.x = o.x, this.currentBBox.y = o.y, this.cont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.cont.style.transform = this.cont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
      }
      this.firstFrame && (this.firstFrame = !1)
    }
  }, HTextElement.prototype.destroy = SVGTextElement.prototype.destroy, createElement(HBaseElement, HImageElement), HImageElement.prototype.createElements = function () {
    var t, e = function () {
        this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.path + this.assetData.p)
      },
      i = new Image;
    if (this.data.hasMask) {
      var t = document.createElement("div");
      styleDiv(t);
      var n = document.createElementNS(svgNS, "svg");
      n.setAttribute("width", this.assetData.w), n.setAttribute("height", this.assetData.h), t.appendChild(n), this.imageElem = document.createElementNS(svgNS, "image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), n.appendChild(this.imageElem), this.layerElement = t, this.parentContainer.appendChild(t), this.innerElem = t, this.maskedElement = this.imageElem, i.addEventListener("load", e.bind(this), !1), i.addEventListener("error", e.bind(this), !1)
    } else styleDiv(i), this.layerElement = i, this.parentContainer.appendChild(i), this.innerElem = i;
    i.src = this.path + this.assetData.p, this.data.ln && this.innerElem.setAttribute("id", this.data.ln)
  }, HImageElement.prototype.hide = HSolidElement.prototype.hide, HImageElement.prototype.renderFrame = HSolidElement.prototype.renderFrame, HImageElement.prototype.destroy = HSolidElement.prototype.destroy, createElement(HBaseElement, HCameraElement), HCameraElement.prototype.setup = function () {
    var t, e, i = this.comp.threeDElements.length;
    for (t = 0; i > t; t += 1) e = this.comp.threeDElements[t], e[0].style.perspective = e[0].style.webkitPerspective = this.pe.v + "px", e[1].style.transformOrigin = e[1].style.mozTransformOrigin = e[1].style.webkitTransformOrigin = "0px 0px 0px", e[0].style.transform = e[0].style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"
  }, HCameraElement.prototype.createElements = function () {}, HCameraElement.prototype.hide = function () {}, HCameraElement.prototype.renderFrame = function () {
    var t, e, i = this.firstFrame;
    if (this.hierarchy)
      for (e = this.hierarchy.length, t = 0; e > t; t += 1) i = this.hierarchy[t].finalTransform.mProp.mdf ? !0 : i;
    if (i || this.p && this.p.mdf || this.px && (this.px.mdf || this.py.mdf || this.pz.mdf) || this.rx.mdf || this.ry.mdf || this.rz.mdf || this.or.mdf || this.a && this.a.mdf) {
      if (this.mat.reset(), this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
        var n = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]],
          r = Math.sqrt(Math.pow(n[0], 2) + Math.pow(n[1], 2) + Math.pow(n[2], 2)),
          s = [n[0] / r, n[1] / r, n[2] / r],
          a = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
          o = Math.atan2(s[1], a),
          l = Math.atan2(s[0], -s[2]);
        this.mat.rotateY(l).rotateX(-o)
      }
      if (this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v), this.hierarchy) {
        var p;
        for (e = this.hierarchy.length, t = 0; e > t; t += 1) p = this.hierarchy[t].finalTransform.mProp.iv.props, this.mat.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], -p[12], -p[13], p[14], p[15])
      }
      e = this.comp.threeDElements.length;
      var h;
      for (t = 0; e > t; t += 1) h = this.comp.threeDElements[t], h[1].style.transform = h[1].style.webkitTransform = this.mat.toCSS()
    }
    this.firstFrame = !1
  }, HCameraElement.prototype.destroy = function () {};
  var animationManager = function () {
      function t(e) {
        var i = 0,
          n = e.target;
        for (n.removeEventListener("destroy", t); b > i;) v[i].animation === n && (v.splice(i, 1), i -= 1, b -= 1), i += 1
      }

      function e(e, i) {
        if (!e) return null;
        for (var n = 0; b > n;) {
          if (v[n].elem == e && null !== v[n].elem) return v[n].animation;
          n += 1
        }
        var r = new AnimationItem;
        return r.setData(e, i), r.addEventListener("destroy", t), v.push({
          elem: e,
          animation: r
        }), b += 1, r
      }

      function i(e) {
        var i = new AnimationItem;
        return i.setParams(e), i.addEventListener("destroy", t), v.push({
          elem: null,
          animation: i
        }), b += 1, i
      }

      function n(t, e) {
        var i;
        for (i = 0; b > i; i += 1) v[i].animation.setSpeed(t, e)
      }

      function r(t, e) {
        var i;
        for (i = 0; b > i; i += 1) v[i].animation.setDirection(t, e)
      }

      function s(t) {
        var e;
        for (e = 0; b > e; e += 1) v[e].animation.play(t)
      }

      function a(t, e) {
        k = !1, x = Date.now();
        var i;
        for (i = 0; b > i; i += 1) v[i].animation.moveFrame(t, e)
      }

      function o(t) {
        var e, i = t - x;
        for (e = 0; b > e; e += 1) v[e].animation.advanceTime(i);
        x = t, requestAnimationFrame(o)
      }

      function l(t) {
        x = t, requestAnimationFrame(o)
      }

      function p(t) {
        var e;
        for (e = 0; b > e; e += 1) v[e].animation.pause(t)
      }

      function h(t, e, i) {
        var n;
        for (n = 0; b > n; n += 1) v[n].animation.goToAndStop(t, e, i)
      }

      function c(t) {
        var e;
        for (e = 0; b > e; e += 1) v[e].animation.stop(t)
      }

      function u(t) {
        var e;
        for (e = 0; b > e; e += 1) v[e].animation.togglePause(t)
      }

      function d(t) {
        var e;
        for (e = 0; b > e; e += 1) v[e].animation.destroy(t)
      }

      function m(t, i, n) {
        var r, s = document.getElementsByClassName("bodymovin"),
          a = s.length;
        for (r = 0; a > r; r += 1) n && s[r].setAttribute("data-bm-type", n), e(s[r], t);
        if (i && 0 === a) {
          n || (n = "svg");
          var o = document.getElementsByTagName("body")[0];
          o.innerHTML = "";
          var l = document.createElement("div");
          l.style.width = "100%", l.style.height = "100%", l.setAttribute("data-bm-type", n), o.appendChild(l), e(l, t)
        }
      }

      function f() {
        var t;
        for (t = 0; b > t; t += 1) v[t].animation.resize()
      }

      function y() {
        requestAnimationFrame(l)
      }
      var g = {},
        v = [],
        x = 0,
        k = !0,
        b = 0;
      return setTimeout(y, 0), g.registerAnimation = e, g.loadAnimation = i, g.setSpeed = n, g.setDirection = r, g.play = s, g.moveFrame = a, g.pause = p, g.stop = c, g.togglePause = u, g.searchAnimations = m, g.resize = f, g.start = y, g.goToAndStop = h, g.destroy = d, g
    }(),
    AnimationItem = function () {
      this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.pendingElements = 0, this.playCount = 0, this.prerenderFramesFlag = !0, this.animationData = {}, this.layers = [], this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = randomString(10), this.scaleMode = "fit", this.timeCompleted = 0, this.segmentPos = 0, this.segments = [], this.pendingSegment = !1
    };
  AnimationItem.prototype.setParams = function (t) {
    var e = this;
    t.context && (this.context = t.context), (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
    var i = t.animType ? t.animType : t.renderer ? t.renderer : "canvas";
    switch (i) {
      case "canvas":
        this.renderer = new CanvasRenderer(this, t.rendererSettings);
        break;
      case "svg":
        this.renderer = new SVGRenderer(this, t.rendererSettings);
        break;
      case "hybrid":
      case "html":
      default:
        this.renderer = new HybridRenderer(this, t.rendererSettings)
    }
    if (this.animType = i, "" === t.loop || null === t.loop || (this.loop = t.loop === !1 ? !1 : t.loop === !0 ? !0 : parseInt(t.loop)), this.autoplay = "autoplay" in t ? t.autoplay : !0, this.name = t.name ? t.name : "", this.prerenderFramesFlag = "prerender" in t ? t.prerender : !0, this.autoloadSegments = t.hasOwnProperty("autoloadSegments") ? t.autoloadSegments : !0, t.animationData) e.configAnimation(t.animationData);
    else if (t.path) {
      "json" != t.path.substr(-4) && ("/" != t.path.substr(-1, 1) && (t.path += "/"), t.path += "data.json");
      var n = new XMLHttpRequest;
      this.path = -1 != t.path.lastIndexOf("\\") ? t.path.substr(0, t.path.lastIndexOf("\\") + 1) : t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), n.open("GET", t.path, !0), n.send(), n.onreadystatechange = function () {
        if (4 == n.readyState)
          if (200 == n.status) e.configAnimation(JSON.parse(n.responseText));
          else try {
            var t = JSON.parse(n.responseText);
            e.configAnimation(t)
          } catch (i) {}
      }
    }
  }, AnimationItem.prototype.setData = function (t, e) {
    var i = {
        wrapper: t,
        animationData: e ? "object" == typeof e ? e : JSON.parse(e) : null
      },
      n = t.attributes;
    i.path = n.getNamedItem("data-animation-path") ? n.getNamedItem("data-animation-path").value : n.getNamedItem("data-bm-path") ? n.getNamedItem("data-bm-path").value : n.getNamedItem("bm-path") ? n.getNamedItem("bm-path").value : "", i.animType = n.getNamedItem("data-anim-type") ? n.getNamedItem("data-anim-type").value : n.getNamedItem("data-bm-type") ? n.getNamedItem("data-bm-type").value : n.getNamedItem("bm-type") ? n.getNamedItem("bm-type").value : n.getNamedItem("data-bm-renderer") ? n.getNamedItem("data-bm-renderer").value : n.getNamedItem("bm-renderer") ? n.getNamedItem("bm-renderer").value : "canvas";
    var r = n.getNamedItem("data-anim-loop") ? n.getNamedItem("data-anim-loop").value : n.getNamedItem("data-bm-loop") ? n.getNamedItem("data-bm-loop").value : n.getNamedItem("bm-loop") ? n.getNamedItem("bm-loop").value : "";
    "" === r || (i.loop = "false" === r ? !1 : "true" === r ? !0 : parseInt(r));
    var s = n.getNamedItem("data-anim-autoplay") ? n.getNamedItem("data-anim-autoplay").value : n.getNamedItem("data-bm-autoplay") ? n.getNamedItem("data-bm-autoplay").value : n.getNamedItem("bm-autoplay") ? n.getNamedItem("bm-autoplay").value : !0;
    i.autoplay = "false" !== s, i.name = n.getNamedItem("data-name") ? n.getNamedItem("data-name").value : n.getNamedItem("data-bm-name") ? n.getNamedItem("data-bm-name").value : n.getNamedItem("bm-name") ? n.getNamedItem("bm-name").value : "";
    var a = n.getNamedItem("data-anim-prerender") ? n.getNamedItem("data-anim-prerender").value : n.getNamedItem("data-bm-prerender") ? n.getNamedItem("data-bm-prerender").value : n.getNamedItem("bm-prerender") ? n.getNamedItem("bm-prerender").value : "";
    "false" === a && (i.prerender = !1), this.setParams(i)
  }, AnimationItem.prototype.includeLayers = function (t) {
    t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip), this.animationData.tf = this.totalFrames);
    var e, i, n = this.animationData.layers,
      r = n.length,
      s = t.layers,
      a = s.length;
    for (i = 0; a > i; i += 1)
      for (e = 0; r > e;) {
        if (n[e].id == s[i].id) {
          n[e] = s[i];
          break
        }
        e += 1
      }
    if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
      for (r = t.assets.length, e = 0; r > e; e += 1) this.animationData.assets.push(t.assets[e]);
    dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), this.renderer.buildStage(this.container, this.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.renderFrame(null), this.loadNextSegment()
  }, AnimationItem.prototype.loadNextSegment = function () {
    var t = this.animationData.segments;
    if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.animationData.tf);
    var e = t.shift();
    this.timeCompleted = e.time * this.frameRate;
    var i = new XMLHttpRequest,
      n = this,
      r = this.path + this.fileName + "_" + this.segmentPos + ".json";
    this.segmentPos += 1, i.open("GET", r, !0), i.send(), i.onreadystatechange = function () {
      if (4 == i.readyState)
        if (200 == i.status) n.includeLayers(JSON.parse(i.responseText));
        else try {
          var t = JSON.parse(i.responseText);
          n.includeLayers(t)
        } catch (e) {}
    }
  }, AnimationItem.prototype.loadSegments = function () {
    var t = this.animationData.segments;
    t || (this.timeCompleted = this.animationData.tf), this.loadNextSegment()
  }, AnimationItem.prototype.configAnimation = function (t) {
    this.animationData = t, this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.animationData.tf = this.totalFrames, this.renderer.configAnimation(t), t.assets || (t.assets = []), t.comps && (t.assets = t.assets.concat(t.comps), t.comps = null), this.layers = this.animationData.layers, this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.firstFrame = Math.round(this.animationData.ip), this.frameMult = this.animationData.fr / 1e3, this.trigger("config_ready"), this.loadSegments(), this.updaFrameModifier(), this.renderer.globalData.fontManager ? this.waitForFontsLoaded() : (dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.checkLoaded())
  }, AnimationItem.prototype.waitForFontsLoaded = function () {
    function t() {
      this.renderer.globalData.fontManager.loaded ? (dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.buildItems(this.animationData.layers), this.checkLoaded()) : setTimeout(t.bind(this), 20)
    }
    return function () {
      t.bind(this)()
    }
  }(), AnimationItem.prototype.elementLoaded = function () {
    this.pendingElements--, this.checkLoaded()
  }, AnimationItem.prototype.checkLoaded = function () {
    0 === this.pendingElements && (this.renderer.buildStage(this.container, this.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.trigger("DOMLoaded"), this.isLoaded = !0, this.gotoFrame(), this.autoplay && this.play())
  }, AnimationItem.prototype.resize = function () {
    this.renderer.updateContainerSize()
  }, AnimationItem.prototype.gotoFrame = function () {
    this.currentFrame = subframeEnabled ? this.currentRawFrame : Math.floor(this.currentRawFrame), this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame()
  }, AnimationItem.prototype.renderFrame = function () {
    this.isLoaded !== !1 && this.renderer.renderFrame(this.currentFrame + this.firstFrame)
  }, AnimationItem.prototype.play = function (t) {
    t && this.name != t || this.isPaused === !0 && (this.isPaused = !1)
  }, AnimationItem.prototype.pause = function (t) {
    t && this.name != t || this.isPaused === !1 && (this.isPaused = !0)
  }, AnimationItem.prototype.togglePause = function (t) {
    t && this.name != t || (this.isPaused === !0 ? (this.isPaused = !1, this.play()) : (this.isPaused = !0, this.pause()))
  }, AnimationItem.prototype.stop = function (t) {
    t && this.name != t || (this.isPaused = !0, this.currentFrame = this.currentRawFrame = 0, this.playCount = 0, this.gotoFrame())
  }, AnimationItem.prototype.goToAndStop = function (t, e, i) {
    i && this.name != i || (this.setCurrentRawFrameValue(e ? t : t * this.frameModifier), this.isPaused = !0)
  }, AnimationItem.prototype.goToAndPlay = function (t, e, i) {
    this.goToAndStop(t, e, i), this.play()
  }, AnimationItem.prototype.advanceTime = function (t) {
    return this.pendingSegment ? (this.pendingSegment = !1, this.adjustSegment(this.segments.shift()), void(this.isPaused && this.play())) : void(this.isPaused !== !0 && this.isLoaded !== !1 && this.setCurrentRawFrameValue(this.currentRawFrame + t * this.frameModifier))
  }, AnimationItem.prototype.updateAnimation = function (t) {
    this.setCurrentRawFrameValue(this.totalFrames * t)
  }, AnimationItem.prototype.moveFrame = function (t, e) {
    e && this.name != e || this.setCurrentRawFrameValue(this.currentRawFrame + t)
  }, AnimationItem.prototype.adjustSegment = function (t) {
    this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .01)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.firstFrame = t[0], this.setCurrentRawFrameValue(0)), this.trigger("segmentStart")
  }, AnimationItem.prototype.playSegments = function (t, e) {
    if ("object" == typeof t[0]) {
      var i, n = t.length;
      for (i = 0; n > i; i += 1) this.segments.push(t[i])
    } else this.segments.push(t);
    e && this.adjustSegment(this.segments.shift()), this.isPaused && this.play()
  }, AnimationItem.prototype.resetSegments = function (t) {
    this.segments.length = 0, this.segments.push([this.animationData.ip * this.frameRate, Math.floor(this.animationData.op - this.animationData.ip + this.animationData.ip * this.frameRate)]), t && this.adjustSegment(this.segments.shift())
  }, AnimationItem.prototype.checkSegments = function () {
    this.segments.length && (this.pendingSegment = !0)
  }, AnimationItem.prototype.remove = function (t) {
    t && this.name != t || this.renderer.destroy()
  }, AnimationItem.prototype.destroy = function (t) {
    t && this.name != t || this.renderer && this.renderer.destroyed || (this.renderer.destroy(), this.trigger("destroy"), this._cbs = null)
  }, AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
    if (this.currentRawFrame = t, this.currentRawFrame >= this.totalFrames) {
      if (this.checkSegments(), this.loop === !1) return this.currentRawFrame = this.totalFrames - .01, this.gotoFrame(), this.pause(), void this.trigger("complete");
      if (this.trigger("loopComplete"), this.playCount += 1, this.loop !== !0 && this.playCount == this.loop || this.pendingSegment) return this.currentRawFrame = this.totalFrames - .01, this.gotoFrame(), this.pause(), void this.trigger("complete");
      this.currentRawFrame = this.currentRawFrame % this.totalFrames
    } else if (this.currentRawFrame < 0) return this.checkSegments(), this.playCount -= 1, this.playCount < 0 && (this.playCount = 0), this.loop === !1 || this.pendingSegment ? (this.currentRawFrame = 0, this.gotoFrame(), this.pause(), void this.trigger("complete")) : (this.trigger("loopComplete"), this.currentRawFrame = (this.totalFrames + this.currentRawFrame) % this.totalFrames, void this.gotoFrame());
    this.gotoFrame()
  }, AnimationItem.prototype.setSpeed = function (t) {
    this.playSpeed = t, this.updaFrameModifier()
  }, AnimationItem.prototype.setDirection = function (t) {
    this.playDirection = 0 > t ? -1 : 1, this.updaFrameModifier()
  }, AnimationItem.prototype.updaFrameModifier = function () {
    this.frameModifier = this.frameMult * this.playSpeed * this.playDirection
  }, AnimationItem.prototype.getPath = function () {
    return this.path
  }, AnimationItem.prototype.getAssetData = function (t) {
    for (var e = 0, i = this.assets.length; i > e;) {
      if (t == this.assets[e].id) return this.assets[e];
      e += 1
    }
  }, AnimationItem.prototype.hide = function () {
    this.renderer.hide()
  }, AnimationItem.prototype.show = function () {
    this.renderer.show()
  }, AnimationItem.prototype.getAssets = function () {
    return this.assets
  }, AnimationItem.prototype.trigger = function (t) {
    if (this._cbs[t]) switch (t) {
      case "enterFrame":
        this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult));
        break;
      case "loopComplete":
        this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
        break;
      case "complete":
        this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
        break;
      case "segmentStart":
        this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
        break;
      case "destroy":
        this.triggerEvent(t, new BMDestroyEvent(t, this));
        break;
      default:
        this.triggerEvent(t)
    }
    "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
  }, AnimationItem.prototype.addEventListener = _addEventListener, AnimationItem.prototype.removeEventListener = _removeEventListener, AnimationItem.prototype.triggerEvent = _triggerEvent;
  var Expressions = function () {
    function t(e) {
      var i, n = e.length;
      for (i = 0; n > i; i += 1) e[i].layerInterface || (e[i].layerInterface = LayerExpressionInterface(e[i]), e[i].data.hasMask && e[i].layerInterface.registerMaskInterface(e[i].maskManager), 0 === e[i].data.ty ? e[i].compInterface = CompExpressionInterface(e[i]) : 4 === e[i].data.ty && (e[i].layerInterface.shapeInterface = ShapeExpressionInterface.createShapeInterface(e[i].shapesData, e[i].viewData, e[i].layerInterface))), 0 === e[i].data.ty && t(e[i].elements)
    }

    function e(e) {
      e.renderer.compInterface = CompExpressionInterface(e.renderer), t(e.renderer.elements)
    }

    function i(t, e, i) {
      return new EffectsManager(t, e, i)
    }
    var n = {};
    return n.initExpressions = e, n.getEffectsManager = i, n
  }();
  expressionsPlugin = Expressions,
    function () {
      function t(t) {
        for (var e, i, n = 0, r = this.keyframes.length - 1, s = 1, a = !0, o = 0, l = "object" == typeof this.pv ? [this.pv.length] : 0; a;) {
          if (e = this.keyframes[n], i = this.keyframes[n + 1], n == r - 1 && t >= i.t - o) {
            e.h && (e = i);
            break
          }
          if (i.t - o > t) break;
          r - 1 > n ? n += s : a = !1
        }
        var p, h, c, u, d, m = 0;
        if (e.to) {
          e.bezierData || bez.buildBezierData(e);
          var f = e.bezierData;
          if (t >= i.t - o || t < e.t - o) {
            var y = t >= i.t - o ? f.points.length - 1 : 0;
            for (h = f.points[y].point.length, p = 0; h > p; p += 1) l[p] = f.points[y].point[p]
          } else {
            e.__fnct ? d = e.__fnct : (d = BezierFactory.getBezierEasing(e.o.x, e.o.y, e.i.x, e.i.y, e.n).get, e.__fnct = d), c = d((t - (e.t - o)) / (i.t - o - (e.t - o)));
            var g, v = f.segmentLength * c,
              x = 0;
            for (s = 1, a = !0, u = f.points.length; a;) {
              if (x += f.points[m].partialLength * s, 0 === v || 0 === c || m == f.points.length - 1) {
                for (h = f.points[m].point.length, p = 0; h > p; p += 1) l[p] = f.points[m].point[p];
                break
              }
              if (v >= x && v < x + f.points[m + 1].partialLength) {
                for (g = (v - x) / f.points[m + 1].partialLength, h = f.points[m].point.length, p = 0; h > p; p += 1) l[p] = f.points[m].point[p] + (f.points[m + 1].point[p] - f.points[m].point[p]) * g;
                break
              }
              u - 1 > m && 1 == s || m > 0 && -1 == s ? m += s : a = !1
            }
          }
        } else {
          var k, b, E, _, S, w = !1;
          for (r = e.s.length, n = 0; r > n; n += 1) {
            if (1 !== e.h && (e.o.x instanceof Array ? (w = !0, e.__fnct || (e.__fnct = []), e.__fnct[n] || (k = e.o.x[n] || e.o.x[0], b = e.o.y[n] || e.o.y[0], E = e.i.x[n] || e.i.x[0], _ = e.i.y[n] || e.i.y[0])) : (w = !1, e.__fnct || (k = e.o.x, b = e.o.y, E = e.i.x, _ = e.i.y)), w ? e.__fnct[n] ? d = e.__fnct[n] : (d = BezierFactory.getBezierEasing(k, b, E, _).get, e.__fnct[n] = d) : e.__fnct ? d = e.__fnct : (d = BezierFactory.getBezierEasing(k, b, E, _).get, e.__fnct = d), c = t >= i.t - o ? 1 : t < e.t - o ? 0 : d((t - (e.t - o)) / (i.t - o - (e.t - o)))), this.sh && 1 !== e.h) {
              var D = e.s[n],
                A = e.e[n]; - 180 > D - A ? D += 360 : D - A > 180 && (D -= 360), S = D + (A - D) * c
            } else S = 1 === e.h ? e.s[n] : e.s[n] + (e.e[n] - e.s[n]) * c;
            1 === r ? l = S : l[n] = S
          }
        }
        return l
      }

      function e(t) {
        var e, i = .01,
          n = this.getValueAtTime(t),
          r = this.getValueAtTime(t + i);
        if (n.length) {
          e = Array.apply(null, {
            length: n.length
          });
          var s;
          for (s = 0; s < n.length; s += 1) e[s] = this.elem.globalData.frameRate * ((r[s] - n[s]) / i)
        } else e = (r - n) / i;
        return e
      }

      function i(t) {
        this.propertyGroup = t
      }

      function n(t, e, i) {
        e.x && (i.k = !0, i.x = !0, i.getValue && (i.getPreValue = i.getValue), i.getValue = ExpressionManager.initiateExpression.bind(i)(t, e, i))
      }
      var r = function () {
          function t(t, e) {
            return this.textIndex = t + 1, this.textTotal = e, this.getValue(), this.v
          }
          return function (e, i) {
            this.pv = 1, this.comp = e.comp, this.mult = .01, this.type = "textSelector", this.textTotal = i.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], n.bind(this)(e, i, this), this.getMult = t
          }
        }(),
        s = PropertyFactory.getProp;
      PropertyFactory.getProp = function (r, a, o, l, p) {
        var h = s(r, a, o, l, p);
        h.getVelocityAtTime = e, h.getValueAtTime = t, h.setGroupProperty = i;
        var c = h.k;
        return void 0 !== a.ix && Object.defineProperty(h, "propertyIndex", {
          get: function () {
            return a.ix
          }
        }), n(r, a, h), !c && h.x && p.push(h), h
      };
      var a = ShapePropertyFactory.getShapeProp;
      ShapePropertyFactory.getShapeProp = function (t, e, n, r, s) {
        var o = a(t, e, n, r, s),
          l = "tm" === o.ty ? o.prop : o;
        return l.setGroupProperty = i, void 0 !== e.ix && Object.defineProperty(l, "propertyIndex", {
          get: function () {
            return e.ix
          }
        }), o
      };
      var o = PropertyFactory.getTextSelectorProp;
      PropertyFactory.getTextSelectorProp = function (t, e, i) {
        return 1 === e.t ? new r(t, e, i) : o(t, e, i)
      }
    }();
  var ExpressionManager = function () {
      function duplicatePropertyValue(t) {
        if ("number" == typeof t) return t;
        if (t.i) return JSON.parse(JSON.stringify(t));
        var e, i = Array.apply(null, {
            length: t.length
          }),
          n = t.length;
        for (e = 0; n > e; e += 1) i[e] = t[e];
        return i
      }

      function sum(t, e) {
        var i = typeof t,
          n = typeof e;
        if ("string" === i || "string" === n) return t + e;
        if (!("number" !== i && "boolean" !== i || "number" !== n && "boolean" !== n)) return t + e;
        if ("object" === i && ("number" === n || "boolean" === n)) return t[0] = t[0] + e, t;
        if (("number" === i || "boolean" === i) && "object" === n) return e[0] = t + e[0], e;
        if ("object" === i && "object" === n) {
          for (var r = 0, s = t.length, a = e.length, o = []; s > r || a > r;) o[r] = "number" == typeof t[r] && "number" == typeof e[r] ? t[r] + e[r] : t[r] || e[r], r += 1;
          return o
        }
        return 0
      }

      function sub(t, e) {
        var i = typeof t,
          n = typeof e;
        if (!("number" !== i && "boolean" !== i || "number" !== n && "boolean" !== n)) return t - e;
        if ("object" === i && ("number" === n || "boolean" === n)) return t[0] = t[0] - e, t;
        if (("number" === i || "boolean" === i) && "object" === n) return e[0] = t - e[0], e;
        if ("object" === i && "object" === n) {
          for (var r = 0, s = t.length, a = e.length, o = []; s > r || a > r;) o[r] = "number" == typeof t[r] && "number" == typeof e[r] ? t[r] - e[r] : t[r] || e[r], r += 1;
          return o
        }
        return 0
      }

      function mul(t, e) {
        var i = typeof t,
          n = typeof e;
        if (!("number" !== i && "boolean" !== i || "number" !== n && "boolean" !== n)) return t * e;
        var r, s;
        if ("object" === i && ("number" === n || "boolean" === n)) {
          for (s = t.length, arr = Array.apply(null, {
              length: s
            }), r = 0; s > r; r += 1) arr[r] = t[r] * e;
          return arr
        }
        if (("number" === i || "boolean" === i) && "object" === n) {
          for (s = e.length, arr = Array.apply(null, {
              length: s
            }), r = 0; s > r; r += 1) arr[r] = t * e[r];
          return arr
        }
        return 0
      }

      function div(t, e) {
        var i = typeof t,
          n = typeof e;
        if (!("number" !== i && "boolean" !== i || "number" !== n && "boolean" !== n)) return t / e;
        var r, s;
        if ("object" === i && ("number" === n || "boolean" === n)) {
          for (s = t.length, arr = Array.apply(null, {
              length: s
            }), r = 0; s > r; r += 1) arr[r] = t[r] / e;
          return arr
        }
        if (("number" === i || "boolean" === i) && "object" === n) {
          for (s = e.length, arr = Array.apply(null, {
              length: s
            }), r = 0; s > r; r += 1) arr[r] = t / e[r];
          return arr
        }
        return 0
      }

      function clamp(t, e, i) {
        if (e > i) {
          var n = i;
          i = e, e = n
        }
        return Math.min(Math.max(t, e), i)
      }

      function radiansToDegrees(t) {
        return t / degToRads
      }

      function length(t, e) {
        var i, n = Math.min(t.length, e.length),
          r = 0;
        for (i = 0; n > i; i += 1) r += Math.pow(e[i] - t[i], 2);
        return Math.sqrt(r)
      }

      function rgbToHsl(t) {
        var e, i, n = t[0],
          r = t[1],
          s = t[2],
          a = Math.max(n, r, s),
          o = Math.min(n, r, s),
          l = (a + o) / 2;
        if (a == o) e = i = 0;
        else {
          var p = a - o;
          switch (i = l > .5 ? p / (2 - a - o) : p / (a + o), a) {
            case n:
              e = (r - s) / p + (s > r ? 6 : 0);
              break;
            case r:
              e = (s - n) / p + 2;
              break;
            case s:
              e = (n - r) / p + 4
          }
          e /= 6
        }
        return [e, i, l, t[3]]
      }

      function hslToRgb(t) {
        function e(t, e, i) {
          return 0 > i && (i += 1), i > 1 && (i -= 1), 1 / 6 > i ? t + 6 * (e - t) * i : .5 > i ? e : 2 / 3 > i ? t + 6 * (e - t) * (2 / 3 - i) : t
        }
        var i, n, r, s = t[0],
          a = t[1],
          o = t[2];
        if (0 == a) i = n = r = o;
        else {
          var l = .5 > o ? o * (1 + a) : o + a - o * a,
            p = 2 * o - l;
          i = e(p, l, s + 1 / 3), n = e(p, l, s), r = e(p, l, s - 1 / 3)
        }
        return [i, n, r, t[3]]
      }

      function linear(t, e, i, n, r) {
        if (void 0 === n || void 0 === r) return linear(t, 0, 1, e, i);
        if (e >= t) return n;
        if (t >= i) return r;
        var s = t / (i - e);
        if (!n.length) return n + (r - n) * s;
        var a, o = n.length,
          l = Array.apply(null, {
            length: o
          });
        for (a = 0; o > a; a += 1) l[a] = n[a] + (r[a] - n[a]) * s;
        return l
      }

      function seedRandom(t) {
        BMMath.seedrandom(t)
      }

      function random(t, e) {
        if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
          var i, n = e.length;
          t || (t = Array.apply(null, {
            length: n
          }));
          var r = Array.apply(null, {
              length: n
            }),
            s = BMMath.random();
          for (i = 0; n > i; i += 1) r[i] = t[i] + s * (e[i] - t[i]);
          return r
        }
        void 0 === t && (t = 0);
        var a = BMMath.random();
        return t + a * (e - t)
      }

      function initiateExpression(elem, data, property) {
        function effect(t) {
          return elem.effectsManager(t)
        }

        function lookAt(t, e) {
          var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
            n = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads,
            r = -Math.atan2(i[1], i[2]) / degToRads;
          return [r, n, 0]
        }

        function easeOut(t, e, i) {
          return -(i - e) * t * (t - 2) + e
        }

        function nearestKey(t) {
          var e, i, n = data.k.length;
          if (data.k.length && "number" != typeof data.k[0])
            for (e = 0; n > e; e += 1) {
              if (t === data.k[e].t) {
                i = e + 1;
                break
              }
              if (t < data.k[e].t) {
                i = e + 1;
                break
              }
              if (t > data.k[e].t && e === n - 1) {
                i = n;
                break
              }
            } else i = 0;
          var r = {};
          return r.index = i, r
        }

        function key(t) {
          if (!data.k.length || "number" == typeof data.k[0]) return {
            time: 0
          };
          t -= 1;
          var e, i = {
            time: data.k[t].t / elem.comp.globalData.frameRate
          };
          e = t === data.k.length - 1 ? data.k[t - 1].e : data.k[t].s;
          var n, r = e.length;
          for (n = 0; r > n; n += 1) i[n] = e[n];
          return i
        }

        function framesToTime(t, e) {
          return e || (e = elem.comp.globalData.frameRate), t / e
        }

        function timeToFrames(t, e) {
          return t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
        }

        function execute() {
          if (this.frameExpressionId !== elem.globalData.frameId || "textSelector" === this.type) {
            if (this.lock) return this.v = duplicatePropertyValue(this.pv), !0;
            "textSelector" === this.type && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), transform || (transform = elem.transform), thisLayer || (thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), this.lock = !0, this.getPreValue && this.getPreValue(), value = this.pv, time = this.comp.renderedFrame / this.comp.globalData.frameRate, bindedFn(), "object" == typeof this.v && isNaN(this.v[0]), this.frameExpressionId = elem.globalData.frameId;
            var t, e;
            if (this.mult)
              if ("number" == typeof this.v) this.v *= this.mult;
              else
                for (e = this.v.length, value === this.v && (this.v = 2 === e ? [value[0], value[1]] : [value[0], value[1], value[2]]), t = 0; e > t; t += 1) this.v[t] *= this.mult;
            if ("number" == typeof this.v) this.lastValue !== this.v && (this.lastValue = this.v, this.mdf = !0);
            else if (this.v.i) this.mdf = !0;
            else
              for (e = this.v.length, t = 0; e > t; t += 1) this.v[t] !== this.lastValue[t] && (this.lastValue[t] = this.v[t], this.mdf = !0);
            this.lock = !1
          }
        }
        var val = data.x,
          elemType = elem.data.ty,
          transform, content, effect, thisComp = elem.comp,
          thisProperty = property;
        elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate;
        var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
          outPoint = elem.data.op / elem.comp.globalData.frameRate,
          thisLayer, thisComp, fnStr = "var fn = function(){" + val + ";this.v = $bm_rt;}";
        eval(fnStr);
        var bindedFn = fn.bind(this),
          numKeys = data.k ? data.k.length : 0,
          wiggle = function (t, e) {
            var i, n, r = this.pv.length ? this.pv.length : 1,
              s = Array.apply(null, {
                len: r
              });
            for (n = 0; r > n; n += 1) s[n] = 0;
            t = 5;
            var a = Math.floor(time * t);
            for (i = 0, n = 0; a > i;) {
              for (n = 0; r > n; n += 1) s[n] += -e + 2 * e * BMMath.random();
              i += 1
            }
            var o = time * t,
              l = o - Math.floor(o),
              p = Array.apply({
                length: r
              });
            for (n = 0; r > n; n += 1) p[n] = this.pv[n] + s[n] + (-e + 2 * e * BMMath.random()) * l;
            return p
          }.bind(this),
          loopIn = function (t, e, i) {
            if (!this.k) return this.pv;
            var n = time * elem.comp.globalData.frameRate,
              r = this.keyframes,
              s = r[0].t;
            if (n >= s) return this.pv;
            var a, o;
            i ? (a = e ? Math.abs(elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - s), o = s + a) : ((!e || e > r.length - 1) && (e = r.length - 1), o = r[e].t, a = o - s);
            var l, p, h;
            if ("pingpong" === t) {
              var c = Math.floor((s - n) / a);
              if (0 === c % 2) return this.getValueAtTime((s - n) % a + s)
            } else {
              if ("offset" === t) {
                var u = this.getValueAtTime(s),
                  d = this.getValueAtTime(o),
                  m = this.getValueAtTime(a - (s - n) % a + s),
                  f = Math.floor((s - n) / a) + 1;
                if (this.pv.length) {
                  for (h = new Array(u.length), p = h.length, l = 0; p > l; l += 1) h[l] = m[l] - (d[l] - u[l]) * f;
                  return h
                }
                return m - (d - u) * f
              }
              if ("continue" === t) {
                var y = this.getValueAtTime(s),
                  g = this.getValueAtTime(s + .001);
                if (this.pv.length) {
                  for (h = new Array(y.length), p = h.length, l = 0; p > l; l += 1) h[l] = y[l] + (y[l] - g[l]) * (s - n) / 5e-4;
                  return h
                }
                return y + (y - g) * (s - n) / 5e-4
              }
            }
            return this.getValueAtTime(a - (s - n) % a + s)
          }.bind(this),
          loopInDuration = function (t, e) {
            return loopIn(t, e, !0)
          }.bind(this),
          loopOut = function (t, e, i) {
            if (!this.k) return this.pv;
            var n = time * elem.comp.globalData.frameRate,
              r = this.keyframes,
              s = r[r.length - 1].t;
            if (s >= n) return this.pv;
            var a, o;
            i ? (a = e ? Math.abs(s - elem.comp.globalData.frameRate * e) : Math.max(0, s - this.elem.data.ip), o = s - a) : ((!e || e > r.length - 1) && (e = r.length - 1), o = r[r.length - 1 - e].t, a = s - o);
            var l, p, h;
            if ("pingpong" === t) {
              var c = Math.floor((n - o) / a);
              if (0 !== c % 2) return this.getValueAtTime(a - (n - o) % a + o)
            } else {
              if ("offset" === t) {
                var u = this.getValueAtTime(o),
                  d = this.getValueAtTime(s),
                  m = this.getValueAtTime((n - o) % a + o),
                  f = Math.floor((n - o) / a);
                if (this.pv.length) {
                  for (h = new Array(u.length), p = h.length, l = 0; p > l; l += 1) h[l] = (d[l] - u[l]) * f + m[l];
                  return h
                }
                return (d - u) * f + m
              }
              if ("continue" === t) {
                var y = this.getValueAtTime(s),
                  g = this.getValueAtTime(s - .001);
                if (this.pv.length) {
                  for (h = new Array(y.length), p = h.length, l = 0; p > l; l += 1) h[l] = y[l] + (y[l] - g[l]) * (n - s) / 5e-4;
                  return h
                }
                return y + (y - g) * (n - s) / 5e-4
              }
            }
            return this.getValueAtTime((n - o) % a + o)
          }.bind(this),
          loop_out = loopOut,
          loopOutDuration = function (t, e) {
            return loopOut(t, e, !0)
          }.bind(this),
          valueAtTime = function (t) {
            return this.getValueAtTime(t * elem.comp.globalData.frameRate)
          }.bind(this),
          velocityAtTime = function (t) {
            return this.getVelocityAtTime(t * elem.comp.globalData.frameRate)
          }.bind(this),
          time, value, textIndex, textTotal, selectorValue, index = elem.data.ind + 1,
          hasParent = !(!elem.hierarchy || !elem.hierarchy.length);
        return execute
      }
      var ob = {};
      return ob.initiateExpression = initiateExpression, ob
    }(),
    ShapeExpressionInterface = function () {
      function t(t, e, i) {
        return c(t, e, i)
      }

      function e(t, e, i) {
        return u(t, e, i)
      }

      function i(t, e, i) {
        return d(t, e, i)
      }

      function n(t, e, i) {
        return m(t, e, i)
      }

      function r(t, e, i) {
        return f(t, e, i)
      }

      function s(t, e, i) {
        return y(t, e, i)
      }

      function a(t, e, i) {
        return g(t, e, i)
      }

      function o(t, e, i) {
        return v(t, e, i)
      }

      function l(t, e, i) {
        return x(t, e, i)
      }

      function p(t, e, i) {
        var n, r = [],
          s = t.length;
        for (n = 0; s > n; n += 1) "gr" == t[n].ty ? r.push(ShapeExpressionInterface.createGroupInterface(t[n], e[n], i)) : "fl" == t[n].ty ? r.push(ShapeExpressionInterface.createFillInterface(t[n], e[n], i)) : "st" == t[n].ty ? r.push(ShapeExpressionInterface.createStrokeInterface(t[n], e[n], i)) : "tm" == t[n].ty ? r.push(ShapeExpressionInterface.createTrimInterface(t[n], e[n], i)) : "tr" == t[n].ty ? r.push(ShapeExpressionInterface.createTransformInterface(t[n], e[n], i)) : "el" == t[n].ty ? r.push(ShapeExpressionInterface.createEllipseInterface(t[n], e[n], i)) : "sr" == t[n].ty ? r.push(ShapeExpressionInterface.createStarInterface(t[n], e[n], i)) : "sh" == t[n].ty && r.push(ShapeExpressionInterface.createPathInterface(t[n], e[n], i));
        return r
      }
      var h = {
          createShapeInterface: t,
          createGroupInterface: e,
          createTrimInterface: r,
          createStrokeInterface: n,
          createTransformInterface: s,
          createEllipseInterface: a,
          createStarInterface: o,
          createPathInterface: l,
          createFillInterface: i
        },
        c = function () {
          return function (t, e, i) {
            function n(t) {
              if ("number" == typeof t) return r[t - 1];
              for (var e = 0, i = r.length; i > e;) {
                if (r[e]._name === t) return r[e];
                e += 1
              }
            }
            var r;
            return n.propertyGroup = i, r = p(t, e, n), n
          }
        }(),
        u = function () {
          return function (t, e, i) {
            var n, r = function (t) {
              if ("ADBE Vectors Group" === t) return r;
              if ("ADBE Vector Transform Group" === t) {
                for (var e = 0, i = n.length; i > e;) {
                  if ("tr" === n[e].ty) return n[e];
                  e += 1
                }
                return null
              }
              if ("number" == typeof t) return n[t - 1];
              for (var e = 0, i = n.length; i > e;) {
                if (n[e]._name === t) return n[e];
                e += 1
              }
            };
            return r.propertyGroup = function (t) {
              return 1 === t ? r : i(t - 1)
            }, n = p(t.it, e.it, r.propertyGroup), Object.defineProperty(r, "_name", {
              get: function () {
                return t.nm
              }
            }), r.content = r, r.nm = t.nm, r
          }
        }(),
        d = function () {
          return function (t, e, i) {
            e.c.setGroupProperty(i), e.o.setGroupProperty(i);
            var n = {
              get color() {
                return e.c.k && e.c.getValue(), [e.c.v[0] / e.c.mult, e.c.v[1] / e.c.mult, e.c.v[2] / e.c.mult, 1]
              },
              get opacity() {
                return e.o.k && e.o.getValue(), e.o.v
              },
              _name: t.nm
            };
            return n
          }
        }(),
        m = function () {
          return function (t, e, i) {
            e.c.setGroupProperty(i), e.o.setGroupProperty(i), e.w.setGroupProperty(i);
            var n = {
              get color() {
                return e.c.k && e.c.getValue(), [e.c.v[0] / e.c.mult, e.c.v[1] / e.c.mult, e.c.v[2] / e.c.mult, 1]
              },
              get opacity() {
                return e.o.k && e.o.getValue(), e.o.v
              },
              get strokeWidth() {
                return e.w.k && e.w.getValue(), e.w.v
              },
              dashOb: {},
              get dash() {
                var n, r = e.d,
                  s = t.d,
                  a = s.length;
                for (n = 0; a > n; n += 1) r.dataProps[n].p.k && r.dataProps[n].p.getValue(), r.dataProps[n].p.setGroupProperty(i), this.dashOb[s[n].nm] = r.dataProps[n].p.v;
                return this.dashOb
              },
              _name: t.nm
            };
            return n
          }
        }(),
        f = function () {
          return function (t, e, i) {
            function n(t) {
              return 1 == t ? n : i(--t)
            }

            function r(e) {
              return e === t.e.ix ? r.end : e === t.s.ix ? r.start : e === t.o.ix ? r.offset : void 0
            }
            return n.propertyIndex = t.ix, e.s.setGroupProperty(n), e.e.setGroupProperty(n), e.o.setGroupProperty(n), Object.defineProperty(r, "start", {
              get: function () {
                return e.s.k && e.s.getValue(), e.s.v / e.s.mult
              }
            }), Object.defineProperty(r, "end", {
              get: function () {
                return e.e.k && e.e.getValue(), e.e.v / e.e.mult
              }
            }), Object.defineProperty(r, "offset", {
              get: function () {
                return e.o.k && e.o.getValue(), e.o.v
              }
            }), Object.defineProperty(r, "_name", {
              get: function () {
                return t.nm
              }
            }), r
          }
        }(),
        y = function () {
          return function (t, e, i) {
            function n(t) {
              return 1 == t ? n : i(--t)
            }

            function r(e) {
              return t.a.ix === e ? r.anchorPoint : t.o.ix === e ? r.opacity : t.p.ix === e ? r.position : t.r.ix === e ? r.rotation : t.s.ix === e ? r.scale : t.sk && t.sk.ix === e ? r.skew : t.sa && t.sa.ix === e ? r.skewAxis : void 0
            }
            e.transform.mProps.o.setGroupProperty(n), e.transform.mProps.p.setGroupProperty(n), e.transform.mProps.a.setGroupProperty(n), e.transform.mProps.s.setGroupProperty(n), e.transform.mProps.r.setGroupProperty(n), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(n), e.transform.mProps.sa.setGroupProperty(n)), e.transform.op.setGroupProperty(n), Object.defineProperty(r, "opacity", {
              get: function () {
                return e.transform.mProps.o.k && e.transform.mProps.o.getValue(), e.transform.mProps.o.v
              }
            }), Object.defineProperty(r, "position", {
              get: function () {
                return e.transform.mProps.p.k && e.transform.mProps.p.getValue(), [e.transform.mProps.p.v[0], e.transform.mProps.p.v[1]]
              }
            }), Object.defineProperty(r, "anchorPoint", {
              get: function () {
                return e.transform.mProps.a.k && e.transform.mProps.a.getValue(), [e.transform.mProps.a.v[0], e.transform.mProps.a.v[1]]
              }
            });
            var s = [];
            return Object.defineProperty(r, "scale", {
              get: function () {
                return e.transform.mProps.s.k && e.transform.mProps.s.getValue(), s[0] = e.transform.mProps.s.v[0] / e.transform.mProps.s.mult, s[1] = e.transform.mProps.s.v[1] / e.transform.mProps.s.mult, s
              }
            }), Object.defineProperty(r, "rotation", {
              get: function () {
                return e.transform.mProps.r.k && e.transform.mProps.r.getValue(), e.transform.mProps.r.v / e.transform.mProps.r.mult
              }
            }), Object.defineProperty(r, "skew", {
              get: function () {
                return e.transform.mProps.sk.k && e.transform.mProps.sk.getValue(), e.transform.mProps.sk.v
              }
            }), Object.defineProperty(r, "skewAxis", {
              get: function () {
                return e.transform.mProps.sa.k && e.transform.mProps.sa.getValue(), e.transform.mProps.sa.v
              }
            }), Object.defineProperty(r, "_name", {
              get: function () {
                return t.nm
              }
            }), r.ty = "tr", r
          }
        }(),
        g = function () {
          return function (t, e, i) {
            function n(t) {
              return 1 == t ? n : i(--t)
            }

            function r(e) {
              return t.p.ix === e ? r.position : t.s.ix === e ? r.size : void 0
            }
            n.propertyIndex = t.ix;
            var s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
            return s.s.setGroupProperty(n), s.p.setGroupProperty(n), Object.defineProperty(r, "size", {
              get: function () {
                return s.s.k && s.s.getValue(), [s.s.v[0], s.s.v[1]]
              }
            }), Object.defineProperty(r, "position", {
              get: function () {
                return s.p.k && s.p.getValue(), [s.p.v[0], s.p.v[1]]
              }
            }), Object.defineProperty(r, "_name", {
              get: function () {
                return t.nm
              }
            }), r
          }
        }(),
        v = function () {
          return function (t, e, i) {
            function n(t) {
              return 1 == t ? n : i(--t)
            }

            function r(e) {
              return t.p.ix === e ? r.position : t.r.ix === e ? r.rotation : t.pt.ix === e ? r.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? r.outerRadius : t.os.ix === e ? r.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? r.innerRoundness : void 0 : r.innerRadius
            }
            var s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
            return n.propertyIndex = t.ix, s.or.setGroupProperty(n), s.os.setGroupProperty(n), s.pt.setGroupProperty(n), s.p.setGroupProperty(n), s.r.setGroupProperty(n), t.ir && (s.ir.setGroupProperty(n), s.is.setGroupProperty(n)), Object.defineProperty(r, "position", {
              get: function () {
                return s.p.k && s.p.getValue(), s.p.v
              }
            }), Object.defineProperty(r, "rotation", {
              get: function () {
                return s.r.k && s.r.getValue(), s.r.v / s.r.mult
              }
            }), Object.defineProperty(r, "points", {
              get: function () {
                return s.pt.k && s.pt.getValue(), s.pt.v
              }
            }), Object.defineProperty(r, "outerRadius", {
              get: function () {
                return s.or.k && s.or.getValue(), s.or.v
              }
            }), Object.defineProperty(r, "outerRoundness", {
              get: function () {
                return s.os.k && s.os.getValue(), s.os.v / s.os.mult
              }
            }), Object.defineProperty(r, "innerRadius", {
              get: function () {
                return s.ir ? (s.ir.k && s.ir.getValue(), s.ir.v) : 0
              }
            }), Object.defineProperty(r, "innerRoundness", {
              get: function () {
                return s.is ? (s.is.k && s.is.getValue(), s.is.v / s.is.mult) : 0
              }
            }), Object.defineProperty(r, "_name", {
              get: function () {
                return t.nm
              }
            }), r
          }
        }(),
        x = function () {
          return function (t, e, i) {
            var n = "tm" === e.sh.ty ? e.sh.prop : e.sh;
            n.setGroupProperty(i);
            var r = {
              get shape() {
                return n.k && n.getValue(), n.v
              },
              get path() {
                return n.k && n.getValue(), n.v
              },
              _name: t.nm
            };
            return r
          }
        }();
      return h
    }(),
    LayerExpressionInterface = function () {
      function t(t) {
        var e = new Matrix;
        if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
          var i, n = this._elem.hierarchy.length;
          for (i = 0; n > i; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e);
          return e.applyToPointArray(t[0], t[1], t[2] || 0)
        }
        return e.applyToPointArray(t[0], t[1], t[2] || 0)
      }
      return function (e) {
        function i(t) {
          n.mask = t.getMask.bind(t)
        }

        function n(t) {
          switch (t) {
            case "ADBE Root Vectors Group":
              return n.shapeInterface;
            case 4:
              return e.effectsManager
          }
        }
        return n.toWorld = t, n.toComp = t, n._elem = e, Object.defineProperty(n, "hasParent", {
          get: function () {
            return !!e.hierarchy
          }
        }), Object.defineProperty(n, "parent", {
          get: function () {
            return e.hierarchy[0].layerInterface
          }
        }), Object.defineProperty(n, "rotation", {
          get: function () {
            return e.transform.rotation
          }
        }), Object.defineProperty(n, "scale", {
          get: function () {
            return e.transform.scale
          }
        }), Object.defineProperty(n, "position", {
          get: function () {
            return e.transform.position
          }
        }), Object.defineProperty(n, "anchorPoint", {
          get: function () {
            return e.transform.anchorPoint
          }
        }), Object.defineProperty(n, "transform", {
          get: function () {
            return e.transform
          }
        }), Object.defineProperty(n, "_name", {
          value: e.data.nm
        }), Object.defineProperty(n, "content", {
          get: function () {
            return n.shapeInterface
          }
        }), n.effect = e.effectsManager, n.active = !0, n.registerMaskInterface = i, n
      }
    }(),
    CompExpressionInterface = function () {
      return function (t) {
        function e(e) {
          for (var i = 0, n = t.layers.length; n > i;) {
            if (t.layers[i].nm === e) return t.elements[i].layerInterface;
            i += 1
          }
        }
        return e.layer = e, e.pixelAspect = 1, e.height = t.globalData.compSize.h, e.width = t.globalData.compSize.w, e.pixelAspect = 1, e
      }
    }();
  SliderEffect.prototype.proxyFunction = function () {
    if (this.p.k && this.p.getValue(), "number" == typeof this.p.v) return this.p.v;
    var t, e = this.p.v.length,
      i = Array.apply(null, {
        length: e
      });
    for (t = 0; e > t; t += 1) i[t] = this.p.v[t];
    return i
  }, AngleEffect.prototype.proxyFunction = SliderEffect.prototype.proxyFunction, ColorEffect.prototype.proxyFunction = SliderEffect.prototype.proxyFunction, PointEffect.prototype.proxyFunction = SliderEffect.prototype.proxyFunction, CheckboxEffect.prototype.proxyFunction = SliderEffect.prototype.proxyFunction;
  var bodymovinjs = {};
  bodymovinjs.play = play, bodymovinjs.pause = pause, bodymovinjs.togglePause = togglePause, bodymovinjs.setSpeed = setSpeed, bodymovinjs.setDirection = setDirection, bodymovinjs.stop = stop, bodymovinjs.moveFrame = moveFrame, bodymovinjs.searchAnimations = searchAnimations, bodymovinjs.registerAnimation = registerAnimation, bodymovinjs.loadAnimation = loadAnimation, bodymovinjs.setSubframeRendering = setSubframeRendering, bodymovinjs.resize = resize, bodymovinjs.start = start, bodymovinjs.goToAndStop = goToAndStop, bodymovinjs.destroy = destroy, bodymovinjs.setQuality = setQuality, bodymovinjs.installPlugin = installPlugin, bodymovinjs.__getFactory = getFactory, bodymovinjs.version = "4.3.0";
  var standalone = "__[STANDALONE]__",
    animationData = "__[ANIMATIONDATA]__",
    renderer = "";
  if (standalone) {
    var scripts = document.getElementsByTagName("script"),
      index = scripts.length - 1,
      myScript = scripts[index],
      queryString = myScript.src.replace(/^[^\?]+\??/, "");
    renderer = getQueryVariable("renderer")
  }
  var readyStateCheckInterval = setInterval(checkReady, 100);
  return bodymovinjs
});