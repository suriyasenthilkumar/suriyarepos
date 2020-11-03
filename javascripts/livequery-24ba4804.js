/*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (MIT_LICENSE.txt)
 * and GPL Version 2 (GPL_LICENSE.txt) licenses.
 *
 * Version: 1.1.1
 * Requires jQuery 1.3+
 * Docs: http://docs.jquery.com/Plugins/livequery
 */
! function (t) {
  t.extend(t.fn, {
    livequery: function (e, n, i) {
      var r, s = this;
      return t.isFunction(e) && (i = n, n = e, e = void 0), t.each(t.livequery.queries, function (t, o) {
        return s.selector != o.selector || s.context != o.context || e != o.type || n && n.$lqguid != o.fn.$lqguid || i && i.$lqguid != o.fn2.$lqguid ? void 0 : (r = o) && !1
      }), r = r || new t.livequery(this.selector, this.context, e, n, i), r.stopped = !1, r.run(), this
    },
    expire: function (e, n, i) {
      var r = this;
      return t.isFunction(e) && (i = n, n = e, e = void 0), t.each(t.livequery.queries, function (s, o) {
        r.selector != o.selector || r.context != o.context || e && e != o.type || n && n.$lqguid != o.fn.$lqguid || i && i.$lqguid != o.fn2.$lqguid || this.stopped || t.livequery.stop(o.id)
      }), this
    }
  }), t.livequery = function (e, n, i, r, s) {
    return this.selector = e, this.context = n, this.type = i, this.fn = r, this.fn2 = s, this.elements = [], this.stopped = !1, this.id = t.livequery.queries.push(this) - 1, r.$lqguid = r.$lqguid || t.livequery.guid++, s && (s.$lqguid = s.$lqguid || t.livequery.guid++), this
  }, t.livequery.prototype = {
    stop: function () {
      var t = this;
      this.type ? this.elements.unbind(this.type, this.fn) : this.fn2 && this.elements.each(function (e, n) {
        t.fn2.apply(n)
      }), this.elements = [], this.stopped = !0
    },
    run: function () {
      if (!this.stopped) {
        var e = this,
          n = this.elements,
          i = t(this.selector, this.context),
          r = i.not(n);
        this.elements = i, this.type ? (r.bind(this.type, this.fn), n.length > 0 && t.each(n, function (n, r) {
          t.inArray(r, i) < 0 && t.event.remove(r, e.type, e.fn)
        })) : (r.each(function () {
          e.fn.apply(this)
        }), this.fn2 && n.length > 0 && t.each(n, function (n, r) {
          t.inArray(r, i) < 0 && e.fn2.apply(r)
        }))
      }
    }
  }, t.extend(t.livequery, {
    guid: 0,
    queries: [],
    queue: [],
    running: !1,
    timeout: null,
    checkQueue: function () {
      if (t.livequery.running && t.livequery.queue.length)
        for (var e = t.livequery.queue.length; e--;) t.livequery.queries[t.livequery.queue.shift()].run()
    },
    pause: function () {
      t.livequery.running = !1
    },
    play: function () {
      t.livequery.running = !0, t.livequery.run()
    },
    registerPlugin: function () {
      t.each(arguments, function (e, n) {
        if (t.fn[n]) {
          var i = t.fn[n];
          t.fn[n] = function () {
            var e = i.apply(this, arguments);
            return t.livequery.run(), e
          }
        }
      })
    },
    run: function (e) {
      void 0 != e ? t.inArray(e, t.livequery.queue) < 0 && t.livequery.queue.push(e) : t.each(t.livequery.queries, function (e) {
        t.inArray(e, t.livequery.queue) < 0 && t.livequery.queue.push(e)
      }), t.livequery.timeout && clearTimeout(t.livequery.timeout), t.livequery.timeout = setTimeout(t.livequery.checkQueue, 20)
    },
    stop: function (e) {
      void 0 != e ? t.livequery.queries[e].stop() : t.each(t.livequery.queries, function (e) {
        t.livequery.queries[e].stop()
      })
    }
  }), t.livequery.registerPlugin("append", "prepend", "after", "before", "wrap", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "empty", "remove", "html"), t(function () {
    t.livequery.play()
  })
}(jQuery);