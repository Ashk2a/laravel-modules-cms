var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (callback, module) => () => {
  if (!module) {
    module = {exports: {}};
    callback(module.exports, module);
  }
  return module.exports;
};
var __exportStar = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module) => {
  return __exportStar(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
};

// node_modules/dayjs/plugin/customParseFormat.js
var require_customParseFormat = __commonJS((exports, module) => {
  !function(t2, e2) {
    typeof exports == "object" && typeof module != "undefined" ? module.exports = e2() : typeof define == "function" && define.amd ? define(e2) : (t2 = typeof globalThis != "undefined" ? globalThis : t2 || self).dayjs_plugin_customParseFormat = e2();
  }(exports, function() {
    "use strict";
    var t2 = {LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A"}, e2 = /(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n2 = /\d\d/, r2 = /\d\d?/, i = /\d*[^\s\d-_:/()]+/, o2 = {}, s2 = function(t3) {
      return (t3 = +t3) + (t3 > 68 ? 1900 : 2e3);
    };
    var a2 = function(t3) {
      return function(e3) {
        this[t3] = +e3;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(t3) {
      (this.zone || (this.zone = {})).offset = function(t4) {
        if (!t4)
          return 0;
        if (t4 === "Z")
          return 0;
        var e3 = t4.match(/([+-]|\d\d)/g), n3 = 60 * e3[1] + (+e3[2] || 0);
        return n3 === 0 ? 0 : e3[0] === "+" ? -n3 : n3;
      }(t3);
    }], u = function(t3) {
      var e3 = o2[t3];
      return e3 && (e3.indexOf ? e3 : e3.s.concat(e3.f));
    }, h = function(t3, e3) {
      var n3, r3 = o2.meridiem;
      if (r3) {
        for (var i2 = 1; i2 <= 24; i2 += 1)
          if (t3.indexOf(r3(i2, 0, e3)) > -1) {
            n3 = i2 > 12;
            break;
          }
      } else
        n3 = t3 === (e3 ? "pm" : "PM");
      return n3;
    }, d = {A: [i, function(t3) {
      this.afternoon = h(t3, false);
    }], a: [i, function(t3) {
      this.afternoon = h(t3, true);
    }], S: [/\d/, function(t3) {
      this.milliseconds = 100 * +t3;
    }], SS: [n2, function(t3) {
      this.milliseconds = 10 * +t3;
    }], SSS: [/\d{3}/, function(t3) {
      this.milliseconds = +t3;
    }], s: [r2, a2("seconds")], ss: [r2, a2("seconds")], m: [r2, a2("minutes")], mm: [r2, a2("minutes")], H: [r2, a2("hours")], h: [r2, a2("hours")], HH: [r2, a2("hours")], hh: [r2, a2("hours")], D: [r2, a2("day")], DD: [n2, a2("day")], Do: [i, function(t3) {
      var e3 = o2.ordinal, n3 = t3.match(/\d+/);
      if (this.day = n3[0], e3)
        for (var r3 = 1; r3 <= 31; r3 += 1)
          e3(r3).replace(/\[|\]/g, "") === t3 && (this.day = r3);
    }], M: [r2, a2("month")], MM: [n2, a2("month")], MMM: [i, function(t3) {
      var e3 = u("months"), n3 = (u("monthsShort") || e3.map(function(t4) {
        return t4.substr(0, 3);
      })).indexOf(t3) + 1;
      if (n3 < 1)
        throw new Error();
      this.month = n3 % 12 || n3;
    }], MMMM: [i, function(t3) {
      var e3 = u("months").indexOf(t3) + 1;
      if (e3 < 1)
        throw new Error();
      this.month = e3 % 12 || e3;
    }], Y: [/[+-]?\d+/, a2("year")], YY: [n2, function(t3) {
      this.year = s2(t3);
    }], YYYY: [/\d{4}/, a2("year")], Z: f, ZZ: f};
    function c2(n3) {
      var r3, i2;
      r3 = n3, i2 = o2 && o2.formats;
      for (var s3 = (n3 = r3.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(e3, n4, r4) {
        var o3 = r4 && r4.toUpperCase();
        return n4 || i2[r4] || t2[r4] || i2[o3].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(t3, e4, n5) {
          return e4 || n5.slice(1);
        });
      })).match(e2), a3 = s3.length, f2 = 0; f2 < a3; f2 += 1) {
        var u2 = s3[f2], h2 = d[u2], c3 = h2 && h2[0], l = h2 && h2[1];
        s3[f2] = l ? {regex: c3, parser: l} : u2.replace(/^\[|\]$/g, "");
      }
      return function(t3) {
        for (var e3 = {}, n4 = 0, r4 = 0; n4 < a3; n4 += 1) {
          var i3 = s3[n4];
          if (typeof i3 == "string")
            r4 += i3.length;
          else {
            var o3 = i3.regex, f3 = i3.parser, u3 = t3.substr(r4), h3 = o3.exec(u3)[0];
            f3.call(e3, h3), t3 = t3.replace(h3, "");
          }
        }
        return function(t4) {
          var e4 = t4.afternoon;
          if (e4 !== void 0) {
            var n5 = t4.hours;
            e4 ? n5 < 12 && (t4.hours += 12) : n5 === 12 && (t4.hours = 0), delete t4.afternoon;
          }
        }(e3), e3;
      };
    }
    return function(t3, e3, n3) {
      n3.p.customParseFormat = true, t3 && t3.parseTwoDigitYear && (s2 = t3.parseTwoDigitYear);
      var r3 = e3.prototype, i2 = r3.parse;
      r3.parse = function(t4) {
        var e4 = t4.date, r4 = t4.utc, s3 = t4.args;
        this.$u = r4;
        var a3 = s3[1];
        if (typeof a3 == "string") {
          var f2 = s3[2] === true, u2 = s3[3] === true, h2 = f2 || u2, d2 = s3[2];
          u2 && (d2 = s3[2]), o2 = this.$locale(), !f2 && d2 && (o2 = n3.Ls[d2]), this.$d = function(t5, e5, n4) {
            try {
              if (["x", "X"].indexOf(e5) > -1)
                return new Date((e5 === "X" ? 1e3 : 1) * t5);
              var r5 = c2(e5)(t5), i3 = r5.year, o3 = r5.month, s4 = r5.day, a4 = r5.hours, f3 = r5.minutes, u3 = r5.seconds, h3 = r5.milliseconds, d3 = r5.zone, l2 = new Date(), m2 = s4 || (i3 || o3 ? 1 : l2.getDate()), M3 = i3 || l2.getFullYear(), Y2 = 0;
              i3 && !o3 || (Y2 = o3 > 0 ? o3 - 1 : l2.getMonth());
              var p2 = a4 || 0, v = f3 || 0, D2 = u3 || 0, g = h3 || 0;
              return d3 ? new Date(Date.UTC(M3, Y2, m2, p2, v, D2, g + 60 * d3.offset * 1e3)) : n4 ? new Date(Date.UTC(M3, Y2, m2, p2, v, D2, g)) : new Date(M3, Y2, m2, p2, v, D2, g);
            } catch (t6) {
              return new Date("");
            }
          }(e4, a3, r4), this.init(), d2 && d2 !== true && (this.$L = this.locale(d2).$L), h2 && e4 != this.format(a3) && (this.$d = new Date("")), o2 = {};
        } else if (a3 instanceof Array)
          for (var l = a3.length, m = 1; m <= l; m += 1) {
            s3[1] = a3[m - 1];
            var M2 = n3.apply(this, s3);
            if (M2.isValid()) {
              this.$d = M2.$d, this.$L = M2.$L, this.init();
              break;
            }
            m === l && (this.$d = new Date(""));
          }
        else
          i2.call(this, t4);
      };
    };
  });
});

// node_modules/dayjs/plugin/localeData.js
var require_localeData = __commonJS((exports, module) => {
  !function(n2, e2) {
    typeof exports == "object" && typeof module != "undefined" ? module.exports = e2() : typeof define == "function" && define.amd ? define(e2) : (n2 = typeof globalThis != "undefined" ? globalThis : n2 || self).dayjs_plugin_localeData = e2();
  }(exports, function() {
    "use strict";
    return function(n2, e2, t2) {
      var r2 = e2.prototype, o2 = function(n3) {
        return n3 && (n3.indexOf ? n3 : n3.s);
      }, u = function(n3, e3, t3, r3, u2) {
        var i2 = n3.name ? n3 : n3.$locale(), a3 = o2(i2[e3]), s3 = o2(i2[t3]), f = a3 || s3.map(function(n4) {
          return n4.substr(0, r3);
        });
        if (!u2)
          return f;
        var d = i2.weekStart;
        return f.map(function(n4, e4) {
          return f[(e4 + (d || 0)) % 7];
        });
      }, i = function() {
        return t2.Ls[t2.locale()];
      }, a2 = function(n3, e3) {
        return n3.formats[e3] || function(n4) {
          return n4.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(n5, e4, t3) {
            return e4 || t3.slice(1);
          });
        }(n3.formats[e3.toUpperCase()]);
      }, s2 = function() {
        var n3 = this;
        return {months: function(e3) {
          return e3 ? e3.format("MMMM") : u(n3, "months");
        }, monthsShort: function(e3) {
          return e3 ? e3.format("MMM") : u(n3, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return n3.$locale().weekStart || 0;
        }, weekdays: function(e3) {
          return e3 ? e3.format("dddd") : u(n3, "weekdays");
        }, weekdaysMin: function(e3) {
          return e3 ? e3.format("dd") : u(n3, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(e3) {
          return e3 ? e3.format("ddd") : u(n3, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(e3) {
          return a2(n3.$locale(), e3);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal};
      };
      r2.localeData = function() {
        return s2.bind(this)();
      }, t2.localeData = function() {
        var n3 = i();
        return {firstDayOfWeek: function() {
          return n3.weekStart || 0;
        }, weekdays: function() {
          return t2.weekdays();
        }, weekdaysShort: function() {
          return t2.weekdaysShort();
        }, weekdaysMin: function() {
          return t2.weekdaysMin();
        }, months: function() {
          return t2.months();
        }, monthsShort: function() {
          return t2.monthsShort();
        }, longDateFormat: function(e3) {
          return a2(n3, e3);
        }, meridiem: n3.meridiem, ordinal: n3.ordinal};
      }, t2.months = function() {
        return u(i(), "months");
      }, t2.monthsShort = function() {
        return u(i(), "monthsShort", "months", 3);
      }, t2.weekdays = function(n3) {
        return u(i(), "weekdays", null, null, n3);
      }, t2.weekdaysShort = function(n3) {
        return u(i(), "weekdaysShort", "weekdays", 3, n3);
      }, t2.weekdaysMin = function(n3) {
        return u(i(), "weekdaysMin", "weekdays", 2, n3);
      };
    };
  });
});

// node_modules/trix/dist/trix.js
var require_trix = __commonJS((exports, module) => {
  (function() {
  }).call(exports), function() {
    var t2;
    window.Set == null && (window.Set = t2 = function() {
      function t3() {
        this.clear();
      }
      return t3.prototype.clear = function() {
        return this.values = [];
      }, t3.prototype.has = function(t4) {
        return this.values.indexOf(t4) !== -1;
      }, t3.prototype.add = function(t4) {
        return this.has(t4) || this.values.push(t4), this;
      }, t3.prototype["delete"] = function(t4) {
        var e2;
        return (e2 = this.values.indexOf(t4)) === -1 ? false : (this.values.splice(e2, 1), true);
      }, t3.prototype.forEach = function() {
        var t4;
        return (t4 = this.values).forEach.apply(t4, arguments);
      }, t3;
    }());
  }.call(exports), function(t2) {
    function e2() {
    }
    function n2(t3, e3) {
      return function() {
        t3.apply(e3, arguments);
      };
    }
    function i(t3) {
      if (typeof this != "object")
        throw new TypeError("Promises must be constructed via new");
      if (typeof t3 != "function")
        throw new TypeError("not a function");
      this._state = 0, this._handled = false, this._value = void 0, this._deferreds = [], c2(t3, this);
    }
    function o2(t3, e3) {
      for (; t3._state === 3; )
        t3 = t3._value;
      return t3._state === 0 ? void t3._deferreds.push(e3) : (t3._handled = true, void h(function() {
        var n3 = t3._state === 1 ? e3.onFulfilled : e3.onRejected;
        if (n3 === null)
          return void (t3._state === 1 ? r2 : s2)(e3.promise, t3._value);
        var i2;
        try {
          i2 = n3(t3._value);
        } catch (o3) {
          return void s2(e3.promise, o3);
        }
        r2(e3.promise, i2);
      }));
    }
    function r2(t3, e3) {
      try {
        if (e3 === t3)
          throw new TypeError("A promise cannot be resolved with itself.");
        if (e3 && (typeof e3 == "object" || typeof e3 == "function")) {
          var o3 = e3.then;
          if (e3 instanceof i)
            return t3._state = 3, t3._value = e3, void a2(t3);
          if (typeof o3 == "function")
            return void c2(n2(o3, e3), t3);
        }
        t3._state = 1, t3._value = e3, a2(t3);
      } catch (r3) {
        s2(t3, r3);
      }
    }
    function s2(t3, e3) {
      t3._state = 2, t3._value = e3, a2(t3);
    }
    function a2(t3) {
      t3._state === 2 && t3._deferreds.length === 0 && setTimeout(function() {
        t3._handled || p2(t3._value);
      }, 1);
      for (var e3 = 0, n3 = t3._deferreds.length; n3 > e3; e3++)
        o2(t3, t3._deferreds[e3]);
      t3._deferreds = null;
    }
    function u(t3, e3, n3) {
      this.onFulfilled = typeof t3 == "function" ? t3 : null, this.onRejected = typeof e3 == "function" ? e3 : null, this.promise = n3;
    }
    function c2(t3, e3) {
      var n3 = false;
      try {
        t3(function(t4) {
          n3 || (n3 = true, r2(e3, t4));
        }, function(t4) {
          n3 || (n3 = true, s2(e3, t4));
        });
      } catch (i2) {
        if (n3)
          return;
        n3 = true, s2(e3, i2);
      }
    }
    var l = setTimeout, h = typeof setImmediate == "function" && setImmediate || function(t3) {
      l(t3, 1);
    }, p2 = function(t3) {
      typeof console != "undefined" && console && console.warn("Possible Unhandled Promise Rejection:", t3);
    };
    i.prototype["catch"] = function(t3) {
      return this.then(null, t3);
    }, i.prototype.then = function(t3, n3) {
      var r3 = new i(e2);
      return o2(this, new u(t3, n3, r3)), r3;
    }, i.all = function(t3) {
      var e3 = Array.prototype.slice.call(t3);
      return new i(function(t4, n3) {
        function i2(r4, s3) {
          try {
            if (s3 && (typeof s3 == "object" || typeof s3 == "function")) {
              var a3 = s3.then;
              if (typeof a3 == "function")
                return void a3.call(s3, function(t5) {
                  i2(r4, t5);
                }, n3);
            }
            e3[r4] = s3, --o3 === 0 && t4(e3);
          } catch (u2) {
            n3(u2);
          }
        }
        if (e3.length === 0)
          return t4([]);
        for (var o3 = e3.length, r3 = 0; r3 < e3.length; r3++)
          i2(r3, e3[r3]);
      });
    }, i.resolve = function(t3) {
      return t3 && typeof t3 == "object" && t3.constructor === i ? t3 : new i(function(e3) {
        e3(t3);
      });
    }, i.reject = function(t3) {
      return new i(function(e3, n3) {
        n3(t3);
      });
    }, i.race = function(t3) {
      return new i(function(e3, n3) {
        for (var i2 = 0, o3 = t3.length; o3 > i2; i2++)
          t3[i2].then(e3, n3);
      });
    }, i._setImmediateFn = function(t3) {
      h = t3;
    }, i._setUnhandledRejectionFn = function(t3) {
      p2 = t3;
    }, typeof module != "undefined" && module.exports ? module.exports = i : t2.Promise || (t2.Promise = i);
  }(exports), function() {
    var t2 = typeof window.customElements == "object", e2 = typeof document.registerElement == "function", n2 = t2 || e2;
    n2 || (typeof WeakMap == "undefined" && !function() {
      var t3 = Object.defineProperty, e3 = Date.now() % 1e9, n3 = function() {
        this.name = "__st" + (1e9 * Math.random() >>> 0) + (e3++ + "__");
      };
      n3.prototype = {set: function(e4, n4) {
        var i = e4[this.name];
        return i && i[0] === e4 ? i[1] = n4 : t3(e4, this.name, {value: [e4, n4], writable: true}), this;
      }, get: function(t4) {
        var e4;
        return (e4 = t4[this.name]) && e4[0] === t4 ? e4[1] : void 0;
      }, delete: function(t4) {
        var e4 = t4[this.name];
        return e4 && e4[0] === t4 ? (e4[0] = e4[1] = void 0, true) : false;
      }, has: function(t4) {
        var e4 = t4[this.name];
        return e4 ? e4[0] === t4 : false;
      }}, window.WeakMap = n3;
    }(), function(t3) {
      function e3(t4) {
        A.push(t4), b || (b = true, g(i));
      }
      function n3(t4) {
        return window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(t4) || t4;
      }
      function i() {
        b = false;
        var t4 = A;
        A = [], t4.sort(function(t5, e5) {
          return t5.uid_ - e5.uid_;
        });
        var e4 = false;
        t4.forEach(function(t5) {
          var n4 = t5.takeRecords();
          o2(t5), n4.length && (t5.callback_(n4, t5), e4 = true);
        }), e4 && i();
      }
      function o2(t4) {
        t4.nodes_.forEach(function(e4) {
          var n4 = m.get(e4);
          n4 && n4.forEach(function(e5) {
            e5.observer === t4 && e5.removeTransientObservers();
          });
        });
      }
      function r2(t4, e4) {
        for (var n4 = t4; n4; n4 = n4.parentNode) {
          var i2 = m.get(n4);
          if (i2)
            for (var o3 = 0; o3 < i2.length; o3++) {
              var r3 = i2[o3], s3 = r3.options;
              if (n4 === t4 || s3.subtree) {
                var a3 = e4(s3);
                a3 && r3.enqueue(a3);
              }
            }
        }
      }
      function s2(t4) {
        this.callback_ = t4, this.nodes_ = [], this.records_ = [], this.uid_ = ++C3;
      }
      function a2(t4, e4) {
        this.type = t4, this.target = e4, this.addedNodes = [], this.removedNodes = [], this.previousSibling = null, this.nextSibling = null, this.attributeName = null, this.attributeNamespace = null, this.oldValue = null;
      }
      function u(t4) {
        var e4 = new a2(t4.type, t4.target);
        return e4.addedNodes = t4.addedNodes.slice(), e4.removedNodes = t4.removedNodes.slice(), e4.previousSibling = t4.previousSibling, e4.nextSibling = t4.nextSibling, e4.attributeName = t4.attributeName, e4.attributeNamespace = t4.attributeNamespace, e4.oldValue = t4.oldValue, e4;
      }
      function c2(t4, e4) {
        return x = new a2(t4, e4);
      }
      function l(t4) {
        return w ? w : (w = u(x), w.oldValue = t4, w);
      }
      function h() {
        x = w = void 0;
      }
      function p2(t4) {
        return t4 === w || t4 === x;
      }
      function d(t4, e4) {
        return t4 === e4 ? t4 : w && p2(t4) ? w : null;
      }
      function f(t4, e4, n4) {
        this.observer = t4, this.target = e4, this.options = n4, this.transientObservedNodes = [];
      }
      if (!t3.JsMutationObserver) {
        var g, m = new WeakMap();
        if (/Trident|Edge/.test(navigator.userAgent))
          g = setTimeout;
        else if (window.setImmediate)
          g = window.setImmediate;
        else {
          var v = [], y = String(Math.random());
          window.addEventListener("message", function(t4) {
            if (t4.data === y) {
              var e4 = v;
              v = [], e4.forEach(function(t5) {
                t5();
              });
            }
          }), g = function(t4) {
            v.push(t4), window.postMessage(y, "*");
          };
        }
        var b = false, A = [], C3 = 0;
        s2.prototype = {observe: function(t4, e4) {
          if (t4 = n3(t4), !e4.childList && !e4.attributes && !e4.characterData || e4.attributeOldValue && !e4.attributes || e4.attributeFilter && e4.attributeFilter.length && !e4.attributes || e4.characterDataOldValue && !e4.characterData)
            throw new SyntaxError();
          var i2 = m.get(t4);
          i2 || m.set(t4, i2 = []);
          for (var o3, r3 = 0; r3 < i2.length; r3++)
            if (i2[r3].observer === this) {
              o3 = i2[r3], o3.removeListeners(), o3.options = e4;
              break;
            }
          o3 || (o3 = new f(this, t4, e4), i2.push(o3), this.nodes_.push(t4)), o3.addListeners();
        }, disconnect: function() {
          this.nodes_.forEach(function(t4) {
            for (var e4 = m.get(t4), n4 = 0; n4 < e4.length; n4++) {
              var i2 = e4[n4];
              if (i2.observer === this) {
                i2.removeListeners(), e4.splice(n4, 1);
                break;
              }
            }
          }, this), this.records_ = [];
        }, takeRecords: function() {
          var t4 = this.records_;
          return this.records_ = [], t4;
        }};
        var x, w;
        f.prototype = {enqueue: function(t4) {
          var n4 = this.observer.records_, i2 = n4.length;
          if (n4.length > 0) {
            var o3 = n4[i2 - 1], r3 = d(o3, t4);
            if (r3)
              return void (n4[i2 - 1] = r3);
          } else
            e3(this.observer);
          n4[i2] = t4;
        }, addListeners: function() {
          this.addListeners_(this.target);
        }, addListeners_: function(t4) {
          var e4 = this.options;
          e4.attributes && t4.addEventListener("DOMAttrModified", this, true), e4.characterData && t4.addEventListener("DOMCharacterDataModified", this, true), e4.childList && t4.addEventListener("DOMNodeInserted", this, true), (e4.childList || e4.subtree) && t4.addEventListener("DOMNodeRemoved", this, true);
        }, removeListeners: function() {
          this.removeListeners_(this.target);
        }, removeListeners_: function(t4) {
          var e4 = this.options;
          e4.attributes && t4.removeEventListener("DOMAttrModified", this, true), e4.characterData && t4.removeEventListener("DOMCharacterDataModified", this, true), e4.childList && t4.removeEventListener("DOMNodeInserted", this, true), (e4.childList || e4.subtree) && t4.removeEventListener("DOMNodeRemoved", this, true);
        }, addTransientObserver: function(t4) {
          if (t4 !== this.target) {
            this.addListeners_(t4), this.transientObservedNodes.push(t4);
            var e4 = m.get(t4);
            e4 || m.set(t4, e4 = []), e4.push(this);
          }
        }, removeTransientObservers: function() {
          var t4 = this.transientObservedNodes;
          this.transientObservedNodes = [], t4.forEach(function(t5) {
            this.removeListeners_(t5);
            for (var e4 = m.get(t5), n4 = 0; n4 < e4.length; n4++)
              if (e4[n4] === this) {
                e4.splice(n4, 1);
                break;
              }
          }, this);
        }, handleEvent: function(t4) {
          switch (t4.stopImmediatePropagation(), t4.type) {
            case "DOMAttrModified":
              var e4 = t4.attrName, n4 = t4.relatedNode.namespaceURI, i2 = t4.target, o3 = new c2("attributes", i2);
              o3.attributeName = e4, o3.attributeNamespace = n4;
              var s3 = t4.attrChange === MutationEvent.ADDITION ? null : t4.prevValue;
              r2(i2, function(t5) {
                return !t5.attributes || t5.attributeFilter && t5.attributeFilter.length && t5.attributeFilter.indexOf(e4) === -1 && t5.attributeFilter.indexOf(n4) === -1 ? void 0 : t5.attributeOldValue ? l(s3) : o3;
              });
              break;
            case "DOMCharacterDataModified":
              var i2 = t4.target, o3 = c2("characterData", i2), s3 = t4.prevValue;
              r2(i2, function(t5) {
                return t5.characterData ? t5.characterDataOldValue ? l(s3) : o3 : void 0;
              });
              break;
            case "DOMNodeRemoved":
              this.addTransientObserver(t4.target);
            case "DOMNodeInserted":
              var a3, u2, p3 = t4.target;
              t4.type === "DOMNodeInserted" ? (a3 = [p3], u2 = []) : (a3 = [], u2 = [p3]);
              var d2 = p3.previousSibling, f2 = p3.nextSibling, o3 = c2("childList", t4.target.parentNode);
              o3.addedNodes = a3, o3.removedNodes = u2, o3.previousSibling = d2, o3.nextSibling = f2, r2(t4.relatedNode, function(t5) {
                return t5.childList ? o3 : void 0;
              });
          }
          h();
        }}, t3.JsMutationObserver = s2, t3.MutationObserver || (t3.MutationObserver = s2, s2._isPolyfilled = true);
      }
    }(self), function() {
      "use strict";
      if (!window.performance || !window.performance.now) {
        var t3 = Date.now();
        window.performance = {now: function() {
          return Date.now() - t3;
        }};
      }
      window.requestAnimationFrame || (window.requestAnimationFrame = function() {
        var t4 = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
        return t4 ? function(e4) {
          return t4(function() {
            e4(performance.now());
          });
        } : function(t5) {
          return window.setTimeout(t5, 1e3 / 60);
        };
      }()), window.cancelAnimationFrame || (window.cancelAnimationFrame = function() {
        return window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function(t4) {
          clearTimeout(t4);
        };
      }());
      var e3 = function() {
        var t4 = document.createEvent("Event");
        return t4.initEvent("foo", true, true), t4.preventDefault(), t4.defaultPrevented;
      }();
      if (!e3) {
        var n3 = Event.prototype.preventDefault;
        Event.prototype.preventDefault = function() {
          this.cancelable && (n3.call(this), Object.defineProperty(this, "defaultPrevented", {get: function() {
            return true;
          }, configurable: true}));
        };
      }
      var i = /Trident/.test(navigator.userAgent);
      if ((!window.CustomEvent || i && typeof window.CustomEvent != "function") && (window.CustomEvent = function(t4, e4) {
        e4 = e4 || {};
        var n4 = document.createEvent("CustomEvent");
        return n4.initCustomEvent(t4, Boolean(e4.bubbles), Boolean(e4.cancelable), e4.detail), n4;
      }, window.CustomEvent.prototype = window.Event.prototype), !window.Event || i && typeof window.Event != "function") {
        var o2 = window.Event;
        window.Event = function(t4, e4) {
          e4 = e4 || {};
          var n4 = document.createEvent("Event");
          return n4.initEvent(t4, Boolean(e4.bubbles), Boolean(e4.cancelable)), n4;
        }, window.Event.prototype = o2.prototype;
      }
    }(window.WebComponents), window.CustomElements = window.CustomElements || {flags: {}}, function(t3) {
      var e3 = t3.flags, n3 = [], i = function(t4) {
        n3.push(t4);
      }, o2 = function() {
        n3.forEach(function(e4) {
          e4(t3);
        });
      };
      t3.addModule = i, t3.initializeModules = o2, t3.hasNative = Boolean(document.registerElement), t3.isIE = /Trident/.test(navigator.userAgent), t3.useNative = !e3.register && t3.hasNative && !window.ShadowDOMPolyfill && (!window.HTMLImports || window.HTMLImports.useNative);
    }(window.CustomElements), window.CustomElements.addModule(function(t3) {
      function e3(t4, e4) {
        n3(t4, function(t5) {
          return e4(t5) ? true : void i(t5, e4);
        }), i(t4, e4);
      }
      function n3(t4, e4, i2) {
        var o3 = t4.firstElementChild;
        if (!o3)
          for (o3 = t4.firstChild; o3 && o3.nodeType !== Node.ELEMENT_NODE; )
            o3 = o3.nextSibling;
        for (; o3; )
          e4(o3, i2) !== true && n3(o3, e4, i2), o3 = o3.nextElementSibling;
        return null;
      }
      function i(t4, n4) {
        for (var i2 = t4.shadowRoot; i2; )
          e3(i2, n4), i2 = i2.olderShadowRoot;
      }
      function o2(t4, e4) {
        r2(t4, e4, []);
      }
      function r2(t4, e4, n4) {
        if (t4 = window.wrap(t4), !(n4.indexOf(t4) >= 0)) {
          n4.push(t4);
          for (var i2, o3 = t4.querySelectorAll("link[rel=" + s2 + "]"), a2 = 0, u = o3.length; u > a2 && (i2 = o3[a2]); a2++)
            i2.import && r2(i2.import, e4, n4);
          e4(t4);
        }
      }
      var s2 = window.HTMLImports ? window.HTMLImports.IMPORT_LINK_TYPE : "none";
      t3.forDocumentTree = o2, t3.forSubtree = e3;
    }), window.CustomElements.addModule(function(t3) {
      function e3(t4, e4) {
        return n3(t4, e4) || i(t4, e4);
      }
      function n3(e4, n4) {
        return t3.upgrade(e4, n4) ? true : void (n4 && s2(e4));
      }
      function i(t4, e4) {
        b(t4, function(t5) {
          return n3(t5, e4) ? true : void 0;
        });
      }
      function o2(t4) {
        w.push(t4), x || (x = true, setTimeout(r2));
      }
      function r2() {
        x = false;
        for (var t4, e4 = w, n4 = 0, i2 = e4.length; i2 > n4 && (t4 = e4[n4]); n4++)
          t4();
        w = [];
      }
      function s2(t4) {
        C3 ? o2(function() {
          a2(t4);
        }) : a2(t4);
      }
      function a2(t4) {
        t4.__upgraded__ && !t4.__attached && (t4.__attached = true, t4.attachedCallback && t4.attachedCallback());
      }
      function u(t4) {
        c2(t4), b(t4, function(t5) {
          c2(t5);
        });
      }
      function c2(t4) {
        C3 ? o2(function() {
          l(t4);
        }) : l(t4);
      }
      function l(t4) {
        t4.__upgraded__ && t4.__attached && (t4.__attached = false, t4.detachedCallback && t4.detachedCallback());
      }
      function h(t4) {
        for (var e4 = t4, n4 = window.wrap(document); e4; ) {
          if (e4 == n4)
            return true;
          e4 = e4.parentNode || e4.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e4.host;
        }
      }
      function p2(t4) {
        if (t4.shadowRoot && !t4.shadowRoot.__watched) {
          y.dom && console.log("watching shadow-root for: ", t4.localName);
          for (var e4 = t4.shadowRoot; e4; )
            g(e4), e4 = e4.olderShadowRoot;
        }
      }
      function d(t4, n4) {
        if (y.dom) {
          var i2 = n4[0];
          if (i2 && i2.type === "childList" && i2.addedNodes && i2.addedNodes) {
            for (var o3 = i2.addedNodes[0]; o3 && o3 !== document && !o3.host; )
              o3 = o3.parentNode;
            var r3 = o3 && (o3.URL || o3._URL || o3.host && o3.host.localName) || "";
            r3 = r3.split("/?").shift().split("/").pop();
          }
          console.group("mutations (%d) [%s]", n4.length, r3 || "");
        }
        var s3 = h(t4);
        n4.forEach(function(t5) {
          t5.type === "childList" && (E(t5.addedNodes, function(t6) {
            t6.localName && e3(t6, s3);
          }), E(t5.removedNodes, function(t6) {
            t6.localName && u(t6);
          }));
        }), y.dom && console.groupEnd();
      }
      function f(t4) {
        for (t4 = window.wrap(t4), t4 || (t4 = window.wrap(document)); t4.parentNode; )
          t4 = t4.parentNode;
        var e4 = t4.__observer;
        e4 && (d(t4, e4.takeRecords()), r2());
      }
      function g(t4) {
        if (!t4.__observer) {
          var e4 = new MutationObserver(d.bind(this, t4));
          e4.observe(t4, {childList: true, subtree: true}), t4.__observer = e4;
        }
      }
      function m(t4) {
        t4 = window.wrap(t4), y.dom && console.group("upgradeDocument: ", t4.baseURI.split("/").pop());
        var n4 = t4 === window.wrap(document);
        e3(t4, n4), g(t4), y.dom && console.groupEnd();
      }
      function v(t4) {
        A(t4, m);
      }
      var y = t3.flags, b = t3.forSubtree, A = t3.forDocumentTree, C3 = window.MutationObserver._isPolyfilled && y["throttle-attached"];
      t3.hasPolyfillMutations = C3, t3.hasThrottledAttached = C3;
      var x = false, w = [], E = Array.prototype.forEach.call.bind(Array.prototype.forEach), S2 = Element.prototype.createShadowRoot;
      S2 && (Element.prototype.createShadowRoot = function() {
        var t4 = S2.call(this);
        return window.CustomElements.watchShadow(this), t4;
      }), t3.watchShadow = p2, t3.upgradeDocumentTree = v, t3.upgradeDocument = m, t3.upgradeSubtree = i, t3.upgradeAll = e3, t3.attached = s2, t3.takeRecords = f;
    }), window.CustomElements.addModule(function(t3) {
      function e3(e4, i2) {
        if (e4.localName === "template" && window.HTMLTemplateElement && HTMLTemplateElement.decorate && HTMLTemplateElement.decorate(e4), !e4.__upgraded__ && e4.nodeType === Node.ELEMENT_NODE) {
          var o3 = e4.getAttribute("is"), r3 = t3.getRegisteredDefinition(e4.localName) || t3.getRegisteredDefinition(o3);
          if (r3 && (o3 && r3.tag == e4.localName || !o3 && !r3.extends))
            return n3(e4, r3, i2);
        }
      }
      function n3(e4, n4, o3) {
        return s2.upgrade && console.group("upgrade:", e4.localName), n4.is && e4.setAttribute("is", n4.is), i(e4, n4), e4.__upgraded__ = true, r2(e4), o3 && t3.attached(e4), t3.upgradeSubtree(e4, o3), s2.upgrade && console.groupEnd(), e4;
      }
      function i(t4, e4) {
        Object.__proto__ ? t4.__proto__ = e4.prototype : (o2(t4, e4.prototype, e4.native), t4.__proto__ = e4.prototype);
      }
      function o2(t4, e4, n4) {
        for (var i2 = {}, o3 = e4; o3 !== n4 && o3 !== HTMLElement.prototype; ) {
          for (var r3, s3 = Object.getOwnPropertyNames(o3), a2 = 0; r3 = s3[a2]; a2++)
            i2[r3] || (Object.defineProperty(t4, r3, Object.getOwnPropertyDescriptor(o3, r3)), i2[r3] = 1);
          o3 = Object.getPrototypeOf(o3);
        }
      }
      function r2(t4) {
        t4.createdCallback && t4.createdCallback();
      }
      var s2 = t3.flags;
      t3.upgrade = e3, t3.upgradeWithDefinition = n3, t3.implementPrototype = i;
    }), window.CustomElements.addModule(function(t3) {
      function e3(e4, i2) {
        var u2 = i2 || {};
        if (!e4)
          throw new Error("document.registerElement: first argument `name` must not be empty");
        if (e4.indexOf("-") < 0)
          throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '" + String(e4) + "'.");
        if (o2(e4))
          throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '" + String(e4) + "'. The type name is invalid.");
        if (c2(e4))
          throw new Error("DuplicateDefinitionError: a type with name '" + String(e4) + "' is already registered");
        return u2.prototype || (u2.prototype = Object.create(HTMLElement.prototype)), u2.__name = e4.toLowerCase(), u2.extends && (u2.extends = u2.extends.toLowerCase()), u2.lifecycle = u2.lifecycle || {}, u2.ancestry = r2(u2.extends), s2(u2), a2(u2), n3(u2.prototype), l(u2.__name, u2), u2.ctor = h(u2), u2.ctor.prototype = u2.prototype, u2.prototype.constructor = u2.ctor, t3.ready && m(document), u2.ctor;
      }
      function n3(t4) {
        if (!t4.setAttribute._polyfilled) {
          var e4 = t4.setAttribute;
          t4.setAttribute = function(t5, n5) {
            i.call(this, t5, n5, e4);
          };
          var n4 = t4.removeAttribute;
          t4.removeAttribute = function(t5) {
            i.call(this, t5, null, n4);
          }, t4.setAttribute._polyfilled = true;
        }
      }
      function i(t4, e4, n4) {
        t4 = t4.toLowerCase();
        var i2 = this.getAttribute(t4);
        n4.apply(this, arguments);
        var o3 = this.getAttribute(t4);
        this.attributeChangedCallback && o3 !== i2 && this.attributeChangedCallback(t4, i2, o3);
      }
      function o2(t4) {
        for (var e4 = 0; e4 < C3.length; e4++)
          if (t4 === C3[e4])
            return true;
      }
      function r2(t4) {
        var e4 = c2(t4);
        return e4 ? r2(e4.extends).concat([e4]) : [];
      }
      function s2(t4) {
        for (var e4, n4 = t4.extends, i2 = 0; e4 = t4.ancestry[i2]; i2++)
          n4 = e4.is && e4.tag;
        t4.tag = n4 || t4.__name, n4 && (t4.is = t4.__name);
      }
      function a2(t4) {
        if (!Object.__proto__) {
          var e4 = HTMLElement.prototype;
          if (t4.is) {
            var n4 = document.createElement(t4.tag);
            e4 = Object.getPrototypeOf(n4);
          }
          for (var i2, o3 = t4.prototype, r3 = false; o3; )
            o3 == e4 && (r3 = true), i2 = Object.getPrototypeOf(o3), i2 && (o3.__proto__ = i2), o3 = i2;
          r3 || console.warn(t4.tag + " prototype not found in prototype chain for " + t4.is), t4.native = e4;
        }
      }
      function u(t4) {
        return y(E(t4.tag), t4);
      }
      function c2(t4) {
        return t4 ? x[t4.toLowerCase()] : void 0;
      }
      function l(t4, e4) {
        x[t4] = e4;
      }
      function h(t4) {
        return function() {
          return u(t4);
        };
      }
      function p2(t4, e4, n4) {
        return t4 === w ? d(e4, n4) : S2(t4, e4);
      }
      function d(t4, e4) {
        t4 && (t4 = t4.toLowerCase()), e4 && (e4 = e4.toLowerCase());
        var n4 = c2(e4 || t4);
        if (n4) {
          if (t4 == n4.tag && e4 == n4.is)
            return new n4.ctor();
          if (!e4 && !n4.is)
            return new n4.ctor();
        }
        var i2;
        return e4 ? (i2 = d(t4), i2.setAttribute("is", e4), i2) : (i2 = E(t4), t4.indexOf("-") >= 0 && b(i2, HTMLElement), i2);
      }
      function f(t4, e4) {
        var n4 = t4[e4];
        t4[e4] = function() {
          var t5 = n4.apply(this, arguments);
          return v(t5), t5;
        };
      }
      var g, m = (t3.isIE, t3.upgradeDocumentTree), v = t3.upgradeAll, y = t3.upgradeWithDefinition, b = t3.implementPrototype, A = t3.useNative, C3 = ["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"], x = {}, w = "http://www.w3.org/1999/xhtml", E = document.createElement.bind(document), S2 = document.createElementNS.bind(document);
      g = Object.__proto__ || A ? function(t4, e4) {
        return t4 instanceof e4;
      } : function(t4, e4) {
        if (t4 instanceof e4)
          return true;
        for (var n4 = t4; n4; ) {
          if (n4 === e4.prototype)
            return true;
          n4 = n4.__proto__;
        }
        return false;
      }, f(Node.prototype, "cloneNode"), f(document, "importNode"), document.registerElement = e3, document.createElement = d, document.createElementNS = p2, t3.registry = x, t3.instanceof = g, t3.reservedTagList = C3, t3.getRegisteredDefinition = c2, document.register = document.registerElement;
    }), function(t3) {
      function e3() {
        r2(window.wrap(document)), window.CustomElements.ready = true;
        var t4 = window.requestAnimationFrame || function(t5) {
          setTimeout(t5, 16);
        };
        t4(function() {
          setTimeout(function() {
            window.CustomElements.readyTime = Date.now(), window.HTMLImports && (window.CustomElements.elapsed = window.CustomElements.readyTime - window.HTMLImports.readyTime), document.dispatchEvent(new CustomEvent("WebComponentsReady", {bubbles: true}));
          });
        });
      }
      var n3 = t3.useNative, i = t3.initializeModules;
      if (t3.isIE, n3) {
        var o2 = function() {
        };
        t3.watchShadow = o2, t3.upgrade = o2, t3.upgradeAll = o2, t3.upgradeDocumentTree = o2, t3.upgradeSubtree = o2, t3.takeRecords = o2, t3.instanceof = function(t4, e4) {
          return t4 instanceof e4;
        };
      } else
        i();
      var r2 = t3.upgradeDocumentTree, s2 = t3.upgradeDocument;
      if (window.wrap || (window.ShadowDOMPolyfill ? (window.wrap = window.ShadowDOMPolyfill.wrapIfNeeded, window.unwrap = window.ShadowDOMPolyfill.unwrapIfNeeded) : window.wrap = window.unwrap = function(t4) {
        return t4;
      }), window.HTMLImports && (window.HTMLImports.__importsParsingHook = function(t4) {
        t4.import && s2(wrap(t4.import));
      }), document.readyState === "complete" || t3.flags.eager)
        e3();
      else if (document.readyState !== "interactive" || window.attachEvent || window.HTMLImports && !window.HTMLImports.ready) {
        var a2 = window.HTMLImports && !window.HTMLImports.ready ? "HTMLImportsLoaded" : "DOMContentLoaded";
        window.addEventListener(a2, e3);
      } else
        e3();
    }(window.CustomElements));
  }.call(exports), function() {
  }.call(exports), function() {
    var t2 = this;
    (function() {
      (function() {
        this.Trix = {VERSION: "1.3.1", ZERO_WIDTH_SPACE: "\uFEFF", NON_BREAKING_SPACE: "\xA0", OBJECT_REPLACEMENT_CHARACTER: "\uFFFC", browser: {composesExistingText: /Android.*Chrome/.test(navigator.userAgent), forcesObjectResizing: /Trident.*rv:11/.test(navigator.userAgent), supportsInputEvents: function() {
          var t3, e3, n2, i;
          if (typeof InputEvent == "undefined")
            return false;
          for (i = ["data", "getTargetRanges", "inputType"], t3 = 0, e3 = i.length; e3 > t3; t3++)
            if (n2 = i[t3], !(n2 in InputEvent.prototype))
              return false;
          return true;
        }()}, config: {}};
      }).call(this);
    }).call(t2);
    var e2 = t2.Trix;
    (function() {
      (function() {
        e2.BasicObject = function() {
          function t3() {
          }
          var e3, n2, i;
          return t3.proxyMethod = function(t4) {
            var i2, o2, r2, s2, a2;
            return r2 = n2(t4), i2 = r2.name, s2 = r2.toMethod, a2 = r2.toProperty, o2 = r2.optional, this.prototype[i2] = function() {
              var t5, n3;
              return t5 = s2 != null ? o2 ? typeof this[s2] == "function" ? this[s2]() : void 0 : this[s2]() : a2 != null ? this[a2] : void 0, o2 ? (n3 = t5 != null ? t5[i2] : void 0, n3 != null ? e3.call(n3, t5, arguments) : void 0) : (n3 = t5[i2], e3.call(n3, t5, arguments));
            };
          }, n2 = function(t4) {
            var e4, n3;
            if (!(n3 = t4.match(i)))
              throw new Error("can't parse @proxyMethod expression: " + t4);
            return e4 = {name: n3[4]}, n3[2] != null ? e4.toMethod = n3[1] : e4.toProperty = n3[1], n3[3] != null && (e4.optional = true), e4;
          }, e3 = Function.prototype.apply, i = /^(.+?)(\(\))?(\?)?\.(.+?)$/, t3;
        }();
      }).call(this), function() {
        var t3 = function(t4, e3) {
          function i() {
            this.constructor = t4;
          }
          for (var o2 in e3)
            n2.call(e3, o2) && (t4[o2] = e3[o2]);
          return i.prototype = e3.prototype, t4.prototype = new i(), t4.__super__ = e3.prototype, t4;
        }, n2 = {}.hasOwnProperty;
        e2.Object = function(n3) {
          function i() {
            this.id = ++o2;
          }
          var o2;
          return t3(i, n3), o2 = 0, i.fromJSONString = function(t4) {
            return this.fromJSON(JSON.parse(t4));
          }, i.prototype.hasSameConstructorAs = function(t4) {
            return this.constructor === (t4 != null ? t4.constructor : void 0);
          }, i.prototype.isEqualTo = function(t4) {
            return this === t4;
          }, i.prototype.inspect = function() {
            var t4, e3, n4;
            return t4 = function() {
              var t5, i2, o3;
              i2 = (t5 = this.contentsForInspection()) != null ? t5 : {}, o3 = [];
              for (e3 in i2)
                n4 = i2[e3], o3.push(e3 + "=" + n4);
              return o3;
            }.call(this), "#<" + this.constructor.name + ":" + this.id + (t4.length ? " " + t4.join(", ") : "") + ">";
          }, i.prototype.contentsForInspection = function() {
          }, i.prototype.toJSONString = function() {
            return JSON.stringify(this);
          }, i.prototype.toUTF16String = function() {
            return e2.UTF16String.box(this);
          }, i.prototype.getCacheKey = function() {
            return this.id.toString();
          }, i;
        }(e2.BasicObject);
      }.call(this), function() {
        e2.extend = function(t3) {
          var e3, n2;
          for (e3 in t3)
            n2 = t3[e3], this[e3] = n2;
          return this;
        };
      }.call(this), function() {
        e2.extend({defer: function(t3) {
          return setTimeout(t3, 1);
        }});
      }.call(this), function() {
        var t3, n2;
        e2.extend({normalizeSpaces: function(t4) {
          return t4.replace(RegExp("" + e2.ZERO_WIDTH_SPACE, "g"), "").replace(RegExp("" + e2.NON_BREAKING_SPACE, "g"), " ");
        }, normalizeNewlines: function(t4) {
          return t4.replace(/\r\n/g, "\n");
        }, breakableWhitespacePattern: RegExp("[^\\S" + e2.NON_BREAKING_SPACE + "]"), squishBreakableWhitespace: function(t4) {
          return t4.replace(RegExp("" + e2.breakableWhitespacePattern.source, "g"), " ").replace(/\ {2,}/g, " ");
        }, summarizeStringChange: function(t4, i) {
          var o2, r2, s2, a2;
          return t4 = e2.UTF16String.box(t4), i = e2.UTF16String.box(i), i.length < t4.length ? (r2 = n2(t4, i), a2 = r2[0], o2 = r2[1]) : (s2 = n2(i, t4), o2 = s2[0], a2 = s2[1]), {added: o2, removed: a2};
        }}), n2 = function(n3, i) {
          var o2, r2, s2, a2, u;
          return n3.isEqualTo(i) ? ["", ""] : (r2 = t3(n3, i), a2 = r2.utf16String.length, s2 = a2 ? (u = r2.offset, r2, o2 = n3.codepoints.slice(0, u).concat(n3.codepoints.slice(u + a2)), t3(i, e2.UTF16String.fromCodepoints(o2))) : t3(i, n3), [r2.utf16String.toString(), s2.utf16String.toString()]);
        }, t3 = function(t4, e3) {
          var n3, i, o2;
          for (n3 = 0, i = t4.length, o2 = e3.length; i > n3 && t4.charAt(n3).isEqualTo(e3.charAt(n3)); )
            n3++;
          for (; i > n3 + 1 && t4.charAt(i - 1).isEqualTo(e3.charAt(o2 - 1)); )
            i--, o2--;
          return {utf16String: t4.slice(n3, i), offset: n3};
        };
      }.call(this), function() {
        e2.extend({copyObject: function(t3) {
          var e3, n2, i;
          t3 == null && (t3 = {}), n2 = {};
          for (e3 in t3)
            i = t3[e3], n2[e3] = i;
          return n2;
        }, objectsAreEqual: function(t3, e3) {
          var n2, i;
          if (t3 == null && (t3 = {}), e3 == null && (e3 = {}), Object.keys(t3).length !== Object.keys(e3).length)
            return false;
          for (n2 in t3)
            if (i = t3[n2], i !== e3[n2])
              return false;
          return true;
        }});
      }.call(this), function() {
        var t3 = [].slice;
        e2.extend({arraysAreEqual: function(t4, e3) {
          var n2, i, o2, r2;
          if (t4 == null && (t4 = []), e3 == null && (e3 = []), t4.length !== e3.length)
            return false;
          for (i = n2 = 0, o2 = t4.length; o2 > n2; i = ++n2)
            if (r2 = t4[i], r2 !== e3[i])
              return false;
          return true;
        }, arrayStartsWith: function(t4, n2) {
          return t4 == null && (t4 = []), n2 == null && (n2 = []), e2.arraysAreEqual(t4.slice(0, n2.length), n2);
        }, spliceArray: function() {
          var e3, n2, i;
          return n2 = arguments[0], e3 = 2 <= arguments.length ? t3.call(arguments, 1) : [], i = n2.slice(0), i.splice.apply(i, e3), i;
        }, summarizeArrayChange: function(t4, e3) {
          var n2, i, o2, r2, s2, a2, u, c2, l, h, p2;
          for (t4 == null && (t4 = []), e3 == null && (e3 = []), n2 = [], h = [], o2 = new Set(), r2 = 0, u = t4.length; u > r2; r2++)
            p2 = t4[r2], o2.add(p2);
          for (i = new Set(), s2 = 0, c2 = e3.length; c2 > s2; s2++)
            p2 = e3[s2], i.add(p2), o2.has(p2) || n2.push(p2);
          for (a2 = 0, l = t4.length; l > a2; a2++)
            p2 = t4[a2], i.has(p2) || h.push(p2);
          return {added: n2, removed: h};
        }});
      }.call(this), function() {
        var t3, n2, i, o2;
        t3 = null, n2 = null, o2 = null, i = null, e2.extend({getAllAttributeNames: function() {
          return t3 != null ? t3 : t3 = e2.getTextAttributeNames().concat(e2.getBlockAttributeNames());
        }, getBlockConfig: function(t4) {
          return e2.config.blockAttributes[t4];
        }, getBlockAttributeNames: function() {
          return n2 != null ? n2 : n2 = Object.keys(e2.config.blockAttributes);
        }, getTextConfig: function(t4) {
          return e2.config.textAttributes[t4];
        }, getTextAttributeNames: function() {
          return o2 != null ? o2 : o2 = Object.keys(e2.config.textAttributes);
        }, getListAttributeNames: function() {
          var t4, n3;
          return i != null ? i : i = function() {
            var i2, o3;
            i2 = e2.config.blockAttributes, o3 = [];
            for (t4 in i2)
              n3 = i2[t4].listAttribute, n3 != null && o3.push(n3);
            return o3;
          }();
        }});
      }.call(this), function() {
        var t3, n2, i, o2, r2, s2 = [].indexOf || function(t4) {
          for (var e3 = 0, n3 = this.length; n3 > e3; e3++)
            if (e3 in this && this[e3] === t4)
              return e3;
          return -1;
        };
        t3 = document.documentElement, n2 = (i = (o2 = (r2 = t3.matchesSelector) != null ? r2 : t3.webkitMatchesSelector) != null ? o2 : t3.msMatchesSelector) != null ? i : t3.mozMatchesSelector, e2.extend({handleEvent: function(n3, i2) {
          var o3, r3, s3, a2, u, c2, l, h, p2, d, f, g;
          return h = i2 != null ? i2 : {}, c2 = h.onElement, u = h.matchingSelector, g = h.withCallback, a2 = h.inPhase, l = h.preventDefault, d = h.times, r3 = c2 != null ? c2 : t3, p2 = u, o3 = g, f = a2 === "capturing", s3 = function(t4) {
            var n4;
            return d != null && --d === 0 && s3.destroy(), n4 = e2.findClosestElementFromNode(t4.target, {matchingSelector: p2}), n4 != null && (g != null && g.call(n4, t4, n4), l) ? t4.preventDefault() : void 0;
          }, s3.destroy = function() {
            return r3.removeEventListener(n3, s3, f);
          }, r3.addEventListener(n3, s3, f), s3;
        }, handleEventOnce: function(t4, n3) {
          return n3 == null && (n3 = {}), n3.times = 1, e2.handleEvent(t4, n3);
        }, triggerEvent: function(n3, i2) {
          var o3, r3, s3, a2, u, c2, l;
          return l = i2 != null ? i2 : {}, c2 = l.onElement, r3 = l.bubbles, s3 = l.cancelable, o3 = l.attributes, a2 = c2 != null ? c2 : t3, r3 = r3 !== false, s3 = s3 !== false, u = document.createEvent("Events"), u.initEvent(n3, r3, s3), o3 != null && e2.extend.call(u, o3), a2.dispatchEvent(u);
        }, elementMatchesSelector: function(t4, e3) {
          return (t4 != null ? t4.nodeType : void 0) === 1 ? n2.call(t4, e3) : void 0;
        }, findClosestElementFromNode: function(t4, n3) {
          var i2, o3, r3;
          for (o3 = n3 != null ? n3 : {}, i2 = o3.matchingSelector, r3 = o3.untilNode; t4 != null && t4.nodeType !== Node.ELEMENT_NODE; )
            t4 = t4.parentNode;
          if (t4 != null) {
            if (i2 == null)
              return t4;
            if (t4.closest && r3 == null)
              return t4.closest(i2);
            for (; t4 && t4 !== r3; ) {
              if (e2.elementMatchesSelector(t4, i2))
                return t4;
              t4 = t4.parentNode;
            }
          }
        }, findInnerElement: function(t4) {
          for (; t4 != null ? t4.firstElementChild : void 0; )
            t4 = t4.firstElementChild;
          return t4;
        }, innerElementIsActive: function(t4) {
          return document.activeElement !== t4 && e2.elementContainsNode(t4, document.activeElement);
        }, elementContainsNode: function(t4, e3) {
          if (t4 && e3)
            for (; e3; ) {
              if (e3 === t4)
                return true;
              e3 = e3.parentNode;
            }
        }, findNodeFromContainerAndOffset: function(t4, e3) {
          var n3;
          if (t4)
            return t4.nodeType === Node.TEXT_NODE ? t4 : e3 === 0 ? (n3 = t4.firstChild) != null ? n3 : t4 : t4.childNodes.item(e3 - 1);
        }, findElementFromContainerAndOffset: function(t4, n3) {
          var i2;
          return i2 = e2.findNodeFromContainerAndOffset(t4, n3), e2.findClosestElementFromNode(i2);
        }, findChildIndexOfNode: function(t4) {
          var e3;
          if (t4 != null ? t4.parentNode : void 0) {
            for (e3 = 0; t4 = t4.previousSibling; )
              e3++;
            return e3;
          }
        }, removeNode: function(t4) {
          var e3;
          return t4 != null && (e3 = t4.parentNode) != null ? e3.removeChild(t4) : void 0;
        }, walkTree: function(t4, e3) {
          var n3, i2, o3, r3, s3;
          return o3 = e3 != null ? e3 : {}, i2 = o3.onlyNodesOfType, r3 = o3.usingFilter, n3 = o3.expandEntityReferences, s3 = function() {
            switch (i2) {
              case "element":
                return NodeFilter.SHOW_ELEMENT;
              case "text":
                return NodeFilter.SHOW_TEXT;
              case "comment":
                return NodeFilter.SHOW_COMMENT;
              default:
                return NodeFilter.SHOW_ALL;
            }
          }(), document.createTreeWalker(t4, s3, r3 != null ? r3 : null, n3 === true);
        }, tagName: function(t4) {
          var e3;
          return t4 != null && (e3 = t4.tagName) != null ? e3.toLowerCase() : void 0;
        }, makeElement: function(t4, e3) {
          var n3, i2, o3, r3, s3, a2, u, c2, l, h, p2, d, f, g;
          if (e3 == null && (e3 = {}), typeof t4 == "object" ? (e3 = t4, t4 = e3.tagName) : e3 = {attributes: e3}, o3 = document.createElement(t4), e3.editable != null && (e3.attributes == null && (e3.attributes = {}), e3.attributes.contenteditable = e3.editable), e3.attributes) {
            l = e3.attributes;
            for (a2 in l)
              g = l[a2], o3.setAttribute(a2, g);
          }
          if (e3.style) {
            h = e3.style;
            for (a2 in h)
              g = h[a2], o3.style[a2] = g;
          }
          if (e3.data) {
            p2 = e3.data;
            for (a2 in p2)
              g = p2[a2], o3.dataset[a2] = g;
          }
          if (e3.className)
            for (d = e3.className.split(" "), r3 = 0, u = d.length; u > r3; r3++)
              i2 = d[r3], o3.classList.add(i2);
          if (e3.textContent && (o3.textContent = e3.textContent), e3.childNodes)
            for (f = [].concat(e3.childNodes), s3 = 0, c2 = f.length; c2 > s3; s3++)
              n3 = f[s3], o3.appendChild(n3);
          return o3;
        }, getBlockTagNames: function() {
          var t4, n3;
          return e2.blockTagNames != null ? e2.blockTagNames : e2.blockTagNames = function() {
            var i2, o3;
            i2 = e2.config.blockAttributes, o3 = [];
            for (t4 in i2)
              n3 = i2[t4].tagName, n3 && o3.push(n3);
            return o3;
          }();
        }, nodeIsBlockContainer: function(t4) {
          return e2.nodeIsBlockStartComment(t4 != null ? t4.firstChild : void 0);
        }, nodeProbablyIsBlockContainer: function(t4) {
          var n3, i2;
          return n3 = e2.tagName(t4), s2.call(e2.getBlockTagNames(), n3) >= 0 && (i2 = e2.tagName(t4.firstChild), s2.call(e2.getBlockTagNames(), i2) < 0);
        }, nodeIsBlockStart: function(t4, n3) {
          var i2;
          return i2 = (n3 != null ? n3 : {strict: true}).strict, i2 ? e2.nodeIsBlockStartComment(t4) : e2.nodeIsBlockStartComment(t4) || !e2.nodeIsBlockStartComment(t4.firstChild) && e2.nodeProbablyIsBlockContainer(t4);
        }, nodeIsBlockStartComment: function(t4) {
          return e2.nodeIsCommentNode(t4) && (t4 != null ? t4.data : void 0) === "block";
        }, nodeIsCommentNode: function(t4) {
          return (t4 != null ? t4.nodeType : void 0) === Node.COMMENT_NODE;
        }, nodeIsCursorTarget: function(t4, n3) {
          var i2;
          return i2 = (n3 != null ? n3 : {}).name, t4 ? e2.nodeIsTextNode(t4) ? t4.data === e2.ZERO_WIDTH_SPACE ? i2 ? t4.parentNode.dataset.trixCursorTarget === i2 : true : void 0 : e2.nodeIsCursorTarget(t4.firstChild) : void 0;
        }, nodeIsAttachmentElement: function(t4) {
          return e2.elementMatchesSelector(t4, e2.AttachmentView.attachmentSelector);
        }, nodeIsEmptyTextNode: function(t4) {
          return e2.nodeIsTextNode(t4) && (t4 != null ? t4.data : void 0) === "";
        }, nodeIsTextNode: function(t4) {
          return (t4 != null ? t4.nodeType : void 0) === Node.TEXT_NODE;
        }});
      }.call(this), function() {
        var t3, n2, i, o2, r2;
        t3 = e2.copyObject, o2 = e2.objectsAreEqual, e2.extend({normalizeRange: i = function(t4) {
          var e3;
          if (t4 != null)
            return Array.isArray(t4) || (t4 = [t4, t4]), [n2(t4[0]), n2((e3 = t4[1]) != null ? e3 : t4[0])];
        }, rangeIsCollapsed: function(t4) {
          var e3, n3, o3;
          if (t4 != null)
            return n3 = i(t4), o3 = n3[0], e3 = n3[1], r2(o3, e3);
        }, rangesAreEqual: function(t4, e3) {
          var n3, o3, s2, a2, u, c2;
          if (t4 != null && e3 != null)
            return s2 = i(t4), o3 = s2[0], n3 = s2[1], a2 = i(e3), c2 = a2[0], u = a2[1], r2(o3, c2) && r2(n3, u);
        }}), n2 = function(e3) {
          return typeof e3 == "number" ? e3 : t3(e3);
        }, r2 = function(t4, e3) {
          return typeof t4 == "number" ? t4 === e3 : o2(t4, e3);
        };
      }.call(this), function() {
        var t3, n2, i, o2, r2, s2, a2;
        e2.registerElement = function(t4, e3) {
          var n3, i2;
          return e3 == null && (e3 = {}), t4 = t4.toLowerCase(), e3 = a2(e3), i2 = s2(e3), (n3 = i2.defaultCSS) && (delete i2.defaultCSS, o2(n3, t4)), r2(t4, i2);
        }, o2 = function(t4, e3) {
          var n3;
          return n3 = i(e3), n3.textContent = t4.replace(/%t/g, e3);
        }, i = function(e3) {
          var n3, i2;
          return n3 = document.createElement("style"), n3.setAttribute("type", "text/css"), n3.setAttribute("data-tag-name", e3.toLowerCase()), (i2 = t3()) && n3.setAttribute("nonce", i2), document.head.insertBefore(n3, document.head.firstChild), n3;
        }, t3 = function() {
          var t4;
          return (t4 = n2("trix-csp-nonce") || n2("csp-nonce")) ? t4.getAttribute("content") : void 0;
        }, n2 = function(t4) {
          return document.head.querySelector("meta[name=" + t4 + "]");
        }, s2 = function(t4) {
          var e3, n3, i2;
          n3 = {};
          for (e3 in t4)
            i2 = t4[e3], n3[e3] = typeof i2 == "function" ? {value: i2} : i2;
          return n3;
        }, a2 = function() {
          var t4;
          return t4 = function(t5) {
            var e3, n3, i2, o3, r3;
            for (e3 = {}, r3 = ["initialize", "connect", "disconnect"], n3 = 0, o3 = r3.length; o3 > n3; n3++)
              i2 = r3[n3], e3[i2] = t5[i2], delete t5[i2];
            return e3;
          }, window.customElements ? function(e3) {
            var n3, i2, o3, r3, s3;
            return s3 = t4(e3), o3 = s3.initialize, n3 = s3.connect, i2 = s3.disconnect, o3 && (r3 = n3, n3 = function() {
              return this.initialized || (this.initialized = true, o3.call(this)), r3 != null ? r3.call(this) : void 0;
            }), n3 && (e3.connectedCallback = n3), i2 && (e3.disconnectedCallback = i2), e3;
          } : function(e3) {
            var n3, i2, o3, r3;
            return r3 = t4(e3), o3 = r3.initialize, n3 = r3.connect, i2 = r3.disconnect, o3 && (e3.createdCallback = o3), n3 && (e3.attachedCallback = n3), i2 && (e3.detachedCallback = i2), e3;
          };
        }(), r2 = function() {
          return window.customElements ? function(t4, e3) {
            var n3;
            return n3 = function() {
              return typeof Reflect == "object" ? Reflect.construct(HTMLElement, [], n3) : HTMLElement.apply(this);
            }, Object.setPrototypeOf(n3.prototype, HTMLElement.prototype), Object.setPrototypeOf(n3, HTMLElement), Object.defineProperties(n3.prototype, e3), window.customElements.define(t4, n3), n3;
          } : function(t4, e3) {
            var n3, i2;
            return i2 = Object.create(HTMLElement.prototype, e3), n3 = document.registerElement(t4, {prototype: i2}), Object.defineProperty(i2, "constructor", {value: n3}), n3;
          };
        }();
      }.call(this), function() {
        var t3, n2;
        e2.extend({getDOMSelection: function() {
          var t4;
          return t4 = window.getSelection(), t4.rangeCount > 0 ? t4 : void 0;
        }, getDOMRange: function() {
          var n3, i;
          return (n3 = (i = e2.getDOMSelection()) != null ? i.getRangeAt(0) : void 0) && !t3(n3) ? n3 : void 0;
        }, setDOMRange: function(t4) {
          var n3;
          return n3 = window.getSelection(), n3.removeAllRanges(), n3.addRange(t4), e2.selectionChangeObserver.update();
        }}), t3 = function(t4) {
          return n2(t4.startContainer) || n2(t4.endContainer);
        }, n2 = function(t4) {
          return !Object.getPrototypeOf(t4);
        };
      }.call(this), function() {
        var t3;
        t3 = {"application/x-trix-feature-detection": "test"}, e2.extend({dataTransferIsPlainText: function(t4) {
          var e3, n2, i;
          return i = t4.getData("text/plain"), n2 = t4.getData("text/html"), i && n2 ? (e3 = new DOMParser().parseFromString(n2, "text/html").body, e3.textContent === i ? !e3.querySelector("*") : void 0) : i != null ? i.length : void 0;
        }, dataTransferIsWritable: function(e3) {
          var n2, i;
          if ((e3 != null ? e3.setData : void 0) != null) {
            for (n2 in t3)
              if (i = t3[n2], !function() {
                try {
                  return e3.setData(n2, i), e3.getData(n2) === i;
                } catch (t4) {
                }
              }())
                return;
            return true;
          }
        }, keyEventIsKeyboardCommand: function() {
          return /Mac|^iP/.test(navigator.platform) ? function(t4) {
            return t4.metaKey;
          } : function(t4) {
            return t4.ctrlKey;
          };
        }()});
      }.call(this), function() {
        e2.extend({RTL_PATTERN: /[\u05BE\u05C0\u05C3\u05D0-\u05EA\u05F0-\u05F4\u061B\u061F\u0621-\u063A\u0640-\u064A\u066D\u0671-\u06B7\u06BA-\u06BE\u06C0-\u06CE\u06D0-\u06D5\u06E5\u06E6\u200F\u202B\u202E\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE72\uFE74\uFE76-\uFEFC]/, getDirection: function() {
          var t3, n2, i, o2;
          return n2 = e2.makeElement("input", {dir: "auto", name: "x", dirName: "x.dir"}), t3 = e2.makeElement("form"), t3.appendChild(n2), i = function() {
            try {
              return new FormData(t3).has(n2.dirName);
            } catch (e3) {
            }
          }(), o2 = function() {
            try {
              return n2.matches(":dir(ltr),:dir(rtl)");
            } catch (t4) {
            }
          }(), i ? function(e3) {
            return n2.value = e3, new FormData(t3).get(n2.dirName);
          } : o2 ? function(t4) {
            return n2.value = t4, n2.matches(":dir(rtl)") ? "rtl" : "ltr";
          } : function(t4) {
            var n3;
            return n3 = t4.trim().charAt(0), e2.RTL_PATTERN.test(n3) ? "rtl" : "ltr";
          };
        }()});
      }.call(this), function() {
      }.call(this), function() {
        var t3, n2 = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var o2 in e3)
            i.call(e3, o2) && (t4[o2] = e3[o2]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, i = {}.hasOwnProperty;
        t3 = e2.arraysAreEqual, e2.Hash = function(i2) {
          function o2(t4) {
            t4 == null && (t4 = {}), this.values = s2(t4), o2.__super__.constructor.apply(this, arguments);
          }
          var r2, s2, a2, u, c2;
          return n2(o2, i2), o2.fromCommonAttributesOfObjects = function(t4) {
            var e3, n3, i3, o3, s3, a3;
            if (t4 == null && (t4 = []), !t4.length)
              return new this();
            for (e3 = r2(t4[0]), i3 = e3.getKeys(), a3 = t4.slice(1), n3 = 0, o3 = a3.length; o3 > n3; n3++)
              s3 = a3[n3], i3 = e3.getKeysCommonToHash(r2(s3)), e3 = e3.slice(i3);
            return e3;
          }, o2.box = function(t4) {
            return r2(t4);
          }, o2.prototype.add = function(t4, e3) {
            return this.merge(u(t4, e3));
          }, o2.prototype.remove = function(t4) {
            return new e2.Hash(s2(this.values, t4));
          }, o2.prototype.get = function(t4) {
            return this.values[t4];
          }, o2.prototype.has = function(t4) {
            return t4 in this.values;
          }, o2.prototype.merge = function(t4) {
            return new e2.Hash(a2(this.values, c2(t4)));
          }, o2.prototype.slice = function(t4) {
            var n3, i3, o3, r3;
            for (r3 = {}, n3 = 0, o3 = t4.length; o3 > n3; n3++)
              i3 = t4[n3], this.has(i3) && (r3[i3] = this.values[i3]);
            return new e2.Hash(r3);
          }, o2.prototype.getKeys = function() {
            return Object.keys(this.values);
          }, o2.prototype.getKeysCommonToHash = function(t4) {
            var e3, n3, i3, o3, s3;
            for (t4 = r2(t4), o3 = this.getKeys(), s3 = [], e3 = 0, i3 = o3.length; i3 > e3; e3++)
              n3 = o3[e3], this.values[n3] === t4.values[n3] && s3.push(n3);
            return s3;
          }, o2.prototype.isEqualTo = function(e3) {
            return t3(this.toArray(), r2(e3).toArray());
          }, o2.prototype.isEmpty = function() {
            return this.getKeys().length === 0;
          }, o2.prototype.toArray = function() {
            var t4, e3, n3;
            return (this.array != null ? this.array : this.array = function() {
              var i3;
              e3 = [], i3 = this.values;
              for (t4 in i3)
                n3 = i3[t4], e3.push(t4, n3);
              return e3;
            }.call(this)).slice(0);
          }, o2.prototype.toObject = function() {
            return s2(this.values);
          }, o2.prototype.toJSON = function() {
            return this.toObject();
          }, o2.prototype.contentsForInspection = function() {
            return {values: JSON.stringify(this.values)};
          }, u = function(t4, e3) {
            var n3;
            return n3 = {}, n3[t4] = e3, n3;
          }, a2 = function(t4, e3) {
            var n3, i3, o3;
            i3 = s2(t4);
            for (n3 in e3)
              o3 = e3[n3], i3[n3] = o3;
            return i3;
          }, s2 = function(t4, e3) {
            var n3, i3, o3, r3, s3;
            for (r3 = {}, s3 = Object.keys(t4).sort(), n3 = 0, o3 = s3.length; o3 > n3; n3++)
              i3 = s3[n3], i3 !== e3 && (r3[i3] = t4[i3]);
            return r3;
          }, r2 = function(t4) {
            return t4 instanceof e2.Hash ? t4 : new e2.Hash(t4);
          }, c2 = function(t4) {
            return t4 instanceof e2.Hash ? t4.values : t4;
          }, o2;
        }(e2.Object);
      }.call(this), function() {
        e2.ObjectGroup = function() {
          function t3(t4, e3) {
            var n2, i;
            this.objects = t4 != null ? t4 : [], i = e3.depth, n2 = e3.asTree, n2 && (this.depth = i, this.objects = this.constructor.groupObjects(this.objects, {asTree: n2, depth: this.depth + 1}));
          }
          return t3.groupObjects = function(t4, e3) {
            var n2, i, o2, r2, s2, a2, u, c2, l;
            for (t4 == null && (t4 = []), l = e3 != null ? e3 : {}, o2 = l.depth, n2 = l.asTree, n2 && o2 == null && (o2 = 0), c2 = [], s2 = 0, a2 = t4.length; a2 > s2; s2++) {
              if (u = t4[s2], r2) {
                if ((typeof u.canBeGrouped == "function" ? u.canBeGrouped(o2) : void 0) && (typeof (i = r2[r2.length - 1]).canBeGroupedWith == "function" ? i.canBeGroupedWith(u, o2) : void 0)) {
                  r2.push(u);
                  continue;
                }
                c2.push(new this(r2, {depth: o2, asTree: n2})), r2 = null;
              }
              (typeof u.canBeGrouped == "function" ? u.canBeGrouped(o2) : void 0) ? r2 = [u] : c2.push(u);
            }
            return r2 && c2.push(new this(r2, {depth: o2, asTree: n2})), c2;
          }, t3.prototype.getObjects = function() {
            return this.objects;
          }, t3.prototype.getDepth = function() {
            return this.depth;
          }, t3.prototype.getCacheKey = function() {
            var t4, e3, n2, i, o2;
            for (e3 = ["objectGroup"], o2 = this.getObjects(), t4 = 0, n2 = o2.length; n2 > t4; t4++)
              i = o2[t4], e3.push(i.getCacheKey());
            return e3.join("/");
          }, t3;
        }();
      }.call(this), function() {
        var t3 = function(t4, e3) {
          function i() {
            this.constructor = t4;
          }
          for (var o2 in e3)
            n2.call(e3, o2) && (t4[o2] = e3[o2]);
          return i.prototype = e3.prototype, t4.prototype = new i(), t4.__super__ = e3.prototype, t4;
        }, n2 = {}.hasOwnProperty;
        e2.ObjectMap = function(e3) {
          function n3(t4) {
            var e4, n4, i, o2, r2;
            for (t4 == null && (t4 = []), this.objects = {}, i = 0, o2 = t4.length; o2 > i; i++)
              r2 = t4[i], n4 = JSON.stringify(r2), (e4 = this.objects)[n4] == null && (e4[n4] = r2);
          }
          return t3(n3, e3), n3.prototype.find = function(t4) {
            var e4;
            return e4 = JSON.stringify(t4), this.objects[e4];
          }, n3;
        }(e2.BasicObject);
      }.call(this), function() {
        e2.ElementStore = function() {
          function t3(t4) {
            this.reset(t4);
          }
          var e3;
          return t3.prototype.add = function(t4) {
            var n2;
            return n2 = e3(t4), this.elements[n2] = t4;
          }, t3.prototype.remove = function(t4) {
            var n2, i;
            return n2 = e3(t4), (i = this.elements[n2]) ? (delete this.elements[n2], i) : void 0;
          }, t3.prototype.reset = function(t4) {
            var e4, n2, i;
            for (t4 == null && (t4 = []), this.elements = {}, n2 = 0, i = t4.length; i > n2; n2++)
              e4 = t4[n2], this.add(e4);
            return t4;
          }, e3 = function(t4) {
            return t4.dataset.trixStoreKey;
          }, t3;
        }();
      }.call(this), function() {
      }.call(this), function() {
        var t3 = function(t4, e3) {
          function i() {
            this.constructor = t4;
          }
          for (var o2 in e3)
            n2.call(e3, o2) && (t4[o2] = e3[o2]);
          return i.prototype = e3.prototype, t4.prototype = new i(), t4.__super__ = e3.prototype, t4;
        }, n2 = {}.hasOwnProperty;
        e2.Operation = function(e3) {
          function n3() {
            return n3.__super__.constructor.apply(this, arguments);
          }
          return t3(n3, e3), n3.prototype.isPerforming = function() {
            return this.performing === true;
          }, n3.prototype.hasPerformed = function() {
            return this.performed === true;
          }, n3.prototype.hasSucceeded = function() {
            return this.performed && this.succeeded;
          }, n3.prototype.hasFailed = function() {
            return this.performed && !this.succeeded;
          }, n3.prototype.getPromise = function() {
            return this.promise != null ? this.promise : this.promise = new Promise(function(t4) {
              return function(e4, n4) {
                return t4.performing = true, t4.perform(function(i, o2) {
                  return t4.succeeded = i, t4.performing = false, t4.performed = true, t4.succeeded ? e4(o2) : n4(o2);
                });
              };
            }(this));
          }, n3.prototype.perform = function(t4) {
            return t4(false);
          }, n3.prototype.release = function() {
            var t4;
            return (t4 = this.promise) != null && typeof t4.cancel == "function" && t4.cancel(), this.promise = null, this.performing = null, this.performed = null, this.succeeded = null;
          }, n3.proxyMethod("getPromise().then"), n3.proxyMethod("getPromise().catch"), n3;
        }(e2.BasicObject);
      }.call(this), function() {
        var t3, n2, i, o2, r2, s2 = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var i2 in e3)
            a2.call(e3, i2) && (t4[i2] = e3[i2]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, a2 = {}.hasOwnProperty;
        e2.UTF16String = function(t4) {
          function e3(t5, e4) {
            this.ucs2String = t5, this.codepoints = e4, this.length = this.codepoints.length, this.ucs2Length = this.ucs2String.length;
          }
          return s2(e3, t4), e3.box = function(t5) {
            return t5 == null && (t5 = ""), t5 instanceof this ? t5 : this.fromUCS2String(t5 != null ? t5.toString() : void 0);
          }, e3.fromUCS2String = function(t5) {
            return new this(t5, o2(t5));
          }, e3.fromCodepoints = function(t5) {
            return new this(r2(t5), t5);
          }, e3.prototype.offsetToUCS2Offset = function(t5) {
            return r2(this.codepoints.slice(0, Math.max(0, t5))).length;
          }, e3.prototype.offsetFromUCS2Offset = function(t5) {
            return o2(this.ucs2String.slice(0, Math.max(0, t5))).length;
          }, e3.prototype.slice = function() {
            var t5;
            return this.constructor.fromCodepoints((t5 = this.codepoints).slice.apply(t5, arguments));
          }, e3.prototype.charAt = function(t5) {
            return this.slice(t5, t5 + 1);
          }, e3.prototype.isEqualTo = function(t5) {
            return this.constructor.box(t5).ucs2String === this.ucs2String;
          }, e3.prototype.toJSON = function() {
            return this.ucs2String;
          }, e3.prototype.getCacheKey = function() {
            return this.ucs2String;
          }, e3.prototype.toString = function() {
            return this.ucs2String;
          }, e3;
        }(e2.BasicObject), t3 = (typeof Array.from == "function" ? Array.from("\u{1F47C}").length : void 0) === 1, n2 = (typeof " ".codePointAt == "function" ? " ".codePointAt(0) : void 0) != null, i = (typeof String.fromCodePoint == "function" ? String.fromCodePoint(32, 128124) : void 0) === " \u{1F47C}", o2 = t3 && n2 ? function(t4) {
          return Array.from(t4).map(function(t5) {
            return t5.codePointAt(0);
          });
        } : function(t4) {
          var e3, n3, i2, o3, r3;
          for (o3 = [], e3 = 0, i2 = t4.length; i2 > e3; )
            r3 = t4.charCodeAt(e3++), r3 >= 55296 && 56319 >= r3 && i2 > e3 && (n3 = t4.charCodeAt(e3++), (64512 & n3) === 56320 ? r3 = ((1023 & r3) << 10) + (1023 & n3) + 65536 : e3--), o3.push(r3);
          return o3;
        }, r2 = i ? function(t4) {
          return String.fromCodePoint.apply(String, t4);
        } : function(t4) {
          var e3, n3, i2;
          return e3 = function() {
            var e4, o3, r3;
            for (r3 = [], e4 = 0, o3 = t4.length; o3 > e4; e4++)
              i2 = t4[e4], n3 = "", i2 > 65535 && (i2 -= 65536, n3 += String.fromCharCode(i2 >>> 10 & 1023 | 55296), i2 = 56320 | 1023 & i2), r3.push(n3 + String.fromCharCode(i2));
            return r3;
          }(), e3.join("");
        };
      }.call(this), function() {
      }.call(this), function() {
      }.call(this), function() {
        e2.config.lang = {attachFiles: "Attach Files", bold: "Bold", bullets: "Bullets", byte: "Byte", bytes: "Bytes", captionPlaceholder: "Add a caption\u2026", code: "Code", heading1: "Heading", indent: "Increase Level", italic: "Italic", link: "Link", numbers: "Numbers", outdent: "Decrease Level", quote: "Quote", redo: "Redo", remove: "Remove", strike: "Strikethrough", undo: "Undo", unlink: "Unlink", url: "URL", urlPlaceholder: "Enter a URL\u2026", GB: "GB", KB: "KB", MB: "MB", PB: "PB", TB: "TB"};
      }.call(this), function() {
        e2.config.css = {attachment: "attachment", attachmentCaption: "attachment__caption", attachmentCaptionEditor: "attachment__caption-editor", attachmentMetadata: "attachment__metadata", attachmentMetadataContainer: "attachment__metadata-container", attachmentName: "attachment__name", attachmentProgress: "attachment__progress", attachmentSize: "attachment__size", attachmentToolbar: "attachment__toolbar", attachmentGallery: "attachment-gallery"};
      }.call(this), function() {
        var t3;
        e2.config.blockAttributes = t3 = {default: {tagName: "div", parse: false}, quote: {tagName: "blockquote", nestable: true}, heading1: {tagName: "h1", terminal: true, breakOnReturn: true, group: false}, code: {tagName: "pre", terminal: true, text: {plaintext: true}}, bulletList: {tagName: "ul", parse: false}, bullet: {tagName: "li", listAttribute: "bulletList", group: false, nestable: true, test: function(n2) {
          return e2.tagName(n2.parentNode) === t3[this.listAttribute].tagName;
        }}, numberList: {tagName: "ol", parse: false}, number: {tagName: "li", listAttribute: "numberList", group: false, nestable: true, test: function(n2) {
          return e2.tagName(n2.parentNode) === t3[this.listAttribute].tagName;
        }}, attachmentGallery: {tagName: "div", exclusive: true, terminal: true, parse: false, group: false}};
      }.call(this), function() {
        var t3, n2;
        t3 = e2.config.lang, n2 = [t3.bytes, t3.KB, t3.MB, t3.GB, t3.TB, t3.PB], e2.config.fileSize = {prefix: "IEC", precision: 2, formatter: function(e3) {
          var i, o2, r2, s2, a2;
          switch (e3) {
            case 0:
              return "0 " + t3.bytes;
            case 1:
              return "1 " + t3.byte;
            default:
              return i = function() {
                switch (this.prefix) {
                  case "SI":
                    return 1e3;
                  case "IEC":
                    return 1024;
                }
              }.call(this), o2 = Math.floor(Math.log(e3) / Math.log(i)), r2 = e3 / Math.pow(i, o2), s2 = r2.toFixed(this.precision), a2 = s2.replace(/0*$/, "").replace(/\.$/, ""), a2 + " " + n2[o2];
          }
        }};
      }.call(this), function() {
        e2.config.textAttributes = {bold: {tagName: "strong", inheritable: true, parser: function(t3) {
          var e3;
          return e3 = window.getComputedStyle(t3), e3.fontWeight === "bold" || e3.fontWeight >= 600;
        }}, italic: {tagName: "em", inheritable: true, parser: function(t3) {
          var e3;
          return e3 = window.getComputedStyle(t3), e3.fontStyle === "italic";
        }}, href: {groupTagName: "a", parser: function(t3) {
          var n2, i, o2;
          return n2 = e2.AttachmentView.attachmentSelector, o2 = "a:not(" + n2 + ")", (i = e2.findClosestElementFromNode(t3, {matchingSelector: o2})) ? i.getAttribute("href") : void 0;
        }}, strike: {tagName: "del", inheritable: true}, frozen: {style: {backgroundColor: "highlight"}}};
      }.call(this), function() {
        var t3, n2, i, o2, r2;
        r2 = "[data-trix-serialize=false]", o2 = ["contenteditable", "data-trix-id", "data-trix-store-key", "data-trix-mutable", "data-trix-placeholder", "tabindex"], n2 = "data-trix-serialized-attributes", i = "[" + n2 + "]", t3 = new RegExp("<!--block-->", "g"), e2.extend({serializers: {"application/json": function(t4) {
          var n3;
          if (t4 instanceof e2.Document)
            n3 = t4;
          else {
            if (!(t4 instanceof HTMLElement))
              throw new Error("unserializable object");
            n3 = e2.Document.fromHTML(t4.innerHTML);
          }
          return n3.toSerializableDocument().toJSONString();
        }, "text/html": function(s2) {
          var a2, u, c2, l, h, p2, d, f, g, m, v, y, b, A, C3, x, w;
          if (s2 instanceof e2.Document)
            l = e2.DocumentView.render(s2);
          else {
            if (!(s2 instanceof HTMLElement))
              throw new Error("unserializable object");
            l = s2.cloneNode(true);
          }
          for (A = l.querySelectorAll(r2), h = 0, g = A.length; g > h; h++)
            c2 = A[h], e2.removeNode(c2);
          for (p2 = 0, m = o2.length; m > p2; p2++)
            for (a2 = o2[p2], C3 = l.querySelectorAll("[" + a2 + "]"), d = 0, v = C3.length; v > d; d++)
              c2 = C3[d], c2.removeAttribute(a2);
          for (x = l.querySelectorAll(i), f = 0, y = x.length; y > f; f++) {
            c2 = x[f];
            try {
              u = JSON.parse(c2.getAttribute(n2)), c2.removeAttribute(n2);
              for (b in u)
                w = u[b], c2.setAttribute(b, w);
            } catch (E) {
            }
          }
          return l.innerHTML.replace(t3, "");
        }}, deserializers: {"application/json": function(t4) {
          return e2.Document.fromJSONString(t4);
        }, "text/html": function(t4) {
          return e2.Document.fromHTML(t4);
        }}, serializeToContentType: function(t4, n3) {
          var i2;
          if (i2 = e2.serializers[n3])
            return i2(t4);
          throw new Error("unknown content type: " + n3);
        }, deserializeFromContentType: function(t4, n3) {
          var i2;
          if (i2 = e2.deserializers[n3])
            return i2(t4);
          throw new Error("unknown content type: " + n3);
        }});
      }.call(this), function() {
        var t3;
        t3 = e2.config.lang, e2.config.toolbar = {getDefaultHTML: function() {
          return '<div class="trix-button-row">\n  <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="' + t3.bold + '" tabindex="-1">' + t3.bold + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="' + t3.italic + '" tabindex="-1">' + t3.italic + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="' + t3.strike + '" tabindex="-1">' + t3.strike + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="' + t3.link + '" tabindex="-1">' + t3.link + '</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="' + t3.heading1 + '" tabindex="-1">' + t3.heading1 + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="' + t3.quote + '" tabindex="-1">' + t3.quote + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="' + t3.code + '" tabindex="-1">' + t3.code + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="' + t3.bullets + '" tabindex="-1">' + t3.bullets + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="' + t3.numbers + '" tabindex="-1">' + t3.numbers + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="' + t3.outdent + '" tabindex="-1">' + t3.outdent + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="' + t3.indent + '" tabindex="-1">' + t3.indent + '</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="' + t3.attachFiles + '" tabindex="-1">' + t3.attachFiles + '</button>\n  </span>\n\n  <span class="trix-button-group-spacer"></span>\n\n  <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="' + t3.undo + '" tabindex="-1">' + t3.undo + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="' + t3.redo + '" tabindex="-1">' + t3.redo + '</button>\n  </span>\n</div>\n\n<div class="trix-dialogs" data-trix-dialogs>\n  <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">\n    <div class="trix-dialog__link-fields">\n      <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="' + t3.urlPlaceholder + '" aria-label="' + t3.url + '" required data-trix-input>\n      <div class="trix-button-group">\n        <input type="button" class="trix-button trix-button--dialog" value="' + t3.link + '" data-trix-method="setAttribute">\n        <input type="button" class="trix-button trix-button--dialog" value="' + t3.unlink + '" data-trix-method="removeAttribute">\n      </div>\n    </div>\n  </div>\n</div>';
        }};
      }.call(this), function() {
        e2.config.undoInterval = 5e3;
      }.call(this), function() {
        e2.config.attachments = {preview: {presentation: "gallery", caption: {name: true, size: true}}, file: {caption: {size: true}}};
      }.call(this), function() {
        e2.config.keyNames = {8: "backspace", 9: "tab", 13: "return", 27: "escape", 37: "left", 39: "right", 46: "delete", 68: "d", 72: "h", 79: "o"};
      }.call(this), function() {
        e2.config.input = {level2Enabled: true, getLevel: function() {
          return this.level2Enabled && e2.browser.supportsInputEvents ? 2 : 0;
        }, pickFiles: function(t3) {
          var n2;
          return n2 = e2.makeElement("input", {type: "file", multiple: true, hidden: true, id: this.fileInputId}), n2.addEventListener("change", function() {
            return t3(n2.files), e2.removeNode(n2);
          }), e2.removeNode(document.getElementById(this.fileInputId)), document.body.appendChild(n2), n2.click();
        }, fileInputId: "trix-file-input-" + Date.now().toString(16)};
      }.call(this), function() {
      }.call(this), function() {
        e2.registerElement("trix-toolbar", {defaultCSS: "%t {\n  display: block;\n}\n\n%t {\n  white-space: nowrap;\n}\n\n%t [data-trix-dialog] {\n  display: none;\n}\n\n%t [data-trix-dialog][data-trix-active] {\n  display: block;\n}\n\n%t [data-trix-dialog] [data-trix-validate]:invalid {\n  background-color: #ffdddd;\n}", initialize: function() {
          return this.innerHTML === "" ? this.innerHTML = e2.config.toolbar.getDefaultHTML() : void 0;
        }});
      }.call(this), function() {
        var t3 = function(t4, e3) {
          function i2() {
            this.constructor = t4;
          }
          for (var o2 in e3)
            n2.call(e3, o2) && (t4[o2] = e3[o2]);
          return i2.prototype = e3.prototype, t4.prototype = new i2(), t4.__super__ = e3.prototype, t4;
        }, n2 = {}.hasOwnProperty, i = [].indexOf || function(t4) {
          for (var e3 = 0, n3 = this.length; n3 > e3; e3++)
            if (e3 in this && this[e3] === t4)
              return e3;
          return -1;
        };
        e2.ObjectView = function(n3) {
          function o2(t4, e3) {
            this.object = t4, this.options = e3 != null ? e3 : {}, this.childViews = [], this.rootView = this;
          }
          return t3(o2, n3), o2.prototype.getNodes = function() {
            var t4, e3, n4, i2, o3;
            for (this.nodes == null && (this.nodes = this.createNodes()), i2 = this.nodes, o3 = [], t4 = 0, e3 = i2.length; e3 > t4; t4++)
              n4 = i2[t4], o3.push(n4.cloneNode(true));
            return o3;
          }, o2.prototype.invalidate = function() {
            var t4;
            return this.nodes = null, this.childViews = [], (t4 = this.parentView) != null ? t4.invalidate() : void 0;
          }, o2.prototype.invalidateViewForObject = function(t4) {
            var e3;
            return (e3 = this.findViewForObject(t4)) != null ? e3.invalidate() : void 0;
          }, o2.prototype.findOrCreateCachedChildView = function(t4, e3) {
            var n4;
            return (n4 = this.getCachedViewForObject(e3)) ? this.recordChildView(n4) : (n4 = this.createChildView.apply(this, arguments), this.cacheViewForObject(n4, e3)), n4;
          }, o2.prototype.createChildView = function(t4, n4, i2) {
            var o3;
            return i2 == null && (i2 = {}), n4 instanceof e2.ObjectGroup && (i2.viewClass = t4, t4 = e2.ObjectGroupView), o3 = new t4(n4, i2), this.recordChildView(o3);
          }, o2.prototype.recordChildView = function(t4) {
            return t4.parentView = this, t4.rootView = this.rootView, this.childViews.push(t4), t4;
          }, o2.prototype.getAllChildViews = function() {
            var t4, e3, n4, i2, o3;
            for (o3 = [], i2 = this.childViews, e3 = 0, n4 = i2.length; n4 > e3; e3++)
              t4 = i2[e3], o3.push(t4), o3 = o3.concat(t4.getAllChildViews());
            return o3;
          }, o2.prototype.findElement = function() {
            return this.findElementForObject(this.object);
          }, o2.prototype.findElementForObject = function(t4) {
            var e3;
            return (e3 = t4 != null ? t4.id : void 0) ? this.rootView.element.querySelector("[data-trix-id='" + e3 + "']") : void 0;
          }, o2.prototype.findViewForObject = function(t4) {
            var e3, n4, i2, o3;
            for (i2 = this.getAllChildViews(), e3 = 0, n4 = i2.length; n4 > e3; e3++)
              if (o3 = i2[e3], o3.object === t4)
                return o3;
          }, o2.prototype.getViewCache = function() {
            return this.rootView !== this ? this.rootView.getViewCache() : this.isViewCachingEnabled() ? this.viewCache != null ? this.viewCache : this.viewCache = {} : void 0;
          }, o2.prototype.isViewCachingEnabled = function() {
            return this.shouldCacheViews !== false;
          }, o2.prototype.enableViewCaching = function() {
            return this.shouldCacheViews = true;
          }, o2.prototype.disableViewCaching = function() {
            return this.shouldCacheViews = false;
          }, o2.prototype.getCachedViewForObject = function(t4) {
            var e3;
            return (e3 = this.getViewCache()) != null ? e3[t4.getCacheKey()] : void 0;
          }, o2.prototype.cacheViewForObject = function(t4, e3) {
            var n4;
            return (n4 = this.getViewCache()) != null ? n4[e3.getCacheKey()] = t4 : void 0;
          }, o2.prototype.garbageCollectCachedViews = function() {
            var t4, e3, n4, o3, r2, s2;
            if (t4 = this.getViewCache()) {
              s2 = this.getAllChildViews().concat(this), n4 = function() {
                var t5, e4, n5;
                for (n5 = [], t5 = 0, e4 = s2.length; e4 > t5; t5++)
                  r2 = s2[t5], n5.push(r2.object.getCacheKey());
                return n5;
              }(), o3 = [];
              for (e3 in t4)
                i.call(n4, e3) < 0 && o3.push(delete t4[e3]);
              return o3;
            }
          }, o2;
        }(e2.BasicObject);
      }.call(this), function() {
        var t3 = function(t4, e3) {
          function i() {
            this.constructor = t4;
          }
          for (var o2 in e3)
            n2.call(e3, o2) && (t4[o2] = e3[o2]);
          return i.prototype = e3.prototype, t4.prototype = new i(), t4.__super__ = e3.prototype, t4;
        }, n2 = {}.hasOwnProperty;
        e2.ObjectGroupView = function(e3) {
          function n3() {
            n3.__super__.constructor.apply(this, arguments), this.objectGroup = this.object, this.viewClass = this.options.viewClass, delete this.options.viewClass;
          }
          return t3(n3, e3), n3.prototype.getChildViews = function() {
            var t4, e4, n4, i;
            if (!this.childViews.length)
              for (i = this.objectGroup.getObjects(), t4 = 0, e4 = i.length; e4 > t4; t4++)
                n4 = i[t4], this.findOrCreateCachedChildView(this.viewClass, n4, this.options);
            return this.childViews;
          }, n3.prototype.createNodes = function() {
            var t4, e4, n4, i, o2, r2, s2, a2, u;
            for (t4 = this.createContainerElement(), s2 = this.getChildViews(), e4 = 0, i = s2.length; i > e4; e4++)
              for (u = s2[e4], a2 = u.getNodes(), n4 = 0, o2 = a2.length; o2 > n4; n4++)
                r2 = a2[n4], t4.appendChild(r2);
            return [t4];
          }, n3.prototype.createContainerElement = function(t4) {
            return t4 == null && (t4 = this.objectGroup.getDepth()), this.getChildViews()[0].createContainerElement(t4);
          }, n3;
        }(e2.ObjectView);
      }.call(this), function() {
        var t3 = function(t4, e3) {
          function i() {
            this.constructor = t4;
          }
          for (var o2 in e3)
            n2.call(e3, o2) && (t4[o2] = e3[o2]);
          return i.prototype = e3.prototype, t4.prototype = new i(), t4.__super__ = e3.prototype, t4;
        }, n2 = {}.hasOwnProperty;
        e2.Controller = function(e3) {
          function n3() {
            return n3.__super__.constructor.apply(this, arguments);
          }
          return t3(n3, e3), n3;
        }(e2.BasicObject);
      }.call(this), function() {
        var t3, n2, i, o2, r2, s2, a2 = function(t4, e3) {
          return function() {
            return t4.apply(e3, arguments);
          };
        }, u = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var i2 in e3)
            c2.call(e3, i2) && (t4[i2] = e3[i2]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, c2 = {}.hasOwnProperty, l = [].indexOf || function(t4) {
          for (var e3 = 0, n3 = this.length; n3 > e3; e3++)
            if (e3 in this && this[e3] === t4)
              return e3;
          return -1;
        };
        t3 = e2.findClosestElementFromNode, i = e2.nodeIsEmptyTextNode, n2 = e2.nodeIsBlockStartComment, o2 = e2.normalizeSpaces, r2 = e2.summarizeStringChange, s2 = e2.tagName, e2.MutationObserver = function(e3) {
          function c3(t4) {
            this.element = t4, this.didMutate = a2(this.didMutate, this), this.observer = new window.MutationObserver(this.didMutate), this.start();
          }
          var h, p2, d, f;
          return u(c3, e3), p2 = "data-trix-mutable", d = "[" + p2 + "]", f = {attributes: true, childList: true, characterData: true, characterDataOldValue: true, subtree: true}, c3.prototype.start = function() {
            return this.reset(), this.observer.observe(this.element, f);
          }, c3.prototype.stop = function() {
            return this.observer.disconnect();
          }, c3.prototype.didMutate = function(t4) {
            var e4, n3;
            return (e4 = this.mutations).push.apply(e4, this.findSignificantMutations(t4)), this.mutations.length ? ((n3 = this.delegate) != null && typeof n3.elementDidMutate == "function" && n3.elementDidMutate(this.getMutationSummary()), this.reset()) : void 0;
          }, c3.prototype.reset = function() {
            return this.mutations = [];
          }, c3.prototype.findSignificantMutations = function(t4) {
            var e4, n3, i2, o3;
            for (o3 = [], e4 = 0, n3 = t4.length; n3 > e4; e4++)
              i2 = t4[e4], this.mutationIsSignificant(i2) && o3.push(i2);
            return o3;
          }, c3.prototype.mutationIsSignificant = function(t4) {
            var e4, n3, i2, o3;
            if (this.nodeIsMutable(t4.target))
              return false;
            for (o3 = this.nodesModifiedByMutation(t4), e4 = 0, n3 = o3.length; n3 > e4; e4++)
              if (i2 = o3[e4], this.nodeIsSignificant(i2))
                return true;
            return false;
          }, c3.prototype.nodeIsSignificant = function(t4) {
            return t4 !== this.element && !this.nodeIsMutable(t4) && !i(t4);
          }, c3.prototype.nodeIsMutable = function(e4) {
            return t3(e4, {matchingSelector: d});
          }, c3.prototype.nodesModifiedByMutation = function(t4) {
            var e4;
            switch (e4 = [], t4.type) {
              case "attributes":
                t4.attributeName !== p2 && e4.push(t4.target);
                break;
              case "characterData":
                e4.push(t4.target.parentNode), e4.push(t4.target);
                break;
              case "childList":
                e4.push.apply(e4, t4.addedNodes), e4.push.apply(e4, t4.removedNodes);
            }
            return e4;
          }, c3.prototype.getMutationSummary = function() {
            return this.getTextMutationSummary();
          }, c3.prototype.getTextMutationSummary = function() {
            var t4, e4, n3, i2, o3, r3, s3, a3, u2, c4, h2;
            for (a3 = this.getTextChangesFromCharacterData(), n3 = a3.additions, o3 = a3.deletions, h2 = this.getTextChangesFromChildList(), u2 = h2.additions, r3 = 0, s3 = u2.length; s3 > r3; r3++)
              e4 = u2[r3], l.call(n3, e4) < 0 && n3.push(e4);
            return o3.push.apply(o3, h2.deletions), c4 = {}, (t4 = n3.join("")) && (c4.textAdded = t4), (i2 = o3.join("")) && (c4.textDeleted = i2), c4;
          }, c3.prototype.getMutationsByType = function(t4) {
            var e4, n3, i2, o3, r3;
            for (o3 = this.mutations, r3 = [], e4 = 0, n3 = o3.length; n3 > e4; e4++)
              i2 = o3[e4], i2.type === t4 && r3.push(i2);
            return r3;
          }, c3.prototype.getTextChangesFromChildList = function() {
            var t4, e4, i2, r3, s3, a3, u2, c4, l2, p3, d2;
            for (t4 = [], u2 = [], a3 = this.getMutationsByType("childList"), e4 = 0, r3 = a3.length; r3 > e4; e4++)
              s3 = a3[e4], t4.push.apply(t4, s3.addedNodes), u2.push.apply(u2, s3.removedNodes);
            return c4 = t4.length === 0 && u2.length === 1 && n2(u2[0]), c4 ? (p3 = [], d2 = ["\n"]) : (p3 = h(t4), d2 = h(u2)), {additions: function() {
              var t5, e5, n3;
              for (n3 = [], i2 = t5 = 0, e5 = p3.length; e5 > t5; i2 = ++t5)
                l2 = p3[i2], l2 !== d2[i2] && n3.push(o2(l2));
              return n3;
            }(), deletions: function() {
              var t5, e5, n3;
              for (n3 = [], i2 = t5 = 0, e5 = d2.length; e5 > t5; i2 = ++t5)
                l2 = d2[i2], l2 !== p3[i2] && n3.push(o2(l2));
              return n3;
            }()};
          }, c3.prototype.getTextChangesFromCharacterData = function() {
            var t4, e4, n3, i2, s3, a3, u2, c4;
            return e4 = this.getMutationsByType("characterData"), e4.length && (c4 = e4[0], n3 = e4[e4.length - 1], s3 = o2(c4.oldValue), i2 = o2(n3.target.data), a3 = r2(s3, i2), t4 = a3.added, u2 = a3.removed), {additions: t4 ? [t4] : [], deletions: u2 ? [u2] : []};
          }, h = function(t4) {
            var e4, n3, i2, o3;
            for (t4 == null && (t4 = []), o3 = [], e4 = 0, n3 = t4.length; n3 > e4; e4++)
              switch (i2 = t4[e4], i2.nodeType) {
                case Node.TEXT_NODE:
                  o3.push(i2.data);
                  break;
                case Node.ELEMENT_NODE:
                  s2(i2) === "br" ? o3.push("\n") : o3.push.apply(o3, h(i2.childNodes));
              }
            return o3;
          }, c3;
        }(e2.BasicObject);
      }.call(this), function() {
        var t3 = function(t4, e3) {
          function i() {
            this.constructor = t4;
          }
          for (var o2 in e3)
            n2.call(e3, o2) && (t4[o2] = e3[o2]);
          return i.prototype = e3.prototype, t4.prototype = new i(), t4.__super__ = e3.prototype, t4;
        }, n2 = {}.hasOwnProperty;
        e2.FileVerificationOperation = function(e3) {
          function n3(t4) {
            this.file = t4;
          }
          return t3(n3, e3), n3.prototype.perform = function(t4) {
            var e4;
            return e4 = new FileReader(), e4.onerror = function() {
              return t4(false);
            }, e4.onload = function(n4) {
              return function() {
                e4.onerror = null;
                try {
                  e4.abort();
                } catch (i) {
                }
                return t4(true, n4.file);
              };
            }(this), e4.readAsArrayBuffer(this.file);
          }, n3;
        }(e2.Operation);
      }.call(this), function() {
        var t3, n2, i = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var i2 in e3)
            o2.call(e3, i2) && (t4[i2] = e3[i2]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, o2 = {}.hasOwnProperty;
        t3 = e2.handleEvent, n2 = e2.innerElementIsActive, e2.InputController = function(o3) {
          function r2(n3) {
            var i2;
            this.element = n3, this.mutationObserver = new e2.MutationObserver(this.element), this.mutationObserver.delegate = this;
            for (i2 in this.events)
              t3(i2, {onElement: this.element, withCallback: this.handlerFor(i2)});
          }
          return i(r2, o3), r2.prototype.events = {}, r2.prototype.elementDidMutate = function() {
          }, r2.prototype.editorWillSyncDocumentView = function() {
            return this.mutationObserver.stop();
          }, r2.prototype.editorDidSyncDocumentView = function() {
            return this.mutationObserver.start();
          }, r2.prototype.requestRender = function() {
            var t4;
            return (t4 = this.delegate) != null && typeof t4.inputControllerDidRequestRender == "function" ? t4.inputControllerDidRequestRender() : void 0;
          }, r2.prototype.requestReparse = function() {
            var t4;
            return (t4 = this.delegate) != null && typeof t4.inputControllerDidRequestReparse == "function" && t4.inputControllerDidRequestReparse(), this.requestRender();
          }, r2.prototype.attachFiles = function(t4) {
            var n3, i2;
            return i2 = function() {
              var i3, o4, r3;
              for (r3 = [], i3 = 0, o4 = t4.length; o4 > i3; i3++)
                n3 = t4[i3], r3.push(new e2.FileVerificationOperation(n3));
              return r3;
            }(), Promise.all(i2).then(function(t5) {
              return function(e3) {
                return t5.handleInput(function() {
                  var t6, n4;
                  return (t6 = this.delegate) != null && t6.inputControllerWillAttachFiles(), (n4 = this.responder) != null && n4.insertFiles(e3), this.requestRender();
                });
              };
            }(this));
          }, r2.prototype.handlerFor = function(t4) {
            return function(e3) {
              return function(i2) {
                return i2.defaultPrevented ? void 0 : e3.handleInput(function() {
                  return n2(this.element) ? void 0 : (this.eventName = t4, this.events[t4].call(this, i2));
                });
              };
            }(this);
          }, r2.prototype.handleInput = function(t4) {
            var e3, n3;
            try {
              return (e3 = this.delegate) != null && e3.inputControllerWillHandleInput(), t4.call(this);
            } finally {
              (n3 = this.delegate) != null && n3.inputControllerDidHandleInput();
            }
          }, r2.prototype.createLinkHTML = function(t4, e3) {
            var n3;
            return n3 = document.createElement("a"), n3.href = t4, n3.textContent = e3 != null ? e3 : t4, n3.outerHTML;
          }, r2;
        }(e2.BasicObject);
      }.call(this), function() {
        var t3, n2, i, o2, r2, s2, a2, u, c2, l, h, p2, d, f = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var i2 in e3)
            g.call(e3, i2) && (t4[i2] = e3[i2]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, g = {}.hasOwnProperty, m = [].indexOf || function(t4) {
          for (var e3 = 0, n3 = this.length; n3 > e3; e3++)
            if (e3 in this && this[e3] === t4)
              return e3;
          return -1;
        };
        c2 = e2.makeElement, l = e2.objectsAreEqual, d = e2.tagName, n2 = e2.browser, a2 = e2.keyEventIsKeyboardCommand, o2 = e2.dataTransferIsWritable, i = e2.dataTransferIsPlainText, u = e2.config.keyNames, e2.Level0InputController = function(n3) {
          function s3() {
            s3.__super__.constructor.apply(this, arguments), this.resetInputSummary();
          }
          var d2;
          return f(s3, n3), d2 = 0, s3.prototype.setInputSummary = function(t4) {
            var e3, n4;
            t4 == null && (t4 = {}), this.inputSummary.eventName = this.eventName;
            for (e3 in t4)
              n4 = t4[e3], this.inputSummary[e3] = n4;
            return this.inputSummary;
          }, s3.prototype.resetInputSummary = function() {
            return this.inputSummary = {};
          }, s3.prototype.reset = function() {
            return this.resetInputSummary(), e2.selectionChangeObserver.reset();
          }, s3.prototype.elementDidMutate = function(t4) {
            var e3;
            return this.isComposing() ? (e3 = this.delegate) != null && typeof e3.inputControllerDidAllowUnhandledInput == "function" ? e3.inputControllerDidAllowUnhandledInput() : void 0 : this.handleInput(function() {
              return this.mutationIsSignificant(t4) && (this.mutationIsExpected(t4) ? this.requestRender() : this.requestReparse()), this.reset();
            });
          }, s3.prototype.mutationIsExpected = function(t4) {
            var e3, n4, i2, o3, r3, s4, a3, u2, c3, l2;
            return a3 = t4.textAdded, u2 = t4.textDeleted, this.inputSummary.preferDocument ? true : (e3 = a3 != null ? a3 === this.inputSummary.textAdded : !this.inputSummary.textAdded, n4 = u2 != null ? this.inputSummary.didDelete : !this.inputSummary.didDelete, c3 = (a3 === "\n" || a3 === " \n") && !e3, l2 = u2 === "\n" && !n4, s4 = c3 && !l2 || l2 && !c3, s4 && (o3 = this.getSelectedRange()) && (i2 = c3 ? a3.replace(/\n$/, "").length || -1 : (a3 != null ? a3.length : void 0) || 1, (r3 = this.responder) != null ? r3.positionIsBlockBreak(o3[1] + i2) : void 0) ? true : e3 && n4);
          }, s3.prototype.mutationIsSignificant = function(t4) {
            var e3, n4, i2;
            return i2 = Object.keys(t4).length > 0, e3 = ((n4 = this.compositionInput) != null ? n4.getEndData() : void 0) === "", i2 || !e3;
          }, s3.prototype.events = {keydown: function(t4) {
            var n4, i2, o3, r3, s4, c3, l2, h2, p3;
            if (this.isComposing() || this.resetInputSummary(), this.inputSummary.didInput = true, r3 = u[t4.keyCode]) {
              for (i2 = this.keys, h2 = ["ctrl", "alt", "shift", "meta"], o3 = 0, c3 = h2.length; c3 > o3; o3++)
                l2 = h2[o3], t4[l2 + "Key"] && (l2 === "ctrl" && (l2 = "control"), i2 = i2 != null ? i2[l2] : void 0);
              (i2 != null ? i2[r3] : void 0) != null && (this.setInputSummary({keyName: r3}), e2.selectionChangeObserver.reset(), i2[r3].call(this, t4));
            }
            return a2(t4) && (n4 = String.fromCharCode(t4.keyCode).toLowerCase()) && (s4 = function() {
              var e3, n5, i3, o4;
              for (i3 = ["alt", "shift"], o4 = [], e3 = 0, n5 = i3.length; n5 > e3; e3++)
                l2 = i3[e3], t4[l2 + "Key"] && o4.push(l2);
              return o4;
            }(), s4.push(n4), (p3 = this.delegate) != null ? p3.inputControllerDidReceiveKeyboardCommand(s4) : void 0) ? t4.preventDefault() : void 0;
          }, keypress: function(t4) {
            var e3, n4, i2;
            if (this.inputSummary.eventName == null && !t4.metaKey && (!t4.ctrlKey || t4.altKey))
              return (i2 = p2(t4)) ? ((e3 = this.delegate) != null && e3.inputControllerWillPerformTyping(), (n4 = this.responder) != null && n4.insertString(i2), this.setInputSummary({textAdded: i2, didDelete: this.selectionIsExpanded()})) : void 0;
          }, textInput: function(t4) {
            var e3, n4, i2, o3;
            return e3 = t4.data, o3 = this.inputSummary.textAdded, o3 && o3 !== e3 && o3.toUpperCase() === e3 ? (n4 = this.getSelectedRange(), this.setSelectedRange([n4[0], n4[1] + o3.length]), (i2 = this.responder) != null && i2.insertString(e3), this.setInputSummary({textAdded: e3}), this.setSelectedRange(n4)) : void 0;
          }, dragenter: function(t4) {
            return t4.preventDefault();
          }, dragstart: function(t4) {
            var e3, n4;
            return n4 = t4.target, this.serializeSelectionToDataTransfer(t4.dataTransfer), this.draggedRange = this.getSelectedRange(), (e3 = this.delegate) != null && typeof e3.inputControllerDidStartDrag == "function" ? e3.inputControllerDidStartDrag() : void 0;
          }, dragover: function(t4) {
            var e3, n4;
            return !this.draggedRange && !this.canAcceptDataTransfer(t4.dataTransfer) || (t4.preventDefault(), e3 = {x: t4.clientX, y: t4.clientY}, l(e3, this.draggingPoint)) ? void 0 : (this.draggingPoint = e3, (n4 = this.delegate) != null && typeof n4.inputControllerDidReceiveDragOverPoint == "function" ? n4.inputControllerDidReceiveDragOverPoint(this.draggingPoint) : void 0);
          }, dragend: function() {
            var t4;
            return (t4 = this.delegate) != null && typeof t4.inputControllerDidCancelDrag == "function" && t4.inputControllerDidCancelDrag(), this.draggedRange = null, this.draggingPoint = null;
          }, drop: function(t4) {
            var n4, i2, o3, r3, s4, a3, u2, c3, l2;
            return t4.preventDefault(), o3 = (s4 = t4.dataTransfer) != null ? s4.files : void 0, r3 = {x: t4.clientX, y: t4.clientY}, (a3 = this.responder) != null && a3.setLocationRangeFromPointRange(r3), (o3 != null ? o3.length : void 0) ? this.attachFiles(o3) : this.draggedRange ? ((u2 = this.delegate) != null && u2.inputControllerWillMoveText(), (c3 = this.responder) != null && c3.moveTextFromRange(this.draggedRange), this.draggedRange = null, this.requestRender()) : (i2 = t4.dataTransfer.getData("application/x-trix-document")) && (n4 = e2.Document.fromJSONString(i2), (l2 = this.responder) != null && l2.insertDocument(n4), this.requestRender()), this.draggedRange = null, this.draggingPoint = null;
          }, cut: function(t4) {
            var e3, n4;
            return ((e3 = this.responder) != null ? e3.selectionIsExpanded() : void 0) && (this.serializeSelectionToDataTransfer(t4.clipboardData) && t4.preventDefault(), (n4 = this.delegate) != null && n4.inputControllerWillCutText(), this.deleteInDirection("backward"), t4.defaultPrevented) ? this.requestRender() : void 0;
          }, copy: function(t4) {
            var e3;
            return ((e3 = this.responder) != null ? e3.selectionIsExpanded() : void 0) && this.serializeSelectionToDataTransfer(t4.clipboardData) ? t4.preventDefault() : void 0;
          }, paste: function(t4) {
            var n4, o3, s4, a3, u2, c3, l2, p3, f2, g2, v, y, b, A, C3, x, w, E, S2, R, k, D2, L2;
            return n4 = (p3 = t4.clipboardData) != null ? p3 : t4.testClipboardData, l2 = {clipboard: n4}, n4 == null || h(t4) ? void this.getPastedHTMLUsingHiddenElement(function(t5) {
              return function(e3) {
                var n5, i2, o4;
                return l2.type = "text/html", l2.html = e3, (n5 = t5.delegate) != null && n5.inputControllerWillPaste(l2), (i2 = t5.responder) != null && i2.insertHTML(l2.html), t5.requestRender(), (o4 = t5.delegate) != null ? o4.inputControllerDidPaste(l2) : void 0;
              };
            }(this)) : ((a3 = n4.getData("URL")) ? (l2.type = "text/html", L2 = (c3 = n4.getData("public.url-name")) ? e2.squishBreakableWhitespace(c3).trim() : a3, l2.html = this.createLinkHTML(a3, L2), (f2 = this.delegate) != null && f2.inputControllerWillPaste(l2), this.setInputSummary({textAdded: L2, didDelete: this.selectionIsExpanded()}), (C3 = this.responder) != null && C3.insertHTML(l2.html), this.requestRender(), (x = this.delegate) != null && x.inputControllerDidPaste(l2)) : i(n4) ? (l2.type = "text/plain", l2.string = n4.getData("text/plain"), (w = this.delegate) != null && w.inputControllerWillPaste(l2), this.setInputSummary({textAdded: l2.string, didDelete: this.selectionIsExpanded()}), (E = this.responder) != null && E.insertString(l2.string), this.requestRender(), (S2 = this.delegate) != null && S2.inputControllerDidPaste(l2)) : (u2 = n4.getData("text/html")) ? (l2.type = "text/html", l2.html = u2, (R = this.delegate) != null && R.inputControllerWillPaste(l2), (k = this.responder) != null && k.insertHTML(l2.html), this.requestRender(), (D2 = this.delegate) != null && D2.inputControllerDidPaste(l2)) : m.call(n4.types, "Files") >= 0 && (s4 = (g2 = n4.items) != null && (v = g2[0]) != null && typeof v.getAsFile == "function" ? v.getAsFile() : void 0) && (!s4.name && (o3 = r2(s4)) && (s4.name = "pasted-file-" + ++d2 + "." + o3), l2.type = "File", l2.file = s4, (y = this.delegate) != null && y.inputControllerWillAttachFiles(), (b = this.responder) != null && b.insertFile(l2.file), this.requestRender(), (A = this.delegate) != null && A.inputControllerDidPaste(l2)), t4.preventDefault());
          }, compositionstart: function(t4) {
            return this.getCompositionInput().start(t4.data);
          }, compositionupdate: function(t4) {
            return this.getCompositionInput().update(t4.data);
          }, compositionend: function(t4) {
            return this.getCompositionInput().end(t4.data);
          }, beforeinput: function() {
            return this.inputSummary.didInput = true;
          }, input: function(t4) {
            return this.inputSummary.didInput = true, t4.stopPropagation();
          }}, s3.prototype.keys = {backspace: function(t4) {
            var e3;
            return (e3 = this.delegate) != null && e3.inputControllerWillPerformTyping(), this.deleteInDirection("backward", t4);
          }, delete: function(t4) {
            var e3;
            return (e3 = this.delegate) != null && e3.inputControllerWillPerformTyping(), this.deleteInDirection("forward", t4);
          }, return: function() {
            var t4, e3;
            return this.setInputSummary({preferDocument: true}), (t4 = this.delegate) != null && t4.inputControllerWillPerformTyping(), (e3 = this.responder) != null ? e3.insertLineBreak() : void 0;
          }, tab: function(t4) {
            var e3, n4;
            return ((e3 = this.responder) != null ? e3.canIncreaseNestingLevel() : void 0) ? ((n4 = this.responder) != null && n4.increaseNestingLevel(), this.requestRender(), t4.preventDefault()) : void 0;
          }, left: function(t4) {
            var e3;
            return this.selectionIsInCursorTarget() ? (t4.preventDefault(), (e3 = this.responder) != null ? e3.moveCursorInDirection("backward") : void 0) : void 0;
          }, right: function(t4) {
            var e3;
            return this.selectionIsInCursorTarget() ? (t4.preventDefault(), (e3 = this.responder) != null ? e3.moveCursorInDirection("forward") : void 0) : void 0;
          }, control: {d: function(t4) {
            var e3;
            return (e3 = this.delegate) != null && e3.inputControllerWillPerformTyping(), this.deleteInDirection("forward", t4);
          }, h: function(t4) {
            var e3;
            return (e3 = this.delegate) != null && e3.inputControllerWillPerformTyping(), this.deleteInDirection("backward", t4);
          }, o: function(t4) {
            var e3, n4;
            return t4.preventDefault(), (e3 = this.delegate) != null && e3.inputControllerWillPerformTyping(), (n4 = this.responder) != null && n4.insertString("\n", {updatePosition: false}), this.requestRender();
          }}, shift: {return: function(t4) {
            var e3, n4;
            return (e3 = this.delegate) != null && e3.inputControllerWillPerformTyping(), (n4 = this.responder) != null && n4.insertString("\n"), this.requestRender(), t4.preventDefault();
          }, tab: function(t4) {
            var e3, n4;
            return ((e3 = this.responder) != null ? e3.canDecreaseNestingLevel() : void 0) ? ((n4 = this.responder) != null && n4.decreaseNestingLevel(), this.requestRender(), t4.preventDefault()) : void 0;
          }, left: function(t4) {
            return this.selectionIsInCursorTarget() ? (t4.preventDefault(), this.expandSelectionInDirection("backward")) : void 0;
          }, right: function(t4) {
            return this.selectionIsInCursorTarget() ? (t4.preventDefault(), this.expandSelectionInDirection("forward")) : void 0;
          }}, alt: {backspace: function() {
            var t4;
            return this.setInputSummary({preferDocument: false}), (t4 = this.delegate) != null ? t4.inputControllerWillPerformTyping() : void 0;
          }}, meta: {backspace: function() {
            var t4;
            return this.setInputSummary({preferDocument: false}), (t4 = this.delegate) != null ? t4.inputControllerWillPerformTyping() : void 0;
          }}}, s3.prototype.getCompositionInput = function() {
            return this.isComposing() ? this.compositionInput : this.compositionInput = new t3(this);
          }, s3.prototype.isComposing = function() {
            return this.compositionInput != null && !this.compositionInput.isEnded();
          }, s3.prototype.deleteInDirection = function(t4, e3) {
            var n4;
            return ((n4 = this.responder) != null ? n4.deleteInDirection(t4) : void 0) !== false ? this.setInputSummary({didDelete: true}) : e3 ? (e3.preventDefault(), this.requestRender()) : void 0;
          }, s3.prototype.serializeSelectionToDataTransfer = function(t4) {
            var n4, i2;
            if (o2(t4))
              return n4 = (i2 = this.responder) != null ? i2.getSelectedDocument().toSerializableDocument() : void 0, t4.setData("application/x-trix-document", JSON.stringify(n4)), t4.setData("text/html", e2.DocumentView.render(n4).innerHTML), t4.setData("text/plain", n4.toString().replace(/\n$/, "")), true;
          }, s3.prototype.canAcceptDataTransfer = function(t4) {
            var e3, n4, i2, o3, r3, s4;
            for (s4 = {}, o3 = (i2 = t4 != null ? t4.types : void 0) != null ? i2 : [], e3 = 0, n4 = o3.length; n4 > e3; e3++)
              r3 = o3[e3], s4[r3] = true;
            return s4.Files || s4["application/x-trix-document"] || s4["text/html"] || s4["text/plain"];
          }, s3.prototype.getPastedHTMLUsingHiddenElement = function(t4) {
            var n4, i2, o3;
            return i2 = this.getSelectedRange(), o3 = {position: "absolute", left: window.pageXOffset + "px", top: window.pageYOffset + "px", opacity: 0}, n4 = c2({style: o3, tagName: "div", editable: true}), document.body.appendChild(n4), n4.focus(), requestAnimationFrame(function(o4) {
              return function() {
                var r3;
                return r3 = n4.innerHTML, e2.removeNode(n4), o4.setSelectedRange(i2), t4(r3);
              };
            }(this));
          }, s3.proxyMethod("responder?.getSelectedRange"), s3.proxyMethod("responder?.setSelectedRange"), s3.proxyMethod("responder?.expandSelectionInDirection"), s3.proxyMethod("responder?.selectionIsInCursorTarget"), s3.proxyMethod("responder?.selectionIsExpanded"), s3;
        }(e2.InputController), r2 = function(t4) {
          var e3, n3;
          return (e3 = t4.type) != null && (n3 = e3.match(/\/(\w+)$/)) != null ? n3[1] : void 0;
        }, s2 = (typeof " ".codePointAt == "function" ? " ".codePointAt(0) : void 0) != null, p2 = function(t4) {
          var n3;
          return t4.key && s2 && t4.key.codePointAt(0) === t4.keyCode ? t4.key : (t4.which === null ? n3 = t4.keyCode : t4.which !== 0 && t4.charCode !== 0 && (n3 = t4.charCode), n3 != null && u[n3] !== "escape" ? e2.UTF16String.fromCodepoints([n3]).toString() : void 0);
        }, h = function(t4) {
          var e3, n3, i2, o3, r3, s3, a3, u2, c3, l2;
          if (u2 = t4.clipboardData) {
            if (m.call(u2.types, "text/html") >= 0) {
              for (c3 = u2.types, i2 = 0, s3 = c3.length; s3 > i2; i2++)
                if (l2 = c3[i2], e3 = /^CorePasteboardFlavorType/.test(l2), n3 = /^dyn\./.test(l2) && u2.getData(l2), a3 = e3 || n3)
                  return true;
              return false;
            }
            return o3 = m.call(u2.types, "com.apple.webarchive") >= 0, r3 = m.call(u2.types, "com.apple.flat-rtfd") >= 0, o3 || r3;
          }
        }, t3 = function(t4) {
          function e3(t5) {
            var e4;
            this.inputController = t5, e4 = this.inputController, this.responder = e4.responder, this.delegate = e4.delegate, this.inputSummary = e4.inputSummary, this.data = {};
          }
          return f(e3, t4), e3.prototype.start = function(t5) {
            var e4, n3;
            return this.data.start = t5, this.isSignificant() ? (this.inputSummary.eventName === "keypress" && this.inputSummary.textAdded && (e4 = this.responder) != null && e4.deleteInDirection("left"), this.selectionIsExpanded() || (this.insertPlaceholder(), this.requestRender()), this.range = (n3 = this.responder) != null ? n3.getSelectedRange() : void 0) : void 0;
          }, e3.prototype.update = function(t5) {
            var e4;
            return this.data.update = t5, this.isSignificant() && (e4 = this.selectPlaceholder()) ? (this.forgetPlaceholder(), this.range = e4) : void 0;
          }, e3.prototype.end = function(t5) {
            var e4, n3, i2, o3;
            return this.data.end = t5, this.isSignificant() ? (this.forgetPlaceholder(), this.canApplyToDocument() ? (this.setInputSummary({preferDocument: true, didInput: false}), (e4 = this.delegate) != null && e4.inputControllerWillPerformTyping(), (n3 = this.responder) != null && n3.setSelectedRange(this.range), (i2 = this.responder) != null && i2.insertString(this.data.end), (o3 = this.responder) != null ? o3.setSelectedRange(this.range[0] + this.data.end.length) : void 0) : this.data.start != null || this.data.update != null ? (this.requestReparse(), this.inputController.reset()) : void 0) : this.inputController.reset();
          }, e3.prototype.getEndData = function() {
            return this.data.end;
          }, e3.prototype.isEnded = function() {
            return this.getEndData() != null;
          }, e3.prototype.isSignificant = function() {
            return n2.composesExistingText ? this.inputSummary.didInput : true;
          }, e3.prototype.canApplyToDocument = function() {
            var t5, e4;
            return ((t5 = this.data.start) != null ? t5.length : void 0) === 0 && ((e4 = this.data.end) != null ? e4.length : void 0) > 0 && this.range != null;
          }, e3.proxyMethod("inputController.setInputSummary"), e3.proxyMethod("inputController.requestRender"), e3.proxyMethod("inputController.requestReparse"), e3.proxyMethod("responder?.selectionIsExpanded"), e3.proxyMethod("responder?.insertPlaceholder"), e3.proxyMethod("responder?.selectPlaceholder"), e3.proxyMethod("responder?.forgetPlaceholder"), e3;
        }(e2.BasicObject);
      }.call(this), function() {
        var t3, n2, i, o2 = function(t4, e3) {
          return function() {
            return t4.apply(e3, arguments);
          };
        }, r2 = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var i2 in e3)
            s2.call(e3, i2) && (t4[i2] = e3[i2]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, s2 = {}.hasOwnProperty, a2 = [].indexOf || function(t4) {
          for (var e3 = 0, n3 = this.length; n3 > e3; e3++)
            if (e3 in this && this[e3] === t4)
              return e3;
          return -1;
        };
        t3 = e2.dataTransferIsPlainText, n2 = e2.keyEventIsKeyboardCommand, i = e2.objectsAreEqual, e2.Level2InputController = function(s3) {
          function u() {
            return this.render = o2(this.render, this), u.__super__.constructor.apply(this, arguments);
          }
          var c2, l, h, p2, d, f;
          return r2(u, s3), u.prototype.elementDidMutate = function() {
            var t4;
            return this.scheduledRender ? this.composing && (t4 = this.delegate) != null && typeof t4.inputControllerDidAllowUnhandledInput == "function" ? t4.inputControllerDidAllowUnhandledInput() : void 0 : this.reparse();
          }, u.prototype.scheduleRender = function() {
            return this.scheduledRender != null ? this.scheduledRender : this.scheduledRender = requestAnimationFrame(this.render);
          }, u.prototype.render = function() {
            var t4;
            return cancelAnimationFrame(this.scheduledRender), this.scheduledRender = null, this.composing || (t4 = this.delegate) != null && t4.render(), typeof this.afterRender == "function" && this.afterRender(), this.afterRender = null;
          }, u.prototype.reparse = function() {
            var t4;
            return (t4 = this.delegate) != null ? t4.reparse() : void 0;
          }, u.prototype.events = {keydown: function(t4) {
            var e3, i2, o3, r3;
            if (n2(t4)) {
              if (e3 = l(t4), (r3 = this.delegate) != null ? r3.inputControllerDidReceiveKeyboardCommand(e3) : void 0)
                return t4.preventDefault();
            } else if (o3 = t4.key, t4.altKey && (o3 += "+Alt"), t4.shiftKey && (o3 += "+Shift"), i2 = this.keys[o3])
              return this.withEvent(t4, i2);
          }, paste: function(t4) {
            var e3, n3, i2, o3, r3, s4, a3, u2, c3;
            return h(t4) ? (t4.preventDefault(), this.attachFiles(t4.clipboardData.files)) : p2(t4) ? (t4.preventDefault(), n3 = {type: "text/plain", string: t4.clipboardData.getData("text/plain")}, (i2 = this.delegate) != null && i2.inputControllerWillPaste(n3), (o3 = this.responder) != null && o3.insertString(n3.string), this.render(), (r3 = this.delegate) != null ? r3.inputControllerDidPaste(n3) : void 0) : (e3 = (s4 = t4.clipboardData) != null ? s4.getData("URL") : void 0) ? (t4.preventDefault(), n3 = {type: "text/html", html: this.createLinkHTML(e3)}, (a3 = this.delegate) != null && a3.inputControllerWillPaste(n3), (u2 = this.responder) != null && u2.insertHTML(n3.html), this.render(), (c3 = this.delegate) != null ? c3.inputControllerDidPaste(n3) : void 0) : void 0;
          }, beforeinput: function(t4) {
            var e3;
            return (e3 = this.inputTypes[t4.inputType]) ? (this.withEvent(t4, e3), this.scheduleRender()) : void 0;
          }, input: function() {
            return e2.selectionChangeObserver.reset();
          }, dragstart: function(t4) {
            var e3, n3;
            return ((e3 = this.responder) != null ? e3.selectionContainsAttachments() : void 0) ? (t4.dataTransfer.setData("application/x-trix-dragging", true), this.dragging = {range: (n3 = this.responder) != null ? n3.getSelectedRange() : void 0, point: d(t4)}) : void 0;
          }, dragenter: function(t4) {
            return c2(t4) ? t4.preventDefault() : void 0;
          }, dragover: function(t4) {
            var e3, n3;
            if (this.dragging) {
              if (t4.preventDefault(), e3 = d(t4), !i(e3, this.dragging.point))
                return this.dragging.point = e3, (n3 = this.responder) != null ? n3.setLocationRangeFromPointRange(e3) : void 0;
            } else if (c2(t4))
              return t4.preventDefault();
          }, drop: function(t4) {
            var e3, n3, i2, o3;
            return this.dragging ? (t4.preventDefault(), (n3 = this.delegate) != null && n3.inputControllerWillMoveText(), (i2 = this.responder) != null && i2.moveTextFromRange(this.dragging.range), this.dragging = null, this.scheduleRender()) : c2(t4) ? (t4.preventDefault(), e3 = d(t4), (o3 = this.responder) != null && o3.setLocationRangeFromPointRange(e3), this.attachFiles(t4.dataTransfer.files)) : void 0;
          }, dragend: function() {
            var t4;
            return this.dragging ? ((t4 = this.responder) != null && t4.setSelectedRange(this.dragging.range), this.dragging = null) : void 0;
          }, compositionend: function() {
            return this.composing ? (this.composing = false, this.scheduleRender()) : void 0;
          }}, u.prototype.keys = {ArrowLeft: function() {
            var t4, e3;
            return ((t4 = this.responder) != null ? t4.shouldManageMovingCursorInDirection("backward") : void 0) ? (this.event.preventDefault(), (e3 = this.responder) != null ? e3.moveCursorInDirection("backward") : void 0) : void 0;
          }, ArrowRight: function() {
            var t4, e3;
            return ((t4 = this.responder) != null ? t4.shouldManageMovingCursorInDirection("forward") : void 0) ? (this.event.preventDefault(), (e3 = this.responder) != null ? e3.moveCursorInDirection("forward") : void 0) : void 0;
          }, Backspace: function() {
            var t4, e3, n3;
            return ((t4 = this.responder) != null ? t4.shouldManageDeletingInDirection("backward") : void 0) ? (this.event.preventDefault(), (e3 = this.delegate) != null && e3.inputControllerWillPerformTyping(), (n3 = this.responder) != null && n3.deleteInDirection("backward"), this.render()) : void 0;
          }, Tab: function() {
            var t4, e3;
            return ((t4 = this.responder) != null ? t4.canIncreaseNestingLevel() : void 0) ? (this.event.preventDefault(), (e3 = this.responder) != null && e3.increaseNestingLevel(), this.render()) : void 0;
          }, "Tab+Shift": function() {
            var t4, e3;
            return ((t4 = this.responder) != null ? t4.canDecreaseNestingLevel() : void 0) ? (this.event.preventDefault(), (e3 = this.responder) != null && e3.decreaseNestingLevel(), this.render()) : void 0;
          }}, u.prototype.inputTypes = {deleteByComposition: function() {
            return this.deleteInDirection("backward", {recordUndoEntry: false});
          }, deleteByCut: function() {
            return this.deleteInDirection("backward");
          }, deleteByDrag: function() {
            return this.event.preventDefault(), this.withTargetDOMRange(function() {
              var t4;
              return this.deleteByDragRange = (t4 = this.responder) != null ? t4.getSelectedRange() : void 0;
            });
          }, deleteCompositionText: function() {
            return this.deleteInDirection("backward", {recordUndoEntry: false});
          }, deleteContent: function() {
            return this.deleteInDirection("backward");
          }, deleteContentBackward: function() {
            return this.deleteInDirection("backward");
          }, deleteContentForward: function() {
            return this.deleteInDirection("forward");
          }, deleteEntireSoftLine: function() {
            return this.deleteInDirection("forward");
          }, deleteHardLineBackward: function() {
            return this.deleteInDirection("backward");
          }, deleteHardLineForward: function() {
            return this.deleteInDirection("forward");
          }, deleteSoftLineBackward: function() {
            return this.deleteInDirection("backward");
          }, deleteSoftLineForward: function() {
            return this.deleteInDirection("forward");
          }, deleteWordBackward: function() {
            return this.deleteInDirection("backward");
          }, deleteWordForward: function() {
            return this.deleteInDirection("forward");
          }, formatBackColor: function() {
            return this.activateAttributeIfSupported("backgroundColor", this.event.data);
          }, formatBold: function() {
            return this.toggleAttributeIfSupported("bold");
          }, formatFontColor: function() {
            return this.activateAttributeIfSupported("color", this.event.data);
          }, formatFontName: function() {
            return this.activateAttributeIfSupported("font", this.event.data);
          }, formatIndent: function() {
            var t4;
            return ((t4 = this.responder) != null ? t4.canIncreaseNestingLevel() : void 0) ? this.withTargetDOMRange(function() {
              var t5;
              return (t5 = this.responder) != null ? t5.increaseNestingLevel() : void 0;
            }) : void 0;
          }, formatItalic: function() {
            return this.toggleAttributeIfSupported("italic");
          }, formatJustifyCenter: function() {
            return this.toggleAttributeIfSupported("justifyCenter");
          }, formatJustifyFull: function() {
            return this.toggleAttributeIfSupported("justifyFull");
          }, formatJustifyLeft: function() {
            return this.toggleAttributeIfSupported("justifyLeft");
          }, formatJustifyRight: function() {
            return this.toggleAttributeIfSupported("justifyRight");
          }, formatOutdent: function() {
            var t4;
            return ((t4 = this.responder) != null ? t4.canDecreaseNestingLevel() : void 0) ? this.withTargetDOMRange(function() {
              var t5;
              return (t5 = this.responder) != null ? t5.decreaseNestingLevel() : void 0;
            }) : void 0;
          }, formatRemove: function() {
            return this.withTargetDOMRange(function() {
              var t4, e3, n3, i2;
              i2 = [];
              for (t4 in (e3 = this.responder) != null ? e3.getCurrentAttributes() : void 0)
                i2.push((n3 = this.responder) != null ? n3.removeCurrentAttribute(t4) : void 0);
              return i2;
            });
          }, formatSetBlockTextDirection: function() {
            return this.activateAttributeIfSupported("blockDir", this.event.data);
          }, formatSetInlineTextDirection: function() {
            return this.activateAttributeIfSupported("textDir", this.event.data);
          }, formatStrikeThrough: function() {
            return this.toggleAttributeIfSupported("strike");
          }, formatSubscript: function() {
            return this.toggleAttributeIfSupported("sub");
          }, formatSuperscript: function() {
            return this.toggleAttributeIfSupported("sup");
          }, formatUnderline: function() {
            return this.toggleAttributeIfSupported("underline");
          }, historyRedo: function() {
            var t4;
            return (t4 = this.delegate) != null ? t4.inputControllerWillPerformRedo() : void 0;
          }, historyUndo: function() {
            var t4;
            return (t4 = this.delegate) != null ? t4.inputControllerWillPerformUndo() : void 0;
          }, insertCompositionText: function() {
            return this.composing = true, this.insertString(this.event.data);
          }, insertFromComposition: function() {
            return this.composing = false, this.insertString(this.event.data);
          }, insertFromDrop: function() {
            var t4, e3;
            return (t4 = this.deleteByDragRange) ? (this.deleteByDragRange = null, (e3 = this.delegate) != null && e3.inputControllerWillMoveText(), this.withTargetDOMRange(function() {
              var e4;
              return (e4 = this.responder) != null ? e4.moveTextFromRange(t4) : void 0;
            })) : void 0;
          }, insertFromPaste: function() {
            var n3, i2, o3, r3, s4, a3, u2, c3, l2, h2, p3;
            return n3 = this.event.dataTransfer, s4 = {dataTransfer: n3}, (i2 = n3.getData("URL")) ? (this.event.preventDefault(), s4.type = "text/html", p3 = (r3 = n3.getData("public.url-name")) ? e2.squishBreakableWhitespace(r3).trim() : i2, s4.html = this.createLinkHTML(i2, p3), (a3 = this.delegate) != null && a3.inputControllerWillPaste(s4), this.withTargetDOMRange(function() {
              var t4;
              return (t4 = this.responder) != null ? t4.insertHTML(s4.html) : void 0;
            }), this.afterRender = function(t4) {
              return function() {
                var e3;
                return (e3 = t4.delegate) != null ? e3.inputControllerDidPaste(s4) : void 0;
              };
            }(this)) : t3(n3) ? (s4.type = "text/plain", s4.string = n3.getData("text/plain"), (u2 = this.delegate) != null && u2.inputControllerWillPaste(s4), this.withTargetDOMRange(function() {
              var t4;
              return (t4 = this.responder) != null ? t4.insertString(s4.string) : void 0;
            }), this.afterRender = function(t4) {
              return function() {
                var e3;
                return (e3 = t4.delegate) != null ? e3.inputControllerDidPaste(s4) : void 0;
              };
            }(this)) : (o3 = n3.getData("text/html")) ? (this.event.preventDefault(), s4.type = "text/html", s4.html = o3, (c3 = this.delegate) != null && c3.inputControllerWillPaste(s4), this.withTargetDOMRange(function() {
              var t4;
              return (t4 = this.responder) != null ? t4.insertHTML(s4.html) : void 0;
            }), this.afterRender = function(t4) {
              return function() {
                var e3;
                return (e3 = t4.delegate) != null ? e3.inputControllerDidPaste(s4) : void 0;
              };
            }(this)) : ((l2 = n3.files) != null ? l2.length : void 0) ? (s4.type = "File", s4.file = n3.files[0], (h2 = this.delegate) != null && h2.inputControllerWillPaste(s4), this.withTargetDOMRange(function() {
              var t4;
              return (t4 = this.responder) != null ? t4.insertFile(s4.file) : void 0;
            }), this.afterRender = function(t4) {
              return function() {
                var e3;
                return (e3 = t4.delegate) != null ? e3.inputControllerDidPaste(s4) : void 0;
              };
            }(this)) : void 0;
          }, insertFromYank: function() {
            return this.insertString(this.event.data);
          }, insertLineBreak: function() {
            return this.insertString("\n");
          }, insertLink: function() {
            return this.activateAttributeIfSupported("href", this.event.data);
          }, insertOrderedList: function() {
            return this.toggleAttributeIfSupported("number");
          }, insertParagraph: function() {
            var t4;
            return (t4 = this.delegate) != null && t4.inputControllerWillPerformTyping(), this.withTargetDOMRange(function() {
              var t5;
              return (t5 = this.responder) != null ? t5.insertLineBreak() : void 0;
            });
          }, insertReplacementText: function() {
            return this.insertString(this.event.dataTransfer.getData("text/plain"), {updatePosition: false});
          }, insertText: function() {
            var t4, e3;
            return this.insertString((t4 = this.event.data) != null ? t4 : (e3 = this.event.dataTransfer) != null ? e3.getData("text/plain") : void 0);
          }, insertTranspose: function() {
            return this.insertString(this.event.data);
          }, insertUnorderedList: function() {
            return this.toggleAttributeIfSupported("bullet");
          }}, u.prototype.insertString = function(t4, e3) {
            var n3;
            return t4 == null && (t4 = ""), (n3 = this.delegate) != null && n3.inputControllerWillPerformTyping(), this.withTargetDOMRange(function() {
              var n4;
              return (n4 = this.responder) != null ? n4.insertString(t4, e3) : void 0;
            });
          }, u.prototype.toggleAttributeIfSupported = function(t4) {
            var n3;
            return a2.call(e2.getAllAttributeNames(), t4) >= 0 ? ((n3 = this.delegate) != null && n3.inputControllerWillPerformFormatting(t4), this.withTargetDOMRange(function() {
              var e3;
              return (e3 = this.responder) != null ? e3.toggleCurrentAttribute(t4) : void 0;
            })) : void 0;
          }, u.prototype.activateAttributeIfSupported = function(t4, n3) {
            var i2;
            return a2.call(e2.getAllAttributeNames(), t4) >= 0 ? ((i2 = this.delegate) != null && i2.inputControllerWillPerformFormatting(t4), this.withTargetDOMRange(function() {
              var e3;
              return (e3 = this.responder) != null ? e3.setCurrentAttribute(t4, n3) : void 0;
            })) : void 0;
          }, u.prototype.deleteInDirection = function(t4, e3) {
            var n3, i2, o3, r3;
            return o3 = (e3 != null ? e3 : {recordUndoEntry: true}).recordUndoEntry, o3 && (r3 = this.delegate) != null && r3.inputControllerWillPerformTyping(), i2 = function(e4) {
              return function() {
                var n4;
                return (n4 = e4.responder) != null ? n4.deleteInDirection(t4) : void 0;
              };
            }(this), (n3 = this.getTargetDOMRange({minLength: 2})) ? this.withTargetDOMRange(n3, i2) : i2();
          }, u.prototype.withTargetDOMRange = function(t4, n3) {
            var i2;
            return typeof t4 == "function" && (n3 = t4, t4 = this.getTargetDOMRange()), t4 ? (i2 = this.responder) != null ? i2.withTargetDOMRange(t4, n3.bind(this)) : void 0 : (e2.selectionChangeObserver.reset(), n3.call(this));
          }, u.prototype.getTargetDOMRange = function(t4) {
            var e3, n3, i2, o3;
            return i2 = (t4 != null ? t4 : {minLength: 0}).minLength, (o3 = typeof (e3 = this.event).getTargetRanges == "function" ? e3.getTargetRanges() : void 0) && o3.length && (n3 = f(o3[0]), i2 === 0 || n3.toString().length >= i2) ? n3 : void 0;
          }, f = function(t4) {
            var e3;
            return e3 = document.createRange(), e3.setStart(t4.startContainer, t4.startOffset), e3.setEnd(t4.endContainer, t4.endOffset), e3;
          }, u.prototype.withEvent = function(t4, e3) {
            var n3;
            this.event = t4;
            try {
              n3 = e3.call(this);
            } finally {
              this.event = null;
            }
            return n3;
          }, c2 = function(t4) {
            var e3, n3;
            return a2.call((e3 = (n3 = t4.dataTransfer) != null ? n3.types : void 0) != null ? e3 : [], "Files") >= 0;
          }, h = function(t4) {
            var e3;
            return (e3 = t4.clipboardData) ? a2.call(e3.types, "Files") >= 0 && e3.types.length === 1 && e3.files.length >= 1 : void 0;
          }, p2 = function(t4) {
            var e3;
            return (e3 = t4.clipboardData) ? a2.call(e3.types, "text/plain") >= 0 && e3.types.length === 1 : void 0;
          }, l = function(t4) {
            var e3;
            return e3 = [], t4.altKey && e3.push("alt"), t4.shiftKey && e3.push("shift"), e3.push(t4.key), e3;
          }, d = function(t4) {
            return {x: t4.clientX, y: t4.clientY};
          }, u;
        }(e2.InputController);
      }.call(this), function() {
        var t3, n2, i, o2, r2, s2, a2, u, c2 = function(t4, e3) {
          return function() {
            return t4.apply(e3, arguments);
          };
        }, l = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var i2 in e3)
            h.call(e3, i2) && (t4[i2] = e3[i2]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, h = {}.hasOwnProperty;
        n2 = e2.defer, i = e2.handleEvent, s2 = e2.makeElement, u = e2.tagName, a2 = e2.config, r2 = a2.lang, t3 = a2.css, o2 = a2.keyNames, e2.AttachmentEditorController = function(a3) {
          function h2(t4, e3, n3, i2) {
            this.attachmentPiece = t4, this.element = e3, this.container = n3, this.options = i2 != null ? i2 : {}, this.didBlurCaption = c2(this.didBlurCaption, this), this.didChangeCaption = c2(this.didChangeCaption, this), this.didInputCaption = c2(this.didInputCaption, this), this.didKeyDownCaption = c2(this.didKeyDownCaption, this), this.didClickActionButton = c2(this.didClickActionButton, this), this.didClickToolbar = c2(this.didClickToolbar, this), this.attachment = this.attachmentPiece.attachment, u(this.element) === "a" && (this.element = this.element.firstChild), this.install();
          }
          var p2;
          return l(h2, a3), p2 = function(t4) {
            return function() {
              var e3;
              return e3 = t4.apply(this, arguments), e3["do"](), this.undos == null && (this.undos = []), this.undos.push(e3.undo);
            };
          }, h2.prototype.install = function() {
            return this.makeElementMutable(), this.addToolbar(), this.attachment.isPreviewable() ? this.installCaptionEditor() : void 0;
          }, h2.prototype.uninstall = function() {
            var t4, e3;
            for (this.savePendingCaption(); e3 = this.undos.pop(); )
              e3();
            return (t4 = this.delegate) != null ? t4.didUninstallAttachmentEditor(this) : void 0;
          }, h2.prototype.savePendingCaption = function() {
            var t4, e3, n3;
            return this.pendingCaption != null ? (t4 = this.pendingCaption, this.pendingCaption = null, t4 ? (e3 = this.delegate) != null && typeof e3.attachmentEditorDidRequestUpdatingAttributesForAttachment == "function" ? e3.attachmentEditorDidRequestUpdatingAttributesForAttachment({caption: t4}, this.attachment) : void 0 : (n3 = this.delegate) != null && typeof n3.attachmentEditorDidRequestRemovingAttributeForAttachment == "function" ? n3.attachmentEditorDidRequestRemovingAttributeForAttachment("caption", this.attachment) : void 0) : void 0;
          }, h2.prototype.makeElementMutable = p2(function() {
            return {do: function(t4) {
              return function() {
                return t4.element.dataset.trixMutable = true;
              };
            }(this), undo: function(t4) {
              return function() {
                return delete t4.element.dataset.trixMutable;
              };
            }(this)};
          }), h2.prototype.addToolbar = p2(function() {
            var n3;
            return n3 = s2({tagName: "div", className: t3.attachmentToolbar, data: {trixMutable: true}, childNodes: s2({tagName: "div", className: "trix-button-row", childNodes: s2({tagName: "span", className: "trix-button-group trix-button-group--actions", childNodes: s2({tagName: "button", className: "trix-button trix-button--remove", textContent: r2.remove, attributes: {title: r2.remove}, data: {trixAction: "remove"}})})})}), this.attachment.isPreviewable() && n3.appendChild(s2({tagName: "div", className: t3.attachmentMetadataContainer, childNodes: s2({tagName: "span", className: t3.attachmentMetadata, childNodes: [s2({tagName: "span", className: t3.attachmentName, textContent: this.attachment.getFilename(), attributes: {title: this.attachment.getFilename()}}), s2({tagName: "span", className: t3.attachmentSize, textContent: this.attachment.getFormattedFilesize()})]})})), i("click", {onElement: n3, withCallback: this.didClickToolbar}), i("click", {onElement: n3, matchingSelector: "[data-trix-action]", withCallback: this.didClickActionButton}), {do: function(t4) {
              return function() {
                return t4.element.appendChild(n3);
              };
            }(this), undo: function() {
              return function() {
                return e2.removeNode(n3);
              };
            }(this)};
          }), h2.prototype.installCaptionEditor = p2(function() {
            var o3, a4, u2, c3, l2;
            return c3 = s2({tagName: "textarea", className: t3.attachmentCaptionEditor, attributes: {placeholder: r2.captionPlaceholder}, data: {trixMutable: true}}), c3.value = this.attachmentPiece.getCaption(), l2 = c3.cloneNode(), l2.classList.add("trix-autoresize-clone"), l2.tabIndex = -1, o3 = function() {
              return l2.value = c3.value, c3.style.height = l2.scrollHeight + "px";
            }, i("input", {onElement: c3, withCallback: o3}), i("input", {onElement: c3, withCallback: this.didInputCaption}), i("keydown", {onElement: c3, withCallback: this.didKeyDownCaption}), i("change", {onElement: c3, withCallback: this.didChangeCaption}), i("blur", {onElement: c3, withCallback: this.didBlurCaption}), u2 = this.element.querySelector("figcaption"), a4 = u2.cloneNode(), {do: function(e3) {
              return function() {
                return u2.style.display = "none", a4.appendChild(c3), a4.appendChild(l2), a4.classList.add(t3.attachmentCaption + "--editing"), u2.parentElement.insertBefore(a4, u2), o3(), e3.options.editCaption ? n2(function() {
                  return c3.focus();
                }) : void 0;
              };
            }(this), undo: function() {
              return e2.removeNode(a4), u2.style.display = null;
            }};
          }), h2.prototype.didClickToolbar = function(t4) {
            return t4.preventDefault(), t4.stopPropagation();
          }, h2.prototype.didClickActionButton = function(t4) {
            var e3, n3;
            switch (e3 = t4.target.getAttribute("data-trix-action")) {
              case "remove":
                return (n3 = this.delegate) != null ? n3.attachmentEditorDidRequestRemovalOfAttachment(this.attachment) : void 0;
            }
          }, h2.prototype.didKeyDownCaption = function(t4) {
            var e3;
            return o2[t4.keyCode] === "return" ? (t4.preventDefault(), this.savePendingCaption(), (e3 = this.delegate) != null && typeof e3.attachmentEditorDidRequestDeselectingAttachment == "function" ? e3.attachmentEditorDidRequestDeselectingAttachment(this.attachment) : void 0) : void 0;
          }, h2.prototype.didInputCaption = function(t4) {
            return this.pendingCaption = t4.target.value.replace(/\s/g, " ").trim();
          }, h2.prototype.didChangeCaption = function() {
            return this.savePendingCaption();
          }, h2.prototype.didBlurCaption = function() {
            return this.savePendingCaption();
          }, h2;
        }(e2.BasicObject);
      }.call(this), function() {
        var t3, n2, i, o2 = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var i2 in e3)
            r2.call(e3, i2) && (t4[i2] = e3[i2]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, r2 = {}.hasOwnProperty;
        i = e2.makeElement, t3 = e2.config.css, e2.AttachmentView = function(r3) {
          function s2() {
            s2.__super__.constructor.apply(this, arguments), this.attachment = this.object, this.attachment.uploadProgressDelegate = this, this.attachmentPiece = this.options.piece;
          }
          var a2;
          return o2(s2, r3), s2.attachmentSelector = "[data-trix-attachment]", s2.prototype.createContentNodes = function() {
            return [];
          }, s2.prototype.createNodes = function() {
            var e3, n3, o3, r4, s3, u, c2;
            if (e3 = r4 = i({tagName: "figure", className: this.getClassName(), data: this.getData(), editable: false}), (n3 = this.getHref()) && (r4 = i({tagName: "a", editable: false, attributes: {href: n3, tabindex: -1}}), e3.appendChild(r4)), this.attachment.hasContent())
              r4.innerHTML = this.attachment.getContent();
            else
              for (c2 = this.createContentNodes(), o3 = 0, s3 = c2.length; s3 > o3; o3++)
                u = c2[o3], r4.appendChild(u);
            return r4.appendChild(this.createCaptionElement()), this.attachment.isPending() && (this.progressElement = i({tagName: "progress", attributes: {class: t3.attachmentProgress, value: this.attachment.getUploadProgress(), max: 100}, data: {trixMutable: true, trixStoreKey: ["progressElement", this.attachment.id].join("/")}}), e3.appendChild(this.progressElement)), [a2("left"), e3, a2("right")];
          }, s2.prototype.createCaptionElement = function() {
            var e3, n3, o3, r4, s3, a3, u;
            return o3 = i({tagName: "figcaption", className: t3.attachmentCaption}), (e3 = this.attachmentPiece.getCaption()) ? (o3.classList.add(t3.attachmentCaption + "--edited"), o3.textContent = e3) : (n3 = this.getCaptionConfig(), n3.name && (r4 = this.attachment.getFilename()), n3.size && (a3 = this.attachment.getFormattedFilesize()), r4 && (s3 = i({tagName: "span", className: t3.attachmentName, textContent: r4}), o3.appendChild(s3)), a3 && (r4 && o3.appendChild(document.createTextNode(" ")), u = i({tagName: "span", className: t3.attachmentSize, textContent: a3}), o3.appendChild(u))), o3;
          }, s2.prototype.getClassName = function() {
            var e3, n3;
            return n3 = [t3.attachment, t3.attachment + "--" + this.attachment.getType()], (e3 = this.attachment.getExtension()) && n3.push(t3.attachment + "--" + e3), n3.join(" ");
          }, s2.prototype.getData = function() {
            var t4, e3;
            return e3 = {trixAttachment: JSON.stringify(this.attachment), trixContentType: this.attachment.getContentType(), trixId: this.attachment.id}, t4 = this.attachmentPiece.attributes, t4.isEmpty() || (e3.trixAttributes = JSON.stringify(t4)), this.attachment.isPending() && (e3.trixSerialize = false), e3;
          }, s2.prototype.getHref = function() {
            return n2(this.attachment.getContent(), "a") ? void 0 : this.attachment.getHref();
          }, s2.prototype.getCaptionConfig = function() {
            var t4, n3, i2;
            return i2 = this.attachment.getType(), t4 = e2.copyObject((n3 = e2.config.attachments[i2]) != null ? n3.caption : void 0), i2 === "file" && (t4.name = true), t4;
          }, s2.prototype.findProgressElement = function() {
            var t4;
            return (t4 = this.findElement()) != null ? t4.querySelector("progress") : void 0;
          }, a2 = function(t4) {
            return i({tagName: "span", textContent: e2.ZERO_WIDTH_SPACE, data: {trixCursorTarget: t4, trixSerialize: false}});
          }, s2.prototype.attachmentDidChangeUploadProgress = function() {
            var t4, e3;
            return e3 = this.attachment.getUploadProgress(), (t4 = this.findProgressElement()) != null ? t4.value = e3 : void 0;
          }, s2;
        }(e2.ObjectView), n2 = function(t4, e3) {
          var n3;
          return n3 = i("div"), n3.innerHTML = t4 != null ? t4 : "", n3.querySelector(e3);
        };
      }.call(this), function() {
        var t3, n2 = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var o2 in e3)
            i.call(e3, o2) && (t4[o2] = e3[o2]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, i = {}.hasOwnProperty;
        t3 = e2.makeElement, e2.PreviewableAttachmentView = function(i2) {
          function o2() {
            o2.__super__.constructor.apply(this, arguments), this.attachment.previewDelegate = this;
          }
          return n2(o2, i2), o2.prototype.createContentNodes = function() {
            return this.image = t3({tagName: "img", attributes: {src: ""}, data: {trixMutable: true}}), this.refresh(this.image), [this.image];
          }, o2.prototype.createCaptionElement = function() {
            var t4;
            return t4 = o2.__super__.createCaptionElement.apply(this, arguments), t4.textContent || t4.setAttribute("data-trix-placeholder", e2.config.lang.captionPlaceholder), t4;
          }, o2.prototype.refresh = function(t4) {
            var e3;
            return t4 == null && (t4 = (e3 = this.findElement()) != null ? e3.querySelector("img") : void 0), t4 ? this.updateAttributesForImage(t4) : void 0;
          }, o2.prototype.updateAttributesForImage = function(t4) {
            var e3, n3, i3, o3, r2, s2;
            return r2 = this.attachment.getURL(), n3 = this.attachment.getPreviewURL(), t4.src = n3 || r2, n3 === r2 ? t4.removeAttribute("data-trix-serialized-attributes") : (i3 = JSON.stringify({src: r2}), t4.setAttribute("data-trix-serialized-attributes", i3)), s2 = this.attachment.getWidth(), e3 = this.attachment.getHeight(), s2 != null && (t4.width = s2), e3 != null && (t4.height = e3), o3 = ["imageElement", this.attachment.id, t4.src, t4.width, t4.height].join("/"), t4.dataset.trixStoreKey = o3;
          }, o2.prototype.attachmentDidChangeAttributes = function() {
            return this.refresh(this.image), this.refresh();
          }, o2;
        }(e2.AttachmentView);
      }.call(this), function() {
        var t3, n2, i, o2 = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var i2 in e3)
            r2.call(e3, i2) && (t4[i2] = e3[i2]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, r2 = {}.hasOwnProperty;
        i = e2.makeElement, t3 = e2.findInnerElement, n2 = e2.getTextConfig, e2.PieceView = function(r3) {
          function s2() {
            var t4;
            s2.__super__.constructor.apply(this, arguments), this.piece = this.object, this.attributes = this.piece.getAttributes(), t4 = this.options, this.textConfig = t4.textConfig, this.context = t4.context, this.piece.attachment ? this.attachment = this.piece.attachment : this.string = this.piece.toString();
          }
          var a2;
          return o2(s2, r3), s2.prototype.createNodes = function() {
            var e3, n3, i2, o3, r4, s3;
            if (s3 = this.attachment ? this.createAttachmentNodes() : this.createStringNodes(), e3 = this.createElement()) {
              for (i2 = t3(e3), n3 = 0, o3 = s3.length; o3 > n3; n3++)
                r4 = s3[n3], i2.appendChild(r4);
              s3 = [e3];
            }
            return s3;
          }, s2.prototype.createAttachmentNodes = function() {
            var t4, n3;
            return t4 = this.attachment.isPreviewable() ? e2.PreviewableAttachmentView : e2.AttachmentView, n3 = this.createChildView(t4, this.piece.attachment, {piece: this.piece}), n3.getNodes();
          }, s2.prototype.createStringNodes = function() {
            var t4, e3, n3, o3, r4, s3, a3, u, c2, l;
            if ((u = this.textConfig) != null ? u.plaintext : void 0)
              return [document.createTextNode(this.string)];
            for (a3 = [], c2 = this.string.split("\n"), n3 = e3 = 0, o3 = c2.length; o3 > e3; n3 = ++e3)
              l = c2[n3], n3 > 0 && (t4 = i("br"), a3.push(t4)), (r4 = l.length) && (s3 = document.createTextNode(this.preserveSpaces(l)), a3.push(s3));
            return a3;
          }, s2.prototype.createElement = function() {
            var t4, e3, o3, r4, s3, a3, u, c2, l;
            c2 = {}, a3 = this.attributes;
            for (r4 in a3)
              if (l = a3[r4], (t4 = n2(r4)) && (t4.tagName && (s3 = i(t4.tagName), o3 ? (o3.appendChild(s3), o3 = s3) : e3 = o3 = s3), t4.styleProperty && (c2[t4.styleProperty] = l), t4.style)) {
                u = t4.style;
                for (r4 in u)
                  l = u[r4], c2[r4] = l;
              }
            if (Object.keys(c2).length) {
              e3 == null && (e3 = i("span"));
              for (r4 in c2)
                l = c2[r4], e3.style[r4] = l;
            }
            return e3;
          }, s2.prototype.createContainerElement = function() {
            var t4, e3, o3, r4, s3;
            r4 = this.attributes;
            for (o3 in r4)
              if (s3 = r4[o3], (e3 = n2(o3)) && e3.groupTagName)
                return t4 = {}, t4[o3] = s3, i(e3.groupTagName, t4);
          }, a2 = e2.NON_BREAKING_SPACE, s2.prototype.preserveSpaces = function(t4) {
            return this.context.isLast && (t4 = t4.replace(/\ $/, a2)), t4 = t4.replace(/(\S)\ {3}(\S)/g, "$1 " + a2 + " $2").replace(/\ {2}/g, a2 + " ").replace(/\ {2}/g, " " + a2), (this.context.isFirst || this.context.followsWhitespace) && (t4 = t4.replace(/^\ /, a2)), t4;
          }, s2;
        }(e2.ObjectView);
      }.call(this), function() {
        var t3 = function(t4, e3) {
          function i() {
            this.constructor = t4;
          }
          for (var o2 in e3)
            n2.call(e3, o2) && (t4[o2] = e3[o2]);
          return i.prototype = e3.prototype, t4.prototype = new i(), t4.__super__ = e3.prototype, t4;
        }, n2 = {}.hasOwnProperty;
        e2.TextView = function(n3) {
          function i() {
            i.__super__.constructor.apply(this, arguments), this.text = this.object, this.textConfig = this.options.textConfig;
          }
          var o2;
          return t3(i, n3), i.prototype.createNodes = function() {
            var t4, n4, i2, r2, s2, a2, u, c2, l, h;
            for (a2 = [], c2 = e2.ObjectGroup.groupObjects(this.getPieces()), r2 = c2.length - 1, i2 = n4 = 0, s2 = c2.length; s2 > n4; i2 = ++n4)
              u = c2[i2], t4 = {}, i2 === 0 && (t4.isFirst = true), i2 === r2 && (t4.isLast = true), o2(l) && (t4.followsWhitespace = true), h = this.findOrCreateCachedChildView(e2.PieceView, u, {textConfig: this.textConfig, context: t4}), a2.push.apply(a2, h.getNodes()), l = u;
            return a2;
          }, i.prototype.getPieces = function() {
            var t4, e3, n4, i2, o3;
            for (i2 = this.text.getPieces(), o3 = [], t4 = 0, e3 = i2.length; e3 > t4; t4++)
              n4 = i2[t4], n4.hasAttribute("blockBreak") || o3.push(n4);
            return o3;
          }, o2 = function(t4) {
            return /\s$/.test(t4 != null ? t4.toString() : void 0);
          }, i;
        }(e2.ObjectView);
      }.call(this), function() {
        var t3, n2, i, o2 = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var i2 in e3)
            r2.call(e3, i2) && (t4[i2] = e3[i2]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, r2 = {}.hasOwnProperty;
        i = e2.makeElement, n2 = e2.getBlockConfig, t3 = e2.config.css, e2.BlockView = function(r3) {
          function s2() {
            s2.__super__.constructor.apply(this, arguments), this.block = this.object, this.attributes = this.block.getAttributes();
          }
          return o2(s2, r3), s2.prototype.createNodes = function() {
            var t4, o3, r4, s3, a2, u, c2, l, h, p2, d;
            if (o3 = document.createComment("block"), c2 = [o3], this.block.isEmpty() ? c2.push(i("br")) : (p2 = (l = n2(this.block.getLastAttribute())) != null ? l.text : void 0, d = this.findOrCreateCachedChildView(e2.TextView, this.block.text, {textConfig: p2}), c2.push.apply(c2, d.getNodes()), this.shouldAddExtraNewlineElement() && c2.push(i("br"))), this.attributes.length)
              return c2;
            for (h = e2.config.blockAttributes["default"].tagName, this.block.isRTL() && (t4 = {dir: "rtl"}), r4 = i({tagName: h, attributes: t4}), s3 = 0, a2 = c2.length; a2 > s3; s3++)
              u = c2[s3], r4.appendChild(u);
            return [r4];
          }, s2.prototype.createContainerElement = function(e3) {
            var o3, r4, s3, a2, u;
            return o3 = this.attributes[e3], u = n2(o3).tagName, e3 === 0 && this.block.isRTL() && (r4 = {dir: "rtl"}), o3 === "attachmentGallery" && (a2 = this.block.getBlockBreakPosition(), s3 = t3.attachmentGallery + " " + t3.attachmentGallery + "--" + a2), i({tagName: u, className: s3, attributes: r4});
          }, s2.prototype.shouldAddExtraNewlineElement = function() {
            return /\n\n$/.test(this.block.toString());
          }, s2;
        }(e2.ObjectView);
      }.call(this), function() {
        var t3, n2, i = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var i2 in e3)
            o2.call(e3, i2) && (t4[i2] = e3[i2]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, o2 = {}.hasOwnProperty;
        t3 = e2.defer, n2 = e2.makeElement, e2.DocumentView = function(o3) {
          function r2() {
            r2.__super__.constructor.apply(this, arguments), this.element = this.options.element, this.elementStore = new e2.ElementStore(), this.setDocument(this.object);
          }
          var s2, a2, u;
          return i(r2, o3), r2.render = function(t4) {
            var e3, i2;
            return e3 = n2("div"), i2 = new this(t4, {element: e3}), i2.render(), i2.sync(), e3;
          }, r2.prototype.setDocument = function(t4) {
            return t4.isEqualTo(this.document) ? void 0 : this.document = this.object = t4;
          }, r2.prototype.render = function() {
            var t4, i2, o4, r3, s3, a3, u2;
            if (this.childViews = [], this.shadowElement = n2("div"), !this.document.isEmpty()) {
              for (s3 = e2.ObjectGroup.groupObjects(this.document.getBlocks(), {asTree: true}), a3 = [], t4 = 0, i2 = s3.length; i2 > t4; t4++)
                r3 = s3[t4], u2 = this.findOrCreateCachedChildView(e2.BlockView, r3), a3.push(function() {
                  var t5, e3, n3, i3;
                  for (n3 = u2.getNodes(), i3 = [], t5 = 0, e3 = n3.length; e3 > t5; t5++)
                    o4 = n3[t5], i3.push(this.shadowElement.appendChild(o4));
                  return i3;
                }.call(this));
              return a3;
            }
          }, r2.prototype.isSynced = function() {
            return s2(this.shadowElement, this.element);
          }, r2.prototype.sync = function() {
            var t4;
            for (t4 = this.createDocumentFragmentForSync(); this.element.lastChild; )
              this.element.removeChild(this.element.lastChild);
            return this.element.appendChild(t4), this.didSync();
          }, r2.prototype.didSync = function() {
            return this.elementStore.reset(a2(this.element)), t3(function(t4) {
              return function() {
                return t4.garbageCollectCachedViews();
              };
            }(this));
          }, r2.prototype.createDocumentFragmentForSync = function() {
            var t4, e3, n3, i2, o4, r3, s3, u2, c2, l;
            for (e3 = document.createDocumentFragment(), u2 = this.shadowElement.childNodes, n3 = 0, o4 = u2.length; o4 > n3; n3++)
              s3 = u2[n3], e3.appendChild(s3.cloneNode(true));
            for (c2 = a2(e3), i2 = 0, r3 = c2.length; r3 > i2; i2++)
              t4 = c2[i2], (l = this.elementStore.remove(t4)) && t4.parentNode.replaceChild(l, t4);
            return e3;
          }, a2 = function(t4) {
            return t4.querySelectorAll("[data-trix-store-key]");
          }, s2 = function(t4, e3) {
            return u(t4.innerHTML) === u(e3.innerHTML);
          }, u = function(t4) {
            return t4.replace(/&nbsp;/g, " ");
          }, r2;
        }(e2.ObjectView);
      }.call(this), function() {
        var t3, n2, i, o2, r2, s2 = function(t4, e3) {
          return function() {
            return t4.apply(e3, arguments);
          };
        }, a2 = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var i2 in e3)
            u.call(e3, i2) && (t4[i2] = e3[i2]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, u = {}.hasOwnProperty;
        i = e2.findClosestElementFromNode, o2 = e2.handleEvent, r2 = e2.innerElementIsActive, n2 = e2.defer, t3 = e2.AttachmentView.attachmentSelector, e2.CompositionController = function(u2) {
          function c2(n3, i2) {
            this.element = n3, this.composition = i2, this.didClickAttachment = s2(this.didClickAttachment, this), this.didBlur = s2(this.didBlur, this), this.didFocus = s2(this.didFocus, this), this.documentView = new e2.DocumentView(this.composition.document, {element: this.element}), o2("focus", {onElement: this.element, withCallback: this.didFocus}), o2("blur", {onElement: this.element, withCallback: this.didBlur}), o2("click", {onElement: this.element, matchingSelector: "a[contenteditable=false]", preventDefault: true}), o2("mousedown", {onElement: this.element, matchingSelector: t3, withCallback: this.didClickAttachment}), o2("click", {onElement: this.element, matchingSelector: "a" + t3, preventDefault: true});
          }
          return a2(c2, u2), c2.prototype.didFocus = function() {
            var t4, e3, n3;
            return t4 = function(t5) {
              return function() {
                var e4;
                return t5.focused ? void 0 : (t5.focused = true, (e4 = t5.delegate) != null && typeof e4.compositionControllerDidFocus == "function" ? e4.compositionControllerDidFocus() : void 0);
              };
            }(this), (e3 = (n3 = this.blurPromise) != null ? n3.then(t4) : void 0) != null ? e3 : t4();
          }, c2.prototype.didBlur = function() {
            return this.blurPromise = new Promise(function(t4) {
              return function(e3) {
                return n2(function() {
                  var n3;
                  return r2(t4.element) || (t4.focused = null, (n3 = t4.delegate) != null && typeof n3.compositionControllerDidBlur == "function" && n3.compositionControllerDidBlur()), t4.blurPromise = null, e3();
                });
              };
            }(this));
          }, c2.prototype.didClickAttachment = function(t4, e3) {
            var n3, o3, r3;
            return n3 = this.findAttachmentForElement(e3), o3 = i(t4.target, {matchingSelector: "figcaption"}) != null, (r3 = this.delegate) != null && typeof r3.compositionControllerDidSelectAttachment == "function" ? r3.compositionControllerDidSelectAttachment(n3, {editCaption: o3}) : void 0;
          }, c2.prototype.getSerializableElement = function() {
            return this.isEditingAttachment() ? this.documentView.shadowElement : this.element;
          }, c2.prototype.render = function() {
            var t4, e3, n3;
            return this.revision !== this.composition.revision && (this.documentView.setDocument(this.composition.document), this.documentView.render(), this.revision = this.composition.revision), this.canSyncDocumentView() && !this.documentView.isSynced() && ((t4 = this.delegate) != null && typeof t4.compositionControllerWillSyncDocumentView == "function" && t4.compositionControllerWillSyncDocumentView(), this.documentView.sync(), (e3 = this.delegate) != null && typeof e3.compositionControllerDidSyncDocumentView == "function" && e3.compositionControllerDidSyncDocumentView()), (n3 = this.delegate) != null && typeof n3.compositionControllerDidRender == "function" ? n3.compositionControllerDidRender() : void 0;
          }, c2.prototype.rerenderViewForObject = function(t4) {
            return this.invalidateViewForObject(t4), this.render();
          }, c2.prototype.invalidateViewForObject = function(t4) {
            return this.documentView.invalidateViewForObject(t4);
          }, c2.prototype.isViewCachingEnabled = function() {
            return this.documentView.isViewCachingEnabled();
          }, c2.prototype.enableViewCaching = function() {
            return this.documentView.enableViewCaching();
          }, c2.prototype.disableViewCaching = function() {
            return this.documentView.disableViewCaching();
          }, c2.prototype.refreshViewCache = function() {
            return this.documentView.garbageCollectCachedViews();
          }, c2.prototype.isEditingAttachment = function() {
            return this.attachmentEditor != null;
          }, c2.prototype.installAttachmentEditorForAttachment = function(t4, n3) {
            var i2, o3, r3;
            if (((r3 = this.attachmentEditor) != null ? r3.attachment : void 0) !== t4 && (o3 = this.documentView.findElementForObject(t4)))
              return this.uninstallAttachmentEditor(), i2 = this.composition.document.getAttachmentPieceForAttachment(t4), this.attachmentEditor = new e2.AttachmentEditorController(i2, o3, this.element, n3), this.attachmentEditor.delegate = this;
          }, c2.prototype.uninstallAttachmentEditor = function() {
            var t4;
            return (t4 = this.attachmentEditor) != null ? t4.uninstall() : void 0;
          }, c2.prototype.didUninstallAttachmentEditor = function() {
            return this.attachmentEditor = null, this.render();
          }, c2.prototype.attachmentEditorDidRequestUpdatingAttributesForAttachment = function(t4, e3) {
            var n3;
            return (n3 = this.delegate) != null && typeof n3.compositionControllerWillUpdateAttachment == "function" && n3.compositionControllerWillUpdateAttachment(e3), this.composition.updateAttributesForAttachment(t4, e3);
          }, c2.prototype.attachmentEditorDidRequestRemovingAttributeForAttachment = function(t4, e3) {
            var n3;
            return (n3 = this.delegate) != null && typeof n3.compositionControllerWillUpdateAttachment == "function" && n3.compositionControllerWillUpdateAttachment(e3), this.composition.removeAttributeForAttachment(t4, e3);
          }, c2.prototype.attachmentEditorDidRequestRemovalOfAttachment = function(t4) {
            var e3;
            return (e3 = this.delegate) != null && typeof e3.compositionControllerDidRequestRemovalOfAttachment == "function" ? e3.compositionControllerDidRequestRemovalOfAttachment(t4) : void 0;
          }, c2.prototype.attachmentEditorDidRequestDeselectingAttachment = function(t4) {
            var e3;
            return (e3 = this.delegate) != null && typeof e3.compositionControllerDidRequestDeselectingAttachment == "function" ? e3.compositionControllerDidRequestDeselectingAttachment(t4) : void 0;
          }, c2.prototype.canSyncDocumentView = function() {
            return !this.isEditingAttachment();
          }, c2.prototype.findAttachmentForElement = function(t4) {
            return this.composition.document.getAttachmentById(parseInt(t4.dataset.trixId, 10));
          }, c2;
        }(e2.BasicObject);
      }.call(this), function() {
        var t3, n2, i, o2 = function(t4, e3) {
          return function() {
            return t4.apply(e3, arguments);
          };
        }, r2 = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var i2 in e3)
            s2.call(e3, i2) && (t4[i2] = e3[i2]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, s2 = {}.hasOwnProperty;
        n2 = e2.handleEvent, i = e2.triggerEvent, t3 = e2.findClosestElementFromNode, e2.ToolbarController = function(e3) {
          function s3(t4) {
            this.element = t4, this.didKeyDownDialogInput = o2(this.didKeyDownDialogInput, this), this.didClickDialogButton = o2(this.didClickDialogButton, this), this.didClickAttributeButton = o2(this.didClickAttributeButton, this), this.didClickActionButton = o2(this.didClickActionButton, this), this.attributes = {}, this.actions = {}, this.resetDialogInputs(), n2("mousedown", {onElement: this.element, matchingSelector: a2, withCallback: this.didClickActionButton}), n2("mousedown", {onElement: this.element, matchingSelector: c2, withCallback: this.didClickAttributeButton}), n2("click", {onElement: this.element, matchingSelector: v, preventDefault: true}), n2("click", {onElement: this.element, matchingSelector: l, withCallback: this.didClickDialogButton}), n2("keydown", {onElement: this.element, matchingSelector: h, withCallback: this.didKeyDownDialogInput});
          }
          var a2, u, c2, l, h, p2, d, f, g, m, v;
          return r2(s3, e3), c2 = "[data-trix-attribute]", a2 = "[data-trix-action]", v = c2 + ", " + a2, p2 = "[data-trix-dialog]", u = p2 + "[data-trix-active]", l = p2 + " [data-trix-method]", h = p2 + " [data-trix-input]", s3.prototype.didClickActionButton = function(t4, e4) {
            var n3, i2, o3;
            return (i2 = this.delegate) != null && i2.toolbarDidClickButton(), t4.preventDefault(), n3 = d(e4), this.getDialog(n3) ? this.toggleDialog(n3) : (o3 = this.delegate) != null ? o3.toolbarDidInvokeAction(n3) : void 0;
          }, s3.prototype.didClickAttributeButton = function(t4, e4) {
            var n3, i2, o3;
            return (i2 = this.delegate) != null && i2.toolbarDidClickButton(), t4.preventDefault(), n3 = f(e4), this.getDialog(n3) ? this.toggleDialog(n3) : (o3 = this.delegate) != null && o3.toolbarDidToggleAttribute(n3), this.refreshAttributeButtons();
          }, s3.prototype.didClickDialogButton = function(e4, n3) {
            var i2, o3;
            return i2 = t3(n3, {matchingSelector: p2}), o3 = n3.getAttribute("data-trix-method"), this[o3].call(this, i2);
          }, s3.prototype.didKeyDownDialogInput = function(t4, e4) {
            var n3, i2;
            return t4.keyCode === 13 && (t4.preventDefault(), n3 = e4.getAttribute("name"), i2 = this.getDialog(n3), this.setAttribute(i2)), t4.keyCode === 27 ? (t4.preventDefault(), this.hideDialog()) : void 0;
          }, s3.prototype.updateActions = function(t4) {
            return this.actions = t4, this.refreshActionButtons();
          }, s3.prototype.refreshActionButtons = function() {
            return this.eachActionButton(function(t4) {
              return function(e4, n3) {
                return e4.disabled = t4.actions[n3] === false;
              };
            }(this));
          }, s3.prototype.eachActionButton = function(t4) {
            var e4, n3, i2, o3, r3;
            for (o3 = this.element.querySelectorAll(a2), r3 = [], n3 = 0, i2 = o3.length; i2 > n3; n3++)
              e4 = o3[n3], r3.push(t4(e4, d(e4)));
            return r3;
          }, s3.prototype.updateAttributes = function(t4) {
            return this.attributes = t4, this.refreshAttributeButtons();
          }, s3.prototype.refreshAttributeButtons = function() {
            return this.eachAttributeButton(function(t4) {
              return function(e4, n3) {
                return e4.disabled = t4.attributes[n3] === false, t4.attributes[n3] || t4.dialogIsVisible(n3) ? (e4.setAttribute("data-trix-active", ""), e4.classList.add("trix-active")) : (e4.removeAttribute("data-trix-active"), e4.classList.remove("trix-active"));
              };
            }(this));
          }, s3.prototype.eachAttributeButton = function(t4) {
            var e4, n3, i2, o3, r3;
            for (o3 = this.element.querySelectorAll(c2), r3 = [], n3 = 0, i2 = o3.length; i2 > n3; n3++)
              e4 = o3[n3], r3.push(t4(e4, f(e4)));
            return r3;
          }, s3.prototype.applyKeyboardCommand = function(t4) {
            var e4, n3, o3, r3, s4, a3, u2;
            for (s4 = JSON.stringify(t4.sort()), u2 = this.element.querySelectorAll("[data-trix-key]"), r3 = 0, a3 = u2.length; a3 > r3; r3++)
              if (e4 = u2[r3], o3 = e4.getAttribute("data-trix-key").split("+"), n3 = JSON.stringify(o3.sort()), n3 === s4)
                return i("mousedown", {onElement: e4}), true;
            return false;
          }, s3.prototype.dialogIsVisible = function(t4) {
            var e4;
            return (e4 = this.getDialog(t4)) ? e4.hasAttribute("data-trix-active") : void 0;
          }, s3.prototype.toggleDialog = function(t4) {
            return this.dialogIsVisible(t4) ? this.hideDialog() : this.showDialog(t4);
          }, s3.prototype.showDialog = function(t4) {
            var e4, n3, i2, o3, r3, s4, a3, u2, c3, l2;
            for (this.hideDialog(), (a3 = this.delegate) != null && a3.toolbarWillShowDialog(), i2 = this.getDialog(t4), i2.setAttribute("data-trix-active", ""), i2.classList.add("trix-active"), u2 = i2.querySelectorAll("input[disabled]"), o3 = 0, s4 = u2.length; s4 > o3; o3++)
              n3 = u2[o3], n3.removeAttribute("disabled");
            return (e4 = f(i2)) && (r3 = m(i2, t4)) && (r3.value = (c3 = this.attributes[e4]) != null ? c3 : "", r3.select()), (l2 = this.delegate) != null ? l2.toolbarDidShowDialog(t4) : void 0;
          }, s3.prototype.setAttribute = function(t4) {
            var e4, n3, i2;
            return e4 = f(t4), n3 = m(t4, e4), n3.willValidate && !n3.checkValidity() ? (n3.setAttribute("data-trix-validate", ""), n3.classList.add("trix-validate"), n3.focus()) : ((i2 = this.delegate) != null && i2.toolbarDidUpdateAttribute(e4, n3.value), this.hideDialog());
          }, s3.prototype.removeAttribute = function(t4) {
            var e4, n3;
            return e4 = f(t4), (n3 = this.delegate) != null && n3.toolbarDidRemoveAttribute(e4), this.hideDialog();
          }, s3.prototype.hideDialog = function() {
            var t4, e4;
            return (t4 = this.element.querySelector(u)) ? (t4.removeAttribute("data-trix-active"), t4.classList.remove("trix-active"), this.resetDialogInputs(), (e4 = this.delegate) != null ? e4.toolbarDidHideDialog(g(t4)) : void 0) : void 0;
          }, s3.prototype.resetDialogInputs = function() {
            var t4, e4, n3, i2, o3;
            for (i2 = this.element.querySelectorAll(h), o3 = [], t4 = 0, n3 = i2.length; n3 > t4; t4++)
              e4 = i2[t4], e4.setAttribute("disabled", "disabled"), e4.removeAttribute("data-trix-validate"), o3.push(e4.classList.remove("trix-validate"));
            return o3;
          }, s3.prototype.getDialog = function(t4) {
            return this.element.querySelector("[data-trix-dialog=" + t4 + "]");
          }, m = function(t4, e4) {
            return e4 == null && (e4 = f(t4)), t4.querySelector("[data-trix-input][name='" + e4 + "']");
          }, d = function(t4) {
            return t4.getAttribute("data-trix-action");
          }, f = function(t4) {
            var e4;
            return (e4 = t4.getAttribute("data-trix-attribute")) != null ? e4 : t4.getAttribute("data-trix-dialog-attribute");
          }, g = function(t4) {
            return t4.getAttribute("data-trix-dialog");
          }, s3;
        }(e2.BasicObject);
      }.call(this), function() {
        var t3 = function(t4, e3) {
          function i() {
            this.constructor = t4;
          }
          for (var o2 in e3)
            n2.call(e3, o2) && (t4[o2] = e3[o2]);
          return i.prototype = e3.prototype, t4.prototype = new i(), t4.__super__ = e3.prototype, t4;
        }, n2 = {}.hasOwnProperty;
        e2.ImagePreloadOperation = function(e3) {
          function n3(t4) {
            this.url = t4;
          }
          return t3(n3, e3), n3.prototype.perform = function(t4) {
            var e4;
            return e4 = new Image(), e4.onload = function(n4) {
              return function() {
                return e4.width = n4.width = e4.naturalWidth, e4.height = n4.height = e4.naturalHeight, t4(true, e4);
              };
            }(this), e4.onerror = function() {
              return t4(false);
            }, e4.src = this.url;
          }, n3;
        }(e2.Operation);
      }.call(this), function() {
        var t3 = function(t4, e3) {
          return function() {
            return t4.apply(e3, arguments);
          };
        }, n2 = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var o2 in e3)
            i.call(e3, o2) && (t4[o2] = e3[o2]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, i = {}.hasOwnProperty;
        e2.Attachment = function(i2) {
          function o2(n3) {
            n3 == null && (n3 = {}), this.releaseFile = t3(this.releaseFile, this), o2.__super__.constructor.apply(this, arguments), this.attributes = e2.Hash.box(n3), this.didChangeAttributes();
          }
          return n2(o2, i2), o2.previewablePattern = /^image(\/(gif|png|jpe?g)|$)/, o2.attachmentForFile = function(t4) {
            var e3, n3;
            return n3 = this.attributesForFile(t4), e3 = new this(n3), e3.setFile(t4), e3;
          }, o2.attributesForFile = function(t4) {
            return new e2.Hash({filename: t4.name, filesize: t4.size, contentType: t4.type});
          }, o2.fromJSON = function(t4) {
            return new this(t4);
          }, o2.prototype.getAttribute = function(t4) {
            return this.attributes.get(t4);
          }, o2.prototype.hasAttribute = function(t4) {
            return this.attributes.has(t4);
          }, o2.prototype.getAttributes = function() {
            return this.attributes.toObject();
          }, o2.prototype.setAttributes = function(t4) {
            var e3, n3, i3;
            return t4 == null && (t4 = {}), e3 = this.attributes.merge(t4), this.attributes.isEqualTo(e3) ? void 0 : (this.attributes = e3, this.didChangeAttributes(), (n3 = this.previewDelegate) != null && typeof n3.attachmentDidChangeAttributes == "function" && n3.attachmentDidChangeAttributes(this), (i3 = this.delegate) != null && typeof i3.attachmentDidChangeAttributes == "function" ? i3.attachmentDidChangeAttributes(this) : void 0);
          }, o2.prototype.didChangeAttributes = function() {
            return this.isPreviewable() ? this.preloadURL() : void 0;
          }, o2.prototype.isPending = function() {
            return this.file != null && !(this.getURL() || this.getHref());
          }, o2.prototype.isPreviewable = function() {
            return this.attributes.has("previewable") ? this.attributes.get("previewable") : this.constructor.previewablePattern.test(this.getContentType());
          }, o2.prototype.getType = function() {
            return this.hasContent() ? "content" : this.isPreviewable() ? "preview" : "file";
          }, o2.prototype.getURL = function() {
            return this.attributes.get("url");
          }, o2.prototype.getHref = function() {
            return this.attributes.get("href");
          }, o2.prototype.getFilename = function() {
            var t4;
            return (t4 = this.attributes.get("filename")) != null ? t4 : "";
          }, o2.prototype.getFilesize = function() {
            return this.attributes.get("filesize");
          }, o2.prototype.getFormattedFilesize = function() {
            var t4;
            return t4 = this.attributes.get("filesize"), typeof t4 == "number" ? e2.config.fileSize.formatter(t4) : "";
          }, o2.prototype.getExtension = function() {
            var t4;
            return (t4 = this.getFilename().match(/\.(\w+)$/)) != null ? t4[1].toLowerCase() : void 0;
          }, o2.prototype.getContentType = function() {
            return this.attributes.get("contentType");
          }, o2.prototype.hasContent = function() {
            return this.attributes.has("content");
          }, o2.prototype.getContent = function() {
            return this.attributes.get("content");
          }, o2.prototype.getWidth = function() {
            return this.attributes.get("width");
          }, o2.prototype.getHeight = function() {
            return this.attributes.get("height");
          }, o2.prototype.getFile = function() {
            return this.file;
          }, o2.prototype.setFile = function(t4) {
            return this.file = t4, this.isPreviewable() ? this.preloadFile() : void 0;
          }, o2.prototype.releaseFile = function() {
            return this.releasePreloadedFile(), this.file = null;
          }, o2.prototype.getUploadProgress = function() {
            var t4;
            return (t4 = this.uploadProgress) != null ? t4 : 0;
          }, o2.prototype.setUploadProgress = function(t4) {
            var e3;
            return this.uploadProgress !== t4 ? (this.uploadProgress = t4, (e3 = this.uploadProgressDelegate) != null && typeof e3.attachmentDidChangeUploadProgress == "function" ? e3.attachmentDidChangeUploadProgress(this) : void 0) : void 0;
          }, o2.prototype.toJSON = function() {
            return this.getAttributes();
          }, o2.prototype.getCacheKey = function() {
            return [o2.__super__.getCacheKey.apply(this, arguments), this.attributes.getCacheKey(), this.getPreviewURL()].join("/");
          }, o2.prototype.getPreviewURL = function() {
            return this.previewURL || this.preloadingURL;
          }, o2.prototype.setPreviewURL = function(t4) {
            var e3, n3;
            return t4 !== this.getPreviewURL() ? (this.previewURL = t4, (e3 = this.previewDelegate) != null && typeof e3.attachmentDidChangeAttributes == "function" && e3.attachmentDidChangeAttributes(this), (n3 = this.delegate) != null && typeof n3.attachmentDidChangePreviewURL == "function" ? n3.attachmentDidChangePreviewURL(this) : void 0) : void 0;
          }, o2.prototype.preloadURL = function() {
            return this.preload(this.getURL(), this.releaseFile);
          }, o2.prototype.preloadFile = function() {
            return this.file ? (this.fileObjectURL = URL.createObjectURL(this.file), this.preload(this.fileObjectURL)) : void 0;
          }, o2.prototype.releasePreloadedFile = function() {
            return this.fileObjectURL ? (URL.revokeObjectURL(this.fileObjectURL), this.fileObjectURL = null) : void 0;
          }, o2.prototype.preload = function(t4, n3) {
            var i3;
            return t4 && t4 !== this.getPreviewURL() ? (this.preloadingURL = t4, i3 = new e2.ImagePreloadOperation(t4), i3.then(function(e3) {
              return function(i4) {
                var o3, r2;
                return r2 = i4.width, o3 = i4.height, e3.getWidth() && e3.getHeight() || e3.setAttributes({width: r2, height: o3}), e3.preloadingURL = null, e3.setPreviewURL(t4), typeof n3 == "function" ? n3() : void 0;
              };
            }(this))["catch"](function(t5) {
              return function() {
                return t5.preloadingURL = null, typeof n3 == "function" ? n3() : void 0;
              };
            }(this))) : void 0;
          }, o2;
        }(e2.Object);
      }.call(this), function() {
        var t3 = function(t4, e3) {
          function i() {
            this.constructor = t4;
          }
          for (var o2 in e3)
            n2.call(e3, o2) && (t4[o2] = e3[o2]);
          return i.prototype = e3.prototype, t4.prototype = new i(), t4.__super__ = e3.prototype, t4;
        }, n2 = {}.hasOwnProperty;
        e2.Piece = function(n3) {
          function i(t4, n4) {
            n4 == null && (n4 = {}), i.__super__.constructor.apply(this, arguments), this.attributes = e2.Hash.box(n4);
          }
          return t3(i, n3), i.types = {}, i.registerType = function(t4, e3) {
            return e3.type = t4, this.types[t4] = e3;
          }, i.fromJSON = function(t4) {
            var e3;
            return (e3 = this.types[t4.type]) ? e3.fromJSON(t4) : void 0;
          }, i.prototype.copyWithAttributes = function(t4) {
            return new this.constructor(this.getValue(), t4);
          }, i.prototype.copyWithAdditionalAttributes = function(t4) {
            return this.copyWithAttributes(this.attributes.merge(t4));
          }, i.prototype.copyWithoutAttribute = function(t4) {
            return this.copyWithAttributes(this.attributes.remove(t4));
          }, i.prototype.copy = function() {
            return this.copyWithAttributes(this.attributes);
          }, i.prototype.getAttribute = function(t4) {
            return this.attributes.get(t4);
          }, i.prototype.getAttributesHash = function() {
            return this.attributes;
          }, i.prototype.getAttributes = function() {
            return this.attributes.toObject();
          }, i.prototype.getCommonAttributes = function() {
            var t4, e3, n4;
            return (n4 = pieceList.getPieceAtIndex(0)) ? (t4 = n4.attributes, e3 = t4.getKeys(), pieceList.eachPiece(function(n5) {
              return e3 = t4.getKeysCommonToHash(n5.attributes), t4 = t4.slice(e3);
            }), t4.toObject()) : {};
          }, i.prototype.hasAttribute = function(t4) {
            return this.attributes.has(t4);
          }, i.prototype.hasSameStringValueAsPiece = function(t4) {
            return t4 != null && this.toString() === t4.toString();
          }, i.prototype.hasSameAttributesAsPiece = function(t4) {
            return t4 != null && (this.attributes === t4.attributes || this.attributes.isEqualTo(t4.attributes));
          }, i.prototype.isBlockBreak = function() {
            return false;
          }, i.prototype.isEqualTo = function(t4) {
            return i.__super__.isEqualTo.apply(this, arguments) || this.hasSameConstructorAs(t4) && this.hasSameStringValueAsPiece(t4) && this.hasSameAttributesAsPiece(t4);
          }, i.prototype.isEmpty = function() {
            return this.length === 0;
          }, i.prototype.isSerializable = function() {
            return true;
          }, i.prototype.toJSON = function() {
            return {type: this.constructor.type, attributes: this.getAttributes()};
          }, i.prototype.contentsForInspection = function() {
            return {type: this.constructor.type, attributes: this.attributes.inspect()};
          }, i.prototype.canBeGrouped = function() {
            return this.hasAttribute("href");
          }, i.prototype.canBeGroupedWith = function(t4) {
            return this.getAttribute("href") === t4.getAttribute("href");
          }, i.prototype.getLength = function() {
            return this.length;
          }, i.prototype.canBeConsolidatedWith = function() {
            return false;
          }, i;
        }(e2.Object);
      }.call(this), function() {
        var t3 = function(t4, e3) {
          function i() {
            this.constructor = t4;
          }
          for (var o2 in e3)
            n2.call(e3, o2) && (t4[o2] = e3[o2]);
          return i.prototype = e3.prototype, t4.prototype = new i(), t4.__super__ = e3.prototype, t4;
        }, n2 = {}.hasOwnProperty;
        e2.Piece.registerType("attachment", e2.AttachmentPiece = function(n3) {
          function i(t4) {
            this.attachment = t4, i.__super__.constructor.apply(this, arguments), this.length = 1, this.ensureAttachmentExclusivelyHasAttribute("href"), this.attachment.hasContent() || this.removeProhibitedAttributes();
          }
          return t3(i, n3), i.fromJSON = function(t4) {
            return new this(e2.Attachment.fromJSON(t4.attachment), t4.attributes);
          }, i.permittedAttributes = ["caption", "presentation"], i.prototype.ensureAttachmentExclusivelyHasAttribute = function(t4) {
            return this.hasAttribute(t4) ? (this.attachment.hasAttribute(t4) || this.attachment.setAttributes(this.attributes.slice(t4)), this.attributes = this.attributes.remove(t4)) : void 0;
          }, i.prototype.removeProhibitedAttributes = function() {
            var t4;
            return t4 = this.attributes.slice(this.constructor.permittedAttributes), t4.isEqualTo(this.attributes) ? void 0 : this.attributes = t4;
          }, i.prototype.getValue = function() {
            return this.attachment;
          }, i.prototype.isSerializable = function() {
            return !this.attachment.isPending();
          }, i.prototype.getCaption = function() {
            var t4;
            return (t4 = this.attributes.get("caption")) != null ? t4 : "";
          }, i.prototype.isEqualTo = function(t4) {
            var e3;
            return i.__super__.isEqualTo.apply(this, arguments) && this.attachment.id === (t4 != null && (e3 = t4.attachment) != null ? e3.id : void 0);
          }, i.prototype.toString = function() {
            return e2.OBJECT_REPLACEMENT_CHARACTER;
          }, i.prototype.toJSON = function() {
            var t4;
            return t4 = i.__super__.toJSON.apply(this, arguments), t4.attachment = this.attachment, t4;
          }, i.prototype.getCacheKey = function() {
            return [i.__super__.getCacheKey.apply(this, arguments), this.attachment.getCacheKey()].join("/");
          }, i.prototype.toConsole = function() {
            return JSON.stringify(this.toString());
          }, i;
        }(e2.Piece));
      }.call(this), function() {
        var t3, n2 = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var o2 in e3)
            i.call(e3, o2) && (t4[o2] = e3[o2]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, i = {}.hasOwnProperty;
        t3 = e2.normalizeNewlines, e2.Piece.registerType("string", e2.StringPiece = function(e3) {
          function i2(e4) {
            i2.__super__.constructor.apply(this, arguments), this.string = t3(e4), this.length = this.string.length;
          }
          return n2(i2, e3), i2.fromJSON = function(t4) {
            return new this(t4.string, t4.attributes);
          }, i2.prototype.getValue = function() {
            return this.string;
          }, i2.prototype.toString = function() {
            return this.string.toString();
          }, i2.prototype.isBlockBreak = function() {
            return this.toString() === "\n" && this.getAttribute("blockBreak") === true;
          }, i2.prototype.toJSON = function() {
            var t4;
            return t4 = i2.__super__.toJSON.apply(this, arguments), t4.string = this.string, t4;
          }, i2.prototype.canBeConsolidatedWith = function(t4) {
            return t4 != null && this.hasSameConstructorAs(t4) && this.hasSameAttributesAsPiece(t4);
          }, i2.prototype.consolidateWith = function(t4) {
            return new this.constructor(this.toString() + t4.toString(), this.attributes);
          }, i2.prototype.splitAtOffset = function(t4) {
            var e4, n3;
            return t4 === 0 ? (e4 = null, n3 = this) : t4 === this.length ? (e4 = this, n3 = null) : (e4 = new this.constructor(this.string.slice(0, t4), this.attributes), n3 = new this.constructor(this.string.slice(t4), this.attributes)), [e4, n3];
          }, i2.prototype.toConsole = function() {
            var t4;
            return t4 = this.string, t4.length > 15 && (t4 = t4.slice(0, 14) + "\u2026"), JSON.stringify(t4.toString());
          }, i2;
        }(e2.Piece));
      }.call(this), function() {
        var t3, n2 = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var o3 in e3)
            i.call(e3, o3) && (t4[o3] = e3[o3]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, i = {}.hasOwnProperty, o2 = [].slice;
        t3 = e2.spliceArray, e2.SplittableList = function(e3) {
          function i2(t4) {
            t4 == null && (t4 = []), i2.__super__.constructor.apply(this, arguments), this.objects = t4.slice(0), this.length = this.objects.length;
          }
          var r2, s2, a2;
          return n2(i2, e3), i2.box = function(t4) {
            return t4 instanceof this ? t4 : new this(t4);
          }, i2.prototype.indexOf = function(t4) {
            return this.objects.indexOf(t4);
          }, i2.prototype.splice = function() {
            var e4;
            return e4 = 1 <= arguments.length ? o2.call(arguments, 0) : [], new this.constructor(t3.apply(null, [this.objects].concat(o2.call(e4))));
          }, i2.prototype.eachObject = function(t4) {
            var e4, n3, i3, o3, r3, s3;
            for (r3 = this.objects, s3 = [], n3 = e4 = 0, i3 = r3.length; i3 > e4; n3 = ++e4)
              o3 = r3[n3], s3.push(t4(o3, n3));
            return s3;
          }, i2.prototype.insertObjectAtIndex = function(t4, e4) {
            return this.splice(e4, 0, t4);
          }, i2.prototype.insertSplittableListAtIndex = function(t4, e4) {
            return this.splice.apply(this, [e4, 0].concat(o2.call(t4.objects)));
          }, i2.prototype.insertSplittableListAtPosition = function(t4, e4) {
            var n3, i3, o3;
            return o3 = this.splitObjectAtPosition(e4), i3 = o3[0], n3 = o3[1], new this.constructor(i3).insertSplittableListAtIndex(t4, n3);
          }, i2.prototype.editObjectAtIndex = function(t4, e4) {
            return this.replaceObjectAtIndex(e4(this.objects[t4]), t4);
          }, i2.prototype.replaceObjectAtIndex = function(t4, e4) {
            return this.splice(e4, 1, t4);
          }, i2.prototype.removeObjectAtIndex = function(t4) {
            return this.splice(t4, 1);
          }, i2.prototype.getObjectAtIndex = function(t4) {
            return this.objects[t4];
          }, i2.prototype.getSplittableListInRange = function(t4) {
            var e4, n3, i3, o3;
            return i3 = this.splitObjectsAtRange(t4), n3 = i3[0], e4 = i3[1], o3 = i3[2], new this.constructor(n3.slice(e4, o3 + 1));
          }, i2.prototype.selectSplittableList = function(t4) {
            var e4, n3;
            return n3 = function() {
              var n4, i3, o3, r3;
              for (o3 = this.objects, r3 = [], n4 = 0, i3 = o3.length; i3 > n4; n4++)
                e4 = o3[n4], t4(e4) && r3.push(e4);
              return r3;
            }.call(this), new this.constructor(n3);
          }, i2.prototype.removeObjectsInRange = function(t4) {
            var e4, n3, i3, o3;
            return i3 = this.splitObjectsAtRange(t4), n3 = i3[0], e4 = i3[1], o3 = i3[2], new this.constructor(n3).splice(e4, o3 - e4 + 1);
          }, i2.prototype.transformObjectsInRange = function(t4, e4) {
            var n3, i3, o3, r3, s3, a3, u;
            return s3 = this.splitObjectsAtRange(t4), r3 = s3[0], i3 = s3[1], a3 = s3[2], u = function() {
              var t5, s4, u2;
              for (u2 = [], n3 = t5 = 0, s4 = r3.length; s4 > t5; n3 = ++t5)
                o3 = r3[n3], u2.push(n3 >= i3 && a3 >= n3 ? e4(o3) : o3);
              return u2;
            }(), new this.constructor(u);
          }, i2.prototype.splitObjectsAtRange = function(t4) {
            var e4, n3, i3, o3, s3, u;
            return o3 = this.splitObjectAtPosition(a2(t4)), n3 = o3[0], e4 = o3[1], i3 = o3[2], s3 = new this.constructor(n3).splitObjectAtPosition(r2(t4) + i3), n3 = s3[0], u = s3[1], [n3, e4, u - 1];
          }, i2.prototype.getObjectAtPosition = function(t4) {
            var e4, n3, i3;
            return i3 = this.findIndexAndOffsetAtPosition(t4), e4 = i3.index, n3 = i3.offset, this.objects[e4];
          }, i2.prototype.splitObjectAtPosition = function(t4) {
            var e4, n3, i3, o3, r3, s3, a3, u, c2, l;
            return s3 = this.findIndexAndOffsetAtPosition(t4), e4 = s3.index, r3 = s3.offset, o3 = this.objects.slice(0), e4 != null ? r3 === 0 ? (c2 = e4, l = 0) : (i3 = this.getObjectAtIndex(e4), a3 = i3.splitAtOffset(r3), n3 = a3[0], u = a3[1], o3.splice(e4, 1, n3, u), c2 = e4 + 1, l = n3.getLength() - r3) : (c2 = o3.length, l = 0), [o3, c2, l];
          }, i2.prototype.consolidate = function() {
            var t4, e4, n3, i3, o3, r3;
            for (i3 = [], o3 = this.objects[0], r3 = this.objects.slice(1), t4 = 0, e4 = r3.length; e4 > t4; t4++)
              n3 = r3[t4], (typeof o3.canBeConsolidatedWith == "function" ? o3.canBeConsolidatedWith(n3) : void 0) ? o3 = o3.consolidateWith(n3) : (i3.push(o3), o3 = n3);
            return o3 != null && i3.push(o3), new this.constructor(i3);
          }, i2.prototype.consolidateFromIndexToIndex = function(t4, e4) {
            var n3, i3, r3;
            return i3 = this.objects.slice(0), r3 = i3.slice(t4, e4 + 1), n3 = new this.constructor(r3).consolidate().toArray(), this.splice.apply(this, [t4, r3.length].concat(o2.call(n3)));
          }, i2.prototype.findIndexAndOffsetAtPosition = function(t4) {
            var e4, n3, i3, o3, r3, s3, a3;
            for (e4 = 0, a3 = this.objects, i3 = n3 = 0, o3 = a3.length; o3 > n3; i3 = ++n3) {
              if (s3 = a3[i3], r3 = e4 + s3.getLength(), t4 >= e4 && r3 > t4)
                return {index: i3, offset: t4 - e4};
              e4 = r3;
            }
            return {index: null, offset: null};
          }, i2.prototype.findPositionAtIndexAndOffset = function(t4, e4) {
            var n3, i3, o3, r3, s3, a3;
            for (s3 = 0, a3 = this.objects, n3 = i3 = 0, o3 = a3.length; o3 > i3; n3 = ++i3)
              if (r3 = a3[n3], t4 > n3)
                s3 += r3.getLength();
              else if (n3 === t4) {
                s3 += e4;
                break;
              }
            return s3;
          }, i2.prototype.getEndPosition = function() {
            var t4, e4;
            return this.endPosition != null ? this.endPosition : this.endPosition = function() {
              var n3, i3, o3;
              for (e4 = 0, o3 = this.objects, n3 = 0, i3 = o3.length; i3 > n3; n3++)
                t4 = o3[n3], e4 += t4.getLength();
              return e4;
            }.call(this);
          }, i2.prototype.toString = function() {
            return this.objects.join("");
          }, i2.prototype.toArray = function() {
            return this.objects.slice(0);
          }, i2.prototype.toJSON = function() {
            return this.toArray();
          }, i2.prototype.isEqualTo = function(t4) {
            return i2.__super__.isEqualTo.apply(this, arguments) || s2(this.objects, t4 != null ? t4.objects : void 0);
          }, s2 = function(t4, e4) {
            var n3, i3, o3, r3, s3;
            if (e4 == null && (e4 = []), t4.length !== e4.length)
              return false;
            for (s3 = true, i3 = n3 = 0, o3 = t4.length; o3 > n3; i3 = ++n3)
              r3 = t4[i3], s3 && !r3.isEqualTo(e4[i3]) && (s3 = false);
            return s3;
          }, i2.prototype.contentsForInspection = function() {
            var t4;
            return {objects: "[" + function() {
              var e4, n3, i3, o3;
              for (i3 = this.objects, o3 = [], e4 = 0, n3 = i3.length; n3 > e4; e4++)
                t4 = i3[e4], o3.push(t4.inspect());
              return o3;
            }.call(this).join(", ") + "]"};
          }, a2 = function(t4) {
            return t4[0];
          }, r2 = function(t4) {
            return t4[1];
          }, i2;
        }(e2.Object);
      }.call(this), function() {
        var t3 = function(t4, e3) {
          function i() {
            this.constructor = t4;
          }
          for (var o2 in e3)
            n2.call(e3, o2) && (t4[o2] = e3[o2]);
          return i.prototype = e3.prototype, t4.prototype = new i(), t4.__super__ = e3.prototype, t4;
        }, n2 = {}.hasOwnProperty;
        e2.Text = function(n3) {
          function i(t4) {
            var n4;
            t4 == null && (t4 = []), i.__super__.constructor.apply(this, arguments), this.pieceList = new e2.SplittableList(function() {
              var e3, i2, o2;
              for (o2 = [], e3 = 0, i2 = t4.length; i2 > e3; e3++)
                n4 = t4[e3], n4.isEmpty() || o2.push(n4);
              return o2;
            }());
          }
          return t3(i, n3), i.textForAttachmentWithAttributes = function(t4, n4) {
            var i2;
            return i2 = new e2.AttachmentPiece(t4, n4), new this([i2]);
          }, i.textForStringWithAttributes = function(t4, n4) {
            var i2;
            return i2 = new e2.StringPiece(t4, n4), new this([i2]);
          }, i.fromJSON = function(t4) {
            var n4, i2;
            return i2 = function() {
              var i3, o2, r2;
              for (r2 = [], i3 = 0, o2 = t4.length; o2 > i3; i3++)
                n4 = t4[i3], r2.push(e2.Piece.fromJSON(n4));
              return r2;
            }(), new this(i2);
          }, i.prototype.copy = function() {
            return this.copyWithPieceList(this.pieceList);
          }, i.prototype.copyWithPieceList = function(t4) {
            return new this.constructor(t4.consolidate().toArray());
          }, i.prototype.copyUsingObjectMap = function(t4) {
            var e3, n4;
            return n4 = function() {
              var n5, i2, o2, r2, s2;
              for (o2 = this.getPieces(), s2 = [], n5 = 0, i2 = o2.length; i2 > n5; n5++)
                e3 = o2[n5], s2.push((r2 = t4.find(e3)) != null ? r2 : e3);
              return s2;
            }.call(this), new this.constructor(n4);
          }, i.prototype.appendText = function(t4) {
            return this.insertTextAtPosition(t4, this.getLength());
          }, i.prototype.insertTextAtPosition = function(t4, e3) {
            return this.copyWithPieceList(this.pieceList.insertSplittableListAtPosition(t4.pieceList, e3));
          }, i.prototype.removeTextAtRange = function(t4) {
            return this.copyWithPieceList(this.pieceList.removeObjectsInRange(t4));
          }, i.prototype.replaceTextAtRange = function(t4, e3) {
            return this.removeTextAtRange(e3).insertTextAtPosition(t4, e3[0]);
          }, i.prototype.moveTextFromRangeToPosition = function(t4, e3) {
            var n4, i2;
            if (!(t4[0] <= e3 && e3 <= t4[1]))
              return i2 = this.getTextAtRange(t4), n4 = i2.getLength(), t4[0] < e3 && (e3 -= n4), this.removeTextAtRange(t4).insertTextAtPosition(i2, e3);
          }, i.prototype.addAttributeAtRange = function(t4, e3, n4) {
            var i2;
            return i2 = {}, i2[t4] = e3, this.addAttributesAtRange(i2, n4);
          }, i.prototype.addAttributesAtRange = function(t4, e3) {
            return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e3, function(e4) {
              return e4.copyWithAdditionalAttributes(t4);
            }));
          }, i.prototype.removeAttributeAtRange = function(t4, e3) {
            return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e3, function(e4) {
              return e4.copyWithoutAttribute(t4);
            }));
          }, i.prototype.setAttributesAtRange = function(t4, e3) {
            return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e3, function(e4) {
              return e4.copyWithAttributes(t4);
            }));
          }, i.prototype.getAttributesAtPosition = function(t4) {
            var e3, n4;
            return (e3 = (n4 = this.pieceList.getObjectAtPosition(t4)) != null ? n4.getAttributes() : void 0) != null ? e3 : {};
          }, i.prototype.getCommonAttributes = function() {
            var t4, n4;
            return t4 = function() {
              var t5, e3, i2, o2;
              for (i2 = this.pieceList.toArray(), o2 = [], t5 = 0, e3 = i2.length; e3 > t5; t5++)
                n4 = i2[t5], o2.push(n4.getAttributes());
              return o2;
            }.call(this), e2.Hash.fromCommonAttributesOfObjects(t4).toObject();
          }, i.prototype.getCommonAttributesAtRange = function(t4) {
            var e3;
            return (e3 = this.getTextAtRange(t4).getCommonAttributes()) != null ? e3 : {};
          }, i.prototype.getExpandedRangeForAttributeAtOffset = function(t4, e3) {
            var n4, i2, o2;
            for (n4 = o2 = e3, i2 = this.getLength(); n4 > 0 && this.getCommonAttributesAtRange([n4 - 1, o2])[t4]; )
              n4--;
            for (; i2 > o2 && this.getCommonAttributesAtRange([e3, o2 + 1])[t4]; )
              o2++;
            return [n4, o2];
          }, i.prototype.getTextAtRange = function(t4) {
            return this.copyWithPieceList(this.pieceList.getSplittableListInRange(t4));
          }, i.prototype.getStringAtRange = function(t4) {
            return this.pieceList.getSplittableListInRange(t4).toString();
          }, i.prototype.getStringAtPosition = function(t4) {
            return this.getStringAtRange([t4, t4 + 1]);
          }, i.prototype.startsWithString = function(t4) {
            return this.getStringAtRange([0, t4.length]) === t4;
          }, i.prototype.endsWithString = function(t4) {
            var e3;
            return e3 = this.getLength(), this.getStringAtRange([e3 - t4.length, e3]) === t4;
          }, i.prototype.getAttachmentPieces = function() {
            var t4, e3, n4, i2, o2;
            for (i2 = this.pieceList.toArray(), o2 = [], t4 = 0, e3 = i2.length; e3 > t4; t4++)
              n4 = i2[t4], n4.attachment != null && o2.push(n4);
            return o2;
          }, i.prototype.getAttachments = function() {
            var t4, e3, n4, i2, o2;
            for (i2 = this.getAttachmentPieces(), o2 = [], t4 = 0, e3 = i2.length; e3 > t4; t4++)
              n4 = i2[t4], o2.push(n4.attachment);
            return o2;
          }, i.prototype.getAttachmentAndPositionById = function(t4) {
            var e3, n4, i2, o2, r2, s2;
            for (o2 = 0, r2 = this.pieceList.toArray(), e3 = 0, n4 = r2.length; n4 > e3; e3++) {
              if (i2 = r2[e3], ((s2 = i2.attachment) != null ? s2.id : void 0) === t4)
                return {attachment: i2.attachment, position: o2};
              o2 += i2.length;
            }
            return {attachment: null, position: null};
          }, i.prototype.getAttachmentById = function(t4) {
            var e3, n4, i2;
            return i2 = this.getAttachmentAndPositionById(t4), e3 = i2.attachment, n4 = i2.position, e3;
          }, i.prototype.getRangeOfAttachment = function(t4) {
            var e3, n4;
            return n4 = this.getAttachmentAndPositionById(t4.id), t4 = n4.attachment, e3 = n4.position, t4 != null ? [e3, e3 + 1] : void 0;
          }, i.prototype.updateAttributesForAttachment = function(t4, e3) {
            var n4;
            return (n4 = this.getRangeOfAttachment(e3)) ? this.addAttributesAtRange(t4, n4) : this;
          }, i.prototype.getLength = function() {
            return this.pieceList.getEndPosition();
          }, i.prototype.isEmpty = function() {
            return this.getLength() === 0;
          }, i.prototype.isEqualTo = function(t4) {
            var e3;
            return i.__super__.isEqualTo.apply(this, arguments) || (t4 != null && (e3 = t4.pieceList) != null ? e3.isEqualTo(this.pieceList) : void 0);
          }, i.prototype.isBlockBreak = function() {
            return this.getLength() === 1 && this.pieceList.getObjectAtIndex(0).isBlockBreak();
          }, i.prototype.eachPiece = function(t4) {
            return this.pieceList.eachObject(t4);
          }, i.prototype.getPieces = function() {
            return this.pieceList.toArray();
          }, i.prototype.getPieceAtPosition = function(t4) {
            return this.pieceList.getObjectAtPosition(t4);
          }, i.prototype.contentsForInspection = function() {
            return {pieceList: this.pieceList.inspect()};
          }, i.prototype.toSerializableText = function() {
            var t4;
            return t4 = this.pieceList.selectSplittableList(function(t5) {
              return t5.isSerializable();
            }), this.copyWithPieceList(t4);
          }, i.prototype.toString = function() {
            return this.pieceList.toString();
          }, i.prototype.toJSON = function() {
            return this.pieceList.toJSON();
          }, i.prototype.toConsole = function() {
            var t4;
            return JSON.stringify(function() {
              var e3, n4, i2, o2;
              for (i2 = this.pieceList.toArray(), o2 = [], e3 = 0, n4 = i2.length; n4 > e3; e3++)
                t4 = i2[e3], o2.push(JSON.parse(t4.toConsole()));
              return o2;
            }.call(this));
          }, i.prototype.getDirection = function() {
            return e2.getDirection(this.toString());
          }, i.prototype.isRTL = function() {
            return this.getDirection() === "rtl";
          }, i;
        }(e2.Object);
      }.call(this), function() {
        var t3, n2, i, o2, r2, s2 = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var i2 in e3)
            a2.call(e3, i2) && (t4[i2] = e3[i2]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, a2 = {}.hasOwnProperty, u = [].indexOf || function(t4) {
          for (var e3 = 0, n3 = this.length; n3 > e3; e3++)
            if (e3 in this && this[e3] === t4)
              return e3;
          return -1;
        }, c2 = [].slice;
        t3 = e2.arraysAreEqual, r2 = e2.spliceArray, i = e2.getBlockConfig, n2 = e2.getBlockAttributeNames, o2 = e2.getListAttributeNames, e2.Block = function(n3) {
          function a3(t4, n4) {
            t4 == null && (t4 = new e2.Text()), n4 == null && (n4 = []), a3.__super__.constructor.apply(this, arguments), this.text = h(t4), this.attributes = n4;
          }
          var l, h, p2, d, f, g, m, v, y;
          return s2(a3, n3), a3.fromJSON = function(t4) {
            var n4;
            return n4 = e2.Text.fromJSON(t4.text), new this(n4, t4.attributes);
          }, a3.prototype.isEmpty = function() {
            return this.text.isBlockBreak();
          }, a3.prototype.isEqualTo = function(e3) {
            return a3.__super__.isEqualTo.apply(this, arguments) || this.text.isEqualTo(e3 != null ? e3.text : void 0) && t3(this.attributes, e3 != null ? e3.attributes : void 0);
          }, a3.prototype.copyWithText = function(t4) {
            return new this.constructor(t4, this.attributes);
          }, a3.prototype.copyWithoutText = function() {
            return this.copyWithText(null);
          }, a3.prototype.copyWithAttributes = function(t4) {
            return new this.constructor(this.text, t4);
          }, a3.prototype.copyWithoutAttributes = function() {
            return this.copyWithAttributes(null);
          }, a3.prototype.copyUsingObjectMap = function(t4) {
            var e3;
            return this.copyWithText((e3 = t4.find(this.text)) ? e3 : this.text.copyUsingObjectMap(t4));
          }, a3.prototype.addAttribute = function(t4) {
            var e3;
            return e3 = this.attributes.concat(d(t4)), this.copyWithAttributes(e3);
          }, a3.prototype.removeAttribute = function(t4) {
            var e3, n4;
            return n4 = i(t4).listAttribute, e3 = g(g(this.attributes, t4), n4), this.copyWithAttributes(e3);
          }, a3.prototype.removeLastAttribute = function() {
            return this.removeAttribute(this.getLastAttribute());
          }, a3.prototype.getLastAttribute = function() {
            return f(this.attributes);
          }, a3.prototype.getAttributes = function() {
            return this.attributes.slice(0);
          }, a3.prototype.getAttributeLevel = function() {
            return this.attributes.length;
          }, a3.prototype.getAttributeAtLevel = function(t4) {
            return this.attributes[t4 - 1];
          }, a3.prototype.hasAttribute = function(t4) {
            return u.call(this.attributes, t4) >= 0;
          }, a3.prototype.hasAttributes = function() {
            return this.getAttributeLevel() > 0;
          }, a3.prototype.getLastNestableAttribute = function() {
            return f(this.getNestableAttributes());
          }, a3.prototype.getNestableAttributes = function() {
            var t4, e3, n4, o3, r3;
            for (o3 = this.attributes, r3 = [], e3 = 0, n4 = o3.length; n4 > e3; e3++)
              t4 = o3[e3], i(t4).nestable && r3.push(t4);
            return r3;
          }, a3.prototype.getNestingLevel = function() {
            return this.getNestableAttributes().length;
          }, a3.prototype.decreaseNestingLevel = function() {
            var t4;
            return (t4 = this.getLastNestableAttribute()) ? this.removeAttribute(t4) : this;
          }, a3.prototype.increaseNestingLevel = function() {
            var t4, e3, n4;
            return (t4 = this.getLastNestableAttribute()) ? (n4 = this.attributes.lastIndexOf(t4), e3 = r2.apply(null, [this.attributes, n4 + 1, 0].concat(c2.call(d(t4)))), this.copyWithAttributes(e3)) : this;
          }, a3.prototype.getListItemAttributes = function() {
            var t4, e3, n4, o3, r3;
            for (o3 = this.attributes, r3 = [], e3 = 0, n4 = o3.length; n4 > e3; e3++)
              t4 = o3[e3], i(t4).listAttribute && r3.push(t4);
            return r3;
          }, a3.prototype.isListItem = function() {
            var t4;
            return (t4 = i(this.getLastAttribute())) != null ? t4.listAttribute : void 0;
          }, a3.prototype.isTerminalBlock = function() {
            var t4;
            return (t4 = i(this.getLastAttribute())) != null ? t4.terminal : void 0;
          }, a3.prototype.breaksOnReturn = function() {
            var t4;
            return (t4 = i(this.getLastAttribute())) != null ? t4.breakOnReturn : void 0;
          }, a3.prototype.findLineBreakInDirectionFromPosition = function(t4, e3) {
            var n4, i2;
            return i2 = this.toString(), n4 = function() {
              switch (t4) {
                case "forward":
                  return i2.indexOf("\n", e3);
                case "backward":
                  return i2.slice(0, e3).lastIndexOf("\n");
              }
            }(), n4 !== -1 ? n4 : void 0;
          }, a3.prototype.contentsForInspection = function() {
            return {text: this.text.inspect(), attributes: this.attributes};
          }, a3.prototype.toString = function() {
            return this.text.toString();
          }, a3.prototype.toJSON = function() {
            return {text: this.text, attributes: this.attributes};
          }, a3.prototype.getDirection = function() {
            return this.text.getDirection();
          }, a3.prototype.isRTL = function() {
            return this.text.isRTL();
          }, a3.prototype.getLength = function() {
            return this.text.getLength();
          }, a3.prototype.canBeConsolidatedWith = function(t4) {
            return !this.hasAttributes() && !t4.hasAttributes() && this.getDirection() === t4.getDirection();
          }, a3.prototype.consolidateWith = function(t4) {
            var n4, i2;
            return n4 = e2.Text.textForStringWithAttributes("\n"), i2 = this.getTextWithoutBlockBreak().appendText(n4), this.copyWithText(i2.appendText(t4.text));
          }, a3.prototype.splitAtOffset = function(t4) {
            var e3, n4;
            return t4 === 0 ? (e3 = null, n4 = this) : t4 === this.getLength() ? (e3 = this, n4 = null) : (e3 = this.copyWithText(this.text.getTextAtRange([0, t4])), n4 = this.copyWithText(this.text.getTextAtRange([t4, this.getLength()]))), [e3, n4];
          }, a3.prototype.getBlockBreakPosition = function() {
            return this.text.getLength() - 1;
          }, a3.prototype.getTextWithoutBlockBreak = function() {
            return m(this.text) ? this.text.getTextAtRange([0, this.getBlockBreakPosition()]) : this.text.copy();
          }, a3.prototype.canBeGrouped = function(t4) {
            return this.attributes[t4];
          }, a3.prototype.canBeGroupedWith = function(t4, e3) {
            var n4, r3, s3, a4;
            return s3 = t4.getAttributes(), r3 = s3[e3], n4 = this.attributes[e3], !(n4 !== r3 || i(n4).group === false && (a4 = s3[e3 + 1], u.call(o2(), a4) < 0) || this.getDirection() !== t4.getDirection() && !t4.isEmpty());
          }, h = function(t4) {
            return t4 = y(t4), t4 = l(t4);
          }, y = function(t4) {
            var n4, i2, o3, r3, s3, a4;
            return r3 = false, a4 = t4.getPieces(), i2 = 2 <= a4.length ? c2.call(a4, 0, n4 = a4.length - 1) : (n4 = 0, []), o3 = a4[n4++], o3 == null ? t4 : (i2 = function() {
              var t5, e3, n5;
              for (n5 = [], t5 = 0, e3 = i2.length; e3 > t5; t5++)
                s3 = i2[t5], s3.isBlockBreak() ? (r3 = true, n5.push(v(s3))) : n5.push(s3);
              return n5;
            }(), r3 ? new e2.Text(c2.call(i2).concat([o3])) : t4);
          }, p2 = e2.Text.textForStringWithAttributes("\n", {blockBreak: true}), l = function(t4) {
            return m(t4) ? t4 : t4.appendText(p2);
          }, m = function(t4) {
            var e3, n4;
            return n4 = t4.getLength(), n4 === 0 ? false : (e3 = t4.getTextAtRange([n4 - 1, n4]), e3.isBlockBreak());
          }, v = function(t4) {
            return t4.copyWithoutAttribute("blockBreak");
          }, d = function(t4) {
            var e3;
            return e3 = i(t4).listAttribute, e3 != null ? [e3, t4] : [t4];
          }, f = function(t4) {
            return t4.slice(-1)[0];
          }, g = function(t4, e3) {
            var n4;
            return n4 = t4.lastIndexOf(e3), n4 === -1 ? t4 : r2(t4, n4, 1);
          }, a3;
        }(e2.Object);
      }.call(this), function() {
        var t3, n2, i, o2 = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var i2 in e3)
            r2.call(e3, i2) && (t4[i2] = e3[i2]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, r2 = {}.hasOwnProperty, s2 = [].indexOf || function(t4) {
          for (var e3 = 0, n3 = this.length; n3 > e3; e3++)
            if (e3 in this && this[e3] === t4)
              return e3;
          return -1;
        }, a2 = [].slice;
        n2 = e2.tagName, i = e2.walkTree, t3 = e2.nodeIsAttachmentElement, e2.HTMLSanitizer = function(r3) {
          function u(t4, e3) {
            var n3;
            n3 = e3 != null ? e3 : {}, this.allowedAttributes = n3.allowedAttributes, this.forbiddenProtocols = n3.forbiddenProtocols, this.forbiddenElements = n3.forbiddenElements, this.allowedAttributes == null && (this.allowedAttributes = c2), this.forbiddenProtocols == null && (this.forbiddenProtocols = h), this.forbiddenElements == null && (this.forbiddenElements = l), this.body = p2(t4);
          }
          var c2, l, h, p2;
          return o2(u, r3), c2 = "style href src width height class".split(" "), h = "javascript:".split(" "), l = "script iframe".split(" "), u.sanitize = function(t4, e3) {
            var n3;
            return n3 = new this(t4, e3), n3.sanitize(), n3;
          }, u.prototype.sanitize = function() {
            return this.sanitizeElements(), this.normalizeListElementNesting();
          }, u.prototype.getHTML = function() {
            return this.body.innerHTML;
          }, u.prototype.getBody = function() {
            return this.body;
          }, u.prototype.sanitizeElements = function() {
            var t4, n3, o3, r4, s3;
            for (s3 = i(this.body), r4 = []; s3.nextNode(); )
              switch (o3 = s3.currentNode, o3.nodeType) {
                case Node.ELEMENT_NODE:
                  this.elementIsRemovable(o3) ? r4.push(o3) : this.sanitizeElement(o3);
                  break;
                case Node.COMMENT_NODE:
                  r4.push(o3);
              }
            for (t4 = 0, n3 = r4.length; n3 > t4; t4++)
              o3 = r4[t4], e2.removeNode(o3);
            return this.body;
          }, u.prototype.sanitizeElement = function(t4) {
            var e3, n3, i2, o3, r4;
            for (t4.hasAttribute("href") && (o3 = t4.protocol, s2.call(this.forbiddenProtocols, o3) >= 0 && t4.removeAttribute("href")), r4 = a2.call(t4.attributes), e3 = 0, n3 = r4.length; n3 > e3; e3++)
              i2 = r4[e3].name, s2.call(this.allowedAttributes, i2) >= 0 || i2.indexOf("data-trix") === 0 || t4.removeAttribute(i2);
            return t4;
          }, u.prototype.normalizeListElementNesting = function() {
            var t4, e3, i2, o3, r4;
            for (r4 = a2.call(this.body.querySelectorAll("ul,ol")), t4 = 0, e3 = r4.length; e3 > t4; t4++)
              i2 = r4[t4], (o3 = i2.previousElementSibling) && n2(o3) === "li" && o3.appendChild(i2);
            return this.body;
          }, u.prototype.elementIsRemovable = function(t4) {
            return (t4 != null ? t4.nodeType : void 0) === Node.ELEMENT_NODE ? this.elementIsForbidden(t4) || this.elementIsntSerializable(t4) : void 0;
          }, u.prototype.elementIsForbidden = function(t4) {
            var e3;
            return e3 = n2(t4), s2.call(this.forbiddenElements, e3) >= 0;
          }, u.prototype.elementIsntSerializable = function(e3) {
            return e3.getAttribute("data-trix-serialize") === "false" && !t3(e3);
          }, p2 = function(t4) {
            var e3, n3, i2, o3, r4;
            for (t4 == null && (t4 = ""), t4 = t4.replace(/<\/html[^>]*>[^]*$/i, "</html>"), e3 = document.implementation.createHTMLDocument(""), e3.documentElement.innerHTML = t4, r4 = e3.head.querySelectorAll("style"), i2 = 0, o3 = r4.length; o3 > i2; i2++)
              n3 = r4[i2], e3.body.appendChild(n3);
            return e3.body;
          }, u;
        }(e2.BasicObject);
      }.call(this), function() {
        var t3, n2, i, o2, r2, s2, a2, u, c2, l, h, p2 = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var i2 in e3)
            d.call(e3, i2) && (t4[i2] = e3[i2]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, d = {}.hasOwnProperty, f = [].indexOf || function(t4) {
          for (var e3 = 0, n3 = this.length; n3 > e3; e3++)
            if (e3 in this && this[e3] === t4)
              return e3;
          return -1;
        };
        t3 = e2.arraysAreEqual, s2 = e2.makeElement, l = e2.tagName, r2 = e2.getBlockTagNames, h = e2.walkTree, o2 = e2.findClosestElementFromNode, i = e2.elementContainsNode, a2 = e2.nodeIsAttachmentElement, u = e2.normalizeSpaces, n2 = e2.breakableWhitespacePattern, c2 = e2.squishBreakableWhitespace, e2.HTMLParser = function(d2) {
          function g(t4, e3) {
            this.html = t4, this.referenceElement = (e3 != null ? e3 : {}).referenceElement, this.blocks = [], this.blockElements = [], this.processedElements = [];
          }
          var m, v, y, b, A, C3, x, w, E, S2, R, k;
          return p2(g, d2), g.parse = function(t4, e3) {
            var n3;
            return n3 = new this(t4, e3), n3.parse(), n3;
          }, g.prototype.getDocument = function() {
            return e2.Document.fromJSON(this.blocks);
          }, g.prototype.parse = function() {
            var t4, n3;
            try {
              for (this.createHiddenContainer(), t4 = e2.HTMLSanitizer.sanitize(this.html).getHTML(), this.containerElement.innerHTML = t4, n3 = h(this.containerElement, {usingFilter: x}); n3.nextNode(); )
                this.processNode(n3.currentNode);
              return this.translateBlockElementMarginsToNewlines();
            } finally {
              this.removeHiddenContainer();
            }
          }, g.prototype.createHiddenContainer = function() {
            return this.referenceElement ? (this.containerElement = this.referenceElement.cloneNode(false), this.containerElement.removeAttribute("id"), this.containerElement.setAttribute("data-trix-internal", ""), this.containerElement.style.display = "none", this.referenceElement.parentNode.insertBefore(this.containerElement, this.referenceElement.nextSibling)) : (this.containerElement = s2({tagName: "div", style: {display: "none"}}), document.body.appendChild(this.containerElement));
          }, g.prototype.removeHiddenContainer = function() {
            return e2.removeNode(this.containerElement);
          }, x = function(t4) {
            return l(t4) === "style" ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
          }, g.prototype.processNode = function(t4) {
            switch (t4.nodeType) {
              case Node.TEXT_NODE:
                if (!this.isInsignificantTextNode(t4))
                  return this.appendBlockForTextNode(t4), this.processTextNode(t4);
                break;
              case Node.ELEMENT_NODE:
                return this.appendBlockForElement(t4), this.processElement(t4);
            }
          }, g.prototype.appendBlockForTextNode = function(e3) {
            var n3, i2, o3;
            return i2 = e3.parentNode, i2 === this.currentBlockElement && this.isBlockElement(e3.previousSibling) ? this.appendStringWithAttributes("\n") : i2 !== this.containerElement && !this.isBlockElement(i2) || (n3 = this.getBlockAttributes(i2), t3(n3, (o3 = this.currentBlock) != null ? o3.attributes : void 0)) ? void 0 : (this.currentBlock = this.appendBlockForAttributesWithElement(n3, i2), this.currentBlockElement = i2);
          }, g.prototype.appendBlockForElement = function(e3) {
            var n3, o3, r3, s3;
            if (r3 = this.isBlockElement(e3), o3 = i(this.currentBlockElement, e3), r3 && !this.isBlockElement(e3.firstChild)) {
              if ((!this.isInsignificantTextNode(e3.firstChild) || !this.isBlockElement(e3.firstElementChild)) && (n3 = this.getBlockAttributes(e3), e3.firstChild))
                return o3 && t3(n3, this.currentBlock.attributes) ? this.appendStringWithAttributes("\n") : (this.currentBlock = this.appendBlockForAttributesWithElement(n3, e3), this.currentBlockElement = e3);
            } else if (this.currentBlockElement && !o3 && !r3)
              return (s3 = this.findParentBlockElement(e3)) ? this.appendBlockForElement(s3) : (this.currentBlock = this.appendEmptyBlock(), this.currentBlockElement = null);
          }, g.prototype.findParentBlockElement = function(t4) {
            var e3;
            for (e3 = t4.parentElement; e3 && e3 !== this.containerElement; ) {
              if (this.isBlockElement(e3) && f.call(this.blockElements, e3) >= 0)
                return e3;
              e3 = e3.parentElement;
            }
            return null;
          }, g.prototype.processTextNode = function(t4) {
            var e3, n3;
            return n3 = t4.data, v(t4.parentNode) || (n3 = c2(n3), R((e3 = t4.previousSibling) != null ? e3.textContent : void 0) && (n3 = A(n3))), this.appendStringWithAttributes(n3, this.getTextAttributes(t4.parentNode));
          }, g.prototype.processElement = function(t4) {
            var e3, n3, i2, o3, r3;
            if (a2(t4))
              return e3 = w(t4, "attachment"), Object.keys(e3).length && (o3 = this.getTextAttributes(t4), this.appendAttachmentWithAttributes(e3, o3), t4.innerHTML = ""), this.processedElements.push(t4);
            switch (l(t4)) {
              case "br":
                return this.isExtraBR(t4) || this.isBlockElement(t4.nextSibling) || this.appendStringWithAttributes("\n", this.getTextAttributes(t4)), this.processedElements.push(t4);
              case "img":
                e3 = {url: t4.getAttribute("src"), contentType: "image"}, i2 = b(t4);
                for (n3 in i2)
                  r3 = i2[n3], e3[n3] = r3;
                return this.appendAttachmentWithAttributes(e3, this.getTextAttributes(t4)), this.processedElements.push(t4);
              case "tr":
                if (t4.parentNode.firstChild !== t4)
                  return this.appendStringWithAttributes("\n");
                break;
              case "td":
                if (t4.parentNode.firstChild !== t4)
                  return this.appendStringWithAttributes(" | ");
            }
          }, g.prototype.appendBlockForAttributesWithElement = function(t4, e3) {
            var n3;
            return this.blockElements.push(e3), n3 = m(t4), this.blocks.push(n3), n3;
          }, g.prototype.appendEmptyBlock = function() {
            return this.appendBlockForAttributesWithElement([], null);
          }, g.prototype.appendStringWithAttributes = function(t4, e3) {
            return this.appendPiece(S2(t4, e3));
          }, g.prototype.appendAttachmentWithAttributes = function(t4, e3) {
            return this.appendPiece(E(t4, e3));
          }, g.prototype.appendPiece = function(t4) {
            return this.blocks.length === 0 && this.appendEmptyBlock(), this.blocks[this.blocks.length - 1].text.push(t4);
          }, g.prototype.appendStringToTextAtIndex = function(t4, e3) {
            var n3, i2;
            return i2 = this.blocks[e3].text, n3 = i2[i2.length - 1], (n3 != null ? n3.type : void 0) === "string" ? n3.string += t4 : i2.push(S2(t4));
          }, g.prototype.prependStringToTextAtIndex = function(t4, e3) {
            var n3, i2;
            return i2 = this.blocks[e3].text, n3 = i2[0], (n3 != null ? n3.type : void 0) === "string" ? n3.string = t4 + n3.string : i2.unshift(S2(t4));
          }, S2 = function(t4, e3) {
            var n3;
            return e3 == null && (e3 = {}), n3 = "string", t4 = u(t4), {string: t4, attributes: e3, type: n3};
          }, E = function(t4, e3) {
            var n3;
            return e3 == null && (e3 = {}), n3 = "attachment", {attachment: t4, attributes: e3, type: n3};
          }, m = function(t4) {
            var e3;
            return t4 == null && (t4 = {}), e3 = [], {text: e3, attributes: t4};
          }, g.prototype.getTextAttributes = function(t4) {
            var n3, i2, r3, s3, u2, c3, l2, h2, p3, d3, f2, g2;
            r3 = {}, p3 = e2.config.textAttributes;
            for (n3 in p3)
              if (u2 = p3[n3], u2.tagName && o2(t4, {matchingSelector: u2.tagName, untilNode: this.containerElement}))
                r3[n3] = true;
              else if (u2.parser) {
                if (g2 = u2.parser(t4)) {
                  for (i2 = false, d3 = this.findBlockElementAncestors(t4), c3 = 0, h2 = d3.length; h2 > c3; c3++)
                    if (s3 = d3[c3], u2.parser(s3) === g2) {
                      i2 = true;
                      break;
                    }
                  i2 || (r3[n3] = g2);
                }
              } else
                u2.styleProperty && (g2 = t4.style[u2.styleProperty]) && (r3[n3] = g2);
            if (a2(t4)) {
              f2 = w(t4, "attributes");
              for (l2 in f2)
                g2 = f2[l2], r3[l2] = g2;
            }
            return r3;
          }, g.prototype.getBlockAttributes = function(t4) {
            var n3, i2, o3, r3;
            for (i2 = []; t4 && t4 !== this.containerElement; ) {
              r3 = e2.config.blockAttributes;
              for (n3 in r3)
                o3 = r3[n3], o3.parse !== false && l(t4) === o3.tagName && ((typeof o3.test == "function" ? o3.test(t4) : void 0) || !o3.test) && (i2.push(n3), o3.listAttribute && i2.push(o3.listAttribute));
              t4 = t4.parentNode;
            }
            return i2.reverse();
          }, g.prototype.findBlockElementAncestors = function(t4) {
            var e3, n3;
            for (e3 = []; t4 && t4 !== this.containerElement; )
              n3 = l(t4), f.call(r2(), n3) >= 0 && e3.push(t4), t4 = t4.parentNode;
            return e3;
          }, w = function(t4, e3) {
            try {
              return JSON.parse(t4.getAttribute("data-trix-" + e3));
            } catch (n3) {
              return {};
            }
          }, b = function(t4) {
            var e3, n3, i2;
            return i2 = t4.getAttribute("width"), n3 = t4.getAttribute("height"), e3 = {}, i2 && (e3.width = parseInt(i2, 10)), n3 && (e3.height = parseInt(n3, 10)), e3;
          }, g.prototype.isBlockElement = function(t4) {
            var e3;
            if ((t4 != null ? t4.nodeType : void 0) === Node.ELEMENT_NODE && !a2(t4) && !o2(t4, {matchingSelector: "td", untilNode: this.containerElement}))
              return e3 = l(t4), f.call(r2(), e3) >= 0 || window.getComputedStyle(t4).display === "block";
          }, g.prototype.isInsignificantTextNode = function(t4) {
            var e3, n3, i2;
            if ((t4 != null ? t4.nodeType : void 0) === Node.TEXT_NODE && k(t4.data) && (n3 = t4.parentNode, i2 = t4.previousSibling, e3 = t4.nextSibling, (!C3(n3.previousSibling) || this.isBlockElement(n3.previousSibling)) && !v(n3)))
              return !i2 || this.isBlockElement(i2) || !e3 || this.isBlockElement(e3);
          }, g.prototype.isExtraBR = function(t4) {
            return l(t4) === "br" && this.isBlockElement(t4.parentNode) && t4.parentNode.lastChild === t4;
          }, v = function(t4) {
            var e3;
            return e3 = window.getComputedStyle(t4).whiteSpace, e3 === "pre" || e3 === "pre-wrap" || e3 === "pre-line";
          }, C3 = function(t4) {
            return t4 && !R(t4.textContent);
          }, g.prototype.translateBlockElementMarginsToNewlines = function() {
            var t4, e3, n3, i2, o3, r3, s3, a3;
            for (e3 = this.getMarginOfDefaultBlockElement(), s3 = this.blocks, a3 = [], i2 = n3 = 0, o3 = s3.length; o3 > n3; i2 = ++n3)
              t4 = s3[i2], (r3 = this.getMarginOfBlockElementAtIndex(i2)) && (r3.top > 2 * e3.top && this.prependStringToTextAtIndex("\n", i2), a3.push(r3.bottom > 2 * e3.bottom ? this.appendStringToTextAtIndex("\n", i2) : void 0));
            return a3;
          }, g.prototype.getMarginOfBlockElementAtIndex = function(t4) {
            var e3, n3;
            return !(e3 = this.blockElements[t4]) || !e3.textContent || (n3 = l(e3), f.call(r2(), n3) >= 0 || f.call(this.processedElements, e3) >= 0) ? void 0 : y(e3);
          }, g.prototype.getMarginOfDefaultBlockElement = function() {
            var t4;
            return t4 = s2(e2.config.blockAttributes["default"].tagName), this.containerElement.appendChild(t4), y(t4);
          }, y = function(t4) {
            var e3;
            return e3 = window.getComputedStyle(t4), e3.display === "block" ? {top: parseInt(e3.marginTop), bottom: parseInt(e3.marginBottom)} : void 0;
          }, A = function(t4) {
            return t4.replace(RegExp("^" + n2.source + "+"), "");
          }, k = function(t4) {
            return RegExp("^" + n2.source + "*$").test(t4);
          }, R = function(t4) {
            return /\s$/.test(t4);
          }, g;
        }(e2.BasicObject);
      }.call(this), function() {
        var t3, n2, i, o2, r2 = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var i2 in e3)
            s2.call(e3, i2) && (t4[i2] = e3[i2]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, s2 = {}.hasOwnProperty, a2 = [].slice, u = [].indexOf || function(t4) {
          for (var e3 = 0, n3 = this.length; n3 > e3; e3++)
            if (e3 in this && this[e3] === t4)
              return e3;
          return -1;
        };
        t3 = e2.arraysAreEqual, i = e2.normalizeRange, o2 = e2.rangeIsCollapsed, n2 = e2.getBlockConfig, e2.Document = function(s3) {
          function c2(t4) {
            t4 == null && (t4 = []), c2.__super__.constructor.apply(this, arguments), t4.length === 0 && (t4 = [new e2.Block()]), this.blockList = e2.SplittableList.box(t4);
          }
          var l;
          return r2(c2, s3), c2.fromJSON = function(t4) {
            var n3, i2;
            return i2 = function() {
              var i3, o3, r3;
              for (r3 = [], i3 = 0, o3 = t4.length; o3 > i3; i3++)
                n3 = t4[i3], r3.push(e2.Block.fromJSON(n3));
              return r3;
            }(), new this(i2);
          }, c2.fromHTML = function(t4, n3) {
            return e2.HTMLParser.parse(t4, n3).getDocument();
          }, c2.fromString = function(t4, n3) {
            var i2;
            return i2 = e2.Text.textForStringWithAttributes(t4, n3), new this([new e2.Block(i2)]);
          }, c2.prototype.isEmpty = function() {
            var t4;
            return this.blockList.length === 1 && (t4 = this.getBlockAtIndex(0), t4.isEmpty() && !t4.hasAttributes());
          }, c2.prototype.copy = function(t4) {
            var e3;
            return t4 == null && (t4 = {}), e3 = t4.consolidateBlocks ? this.blockList.consolidate().toArray() : this.blockList.toArray(), new this.constructor(e3);
          }, c2.prototype.copyUsingObjectsFromDocument = function(t4) {
            var n3;
            return n3 = new e2.ObjectMap(t4.getObjects()), this.copyUsingObjectMap(n3);
          }, c2.prototype.copyUsingObjectMap = function(t4) {
            var e3, n3, i2;
            return n3 = function() {
              var n4, o3, r3, s4;
              for (r3 = this.getBlocks(), s4 = [], n4 = 0, o3 = r3.length; o3 > n4; n4++)
                e3 = r3[n4], s4.push((i2 = t4.find(e3)) ? i2 : e3.copyUsingObjectMap(t4));
              return s4;
            }.call(this), new this.constructor(n3);
          }, c2.prototype.copyWithBaseBlockAttributes = function(t4) {
            var e3, n3, i2;
            return t4 == null && (t4 = []), i2 = function() {
              var i3, o3, r3, s4;
              for (r3 = this.getBlocks(), s4 = [], i3 = 0, o3 = r3.length; o3 > i3; i3++)
                n3 = r3[i3], e3 = t4.concat(n3.getAttributes()), s4.push(n3.copyWithAttributes(e3));
              return s4;
            }.call(this), new this.constructor(i2);
          }, c2.prototype.replaceBlock = function(t4, e3) {
            var n3;
            return n3 = this.blockList.indexOf(t4), n3 === -1 ? this : new this.constructor(this.blockList.replaceObjectAtIndex(e3, n3));
          }, c2.prototype.insertDocumentAtRange = function(t4, e3) {
            var n3, r3, s4, a3, u2, c3, l2;
            return r3 = t4.blockList, u2 = (e3 = i(e3))[0], c3 = this.locationFromPosition(u2), s4 = c3.index, a3 = c3.offset, l2 = this, n3 = this.getBlockAtPosition(u2), o2(e3) && n3.isEmpty() && !n3.hasAttributes() ? l2 = new this.constructor(l2.blockList.removeObjectAtIndex(s4)) : n3.getBlockBreakPosition() === a3 && u2++, l2 = l2.removeTextAtRange(e3), new this.constructor(l2.blockList.insertSplittableListAtPosition(r3, u2));
          }, c2.prototype.mergeDocumentAtRange = function(e3, n3) {
            var o3, r3, s4, a3, u2, c3, l2, h, p2, d, f, g;
            return f = (n3 = i(n3))[0], d = this.locationFromPosition(f), r3 = this.getBlockAtIndex(d.index).getAttributes(), o3 = e3.getBaseBlockAttributes(), g = r3.slice(-o3.length), t3(o3, g) ? (l2 = r3.slice(0, -o3.length), c3 = e3.copyWithBaseBlockAttributes(l2)) : c3 = e3.copy({consolidateBlocks: true}).copyWithBaseBlockAttributes(r3), s4 = c3.getBlockCount(), a3 = c3.getBlockAtIndex(0), t3(r3, a3.getAttributes()) ? (u2 = a3.getTextWithoutBlockBreak(), p2 = this.insertTextAtRange(u2, n3), s4 > 1 && (c3 = new this.constructor(c3.getBlocks().slice(1)), h = f + u2.getLength(), p2 = p2.insertDocumentAtRange(c3, h))) : p2 = this.insertDocumentAtRange(c3, n3), p2;
          }, c2.prototype.insertTextAtRange = function(t4, e3) {
            var n3, o3, r3, s4, a3;
            return a3 = (e3 = i(e3))[0], s4 = this.locationFromPosition(a3), o3 = s4.index, r3 = s4.offset, n3 = this.removeTextAtRange(e3), new this.constructor(n3.blockList.editObjectAtIndex(o3, function(e4) {
              return e4.copyWithText(e4.text.insertTextAtPosition(t4, r3));
            }));
          }, c2.prototype.removeTextAtRange = function(t4) {
            var e3, n3, r3, s4, a3, u2, c3, l2, h, p2, d, f, g, m, v, y, b, A, C3, x, w;
            return p2 = t4 = i(t4), l2 = p2[0], A = p2[1], o2(t4) ? this : (d = this.locationRangeFromRange(t4), u2 = d[0], y = d[1], a3 = u2.index, c3 = u2.offset, s4 = this.getBlockAtIndex(a3), v = y.index, b = y.offset, m = this.getBlockAtIndex(v), f = A - l2 === 1 && s4.getBlockBreakPosition() === c3 && m.getBlockBreakPosition() !== b && m.text.getStringAtPosition(b) === "\n", f ? r3 = this.blockList.editObjectAtIndex(v, function(t5) {
              return t5.copyWithText(t5.text.removeTextAtRange([b, b + 1]));
            }) : (h = s4.text.getTextAtRange([0, c3]), C3 = m.text.getTextAtRange([b, m.getLength()]), x = h.appendText(C3), g = a3 !== v && c3 === 0, w = g && s4.getAttributeLevel() >= m.getAttributeLevel(), n3 = w ? m.copyWithText(x) : s4.copyWithText(x), e3 = v + 1 - a3, r3 = this.blockList.splice(a3, e3, n3)), new this.constructor(r3));
          }, c2.prototype.moveTextFromRangeToPosition = function(t4, e3) {
            var n3, o3, r3, s4, u2, c3, l2, h, p2, d;
            return c3 = t4 = i(t4), p2 = c3[0], r3 = c3[1], e3 >= p2 && r3 >= e3 ? this : (o3 = this.getDocumentAtRange(t4), h = this.removeTextAtRange(t4), u2 = e3 > p2, u2 && (e3 -= o3.getLength()), l2 = o3.getBlocks(), s4 = l2[0], n3 = 2 <= l2.length ? a2.call(l2, 1) : [], n3.length === 0 ? (d = s4.getTextWithoutBlockBreak(), u2 && (e3 += 1)) : d = s4.text, h = h.insertTextAtRange(d, e3), n3.length === 0 ? h : (o3 = new this.constructor(n3), e3 += d.getLength(), h.insertDocumentAtRange(o3, e3)));
          }, c2.prototype.addAttributeAtRange = function(t4, e3, i2) {
            var o3;
            return o3 = this.blockList, this.eachBlockAtRange(i2, function(i3, r3, s4) {
              return o3 = o3.editObjectAtIndex(s4, function() {
                return n2(t4) ? i3.addAttribute(t4, e3) : r3[0] === r3[1] ? i3 : i3.copyWithText(i3.text.addAttributeAtRange(t4, e3, r3));
              });
            }), new this.constructor(o3);
          }, c2.prototype.addAttribute = function(t4, e3) {
            var n3;
            return n3 = this.blockList, this.eachBlock(function(i2, o3) {
              return n3 = n3.editObjectAtIndex(o3, function() {
                return i2.addAttribute(t4, e3);
              });
            }), new this.constructor(n3);
          }, c2.prototype.removeAttributeAtRange = function(t4, e3) {
            var i2;
            return i2 = this.blockList, this.eachBlockAtRange(e3, function(e4, o3, r3) {
              return n2(t4) ? i2 = i2.editObjectAtIndex(r3, function() {
                return e4.removeAttribute(t4);
              }) : o3[0] !== o3[1] ? i2 = i2.editObjectAtIndex(r3, function() {
                return e4.copyWithText(e4.text.removeAttributeAtRange(t4, o3));
              }) : void 0;
            }), new this.constructor(i2);
          }, c2.prototype.updateAttributesForAttachment = function(t4, e3) {
            var n3, i2, o3, r3;
            return o3 = (i2 = this.getRangeOfAttachment(e3))[0], n3 = this.locationFromPosition(o3).index, r3 = this.getTextAtIndex(n3), new this.constructor(this.blockList.editObjectAtIndex(n3, function(n4) {
              return n4.copyWithText(r3.updateAttributesForAttachment(t4, e3));
            }));
          }, c2.prototype.removeAttributeForAttachment = function(t4, e3) {
            var n3;
            return n3 = this.getRangeOfAttachment(e3), this.removeAttributeAtRange(t4, n3);
          }, c2.prototype.insertBlockBreakAtRange = function(t4) {
            var n3, o3, r3, s4;
            return s4 = (t4 = i(t4))[0], r3 = this.locationFromPosition(s4).offset, o3 = this.removeTextAtRange(t4), r3 === 0 && (n3 = [new e2.Block()]), new this.constructor(o3.blockList.insertSplittableListAtPosition(new e2.SplittableList(n3), s4));
          }, c2.prototype.applyBlockAttributeAtRange = function(t4, e3, i2) {
            var o3, r3, s4, a3;
            return s4 = this.expandRangeToLineBreaksAndSplitBlocks(i2), r3 = s4.document, i2 = s4.range, o3 = n2(t4), o3.listAttribute ? (r3 = r3.removeLastListAttributeAtRange(i2, {exceptAttributeName: t4}), a3 = r3.convertLineBreaksToBlockBreaksInRange(i2), r3 = a3.document, i2 = a3.range) : r3 = o3.exclusive ? r3.removeBlockAttributesAtRange(i2) : o3.terminal ? r3.removeLastTerminalAttributeAtRange(i2) : r3.consolidateBlocksAtRange(i2), r3.addAttributeAtRange(t4, e3, i2);
          }, c2.prototype.removeLastListAttributeAtRange = function(t4, e3) {
            var i2;
            return e3 == null && (e3 = {}), i2 = this.blockList, this.eachBlockAtRange(t4, function(t5, o3, r3) {
              var s4;
              if ((s4 = t5.getLastAttribute()) && n2(s4).listAttribute && s4 !== e3.exceptAttributeName)
                return i2 = i2.editObjectAtIndex(r3, function() {
                  return t5.removeAttribute(s4);
                });
            }), new this.constructor(i2);
          }, c2.prototype.removeLastTerminalAttributeAtRange = function(t4) {
            var e3;
            return e3 = this.blockList, this.eachBlockAtRange(t4, function(t5, i2, o3) {
              var r3;
              if ((r3 = t5.getLastAttribute()) && n2(r3).terminal)
                return e3 = e3.editObjectAtIndex(o3, function() {
                  return t5.removeAttribute(r3);
                });
            }), new this.constructor(e3);
          }, c2.prototype.removeBlockAttributesAtRange = function(t4) {
            var e3;
            return e3 = this.blockList, this.eachBlockAtRange(t4, function(t5, n3, i2) {
              return t5.hasAttributes() ? e3 = e3.editObjectAtIndex(i2, function() {
                return t5.copyWithoutAttributes();
              }) : void 0;
            }), new this.constructor(e3);
          }, c2.prototype.expandRangeToLineBreaksAndSplitBlocks = function(t4) {
            var e3, n3, o3, r3, s4, a3, u2, c3, l2;
            return a3 = t4 = i(t4), l2 = a3[0], r3 = a3[1], c3 = this.locationFromPosition(l2), o3 = this.locationFromPosition(r3), e3 = this, u2 = e3.getBlockAtIndex(c3.index), (c3.offset = u2.findLineBreakInDirectionFromPosition("backward", c3.offset)) != null && (s4 = e3.positionFromLocation(c3), e3 = e3.insertBlockBreakAtRange([s4, s4 + 1]), o3.index += 1, o3.offset -= e3.getBlockAtIndex(c3.index).getLength(), c3.index += 1), c3.offset = 0, o3.offset === 0 && o3.index > c3.index ? (o3.index -= 1, o3.offset = e3.getBlockAtIndex(o3.index).getBlockBreakPosition()) : (n3 = e3.getBlockAtIndex(o3.index), n3.text.getStringAtRange([o3.offset - 1, o3.offset]) === "\n" ? o3.offset -= 1 : o3.offset = n3.findLineBreakInDirectionFromPosition("forward", o3.offset), o3.offset !== n3.getBlockBreakPosition() && (s4 = e3.positionFromLocation(o3), e3 = e3.insertBlockBreakAtRange([s4, s4 + 1]))), l2 = e3.positionFromLocation(c3), r3 = e3.positionFromLocation(o3), t4 = i([l2, r3]), {document: e3, range: t4};
          }, c2.prototype.convertLineBreaksToBlockBreaksInRange = function(t4) {
            var e3, n3, o3;
            return n3 = (t4 = i(t4))[0], o3 = this.getStringAtRange(t4).slice(0, -1), e3 = this, o3.replace(/.*?\n/g, function(t5) {
              return n3 += t5.length, e3 = e3.insertBlockBreakAtRange([n3 - 1, n3]);
            }), {document: e3, range: t4};
          }, c2.prototype.consolidateBlocksAtRange = function(t4) {
            var e3, n3, o3, r3, s4;
            return o3 = t4 = i(t4), s4 = o3[0], n3 = o3[1], r3 = this.locationFromPosition(s4).index, e3 = this.locationFromPosition(n3).index, new this.constructor(this.blockList.consolidateFromIndexToIndex(r3, e3));
          }, c2.prototype.getDocumentAtRange = function(t4) {
            var e3;
            return t4 = i(t4), e3 = this.blockList.getSplittableListInRange(t4).toArray(), new this.constructor(e3);
          }, c2.prototype.getStringAtRange = function(t4) {
            var e3, n3, o3;
            return o3 = t4 = i(t4), n3 = o3[o3.length - 1], n3 !== this.getLength() && (e3 = -1), this.getDocumentAtRange(t4).toString().slice(0, e3);
          }, c2.prototype.getBlockAtIndex = function(t4) {
            return this.blockList.getObjectAtIndex(t4);
          }, c2.prototype.getBlockAtPosition = function(t4) {
            var e3;
            return e3 = this.locationFromPosition(t4).index, this.getBlockAtIndex(e3);
          }, c2.prototype.getTextAtIndex = function(t4) {
            var e3;
            return (e3 = this.getBlockAtIndex(t4)) != null ? e3.text : void 0;
          }, c2.prototype.getTextAtPosition = function(t4) {
            var e3;
            return e3 = this.locationFromPosition(t4).index, this.getTextAtIndex(e3);
          }, c2.prototype.getPieceAtPosition = function(t4) {
            var e3, n3, i2;
            return i2 = this.locationFromPosition(t4), e3 = i2.index, n3 = i2.offset, this.getTextAtIndex(e3).getPieceAtPosition(n3);
          }, c2.prototype.getCharacterAtPosition = function(t4) {
            var e3, n3, i2;
            return i2 = this.locationFromPosition(t4), e3 = i2.index, n3 = i2.offset, this.getTextAtIndex(e3).getStringAtRange([n3, n3 + 1]);
          }, c2.prototype.getLength = function() {
            return this.blockList.getEndPosition();
          }, c2.prototype.getBlocks = function() {
            return this.blockList.toArray();
          }, c2.prototype.getBlockCount = function() {
            return this.blockList.length;
          }, c2.prototype.getEditCount = function() {
            return this.editCount;
          }, c2.prototype.eachBlock = function(t4) {
            return this.blockList.eachObject(t4);
          }, c2.prototype.eachBlockAtRange = function(t4, e3) {
            var n3, o3, r3, s4, a3, u2, c3, l2, h, p2, d, f;
            if (u2 = t4 = i(t4), d = u2[0], r3 = u2[1], p2 = this.locationFromPosition(d), o3 = this.locationFromPosition(r3), p2.index === o3.index)
              return n3 = this.getBlockAtIndex(p2.index), f = [p2.offset, o3.offset], e3(n3, f, p2.index);
            for (h = [], a3 = s4 = c3 = p2.index, l2 = o3.index; l2 >= c3 ? l2 >= s4 : s4 >= l2; a3 = l2 >= c3 ? ++s4 : --s4)
              (n3 = this.getBlockAtIndex(a3)) ? (f = function() {
                switch (a3) {
                  case p2.index:
                    return [p2.offset, n3.text.getLength()];
                  case o3.index:
                    return [0, o3.offset];
                  default:
                    return [0, n3.text.getLength()];
                }
              }(), h.push(e3(n3, f, a3))) : h.push(void 0);
            return h;
          }, c2.prototype.getCommonAttributesAtRange = function(t4) {
            var n3, r3, s4;
            return r3 = (t4 = i(t4))[0], o2(t4) ? this.getCommonAttributesAtPosition(r3) : (s4 = [], n3 = [], this.eachBlockAtRange(t4, function(t5, e3) {
              return e3[0] !== e3[1] ? (s4.push(t5.text.getCommonAttributesAtRange(e3)), n3.push(l(t5))) : void 0;
            }), e2.Hash.fromCommonAttributesOfObjects(s4).merge(e2.Hash.fromCommonAttributesOfObjects(n3)).toObject());
          }, c2.prototype.getCommonAttributesAtPosition = function(t4) {
            var n3, i2, o3, r3, s4, a3, c3, h, p2, d;
            if (p2 = this.locationFromPosition(t4), s4 = p2.index, h = p2.offset, o3 = this.getBlockAtIndex(s4), !o3)
              return {};
            r3 = l(o3), n3 = o3.text.getAttributesAtPosition(h), i2 = o3.text.getAttributesAtPosition(h - 1), a3 = function() {
              var t5, n4;
              t5 = e2.config.textAttributes, n4 = [];
              for (c3 in t5)
                d = t5[c3], d.inheritable && n4.push(c3);
              return n4;
            }();
            for (c3 in i2)
              d = i2[c3], (d === n3[c3] || u.call(a3, c3) >= 0) && (r3[c3] = d);
            return r3;
          }, c2.prototype.getRangeOfCommonAttributeAtPosition = function(t4, e3) {
            var n3, o3, r3, s4, a3, u2, c3, l2, h;
            return a3 = this.locationFromPosition(e3), r3 = a3.index, s4 = a3.offset, h = this.getTextAtIndex(r3), u2 = h.getExpandedRangeForAttributeAtOffset(t4, s4), l2 = u2[0], o3 = u2[1], c3 = this.positionFromLocation({index: r3, offset: l2}), n3 = this.positionFromLocation({index: r3, offset: o3}), i([c3, n3]);
          }, c2.prototype.getBaseBlockAttributes = function() {
            var t4, e3, n3, i2, o3, r3, s4;
            for (t4 = this.getBlockAtIndex(0).getAttributes(), n3 = i2 = 1, s4 = this.getBlockCount(); s4 >= 1 ? s4 > i2 : i2 > s4; n3 = s4 >= 1 ? ++i2 : --i2)
              e3 = this.getBlockAtIndex(n3).getAttributes(), r3 = Math.min(t4.length, e3.length), t4 = function() {
                var n4, i3, s5;
                for (s5 = [], o3 = n4 = 0, i3 = r3; (i3 >= 0 ? i3 > n4 : n4 > i3) && e3[o3] === t4[o3]; o3 = i3 >= 0 ? ++n4 : --n4)
                  s5.push(e3[o3]);
                return s5;
              }();
            return t4;
          }, l = function(t4) {
            var e3, n3;
            return n3 = {}, (e3 = t4.getLastAttribute()) && (n3[e3] = true), n3;
          }, c2.prototype.getAttachmentById = function(t4) {
            var e3, n3, i2, o3;
            for (o3 = this.getAttachments(), n3 = 0, i2 = o3.length; i2 > n3; n3++)
              if (e3 = o3[n3], e3.id === t4)
                return e3;
          }, c2.prototype.getAttachmentPieces = function() {
            var t4;
            return t4 = [], this.blockList.eachObject(function(e3) {
              var n3;
              return n3 = e3.text, t4 = t4.concat(n3.getAttachmentPieces());
            }), t4;
          }, c2.prototype.getAttachments = function() {
            var t4, e3, n3, i2, o3;
            for (i2 = this.getAttachmentPieces(), o3 = [], t4 = 0, e3 = i2.length; e3 > t4; t4++)
              n3 = i2[t4], o3.push(n3.attachment);
            return o3;
          }, c2.prototype.getRangeOfAttachment = function(t4) {
            var e3, n3, o3, r3, s4, a3, u2;
            for (r3 = 0, s4 = this.blockList.toArray(), n3 = e3 = 0, o3 = s4.length; o3 > e3; n3 = ++e3) {
              if (a3 = s4[n3].text, u2 = a3.getRangeOfAttachment(t4))
                return i([r3 + u2[0], r3 + u2[1]]);
              r3 += a3.getLength();
            }
          }, c2.prototype.getLocationRangeOfAttachment = function(t4) {
            var e3;
            return e3 = this.getRangeOfAttachment(t4), this.locationRangeFromRange(e3);
          }, c2.prototype.getAttachmentPieceForAttachment = function(t4) {
            var e3, n3, i2, o3;
            for (o3 = this.getAttachmentPieces(), e3 = 0, n3 = o3.length; n3 > e3; e3++)
              if (i2 = o3[e3], i2.attachment === t4)
                return i2;
          }, c2.prototype.findRangesForBlockAttribute = function(t4) {
            var e3, n3, i2, o3, r3, s4, a3;
            for (r3 = 0, s4 = [], a3 = this.getBlocks(), n3 = 0, i2 = a3.length; i2 > n3; n3++)
              e3 = a3[n3], o3 = e3.getLength(), e3.hasAttribute(t4) && s4.push([r3, r3 + o3]), r3 += o3;
            return s4;
          }, c2.prototype.findRangesForTextAttribute = function(t4, e3) {
            var n3, i2, o3, r3, s4, a3, u2, c3, l2, h;
            for (h = (e3 != null ? e3 : {}).withValue, a3 = 0, u2 = [], c3 = [], r3 = function(e4) {
              return h != null ? e4.getAttribute(t4) === h : e4.hasAttribute(t4);
            }, l2 = this.getPieces(), n3 = 0, i2 = l2.length; i2 > n3; n3++)
              s4 = l2[n3], o3 = s4.getLength(), r3(s4) && (u2[1] === a3 ? u2[1] = a3 + o3 : c3.push(u2 = [a3, a3 + o3])), a3 += o3;
            return c3;
          }, c2.prototype.locationFromPosition = function(t4) {
            var e3, n3;
            return n3 = this.blockList.findIndexAndOffsetAtPosition(Math.max(0, t4)), n3.index != null ? n3 : (e3 = this.getBlocks(), {index: e3.length - 1, offset: e3[e3.length - 1].getLength()});
          }, c2.prototype.positionFromLocation = function(t4) {
            return this.blockList.findPositionAtIndexAndOffset(t4.index, t4.offset);
          }, c2.prototype.locationRangeFromPosition = function(t4) {
            return i(this.locationFromPosition(t4));
          }, c2.prototype.locationRangeFromRange = function(t4) {
            var e3, n3, o3, r3;
            if (t4 = i(t4))
              return r3 = t4[0], n3 = t4[1], o3 = this.locationFromPosition(r3), e3 = this.locationFromPosition(n3), i([o3, e3]);
          }, c2.prototype.rangeFromLocationRange = function(t4) {
            var e3, n3;
            return t4 = i(t4), e3 = this.positionFromLocation(t4[0]), o2(t4) || (n3 = this.positionFromLocation(t4[1])), i([e3, n3]);
          }, c2.prototype.isEqualTo = function(t4) {
            return this.blockList.isEqualTo(t4 != null ? t4.blockList : void 0);
          }, c2.prototype.getTexts = function() {
            var t4, e3, n3, i2, o3;
            for (i2 = this.getBlocks(), o3 = [], e3 = 0, n3 = i2.length; n3 > e3; e3++)
              t4 = i2[e3], o3.push(t4.text);
            return o3;
          }, c2.prototype.getPieces = function() {
            var t4, e3, n3, i2, o3;
            for (n3 = [], i2 = this.getTexts(), t4 = 0, e3 = i2.length; e3 > t4; t4++)
              o3 = i2[t4], n3.push.apply(n3, o3.getPieces());
            return n3;
          }, c2.prototype.getObjects = function() {
            return this.getBlocks().concat(this.getTexts()).concat(this.getPieces());
          }, c2.prototype.toSerializableDocument = function() {
            var t4;
            return t4 = [], this.blockList.eachObject(function(e3) {
              return t4.push(e3.copyWithText(e3.text.toSerializableText()));
            }), new this.constructor(t4);
          }, c2.prototype.toString = function() {
            return this.blockList.toString();
          }, c2.prototype.toJSON = function() {
            return this.blockList.toJSON();
          }, c2.prototype.toConsole = function() {
            var t4;
            return JSON.stringify(function() {
              var e3, n3, i2, o3;
              for (i2 = this.blockList.toArray(), o3 = [], e3 = 0, n3 = i2.length; n3 > e3; e3++)
                t4 = i2[e3], o3.push(JSON.parse(t4.text.toConsole()));
              return o3;
            }.call(this));
          }, c2;
        }(e2.Object);
      }.call(this), function() {
        e2.LineBreakInsertion = function() {
          function t3(t4) {
            var e3;
            this.composition = t4, this.document = this.composition.document, e3 = this.composition.getSelectedRange(), this.startPosition = e3[0], this.endPosition = e3[1], this.startLocation = this.document.locationFromPosition(this.startPosition), this.endLocation = this.document.locationFromPosition(this.endPosition), this.block = this.document.getBlockAtIndex(this.endLocation.index), this.breaksOnReturn = this.block.breaksOnReturn(), this.previousCharacter = this.block.text.getStringAtPosition(this.endLocation.offset - 1), this.nextCharacter = this.block.text.getStringAtPosition(this.endLocation.offset);
          }
          return t3.prototype.shouldInsertBlockBreak = function() {
            return this.block.hasAttributes() && this.block.isListItem() && !this.block.isEmpty() ? this.startLocation.offset !== 0 : this.breaksOnReturn && this.nextCharacter !== "\n";
          }, t3.prototype.shouldBreakFormattedBlock = function() {
            return this.block.hasAttributes() && !this.block.isListItem() && (this.breaksOnReturn && this.nextCharacter === "\n" || this.previousCharacter === "\n");
          }, t3.prototype.shouldDecreaseListLevel = function() {
            return this.block.hasAttributes() && this.block.isListItem() && this.block.isEmpty();
          }, t3.prototype.shouldPrependListItem = function() {
            return this.block.isListItem() && this.startLocation.offset === 0 && !this.block.isEmpty();
          }, t3.prototype.shouldRemoveLastBlockAttribute = function() {
            return this.block.hasAttributes() && !this.block.isListItem() && this.block.isEmpty();
          }, t3;
        }();
      }.call(this), function() {
        var t3, n2, i, o2, r2, s2, a2, u, c2, l, h = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var i2 in e3)
            p2.call(e3, i2) && (t4[i2] = e3[i2]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, p2 = {}.hasOwnProperty;
        s2 = e2.normalizeRange, c2 = e2.rangesAreEqual, u = e2.rangeIsCollapsed, a2 = e2.objectsAreEqual, t3 = e2.arrayStartsWith, l = e2.summarizeArrayChange, i = e2.getAllAttributeNames, o2 = e2.getBlockConfig, r2 = e2.getTextConfig, n2 = e2.extend, e2.Composition = function(p3) {
          function d() {
            this.document = new e2.Document(), this.attachments = [], this.currentAttributes = {}, this.revision = 0;
          }
          var f;
          return h(d, p3), d.prototype.setDocument = function(t4) {
            var e3;
            return t4.isEqualTo(this.document) ? void 0 : (this.document = t4, this.refreshAttachments(), this.revision++, (e3 = this.delegate) != null && typeof e3.compositionDidChangeDocument == "function" ? e3.compositionDidChangeDocument(t4) : void 0);
          }, d.prototype.getSnapshot = function() {
            return {document: this.document, selectedRange: this.getSelectedRange()};
          }, d.prototype.loadSnapshot = function(t4) {
            var n3, i2, o3, r3;
            return n3 = t4.document, r3 = t4.selectedRange, (i2 = this.delegate) != null && typeof i2.compositionWillLoadSnapshot == "function" && i2.compositionWillLoadSnapshot(), this.setDocument(n3 != null ? n3 : new e2.Document()), this.setSelection(r3 != null ? r3 : [0, 0]), (o3 = this.delegate) != null && typeof o3.compositionDidLoadSnapshot == "function" ? o3.compositionDidLoadSnapshot() : void 0;
          }, d.prototype.insertText = function(t4, e3) {
            var n3, i2, o3, r3;
            return r3 = (e3 != null ? e3 : {updatePosition: true}).updatePosition, i2 = this.getSelectedRange(), this.setDocument(this.document.insertTextAtRange(t4, i2)), o3 = i2[0], n3 = o3 + t4.getLength(), r3 && this.setSelection(n3), this.notifyDelegateOfInsertionAtRange([o3, n3]);
          }, d.prototype.insertBlock = function(t4) {
            var n3;
            return t4 == null && (t4 = new e2.Block()), n3 = new e2.Document([t4]), this.insertDocument(n3);
          }, d.prototype.insertDocument = function(t4) {
            var n3, i2, o3;
            return t4 == null && (t4 = new e2.Document()), i2 = this.getSelectedRange(), this.setDocument(this.document.insertDocumentAtRange(t4, i2)), o3 = i2[0], n3 = o3 + t4.getLength(), this.setSelection(n3), this.notifyDelegateOfInsertionAtRange([o3, n3]);
          }, d.prototype.insertString = function(t4, n3) {
            var i2, o3;
            return i2 = this.getCurrentTextAttributes(), o3 = e2.Text.textForStringWithAttributes(t4, i2), this.insertText(o3, n3);
          }, d.prototype.insertBlockBreak = function() {
            var t4, e3, n3;
            return e3 = this.getSelectedRange(), this.setDocument(this.document.insertBlockBreakAtRange(e3)), n3 = e3[0], t4 = n3 + 1, this.setSelection(t4), this.notifyDelegateOfInsertionAtRange([n3, t4]);
          }, d.prototype.insertLineBreak = function() {
            var t4, n3;
            return n3 = new e2.LineBreakInsertion(this), n3.shouldDecreaseListLevel() ? (this.decreaseListLevel(), this.setSelection(n3.startPosition)) : n3.shouldPrependListItem() ? (t4 = new e2.Document([n3.block.copyWithoutText()]), this.insertDocument(t4)) : n3.shouldInsertBlockBreak() ? this.insertBlockBreak() : n3.shouldRemoveLastBlockAttribute() ? this.removeLastBlockAttribute() : n3.shouldBreakFormattedBlock() ? this.breakFormattedBlock(n3) : this.insertString("\n");
          }, d.prototype.insertHTML = function(t4) {
            var n3, i2, o3, r3;
            return n3 = e2.Document.fromHTML(t4), o3 = this.getSelectedRange(), this.setDocument(this.document.mergeDocumentAtRange(n3, o3)), r3 = o3[0], i2 = r3 + n3.getLength() - 1, this.setSelection(i2), this.notifyDelegateOfInsertionAtRange([r3, i2]);
          }, d.prototype.replaceHTML = function(t4) {
            var n3, i2, o3;
            return n3 = e2.Document.fromHTML(t4).copyUsingObjectsFromDocument(this.document), i2 = this.getLocationRange({strict: false}), o3 = this.document.rangeFromLocationRange(i2), this.setDocument(n3), this.setSelection(o3);
          }, d.prototype.insertFile = function(t4) {
            return this.insertFiles([t4]);
          }, d.prototype.insertFiles = function(t4) {
            var n3, i2, o3, r3, s3, a3;
            for (i2 = [], r3 = 0, s3 = t4.length; s3 > r3; r3++)
              o3 = t4[r3], ((a3 = this.delegate) != null ? a3.compositionShouldAcceptFile(o3) : void 0) && (n3 = e2.Attachment.attachmentForFile(o3), i2.push(n3));
            return this.insertAttachments(i2);
          }, d.prototype.insertAttachment = function(t4) {
            return this.insertAttachments([t4]);
          }, d.prototype.insertAttachments = function(t4) {
            var n3, i2, o3, r3, s3, a3, u2, c3, l2;
            for (c3 = new e2.Text(), r3 = 0, s3 = t4.length; s3 > r3; r3++)
              n3 = t4[r3], l2 = n3.getType(), a3 = (u2 = e2.config.attachments[l2]) != null ? u2.presentation : void 0, o3 = this.getCurrentTextAttributes(), a3 && (o3.presentation = a3), i2 = e2.Text.textForAttachmentWithAttributes(n3, o3), c3 = c3.appendText(i2);
            return this.insertText(c3);
          }, d.prototype.shouldManageDeletingInDirection = function(t4) {
            var e3;
            if (e3 = this.getLocationRange(), u(e3)) {
              if (t4 === "backward" && e3[0].offset === 0)
                return true;
              if (this.shouldManageMovingCursorInDirection(t4))
                return true;
            } else if (e3[0].index !== e3[1].index)
              return true;
            return false;
          }, d.prototype.deleteInDirection = function(t4, e3) {
            var n3, i2, o3, r3, s3, a3, c3, l2;
            return r3 = (e3 != null ? e3 : {}).length, s3 = this.getLocationRange(), a3 = this.getSelectedRange(), c3 = u(a3), c3 ? o3 = t4 === "backward" && s3[0].offset === 0 : l2 = s3[0].index !== s3[1].index, o3 && this.canDecreaseBlockAttributeLevel() && (i2 = this.getBlock(), i2.isListItem() ? this.decreaseListLevel() : this.decreaseBlockAttributeLevel(), this.setSelection(a3[0]), i2.isEmpty()) ? false : (c3 && (a3 = this.getExpandedRangeInDirection(t4, {length: r3}), t4 === "backward" && (n3 = this.getAttachmentAtRange(a3))), n3 ? (this.editAttachment(n3), false) : (this.setDocument(this.document.removeTextAtRange(a3)), this.setSelection(a3[0]), o3 || l2 ? false : void 0));
          }, d.prototype.moveTextFromRange = function(t4) {
            var e3;
            return e3 = this.getSelectedRange()[0], this.setDocument(this.document.moveTextFromRangeToPosition(t4, e3)), this.setSelection(e3);
          }, d.prototype.removeAttachment = function(t4) {
            var e3;
            return (e3 = this.document.getRangeOfAttachment(t4)) ? (this.stopEditingAttachment(), this.setDocument(this.document.removeTextAtRange(e3)), this.setSelection(e3[0])) : void 0;
          }, d.prototype.removeLastBlockAttribute = function() {
            var t4, e3, n3, i2;
            return n3 = this.getSelectedRange(), i2 = n3[0], e3 = n3[1], t4 = this.document.getBlockAtPosition(e3), this.removeCurrentAttribute(t4.getLastAttribute()), this.setSelection(i2);
          }, f = " ", d.prototype.insertPlaceholder = function() {
            return this.placeholderPosition = this.getPosition(), this.insertString(f);
          }, d.prototype.selectPlaceholder = function() {
            return this.placeholderPosition != null ? (this.setSelectedRange([this.placeholderPosition, this.placeholderPosition + f.length]), this.getSelectedRange()) : void 0;
          }, d.prototype.forgetPlaceholder = function() {
            return this.placeholderPosition = null;
          }, d.prototype.hasCurrentAttribute = function(t4) {
            var e3;
            return e3 = this.currentAttributes[t4], e3 != null && e3 !== false;
          }, d.prototype.toggleCurrentAttribute = function(t4) {
            var e3;
            return (e3 = !this.currentAttributes[t4]) ? this.setCurrentAttribute(t4, e3) : this.removeCurrentAttribute(t4);
          }, d.prototype.canSetCurrentAttribute = function(t4) {
            return o2(t4) ? this.canSetCurrentBlockAttribute(t4) : this.canSetCurrentTextAttribute(t4);
          }, d.prototype.canSetCurrentTextAttribute = function() {
            var t4, e3, n3, i2, o3;
            if (e3 = this.getSelectedDocument()) {
              for (o3 = e3.getAttachments(), n3 = 0, i2 = o3.length; i2 > n3; n3++)
                if (t4 = o3[n3], !t4.hasContent())
                  return false;
              return true;
            }
          }, d.prototype.canSetCurrentBlockAttribute = function() {
            var t4;
            if (t4 = this.getBlock())
              return !t4.isTerminalBlock();
          }, d.prototype.setCurrentAttribute = function(t4, e3) {
            return o2(t4) ? this.setBlockAttribute(t4, e3) : (this.setTextAttribute(t4, e3), this.currentAttributes[t4] = e3, this.notifyDelegateOfCurrentAttributesChange());
          }, d.prototype.setTextAttribute = function(t4, n3) {
            var i2, o3, r3, s3;
            if (o3 = this.getSelectedRange())
              return r3 = o3[0], i2 = o3[1], r3 !== i2 ? this.setDocument(this.document.addAttributeAtRange(t4, n3, o3)) : t4 === "href" ? (s3 = e2.Text.textForStringWithAttributes(n3, {href: n3}), this.insertText(s3)) : void 0;
          }, d.prototype.setBlockAttribute = function(t4, e3) {
            var n3, i2;
            if (i2 = this.getSelectedRange())
              return this.canSetCurrentAttribute(t4) ? (n3 = this.getBlock(), this.setDocument(this.document.applyBlockAttributeAtRange(t4, e3, i2)), this.setSelection(i2)) : void 0;
          }, d.prototype.removeCurrentAttribute = function(t4) {
            return o2(t4) ? (this.removeBlockAttribute(t4), this.updateCurrentAttributes()) : (this.removeTextAttribute(t4), delete this.currentAttributes[t4], this.notifyDelegateOfCurrentAttributesChange());
          }, d.prototype.removeTextAttribute = function(t4) {
            var e3;
            if (e3 = this.getSelectedRange())
              return this.setDocument(this.document.removeAttributeAtRange(t4, e3));
          }, d.prototype.removeBlockAttribute = function(t4) {
            var e3;
            if (e3 = this.getSelectedRange())
              return this.setDocument(this.document.removeAttributeAtRange(t4, e3));
          }, d.prototype.canDecreaseNestingLevel = function() {
            var t4;
            return ((t4 = this.getBlock()) != null ? t4.getNestingLevel() : void 0) > 0;
          }, d.prototype.canIncreaseNestingLevel = function() {
            var e3, n3, i2;
            if (e3 = this.getBlock())
              return ((i2 = o2(e3.getLastNestableAttribute())) != null ? i2.listAttribute : 0) ? (n3 = this.getPreviousBlock()) ? t3(n3.getListItemAttributes(), e3.getListItemAttributes()) : void 0 : e3.getNestingLevel() > 0;
          }, d.prototype.decreaseNestingLevel = function() {
            var t4;
            if (t4 = this.getBlock())
              return this.setDocument(this.document.replaceBlock(t4, t4.decreaseNestingLevel()));
          }, d.prototype.increaseNestingLevel = function() {
            var t4;
            if (t4 = this.getBlock())
              return this.setDocument(this.document.replaceBlock(t4, t4.increaseNestingLevel()));
          }, d.prototype.canDecreaseBlockAttributeLevel = function() {
            var t4;
            return ((t4 = this.getBlock()) != null ? t4.getAttributeLevel() : void 0) > 0;
          }, d.prototype.decreaseBlockAttributeLevel = function() {
            var t4, e3;
            return (t4 = (e3 = this.getBlock()) != null ? e3.getLastAttribute() : void 0) ? this.removeCurrentAttribute(t4) : void 0;
          }, d.prototype.decreaseListLevel = function() {
            var t4, e3, n3, i2, o3, r3;
            for (r3 = this.getSelectedRange()[0], o3 = this.document.locationFromPosition(r3).index, n3 = o3, t4 = this.getBlock().getAttributeLevel(); (e3 = this.document.getBlockAtIndex(n3 + 1)) && e3.isListItem() && e3.getAttributeLevel() > t4; )
              n3++;
            return r3 = this.document.positionFromLocation({index: o3, offset: 0}), i2 = this.document.positionFromLocation({index: n3, offset: 0}), this.setDocument(this.document.removeLastListAttributeAtRange([r3, i2]));
          }, d.prototype.updateCurrentAttributes = function() {
            var t4, e3, n3, o3, r3, s3;
            if (s3 = this.getSelectedRange({ignoreLock: true})) {
              for (e3 = this.document.getCommonAttributesAtRange(s3), r3 = i(), n3 = 0, o3 = r3.length; o3 > n3; n3++)
                t4 = r3[n3], e3[t4] || this.canSetCurrentAttribute(t4) || (e3[t4] = false);
              if (!a2(e3, this.currentAttributes))
                return this.currentAttributes = e3, this.notifyDelegateOfCurrentAttributesChange();
            }
          }, d.prototype.getCurrentAttributes = function() {
            return n2.call({}, this.currentAttributes);
          }, d.prototype.getCurrentTextAttributes = function() {
            var t4, e3, n3, i2;
            t4 = {}, n3 = this.currentAttributes;
            for (e3 in n3)
              i2 = n3[e3], i2 !== false && r2(e3) && (t4[e3] = i2);
            return t4;
          }, d.prototype.freezeSelection = function() {
            return this.setCurrentAttribute("frozen", true);
          }, d.prototype.thawSelection = function() {
            return this.removeCurrentAttribute("frozen");
          }, d.prototype.hasFrozenSelection = function() {
            return this.hasCurrentAttribute("frozen");
          }, d.proxyMethod("getSelectionManager().getPointRange"), d.proxyMethod("getSelectionManager().setLocationRangeFromPointRange"), d.proxyMethod("getSelectionManager().createLocationRangeFromDOMRange"), d.proxyMethod("getSelectionManager().locationIsCursorTarget"), d.proxyMethod("getSelectionManager().selectionIsExpanded"), d.proxyMethod("delegate?.getSelectionManager"), d.prototype.setSelection = function(t4) {
            var e3, n3;
            return e3 = this.document.locationRangeFromRange(t4), (n3 = this.delegate) != null ? n3.compositionDidRequestChangingSelectionToLocationRange(e3) : void 0;
          }, d.prototype.getSelectedRange = function() {
            var t4;
            return (t4 = this.getLocationRange()) ? this.document.rangeFromLocationRange(t4) : void 0;
          }, d.prototype.setSelectedRange = function(t4) {
            var e3;
            return e3 = this.document.locationRangeFromRange(t4), this.getSelectionManager().setLocationRange(e3);
          }, d.prototype.getPosition = function() {
            var t4;
            return (t4 = this.getLocationRange()) ? this.document.positionFromLocation(t4[0]) : void 0;
          }, d.prototype.getLocationRange = function(t4) {
            var e3, n3;
            return (e3 = (n3 = this.targetLocationRange) != null ? n3 : this.getSelectionManager().getLocationRange(t4)) != null ? e3 : s2({index: 0, offset: 0});
          }, d.prototype.withTargetLocationRange = function(t4, e3) {
            var n3;
            this.targetLocationRange = t4;
            try {
              n3 = e3();
            } finally {
              this.targetLocationRange = null;
            }
            return n3;
          }, d.prototype.withTargetRange = function(t4, e3) {
            var n3;
            return n3 = this.document.locationRangeFromRange(t4), this.withTargetLocationRange(n3, e3);
          }, d.prototype.withTargetDOMRange = function(t4, e3) {
            var n3;
            return n3 = this.createLocationRangeFromDOMRange(t4, {strict: false}), this.withTargetLocationRange(n3, e3);
          }, d.prototype.getExpandedRangeInDirection = function(t4, e3) {
            var n3, i2, o3, r3;
            return i2 = (e3 != null ? e3 : {}).length, o3 = this.getSelectedRange(), r3 = o3[0], n3 = o3[1], t4 === "backward" ? i2 ? r3 -= i2 : r3 = this.translateUTF16PositionFromOffset(r3, -1) : i2 ? n3 += i2 : n3 = this.translateUTF16PositionFromOffset(n3, 1), s2([r3, n3]);
          }, d.prototype.shouldManageMovingCursorInDirection = function(t4) {
            var e3;
            return this.editingAttachment ? true : (e3 = this.getExpandedRangeInDirection(t4), this.getAttachmentAtRange(e3) != null);
          }, d.prototype.moveCursorInDirection = function(t4) {
            var e3, n3, i2, o3;
            return this.editingAttachment ? i2 = this.document.getRangeOfAttachment(this.editingAttachment) : (o3 = this.getSelectedRange(), i2 = this.getExpandedRangeInDirection(t4), n3 = !c2(o3, i2)), this.setSelectedRange(t4 === "backward" ? i2[0] : i2[1]), n3 && (e3 = this.getAttachmentAtRange(i2)) ? this.editAttachment(e3) : void 0;
          }, d.prototype.expandSelectionInDirection = function(t4, e3) {
            var n3, i2;
            return n3 = (e3 != null ? e3 : {}).length, i2 = this.getExpandedRangeInDirection(t4, {length: n3}), this.setSelectedRange(i2);
          }, d.prototype.expandSelectionForEditing = function() {
            return this.hasCurrentAttribute("href") ? this.expandSelectionAroundCommonAttribute("href") : void 0;
          }, d.prototype.expandSelectionAroundCommonAttribute = function(t4) {
            var e3, n3;
            return e3 = this.getPosition(), n3 = this.document.getRangeOfCommonAttributeAtPosition(t4, e3), this.setSelectedRange(n3);
          }, d.prototype.selectionContainsAttachments = function() {
            var t4;
            return ((t4 = this.getSelectedAttachments()) != null ? t4.length : void 0) > 0;
          }, d.prototype.selectionIsInCursorTarget = function() {
            return this.editingAttachment || this.positionIsCursorTarget(this.getPosition());
          }, d.prototype.positionIsCursorTarget = function(t4) {
            var e3;
            return (e3 = this.document.locationFromPosition(t4)) ? this.locationIsCursorTarget(e3) : void 0;
          }, d.prototype.positionIsBlockBreak = function(t4) {
            var e3;
            return (e3 = this.document.getPieceAtPosition(t4)) != null ? e3.isBlockBreak() : void 0;
          }, d.prototype.getSelectedDocument = function() {
            var t4;
            return (t4 = this.getSelectedRange()) ? this.document.getDocumentAtRange(t4) : void 0;
          }, d.prototype.getSelectedAttachments = function() {
            var t4;
            return (t4 = this.getSelectedDocument()) != null ? t4.getAttachments() : void 0;
          }, d.prototype.getAttachments = function() {
            return this.attachments.slice(0);
          }, d.prototype.refreshAttachments = function() {
            var t4, e3, n3, i2, o3, r3, s3, a3, u2, c3, h2, p4;
            for (n3 = this.document.getAttachments(), a3 = l(this.attachments, n3), t4 = a3.added, h2 = a3.removed, this.attachments = n3, i2 = 0, r3 = h2.length; r3 > i2; i2++)
              e3 = h2[i2], e3.delegate = null, (u2 = this.delegate) != null && typeof u2.compositionDidRemoveAttachment == "function" && u2.compositionDidRemoveAttachment(e3);
            for (p4 = [], o3 = 0, s3 = t4.length; s3 > o3; o3++)
              e3 = t4[o3], e3.delegate = this, p4.push((c3 = this.delegate) != null && typeof c3.compositionDidAddAttachment == "function" ? c3.compositionDidAddAttachment(e3) : void 0);
            return p4;
          }, d.prototype.attachmentDidChangeAttributes = function(t4) {
            var e3;
            return this.revision++, (e3 = this.delegate) != null && typeof e3.compositionDidEditAttachment == "function" ? e3.compositionDidEditAttachment(t4) : void 0;
          }, d.prototype.attachmentDidChangePreviewURL = function(t4) {
            var e3;
            return this.revision++, (e3 = this.delegate) != null && typeof e3.compositionDidChangeAttachmentPreviewURL == "function" ? e3.compositionDidChangeAttachmentPreviewURL(t4) : void 0;
          }, d.prototype.editAttachment = function(t4, e3) {
            var n3;
            if (t4 !== this.editingAttachment)
              return this.stopEditingAttachment(), this.editingAttachment = t4, (n3 = this.delegate) != null && typeof n3.compositionDidStartEditingAttachment == "function" ? n3.compositionDidStartEditingAttachment(this.editingAttachment, e3) : void 0;
          }, d.prototype.stopEditingAttachment = function() {
            var t4;
            if (this.editingAttachment)
              return (t4 = this.delegate) != null && typeof t4.compositionDidStopEditingAttachment == "function" && t4.compositionDidStopEditingAttachment(this.editingAttachment), this.editingAttachment = null;
          }, d.prototype.updateAttributesForAttachment = function(t4, e3) {
            return this.setDocument(this.document.updateAttributesForAttachment(t4, e3));
          }, d.prototype.removeAttributeForAttachment = function(t4, e3) {
            return this.setDocument(this.document.removeAttributeForAttachment(t4, e3));
          }, d.prototype.breakFormattedBlock = function(t4) {
            var n3, i2, o3, r3, s3;
            return i2 = t4.document, n3 = t4.block, r3 = t4.startPosition, s3 = [r3 - 1, r3], n3.getBlockBreakPosition() === t4.startLocation.offset ? (n3.breaksOnReturn() && t4.nextCharacter === "\n" ? r3 += 1 : i2 = i2.removeTextAtRange(s3), s3 = [r3, r3]) : t4.nextCharacter === "\n" ? t4.previousCharacter === "\n" ? s3 = [r3 - 1, r3 + 1] : (s3 = [r3, r3 + 1], r3 += 1) : t4.startLocation.offset - 1 !== 0 && (r3 += 1), o3 = new e2.Document([n3.removeLastAttribute().copyWithoutText()]), this.setDocument(i2.insertDocumentAtRange(o3, s3)), this.setSelection(r3);
          }, d.prototype.getPreviousBlock = function() {
            var t4, e3;
            return (e3 = this.getLocationRange()) && (t4 = e3[0].index, t4 > 0) ? this.document.getBlockAtIndex(t4 - 1) : void 0;
          }, d.prototype.getBlock = function() {
            var t4;
            return (t4 = this.getLocationRange()) ? this.document.getBlockAtIndex(t4[0].index) : void 0;
          }, d.prototype.getAttachmentAtRange = function(t4) {
            var n3;
            return n3 = this.document.getDocumentAtRange(t4), n3.toString() === e2.OBJECT_REPLACEMENT_CHARACTER + "\n" ? n3.getAttachments()[0] : void 0;
          }, d.prototype.notifyDelegateOfCurrentAttributesChange = function() {
            var t4;
            return (t4 = this.delegate) != null && typeof t4.compositionDidChangeCurrentAttributes == "function" ? t4.compositionDidChangeCurrentAttributes(this.currentAttributes) : void 0;
          }, d.prototype.notifyDelegateOfInsertionAtRange = function(t4) {
            var e3;
            return (e3 = this.delegate) != null && typeof e3.compositionDidPerformInsertionAtRange == "function" ? e3.compositionDidPerformInsertionAtRange(t4) : void 0;
          }, d.prototype.translateUTF16PositionFromOffset = function(t4, e3) {
            var n3, i2;
            return i2 = this.document.toUTF16String(), n3 = i2.offsetFromUCS2Offset(t4), i2.offsetToUCS2Offset(n3 + e3);
          }, d;
        }(e2.BasicObject);
      }.call(this), function() {
        var t3 = function(t4, e3) {
          function i() {
            this.constructor = t4;
          }
          for (var o2 in e3)
            n2.call(e3, o2) && (t4[o2] = e3[o2]);
          return i.prototype = e3.prototype, t4.prototype = new i(), t4.__super__ = e3.prototype, t4;
        }, n2 = {}.hasOwnProperty;
        e2.UndoManager = function(e3) {
          function n3(t4) {
            this.composition = t4, this.undoEntries = [], this.redoEntries = [];
          }
          var i;
          return t3(n3, e3), n3.prototype.recordUndoEntry = function(t4, e4) {
            var n4, o2, r2, s2, a2;
            return s2 = e4 != null ? e4 : {}, o2 = s2.context, n4 = s2.consolidatable, r2 = this.undoEntries.slice(-1)[0], n4 && i(r2, t4, o2) ? void 0 : (a2 = this.createEntry({description: t4, context: o2}), this.undoEntries.push(a2), this.redoEntries = []);
          }, n3.prototype.undo = function() {
            var t4, e4;
            return (e4 = this.undoEntries.pop()) ? (t4 = this.createEntry(e4), this.redoEntries.push(t4), this.composition.loadSnapshot(e4.snapshot)) : void 0;
          }, n3.prototype.redo = function() {
            var t4, e4;
            return (t4 = this.redoEntries.pop()) ? (e4 = this.createEntry(t4), this.undoEntries.push(e4), this.composition.loadSnapshot(t4.snapshot)) : void 0;
          }, n3.prototype.canUndo = function() {
            return this.undoEntries.length > 0;
          }, n3.prototype.canRedo = function() {
            return this.redoEntries.length > 0;
          }, n3.prototype.createEntry = function(t4) {
            var e4, n4, i2;
            return i2 = t4 != null ? t4 : {}, n4 = i2.description, e4 = i2.context, {description: n4 != null ? n4.toString() : void 0, context: JSON.stringify(e4), snapshot: this.composition.getSnapshot()};
          }, i = function(t4, e4, n4) {
            return (t4 != null ? t4.description : void 0) === (e4 != null ? e4.toString() : void 0) && (t4 != null ? t4.context : void 0) === JSON.stringify(n4);
          }, n3;
        }(e2.BasicObject);
      }.call(this), function() {
        var t3;
        e2.attachmentGalleryFilter = function(e3) {
          var n2;
          return n2 = new t3(e3), n2.perform(), n2.getSnapshot();
        }, t3 = function() {
          function t4(t5) {
            this.document = t5.document, this.selectedRange = t5.selectedRange;
          }
          var e3, n2, i;
          return e3 = "attachmentGallery", n2 = "presentation", i = "gallery", t4.prototype.perform = function() {
            return this.removeBlockAttribute(), this.applyBlockAttribute();
          }, t4.prototype.getSnapshot = function() {
            return {document: this.document, selectedRange: this.selectedRange};
          }, t4.prototype.removeBlockAttribute = function() {
            var t5, n3, i2, o2, r2;
            for (o2 = this.findRangesOfBlocks(), r2 = [], t5 = 0, n3 = o2.length; n3 > t5; t5++)
              i2 = o2[t5], r2.push(this.document = this.document.removeAttributeAtRange(e3, i2));
            return r2;
          }, t4.prototype.applyBlockAttribute = function() {
            var t5, n3, i2, o2, r2, s2;
            for (i2 = 0, r2 = this.findRangesOfPieces(), s2 = [], t5 = 0, n3 = r2.length; n3 > t5; t5++)
              o2 = r2[t5], o2[1] - o2[0] > 1 && (o2[0] += i2, o2[1] += i2, this.document.getCharacterAtPosition(o2[1]) !== "\n" && (this.document = this.document.insertBlockBreakAtRange(o2[1]), o2[1] < this.selectedRange[1] && this.moveSelectedRangeForward(), o2[1]++, i2++), o2[0] !== 0 && this.document.getCharacterAtPosition(o2[0] - 1) !== "\n" && (this.document = this.document.insertBlockBreakAtRange(o2[0]), o2[0] < this.selectedRange[0] && this.moveSelectedRangeForward(), o2[0]++, i2++), s2.push(this.document = this.document.applyBlockAttributeAtRange(e3, true, o2)));
            return s2;
          }, t4.prototype.findRangesOfBlocks = function() {
            return this.document.findRangesForBlockAttribute(e3);
          }, t4.prototype.findRangesOfPieces = function() {
            return this.document.findRangesForTextAttribute(n2, {withValue: i});
          }, t4.prototype.moveSelectedRangeForward = function() {
            return this.selectedRange[0] += 1, this.selectedRange[1] += 1;
          }, t4;
        }();
      }.call(this), function() {
        var t3 = function(t4, e3) {
          return function() {
            return t4.apply(e3, arguments);
          };
        };
        e2.Editor = function() {
          function n2(n3, o2, r2) {
            this.composition = n3, this.selectionManager = o2, this.element = r2, this.insertFiles = t3(this.insertFiles, this), this.undoManager = new e2.UndoManager(this.composition), this.filters = i.slice(0);
          }
          var i;
          return i = [e2.attachmentGalleryFilter], n2.prototype.loadDocument = function(t4) {
            return this.loadSnapshot({document: t4, selectedRange: [0, 0]});
          }, n2.prototype.loadHTML = function(t4) {
            return t4 == null && (t4 = ""), this.loadDocument(e2.Document.fromHTML(t4, {referenceElement: this.element}));
          }, n2.prototype.loadJSON = function(t4) {
            var n3, i2;
            return n3 = t4.document, i2 = t4.selectedRange, n3 = e2.Document.fromJSON(n3), this.loadSnapshot({document: n3, selectedRange: i2});
          }, n2.prototype.loadSnapshot = function(t4) {
            return this.undoManager = new e2.UndoManager(this.composition), this.composition.loadSnapshot(t4);
          }, n2.prototype.getDocument = function() {
            return this.composition.document;
          }, n2.prototype.getSelectedDocument = function() {
            return this.composition.getSelectedDocument();
          }, n2.prototype.getSnapshot = function() {
            return this.composition.getSnapshot();
          }, n2.prototype.toJSON = function() {
            return this.getSnapshot();
          }, n2.prototype.deleteInDirection = function(t4) {
            return this.composition.deleteInDirection(t4);
          }, n2.prototype.insertAttachment = function(t4) {
            return this.composition.insertAttachment(t4);
          }, n2.prototype.insertAttachments = function(t4) {
            return this.composition.insertAttachments(t4);
          }, n2.prototype.insertDocument = function(t4) {
            return this.composition.insertDocument(t4);
          }, n2.prototype.insertFile = function(t4) {
            return this.composition.insertFile(t4);
          }, n2.prototype.insertFiles = function(t4) {
            return this.composition.insertFiles(t4);
          }, n2.prototype.insertHTML = function(t4) {
            return this.composition.insertHTML(t4);
          }, n2.prototype.insertString = function(t4) {
            return this.composition.insertString(t4);
          }, n2.prototype.insertText = function(t4) {
            return this.composition.insertText(t4);
          }, n2.prototype.insertLineBreak = function() {
            return this.composition.insertLineBreak();
          }, n2.prototype.getSelectedRange = function() {
            return this.composition.getSelectedRange();
          }, n2.prototype.getPosition = function() {
            return this.composition.getPosition();
          }, n2.prototype.getClientRectAtPosition = function(t4) {
            var e3;
            return e3 = this.getDocument().locationRangeFromRange([t4, t4 + 1]), this.selectionManager.getClientRectAtLocationRange(e3);
          }, n2.prototype.expandSelectionInDirection = function(t4) {
            return this.composition.expandSelectionInDirection(t4);
          }, n2.prototype.moveCursorInDirection = function(t4) {
            return this.composition.moveCursorInDirection(t4);
          }, n2.prototype.setSelectedRange = function(t4) {
            return this.composition.setSelectedRange(t4);
          }, n2.prototype.activateAttribute = function(t4, e3) {
            return e3 == null && (e3 = true), this.composition.setCurrentAttribute(t4, e3);
          }, n2.prototype.attributeIsActive = function(t4) {
            return this.composition.hasCurrentAttribute(t4);
          }, n2.prototype.canActivateAttribute = function(t4) {
            return this.composition.canSetCurrentAttribute(t4);
          }, n2.prototype.deactivateAttribute = function(t4) {
            return this.composition.removeCurrentAttribute(t4);
          }, n2.prototype.canDecreaseNestingLevel = function() {
            return this.composition.canDecreaseNestingLevel();
          }, n2.prototype.canIncreaseNestingLevel = function() {
            return this.composition.canIncreaseNestingLevel();
          }, n2.prototype.decreaseNestingLevel = function() {
            return this.canDecreaseNestingLevel() ? this.composition.decreaseNestingLevel() : void 0;
          }, n2.prototype.increaseNestingLevel = function() {
            return this.canIncreaseNestingLevel() ? this.composition.increaseNestingLevel() : void 0;
          }, n2.prototype.canRedo = function() {
            return this.undoManager.canRedo();
          }, n2.prototype.canUndo = function() {
            return this.undoManager.canUndo();
          }, n2.prototype.recordUndoEntry = function(t4, e3) {
            var n3, i2, o2;
            return o2 = e3 != null ? e3 : {}, i2 = o2.context, n3 = o2.consolidatable, this.undoManager.recordUndoEntry(t4, {context: i2, consolidatable: n3});
          }, n2.prototype.redo = function() {
            return this.canRedo() ? this.undoManager.redo() : void 0;
          }, n2.prototype.undo = function() {
            return this.canUndo() ? this.undoManager.undo() : void 0;
          }, n2;
        }();
      }.call(this), function() {
        var t3 = function(t4, e3) {
          function i() {
            this.constructor = t4;
          }
          for (var o2 in e3)
            n2.call(e3, o2) && (t4[o2] = e3[o2]);
          return i.prototype = e3.prototype, t4.prototype = new i(), t4.__super__ = e3.prototype, t4;
        }, n2 = {}.hasOwnProperty;
        e2.ManagedAttachment = function(e3) {
          function n3(t4, e4) {
            var n4;
            this.attachmentManager = t4, this.attachment = e4, n4 = this.attachment, this.id = n4.id, this.file = n4.file;
          }
          return t3(n3, e3), n3.prototype.remove = function() {
            return this.attachmentManager.requestRemovalOfAttachment(this.attachment);
          }, n3.proxyMethod("attachment.getAttribute"), n3.proxyMethod("attachment.hasAttribute"), n3.proxyMethod("attachment.setAttribute"), n3.proxyMethod("attachment.getAttributes"), n3.proxyMethod("attachment.setAttributes"), n3.proxyMethod("attachment.isPending"), n3.proxyMethod("attachment.isPreviewable"), n3.proxyMethod("attachment.getURL"), n3.proxyMethod("attachment.getHref"), n3.proxyMethod("attachment.getFilename"), n3.proxyMethod("attachment.getFilesize"), n3.proxyMethod("attachment.getFormattedFilesize"), n3.proxyMethod("attachment.getExtension"), n3.proxyMethod("attachment.getContentType"), n3.proxyMethod("attachment.getFile"), n3.proxyMethod("attachment.setFile"), n3.proxyMethod("attachment.releaseFile"), n3.proxyMethod("attachment.getUploadProgress"), n3.proxyMethod("attachment.setUploadProgress"), n3;
        }(e2.BasicObject);
      }.call(this), function() {
        var t3 = function(t4, e3) {
          function i() {
            this.constructor = t4;
          }
          for (var o2 in e3)
            n2.call(e3, o2) && (t4[o2] = e3[o2]);
          return i.prototype = e3.prototype, t4.prototype = new i(), t4.__super__ = e3.prototype, t4;
        }, n2 = {}.hasOwnProperty;
        e2.AttachmentManager = function(n3) {
          function i(t4) {
            var e3, n4, i2;
            for (t4 == null && (t4 = []), this.managedAttachments = {}, n4 = 0, i2 = t4.length; i2 > n4; n4++)
              e3 = t4[n4], this.manageAttachment(e3);
          }
          return t3(i, n3), i.prototype.getAttachments = function() {
            var t4, e3, n4, i2;
            n4 = this.managedAttachments, i2 = [];
            for (e3 in n4)
              t4 = n4[e3], i2.push(t4);
            return i2;
          }, i.prototype.manageAttachment = function(t4) {
            var n4, i2;
            return (n4 = this.managedAttachments)[i2 = t4.id] != null ? n4[i2] : n4[i2] = new e2.ManagedAttachment(this, t4);
          }, i.prototype.attachmentIsManaged = function(t4) {
            return t4.id in this.managedAttachments;
          }, i.prototype.requestRemovalOfAttachment = function(t4) {
            var e3;
            return this.attachmentIsManaged(t4) && (e3 = this.delegate) != null && typeof e3.attachmentManagerDidRequestRemovalOfAttachment == "function" ? e3.attachmentManagerDidRequestRemovalOfAttachment(t4) : void 0;
          }, i.prototype.unmanageAttachment = function(t4) {
            var e3;
            return e3 = this.managedAttachments[t4.id], delete this.managedAttachments[t4.id], e3;
          }, i;
        }(e2.BasicObject);
      }.call(this), function() {
        var t3, n2, i, o2, r2, s2, a2, u, c2, l, h;
        t3 = e2.elementContainsNode, n2 = e2.findChildIndexOfNode, r2 = e2.nodeIsBlockStart, s2 = e2.nodeIsBlockStartComment, o2 = e2.nodeIsBlockContainer, a2 = e2.nodeIsCursorTarget, u = e2.nodeIsEmptyTextNode, c2 = e2.nodeIsTextNode, i = e2.nodeIsAttachmentElement, l = e2.tagName, h = e2.walkTree, e2.LocationMapper = function() {
          function e3(t4) {
            this.element = t4;
          }
          var p2, d, f, g;
          return e3.prototype.findLocationFromContainerAndOffset = function(e4, i2, o3) {
            var s3, u2, l2, p3, g2, m, v;
            for (m = (o3 != null ? o3 : {strict: true}).strict, u2 = 0, l2 = false, p3 = {index: 0, offset: 0}, (s3 = this.findAttachmentElementParentForNode(e4)) && (e4 = s3.parentNode, i2 = n2(s3)), v = h(this.element, {usingFilter: f}); v.nextNode(); ) {
              if (g2 = v.currentNode, g2 === e4 && c2(e4)) {
                a2(g2) || (p3.offset += i2);
                break;
              }
              if (g2.parentNode === e4) {
                if (u2++ === i2)
                  break;
              } else if (!t3(e4, g2) && u2 > 0)
                break;
              r2(g2, {strict: m}) ? (l2 && p3.index++, p3.offset = 0, l2 = true) : p3.offset += d(g2);
            }
            return p3;
          }, e3.prototype.findContainerAndOffsetFromLocation = function(t4) {
            var e4, i2, s3, u2, l2;
            if (t4.index === 0 && t4.offset === 0) {
              for (e4 = this.element, u2 = 0; e4.firstChild; )
                if (e4 = e4.firstChild, o2(e4)) {
                  u2 = 1;
                  break;
                }
              return [e4, u2];
            }
            if (l2 = this.findNodeAndOffsetFromLocation(t4), i2 = l2[0], s3 = l2[1], i2) {
              if (c2(i2))
                d(i2) === 0 ? (e4 = i2.parentNode.parentNode, u2 = n2(i2.parentNode), a2(i2, {name: "right"}) && u2++) : (e4 = i2, u2 = t4.offset - s3);
              else {
                if (e4 = i2.parentNode, !r2(i2.previousSibling) && !o2(e4))
                  for (; i2 === e4.lastChild && (i2 = e4, e4 = e4.parentNode, !o2(e4)); )
                    ;
                u2 = n2(i2), t4.offset !== 0 && u2++;
              }
              return [e4, u2];
            }
          }, e3.prototype.findNodeAndOffsetFromLocation = function(t4) {
            var e4, n3, i2, o3, r3, s3, u2, l2;
            for (u2 = 0, l2 = this.getSignificantNodesForIndex(t4.index), n3 = 0, i2 = l2.length; i2 > n3; n3++) {
              if (e4 = l2[n3], o3 = d(e4), t4.offset <= u2 + o3)
                if (c2(e4)) {
                  if (r3 = e4, s3 = u2, t4.offset === s3 && a2(r3))
                    break;
                } else
                  r3 || (r3 = e4, s3 = u2);
              if (u2 += o3, u2 > t4.offset)
                break;
            }
            return [r3, s3];
          }, e3.prototype.findAttachmentElementParentForNode = function(t4) {
            for (; t4 && t4 !== this.element; ) {
              if (i(t4))
                return t4;
              t4 = t4.parentNode;
            }
          }, e3.prototype.getSignificantNodesForIndex = function(t4) {
            var e4, n3, i2, o3, r3;
            for (i2 = [], r3 = h(this.element, {usingFilter: p2}), o3 = false; r3.nextNode(); )
              if (n3 = r3.currentNode, s2(n3)) {
                if (typeof e4 != "undefined" && e4 !== null ? e4++ : e4 = 0, e4 === t4)
                  o3 = true;
                else if (o3)
                  break;
              } else
                o3 && i2.push(n3);
            return i2;
          }, d = function(t4) {
            var e4;
            return t4.nodeType === Node.TEXT_NODE ? a2(t4) ? 0 : (e4 = t4.textContent, e4.length) : l(t4) === "br" || i(t4) ? 1 : 0;
          }, p2 = function(t4) {
            return g(t4) === NodeFilter.FILTER_ACCEPT ? f(t4) : NodeFilter.FILTER_REJECT;
          }, g = function(t4) {
            return u(t4) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
          }, f = function(t4) {
            return i(t4.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
          }, e3;
        }();
      }.call(this), function() {
        var t3, n2, i = [].slice;
        t3 = e2.getDOMRange, n2 = e2.setDOMRange, e2.PointMapper = function() {
          function e3() {
          }
          return e3.prototype.createDOMRangeFromPoint = function(e4) {
            var i2, o2, r2, s2, a2, u, c2, l;
            if (c2 = e4.x, l = e4.y, document.caretPositionFromPoint)
              return a2 = document.caretPositionFromPoint(c2, l), r2 = a2.offsetNode, o2 = a2.offset, i2 = document.createRange(), i2.setStart(r2, o2), i2;
            if (document.caretRangeFromPoint)
              return document.caretRangeFromPoint(c2, l);
            if (document.body.createTextRange) {
              s2 = t3();
              try {
                u = document.body.createTextRange(), u.moveToPoint(c2, l), u.select();
              } catch (h) {
              }
              return i2 = t3(), n2(s2), i2;
            }
          }, e3.prototype.getClientRectsForDOMRange = function(t4) {
            var e4, n3, o2;
            return n3 = i.call(t4.getClientRects()), o2 = n3[0], e4 = n3[n3.length - 1], [o2, e4];
          }, e3;
        }();
      }.call(this), function() {
        var t3, n2 = function(t4, e3) {
          return function() {
            return t4.apply(e3, arguments);
          };
        }, i = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var i2 in e3)
            o2.call(e3, i2) && (t4[i2] = e3[i2]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, o2 = {}.hasOwnProperty, r2 = [].indexOf || function(t4) {
          for (var e3 = 0, n3 = this.length; n3 > e3; e3++)
            if (e3 in this && this[e3] === t4)
              return e3;
          return -1;
        };
        t3 = e2.getDOMRange, e2.SelectionChangeObserver = function(e3) {
          function o3() {
            this.run = n2(this.run, this), this.update = n2(this.update, this), this.selectionManagers = [];
          }
          var s2;
          return i(o3, e3), o3.prototype.start = function() {
            return this.started ? void 0 : (this.started = true, "onselectionchange" in document ? document.addEventListener("selectionchange", this.update, true) : this.run());
          }, o3.prototype.stop = function() {
            return this.started ? (this.started = false, document.removeEventListener("selectionchange", this.update, true)) : void 0;
          }, o3.prototype.registerSelectionManager = function(t4) {
            return r2.call(this.selectionManagers, t4) < 0 ? (this.selectionManagers.push(t4), this.start()) : void 0;
          }, o3.prototype.unregisterSelectionManager = function(t4) {
            var e4;
            return this.selectionManagers = function() {
              var n3, i2, o4, r3;
              for (o4 = this.selectionManagers, r3 = [], n3 = 0, i2 = o4.length; i2 > n3; n3++)
                e4 = o4[n3], e4 !== t4 && r3.push(e4);
              return r3;
            }.call(this), this.selectionManagers.length === 0 ? this.stop() : void 0;
          }, o3.prototype.notifySelectionManagersOfSelectionChange = function() {
            var t4, e4, n3, i2, o4;
            for (n3 = this.selectionManagers, i2 = [], t4 = 0, e4 = n3.length; e4 > t4; t4++)
              o4 = n3[t4], i2.push(o4.selectionDidChange());
            return i2;
          }, o3.prototype.update = function() {
            var e4;
            return e4 = t3(), s2(e4, this.domRange) ? void 0 : (this.domRange = e4, this.notifySelectionManagersOfSelectionChange());
          }, o3.prototype.reset = function() {
            return this.domRange = null, this.update();
          }, o3.prototype.run = function() {
            return this.started ? (this.update(), requestAnimationFrame(this.run)) : void 0;
          }, s2 = function(t4, e4) {
            return (t4 != null ? t4.startContainer : void 0) === (e4 != null ? e4.startContainer : void 0) && (t4 != null ? t4.startOffset : void 0) === (e4 != null ? e4.startOffset : void 0) && (t4 != null ? t4.endContainer : void 0) === (e4 != null ? e4.endContainer : void 0) && (t4 != null ? t4.endOffset : void 0) === (e4 != null ? e4.endOffset : void 0);
          }, o3;
        }(e2.BasicObject), e2.selectionChangeObserver == null && (e2.selectionChangeObserver = new e2.SelectionChangeObserver());
      }.call(this), function() {
        var t3, n2, i, o2, r2, s2, a2, u, c2, l, h = function(t4, e3) {
          return function() {
            return t4.apply(e3, arguments);
          };
        }, p2 = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var i2 in e3)
            d.call(e3, i2) && (t4[i2] = e3[i2]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, d = {}.hasOwnProperty;
        i = e2.getDOMSelection, n2 = e2.getDOMRange, l = e2.setDOMRange, t3 = e2.elementContainsNode, s2 = e2.nodeIsCursorTarget, r2 = e2.innerElementIsActive, o2 = e2.handleEvent, a2 = e2.normalizeRange, u = e2.rangeIsCollapsed, c2 = e2.rangesAreEqual, e2.SelectionManager = function(d2) {
          function f(t4) {
            this.element = t4, this.selectionDidChange = h(this.selectionDidChange, this), this.didMouseDown = h(this.didMouseDown, this), this.locationMapper = new e2.LocationMapper(this.element), this.pointMapper = new e2.PointMapper(), this.lockCount = 0, o2("mousedown", {onElement: this.element, withCallback: this.didMouseDown});
          }
          return p2(f, d2), f.prototype.getLocationRange = function(t4) {
            var e3, i2;
            return t4 == null && (t4 = {}), e3 = t4.strict === false ? this.createLocationRangeFromDOMRange(n2(), {strict: false}) : t4.ignoreLock ? this.currentLocationRange : (i2 = this.lockedLocationRange) != null ? i2 : this.currentLocationRange;
          }, f.prototype.setLocationRange = function(t4) {
            var e3;
            if (!this.lockedLocationRange)
              return t4 = a2(t4), (e3 = this.createDOMRangeFromLocationRange(t4)) ? (l(e3), this.updateCurrentLocationRange(t4)) : void 0;
          }, f.prototype.setLocationRangeFromPointRange = function(t4) {
            var e3, n3;
            return t4 = a2(t4), n3 = this.getLocationAtPoint(t4[0]), e3 = this.getLocationAtPoint(t4[1]), this.setLocationRange([n3, e3]);
          }, f.prototype.getClientRectAtLocationRange = function(t4) {
            var e3;
            return (e3 = this.createDOMRangeFromLocationRange(t4)) ? this.getClientRectsForDOMRange(e3)[1] : void 0;
          }, f.prototype.locationIsCursorTarget = function(t4) {
            var e3, n3, i2;
            return i2 = this.findNodeAndOffsetFromLocation(t4), e3 = i2[0], n3 = i2[1], s2(e3);
          }, f.prototype.lock = function() {
            return this.lockCount++ === 0 ? (this.updateCurrentLocationRange(), this.lockedLocationRange = this.getLocationRange()) : void 0;
          }, f.prototype.unlock = function() {
            var t4;
            return --this.lockCount === 0 && (t4 = this.lockedLocationRange, this.lockedLocationRange = null, t4 != null) ? this.setLocationRange(t4) : void 0;
          }, f.prototype.clearSelection = function() {
            var t4;
            return (t4 = i()) != null ? t4.removeAllRanges() : void 0;
          }, f.prototype.selectionIsCollapsed = function() {
            var t4;
            return ((t4 = n2()) != null ? t4.collapsed : void 0) === true;
          }, f.prototype.selectionIsExpanded = function() {
            return !this.selectionIsCollapsed();
          }, f.prototype.createLocationRangeFromDOMRange = function(t4, e3) {
            var n3, i2;
            if (t4 != null && this.domRangeWithinElement(t4) && (i2 = this.findLocationFromContainerAndOffset(t4.startContainer, t4.startOffset, e3)))
              return t4.collapsed || (n3 = this.findLocationFromContainerAndOffset(t4.endContainer, t4.endOffset, e3)), a2([i2, n3]);
          }, f.proxyMethod("locationMapper.findLocationFromContainerAndOffset"), f.proxyMethod("locationMapper.findContainerAndOffsetFromLocation"), f.proxyMethod("locationMapper.findNodeAndOffsetFromLocation"), f.proxyMethod("pointMapper.createDOMRangeFromPoint"), f.proxyMethod("pointMapper.getClientRectsForDOMRange"), f.prototype.didMouseDown = function() {
            return this.pauseTemporarily();
          }, f.prototype.pauseTemporarily = function() {
            var e3, n3, i2, r3;
            return this.paused = true, n3 = function(e4) {
              return function() {
                var n4, o3, s3;
                for (e4.paused = false, clearTimeout(r3), o3 = 0, s3 = i2.length; s3 > o3; o3++)
                  n4 = i2[o3], n4.destroy();
                return t3(document, e4.element) ? e4.selectionDidChange() : void 0;
              };
            }(this), r3 = setTimeout(n3, 200), i2 = function() {
              var t4, i3, r4, s3;
              for (r4 = ["mousemove", "keydown"], s3 = [], t4 = 0, i3 = r4.length; i3 > t4; t4++)
                e3 = r4[t4], s3.push(o2(e3, {onElement: document, withCallback: n3}));
              return s3;
            }();
          }, f.prototype.selectionDidChange = function() {
            return this.paused || r2(this.element) ? void 0 : this.updateCurrentLocationRange();
          }, f.prototype.updateCurrentLocationRange = function(t4) {
            var e3;
            return (t4 != null ? t4 : t4 = this.createLocationRangeFromDOMRange(n2())) && !c2(t4, this.currentLocationRange) ? (this.currentLocationRange = t4, (e3 = this.delegate) != null && typeof e3.locationRangeDidChange == "function" ? e3.locationRangeDidChange(this.currentLocationRange.slice(0)) : void 0) : void 0;
          }, f.prototype.createDOMRangeFromLocationRange = function(t4) {
            var e3, n3, i2, o3;
            return i2 = this.findContainerAndOffsetFromLocation(t4[0]), n3 = u(t4) ? i2 : (o3 = this.findContainerAndOffsetFromLocation(t4[1])) != null ? o3 : i2, i2 != null && n3 != null ? (e3 = document.createRange(), e3.setStart.apply(e3, i2), e3.setEnd.apply(e3, n3), e3) : void 0;
          }, f.prototype.getLocationAtPoint = function(t4) {
            var e3, n3;
            return (e3 = this.createDOMRangeFromPoint(t4)) && (n3 = this.createLocationRangeFromDOMRange(e3)) != null ? n3[0] : void 0;
          }, f.prototype.domRangeWithinElement = function(e3) {
            return e3.collapsed ? t3(this.element, e3.startContainer) : t3(this.element, e3.startContainer) && t3(this.element, e3.endContainer);
          }, f;
        }(e2.BasicObject);
      }.call(this), function() {
        var t3, n2, i, o2, r2 = function(t4, e3) {
          function n3() {
            this.constructor = t4;
          }
          for (var i2 in e3)
            s2.call(e3, i2) && (t4[i2] = e3[i2]);
          return n3.prototype = e3.prototype, t4.prototype = new n3(), t4.__super__ = e3.prototype, t4;
        }, s2 = {}.hasOwnProperty, a2 = [].slice;
        i = e2.rangeIsCollapsed, o2 = e2.rangesAreEqual, n2 = e2.objectsAreEqual, t3 = e2.getBlockConfig, e2.EditorController = function(s3) {
          function u(t4) {
            var n3, i2;
            this.editorElement = t4.editorElement, n3 = t4.document, i2 = t4.html, this.selectionManager = new e2.SelectionManager(this.editorElement), this.selectionManager.delegate = this, this.composition = new e2.Composition(), this.composition.delegate = this, this.attachmentManager = new e2.AttachmentManager(this.composition.getAttachments()), this.attachmentManager.delegate = this, this.inputController = new e2["Level" + e2.config.input.getLevel() + "InputController"](this.editorElement), this.inputController.delegate = this, this.inputController.responder = this.composition, this.compositionController = new e2.CompositionController(this.editorElement, this.composition), this.compositionController.delegate = this, this.toolbarController = new e2.ToolbarController(this.editorElement.toolbarElement), this.toolbarController.delegate = this, this.editor = new e2.Editor(this.composition, this.selectionManager, this.editorElement), n3 != null ? this.editor.loadDocument(n3) : this.editor.loadHTML(i2);
          }
          var c2;
          return r2(u, s3), u.prototype.registerSelectionManager = function() {
            return e2.selectionChangeObserver.registerSelectionManager(this.selectionManager);
          }, u.prototype.unregisterSelectionManager = function() {
            return e2.selectionChangeObserver.unregisterSelectionManager(this.selectionManager);
          }, u.prototype.render = function() {
            return this.compositionController.render();
          }, u.prototype.reparse = function() {
            return this.composition.replaceHTML(this.editorElement.innerHTML);
          }, u.prototype.compositionDidChangeDocument = function() {
            return this.notifyEditorElement("document-change"), this.handlingInput ? void 0 : this.render();
          }, u.prototype.compositionDidChangeCurrentAttributes = function(t4) {
            return this.currentAttributes = t4, this.toolbarController.updateAttributes(this.currentAttributes), this.updateCurrentActions(), this.notifyEditorElement("attributes-change", {attributes: this.currentAttributes});
          }, u.prototype.compositionDidPerformInsertionAtRange = function(t4) {
            return this.pasting ? this.pastedRange = t4 : void 0;
          }, u.prototype.compositionShouldAcceptFile = function(t4) {
            return this.notifyEditorElement("file-accept", {file: t4});
          }, u.prototype.compositionDidAddAttachment = function(t4) {
            var e3;
            return e3 = this.attachmentManager.manageAttachment(t4), this.notifyEditorElement("attachment-add", {attachment: e3});
          }, u.prototype.compositionDidEditAttachment = function(t4) {
            var e3;
            return this.compositionController.rerenderViewForObject(t4), e3 = this.attachmentManager.manageAttachment(t4), this.notifyEditorElement("attachment-edit", {attachment: e3}), this.notifyEditorElement("change");
          }, u.prototype.compositionDidChangeAttachmentPreviewURL = function(t4) {
            return this.compositionController.invalidateViewForObject(t4), this.notifyEditorElement("change");
          }, u.prototype.compositionDidRemoveAttachment = function(t4) {
            var e3;
            return e3 = this.attachmentManager.unmanageAttachment(t4), this.notifyEditorElement("attachment-remove", {attachment: e3});
          }, u.prototype.compositionDidStartEditingAttachment = function(t4, e3) {
            return this.attachmentLocationRange = this.composition.document.getLocationRangeOfAttachment(t4), this.compositionController.installAttachmentEditorForAttachment(t4, e3), this.selectionManager.setLocationRange(this.attachmentLocationRange);
          }, u.prototype.compositionDidStopEditingAttachment = function() {
            return this.compositionController.uninstallAttachmentEditor(), this.attachmentLocationRange = null;
          }, u.prototype.compositionDidRequestChangingSelectionToLocationRange = function(t4) {
            return !this.loadingSnapshot || this.isFocused() ? (this.requestedLocationRange = t4, this.compositionRevisionWhenLocationRangeRequested = this.composition.revision, this.handlingInput ? void 0 : this.render()) : void 0;
          }, u.prototype.compositionWillLoadSnapshot = function() {
            return this.loadingSnapshot = true;
          }, u.prototype.compositionDidLoadSnapshot = function() {
            return this.compositionController.refreshViewCache(), this.render(), this.loadingSnapshot = false;
          }, u.prototype.getSelectionManager = function() {
            return this.selectionManager;
          }, u.proxyMethod("getSelectionManager().setLocationRange"), u.proxyMethod("getSelectionManager().getLocationRange"), u.prototype.attachmentManagerDidRequestRemovalOfAttachment = function(t4) {
            return this.removeAttachment(t4);
          }, u.prototype.compositionControllerWillSyncDocumentView = function() {
            return this.inputController.editorWillSyncDocumentView(), this.selectionManager.lock(), this.selectionManager.clearSelection();
          }, u.prototype.compositionControllerDidSyncDocumentView = function() {
            return this.inputController.editorDidSyncDocumentView(), this.selectionManager.unlock(), this.updateCurrentActions(), this.notifyEditorElement("sync");
          }, u.prototype.compositionControllerDidRender = function() {
            return this.requestedLocationRange != null && (this.compositionRevisionWhenLocationRangeRequested === this.composition.revision && this.selectionManager.setLocationRange(this.requestedLocationRange), this.requestedLocationRange = null, this.compositionRevisionWhenLocationRangeRequested = null), this.renderedCompositionRevision !== this.composition.revision && (this.runEditorFilters(), this.composition.updateCurrentAttributes(), this.notifyEditorElement("render")), this.renderedCompositionRevision = this.composition.revision;
          }, u.prototype.compositionControllerDidFocus = function() {
            return this.isFocusedInvisibly() && this.setLocationRange({index: 0, offset: 0}), this.toolbarController.hideDialog(), this.notifyEditorElement("focus");
          }, u.prototype.compositionControllerDidBlur = function() {
            return this.notifyEditorElement("blur");
          }, u.prototype.compositionControllerDidSelectAttachment = function(t4, e3) {
            return this.toolbarController.hideDialog(), this.composition.editAttachment(t4, e3);
          }, u.prototype.compositionControllerDidRequestDeselectingAttachment = function(t4) {
            var e3, n3;
            return e3 = (n3 = this.attachmentLocationRange) != null ? n3 : this.composition.document.getLocationRangeOfAttachment(t4), this.selectionManager.setLocationRange(e3[1]);
          }, u.prototype.compositionControllerWillUpdateAttachment = function(t4) {
            return this.editor.recordUndoEntry("Edit Attachment", {context: t4.id, consolidatable: true});
          }, u.prototype.compositionControllerDidRequestRemovalOfAttachment = function(t4) {
            return this.removeAttachment(t4);
          }, u.prototype.inputControllerWillHandleInput = function() {
            return this.handlingInput = true, this.requestedRender = false;
          }, u.prototype.inputControllerDidRequestRender = function() {
            return this.requestedRender = true;
          }, u.prototype.inputControllerDidHandleInput = function() {
            return this.handlingInput = false, this.requestedRender ? (this.requestedRender = false, this.render()) : void 0;
          }, u.prototype.inputControllerDidAllowUnhandledInput = function() {
            return this.notifyEditorElement("change");
          }, u.prototype.inputControllerDidRequestReparse = function() {
            return this.reparse();
          }, u.prototype.inputControllerWillPerformTyping = function() {
            return this.recordTypingUndoEntry();
          }, u.prototype.inputControllerWillPerformFormatting = function(t4) {
            return this.recordFormattingUndoEntry(t4);
          }, u.prototype.inputControllerWillCutText = function() {
            return this.editor.recordUndoEntry("Cut");
          }, u.prototype.inputControllerWillPaste = function(t4) {
            return this.editor.recordUndoEntry("Paste"), this.pasting = true, this.notifyEditorElement("before-paste", {paste: t4});
          }, u.prototype.inputControllerDidPaste = function(t4) {
            return t4.range = this.pastedRange, this.pastedRange = null, this.pasting = null, this.notifyEditorElement("paste", {paste: t4});
          }, u.prototype.inputControllerWillMoveText = function() {
            return this.editor.recordUndoEntry("Move");
          }, u.prototype.inputControllerWillAttachFiles = function() {
            return this.editor.recordUndoEntry("Drop Files");
          }, u.prototype.inputControllerWillPerformUndo = function() {
            return this.editor.undo();
          }, u.prototype.inputControllerWillPerformRedo = function() {
            return this.editor.redo();
          }, u.prototype.inputControllerDidReceiveKeyboardCommand = function(t4) {
            return this.toolbarController.applyKeyboardCommand(t4);
          }, u.prototype.inputControllerDidStartDrag = function() {
            return this.locationRangeBeforeDrag = this.selectionManager.getLocationRange();
          }, u.prototype.inputControllerDidReceiveDragOverPoint = function(t4) {
            return this.selectionManager.setLocationRangeFromPointRange(t4);
          }, u.prototype.inputControllerDidCancelDrag = function() {
            return this.selectionManager.setLocationRange(this.locationRangeBeforeDrag), this.locationRangeBeforeDrag = null;
          }, u.prototype.locationRangeDidChange = function(t4) {
            return this.composition.updateCurrentAttributes(), this.updateCurrentActions(), this.attachmentLocationRange && !o2(this.attachmentLocationRange, t4) && this.composition.stopEditingAttachment(), this.notifyEditorElement("selection-change");
          }, u.prototype.toolbarDidClickButton = function() {
            return this.getLocationRange() ? void 0 : this.setLocationRange({index: 0, offset: 0});
          }, u.prototype.toolbarDidInvokeAction = function(t4) {
            return this.invokeAction(t4);
          }, u.prototype.toolbarDidToggleAttribute = function(t4) {
            return this.recordFormattingUndoEntry(t4), this.composition.toggleCurrentAttribute(t4), this.render(), this.selectionFrozen ? void 0 : this.editorElement.focus();
          }, u.prototype.toolbarDidUpdateAttribute = function(t4, e3) {
            return this.recordFormattingUndoEntry(t4), this.composition.setCurrentAttribute(t4, e3), this.render(), this.selectionFrozen ? void 0 : this.editorElement.focus();
          }, u.prototype.toolbarDidRemoveAttribute = function(t4) {
            return this.recordFormattingUndoEntry(t4), this.composition.removeCurrentAttribute(t4), this.render(), this.selectionFrozen ? void 0 : this.editorElement.focus();
          }, u.prototype.toolbarWillShowDialog = function() {
            return this.composition.expandSelectionForEditing(), this.freezeSelection();
          }, u.prototype.toolbarDidShowDialog = function(t4) {
            return this.notifyEditorElement("toolbar-dialog-show", {dialogName: t4});
          }, u.prototype.toolbarDidHideDialog = function(t4) {
            return this.thawSelection(), this.editorElement.focus(), this.notifyEditorElement("toolbar-dialog-hide", {dialogName: t4});
          }, u.prototype.freezeSelection = function() {
            return this.selectionFrozen ? void 0 : (this.selectionManager.lock(), this.composition.freezeSelection(), this.selectionFrozen = true, this.render());
          }, u.prototype.thawSelection = function() {
            return this.selectionFrozen ? (this.composition.thawSelection(), this.selectionManager.unlock(), this.selectionFrozen = false, this.render()) : void 0;
          }, u.prototype.actions = {undo: {test: function() {
            return this.editor.canUndo();
          }, perform: function() {
            return this.editor.undo();
          }}, redo: {test: function() {
            return this.editor.canRedo();
          }, perform: function() {
            return this.editor.redo();
          }}, link: {test: function() {
            return this.editor.canActivateAttribute("href");
          }}, increaseNestingLevel: {test: function() {
            return this.editor.canIncreaseNestingLevel();
          }, perform: function() {
            return this.editor.increaseNestingLevel() && this.render();
          }}, decreaseNestingLevel: {test: function() {
            return this.editor.canDecreaseNestingLevel();
          }, perform: function() {
            return this.editor.decreaseNestingLevel() && this.render();
          }}, attachFiles: {test: function() {
            return true;
          }, perform: function() {
            return e2.config.input.pickFiles(this.editor.insertFiles);
          }}}, u.prototype.canInvokeAction = function(t4) {
            var e3, n3;
            return this.actionIsExternal(t4) ? true : !!((e3 = this.actions[t4]) != null && (n3 = e3.test) != null ? n3.call(this) : void 0);
          }, u.prototype.invokeAction = function(t4) {
            var e3, n3;
            return this.actionIsExternal(t4) ? this.notifyEditorElement("action-invoke", {actionName: t4}) : (e3 = this.actions[t4]) != null && (n3 = e3.perform) != null ? n3.call(this) : void 0;
          }, u.prototype.actionIsExternal = function(t4) {
            return /^x-./.test(t4);
          }, u.prototype.getCurrentActions = function() {
            var t4, e3;
            e3 = {};
            for (t4 in this.actions)
              e3[t4] = this.canInvokeAction(t4);
            return e3;
          }, u.prototype.updateCurrentActions = function() {
            var t4;
            return t4 = this.getCurrentActions(), n2(t4, this.currentActions) ? void 0 : (this.currentActions = t4, this.toolbarController.updateActions(this.currentActions), this.notifyEditorElement("actions-change", {actions: this.currentActions}));
          }, u.prototype.runEditorFilters = function() {
            var t4, e3, n3, i2, o3, r3, s4, a3;
            for (a3 = this.composition.getSnapshot(), o3 = this.editor.filters, n3 = 0, i2 = o3.length; i2 > n3; n3++)
              e3 = o3[n3], t4 = a3.document, s4 = a3.selectedRange, a3 = (r3 = e3.call(this.editor, a3)) != null ? r3 : {}, a3.document == null && (a3.document = t4), a3.selectedRange == null && (a3.selectedRange = s4);
            return c2(a3, this.composition.getSnapshot()) ? void 0 : this.composition.loadSnapshot(a3);
          }, c2 = function(t4, e3) {
            return o2(t4.selectedRange, e3.selectedRange) && t4.document.isEqualTo(e3.document);
          }, u.prototype.updateInputElement = function() {
            var t4, n3;
            return t4 = this.compositionController.getSerializableElement(), n3 = e2.serializeToContentType(t4, "text/html"), this.editorElement.setInputElementValue(n3);
          }, u.prototype.notifyEditorElement = function(t4, e3) {
            switch (t4) {
              case "document-change":
                this.documentChangedSinceLastRender = true;
                break;
              case "render":
                this.documentChangedSinceLastRender && (this.documentChangedSinceLastRender = false, this.notifyEditorElement("change"));
                break;
              case "change":
              case "attachment-add":
              case "attachment-edit":
              case "attachment-remove":
                this.updateInputElement();
            }
            return this.editorElement.notify(t4, e3);
          }, u.prototype.removeAttachment = function(t4) {
            return this.editor.recordUndoEntry("Delete Attachment"), this.composition.removeAttachment(t4), this.render();
          }, u.prototype.recordFormattingUndoEntry = function(e3) {
            var n3, o3;
            return n3 = t3(e3), o3 = this.selectionManager.getLocationRange(), n3 || !i(o3) ? this.editor.recordUndoEntry("Formatting", {context: this.getUndoContext(), consolidatable: true}) : void 0;
          }, u.prototype.recordTypingUndoEntry = function() {
            return this.editor.recordUndoEntry("Typing", {context: this.getUndoContext(this.currentAttributes), consolidatable: true});
          }, u.prototype.getUndoContext = function() {
            var t4;
            return t4 = 1 <= arguments.length ? a2.call(arguments, 0) : [], [this.getLocationContext(), this.getTimeContext()].concat(a2.call(t4));
          }, u.prototype.getLocationContext = function() {
            var t4;
            return t4 = this.selectionManager.getLocationRange(), i(t4) ? t4[0].index : t4;
          }, u.prototype.getTimeContext = function() {
            return e2.config.undoInterval > 0 ? Math.floor(new Date().getTime() / e2.config.undoInterval) : 0;
          }, u.prototype.isFocused = function() {
            var t4;
            return this.editorElement === ((t4 = this.editorElement.ownerDocument) != null ? t4.activeElement : void 0);
          }, u.prototype.isFocusedInvisibly = function() {
            return this.isFocused() && !this.getLocationRange();
          }, u;
        }(e2.Controller);
      }.call(this), function() {
        var t3, n2, i, o2, r2, s2, a2, u = [].indexOf || function(t4) {
          for (var e3 = 0, n3 = this.length; n3 > e3; e3++)
            if (e3 in this && this[e3] === t4)
              return e3;
          return -1;
        };
        n2 = e2.browser, s2 = e2.makeElement, a2 = e2.triggerEvent, o2 = e2.handleEvent, r2 = e2.handleEventOnce, i = e2.findClosestElementFromNode, t3 = e2.AttachmentView.attachmentSelector, e2.registerElement("trix-editor", function() {
          var c2, l, h, p2, d, f, g, m, v;
          return g = 0, l = function(t4) {
            return !document.querySelector(":focus") && t4.hasAttribute("autofocus") && document.querySelector("[autofocus]") === t4 ? t4.focus() : void 0;
          }, m = function(t4) {
            return t4.hasAttribute("contenteditable") ? void 0 : (t4.setAttribute("contenteditable", ""), r2("focus", {onElement: t4, withCallback: function() {
              return h(t4);
            }}));
          }, h = function(t4) {
            return d(t4), v(t4);
          }, d = function(t4) {
            return (typeof document.queryCommandSupported == "function" ? document.queryCommandSupported("enableObjectResizing") : void 0) ? (document.execCommand("enableObjectResizing", false, false), o2("mscontrolselect", {onElement: t4, preventDefault: true})) : void 0;
          }, v = function() {
            var t4;
            return (typeof document.queryCommandSupported == "function" ? document.queryCommandSupported("DefaultParagraphSeparator") : void 0) && (t4 = e2.config.blockAttributes["default"].tagName, t4 === "div" || t4 === "p") ? document.execCommand("DefaultParagraphSeparator", false, t4) : void 0;
          }, c2 = function(t4) {
            return t4.hasAttribute("role") ? void 0 : t4.setAttribute("role", "textbox");
          }, f = function(t4) {
            var e3;
            if (!t4.hasAttribute("aria-label") && !t4.hasAttribute("aria-labelledby"))
              return (e3 = function() {
                var e4, n3, i2;
                return i2 = function() {
                  var n4, i3, o3, r3;
                  for (o3 = t4.labels, r3 = [], n4 = 0, i3 = o3.length; i3 > n4; n4++)
                    e4 = o3[n4], e4.contains(t4) || r3.push(e4.textContent);
                  return r3;
                }(), (n3 = i2.join(" ")) ? t4.setAttribute("aria-label", n3) : t4.removeAttribute("aria-label");
              })(), o2("focus", {onElement: t4, withCallback: e3});
          }, p2 = function() {
            return n2.forcesObjectResizing ? {display: "inline", width: "auto"} : {display: "inline-block", width: "1px"};
          }(), {defaultCSS: "%t {\n  display: block;\n}\n\n%t:empty:not(:focus)::before {\n  content: attr(placeholder);\n  color: graytext;\n  cursor: text;\n  pointer-events: none;\n}\n\n%t a[contenteditable=false] {\n  cursor: text;\n}\n\n%t img {\n  max-width: 100%;\n  height: auto;\n}\n\n%t " + t3 + " figcaption textarea {\n  resize: none;\n}\n\n%t " + t3 + " figcaption textarea.trix-autoresize-clone {\n  position: absolute;\n  left: -9999px;\n  max-height: 0px;\n}\n\n%t " + t3 + " figcaption[data-trix-placeholder]:empty::before {\n  content: attr(data-trix-placeholder);\n  color: graytext;\n}\n\n%t [data-trix-cursor-target] {\n  display: " + p2.display + " !important;\n  width: " + p2.width + " !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n}\n\n%t [data-trix-cursor-target=left] {\n  vertical-align: top !important;\n  margin-left: -1px !important;\n}\n\n%t [data-trix-cursor-target=right] {\n  vertical-align: bottom !important;\n  margin-right: -1px !important;\n}", trixId: {get: function() {
            return this.hasAttribute("trix-id") ? this.getAttribute("trix-id") : (this.setAttribute("trix-id", ++g), this.trixId);
          }}, labels: {get: function() {
            var t4, e3, n3;
            return e3 = [], this.id && this.ownerDocument && e3.push.apply(e3, this.ownerDocument.querySelectorAll("label[for='" + this.id + "']")), (t4 = i(this, {matchingSelector: "label"})) && ((n3 = t4.control) === this || n3 === null) && e3.push(t4), e3;
          }}, toolbarElement: {get: function() {
            var t4, e3, n3;
            return this.hasAttribute("toolbar") ? (e3 = this.ownerDocument) != null ? e3.getElementById(this.getAttribute("toolbar")) : void 0 : this.parentNode ? (n3 = "trix-toolbar-" + this.trixId, this.setAttribute("toolbar", n3), t4 = s2("trix-toolbar", {id: n3}), this.parentNode.insertBefore(t4, this), t4) : void 0;
          }}, inputElement: {get: function() {
            var t4, e3, n3;
            return this.hasAttribute("input") ? (n3 = this.ownerDocument) != null ? n3.getElementById(this.getAttribute("input")) : void 0 : this.parentNode ? (e3 = "trix-input-" + this.trixId, this.setAttribute("input", e3), t4 = s2("input", {type: "hidden", id: e3}), this.parentNode.insertBefore(t4, this.nextElementSibling), t4) : void 0;
          }}, editor: {get: function() {
            var t4;
            return (t4 = this.editorController) != null ? t4.editor : void 0;
          }}, name: {get: function() {
            var t4;
            return (t4 = this.inputElement) != null ? t4.name : void 0;
          }}, value: {get: function() {
            var t4;
            return (t4 = this.inputElement) != null ? t4.value : void 0;
          }, set: function(t4) {
            var e3;
            return this.defaultValue = t4, (e3 = this.editor) != null ? e3.loadHTML(this.defaultValue) : void 0;
          }}, notify: function(t4, e3) {
            return this.editorController ? a2("trix-" + t4, {onElement: this, attributes: e3}) : void 0;
          }, setInputElementValue: function(t4) {
            var e3;
            return (e3 = this.inputElement) != null ? e3.value = t4 : void 0;
          }, initialize: function() {
            return this.hasAttribute("data-trix-internal") ? void 0 : (m(this), c2(this), f(this));
          }, connect: function() {
            return this.hasAttribute("data-trix-internal") ? void 0 : (this.editorController || (a2("trix-before-initialize", {onElement: this}), this.editorController = new e2.EditorController({editorElement: this, html: this.defaultValue = this.value}), requestAnimationFrame(function(t4) {
              return function() {
                return a2("trix-initialize", {onElement: t4});
              };
            }(this))), this.editorController.registerSelectionManager(), this.registerResetListener(), this.registerClickListener(), l(this));
          }, disconnect: function() {
            var t4;
            return (t4 = this.editorController) != null && t4.unregisterSelectionManager(), this.unregisterResetListener(), this.unregisterClickListener();
          }, registerResetListener: function() {
            return this.resetListener = this.resetBubbled.bind(this), window.addEventListener("reset", this.resetListener, false);
          }, unregisterResetListener: function() {
            return window.removeEventListener("reset", this.resetListener, false);
          }, registerClickListener: function() {
            return this.clickListener = this.clickBubbled.bind(this), window.addEventListener("click", this.clickListener, false);
          }, unregisterClickListener: function() {
            return window.removeEventListener("click", this.clickListener, false);
          }, resetBubbled: function(t4) {
            var e3;
            if (!t4.defaultPrevented && t4.target === ((e3 = this.inputElement) != null ? e3.form : void 0))
              return this.reset();
          }, clickBubbled: function(t4) {
            var e3;
            if (!(t4.defaultPrevented || this.contains(t4.target) || !(e3 = i(t4.target, {matchingSelector: "label"})) || u.call(this.labels, e3) < 0))
              return this.focus();
          }, reset: function() {
            return this.value = this.defaultValue;
          }};
        }());
      }.call(this), function() {
      }.call(this);
    }).call(this), typeof module == "object" && module.exports ? module.exports = e2 : typeof define == "function" && define.amd && define(e2);
  }.call(exports);
});

// node_modules/dayjs/esm/constant.js
var SECONDS_A_MINUTE = 60;
var SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
var SECONDS_A_DAY = SECONDS_A_HOUR * 24;
var SECONDS_A_WEEK = SECONDS_A_DAY * 7;
var MILLISECONDS_A_SECOND = 1e3;
var MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND;
var MS = "millisecond";
var S = "second";
var MIN = "minute";
var H = "hour";
var D = "day";
var W = "week";
var M = "month";
var Q = "quarter";
var Y = "year";
var DATE = "date";
var FORMAT_DEFAULT = "YYYY-MM-DDTHH:mm:ssZ";
var INVALID_DATE_STRING = "Invalid Date";
var REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
var REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;

// node_modules/dayjs/esm/locale/en.js
var en_default = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};

// node_modules/dayjs/esm/utils.js
var padStart = function padStart2(string, length, pad) {
  var s2 = String(string);
  if (!s2 || s2.length >= length)
    return string;
  return "" + Array(length + 1 - s2.length).join(pad) + string;
};
var padZoneStr = function padZoneStr2(instance) {
  var negMinutes = -instance.utcOffset();
  var minutes = Math.abs(negMinutes);
  var hourOffset = Math.floor(minutes / 60);
  var minuteOffset = minutes % 60;
  return "" + (negMinutes <= 0 ? "+" : "-") + padStart(hourOffset, 2, "0") + ":" + padStart(minuteOffset, 2, "0");
};
var monthDiff = function monthDiff2(a2, b) {
  if (a2.date() < b.date())
    return -monthDiff2(b, a2);
  var wholeMonthDiff = (b.year() - a2.year()) * 12 + (b.month() - a2.month());
  var anchor = a2.clone().add(wholeMonthDiff, M);
  var c2 = b - anchor < 0;
  var anchor2 = a2.clone().add(wholeMonthDiff + (c2 ? -1 : 1), M);
  return +(-(wholeMonthDiff + (b - anchor) / (c2 ? anchor - anchor2 : anchor2 - anchor)) || 0);
};
var absFloor = function absFloor2(n2) {
  return n2 < 0 ? Math.ceil(n2) || 0 : Math.floor(n2);
};
var prettyUnit = function prettyUnit2(u) {
  var special = {
    M,
    y: Y,
    w: W,
    d: D,
    D: DATE,
    h: H,
    m: MIN,
    s: S,
    ms: MS,
    Q
  };
  return special[u] || String(u || "").toLowerCase().replace(/s$/, "");
};
var isUndefined = function isUndefined2(s2) {
  return s2 === void 0;
};
var utils_default = {
  s: padStart,
  z: padZoneStr,
  m: monthDiff,
  a: absFloor,
  p: prettyUnit,
  u: isUndefined
};

// node_modules/dayjs/esm/index.js
var L = "en";
var Ls = {};
Ls[L] = en_default;
var isDayjs = function isDayjs2(d) {
  return d instanceof Dayjs;
};
var parseLocale = function parseLocale2(preset, object, isLocal) {
  var l;
  if (!preset)
    return L;
  if (typeof preset === "string") {
    if (Ls[preset]) {
      l = preset;
    }
    if (object) {
      Ls[preset] = object;
      l = preset;
    }
  } else {
    var name2 = preset.name;
    Ls[name2] = preset;
    l = name2;
  }
  if (!isLocal && l)
    L = l;
  return l || !isLocal && L;
};
var dayjs = function dayjs2(date, c2) {
  if (isDayjs(date)) {
    return date.clone();
  }
  var cfg = typeof c2 === "object" ? c2 : {};
  cfg.date = date;
  cfg.args = arguments;
  return new Dayjs(cfg);
};
var wrapper = function wrapper2(date, instance) {
  return dayjs(date, {
    locale: instance.$L,
    utc: instance.$u,
    x: instance.$x,
    $offset: instance.$offset
  });
};
var Utils = utils_default;
Utils.l = parseLocale;
Utils.i = isDayjs;
Utils.w = wrapper;
var parseDate = function parseDate2(cfg) {
  var date = cfg.date, utc = cfg.utc;
  if (date === null)
    return new Date(NaN);
  if (Utils.u(date))
    return new Date();
  if (date instanceof Date)
    return new Date(date);
  if (typeof date === "string" && !/Z$/i.test(date)) {
    var d = date.match(REGEX_PARSE);
    if (d) {
      var m = d[2] - 1 || 0;
      var ms = (d[7] || "0").substring(0, 3);
      if (utc) {
        return new Date(Date.UTC(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms));
      }
      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
    }
  }
  return new Date(date);
};
var Dayjs = /* @__PURE__ */ function() {
  function Dayjs2(cfg) {
    this.$L = parseLocale(cfg.locale, null, true);
    this.parse(cfg);
  }
  var _proto = Dayjs2.prototype;
  _proto.parse = function parse5(cfg) {
    this.$d = parseDate(cfg);
    this.$x = cfg.x || {};
    this.init();
  };
  _proto.init = function init() {
    var $d = this.$d;
    this.$y = $d.getFullYear();
    this.$M = $d.getMonth();
    this.$D = $d.getDate();
    this.$W = $d.getDay();
    this.$H = $d.getHours();
    this.$m = $d.getMinutes();
    this.$s = $d.getSeconds();
    this.$ms = $d.getMilliseconds();
  };
  _proto.$utils = function $utils() {
    return Utils;
  };
  _proto.isValid = function isValid() {
    return !(this.$d.toString() === INVALID_DATE_STRING);
  };
  _proto.isSame = function isSame(that, units) {
    var other = dayjs(that);
    return this.startOf(units) <= other && other <= this.endOf(units);
  };
  _proto.isAfter = function isAfter(that, units) {
    return dayjs(that) < this.startOf(units);
  };
  _proto.isBefore = function isBefore(that, units) {
    return this.endOf(units) < dayjs(that);
  };
  _proto.$g = function $g(input, get, set2) {
    if (Utils.u(input))
      return this[get];
    return this.set(set2, input);
  };
  _proto.unix = function unix() {
    return Math.floor(this.valueOf() / 1e3);
  };
  _proto.valueOf = function valueOf() {
    return this.$d.getTime();
  };
  _proto.startOf = function startOf(units, _startOf) {
    var _this = this;
    var isStartOf = !Utils.u(_startOf) ? _startOf : true;
    var unit = Utils.p(units);
    var instanceFactory = function instanceFactory2(d, m) {
      var ins = Utils.w(_this.$u ? Date.UTC(_this.$y, m, d) : new Date(_this.$y, m, d), _this);
      return isStartOf ? ins : ins.endOf(D);
    };
    var instanceFactorySet = function instanceFactorySet2(method, slice) {
      var argumentStart = [0, 0, 0, 0];
      var argumentEnd = [23, 59, 59, 999];
      return Utils.w(_this.toDate()[method].apply(_this.toDate("s"), (isStartOf ? argumentStart : argumentEnd).slice(slice)), _this);
    };
    var $W = this.$W, $M = this.$M, $D = this.$D;
    var utcPad = "set" + (this.$u ? "UTC" : "");
    switch (unit) {
      case Y:
        return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);
      case M:
        return isStartOf ? instanceFactory(1, $M) : instanceFactory(0, $M + 1);
      case W: {
        var weekStart = this.$locale().weekStart || 0;
        var gap = ($W < weekStart ? $W + 7 : $W) - weekStart;
        return instanceFactory(isStartOf ? $D - gap : $D + (6 - gap), $M);
      }
      case D:
      case DATE:
        return instanceFactorySet(utcPad + "Hours", 0);
      case H:
        return instanceFactorySet(utcPad + "Minutes", 1);
      case MIN:
        return instanceFactorySet(utcPad + "Seconds", 2);
      case S:
        return instanceFactorySet(utcPad + "Milliseconds", 3);
      default:
        return this.clone();
    }
  };
  _proto.endOf = function endOf(arg) {
    return this.startOf(arg, false);
  };
  _proto.$set = function $set(units, _int) {
    var _C$D$C$DATE$C$M$C$Y$C;
    var unit = Utils.p(units);
    var utcPad = "set" + (this.$u ? "UTC" : "");
    var name2 = (_C$D$C$DATE$C$M$C$Y$C = {}, _C$D$C$DATE$C$M$C$Y$C[D] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[DATE] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[M] = utcPad + "Month", _C$D$C$DATE$C$M$C$Y$C[Y] = utcPad + "FullYear", _C$D$C$DATE$C$M$C$Y$C[H] = utcPad + "Hours", _C$D$C$DATE$C$M$C$Y$C[MIN] = utcPad + "Minutes", _C$D$C$DATE$C$M$C$Y$C[S] = utcPad + "Seconds", _C$D$C$DATE$C$M$C$Y$C[MS] = utcPad + "Milliseconds", _C$D$C$DATE$C$M$C$Y$C)[unit];
    var arg = unit === D ? this.$D + (_int - this.$W) : _int;
    if (unit === M || unit === Y) {
      var date = this.clone().set(DATE, 1);
      date.$d[name2](arg);
      date.init();
      this.$d = date.set(DATE, Math.min(this.$D, date.daysInMonth())).$d;
    } else if (name2)
      this.$d[name2](arg);
    this.init();
    return this;
  };
  _proto.set = function set2(string, _int2) {
    return this.clone().$set(string, _int2);
  };
  _proto.get = function get(unit) {
    return this[Utils.p(unit)]();
  };
  _proto.add = function add(number, units) {
    var _this2 = this, _C$MIN$C$H$C$S$unit;
    number = Number(number);
    var unit = Utils.p(units);
    var instanceFactorySet = function instanceFactorySet2(n2) {
      var d = dayjs(_this2);
      return Utils.w(d.date(d.date() + Math.round(n2 * number)), _this2);
    };
    if (unit === M) {
      return this.set(M, this.$M + number);
    }
    if (unit === Y) {
      return this.set(Y, this.$y + number);
    }
    if (unit === D) {
      return instanceFactorySet(1);
    }
    if (unit === W) {
      return instanceFactorySet(7);
    }
    var step = (_C$MIN$C$H$C$S$unit = {}, _C$MIN$C$H$C$S$unit[MIN] = MILLISECONDS_A_MINUTE, _C$MIN$C$H$C$S$unit[H] = MILLISECONDS_A_HOUR, _C$MIN$C$H$C$S$unit[S] = MILLISECONDS_A_SECOND, _C$MIN$C$H$C$S$unit)[unit] || 1;
    var nextTimeStamp = this.$d.getTime() + number * step;
    return Utils.w(nextTimeStamp, this);
  };
  _proto.subtract = function subtract(number, string) {
    return this.add(number * -1, string);
  };
  _proto.format = function format3(formatStr) {
    var _this3 = this;
    var locale = this.$locale();
    if (!this.isValid())
      return locale.invalidDate || INVALID_DATE_STRING;
    var str = formatStr || FORMAT_DEFAULT;
    var zoneStr = Utils.z(this);
    var $H = this.$H, $m = this.$m, $M = this.$M;
    var weekdays = locale.weekdays, months = locale.months, meridiem = locale.meridiem;
    var getShort = function getShort2(arr, index, full, length) {
      return arr && (arr[index] || arr(_this3, str)) || full[index].substr(0, length);
    };
    var get$H = function get$H2(num) {
      return Utils.s($H % 12 || 12, num, "0");
    };
    var meridiemFunc = meridiem || function(hour, minute, isLowercase) {
      var m = hour < 12 ? "AM" : "PM";
      return isLowercase ? m.toLowerCase() : m;
    };
    var matches = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: $M + 1,
      MM: Utils.s($M + 1, 2, "0"),
      MMM: getShort(locale.monthsShort, $M, months, 3),
      MMMM: getShort(months, $M),
      D: this.$D,
      DD: Utils.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: getShort(locale.weekdaysMin, this.$W, weekdays, 2),
      ddd: getShort(locale.weekdaysShort, this.$W, weekdays, 3),
      dddd: weekdays[this.$W],
      H: String($H),
      HH: Utils.s($H, 2, "0"),
      h: get$H(1),
      hh: get$H(2),
      a: meridiemFunc($H, $m, true),
      A: meridiemFunc($H, $m, false),
      m: String($m),
      mm: Utils.s($m, 2, "0"),
      s: String(this.$s),
      ss: Utils.s(this.$s, 2, "0"),
      SSS: Utils.s(this.$ms, 3, "0"),
      Z: zoneStr
    };
    return str.replace(REGEX_FORMAT, function(match, $1) {
      return $1 || matches[match] || zoneStr.replace(":", "");
    });
  };
  _proto.utcOffset = function utcOffset() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  };
  _proto.diff = function diff(input, units, _float) {
    var _C$Y$C$M$C$Q$C$W$C$D$;
    var unit = Utils.p(units);
    var that = dayjs(input);
    var zoneDelta = (that.utcOffset() - this.utcOffset()) * MILLISECONDS_A_MINUTE;
    var diff2 = this - that;
    var result = Utils.m(this, that);
    result = (_C$Y$C$M$C$Q$C$W$C$D$ = {}, _C$Y$C$M$C$Q$C$W$C$D$[Y] = result / 12, _C$Y$C$M$C$Q$C$W$C$D$[M] = result, _C$Y$C$M$C$Q$C$W$C$D$[Q] = result / 3, _C$Y$C$M$C$Q$C$W$C$D$[W] = (diff2 - zoneDelta) / MILLISECONDS_A_WEEK, _C$Y$C$M$C$Q$C$W$C$D$[D] = (diff2 - zoneDelta) / MILLISECONDS_A_DAY, _C$Y$C$M$C$Q$C$W$C$D$[H] = diff2 / MILLISECONDS_A_HOUR, _C$Y$C$M$C$Q$C$W$C$D$[MIN] = diff2 / MILLISECONDS_A_MINUTE, _C$Y$C$M$C$Q$C$W$C$D$[S] = diff2 / MILLISECONDS_A_SECOND, _C$Y$C$M$C$Q$C$W$C$D$)[unit] || diff2;
    return _float ? result : Utils.a(result);
  };
  _proto.daysInMonth = function daysInMonth() {
    return this.endOf(M).$D;
  };
  _proto.$locale = function $locale() {
    return Ls[this.$L];
  };
  _proto.locale = function locale(preset, object) {
    if (!preset)
      return this.$L;
    var that = this.clone();
    var nextLocaleName = parseLocale(preset, object, true);
    if (nextLocaleName)
      that.$L = nextLocaleName;
    return that;
  };
  _proto.clone = function clone() {
    return Utils.w(this.$d, this);
  };
  _proto.toDate = function toDate() {
    return new Date(this.valueOf());
  };
  _proto.toJSON = function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  };
  _proto.toISOString = function toISOString() {
    return this.$d.toISOString();
  };
  _proto.toString = function toString2() {
    return this.$d.toUTCString();
  };
  return Dayjs2;
}();
var proto = Dayjs.prototype;
dayjs.prototype = proto;
[["$ms", MS], ["$s", S], ["$m", MIN], ["$H", H], ["$W", D], ["$M", M], ["$y", Y], ["$D", DATE]].forEach(function(g) {
  proto[g[1]] = function(input) {
    return this.$g(input, g[0], g[1]);
  };
});
dayjs.extend = function(plugin8, option2) {
  if (!plugin8.$i) {
    plugin8(option2, Dayjs, dayjs);
    plugin8.$i = true;
  }
  return dayjs;
};
dayjs.locale = parseLocale;
dayjs.isDayjs = isDayjs;
dayjs.unix = function(timestamp) {
  return dayjs(timestamp * 1e3);
};
dayjs.en = Ls[L];
dayjs.Ls = Ls;
dayjs.p = {};
var esm_default = dayjs;

// packages/forms/resources/js/components/date-time-picker.js
var import_customParseFormat = __toModule(require_customParseFormat());
var import_localeData = __toModule(require_localeData());
esm_default.extend(import_customParseFormat.default);
esm_default.extend(import_localeData.default);
window.dayjs = esm_default;
var date_time_picker_default = (Alpine) => {
  Alpine.data("dateTimePickerFormComponent", ({
    displayFormat,
    firstDayOfWeek,
    format: format3,
    isAutofocused,
    locale,
    maxDate,
    minDate,
    state: state2
  }) => {
    esm_default.locale(locale);
    return {
      daysInFocusedMonth: [],
      displayText: "",
      emptyDaysInFocusedMonth: [],
      focusedDate: null,
      focusedMonth: null,
      focusedYear: null,
      hour: null,
      maxDate,
      minDate,
      minute: null,
      open: false,
      second: null,
      state: state2,
      init: function() {
        this.maxDate = esm_default(this.maxDate);
        if (!this.maxDate.isValid()) {
          this.maxDate = null;
        }
        this.minDate = esm_default(this.minDate);
        if (!this.minDate.isValid()) {
          this.minDate = null;
        }
        let date = this.getSelectedDate() ?? esm_default().set("hour", 0).set("minute", 0).set("second", 0);
        if (this.maxDate !== null && date.isAfter(this.maxDate)) {
          date = null;
        }
        if (this.minDate !== null && date.isBefore(this.minDate)) {
          date = null;
        }
        this.hour = date.hour();
        this.minute = date.minute();
        this.second = date.second();
        this.setDisplayText();
        if (isAutofocused) {
          this.openPicker();
        }
        this.$watch("focusedMonth", () => {
          this.focusedMonth = +this.focusedMonth;
          if (this.focusedDate.month() === this.focusedMonth) {
            return;
          }
          this.focusedDate = this.focusedDate.set("month", this.focusedMonth);
        });
        this.$watch("focusedYear", () => {
          this.focusedYear = Number.isInteger(+this.focusedYear) ? +this.focusedYear : esm_default().year();
          if (this.focusedDate.year() === this.focusedYear) {
            return;
          }
          this.focusedDate = this.focusedDate.set("year", this.focusedYear);
        });
        this.$watch("focusedDate", () => {
          this.focusedMonth = this.focusedDate.month();
          this.focusedYear = this.focusedDate.year();
          this.setupDaysGrid();
          this.$nextTick(() => {
            this.evaluatePosition();
          });
        });
        this.$watch("hour", () => {
          let hour = +this.hour;
          if (!Number.isInteger(hour)) {
            this.hour = esm_default().hour();
          } else if (hour > 23) {
            this.hour = 0;
          } else if (hour < 0) {
            this.hour = 23;
          } else {
            this.hour = hour;
          }
          let date2 = this.getSelectedDate() ?? this.focusedDate;
          this.setState(date2.set("hour", this.hour));
        });
        this.$watch("minute", () => {
          let minute = +this.minute;
          if (!Number.isInteger(minute)) {
            this.minute = esm_default().minute();
          } else if (minute > 59) {
            this.minute = 0;
          } else if (minute < 0) {
            this.minute = 59;
          } else {
            this.minute = minute;
          }
          let date2 = this.getSelectedDate() ?? this.focusedDate;
          this.setState(date2.set("minute", this.minute));
        });
        this.$watch("second", () => {
          let second = +this.second;
          if (!Number.isInteger(second)) {
            this.second = esm_default().second();
          } else if (second > 59) {
            this.second = 0;
          } else if (second < 0) {
            this.second = 59;
          } else {
            this.second = second;
          }
          let date2 = this.getSelectedDate() ?? this.focusedDate;
          this.setState(date2.set("second", this.second));
        });
        this.$watch("state", () => {
          let date2 = this.getSelectedDate();
          if (this.maxDate !== null && date2.isAfter(this.maxDate)) {
            date2 = null;
          }
          if (this.minDate !== null && date2.isBefore(this.minDate)) {
            date2 = null;
          }
          this.hour = date2.hour();
          this.minute = date2.minute();
          this.second = date2.second();
          this.setDisplayText();
        });
      },
      clearState: function() {
        this.setState(null);
        this.closePicker();
      },
      closePicker: function() {
        this.open = false;
      },
      dateIsDisabled: function(date) {
        if (this.maxDate && date.isAfter(this.maxDate)) {
          return true;
        }
        if (this.minDate && date.isBefore(this.minDate)) {
          return true;
        }
        return false;
      },
      dayIsDisabled: function(day) {
        return this.dateIsDisabled(this.focusedDate.date(day));
      },
      dayIsSelected: function(day) {
        let selectedDate = this.getSelectedDate();
        if (selectedDate === null) {
          return false;
        }
        return selectedDate.date() === day && selectedDate.month() === this.focusedDate.month() && selectedDate.year() === this.focusedDate.year();
      },
      dayIsToday: function(day) {
        let date = esm_default();
        return date.date() === day && date.month() === this.focusedDate.month() && date.year() === this.focusedDate.year();
      },
      evaluatePosition: function() {
        let availableHeight = window.innerHeight - this.$refs.button.offsetHeight;
        let element = this.$refs.button;
        while (element) {
          availableHeight -= element.offsetTop;
          element = element.offsetParent;
        }
        if (this.$refs.picker.offsetHeight <= availableHeight) {
          this.$refs.picker.style.bottom = "auto";
          return;
        }
        this.$refs.picker.style.bottom = `${this.$refs.button.offsetHeight}px`;
      },
      focusPreviousDay: function() {
        this.focusedDate = this.focusedDate.subtract(1, "day");
      },
      focusPreviousWeek: function() {
        this.focusedDate = this.focusedDate.subtract(1, "week");
      },
      focusNextDay: function() {
        this.focusedDate = this.focusedDate.add(1, "day");
      },
      focusNextWeek: function() {
        this.focusedDate = this.focusedDate.add(1, "week");
      },
      getDayLabels: function() {
        const labels = esm_default.weekdaysShort();
        if (firstDayOfWeek === 0) {
          return labels;
        }
        return [
          ...labels.slice(firstDayOfWeek),
          ...labels.slice(0, firstDayOfWeek)
        ];
      },
      getSelectedDate: function() {
        let date = esm_default(this.state, format3);
        if (!date.isValid()) {
          return null;
        }
        return date;
      },
      openPicker: function() {
        this.focusedDate = this.getSelectedDate() ?? esm_default();
        this.setupDaysGrid();
        this.open = true;
        this.$nextTick(() => {
          this.evaluatePosition();
        });
      },
      selectDate: function(day = null) {
        if (day) {
          this.setFocusedDay(day);
        }
        this.setState(this.focusedDate);
      },
      setDisplayText: function() {
        this.displayText = this.getSelectedDate() ? this.getSelectedDate().format(displayFormat) : "";
      },
      setupDaysGrid: function() {
        this.emptyDaysInFocusedMonth = Array.from({
          length: this.focusedDate.date(8 - firstDayOfWeek).day()
        }, (_, i) => i + 1);
        this.daysInFocusedMonth = Array.from({
          length: this.focusedDate.daysInMonth()
        }, (_, i) => i + 1);
      },
      setFocusedDay: function(day) {
        this.focusedDate = this.focusedDate.date(day);
      },
      setState: function(date) {
        if (date === null) {
          this.state = null;
          this.setDisplayText();
          return;
        } else {
          if (this.dateIsDisabled(date)) {
            return;
          }
        }
        this.state = date.set("hour", this.hour).set("minute", this.minute).set("second", this.second).format(format3);
        this.setDisplayText();
      },
      togglePickerVisibility: function() {
        if (this.open) {
          this.closePicker();
          return;
        }
        this.openPicker();
      }
    };
  });
};

// node_modules/filepond/dist/filepond.esm.js
/*!
 * FilePond 4.30.3
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
var isNode = (value) => value instanceof HTMLElement;
var createStore = (initialState, queries2 = [], actions2 = []) => {
  const state2 = {
    ...initialState
  };
  const actionQueue = [];
  const dispatchQueue = [];
  const getState = () => ({...state2});
  const processActionQueue = () => {
    const queue = [...actionQueue];
    actionQueue.length = 0;
    return queue;
  };
  const processDispatchQueue = () => {
    const queue = [...dispatchQueue];
    dispatchQueue.length = 0;
    queue.forEach(({type, data: data3}) => {
      dispatch2(type, data3);
    });
  };
  const dispatch2 = (type, data3, isBlocking) => {
    if (isBlocking && !document.hidden) {
      dispatchQueue.push({type, data: data3});
      return;
    }
    if (actionHandlers[type]) {
      actionHandlers[type](data3);
    }
    actionQueue.push({
      type,
      data: data3
    });
  };
  const query = (str, ...args) => queryHandles[str] ? queryHandles[str](...args) : null;
  const api = {
    getState,
    processActionQueue,
    processDispatchQueue,
    dispatch: dispatch2,
    query
  };
  let queryHandles = {};
  queries2.forEach((query2) => {
    queryHandles = {
      ...query2(state2),
      ...queryHandles
    };
  });
  let actionHandlers = {};
  actions2.forEach((action) => {
    actionHandlers = {
      ...action(dispatch2, query, state2),
      ...actionHandlers
    };
  });
  return api;
};
var defineProperty = (obj, property, definition) => {
  if (typeof definition === "function") {
    obj[property] = definition;
    return;
  }
  Object.defineProperty(obj, property, {...definition});
};
var forin = (obj, cb) => {
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    cb(key, obj[key]);
  }
};
var createObject = (definition) => {
  const obj = {};
  forin(definition, (property) => {
    defineProperty(obj, property, definition[property]);
  });
  return obj;
};
var attr = (node, name2, value = null) => {
  if (value === null) {
    return node.getAttribute(name2) || node.hasAttribute(name2);
  }
  node.setAttribute(name2, value);
};
var ns = "http://www.w3.org/2000/svg";
var svgElements = ["svg", "path"];
var isSVGElement = (tag) => svgElements.includes(tag);
var createElement = (tag, className, attributes = {}) => {
  if (typeof className === "object") {
    attributes = className;
    className = null;
  }
  const element = isSVGElement(tag) ? document.createElementNS(ns, tag) : document.createElement(tag);
  if (className) {
    if (isSVGElement(tag)) {
      attr(element, "class", className);
    } else {
      element.className = className;
    }
  }
  forin(attributes, (name2, value) => {
    attr(element, name2, value);
  });
  return element;
};
var appendChild = (parent) => (child, index) => {
  if (typeof index !== "undefined" && parent.children[index]) {
    parent.insertBefore(child, parent.children[index]);
  } else {
    parent.appendChild(child);
  }
};
var appendChildView = (parent, childViews) => (view, index) => {
  if (typeof index !== "undefined") {
    childViews.splice(index, 0, view);
  } else {
    childViews.push(view);
  }
  return view;
};
var removeChildView = (parent, childViews) => (view) => {
  childViews.splice(childViews.indexOf(view), 1);
  if (view.element.parentNode) {
    parent.removeChild(view.element);
  }
  return view;
};
var IS_BROWSER = (() => typeof window !== "undefined" && typeof window.document !== "undefined")();
var isBrowser = () => IS_BROWSER;
var testElement = isBrowser() ? createElement("svg") : {};
var getChildCount = "children" in testElement ? (el) => el.children.length : (el) => el.childNodes.length;
var getViewRect = (elementRect, childViews, offset, scale) => {
  const left = offset[0] || elementRect.left;
  const top = offset[1] || elementRect.top;
  const right = left + elementRect.width;
  const bottom = top + elementRect.height * (scale[1] || 1);
  const rect = {
    element: {
      ...elementRect
    },
    inner: {
      left: elementRect.left,
      top: elementRect.top,
      right: elementRect.right,
      bottom: elementRect.bottom
    },
    outer: {
      left,
      top,
      right,
      bottom
    }
  };
  childViews.filter((childView) => !childView.isRectIgnored()).map((childView) => childView.rect).forEach((childViewRect) => {
    expandRect(rect.inner, {...childViewRect.inner});
    expandRect(rect.outer, {...childViewRect.outer});
  });
  calculateRectSize(rect.inner);
  rect.outer.bottom += rect.element.marginBottom;
  rect.outer.right += rect.element.marginRight;
  calculateRectSize(rect.outer);
  return rect;
};
var expandRect = (parent, child) => {
  child.top += parent.top;
  child.right += parent.left;
  child.bottom += parent.top;
  child.left += parent.left;
  if (child.bottom > parent.bottom) {
    parent.bottom = child.bottom;
  }
  if (child.right > parent.right) {
    parent.right = child.right;
  }
};
var calculateRectSize = (rect) => {
  rect.width = rect.right - rect.left;
  rect.height = rect.bottom - rect.top;
};
var isNumber = (value) => typeof value === "number";
var thereYet = (position, destination, velocity, errorMargin = 1e-3) => {
  return Math.abs(position - destination) < errorMargin && Math.abs(velocity) < errorMargin;
};
var spring = ({stiffness = 0.5, damping = 0.75, mass = 10} = {}) => {
  let target = null;
  let position = null;
  let velocity = 0;
  let resting = false;
  const interpolate = (ts, skipToEndState) => {
    if (resting)
      return;
    if (!(isNumber(target) && isNumber(position))) {
      resting = true;
      velocity = 0;
      return;
    }
    const f = -(position - target) * stiffness;
    velocity += f / mass;
    position += velocity;
    velocity *= damping;
    if (thereYet(position, target, velocity) || skipToEndState) {
      position = target;
      velocity = 0;
      resting = true;
      api.onupdate(position);
      api.oncomplete(position);
    } else {
      api.onupdate(position);
    }
  };
  const setTarget = (value) => {
    if (isNumber(value) && !isNumber(position)) {
      position = value;
    }
    if (target === null) {
      target = value;
      position = value;
    }
    target = value;
    if (position === target || typeof target === "undefined") {
      resting = true;
      velocity = 0;
      api.onupdate(position);
      api.oncomplete(position);
      return;
    }
    resting = false;
  };
  const api = createObject({
    interpolate,
    target: {
      set: setTarget,
      get: () => target
    },
    resting: {
      get: () => resting
    },
    onupdate: (value) => {
    },
    oncomplete: (value) => {
    }
  });
  return api;
};
var easeInOutQuad = (t2) => t2 < 0.5 ? 2 * t2 * t2 : -1 + (4 - 2 * t2) * t2;
var tween = ({duration = 500, easing = easeInOutQuad, delay = 0} = {}) => {
  let start = null;
  let t2;
  let p2;
  let resting = true;
  let reverse = false;
  let target = null;
  const interpolate = (ts, skipToEndState) => {
    if (resting || target === null)
      return;
    if (start === null) {
      start = ts;
    }
    if (ts - start < delay)
      return;
    t2 = ts - start - delay;
    if (t2 >= duration || skipToEndState) {
      t2 = 1;
      p2 = reverse ? 0 : 1;
      api.onupdate(p2 * target);
      api.oncomplete(p2 * target);
      resting = true;
    } else {
      p2 = t2 / duration;
      api.onupdate((t2 >= 0 ? easing(reverse ? 1 - p2 : p2) : 0) * target);
    }
  };
  const api = createObject({
    interpolate,
    target: {
      get: () => reverse ? 0 : target,
      set: (value) => {
        if (target === null) {
          target = value;
          api.onupdate(value);
          api.oncomplete(value);
          return;
        }
        if (value < target) {
          target = 1;
          reverse = true;
        } else {
          reverse = false;
          target = value;
        }
        resting = false;
        start = null;
      }
    },
    resting: {
      get: () => resting
    },
    onupdate: (value) => {
    },
    oncomplete: (value) => {
    }
  });
  return api;
};
var animator = {
  spring,
  tween
};
var createAnimator = (definition, category, property) => {
  const def = definition[category] && typeof definition[category][property] === "object" ? definition[category][property] : definition[category] || definition;
  const type = typeof def === "string" ? def : def.type;
  const props = typeof def === "object" ? {...def} : {};
  return animator[type] ? animator[type](props) : null;
};
var addGetSet = (keys, obj, props, overwrite = false) => {
  obj = Array.isArray(obj) ? obj : [obj];
  obj.forEach((o2) => {
    keys.forEach((key) => {
      let name2 = key;
      let getter = () => props[key];
      let setter = (value) => props[key] = value;
      if (typeof key === "object") {
        name2 = key.key;
        getter = key.getter || getter;
        setter = key.setter || setter;
      }
      if (o2[name2] && !overwrite) {
        return;
      }
      o2[name2] = {
        get: getter,
        set: setter
      };
    });
  });
};
var animations = ({mixinConfig, viewProps, viewInternalAPI, viewExternalAPI}) => {
  const initialProps = {...viewProps};
  const animations2 = [];
  forin(mixinConfig, (property, animation) => {
    const animator2 = createAnimator(animation);
    if (!animator2) {
      return;
    }
    animator2.onupdate = (value) => {
      viewProps[property] = value;
    };
    animator2.target = initialProps[property];
    const prop = {
      key: property,
      setter: (value) => {
        if (animator2.target === value) {
          return;
        }
        animator2.target = value;
      },
      getter: () => viewProps[property]
    };
    addGetSet([prop], [viewInternalAPI, viewExternalAPI], viewProps, true);
    animations2.push(animator2);
  });
  return {
    write: (ts) => {
      let skipToEndState = document.hidden;
      let resting = true;
      animations2.forEach((animation) => {
        if (!animation.resting)
          resting = false;
        animation.interpolate(ts, skipToEndState);
      });
      return resting;
    },
    destroy: () => {
    }
  };
};
var addEvent = (element) => (type, fn2) => {
  element.addEventListener(type, fn2);
};
var removeEvent = (element) => (type, fn2) => {
  element.removeEventListener(type, fn2);
};
var listeners = ({
  mixinConfig,
  viewProps,
  viewInternalAPI,
  viewExternalAPI,
  viewState,
  view
}) => {
  const events = [];
  const add = addEvent(view.element);
  const remove = removeEvent(view.element);
  viewExternalAPI.on = (type, fn2) => {
    events.push({
      type,
      fn: fn2
    });
    add(type, fn2);
  };
  viewExternalAPI.off = (type, fn2) => {
    events.splice(events.findIndex((event) => event.type === type && event.fn === fn2), 1);
    remove(type, fn2);
  };
  return {
    write: () => {
      return true;
    },
    destroy: () => {
      events.forEach((event) => {
        remove(event.type, event.fn);
      });
    }
  };
};
var apis = ({mixinConfig, viewProps, viewExternalAPI}) => {
  addGetSet(mixinConfig, viewExternalAPI, viewProps);
};
var isDefined = (value) => value != null;
var defaults = {
  opacity: 1,
  scaleX: 1,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
  originX: 0,
  originY: 0
};
var styles = ({mixinConfig, viewProps, viewInternalAPI, viewExternalAPI, view}) => {
  const initialProps = {...viewProps};
  const currentProps = {};
  addGetSet(mixinConfig, [viewInternalAPI, viewExternalAPI], viewProps);
  const getOffset = () => [viewProps["translateX"] || 0, viewProps["translateY"] || 0];
  const getScale = () => [viewProps["scaleX"] || 0, viewProps["scaleY"] || 0];
  const getRect = () => view.rect ? getViewRect(view.rect, view.childViews, getOffset(), getScale()) : null;
  viewInternalAPI.rect = {get: getRect};
  viewExternalAPI.rect = {get: getRect};
  mixinConfig.forEach((key) => {
    viewProps[key] = typeof initialProps[key] === "undefined" ? defaults[key] : initialProps[key];
  });
  return {
    write: () => {
      if (!propsHaveChanged(currentProps, viewProps)) {
        return;
      }
      applyStyles(view.element, viewProps);
      Object.assign(currentProps, {...viewProps});
      return true;
    },
    destroy: () => {
    }
  };
};
var propsHaveChanged = (currentProps, newProps) => {
  if (Object.keys(currentProps).length !== Object.keys(newProps).length) {
    return true;
  }
  for (const prop in newProps) {
    if (newProps[prop] !== currentProps[prop]) {
      return true;
    }
  }
  return false;
};
var applyStyles = (element, {
  opacity,
  perspective,
  translateX,
  translateY,
  scaleX,
  scaleY,
  rotateX,
  rotateY,
  rotateZ,
  originX,
  originY,
  width,
  height
}) => {
  let transforms2 = "";
  let styles3 = "";
  if (isDefined(originX) || isDefined(originY)) {
    styles3 += `transform-origin: ${originX || 0}px ${originY || 0}px;`;
  }
  if (isDefined(perspective)) {
    transforms2 += `perspective(${perspective}px) `;
  }
  if (isDefined(translateX) || isDefined(translateY)) {
    transforms2 += `translate3d(${translateX || 0}px, ${translateY || 0}px, 0) `;
  }
  if (isDefined(scaleX) || isDefined(scaleY)) {
    transforms2 += `scale3d(${isDefined(scaleX) ? scaleX : 1}, ${isDefined(scaleY) ? scaleY : 1}, 1) `;
  }
  if (isDefined(rotateZ)) {
    transforms2 += `rotateZ(${rotateZ}rad) `;
  }
  if (isDefined(rotateX)) {
    transforms2 += `rotateX(${rotateX}rad) `;
  }
  if (isDefined(rotateY)) {
    transforms2 += `rotateY(${rotateY}rad) `;
  }
  if (transforms2.length) {
    styles3 += `transform:${transforms2};`;
  }
  if (isDefined(opacity)) {
    styles3 += `opacity:${opacity};`;
    if (opacity === 0) {
      styles3 += `visibility:hidden;`;
    }
    if (opacity < 1) {
      styles3 += `pointer-events:none;`;
    }
  }
  if (isDefined(height)) {
    styles3 += `height:${height}px;`;
  }
  if (isDefined(width)) {
    styles3 += `width:${width}px;`;
  }
  const elementCurrentStyle = element.elementCurrentStyle || "";
  if (styles3.length !== elementCurrentStyle.length || styles3 !== elementCurrentStyle) {
    element.style.cssText = styles3;
    element.elementCurrentStyle = styles3;
  }
};
var Mixins = {
  styles,
  listeners,
  animations,
  apis
};
var updateRect = (rect = {}, element = {}, style = {}) => {
  if (!element.layoutCalculated) {
    rect.paddingTop = parseInt(style.paddingTop, 10) || 0;
    rect.marginTop = parseInt(style.marginTop, 10) || 0;
    rect.marginRight = parseInt(style.marginRight, 10) || 0;
    rect.marginBottom = parseInt(style.marginBottom, 10) || 0;
    rect.marginLeft = parseInt(style.marginLeft, 10) || 0;
    element.layoutCalculated = true;
  }
  rect.left = element.offsetLeft || 0;
  rect.top = element.offsetTop || 0;
  rect.width = element.offsetWidth || 0;
  rect.height = element.offsetHeight || 0;
  rect.right = rect.left + rect.width;
  rect.bottom = rect.top + rect.height;
  rect.scrollTop = element.scrollTop;
  rect.hidden = element.offsetParent === null;
  return rect;
};
var createView = ({
  tag = "div",
  name: name2 = null,
  attributes = {},
  read = () => {
  },
  write: write2 = () => {
  },
  create: create2 = () => {
  },
  destroy: destroy2 = () => {
  },
  filterFrameActionsForChild = (child, actions2) => actions2,
  didCreateView = () => {
  },
  didWriteView = () => {
  },
  ignoreRect = false,
  ignoreRectUpdate = false,
  mixins = []
} = {}) => (store, props = {}) => {
  const element = createElement(tag, `filepond--${name2}`, attributes);
  const style = window.getComputedStyle(element, null);
  const rect = updateRect();
  let frameRect = null;
  let isResting = false;
  const childViews = [];
  const activeMixins = [];
  const ref = {};
  const state2 = {};
  const writers = [
    write2
  ];
  const readers = [
    read
  ];
  const destroyers = [
    destroy2
  ];
  const getElement = () => element;
  const getChildViews = () => childViews.concat();
  const getReference = () => ref;
  const createChildView = (store2) => (view, props2) => view(store2, props2);
  const getRect = () => {
    if (frameRect) {
      return frameRect;
    }
    frameRect = getViewRect(rect, childViews, [0, 0], [1, 1]);
    return frameRect;
  };
  const getStyle = () => style;
  const _read = () => {
    frameRect = null;
    childViews.forEach((child) => child._read());
    const shouldUpdate = !(ignoreRectUpdate && rect.width && rect.height);
    if (shouldUpdate) {
      updateRect(rect, element, style);
    }
    const api = {root: internalAPI, props, rect};
    readers.forEach((reader) => reader(api));
  };
  const _write = (ts, frameActions, shouldOptimize) => {
    let resting = frameActions.length === 0;
    writers.forEach((writer) => {
      const writerResting = writer({
        props,
        root: internalAPI,
        actions: frameActions,
        timestamp: ts,
        shouldOptimize
      });
      if (writerResting === false) {
        resting = false;
      }
    });
    activeMixins.forEach((mixin) => {
      const mixinResting = mixin.write(ts);
      if (mixinResting === false) {
        resting = false;
      }
    });
    childViews.filter((child) => !!child.element.parentNode).forEach((child) => {
      const childResting = child._write(ts, filterFrameActionsForChild(child, frameActions), shouldOptimize);
      if (!childResting) {
        resting = false;
      }
    });
    childViews.forEach((child, index) => {
      if (child.element.parentNode) {
        return;
      }
      internalAPI.appendChild(child.element, index);
      child._read();
      child._write(ts, filterFrameActionsForChild(child, frameActions), shouldOptimize);
      resting = false;
    });
    isResting = resting;
    didWriteView({
      props,
      root: internalAPI,
      actions: frameActions,
      timestamp: ts
    });
    return resting;
  };
  const _destroy = () => {
    activeMixins.forEach((mixin) => mixin.destroy());
    destroyers.forEach((destroyer) => {
      destroyer({root: internalAPI, props});
    });
    childViews.forEach((child) => child._destroy());
  };
  const sharedAPIDefinition = {
    element: {
      get: getElement
    },
    style: {
      get: getStyle
    },
    childViews: {
      get: getChildViews
    }
  };
  const internalAPIDefinition = {
    ...sharedAPIDefinition,
    rect: {
      get: getRect
    },
    ref: {
      get: getReference
    },
    is: (needle) => name2 === needle,
    appendChild: appendChild(element),
    createChildView: createChildView(store),
    linkView: (view) => {
      childViews.push(view);
      return view;
    },
    unlinkView: (view) => {
      childViews.splice(childViews.indexOf(view), 1);
    },
    appendChildView: appendChildView(element, childViews),
    removeChildView: removeChildView(element, childViews),
    registerWriter: (writer) => writers.push(writer),
    registerReader: (reader) => readers.push(reader),
    registerDestroyer: (destroyer) => destroyers.push(destroyer),
    invalidateLayout: () => element.layoutCalculated = false,
    dispatch: store.dispatch,
    query: store.query
  };
  const externalAPIDefinition = {
    element: {
      get: getElement
    },
    childViews: {
      get: getChildViews
    },
    rect: {
      get: getRect
    },
    resting: {
      get: () => isResting
    },
    isRectIgnored: () => ignoreRect,
    _read,
    _write,
    _destroy
  };
  const mixinAPIDefinition = {
    ...sharedAPIDefinition,
    rect: {
      get: () => rect
    }
  };
  Object.keys(mixins).sort((a2, b) => {
    if (a2 === "styles") {
      return 1;
    } else if (b === "styles") {
      return -1;
    }
    return 0;
  }).forEach((key) => {
    const mixinAPI = Mixins[key]({
      mixinConfig: mixins[key],
      viewProps: props,
      viewState: state2,
      viewInternalAPI: internalAPIDefinition,
      viewExternalAPI: externalAPIDefinition,
      view: createObject(mixinAPIDefinition)
    });
    if (mixinAPI) {
      activeMixins.push(mixinAPI);
    }
  });
  const internalAPI = createObject(internalAPIDefinition);
  create2({
    root: internalAPI,
    props
  });
  const childCount = getChildCount(element);
  childViews.forEach((child, index) => {
    internalAPI.appendChild(child.element, childCount + index);
  });
  didCreateView(internalAPI);
  return createObject(externalAPIDefinition);
};
var createPainter = (read, write2, fps = 60) => {
  const name2 = "__framePainter";
  if (window[name2]) {
    window[name2].readers.push(read);
    window[name2].writers.push(write2);
    return;
  }
  window[name2] = {
    readers: [read],
    writers: [write2]
  };
  const painter = window[name2];
  const interval = 1e3 / fps;
  let last = null;
  let id = null;
  let requestTick = null;
  let cancelTick = null;
  const setTimerType = () => {
    if (document.hidden) {
      requestTick = () => window.setTimeout(() => tick(performance.now()), interval);
      cancelTick = () => window.clearTimeout(id);
    } else {
      requestTick = () => window.requestAnimationFrame(tick);
      cancelTick = () => window.cancelAnimationFrame(id);
    }
  };
  document.addEventListener("visibilitychange", () => {
    if (cancelTick)
      cancelTick();
    setTimerType();
    tick(performance.now());
  });
  const tick = (ts) => {
    id = requestTick(tick);
    if (!last) {
      last = ts;
    }
    const delta = ts - last;
    if (delta <= interval) {
      return;
    }
    last = ts - delta % interval;
    painter.readers.forEach((read2) => read2());
    painter.writers.forEach((write3) => write3(ts));
  };
  setTimerType();
  tick(performance.now());
  return {
    pause: () => {
      cancelTick(id);
    }
  };
};
var createRoute = (routes, fn2) => ({root: root2, props, actions: actions2 = [], timestamp, shouldOptimize}) => {
  actions2.filter((action) => routes[action.type]).forEach((action) => routes[action.type]({root: root2, props, action: action.data, timestamp, shouldOptimize}));
  if (fn2) {
    fn2({root: root2, props, actions: actions2, timestamp, shouldOptimize});
  }
};
var insertBefore = (newNode, referenceNode) => referenceNode.parentNode.insertBefore(newNode, referenceNode);
var insertAfter = (newNode, referenceNode) => {
  return referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};
var isArray = (value) => Array.isArray(value);
var isEmpty = (value) => value == null;
var trim = (str) => str.trim();
var toString = (value) => "" + value;
var toArray = (value, splitter = ",") => {
  if (isEmpty(value)) {
    return [];
  }
  if (isArray(value)) {
    return value;
  }
  return toString(value).split(splitter).map(trim).filter((str) => str.length);
};
var isBoolean = (value) => typeof value === "boolean";
var toBoolean = (value) => isBoolean(value) ? value : value === "true";
var isString = (value) => typeof value === "string";
var toNumber = (value) => isNumber(value) ? value : isString(value) ? toString(value).replace(/[a-z]+/gi, "") : 0;
var toInt = (value) => parseInt(toNumber(value), 10);
var toFloat = (value) => parseFloat(toNumber(value));
var isInt = (value) => isNumber(value) && isFinite(value) && Math.floor(value) === value;
var toBytes = (value, base = 1e3) => {
  if (isInt(value)) {
    return value;
  }
  let naturalFileSize = toString(value).trim();
  if (/MB$/i.test(naturalFileSize)) {
    naturalFileSize = naturalFileSize.replace(/MB$i/, "").trim();
    return toInt(naturalFileSize) * base * base;
  }
  if (/KB/i.test(naturalFileSize)) {
    naturalFileSize = naturalFileSize.replace(/KB$i/, "").trim();
    return toInt(naturalFileSize) * base;
  }
  return toInt(naturalFileSize);
};
var isFunction = (value) => typeof value === "function";
var toFunctionReference = (string) => {
  let ref = self;
  let levels = string.split(".");
  let level = null;
  while (level = levels.shift()) {
    ref = ref[level];
    if (!ref) {
      return null;
    }
  }
  return ref;
};
var methods = {
  process: "POST",
  patch: "PATCH",
  revert: "DELETE",
  fetch: "GET",
  restore: "GET",
  load: "GET"
};
var createServerAPI = (outline) => {
  const api = {};
  api.url = isString(outline) ? outline : outline.url || "";
  api.timeout = outline.timeout ? parseInt(outline.timeout, 10) : 0;
  api.headers = outline.headers ? outline.headers : {};
  forin(methods, (key) => {
    api[key] = createAction(key, outline[key], methods[key], api.timeout, api.headers);
  });
  api.process = outline.process || isString(outline) || outline.url ? api.process : null;
  api.remove = outline.remove || null;
  delete api.headers;
  return api;
};
var createAction = (name2, outline, method, timeout, headers) => {
  if (outline === null) {
    return null;
  }
  if (typeof outline === "function") {
    return outline;
  }
  const action = {
    url: method === "GET" || method === "PATCH" ? `?${name2}=` : "",
    method,
    headers,
    withCredentials: false,
    timeout,
    onload: null,
    ondata: null,
    onerror: null
  };
  if (isString(outline)) {
    action.url = outline;
    return action;
  }
  Object.assign(action, outline);
  if (isString(action.headers)) {
    const parts = action.headers.split(/:(.+)/);
    action.headers = {
      header: parts[0],
      value: parts[1]
    };
  }
  action.withCredentials = toBoolean(action.withCredentials);
  return action;
};
var toServerAPI = (value) => createServerAPI(value);
var isNull = (value) => value === null;
var isObject = (value) => typeof value === "object" && value !== null;
var isAPI = (value) => {
  return isObject(value) && isString(value.url) && isObject(value.process) && isObject(value.revert) && isObject(value.restore) && isObject(value.fetch);
};
var getType = (value) => {
  if (isArray(value)) {
    return "array";
  }
  if (isNull(value)) {
    return "null";
  }
  if (isInt(value)) {
    return "int";
  }
  if (/^[0-9]+ ?(?:GB|MB|KB)$/gi.test(value)) {
    return "bytes";
  }
  if (isAPI(value)) {
    return "api";
  }
  return typeof value;
};
var replaceSingleQuotes = (str) => str.replace(/{\s*'/g, '{"').replace(/'\s*}/g, '"}').replace(/'\s*:/g, '":').replace(/:\s*'/g, ':"').replace(/,\s*'/g, ',"').replace(/'\s*,/g, '",');
var conversionTable = {
  array: toArray,
  boolean: toBoolean,
  int: (value) => getType(value) === "bytes" ? toBytes(value) : toInt(value),
  number: toFloat,
  float: toFloat,
  bytes: toBytes,
  string: (value) => isFunction(value) ? value : toString(value),
  function: (value) => toFunctionReference(value),
  serverapi: toServerAPI,
  object: (value) => {
    try {
      return JSON.parse(replaceSingleQuotes(value));
    } catch (e2) {
      return null;
    }
  }
};
var convertTo = (value, type) => conversionTable[type](value);
var getValueByType = (newValue, defaultValue, valueType) => {
  if (newValue === defaultValue) {
    return newValue;
  }
  let newValueType = getType(newValue);
  if (newValueType !== valueType) {
    const convertedValue = convertTo(newValue, valueType);
    newValueType = getType(convertedValue);
    if (convertedValue === null) {
      throw `Trying to assign value with incorrect type to "${option}", allowed type: "${valueType}"`;
    } else {
      newValue = convertedValue;
    }
  }
  return newValue;
};
var createOption = (defaultValue, valueType) => {
  let currentValue = defaultValue;
  return {
    enumerable: true,
    get: () => currentValue,
    set: (newValue) => {
      currentValue = getValueByType(newValue, defaultValue, valueType);
    }
  };
};
var createOptions = (options) => {
  const obj = {};
  forin(options, (prop) => {
    const optionDefinition = options[prop];
    obj[prop] = createOption(optionDefinition[0], optionDefinition[1]);
  });
  return createObject(obj);
};
var createInitialState = (options) => ({
  items: [],
  listUpdateTimeout: null,
  itemUpdateTimeout: null,
  processingQueue: [],
  options: createOptions(options)
});
var fromCamels = (string, separator = "-") => string.split(/(?=[A-Z])/).map((part) => part.toLowerCase()).join(separator);
var createOptionAPI = (store, options) => {
  const obj = {};
  forin(options, (key) => {
    obj[key] = {
      get: () => store.getState().options[key],
      set: (value) => {
        store.dispatch(`SET_${fromCamels(key, "_").toUpperCase()}`, {
          value
        });
      }
    };
  });
  return obj;
};
var createOptionActions = (options) => (dispatch2, query, state2) => {
  const obj = {};
  forin(options, (key) => {
    const name2 = fromCamels(key, "_").toUpperCase();
    obj[`SET_${name2}`] = (action) => {
      try {
        state2.options[key] = action.value;
      } catch (e2) {
      }
      dispatch2(`DID_SET_${name2}`, {value: state2.options[key]});
    };
  });
  return obj;
};
var createOptionQueries = (options) => (state2) => {
  const obj = {};
  forin(options, (key) => {
    obj[`GET_${fromCamels(key, "_").toUpperCase()}`] = (action) => state2.options[key];
  });
  return obj;
};
var InteractionMethod = {
  API: 1,
  DROP: 2,
  BROWSE: 3,
  PASTE: 4,
  NONE: 5
};
var getUniqueId = () => Math.random().toString(36).substr(2, 9);
var arrayRemove = (arr, index) => arr.splice(index, 1);
var run = (cb, sync) => {
  if (sync) {
    cb();
  } else if (document.hidden) {
    Promise.resolve(1).then(cb);
  } else {
    setTimeout(cb, 0);
  }
};
var on = () => {
  const listeners2 = [];
  const off = (event, cb) => {
    arrayRemove(listeners2, listeners2.findIndex((listener) => listener.event === event && (listener.cb === cb || !cb)));
  };
  const fire = (event, args, sync) => {
    listeners2.filter((listener) => listener.event === event).map((listener) => listener.cb).forEach((cb) => run(() => cb(...args), sync));
  };
  return {
    fireSync: (event, ...args) => {
      fire(event, args, true);
    },
    fire: (event, ...args) => {
      fire(event, args, false);
    },
    on: (event, cb) => {
      listeners2.push({event, cb});
    },
    onOnce: (event, cb) => {
      listeners2.push({
        event,
        cb: (...args) => {
          off(event, cb);
          cb(...args);
        }
      });
    },
    off
  };
};
var copyObjectPropertiesToObject = (src, target, excluded) => {
  Object.getOwnPropertyNames(src).filter((property) => !excluded.includes(property)).forEach((key) => Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(src, key)));
};
var PRIVATE = [
  "fire",
  "process",
  "revert",
  "load",
  "on",
  "off",
  "onOnce",
  "retryLoad",
  "extend",
  "archive",
  "archived",
  "release",
  "released",
  "requestProcessing",
  "freeze"
];
var createItemAPI = (item2) => {
  const api = {};
  copyObjectPropertiesToObject(item2, api, PRIVATE);
  return api;
};
var removeReleasedItems = (items) => {
  items.forEach((item2, index) => {
    if (item2.released) {
      arrayRemove(items, index);
    }
  });
};
var ItemStatus = {
  INIT: 1,
  IDLE: 2,
  PROCESSING_QUEUED: 9,
  PROCESSING: 3,
  PROCESSING_COMPLETE: 5,
  PROCESSING_ERROR: 6,
  PROCESSING_REVERT_ERROR: 10,
  LOADING: 7,
  LOAD_ERROR: 8
};
var FileOrigin = {
  INPUT: 1,
  LIMBO: 2,
  LOCAL: 3
};
var getNonNumeric = (str) => /[^0-9]+/.exec(str);
var getDecimalSeparator = () => getNonNumeric(1.1 .toLocaleString())[0];
var getThousandsSeparator = () => {
  const decimalSeparator = getDecimalSeparator();
  const thousandsStringWithSeparator = 1e3 .toLocaleString();
  const thousandsStringWithoutSeparator = 1e3 .toString();
  if (thousandsStringWithSeparator !== thousandsStringWithoutSeparator) {
    return getNonNumeric(thousandsStringWithSeparator)[0];
  }
  return decimalSeparator === "." ? "," : ".";
};
var Type = {
  BOOLEAN: "boolean",
  INT: "int",
  NUMBER: "number",
  STRING: "string",
  ARRAY: "array",
  OBJECT: "object",
  FUNCTION: "function",
  ACTION: "action",
  SERVER_API: "serverapi",
  REGEX: "regex"
};
var filters = [];
var applyFilterChain = (key, value, utils) => new Promise((resolve, reject) => {
  const matchingFilters = filters.filter((f) => f.key === key).map((f) => f.cb);
  if (matchingFilters.length === 0) {
    resolve(value);
    return;
  }
  const initialFilter = matchingFilters.shift();
  matchingFilters.reduce((current, next) => current.then((value2) => next(value2, utils)), initialFilter(value, utils)).then((value2) => resolve(value2)).catch((error2) => reject(error2));
});
var applyFilters = (key, value, utils) => filters.filter((f) => f.key === key).map((f) => f.cb(value, utils));
var addFilter = (key, cb) => filters.push({key, cb});
var extendDefaultOptions = (additionalOptions) => Object.assign(defaultOptions, additionalOptions);
var getOptions = () => ({...defaultOptions});
var setOptions = (opts) => {
  forin(opts, (key, value) => {
    if (!defaultOptions[key]) {
      return;
    }
    defaultOptions[key][0] = getValueByType(value, defaultOptions[key][0], defaultOptions[key][1]);
  });
};
var defaultOptions = {
  id: [null, Type.STRING],
  name: ["filepond", Type.STRING],
  disabled: [false, Type.BOOLEAN],
  className: [null, Type.STRING],
  required: [false, Type.BOOLEAN],
  captureMethod: [null, Type.STRING],
  allowSyncAcceptAttribute: [true, Type.BOOLEAN],
  allowDrop: [true, Type.BOOLEAN],
  allowBrowse: [true, Type.BOOLEAN],
  allowPaste: [true, Type.BOOLEAN],
  allowMultiple: [false, Type.BOOLEAN],
  allowReplace: [true, Type.BOOLEAN],
  allowRevert: [true, Type.BOOLEAN],
  allowRemove: [true, Type.BOOLEAN],
  allowProcess: [true, Type.BOOLEAN],
  allowReorder: [false, Type.BOOLEAN],
  allowDirectoriesOnly: [false, Type.BOOLEAN],
  storeAsFile: [false, Type.BOOLEAN],
  forceRevert: [false, Type.BOOLEAN],
  maxFiles: [null, Type.INT],
  checkValidity: [false, Type.BOOLEAN],
  itemInsertLocationFreedom: [true, Type.BOOLEAN],
  itemInsertLocation: ["before", Type.STRING],
  itemInsertInterval: [75, Type.INT],
  dropOnPage: [false, Type.BOOLEAN],
  dropOnElement: [true, Type.BOOLEAN],
  dropValidation: [false, Type.BOOLEAN],
  ignoredFiles: [[".ds_store", "thumbs.db", "desktop.ini"], Type.ARRAY],
  instantUpload: [true, Type.BOOLEAN],
  maxParallelUploads: [2, Type.INT],
  allowMinimumUploadDuration: [true, Type.BOOLEAN],
  chunkUploads: [false, Type.BOOLEAN],
  chunkForce: [false, Type.BOOLEAN],
  chunkSize: [5e6, Type.INT],
  chunkRetryDelays: [[500, 1e3, 3e3], Type.ARRAY],
  server: [null, Type.SERVER_API],
  fileSizeBase: [1e3, Type.INT],
  labelFileSizeBytes: ["bytes", Type.STRING],
  labelFileSizeKilobytes: ["KB", Type.STRING],
  labelFileSizeMegabytes: ["MB", Type.STRING],
  labelFileSizeGigabytes: ["GB", Type.STRING],
  labelDecimalSeparator: [getDecimalSeparator(), Type.STRING],
  labelThousandsSeparator: [getThousandsSeparator(), Type.STRING],
  labelIdle: [
    'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',
    Type.STRING
  ],
  labelInvalidField: ["Field contains invalid files", Type.STRING],
  labelFileWaitingForSize: ["Waiting for size", Type.STRING],
  labelFileSizeNotAvailable: ["Size not available", Type.STRING],
  labelFileCountSingular: ["file in list", Type.STRING],
  labelFileCountPlural: ["files in list", Type.STRING],
  labelFileLoading: ["Loading", Type.STRING],
  labelFileAdded: ["Added", Type.STRING],
  labelFileLoadError: ["Error during load", Type.STRING],
  labelFileRemoved: ["Removed", Type.STRING],
  labelFileRemoveError: ["Error during remove", Type.STRING],
  labelFileProcessing: ["Uploading", Type.STRING],
  labelFileProcessingComplete: ["Upload complete", Type.STRING],
  labelFileProcessingAborted: ["Upload cancelled", Type.STRING],
  labelFileProcessingError: ["Error during upload", Type.STRING],
  labelFileProcessingRevertError: ["Error during revert", Type.STRING],
  labelTapToCancel: ["tap to cancel", Type.STRING],
  labelTapToRetry: ["tap to retry", Type.STRING],
  labelTapToUndo: ["tap to undo", Type.STRING],
  labelButtonRemoveItem: ["Remove", Type.STRING],
  labelButtonAbortItemLoad: ["Abort", Type.STRING],
  labelButtonRetryItemLoad: ["Retry", Type.STRING],
  labelButtonAbortItemProcessing: ["Cancel", Type.STRING],
  labelButtonUndoItemProcessing: ["Undo", Type.STRING],
  labelButtonRetryItemProcessing: ["Retry", Type.STRING],
  labelButtonProcessItem: ["Upload", Type.STRING],
  iconRemove: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>',
    Type.STRING
  ],
  iconProcess: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>',
    Type.STRING
  ],
  iconRetry: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>',
    Type.STRING
  ],
  iconUndo: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>',
    Type.STRING
  ],
  iconDone: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>',
    Type.STRING
  ],
  oninit: [null, Type.FUNCTION],
  onwarning: [null, Type.FUNCTION],
  onerror: [null, Type.FUNCTION],
  onactivatefile: [null, Type.FUNCTION],
  oninitfile: [null, Type.FUNCTION],
  onaddfilestart: [null, Type.FUNCTION],
  onaddfileprogress: [null, Type.FUNCTION],
  onaddfile: [null, Type.FUNCTION],
  onprocessfilestart: [null, Type.FUNCTION],
  onprocessfileprogress: [null, Type.FUNCTION],
  onprocessfileabort: [null, Type.FUNCTION],
  onprocessfilerevert: [null, Type.FUNCTION],
  onprocessfile: [null, Type.FUNCTION],
  onprocessfiles: [null, Type.FUNCTION],
  onremovefile: [null, Type.FUNCTION],
  onpreparefile: [null, Type.FUNCTION],
  onupdatefiles: [null, Type.FUNCTION],
  onreorderfiles: [null, Type.FUNCTION],
  beforeDropFile: [null, Type.FUNCTION],
  beforeAddFile: [null, Type.FUNCTION],
  beforeRemoveFile: [null, Type.FUNCTION],
  beforePrepareFile: [null, Type.FUNCTION],
  stylePanelLayout: [null, Type.STRING],
  stylePanelAspectRatio: [null, Type.STRING],
  styleItemPanelAspectRatio: [null, Type.STRING],
  styleButtonRemoveItemPosition: ["left", Type.STRING],
  styleButtonProcessItemPosition: ["right", Type.STRING],
  styleLoadIndicatorPosition: ["right", Type.STRING],
  styleProgressIndicatorPosition: ["right", Type.STRING],
  styleButtonRemoveItemAlign: [false, Type.BOOLEAN],
  files: [[], Type.ARRAY],
  credits: [["https://pqina.nl/", "Powered by PQINA"], Type.ARRAY]
};
var getItemByQuery = (items, query) => {
  if (isEmpty(query)) {
    return items[0] || null;
  }
  if (isInt(query)) {
    return items[query] || null;
  }
  if (typeof query === "object") {
    query = query.id;
  }
  return items.find((item2) => item2.id === query) || null;
};
var getNumericAspectRatioFromString = (aspectRatio) => {
  if (isEmpty(aspectRatio)) {
    return aspectRatio;
  }
  if (/:/.test(aspectRatio)) {
    const parts = aspectRatio.split(":");
    return parts[1] / parts[0];
  }
  return parseFloat(aspectRatio);
};
var getActiveItems = (items) => items.filter((item2) => !item2.archived);
var Status = {
  EMPTY: 0,
  IDLE: 1,
  ERROR: 2,
  BUSY: 3,
  READY: 4
};
var res = null;
var canUpdateFileInput = () => {
  if (res === null) {
    try {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(new File(["hello world"], "This_Works.txt"));
      const el = document.createElement("input");
      el.setAttribute("type", "file");
      el.files = dataTransfer.files;
      res = el.files.length === 1;
    } catch (err) {
      res = false;
    }
  }
  return res;
};
var ITEM_ERROR = [
  ItemStatus.LOAD_ERROR,
  ItemStatus.PROCESSING_ERROR,
  ItemStatus.PROCESSING_REVERT_ERROR
];
var ITEM_BUSY = [
  ItemStatus.LOADING,
  ItemStatus.PROCESSING,
  ItemStatus.PROCESSING_QUEUED,
  ItemStatus.INIT
];
var ITEM_READY = [ItemStatus.PROCESSING_COMPLETE];
var isItemInErrorState = (item2) => ITEM_ERROR.includes(item2.status);
var isItemInBusyState = (item2) => ITEM_BUSY.includes(item2.status);
var isItemInReadyState = (item2) => ITEM_READY.includes(item2.status);
var isAsync = (state2) => isObject(state2.options.server) && (isObject(state2.options.server.process) || isFunction(state2.options.server.process));
var queries = (state2) => ({
  GET_STATUS: () => {
    const items = getActiveItems(state2.items);
    const {EMPTY, ERROR, BUSY, IDLE, READY} = Status;
    if (items.length === 0)
      return EMPTY;
    if (items.some(isItemInErrorState))
      return ERROR;
    if (items.some(isItemInBusyState))
      return BUSY;
    if (items.some(isItemInReadyState))
      return READY;
    return IDLE;
  },
  GET_ITEM: (query) => getItemByQuery(state2.items, query),
  GET_ACTIVE_ITEM: (query) => getItemByQuery(getActiveItems(state2.items), query),
  GET_ACTIVE_ITEMS: () => getActiveItems(state2.items),
  GET_ITEMS: () => state2.items,
  GET_ITEM_NAME: (query) => {
    const item2 = getItemByQuery(state2.items, query);
    return item2 ? item2.filename : null;
  },
  GET_ITEM_SIZE: (query) => {
    const item2 = getItemByQuery(state2.items, query);
    return item2 ? item2.fileSize : null;
  },
  GET_STYLES: () => Object.keys(state2.options).filter((key) => /^style/.test(key)).map((option2) => ({
    name: option2,
    value: state2.options[option2]
  })),
  GET_PANEL_ASPECT_RATIO: () => {
    const isShapeCircle = /circle/.test(state2.options.stylePanelLayout);
    const aspectRatio = isShapeCircle ? 1 : getNumericAspectRatioFromString(state2.options.stylePanelAspectRatio);
    return aspectRatio;
  },
  GET_ITEM_PANEL_ASPECT_RATIO: () => state2.options.styleItemPanelAspectRatio,
  GET_ITEMS_BY_STATUS: (status) => getActiveItems(state2.items).filter((item2) => item2.status === status),
  GET_TOTAL_ITEMS: () => getActiveItems(state2.items).length,
  SHOULD_UPDATE_FILE_INPUT: () => state2.options.storeAsFile && canUpdateFileInput() && !isAsync(state2),
  IS_ASYNC: () => isAsync(state2),
  GET_FILE_SIZE_LABELS: (query) => ({
    labelBytes: query("GET_LABEL_FILE_SIZE_BYTES") || void 0,
    labelKilobytes: query("GET_LABEL_FILE_SIZE_KILOBYTES") || void 0,
    labelMegabytes: query("GET_LABEL_FILE_SIZE_MEGABYTES") || void 0,
    labelGigabytes: query("GET_LABEL_FILE_SIZE_GIGABYTES") || void 0
  })
});
var hasRoomForItem = (state2) => {
  const count = getActiveItems(state2.items).length;
  if (!state2.options.allowMultiple) {
    return count === 0;
  }
  const maxFileCount = state2.options.maxFiles;
  if (maxFileCount === null) {
    return true;
  }
  if (count < maxFileCount) {
    return true;
  }
  return false;
};
var limit = (value, min, max) => Math.max(Math.min(max, value), min);
var arrayInsert = (arr, index, item2) => arr.splice(index, 0, item2);
var insertItem = (items, item2, index) => {
  if (isEmpty(item2)) {
    return null;
  }
  if (typeof index === "undefined") {
    items.push(item2);
    return item2;
  }
  index = limit(index, 0, items.length);
  arrayInsert(items, index, item2);
  return item2;
};
var isBase64DataURI = (str) => /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(str);
var getFilenameFromURL = (url) => url.split("/").pop().split("?").shift();
var getExtensionFromFilename = (name2) => name2.split(".").pop();
var guesstimateExtension = (type) => {
  if (typeof type !== "string") {
    return "";
  }
  const subtype = type.split("/").pop();
  if (/svg/.test(subtype)) {
    return "svg";
  }
  if (/zip|compressed/.test(subtype)) {
    return "zip";
  }
  if (/plain/.test(subtype)) {
    return "txt";
  }
  if (/msword/.test(subtype)) {
    return "doc";
  }
  if (/[a-z]+/.test(subtype)) {
    if (subtype === "jpeg") {
      return "jpg";
    }
    return subtype;
  }
  return "";
};
var leftPad = (value, padding = "") => (padding + value).slice(-padding.length);
var getDateString = (date = new Date()) => `${date.getFullYear()}-${leftPad(date.getMonth() + 1, "00")}-${leftPad(date.getDate(), "00")}_${leftPad(date.getHours(), "00")}-${leftPad(date.getMinutes(), "00")}-${leftPad(date.getSeconds(), "00")}`;
var getFileFromBlob = (blob2, filename, type = null, extension = null) => {
  const file2 = typeof type === "string" ? blob2.slice(0, blob2.size, type) : blob2.slice(0, blob2.size, blob2.type);
  file2.lastModifiedDate = new Date();
  if (blob2._relativePath)
    file2._relativePath = blob2._relativePath;
  if (!isString(filename)) {
    filename = getDateString();
  }
  if (filename && extension === null && getExtensionFromFilename(filename)) {
    file2.name = filename;
  } else {
    extension = extension || guesstimateExtension(file2.type);
    file2.name = filename + (extension ? "." + extension : "");
  }
  return file2;
};
var getBlobBuilder = () => {
  return window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
};
var createBlob = (arrayBuffer, mimeType) => {
  const BB = getBlobBuilder();
  if (BB) {
    const bb = new BB();
    bb.append(arrayBuffer);
    return bb.getBlob(mimeType);
  }
  return new Blob([arrayBuffer], {
    type: mimeType
  });
};
var getBlobFromByteStringWithMimeType = (byteString, mimeType) => {
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return createBlob(ab, mimeType);
};
var getMimeTypeFromBase64DataURI = (dataURI) => {
  return (/^data:(.+);/.exec(dataURI) || [])[1] || null;
};
var getBase64DataFromBase64DataURI = (dataURI) => {
  const data3 = dataURI.split(",")[1];
  return data3.replace(/\s/g, "");
};
var getByteStringFromBase64DataURI = (dataURI) => {
  return atob(getBase64DataFromBase64DataURI(dataURI));
};
var getBlobFromBase64DataURI = (dataURI) => {
  const mimeType = getMimeTypeFromBase64DataURI(dataURI);
  const byteString = getByteStringFromBase64DataURI(dataURI);
  return getBlobFromByteStringWithMimeType(byteString, mimeType);
};
var getFileFromBase64DataURI = (dataURI, filename, extension) => {
  return getFileFromBlob(getBlobFromBase64DataURI(dataURI), filename, null, extension);
};
var getFileNameFromHeader = (header) => {
  if (!/^content-disposition:/i.test(header))
    return null;
  const matches = header.split(/filename=|filename\*=.+''/).splice(1).map((name2) => name2.trim().replace(/^["']|[;"']{0,2}$/g, "")).filter((name2) => name2.length);
  return matches.length ? decodeURI(matches[matches.length - 1]) : null;
};
var getFileSizeFromHeader = (header) => {
  if (/content-length:/i.test(header)) {
    const size = header.match(/[0-9]+/)[0];
    return size ? parseInt(size, 10) : null;
  }
  return null;
};
var getTranfserIdFromHeader = (header) => {
  if (/x-content-transfer-id:/i.test(header)) {
    const id = (header.split(":")[1] || "").trim();
    return id || null;
  }
  return null;
};
var getFileInfoFromHeaders = (headers) => {
  const info = {
    source: null,
    name: null,
    size: null
  };
  const rows = headers.split("\n");
  for (let header of rows) {
    const name2 = getFileNameFromHeader(header);
    if (name2) {
      info.name = name2;
      continue;
    }
    const size = getFileSizeFromHeader(header);
    if (size) {
      info.size = size;
      continue;
    }
    const source = getTranfserIdFromHeader(header);
    if (source) {
      info.source = source;
      continue;
    }
  }
  return info;
};
var createFileLoader = (fetchFn) => {
  const state2 = {
    source: null,
    complete: false,
    progress: 0,
    size: null,
    timestamp: null,
    duration: 0,
    request: null
  };
  const getProgress = () => state2.progress;
  const abort = () => {
    if (state2.request && state2.request.abort) {
      state2.request.abort();
    }
  };
  const load = () => {
    const source = state2.source;
    api.fire("init", source);
    if (source instanceof File) {
      api.fire("load", source);
    } else if (source instanceof Blob) {
      api.fire("load", getFileFromBlob(source, source.name));
    } else if (isBase64DataURI(source)) {
      api.fire("load", getFileFromBase64DataURI(source));
    } else {
      loadURL(source);
    }
  };
  const loadURL = (url) => {
    if (!fetchFn) {
      api.fire("error", {
        type: "error",
        body: "Can't load URL",
        code: 400
      });
      return;
    }
    state2.timestamp = Date.now();
    state2.request = fetchFn(url, (response) => {
      state2.duration = Date.now() - state2.timestamp;
      state2.complete = true;
      if (response instanceof Blob) {
        response = getFileFromBlob(response, response.name || getFilenameFromURL(url));
      }
      api.fire("load", response instanceof Blob ? response : response ? response.body : null);
    }, (error2) => {
      api.fire("error", typeof error2 === "string" ? {
        type: "error",
        code: 0,
        body: error2
      } : error2);
    }, (computable, current, total) => {
      if (total) {
        state2.size = total;
      }
      state2.duration = Date.now() - state2.timestamp;
      if (!computable) {
        state2.progress = null;
        return;
      }
      state2.progress = current / total;
      api.fire("progress", state2.progress);
    }, () => {
      api.fire("abort");
    }, (response) => {
      const fileinfo = getFileInfoFromHeaders(typeof response === "string" ? response : response.headers);
      api.fire("meta", {
        size: state2.size || fileinfo.size,
        filename: fileinfo.name,
        source: fileinfo.source
      });
    });
  };
  const api = {
    ...on(),
    setSource: (source) => state2.source = source,
    getProgress,
    abort,
    load
  };
  return api;
};
var isGet = (method) => /GET|HEAD/.test(method);
var sendRequest = (data3, url, options) => {
  const api = {
    onheaders: () => {
    },
    onprogress: () => {
    },
    onload: () => {
    },
    ontimeout: () => {
    },
    onerror: () => {
    },
    onabort: () => {
    },
    abort: () => {
      aborted = true;
      xhr.abort();
    }
  };
  let aborted = false;
  let headersReceived = false;
  options = {
    method: "POST",
    headers: {},
    withCredentials: false,
    ...options
  };
  url = encodeURI(url);
  if (isGet(options.method) && data3) {
    url = `${url}${encodeURIComponent(typeof data3 === "string" ? data3 : JSON.stringify(data3))}`;
  }
  const xhr = new XMLHttpRequest();
  const process = isGet(options.method) ? xhr : xhr.upload;
  process.onprogress = (e2) => {
    if (aborted) {
      return;
    }
    api.onprogress(e2.lengthComputable, e2.loaded, e2.total);
  };
  xhr.onreadystatechange = () => {
    if (xhr.readyState < 2) {
      return;
    }
    if (xhr.readyState === 4 && xhr.status === 0) {
      return;
    }
    if (headersReceived) {
      return;
    }
    headersReceived = true;
    api.onheaders(xhr);
  };
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      api.onload(xhr);
    } else {
      api.onerror(xhr);
    }
  };
  xhr.onerror = () => api.onerror(xhr);
  xhr.onabort = () => {
    aborted = true;
    api.onabort();
  };
  xhr.ontimeout = () => api.ontimeout(xhr);
  xhr.open(options.method, url, true);
  if (isInt(options.timeout)) {
    xhr.timeout = options.timeout;
  }
  Object.keys(options.headers).forEach((key) => {
    const value = unescape(encodeURIComponent(options.headers[key]));
    xhr.setRequestHeader(key, value);
  });
  if (options.responseType) {
    xhr.responseType = options.responseType;
  }
  if (options.withCredentials) {
    xhr.withCredentials = true;
  }
  xhr.send(data3);
  return api;
};
var createResponse = (type, code, body, headers) => ({
  type,
  code,
  body,
  headers
});
var createTimeoutResponse = (cb) => (xhr) => {
  cb(createResponse("error", 0, "Timeout", xhr.getAllResponseHeaders()));
};
var hasQS = (str) => /\?/.test(str);
var buildURL = (...parts) => {
  let url = "";
  parts.forEach((part) => {
    url += hasQS(url) && hasQS(part) ? part.replace(/\?/, "&") : part;
  });
  return url;
};
var createFetchFunction = (apiUrl = "", action) => {
  if (typeof action === "function") {
    return action;
  }
  if (!action || !isString(action.url)) {
    return null;
  }
  const onload = action.onload || ((res2) => res2);
  const onerror = action.onerror || ((res2) => null);
  return (url, load, error2, progress, abort, headers) => {
    const request = sendRequest(url, buildURL(apiUrl, action.url), {
      ...action,
      responseType: "blob"
    });
    request.onload = (xhr) => {
      const headers2 = xhr.getAllResponseHeaders();
      const filename = getFileInfoFromHeaders(headers2).name || getFilenameFromURL(url);
      load(createResponse("load", xhr.status, action.method === "HEAD" ? null : getFileFromBlob(onload(xhr.response), filename), headers2));
    };
    request.onerror = (xhr) => {
      error2(createResponse("error", xhr.status, onerror(xhr.response) || xhr.statusText, xhr.getAllResponseHeaders()));
    };
    request.onheaders = (xhr) => {
      headers(createResponse("headers", xhr.status, null, xhr.getAllResponseHeaders()));
    };
    request.ontimeout = createTimeoutResponse(error2);
    request.onprogress = progress;
    request.onabort = abort;
    return request;
  };
};
var ChunkStatus = {
  QUEUED: 0,
  COMPLETE: 1,
  PROCESSING: 2,
  ERROR: 3,
  WAITING: 4
};
var processFileChunked = (apiUrl, action, name2, file2, metadata, load, error2, progress, abort, transfer, options) => {
  const chunks = [];
  const {chunkTransferId, chunkServer, chunkSize, chunkRetryDelays} = options;
  const state2 = {
    serverId: chunkTransferId,
    aborted: false
  };
  const ondata = action.ondata || ((fd) => fd);
  const onload = action.onload || ((xhr, method) => method === "HEAD" ? xhr.getResponseHeader("Upload-Offset") : xhr.response);
  const onerror = action.onerror || ((res2) => null);
  const requestTransferId = (cb) => {
    const formData = new FormData();
    if (isObject(metadata))
      formData.append(name2, JSON.stringify(metadata));
    const headers = typeof action.headers === "function" ? action.headers(file2, metadata) : {
      ...action.headers,
      "Upload-Length": file2.size
    };
    const requestParams = {
      ...action,
      headers
    };
    const request = sendRequest(ondata(formData), buildURL(apiUrl, action.url), requestParams);
    request.onload = (xhr) => cb(onload(xhr, requestParams.method));
    request.onerror = (xhr) => error2(createResponse("error", xhr.status, onerror(xhr.response) || xhr.statusText, xhr.getAllResponseHeaders()));
    request.ontimeout = createTimeoutResponse(error2);
  };
  const requestTransferOffset = (cb) => {
    const requestUrl = buildURL(apiUrl, chunkServer.url, state2.serverId);
    const headers = typeof action.headers === "function" ? action.headers(state2.serverId) : {
      ...action.headers
    };
    const requestParams = {
      headers,
      method: "HEAD"
    };
    const request = sendRequest(null, requestUrl, requestParams);
    request.onload = (xhr) => cb(onload(xhr, requestParams.method));
    request.onerror = (xhr) => error2(createResponse("error", xhr.status, onerror(xhr.response) || xhr.statusText, xhr.getAllResponseHeaders()));
    request.ontimeout = createTimeoutResponse(error2);
  };
  const lastChunkIndex = Math.floor(file2.size / chunkSize);
  for (let i = 0; i <= lastChunkIndex; i++) {
    const offset = i * chunkSize;
    const data3 = file2.slice(offset, offset + chunkSize, "application/offset+octet-stream");
    chunks[i] = {
      index: i,
      size: data3.size,
      offset,
      data: data3,
      file: file2,
      progress: 0,
      retries: [...chunkRetryDelays],
      status: ChunkStatus.QUEUED,
      error: null,
      request: null,
      timeout: null
    };
  }
  const completeProcessingChunks = () => load(state2.serverId);
  const canProcessChunk = (chunk) => chunk.status === ChunkStatus.QUEUED || chunk.status === ChunkStatus.ERROR;
  const processChunk = (chunk) => {
    if (state2.aborted)
      return;
    chunk = chunk || chunks.find(canProcessChunk);
    if (!chunk) {
      if (chunks.every((chunk2) => chunk2.status === ChunkStatus.COMPLETE)) {
        completeProcessingChunks();
      }
      return;
    }
    chunk.status = ChunkStatus.PROCESSING;
    chunk.progress = null;
    const ondata2 = chunkServer.ondata || ((fd) => fd);
    const onerror2 = chunkServer.onerror || ((res2) => null);
    const requestUrl = buildURL(apiUrl, chunkServer.url, state2.serverId);
    const headers = typeof chunkServer.headers === "function" ? chunkServer.headers(chunk) : {
      ...chunkServer.headers,
      "Content-Type": "application/offset+octet-stream",
      "Upload-Offset": chunk.offset,
      "Upload-Length": file2.size,
      "Upload-Name": file2.name
    };
    const request = chunk.request = sendRequest(ondata2(chunk.data), requestUrl, {
      ...chunkServer,
      headers
    });
    request.onload = () => {
      chunk.status = ChunkStatus.COMPLETE;
      chunk.request = null;
      processChunks();
    };
    request.onprogress = (lengthComputable, loaded, total) => {
      chunk.progress = lengthComputable ? loaded : null;
      updateTotalProgress();
    };
    request.onerror = (xhr) => {
      chunk.status = ChunkStatus.ERROR;
      chunk.request = null;
      chunk.error = onerror2(xhr.response) || xhr.statusText;
      if (!retryProcessChunk(chunk)) {
        error2(createResponse("error", xhr.status, onerror2(xhr.response) || xhr.statusText, xhr.getAllResponseHeaders()));
      }
    };
    request.ontimeout = (xhr) => {
      chunk.status = ChunkStatus.ERROR;
      chunk.request = null;
      if (!retryProcessChunk(chunk)) {
        createTimeoutResponse(error2)(xhr);
      }
    };
    request.onabort = () => {
      chunk.status = ChunkStatus.QUEUED;
      chunk.request = null;
      abort();
    };
  };
  const retryProcessChunk = (chunk) => {
    if (chunk.retries.length === 0)
      return false;
    chunk.status = ChunkStatus.WAITING;
    clearTimeout(chunk.timeout);
    chunk.timeout = setTimeout(() => {
      processChunk(chunk);
    }, chunk.retries.shift());
    return true;
  };
  const updateTotalProgress = () => {
    const totalBytesTransfered = chunks.reduce((p2, chunk) => {
      if (p2 === null || chunk.progress === null)
        return null;
      return p2 + chunk.progress;
    }, 0);
    if (totalBytesTransfered === null)
      return progress(false, 0, 0);
    const totalSize = chunks.reduce((total, chunk) => total + chunk.size, 0);
    progress(true, totalBytesTransfered, totalSize);
  };
  const processChunks = () => {
    const totalProcessing = chunks.filter((chunk) => chunk.status === ChunkStatus.PROCESSING).length;
    if (totalProcessing >= 1)
      return;
    processChunk();
  };
  const abortChunks = () => {
    chunks.forEach((chunk) => {
      clearTimeout(chunk.timeout);
      if (chunk.request) {
        chunk.request.abort();
      }
    });
  };
  if (!state2.serverId) {
    requestTransferId((serverId) => {
      if (state2.aborted)
        return;
      transfer(serverId);
      state2.serverId = serverId;
      processChunks();
    });
  } else {
    requestTransferOffset((offset) => {
      if (state2.aborted)
        return;
      chunks.filter((chunk) => chunk.offset < offset).forEach((chunk) => {
        chunk.status = ChunkStatus.COMPLETE;
        chunk.progress = chunk.size;
      });
      processChunks();
    });
  }
  return {
    abort: () => {
      state2.aborted = true;
      abortChunks();
    }
  };
};
var createFileProcessorFunction = (apiUrl, action, name2, options) => (file2, metadata, load, error2, progress, abort, transfer) => {
  if (!file2)
    return;
  const canChunkUpload = options.chunkUploads;
  const shouldChunkUpload = canChunkUpload && file2.size > options.chunkSize;
  const willChunkUpload = canChunkUpload && (shouldChunkUpload || options.chunkForce);
  if (file2 instanceof Blob && willChunkUpload)
    return processFileChunked(apiUrl, action, name2, file2, metadata, load, error2, progress, abort, transfer, options);
  const ondata = action.ondata || ((fd) => fd);
  const onload = action.onload || ((res2) => res2);
  const onerror = action.onerror || ((res2) => null);
  const headers = typeof action.headers === "function" ? action.headers(file2, metadata) || {} : {
    ...action.headers
  };
  const requestParams = {
    ...action,
    headers
  };
  var formData = new FormData();
  if (isObject(metadata)) {
    formData.append(name2, JSON.stringify(metadata));
  }
  (file2 instanceof Blob ? [{name: null, file: file2}] : file2).forEach((item2) => {
    formData.append(name2, item2.file, item2.name === null ? item2.file.name : `${item2.name}${item2.file.name}`);
  });
  const request = sendRequest(ondata(formData), buildURL(apiUrl, action.url), requestParams);
  request.onload = (xhr) => {
    load(createResponse("load", xhr.status, onload(xhr.response), xhr.getAllResponseHeaders()));
  };
  request.onerror = (xhr) => {
    error2(createResponse("error", xhr.status, onerror(xhr.response) || xhr.statusText, xhr.getAllResponseHeaders()));
  };
  request.ontimeout = createTimeoutResponse(error2);
  request.onprogress = progress;
  request.onabort = abort;
  return request;
};
var createProcessorFunction = (apiUrl = "", action, name2, options) => {
  if (typeof action === "function")
    return (...params) => action(name2, ...params, options);
  if (!action || !isString(action.url))
    return null;
  return createFileProcessorFunction(apiUrl, action, name2, options);
};
var createRevertFunction = (apiUrl = "", action) => {
  if (typeof action === "function") {
    return action;
  }
  if (!action || !isString(action.url)) {
    return (uniqueFileId, load) => load();
  }
  const onload = action.onload || ((res2) => res2);
  const onerror = action.onerror || ((res2) => null);
  return (uniqueFileId, load, error2) => {
    const request = sendRequest(uniqueFileId, apiUrl + action.url, action);
    request.onload = (xhr) => {
      load(createResponse("load", xhr.status, onload(xhr.response), xhr.getAllResponseHeaders()));
    };
    request.onerror = (xhr) => {
      error2(createResponse("error", xhr.status, onerror(xhr.response) || xhr.statusText, xhr.getAllResponseHeaders()));
    };
    request.ontimeout = createTimeoutResponse(error2);
    return request;
  };
};
var getRandomNumber = (min = 0, max = 1) => min + Math.random() * (max - min);
var createPerceivedPerformanceUpdater = (cb, duration = 1e3, offset = 0, tickMin = 25, tickMax = 250) => {
  let timeout = null;
  const start = Date.now();
  const tick = () => {
    let runtime = Date.now() - start;
    let delay = getRandomNumber(tickMin, tickMax);
    if (runtime + delay > duration) {
      delay = runtime + delay - duration;
    }
    let progress = runtime / duration;
    if (progress >= 1 || document.hidden) {
      cb(1);
      return;
    }
    cb(progress);
    timeout = setTimeout(tick, delay);
  };
  if (duration > 0)
    tick();
  return {
    clear: () => {
      clearTimeout(timeout);
    }
  };
};
var createFileProcessor = (processFn, options) => {
  const state2 = {
    complete: false,
    perceivedProgress: 0,
    perceivedPerformanceUpdater: null,
    progress: null,
    timestamp: null,
    perceivedDuration: 0,
    duration: 0,
    request: null,
    response: null
  };
  const {allowMinimumUploadDuration} = options;
  const process = (file2, metadata) => {
    const progressFn = () => {
      if (state2.duration === 0 || state2.progress === null)
        return;
      api.fire("progress", api.getProgress());
    };
    const completeFn = () => {
      state2.complete = true;
      api.fire("load-perceived", state2.response.body);
    };
    api.fire("start");
    state2.timestamp = Date.now();
    state2.perceivedPerformanceUpdater = createPerceivedPerformanceUpdater((progress) => {
      state2.perceivedProgress = progress;
      state2.perceivedDuration = Date.now() - state2.timestamp;
      progressFn();
      if (state2.response && state2.perceivedProgress === 1 && !state2.complete) {
        completeFn();
      }
    }, allowMinimumUploadDuration ? getRandomNumber(750, 1500) : 0);
    state2.request = processFn(file2, metadata, (response) => {
      state2.response = isObject(response) ? response : {
        type: "load",
        code: 200,
        body: `${response}`,
        headers: {}
      };
      state2.duration = Date.now() - state2.timestamp;
      state2.progress = 1;
      api.fire("load", state2.response.body);
      if (!allowMinimumUploadDuration || allowMinimumUploadDuration && state2.perceivedProgress === 1) {
        completeFn();
      }
    }, (error2) => {
      state2.perceivedPerformanceUpdater.clear();
      api.fire("error", isObject(error2) ? error2 : {
        type: "error",
        code: 0,
        body: `${error2}`
      });
    }, (computable, current, total) => {
      state2.duration = Date.now() - state2.timestamp;
      state2.progress = computable ? current / total : null;
      progressFn();
    }, () => {
      state2.perceivedPerformanceUpdater.clear();
      api.fire("abort", state2.response ? state2.response.body : null);
    }, (transferId) => {
      api.fire("transfer", transferId);
    });
  };
  const abort = () => {
    if (!state2.request)
      return;
    state2.perceivedPerformanceUpdater.clear();
    if (state2.request.abort)
      state2.request.abort();
    state2.complete = true;
  };
  const reset = () => {
    abort();
    state2.complete = false;
    state2.perceivedProgress = 0;
    state2.progress = 0;
    state2.timestamp = null;
    state2.perceivedDuration = 0;
    state2.duration = 0;
    state2.request = null;
    state2.response = null;
  };
  const getProgress = allowMinimumUploadDuration ? () => state2.progress ? Math.min(state2.progress, state2.perceivedProgress) : null : () => state2.progress || null;
  const getDuration = allowMinimumUploadDuration ? () => Math.min(state2.duration, state2.perceivedDuration) : () => state2.duration;
  const api = {
    ...on(),
    process,
    abort,
    getProgress,
    getDuration,
    reset
  };
  return api;
};
var getFilenameWithoutExtension = (name2) => name2.substr(0, name2.lastIndexOf(".")) || name2;
var createFileStub = (source) => {
  let data3 = [source.name, source.size, source.type];
  if (source instanceof Blob || isBase64DataURI(source)) {
    data3[0] = source.name || getDateString();
  } else if (isBase64DataURI(source)) {
    data3[1] = source.length;
    data3[2] = getMimeTypeFromBase64DataURI(source);
  } else if (isString(source)) {
    data3[0] = getFilenameFromURL(source);
    data3[1] = 0;
    data3[2] = "application/octet-stream";
  }
  return {
    name: data3[0],
    size: data3[1],
    type: data3[2]
  };
};
var isFile = (value) => !!(value instanceof File || value instanceof Blob && value.name);
var deepCloneObject = (src) => {
  if (!isObject(src))
    return src;
  const target = isArray(src) ? [] : {};
  for (const key in src) {
    if (!src.hasOwnProperty(key))
      continue;
    const v = src[key];
    target[key] = v && isObject(v) ? deepCloneObject(v) : v;
  }
  return target;
};
var createItem = (origin = null, serverFileReference = null, file2 = null) => {
  const id = getUniqueId();
  const state2 = {
    archived: false,
    frozen: false,
    released: false,
    source: null,
    file: file2,
    serverFileReference,
    transferId: null,
    processingAborted: false,
    status: serverFileReference ? ItemStatus.PROCESSING_COMPLETE : ItemStatus.INIT,
    activeLoader: null,
    activeProcessor: null
  };
  let abortProcessingRequestComplete = null;
  const metadata = {};
  const setStatus = (status) => state2.status = status;
  const fire = (event, ...params) => {
    if (state2.released || state2.frozen)
      return;
    api.fire(event, ...params);
  };
  const getFileExtension = () => getExtensionFromFilename(state2.file.name);
  const getFileType = () => state2.file.type;
  const getFileSize = () => state2.file.size;
  const getFile2 = () => state2.file;
  const load = (source, loader, onload) => {
    state2.source = source;
    api.fireSync("init");
    if (state2.file) {
      api.fireSync("load-skip");
      return;
    }
    state2.file = createFileStub(source);
    loader.on("init", () => {
      fire("load-init");
    });
    loader.on("meta", (meta) => {
      state2.file.size = meta.size;
      state2.file.filename = meta.filename;
      if (meta.source) {
        origin = FileOrigin.LIMBO;
        state2.serverFileReference = meta.source;
        state2.status = ItemStatus.PROCESSING_COMPLETE;
      }
      fire("load-meta");
    });
    loader.on("progress", (progress) => {
      setStatus(ItemStatus.LOADING);
      fire("load-progress", progress);
    });
    loader.on("error", (error2) => {
      setStatus(ItemStatus.LOAD_ERROR);
      fire("load-request-error", error2);
    });
    loader.on("abort", () => {
      setStatus(ItemStatus.INIT);
      fire("load-abort");
    });
    loader.on("load", (file3) => {
      state2.activeLoader = null;
      const success = (result) => {
        state2.file = isFile(result) ? result : state2.file;
        if (origin === FileOrigin.LIMBO && state2.serverFileReference) {
          setStatus(ItemStatus.PROCESSING_COMPLETE);
        } else {
          setStatus(ItemStatus.IDLE);
        }
        fire("load");
      };
      const error2 = (result) => {
        state2.file = file3;
        fire("load-meta");
        setStatus(ItemStatus.LOAD_ERROR);
        fire("load-file-error", result);
      };
      if (state2.serverFileReference) {
        success(file3);
        return;
      }
      onload(file3, success, error2);
    });
    loader.setSource(source);
    state2.activeLoader = loader;
    loader.load();
  };
  const retryLoad = () => {
    if (!state2.activeLoader) {
      return;
    }
    state2.activeLoader.load();
  };
  const abortLoad = () => {
    if (state2.activeLoader) {
      state2.activeLoader.abort();
      return;
    }
    setStatus(ItemStatus.INIT);
    fire("load-abort");
  };
  const process = (processor, onprocess) => {
    if (state2.processingAborted) {
      state2.processingAborted = false;
      return;
    }
    setStatus(ItemStatus.PROCESSING);
    abortProcessingRequestComplete = null;
    if (!(state2.file instanceof Blob)) {
      api.on("load", () => {
        process(processor, onprocess);
      });
      return;
    }
    processor.on("load", (serverFileReference2) => {
      state2.transferId = null;
      state2.serverFileReference = serverFileReference2;
    });
    processor.on("transfer", (transferId) => {
      state2.transferId = transferId;
    });
    processor.on("load-perceived", (serverFileReference2) => {
      state2.activeProcessor = null;
      state2.transferId = null;
      state2.serverFileReference = serverFileReference2;
      setStatus(ItemStatus.PROCESSING_COMPLETE);
      fire("process-complete", serverFileReference2);
    });
    processor.on("start", () => {
      fire("process-start");
    });
    processor.on("error", (error3) => {
      state2.activeProcessor = null;
      setStatus(ItemStatus.PROCESSING_ERROR);
      fire("process-error", error3);
    });
    processor.on("abort", (serverFileReference2) => {
      state2.activeProcessor = null;
      state2.serverFileReference = serverFileReference2;
      setStatus(ItemStatus.IDLE);
      fire("process-abort");
      if (abortProcessingRequestComplete) {
        abortProcessingRequestComplete();
      }
    });
    processor.on("progress", (progress) => {
      fire("process-progress", progress);
    });
    const success = (file3) => {
      if (state2.archived)
        return;
      processor.process(file3, {...metadata});
    };
    const error2 = console.error;
    onprocess(state2.file, success, error2);
    state2.activeProcessor = processor;
  };
  const requestProcessing = () => {
    state2.processingAborted = false;
    setStatus(ItemStatus.PROCESSING_QUEUED);
  };
  const abortProcessing = () => new Promise((resolve) => {
    if (!state2.activeProcessor) {
      state2.processingAborted = true;
      setStatus(ItemStatus.IDLE);
      fire("process-abort");
      resolve();
      return;
    }
    abortProcessingRequestComplete = () => {
      resolve();
    };
    state2.activeProcessor.abort();
  });
  const revert = (revertFileUpload, forceRevert) => new Promise((resolve, reject) => {
    const serverTransferId = state2.serverFileReference !== null ? state2.serverFileReference : state2.transferId;
    if (serverTransferId === null) {
      resolve();
      return;
    }
    revertFileUpload(serverTransferId, () => {
      state2.serverFileReference = null;
      state2.transferId = null;
      resolve();
    }, (error2) => {
      if (!forceRevert) {
        resolve();
        return;
      }
      setStatus(ItemStatus.PROCESSING_REVERT_ERROR);
      fire("process-revert-error");
      reject(error2);
    });
    setStatus(ItemStatus.IDLE);
    fire("process-revert");
  });
  const setMetadata = (key, value, silent) => {
    const keys = key.split(".");
    const root2 = keys[0];
    const last = keys.pop();
    let data3 = metadata;
    keys.forEach((key2) => data3 = data3[key2]);
    if (JSON.stringify(data3[last]) === JSON.stringify(value))
      return;
    data3[last] = value;
    fire("metadata-update", {
      key: root2,
      value: metadata[root2],
      silent
    });
  };
  const getMetadata = (key) => deepCloneObject(key ? metadata[key] : metadata);
  const api = {
    id: {get: () => id},
    origin: {get: () => origin, set: (value) => origin = value},
    serverId: {get: () => state2.serverFileReference},
    transferId: {get: () => state2.transferId},
    status: {get: () => state2.status},
    filename: {get: () => state2.file.name},
    filenameWithoutExtension: {get: () => getFilenameWithoutExtension(state2.file.name)},
    fileExtension: {get: getFileExtension},
    fileType: {get: getFileType},
    fileSize: {get: getFileSize},
    file: {get: getFile2},
    relativePath: {get: () => state2.file._relativePath},
    source: {get: () => state2.source},
    getMetadata,
    setMetadata: (key, value, silent) => {
      if (isObject(key)) {
        const data3 = key;
        Object.keys(data3).forEach((key2) => {
          setMetadata(key2, data3[key2], value);
        });
        return key;
      }
      setMetadata(key, value, silent);
      return value;
    },
    extend: (name2, handler) => itemAPI[name2] = handler,
    abortLoad,
    retryLoad,
    requestProcessing,
    abortProcessing,
    load,
    process,
    revert,
    ...on(),
    freeze: () => state2.frozen = true,
    release: () => state2.released = true,
    released: {get: () => state2.released},
    archive: () => state2.archived = true,
    archived: {get: () => state2.archived}
  };
  const itemAPI = createObject(api);
  return itemAPI;
};
var getItemIndexByQuery = (items, query) => {
  if (isEmpty(query)) {
    return 0;
  }
  if (!isString(query)) {
    return -1;
  }
  return items.findIndex((item2) => item2.id === query);
};
var getItemById = (items, itemId) => {
  const index = getItemIndexByQuery(items, itemId);
  if (index < 0) {
    return;
  }
  return items[index] || null;
};
var fetchBlob = (url, load, error2, progress, abort, headers) => {
  const request = sendRequest(null, url, {
    method: "GET",
    responseType: "blob"
  });
  request.onload = (xhr) => {
    const headers2 = xhr.getAllResponseHeaders();
    const filename = getFileInfoFromHeaders(headers2).name || getFilenameFromURL(url);
    load(createResponse("load", xhr.status, getFileFromBlob(xhr.response, filename), headers2));
  };
  request.onerror = (xhr) => {
    error2(createResponse("error", xhr.status, xhr.statusText, xhr.getAllResponseHeaders()));
  };
  request.onheaders = (xhr) => {
    headers(createResponse("headers", xhr.status, null, xhr.getAllResponseHeaders()));
  };
  request.ontimeout = createTimeoutResponse(error2);
  request.onprogress = progress;
  request.onabort = abort;
  return request;
};
var getDomainFromURL = (url) => {
  if (url.indexOf("//") === 0) {
    url = location.protocol + url;
  }
  return url.toLowerCase().replace("blob:", "").replace(/([a-z])?:\/\//, "$1").split("/")[0];
};
var isExternalURL = (url) => (url.indexOf(":") > -1 || url.indexOf("//") > -1) && getDomainFromURL(location.href) !== getDomainFromURL(url);
var dynamicLabel = (label) => (...params) => isFunction(label) ? label(...params) : label;
var isMockItem = (item2) => !isFile(item2.file);
var listUpdated = (dispatch2, state2) => {
  clearTimeout(state2.listUpdateTimeout);
  state2.listUpdateTimeout = setTimeout(() => {
    dispatch2("DID_UPDATE_ITEMS", {items: getActiveItems(state2.items)});
  }, 0);
};
var optionalPromise = (fn2, ...params) => new Promise((resolve) => {
  if (!fn2) {
    return resolve(true);
  }
  const result = fn2(...params);
  if (result == null) {
    return resolve(true);
  }
  if (typeof result === "boolean") {
    return resolve(result);
  }
  if (typeof result.then === "function") {
    result.then(resolve);
  }
});
var sortItems = (state2, compare) => {
  state2.items.sort((a2, b) => compare(createItemAPI(a2), createItemAPI(b)));
};
var getItemByQueryFromState = (state2, itemHandler) => ({
  query,
  success = () => {
  },
  failure = () => {
  },
  ...options
} = {}) => {
  const item2 = getItemByQuery(state2.items, query);
  if (!item2) {
    failure({
      error: createResponse("error", 0, "Item not found"),
      file: null
    });
    return;
  }
  itemHandler(item2, success, failure, options || {});
};
var actions = (dispatch2, query, state2) => ({
  ABORT_ALL: () => {
    getActiveItems(state2.items).forEach((item2) => {
      item2.freeze();
      item2.abortLoad();
      item2.abortProcessing();
    });
  },
  DID_SET_FILES: ({value = []}) => {
    const files = value.map((file2) => ({
      source: file2.source ? file2.source : file2,
      options: file2.options
    }));
    let activeItems = getActiveItems(state2.items);
    activeItems.forEach((item2) => {
      if (!files.find((file2) => file2.source === item2.source || file2.source === item2.file)) {
        dispatch2("REMOVE_ITEM", {query: item2, remove: false});
      }
    });
    activeItems = getActiveItems(state2.items);
    files.forEach((file2, index) => {
      if (activeItems.find((item2) => item2.source === file2.source || item2.file === file2.source))
        return;
      dispatch2("ADD_ITEM", {
        ...file2,
        interactionMethod: InteractionMethod.NONE,
        index
      });
    });
  },
  DID_UPDATE_ITEM_METADATA: ({id, action, change}) => {
    if (change.silent)
      return;
    clearTimeout(state2.itemUpdateTimeout);
    state2.itemUpdateTimeout = setTimeout(() => {
      const item2 = getItemById(state2.items, id);
      if (!query("IS_ASYNC")) {
        applyFilterChain("SHOULD_PREPARE_OUTPUT", false, {
          item: item2,
          query,
          action,
          change
        }).then((shouldPrepareOutput) => {
          const beforePrepareFile = query("GET_BEFORE_PREPARE_FILE");
          if (beforePrepareFile)
            shouldPrepareOutput = beforePrepareFile(item2, shouldPrepareOutput);
          if (!shouldPrepareOutput)
            return;
          dispatch2("REQUEST_PREPARE_OUTPUT", {
            query: id,
            item: item2,
            success: (file2) => {
              dispatch2("DID_PREPARE_OUTPUT", {id, file: file2});
            }
          }, true);
        });
        return;
      }
      if (item2.origin === FileOrigin.LOCAL) {
        dispatch2("DID_LOAD_ITEM", {
          id: item2.id,
          error: null,
          serverFileReference: item2.source
        });
      }
      const upload = () => {
        setTimeout(() => {
          dispatch2("REQUEST_ITEM_PROCESSING", {query: id});
        }, 32);
      };
      const revert = (doUpload) => {
        item2.revert(createRevertFunction(state2.options.server.url, state2.options.server.revert), query("GET_FORCE_REVERT")).then(doUpload ? upload : () => {
        }).catch(() => {
        });
      };
      const abort = (doUpload) => {
        item2.abortProcessing().then(doUpload ? upload : () => {
        });
      };
      if (item2.status === ItemStatus.PROCESSING_COMPLETE) {
        return revert(state2.options.instantUpload);
      }
      if (item2.status === ItemStatus.PROCESSING) {
        return abort(state2.options.instantUpload);
      }
      if (state2.options.instantUpload) {
        upload();
      }
    }, 0);
  },
  MOVE_ITEM: ({query: query2, index}) => {
    const item2 = getItemByQuery(state2.items, query2);
    if (!item2)
      return;
    const currentIndex = state2.items.indexOf(item2);
    index = limit(index, 0, state2.items.length - 1);
    if (currentIndex === index)
      return;
    state2.items.splice(index, 0, state2.items.splice(currentIndex, 1)[0]);
  },
  SORT: ({compare}) => {
    sortItems(state2, compare);
    dispatch2("DID_SORT_ITEMS", {
      items: query("GET_ACTIVE_ITEMS")
    });
  },
  ADD_ITEMS: ({items, index, interactionMethod, success = () => {
  }, failure = () => {
  }}) => {
    let currentIndex = index;
    if (index === -1 || typeof index === "undefined") {
      const insertLocation = query("GET_ITEM_INSERT_LOCATION");
      const totalItems = query("GET_TOTAL_ITEMS");
      currentIndex = insertLocation === "before" ? 0 : totalItems;
    }
    const ignoredFiles = query("GET_IGNORED_FILES");
    const isValidFile = (source) => isFile(source) ? !ignoredFiles.includes(source.name.toLowerCase()) : !isEmpty(source);
    const validItems = items.filter(isValidFile);
    const promises = validItems.map((source) => new Promise((resolve, reject) => {
      dispatch2("ADD_ITEM", {
        interactionMethod,
        source: source.source || source,
        success: resolve,
        failure: reject,
        index: currentIndex++,
        options: source.options || {}
      });
    }));
    Promise.all(promises).then(success).catch(failure);
  },
  ADD_ITEM: ({
    source,
    index = -1,
    interactionMethod,
    success = () => {
    },
    failure = () => {
    },
    options = {}
  }) => {
    if (isEmpty(source)) {
      failure({
        error: createResponse("error", 0, "No source"),
        file: null
      });
      return;
    }
    if (isFile(source) && state2.options.ignoredFiles.includes(source.name.toLowerCase())) {
      return;
    }
    if (!hasRoomForItem(state2)) {
      if (state2.options.allowMultiple || !state2.options.allowMultiple && !state2.options.allowReplace) {
        const error2 = createResponse("warning", 0, "Max files");
        dispatch2("DID_THROW_MAX_FILES", {
          source,
          error: error2
        });
        failure({error: error2, file: null});
        return;
      }
      const item3 = getActiveItems(state2.items)[0];
      if (item3.status === ItemStatus.PROCESSING_COMPLETE || item3.status === ItemStatus.PROCESSING_REVERT_ERROR) {
        const forceRevert = query("GET_FORCE_REVERT");
        item3.revert(createRevertFunction(state2.options.server.url, state2.options.server.revert), forceRevert).then(() => {
          if (!forceRevert)
            return;
          dispatch2("ADD_ITEM", {
            source,
            index,
            interactionMethod,
            success,
            failure,
            options
          });
        }).catch(() => {
        });
        if (forceRevert)
          return;
      }
      dispatch2("REMOVE_ITEM", {query: item3.id});
    }
    const origin = options.type === "local" ? FileOrigin.LOCAL : options.type === "limbo" ? FileOrigin.LIMBO : FileOrigin.INPUT;
    const item2 = createItem(origin, origin === FileOrigin.INPUT ? null : source, options.file);
    Object.keys(options.metadata || {}).forEach((key) => {
      item2.setMetadata(key, options.metadata[key]);
    });
    applyFilters("DID_CREATE_ITEM", item2, {query, dispatch: dispatch2});
    const itemInsertLocation = query("GET_ITEM_INSERT_LOCATION");
    if (!state2.options.itemInsertLocationFreedom) {
      index = itemInsertLocation === "before" ? -1 : state2.items.length;
    }
    insertItem(state2.items, item2, index);
    if (isFunction(itemInsertLocation) && source) {
      sortItems(state2, itemInsertLocation);
    }
    const id = item2.id;
    item2.on("init", () => {
      dispatch2("DID_INIT_ITEM", {id});
    });
    item2.on("load-init", () => {
      dispatch2("DID_START_ITEM_LOAD", {id});
    });
    item2.on("load-meta", () => {
      dispatch2("DID_UPDATE_ITEM_META", {id});
    });
    item2.on("load-progress", (progress) => {
      dispatch2("DID_UPDATE_ITEM_LOAD_PROGRESS", {id, progress});
    });
    item2.on("load-request-error", (error2) => {
      const mainStatus = dynamicLabel(state2.options.labelFileLoadError)(error2);
      if (error2.code >= 400 && error2.code < 500) {
        dispatch2("DID_THROW_ITEM_INVALID", {
          id,
          error: error2,
          status: {
            main: mainStatus,
            sub: `${error2.code} (${error2.body})`
          }
        });
        failure({error: error2, file: createItemAPI(item2)});
        return;
      }
      dispatch2("DID_THROW_ITEM_LOAD_ERROR", {
        id,
        error: error2,
        status: {
          main: mainStatus,
          sub: state2.options.labelTapToRetry
        }
      });
    });
    item2.on("load-file-error", (error2) => {
      dispatch2("DID_THROW_ITEM_INVALID", {
        id,
        error: error2.status,
        status: error2.status
      });
      failure({error: error2.status, file: createItemAPI(item2)});
    });
    item2.on("load-abort", () => {
      dispatch2("REMOVE_ITEM", {query: id});
    });
    item2.on("load-skip", () => {
      dispatch2("COMPLETE_LOAD_ITEM", {
        query: id,
        item: item2,
        data: {
          source,
          success
        }
      });
    });
    item2.on("load", () => {
      const handleAdd = (shouldAdd) => {
        if (!shouldAdd) {
          dispatch2("REMOVE_ITEM", {
            query: id
          });
          return;
        }
        item2.on("metadata-update", (change) => {
          dispatch2("DID_UPDATE_ITEM_METADATA", {id, change});
        });
        applyFilterChain("SHOULD_PREPARE_OUTPUT", false, {item: item2, query}).then((shouldPrepareOutput) => {
          const beforePrepareFile = query("GET_BEFORE_PREPARE_FILE");
          if (beforePrepareFile)
            shouldPrepareOutput = beforePrepareFile(item2, shouldPrepareOutput);
          const loadComplete = () => {
            dispatch2("COMPLETE_LOAD_ITEM", {
              query: id,
              item: item2,
              data: {
                source,
                success
              }
            });
            listUpdated(dispatch2, state2);
          };
          if (shouldPrepareOutput) {
            dispatch2("REQUEST_PREPARE_OUTPUT", {
              query: id,
              item: item2,
              success: (file2) => {
                dispatch2("DID_PREPARE_OUTPUT", {id, file: file2});
                loadComplete();
              }
            }, true);
            return;
          }
          loadComplete();
        });
      };
      applyFilterChain("DID_LOAD_ITEM", item2, {query, dispatch: dispatch2}).then(() => {
        optionalPromise(query("GET_BEFORE_ADD_FILE"), createItemAPI(item2)).then(handleAdd);
      }).catch((e2) => {
        if (!e2 || !e2.error || !e2.status)
          return handleAdd(false);
        dispatch2("DID_THROW_ITEM_INVALID", {
          id,
          error: e2.error,
          status: e2.status
        });
      });
    });
    item2.on("process-start", () => {
      dispatch2("DID_START_ITEM_PROCESSING", {id});
    });
    item2.on("process-progress", (progress) => {
      dispatch2("DID_UPDATE_ITEM_PROCESS_PROGRESS", {id, progress});
    });
    item2.on("process-error", (error2) => {
      dispatch2("DID_THROW_ITEM_PROCESSING_ERROR", {
        id,
        error: error2,
        status: {
          main: dynamicLabel(state2.options.labelFileProcessingError)(error2),
          sub: state2.options.labelTapToRetry
        }
      });
    });
    item2.on("process-revert-error", (error2) => {
      dispatch2("DID_THROW_ITEM_PROCESSING_REVERT_ERROR", {
        id,
        error: error2,
        status: {
          main: dynamicLabel(state2.options.labelFileProcessingRevertError)(error2),
          sub: state2.options.labelTapToRetry
        }
      });
    });
    item2.on("process-complete", (serverFileReference) => {
      dispatch2("DID_COMPLETE_ITEM_PROCESSING", {
        id,
        error: null,
        serverFileReference
      });
      dispatch2("DID_DEFINE_VALUE", {id, value: serverFileReference});
    });
    item2.on("process-abort", () => {
      dispatch2("DID_ABORT_ITEM_PROCESSING", {id});
    });
    item2.on("process-revert", () => {
      dispatch2("DID_REVERT_ITEM_PROCESSING", {id});
      dispatch2("DID_DEFINE_VALUE", {id, value: null});
    });
    dispatch2("DID_ADD_ITEM", {id, index, interactionMethod});
    listUpdated(dispatch2, state2);
    const {url, load, restore, fetch: fetch2} = state2.options.server || {};
    item2.load(source, createFileLoader(origin === FileOrigin.INPUT ? isString(source) && isExternalURL(source) ? fetch2 ? createFetchFunction(url, fetch2) : fetchBlob : fetchBlob : origin === FileOrigin.LIMBO ? createFetchFunction(url, restore) : createFetchFunction(url, load)), (file2, success2, error2) => {
      applyFilterChain("LOAD_FILE", file2, {query}).then(success2).catch(error2);
    });
  },
  REQUEST_PREPARE_OUTPUT: ({item: item2, success, failure = () => {
  }}) => {
    const err = {
      error: createResponse("error", 0, "Item not found"),
      file: null
    };
    if (item2.archived)
      return failure(err);
    applyFilterChain("PREPARE_OUTPUT", item2.file, {query, item: item2}).then((result) => {
      applyFilterChain("COMPLETE_PREPARE_OUTPUT", result, {query, item: item2}).then((result2) => {
        if (item2.archived)
          return failure(err);
        success(result2);
      });
    });
  },
  COMPLETE_LOAD_ITEM: ({item: item2, data: data3}) => {
    const {success, source} = data3;
    const itemInsertLocation = query("GET_ITEM_INSERT_LOCATION");
    if (isFunction(itemInsertLocation) && source) {
      sortItems(state2, itemInsertLocation);
    }
    dispatch2("DID_LOAD_ITEM", {
      id: item2.id,
      error: null,
      serverFileReference: item2.origin === FileOrigin.INPUT ? null : source
    });
    success(createItemAPI(item2));
    if (item2.origin === FileOrigin.LOCAL) {
      dispatch2("DID_LOAD_LOCAL_ITEM", {id: item2.id});
      return;
    }
    if (item2.origin === FileOrigin.LIMBO) {
      dispatch2("DID_COMPLETE_ITEM_PROCESSING", {
        id: item2.id,
        error: null,
        serverFileReference: source
      });
      dispatch2("DID_DEFINE_VALUE", {
        id: item2.id,
        value: item2.serverId || source
      });
      return;
    }
    if (query("IS_ASYNC") && state2.options.instantUpload) {
      dispatch2("REQUEST_ITEM_PROCESSING", {query: item2.id});
    }
  },
  RETRY_ITEM_LOAD: getItemByQueryFromState(state2, (item2) => {
    item2.retryLoad();
  }),
  REQUEST_ITEM_PREPARE: getItemByQueryFromState(state2, (item2, success, failure) => {
    dispatch2("REQUEST_PREPARE_OUTPUT", {
      query: item2.id,
      item: item2,
      success: (file2) => {
        dispatch2("DID_PREPARE_OUTPUT", {id: item2.id, file: file2});
        success({
          file: item2,
          output: file2
        });
      },
      failure
    }, true);
  }),
  REQUEST_ITEM_PROCESSING: getItemByQueryFromState(state2, (item2, success, failure) => {
    const itemCanBeQueuedForProcessing = item2.status === ItemStatus.IDLE || item2.status === ItemStatus.PROCESSING_ERROR;
    if (!itemCanBeQueuedForProcessing) {
      const processNow = () => dispatch2("REQUEST_ITEM_PROCESSING", {query: item2, success, failure});
      const process = () => document.hidden ? processNow() : setTimeout(processNow, 32);
      if (item2.status === ItemStatus.PROCESSING_COMPLETE || item2.status === ItemStatus.PROCESSING_REVERT_ERROR) {
        item2.revert(createRevertFunction(state2.options.server.url, state2.options.server.revert), query("GET_FORCE_REVERT")).then(process).catch(() => {
        });
      } else if (item2.status === ItemStatus.PROCESSING) {
        item2.abortProcessing().then(process);
      }
      return;
    }
    if (item2.status === ItemStatus.PROCESSING_QUEUED)
      return;
    item2.requestProcessing();
    dispatch2("DID_REQUEST_ITEM_PROCESSING", {id: item2.id});
    dispatch2("PROCESS_ITEM", {query: item2, success, failure}, true);
  }),
  PROCESS_ITEM: getItemByQueryFromState(state2, (item2, success, failure) => {
    const maxParallelUploads = query("GET_MAX_PARALLEL_UPLOADS");
    const totalCurrentUploads = query("GET_ITEMS_BY_STATUS", ItemStatus.PROCESSING).length;
    if (totalCurrentUploads === maxParallelUploads) {
      state2.processingQueue.push({
        id: item2.id,
        success,
        failure
      });
      return;
    }
    if (item2.status === ItemStatus.PROCESSING)
      return;
    const processNext = () => {
      const queueEntry = state2.processingQueue.shift();
      if (!queueEntry)
        return;
      const {id, success: success2, failure: failure2} = queueEntry;
      const itemReference = getItemByQuery(state2.items, id);
      if (!itemReference || itemReference.archived) {
        processNext();
        return;
      }
      dispatch2("PROCESS_ITEM", {query: id, success: success2, failure: failure2}, true);
    };
    item2.onOnce("process-complete", () => {
      success(createItemAPI(item2));
      processNext();
      const server = state2.options.server;
      const instantUpload = state2.options.instantUpload;
      if (instantUpload && item2.origin === FileOrigin.LOCAL && isFunction(server.remove)) {
        const noop = () => {
        };
        item2.origin = FileOrigin.LIMBO;
        state2.options.server.remove(item2.source, noop, noop);
      }
      const allItemsProcessed = query("GET_ITEMS_BY_STATUS", ItemStatus.PROCESSING_COMPLETE).length === state2.items.length;
      if (allItemsProcessed) {
        dispatch2("DID_COMPLETE_ITEM_PROCESSING_ALL");
      }
    });
    item2.onOnce("process-error", (error2) => {
      failure({error: error2, file: createItemAPI(item2)});
      processNext();
    });
    const options = state2.options;
    item2.process(createFileProcessor(createProcessorFunction(options.server.url, options.server.process, options.name, {
      chunkTransferId: item2.transferId,
      chunkServer: options.server.patch,
      chunkUploads: options.chunkUploads,
      chunkForce: options.chunkForce,
      chunkSize: options.chunkSize,
      chunkRetryDelays: options.chunkRetryDelays
    }), {
      allowMinimumUploadDuration: query("GET_ALLOW_MINIMUM_UPLOAD_DURATION")
    }), (file2, success2, error2) => {
      applyFilterChain("PREPARE_OUTPUT", file2, {query, item: item2}).then((file3) => {
        dispatch2("DID_PREPARE_OUTPUT", {id: item2.id, file: file3});
        success2(file3);
      }).catch(error2);
    });
  }),
  RETRY_ITEM_PROCESSING: getItemByQueryFromState(state2, (item2) => {
    dispatch2("REQUEST_ITEM_PROCESSING", {query: item2});
  }),
  REQUEST_REMOVE_ITEM: getItemByQueryFromState(state2, (item2) => {
    optionalPromise(query("GET_BEFORE_REMOVE_FILE"), createItemAPI(item2)).then((shouldRemove) => {
      if (!shouldRemove) {
        return;
      }
      dispatch2("REMOVE_ITEM", {query: item2});
    });
  }),
  RELEASE_ITEM: getItemByQueryFromState(state2, (item2) => {
    item2.release();
  }),
  REMOVE_ITEM: getItemByQueryFromState(state2, (item2, success, failure, options) => {
    const removeFromView = () => {
      const id = item2.id;
      getItemById(state2.items, id).archive();
      dispatch2("DID_REMOVE_ITEM", {error: null, id, item: item2});
      listUpdated(dispatch2, state2);
      success(createItemAPI(item2));
    };
    const server = state2.options.server;
    if (item2.origin === FileOrigin.LOCAL && server && isFunction(server.remove) && options.remove !== false) {
      dispatch2("DID_START_ITEM_REMOVE", {id: item2.id});
      server.remove(item2.source, () => removeFromView(), (status) => {
        dispatch2("DID_THROW_ITEM_REMOVE_ERROR", {
          id: item2.id,
          error: createResponse("error", 0, status, null),
          status: {
            main: dynamicLabel(state2.options.labelFileRemoveError)(status),
            sub: state2.options.labelTapToRetry
          }
        });
      });
    } else {
      if (options.revert && item2.origin !== FileOrigin.LOCAL && item2.serverId !== null || state2.options.chunkUploads && item2.file.size > state2.options.chunkSize || state2.options.chunkUploads && state2.options.chunkForce) {
        item2.revert(createRevertFunction(state2.options.server.url, state2.options.server.revert), query("GET_FORCE_REVERT"));
      }
      removeFromView();
    }
  }),
  ABORT_ITEM_LOAD: getItemByQueryFromState(state2, (item2) => {
    item2.abortLoad();
  }),
  ABORT_ITEM_PROCESSING: getItemByQueryFromState(state2, (item2) => {
    if (item2.serverId) {
      dispatch2("REVERT_ITEM_PROCESSING", {id: item2.id});
      return;
    }
    item2.abortProcessing().then(() => {
      const shouldRemove = state2.options.instantUpload;
      if (shouldRemove) {
        dispatch2("REMOVE_ITEM", {query: item2.id});
      }
    });
  }),
  REQUEST_REVERT_ITEM_PROCESSING: getItemByQueryFromState(state2, (item2) => {
    if (!state2.options.instantUpload) {
      dispatch2("REVERT_ITEM_PROCESSING", {query: item2});
      return;
    }
    const handleRevert2 = (shouldRevert) => {
      if (!shouldRevert)
        return;
      dispatch2("REVERT_ITEM_PROCESSING", {query: item2});
    };
    const fn2 = query("GET_BEFORE_REMOVE_FILE");
    if (!fn2) {
      return handleRevert2(true);
    }
    const requestRemoveResult = fn2(createItemAPI(item2));
    if (requestRemoveResult == null) {
      return handleRevert2(true);
    }
    if (typeof requestRemoveResult === "boolean") {
      return handleRevert2(requestRemoveResult);
    }
    if (typeof requestRemoveResult.then === "function") {
      requestRemoveResult.then(handleRevert2);
    }
  }),
  REVERT_ITEM_PROCESSING: getItemByQueryFromState(state2, (item2) => {
    item2.revert(createRevertFunction(state2.options.server.url, state2.options.server.revert), query("GET_FORCE_REVERT")).then(() => {
      const shouldRemove = state2.options.instantUpload || isMockItem(item2);
      if (shouldRemove) {
        dispatch2("REMOVE_ITEM", {query: item2.id});
      }
    }).catch(() => {
    });
  }),
  SET_OPTIONS: ({options}) => {
    const optionKeys = Object.keys(options);
    const prioritizedOptionKeys = PrioritizedOptions.filter((key) => optionKeys.includes(key));
    const orderedOptionKeys = [
      ...prioritizedOptionKeys,
      ...Object.keys(options).filter((key) => !prioritizedOptionKeys.includes(key))
    ];
    orderedOptionKeys.forEach((key) => {
      dispatch2(`SET_${fromCamels(key, "_").toUpperCase()}`, {
        value: options[key]
      });
    });
  }
});
var PrioritizedOptions = [
  "server"
];
var formatFilename = (name2) => name2;
var createElement$1 = (tagName) => {
  return document.createElement(tagName);
};
var text = (node, value) => {
  let textNode = node.childNodes[0];
  if (!textNode) {
    textNode = document.createTextNode(value);
    node.appendChild(textNode);
  } else if (value !== textNode.nodeValue) {
    textNode.nodeValue = value;
  }
};
var polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = (angleInDegrees % 360 - 90) * Math.PI / 180;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
};
var describeArc = (x, y, radius, startAngle, endAngle, arcSweep) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  return ["M", start.x, start.y, "A", radius, radius, 0, arcSweep, 0, end.x, end.y].join(" ");
};
var percentageArc = (x, y, radius, from, to) => {
  let arcSweep = 1;
  if (to > from && to - from <= 0.5) {
    arcSweep = 0;
  }
  if (from > to && from - to >= 0.5) {
    arcSweep = 0;
  }
  return describeArc(x, y, radius, Math.min(0.9999, from) * 360, Math.min(0.9999, to) * 360, arcSweep);
};
var create = ({root: root2, props}) => {
  props.spin = false;
  props.progress = 0;
  props.opacity = 0;
  const svg3 = createElement("svg");
  root2.ref.path = createElement("path", {
    "stroke-width": 2,
    "stroke-linecap": "round"
  });
  svg3.appendChild(root2.ref.path);
  root2.ref.svg = svg3;
  root2.appendChild(svg3);
};
var write = ({root: root2, props}) => {
  if (props.opacity === 0) {
    return;
  }
  if (props.align) {
    root2.element.dataset.align = props.align;
  }
  const ringStrokeWidth = parseInt(attr(root2.ref.path, "stroke-width"), 10);
  const size = root2.rect.element.width * 0.5;
  let ringFrom = 0;
  let ringTo = 0;
  if (props.spin) {
    ringFrom = 0;
    ringTo = 0.5;
  } else {
    ringFrom = 0;
    ringTo = props.progress;
  }
  const coordinates = percentageArc(size, size, size - ringStrokeWidth, ringFrom, ringTo);
  attr(root2.ref.path, "d", coordinates);
  attr(root2.ref.path, "stroke-opacity", props.spin || props.progress > 0 ? 1 : 0);
};
var progressIndicator = createView({
  tag: "div",
  name: "progress-indicator",
  ignoreRectUpdate: true,
  ignoreRect: true,
  create,
  write,
  mixins: {
    apis: ["progress", "spin", "align"],
    styles: ["opacity"],
    animations: {
      opacity: {type: "tween", duration: 500},
      progress: {
        type: "spring",
        stiffness: 0.95,
        damping: 0.65,
        mass: 10
      }
    }
  }
});
var create$1 = ({root: root2, props}) => {
  root2.element.innerHTML = (props.icon || "") + `<span>${props.label}</span>`;
  props.isDisabled = false;
};
var write$1 = ({root: root2, props}) => {
  const {isDisabled} = props;
  const shouldDisable = root2.query("GET_DISABLED") || props.opacity === 0;
  if (shouldDisable && !isDisabled) {
    props.isDisabled = true;
    attr(root2.element, "disabled", "disabled");
  } else if (!shouldDisable && isDisabled) {
    props.isDisabled = false;
    root2.element.removeAttribute("disabled");
  }
};
var fileActionButton = createView({
  tag: "button",
  attributes: {
    type: "button"
  },
  ignoreRect: true,
  ignoreRectUpdate: true,
  name: "file-action-button",
  mixins: {
    apis: ["label"],
    styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity"],
    animations: {
      scaleX: "spring",
      scaleY: "spring",
      translateX: "spring",
      translateY: "spring",
      opacity: {type: "tween", duration: 250}
    },
    listeners: true
  },
  create: create$1,
  write: write$1
});
var toNaturalFileSize = (bytes, decimalSeparator = ".", base = 1e3, options = {}) => {
  const {
    labelBytes = "bytes",
    labelKilobytes = "KB",
    labelMegabytes = "MB",
    labelGigabytes = "GB"
  } = options;
  bytes = Math.round(Math.abs(bytes));
  const KB = base;
  const MB = base * base;
  const GB = base * base * base;
  if (bytes < KB) {
    return `${bytes} ${labelBytes}`;
  }
  if (bytes < MB) {
    return `${Math.floor(bytes / KB)} ${labelKilobytes}`;
  }
  if (bytes < GB) {
    return `${removeDecimalsWhenZero(bytes / MB, 1, decimalSeparator)} ${labelMegabytes}`;
  }
  return `${removeDecimalsWhenZero(bytes / GB, 2, decimalSeparator)} ${labelGigabytes}`;
};
var removeDecimalsWhenZero = (value, decimalCount, separator) => {
  return value.toFixed(decimalCount).split(".").filter((part) => part !== "0").join(separator);
};
var create$2 = ({root: root2, props}) => {
  const fileName = createElement$1("span");
  fileName.className = "filepond--file-info-main";
  attr(fileName, "aria-hidden", "true");
  root2.appendChild(fileName);
  root2.ref.fileName = fileName;
  const fileSize = createElement$1("span");
  fileSize.className = "filepond--file-info-sub";
  root2.appendChild(fileSize);
  root2.ref.fileSize = fileSize;
  text(fileSize, root2.query("GET_LABEL_FILE_WAITING_FOR_SIZE"));
  text(fileName, formatFilename(root2.query("GET_ITEM_NAME", props.id)));
};
var updateFile = ({root: root2, props}) => {
  text(root2.ref.fileSize, toNaturalFileSize(root2.query("GET_ITEM_SIZE", props.id), ".", root2.query("GET_FILE_SIZE_BASE"), root2.query("GET_FILE_SIZE_LABELS", root2.query)));
  text(root2.ref.fileName, formatFilename(root2.query("GET_ITEM_NAME", props.id)));
};
var updateFileSizeOnError = ({root: root2, props}) => {
  if (isInt(root2.query("GET_ITEM_SIZE", props.id))) {
    updateFile({root: root2, props});
    return;
  }
  text(root2.ref.fileSize, root2.query("GET_LABEL_FILE_SIZE_NOT_AVAILABLE"));
};
var fileInfo = createView({
  name: "file-info",
  ignoreRect: true,
  ignoreRectUpdate: true,
  write: createRoute({
    DID_LOAD_ITEM: updateFile,
    DID_UPDATE_ITEM_META: updateFile,
    DID_THROW_ITEM_LOAD_ERROR: updateFileSizeOnError,
    DID_THROW_ITEM_INVALID: updateFileSizeOnError
  }),
  didCreateView: (root2) => {
    applyFilters("CREATE_VIEW", {...root2, view: root2});
  },
  create: create$2,
  mixins: {
    styles: ["translateX", "translateY"],
    animations: {
      translateX: "spring",
      translateY: "spring"
    }
  }
});
var toPercentage = (value) => Math.round(value * 100);
var create$3 = ({root: root2}) => {
  const main = createElement$1("span");
  main.className = "filepond--file-status-main";
  root2.appendChild(main);
  root2.ref.main = main;
  const sub = createElement$1("span");
  sub.className = "filepond--file-status-sub";
  root2.appendChild(sub);
  root2.ref.sub = sub;
  didSetItemLoadProgress({root: root2, action: {progress: null}});
};
var didSetItemLoadProgress = ({root: root2, action}) => {
  const title = action.progress === null ? root2.query("GET_LABEL_FILE_LOADING") : `${root2.query("GET_LABEL_FILE_LOADING")} ${toPercentage(action.progress)}%`;
  text(root2.ref.main, title);
  text(root2.ref.sub, root2.query("GET_LABEL_TAP_TO_CANCEL"));
};
var didSetItemProcessProgress = ({root: root2, action}) => {
  const title = action.progress === null ? root2.query("GET_LABEL_FILE_PROCESSING") : `${root2.query("GET_LABEL_FILE_PROCESSING")} ${toPercentage(action.progress)}%`;
  text(root2.ref.main, title);
  text(root2.ref.sub, root2.query("GET_LABEL_TAP_TO_CANCEL"));
};
var didRequestItemProcessing = ({root: root2}) => {
  text(root2.ref.main, root2.query("GET_LABEL_FILE_PROCESSING"));
  text(root2.ref.sub, root2.query("GET_LABEL_TAP_TO_CANCEL"));
};
var didAbortItemProcessing = ({root: root2}) => {
  text(root2.ref.main, root2.query("GET_LABEL_FILE_PROCESSING_ABORTED"));
  text(root2.ref.sub, root2.query("GET_LABEL_TAP_TO_RETRY"));
};
var didCompleteItemProcessing = ({root: root2}) => {
  text(root2.ref.main, root2.query("GET_LABEL_FILE_PROCESSING_COMPLETE"));
  text(root2.ref.sub, root2.query("GET_LABEL_TAP_TO_UNDO"));
};
var clear = ({root: root2}) => {
  text(root2.ref.main, "");
  text(root2.ref.sub, "");
};
var error = ({root: root2, action}) => {
  text(root2.ref.main, action.status.main);
  text(root2.ref.sub, action.status.sub);
};
var fileStatus = createView({
  name: "file-status",
  ignoreRect: true,
  ignoreRectUpdate: true,
  write: createRoute({
    DID_LOAD_ITEM: clear,
    DID_REVERT_ITEM_PROCESSING: clear,
    DID_REQUEST_ITEM_PROCESSING: didRequestItemProcessing,
    DID_ABORT_ITEM_PROCESSING: didAbortItemProcessing,
    DID_COMPLETE_ITEM_PROCESSING: didCompleteItemProcessing,
    DID_UPDATE_ITEM_PROCESS_PROGRESS: didSetItemProcessProgress,
    DID_UPDATE_ITEM_LOAD_PROGRESS: didSetItemLoadProgress,
    DID_THROW_ITEM_LOAD_ERROR: error,
    DID_THROW_ITEM_INVALID: error,
    DID_THROW_ITEM_PROCESSING_ERROR: error,
    DID_THROW_ITEM_PROCESSING_REVERT_ERROR: error,
    DID_THROW_ITEM_REMOVE_ERROR: error
  }),
  didCreateView: (root2) => {
    applyFilters("CREATE_VIEW", {...root2, view: root2});
  },
  create: create$3,
  mixins: {
    styles: ["translateX", "translateY", "opacity"],
    animations: {
      opacity: {type: "tween", duration: 250},
      translateX: "spring",
      translateY: "spring"
    }
  }
});
var Buttons = {
  AbortItemLoad: {
    label: "GET_LABEL_BUTTON_ABORT_ITEM_LOAD",
    action: "ABORT_ITEM_LOAD",
    className: "filepond--action-abort-item-load",
    align: "LOAD_INDICATOR_POSITION"
  },
  RetryItemLoad: {
    label: "GET_LABEL_BUTTON_RETRY_ITEM_LOAD",
    action: "RETRY_ITEM_LOAD",
    icon: "GET_ICON_RETRY",
    className: "filepond--action-retry-item-load",
    align: "BUTTON_PROCESS_ITEM_POSITION"
  },
  RemoveItem: {
    label: "GET_LABEL_BUTTON_REMOVE_ITEM",
    action: "REQUEST_REMOVE_ITEM",
    icon: "GET_ICON_REMOVE",
    className: "filepond--action-remove-item",
    align: "BUTTON_REMOVE_ITEM_POSITION"
  },
  ProcessItem: {
    label: "GET_LABEL_BUTTON_PROCESS_ITEM",
    action: "REQUEST_ITEM_PROCESSING",
    icon: "GET_ICON_PROCESS",
    className: "filepond--action-process-item",
    align: "BUTTON_PROCESS_ITEM_POSITION"
  },
  AbortItemProcessing: {
    label: "GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING",
    action: "ABORT_ITEM_PROCESSING",
    className: "filepond--action-abort-item-processing",
    align: "BUTTON_PROCESS_ITEM_POSITION"
  },
  RetryItemProcessing: {
    label: "GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING",
    action: "RETRY_ITEM_PROCESSING",
    icon: "GET_ICON_RETRY",
    className: "filepond--action-retry-item-processing",
    align: "BUTTON_PROCESS_ITEM_POSITION"
  },
  RevertItemProcessing: {
    label: "GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING",
    action: "REQUEST_REVERT_ITEM_PROCESSING",
    icon: "GET_ICON_UNDO",
    className: "filepond--action-revert-item-processing",
    align: "BUTTON_PROCESS_ITEM_POSITION"
  }
};
var ButtonKeys = [];
forin(Buttons, (key) => {
  ButtonKeys.push(key);
});
var calculateFileInfoOffset = (root2) => {
  if (getRemoveIndicatorAligment(root2) === "right")
    return 0;
  const buttonRect = root2.ref.buttonRemoveItem.rect.element;
  return buttonRect.hidden ? null : buttonRect.width + buttonRect.left;
};
var calculateButtonWidth = (root2) => {
  const buttonRect = root2.ref.buttonAbortItemLoad.rect.element;
  return buttonRect.width;
};
var calculateFileVerticalCenterOffset = (root2) => Math.floor(root2.ref.buttonRemoveItem.rect.element.height / 4);
var calculateFileHorizontalCenterOffset = (root2) => Math.floor(root2.ref.buttonRemoveItem.rect.element.left / 2);
var getLoadIndicatorAlignment = (root2) => root2.query("GET_STYLE_LOAD_INDICATOR_POSITION");
var getProcessIndicatorAlignment = (root2) => root2.query("GET_STYLE_PROGRESS_INDICATOR_POSITION");
var getRemoveIndicatorAligment = (root2) => root2.query("GET_STYLE_BUTTON_REMOVE_ITEM_POSITION");
var DefaultStyle = {
  buttonAbortItemLoad: {opacity: 0},
  buttonRetryItemLoad: {opacity: 0},
  buttonRemoveItem: {opacity: 0},
  buttonProcessItem: {opacity: 0},
  buttonAbortItemProcessing: {opacity: 0},
  buttonRetryItemProcessing: {opacity: 0},
  buttonRevertItemProcessing: {opacity: 0},
  loadProgressIndicator: {opacity: 0, align: getLoadIndicatorAlignment},
  processProgressIndicator: {opacity: 0, align: getProcessIndicatorAlignment},
  processingCompleteIndicator: {opacity: 0, scaleX: 0.75, scaleY: 0.75},
  info: {translateX: 0, translateY: 0, opacity: 0},
  status: {translateX: 0, translateY: 0, opacity: 0}
};
var IdleStyle = {
  buttonRemoveItem: {opacity: 1},
  buttonProcessItem: {opacity: 1},
  info: {translateX: calculateFileInfoOffset},
  status: {translateX: calculateFileInfoOffset}
};
var ProcessingStyle = {
  buttonAbortItemProcessing: {opacity: 1},
  processProgressIndicator: {opacity: 1},
  status: {opacity: 1}
};
var StyleMap = {
  DID_THROW_ITEM_INVALID: {
    buttonRemoveItem: {opacity: 1},
    info: {translateX: calculateFileInfoOffset},
    status: {translateX: calculateFileInfoOffset, opacity: 1}
  },
  DID_START_ITEM_LOAD: {
    buttonAbortItemLoad: {opacity: 1},
    loadProgressIndicator: {opacity: 1},
    status: {opacity: 1}
  },
  DID_THROW_ITEM_LOAD_ERROR: {
    buttonRetryItemLoad: {opacity: 1},
    buttonRemoveItem: {opacity: 1},
    info: {translateX: calculateFileInfoOffset},
    status: {opacity: 1}
  },
  DID_START_ITEM_REMOVE: {
    processProgressIndicator: {opacity: 1, align: getRemoveIndicatorAligment},
    info: {translateX: calculateFileInfoOffset},
    status: {opacity: 0}
  },
  DID_THROW_ITEM_REMOVE_ERROR: {
    processProgressIndicator: {opacity: 0, align: getRemoveIndicatorAligment},
    buttonRemoveItem: {opacity: 1},
    info: {translateX: calculateFileInfoOffset},
    status: {opacity: 1, translateX: calculateFileInfoOffset}
  },
  DID_LOAD_ITEM: IdleStyle,
  DID_LOAD_LOCAL_ITEM: {
    buttonRemoveItem: {opacity: 1},
    info: {translateX: calculateFileInfoOffset},
    status: {translateX: calculateFileInfoOffset}
  },
  DID_START_ITEM_PROCESSING: ProcessingStyle,
  DID_REQUEST_ITEM_PROCESSING: ProcessingStyle,
  DID_UPDATE_ITEM_PROCESS_PROGRESS: ProcessingStyle,
  DID_COMPLETE_ITEM_PROCESSING: {
    buttonRevertItemProcessing: {opacity: 1},
    info: {opacity: 1},
    status: {opacity: 1}
  },
  DID_THROW_ITEM_PROCESSING_ERROR: {
    buttonRemoveItem: {opacity: 1},
    buttonRetryItemProcessing: {opacity: 1},
    status: {opacity: 1},
    info: {translateX: calculateFileInfoOffset}
  },
  DID_THROW_ITEM_PROCESSING_REVERT_ERROR: {
    buttonRevertItemProcessing: {opacity: 1},
    status: {opacity: 1},
    info: {opacity: 1}
  },
  DID_ABORT_ITEM_PROCESSING: {
    buttonRemoveItem: {opacity: 1},
    buttonProcessItem: {opacity: 1},
    info: {translateX: calculateFileInfoOffset},
    status: {opacity: 1}
  },
  DID_REVERT_ITEM_PROCESSING: IdleStyle
};
var processingCompleteIndicatorView = createView({
  create: ({root: root2}) => {
    root2.element.innerHTML = root2.query("GET_ICON_DONE");
  },
  name: "processing-complete-indicator",
  ignoreRect: true,
  mixins: {
    styles: ["scaleX", "scaleY", "opacity"],
    animations: {
      scaleX: "spring",
      scaleY: "spring",
      opacity: {type: "tween", duration: 250}
    }
  }
});
var create$4 = ({root: root2, props}) => {
  const LocalButtons = Object.keys(Buttons).reduce((prev, curr) => {
    prev[curr] = {...Buttons[curr]};
    return prev;
  }, {});
  const {id} = props;
  const allowRevert = root2.query("GET_ALLOW_REVERT");
  const allowRemove = root2.query("GET_ALLOW_REMOVE");
  const allowProcess = root2.query("GET_ALLOW_PROCESS");
  const instantUpload = root2.query("GET_INSTANT_UPLOAD");
  const isAsync2 = root2.query("IS_ASYNC");
  const alignRemoveItemButton = root2.query("GET_STYLE_BUTTON_REMOVE_ITEM_ALIGN");
  let buttonFilter;
  if (isAsync2) {
    if (allowProcess && !allowRevert) {
      buttonFilter = (key) => !/RevertItemProcessing/.test(key);
    } else if (!allowProcess && allowRevert) {
      buttonFilter = (key) => !/ProcessItem|RetryItemProcessing|AbortItemProcessing/.test(key);
    } else if (!allowProcess && !allowRevert) {
      buttonFilter = (key) => !/Process/.test(key);
    }
  } else {
    buttonFilter = (key) => !/Process/.test(key);
  }
  const enabledButtons = buttonFilter ? ButtonKeys.filter(buttonFilter) : ButtonKeys.concat();
  if (instantUpload && allowRevert) {
    LocalButtons["RevertItemProcessing"].label = "GET_LABEL_BUTTON_REMOVE_ITEM";
    LocalButtons["RevertItemProcessing"].icon = "GET_ICON_REMOVE";
  }
  if (isAsync2 && !allowRevert) {
    const map2 = StyleMap["DID_COMPLETE_ITEM_PROCESSING"];
    map2.info.translateX = calculateFileHorizontalCenterOffset;
    map2.info.translateY = calculateFileVerticalCenterOffset;
    map2.status.translateY = calculateFileVerticalCenterOffset;
    map2.processingCompleteIndicator = {opacity: 1, scaleX: 1, scaleY: 1};
  }
  if (isAsync2 && !allowProcess) {
    [
      "DID_START_ITEM_PROCESSING",
      "DID_REQUEST_ITEM_PROCESSING",
      "DID_UPDATE_ITEM_PROCESS_PROGRESS",
      "DID_THROW_ITEM_PROCESSING_ERROR"
    ].forEach((key) => {
      StyleMap[key].status.translateY = calculateFileVerticalCenterOffset;
    });
    StyleMap["DID_THROW_ITEM_PROCESSING_ERROR"].status.translateX = calculateButtonWidth;
  }
  if (alignRemoveItemButton && allowRevert) {
    LocalButtons["RevertItemProcessing"].align = "BUTTON_REMOVE_ITEM_POSITION";
    const map2 = StyleMap["DID_COMPLETE_ITEM_PROCESSING"];
    map2.info.translateX = calculateFileInfoOffset;
    map2.status.translateY = calculateFileVerticalCenterOffset;
    map2.processingCompleteIndicator = {opacity: 1, scaleX: 1, scaleY: 1};
  }
  if (!allowRemove) {
    LocalButtons["RemoveItem"].disabled = true;
  }
  forin(LocalButtons, (key, definition) => {
    const buttonView = root2.createChildView(fileActionButton, {
      label: root2.query(definition.label),
      icon: root2.query(definition.icon),
      opacity: 0
    });
    if (enabledButtons.includes(key)) {
      root2.appendChildView(buttonView);
    }
    if (definition.disabled) {
      buttonView.element.setAttribute("disabled", "disabled");
      buttonView.element.setAttribute("hidden", "hidden");
    }
    buttonView.element.dataset.align = root2.query(`GET_STYLE_${definition.align}`);
    buttonView.element.classList.add(definition.className);
    buttonView.on("click", (e2) => {
      e2.stopPropagation();
      if (definition.disabled)
        return;
      root2.dispatch(definition.action, {query: id});
    });
    root2.ref[`button${key}`] = buttonView;
  });
  root2.ref.processingCompleteIndicator = root2.appendChildView(root2.createChildView(processingCompleteIndicatorView));
  root2.ref.processingCompleteIndicator.element.dataset.align = root2.query(`GET_STYLE_BUTTON_PROCESS_ITEM_POSITION`);
  root2.ref.info = root2.appendChildView(root2.createChildView(fileInfo, {id}));
  root2.ref.status = root2.appendChildView(root2.createChildView(fileStatus, {id}));
  const loadIndicatorView = root2.appendChildView(root2.createChildView(progressIndicator, {
    opacity: 0,
    align: root2.query(`GET_STYLE_LOAD_INDICATOR_POSITION`)
  }));
  loadIndicatorView.element.classList.add("filepond--load-indicator");
  root2.ref.loadProgressIndicator = loadIndicatorView;
  const progressIndicatorView = root2.appendChildView(root2.createChildView(progressIndicator, {
    opacity: 0,
    align: root2.query(`GET_STYLE_PROGRESS_INDICATOR_POSITION`)
  }));
  progressIndicatorView.element.classList.add("filepond--process-indicator");
  root2.ref.processProgressIndicator = progressIndicatorView;
  root2.ref.activeStyles = [];
};
var write$2 = ({root: root2, actions: actions2, props}) => {
  route({root: root2, actions: actions2, props});
  let action = actions2.concat().filter((action2) => /^DID_/.test(action2.type)).reverse().find((action2) => StyleMap[action2.type]);
  if (action) {
    root2.ref.activeStyles = [];
    const stylesToApply = StyleMap[action.type];
    forin(DefaultStyle, (name2, defaultStyles) => {
      const control = root2.ref[name2];
      forin(defaultStyles, (key, defaultValue) => {
        const value = stylesToApply[name2] && typeof stylesToApply[name2][key] !== "undefined" ? stylesToApply[name2][key] : defaultValue;
        root2.ref.activeStyles.push({control, key, value});
      });
    });
  }
  root2.ref.activeStyles.forEach(({control, key, value}) => {
    control[key] = typeof value === "function" ? value(root2) : value;
  });
};
var route = createRoute({
  DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING: ({root: root2, action}) => {
    root2.ref.buttonAbortItemProcessing.label = action.value;
  },
  DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD: ({root: root2, action}) => {
    root2.ref.buttonAbortItemLoad.label = action.value;
  },
  DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL: ({root: root2, action}) => {
    root2.ref.buttonAbortItemRemoval.label = action.value;
  },
  DID_REQUEST_ITEM_PROCESSING: ({root: root2}) => {
    root2.ref.processProgressIndicator.spin = true;
    root2.ref.processProgressIndicator.progress = 0;
  },
  DID_START_ITEM_LOAD: ({root: root2}) => {
    root2.ref.loadProgressIndicator.spin = true;
    root2.ref.loadProgressIndicator.progress = 0;
  },
  DID_START_ITEM_REMOVE: ({root: root2}) => {
    root2.ref.processProgressIndicator.spin = true;
    root2.ref.processProgressIndicator.progress = 0;
  },
  DID_UPDATE_ITEM_LOAD_PROGRESS: ({root: root2, action}) => {
    root2.ref.loadProgressIndicator.spin = false;
    root2.ref.loadProgressIndicator.progress = action.progress;
  },
  DID_UPDATE_ITEM_PROCESS_PROGRESS: ({root: root2, action}) => {
    root2.ref.processProgressIndicator.spin = false;
    root2.ref.processProgressIndicator.progress = action.progress;
  }
});
var file = createView({
  create: create$4,
  write: write$2,
  didCreateView: (root2) => {
    applyFilters("CREATE_VIEW", {...root2, view: root2});
  },
  name: "file"
});
var create$5 = ({root: root2, props}) => {
  root2.ref.fileName = createElement$1("legend");
  root2.appendChild(root2.ref.fileName);
  root2.ref.file = root2.appendChildView(root2.createChildView(file, {id: props.id}));
  root2.ref.data = false;
};
var didLoadItem = ({root: root2, props}) => {
  text(root2.ref.fileName, formatFilename(root2.query("GET_ITEM_NAME", props.id)));
};
var fileWrapper = createView({
  create: create$5,
  ignoreRect: true,
  write: createRoute({
    DID_LOAD_ITEM: didLoadItem
  }),
  didCreateView: (root2) => {
    applyFilters("CREATE_VIEW", {...root2, view: root2});
  },
  tag: "fieldset",
  name: "file-wrapper"
});
var PANEL_SPRING_PROPS = {type: "spring", damping: 0.6, mass: 7};
var create$6 = ({root: root2, props}) => {
  [
    {
      name: "top"
    },
    {
      name: "center",
      props: {
        translateY: null,
        scaleY: null
      },
      mixins: {
        animations: {
          scaleY: PANEL_SPRING_PROPS
        },
        styles: ["translateY", "scaleY"]
      }
    },
    {
      name: "bottom",
      props: {
        translateY: null
      },
      mixins: {
        animations: {
          translateY: PANEL_SPRING_PROPS
        },
        styles: ["translateY"]
      }
    }
  ].forEach((section) => {
    createSection(root2, section, props.name);
  });
  root2.element.classList.add(`filepond--${props.name}`);
  root2.ref.scalable = null;
};
var createSection = (root2, section, className) => {
  const viewConstructor = createView({
    name: `panel-${section.name} filepond--${className}`,
    mixins: section.mixins,
    ignoreRectUpdate: true
  });
  const view = root2.createChildView(viewConstructor, section.props);
  root2.ref[section.name] = root2.appendChildView(view);
};
var write$3 = ({root: root2, props}) => {
  if (root2.ref.scalable === null || props.scalable !== root2.ref.scalable) {
    root2.ref.scalable = isBoolean(props.scalable) ? props.scalable : true;
    root2.element.dataset.scalable = root2.ref.scalable;
  }
  if (!props.height)
    return;
  const topRect = root2.ref.top.rect.element;
  const bottomRect = root2.ref.bottom.rect.element;
  const height = Math.max(topRect.height + bottomRect.height, props.height);
  root2.ref.center.translateY = topRect.height;
  root2.ref.center.scaleY = (height - topRect.height - bottomRect.height) / 100;
  root2.ref.bottom.translateY = height - bottomRect.height;
};
var panel = createView({
  name: "panel",
  read: ({root: root2, props}) => props.heightCurrent = root2.ref.bottom.translateY,
  write: write$3,
  create: create$6,
  ignoreRect: true,
  mixins: {
    apis: ["height", "heightCurrent", "scalable"]
  }
});
var createDragHelper = (items) => {
  const itemIds = items.map((item2) => item2.id);
  let prevIndex = void 0;
  return {
    setIndex: (index) => {
      prevIndex = index;
    },
    getIndex: () => prevIndex,
    getItemIndex: (item2) => itemIds.indexOf(item2.id)
  };
};
var ITEM_TRANSLATE_SPRING = {
  type: "spring",
  stiffness: 0.75,
  damping: 0.45,
  mass: 10
};
var ITEM_SCALE_SPRING = "spring";
var StateMap = {
  DID_START_ITEM_LOAD: "busy",
  DID_UPDATE_ITEM_LOAD_PROGRESS: "loading",
  DID_THROW_ITEM_INVALID: "load-invalid",
  DID_THROW_ITEM_LOAD_ERROR: "load-error",
  DID_LOAD_ITEM: "idle",
  DID_THROW_ITEM_REMOVE_ERROR: "remove-error",
  DID_START_ITEM_REMOVE: "busy",
  DID_START_ITEM_PROCESSING: "busy processing",
  DID_REQUEST_ITEM_PROCESSING: "busy processing",
  DID_UPDATE_ITEM_PROCESS_PROGRESS: "processing",
  DID_COMPLETE_ITEM_PROCESSING: "processing-complete",
  DID_THROW_ITEM_PROCESSING_ERROR: "processing-error",
  DID_THROW_ITEM_PROCESSING_REVERT_ERROR: "processing-revert-error",
  DID_ABORT_ITEM_PROCESSING: "cancelled",
  DID_REVERT_ITEM_PROCESSING: "idle"
};
var create$7 = ({root: root2, props}) => {
  root2.ref.handleClick = (e2) => root2.dispatch("DID_ACTIVATE_ITEM", {id: props.id});
  root2.element.id = `filepond--item-${props.id}`;
  root2.element.addEventListener("click", root2.ref.handleClick);
  root2.ref.container = root2.appendChildView(root2.createChildView(fileWrapper, {id: props.id}));
  root2.ref.panel = root2.appendChildView(root2.createChildView(panel, {name: "item-panel"}));
  root2.ref.panel.height = null;
  props.markedForRemoval = false;
  if (!root2.query("GET_ALLOW_REORDER"))
    return;
  root2.element.dataset.dragState = "idle";
  const grab = (e2) => {
    if (!e2.isPrimary)
      return;
    let removedActivateListener = false;
    const origin = {
      x: e2.pageX,
      y: e2.pageY
    };
    props.dragOrigin = {
      x: root2.translateX,
      y: root2.translateY
    };
    props.dragCenter = {
      x: e2.offsetX,
      y: e2.offsetY
    };
    const dragState = createDragHelper(root2.query("GET_ACTIVE_ITEMS"));
    root2.dispatch("DID_GRAB_ITEM", {id: props.id, dragState});
    const drag = (e3) => {
      if (!e3.isPrimary)
        return;
      e3.stopPropagation();
      e3.preventDefault();
      props.dragOffset = {
        x: e3.pageX - origin.x,
        y: e3.pageY - origin.y
      };
      const dist = props.dragOffset.x * props.dragOffset.x + props.dragOffset.y * props.dragOffset.y;
      if (dist > 16 && !removedActivateListener) {
        removedActivateListener = true;
        root2.element.removeEventListener("click", root2.ref.handleClick);
      }
      root2.dispatch("DID_DRAG_ITEM", {id: props.id, dragState});
    };
    const drop2 = (e3) => {
      if (!e3.isPrimary)
        return;
      document.removeEventListener("pointermove", drag);
      document.removeEventListener("pointerup", drop2);
      props.dragOffset = {
        x: e3.pageX - origin.x,
        y: e3.pageY - origin.y
      };
      root2.dispatch("DID_DROP_ITEM", {id: props.id, dragState});
      if (removedActivateListener) {
        setTimeout(() => root2.element.addEventListener("click", root2.ref.handleClick), 0);
      }
    };
    document.addEventListener("pointermove", drag);
    document.addEventListener("pointerup", drop2);
  };
  root2.element.addEventListener("pointerdown", grab);
};
var route$1 = createRoute({
  DID_UPDATE_PANEL_HEIGHT: ({root: root2, action}) => {
    root2.height = action.height;
  }
});
var write$4 = createRoute({
  DID_GRAB_ITEM: ({root: root2, props}) => {
    props.dragOrigin = {
      x: root2.translateX,
      y: root2.translateY
    };
  },
  DID_DRAG_ITEM: ({root: root2}) => {
    root2.element.dataset.dragState = "drag";
  },
  DID_DROP_ITEM: ({root: root2, props}) => {
    props.dragOffset = null;
    props.dragOrigin = null;
    root2.element.dataset.dragState = "drop";
  }
}, ({root: root2, actions: actions2, props, shouldOptimize}) => {
  if (root2.element.dataset.dragState === "drop") {
    if (root2.scaleX <= 1) {
      root2.element.dataset.dragState = "idle";
    }
  }
  let action = actions2.concat().filter((action2) => /^DID_/.test(action2.type)).reverse().find((action2) => StateMap[action2.type]);
  if (action && action.type !== props.currentState) {
    props.currentState = action.type;
    root2.element.dataset.filepondItemState = StateMap[props.currentState] || "";
  }
  const aspectRatio = root2.query("GET_ITEM_PANEL_ASPECT_RATIO") || root2.query("GET_PANEL_ASPECT_RATIO");
  if (!aspectRatio) {
    route$1({root: root2, actions: actions2, props});
    if (!root2.height && root2.ref.container.rect.element.height > 0) {
      root2.height = root2.ref.container.rect.element.height;
    }
  } else if (!shouldOptimize) {
    root2.height = root2.rect.element.width * aspectRatio;
  }
  if (shouldOptimize) {
    root2.ref.panel.height = null;
  }
  root2.ref.panel.height = root2.height;
});
var item = createView({
  create: create$7,
  write: write$4,
  destroy: ({root: root2, props}) => {
    root2.element.removeEventListener("click", root2.ref.handleClick);
    root2.dispatch("RELEASE_ITEM", {query: props.id});
  },
  tag: "li",
  name: "item",
  mixins: {
    apis: [
      "id",
      "interactionMethod",
      "markedForRemoval",
      "spawnDate",
      "dragCenter",
      "dragOrigin",
      "dragOffset"
    ],
    styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity", "height"],
    animations: {
      scaleX: ITEM_SCALE_SPRING,
      scaleY: ITEM_SCALE_SPRING,
      translateX: ITEM_TRANSLATE_SPRING,
      translateY: ITEM_TRANSLATE_SPRING,
      opacity: {type: "tween", duration: 150}
    }
  }
});
var getItemsPerRow = (horizontalSpace, itemWidth) => {
  return Math.max(1, Math.floor((horizontalSpace + 1) / itemWidth));
};
var getItemIndexByPosition = (view, children, positionInView) => {
  if (!positionInView)
    return;
  const horizontalSpace = view.rect.element.width;
  const l = children.length;
  let last = null;
  if (l === 0 || positionInView.top < children[0].rect.element.top)
    return -1;
  const item2 = children[0];
  const itemRect = item2.rect.element;
  const itemHorizontalMargin = itemRect.marginLeft + itemRect.marginRight;
  const itemWidth = itemRect.width + itemHorizontalMargin;
  const itemsPerRow = getItemsPerRow(horizontalSpace, itemWidth);
  if (itemsPerRow === 1) {
    for (let index = 0; index < l; index++) {
      const child = children[index];
      const childMid = child.rect.outer.top + child.rect.element.height * 0.5;
      if (positionInView.top < childMid) {
        return index;
      }
    }
    return l;
  }
  const itemVerticalMargin = itemRect.marginTop + itemRect.marginBottom;
  const itemHeight = itemRect.height + itemVerticalMargin;
  for (let index = 0; index < l; index++) {
    const indexX = index % itemsPerRow;
    const indexY = Math.floor(index / itemsPerRow);
    const offsetX = indexX * itemWidth;
    const offsetY = indexY * itemHeight;
    const itemTop = offsetY - itemRect.marginTop;
    const itemRight = offsetX + itemWidth;
    const itemBottom = offsetY + itemHeight + itemRect.marginBottom;
    if (positionInView.top < itemBottom && positionInView.top > itemTop) {
      if (positionInView.left < itemRight) {
        return index;
      } else if (index !== l - 1) {
        last = index;
      } else {
        last = null;
      }
    }
  }
  if (last !== null) {
    return last;
  }
  return l;
};
var dropAreaDimensions = {
  height: 0,
  width: 0,
  get getHeight() {
    return this.height;
  },
  set setHeight(val) {
    if (this.height === 0 || val === 0)
      this.height = val;
  },
  get getWidth() {
    return this.width;
  },
  set setWidth(val) {
    if (this.width === 0 || val === 0)
      this.width = val;
  },
  setDimensions: function(height, width) {
    if (this.height === 0 || height === 0)
      this.height = height;
    if (this.width === 0 || width === 0)
      this.width = width;
  }
};
var create$8 = ({root: root2}) => {
  attr(root2.element, "role", "list");
  root2.ref.lastItemSpanwDate = Date.now();
};
var addItemView = ({root: root2, action}) => {
  const {id, index, interactionMethod} = action;
  root2.ref.addIndex = index;
  const now = Date.now();
  let spawnDate = now;
  let opacity = 1;
  if (interactionMethod !== InteractionMethod.NONE) {
    opacity = 0;
    const cooldown = root2.query("GET_ITEM_INSERT_INTERVAL");
    const dist = now - root2.ref.lastItemSpanwDate;
    spawnDate = dist < cooldown ? now + (cooldown - dist) : now;
  }
  root2.ref.lastItemSpanwDate = spawnDate;
  root2.appendChildView(root2.createChildView(item, {
    spawnDate,
    id,
    opacity,
    interactionMethod
  }), index);
};
var moveItem = (item2, x, y, vx = 0, vy = 1) => {
  if (item2.dragOffset) {
    item2.translateX = null;
    item2.translateY = null;
    item2.translateX = item2.dragOrigin.x + item2.dragOffset.x;
    item2.translateY = item2.dragOrigin.y + item2.dragOffset.y;
    item2.scaleX = 1.025;
    item2.scaleY = 1.025;
  } else {
    item2.translateX = x;
    item2.translateY = y;
    if (Date.now() > item2.spawnDate) {
      if (item2.opacity === 0) {
        introItemView(item2, x, y, vx, vy);
      }
      item2.scaleX = 1;
      item2.scaleY = 1;
      item2.opacity = 1;
    }
  }
};
var introItemView = (item2, x, y, vx, vy) => {
  if (item2.interactionMethod === InteractionMethod.NONE) {
    item2.translateX = null;
    item2.translateX = x;
    item2.translateY = null;
    item2.translateY = y;
  } else if (item2.interactionMethod === InteractionMethod.DROP) {
    item2.translateX = null;
    item2.translateX = x - vx * 20;
    item2.translateY = null;
    item2.translateY = y - vy * 10;
    item2.scaleX = 0.8;
    item2.scaleY = 0.8;
  } else if (item2.interactionMethod === InteractionMethod.BROWSE) {
    item2.translateY = null;
    item2.translateY = y - 30;
  } else if (item2.interactionMethod === InteractionMethod.API) {
    item2.translateX = null;
    item2.translateX = x - 30;
    item2.translateY = null;
  }
};
var removeItemView = ({root: root2, action}) => {
  const {id} = action;
  const view = root2.childViews.find((child) => child.id === id);
  if (!view) {
    return;
  }
  view.scaleX = 0.9;
  view.scaleY = 0.9;
  view.opacity = 0;
  view.markedForRemoval = true;
};
var getItemHeight = (child) => child.rect.element.height + child.rect.element.marginBottom * 0.5 + child.rect.element.marginTop * 0.5;
var getItemWidth = (child) => child.rect.element.width + child.rect.element.marginLeft * 0.5 + child.rect.element.marginRight * 0.5;
var dragItem = ({root: root2, action}) => {
  const {id, dragState} = action;
  const item2 = root2.query("GET_ITEM", {id});
  const view = root2.childViews.find((child) => child.id === id);
  const numItems = root2.childViews.length;
  const oldIndex = dragState.getItemIndex(item2);
  if (!view)
    return;
  const dragPosition = {
    x: view.dragOrigin.x + view.dragOffset.x + view.dragCenter.x,
    y: view.dragOrigin.y + view.dragOffset.y + view.dragCenter.y
  };
  const dragHeight = getItemHeight(view);
  const dragWidth = getItemWidth(view);
  let cols = Math.floor(root2.rect.outer.width / dragWidth);
  if (cols > numItems)
    cols = numItems;
  const rows = Math.floor(numItems / cols + 1);
  dropAreaDimensions.setHeight = dragHeight * rows;
  dropAreaDimensions.setWidth = dragWidth * cols;
  var location2 = {
    y: Math.floor(dragPosition.y / dragHeight),
    x: Math.floor(dragPosition.x / dragWidth),
    getGridIndex: function getGridIndex() {
      if (dragPosition.y > dropAreaDimensions.getHeight || dragPosition.y < 0 || dragPosition.x > dropAreaDimensions.getWidth || dragPosition.x < 0)
        return oldIndex;
      return this.y * cols + this.x;
    },
    getColIndex: function getColIndex() {
      const items = root2.query("GET_ACTIVE_ITEMS");
      const visibleChildren = root2.childViews.filter((child) => child.rect.element.height);
      const children = items.map((item3) => visibleChildren.find((childView) => childView.id === item3.id));
      const currentIndex2 = children.findIndex((child) => child === view);
      const dragHeight2 = getItemHeight(view);
      const l = children.length;
      let idx = l;
      let childHeight = 0;
      let childBottom = 0;
      let childTop = 0;
      for (let i = 0; i < l; i++) {
        childHeight = getItemHeight(children[i]);
        childTop = childBottom;
        childBottom = childTop + childHeight;
        if (dragPosition.y < childBottom) {
          if (currentIndex2 > i) {
            if (dragPosition.y < childTop + dragHeight2) {
              idx = i;
              break;
            }
            continue;
          }
          idx = i;
          break;
        }
      }
      return idx;
    }
  };
  const index = cols > 1 ? location2.getGridIndex() : location2.getColIndex();
  root2.dispatch("MOVE_ITEM", {query: view, index});
  const currentIndex = dragState.getIndex();
  if (currentIndex === void 0 || currentIndex !== index) {
    dragState.setIndex(index);
    if (currentIndex === void 0)
      return;
    root2.dispatch("DID_REORDER_ITEMS", {
      items: root2.query("GET_ACTIVE_ITEMS"),
      origin: oldIndex,
      target: index
    });
  }
};
var route$2 = createRoute({
  DID_ADD_ITEM: addItemView,
  DID_REMOVE_ITEM: removeItemView,
  DID_DRAG_ITEM: dragItem
});
var write$5 = ({root: root2, props, actions: actions2, shouldOptimize}) => {
  route$2({root: root2, props, actions: actions2});
  const {dragCoordinates} = props;
  const horizontalSpace = root2.rect.element.width;
  const visibleChildren = root2.childViews.filter((child) => child.rect.element.height);
  const children = root2.query("GET_ACTIVE_ITEMS").map((item2) => visibleChildren.find((child) => child.id === item2.id)).filter((item2) => item2);
  const dragIndex = dragCoordinates ? getItemIndexByPosition(root2, children, dragCoordinates) : null;
  const addIndex = root2.ref.addIndex || null;
  root2.ref.addIndex = null;
  let dragIndexOffset = 0;
  let removeIndexOffset = 0;
  let addIndexOffset = 0;
  if (children.length === 0)
    return;
  const childRect = children[0].rect.element;
  const itemVerticalMargin = childRect.marginTop + childRect.marginBottom;
  const itemHorizontalMargin = childRect.marginLeft + childRect.marginRight;
  const itemWidth = childRect.width + itemHorizontalMargin;
  const itemHeight = childRect.height + itemVerticalMargin;
  const itemsPerRow = getItemsPerRow(horizontalSpace, itemWidth);
  if (itemsPerRow === 1) {
    let offsetY = 0;
    let dragOffset = 0;
    children.forEach((child, index) => {
      if (dragIndex) {
        let dist = index - dragIndex;
        if (dist === -2) {
          dragOffset = -itemVerticalMargin * 0.25;
        } else if (dist === -1) {
          dragOffset = -itemVerticalMargin * 0.75;
        } else if (dist === 0) {
          dragOffset = itemVerticalMargin * 0.75;
        } else if (dist === 1) {
          dragOffset = itemVerticalMargin * 0.25;
        } else {
          dragOffset = 0;
        }
      }
      if (shouldOptimize) {
        child.translateX = null;
        child.translateY = null;
      }
      if (!child.markedForRemoval) {
        moveItem(child, 0, offsetY + dragOffset);
      }
      let itemHeight2 = child.rect.element.height + itemVerticalMargin;
      let visualHeight = itemHeight2 * (child.markedForRemoval ? child.opacity : 1);
      offsetY += visualHeight;
    });
  } else {
    let prevX = 0;
    let prevY = 0;
    children.forEach((child, index) => {
      if (index === dragIndex) {
        dragIndexOffset = 1;
      }
      if (index === addIndex) {
        addIndexOffset += 1;
      }
      if (child.markedForRemoval && child.opacity < 0.5) {
        removeIndexOffset -= 1;
      }
      const visualIndex = index + addIndexOffset + dragIndexOffset + removeIndexOffset;
      const indexX = visualIndex % itemsPerRow;
      const indexY = Math.floor(visualIndex / itemsPerRow);
      const offsetX = indexX * itemWidth;
      const offsetY = indexY * itemHeight;
      const vectorX = Math.sign(offsetX - prevX);
      const vectorY = Math.sign(offsetY - prevY);
      prevX = offsetX;
      prevY = offsetY;
      if (child.markedForRemoval)
        return;
      if (shouldOptimize) {
        child.translateX = null;
        child.translateY = null;
      }
      moveItem(child, offsetX, offsetY, vectorX, vectorY);
    });
  }
};
var filterSetItemActions = (child, actions2) => actions2.filter((action) => {
  if (action.data && action.data.id) {
    return child.id === action.data.id;
  }
  return true;
});
var list = createView({
  create: create$8,
  write: write$5,
  tag: "ul",
  name: "list",
  didWriteView: ({root: root2}) => {
    root2.childViews.filter((view) => view.markedForRemoval && view.opacity === 0 && view.resting).forEach((view) => {
      view._destroy();
      root2.removeChildView(view);
    });
  },
  filterFrameActionsForChild: filterSetItemActions,
  mixins: {
    apis: ["dragCoordinates"]
  }
});
var create$9 = ({root: root2, props}) => {
  root2.ref.list = root2.appendChildView(root2.createChildView(list));
  props.dragCoordinates = null;
  props.overflowing = false;
};
var storeDragCoordinates = ({root: root2, props, action}) => {
  if (!root2.query("GET_ITEM_INSERT_LOCATION_FREEDOM"))
    return;
  props.dragCoordinates = {
    left: action.position.scopeLeft - root2.ref.list.rect.element.left,
    top: action.position.scopeTop - (root2.rect.outer.top + root2.rect.element.marginTop + root2.rect.element.scrollTop)
  };
};
var clearDragCoordinates = ({props}) => {
  props.dragCoordinates = null;
};
var route$3 = createRoute({
  DID_DRAG: storeDragCoordinates,
  DID_END_DRAG: clearDragCoordinates
});
var write$6 = ({root: root2, props, actions: actions2}) => {
  route$3({root: root2, props, actions: actions2});
  root2.ref.list.dragCoordinates = props.dragCoordinates;
  if (props.overflowing && !props.overflow) {
    props.overflowing = false;
    root2.element.dataset.state = "";
    root2.height = null;
  }
  if (props.overflow) {
    const newHeight = Math.round(props.overflow);
    if (newHeight !== root2.height) {
      props.overflowing = true;
      root2.element.dataset.state = "overflow";
      root2.height = newHeight;
    }
  }
};
var listScroller = createView({
  create: create$9,
  write: write$6,
  name: "list-scroller",
  mixins: {
    apis: ["overflow", "dragCoordinates"],
    styles: ["height", "translateY"],
    animations: {
      translateY: "spring"
    }
  }
});
var attrToggle = (element, name2, state2, enabledValue = "") => {
  if (state2) {
    attr(element, name2, enabledValue);
  } else {
    element.removeAttribute(name2);
  }
};
var resetFileInput = (input) => {
  if (!input || input.value === "") {
    return;
  }
  try {
    input.value = "";
  } catch (err) {
  }
  if (input.value) {
    const form = createElement$1("form");
    const parentNode = input.parentNode;
    const ref = input.nextSibling;
    form.appendChild(input);
    form.reset();
    if (ref) {
      parentNode.insertBefore(input, ref);
    } else {
      parentNode.appendChild(input);
    }
  }
};
var create$a = ({root: root2, props}) => {
  root2.element.id = `filepond--browser-${props.id}`;
  attr(root2.element, "name", root2.query("GET_NAME"));
  attr(root2.element, "aria-controls", `filepond--assistant-${props.id}`);
  attr(root2.element, "aria-labelledby", `filepond--drop-label-${props.id}`);
  setAcceptedFileTypes({root: root2, action: {value: root2.query("GET_ACCEPTED_FILE_TYPES")}});
  toggleAllowMultiple({root: root2, action: {value: root2.query("GET_ALLOW_MULTIPLE")}});
  toggleDirectoryFilter({root: root2, action: {value: root2.query("GET_ALLOW_DIRECTORIES_ONLY")}});
  toggleDisabled({root: root2});
  toggleRequired({root: root2, action: {value: root2.query("GET_REQUIRED")}});
  setCaptureMethod({root: root2, action: {value: root2.query("GET_CAPTURE_METHOD")}});
  root2.ref.handleChange = (e2) => {
    if (!root2.element.value) {
      return;
    }
    const files = Array.from(root2.element.files).map((file2) => {
      file2._relativePath = file2.webkitRelativePath;
      return file2;
    });
    setTimeout(() => {
      props.onload(files);
      resetFileInput(root2.element);
    }, 250);
  };
  root2.element.addEventListener("change", root2.ref.handleChange);
};
var setAcceptedFileTypes = ({root: root2, action}) => {
  if (!root2.query("GET_ALLOW_SYNC_ACCEPT_ATTRIBUTE"))
    return;
  attrToggle(root2.element, "accept", !!action.value, action.value ? action.value.join(",") : "");
};
var toggleAllowMultiple = ({root: root2, action}) => {
  attrToggle(root2.element, "multiple", action.value);
};
var toggleDirectoryFilter = ({root: root2, action}) => {
  attrToggle(root2.element, "webkitdirectory", action.value);
};
var toggleDisabled = ({root: root2}) => {
  const isDisabled = root2.query("GET_DISABLED");
  const doesAllowBrowse = root2.query("GET_ALLOW_BROWSE");
  const disableField = isDisabled || !doesAllowBrowse;
  attrToggle(root2.element, "disabled", disableField);
};
var toggleRequired = ({root: root2, action}) => {
  if (!action.value) {
    attrToggle(root2.element, "required", false);
  } else if (root2.query("GET_TOTAL_ITEMS") === 0) {
    attrToggle(root2.element, "required", true);
  }
};
var setCaptureMethod = ({root: root2, action}) => {
  attrToggle(root2.element, "capture", !!action.value, action.value === true ? "" : action.value);
};
var updateRequiredStatus = ({root: root2}) => {
  const {element} = root2;
  if (root2.query("GET_TOTAL_ITEMS") > 0) {
    attrToggle(element, "required", false);
    attrToggle(element, "name", false);
  } else {
    attrToggle(element, "name", true, root2.query("GET_NAME"));
    const shouldCheckValidity = root2.query("GET_CHECK_VALIDITY");
    if (shouldCheckValidity) {
      element.setCustomValidity("");
    }
    if (root2.query("GET_REQUIRED")) {
      attrToggle(element, "required", true);
    }
  }
};
var updateFieldValidityStatus = ({root: root2}) => {
  const shouldCheckValidity = root2.query("GET_CHECK_VALIDITY");
  if (!shouldCheckValidity)
    return;
  root2.element.setCustomValidity(root2.query("GET_LABEL_INVALID_FIELD"));
};
var browser = createView({
  tag: "input",
  name: "browser",
  ignoreRect: true,
  ignoreRectUpdate: true,
  attributes: {
    type: "file"
  },
  create: create$a,
  destroy: ({root: root2}) => {
    root2.element.removeEventListener("change", root2.ref.handleChange);
  },
  write: createRoute({
    DID_LOAD_ITEM: updateRequiredStatus,
    DID_REMOVE_ITEM: updateRequiredStatus,
    DID_THROW_ITEM_INVALID: updateFieldValidityStatus,
    DID_SET_DISABLED: toggleDisabled,
    DID_SET_ALLOW_BROWSE: toggleDisabled,
    DID_SET_ALLOW_DIRECTORIES_ONLY: toggleDirectoryFilter,
    DID_SET_ALLOW_MULTIPLE: toggleAllowMultiple,
    DID_SET_ACCEPTED_FILE_TYPES: setAcceptedFileTypes,
    DID_SET_CAPTURE_METHOD: setCaptureMethod,
    DID_SET_REQUIRED: toggleRequired
  })
});
var Key = {
  ENTER: 13,
  SPACE: 32
};
var create$b = ({root: root2, props}) => {
  const label = createElement$1("label");
  attr(label, "for", `filepond--browser-${props.id}`);
  attr(label, "id", `filepond--drop-label-${props.id}`);
  attr(label, "aria-hidden", "true");
  root2.ref.handleKeyDown = (e2) => {
    const isActivationKey = e2.keyCode === Key.ENTER || e2.keyCode === Key.SPACE;
    if (!isActivationKey)
      return;
    e2.preventDefault();
    root2.ref.label.click();
  };
  root2.ref.handleClick = (e2) => {
    const isLabelClick = e2.target === label || label.contains(e2.target);
    if (isLabelClick)
      return;
    root2.ref.label.click();
  };
  label.addEventListener("keydown", root2.ref.handleKeyDown);
  root2.element.addEventListener("click", root2.ref.handleClick);
  updateLabelValue(label, props.caption);
  root2.appendChild(label);
  root2.ref.label = label;
};
var updateLabelValue = (label, value) => {
  label.innerHTML = value;
  const clickable = label.querySelector(".filepond--label-action");
  if (clickable) {
    attr(clickable, "tabindex", "0");
  }
  return value;
};
var dropLabel = createView({
  name: "drop-label",
  ignoreRect: true,
  create: create$b,
  destroy: ({root: root2}) => {
    root2.ref.label.addEventListener("keydown", root2.ref.handleKeyDown);
    root2.element.removeEventListener("click", root2.ref.handleClick);
  },
  write: createRoute({
    DID_SET_LABEL_IDLE: ({root: root2, action}) => {
      updateLabelValue(root2.ref.label, action.value);
    }
  }),
  mixins: {
    styles: ["opacity", "translateX", "translateY"],
    animations: {
      opacity: {type: "tween", duration: 150},
      translateX: "spring",
      translateY: "spring"
    }
  }
});
var blob = createView({
  name: "drip-blob",
  ignoreRect: true,
  mixins: {
    styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity"],
    animations: {
      scaleX: "spring",
      scaleY: "spring",
      translateX: "spring",
      translateY: "spring",
      opacity: {type: "tween", duration: 250}
    }
  }
});
var addBlob = ({root: root2}) => {
  const centerX = root2.rect.element.width * 0.5;
  const centerY = root2.rect.element.height * 0.5;
  root2.ref.blob = root2.appendChildView(root2.createChildView(blob, {
    opacity: 0,
    scaleX: 2.5,
    scaleY: 2.5,
    translateX: centerX,
    translateY: centerY
  }));
};
var moveBlob = ({root: root2, action}) => {
  if (!root2.ref.blob) {
    addBlob({root: root2});
    return;
  }
  root2.ref.blob.translateX = action.position.scopeLeft;
  root2.ref.blob.translateY = action.position.scopeTop;
  root2.ref.blob.scaleX = 1;
  root2.ref.blob.scaleY = 1;
  root2.ref.blob.opacity = 1;
};
var hideBlob = ({root: root2}) => {
  if (!root2.ref.blob) {
    return;
  }
  root2.ref.blob.opacity = 0;
};
var explodeBlob = ({root: root2}) => {
  if (!root2.ref.blob) {
    return;
  }
  root2.ref.blob.scaleX = 2.5;
  root2.ref.blob.scaleY = 2.5;
  root2.ref.blob.opacity = 0;
};
var write$7 = ({root: root2, props, actions: actions2}) => {
  route$4({root: root2, props, actions: actions2});
  const {blob: blob2} = root2.ref;
  if (actions2.length === 0 && blob2 && blob2.opacity === 0) {
    root2.removeChildView(blob2);
    root2.ref.blob = null;
  }
};
var route$4 = createRoute({
  DID_DRAG: moveBlob,
  DID_DROP: explodeBlob,
  DID_END_DRAG: hideBlob
});
var drip = createView({
  ignoreRect: true,
  ignoreRectUpdate: true,
  name: "drip",
  write: write$7
});
var setInputFiles = (element, files) => {
  try {
    const dataTransfer = new DataTransfer();
    files.forEach((file2) => {
      if (file2 instanceof File) {
        dataTransfer.items.add(file2);
      } else {
        dataTransfer.items.add(new File([file2], file2.name, {
          type: file2.type
        }));
      }
    });
    element.files = dataTransfer.files;
  } catch (err) {
    return false;
  }
  return true;
};
var create$c = ({root: root2}) => root2.ref.fields = {};
var getField = (root2, id) => root2.ref.fields[id];
var syncFieldPositionsWithItems = (root2) => {
  root2.query("GET_ACTIVE_ITEMS").forEach((item2) => {
    if (!root2.ref.fields[item2.id])
      return;
    root2.element.appendChild(root2.ref.fields[item2.id]);
  });
};
var didReorderItems = ({root: root2}) => syncFieldPositionsWithItems(root2);
var didAddItem = ({root: root2, action}) => {
  const fileItem = root2.query("GET_ITEM", action.id);
  const isLocalFile = fileItem.origin === FileOrigin.LOCAL;
  const shouldUseFileInput = !isLocalFile && root2.query("SHOULD_UPDATE_FILE_INPUT");
  const dataContainer = createElement$1("input");
  dataContainer.type = shouldUseFileInput ? "file" : "hidden";
  dataContainer.name = root2.query("GET_NAME");
  dataContainer.disabled = root2.query("GET_DISABLED");
  root2.ref.fields[action.id] = dataContainer;
  syncFieldPositionsWithItems(root2);
};
var didLoadItem$1 = ({root: root2, action}) => {
  const field = getField(root2, action.id);
  if (!field)
    return;
  if (action.serverFileReference !== null)
    field.value = action.serverFileReference;
  if (!root2.query("SHOULD_UPDATE_FILE_INPUT"))
    return;
  const fileItem = root2.query("GET_ITEM", action.id);
  setInputFiles(field, [fileItem.file]);
};
var didPrepareOutput = ({root: root2, action}) => {
  if (!root2.query("SHOULD_UPDATE_FILE_INPUT"))
    return;
  setTimeout(() => {
    const field = getField(root2, action.id);
    if (!field)
      return;
    setInputFiles(field, [action.file]);
  }, 0);
};
var didSetDisabled = ({root: root2}) => {
  root2.element.disabled = root2.query("GET_DISABLED");
};
var didRemoveItem = ({root: root2, action}) => {
  const field = getField(root2, action.id);
  if (!field)
    return;
  if (field.parentNode)
    field.parentNode.removeChild(field);
  delete root2.ref.fields[action.id];
};
var didDefineValue = ({root: root2, action}) => {
  const field = getField(root2, action.id);
  if (!field)
    return;
  if (action.value === null) {
    field.removeAttribute("value");
  } else {
    field.value = action.value;
  }
  syncFieldPositionsWithItems(root2);
};
var write$8 = createRoute({
  DID_SET_DISABLED: didSetDisabled,
  DID_ADD_ITEM: didAddItem,
  DID_LOAD_ITEM: didLoadItem$1,
  DID_REMOVE_ITEM: didRemoveItem,
  DID_DEFINE_VALUE: didDefineValue,
  DID_PREPARE_OUTPUT: didPrepareOutput,
  DID_REORDER_ITEMS: didReorderItems,
  DID_SORT_ITEMS: didReorderItems
});
var data2 = createView({
  tag: "fieldset",
  name: "data",
  create: create$c,
  write: write$8,
  ignoreRect: true
});
var getRootNode = (element) => "getRootNode" in element ? element.getRootNode() : document;
var images = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg", "tiff"];
var text$1 = ["css", "csv", "html", "txt"];
var map = {
  zip: "zip|compressed",
  epub: "application/epub+zip"
};
var guesstimateMimeType = (extension = "") => {
  extension = extension.toLowerCase();
  if (images.includes(extension)) {
    return "image/" + (extension === "jpg" ? "jpeg" : extension === "svg" ? "svg+xml" : extension);
  }
  if (text$1.includes(extension)) {
    return "text/" + extension;
  }
  return map[extension] || "";
};
var requestDataTransferItems = (dataTransfer) => new Promise((resolve, reject) => {
  const links = getLinks(dataTransfer);
  if (links.length && !hasFiles(dataTransfer)) {
    return resolve(links);
  }
  getFiles(dataTransfer).then(resolve);
});
var hasFiles = (dataTransfer) => {
  if (dataTransfer.files)
    return dataTransfer.files.length > 0;
  return false;
};
var getFiles = (dataTransfer) => new Promise((resolve, reject) => {
  const promisedFiles = (dataTransfer.items ? Array.from(dataTransfer.items) : []).filter((item2) => isFileSystemItem(item2)).map((item2) => getFilesFromItem(item2));
  if (!promisedFiles.length) {
    resolve(dataTransfer.files ? Array.from(dataTransfer.files) : []);
    return;
  }
  Promise.all(promisedFiles).then((returnedFileGroups) => {
    const files = [];
    returnedFileGroups.forEach((group) => {
      files.push.apply(files, group);
    });
    resolve(files.filter((file2) => file2).map((file2) => {
      if (!file2._relativePath)
        file2._relativePath = file2.webkitRelativePath;
      return file2;
    }));
  }).catch(console.error);
});
var isFileSystemItem = (item2) => {
  if (isEntry(item2)) {
    const entry = getAsEntry(item2);
    if (entry) {
      return entry.isFile || entry.isDirectory;
    }
  }
  return item2.kind === "file";
};
var getFilesFromItem = (item2) => new Promise((resolve, reject) => {
  if (isDirectoryEntry(item2)) {
    getFilesInDirectory(getAsEntry(item2)).then(resolve).catch(reject);
    return;
  }
  resolve([item2.getAsFile()]);
});
var getFilesInDirectory = (entry) => new Promise((resolve, reject) => {
  const files = [];
  let dirCounter = 0;
  let fileCounter = 0;
  const resolveIfDone = () => {
    if (fileCounter === 0 && dirCounter === 0) {
      resolve(files);
    }
  };
  const readEntries = (dirEntry) => {
    dirCounter++;
    const directoryReader = dirEntry.createReader();
    const readBatch = () => {
      directoryReader.readEntries((entries) => {
        if (entries.length === 0) {
          dirCounter--;
          resolveIfDone();
          return;
        }
        entries.forEach((entry2) => {
          if (entry2.isDirectory) {
            readEntries(entry2);
          } else {
            fileCounter++;
            entry2.file((file2) => {
              const correctedFile = correctMissingFileType(file2);
              if (entry2.fullPath)
                correctedFile._relativePath = entry2.fullPath;
              files.push(correctedFile);
              fileCounter--;
              resolveIfDone();
            });
          }
        });
        readBatch();
      }, reject);
    };
    readBatch();
  };
  readEntries(entry);
});
var correctMissingFileType = (file2) => {
  if (file2.type.length)
    return file2;
  const date = file2.lastModifiedDate;
  const name2 = file2.name;
  const type = guesstimateMimeType(getExtensionFromFilename(file2.name));
  if (!type.length)
    return file2;
  file2 = file2.slice(0, file2.size, type);
  file2.name = name2;
  file2.lastModifiedDate = date;
  return file2;
};
var isDirectoryEntry = (item2) => isEntry(item2) && (getAsEntry(item2) || {}).isDirectory;
var isEntry = (item2) => "webkitGetAsEntry" in item2;
var getAsEntry = (item2) => item2.webkitGetAsEntry();
var getLinks = (dataTransfer) => {
  let links = [];
  try {
    links = getLinksFromTransferMetaData(dataTransfer);
    if (links.length) {
      return links;
    }
    links = getLinksFromTransferURLData(dataTransfer);
  } catch (e2) {
  }
  return links;
};
var getLinksFromTransferURLData = (dataTransfer) => {
  let data3 = dataTransfer.getData("url");
  if (typeof data3 === "string" && data3.length) {
    return [data3];
  }
  return [];
};
var getLinksFromTransferMetaData = (dataTransfer) => {
  let data3 = dataTransfer.getData("text/html");
  if (typeof data3 === "string" && data3.length) {
    const matches = data3.match(/src\s*=\s*"(.+?)"/);
    if (matches) {
      return [matches[1]];
    }
  }
  return [];
};
var dragNDropObservers = [];
var eventPosition = (e2) => ({
  pageLeft: e2.pageX,
  pageTop: e2.pageY,
  scopeLeft: e2.offsetX || e2.layerX,
  scopeTop: e2.offsetY || e2.layerY
});
var createDragNDropClient = (element, scopeToObserve, filterElement) => {
  const observer = getDragNDropObserver(scopeToObserve);
  const client = {
    element,
    filterElement,
    state: null,
    ondrop: () => {
    },
    onenter: () => {
    },
    ondrag: () => {
    },
    onexit: () => {
    },
    onload: () => {
    },
    allowdrop: () => {
    }
  };
  client.destroy = observer.addListener(client);
  return client;
};
var getDragNDropObserver = (element) => {
  const observer = dragNDropObservers.find((item2) => item2.element === element);
  if (observer) {
    return observer;
  }
  const newObserver = createDragNDropObserver(element);
  dragNDropObservers.push(newObserver);
  return newObserver;
};
var createDragNDropObserver = (element) => {
  const clients = [];
  const routes = {
    dragenter,
    dragover,
    dragleave,
    drop
  };
  const handlers = {};
  forin(routes, (event, createHandler) => {
    handlers[event] = createHandler(element, clients);
    element.addEventListener(event, handlers[event], false);
  });
  const observer = {
    element,
    addListener: (client) => {
      clients.push(client);
      return () => {
        clients.splice(clients.indexOf(client), 1);
        if (clients.length === 0) {
          dragNDropObservers.splice(dragNDropObservers.indexOf(observer), 1);
          forin(routes, (event) => {
            element.removeEventListener(event, handlers[event], false);
          });
        }
      };
    }
  };
  return observer;
};
var elementFromPoint = (root2, point) => {
  if (!("elementFromPoint" in root2)) {
    root2 = document;
  }
  return root2.elementFromPoint(point.x, point.y);
};
var isEventTarget = (e2, target) => {
  const root2 = getRootNode(target);
  const elementAtPosition = elementFromPoint(root2, {
    x: e2.pageX - window.pageXOffset,
    y: e2.pageY - window.pageYOffset
  });
  return elementAtPosition === target || target.contains(elementAtPosition);
};
var initialTarget = null;
var setDropEffect = (dataTransfer, effect) => {
  try {
    dataTransfer.dropEffect = effect;
  } catch (e2) {
  }
};
var dragenter = (root2, clients) => (e2) => {
  e2.preventDefault();
  initialTarget = e2.target;
  clients.forEach((client) => {
    const {element, onenter} = client;
    if (isEventTarget(e2, element)) {
      client.state = "enter";
      onenter(eventPosition(e2));
    }
  });
};
var dragover = (root2, clients) => (e2) => {
  e2.preventDefault();
  const dataTransfer = e2.dataTransfer;
  requestDataTransferItems(dataTransfer).then((items) => {
    let overDropTarget = false;
    clients.some((client) => {
      const {filterElement, element, onenter, onexit, ondrag, allowdrop} = client;
      setDropEffect(dataTransfer, "copy");
      const allowsTransfer = allowdrop(items);
      if (!allowsTransfer) {
        setDropEffect(dataTransfer, "none");
        return;
      }
      if (isEventTarget(e2, element)) {
        overDropTarget = true;
        if (client.state === null) {
          client.state = "enter";
          onenter(eventPosition(e2));
          return;
        }
        client.state = "over";
        if (filterElement && !allowsTransfer) {
          setDropEffect(dataTransfer, "none");
          return;
        }
        ondrag(eventPosition(e2));
      } else {
        if (filterElement && !overDropTarget) {
          setDropEffect(dataTransfer, "none");
        }
        if (client.state) {
          client.state = null;
          onexit(eventPosition(e2));
        }
      }
    });
  });
};
var drop = (root2, clients) => (e2) => {
  e2.preventDefault();
  const dataTransfer = e2.dataTransfer;
  requestDataTransferItems(dataTransfer).then((items) => {
    clients.forEach((client) => {
      const {filterElement, element, ondrop, onexit, allowdrop} = client;
      client.state = null;
      if (filterElement && !isEventTarget(e2, element))
        return;
      if (!allowdrop(items))
        return onexit(eventPosition(e2));
      ondrop(eventPosition(e2), items);
    });
  });
};
var dragleave = (root2, clients) => (e2) => {
  if (initialTarget !== e2.target) {
    return;
  }
  clients.forEach((client) => {
    const {onexit} = client;
    client.state = null;
    onexit(eventPosition(e2));
  });
};
var createHopper = (scope, validateItems, options) => {
  scope.classList.add("filepond--hopper");
  const {catchesDropsOnPage, requiresDropOnElement, filterItems = (items) => items} = options;
  const client = createDragNDropClient(scope, catchesDropsOnPage ? document.documentElement : scope, requiresDropOnElement);
  let lastState = "";
  let currentState = "";
  client.allowdrop = (items) => {
    return validateItems(filterItems(items));
  };
  client.ondrop = (position, items) => {
    const filteredItems = filterItems(items);
    if (!validateItems(filteredItems)) {
      api.ondragend(position);
      return;
    }
    currentState = "drag-drop";
    api.onload(filteredItems, position);
  };
  client.ondrag = (position) => {
    api.ondrag(position);
  };
  client.onenter = (position) => {
    currentState = "drag-over";
    api.ondragstart(position);
  };
  client.onexit = (position) => {
    currentState = "drag-exit";
    api.ondragend(position);
  };
  const api = {
    updateHopperState: () => {
      if (lastState !== currentState) {
        scope.dataset.hopperState = currentState;
        lastState = currentState;
      }
    },
    onload: () => {
    },
    ondragstart: () => {
    },
    ondrag: () => {
    },
    ondragend: () => {
    },
    destroy: () => {
      client.destroy();
    }
  };
  return api;
};
var listening = false;
var listeners$1 = [];
var handlePaste = (e2) => {
  const activeEl = document.activeElement;
  if (activeEl && /textarea|input/i.test(activeEl.nodeName)) {
    let inScope = false;
    let element = activeEl;
    while (element !== document.body) {
      if (element.classList.contains("filepond--root")) {
        inScope = true;
        break;
      }
      element = element.parentNode;
    }
    if (!inScope)
      return;
  }
  requestDataTransferItems(e2.clipboardData).then((files) => {
    if (!files.length) {
      return;
    }
    listeners$1.forEach((listener) => listener(files));
  });
};
var listen = (cb) => {
  if (listeners$1.includes(cb)) {
    return;
  }
  listeners$1.push(cb);
  if (listening) {
    return;
  }
  listening = true;
  document.addEventListener("paste", handlePaste);
};
var unlisten = (listener) => {
  arrayRemove(listeners$1, listeners$1.indexOf(listener));
  if (listeners$1.length === 0) {
    document.removeEventListener("paste", handlePaste);
    listening = false;
  }
};
var createPaster = () => {
  const cb = (files) => {
    api.onload(files);
  };
  const api = {
    destroy: () => {
      unlisten(cb);
    },
    onload: () => {
    }
  };
  listen(cb);
  return api;
};
var create$d = ({root: root2, props}) => {
  root2.element.id = `filepond--assistant-${props.id}`;
  attr(root2.element, "role", "status");
  attr(root2.element, "aria-live", "polite");
  attr(root2.element, "aria-relevant", "additions");
};
var addFilesNotificationTimeout = null;
var notificationClearTimeout = null;
var filenames = [];
var assist = (root2, message) => {
  root2.element.textContent = message;
};
var clear$1 = (root2) => {
  root2.element.textContent = "";
};
var listModified = (root2, filename, label) => {
  const total = root2.query("GET_TOTAL_ITEMS");
  assist(root2, `${label} ${filename}, ${total} ${total === 1 ? root2.query("GET_LABEL_FILE_COUNT_SINGULAR") : root2.query("GET_LABEL_FILE_COUNT_PLURAL")}`);
  clearTimeout(notificationClearTimeout);
  notificationClearTimeout = setTimeout(() => {
    clear$1(root2);
  }, 1500);
};
var isUsingFilePond = (root2) => root2.element.parentNode.contains(document.activeElement);
var itemAdded = ({root: root2, action}) => {
  if (!isUsingFilePond(root2)) {
    return;
  }
  root2.element.textContent = "";
  const item2 = root2.query("GET_ITEM", action.id);
  filenames.push(item2.filename);
  clearTimeout(addFilesNotificationTimeout);
  addFilesNotificationTimeout = setTimeout(() => {
    listModified(root2, filenames.join(", "), root2.query("GET_LABEL_FILE_ADDED"));
    filenames.length = 0;
  }, 750);
};
var itemRemoved = ({root: root2, action}) => {
  if (!isUsingFilePond(root2)) {
    return;
  }
  const item2 = action.item;
  listModified(root2, item2.filename, root2.query("GET_LABEL_FILE_REMOVED"));
};
var itemProcessed = ({root: root2, action}) => {
  const item2 = root2.query("GET_ITEM", action.id);
  const filename = item2.filename;
  const label = root2.query("GET_LABEL_FILE_PROCESSING_COMPLETE");
  assist(root2, `${filename} ${label}`);
};
var itemProcessedUndo = ({root: root2, action}) => {
  const item2 = root2.query("GET_ITEM", action.id);
  const filename = item2.filename;
  const label = root2.query("GET_LABEL_FILE_PROCESSING_ABORTED");
  assist(root2, `${filename} ${label}`);
};
var itemError = ({root: root2, action}) => {
  const item2 = root2.query("GET_ITEM", action.id);
  const filename = item2.filename;
  assist(root2, `${action.status.main} ${filename} ${action.status.sub}`);
};
var assistant = createView({
  create: create$d,
  ignoreRect: true,
  ignoreRectUpdate: true,
  write: createRoute({
    DID_LOAD_ITEM: itemAdded,
    DID_REMOVE_ITEM: itemRemoved,
    DID_COMPLETE_ITEM_PROCESSING: itemProcessed,
    DID_ABORT_ITEM_PROCESSING: itemProcessedUndo,
    DID_REVERT_ITEM_PROCESSING: itemProcessedUndo,
    DID_THROW_ITEM_REMOVE_ERROR: itemError,
    DID_THROW_ITEM_LOAD_ERROR: itemError,
    DID_THROW_ITEM_INVALID: itemError,
    DID_THROW_ITEM_PROCESSING_ERROR: itemError
  }),
  tag: "span",
  name: "assistant"
});
var toCamels = (string, separator = "-") => string.replace(new RegExp(`${separator}.`, "g"), (sub) => sub.charAt(1).toUpperCase());
var debounce = (func, interval = 16, immidiateOnly = true) => {
  let last = Date.now();
  let timeout = null;
  return (...args) => {
    clearTimeout(timeout);
    const dist = Date.now() - last;
    const fn2 = () => {
      last = Date.now();
      func(...args);
    };
    if (dist < interval) {
      if (!immidiateOnly) {
        timeout = setTimeout(fn2, interval - dist);
      }
    } else {
      fn2();
    }
  };
};
var MAX_FILES_LIMIT = 1e6;
var prevent = (e2) => e2.preventDefault();
var create$e = ({root: root2, props}) => {
  const id = root2.query("GET_ID");
  if (id) {
    root2.element.id = id;
  }
  const className = root2.query("GET_CLASS_NAME");
  if (className) {
    className.split(" ").filter((name2) => name2.length).forEach((name2) => {
      root2.element.classList.add(name2);
    });
  }
  root2.ref.label = root2.appendChildView(root2.createChildView(dropLabel, {
    ...props,
    translateY: null,
    caption: root2.query("GET_LABEL_IDLE")
  }));
  root2.ref.list = root2.appendChildView(root2.createChildView(listScroller, {translateY: null}));
  root2.ref.panel = root2.appendChildView(root2.createChildView(panel, {name: "panel-root"}));
  root2.ref.assistant = root2.appendChildView(root2.createChildView(assistant, {...props}));
  root2.ref.data = root2.appendChildView(root2.createChildView(data2, {...props}));
  root2.ref.measure = createElement$1("div");
  root2.ref.measure.style.height = "100%";
  root2.element.appendChild(root2.ref.measure);
  root2.ref.bounds = null;
  root2.query("GET_STYLES").filter((style) => !isEmpty(style.value)).map(({name: name2, value}) => {
    root2.element.dataset[name2] = value;
  });
  root2.ref.widthPrevious = null;
  root2.ref.widthUpdated = debounce(() => {
    root2.ref.updateHistory = [];
    root2.dispatch("DID_RESIZE_ROOT");
  }, 250);
  root2.ref.previousAspectRatio = null;
  root2.ref.updateHistory = [];
  const canHover = window.matchMedia("(pointer: fine) and (hover: hover)").matches;
  const hasPointerEvents = "PointerEvent" in window;
  if (root2.query("GET_ALLOW_REORDER") && hasPointerEvents && !canHover) {
    root2.element.addEventListener("touchmove", prevent, {passive: false});
    root2.element.addEventListener("gesturestart", prevent);
  }
  const credits = root2.query("GET_CREDITS");
  const hasCredits = credits.length === 2;
  if (hasCredits) {
    const frag = document.createElement("a");
    frag.className = "filepond--credits";
    frag.setAttribute("aria-hidden", "true");
    frag.href = credits[0];
    frag.tabindex = -1;
    frag.target = "_blank";
    frag.rel = "noopener noreferrer";
    frag.textContent = credits[1];
    root2.element.appendChild(frag);
    root2.ref.credits = frag;
  }
};
var write$9 = ({root: root2, props, actions: actions2}) => {
  route$5({root: root2, props, actions: actions2});
  actions2.filter((action) => /^DID_SET_STYLE_/.test(action.type)).filter((action) => !isEmpty(action.data.value)).map(({type, data: data3}) => {
    const name2 = toCamels(type.substr(8).toLowerCase(), "_");
    root2.element.dataset[name2] = data3.value;
    root2.invalidateLayout();
  });
  if (root2.rect.element.hidden)
    return;
  if (root2.rect.element.width !== root2.ref.widthPrevious) {
    root2.ref.widthPrevious = root2.rect.element.width;
    root2.ref.widthUpdated();
  }
  let bounds = root2.ref.bounds;
  if (!bounds) {
    bounds = root2.ref.bounds = calculateRootBoundingBoxHeight(root2);
    root2.element.removeChild(root2.ref.measure);
    root2.ref.measure = null;
  }
  const {hopper, label, list: list2, panel: panel2} = root2.ref;
  if (hopper) {
    hopper.updateHopperState();
  }
  const aspectRatio = root2.query("GET_PANEL_ASPECT_RATIO");
  const isMultiItem = root2.query("GET_ALLOW_MULTIPLE");
  const totalItems = root2.query("GET_TOTAL_ITEMS");
  const maxItems = isMultiItem ? root2.query("GET_MAX_FILES") || MAX_FILES_LIMIT : 1;
  const atMaxCapacity = totalItems === maxItems;
  const addAction = actions2.find((action) => action.type === "DID_ADD_ITEM");
  if (atMaxCapacity && addAction) {
    const interactionMethod = addAction.data.interactionMethod;
    label.opacity = 0;
    if (isMultiItem) {
      label.translateY = -40;
    } else {
      if (interactionMethod === InteractionMethod.API) {
        label.translateX = 40;
      } else if (interactionMethod === InteractionMethod.BROWSE) {
        label.translateY = 40;
      } else {
        label.translateY = 30;
      }
    }
  } else if (!atMaxCapacity) {
    label.opacity = 1;
    label.translateX = 0;
    label.translateY = 0;
  }
  const listItemMargin = calculateListItemMargin(root2);
  const listHeight = calculateListHeight(root2);
  const labelHeight = label.rect.element.height;
  const currentLabelHeight = !isMultiItem || atMaxCapacity ? 0 : labelHeight;
  const listMarginTop = atMaxCapacity ? list2.rect.element.marginTop : 0;
  const listMarginBottom = totalItems === 0 ? 0 : list2.rect.element.marginBottom;
  const visualHeight = currentLabelHeight + listMarginTop + listHeight.visual + listMarginBottom;
  const boundsHeight = currentLabelHeight + listMarginTop + listHeight.bounds + listMarginBottom;
  list2.translateY = Math.max(0, currentLabelHeight - list2.rect.element.marginTop) - listItemMargin.top;
  if (aspectRatio) {
    const width = root2.rect.element.width;
    const height = width * aspectRatio;
    if (aspectRatio !== root2.ref.previousAspectRatio) {
      root2.ref.previousAspectRatio = aspectRatio;
      root2.ref.updateHistory = [];
    }
    const history = root2.ref.updateHistory;
    history.push(width);
    const MAX_BOUNCES = 2;
    if (history.length > MAX_BOUNCES * 2) {
      const l = history.length;
      const bottom = l - 10;
      let bounces = 0;
      for (let i = l; i >= bottom; i--) {
        if (history[i] === history[i - 2]) {
          bounces++;
        }
        if (bounces >= MAX_BOUNCES) {
          return;
        }
      }
    }
    panel2.scalable = false;
    panel2.height = height;
    const listAvailableHeight = height - currentLabelHeight - (listMarginBottom - listItemMargin.bottom) - (atMaxCapacity ? listMarginTop : 0);
    if (listHeight.visual > listAvailableHeight) {
      list2.overflow = listAvailableHeight;
    } else {
      list2.overflow = null;
    }
    root2.height = height;
  } else if (bounds.fixedHeight) {
    panel2.scalable = false;
    const listAvailableHeight = bounds.fixedHeight - currentLabelHeight - (listMarginBottom - listItemMargin.bottom) - (atMaxCapacity ? listMarginTop : 0);
    if (listHeight.visual > listAvailableHeight) {
      list2.overflow = listAvailableHeight;
    } else {
      list2.overflow = null;
    }
  } else if (bounds.cappedHeight) {
    const isCappedHeight = visualHeight >= bounds.cappedHeight;
    const panelHeight = Math.min(bounds.cappedHeight, visualHeight);
    panel2.scalable = true;
    panel2.height = isCappedHeight ? panelHeight : panelHeight - listItemMargin.top - listItemMargin.bottom;
    const listAvailableHeight = panelHeight - currentLabelHeight - (listMarginBottom - listItemMargin.bottom) - (atMaxCapacity ? listMarginTop : 0);
    if (visualHeight > bounds.cappedHeight && listHeight.visual > listAvailableHeight) {
      list2.overflow = listAvailableHeight;
    } else {
      list2.overflow = null;
    }
    root2.height = Math.min(bounds.cappedHeight, boundsHeight - listItemMargin.top - listItemMargin.bottom);
  } else {
    const itemMargin = totalItems > 0 ? listItemMargin.top + listItemMargin.bottom : 0;
    panel2.scalable = true;
    panel2.height = Math.max(labelHeight, visualHeight - itemMargin);
    root2.height = Math.max(labelHeight, boundsHeight - itemMargin);
  }
  if (root2.ref.credits && panel2.heightCurrent)
    root2.ref.credits.style.transform = `translateY(${panel2.heightCurrent}px)`;
};
var calculateListItemMargin = (root2) => {
  const item2 = root2.ref.list.childViews[0].childViews[0];
  return item2 ? {
    top: item2.rect.element.marginTop,
    bottom: item2.rect.element.marginBottom
  } : {
    top: 0,
    bottom: 0
  };
};
var calculateListHeight = (root2) => {
  let visual = 0;
  let bounds = 0;
  const scrollList = root2.ref.list;
  const itemList = scrollList.childViews[0];
  const visibleChildren = itemList.childViews.filter((child) => child.rect.element.height);
  const children = root2.query("GET_ACTIVE_ITEMS").map((item2) => visibleChildren.find((child) => child.id === item2.id)).filter((item2) => item2);
  if (children.length === 0)
    return {visual, bounds};
  const horizontalSpace = itemList.rect.element.width;
  const dragIndex = getItemIndexByPosition(itemList, children, scrollList.dragCoordinates);
  const childRect = children[0].rect.element;
  const itemVerticalMargin = childRect.marginTop + childRect.marginBottom;
  const itemHorizontalMargin = childRect.marginLeft + childRect.marginRight;
  const itemWidth = childRect.width + itemHorizontalMargin;
  const itemHeight = childRect.height + itemVerticalMargin;
  const newItem = typeof dragIndex !== "undefined" && dragIndex >= 0 ? 1 : 0;
  const removedItem = children.find((child) => child.markedForRemoval && child.opacity < 0.45) ? -1 : 0;
  const verticalItemCount = children.length + newItem + removedItem;
  const itemsPerRow = getItemsPerRow(horizontalSpace, itemWidth);
  if (itemsPerRow === 1) {
    children.forEach((item2) => {
      const height = item2.rect.element.height + itemVerticalMargin;
      bounds += height;
      visual += height * item2.opacity;
    });
  } else {
    bounds = Math.ceil(verticalItemCount / itemsPerRow) * itemHeight;
    visual = bounds;
  }
  return {visual, bounds};
};
var calculateRootBoundingBoxHeight = (root2) => {
  const height = root2.ref.measureHeight || null;
  const cappedHeight = parseInt(root2.style.maxHeight, 10) || null;
  const fixedHeight = height === 0 ? null : height;
  return {
    cappedHeight,
    fixedHeight
  };
};
var exceedsMaxFiles = (root2, items) => {
  const allowReplace = root2.query("GET_ALLOW_REPLACE");
  const allowMultiple = root2.query("GET_ALLOW_MULTIPLE");
  const totalItems = root2.query("GET_TOTAL_ITEMS");
  let maxItems = root2.query("GET_MAX_FILES");
  const totalBrowseItems = items.length;
  if (!allowMultiple && totalBrowseItems > 1) {
    return true;
  }
  maxItems = allowMultiple ? maxItems : allowReplace ? maxItems : 1;
  const hasMaxItems = isInt(maxItems);
  if (hasMaxItems && totalItems + totalBrowseItems > maxItems) {
    root2.dispatch("DID_THROW_MAX_FILES", {
      source: items,
      error: createResponse("warning", 0, "Max files")
    });
    return true;
  }
  return false;
};
var getDragIndex = (list2, children, position) => {
  const itemList = list2.childViews[0];
  return getItemIndexByPosition(itemList, children, {
    left: position.scopeLeft - itemList.rect.element.left,
    top: position.scopeTop - (list2.rect.outer.top + list2.rect.element.marginTop + list2.rect.element.scrollTop)
  });
};
var toggleDrop = (root2) => {
  const isAllowed = root2.query("GET_ALLOW_DROP");
  const isDisabled = root2.query("GET_DISABLED");
  const enabled = isAllowed && !isDisabled;
  if (enabled && !root2.ref.hopper) {
    const hopper = createHopper(root2.element, (items) => {
      const beforeDropFile = root2.query("GET_BEFORE_DROP_FILE") || (() => true);
      const dropValidation = root2.query("GET_DROP_VALIDATION");
      return dropValidation ? items.every((item2) => applyFilters("ALLOW_HOPPER_ITEM", item2, {
        query: root2.query
      }).every((result) => result === true) && beforeDropFile(item2)) : true;
    }, {
      filterItems: (items) => {
        const ignoredFiles = root2.query("GET_IGNORED_FILES");
        return items.filter((item2) => {
          if (isFile(item2)) {
            return !ignoredFiles.includes(item2.name.toLowerCase());
          }
          return true;
        });
      },
      catchesDropsOnPage: root2.query("GET_DROP_ON_PAGE"),
      requiresDropOnElement: root2.query("GET_DROP_ON_ELEMENT")
    });
    hopper.onload = (items, position) => {
      const list2 = root2.ref.list.childViews[0];
      const visibleChildren = list2.childViews.filter((child) => child.rect.element.height);
      const children = root2.query("GET_ACTIVE_ITEMS").map((item2) => visibleChildren.find((child) => child.id === item2.id)).filter((item2) => item2);
      applyFilterChain("ADD_ITEMS", items, {dispatch: root2.dispatch}).then((queue) => {
        if (exceedsMaxFiles(root2, queue))
          return false;
        root2.dispatch("ADD_ITEMS", {
          items: queue,
          index: getDragIndex(root2.ref.list, children, position),
          interactionMethod: InteractionMethod.DROP
        });
      });
      root2.dispatch("DID_DROP", {position});
      root2.dispatch("DID_END_DRAG", {position});
    };
    hopper.ondragstart = (position) => {
      root2.dispatch("DID_START_DRAG", {position});
    };
    hopper.ondrag = debounce((position) => {
      root2.dispatch("DID_DRAG", {position});
    });
    hopper.ondragend = (position) => {
      root2.dispatch("DID_END_DRAG", {position});
    };
    root2.ref.hopper = hopper;
    root2.ref.drip = root2.appendChildView(root2.createChildView(drip));
  } else if (!enabled && root2.ref.hopper) {
    root2.ref.hopper.destroy();
    root2.ref.hopper = null;
    root2.removeChildView(root2.ref.drip);
  }
};
var toggleBrowse = (root2, props) => {
  const isAllowed = root2.query("GET_ALLOW_BROWSE");
  const isDisabled = root2.query("GET_DISABLED");
  const enabled = isAllowed && !isDisabled;
  if (enabled && !root2.ref.browser) {
    root2.ref.browser = root2.appendChildView(root2.createChildView(browser, {
      ...props,
      onload: (items) => {
        applyFilterChain("ADD_ITEMS", items, {
          dispatch: root2.dispatch
        }).then((queue) => {
          if (exceedsMaxFiles(root2, queue))
            return false;
          root2.dispatch("ADD_ITEMS", {
            items: queue,
            index: -1,
            interactionMethod: InteractionMethod.BROWSE
          });
        });
      }
    }), 0);
  } else if (!enabled && root2.ref.browser) {
    root2.removeChildView(root2.ref.browser);
    root2.ref.browser = null;
  }
};
var togglePaste = (root2) => {
  const isAllowed = root2.query("GET_ALLOW_PASTE");
  const isDisabled = root2.query("GET_DISABLED");
  const enabled = isAllowed && !isDisabled;
  if (enabled && !root2.ref.paster) {
    root2.ref.paster = createPaster();
    root2.ref.paster.onload = (items) => {
      applyFilterChain("ADD_ITEMS", items, {dispatch: root2.dispatch}).then((queue) => {
        if (exceedsMaxFiles(root2, queue))
          return false;
        root2.dispatch("ADD_ITEMS", {
          items: queue,
          index: -1,
          interactionMethod: InteractionMethod.PASTE
        });
      });
    };
  } else if (!enabled && root2.ref.paster) {
    root2.ref.paster.destroy();
    root2.ref.paster = null;
  }
};
var route$5 = createRoute({
  DID_SET_ALLOW_BROWSE: ({root: root2, props}) => {
    toggleBrowse(root2, props);
  },
  DID_SET_ALLOW_DROP: ({root: root2}) => {
    toggleDrop(root2);
  },
  DID_SET_ALLOW_PASTE: ({root: root2}) => {
    togglePaste(root2);
  },
  DID_SET_DISABLED: ({root: root2, props}) => {
    toggleDrop(root2);
    togglePaste(root2);
    toggleBrowse(root2, props);
    const isDisabled = root2.query("GET_DISABLED");
    if (isDisabled) {
      root2.element.dataset.disabled = "disabled";
    } else {
      root2.element.removeAttribute("data-disabled");
    }
  }
});
var root = createView({
  name: "root",
  read: ({root: root2}) => {
    if (root2.ref.measure) {
      root2.ref.measureHeight = root2.ref.measure.offsetHeight;
    }
  },
  create: create$e,
  write: write$9,
  destroy: ({root: root2}) => {
    if (root2.ref.paster) {
      root2.ref.paster.destroy();
    }
    if (root2.ref.hopper) {
      root2.ref.hopper.destroy();
    }
    root2.element.removeEventListener("touchmove", prevent);
    root2.element.removeEventListener("gesturestart", prevent);
  },
  mixins: {
    styles: ["height"]
  }
});
var createApp = (initialOptions = {}) => {
  let originalElement = null;
  const defaultOptions2 = getOptions();
  const store = createStore(createInitialState(defaultOptions2), [queries, createOptionQueries(defaultOptions2)], [actions, createOptionActions(defaultOptions2)]);
  store.dispatch("SET_OPTIONS", {options: initialOptions});
  const visibilityHandler = () => {
    if (document.hidden)
      return;
    store.dispatch("KICK");
  };
  document.addEventListener("visibilitychange", visibilityHandler);
  let resizeDoneTimer = null;
  let isResizing = false;
  let isResizingHorizontally = false;
  let initialWindowWidth = null;
  let currentWindowWidth = null;
  const resizeHandler = () => {
    if (!isResizing) {
      isResizing = true;
    }
    clearTimeout(resizeDoneTimer);
    resizeDoneTimer = setTimeout(() => {
      isResizing = false;
      initialWindowWidth = null;
      currentWindowWidth = null;
      if (isResizingHorizontally) {
        isResizingHorizontally = false;
        store.dispatch("DID_STOP_RESIZE");
      }
    }, 500);
  };
  window.addEventListener("resize", resizeHandler);
  const view = root(store, {id: getUniqueId()});
  let isResting = false;
  let isHidden = false;
  const readWriteApi = {
    _read: () => {
      if (isResizing) {
        currentWindowWidth = window.innerWidth;
        if (!initialWindowWidth) {
          initialWindowWidth = currentWindowWidth;
        }
        if (!isResizingHorizontally && currentWindowWidth !== initialWindowWidth) {
          store.dispatch("DID_START_RESIZE");
          isResizingHorizontally = true;
        }
      }
      if (isHidden && isResting) {
        isResting = view.element.offsetParent === null;
      }
      if (isResting)
        return;
      view._read();
      isHidden = view.rect.element.hidden;
    },
    _write: (ts) => {
      const actions2 = store.processActionQueue().filter((action) => !/^SET_/.test(action.type));
      if (isResting && !actions2.length)
        return;
      routeActionsToEvents(actions2);
      isResting = view._write(ts, actions2, isResizingHorizontally);
      removeReleasedItems(store.query("GET_ITEMS"));
      if (isResting) {
        store.processDispatchQueue();
      }
    }
  };
  const createEvent = (name2) => (data3) => {
    const event = {
      type: name2
    };
    if (!data3) {
      return event;
    }
    if (data3.hasOwnProperty("error")) {
      event.error = data3.error ? {...data3.error} : null;
    }
    if (data3.status) {
      event.status = {...data3.status};
    }
    if (data3.file) {
      event.output = data3.file;
    }
    if (data3.source) {
      event.file = data3.source;
    } else if (data3.item || data3.id) {
      const item2 = data3.item ? data3.item : store.query("GET_ITEM", data3.id);
      event.file = item2 ? createItemAPI(item2) : null;
    }
    if (data3.items) {
      event.items = data3.items.map(createItemAPI);
    }
    if (/progress/.test(name2)) {
      event.progress = data3.progress;
    }
    if (data3.hasOwnProperty("origin") && data3.hasOwnProperty("target")) {
      event.origin = data3.origin;
      event.target = data3.target;
    }
    return event;
  };
  const eventRoutes = {
    DID_DESTROY: createEvent("destroy"),
    DID_INIT: createEvent("init"),
    DID_THROW_MAX_FILES: createEvent("warning"),
    DID_INIT_ITEM: createEvent("initfile"),
    DID_START_ITEM_LOAD: createEvent("addfilestart"),
    DID_UPDATE_ITEM_LOAD_PROGRESS: createEvent("addfileprogress"),
    DID_LOAD_ITEM: createEvent("addfile"),
    DID_THROW_ITEM_INVALID: [createEvent("error"), createEvent("addfile")],
    DID_THROW_ITEM_LOAD_ERROR: [createEvent("error"), createEvent("addfile")],
    DID_THROW_ITEM_REMOVE_ERROR: [createEvent("error"), createEvent("removefile")],
    DID_PREPARE_OUTPUT: createEvent("preparefile"),
    DID_START_ITEM_PROCESSING: createEvent("processfilestart"),
    DID_UPDATE_ITEM_PROCESS_PROGRESS: createEvent("processfileprogress"),
    DID_ABORT_ITEM_PROCESSING: createEvent("processfileabort"),
    DID_COMPLETE_ITEM_PROCESSING: createEvent("processfile"),
    DID_COMPLETE_ITEM_PROCESSING_ALL: createEvent("processfiles"),
    DID_REVERT_ITEM_PROCESSING: createEvent("processfilerevert"),
    DID_THROW_ITEM_PROCESSING_ERROR: [createEvent("error"), createEvent("processfile")],
    DID_REMOVE_ITEM: createEvent("removefile"),
    DID_UPDATE_ITEMS: createEvent("updatefiles"),
    DID_ACTIVATE_ITEM: createEvent("activatefile"),
    DID_REORDER_ITEMS: createEvent("reorderfiles")
  };
  const exposeEvent = (event) => {
    const detail = {pond: exports, ...event};
    delete detail.type;
    view.element.dispatchEvent(new CustomEvent(`FilePond:${event.type}`, {
      detail,
      bubbles: true,
      cancelable: true,
      composed: true
    }));
    const params = [];
    if (event.hasOwnProperty("error")) {
      params.push(event.error);
    }
    if (event.hasOwnProperty("file")) {
      params.push(event.file);
    }
    const filtered = ["type", "error", "file"];
    Object.keys(event).filter((key) => !filtered.includes(key)).forEach((key) => params.push(event[key]));
    exports.fire(event.type, ...params);
    const handler = store.query(`GET_ON${event.type.toUpperCase()}`);
    if (handler) {
      handler(...params);
    }
  };
  const routeActionsToEvents = (actions2) => {
    if (!actions2.length)
      return;
    actions2.filter((action) => eventRoutes[action.type]).forEach((action) => {
      const routes = eventRoutes[action.type];
      (Array.isArray(routes) ? routes : [routes]).forEach((route2) => {
        if (action.type === "DID_INIT_ITEM") {
          exposeEvent(route2(action.data));
        } else {
          setTimeout(() => {
            exposeEvent(route2(action.data));
          }, 0);
        }
      });
    });
  };
  const setOptions2 = (options) => store.dispatch("SET_OPTIONS", {options});
  const getFile2 = (query) => store.query("GET_ACTIVE_ITEM", query);
  const prepareFile = (query) => new Promise((resolve, reject) => {
    store.dispatch("REQUEST_ITEM_PREPARE", {
      query,
      success: (item2) => {
        resolve(item2);
      },
      failure: (error2) => {
        reject(error2);
      }
    });
  });
  const addFile = (source, options = {}) => new Promise((resolve, reject) => {
    addFiles([{source, options}], {index: options.index}).then((items) => resolve(items && items[0])).catch(reject);
  });
  const isFilePondFile = (obj) => obj.file && obj.id;
  const removeFile = (query, options) => {
    if (typeof query === "object" && !isFilePondFile(query) && !options) {
      options = query;
      query = void 0;
    }
    store.dispatch("REMOVE_ITEM", {...options, query});
    return store.query("GET_ACTIVE_ITEM", query) === null;
  };
  const addFiles = (...args) => new Promise((resolve, reject) => {
    const sources = [];
    const options = {};
    if (isArray(args[0])) {
      sources.push.apply(sources, args[0]);
      Object.assign(options, args[1] || {});
    } else {
      const lastArgument = args[args.length - 1];
      if (typeof lastArgument === "object" && !(lastArgument instanceof Blob)) {
        Object.assign(options, args.pop());
      }
      sources.push(...args);
    }
    store.dispatch("ADD_ITEMS", {
      items: sources,
      index: options.index,
      interactionMethod: InteractionMethod.API,
      success: resolve,
      failure: reject
    });
  });
  const getFiles2 = () => store.query("GET_ACTIVE_ITEMS");
  const processFile = (query) => new Promise((resolve, reject) => {
    store.dispatch("REQUEST_ITEM_PROCESSING", {
      query,
      success: (item2) => {
        resolve(item2);
      },
      failure: (error2) => {
        reject(error2);
      }
    });
  });
  const prepareFiles = (...args) => {
    const queries2 = Array.isArray(args[0]) ? args[0] : args;
    const items = queries2.length ? queries2 : getFiles2();
    return Promise.all(items.map(prepareFile));
  };
  const processFiles = (...args) => {
    const queries2 = Array.isArray(args[0]) ? args[0] : args;
    if (!queries2.length) {
      const files = getFiles2().filter((item2) => !(item2.status === ItemStatus.IDLE && item2.origin === FileOrigin.LOCAL) && item2.status !== ItemStatus.PROCESSING && item2.status !== ItemStatus.PROCESSING_COMPLETE && item2.status !== ItemStatus.PROCESSING_REVERT_ERROR);
      return Promise.all(files.map(processFile));
    }
    return Promise.all(queries2.map(processFile));
  };
  const removeFiles = (...args) => {
    const queries2 = Array.isArray(args[0]) ? args[0] : args;
    let options;
    if (typeof queries2[queries2.length - 1] === "object") {
      options = queries2.pop();
    } else if (Array.isArray(args[0])) {
      options = args[1];
    }
    const files = getFiles2();
    if (!queries2.length)
      return Promise.all(files.map((file2) => removeFile(file2, options)));
    const mappedQueries = queries2.map((query) => isNumber(query) ? files[query] ? files[query].id : null : query).filter((query) => query);
    return mappedQueries.map((q) => removeFile(q, options));
  };
  const exports = {
    ...on(),
    ...readWriteApi,
    ...createOptionAPI(store, defaultOptions2),
    setOptions: setOptions2,
    addFile,
    addFiles,
    getFile: getFile2,
    processFile,
    prepareFile,
    removeFile,
    moveFile: (query, index) => store.dispatch("MOVE_ITEM", {query, index}),
    getFiles: getFiles2,
    processFiles,
    removeFiles,
    prepareFiles,
    sort: (compare) => store.dispatch("SORT", {compare}),
    browse: () => {
      var input = view.element.querySelector("input[type=file]");
      if (input) {
        input.click();
      }
    },
    destroy: () => {
      exports.fire("destroy", view.element);
      store.dispatch("ABORT_ALL");
      view._destroy();
      window.removeEventListener("resize", resizeHandler);
      document.removeEventListener("visibilitychange", visibilityHandler);
      store.dispatch("DID_DESTROY");
    },
    insertBefore: (element) => insertBefore(view.element, element),
    insertAfter: (element) => insertAfter(view.element, element),
    appendTo: (element) => element.appendChild(view.element),
    replaceElement: (element) => {
      insertBefore(view.element, element);
      element.parentNode.removeChild(element);
      originalElement = element;
    },
    restoreElement: () => {
      if (!originalElement) {
        return;
      }
      insertAfter(originalElement, view.element);
      view.element.parentNode.removeChild(view.element);
      originalElement = null;
    },
    isAttachedTo: (element) => view.element === element || originalElement === element,
    element: {
      get: () => view.element
    },
    status: {
      get: () => store.query("GET_STATUS")
    }
  };
  store.dispatch("DID_INIT");
  return createObject(exports);
};
var createAppObject = (customOptions = {}) => {
  const defaultOptions2 = {};
  forin(getOptions(), (key, value) => {
    defaultOptions2[key] = value[0];
  });
  const app = createApp({
    ...defaultOptions2,
    ...customOptions
  });
  return app;
};
var lowerCaseFirstLetter = (string) => string.charAt(0).toLowerCase() + string.slice(1);
var attributeNameToPropertyName = (attributeName) => toCamels(attributeName.replace(/^data-/, ""));
var mapObject = (object, propertyMap) => {
  forin(propertyMap, (selector, mapping) => {
    forin(object, (property, value) => {
      const selectorRegExp = new RegExp(selector);
      const matches = selectorRegExp.test(property);
      if (!matches) {
        return;
      }
      delete object[property];
      if (mapping === false) {
        return;
      }
      if (isString(mapping)) {
        object[mapping] = value;
        return;
      }
      const group = mapping.group;
      if (isObject(mapping) && !object[group]) {
        object[group] = {};
      }
      object[group][lowerCaseFirstLetter(property.replace(selectorRegExp, ""))] = value;
    });
    if (mapping.mapping) {
      mapObject(object[mapping.group], mapping.mapping);
    }
  });
};
var getAttributesAsObject = (node, attributeMapping = {}) => {
  const attributes = [];
  forin(node.attributes, (index) => {
    attributes.push(node.attributes[index]);
  });
  const output = attributes.filter((attribute) => attribute.name).reduce((obj, attribute) => {
    const value = attr(node, attribute.name);
    obj[attributeNameToPropertyName(attribute.name)] = value === attribute.name ? true : value;
    return obj;
  }, {});
  mapObject(output, attributeMapping);
  return output;
};
var createAppAtElement = (element, options = {}) => {
  const attributeMapping = {
    "^class$": "className",
    "^multiple$": "allowMultiple",
    "^capture$": "captureMethod",
    "^webkitdirectory$": "allowDirectoriesOnly",
    "^server": {
      group: "server",
      mapping: {
        "^process": {
          group: "process"
        },
        "^revert": {
          group: "revert"
        },
        "^fetch": {
          group: "fetch"
        },
        "^restore": {
          group: "restore"
        },
        "^load": {
          group: "load"
        }
      }
    },
    "^type$": false,
    "^files$": false
  };
  applyFilters("SET_ATTRIBUTE_TO_OPTION_MAP", attributeMapping);
  const mergedOptions = {
    ...options
  };
  const attributeOptions = getAttributesAsObject(element.nodeName === "FIELDSET" ? element.querySelector("input[type=file]") : element, attributeMapping);
  Object.keys(attributeOptions).forEach((key) => {
    if (isObject(attributeOptions[key])) {
      if (!isObject(mergedOptions[key])) {
        mergedOptions[key] = {};
      }
      Object.assign(mergedOptions[key], attributeOptions[key]);
    } else {
      mergedOptions[key] = attributeOptions[key];
    }
  });
  mergedOptions.files = (options.files || []).concat(Array.from(element.querySelectorAll("input:not([type=file])")).map((input) => ({
    source: input.value,
    options: {
      type: input.dataset.type
    }
  })));
  const app = createAppObject(mergedOptions);
  if (element.files) {
    Array.from(element.files).forEach((file2) => {
      app.addFile(file2);
    });
  }
  app.replaceElement(element);
  return app;
};
var createApp$1 = (...args) => isNode(args[0]) ? createAppAtElement(...args) : createAppObject(...args);
var PRIVATE_METHODS = ["fire", "_read", "_write"];
var createAppAPI = (app) => {
  const api = {};
  copyObjectPropertiesToObject(app, api, PRIVATE_METHODS);
  return api;
};
var replaceInString = (string, replacements) => string.replace(/(?:{([a-zA-Z]+)})/g, (match, group) => replacements[group]);
var createWorker = (fn2) => {
  const workerBlob = new Blob(["(", fn2.toString(), ")()"], {
    type: "application/javascript"
  });
  const workerURL = URL.createObjectURL(workerBlob);
  const worker = new Worker(workerURL);
  return {
    transfer: (message, cb) => {
    },
    post: (message, cb, transferList) => {
      const id = getUniqueId();
      worker.onmessage = (e2) => {
        if (e2.data.id === id) {
          cb(e2.data.message);
        }
      };
      worker.postMessage({
        id,
        message
      }, transferList);
    },
    terminate: () => {
      worker.terminate();
      URL.revokeObjectURL(workerURL);
    }
  };
};
var loadImage = (url) => new Promise((resolve, reject) => {
  const img = new Image();
  img.onload = () => {
    resolve(img);
  };
  img.onerror = (e2) => {
    reject(e2);
  };
  img.src = url;
});
var renameFile = (file2, name2) => {
  const renamedFile = file2.slice(0, file2.size, file2.type);
  renamedFile.lastModifiedDate = file2.lastModifiedDate;
  renamedFile.name = name2;
  return renamedFile;
};
var copyFile = (file2) => renameFile(file2, file2.name);
var registeredPlugins = [];
var createAppPlugin = (plugin8) => {
  if (registeredPlugins.includes(plugin8)) {
    return;
  }
  registeredPlugins.push(plugin8);
  const pluginOutline = plugin8({
    addFilter,
    utils: {
      Type,
      forin,
      isString,
      isFile,
      toNaturalFileSize,
      replaceInString,
      getExtensionFromFilename,
      getFilenameWithoutExtension,
      guesstimateMimeType,
      getFileFromBlob,
      getFilenameFromURL,
      createRoute,
      createWorker,
      createView,
      createItemAPI,
      loadImage,
      copyFile,
      renameFile,
      createBlob,
      applyFilterChain,
      text,
      getNumericAspectRatioFromString
    },
    views: {
      fileActionButton
    }
  });
  extendDefaultOptions(pluginOutline.options);
};
var isOperaMini = () => Object.prototype.toString.call(window.operamini) === "[object OperaMini]";
var hasPromises = () => "Promise" in window;
var hasBlobSlice = () => "slice" in Blob.prototype;
var hasCreateObjectURL = () => "URL" in window && "createObjectURL" in window.URL;
var hasVisibility = () => "visibilityState" in document;
var hasTiming = () => "performance" in window;
var hasCSSSupports = () => "supports" in (window.CSS || {});
var isIE11 = () => /MSIE|Trident/.test(window.navigator.userAgent);
var supported = (() => {
  const isSupported = isBrowser() && !isOperaMini() && hasVisibility() && hasPromises() && hasBlobSlice() && hasCreateObjectURL() && hasTiming() && (hasCSSSupports() || isIE11());
  return () => isSupported;
})();
var state = {
  apps: []
};
var name = "filepond";
var fn = () => {
};
var Status$1 = {};
var FileStatus = {};
var FileOrigin$1 = {};
var OptionTypes = {};
var create$f = fn;
var destroy = fn;
var parse = fn;
var find = fn;
var registerPlugin = fn;
var getOptions$1 = fn;
var setOptions$1 = fn;
if (supported()) {
  createPainter(() => {
    state.apps.forEach((app) => app._read());
  }, (ts) => {
    state.apps.forEach((app) => app._write(ts));
  });
  const dispatch2 = () => {
    document.dispatchEvent(new CustomEvent("FilePond:loaded", {
      detail: {
        supported,
        create: create$f,
        destroy,
        parse,
        find,
        registerPlugin,
        setOptions: setOptions$1
      }
    }));
    document.removeEventListener("DOMContentLoaded", dispatch2);
  };
  if (document.readyState !== "loading") {
    setTimeout(() => dispatch2(), 0);
  } else {
    document.addEventListener("DOMContentLoaded", dispatch2);
  }
  const updateOptionTypes = () => forin(getOptions(), (key, value) => {
    OptionTypes[key] = value[1];
  });
  Status$1 = {...Status};
  FileOrigin$1 = {...FileOrigin};
  FileStatus = {...ItemStatus};
  OptionTypes = {};
  updateOptionTypes();
  create$f = (...args) => {
    const app = createApp$1(...args);
    app.on("destroy", destroy);
    state.apps.push(app);
    return createAppAPI(app);
  };
  destroy = (hook) => {
    const indexToRemove = state.apps.findIndex((app) => app.isAttachedTo(hook));
    if (indexToRemove >= 0) {
      const app = state.apps.splice(indexToRemove, 1)[0];
      app.restoreElement();
      return true;
    }
    return false;
  };
  parse = (context) => {
    const matchedHooks = Array.from(context.querySelectorAll(`.${name}`));
    const newHooks = matchedHooks.filter((newHook) => !state.apps.find((app) => app.isAttachedTo(newHook)));
    return newHooks.map((hook) => create$f(hook));
  };
  find = (hook) => {
    const app = state.apps.find((app2) => app2.isAttachedTo(hook));
    if (!app) {
      return null;
    }
    return createAppAPI(app);
  };
  registerPlugin = (...plugins) => {
    plugins.forEach(createAppPlugin);
    updateOptionTypes();
  };
  getOptions$1 = () => {
    const opts = {};
    forin(getOptions(), (key, value) => {
      opts[key] = value[0];
    });
    return opts;
  };
  setOptions$1 = (opts) => {
    if (isObject(opts)) {
      state.apps.forEach((app) => {
        app.setOptions(opts);
      });
      setOptions(opts);
    }
    return getOptions$1();
  };
}

// node_modules/filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.esm.js
/*!
 * FilePondPluginFileValidateSize 2.2.5
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
var plugin = ({addFilter: addFilter2, utils}) => {
  const {Type: Type2, replaceInString: replaceInString2, toNaturalFileSize: toNaturalFileSize2} = utils;
  addFilter2("ALLOW_HOPPER_ITEM", (file2, {query}) => {
    if (!query("GET_ALLOW_FILE_SIZE_VALIDATION")) {
      return true;
    }
    const sizeMax = query("GET_MAX_FILE_SIZE");
    if (sizeMax !== null && file2.size >= sizeMax) {
      return false;
    }
    const sizeMin = query("GET_MIN_FILE_SIZE");
    if (sizeMin !== null && file2.size <= sizeMin) {
      return false;
    }
    return true;
  });
  addFilter2("LOAD_FILE", (file2, {query}) => new Promise((resolve, reject) => {
    if (!query("GET_ALLOW_FILE_SIZE_VALIDATION")) {
      return resolve(file2);
    }
    const fileFilter = query("GET_FILE_VALIDATE_SIZE_FILTER");
    if (fileFilter && !fileFilter(file2)) {
      return resolve(file2);
    }
    const sizeMax = query("GET_MAX_FILE_SIZE");
    if (sizeMax !== null && file2.size >= sizeMax) {
      reject({
        status: {
          main: query("GET_LABEL_MAX_FILE_SIZE_EXCEEDED"),
          sub: replaceInString2(query("GET_LABEL_MAX_FILE_SIZE"), {
            filesize: toNaturalFileSize2(sizeMax, ".", query("GET_FILE_SIZE_BASE"), query("GET_FILE_SIZE_LABELS", query))
          })
        }
      });
      return;
    }
    const sizeMin = query("GET_MIN_FILE_SIZE");
    if (sizeMin !== null && file2.size <= sizeMin) {
      reject({
        status: {
          main: query("GET_LABEL_MIN_FILE_SIZE_EXCEEDED"),
          sub: replaceInString2(query("GET_LABEL_MIN_FILE_SIZE"), {
            filesize: toNaturalFileSize2(sizeMin, ".", query("GET_FILE_SIZE_BASE"), query("GET_FILE_SIZE_LABELS", query))
          })
        }
      });
      return;
    }
    const totalSizeMax = query("GET_MAX_TOTAL_FILE_SIZE");
    if (totalSizeMax !== null) {
      const currentTotalSize = query("GET_ACTIVE_ITEMS").reduce((total, item2) => {
        return total + item2.fileSize;
      }, 0);
      if (currentTotalSize > totalSizeMax) {
        reject({
          status: {
            main: query("GET_LABEL_MAX_TOTAL_FILE_SIZE_EXCEEDED"),
            sub: replaceInString2(query("GET_LABEL_MAX_TOTAL_FILE_SIZE"), {
              filesize: toNaturalFileSize2(totalSizeMax, ".", query("GET_FILE_SIZE_BASE"), query("GET_FILE_SIZE_LABELS", query))
            })
          }
        });
        return;
      }
    }
    resolve(file2);
  }));
  return {
    options: {
      allowFileSizeValidation: [true, Type2.BOOLEAN],
      maxFileSize: [null, Type2.INT],
      minFileSize: [null, Type2.INT],
      maxTotalFileSize: [null, Type2.INT],
      fileValidateSizeFilter: [null, Type2.FUNCTION],
      labelMinFileSizeExceeded: ["File is too small", Type2.STRING],
      labelMinFileSize: ["Minimum file size is {filesize}", Type2.STRING],
      labelMaxFileSizeExceeded: ["File is too large", Type2.STRING],
      labelMaxFileSize: ["Maximum file size is {filesize}", Type2.STRING],
      labelMaxTotalFileSizeExceeded: ["Maximum total size exceeded", Type2.STRING],
      labelMaxTotalFileSize: ["Maximum total file size is {filesize}", Type2.STRING]
    }
  };
};
var isBrowser2 = typeof window !== "undefined" && typeof window.document !== "undefined";
if (isBrowser2) {
  document.dispatchEvent(new CustomEvent("FilePond:pluginloaded", {detail: plugin}));
}
var filepond_plugin_file_validate_size_esm_default = plugin;

// node_modules/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js
/*!
 * FilePondPluginFileValidateType 1.2.6
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
var plugin2 = ({addFilter: addFilter2, utils}) => {
  const {
    Type: Type2,
    isString: isString3,
    replaceInString: replaceInString2,
    guesstimateMimeType: guesstimateMimeType2,
    getExtensionFromFilename: getExtensionFromFilename2,
    getFilenameFromURL: getFilenameFromURL2
  } = utils;
  const mimeTypeMatchesWildCard = (mimeType, wildcard) => {
    const mimeTypeGroup = (/^[^/]+/.exec(mimeType) || []).pop();
    const wildcardGroup = wildcard.slice(0, -2);
    return mimeTypeGroup === wildcardGroup;
  };
  const isValidMimeType = (acceptedTypes, userInputType) => acceptedTypes.some((acceptedType) => {
    if (/\*$/.test(acceptedType)) {
      return mimeTypeMatchesWildCard(userInputType, acceptedType);
    }
    return acceptedType === userInputType;
  });
  const getItemType = (item2) => {
    let type = "";
    if (isString3(item2)) {
      const filename = getFilenameFromURL2(item2);
      const extension = getExtensionFromFilename2(filename);
      if (extension) {
        type = guesstimateMimeType2(extension);
      }
    } else {
      type = item2.type;
    }
    return type;
  };
  const validateFile = (item2, acceptedFileTypes, typeDetector) => {
    if (acceptedFileTypes.length === 0) {
      return true;
    }
    const type = getItemType(item2);
    if (!typeDetector) {
      return isValidMimeType(acceptedFileTypes, type);
    }
    return new Promise((resolve, reject) => {
      typeDetector(item2, type).then((detectedType) => {
        if (isValidMimeType(acceptedFileTypes, detectedType)) {
          resolve();
        } else {
          reject();
        }
      }).catch(reject);
    });
  };
  const applyMimeTypeMap = (map2) => (acceptedFileType) => map2[acceptedFileType] === null ? false : map2[acceptedFileType] || acceptedFileType;
  addFilter2("SET_ATTRIBUTE_TO_OPTION_MAP", (map2) => Object.assign(map2, {
    accept: "acceptedFileTypes"
  }));
  addFilter2("ALLOW_HOPPER_ITEM", (file2, {query}) => {
    if (!query("GET_ALLOW_FILE_TYPE_VALIDATION")) {
      return true;
    }
    return validateFile(file2, query("GET_ACCEPTED_FILE_TYPES"));
  });
  addFilter2("LOAD_FILE", (file2, {query}) => new Promise((resolve, reject) => {
    if (!query("GET_ALLOW_FILE_TYPE_VALIDATION")) {
      resolve(file2);
      return;
    }
    const acceptedFileTypes = query("GET_ACCEPTED_FILE_TYPES");
    const typeDetector = query("GET_FILE_VALIDATE_TYPE_DETECT_TYPE");
    const validationResult = validateFile(file2, acceptedFileTypes, typeDetector);
    const handleRejection = () => {
      const acceptedFileTypesMapped = acceptedFileTypes.map(applyMimeTypeMap(query("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES_MAP"))).filter((label) => label !== false);
      reject({
        status: {
          main: query("GET_LABEL_FILE_TYPE_NOT_ALLOWED"),
          sub: replaceInString2(query("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES"), {
            allTypes: acceptedFileTypesMapped.join(", "),
            allButLastType: acceptedFileTypesMapped.slice(0, -1).join(", "),
            lastType: acceptedFileTypesMapped[acceptedFileTypesMapped.length - 1]
          })
        }
      });
    };
    if (typeof validationResult === "boolean") {
      if (!validationResult) {
        return handleRejection();
      }
      return resolve(file2);
    }
    validationResult.then(() => {
      resolve(file2);
    }).catch(handleRejection);
  }));
  return {
    options: {
      allowFileTypeValidation: [true, Type2.BOOLEAN],
      acceptedFileTypes: [[], Type2.ARRAY],
      labelFileTypeNotAllowed: ["File is of invalid type", Type2.STRING],
      fileValidateTypeLabelExpectedTypes: [
        "Expects {allButLastType} or {lastType}",
        Type2.STRING
      ],
      fileValidateTypeLabelExpectedTypesMap: [{}, Type2.OBJECT],
      fileValidateTypeDetectType: [null, Type2.FUNCTION]
    }
  };
};
var isBrowser3 = typeof window !== "undefined" && typeof window.document !== "undefined";
if (isBrowser3) {
  document.dispatchEvent(new CustomEvent("FilePond:pluginloaded", {detail: plugin2}));
}
var filepond_plugin_file_validate_type_esm_default = plugin2;

// node_modules/filepond-plugin-image-crop/dist/filepond-plugin-image-crop.esm.js
/*!
 * FilePondPluginImageCrop 2.0.6
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
var isImage = (file2) => /^image/.test(file2.type);
var plugin3 = ({addFilter: addFilter2, utils}) => {
  const {Type: Type2, isFile: isFile2, getNumericAspectRatioFromString: getNumericAspectRatioFromString2} = utils;
  const allowCrop = (item2, query) => !(!isImage(item2.file) || !query("GET_ALLOW_IMAGE_CROP"));
  const isObject2 = (value) => typeof value === "object";
  const isNumber2 = (value) => typeof value === "number";
  const updateCrop = (item2, obj) => item2.setMetadata("crop", Object.assign({}, item2.getMetadata("crop"), obj));
  addFilter2("DID_CREATE_ITEM", (item2, {query}) => {
    item2.extend("setImageCrop", (crop) => {
      if (!allowCrop(item2, query) || !isObject2(center))
        return;
      item2.setMetadata("crop", crop);
      return crop;
    });
    item2.extend("setImageCropCenter", (center2) => {
      if (!allowCrop(item2, query) || !isObject2(center2))
        return;
      return updateCrop(item2, {center: center2});
    });
    item2.extend("setImageCropZoom", (zoom) => {
      if (!allowCrop(item2, query) || !isNumber2(zoom))
        return;
      return updateCrop(item2, {zoom: Math.max(1, zoom)});
    });
    item2.extend("setImageCropRotation", (rotation) => {
      if (!allowCrop(item2, query) || !isNumber2(rotation))
        return;
      return updateCrop(item2, {rotation});
    });
    item2.extend("setImageCropFlip", (flip) => {
      if (!allowCrop(item2, query) || !isObject2(flip))
        return;
      return updateCrop(item2, {flip});
    });
    item2.extend("setImageCropAspectRatio", (newAspectRatio) => {
      if (!allowCrop(item2, query) || typeof newAspectRatio === "undefined")
        return;
      const currentCrop = item2.getMetadata("crop");
      const aspectRatio = getNumericAspectRatioFromString2(newAspectRatio);
      const newCrop = {
        center: {
          x: 0.5,
          y: 0.5
        },
        flip: currentCrop ? Object.assign({}, currentCrop.flip) : {
          horizontal: false,
          vertical: false
        },
        rotation: 0,
        zoom: 1,
        aspectRatio
      };
      item2.setMetadata("crop", newCrop);
      return newCrop;
    });
  });
  addFilter2("DID_LOAD_ITEM", (item2, {query}) => new Promise((resolve, reject) => {
    const file2 = item2.file;
    if (!isFile2(file2) || !isImage(file2) || !query("GET_ALLOW_IMAGE_CROP")) {
      return resolve(item2);
    }
    const crop = item2.getMetadata("crop");
    if (crop) {
      return resolve(item2);
    }
    const humanAspectRatio = query("GET_IMAGE_CROP_ASPECT_RATIO");
    item2.setMetadata("crop", {
      center: {
        x: 0.5,
        y: 0.5
      },
      flip: {
        horizontal: false,
        vertical: false
      },
      rotation: 0,
      zoom: 1,
      aspectRatio: humanAspectRatio ? getNumericAspectRatioFromString2(humanAspectRatio) : null
    });
    resolve(item2);
  }));
  return {
    options: {
      allowImageCrop: [true, Type2.BOOLEAN],
      imageCropAspectRatio: [null, Type2.STRING]
    }
  };
};
var isBrowser4 = typeof window !== "undefined" && typeof window.document !== "undefined";
if (isBrowser4) {
  document.dispatchEvent(new CustomEvent("FilePond:pluginloaded", {detail: plugin3}));
}
var filepond_plugin_image_crop_esm_default = plugin3;

// node_modules/filepond-plugin-image-exif-orientation/dist/filepond-plugin-image-exif-orientation.esm.js
/*!
 * FilePondPluginImageExifOrientation 1.0.11
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
var isJPEG = (file2) => /^image\/jpeg/.test(file2.type);
var Marker = {
  JPEG: 65496,
  APP1: 65505,
  EXIF: 1165519206,
  TIFF: 18761,
  Orientation: 274,
  Unknown: 65280
};
var getUint16 = (view, offset, little = false) => view.getUint16(offset, little);
var getUint32 = (view, offset, little = false) => view.getUint32(offset, little);
var getImageOrientation = (file2) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = function(e2) {
    const view = new DataView(e2.target.result);
    if (getUint16(view, 0) !== Marker.JPEG) {
      resolve(-1);
      return;
    }
    const length = view.byteLength;
    let offset = 2;
    while (offset < length) {
      const marker = getUint16(view, offset);
      offset += 2;
      if (marker === Marker.APP1) {
        if (getUint32(view, offset += 2) !== Marker.EXIF) {
          break;
        }
        const little = getUint16(view, offset += 6) === Marker.TIFF;
        offset += getUint32(view, offset + 4, little);
        const tags = getUint16(view, offset, little);
        offset += 2;
        for (let i = 0; i < tags; i++) {
          if (getUint16(view, offset + i * 12, little) === Marker.Orientation) {
            resolve(getUint16(view, offset + i * 12 + 8, little));
            return;
          }
        }
      } else if ((marker & Marker.Unknown) !== Marker.Unknown) {
        break;
      } else {
        offset += getUint16(view, offset);
      }
    }
    resolve(-1);
  };
  reader.readAsArrayBuffer(file2.slice(0, 64 * 1024));
});
var IS_BROWSER2 = (() => typeof window !== "undefined" && typeof window.document !== "undefined")();
var isBrowser5 = () => IS_BROWSER2;
var testSrc = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QA6RXhpZgAATU0AKgAAAAgAAwESAAMAAAABAAYAAAEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wAALCAABAAIBASIA/8QAJgABAAAAAAAAAAAAAAAAAAAAAxABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQAAPwBH/9k=";
var shouldCorrect = void 0;
var testImage = isBrowser5() ? new Image() : {};
testImage.onload = () => shouldCorrect = testImage.naturalWidth > testImage.naturalHeight;
testImage.src = testSrc;
var shouldCorrectImageExifOrientation = () => shouldCorrect;
var plugin4 = ({addFilter: addFilter2, utils}) => {
  const {Type: Type2, isFile: isFile2} = utils;
  addFilter2("DID_LOAD_ITEM", (item2, {query}) => new Promise((resolve, reject) => {
    const file2 = item2.file;
    if (!isFile2(file2) || !isJPEG(file2) || !query("GET_ALLOW_IMAGE_EXIF_ORIENTATION") || !shouldCorrectImageExifOrientation()) {
      return resolve(item2);
    }
    getImageOrientation(file2).then((orientation) => {
      item2.setMetadata("exif", {orientation});
      resolve(item2);
    });
  }));
  return {
    options: {
      allowImageExifOrientation: [true, Type2.BOOLEAN]
    }
  };
};
var isBrowser$1 = typeof window !== "undefined" && typeof window.document !== "undefined";
if (isBrowser$1) {
  document.dispatchEvent(new CustomEvent("FilePond:pluginloaded", {detail: plugin4}));
}
var filepond_plugin_image_exif_orientation_esm_default = plugin4;

// node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js
/*!
 * FilePondPluginImagePreview 4.6.10
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
var isPreviewableImage = (file2) => /^image/.test(file2.type);
var vectorMultiply = (v, amount) => createVector(v.x * amount, v.y * amount);
var vectorAdd = (a2, b) => createVector(a2.x + b.x, a2.y + b.y);
var vectorNormalize = (v) => {
  const l = Math.sqrt(v.x * v.x + v.y * v.y);
  if (l === 0) {
    return {
      x: 0,
      y: 0
    };
  }
  return createVector(v.x / l, v.y / l);
};
var vectorRotate = (v, radians, origin) => {
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);
  const t2 = createVector(v.x - origin.x, v.y - origin.y);
  return createVector(origin.x + cos * t2.x - sin * t2.y, origin.y + sin * t2.x + cos * t2.y);
};
var createVector = (x = 0, y = 0) => ({x, y});
var getMarkupValue = (value, size, scalar = 1, axis) => {
  if (typeof value === "string") {
    return parseFloat(value) * scalar;
  }
  if (typeof value === "number") {
    return value * (axis ? size[axis] : Math.min(size.width, size.height));
  }
  return;
};
var getMarkupStyles = (markup, size, scale) => {
  const lineStyle = markup.borderStyle || markup.lineStyle || "solid";
  const fill = markup.backgroundColor || markup.fontColor || "transparent";
  const stroke = markup.borderColor || markup.lineColor || "transparent";
  const strokeWidth = getMarkupValue(markup.borderWidth || markup.lineWidth, size, scale);
  const lineCap = markup.lineCap || "round";
  const lineJoin = markup.lineJoin || "round";
  const dashes = typeof lineStyle === "string" ? "" : lineStyle.map((v) => getMarkupValue(v, size, scale)).join(",");
  const opacity = markup.opacity || 1;
  return {
    "stroke-linecap": lineCap,
    "stroke-linejoin": lineJoin,
    "stroke-width": strokeWidth || 0,
    "stroke-dasharray": dashes,
    stroke,
    fill,
    opacity
  };
};
var isDefined2 = (value) => value != null;
var getMarkupRect = (rect, size, scalar = 1) => {
  let left = getMarkupValue(rect.x, size, scalar, "width") || getMarkupValue(rect.left, size, scalar, "width");
  let top = getMarkupValue(rect.y, size, scalar, "height") || getMarkupValue(rect.top, size, scalar, "height");
  let width = getMarkupValue(rect.width, size, scalar, "width");
  let height = getMarkupValue(rect.height, size, scalar, "height");
  let right = getMarkupValue(rect.right, size, scalar, "width");
  let bottom = getMarkupValue(rect.bottom, size, scalar, "height");
  if (!isDefined2(top)) {
    if (isDefined2(height) && isDefined2(bottom)) {
      top = size.height - height - bottom;
    } else {
      top = bottom;
    }
  }
  if (!isDefined2(left)) {
    if (isDefined2(width) && isDefined2(right)) {
      left = size.width - width - right;
    } else {
      left = right;
    }
  }
  if (!isDefined2(width)) {
    if (isDefined2(left) && isDefined2(right)) {
      width = size.width - left - right;
    } else {
      width = 0;
    }
  }
  if (!isDefined2(height)) {
    if (isDefined2(top) && isDefined2(bottom)) {
      height = size.height - top - bottom;
    } else {
      height = 0;
    }
  }
  return {
    x: left || 0,
    y: top || 0,
    width: width || 0,
    height: height || 0
  };
};
var pointsToPathShape = (points) => points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
var setAttributes = (element, attr2) => Object.keys(attr2).forEach((key) => element.setAttribute(key, attr2[key]));
var ns2 = "http://www.w3.org/2000/svg";
var svg = (tag, attr2) => {
  const element = document.createElementNS(ns2, tag);
  if (attr2) {
    setAttributes(element, attr2);
  }
  return element;
};
var updateRect2 = (element) => setAttributes(element, {
  ...element.rect,
  ...element.styles
});
var updateEllipse = (element) => {
  const cx = element.rect.x + element.rect.width * 0.5;
  const cy = element.rect.y + element.rect.height * 0.5;
  const rx = element.rect.width * 0.5;
  const ry = element.rect.height * 0.5;
  return setAttributes(element, {
    cx,
    cy,
    rx,
    ry,
    ...element.styles
  });
};
var IMAGE_FIT_STYLE = {
  contain: "xMidYMid meet",
  cover: "xMidYMid slice"
};
var updateImage = (element, markup) => {
  setAttributes(element, {
    ...element.rect,
    ...element.styles,
    preserveAspectRatio: IMAGE_FIT_STYLE[markup.fit] || "none"
  });
};
var TEXT_ANCHOR = {
  left: "start",
  center: "middle",
  right: "end"
};
var updateText = (element, markup, size, scale) => {
  const fontSize = getMarkupValue(markup.fontSize, size, scale);
  const fontFamily = markup.fontFamily || "sans-serif";
  const fontWeight = markup.fontWeight || "normal";
  const textAlign = TEXT_ANCHOR[markup.textAlign] || "start";
  setAttributes(element, {
    ...element.rect,
    ...element.styles,
    "stroke-width": 0,
    "font-weight": fontWeight,
    "font-size": fontSize,
    "font-family": fontFamily,
    "text-anchor": textAlign
  });
  if (element.text !== markup.text) {
    element.text = markup.text;
    element.textContent = markup.text.length ? markup.text : " ";
  }
};
var updateLine = (element, markup, size, scale) => {
  setAttributes(element, {
    ...element.rect,
    ...element.styles,
    fill: "none"
  });
  const line = element.childNodes[0];
  const begin = element.childNodes[1];
  const end = element.childNodes[2];
  const origin = element.rect;
  const target = {
    x: element.rect.x + element.rect.width,
    y: element.rect.y + element.rect.height
  };
  setAttributes(line, {
    x1: origin.x,
    y1: origin.y,
    x2: target.x,
    y2: target.y
  });
  if (!markup.lineDecoration)
    return;
  begin.style.display = "none";
  end.style.display = "none";
  const v = vectorNormalize({
    x: target.x - origin.x,
    y: target.y - origin.y
  });
  const l = getMarkupValue(0.05, size, scale);
  if (markup.lineDecoration.indexOf("arrow-begin") !== -1) {
    const arrowBeginRotationPoint = vectorMultiply(v, l);
    const arrowBeginCenter = vectorAdd(origin, arrowBeginRotationPoint);
    const arrowBeginA = vectorRotate(origin, 2, arrowBeginCenter);
    const arrowBeginB = vectorRotate(origin, -2, arrowBeginCenter);
    setAttributes(begin, {
      style: "display:block;",
      d: `M${arrowBeginA.x},${arrowBeginA.y} L${origin.x},${origin.y} L${arrowBeginB.x},${arrowBeginB.y}`
    });
  }
  if (markup.lineDecoration.indexOf("arrow-end") !== -1) {
    const arrowEndRotationPoint = vectorMultiply(v, -l);
    const arrowEndCenter = vectorAdd(target, arrowEndRotationPoint);
    const arrowEndA = vectorRotate(target, 2, arrowEndCenter);
    const arrowEndB = vectorRotate(target, -2, arrowEndCenter);
    setAttributes(end, {
      style: "display:block;",
      d: `M${arrowEndA.x},${arrowEndA.y} L${target.x},${target.y} L${arrowEndB.x},${arrowEndB.y}`
    });
  }
};
var updatePath = (element, markup, size, scale) => {
  setAttributes(element, {
    ...element.styles,
    fill: "none",
    d: pointsToPathShape(markup.points.map((point) => ({
      x: getMarkupValue(point.x, size, scale, "width"),
      y: getMarkupValue(point.y, size, scale, "height")
    })))
  });
};
var createShape = (node) => (markup) => svg(node, {id: markup.id});
var createImage = (markup) => {
  const shape = svg("image", {
    id: markup.id,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    opacity: "0"
  });
  shape.onload = () => {
    shape.setAttribute("opacity", markup.opacity || 1);
  };
  shape.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", markup.src);
  return shape;
};
var createLine = (markup) => {
  const shape = svg("g", {
    id: markup.id,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  });
  const line = svg("line");
  shape.appendChild(line);
  const begin = svg("path");
  shape.appendChild(begin);
  const end = svg("path");
  shape.appendChild(end);
  return shape;
};
var CREATE_TYPE_ROUTES = {
  image: createImage,
  rect: createShape("rect"),
  ellipse: createShape("ellipse"),
  text: createShape("text"),
  path: createShape("path"),
  line: createLine
};
var UPDATE_TYPE_ROUTES = {
  rect: updateRect2,
  ellipse: updateEllipse,
  image: updateImage,
  text: updateText,
  path: updatePath,
  line: updateLine
};
var createMarkupByType = (type, markup) => CREATE_TYPE_ROUTES[type](markup);
var updateMarkupByType = (element, type, markup, size, scale) => {
  if (type !== "path") {
    element.rect = getMarkupRect(markup, size, scale);
  }
  element.styles = getMarkupStyles(markup, size, scale);
  UPDATE_TYPE_ROUTES[type](element, markup, size, scale);
};
var MARKUP_RECT = [
  "x",
  "y",
  "left",
  "top",
  "right",
  "bottom",
  "width",
  "height"
];
var toOptionalFraction = (value) => typeof value === "string" && /%/.test(value) ? parseFloat(value) / 100 : value;
var prepareMarkup = (markup) => {
  const [type, props] = markup;
  const rect = props.points ? {} : MARKUP_RECT.reduce((prev, curr) => {
    prev[curr] = toOptionalFraction(props[curr]);
    return prev;
  }, {});
  return [
    type,
    {
      zIndex: 0,
      ...props,
      ...rect
    }
  ];
};
var sortMarkupByZIndex = (a2, b) => {
  if (a2[1].zIndex > b[1].zIndex) {
    return 1;
  }
  if (a2[1].zIndex < b[1].zIndex) {
    return -1;
  }
  return 0;
};
var createMarkupView = (_) => _.utils.createView({
  name: "image-preview-markup",
  tag: "svg",
  ignoreRect: true,
  mixins: {
    apis: ["width", "height", "crop", "markup", "resize", "dirty"]
  },
  write: ({root: root2, props}) => {
    if (!props.dirty)
      return;
    const {crop, resize, markup} = props;
    const viewWidth = props.width;
    const viewHeight = props.height;
    let cropWidth = crop.width;
    let cropHeight = crop.height;
    if (resize) {
      const {size: size2} = resize;
      let outputWidth = size2 && size2.width;
      let outputHeight = size2 && size2.height;
      const outputFit = resize.mode;
      const outputUpscale = resize.upscale;
      if (outputWidth && !outputHeight)
        outputHeight = outputWidth;
      if (outputHeight && !outputWidth)
        outputWidth = outputHeight;
      const shouldUpscale = cropWidth < outputWidth && cropHeight < outputHeight;
      if (!shouldUpscale || shouldUpscale && outputUpscale) {
        let scalarWidth = outputWidth / cropWidth;
        let scalarHeight = outputHeight / cropHeight;
        if (outputFit === "force") {
          cropWidth = outputWidth;
          cropHeight = outputHeight;
        } else {
          let scalar;
          if (outputFit === "cover") {
            scalar = Math.max(scalarWidth, scalarHeight);
          } else if (outputFit === "contain") {
            scalar = Math.min(scalarWidth, scalarHeight);
          }
          cropWidth = cropWidth * scalar;
          cropHeight = cropHeight * scalar;
        }
      }
    }
    const size = {
      width: viewWidth,
      height: viewHeight
    };
    root2.element.setAttribute("width", size.width);
    root2.element.setAttribute("height", size.height);
    const scale = Math.min(viewWidth / cropWidth, viewHeight / cropHeight);
    root2.element.innerHTML = "";
    const markupFilter = root2.query("GET_IMAGE_PREVIEW_MARKUP_FILTER");
    markup.filter(markupFilter).map(prepareMarkup).sort(sortMarkupByZIndex).forEach((markup2) => {
      const [type, settings] = markup2;
      const element = createMarkupByType(type, settings);
      updateMarkupByType(element, type, settings, size, scale);
      root2.element.appendChild(element);
    });
  }
});
var createVector$1 = (x, y) => ({x, y});
var vectorDot = (a2, b) => a2.x * b.x + a2.y * b.y;
var vectorSubtract = (a2, b) => createVector$1(a2.x - b.x, a2.y - b.y);
var vectorDistanceSquared = (a2, b) => vectorDot(vectorSubtract(a2, b), vectorSubtract(a2, b));
var vectorDistance = (a2, b) => Math.sqrt(vectorDistanceSquared(a2, b));
var getOffsetPointOnEdge = (length, rotation) => {
  const a2 = length;
  const A = 1.5707963267948966;
  const B = rotation;
  const C3 = 1.5707963267948966 - rotation;
  const sinA = Math.sin(A);
  const sinB = Math.sin(B);
  const sinC = Math.sin(C3);
  const cosC = Math.cos(C3);
  const ratio = a2 / sinA;
  const b = ratio * sinB;
  const c2 = ratio * sinC;
  return createVector$1(cosC * b, cosC * c2);
};
var getRotatedRectSize = (rect, rotation) => {
  const w = rect.width;
  const h = rect.height;
  const hor = getOffsetPointOnEdge(w, rotation);
  const ver = getOffsetPointOnEdge(h, rotation);
  const tl = createVector$1(rect.x + Math.abs(hor.x), rect.y - Math.abs(hor.y));
  const tr = createVector$1(rect.x + rect.width + Math.abs(ver.y), rect.y + Math.abs(ver.x));
  const bl = createVector$1(rect.x - Math.abs(ver.y), rect.y + rect.height - Math.abs(ver.x));
  return {
    width: vectorDistance(tl, tr),
    height: vectorDistance(tl, bl)
  };
};
var calculateCanvasSize = (image, canvasAspectRatio, zoom = 1) => {
  const imageAspectRatio = image.height / image.width;
  let canvasWidth = 1;
  let canvasHeight = canvasAspectRatio;
  let imgWidth = 1;
  let imgHeight = imageAspectRatio;
  if (imgHeight > canvasHeight) {
    imgHeight = canvasHeight;
    imgWidth = imgHeight / imageAspectRatio;
  }
  const scalar = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
  const width = image.width / (zoom * scalar * imgWidth);
  const height = width * canvasAspectRatio;
  return {
    width,
    height
  };
};
var getImageRectZoomFactor = (imageRect, cropRect, rotation, center2) => {
  const cx = center2.x > 0.5 ? 1 - center2.x : center2.x;
  const cy = center2.y > 0.5 ? 1 - center2.y : center2.y;
  const imageWidth = cx * 2 * imageRect.width;
  const imageHeight = cy * 2 * imageRect.height;
  const rotatedCropSize = getRotatedRectSize(cropRect, rotation);
  return Math.max(rotatedCropSize.width / imageWidth, rotatedCropSize.height / imageHeight);
};
var getCenteredCropRect = (container, aspectRatio) => {
  let width = container.width;
  let height = width * aspectRatio;
  if (height > container.height) {
    height = container.height;
    width = height / aspectRatio;
  }
  const x = (container.width - width) * 0.5;
  const y = (container.height - height) * 0.5;
  return {
    x,
    y,
    width,
    height
  };
};
var getCurrentCropSize = (imageSize, crop = {}) => {
  let {zoom, rotation, center: center2, aspectRatio} = crop;
  if (!aspectRatio)
    aspectRatio = imageSize.height / imageSize.width;
  const canvasSize = calculateCanvasSize(imageSize, aspectRatio, zoom);
  const canvasCenter = {
    x: canvasSize.width * 0.5,
    y: canvasSize.height * 0.5
  };
  const stage = {
    x: 0,
    y: 0,
    width: canvasSize.width,
    height: canvasSize.height,
    center: canvasCenter
  };
  const shouldLimit = typeof crop.scaleToFit === "undefined" || crop.scaleToFit;
  const stageZoomFactor = getImageRectZoomFactor(imageSize, getCenteredCropRect(stage, aspectRatio), rotation, shouldLimit ? center2 : {x: 0.5, y: 0.5});
  const scale = zoom * stageZoomFactor;
  return {
    widthFloat: canvasSize.width / scale,
    heightFloat: canvasSize.height / scale,
    width: Math.round(canvasSize.width / scale),
    height: Math.round(canvasSize.height / scale)
  };
};
var IMAGE_SCALE_SPRING_PROPS = {
  type: "spring",
  stiffness: 0.5,
  damping: 0.45,
  mass: 10
};
var createBitmapView = (_) => _.utils.createView({
  name: "image-bitmap",
  ignoreRect: true,
  mixins: {styles: ["scaleX", "scaleY"]},
  create: ({root: root2, props}) => {
    root2.appendChild(props.image);
  }
});
var createImageCanvasWrapper = (_) => _.utils.createView({
  name: "image-canvas-wrapper",
  tag: "div",
  ignoreRect: true,
  mixins: {
    apis: ["crop", "width", "height"],
    styles: [
      "originX",
      "originY",
      "translateX",
      "translateY",
      "scaleX",
      "scaleY",
      "rotateZ"
    ],
    animations: {
      originX: IMAGE_SCALE_SPRING_PROPS,
      originY: IMAGE_SCALE_SPRING_PROPS,
      scaleX: IMAGE_SCALE_SPRING_PROPS,
      scaleY: IMAGE_SCALE_SPRING_PROPS,
      translateX: IMAGE_SCALE_SPRING_PROPS,
      translateY: IMAGE_SCALE_SPRING_PROPS,
      rotateZ: IMAGE_SCALE_SPRING_PROPS
    }
  },
  create: ({root: root2, props}) => {
    props.width = props.image.width;
    props.height = props.image.height;
    root2.ref.bitmap = root2.appendChildView(root2.createChildView(createBitmapView(_), {image: props.image}));
  },
  write: ({root: root2, props}) => {
    const {flip} = props.crop;
    const {bitmap} = root2.ref;
    bitmap.scaleX = flip.horizontal ? -1 : 1;
    bitmap.scaleY = flip.vertical ? -1 : 1;
  }
});
var createClipView = (_) => _.utils.createView({
  name: "image-clip",
  tag: "div",
  ignoreRect: true,
  mixins: {
    apis: [
      "crop",
      "markup",
      "resize",
      "width",
      "height",
      "dirty",
      "background"
    ],
    styles: ["width", "height", "opacity"],
    animations: {
      opacity: {type: "tween", duration: 250}
    }
  },
  didWriteView: function({root: root2, props}) {
    if (!props.background)
      return;
    root2.element.style.backgroundColor = props.background;
  },
  create: ({root: root2, props}) => {
    root2.ref.image = root2.appendChildView(root2.createChildView(createImageCanvasWrapper(_), Object.assign({}, props)));
    root2.ref.createMarkup = () => {
      if (root2.ref.markup)
        return;
      root2.ref.markup = root2.appendChildView(root2.createChildView(createMarkupView(_), Object.assign({}, props)));
    };
    root2.ref.destroyMarkup = () => {
      if (!root2.ref.markup)
        return;
      root2.removeChildView(root2.ref.markup);
      root2.ref.markup = null;
    };
    const transparencyIndicator = root2.query("GET_IMAGE_PREVIEW_TRANSPARENCY_INDICATOR");
    if (transparencyIndicator === null)
      return;
    if (transparencyIndicator === "grid") {
      root2.element.dataset.transparencyIndicator = transparencyIndicator;
    } else {
      root2.element.dataset.transparencyIndicator = "color";
    }
  },
  write: ({root: root2, props, shouldOptimize}) => {
    const {crop, markup, resize, dirty, width, height} = props;
    root2.ref.image.crop = crop;
    const stage = {
      x: 0,
      y: 0,
      width,
      height,
      center: {
        x: width * 0.5,
        y: height * 0.5
      }
    };
    const image = {
      width: root2.ref.image.width,
      height: root2.ref.image.height
    };
    const origin = {
      x: crop.center.x * image.width,
      y: crop.center.y * image.height
    };
    const translation = {
      x: stage.center.x - image.width * crop.center.x,
      y: stage.center.y - image.height * crop.center.y
    };
    const rotation = Math.PI * 2 + crop.rotation % (Math.PI * 2);
    const cropAspectRatio = crop.aspectRatio || image.height / image.width;
    const shouldLimit = typeof crop.scaleToFit === "undefined" || crop.scaleToFit;
    const stageZoomFactor = getImageRectZoomFactor(image, getCenteredCropRect(stage, cropAspectRatio), rotation, shouldLimit ? crop.center : {x: 0.5, y: 0.5});
    const scale = crop.zoom * stageZoomFactor;
    if (markup && markup.length) {
      root2.ref.createMarkup();
      root2.ref.markup.width = width;
      root2.ref.markup.height = height;
      root2.ref.markup.resize = resize;
      root2.ref.markup.dirty = dirty;
      root2.ref.markup.markup = markup;
      root2.ref.markup.crop = getCurrentCropSize(image, crop);
    } else if (root2.ref.markup) {
      root2.ref.destroyMarkup();
    }
    const imageView = root2.ref.image;
    if (shouldOptimize) {
      imageView.originX = null;
      imageView.originY = null;
      imageView.translateX = null;
      imageView.translateY = null;
      imageView.rotateZ = null;
      imageView.scaleX = null;
      imageView.scaleY = null;
      return;
    }
    imageView.originX = origin.x;
    imageView.originY = origin.y;
    imageView.translateX = translation.x;
    imageView.translateY = translation.y;
    imageView.rotateZ = rotation;
    imageView.scaleX = scale;
    imageView.scaleY = scale;
  }
});
var createImageView = (_) => _.utils.createView({
  name: "image-preview",
  tag: "div",
  ignoreRect: true,
  mixins: {
    apis: ["image", "crop", "markup", "resize", "dirty", "background"],
    styles: ["translateY", "scaleX", "scaleY", "opacity"],
    animations: {
      scaleX: IMAGE_SCALE_SPRING_PROPS,
      scaleY: IMAGE_SCALE_SPRING_PROPS,
      translateY: IMAGE_SCALE_SPRING_PROPS,
      opacity: {type: "tween", duration: 400}
    }
  },
  create: ({root: root2, props}) => {
    root2.ref.clip = root2.appendChildView(root2.createChildView(createClipView(_), {
      id: props.id,
      image: props.image,
      crop: props.crop,
      markup: props.markup,
      resize: props.resize,
      dirty: props.dirty,
      background: props.background
    }));
  },
  write: ({root: root2, props, shouldOptimize}) => {
    const {clip} = root2.ref;
    const {image, crop, markup, resize, dirty} = props;
    clip.crop = crop;
    clip.markup = markup;
    clip.resize = resize;
    clip.dirty = dirty;
    clip.opacity = shouldOptimize ? 0 : 1;
    if (shouldOptimize || root2.rect.element.hidden)
      return;
    const imageAspectRatio = image.height / image.width;
    let aspectRatio = crop.aspectRatio || imageAspectRatio;
    const containerWidth = root2.rect.inner.width;
    const containerHeight = root2.rect.inner.height;
    let fixedPreviewHeight = root2.query("GET_IMAGE_PREVIEW_HEIGHT");
    const minPreviewHeight = root2.query("GET_IMAGE_PREVIEW_MIN_HEIGHT");
    const maxPreviewHeight = root2.query("GET_IMAGE_PREVIEW_MAX_HEIGHT");
    const panelAspectRatio = root2.query("GET_PANEL_ASPECT_RATIO");
    const allowMultiple = root2.query("GET_ALLOW_MULTIPLE");
    if (panelAspectRatio && !allowMultiple) {
      fixedPreviewHeight = containerWidth * panelAspectRatio;
      aspectRatio = panelAspectRatio;
    }
    let clipHeight = fixedPreviewHeight !== null ? fixedPreviewHeight : Math.max(minPreviewHeight, Math.min(containerWidth * aspectRatio, maxPreviewHeight));
    let clipWidth = clipHeight / aspectRatio;
    if (clipWidth > containerWidth) {
      clipWidth = containerWidth;
      clipHeight = clipWidth * aspectRatio;
    }
    if (clipHeight > containerHeight) {
      clipHeight = containerHeight;
      clipWidth = containerHeight / aspectRatio;
    }
    clip.width = clipWidth;
    clip.height = clipHeight;
  }
});
var SVG_MASK = `<svg width="500" height="200" viewBox="0 0 500 200" preserveAspectRatio="none">
    <defs>
        <radialGradient id="gradient-__UID__" cx=".5" cy="1.25" r="1.15">
            <stop offset='50%' stop-color='#000000'/>
            <stop offset='56%' stop-color='#0a0a0a'/>
            <stop offset='63%' stop-color='#262626'/>
            <stop offset='69%' stop-color='#4f4f4f'/>
            <stop offset='75%' stop-color='#808080'/>
            <stop offset='81%' stop-color='#b1b1b1'/>
            <stop offset='88%' stop-color='#dadada'/>
            <stop offset='94%' stop-color='#f6f6f6'/>
            <stop offset='100%' stop-color='#ffffff'/>
        </radialGradient>
        <mask id="mask-__UID__">
            <rect x="0" y="0" width="500" height="200" fill="url(#gradient-__UID__)"></rect>
        </mask>
    </defs>
    <rect x="0" width="500" height="200" fill="currentColor" mask="url(#mask-__UID__)"></rect>
</svg>`;
var SVGMaskUniqueId = 0;
var createImageOverlayView = (fpAPI) => fpAPI.utils.createView({
  name: "image-preview-overlay",
  tag: "div",
  ignoreRect: true,
  create: ({root: root2, props}) => {
    let mask = SVG_MASK;
    if (document.querySelector("base")) {
      const url = window.location.href.replace(window.location.hash, "");
      mask = mask.replace(/url\(\#/g, "url(" + url + "#");
    }
    SVGMaskUniqueId++;
    root2.element.classList.add(`filepond--image-preview-overlay-${props.status}`);
    root2.element.innerHTML = mask.replace(/__UID__/g, SVGMaskUniqueId);
  },
  mixins: {
    styles: ["opacity"],
    animations: {
      opacity: {type: "spring", mass: 25}
    }
  }
});
var BitmapWorker = function() {
  self.onmessage = (e2) => {
    createImageBitmap(e2.data.message.file).then((bitmap) => {
      self.postMessage({id: e2.data.id, message: bitmap}, [bitmap]);
    });
  };
};
var ColorMatrixWorker = function() {
  self.onmessage = (e2) => {
    const imageData = e2.data.message.imageData;
    const matrix = e2.data.message.colorMatrix;
    const data3 = imageData.data;
    const l = data3.length;
    const m11 = matrix[0];
    const m12 = matrix[1];
    const m13 = matrix[2];
    const m14 = matrix[3];
    const m15 = matrix[4];
    const m21 = matrix[5];
    const m22 = matrix[6];
    const m23 = matrix[7];
    const m24 = matrix[8];
    const m25 = matrix[9];
    const m31 = matrix[10];
    const m32 = matrix[11];
    const m33 = matrix[12];
    const m34 = matrix[13];
    const m35 = matrix[14];
    const m41 = matrix[15];
    const m42 = matrix[16];
    const m43 = matrix[17];
    const m44 = matrix[18];
    const m45 = matrix[19];
    let index = 0, r2 = 0, g = 0, b = 0, a2 = 0;
    for (; index < l; index += 4) {
      r2 = data3[index] / 255;
      g = data3[index + 1] / 255;
      b = data3[index + 2] / 255;
      a2 = data3[index + 3] / 255;
      data3[index] = Math.max(0, Math.min((r2 * m11 + g * m12 + b * m13 + a2 * m14 + m15) * 255, 255));
      data3[index + 1] = Math.max(0, Math.min((r2 * m21 + g * m22 + b * m23 + a2 * m24 + m25) * 255, 255));
      data3[index + 2] = Math.max(0, Math.min((r2 * m31 + g * m32 + b * m33 + a2 * m34 + m35) * 255, 255));
      data3[index + 3] = Math.max(0, Math.min((r2 * m41 + g * m42 + b * m43 + a2 * m44 + m45) * 255, 255));
    }
    self.postMessage({id: e2.data.id, message: imageData}, [
      imageData.data.buffer
    ]);
  };
};
var getImageSize = (url, cb) => {
  let image = new Image();
  image.onload = () => {
    const width = image.naturalWidth;
    const height = image.naturalHeight;
    image = null;
    cb(width, height);
  };
  image.src = url;
};
var transforms = {
  1: () => [1, 0, 0, 1, 0, 0],
  2: (width) => [-1, 0, 0, 1, width, 0],
  3: (width, height) => [-1, 0, 0, -1, width, height],
  4: (width, height) => [1, 0, 0, -1, 0, height],
  5: () => [0, 1, 1, 0, 0, 0],
  6: (width, height) => [0, 1, -1, 0, height, 0],
  7: (width, height) => [0, -1, -1, 0, height, width],
  8: (width) => [0, -1, 1, 0, 0, width]
};
var fixImageOrientation = (ctx, width, height, orientation) => {
  if (orientation === -1) {
    return;
  }
  ctx.transform.apply(ctx, transforms[orientation](width, height));
};
var createPreviewImage = (data3, width, height, orientation) => {
  width = Math.round(width);
  height = Math.round(height);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (orientation >= 5 && orientation <= 8) {
    [width, height] = [height, width];
  }
  fixImageOrientation(ctx, width, height, orientation);
  ctx.drawImage(data3, 0, 0, width, height);
  return canvas;
};
var isBitmap = (file2) => /^image/.test(file2.type) && !/svg/.test(file2.type);
var MAX_WIDTH = 10;
var MAX_HEIGHT = 10;
var calculateAverageColor = (image) => {
  const scalar = Math.min(MAX_WIDTH / image.width, MAX_HEIGHT / image.height);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const width = canvas.width = Math.ceil(image.width * scalar);
  const height = canvas.height = Math.ceil(image.height * scalar);
  ctx.drawImage(image, 0, 0, width, height);
  let data3 = null;
  try {
    data3 = ctx.getImageData(0, 0, width, height).data;
  } catch (e2) {
    return null;
  }
  const l = data3.length;
  let r2 = 0;
  let g = 0;
  let b = 0;
  let i = 0;
  for (; i < l; i += 4) {
    r2 += data3[i] * data3[i];
    g += data3[i + 1] * data3[i + 1];
    b += data3[i + 2] * data3[i + 2];
  }
  r2 = averageColor(r2, l);
  g = averageColor(g, l);
  b = averageColor(b, l);
  return {r: r2, g, b};
};
var averageColor = (c2, l) => Math.floor(Math.sqrt(c2 / (l / 4)));
var cloneCanvas = (origin, target) => {
  target = target || document.createElement("canvas");
  target.width = origin.width;
  target.height = origin.height;
  const ctx = target.getContext("2d");
  ctx.drawImage(origin, 0, 0);
  return target;
};
var cloneImageData = (imageData) => {
  let id;
  try {
    id = new ImageData(imageData.width, imageData.height);
  } catch (e2) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    id = ctx.createImageData(imageData.width, imageData.height);
  }
  id.data.set(new Uint8ClampedArray(imageData.data));
  return id;
};
var loadImage2 = (url) => new Promise((resolve, reject) => {
  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.onload = () => {
    resolve(img);
  };
  img.onerror = (e2) => {
    reject(e2);
  };
  img.src = url;
});
var createImageWrapperView = (_) => {
  const OverlayView = createImageOverlayView(_);
  const ImageView = createImageView(_);
  const {createWorker: createWorker3} = _.utils;
  const applyFilter = (root2, filter, target) => new Promise((resolve) => {
    if (!root2.ref.imageData) {
      root2.ref.imageData = target.getContext("2d").getImageData(0, 0, target.width, target.height);
    }
    const imageData = cloneImageData(root2.ref.imageData);
    if (!filter || filter.length !== 20) {
      target.getContext("2d").putImageData(imageData, 0, 0);
      return resolve();
    }
    const worker = createWorker3(ColorMatrixWorker);
    worker.post({
      imageData,
      colorMatrix: filter
    }, (response) => {
      target.getContext("2d").putImageData(response, 0, 0);
      worker.terminate();
      resolve();
    }, [imageData.data.buffer]);
  });
  const removeImageView = (root2, imageView) => {
    root2.removeChildView(imageView);
    imageView.image.width = 1;
    imageView.image.height = 1;
    imageView._destroy();
  };
  const shiftImage = ({root: root2}) => {
    const imageView = root2.ref.images.shift();
    imageView.opacity = 0;
    imageView.translateY = -15;
    root2.ref.imageViewBin.push(imageView);
    return imageView;
  };
  const pushImage = ({root: root2, props, image}) => {
    const id = props.id;
    const item2 = root2.query("GET_ITEM", {id});
    if (!item2)
      return;
    const crop = item2.getMetadata("crop") || {
      center: {
        x: 0.5,
        y: 0.5
      },
      flip: {
        horizontal: false,
        vertical: false
      },
      zoom: 1,
      rotation: 0,
      aspectRatio: null
    };
    const background = root2.query("GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR");
    let markup;
    let resize;
    let dirty = false;
    if (root2.query("GET_IMAGE_PREVIEW_MARKUP_SHOW")) {
      markup = item2.getMetadata("markup") || [];
      resize = item2.getMetadata("resize");
      dirty = true;
    }
    const imageView = root2.appendChildView(root2.createChildView(ImageView, {
      id,
      image,
      crop,
      resize,
      markup,
      dirty,
      background,
      opacity: 0,
      scaleX: 1.15,
      scaleY: 1.15,
      translateY: 15
    }), root2.childViews.length);
    root2.ref.images.push(imageView);
    imageView.opacity = 1;
    imageView.scaleX = 1;
    imageView.scaleY = 1;
    imageView.translateY = 0;
    setTimeout(() => {
      root2.dispatch("DID_IMAGE_PREVIEW_SHOW", {id});
    }, 250);
  };
  const updateImage3 = ({root: root2, props}) => {
    const item2 = root2.query("GET_ITEM", {id: props.id});
    if (!item2)
      return;
    const imageView = root2.ref.images[root2.ref.images.length - 1];
    imageView.crop = item2.getMetadata("crop");
    imageView.background = root2.query("GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR");
    if (root2.query("GET_IMAGE_PREVIEW_MARKUP_SHOW")) {
      imageView.dirty = true;
      imageView.resize = item2.getMetadata("resize");
      imageView.markup = item2.getMetadata("markup");
    }
  };
  const didUpdateItemMetadata = ({root: root2, props, action}) => {
    if (!/crop|filter|markup|resize/.test(action.change.key))
      return;
    if (!root2.ref.images.length)
      return;
    const item2 = root2.query("GET_ITEM", {id: props.id});
    if (!item2)
      return;
    if (/filter/.test(action.change.key)) {
      const imageView = root2.ref.images[root2.ref.images.length - 1];
      applyFilter(root2, action.change.value, imageView.image);
      return;
    }
    if (/crop|markup|resize/.test(action.change.key)) {
      const crop = item2.getMetadata("crop");
      const image = root2.ref.images[root2.ref.images.length - 1];
      if (crop && crop.aspectRatio && image.crop && image.crop.aspectRatio && Math.abs(crop.aspectRatio - image.crop.aspectRatio) > 1e-5) {
        const imageView = shiftImage({root: root2});
        pushImage({root: root2, props, image: cloneCanvas(imageView.image)});
      } else {
        updateImage3({root: root2, props});
      }
    }
  };
  const canCreateImageBitmap = (file2) => {
    const userAgent = window.navigator.userAgent;
    const isFirefox = userAgent.match(/Firefox\/([0-9]+)\./);
    const firefoxVersion = isFirefox ? parseInt(isFirefox[1]) : null;
    if (firefoxVersion <= 58)
      return false;
    return "createImageBitmap" in window && isBitmap(file2);
  };
  const didCreatePreviewContainer = ({root: root2, props}) => {
    const {id} = props;
    const item2 = root2.query("GET_ITEM", id);
    if (!item2)
      return;
    const fileURL = URL.createObjectURL(item2.file);
    getImageSize(fileURL, (width, height) => {
      root2.dispatch("DID_IMAGE_PREVIEW_CALCULATE_SIZE", {
        id,
        width,
        height
      });
    });
  };
  const drawPreview = ({root: root2, props}) => {
    const {id} = props;
    const item2 = root2.query("GET_ITEM", id);
    if (!item2)
      return;
    const fileURL = URL.createObjectURL(item2.file);
    const loadPreviewFallback = () => {
      loadImage2(fileURL).then(previewImageLoaded);
    };
    const previewImageLoaded = (imageData) => {
      URL.revokeObjectURL(fileURL);
      const exif = item2.getMetadata("exif") || {};
      const orientation = exif.orientation || -1;
      let {width, height} = imageData;
      if (!width || !height)
        return;
      if (orientation >= 5 && orientation <= 8) {
        [width, height] = [height, width];
      }
      const pixelDensityFactor = Math.max(1, window.devicePixelRatio * 0.75);
      const zoomFactor = root2.query("GET_IMAGE_PREVIEW_ZOOM_FACTOR");
      const scaleFactor = zoomFactor * pixelDensityFactor;
      const previewImageRatio = height / width;
      const previewContainerWidth = root2.rect.element.width;
      const previewContainerHeight = root2.rect.element.height;
      let imageWidth = previewContainerWidth;
      let imageHeight = imageWidth * previewImageRatio;
      if (previewImageRatio > 1) {
        imageWidth = Math.min(width, previewContainerWidth * scaleFactor);
        imageHeight = imageWidth * previewImageRatio;
      } else {
        imageHeight = Math.min(height, previewContainerHeight * scaleFactor);
        imageWidth = imageHeight / previewImageRatio;
      }
      const previewImage = createPreviewImage(imageData, imageWidth, imageHeight, orientation);
      const done = () => {
        const averageColor2 = root2.query("GET_IMAGE_PREVIEW_CALCULATE_AVERAGE_IMAGE_COLOR") ? calculateAverageColor(data) : null;
        item2.setMetadata("color", averageColor2, true);
        if ("close" in imageData) {
          imageData.close();
        }
        root2.ref.overlayShadow.opacity = 1;
        pushImage({root: root2, props, image: previewImage});
      };
      const filter = item2.getMetadata("filter");
      if (filter) {
        applyFilter(root2, filter, previewImage).then(done);
      } else {
        done();
      }
    };
    if (canCreateImageBitmap(item2.file)) {
      const worker = createWorker3(BitmapWorker);
      worker.post({
        file: item2.file
      }, (imageBitmap) => {
        worker.terminate();
        if (!imageBitmap) {
          loadPreviewFallback();
          return;
        }
        previewImageLoaded(imageBitmap);
      });
    } else {
      loadPreviewFallback();
    }
  };
  const didDrawPreview = ({root: root2}) => {
    const image = root2.ref.images[root2.ref.images.length - 1];
    image.translateY = 0;
    image.scaleX = 1;
    image.scaleY = 1;
    image.opacity = 1;
  };
  const restoreOverlay = ({root: root2}) => {
    root2.ref.overlayShadow.opacity = 1;
    root2.ref.overlayError.opacity = 0;
    root2.ref.overlaySuccess.opacity = 0;
  };
  const didThrowError = ({root: root2}) => {
    root2.ref.overlayShadow.opacity = 0.25;
    root2.ref.overlayError.opacity = 1;
  };
  const didCompleteProcessing = ({root: root2}) => {
    root2.ref.overlayShadow.opacity = 0.25;
    root2.ref.overlaySuccess.opacity = 1;
  };
  const create2 = ({root: root2}) => {
    root2.ref.images = [];
    root2.ref.imageData = null;
    root2.ref.imageViewBin = [];
    root2.ref.overlayShadow = root2.appendChildView(root2.createChildView(OverlayView, {
      opacity: 0,
      status: "idle"
    }));
    root2.ref.overlaySuccess = root2.appendChildView(root2.createChildView(OverlayView, {
      opacity: 0,
      status: "success"
    }));
    root2.ref.overlayError = root2.appendChildView(root2.createChildView(OverlayView, {
      opacity: 0,
      status: "failure"
    }));
  };
  return _.utils.createView({
    name: "image-preview-wrapper",
    create: create2,
    styles: ["height"],
    apis: ["height"],
    destroy: ({root: root2}) => {
      root2.ref.images.forEach((imageView) => {
        imageView.image.width = 1;
        imageView.image.height = 1;
      });
    },
    didWriteView: ({root: root2}) => {
      root2.ref.images.forEach((imageView) => {
        imageView.dirty = false;
      });
    },
    write: _.utils.createRoute({
      DID_IMAGE_PREVIEW_DRAW: didDrawPreview,
      DID_IMAGE_PREVIEW_CONTAINER_CREATE: didCreatePreviewContainer,
      DID_FINISH_CALCULATE_PREVIEWSIZE: drawPreview,
      DID_UPDATE_ITEM_METADATA: didUpdateItemMetadata,
      DID_THROW_ITEM_LOAD_ERROR: didThrowError,
      DID_THROW_ITEM_PROCESSING_ERROR: didThrowError,
      DID_THROW_ITEM_INVALID: didThrowError,
      DID_COMPLETE_ITEM_PROCESSING: didCompleteProcessing,
      DID_START_ITEM_PROCESSING: restoreOverlay,
      DID_REVERT_ITEM_PROCESSING: restoreOverlay
    }, ({root: root2}) => {
      const viewsToRemove = root2.ref.imageViewBin.filter((imageView) => imageView.opacity === 0);
      root2.ref.imageViewBin = root2.ref.imageViewBin.filter((imageView) => imageView.opacity > 0);
      viewsToRemove.forEach((imageView) => removeImageView(root2, imageView));
      viewsToRemove.length = 0;
    })
  });
};
var plugin5 = (fpAPI) => {
  const {addFilter: addFilter2, utils} = fpAPI;
  const {Type: Type2, createRoute: createRoute2, isFile: isFile2} = utils;
  const imagePreviewView = createImageWrapperView(fpAPI);
  addFilter2("CREATE_VIEW", (viewAPI) => {
    const {is, view, query} = viewAPI;
    if (!is("file") || !query("GET_ALLOW_IMAGE_PREVIEW"))
      return;
    const didLoadItem2 = ({root: root2, props}) => {
      const {id} = props;
      const item2 = query("GET_ITEM", id);
      if (!item2 || !isFile2(item2.file) || item2.archived)
        return;
      const file2 = item2.file;
      if (!isPreviewableImage(file2))
        return;
      if (!query("GET_IMAGE_PREVIEW_FILTER_ITEM")(item2))
        return;
      const supportsCreateImageBitmap = "createImageBitmap" in (window || {});
      const maxPreviewFileSize = query("GET_IMAGE_PREVIEW_MAX_FILE_SIZE");
      if (!supportsCreateImageBitmap && (maxPreviewFileSize && file2.size > maxPreviewFileSize))
        return;
      root2.ref.imagePreview = view.appendChildView(view.createChildView(imagePreviewView, {id}));
      const fixedPreviewHeight = root2.query("GET_IMAGE_PREVIEW_HEIGHT");
      if (fixedPreviewHeight) {
        root2.dispatch("DID_UPDATE_PANEL_HEIGHT", {
          id: item2.id,
          height: fixedPreviewHeight
        });
      }
      const queue = !supportsCreateImageBitmap && file2.size > query("GET_IMAGE_PREVIEW_MAX_INSTANT_PREVIEW_FILE_SIZE");
      root2.dispatch("DID_IMAGE_PREVIEW_CONTAINER_CREATE", {id}, queue);
    };
    const rescaleItem = (root2, props) => {
      if (!root2.ref.imagePreview)
        return;
      let {id} = props;
      const item2 = root2.query("GET_ITEM", {id});
      if (!item2)
        return;
      const panelAspectRatio = root2.query("GET_PANEL_ASPECT_RATIO");
      const itemPanelAspectRatio = root2.query("GET_ITEM_PANEL_ASPECT_RATIO");
      const fixedHeight = root2.query("GET_IMAGE_PREVIEW_HEIGHT");
      if (panelAspectRatio || itemPanelAspectRatio || fixedHeight)
        return;
      let {imageWidth, imageHeight} = root2.ref;
      if (!imageWidth || !imageHeight)
        return;
      const minPreviewHeight = root2.query("GET_IMAGE_PREVIEW_MIN_HEIGHT");
      const maxPreviewHeight = root2.query("GET_IMAGE_PREVIEW_MAX_HEIGHT");
      const exif = item2.getMetadata("exif") || {};
      const orientation = exif.orientation || -1;
      if (orientation >= 5 && orientation <= 8)
        [imageWidth, imageHeight] = [imageHeight, imageWidth];
      if (!isBitmap(item2.file) || root2.query("GET_IMAGE_PREVIEW_UPSCALE")) {
        const scalar = 2048 / imageWidth;
        imageWidth *= scalar;
        imageHeight *= scalar;
      }
      const imageAspectRatio = imageHeight / imageWidth;
      const previewAspectRatio = (item2.getMetadata("crop") || {}).aspectRatio || imageAspectRatio;
      let previewHeightMax = Math.max(minPreviewHeight, Math.min(imageHeight, maxPreviewHeight));
      const itemWidth = root2.rect.element.width;
      const previewHeight = Math.min(itemWidth * previewAspectRatio, previewHeightMax);
      root2.dispatch("DID_UPDATE_PANEL_HEIGHT", {
        id: item2.id,
        height: previewHeight
      });
    };
    const didResizeView = ({root: root2}) => {
      root2.ref.shouldRescale = true;
    };
    const didUpdateItemMetadata = ({root: root2, action}) => {
      if (action.change.key !== "crop")
        return;
      root2.ref.shouldRescale = true;
    };
    const didCalculatePreviewSize = ({root: root2, action}) => {
      root2.ref.imageWidth = action.width;
      root2.ref.imageHeight = action.height;
      root2.ref.shouldRescale = true;
      root2.ref.shouldDrawPreview = true;
      root2.dispatch("KICK");
    };
    view.registerWriter(createRoute2({
      DID_RESIZE_ROOT: didResizeView,
      DID_STOP_RESIZE: didResizeView,
      DID_LOAD_ITEM: didLoadItem2,
      DID_IMAGE_PREVIEW_CALCULATE_SIZE: didCalculatePreviewSize,
      DID_UPDATE_ITEM_METADATA: didUpdateItemMetadata
    }, ({root: root2, props}) => {
      if (!root2.ref.imagePreview)
        return;
      if (root2.rect.element.hidden)
        return;
      if (root2.ref.shouldRescale) {
        rescaleItem(root2, props);
        root2.ref.shouldRescale = false;
      }
      if (root2.ref.shouldDrawPreview) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            root2.dispatch("DID_FINISH_CALCULATE_PREVIEWSIZE", {
              id: props.id
            });
          });
        });
        root2.ref.shouldDrawPreview = false;
      }
    }));
  });
  return {
    options: {
      allowImagePreview: [true, Type2.BOOLEAN],
      imagePreviewFilterItem: [() => true, Type2.FUNCTION],
      imagePreviewHeight: [null, Type2.INT],
      imagePreviewMinHeight: [44, Type2.INT],
      imagePreviewMaxHeight: [256, Type2.INT],
      imagePreviewMaxFileSize: [null, Type2.INT],
      imagePreviewZoomFactor: [2, Type2.INT],
      imagePreviewUpscale: [false, Type2.BOOLEAN],
      imagePreviewMaxInstantPreviewFileSize: [1e6, Type2.INT],
      imagePreviewTransparencyIndicator: [null, Type2.STRING],
      imagePreviewCalculateAverageImageColor: [false, Type2.BOOLEAN],
      imagePreviewMarkupShow: [true, Type2.BOOLEAN],
      imagePreviewMarkupFilter: [() => true, Type2.FUNCTION]
    }
  };
};
var isBrowser6 = typeof window !== "undefined" && typeof window.document !== "undefined";
if (isBrowser6) {
  document.dispatchEvent(new CustomEvent("FilePond:pluginloaded", {detail: plugin5}));
}
var filepond_plugin_image_preview_esm_default = plugin5;

// node_modules/filepond-plugin-image-resize/dist/filepond-plugin-image-resize.esm.js
/*!
 * FilePondPluginImageResize 2.0.10
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
var isImage2 = (file2) => /^image/.test(file2.type);
var getImageSize2 = (url, cb) => {
  let image = new Image();
  image.onload = () => {
    const width = image.naturalWidth;
    const height = image.naturalHeight;
    image = null;
    cb({width, height});
  };
  image.onerror = () => cb(null);
  image.src = url;
};
var plugin6 = ({addFilter: addFilter2, utils}) => {
  const {Type: Type2} = utils;
  addFilter2("DID_LOAD_ITEM", (item2, {query}) => new Promise((resolve, reject) => {
    const file2 = item2.file;
    if (!isImage2(file2) || !query("GET_ALLOW_IMAGE_RESIZE")) {
      return resolve(item2);
    }
    const mode = query("GET_IMAGE_RESIZE_MODE");
    const width = query("GET_IMAGE_RESIZE_TARGET_WIDTH");
    const height = query("GET_IMAGE_RESIZE_TARGET_HEIGHT");
    const upscale = query("GET_IMAGE_RESIZE_UPSCALE");
    if (width === null && height === null)
      return resolve(item2);
    const targetWidth = width === null ? height : width;
    const targetHeight = height === null ? targetWidth : height;
    const fileURL = URL.createObjectURL(file2);
    getImageSize2(fileURL, (size) => {
      URL.revokeObjectURL(fileURL);
      if (!size)
        return resolve(item2);
      let {width: imageWidth, height: imageHeight} = size;
      const orientation = (item2.getMetadata("exif") || {}).orientation || -1;
      if (orientation >= 5 && orientation <= 8) {
        [imageWidth, imageHeight] = [imageHeight, imageWidth];
      }
      if (imageWidth === targetWidth && imageHeight === targetHeight)
        return resolve(item2);
      if (!upscale) {
        if (mode === "cover") {
          if (imageWidth <= targetWidth || imageHeight <= targetHeight)
            return resolve(item2);
        } else if (imageWidth <= targetWidth && imageHeight <= targetWidth) {
          return resolve(item2);
        }
      }
      item2.setMetadata("resize", {
        mode,
        upscale,
        size: {
          width: targetWidth,
          height: targetHeight
        }
      });
      resolve(item2);
    });
  }));
  return {
    options: {
      allowImageResize: [true, Type2.BOOLEAN],
      imageResizeMode: ["cover", Type2.STRING],
      imageResizeUpscale: [true, Type2.BOOLEAN],
      imageResizeTargetWidth: [null, Type2.INT],
      imageResizeTargetHeight: [null, Type2.INT]
    }
  };
};
var isBrowser7 = typeof window !== "undefined" && typeof window.document !== "undefined";
if (isBrowser7) {
  document.dispatchEvent(new CustomEvent("FilePond:pluginloaded", {detail: plugin6}));
}
var filepond_plugin_image_resize_esm_default = plugin6;

// node_modules/filepond-plugin-image-transform/dist/filepond-plugin-image-transform.esm.js
/*!
 * FilePondPluginImageTransform 3.8.7
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
var isImage3 = (file2) => /^image/.test(file2.type);
var getFilenameWithoutExtension2 = (name2) => name2.substr(0, name2.lastIndexOf(".")) || name2;
var ExtensionMap = {
  jpeg: "jpg",
  "svg+xml": "svg"
};
var renameFileToMatchMimeType = (filename, mimeType) => {
  const name2 = getFilenameWithoutExtension2(filename);
  const type = mimeType.split("/")[1];
  const extension = ExtensionMap[type] || type;
  return `${name2}.${extension}`;
};
var getValidOutputMimeType = (type) => /jpeg|png|svg\+xml/.test(type) ? type : "image/jpeg";
var isImage$1 = (file2) => /^image/.test(file2.type);
var MATRICES = {
  1: () => [1, 0, 0, 1, 0, 0],
  2: (width) => [-1, 0, 0, 1, width, 0],
  3: (width, height) => [-1, 0, 0, -1, width, height],
  4: (width, height) => [1, 0, 0, -1, 0, height],
  5: () => [0, 1, 1, 0, 0, 0],
  6: (width, height) => [0, 1, -1, 0, height, 0],
  7: (width, height) => [0, -1, -1, 0, height, width],
  8: (width) => [0, -1, 1, 0, 0, width]
};
var getImageOrientationMatrix = (width, height, orientation) => {
  if (orientation === -1) {
    orientation = 1;
  }
  return MATRICES[orientation](width, height);
};
var createVector2 = (x, y) => ({x, y});
var vectorDot2 = (a2, b) => a2.x * b.x + a2.y * b.y;
var vectorSubtract2 = (a2, b) => createVector2(a2.x - b.x, a2.y - b.y);
var vectorDistanceSquared2 = (a2, b) => vectorDot2(vectorSubtract2(a2, b), vectorSubtract2(a2, b));
var vectorDistance2 = (a2, b) => Math.sqrt(vectorDistanceSquared2(a2, b));
var getOffsetPointOnEdge2 = (length, rotation) => {
  const a2 = length;
  const A = 1.5707963267948966;
  const B = rotation;
  const C3 = 1.5707963267948966 - rotation;
  const sinA = Math.sin(A);
  const sinB = Math.sin(B);
  const sinC = Math.sin(C3);
  const cosC = Math.cos(C3);
  const ratio = a2 / sinA;
  const b = ratio * sinB;
  const c2 = ratio * sinC;
  return createVector2(cosC * b, cosC * c2);
};
var getRotatedRectSize2 = (rect, rotation) => {
  const w = rect.width;
  const h = rect.height;
  const hor = getOffsetPointOnEdge2(w, rotation);
  const ver = getOffsetPointOnEdge2(h, rotation);
  const tl = createVector2(rect.x + Math.abs(hor.x), rect.y - Math.abs(hor.y));
  const tr = createVector2(rect.x + rect.width + Math.abs(ver.y), rect.y + Math.abs(ver.x));
  const bl = createVector2(rect.x - Math.abs(ver.y), rect.y + rect.height - Math.abs(ver.x));
  return {
    width: vectorDistance2(tl, tr),
    height: vectorDistance2(tl, bl)
  };
};
var getImageRectZoomFactor2 = (imageRect, cropRect, rotation = 0, center2 = {x: 0.5, y: 0.5}) => {
  const cx = center2.x > 0.5 ? 1 - center2.x : center2.x;
  const cy = center2.y > 0.5 ? 1 - center2.y : center2.y;
  const imageWidth = cx * 2 * imageRect.width;
  const imageHeight = cy * 2 * imageRect.height;
  const rotatedCropSize = getRotatedRectSize2(cropRect, rotation);
  return Math.max(rotatedCropSize.width / imageWidth, rotatedCropSize.height / imageHeight);
};
var getCenteredCropRect2 = (container, aspectRatio) => {
  let width = container.width;
  let height = width * aspectRatio;
  if (height > container.height) {
    height = container.height;
    width = height / aspectRatio;
  }
  const x = (container.width - width) * 0.5;
  const y = (container.height - height) * 0.5;
  return {
    x,
    y,
    width,
    height
  };
};
var calculateCanvasSize2 = (image, canvasAspectRatio, zoom = 1) => {
  const imageAspectRatio = image.height / image.width;
  let canvasWidth = 1;
  let canvasHeight = canvasAspectRatio;
  let imgWidth = 1;
  let imgHeight = imageAspectRatio;
  if (imgHeight > canvasHeight) {
    imgHeight = canvasHeight;
    imgWidth = imgHeight / imageAspectRatio;
  }
  const scalar = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
  const width = image.width / (zoom * scalar * imgWidth);
  const height = width * canvasAspectRatio;
  return {
    width,
    height
  };
};
var canvasRelease = (canvas) => {
  canvas.width = 1;
  canvas.height = 1;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 1, 1);
};
var isFlipped = (flip) => flip && (flip.horizontal || flip.vertical);
var getBitmap = (image, orientation, flip) => {
  if (orientation <= 1 && !isFlipped(flip)) {
    image.width = image.naturalWidth;
    image.height = image.naturalHeight;
    return image;
  }
  const canvas = document.createElement("canvas");
  const width = image.naturalWidth;
  const height = image.naturalHeight;
  const swapped = orientation >= 5 && orientation <= 8;
  if (swapped) {
    canvas.width = height;
    canvas.height = width;
  } else {
    canvas.width = width;
    canvas.height = height;
  }
  const ctx = canvas.getContext("2d");
  if (orientation) {
    ctx.transform.apply(ctx, getImageOrientationMatrix(width, height, orientation));
  }
  if (isFlipped(flip)) {
    const matrix = [1, 0, 0, 1, 0, 0];
    if (!swapped && flip.horizontal || swapped & flip.vertical) {
      matrix[0] = -1;
      matrix[4] = width;
    }
    if (!swapped && flip.vertical || swapped && flip.horizontal) {
      matrix[3] = -1;
      matrix[5] = height;
    }
    ctx.transform(...matrix);
  }
  ctx.drawImage(image, 0, 0, width, height);
  return canvas;
};
var imageToImageData = (imageElement, orientation, crop = {}, options = {}) => {
  const {canvasMemoryLimit, background = null} = options;
  const zoom = crop.zoom || 1;
  const bitmap = getBitmap(imageElement, orientation, crop.flip);
  const imageSize = {
    width: bitmap.width,
    height: bitmap.height
  };
  const aspectRatio = crop.aspectRatio || imageSize.height / imageSize.width;
  let canvasSize = calculateCanvasSize2(imageSize, aspectRatio, zoom);
  if (canvasMemoryLimit) {
    const requiredMemory = canvasSize.width * canvasSize.height;
    if (requiredMemory > canvasMemoryLimit) {
      const scalar = Math.sqrt(canvasMemoryLimit) / Math.sqrt(requiredMemory);
      imageSize.width = Math.floor(imageSize.width * scalar);
      imageSize.height = Math.floor(imageSize.height * scalar);
      canvasSize = calculateCanvasSize2(imageSize, aspectRatio, zoom);
    }
  }
  const canvas = document.createElement("canvas");
  const canvasCenter = {
    x: canvasSize.width * 0.5,
    y: canvasSize.height * 0.5
  };
  const stage = {
    x: 0,
    y: 0,
    width: canvasSize.width,
    height: canvasSize.height,
    center: canvasCenter
  };
  const shouldLimit = typeof crop.scaleToFit === "undefined" || crop.scaleToFit;
  const scale = zoom * getImageRectZoomFactor2(imageSize, getCenteredCropRect2(stage, aspectRatio), crop.rotation, shouldLimit ? crop.center : {x: 0.5, y: 0.5});
  canvas.width = Math.round(canvasSize.width / scale);
  canvas.height = Math.round(canvasSize.height / scale);
  canvasCenter.x /= scale;
  canvasCenter.y /= scale;
  const imageOffset = {
    x: canvasCenter.x - imageSize.width * (crop.center ? crop.center.x : 0.5),
    y: canvasCenter.y - imageSize.height * (crop.center ? crop.center.y : 0.5)
  };
  const ctx = canvas.getContext("2d");
  if (background) {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  ctx.translate(canvasCenter.x, canvasCenter.y);
  ctx.rotate(crop.rotation || 0);
  ctx.drawImage(bitmap, imageOffset.x - canvasCenter.x, imageOffset.y - canvasCenter.y, imageSize.width, imageSize.height);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  canvasRelease(canvas);
  return imageData;
};
var IS_BROWSER3 = (() => typeof window !== "undefined" && typeof window.document !== "undefined")();
if (IS_BROWSER3) {
  if (!HTMLCanvasElement.prototype.toBlob) {
    Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
      value: function(callback, type, quality) {
        var dataURL = this.toDataURL(type, quality).split(",")[1];
        setTimeout(function() {
          var binStr = atob(dataURL);
          var len = binStr.length;
          var arr = new Uint8Array(len);
          for (var i = 0; i < len; i++) {
            arr[i] = binStr.charCodeAt(i);
          }
          callback(new Blob([arr], {type: type || "image/png"}));
        });
      }
    });
  }
}
var canvasToBlob = (canvas, options, beforeCreateBlob = null) => new Promise((resolve) => {
  const promisedImage = beforeCreateBlob ? beforeCreateBlob(canvas) : canvas;
  Promise.resolve(promisedImage).then((canvas2) => {
    canvas2.toBlob(resolve, options.type, options.quality);
  });
});
var vectorMultiply2 = (v, amount) => createVector$12(v.x * amount, v.y * amount);
var vectorAdd2 = (a2, b) => createVector$12(a2.x + b.x, a2.y + b.y);
var vectorNormalize2 = (v) => {
  const l = Math.sqrt(v.x * v.x + v.y * v.y);
  if (l === 0) {
    return {
      x: 0,
      y: 0
    };
  }
  return createVector$12(v.x / l, v.y / l);
};
var vectorRotate2 = (v, radians, origin) => {
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);
  const t2 = createVector$12(v.x - origin.x, v.y - origin.y);
  return createVector$12(origin.x + cos * t2.x - sin * t2.y, origin.y + sin * t2.x + cos * t2.y);
};
var createVector$12 = (x = 0, y = 0) => ({x, y});
var getMarkupValue2 = (value, size, scalar = 1, axis) => {
  if (typeof value === "string") {
    return parseFloat(value) * scalar;
  }
  if (typeof value === "number") {
    return value * (axis ? size[axis] : Math.min(size.width, size.height));
  }
  return;
};
var getMarkupStyles2 = (markup, size, scale) => {
  const lineStyle = markup.borderStyle || markup.lineStyle || "solid";
  const fill = markup.backgroundColor || markup.fontColor || "transparent";
  const stroke = markup.borderColor || markup.lineColor || "transparent";
  const strokeWidth = getMarkupValue2(markup.borderWidth || markup.lineWidth, size, scale);
  const lineCap = markup.lineCap || "round";
  const lineJoin = markup.lineJoin || "round";
  const dashes = typeof lineStyle === "string" ? "" : lineStyle.map((v) => getMarkupValue2(v, size, scale)).join(",");
  const opacity = markup.opacity || 1;
  return {
    "stroke-linecap": lineCap,
    "stroke-linejoin": lineJoin,
    "stroke-width": strokeWidth || 0,
    "stroke-dasharray": dashes,
    stroke,
    fill,
    opacity
  };
};
var isDefined3 = (value) => value != null;
var getMarkupRect2 = (rect, size, scalar = 1) => {
  let left = getMarkupValue2(rect.x, size, scalar, "width") || getMarkupValue2(rect.left, size, scalar, "width");
  let top = getMarkupValue2(rect.y, size, scalar, "height") || getMarkupValue2(rect.top, size, scalar, "height");
  let width = getMarkupValue2(rect.width, size, scalar, "width");
  let height = getMarkupValue2(rect.height, size, scalar, "height");
  let right = getMarkupValue2(rect.right, size, scalar, "width");
  let bottom = getMarkupValue2(rect.bottom, size, scalar, "height");
  if (!isDefined3(top)) {
    if (isDefined3(height) && isDefined3(bottom)) {
      top = size.height - height - bottom;
    } else {
      top = bottom;
    }
  }
  if (!isDefined3(left)) {
    if (isDefined3(width) && isDefined3(right)) {
      left = size.width - width - right;
    } else {
      left = right;
    }
  }
  if (!isDefined3(width)) {
    if (isDefined3(left) && isDefined3(right)) {
      width = size.width - left - right;
    } else {
      width = 0;
    }
  }
  if (!isDefined3(height)) {
    if (isDefined3(top) && isDefined3(bottom)) {
      height = size.height - top - bottom;
    } else {
      height = 0;
    }
  }
  return {
    x: left || 0,
    y: top || 0,
    width: width || 0,
    height: height || 0
  };
};
var pointsToPathShape2 = (points) => points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
var setAttributes2 = (element, attr2) => Object.keys(attr2).forEach((key) => element.setAttribute(key, attr2[key]));
var ns3 = "http://www.w3.org/2000/svg";
var svg2 = (tag, attr2) => {
  const element = document.createElementNS(ns3, tag);
  if (attr2) {
    setAttributes2(element, attr2);
  }
  return element;
};
var updateRect3 = (element) => setAttributes2(element, {
  ...element.rect,
  ...element.styles
});
var updateEllipse2 = (element) => {
  const cx = element.rect.x + element.rect.width * 0.5;
  const cy = element.rect.y + element.rect.height * 0.5;
  const rx = element.rect.width * 0.5;
  const ry = element.rect.height * 0.5;
  return setAttributes2(element, {
    cx,
    cy,
    rx,
    ry,
    ...element.styles
  });
};
var IMAGE_FIT_STYLE2 = {
  contain: "xMidYMid meet",
  cover: "xMidYMid slice"
};
var updateImage2 = (element, markup) => {
  setAttributes2(element, {
    ...element.rect,
    ...element.styles,
    preserveAspectRatio: IMAGE_FIT_STYLE2[markup.fit] || "none"
  });
};
var TEXT_ANCHOR2 = {
  left: "start",
  center: "middle",
  right: "end"
};
var updateText2 = (element, markup, size, scale) => {
  const fontSize = getMarkupValue2(markup.fontSize, size, scale);
  const fontFamily = markup.fontFamily || "sans-serif";
  const fontWeight = markup.fontWeight || "normal";
  const textAlign = TEXT_ANCHOR2[markup.textAlign] || "start";
  setAttributes2(element, {
    ...element.rect,
    ...element.styles,
    "stroke-width": 0,
    "font-weight": fontWeight,
    "font-size": fontSize,
    "font-family": fontFamily,
    "text-anchor": textAlign
  });
  if (element.text !== markup.text) {
    element.text = markup.text;
    element.textContent = markup.text.length ? markup.text : " ";
  }
};
var updateLine2 = (element, markup, size, scale) => {
  setAttributes2(element, {
    ...element.rect,
    ...element.styles,
    fill: "none"
  });
  const line = element.childNodes[0];
  const begin = element.childNodes[1];
  const end = element.childNodes[2];
  const origin = element.rect;
  const target = {
    x: element.rect.x + element.rect.width,
    y: element.rect.y + element.rect.height
  };
  setAttributes2(line, {
    x1: origin.x,
    y1: origin.y,
    x2: target.x,
    y2: target.y
  });
  if (!markup.lineDecoration)
    return;
  begin.style.display = "none";
  end.style.display = "none";
  const v = vectorNormalize2({
    x: target.x - origin.x,
    y: target.y - origin.y
  });
  const l = getMarkupValue2(0.05, size, scale);
  if (markup.lineDecoration.indexOf("arrow-begin") !== -1) {
    const arrowBeginRotationPoint = vectorMultiply2(v, l);
    const arrowBeginCenter = vectorAdd2(origin, arrowBeginRotationPoint);
    const arrowBeginA = vectorRotate2(origin, 2, arrowBeginCenter);
    const arrowBeginB = vectorRotate2(origin, -2, arrowBeginCenter);
    setAttributes2(begin, {
      style: "display:block;",
      d: `M${arrowBeginA.x},${arrowBeginA.y} L${origin.x},${origin.y} L${arrowBeginB.x},${arrowBeginB.y}`
    });
  }
  if (markup.lineDecoration.indexOf("arrow-end") !== -1) {
    const arrowEndRotationPoint = vectorMultiply2(v, -l);
    const arrowEndCenter = vectorAdd2(target, arrowEndRotationPoint);
    const arrowEndA = vectorRotate2(target, 2, arrowEndCenter);
    const arrowEndB = vectorRotate2(target, -2, arrowEndCenter);
    setAttributes2(end, {
      style: "display:block;",
      d: `M${arrowEndA.x},${arrowEndA.y} L${target.x},${target.y} L${arrowEndB.x},${arrowEndB.y}`
    });
  }
};
var updatePath2 = (element, markup, size, scale) => {
  setAttributes2(element, {
    ...element.styles,
    fill: "none",
    d: pointsToPathShape2(markup.points.map((point) => ({
      x: getMarkupValue2(point.x, size, scale, "width"),
      y: getMarkupValue2(point.y, size, scale, "height")
    })))
  });
};
var createShape2 = (node) => (markup) => svg2(node, {id: markup.id});
var createImage2 = (markup) => {
  const shape = svg2("image", {
    id: markup.id,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    opacity: "0"
  });
  shape.onload = () => {
    shape.setAttribute("opacity", markup.opacity || 1);
  };
  shape.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", markup.src);
  return shape;
};
var createLine2 = (markup) => {
  const shape = svg2("g", {
    id: markup.id,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  });
  const line = svg2("line");
  shape.appendChild(line);
  const begin = svg2("path");
  shape.appendChild(begin);
  const end = svg2("path");
  shape.appendChild(end);
  return shape;
};
var CREATE_TYPE_ROUTES2 = {
  image: createImage2,
  rect: createShape2("rect"),
  ellipse: createShape2("ellipse"),
  text: createShape2("text"),
  path: createShape2("path"),
  line: createLine2
};
var UPDATE_TYPE_ROUTES2 = {
  rect: updateRect3,
  ellipse: updateEllipse2,
  image: updateImage2,
  text: updateText2,
  path: updatePath2,
  line: updateLine2
};
var createMarkupByType2 = (type, markup) => CREATE_TYPE_ROUTES2[type](markup);
var updateMarkupByType2 = (element, type, markup, size, scale) => {
  if (type !== "path") {
    element.rect = getMarkupRect2(markup, size, scale);
  }
  element.styles = getMarkupStyles2(markup, size, scale);
  UPDATE_TYPE_ROUTES2[type](element, markup, size, scale);
};
var sortMarkupByZIndex2 = (a2, b) => {
  if (a2[1].zIndex > b[1].zIndex) {
    return 1;
  }
  if (a2[1].zIndex < b[1].zIndex) {
    return -1;
  }
  return 0;
};
var cropSVG = (blob2, crop = {}, markup, options) => new Promise((resolve) => {
  const {background = null} = options;
  const fr = new FileReader();
  fr.onloadend = () => {
    const text2 = fr.result;
    const original = document.createElement("div");
    original.style.cssText = `position:absolute;pointer-events:none;width:0;height:0;visibility:hidden;`;
    original.innerHTML = text2;
    const originalNode = original.querySelector("svg");
    document.body.appendChild(original);
    const bBox = originalNode.getBBox();
    original.parentNode.removeChild(original);
    const titleNode = original.querySelector("title");
    const viewBoxAttribute = originalNode.getAttribute("viewBox") || "";
    const widthAttribute = originalNode.getAttribute("width") || "";
    const heightAttribute = originalNode.getAttribute("height") || "";
    let width = parseFloat(widthAttribute) || null;
    let height = parseFloat(heightAttribute) || null;
    const widthUnits = (widthAttribute.match(/[a-z]+/) || [])[0] || "";
    const heightUnits = (heightAttribute.match(/[a-z]+/) || [])[0] || "";
    const viewBoxList = viewBoxAttribute.split(" ").map(parseFloat);
    const viewBox = viewBoxList.length ? {
      x: viewBoxList[0],
      y: viewBoxList[1],
      width: viewBoxList[2],
      height: viewBoxList[3]
    } : bBox;
    let imageWidth = width != null ? width : viewBox.width;
    let imageHeight = height != null ? height : viewBox.height;
    originalNode.style.overflow = "visible";
    originalNode.setAttribute("width", imageWidth);
    originalNode.setAttribute("height", imageHeight);
    let markupSVG = "";
    if (markup && markup.length) {
      const size = {
        width: imageWidth,
        height: imageHeight
      };
      markupSVG = markup.sort(sortMarkupByZIndex2).reduce((prev, shape) => {
        const el = createMarkupByType2(shape[0], shape[1]);
        updateMarkupByType2(el, shape[0], shape[1], size);
        el.removeAttribute("id");
        if (el.getAttribute("opacity") === 1) {
          el.removeAttribute("opacity");
        }
        return prev + "\n" + el.outerHTML + "\n";
      }, "");
      markupSVG = `

<g>${markupSVG.replace(/&nbsp;/g, " ")}</g>

`;
    }
    const aspectRatio = crop.aspectRatio || imageHeight / imageWidth;
    const canvasWidth = imageWidth;
    const canvasHeight = canvasWidth * aspectRatio;
    const shouldLimit = typeof crop.scaleToFit === "undefined" || crop.scaleToFit;
    const cropCenterX = crop.center ? crop.center.x : 0.5;
    const cropCenterY = crop.center ? crop.center.y : 0.5;
    const canvasZoomFactor = getImageRectZoomFactor2({
      width: imageWidth,
      height: imageHeight
    }, getCenteredCropRect2({
      width: canvasWidth,
      height: canvasHeight
    }, aspectRatio), crop.rotation, shouldLimit ? {x: cropCenterX, y: cropCenterY} : {
      x: 0.5,
      y: 0.5
    });
    const scale = crop.zoom * canvasZoomFactor;
    const rotation = crop.rotation * (180 / Math.PI);
    const canvasCenter = {
      x: canvasWidth * 0.5,
      y: canvasHeight * 0.5
    };
    const imageOffset = {
      x: canvasCenter.x - imageWidth * cropCenterX,
      y: canvasCenter.y - imageHeight * cropCenterY
    };
    const cropTransforms = [
      `rotate(${rotation} ${canvasCenter.x} ${canvasCenter.y})`,
      `translate(${canvasCenter.x} ${canvasCenter.y})`,
      `scale(${scale})`,
      `translate(${-canvasCenter.x} ${-canvasCenter.y})`,
      `translate(${imageOffset.x} ${imageOffset.y})`
    ];
    const cropFlipHorizontal = crop.flip && crop.flip.horizontal;
    const cropFlipVertical = crop.flip && crop.flip.vertical;
    const flipTransforms = [
      `scale(${cropFlipHorizontal ? -1 : 1} ${cropFlipVertical ? -1 : 1})`,
      `translate(${cropFlipHorizontal ? -imageWidth : 0} ${cropFlipVertical ? -imageHeight : 0})`
    ];
    const transformed = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${canvasWidth}${widthUnits}" height="${canvasHeight}${heightUnits}" 
viewBox="0 0 ${canvasWidth} ${canvasHeight}" ${background ? 'style="background:' + background + '" ' : ""}
preserveAspectRatio="xMinYMin"
xmlns:xlink="http://www.w3.org/1999/xlink"
xmlns="http://www.w3.org/2000/svg">
<!-- Generated by PQINA - https://pqina.nl/ -->
<title>${titleNode ? titleNode.textContent : ""}</title>
<g transform="${cropTransforms.join(" ")}">
<g transform="${flipTransforms.join(" ")}">
${originalNode.outerHTML}${markupSVG}
</g>
</g>
</svg>`;
    resolve(transformed);
  };
  fr.readAsText(blob2);
});
var objectToImageData = (obj) => {
  let imageData;
  try {
    imageData = new ImageData(obj.width, obj.height);
  } catch (e2) {
    const canvas = document.createElement("canvas");
    imageData = canvas.getContext("2d").createImageData(obj.width, obj.height);
  }
  imageData.data.set(obj.data);
  return imageData;
};
var TransformWorker = () => {
  const TRANSFORMS = {resize, filter};
  const applyTransforms = (transforms2, imageData) => {
    transforms2.forEach((transform2) => {
      imageData = TRANSFORMS[transform2.type](imageData, transform2.data);
    });
    return imageData;
  };
  const transform = (data3, cb) => {
    let transforms2 = data3.transforms;
    let filterTransform = null;
    transforms2.forEach((transform2) => {
      if (transform2.type === "filter") {
        filterTransform = transform2;
      }
    });
    if (filterTransform) {
      let resizeTransform = null;
      transforms2.forEach((transform2) => {
        if (transform2.type === "resize") {
          resizeTransform = transform2;
        }
      });
      if (resizeTransform) {
        resizeTransform.data.matrix = filterTransform.data;
        transforms2 = transforms2.filter((transform2) => transform2.type !== "filter");
      }
    }
    cb(applyTransforms(transforms2, data3.imageData));
  };
  self.onmessage = (e2) => {
    transform(e2.data.message, (response) => {
      self.postMessage({id: e2.data.id, message: response}, [response.data.buffer]);
    });
  };
  const br = 1;
  const bg = 1;
  const bb = 1;
  function applyFilterMatrix(index, data3, m) {
    const ir = data3[index] / 255;
    const ig = data3[index + 1] / 255;
    const ib = data3[index + 2] / 255;
    const ia = data3[index + 3] / 255;
    const mr = ir * m[0] + ig * m[1] + ib * m[2] + ia * m[3] + m[4];
    const mg = ir * m[5] + ig * m[6] + ib * m[7] + ia * m[8] + m[9];
    const mb = ir * m[10] + ig * m[11] + ib * m[12] + ia * m[13] + m[14];
    const ma = ir * m[15] + ig * m[16] + ib * m[17] + ia * m[18] + m[19];
    const or = Math.max(0, mr * ma) + br * (1 - ma);
    const og = Math.max(0, mg * ma) + bg * (1 - ma);
    const ob = Math.max(0, mb * ma) + bb * (1 - ma);
    data3[index] = Math.max(0, Math.min(1, or)) * 255;
    data3[index + 1] = Math.max(0, Math.min(1, og)) * 255;
    data3[index + 2] = Math.max(0, Math.min(1, ob)) * 255;
  }
  const identityMatrix = self.JSON.stringify([
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0
  ]);
  function isIdentityMatrix(filter2) {
    return self.JSON.stringify(filter2 || []) === identityMatrix;
  }
  function filter(imageData, matrix) {
    if (!matrix || isIdentityMatrix(matrix))
      return imageData;
    const data3 = imageData.data;
    const l = data3.length;
    const m11 = matrix[0];
    const m12 = matrix[1];
    const m13 = matrix[2];
    const m14 = matrix[3];
    const m15 = matrix[4];
    const m21 = matrix[5];
    const m22 = matrix[6];
    const m23 = matrix[7];
    const m24 = matrix[8];
    const m25 = matrix[9];
    const m31 = matrix[10];
    const m32 = matrix[11];
    const m33 = matrix[12];
    const m34 = matrix[13];
    const m35 = matrix[14];
    const m41 = matrix[15];
    const m42 = matrix[16];
    const m43 = matrix[17];
    const m44 = matrix[18];
    const m45 = matrix[19];
    let index = 0, r2 = 0, g = 0, b = 0, a2 = 0, mr = 0, mg = 0, mb = 0, ma = 0, or = 0, og = 0, ob = 0;
    for (; index < l; index += 4) {
      r2 = data3[index] / 255;
      g = data3[index + 1] / 255;
      b = data3[index + 2] / 255;
      a2 = data3[index + 3] / 255;
      mr = r2 * m11 + g * m12 + b * m13 + a2 * m14 + m15;
      mg = r2 * m21 + g * m22 + b * m23 + a2 * m24 + m25;
      mb = r2 * m31 + g * m32 + b * m33 + a2 * m34 + m35;
      ma = r2 * m41 + g * m42 + b * m43 + a2 * m44 + m45;
      or = Math.max(0, mr * ma) + br * (1 - ma);
      og = Math.max(0, mg * ma) + bg * (1 - ma);
      ob = Math.max(0, mb * ma) + bb * (1 - ma);
      data3[index] = Math.max(0, Math.min(1, or)) * 255;
      data3[index + 1] = Math.max(0, Math.min(1, og)) * 255;
      data3[index + 2] = Math.max(0, Math.min(1, ob)) * 255;
    }
    return imageData;
  }
  function resize(imageData, data3) {
    let {mode = "contain", upscale = false, width, height, matrix} = data3;
    matrix = !matrix || isIdentityMatrix(matrix) ? null : matrix;
    if (!width && !height) {
      return filter(imageData, matrix);
    }
    if (width === null) {
      width = height;
    } else if (height === null) {
      height = width;
    }
    if (mode !== "force") {
      let scalarWidth = width / imageData.width;
      let scalarHeight = height / imageData.height;
      let scalar = 1;
      if (mode === "cover") {
        scalar = Math.max(scalarWidth, scalarHeight);
      } else if (mode === "contain") {
        scalar = Math.min(scalarWidth, scalarHeight);
      }
      if (scalar > 1 && upscale === false) {
        return filter(imageData, matrix);
      }
      width = imageData.width * scalar;
      height = imageData.height * scalar;
    }
    const originWidth = imageData.width;
    const originHeight = imageData.height;
    const targetWidth = Math.round(width);
    const targetHeight = Math.round(height);
    const inputData = imageData.data;
    const outputData = new Uint8ClampedArray(targetWidth * targetHeight * 4);
    const ratioWidth = originWidth / targetWidth;
    const ratioHeight = originHeight / targetHeight;
    const ratioWidthHalf = Math.ceil(ratioWidth * 0.5);
    const ratioHeightHalf = Math.ceil(ratioHeight * 0.5);
    for (let j = 0; j < targetHeight; j++) {
      for (let i = 0; i < targetWidth; i++) {
        let x2 = (i + j * targetWidth) * 4;
        let weight = 0;
        let weights = 0;
        let weightsAlpha = 0;
        let r2 = 0;
        let g = 0;
        let b = 0;
        let a2 = 0;
        let centerY = (j + 0.5) * ratioHeight;
        for (let yy = Math.floor(j * ratioHeight); yy < (j + 1) * ratioHeight; yy++) {
          let dy = Math.abs(centerY - (yy + 0.5)) / ratioHeightHalf;
          let centerX = (i + 0.5) * ratioWidth;
          let w0 = dy * dy;
          for (let xx = Math.floor(i * ratioWidth); xx < (i + 1) * ratioWidth; xx++) {
            let dx = Math.abs(centerX - (xx + 0.5)) / ratioWidthHalf;
            let w = Math.sqrt(w0 + dx * dx);
            if (w >= -1 && w <= 1) {
              weight = 2 * w * w * w - 3 * w * w + 1;
              if (weight > 0) {
                dx = 4 * (xx + yy * originWidth);
                let ref = inputData[dx + 3];
                a2 += weight * ref;
                weightsAlpha += weight;
                if (ref < 255) {
                  weight = weight * ref / 250;
                }
                r2 += weight * inputData[dx];
                g += weight * inputData[dx + 1];
                b += weight * inputData[dx + 2];
                weights += weight;
              }
            }
          }
        }
        outputData[x2] = r2 / weights;
        outputData[x2 + 1] = g / weights;
        outputData[x2 + 2] = b / weights;
        outputData[x2 + 3] = a2 / weightsAlpha;
        matrix && applyFilterMatrix(x2, outputData, matrix);
      }
    }
    return {
      data: outputData,
      width: targetWidth,
      height: targetHeight
    };
  }
};
var correctOrientation = (view, offset) => {
  if (view.getUint32(offset + 4, false) !== 1165519206)
    return;
  offset += 4;
  const intelByteAligned = view.getUint16(offset += 6, false) === 18761;
  offset += view.getUint32(offset + 4, intelByteAligned);
  const tags = view.getUint16(offset, intelByteAligned);
  offset += 2;
  for (let i = 0; i < tags; i++) {
    if (view.getUint16(offset + i * 12, intelByteAligned) === 274) {
      view.setUint16(offset + i * 12 + 8, 1, intelByteAligned);
      return true;
    }
  }
  return false;
};
var readData = (data3) => {
  const view = new DataView(data3);
  if (view.getUint16(0) !== 65496)
    return null;
  let offset = 2;
  let marker;
  let markerLength;
  let orientationCorrected = false;
  while (offset < view.byteLength) {
    marker = view.getUint16(offset, false);
    markerLength = view.getUint16(offset + 2, false) + 2;
    const isData = marker >= 65504 && marker <= 65519 || marker === 65534;
    if (!isData) {
      break;
    }
    if (!orientationCorrected) {
      orientationCorrected = correctOrientation(view, offset, markerLength);
    }
    if (offset + markerLength > view.byteLength) {
      break;
    }
    offset += markerLength;
  }
  return data3.slice(0, offset);
};
var getImageHead = (file2) => new Promise((resolve) => {
  const reader = new FileReader();
  reader.onload = () => resolve(readData(reader.result) || null);
  reader.readAsArrayBuffer(file2.slice(0, 256 * 1024));
});
var getBlobBuilder2 = () => {
  return window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
};
var createBlob2 = (arrayBuffer, mimeType) => {
  const BB = getBlobBuilder2();
  if (BB) {
    const bb = new BB();
    bb.append(arrayBuffer);
    return bb.getBlob(mimeType);
  }
  return new Blob([arrayBuffer], {
    type: mimeType
  });
};
var getUniqueId2 = () => Math.random().toString(36).substr(2, 9);
var createWorker2 = (fn2) => {
  const workerBlob = new Blob(["(", fn2.toString(), ")()"], {type: "application/javascript"});
  const workerURL = URL.createObjectURL(workerBlob);
  const worker = new Worker(workerURL);
  const trips = [];
  return {
    transfer: () => {
    },
    post: (message, cb, transferList) => {
      const id = getUniqueId2();
      trips[id] = cb;
      worker.onmessage = (e2) => {
        const cb2 = trips[e2.data.id];
        if (!cb2)
          return;
        cb2(e2.data.message);
        delete trips[e2.data.id];
      };
      worker.postMessage({
        id,
        message
      }, transferList);
    },
    terminate: () => {
      worker.terminate();
      URL.revokeObjectURL(workerURL);
    }
  };
};
var loadImage3 = (url) => new Promise((resolve, reject) => {
  const img = new Image();
  img.onload = () => {
    resolve(img);
  };
  img.onerror = (e2) => {
    reject(e2);
  };
  img.src = url;
});
var chain = (funcs) => funcs.reduce((promise, func) => promise.then((result) => func().then(Array.prototype.concat.bind(result))), Promise.resolve([]));
var canvasApplyMarkup = (canvas, markup) => new Promise((resolve) => {
  const size = {
    width: canvas.width,
    height: canvas.height
  };
  const ctx = canvas.getContext("2d");
  const drawers = markup.sort(sortMarkupByZIndex2).map((item2) => () => new Promise((resolve2) => {
    const result = TYPE_DRAW_ROUTES[item2[0]](ctx, size, item2[1], resolve2);
    if (result)
      resolve2();
  }));
  chain(drawers).then(() => resolve(canvas));
});
var applyMarkupStyles = (ctx, styles3) => {
  ctx.beginPath();
  ctx.lineCap = styles3["stroke-linecap"];
  ctx.lineJoin = styles3["stroke-linejoin"];
  ctx.lineWidth = styles3["stroke-width"];
  if (styles3["stroke-dasharray"].length) {
    ctx.setLineDash(styles3["stroke-dasharray"].split(","));
  }
  ctx.fillStyle = styles3["fill"];
  ctx.strokeStyle = styles3["stroke"];
  ctx.globalAlpha = styles3.opacity || 1;
};
var drawMarkupStyles = (ctx) => {
  ctx.fill();
  ctx.stroke();
  ctx.globalAlpha = 1;
};
var drawRect = (ctx, size, markup) => {
  const rect = getMarkupRect2(markup, size);
  const styles3 = getMarkupStyles2(markup, size);
  applyMarkupStyles(ctx, styles3);
  ctx.rect(rect.x, rect.y, rect.width, rect.height);
  drawMarkupStyles(ctx, styles3);
  return true;
};
var drawEllipse = (ctx, size, markup) => {
  const rect = getMarkupRect2(markup, size);
  const styles3 = getMarkupStyles2(markup, size);
  applyMarkupStyles(ctx, styles3);
  const x = rect.x, y = rect.y, w = rect.width, h = rect.height, kappa = 0.5522848, ox = w / 2 * kappa, oy = h / 2 * kappa, xe = x + w, ye = y + h, xm = x + w / 2, ym = y + h / 2;
  ctx.moveTo(x, ym);
  ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
  ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
  ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
  ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
  drawMarkupStyles(ctx, styles3);
  return true;
};
var drawImage = (ctx, size, markup, done) => {
  const rect = getMarkupRect2(markup, size);
  const styles3 = getMarkupStyles2(markup, size);
  applyMarkupStyles(ctx, styles3);
  const image = new Image();
  const isCrossOriginImage = new URL(markup.src, window.location.href).origin !== window.location.origin;
  if (isCrossOriginImage)
    image.crossOrigin = "";
  image.onload = () => {
    if (markup.fit === "cover") {
      const ar = rect.width / rect.height;
      const width = ar > 1 ? image.width : image.height * ar;
      const height = ar > 1 ? image.width / ar : image.height;
      const x = image.width * 0.5 - width * 0.5;
      const y = image.height * 0.5 - height * 0.5;
      ctx.drawImage(image, x, y, width, height, rect.x, rect.y, rect.width, rect.height);
    } else if (markup.fit === "contain") {
      const scalar = Math.min(rect.width / image.width, rect.height / image.height);
      const width = scalar * image.width;
      const height = scalar * image.height;
      const x = rect.x + rect.width * 0.5 - width * 0.5;
      const y = rect.y + rect.height * 0.5 - height * 0.5;
      ctx.drawImage(image, 0, 0, image.width, image.height, x, y, width, height);
    } else {
      ctx.drawImage(image, 0, 0, image.width, image.height, rect.x, rect.y, rect.width, rect.height);
    }
    drawMarkupStyles(ctx, styles3);
    done();
  };
  image.src = markup.src;
};
var drawText = (ctx, size, markup) => {
  const rect = getMarkupRect2(markup, size);
  const styles3 = getMarkupStyles2(markup, size);
  applyMarkupStyles(ctx, styles3);
  const fontSize = getMarkupValue2(markup.fontSize, size);
  const fontFamily = markup.fontFamily || "sans-serif";
  const fontWeight = markup.fontWeight || "normal";
  const textAlign = markup.textAlign || "left";
  ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
  ctx.textAlign = textAlign;
  ctx.fillText(markup.text, rect.x, rect.y);
  drawMarkupStyles(ctx, styles3);
  return true;
};
var drawPath = (ctx, size, markup) => {
  const styles3 = getMarkupStyles2(markup, size);
  applyMarkupStyles(ctx, styles3);
  ctx.beginPath();
  const points = markup.points.map((point) => ({
    x: getMarkupValue2(point.x, size, 1, "width"),
    y: getMarkupValue2(point.y, size, 1, "height")
  }));
  ctx.moveTo(points[0].x, points[0].y);
  const l = points.length;
  for (let i = 1; i < l; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  drawMarkupStyles(ctx, styles3);
  return true;
};
var drawLine = (ctx, size, markup) => {
  const rect = getMarkupRect2(markup, size);
  const styles3 = getMarkupStyles2(markup, size);
  applyMarkupStyles(ctx, styles3);
  ctx.beginPath();
  const origin = {
    x: rect.x,
    y: rect.y
  };
  const target = {
    x: rect.x + rect.width,
    y: rect.y + rect.height
  };
  ctx.moveTo(origin.x, origin.y);
  ctx.lineTo(target.x, target.y);
  const v = vectorNormalize2({
    x: target.x - origin.x,
    y: target.y - origin.y
  });
  const l = 0.04 * Math.min(size.width, size.height);
  if (markup.lineDecoration.indexOf("arrow-begin") !== -1) {
    const arrowBeginRotationPoint = vectorMultiply2(v, l);
    const arrowBeginCenter = vectorAdd2(origin, arrowBeginRotationPoint);
    const arrowBeginA = vectorRotate2(origin, 2, arrowBeginCenter);
    const arrowBeginB = vectorRotate2(origin, -2, arrowBeginCenter);
    ctx.moveTo(arrowBeginA.x, arrowBeginA.y);
    ctx.lineTo(origin.x, origin.y);
    ctx.lineTo(arrowBeginB.x, arrowBeginB.y);
  }
  if (markup.lineDecoration.indexOf("arrow-end") !== -1) {
    const arrowEndRotationPoint = vectorMultiply2(v, -l);
    const arrowEndCenter = vectorAdd2(target, arrowEndRotationPoint);
    const arrowEndA = vectorRotate2(target, 2, arrowEndCenter);
    const arrowEndB = vectorRotate2(target, -2, arrowEndCenter);
    ctx.moveTo(arrowEndA.x, arrowEndA.y);
    ctx.lineTo(target.x, target.y);
    ctx.lineTo(arrowEndB.x, arrowEndB.y);
  }
  drawMarkupStyles(ctx, styles3);
  return true;
};
var TYPE_DRAW_ROUTES = {
  rect: drawRect,
  ellipse: drawEllipse,
  image: drawImage,
  text: drawText,
  line: drawLine,
  path: drawPath
};
var imageDataToCanvas = (imageData) => {
  const image = document.createElement("canvas");
  image.width = imageData.width;
  image.height = imageData.height;
  const ctx = image.getContext("2d");
  ctx.putImageData(imageData, 0, 0);
  return image;
};
var transformImage = (file2, instructions, options = {}) => new Promise((resolve, reject) => {
  if (!file2 || !isImage$1(file2))
    return reject({status: "not an image file", file: file2});
  const {stripImageHead, beforeCreateBlob, afterCreateBlob, canvasMemoryLimit} = options;
  const {crop, size, filter, markup, output} = instructions;
  const orientation = instructions.image && instructions.image.orientation ? Math.max(1, Math.min(8, instructions.image.orientation)) : null;
  const qualityAsPercentage = output && output.quality;
  const quality = qualityAsPercentage === null ? null : qualityAsPercentage / 100;
  const type = output && output.type || null;
  const background = output && output.background || null;
  const transforms2 = [];
  if (size && (typeof size.width === "number" || typeof size.height === "number")) {
    transforms2.push({type: "resize", data: size});
  }
  if (filter && filter.length === 20) {
    transforms2.push({type: "filter", data: filter});
  }
  const resolveWithBlob = (blob2) => {
    const promisedBlob = afterCreateBlob ? afterCreateBlob(blob2) : blob2;
    Promise.resolve(promisedBlob).then(resolve);
  };
  const toBlob = (imageData, options2) => {
    const canvas = imageDataToCanvas(imageData);
    const promisedCanvas = markup.length ? canvasApplyMarkup(canvas, markup) : canvas;
    Promise.resolve(promisedCanvas).then((canvas2) => {
      canvasToBlob(canvas2, options2, beforeCreateBlob).then((blob2) => {
        canvasRelease(canvas2);
        if (stripImageHead)
          return resolveWithBlob(blob2);
        getImageHead(file2).then((imageHead) => {
          if (imageHead !== null) {
            blob2 = new Blob([imageHead, blob2.slice(20)], {type: blob2.type});
          }
          resolveWithBlob(blob2);
        });
      }).catch(reject);
    });
  };
  if (/svg/.test(file2.type) && type === null) {
    return cropSVG(file2, crop, markup, {background}).then((text2) => {
      resolve(createBlob2(text2, "image/svg+xml"));
    });
  }
  const url = URL.createObjectURL(file2);
  loadImage3(url).then((image) => {
    URL.revokeObjectURL(url);
    const imageData = imageToImageData(image, orientation, crop, {
      canvasMemoryLimit,
      background
    });
    const outputFormat = {
      quality,
      type: type || file2.type
    };
    if (!transforms2.length) {
      return toBlob(imageData, outputFormat);
    }
    const worker = createWorker2(TransformWorker);
    worker.post({
      transforms: transforms2,
      imageData
    }, (response) => {
      toBlob(objectToImageData(response), outputFormat);
      worker.terminate();
    }, [imageData.data.buffer]);
  }).catch(reject);
});
var MARKUP_RECT2 = ["x", "y", "left", "top", "right", "bottom", "width", "height"];
var toOptionalFraction2 = (value) => typeof value === "string" && /%/.test(value) ? parseFloat(value) / 100 : value;
var prepareMarkup2 = (markup) => {
  const [type, props] = markup;
  const rect = props.points ? {} : MARKUP_RECT2.reduce((prev, curr) => {
    prev[curr] = toOptionalFraction2(props[curr]);
    return prev;
  }, {});
  return [
    type,
    {
      zIndex: 0,
      ...props,
      ...rect
    }
  ];
};
var getImageSize3 = (file2) => new Promise((resolve, reject) => {
  const imageElement = new Image();
  imageElement.src = URL.createObjectURL(file2);
  const measure = () => {
    const width = imageElement.naturalWidth;
    const height = imageElement.naturalHeight;
    const hasSize = width && height;
    if (!hasSize)
      return;
    URL.revokeObjectURL(imageElement.src);
    clearInterval(intervalId);
    resolve({width, height});
  };
  imageElement.onerror = (err) => {
    URL.revokeObjectURL(imageElement.src);
    clearInterval(intervalId);
    reject(err);
  };
  const intervalId = setInterval(measure, 1);
  measure();
});
if (typeof window !== "undefined" && typeof window.document !== "undefined") {
  if (!HTMLCanvasElement.prototype.toBlob) {
    Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
      value: function(cb, type, quality) {
        const canvas = this;
        setTimeout(() => {
          const dataURL = canvas.toDataURL(type, quality).split(",")[1];
          const binStr = atob(dataURL);
          let index = binStr.length;
          const data3 = new Uint8Array(index);
          while (index--) {
            data3[index] = binStr.charCodeAt(index);
          }
          cb(new Blob([data3], {type: type || "image/png"}));
        });
      }
    });
  }
}
var isBrowser8 = typeof window !== "undefined" && typeof window.document !== "undefined";
var isIOS = isBrowser8 && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var plugin7 = ({addFilter: addFilter2, utils}) => {
  const {Type: Type2, forin: forin2, getFileFromBlob: getFileFromBlob2, isFile: isFile2} = utils;
  const TRANSFORM_LIST = ["crop", "resize", "filter", "markup", "output"];
  const createVariantCreator = (updateMetadata) => (transform, file2, metadata) => transform(file2, updateMetadata ? updateMetadata(metadata) : metadata);
  const isDefaultCrop = (crop) => crop.aspectRatio === null && crop.rotation === 0 && crop.zoom === 1 && crop.center && crop.center.x === 0.5 && crop.center.y === 0.5 && crop.flip && crop.flip.horizontal === false && crop.flip.vertical === false;
  addFilter2("SHOULD_PREPARE_OUTPUT", (shouldPrepareOutput, {query}) => new Promise((resolve) => {
    resolve(!query("IS_ASYNC"));
  }));
  const shouldTransformFile = (query, file2, item2) => new Promise((resolve) => {
    if (!query("GET_ALLOW_IMAGE_TRANSFORM") || item2.archived || !isFile2(file2) || !isImage3(file2)) {
      return resolve(false);
    }
    getImageSize3(file2).then(() => {
      const fn2 = query("GET_IMAGE_TRANSFORM_IMAGE_FILTER");
      if (fn2) {
        const filterResult = fn2(file2);
        if (filterResult == null) {
          return handleRevert(true);
        }
        if (typeof filterResult === "boolean") {
          return resolve(filterResult);
        }
        if (typeof filterResult.then === "function") {
          return filterResult.then(resolve);
        }
      }
      resolve(true);
    }).catch((err) => {
      resolve(false);
    });
  });
  addFilter2("DID_CREATE_ITEM", (item2, {query, dispatch: dispatch2}) => {
    if (!query("GET_ALLOW_IMAGE_TRANSFORM"))
      return;
    item2.extend("requestPrepare", () => new Promise((resolve, reject) => {
      dispatch2("REQUEST_PREPARE_OUTPUT", {
        query: item2.id,
        item: item2,
        success: resolve,
        failure: reject
      }, true);
    }));
  });
  addFilter2("PREPARE_OUTPUT", (file2, {query, item: item2}) => new Promise((resolve) => {
    shouldTransformFile(query, file2, item2).then((shouldTransform) => {
      if (!shouldTransform)
        return resolve(file2);
      const variants = [];
      if (query("GET_IMAGE_TRANSFORM_VARIANTS_INCLUDE_ORIGINAL")) {
        variants.push(() => new Promise((resolve2) => {
          resolve2({
            name: query("GET_IMAGE_TRANSFORM_VARIANTS_ORIGINAL_NAME"),
            file: file2
          });
        }));
      }
      if (query("GET_IMAGE_TRANSFORM_VARIANTS_INCLUDE_DEFAULT")) {
        variants.push((transform2, file3, metadata) => new Promise((resolve2) => {
          transform2(file3, metadata).then((file4) => resolve2({
            name: query("GET_IMAGE_TRANSFORM_VARIANTS_DEFAULT_NAME"),
            file: file4
          }));
        }));
      }
      const variantsDefinition = query("GET_IMAGE_TRANSFORM_VARIANTS") || {};
      forin2(variantsDefinition, (key, fn2) => {
        const createVariant = createVariantCreator(fn2);
        variants.push((transform2, file3, metadata) => new Promise((resolve2) => {
          createVariant(transform2, file3, metadata).then((file4) => resolve2({name: key, file: file4}));
        }));
      });
      const qualityAsPercentage = query("GET_IMAGE_TRANSFORM_OUTPUT_QUALITY");
      const qualityMode = query("GET_IMAGE_TRANSFORM_OUTPUT_QUALITY_MODE");
      const quality = qualityAsPercentage === null ? null : qualityAsPercentage / 100;
      const type = query("GET_IMAGE_TRANSFORM_OUTPUT_MIME_TYPE");
      const clientTransforms = query("GET_IMAGE_TRANSFORM_CLIENT_TRANSFORMS") || TRANSFORM_LIST;
      item2.setMetadata("output", {
        type,
        quality,
        client: clientTransforms
      }, true);
      const transform = (file3, metadata) => new Promise((resolve2, reject) => {
        const filteredMetadata = {...metadata};
        Object.keys(filteredMetadata).filter((instruction) => instruction !== "exif").forEach((instruction) => {
          if (clientTransforms.indexOf(instruction) === -1) {
            delete filteredMetadata[instruction];
          }
        });
        const {resize, exif, output, crop, filter, markup} = filteredMetadata;
        const instructions = {
          image: {
            orientation: exif ? exif.orientation : null
          },
          output: output && (output.type || typeof output.quality === "number" || output.background) ? {
            type: output.type,
            quality: typeof output.quality === "number" ? output.quality * 100 : null,
            background: output.background || query("GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR") || null
          } : void 0,
          size: resize && (resize.size.width || resize.size.height) ? {
            mode: resize.mode,
            upscale: resize.upscale,
            ...resize.size
          } : void 0,
          crop: crop && !isDefaultCrop(crop) ? {
            ...crop
          } : void 0,
          markup: markup && markup.length ? markup.map(prepareMarkup2) : [],
          filter
        };
        if (instructions.output) {
          const willChangeType = output.type ? output.type !== file3.type : false;
          const canChangeQuality = /\/jpe?g$/.test(file3.type);
          const willChangeQuality = output.quality !== null ? canChangeQuality && qualityMode === "always" : false;
          const willModifyImageData = !!(instructions.size || instructions.crop || instructions.filter || willChangeType || willChangeQuality);
          if (!willModifyImageData)
            return resolve2(file3);
        }
        const options = {
          beforeCreateBlob: query("GET_IMAGE_TRANSFORM_BEFORE_CREATE_BLOB"),
          afterCreateBlob: query("GET_IMAGE_TRANSFORM_AFTER_CREATE_BLOB"),
          canvasMemoryLimit: query("GET_IMAGE_TRANSFORM_CANVAS_MEMORY_LIMIT"),
          stripImageHead: query("GET_IMAGE_TRANSFORM_OUTPUT_STRIP_IMAGE_HEAD")
        };
        transformImage(file3, instructions, options).then((blob2) => {
          const out = getFileFromBlob2(blob2, renameFileToMatchMimeType(file3.name, getValidOutputMimeType(blob2.type)));
          resolve2(out);
        }).catch(reject);
      });
      const variantPromises = variants.map((create2) => create2(transform, file2, item2.getMetadata()));
      Promise.all(variantPromises).then((files) => {
        resolve(files.length === 1 && files[0].name === null ? files[0].file : files);
      });
    });
  }));
  return {
    options: {
      allowImageTransform: [true, Type2.BOOLEAN],
      imageTransformImageFilter: [null, Type2.FUNCTION],
      imageTransformOutputMimeType: [null, Type2.STRING],
      imageTransformOutputQuality: [null, Type2.INT],
      imageTransformOutputStripImageHead: [true, Type2.BOOLEAN],
      imageTransformClientTransforms: [null, Type2.ARRAY],
      imageTransformOutputQualityMode: ["always", Type2.STRING],
      imageTransformVariants: [null, Type2.OBJECT],
      imageTransformVariantsIncludeDefault: [true, Type2.BOOLEAN],
      imageTransformVariantsDefaultName: [null, Type2.STRING],
      imageTransformVariantsIncludeOriginal: [false, Type2.BOOLEAN],
      imageTransformVariantsOriginalName: ["original_", Type2.STRING],
      imageTransformBeforeCreateBlob: [null, Type2.FUNCTION],
      imageTransformAfterCreateBlob: [null, Type2.FUNCTION],
      imageTransformCanvasMemoryLimit: [isBrowser8 && isIOS ? 4096 * 4096 : null, Type2.INT],
      imageTransformCanvasBackgroundColor: [null, Type2.STRING]
    }
  };
};
if (isBrowser8) {
  document.dispatchEvent(new CustomEvent("FilePond:pluginloaded", {detail: plugin7}));
}
var filepond_plugin_image_transform_esm_default = plugin7;

// packages/forms/resources/js/components/file-upload.js
registerPlugin(filepond_plugin_file_validate_size_esm_default);
registerPlugin(filepond_plugin_file_validate_type_esm_default);
registerPlugin(filepond_plugin_image_crop_esm_default);
registerPlugin(filepond_plugin_image_exif_orientation_esm_default);
registerPlugin(filepond_plugin_image_preview_esm_default);
registerPlugin(filepond_plugin_image_resize_esm_default);
registerPlugin(filepond_plugin_image_transform_esm_default);
var file_upload_default = (Alpine) => {
  Alpine.data("fileUploadFormComponent", ({
    acceptedFileTypes,
    getUploadedFileUrlUsing,
    imageCropAspectRatio,
    imagePreviewHeight,
    imageResizeTargetHeight,
    imageResizeTargetWidth,
    loadingIndicatorPosition,
    panelAspectRatio,
    panelLayout,
    placeholder,
    maxSize,
    minSize,
    removeUploadedFileButtonPosition,
    removeUploadedFileUsing,
    state: state2,
    uploadButtonPosition,
    uploadProgressIndicatorPosition,
    uploadUsing
  }) => {
    return {
      files: [],
      pond: null,
      state: state2,
      init: async function() {
        let uploadedFileUrl = await getUploadedFileUrlUsing();
        if (uploadedFileUrl) {
          this.files = [{
            source: uploadedFileUrl,
            options: {
              type: "local"
            }
          }];
        }
        this.pond = create$f(this.$refs.input, {
          acceptedFileTypes,
          credits: false,
          files: this.files,
          imageCropAspectRatio,
          imagePreviewHeight,
          imageResizeTargetHeight,
          imageResizeTargetWidth,
          ...placeholder && {labelIdle: placeholder},
          maxFileSize: maxSize,
          minFileSize: minSize,
          styleButtonProcessItemPosition: uploadButtonPosition,
          styleButtonRemoveItemPosition: removeUploadedFileButtonPosition,
          styleLoadIndicatorPosition: loadingIndicatorPosition,
          stylePanelAspectRatio: panelAspectRatio,
          stylePanelLayout: panelLayout,
          styleProgressIndicatorPosition: uploadProgressIndicatorPosition,
          server: {
            load: async (source, load) => {
              let response = await fetch(source);
              let blob2 = await response.blob();
              load(blob2);
            },
            process: (fieldName, file2, metadata, load, error2, progress) => {
              uploadUsing(file2, load, error2, progress);
            },
            remove: async (source, load) => {
              await removeUploadedFileUsing();
              load();
            },
            revert: async (uniqueFileId, load) => {
              await removeUploadedFileUsing(uniqueFileId);
              load();
            }
          }
        });
        this.$watch("state", async () => {
          if (!this.state) {
            this.pond.removeFiles();
            return;
          }
          if (this.state.startsWith("livewire-file:")) {
            return;
          }
          let uploadedFileUrl2 = await getUploadedFileUrlUsing();
          if (uploadedFileUrl2) {
            this.pond.files = [{
              source: uploadedFileUrl2,
              options: {
                type: "local"
              }
            }];
          } else {
            this.pond.files = [];
          }
        });
      }
    };
  });
};

// node_modules/@github/file-attachment-element/dist/index.js
var Attachment = class {
  constructor(file2, directory) {
    this.file = file2;
    this.directory = directory;
    this.state = "pending";
    this.id = null;
    this.href = null;
    this.name = null;
    this.percent = 0;
  }
  static traverse(transfer, directory) {
    return transferredFiles(transfer, directory);
  }
  static from(files) {
    const result = [];
    for (const file2 of files) {
      if (file2 instanceof File) {
        result.push(new Attachment(file2));
      } else if (file2 instanceof Attachment) {
        result.push(file2);
      } else {
        throw new Error("Unexpected type");
      }
    }
    return result;
  }
  get fullPath() {
    return this.directory ? `${this.directory}/${this.file.name}` : this.file.name;
  }
  isImage() {
    return ["image/gif", "image/png", "image/jpg", "image/jpeg"].indexOf(this.file.type) > -1;
  }
  saving(percent) {
    if (this.state !== "pending" && this.state !== "saving") {
      throw new Error(`Unexpected transition from ${this.state} to saving`);
    }
    this.state = "saving";
    this.percent = percent;
  }
  saved(attributes) {
    var _a, _b, _c;
    if (this.state !== "pending" && this.state !== "saving") {
      throw new Error(`Unexpected transition from ${this.state} to saved`);
    }
    this.state = "saved";
    this.id = (_a = attributes === null || attributes === void 0 ? void 0 : attributes.id) !== null && _a !== void 0 ? _a : null;
    this.href = (_b = attributes === null || attributes === void 0 ? void 0 : attributes.href) !== null && _b !== void 0 ? _b : null;
    this.name = (_c = attributes === null || attributes === void 0 ? void 0 : attributes.name) !== null && _c !== void 0 ? _c : null;
  }
  isPending() {
    return this.state === "pending";
  }
  isSaving() {
    return this.state === "saving";
  }
  isSaved() {
    return this.state === "saved";
  }
};
function transferredFiles(transfer, directory) {
  if (directory && isDirectory(transfer)) {
    return traverse("", roots(transfer));
  }
  return Promise.resolve(visible(Array.from(transfer.files || [])).map((f) => new Attachment(f)));
}
function hidden(file2) {
  return file2.name.startsWith(".");
}
function visible(files) {
  return Array.from(files).filter((file2) => !hidden(file2));
}
function getFile(entry) {
  return new Promise(function(resolve, reject) {
    entry.file(resolve, reject);
  });
}
function getEntries(entry) {
  return new Promise(function(resolve, reject) {
    const result = [];
    const reader = entry.createReader();
    const read = () => {
      reader.readEntries((entries) => {
        if (entries.length > 0) {
          result.push(...entries);
          read();
        } else {
          resolve(result);
        }
      }, reject);
    };
    read();
  });
}
async function traverse(path, entries) {
  const results = [];
  for (const entry of visible(entries)) {
    if (entry.isDirectory) {
      results.push(...await traverse(entry.fullPath, await getEntries(entry)));
    } else {
      const file2 = await getFile(entry);
      results.push(new Attachment(file2, path));
    }
  }
  return results;
}
function isDirectory(transfer) {
  return transfer.items && Array.from(transfer.items).some((item2) => {
    const entry = item2.webkitGetAsEntry && item2.webkitGetAsEntry();
    return entry && entry.isDirectory;
  });
}
function roots(transfer) {
  return Array.from(transfer.items).map((item2) => item2.webkitGetAsEntry()).filter((entry) => entry != null);
}
var FileAttachmentElement = class extends HTMLElement {
  connectedCallback() {
    this.addEventListener("dragenter", onDragenter);
    this.addEventListener("dragover", onDragenter);
    this.addEventListener("dragleave", onDragleave);
    this.addEventListener("drop", onDrop);
    this.addEventListener("paste", onPaste);
    this.addEventListener("change", onChange);
  }
  disconnectedCallback() {
    this.removeEventListener("dragenter", onDragenter);
    this.removeEventListener("dragover", onDragenter);
    this.removeEventListener("dragleave", onDragleave);
    this.removeEventListener("drop", onDrop);
    this.removeEventListener("paste", onPaste);
    this.removeEventListener("change", onChange);
  }
  get directory() {
    return this.hasAttribute("directory");
  }
  set directory(value) {
    if (value) {
      this.setAttribute("directory", "");
    } else {
      this.removeAttribute("directory");
    }
  }
  async attach(transferred) {
    const attachments = transferred instanceof DataTransfer ? await Attachment.traverse(transferred, this.directory) : Attachment.from(transferred);
    const accepted = this.dispatchEvent(new CustomEvent("file-attachment-accept", {
      bubbles: true,
      cancelable: true,
      detail: {attachments}
    }));
    if (accepted && attachments.length) {
      this.dispatchEvent(new CustomEvent("file-attachment-accepted", {
        bubbles: true,
        detail: {attachments}
      }));
    }
  }
};
function hasFile(transfer) {
  return Array.from(transfer.types).indexOf("Files") >= 0;
}
var dragging = null;
function onDragenter(event) {
  const target = event.currentTarget;
  if (dragging) {
    clearTimeout(dragging);
  }
  dragging = window.setTimeout(() => target.removeAttribute("hover"), 200);
  const transfer = event.dataTransfer;
  if (!transfer || !hasFile(transfer))
    return;
  transfer.dropEffect = "copy";
  target.setAttribute("hover", "");
  event.stopPropagation();
  event.preventDefault();
}
function onDragleave(event) {
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "none";
  }
  const target = event.currentTarget;
  target.removeAttribute("hover");
  event.stopPropagation();
  event.preventDefault();
}
function onDrop(event) {
  const container = event.currentTarget;
  if (!(container instanceof FileAttachmentElement))
    return;
  container.removeAttribute("hover");
  const transfer = event.dataTransfer;
  if (!transfer || !hasFile(transfer))
    return;
  container.attach(transfer);
  event.stopPropagation();
  event.preventDefault();
}
var images2 = /^image\/(gif|png|jpeg)$/;
function pastedFile(items) {
  for (const item2 of items) {
    if (images2.test(item2.type)) {
      return item2.getAsFile();
    }
  }
  return null;
}
function onPaste(event) {
  if (!event.clipboardData)
    return;
  if (!event.clipboardData.items)
    return;
  const container = event.currentTarget;
  if (!(container instanceof FileAttachmentElement))
    return;
  const file2 = pastedFile(event.clipboardData.items);
  if (!file2)
    return;
  const files = [file2];
  container.attach(files);
  event.preventDefault();
}
function onChange(event) {
  const container = event.currentTarget;
  if (!(container instanceof FileAttachmentElement))
    return;
  const input = event.target;
  if (!(input instanceof HTMLInputElement))
    return;
  const id = container.getAttribute("input");
  if (id && input.id !== id)
    return;
  const files = input.files;
  if (!files || files.length === 0)
    return;
  container.attach(files);
  input.value = "";
}
if (!window.customElements.get("file-attachment")) {
  window.FileAttachmentElement = FileAttachmentElement;
  window.customElements.define("file-attachment", FileAttachmentElement);
}

// node_modules/@github/markdown-toolbar-element/dist/index.js
var buttonSelectors = [
  "[data-md-button]",
  "md-header",
  "md-bold",
  "md-italic",
  "md-quote",
  "md-code",
  "md-link",
  "md-image",
  "md-unordered-list",
  "md-ordered-list",
  "md-task-list",
  "md-mention",
  "md-ref",
  "md-strikethrough"
];
function getButtons(toolbar) {
  const els = [];
  for (const button of toolbar.querySelectorAll(buttonSelectors.join(", "))) {
    if (button.hidden || button.offsetWidth <= 0 && button.offsetHeight <= 0)
      continue;
    if (button.closest("markdown-toolbar") === toolbar)
      els.push(button);
  }
  return els;
}
function keydown(fn2) {
  return function(event) {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      fn2(event);
    }
  };
}
var styles2 = new WeakMap();
var MarkdownButtonElement = class extends HTMLElement {
  constructor() {
    super();
    const apply = () => {
      const style = styles2.get(this);
      if (!style)
        return;
      applyStyle(this, style);
    };
    this.addEventListener("keydown", keydown(apply));
    this.addEventListener("click", apply);
  }
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "button");
    }
  }
  click() {
    const style = styles2.get(this);
    if (!style)
      return;
    applyStyle(this, style);
  }
};
var MarkdownHeaderButtonElement = class extends MarkdownButtonElement {
  constructor() {
    super();
    const level = parseInt(this.getAttribute("level") || "3", 10);
    if (level < 1 || level > 6) {
      return;
    }
    const prefix = `${"#".repeat(level)} `;
    styles2.set(this, {
      prefix
    });
  }
};
if (!window.customElements.get("md-header")) {
  window.MarkdownHeaderButtonElement = MarkdownHeaderButtonElement;
  window.customElements.define("md-header", MarkdownHeaderButtonElement);
}
var MarkdownBoldButtonElement = class extends MarkdownButtonElement {
  constructor() {
    super();
    styles2.set(this, {prefix: "**", suffix: "**", trimFirst: true});
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("hotkey", "b");
  }
};
if (!window.customElements.get("md-bold")) {
  window.MarkdownBoldButtonElement = MarkdownBoldButtonElement;
  window.customElements.define("md-bold", MarkdownBoldButtonElement);
}
var MarkdownItalicButtonElement = class extends MarkdownButtonElement {
  constructor() {
    super();
    styles2.set(this, {prefix: "_", suffix: "_", trimFirst: true});
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("hotkey", "i");
  }
};
if (!window.customElements.get("md-italic")) {
  window.MarkdownItalicButtonElement = MarkdownItalicButtonElement;
  window.customElements.define("md-italic", MarkdownItalicButtonElement);
}
var MarkdownQuoteButtonElement = class extends MarkdownButtonElement {
  constructor() {
    super();
    styles2.set(this, {prefix: "> ", multiline: true, surroundWithNewlines: true});
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("hotkey", ".");
    this.setAttribute("hotkey-requires-shift", "true");
  }
};
if (!window.customElements.get("md-quote")) {
  window.MarkdownQuoteButtonElement = MarkdownQuoteButtonElement;
  window.customElements.define("md-quote", MarkdownQuoteButtonElement);
}
var MarkdownCodeButtonElement = class extends MarkdownButtonElement {
  constructor() {
    super();
    styles2.set(this, {prefix: "`", suffix: "`", blockPrefix: "```", blockSuffix: "```"});
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("hotkey", "e");
  }
};
if (!window.customElements.get("md-code")) {
  window.MarkdownCodeButtonElement = MarkdownCodeButtonElement;
  window.customElements.define("md-code", MarkdownCodeButtonElement);
}
var MarkdownLinkButtonElement = class extends MarkdownButtonElement {
  constructor() {
    super();
    styles2.set(this, {prefix: "[", suffix: "](url)", replaceNext: "url", scanFor: "https?://"});
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("hotkey", "k");
  }
};
if (!window.customElements.get("md-link")) {
  window.MarkdownLinkButtonElement = MarkdownLinkButtonElement;
  window.customElements.define("md-link", MarkdownLinkButtonElement);
}
var MarkdownImageButtonElement = class extends MarkdownButtonElement {
  constructor() {
    super();
    styles2.set(this, {prefix: "![", suffix: "](url)", replaceNext: "url", scanFor: "https?://"});
  }
};
if (!window.customElements.get("md-image")) {
  window.MarkdownImageButtonElement = MarkdownImageButtonElement;
  window.customElements.define("md-image", MarkdownImageButtonElement);
}
var MarkdownUnorderedListButtonElement = class extends MarkdownButtonElement {
  constructor() {
    super();
    styles2.set(this, {prefix: "- ", multiline: true, surroundWithNewlines: true});
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("hotkey", "8");
    this.setAttribute("hotkey-requires-shift", "true");
  }
};
if (!window.customElements.get("md-unordered-list")) {
  window.MarkdownUnorderedListButtonElement = MarkdownUnorderedListButtonElement;
  window.customElements.define("md-unordered-list", MarkdownUnorderedListButtonElement);
}
var MarkdownOrderedListButtonElement = class extends MarkdownButtonElement {
  constructor() {
    super();
    styles2.set(this, {prefix: "1. ", multiline: true, orderedList: true});
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("hotkey", "7");
    this.setAttribute("hotkey-requires-shift", "true");
  }
};
if (!window.customElements.get("md-ordered-list")) {
  window.MarkdownOrderedListButtonElement = MarkdownOrderedListButtonElement;
  window.customElements.define("md-ordered-list", MarkdownOrderedListButtonElement);
}
var MarkdownTaskListButtonElement = class extends MarkdownButtonElement {
  constructor() {
    super();
    styles2.set(this, {prefix: "- [ ] ", multiline: true, surroundWithNewlines: true});
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("hotkey", "L");
  }
};
if (!window.customElements.get("md-task-list")) {
  window.MarkdownTaskListButtonElement = MarkdownTaskListButtonElement;
  window.customElements.define("md-task-list", MarkdownTaskListButtonElement);
}
var MarkdownMentionButtonElement = class extends MarkdownButtonElement {
  constructor() {
    super();
    styles2.set(this, {prefix: "@", prefixSpace: true});
  }
};
if (!window.customElements.get("md-mention")) {
  window.MarkdownMentionButtonElement = MarkdownMentionButtonElement;
  window.customElements.define("md-mention", MarkdownMentionButtonElement);
}
var MarkdownRefButtonElement = class extends MarkdownButtonElement {
  constructor() {
    super();
    styles2.set(this, {prefix: "#", prefixSpace: true});
  }
};
if (!window.customElements.get("md-ref")) {
  window.MarkdownRefButtonElement = MarkdownRefButtonElement;
  window.customElements.define("md-ref", MarkdownRefButtonElement);
}
var MarkdownStrikethroughButtonElement = class extends MarkdownButtonElement {
  constructor() {
    super();
    styles2.set(this, {prefix: "~~", suffix: "~~", trimFirst: true});
  }
};
if (!window.customElements.get("md-strikethrough")) {
  window.MarkdownStrikethroughButtonElement = MarkdownStrikethroughButtonElement;
  window.customElements.define("md-strikethrough", MarkdownStrikethroughButtonElement);
}
var modifierKey = navigator.userAgent.match(/Macintosh/) ? "Meta" : "Control";
var MarkdownToolbarElement = class extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "toolbar");
    }
    this.addEventListener("keydown", focusKeydown);
    const fn2 = shortcut.bind(null, this);
    if (this.field) {
      this.field.addEventListener("keydown", fn2);
      shortcutListeners.set(this, fn2);
    }
    this.setAttribute("tabindex", "0");
    this.addEventListener("focus", onToolbarFocus, {once: true});
  }
  disconnectedCallback() {
    const fn2 = shortcutListeners.get(this);
    if (fn2 && this.field) {
      this.field.removeEventListener("keydown", fn2);
      shortcutListeners.delete(this);
    }
    this.removeEventListener("keydown", focusKeydown);
  }
  get field() {
    const id = this.getAttribute("for");
    if (!id)
      return null;
    const root2 = "getRootNode" in this ? this.getRootNode() : document;
    let field;
    if (root2 instanceof Document || root2 instanceof ShadowRoot) {
      field = root2.getElementById(id);
    }
    return field instanceof HTMLTextAreaElement ? field : null;
  }
};
function onToolbarFocus({target}) {
  if (!(target instanceof Element))
    return;
  target.removeAttribute("tabindex");
  let tabindex = "0";
  for (const button of getButtons(target)) {
    button.setAttribute("tabindex", tabindex);
    if (tabindex === "0") {
      button.focus();
      tabindex = "-1";
    }
  }
}
function focusKeydown(event) {
  const key = event.key;
  if (key !== "ArrowRight" && key !== "ArrowLeft" && key !== "Home" && key !== "End")
    return;
  const toolbar = event.currentTarget;
  if (!(toolbar instanceof HTMLElement))
    return;
  const buttons = getButtons(toolbar);
  const index = buttons.indexOf(event.target);
  const length = buttons.length;
  if (index === -1)
    return;
  let n2 = 0;
  if (key === "ArrowLeft")
    n2 = index - 1;
  if (key === "ArrowRight")
    n2 = index + 1;
  if (key === "End")
    n2 = length - 1;
  if (n2 < 0)
    n2 = length - 1;
  if (n2 > length - 1)
    n2 = 0;
  for (let i = 0; i < length; i += 1) {
    buttons[i].setAttribute("tabindex", i === n2 ? "0" : "-1");
  }
  event.preventDefault();
  buttons[n2].focus();
}
var shortcutListeners = new WeakMap();
function elementHotkeyRequiresShift(element) {
  return element.hasAttribute("hotkey-requires-shift") && element.getAttribute("hotkey-requires-shift") !== "false";
}
function findHotkey(toolbar, key, shiftPressed) {
  for (const el of toolbar.querySelectorAll("[hotkey]")) {
    if (el.getAttribute("hotkey") === key && (!elementHotkeyRequiresShift(el) || shiftPressed)) {
      return el;
    }
  }
  return null;
}
function shortcut(toolbar, event) {
  if (event.metaKey && modifierKey === "Meta" || event.ctrlKey && modifierKey === "Control") {
    const key = event.shiftKey ? event.key.toUpperCase() : event.key;
    const button = findHotkey(toolbar, key, event.shiftKey);
    if (button) {
      button.click();
      event.preventDefault();
    }
  }
}
if (!window.customElements.get("markdown-toolbar")) {
  window.MarkdownToolbarElement = MarkdownToolbarElement;
  window.customElements.define("markdown-toolbar", MarkdownToolbarElement);
}
function isMultipleLines(string) {
  return string.trim().split("\n").length > 1;
}
function repeat(string, n2) {
  return Array(n2 + 1).join(string);
}
function wordSelectionStart(text2, i) {
  let index = i;
  while (text2[index] && text2[index - 1] != null && !text2[index - 1].match(/\s/)) {
    index--;
  }
  return index;
}
function wordSelectionEnd(text2, i, multiline) {
  let index = i;
  const breakpoint = multiline ? /\n/ : /\s/;
  while (text2[index] && !text2[index].match(breakpoint)) {
    index++;
  }
  return index;
}
var canInsertText = null;
function insertText(textarea, {text: text2, selectionStart, selectionEnd}) {
  const originalSelectionStart = textarea.selectionStart;
  const before = textarea.value.slice(0, originalSelectionStart);
  const after = textarea.value.slice(textarea.selectionEnd);
  if (canInsertText === null || canInsertText === true) {
    textarea.contentEditable = "true";
    try {
      canInsertText = document.execCommand("insertText", false, text2);
    } catch (error2) {
      canInsertText = false;
    }
    textarea.contentEditable = "false";
  }
  if (canInsertText && !textarea.value.slice(0, textarea.selectionStart).endsWith(text2)) {
    canInsertText = false;
  }
  if (!canInsertText) {
    try {
      document.execCommand("ms-beginUndoUnit");
    } catch (e2) {
    }
    textarea.value = before + text2 + after;
    try {
      document.execCommand("ms-endUndoUnit");
    } catch (e2) {
    }
    textarea.dispatchEvent(new CustomEvent("input", {bubbles: true, cancelable: true}));
  }
  if (selectionStart != null && selectionEnd != null) {
    textarea.setSelectionRange(selectionStart, selectionEnd);
  } else {
    textarea.setSelectionRange(originalSelectionStart, textarea.selectionEnd);
  }
}
function styleSelectedText(textarea, styleArgs) {
  const text2 = textarea.value.slice(textarea.selectionStart, textarea.selectionEnd);
  let result;
  if (styleArgs.orderedList) {
    result = orderedList(textarea);
  } else if (styleArgs.multiline && isMultipleLines(text2)) {
    result = multilineStyle(textarea, styleArgs);
  } else {
    result = blockStyle(textarea, styleArgs);
  }
  insertText(textarea, result);
}
function expandSelectedText(textarea, prefixToUse, suffixToUse, multiline = false) {
  if (textarea.selectionStart === textarea.selectionEnd) {
    textarea.selectionStart = wordSelectionStart(textarea.value, textarea.selectionStart);
    textarea.selectionEnd = wordSelectionEnd(textarea.value, textarea.selectionEnd, multiline);
  } else {
    const expandedSelectionStart = textarea.selectionStart - prefixToUse.length;
    const expandedSelectionEnd = textarea.selectionEnd + suffixToUse.length;
    const beginsWithPrefix = textarea.value.slice(expandedSelectionStart, textarea.selectionStart) === prefixToUse;
    const endsWithSuffix = textarea.value.slice(textarea.selectionEnd, expandedSelectionEnd) === suffixToUse;
    if (beginsWithPrefix && endsWithSuffix) {
      textarea.selectionStart = expandedSelectionStart;
      textarea.selectionEnd = expandedSelectionEnd;
    }
  }
  return textarea.value.slice(textarea.selectionStart, textarea.selectionEnd);
}
function newlinesToSurroundSelectedText(textarea) {
  const beforeSelection = textarea.value.slice(0, textarea.selectionStart);
  const afterSelection = textarea.value.slice(textarea.selectionEnd);
  const breaksBefore = beforeSelection.match(/\n*$/);
  const breaksAfter = afterSelection.match(/^\n*/);
  const newlinesBeforeSelection = breaksBefore ? breaksBefore[0].length : 0;
  const newlinesAfterSelection = breaksAfter ? breaksAfter[0].length : 0;
  let newlinesToAppend;
  let newlinesToPrepend;
  if (beforeSelection.match(/\S/) && newlinesBeforeSelection < 2) {
    newlinesToAppend = repeat("\n", 2 - newlinesBeforeSelection);
  }
  if (afterSelection.match(/\S/) && newlinesAfterSelection < 2) {
    newlinesToPrepend = repeat("\n", 2 - newlinesAfterSelection);
  }
  if (newlinesToAppend == null) {
    newlinesToAppend = "";
  }
  if (newlinesToPrepend == null) {
    newlinesToPrepend = "";
  }
  return {newlinesToAppend, newlinesToPrepend};
}
function blockStyle(textarea, arg) {
  let newlinesToAppend;
  let newlinesToPrepend;
  const {prefix, suffix, blockPrefix, blockSuffix, replaceNext, prefixSpace, scanFor, surroundWithNewlines} = arg;
  const originalSelectionStart = textarea.selectionStart;
  const originalSelectionEnd = textarea.selectionEnd;
  let selectedText = textarea.value.slice(textarea.selectionStart, textarea.selectionEnd);
  let prefixToUse = isMultipleLines(selectedText) && blockPrefix.length > 0 ? `${blockPrefix}
` : prefix;
  let suffixToUse = isMultipleLines(selectedText) && blockSuffix.length > 0 ? `
${blockSuffix}` : suffix;
  if (prefixSpace) {
    const beforeSelection = textarea.value[textarea.selectionStart - 1];
    if (textarea.selectionStart !== 0 && beforeSelection != null && !beforeSelection.match(/\s/)) {
      prefixToUse = ` ${prefixToUse}`;
    }
  }
  selectedText = expandSelectedText(textarea, prefixToUse, suffixToUse, arg.multiline);
  let selectionStart = textarea.selectionStart;
  let selectionEnd = textarea.selectionEnd;
  const hasReplaceNext = replaceNext.length > 0 && suffixToUse.indexOf(replaceNext) > -1 && selectedText.length > 0;
  if (surroundWithNewlines) {
    const ref = newlinesToSurroundSelectedText(textarea);
    newlinesToAppend = ref.newlinesToAppend;
    newlinesToPrepend = ref.newlinesToPrepend;
    prefixToUse = newlinesToAppend + prefix;
    suffixToUse += newlinesToPrepend;
  }
  if (selectedText.startsWith(prefixToUse) && selectedText.endsWith(suffixToUse)) {
    const replacementText = selectedText.slice(prefixToUse.length, selectedText.length - suffixToUse.length);
    if (originalSelectionStart === originalSelectionEnd) {
      let position = originalSelectionStart - prefixToUse.length;
      position = Math.max(position, selectionStart);
      position = Math.min(position, selectionStart + replacementText.length);
      selectionStart = selectionEnd = position;
    } else {
      selectionEnd = selectionStart + replacementText.length;
    }
    return {text: replacementText, selectionStart, selectionEnd};
  } else if (!hasReplaceNext) {
    let replacementText = prefixToUse + selectedText + suffixToUse;
    selectionStart = originalSelectionStart + prefixToUse.length;
    selectionEnd = originalSelectionEnd + prefixToUse.length;
    const whitespaceEdges = selectedText.match(/^\s*|\s*$/g);
    if (arg.trimFirst && whitespaceEdges) {
      const leadingWhitespace = whitespaceEdges[0] || "";
      const trailingWhitespace = whitespaceEdges[1] || "";
      replacementText = leadingWhitespace + prefixToUse + selectedText.trim() + suffixToUse + trailingWhitespace;
      selectionStart += leadingWhitespace.length;
      selectionEnd -= trailingWhitespace.length;
    }
    return {text: replacementText, selectionStart, selectionEnd};
  } else if (scanFor.length > 0 && selectedText.match(scanFor)) {
    suffixToUse = suffixToUse.replace(replaceNext, selectedText);
    const replacementText = prefixToUse + suffixToUse;
    selectionStart = selectionEnd = selectionStart + prefixToUse.length;
    return {text: replacementText, selectionStart, selectionEnd};
  } else {
    const replacementText = prefixToUse + selectedText + suffixToUse;
    selectionStart = selectionStart + prefixToUse.length + selectedText.length + suffixToUse.indexOf(replaceNext);
    selectionEnd = selectionStart + replaceNext.length;
    return {text: replacementText, selectionStart, selectionEnd};
  }
}
function multilineStyle(textarea, arg) {
  const {prefix, suffix, surroundWithNewlines} = arg;
  let text2 = textarea.value.slice(textarea.selectionStart, textarea.selectionEnd);
  let selectionStart = textarea.selectionStart;
  let selectionEnd = textarea.selectionEnd;
  const lines = text2.split("\n");
  const undoStyle = lines.every((line) => line.startsWith(prefix) && line.endsWith(suffix));
  if (undoStyle) {
    text2 = lines.map((line) => line.slice(prefix.length, line.length - suffix.length)).join("\n");
    selectionEnd = selectionStart + text2.length;
  } else {
    text2 = lines.map((line) => prefix + line + suffix).join("\n");
    if (surroundWithNewlines) {
      const {newlinesToAppend, newlinesToPrepend} = newlinesToSurroundSelectedText(textarea);
      selectionStart += newlinesToAppend.length;
      selectionEnd = selectionStart + text2.length;
      text2 = newlinesToAppend + text2 + newlinesToPrepend;
    }
  }
  return {text: text2, selectionStart, selectionEnd};
}
function orderedList(textarea) {
  const orderedListRegex = /^\d+\.\s+/;
  const noInitialSelection = textarea.selectionStart === textarea.selectionEnd;
  let selectionEnd;
  let selectionStart;
  let text2 = textarea.value.slice(textarea.selectionStart, textarea.selectionEnd);
  let textToUnstyle = text2;
  let lines = text2.split("\n");
  let startOfLine, endOfLine;
  if (noInitialSelection) {
    const linesBefore = textarea.value.slice(0, textarea.selectionStart).split(/\n/);
    startOfLine = textarea.selectionStart - linesBefore[linesBefore.length - 1].length;
    endOfLine = wordSelectionEnd(textarea.value, textarea.selectionStart, true);
    textToUnstyle = textarea.value.slice(startOfLine, endOfLine);
  }
  const linesToUnstyle = textToUnstyle.split("\n");
  const undoStyling = linesToUnstyle.every((line) => orderedListRegex.test(line));
  if (undoStyling) {
    lines = linesToUnstyle.map((line) => line.replace(orderedListRegex, ""));
    text2 = lines.join("\n");
    if (noInitialSelection && startOfLine && endOfLine) {
      const lengthDiff = linesToUnstyle[0].length - lines[0].length;
      selectionStart = selectionEnd = textarea.selectionStart - lengthDiff;
      textarea.selectionStart = startOfLine;
      textarea.selectionEnd = endOfLine;
    }
  } else {
    lines = numberedLines(lines);
    text2 = lines.join("\n");
    const {newlinesToAppend, newlinesToPrepend} = newlinesToSurroundSelectedText(textarea);
    selectionStart = textarea.selectionStart + newlinesToAppend.length;
    selectionEnd = selectionStart + text2.length;
    if (noInitialSelection)
      selectionStart = selectionEnd;
    text2 = newlinesToAppend + text2 + newlinesToPrepend;
  }
  return {text: text2, selectionStart, selectionEnd};
}
function numberedLines(lines) {
  let i;
  let len;
  let index;
  const results = [];
  for (index = i = 0, len = lines.length; i < len; index = ++i) {
    const line = lines[index];
    results.push(`${index + 1}. ${line}`);
  }
  return results;
}
function applyStyle(button, stylesToApply) {
  const toolbar = button.closest("markdown-toolbar");
  if (!(toolbar instanceof MarkdownToolbarElement))
    return;
  const defaults3 = {
    prefix: "",
    suffix: "",
    blockPrefix: "",
    blockSuffix: "",
    multiline: false,
    replaceNext: "",
    prefixSpace: false,
    scanFor: "",
    surroundWithNewlines: false,
    orderedList: false,
    trimFirst: false
  };
  const style = Object.assign(Object.assign({}, defaults3), stylesToApply);
  const field = toolbar.field;
  if (field) {
    field.focus();
    styleSelectedText(field, style);
  }
}

// node_modules/marked/lib/marked.esm.js
var esmEntry$1 = {exports: {}};
var defaults$5 = {exports: {}};
function getDefaults$1() {
  return {
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: "",
    highlight: null,
    langPrefix: "language-",
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}
function changeDefaults$1(newDefaults) {
  defaults$5.exports.defaults = newDefaults;
}
defaults$5.exports = {
  defaults: getDefaults$1(),
  getDefaults: getDefaults$1,
  changeDefaults: changeDefaults$1
};
var escapeTest = /[&<>"']/;
var escapeReplace = /[&<>"']/g;
var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape$3(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}
var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape$1(html) {
  return html.replace(unescapeTest, (_, n2) => {
    n2 = n2.toLowerCase();
    if (n2 === "colon")
      return ":";
    if (n2.charAt(0) === "#") {
      return n2.charAt(1) === "x" ? String.fromCharCode(parseInt(n2.substring(2), 16)) : String.fromCharCode(+n2.substring(1));
    }
    return "";
  });
}
var caret = /(^|[^\[])\^/g;
function edit$1(regex, opt) {
  regex = regex.source || regex;
  opt = opt || "";
  const obj = {
    replace: (name2, val) => {
      val = val.source || val;
      val = val.replace(caret, "$1");
      regex = regex.replace(name2, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}
var nonWordAndColonTest = /[^\w:]/g;
var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function cleanUrl$1(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape$1(href)).replace(nonWordAndColonTest, "").toLowerCase();
    } catch (e2) {
      return null;
    }
    if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0 || prot.indexOf("data:") === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch (e2) {
    return null;
  }
  return href;
}
var baseUrls = {};
var justDomain = /^[^:]+:\/*[^/]*$/;
var protocol = /^([^:]+:)[\s\S]*$/;
var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function resolveUrl(base, href) {
  if (!baseUrls[" " + base]) {
    if (justDomain.test(base)) {
      baseUrls[" " + base] = base + "/";
    } else {
      baseUrls[" " + base] = rtrim$1(base, "/", true);
    }
  }
  base = baseUrls[" " + base];
  const relativeBase = base.indexOf(":") === -1;
  if (href.substring(0, 2) === "//") {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, "$1") + href;
  } else if (href.charAt(0) === "/") {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, "$1") + href;
  } else {
    return base + href;
  }
}
var noopTest$1 = {exec: function noopTest() {
}};
function merge$2(obj) {
  let i = 1, target, key;
  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }
  return obj;
}
function splitCells$1(tableRow, count) {
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
    let escaped = false, curr = offset;
    while (--curr >= 0 && str[curr] === "\\")
      escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(/ \|/);
  let i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (!cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count)
      cells.push("");
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(/\\\|/g, "|");
  }
  return cells;
}
function rtrim$1(str, c2, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c2 && !invert) {
      suffLen++;
    } else if (currChar !== c2 && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.substr(0, l - suffLen);
}
function findClosingBracket$1(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l = str.length;
  let level = 0, i = 0;
  for (; i < l; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}
function checkSanitizeDeprecation$1(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
  }
}
function repeatString$1(pattern, count) {
  if (count < 1) {
    return "";
  }
  let result = "";
  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }
    count >>= 1;
    pattern += pattern;
  }
  return result + pattern;
}
var helpers = {
  escape: escape$3,
  unescape: unescape$1,
  edit: edit$1,
  cleanUrl: cleanUrl$1,
  resolveUrl,
  noopTest: noopTest$1,
  merge: merge$2,
  splitCells: splitCells$1,
  rtrim: rtrim$1,
  findClosingBracket: findClosingBracket$1,
  checkSanitizeDeprecation: checkSanitizeDeprecation$1,
  repeatString: repeatString$1
};
var {defaults: defaults$4} = defaults$5.exports;
var {
  rtrim,
  splitCells,
  escape: escape$2,
  findClosingBracket
} = helpers;
function outputLink(cap, link, raw, lexer2) {
  const href = link.href;
  const title = link.title ? escape$2(link.title) : null;
  const text2 = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer2.state.inLink = true;
    const token = {
      type: "link",
      raw,
      href,
      title,
      text: text2,
      tokens: lexer2.inlineTokens(text2, [])
    };
    lexer2.state.inLink = false;
    return token;
  } else {
    return {
      type: "image",
      raw,
      href,
      title,
      text: escape$2(text2)
    };
  }
}
function indentCodeCompensation(raw, text2) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text2;
  }
  const indentToCode = matchIndentToCode[1];
  return text2.split("\n").map((node) => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
var Tokenizer_1$1 = class Tokenizer {
  constructor(options) {
    this.options = options || defaults$4;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap) {
      if (cap[0].length > 1) {
        return {
          type: "space",
          raw: cap[0]
        };
      }
      return {raw: "\n"};
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text2 = cap[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text2, "\n") : text2
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text2 = indentCodeCompensation(raw, cap[3] || "");
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim() : cap[2],
        text: text2
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text2 = cap[2].trim();
      if (/#$/.test(text2)) {
        const trimmed = rtrim(text2, "#");
        if (this.options.pedantic) {
          text2 = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          text2 = trimmed.trim();
        }
      }
      const token = {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text: text2,
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: cap[0]
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text2 = cap[0].replace(/^ *> ?/gm, "");
      return {
        type: "blockquote",
        raw: cap[0],
        tokens: this.lexer.blockTokens(text2, []),
        text: text2
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, lines, itemContents;
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list2 = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = new RegExp(`^( {0,3}${bull})((?: [^\\n]*| *)(?:\\n[^\\n]*)*(?:\\n|$))`);
      while (src) {
        if (this.rules.block.hr.test(src)) {
          break;
        }
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        lines = cap[2].split("\n");
        if (this.options.pedantic) {
          indent = 2;
          itemContents = lines[0].trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/);
          indent = cap[1].length + (indent > 4 ? 1 : indent);
          itemContents = lines[0].slice(indent - cap[1].length);
        }
        blankLine = false;
        raw = cap[0];
        if (!lines[0] && /^ *$/.test(lines[1])) {
          raw = cap[1] + lines.slice(0, 2).join("\n") + "\n";
          list2.loose = true;
          lines = [];
        }
        const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])`);
        for (i = 1; i < lines.length; i++) {
          line = lines[i];
          if (this.options.pedantic) {
            line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
          }
          if (nextBulletRegex.test(line)) {
            raw = cap[1] + lines.slice(0, i).join("\n") + "\n";
            break;
          }
          if (!blankLine) {
            if (!line.trim()) {
              blankLine = true;
            }
            if (line.search(/[^ ]/) >= indent) {
              itemContents += "\n" + line.slice(indent);
            } else {
              itemContents += "\n" + line;
            }
            continue;
          }
          if (line.search(/[^ ]/) >= indent || !line.trim()) {
            itemContents += "\n" + line.slice(indent);
            continue;
          } else {
            raw = cap[1] + lines.slice(0, i).join("\n") + "\n";
            break;
          }
        }
        if (!list2.loose) {
          if (endsWithBlankLine) {
            list2.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
          }
        }
        list2.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });
        list2.raw += raw;
        src = src.slice(raw.length);
      }
      list2.items[list2.items.length - 1].raw = raw.trimRight();
      list2.items[list2.items.length - 1].text = itemContents.trimRight();
      list2.raw = list2.raw.trimRight();
      const l = list2.items.length;
      for (i = 0; i < l; i++) {
        this.lexer.state.top = false;
        list2.items[i].tokens = this.lexer.blockTokens(list2.items[i].text, []);
        if (list2.items[i].tokens.some((t2) => t2.type === "space")) {
          list2.loose = true;
          list2.items[i].loose = true;
        }
      }
      return list2;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        raw: cap[0],
        pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
        text: cap[0]
      };
      if (this.options.sanitize) {
        token.type = "paragraph";
        token.text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$2(cap[0]);
        token.tokens = [];
        this.lexer.inline(token.text, token.tokens);
      }
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      if (cap[3])
        cap[3] = cap[3].substring(1, cap[3].length - 1);
      const tag = cap[1].toLowerCase().replace(/\s+/g, " ");
      return {
        type: "def",
        tag,
        raw: cap[0],
        href: cap[2],
        title: cap[3]
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (cap) {
      const item2 = {
        type: "table",
        header: splitCells(cap[1]).map((c2) => {
          return {text: c2};
        }),
        align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: cap[3] ? cap[3].replace(/\n$/, "").split("\n") : []
      };
      if (item2.header.length === item2.align.length) {
        item2.raw = cap[0];
        let l = item2.align.length;
        let i, j, k, row;
        for (i = 0; i < l; i++) {
          if (/^ *-+: *$/.test(item2.align[i])) {
            item2.align[i] = "right";
          } else if (/^ *:-+: *$/.test(item2.align[i])) {
            item2.align[i] = "center";
          } else if (/^ *:-+ *$/.test(item2.align[i])) {
            item2.align[i] = "left";
          } else {
            item2.align[i] = null;
          }
        }
        l = item2.rows.length;
        for (i = 0; i < l; i++) {
          item2.rows[i] = splitCells(item2.rows[i], item2.header.length).map((c2) => {
            return {text: c2};
          });
        }
        l = item2.header.length;
        for (j = 0; j < l; j++) {
          item2.header[j].tokens = [];
          this.lexer.inlineTokens(item2.header[j].text, item2.header[j].tokens);
        }
        l = item2.rows.length;
        for (j = 0; j < l; j++) {
          row = item2.rows[j];
          for (k = 0; k < row.length; k++) {
            row[k].tokens = [];
            this.lexer.inlineTokens(row[k].text, row[k].tokens);
          }
        }
        return item2;
      }
    }
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      const token = {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const token = {
        type: "paragraph",
        raw: cap[0],
        text: cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      const token = {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: escape$2(cap[1])
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: this.options.sanitize ? "text" : "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$2(cap[0]) : cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, "$1") : href,
        title: title ? title.replace(this.rules.inline._escapes, "$1") : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, " ");
      link = links[link.toLowerCase()];
      if (!link || !link.href) {
        const text2 = cap[0].charAt(0);
        return {
          type: "text",
          raw: text2,
          text: text2
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match)
      return;
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
      return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || nextChar && (prevChar === "" || this.rules.inline.punctuation.exec(prevChar))) {
      const lLength = match[0].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim)
          continue;
        rLength = rDelim.length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0)
          continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        if (Math.min(lLength, rLength) % 2) {
          const text3 = src.slice(1, lLength + match.index + rLength);
          return {
            type: "em",
            raw: src.slice(0, lLength + match.index + rLength + 1),
            text: text3,
            tokens: this.lexer.inlineTokens(text3, [])
          };
        }
        const text2 = src.slice(2, lLength + match.index + rLength - 1);
        return {
          type: "strong",
          raw: src.slice(0, lLength + match.index + rLength + 1),
          text: text2,
          tokens: this.lexer.inlineTokens(text2, [])
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text2 = cap[2].replace(/\n/g, " ");
      const hasNonSpaceChars = /[^ ]/.test(text2);
      const hasSpaceCharsOnBothEnds = /^ /.test(text2) && / $/.test(text2);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text2 = text2.substring(1, text2.length - 1);
      }
      text2 = escape$2(text2, true);
      return {
        type: "codespan",
        raw: cap[0],
        text: text2
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2], [])
      };
    }
  }
  autolink(src, mangle2) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text2, href;
      if (cap[2] === "@") {
        text2 = escape$2(this.options.mangle ? mangle2(cap[1]) : cap[1]);
        href = "mailto:" + text2;
      } else {
        text2 = escape$2(cap[1]);
        href = text2;
      }
      return {
        type: "link",
        raw: cap[0],
        text: text2,
        href,
        tokens: [
          {
            type: "text",
            raw: text2,
            text: text2
          }
        ]
      };
    }
  }
  url(src, mangle2) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text2, href;
      if (cap[2] === "@") {
        text2 = escape$2(this.options.mangle ? mangle2(cap[0]) : cap[0]);
        href = "mailto:" + text2;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text2 = escape$2(cap[0]);
        if (cap[1] === "www.") {
          href = "http://" + text2;
        } else {
          href = text2;
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text: text2,
        href,
        tokens: [
          {
            type: "text",
            raw: text2,
            text: text2
          }
        ]
      };
    }
  }
  inlineText(src, smartypants2) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text2;
      if (this.lexer.state.inRawBlock) {
        text2 = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$2(cap[0]) : cap[0];
      } else {
        text2 = escape$2(this.options.smartypants ? smartypants2(cap[0]) : cap[0]);
      }
      return {
        type: "text",
        raw: cap[0],
        text: text2
      };
    }
  }
};
var {
  noopTest: noopTest2,
  edit,
  merge: merge$1
} = helpers;
var block$1 = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest2,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
block$1._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
block$1._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block$1.def = edit(block$1.def).replace("label", block$1._label).replace("title", block$1._title).getRegex();
block$1.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block$1.listItemStart = edit(/^( *)(bull) */).replace("bull", block$1.bullet).getRegex();
block$1.list = edit(block$1.list).replace(/bull/g, block$1.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block$1.def.source + ")").getRegex();
block$1._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
block$1._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block$1.html = edit(block$1.html, "i").replace("comment", block$1._comment).replace("tag", block$1._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block$1.paragraph = edit(block$1._paragraph).replace("hr", block$1.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block$1._tag).getRegex();
block$1.blockquote = edit(block$1.blockquote).replace("paragraph", block$1.paragraph).getRegex();
block$1.normal = merge$1({}, block$1);
block$1.gfm = merge$1({}, block$1.normal, {
  table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
});
block$1.gfm.table = edit(block$1.gfm.table).replace("hr", block$1.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block$1._tag).getRegex();
block$1.pedantic = merge$1({}, block$1.normal, {
  html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", block$1._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest2,
  paragraph: edit(block$1.normal._paragraph).replace("hr", block$1.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", block$1.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
});
var inline$1 = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest2,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
  nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest2,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};
inline$1._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
inline$1.punctuation = edit(inline$1.punctuation).replace(/punctuation/g, inline$1._punctuation).getRegex();
inline$1.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline$1.escapedEmSt = /\\\*|\\_/g;
inline$1._comment = edit(block$1._comment).replace("(?:-->|$)", "-->").getRegex();
inline$1.emStrong.lDelim = edit(inline$1.emStrong.lDelim).replace(/punct/g, inline$1._punctuation).getRegex();
inline$1.emStrong.rDelimAst = edit(inline$1.emStrong.rDelimAst, "g").replace(/punct/g, inline$1._punctuation).getRegex();
inline$1.emStrong.rDelimUnd = edit(inline$1.emStrong.rDelimUnd, "g").replace(/punct/g, inline$1._punctuation).getRegex();
inline$1._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
inline$1._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline$1._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline$1.autolink = edit(inline$1.autolink).replace("scheme", inline$1._scheme).replace("email", inline$1._email).getRegex();
inline$1._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline$1.tag = edit(inline$1.tag).replace("comment", inline$1._comment).replace("attribute", inline$1._attribute).getRegex();
inline$1._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline$1._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline$1._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline$1.link = edit(inline$1.link).replace("label", inline$1._label).replace("href", inline$1._href).replace("title", inline$1._title).getRegex();
inline$1.reflink = edit(inline$1.reflink).replace("label", inline$1._label).getRegex();
inline$1.reflinkSearch = edit(inline$1.reflinkSearch, "g").replace("reflink", inline$1.reflink).replace("nolink", inline$1.nolink).getRegex();
inline$1.normal = merge$1({}, inline$1);
inline$1.pedantic = merge$1({}, inline$1.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline$1._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline$1._label).getRegex()
});
inline$1.gfm = merge$1({}, inline$1.normal, {
  escape: edit(inline$1.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
inline$1.gfm.url = edit(inline$1.gfm.url, "i").replace("email", inline$1.gfm._extended_email).getRegex();
inline$1.breaks = merge$1({}, inline$1.gfm, {
  br: edit(inline$1.br).replace("{2,}", "*").getRegex(),
  text: edit(inline$1.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
});
var rules = {
  block: block$1,
  inline: inline$1
};
var Tokenizer$2 = Tokenizer_1$1;
var {defaults: defaults$3} = defaults$5.exports;
var {block, inline} = rules;
var {repeatString} = helpers;
function smartypants(text2) {
  return text2.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
}
function mangle(text2) {
  let out = "", i, ch;
  const l = text2.length;
  for (i = 0; i < l; i++) {
    ch = text2.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = "x" + ch.toString(16);
    }
    out += "&#" + ch + ";";
  }
  return out;
}
var Lexer_1$1 = class Lexer {
  constructor(options) {
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || defaults$3;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer$2();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules2 = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules2.block = block.pedantic;
      rules2.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules2.block = block.gfm;
      if (this.options.breaks) {
        rules2.inline = inline.breaks;
      } else {
        rules2.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules2;
  }
  static get rules() {
    return {
      block,
      inline
    };
  }
  static lex(src, options) {
    const lexer2 = new Lexer(options);
    return lexer2.lex(src);
  }
  static lexInline(src, options) {
    const lexer2 = new Lexer(options);
    return lexer2.inlineTokens(src);
  }
  lex(src) {
    src = src.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ");
    this.blockTokens(src, this.tokens);
    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }
    return this.tokens;
  }
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/^ +$/gm, "");
    }
    let token, lastToken, cutSrc, lastParagraphClipped;
    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
        if (token = extTokenizer.call({lexer: this}, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.type) {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({lexer: this}, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens) {
    this.inlineQueue.push({src, tokens});
  }
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    }
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
        if (token = extTokenizer.call({lexer: this}, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({lexer: this}, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
};
var {defaults: defaults$2} = defaults$5.exports;
var {
  cleanUrl,
  escape: escape$1
} = helpers;
var Renderer_1$1 = class Renderer {
  constructor(options) {
    this.options = options || defaults$2;
  }
  code(code, infostring, escaped) {
    const lang = (infostring || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }
    code = code.replace(/\n$/, "") + "\n";
    if (!lang) {
      return "<pre><code>" + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="' + this.options.langPrefix + escape$1(lang, true) + '">' + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
  }
  blockquote(quote) {
    return "<blockquote>\n" + quote + "</blockquote>\n";
  }
  html(html) {
    return html;
  }
  heading(text2, level, raw, slugger) {
    if (this.options.headerIds) {
      return "<h" + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text2 + "</h" + level + ">\n";
    }
    return "<h" + level + ">" + text2 + "</h" + level + ">\n";
  }
  hr() {
    return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
  }
  list(body, ordered, start) {
    const type = ordered ? "ol" : "ul", startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
  }
  listitem(text2) {
    return "<li>" + text2 + "</li>\n";
  }
  checkbox(checked) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  paragraph(text2) {
    return "<p>" + text2 + "</p>\n";
  }
  table(header, body) {
    if (body)
      body = "<tbody>" + body + "</tbody>";
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow(content) {
    return "<tr>\n" + content + "</tr>\n";
  }
  tablecell(content, flags) {
    const type = flags.header ? "th" : "td";
    const tag = flags.align ? "<" + type + ' align="' + flags.align + '">' : "<" + type + ">";
    return tag + content + "</" + type + ">\n";
  }
  strong(text2) {
    return "<strong>" + text2 + "</strong>";
  }
  em(text2) {
    return "<em>" + text2 + "</em>";
  }
  codespan(text2) {
    return "<code>" + text2 + "</code>";
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  del(text2) {
    return "<del>" + text2 + "</del>";
  }
  link(href, title, text2) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text2;
    }
    let out = '<a href="' + escape$1(href) + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text2 + "</a>";
    return out;
  }
  image(href, title, text2) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text2;
    }
    let out = '<img src="' + href + '" alt="' + text2 + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += this.options.xhtml ? "/>" : ">";
    return out;
  }
  text(text2) {
    return text2;
  }
};
var TextRenderer_1$1 = class TextRenderer {
  strong(text2) {
    return text2;
  }
  em(text2) {
    return text2;
  }
  codespan(text2) {
    return text2;
  }
  del(text2) {
    return text2;
  }
  html(text2) {
    return text2;
  }
  text(text2) {
    return text2;
  }
  link(href, title, text2) {
    return "" + text2;
  }
  image(href, title, text2) {
    return "" + text2;
  }
  br() {
    return "";
  }
};
var Slugger_1$1 = class Slugger {
  constructor() {
    this.seen = {};
  }
  serialize(value) {
    return value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do {
        occurenceAccumulator++;
        slug = originalSlug + "-" + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }
    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }
    return slug;
  }
  slug(value, options = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options.dryrun);
  }
};
var Renderer$2 = Renderer_1$1;
var TextRenderer$2 = TextRenderer_1$1;
var Slugger$2 = Slugger_1$1;
var {defaults: defaults$1} = defaults$5.exports;
var {
  unescape: unescape2
} = helpers;
var Parser_1$1 = class Parser {
  constructor(options) {
    this.options = options || defaults$1;
    this.options.renderer = this.options.renderer || new Renderer$2();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer$2();
    this.slugger = new Slugger$2();
  }
  static parse(tokens, options) {
    const parser2 = new Parser(options);
    return parser2.parse(tokens);
  }
  static parseInline(tokens, options) {
    const parser2 = new Parser(options);
    return parser2.parseInline(tokens);
  }
  parse(tokens, top = true) {
    let out = "", i, j, k, l2, l3, row, cell, header, body, token, ordered, start, loose, itemBody, item2, checked, task, checkbox, ret;
    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({parser: this}, token);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "space": {
          continue;
        }
        case "hr": {
          out += this.renderer.hr();
          continue;
        }
        case "heading": {
          out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape2(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
          continue;
        }
        case "code": {
          out += this.renderer.code(token.text, token.lang, token.escaped);
          continue;
        }
        case "table": {
          header = "";
          cell = "";
          l2 = token.header.length;
          for (j = 0; j < l2; j++) {
            cell += this.renderer.tablecell(this.parseInline(token.header[j].tokens), {header: true, align: token.align[j]});
          }
          header += this.renderer.tablerow(cell);
          body = "";
          l2 = token.rows.length;
          for (j = 0; j < l2; j++) {
            row = token.rows[j];
            cell = "";
            l3 = row.length;
            for (k = 0; k < l3; k++) {
              cell += this.renderer.tablecell(this.parseInline(row[k].tokens), {header: false, align: token.align[k]});
            }
            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case "blockquote": {
          body = this.parse(token.tokens);
          out += this.renderer.blockquote(body);
          continue;
        }
        case "list": {
          ordered = token.ordered;
          start = token.start;
          loose = token.loose;
          l2 = token.items.length;
          body = "";
          for (j = 0; j < l2; j++) {
            item2 = token.items[j];
            checked = item2.checked;
            task = item2.task;
            itemBody = "";
            if (item2.task) {
              checkbox = this.renderer.checkbox(checked);
              if (loose) {
                if (item2.tokens.length > 0 && item2.tokens[0].type === "paragraph") {
                  item2.tokens[0].text = checkbox + " " + item2.tokens[0].text;
                  if (item2.tokens[0].tokens && item2.tokens[0].tokens.length > 0 && item2.tokens[0].tokens[0].type === "text") {
                    item2.tokens[0].tokens[0].text = checkbox + " " + item2.tokens[0].tokens[0].text;
                  }
                } else {
                  item2.tokens.unshift({
                    type: "text",
                    text: checkbox
                  });
                }
              } else {
                itemBody += checkbox;
              }
            }
            itemBody += this.parse(item2.tokens, loose);
            body += this.renderer.listitem(itemBody, task, checked);
          }
          out += this.renderer.list(body, ordered, start);
          continue;
        }
        case "html": {
          out += this.renderer.html(token.text);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(this.parseInline(token.tokens));
          continue;
        }
        case "text": {
          body = token.tokens ? this.parseInline(token.tokens) : token.text;
          while (i + 1 < l && tokens[i + 1].type === "text") {
            token = tokens[++i];
            body += "\n" + (token.tokens ? this.parseInline(token.tokens) : token.text);
          }
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "", i, token, ret;
    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({parser: this}, token);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "escape": {
          out += renderer.text(token.text);
          break;
        }
        case "html": {
          out += renderer.html(token.text);
          break;
        }
        case "link": {
          out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
          break;
        }
        case "image": {
          out += renderer.image(token.href, token.title, token.text);
          break;
        }
        case "strong": {
          out += renderer.strong(this.parseInline(token.tokens, renderer));
          break;
        }
        case "em": {
          out += renderer.em(this.parseInline(token.tokens, renderer));
          break;
        }
        case "codespan": {
          out += renderer.codespan(token.text);
          break;
        }
        case "br": {
          out += renderer.br();
          break;
        }
        case "del": {
          out += renderer.del(this.parseInline(token.tokens, renderer));
          break;
        }
        case "text": {
          out += renderer.text(token.text);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
};
var Lexer$1 = Lexer_1$1;
var Parser$1 = Parser_1$1;
var Tokenizer$1 = Tokenizer_1$1;
var Renderer$1 = Renderer_1$1;
var TextRenderer$1 = TextRenderer_1$1;
var Slugger$1 = Slugger_1$1;
var {
  merge,
  checkSanitizeDeprecation,
  escape
} = helpers;
var {
  getDefaults,
  changeDefaults,
  defaults: defaults2
} = defaults$5.exports;
function marked$1(src, opt, callback) {
  if (typeof src === "undefined" || src === null) {
    throw new Error("marked(): input parameter is undefined or null");
  }
  if (typeof src !== "string") {
    throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected");
  }
  if (typeof opt === "function") {
    callback = opt;
    opt = null;
  }
  opt = merge({}, marked$1.defaults, opt || {});
  checkSanitizeDeprecation(opt);
  if (callback) {
    const highlight = opt.highlight;
    let tokens;
    try {
      tokens = Lexer$1.lex(src, opt);
    } catch (e2) {
      return callback(e2);
    }
    const done = function(err) {
      let out;
      if (!err) {
        try {
          if (opt.walkTokens) {
            marked$1.walkTokens(tokens, opt.walkTokens);
          }
          out = Parser$1.parse(tokens, opt);
        } catch (e2) {
          err = e2;
        }
      }
      opt.highlight = highlight;
      return err ? callback(err) : callback(null, out);
    };
    if (!highlight || highlight.length < 3) {
      return done();
    }
    delete opt.highlight;
    if (!tokens.length)
      return done();
    let pending = 0;
    marked$1.walkTokens(tokens, function(token) {
      if (token.type === "code") {
        pending++;
        setTimeout(() => {
          highlight(token.text, token.lang, function(err, code) {
            if (err) {
              return done(err);
            }
            if (code != null && code !== token.text) {
              token.text = code;
              token.escaped = true;
            }
            pending--;
            if (pending === 0) {
              done();
            }
          });
        }, 0);
      }
    });
    if (pending === 0) {
      done();
    }
    return;
  }
  try {
    const tokens = Lexer$1.lex(src, opt);
    if (opt.walkTokens) {
      marked$1.walkTokens(tokens, opt.walkTokens);
    }
    return Parser$1.parse(tokens, opt);
  } catch (e2) {
    e2.message += "\nPlease report this to https://github.com/markedjs/marked.";
    if (opt.silent) {
      return "<p>An error occurred:</p><pre>" + escape(e2.message + "", true) + "</pre>";
    }
    throw e2;
  }
}
marked$1.options = marked$1.setOptions = function(opt) {
  merge(marked$1.defaults, opt);
  changeDefaults(marked$1.defaults);
  return marked$1;
};
marked$1.getDefaults = getDefaults;
marked$1.defaults = defaults2;
marked$1.use = function(...args) {
  const opts = merge({}, ...args);
  const extensions = marked$1.defaults.extensions || {renderers: {}, childTokens: {}};
  let hasExtensions;
  args.forEach((pack) => {
    if (pack.extensions) {
      hasExtensions = true;
      pack.extensions.forEach((ext) => {
        if (!ext.name) {
          throw new Error("extension name required");
        }
        if (ext.renderer) {
          const prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;
          if (prevRenderer) {
            extensions.renderers[ext.name] = function(...args2) {
              let ret = ext.renderer.apply(this, args2);
              if (ret === false) {
                ret = prevRenderer.apply(this, args2);
              }
              return ret;
            };
          } else {
            extensions.renderers[ext.name] = ext.renderer;
          }
        }
        if (ext.tokenizer) {
          if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
            throw new Error("extension level must be 'block' or 'inline'");
          }
          if (extensions[ext.level]) {
            extensions[ext.level].unshift(ext.tokenizer);
          } else {
            extensions[ext.level] = [ext.tokenizer];
          }
          if (ext.start) {
            if (ext.level === "block") {
              if (extensions.startBlock) {
                extensions.startBlock.push(ext.start);
              } else {
                extensions.startBlock = [ext.start];
              }
            } else if (ext.level === "inline") {
              if (extensions.startInline) {
                extensions.startInline.push(ext.start);
              } else {
                extensions.startInline = [ext.start];
              }
            }
          }
        }
        if (ext.childTokens) {
          extensions.childTokens[ext.name] = ext.childTokens;
        }
      });
    }
    if (pack.renderer) {
      const renderer = marked$1.defaults.renderer || new Renderer$1();
      for (const prop in pack.renderer) {
        const prevRenderer = renderer[prop];
        renderer[prop] = (...args2) => {
          let ret = pack.renderer[prop].apply(renderer, args2);
          if (ret === false) {
            ret = prevRenderer.apply(renderer, args2);
          }
          return ret;
        };
      }
      opts.renderer = renderer;
    }
    if (pack.tokenizer) {
      const tokenizer = marked$1.defaults.tokenizer || new Tokenizer$1();
      for (const prop in pack.tokenizer) {
        const prevTokenizer = tokenizer[prop];
        tokenizer[prop] = (...args2) => {
          let ret = pack.tokenizer[prop].apply(tokenizer, args2);
          if (ret === false) {
            ret = prevTokenizer.apply(tokenizer, args2);
          }
          return ret;
        };
      }
      opts.tokenizer = tokenizer;
    }
    if (pack.walkTokens) {
      const walkTokens = marked$1.defaults.walkTokens;
      opts.walkTokens = function(token) {
        pack.walkTokens.call(this, token);
        if (walkTokens) {
          walkTokens.call(this, token);
        }
      };
    }
    if (hasExtensions) {
      opts.extensions = extensions;
    }
    marked$1.setOptions(opts);
  });
};
marked$1.walkTokens = function(tokens, callback) {
  for (const token of tokens) {
    callback.call(marked$1, token);
    switch (token.type) {
      case "table": {
        for (const cell of token.header) {
          marked$1.walkTokens(cell.tokens, callback);
        }
        for (const row of token.rows) {
          for (const cell of row) {
            marked$1.walkTokens(cell.tokens, callback);
          }
        }
        break;
      }
      case "list": {
        marked$1.walkTokens(token.items, callback);
        break;
      }
      default: {
        if (marked$1.defaults.extensions && marked$1.defaults.extensions.childTokens && marked$1.defaults.extensions.childTokens[token.type]) {
          marked$1.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
            marked$1.walkTokens(token[childTokens], callback);
          });
        } else if (token.tokens) {
          marked$1.walkTokens(token.tokens, callback);
        }
      }
    }
  }
};
marked$1.parseInline = function(src, opt) {
  if (typeof src === "undefined" || src === null) {
    throw new Error("marked.parseInline(): input parameter is undefined or null");
  }
  if (typeof src !== "string") {
    throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected");
  }
  opt = merge({}, marked$1.defaults, opt || {});
  checkSanitizeDeprecation(opt);
  try {
    const tokens = Lexer$1.lexInline(src, opt);
    if (opt.walkTokens) {
      marked$1.walkTokens(tokens, opt.walkTokens);
    }
    return Parser$1.parseInline(tokens, opt);
  } catch (e2) {
    e2.message += "\nPlease report this to https://github.com/markedjs/marked.";
    if (opt.silent) {
      return "<p>An error occurred:</p><pre>" + escape(e2.message + "", true) + "</pre>";
    }
    throw e2;
  }
};
marked$1.Parser = Parser$1;
marked$1.parser = Parser$1.parse;
marked$1.Renderer = Renderer$1;
marked$1.TextRenderer = TextRenderer$1;
marked$1.Lexer = Lexer$1;
marked$1.lexer = Lexer$1.lex;
marked$1.Tokenizer = Tokenizer$1;
marked$1.Slugger = Slugger$1;
marked$1.parse = marked$1;
var marked_1 = marked$1;
var marked = marked_1;
var Lexer2 = Lexer_1$1;
var Parser2 = Parser_1$1;
var Tokenizer2 = Tokenizer_1$1;
var Renderer2 = Renderer_1$1;
var TextRenderer2 = TextRenderer_1$1;
var Slugger2 = Slugger_1$1;
esmEntry$1.exports = marked;
var parse2 = esmEntry$1.exports.parse = marked;
var Parser_1 = esmEntry$1.exports.Parser = Parser2;
var parser = esmEntry$1.exports.parser = Parser2.parse;
var Renderer_1 = esmEntry$1.exports.Renderer = Renderer2;
var TextRenderer_1 = esmEntry$1.exports.TextRenderer = TextRenderer2;
var Lexer_1 = esmEntry$1.exports.Lexer = Lexer2;
var lexer = esmEntry$1.exports.lexer = Lexer2.lex;
var Tokenizer_1 = esmEntry$1.exports.Tokenizer = Tokenizer2;
var Slugger_1 = esmEntry$1.exports.Slugger = Slugger2;
var esmEntry = esmEntry$1.exports;

// node_modules/mdhl/dist/mdhl.esm.js
function e(e2) {
  return e2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
var n = {space: /^\n+/, blockCode: /^( {4}[^\n]+\n*)+/, fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)(\n)(|[\s\S]*?\n)( {0,3}\1[~`]* *(?:\n+|$)|$)/, heading: /^#{1,6} [^\n]+(\n|$)/, lheading: /^[^\n]+\n {0,3}(=+|-+) *(\n+|$)/, hr: /^(([-_*]) *){3,}(\n+|$)/, list: /^( {0})((?:[*+-]|\d{1,9}\.)) [\s\S]+?(?:\n+(?! )(?!\1(?:[*+-]|\d{1,9}\.) )\n*|\s*$)/, blockquote: /^( {0,3}> ?([^\n]*)(?:\n|$))+/, html: /^ {0,3}(?:<(script|pre|style)[\s>][\s\S]*?(?:<\/\1>[^\n]*\n+|$)|<!--(?!-?>)[\s\S]*?-->[^\n]*(\n+|$)|<\/?(\w+)(?: +|\n|\/?>)[\s\S]*?(?:\n{2,}|$))/, paragraph: /^[^\n]+/};
var t = {strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/, inlineCode: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, link: /^!?\[([\s\S]+)\]\(\s*([\s\S]+)(?:\s+([\s\S]+))?\s*\)/, text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/};
var r = (e2, n2, t2) => `<${e2} class="mdhl-${t2}">${n2}</${e2}>`;
var s = {codeInFences: (n2, t2) => r("span", e(n2), "codeInFences"), heading: (e2, n2, t2) => r("b", t2(e2.text, n2), e2.type), lheading: (e2, n2, t2) => r("b", t2(e2.text, n2), "heading"), paragraph: (e2, n2, t2) => r("span", t2(e2.text, n2), e2.type), list: (e2, n2, t2) => {
  const s2 = e2.text.split("\n").map((e3) => {
    const s3 = e3.substr(0, 1), c2 = e3.substr(1), o2 = t2(c2, n2);
    return `${r("span", s3, "bullet")}${o2}`;
  }).join("\n");
  return r("span", s2, "list");
}, fences: (n2, t2) => {
  const [, r2, s2, c2, o2, p2] = n2.cap, a2 = t2.codeInFences(o2, s2);
  return `${r2}${e(s2)}${c2}${a2}${p2}`;
}, space: (e2) => e2.text, text: (e2) => e2.text, em: (e2) => r("i", e2.text, e2.type), strong: (e2) => r("b", e2.text, e2.type), defaultInlineRenderer: (e2) => r("span", e2.text, e2.type), defaultBlockRenderer: (n2) => r("span", e(n2.text), n2.type)};
function c(n2, r2) {
  let s2 = "";
  for (; n2; )
    if (!Object.keys(t).some((o2) => {
      const p2 = t[o2].exec(n2);
      if (p2) {
        const t2 = p2[0];
        n2 = n2.substring(t2.length);
        const a2 = e(t2);
        return s2 += (r2[o2] || r2.defaultInlineRenderer)({type: o2, text: a2, cap: p2}, r2, c), true;
      }
      return false;
    }))
      throw new Error("Infinite loop on byte: " + n2.charCodeAt(0));
  return s2;
}
function o(e2) {
  const t2 = [];
  for (e2 = e2.replace(/^ +$/gm, ""); e2; )
    if (!Object.keys(n).some((r2) => {
      const s2 = n[r2].exec(e2);
      if (s2) {
        const n2 = s2[0];
        return e2 = e2.substring(n2.length), t2.push({text: n2, type: r2, cap: s2}), true;
      }
      return false;
    }))
      throw new Error("Infinite loop on byte: " + e2.charCodeAt(0));
  return t2;
}
function p(e2, n2) {
  return e2.map((e3) => (n2[e3.type] || n2.defaultBlockRenderer)(e3, n2, c)).join("").replace(/\n/g, "<br/>");
}
function a(e2, n2 = s) {
  return p(o(e2), n2);
}

// packages/forms/resources/js/components/markdown-editor.js
var markdown_editor_default = (Alpine) => {
  Alpine.data("markdownEditorFormComponent", ({
    state: state2,
    tab
  }) => {
    return {
      attachment: null,
      overlay: null,
      preview: "",
      state: state2,
      tab,
      init: function() {
        this.resize();
        this.$watch("tab", () => {
          if (this.tab !== "preview") {
            return;
          }
          this.preview = esmEntry(this.state);
        });
      },
      checkForAutoInsertion($event) {
        const lines = this.$refs.textarea.value.split("\n");
        const currentLine = this.$refs.textarea.value.substring(0, this.$refs.textarea.value.selectionStart).split("\n").length;
        const previousLine = lines[currentLine - 2];
        if (!previousLine.match(/^(\*\s|-\s)|^(\d)+\./)) {
          return;
        }
        if (previousLine.match(/^(\*\s)/)) {
          if (previousLine.trim().length > 1) {
            lines[currentLine - 1] = "* ";
          } else {
            delete lines[currentLine - 2];
          }
        } else if (previousLine.match(/^(-\s)/)) {
          if (previousLine.trim().length > 1) {
            lines[currentLine - 1] = "- ";
          } else {
            delete lines[currentLine - 2];
          }
        } else {
          const matches = previousLine.match(/^(\d)+/);
          const number = matches[0];
          if (previousLine.trim().length > number.length + 2) {
            lines[currentLine - 1] = `${parseInt(number) + 1}. `;
          } else {
            delete lines[currentLine - 2];
          }
        }
        this.$refs.textarea.value = lines.join("\n");
        this.resize();
      },
      resize: function() {
        if (this.$refs.textarea.scrollHeight > 0) {
          this.$refs.overlay.style.height = "150px";
          this.$refs.overlay.style.height = this.$refs.textarea.scrollHeight + "px";
        }
        this.overlay = a(this.state = this.$refs.textarea.value);
      }
    };
  });
};

// packages/forms/resources/js/components/multi-select.js
var multi_select_default = (Alpine) => {
  Alpine.data("multiSelectFormComponent", ({
    getOptionLabelsUsing,
    getSearchResultsUsing,
    isAutofocused,
    options,
    state: state2
  }) => {
    return {
      focusedOptionIndex: null,
      isLoading: false,
      isOpen: false,
      labels: [],
      options,
      search: "",
      state: state2,
      init: async function() {
        if (isAutofocused) {
          this.openListbox();
        }
        if (!this.state) {
          this.state = [];
        }
        this.labels = await getOptionLabelsUsing();
        this.$watch("search", async () => {
          if (!this.isOpen || this.search === "" || this.search === null) {
            this.options = options;
            this.focusedOptionIndex = 0;
            return;
          }
          if (Object.keys(options).length) {
            this.options = {};
            let search = this.search.trim().toLowerCase();
            for (let key in options) {
              if (options[key].trim().toLowerCase().includes(search)) {
                this.options[key] = options[key];
              }
            }
            this.focusedOptionIndex = 0;
          } else {
            this.isLoading = true;
            this.options = await getSearchResultsUsing(this.search);
            this.focusedOptionIndex = 0;
            this.isLoading = false;
          }
        });
        this.$watch("state", async () => {
          this.labels = await getOptionLabelsUsing();
        });
      },
      clearState: function() {
        this.state = [];
        this.labels = [];
        this.closeListbox();
      },
      closeListbox: function() {
        this.isOpen = false;
        this.focusedOptionIndex = null;
        this.search = "";
      },
      evaluatePosition: function() {
        let availableHeight = window.innerHeight - this.$refs.button.offsetHeight;
        let element = this.$refs.button;
        while (element) {
          availableHeight -= element.offsetTop;
          element = element.offsetParent;
        }
        if (this.$refs.listbox.offsetHeight <= availableHeight) {
          this.$refs.listbox.style.bottom = "auto";
          return;
        }
        this.$refs.listbox.style.bottom = `${this.$refs.button.offsetHeight}px`;
      },
      focusNextOption: function() {
        if (this.focusedOptionIndex === null) {
          this.focusedOptionIndex = Object.keys(this.options).length - 1;
          return;
        }
        if (this.focusedOptionIndex + 1 >= Object.keys(this.options).length) {
          return;
        }
        this.focusedOptionIndex++;
        this.$refs.listboxOptionsList.children[this.focusedOptionIndex].scrollIntoView({
          block: "center"
        });
      },
      focusPreviousOption: function() {
        if (this.focusedOptionIndex === null) {
          this.focusedOptionIndex = 0;
          return;
        }
        if (this.focusedOptionIndex <= 0) {
          return;
        }
        this.focusedOptionIndex--;
        this.$refs.listboxOptionsList.children[this.focusedOptionIndex].scrollIntoView({
          block: "center"
        });
      },
      openListbox: function() {
        this.focusedOptionIndex = 0;
        this.isOpen = true;
        this.$nextTick(() => {
          this.$refs.search.focus();
          this.evaluatePosition();
          this.$refs.listboxOptionsList.children[this.focusedOptionIndex].scrollIntoView({
            block: "center"
          });
        });
      },
      selectOption: function(index = null) {
        if (!this.isOpen) {
          this.closeListbox();
          return;
        }
        let value = Object.keys(this.options)[index ?? this.focusedOptionIndex];
        if (this.state.indexOf(value) < 0) {
          this.state.push(value);
        } else {
          this.deselectOption(value);
        }
        this.closeListbox();
      },
      deselectOption: function(optionToDeselect) {
        this.state = this.state.filter((option2) => option2 !== optionToDeselect);
      },
      toggleListboxVisibility: function() {
        if (this.isOpen) {
          this.closeListbox();
          return;
        }
        this.openListbox();
      }
    };
  });
};

// packages/forms/resources/js/components/rich-editor.js
var import_trix = __toModule(require_trix());
import_trix.default.config.blockAttributes.heading = {
  tagName: "h2",
  terminal: true,
  breakOnReturn: true,
  group: false
};
import_trix.default.config.blockAttributes.subHeading = {
  tagName: "h3",
  terminal: true,
  breakOnReturn: true,
  group: false
};
var rich_editor_default = (Alpine) => {
  Alpine.data("richEditorFormComponent", ({
    state: state2
  }) => {
    return {
      state: state2,
      init: function() {
        this.$refs.trix?.editor?.loadHTML(this.state);
        this.$watch("state", () => {
          if (document.activeElement === this.$refs.trix) {
            return;
          }
          this.$refs.trix?.editor?.loadHTML(this.state);
        });
      }
    };
  });
};

// packages/forms/resources/js/components/select.js
var select_default = (Alpine) => {
  Alpine.data("selectFormComponent", ({
    getOptionLabelUsing,
    getSearchResultsUsing,
    isAutofocused,
    options,
    state: state2
  }) => {
    return {
      focusedOptionIndex: null,
      isLoading: false,
      isOpen: false,
      label: null,
      options,
      search: "",
      state: state2,
      init: async function() {
        if (isAutofocused) {
          this.openListbox();
        }
        this.label = await getOptionLabelUsing();
        this.$watch("search", async () => {
          if (!this.isOpen || this.search === "" || this.search === null) {
            this.options = options;
            this.focusedOptionIndex = 0;
            return;
          }
          if (Object.keys(options).length) {
            this.options = {};
            let search = this.search.trim().toLowerCase();
            for (let key in options) {
              if (options[key].trim().toLowerCase().includes(search)) {
                this.options[key] = options[key];
              }
            }
            this.focusedOptionIndex = 0;
          } else {
            this.isLoading = true;
            this.options = await getSearchResultsUsing(this.search);
            this.focusedOptionIndex = 0;
            this.isLoading = false;
          }
        });
        this.$watch("state", async () => {
          this.label = await getOptionLabelUsing();
        });
      },
      clearState: function() {
        this.state = null;
        this.label = null;
        this.closeListbox();
      },
      closeListbox: function() {
        this.isOpen = false;
        this.focusedOptionIndex = null;
        this.search = "";
      },
      evaluatePosition: function() {
        let availableHeight = window.innerHeight - this.$refs.button.offsetHeight;
        let element = this.$refs.button;
        while (element) {
          availableHeight -= element.offsetTop;
          element = element.offsetParent;
        }
        if (this.$refs.listbox.offsetHeight <= availableHeight) {
          this.$refs.listbox.style.bottom = "auto";
          return;
        }
        this.$refs.listbox.style.bottom = `${this.$refs.button.offsetHeight}px`;
      },
      focusNextOption: function() {
        if (this.focusedOptionIndex === null) {
          this.focusedOptionIndex = Object.keys(this.options).length - 1;
          return;
        }
        if (this.focusedOptionIndex + 1 >= Object.keys(this.options).length) {
          return;
        }
        this.focusedOptionIndex++;
        this.$refs.listboxOptionsList.children[this.focusedOptionIndex].scrollIntoView({
          block: "center"
        });
      },
      focusPreviousOption: function() {
        if (this.focusedOptionIndex === null) {
          this.focusedOptionIndex = 0;
          return;
        }
        if (this.focusedOptionIndex <= 0) {
          return;
        }
        this.focusedOptionIndex--;
        this.$refs.listboxOptionsList.children[this.focusedOptionIndex].scrollIntoView({
          block: "center"
        });
      },
      openListbox: function() {
        this.focusedOptionIndex = Object.keys(this.options).indexOf(this.state);
        if (this.focusedOptionIndex < 0) {
          this.focusedOptionIndex = 0;
        }
        this.isOpen = true;
        this.$nextTick(() => {
          this.$refs.search.focus();
          this.evaluatePosition();
          this.$refs.listboxOptionsList.children[this.focusedOptionIndex].scrollIntoView({
            block: "center"
          });
        });
      },
      selectOption: function(index = null) {
        if (!this.isOpen) {
          this.closeListbox();
          return;
        }
        this.state = Object.keys(this.options)[index ?? this.focusedOptionIndex];
        this.label = this.options[this.state];
        this.closeListbox();
      },
      toggleListboxVisibility: function() {
        if (this.isOpen) {
          this.closeListbox();
          return;
        }
        this.openListbox();
      }
    };
  });
};

// packages/forms/resources/js/components/tags-input.js
var tags_input_default = (Alpine) => {
  Alpine.data("tagsInputFormComponent", ({
    state: state2
  }) => {
    return {
      newTag: "",
      state: state2,
      createTag: function() {
        this.newTag = this.newTag.trim();
        if (this.newTag === "") {
          return;
        }
        if (this.state.includes(this.newTag)) {
          this.newTag = "";
          return;
        }
        this.state.push(this.newTag);
        this.newTag = "";
      },
      deleteTag: function(tagToDelete) {
        this.state = this.state.filter((tag) => tag !== tagToDelete);
      }
    };
  });
};

// node_modules/imask/esm/_rollupPluginBabelHelpers-a0b34764.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o2) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
    return o3.__proto__ || Object.getPrototypeOf(o3);
  };
  return _getPrototypeOf(o2);
}
function _setPrototypeOf(o2, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
    o3.__proto__ = p3;
    return o3;
  };
  return _setPrototypeOf(o2, p2);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _possibleConstructorReturn(self2, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null)
      break;
  }
  return object;
}
function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get2(target2, property2, receiver2) {
      var base = _superPropBase(target2, property2);
      if (!base)
        return;
      var desc = Object.getOwnPropertyDescriptor(base, property2);
      if (desc.get) {
        return desc.get.call(receiver2);
      }
      return desc.value;
    };
  }
  return _get(target, property, receiver || target);
}
function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set2(target2, property2, value2, receiver2) {
      var base = _superPropBase(target2, property2);
      var desc;
      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property2);
        if (desc.set) {
          desc.set.call(receiver2, value2);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }
      desc = Object.getOwnPropertyDescriptor(receiver2, property2);
      if (desc) {
        if (!desc.writable) {
          return false;
        }
        desc.value = value2;
        Object.defineProperty(receiver2, property2, desc);
      } else {
        _defineProperty(receiver2, property2, value2);
      }
      return true;
    };
  }
  return set(target, property, value, receiver);
}
function _set(target, property, value, receiver, isStrict) {
  var s2 = set(target, property, value, receiver || target);
  if (!s2 && isStrict) {
    throw new Error("failed to set property");
  }
  return value;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o2, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/imask/esm/core/utils.js
function isString2(str) {
  return typeof str === "string" || str instanceof String;
}
var DIRECTION = {
  NONE: "NONE",
  LEFT: "LEFT",
  FORCE_LEFT: "FORCE_LEFT",
  RIGHT: "RIGHT",
  FORCE_RIGHT: "FORCE_RIGHT"
};
function forceDirection(direction) {
  switch (direction) {
    case DIRECTION.LEFT:
      return DIRECTION.FORCE_LEFT;
    case DIRECTION.RIGHT:
      return DIRECTION.FORCE_RIGHT;
    default:
      return direction;
  }
}
function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
}
function objectIncludes(b, a2) {
  if (a2 === b)
    return true;
  var arrA = Array.isArray(a2), arrB = Array.isArray(b), i;
  if (arrA && arrB) {
    if (a2.length != b.length)
      return false;
    for (i = 0; i < a2.length; i++) {
      if (!objectIncludes(a2[i], b[i]))
        return false;
    }
    return true;
  }
  if (arrA != arrB)
    return false;
  if (a2 && b && _typeof(a2) === "object" && _typeof(b) === "object") {
    var dateA = a2 instanceof Date, dateB = b instanceof Date;
    if (dateA && dateB)
      return a2.getTime() == b.getTime();
    if (dateA != dateB)
      return false;
    var regexpA = a2 instanceof RegExp, regexpB = b instanceof RegExp;
    if (regexpA && regexpB)
      return a2.toString() == b.toString();
    if (regexpA != regexpB)
      return false;
    var keys = Object.keys(a2);
    for (i = 0; i < keys.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    }
    for (i = 0; i < keys.length; i++) {
      if (!objectIncludes(b[keys[i]], a2[keys[i]]))
        return false;
    }
    return true;
  } else if (a2 && b && typeof a2 === "function" && typeof b === "function") {
    return a2.toString() === b.toString();
  }
  return false;
}

// node_modules/imask/esm/core/action-details.js
var ActionDetails = /* @__PURE__ */ function() {
  function ActionDetails2(value, cursorPos, oldValue, oldSelection) {
    _classCallCheck(this, ActionDetails2);
    this.value = value;
    this.cursorPos = cursorPos;
    this.oldValue = oldValue;
    this.oldSelection = oldSelection;
    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
      --this.oldSelection.start;
    }
  }
  _createClass(ActionDetails2, [{
    key: "startChangePos",
    get: function get() {
      return Math.min(this.cursorPos, this.oldSelection.start);
    }
  }, {
    key: "insertedCount",
    get: function get() {
      return this.cursorPos - this.startChangePos;
    }
  }, {
    key: "inserted",
    get: function get() {
      return this.value.substr(this.startChangePos, this.insertedCount);
    }
  }, {
    key: "removedCount",
    get: function get() {
      return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0);
    }
  }, {
    key: "removed",
    get: function get() {
      return this.oldValue.substr(this.startChangePos, this.removedCount);
    }
  }, {
    key: "head",
    get: function get() {
      return this.value.substring(0, this.startChangePos);
    }
  }, {
    key: "tail",
    get: function get() {
      return this.value.substring(this.startChangePos + this.insertedCount);
    }
  }, {
    key: "removeDirection",
    get: function get() {
      if (!this.removedCount || this.insertedCount)
        return DIRECTION.NONE;
      return this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? DIRECTION.RIGHT : DIRECTION.LEFT;
    }
  }]);
  return ActionDetails2;
}();

// node_modules/imask/esm/core/change-details.js
var ChangeDetails = /* @__PURE__ */ function() {
  function ChangeDetails2(details) {
    _classCallCheck(this, ChangeDetails2);
    Object.assign(this, {
      inserted: "",
      rawInserted: "",
      skip: false,
      tailShift: 0
    }, details);
  }
  _createClass(ChangeDetails2, [{
    key: "aggregate",
    value: function aggregate(details) {
      this.rawInserted += details.rawInserted;
      this.skip = this.skip || details.skip;
      this.inserted += details.inserted;
      this.tailShift += details.tailShift;
      return this;
    }
  }, {
    key: "offset",
    get: function get() {
      return this.tailShift + this.inserted.length;
    }
  }]);
  return ChangeDetails2;
}();

// node_modules/imask/esm/core/continuous-tail-details.js
var ContinuousTailDetails = /* @__PURE__ */ function() {
  function ContinuousTailDetails2() {
    var value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    var from = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var stop = arguments.length > 2 ? arguments[2] : void 0;
    _classCallCheck(this, ContinuousTailDetails2);
    this.value = value;
    this.from = from;
    this.stop = stop;
  }
  _createClass(ContinuousTailDetails2, [{
    key: "toString",
    value: function toString2() {
      return this.value;
    }
  }, {
    key: "extend",
    value: function extend(tail) {
      this.value += String(tail);
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      return masked.append(this.toString(), {
        tail: true
      }).aggregate(masked._appendPlaceholder());
    }
  }, {
    key: "state",
    get: function get() {
      return {
        value: this.value,
        from: this.from,
        stop: this.stop
      };
    },
    set: function set2(state2) {
      Object.assign(this, state2);
    }
  }, {
    key: "shiftBefore",
    value: function shiftBefore(pos) {
      if (this.from >= pos || !this.value.length)
        return "";
      var shiftChar = this.value[0];
      this.value = this.value.slice(1);
      return shiftChar;
    }
  }]);
  return ContinuousTailDetails2;
}();

// node_modules/imask/esm/core/holder.js
function IMask(el) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return new IMask.InputMask(el, opts);
}

// node_modules/imask/esm/masked/base.js
var Masked = /* @__PURE__ */ function() {
  function Masked2(opts) {
    _classCallCheck(this, Masked2);
    this._value = "";
    this._update(Object.assign({}, Masked2.DEFAULTS, opts));
    this.isInitialized = true;
  }
  _createClass(Masked2, [{
    key: "updateOptions",
    value: function updateOptions(opts) {
      if (!Object.keys(opts).length)
        return;
      this.withValueRefresh(this._update.bind(this, opts));
    }
  }, {
    key: "_update",
    value: function _update(opts) {
      Object.assign(this, opts);
    }
  }, {
    key: "state",
    get: function get() {
      return {
        _value: this.value
      };
    },
    set: function set2(state2) {
      this._value = state2._value;
    }
  }, {
    key: "reset",
    value: function reset() {
      this._value = "";
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set2(value) {
      this.resolve(value);
    }
  }, {
    key: "resolve",
    value: function resolve(value) {
      this.reset();
      this.append(value, {
        input: true
      }, "");
      this.doCommit();
      return this.value;
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.value;
    },
    set: function set2(value) {
      this.reset();
      this.append(value, {}, "");
      this.doCommit();
    }
  }, {
    key: "typedValue",
    get: function get() {
      return this.doParse(this.value);
    },
    set: function set2(value) {
      this.value = this.doFormat(value);
    }
  }, {
    key: "rawInputValue",
    get: function get() {
      return this.extractInput(0, this.value.length, {
        raw: true
      });
    },
    set: function set2(value) {
      this.reset();
      this.append(value, {
        raw: true
      }, "");
      this.doCommit();
    }
  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      return cursorPos;
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      return this.value.slice(fromPos, toPos);
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
    }
  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if (isString2(tail))
        tail = new ContinuousTailDetails(String(tail));
      return tail.appendTo(this);
    }
  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      if (!ch)
        return new ChangeDetails();
      this._value += ch;
      return new ChangeDetails({
        inserted: ch,
        rawInserted: ch
      });
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var checkTail = arguments.length > 2 ? arguments[2] : void 0;
      var consistentState = this.state;
      var details = this._appendCharRaw(this.doPrepare(ch, flags), flags);
      if (details.inserted) {
        var consistentTail;
        var appended = this.doValidate(flags) !== false;
        if (appended && checkTail != null) {
          var beforeTailState = this.state;
          if (this.overwrite) {
            consistentTail = checkTail.state;
            checkTail.shiftBefore(this.value.length);
          }
          var tailDetails = this.appendTail(checkTail);
          appended = tailDetails.rawInserted === checkTail.toString();
          if (appended && tailDetails.inserted)
            this.state = beforeTailState;
        }
        if (!appended) {
          details = new ChangeDetails();
          this.state = consistentState;
          if (checkTail && consistentTail)
            checkTail.state = consistentTail;
        }
      }
      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      return new ChangeDetails();
    }
  }, {
    key: "append",
    value: function append(str, flags, tail) {
      if (!isString2(str))
        throw new Error("value should be string");
      var details = new ChangeDetails();
      var checkTail = isString2(tail) ? new ContinuousTailDetails(String(tail)) : tail;
      if (flags && flags.tail)
        flags._beforeTailState = this.state;
      for (var ci = 0; ci < str.length; ++ci) {
        details.aggregate(this._appendChar(str[ci], flags, checkTail));
      }
      if (checkTail != null) {
        details.tailShift += this.appendTail(checkTail).tailShift;
      }
      return details;
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
      return new ChangeDetails();
    }
  }, {
    key: "withValueRefresh",
    value: function withValueRefresh(fn2) {
      if (this._refreshing || !this.isInitialized)
        return fn2();
      this._refreshing = true;
      var rawInput = this.rawInputValue;
      var value = this.value;
      var ret = fn2();
      this.rawInputValue = rawInput;
      if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
        this.append(value.slice(this.value.length), {}, "");
      }
      delete this._refreshing;
      return ret;
    }
  }, {
    key: "runIsolated",
    value: function runIsolated(fn2) {
      if (this._isolated || !this.isInitialized)
        return fn2(this);
      this._isolated = true;
      var state2 = this.state;
      var ret = fn2(this);
      this.state = state2;
      delete this._isolated;
      return ret;
    }
  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.prepare ? this.prepare(str, this, flags) : str;
    }
  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.commit)
        this.commit(this.value, this);
    }
  }, {
    key: "doFormat",
    value: function doFormat(value) {
      return this.format ? this.format(value, this) : value;
    }
  }, {
    key: "doParse",
    value: function doParse(str) {
      return this.parse ? this.parse(str, this) : str;
    }
  }, {
    key: "splice",
    value: function splice(start, deleteCount, inserted, removeDirection) {
      var tailPos = start + deleteCount;
      var tail = this.extractTail(tailPos);
      var startChangePos = this.nearestInputPos(start, removeDirection);
      var changeDetails = new ChangeDetails({
        tailShift: startChangePos - start
      }).aggregate(this.remove(startChangePos)).aggregate(this.append(inserted, {
        input: true
      }, tail));
      return changeDetails;
    }
  }]);
  return Masked2;
}();
Masked.DEFAULTS = {
  format: function format(v) {
    return v;
  },
  parse: function parse3(v) {
    return v;
  }
};
IMask.Masked = Masked;

// node_modules/imask/esm/masked/factory.js
function maskedClass(mask) {
  if (mask == null) {
    throw new Error("mask property should be defined");
  }
  if (mask instanceof RegExp)
    return IMask.MaskedRegExp;
  if (isString2(mask))
    return IMask.MaskedPattern;
  if (mask instanceof Date || mask === Date)
    return IMask.MaskedDate;
  if (mask instanceof Number || typeof mask === "number" || mask === Number)
    return IMask.MaskedNumber;
  if (Array.isArray(mask) || mask === Array)
    return IMask.MaskedDynamic;
  if (IMask.Masked && mask.prototype instanceof IMask.Masked)
    return mask;
  if (mask instanceof Function)
    return IMask.MaskedFunction;
  if (mask instanceof IMask.Masked)
    return mask.constructor;
  console.warn("Mask not found for mask", mask);
  return IMask.Masked;
}
function createMask(opts) {
  if (IMask.Masked && opts instanceof IMask.Masked)
    return opts;
  opts = Object.assign({}, opts);
  var mask = opts.mask;
  if (IMask.Masked && mask instanceof IMask.Masked)
    return mask;
  var MaskedClass = maskedClass(mask);
  if (!MaskedClass)
    throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");
  return new MaskedClass(opts);
}
IMask.createMask = createMask;

// node_modules/imask/esm/masked/pattern/input-definition.js
var _excluded = ["mask"];
var DEFAULT_INPUT_DEFINITIONS = {
  "0": /\d/,
  a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  "*": /./
};
var PatternInputDefinition = /* @__PURE__ */ function() {
  function PatternInputDefinition2(opts) {
    _classCallCheck(this, PatternInputDefinition2);
    var mask = opts.mask, blockOpts = _objectWithoutProperties(opts, _excluded);
    this.masked = createMask({
      mask
    });
    Object.assign(this, blockOpts);
  }
  _createClass(PatternInputDefinition2, [{
    key: "reset",
    value: function reset() {
      this._isFilled = false;
      this.masked.reset();
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      if (fromPos === 0 && toPos >= 1) {
        this._isFilled = false;
        return this.masked.remove(fromPos, toPos);
      }
      return new ChangeDetails();
    }
  }, {
    key: "value",
    get: function get() {
      return this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : "");
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.masked.unmaskedValue;
    }
  }, {
    key: "isComplete",
    get: function get() {
      return Boolean(this.masked.value) || this.isOptional;
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(str) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (this._isFilled)
        return new ChangeDetails();
      var state2 = this.masked.state;
      var details = this.masked._appendChar(str, flags);
      if (details.inserted && this.doValidate(flags) === false) {
        details.inserted = details.rawInserted = "";
        this.masked.state = state2;
      }
      if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
        details.inserted = this.placeholderChar;
      }
      details.skip = !details.inserted && !this.isOptional;
      this._isFilled = Boolean(details.inserted);
      return details;
    }
  }, {
    key: "append",
    value: function append() {
      var _this$masked;
      return (_this$masked = this.masked).append.apply(_this$masked, arguments);
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new ChangeDetails();
      if (this._isFilled || this.isOptional)
        return details;
      this._isFilled = true;
      details.inserted = this.placeholderChar;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$masked2;
      return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
    }
  }, {
    key: "appendTail",
    value: function appendTail() {
      var _this$masked3;
      return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : void 0;
      return this.masked.extractInput(fromPos, toPos, flags);
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DIRECTION.NONE;
      var minPos = 0;
      var maxPos = this.value.length;
      var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
      switch (direction) {
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          return this.isComplete ? boundPos : minPos;
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
          return this.isComplete ? boundPos : maxPos;
        case DIRECTION.NONE:
        default:
          return boundPos;
      }
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this$masked4, _this$parent;
      return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      this.masked.doCommit();
    }
  }, {
    key: "state",
    get: function get() {
      return {
        masked: this.masked.state,
        _isFilled: this._isFilled
      };
    },
    set: function set2(state2) {
      this.masked.state = state2.masked;
      this._isFilled = state2._isFilled;
    }
  }]);
  return PatternInputDefinition2;
}();

// node_modules/imask/esm/masked/pattern/fixed-definition.js
var PatternFixedDefinition = /* @__PURE__ */ function() {
  function PatternFixedDefinition2(opts) {
    _classCallCheck(this, PatternFixedDefinition2);
    Object.assign(this, opts);
    this._value = "";
  }
  _createClass(PatternFixedDefinition2, [{
    key: "value",
    get: function get() {
      return this._value;
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.isUnmasking ? this.value : "";
    }
  }, {
    key: "reset",
    value: function reset() {
      this._isRawInput = false;
      this._value = "";
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._value.length;
      this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
      if (!this._value)
        this._isRawInput = false;
      return new ChangeDetails();
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DIRECTION.NONE;
      var minPos = 0;
      var maxPos = this._value.length;
      switch (direction) {
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          return minPos;
        case DIRECTION.NONE:
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
        default:
          return maxPos;
      }
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._value.length;
      var flags = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || "";
    }
  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(str) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var details = new ChangeDetails();
      if (this._value)
        return details;
      var appended = this.char === str[0];
      var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !flags.tail;
      if (isResolved)
        details.rawInserted = this.char;
      this._value = details.inserted = this.char;
      this._isRawInput = isResolved && (flags.raw || flags.input);
      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new ChangeDetails();
      if (this._value)
        return details;
      this._value = details.inserted = this.char;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      return new ContinuousTailDetails("");
    }
  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if (isString2(tail))
        tail = new ContinuousTailDetails(String(tail));
      return tail.appendTo(this);
    }
  }, {
    key: "append",
    value: function append(str, flags, tail) {
      var details = this._appendChar(str, flags);
      if (tail != null) {
        details.tailShift += this.appendTail(tail).tailShift;
      }
      return details;
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
    }
  }, {
    key: "state",
    get: function get() {
      return {
        _value: this._value,
        _isRawInput: this._isRawInput
      };
    },
    set: function set2(state2) {
      Object.assign(this, state2);
    }
  }]);
  return PatternFixedDefinition2;
}();

// node_modules/imask/esm/masked/pattern/chunk-tail-details.js
var _excluded2 = ["chunks"];
var ChunksTailDetails = /* @__PURE__ */ function() {
  function ChunksTailDetails2() {
    var chunks = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var from = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    _classCallCheck(this, ChunksTailDetails2);
    this.chunks = chunks;
    this.from = from;
  }
  _createClass(ChunksTailDetails2, [{
    key: "toString",
    value: function toString2() {
      return this.chunks.map(String).join("");
    }
  }, {
    key: "extend",
    value: function extend(tailChunk) {
      if (!String(tailChunk))
        return;
      if (isString2(tailChunk))
        tailChunk = new ContinuousTailDetails(String(tailChunk));
      var lastChunk = this.chunks[this.chunks.length - 1];
      var extendLast = lastChunk && (lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && tailChunk.from === lastChunk.from + lastChunk.toString().length;
      if (tailChunk instanceof ContinuousTailDetails) {
        if (extendLast) {
          lastChunk.extend(tailChunk.toString());
        } else {
          this.chunks.push(tailChunk);
        }
      } else if (tailChunk instanceof ChunksTailDetails2) {
        if (tailChunk.stop == null) {
          var firstTailChunk;
          while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
            firstTailChunk = tailChunk.chunks.shift();
            firstTailChunk.from += tailChunk.from;
            this.extend(firstTailChunk);
          }
        }
        if (tailChunk.toString()) {
          tailChunk.stop = tailChunk.blockIndex;
          this.chunks.push(tailChunk);
        }
      }
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      if (!(masked instanceof IMask.MaskedPattern)) {
        var tail = new ContinuousTailDetails(this.toString());
        return tail.appendTo(masked);
      }
      var details = new ChangeDetails();
      for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
        var chunk = this.chunks[ci];
        var lastBlockIter = masked._mapPosToBlock(masked.value.length);
        var stop = chunk.stop;
        var chunkBlock = void 0;
        if (stop != null && (!lastBlockIter || lastBlockIter.index <= stop)) {
          if (chunk instanceof ChunksTailDetails2 || masked._stops.indexOf(stop) >= 0) {
            details.aggregate(masked._appendPlaceholder(stop));
          }
          chunkBlock = chunk instanceof ChunksTailDetails2 && masked._blocks[stop];
        }
        if (chunkBlock) {
          var tailDetails = chunkBlock.appendTail(chunk);
          tailDetails.skip = false;
          details.aggregate(tailDetails);
          masked._value += tailDetails.inserted;
          var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
          if (remainChars)
            details.aggregate(masked.append(remainChars, {
              tail: true
            }));
        } else {
          details.aggregate(masked.append(chunk.toString(), {
            tail: true
          }));
        }
      }
      return details;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        chunks: this.chunks.map(function(c2) {
          return c2.state;
        }),
        from: this.from,
        stop: this.stop,
        blockIndex: this.blockIndex
      };
    },
    set: function set2(state2) {
      var chunks = state2.chunks, props = _objectWithoutProperties(state2, _excluded2);
      Object.assign(this, props);
      this.chunks = chunks.map(function(cstate) {
        var chunk = "chunks" in cstate ? new ChunksTailDetails2() : new ContinuousTailDetails();
        chunk.state = cstate;
        return chunk;
      });
    }
  }, {
    key: "shiftBefore",
    value: function shiftBefore(pos) {
      if (this.from >= pos || !this.chunks.length)
        return "";
      var chunkShiftPos = pos - this.from;
      var ci = 0;
      while (ci < this.chunks.length) {
        var chunk = this.chunks[ci];
        var shiftChar = chunk.shiftBefore(chunkShiftPos);
        if (chunk.toString()) {
          if (!shiftChar)
            break;
          ++ci;
        } else {
          this.chunks.splice(ci, 1);
        }
        if (shiftChar)
          return shiftChar;
      }
      return "";
    }
  }]);
  return ChunksTailDetails2;
}();

// node_modules/imask/esm/masked/regexp.js
var MaskedRegExp = /* @__PURE__ */ function(_Masked) {
  _inherits(MaskedRegExp2, _Masked);
  var _super = _createSuper(MaskedRegExp2);
  function MaskedRegExp2() {
    _classCallCheck(this, MaskedRegExp2);
    return _super.apply(this, arguments);
  }
  _createClass(MaskedRegExp2, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.mask)
        opts.validate = function(value) {
          return value.search(opts.mask) >= 0;
        };
      _get(_getPrototypeOf(MaskedRegExp2.prototype), "_update", this).call(this, opts);
    }
  }]);
  return MaskedRegExp2;
}(Masked);
IMask.MaskedRegExp = MaskedRegExp;

// node_modules/imask/esm/masked/pattern.js
var _excluded3 = ["_blocks"];
var MaskedPattern = /* @__PURE__ */ function(_Masked) {
  _inherits(MaskedPattern2, _Masked);
  var _super = _createSuper(MaskedPattern2);
  function MaskedPattern2() {
    var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _classCallCheck(this, MaskedPattern2);
    opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
    return _super.call(this, Object.assign({}, MaskedPattern2.DEFAULTS, opts));
  }
  _createClass(MaskedPattern2, [{
    key: "_update",
    value: function _update() {
      var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      opts.definitions = Object.assign({}, this.definitions, opts.definitions);
      _get(_getPrototypeOf(MaskedPattern2.prototype), "_update", this).call(this, opts);
      this._rebuildMask();
    }
  }, {
    key: "_rebuildMask",
    value: function _rebuildMask() {
      var _this = this;
      var defs = this.definitions;
      this._blocks = [];
      this._stops = [];
      this._maskedBlocks = {};
      var pattern = this.mask;
      if (!pattern || !defs)
        return;
      var unmaskingBlock = false;
      var optionalBlock = false;
      for (var i = 0; i < pattern.length; ++i) {
        if (this.blocks) {
          var _ret = function() {
            var p2 = pattern.slice(i);
            var bNames = Object.keys(_this.blocks).filter(function(bName2) {
              return p2.indexOf(bName2) === 0;
            });
            bNames.sort(function(a2, b) {
              return b.length - a2.length;
            });
            var bName = bNames[0];
            if (bName) {
              var maskedBlock = createMask(Object.assign({
                parent: _this,
                lazy: _this.lazy,
                placeholderChar: _this.placeholderChar,
                overwrite: _this.overwrite
              }, _this.blocks[bName]));
              if (maskedBlock) {
                _this._blocks.push(maskedBlock);
                if (!_this._maskedBlocks[bName])
                  _this._maskedBlocks[bName] = [];
                _this._maskedBlocks[bName].push(_this._blocks.length - 1);
              }
              i += bName.length - 1;
              return "continue";
            }
          }();
          if (_ret === "continue")
            continue;
        }
        var char = pattern[i];
        var _isInput = char in defs;
        if (char === MaskedPattern2.STOP_CHAR) {
          this._stops.push(this._blocks.length);
          continue;
        }
        if (char === "{" || char === "}") {
          unmaskingBlock = !unmaskingBlock;
          continue;
        }
        if (char === "[" || char === "]") {
          optionalBlock = !optionalBlock;
          continue;
        }
        if (char === MaskedPattern2.ESCAPE_CHAR) {
          ++i;
          char = pattern[i];
          if (!char)
            break;
          _isInput = false;
        }
        var def = _isInput ? new PatternInputDefinition({
          parent: this,
          lazy: this.lazy,
          placeholderChar: this.placeholderChar,
          mask: defs[char],
          isOptional: optionalBlock
        }) : new PatternFixedDefinition({
          char,
          isUnmasking: unmaskingBlock
        });
        this._blocks.push(def);
      }
    }
  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, _get(_getPrototypeOf(MaskedPattern2.prototype), "state", this), {
        _blocks: this._blocks.map(function(b) {
          return b.state;
        })
      });
    },
    set: function set2(state2) {
      var _blocks = state2._blocks, maskedState = _objectWithoutProperties(state2, _excluded3);
      this._blocks.forEach(function(b, bi) {
        return b.state = _blocks[bi];
      });
      _set(_getPrototypeOf(MaskedPattern2.prototype), "state", maskedState, this, true);
    }
  }, {
    key: "reset",
    value: function reset() {
      _get(_getPrototypeOf(MaskedPattern2.prototype), "reset", this).call(this);
      this._blocks.forEach(function(b) {
        return b.reset();
      });
    }
  }, {
    key: "isComplete",
    get: function get() {
      return this._blocks.every(function(b) {
        return b.isComplete;
      });
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      this._blocks.forEach(function(b) {
        return b.doCommit();
      });
      _get(_getPrototypeOf(MaskedPattern2.prototype), "doCommit", this).call(this);
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._blocks.reduce(function(str, b) {
        return str += b.unmaskedValue;
      }, "");
    },
    set: function set2(unmaskedValue) {
      _set(_getPrototypeOf(MaskedPattern2.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
  }, {
    key: "value",
    get: function get() {
      return this._blocks.reduce(function(str, b) {
        return str += b.value;
      }, "");
    },
    set: function set2(value) {
      _set(_getPrototypeOf(MaskedPattern2.prototype), "value", value, this, true);
    }
  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      return _get(_getPrototypeOf(MaskedPattern2.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
    }
  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var blockIter = this._mapPosToBlock(this.value.length);
      var details = new ChangeDetails();
      if (!blockIter)
        return details;
      for (var bi = blockIter.index; ; ++bi) {
        var _block = this._blocks[bi];
        if (!_block)
          break;
        var blockDetails = _block._appendChar(ch, flags);
        var skip = blockDetails.skip;
        details.aggregate(blockDetails);
        if (skip || blockDetails.rawInserted)
          break;
      }
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this2 = this;
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var chunkTail = new ChunksTailDetails();
      if (fromPos === toPos)
        return chunkTail;
      this._forEachBlocksInRange(fromPos, toPos, function(b, bi, bFromPos, bToPos) {
        var blockChunk = b.extractTail(bFromPos, bToPos);
        blockChunk.stop = _this2._findStopBefore(bi);
        blockChunk.from = _this2._blockStartPos(bi);
        if (blockChunk instanceof ChunksTailDetails)
          blockChunk.blockIndex = bi;
        chunkTail.extend(blockChunk);
      });
      return chunkTail;
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (fromPos === toPos)
        return "";
      var input = "";
      this._forEachBlocksInRange(fromPos, toPos, function(b, _, fromPos2, toPos2) {
        input += b.extractInput(fromPos2, toPos2, flags);
      });
      return input;
    }
  }, {
    key: "_findStopBefore",
    value: function _findStopBefore(blockIndex) {
      var stopBefore;
      for (var si = 0; si < this._stops.length; ++si) {
        var stop = this._stops[si];
        if (stop <= blockIndex)
          stopBefore = stop;
        else
          break;
      }
      return stopBefore;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder(toBlockIndex) {
      var _this3 = this;
      var details = new ChangeDetails();
      if (this.lazy && toBlockIndex == null)
        return details;
      var startBlockIter = this._mapPosToBlock(this.value.length);
      if (!startBlockIter)
        return details;
      var startBlockIndex = startBlockIter.index;
      var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;
      this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function(b) {
        if (!b.lazy || toBlockIndex != null) {
          var args = b._blocks != null ? [b._blocks.length] : [];
          var bDetails = b._appendPlaceholder.apply(b, args);
          _this3._value += bDetails.inserted;
          details.aggregate(bDetails);
        }
      });
      return details;
    }
  }, {
    key: "_mapPosToBlock",
    value: function _mapPosToBlock(pos) {
      var accVal = "";
      for (var bi = 0; bi < this._blocks.length; ++bi) {
        var _block2 = this._blocks[bi];
        var blockStartPos = accVal.length;
        accVal += _block2.value;
        if (pos <= accVal.length) {
          return {
            index: bi,
            offset: pos - blockStartPos
          };
        }
      }
    }
  }, {
    key: "_blockStartPos",
    value: function _blockStartPos(blockIndex) {
      return this._blocks.slice(0, blockIndex).reduce(function(pos, b) {
        return pos += b.value.length;
      }, 0);
    }
  }, {
    key: "_forEachBlocksInRange",
    value: function _forEachBlocksInRange(fromPos) {
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var fn2 = arguments.length > 2 ? arguments[2] : void 0;
      var fromBlockIter = this._mapPosToBlock(fromPos);
      if (fromBlockIter) {
        var toBlockIter = this._mapPosToBlock(toPos);
        var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
        var fromBlockStartPos = fromBlockIter.offset;
        var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
        fn2(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
        if (toBlockIter && !isSameBlock) {
          for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
            fn2(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
          }
          fn2(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
        }
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var removeDetails = _get(_getPrototypeOf(MaskedPattern2.prototype), "remove", this).call(this, fromPos, toPos);
      this._forEachBlocksInRange(fromPos, toPos, function(b, _, bFromPos, bToPos) {
        removeDetails.aggregate(b.remove(bFromPos, bToPos));
      });
      return removeDetails;
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DIRECTION.NONE;
      var beginBlockData = this._mapPosToBlock(cursorPos) || {
        index: 0,
        offset: 0
      };
      var beginBlockOffset = beginBlockData.offset, beginBlockIndex = beginBlockData.index;
      var beginBlock = this._blocks[beginBlockIndex];
      if (!beginBlock)
        return cursorPos;
      var beginBlockCursorPos = beginBlockOffset;
      if (beginBlockCursorPos !== 0 && beginBlockCursorPos < beginBlock.value.length) {
        beginBlockCursorPos = beginBlock.nearestInputPos(beginBlockOffset, forceDirection(direction));
      }
      var cursorAtRight = beginBlockCursorPos === beginBlock.value.length;
      var cursorAtLeft = beginBlockCursorPos === 0;
      if (!cursorAtLeft && !cursorAtRight)
        return this._blockStartPos(beginBlockIndex) + beginBlockCursorPos;
      var searchBlockIndex = cursorAtRight ? beginBlockIndex + 1 : beginBlockIndex;
      if (direction === DIRECTION.NONE) {
        if (searchBlockIndex > 0) {
          var blockIndexAtLeft = searchBlockIndex - 1;
          var blockAtLeft = this._blocks[blockIndexAtLeft];
          var blockInputPos = blockAtLeft.nearestInputPos(0, DIRECTION.NONE);
          if (!blockAtLeft.value.length || blockInputPos !== blockAtLeft.value.length) {
            return this._blockStartPos(searchBlockIndex);
          }
        }
        var firstInputAtRight = searchBlockIndex;
        for (var bi = firstInputAtRight; bi < this._blocks.length; ++bi) {
          var blockAtRight = this._blocks[bi];
          var _blockInputPos = blockAtRight.nearestInputPos(0, DIRECTION.NONE);
          if (!blockAtRight.value.length || _blockInputPos !== blockAtRight.value.length) {
            return this._blockStartPos(bi) + _blockInputPos;
          }
        }
        for (var _bi = searchBlockIndex - 1; _bi >= 0; --_bi) {
          var _block3 = this._blocks[_bi];
          var _blockInputPos2 = _block3.nearestInputPos(0, DIRECTION.NONE);
          if (!_block3.value.length || _blockInputPos2 !== _block3.value.length) {
            return this._blockStartPos(_bi) + _block3.value.length;
          }
        }
        return cursorPos;
      }
      if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
        var firstFilledBlockIndexAtRight;
        for (var _bi2 = searchBlockIndex; _bi2 < this._blocks.length; ++_bi2) {
          if (this._blocks[_bi2].value) {
            firstFilledBlockIndexAtRight = _bi2;
            break;
          }
        }
        if (firstFilledBlockIndexAtRight != null) {
          var filledBlock = this._blocks[firstFilledBlockIndexAtRight];
          var _blockInputPos3 = filledBlock.nearestInputPos(0, DIRECTION.RIGHT);
          if (_blockInputPos3 === 0 && filledBlock.unmaskedValue.length) {
            return this._blockStartPos(firstFilledBlockIndexAtRight) + _blockInputPos3;
          }
        }
        var firstFilledInputBlockIndex = -1;
        var firstEmptyInputBlockIndex;
        for (var _bi3 = searchBlockIndex - 1; _bi3 >= 0; --_bi3) {
          var _block4 = this._blocks[_bi3];
          var _blockInputPos4 = _block4.nearestInputPos(_block4.value.length, DIRECTION.FORCE_LEFT);
          if (!_block4.value || _blockInputPos4 !== 0)
            firstEmptyInputBlockIndex = _bi3;
          if (_blockInputPos4 !== 0) {
            if (_blockInputPos4 !== _block4.value.length) {
              return this._blockStartPos(_bi3) + _blockInputPos4;
            } else {
              firstFilledInputBlockIndex = _bi3;
              break;
            }
          }
        }
        if (direction === DIRECTION.LEFT) {
          for (var _bi4 = firstFilledInputBlockIndex + 1; _bi4 <= Math.min(searchBlockIndex, this._blocks.length - 1); ++_bi4) {
            var _block5 = this._blocks[_bi4];
            var _blockInputPos5 = _block5.nearestInputPos(0, DIRECTION.NONE);
            var blockAlignedPos = this._blockStartPos(_bi4) + _blockInputPos5;
            if (blockAlignedPos > cursorPos)
              break;
            if (_blockInputPos5 !== _block5.value.length)
              return blockAlignedPos;
          }
        }
        if (firstFilledInputBlockIndex >= 0) {
          return this._blockStartPos(firstFilledInputBlockIndex) + this._blocks[firstFilledInputBlockIndex].value.length;
        }
        if (direction === DIRECTION.FORCE_LEFT || this.lazy && !this.extractInput() && !isInput(this._blocks[searchBlockIndex])) {
          return 0;
        }
        if (firstEmptyInputBlockIndex != null) {
          return this._blockStartPos(firstEmptyInputBlockIndex);
        }
        for (var _bi5 = searchBlockIndex; _bi5 < this._blocks.length; ++_bi5) {
          var _block6 = this._blocks[_bi5];
          var _blockInputPos6 = _block6.nearestInputPos(0, DIRECTION.NONE);
          if (!_block6.value.length || _blockInputPos6 !== _block6.value.length) {
            return this._blockStartPos(_bi5) + _blockInputPos6;
          }
        }
        return 0;
      }
      if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
        var firstInputBlockAlignedIndex;
        var firstInputBlockAlignedPos;
        for (var _bi6 = searchBlockIndex; _bi6 < this._blocks.length; ++_bi6) {
          var _block7 = this._blocks[_bi6];
          var _blockInputPos7 = _block7.nearestInputPos(0, DIRECTION.NONE);
          if (_blockInputPos7 !== _block7.value.length) {
            firstInputBlockAlignedPos = this._blockStartPos(_bi6) + _blockInputPos7;
            firstInputBlockAlignedIndex = _bi6;
            break;
          }
        }
        if (firstInputBlockAlignedIndex != null && firstInputBlockAlignedPos != null) {
          for (var _bi7 = firstInputBlockAlignedIndex; _bi7 < this._blocks.length; ++_bi7) {
            var _block8 = this._blocks[_bi7];
            var _blockInputPos8 = _block8.nearestInputPos(0, DIRECTION.FORCE_RIGHT);
            if (_blockInputPos8 !== _block8.value.length) {
              return this._blockStartPos(_bi7) + _blockInputPos8;
            }
          }
          return direction === DIRECTION.FORCE_RIGHT ? this.value.length : firstInputBlockAlignedPos;
        }
        for (var _bi8 = Math.min(searchBlockIndex, this._blocks.length - 1); _bi8 >= 0; --_bi8) {
          var _block9 = this._blocks[_bi8];
          var _blockInputPos9 = _block9.nearestInputPos(_block9.value.length, DIRECTION.LEFT);
          if (_blockInputPos9 !== 0) {
            var alignedPos = this._blockStartPos(_bi8) + _blockInputPos9;
            if (alignedPos >= cursorPos)
              return alignedPos;
            break;
          }
        }
      }
      return cursorPos;
    }
  }, {
    key: "maskedBlock",
    value: function maskedBlock(name2) {
      return this.maskedBlocks(name2)[0];
    }
  }, {
    key: "maskedBlocks",
    value: function maskedBlocks(name2) {
      var _this4 = this;
      var indices = this._maskedBlocks[name2];
      if (!indices)
        return [];
      return indices.map(function(gi) {
        return _this4._blocks[gi];
      });
    }
  }]);
  return MaskedPattern2;
}(Masked);
MaskedPattern.DEFAULTS = {
  lazy: true,
  placeholderChar: "_"
};
MaskedPattern.STOP_CHAR = "`";
MaskedPattern.ESCAPE_CHAR = "\\";
MaskedPattern.InputDefinition = PatternInputDefinition;
MaskedPattern.FixedDefinition = PatternFixedDefinition;
function isInput(block2) {
  if (!block2)
    return false;
  var value = block2.value;
  return !value || block2.nearestInputPos(0, DIRECTION.NONE) !== value.length;
}
IMask.MaskedPattern = MaskedPattern;

// node_modules/imask/esm/masked/range.js
var MaskedRange = /* @__PURE__ */ function(_MaskedPattern) {
  _inherits(MaskedRange2, _MaskedPattern);
  var _super = _createSuper(MaskedRange2);
  function MaskedRange2() {
    _classCallCheck(this, MaskedRange2);
    return _super.apply(this, arguments);
  }
  _createClass(MaskedRange2, [{
    key: "_matchFrom",
    get: function get() {
      return this.maxLength - String(this.from).length;
    }
  }, {
    key: "_update",
    value: function _update(opts) {
      opts = Object.assign({
        to: this.to || 0,
        from: this.from || 0
      }, opts);
      var maxLength = String(opts.to).length;
      if (opts.maxLength != null)
        maxLength = Math.max(maxLength, opts.maxLength);
      opts.maxLength = maxLength;
      var fromStr = String(opts.from).padStart(maxLength, "0");
      var toStr = String(opts.to).padStart(maxLength, "0");
      var sameCharsCount = 0;
      while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
        ++sameCharsCount;
      }
      opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, "\\0") + "0".repeat(maxLength - sameCharsCount);
      _get(_getPrototypeOf(MaskedRange2.prototype), "_update", this).call(this, opts);
    }
  }, {
    key: "isComplete",
    get: function get() {
      return _get(_getPrototypeOf(MaskedRange2.prototype), "isComplete", this) && Boolean(this.value);
    }
  }, {
    key: "boundaries",
    value: function boundaries(str) {
      var minstr = "";
      var maxstr = "";
      var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [], _ref2 = _slicedToArray(_ref, 3), placeholder = _ref2[1], num = _ref2[2];
      if (num) {
        minstr = "0".repeat(placeholder.length) + num;
        maxstr = "9".repeat(placeholder.length) + num;
      }
      minstr = minstr.padEnd(this.maxLength, "0");
      maxstr = maxstr.padEnd(this.maxLength, "9");
      return [minstr, maxstr];
    }
  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      str = _get(_getPrototypeOf(MaskedRange2.prototype), "doPrepare", this).call(this, str, flags).replace(/\D/g, "");
      if (!this.autofix)
        return str;
      var fromStr = String(this.from).padStart(this.maxLength, "0");
      var toStr = String(this.to).padStart(this.maxLength, "0");
      var val = this.value;
      var prepStr = "";
      for (var ci = 0; ci < str.length; ++ci) {
        var nextVal = val + prepStr + str[ci];
        var _this$boundaries = this.boundaries(nextVal), _this$boundaries2 = _slicedToArray(_this$boundaries, 2), minstr = _this$boundaries2[0], maxstr = _this$boundaries2[1];
        if (Number(maxstr) < this.from)
          prepStr += fromStr[nextVal.length - 1];
        else if (Number(minstr) > this.to)
          prepStr += toStr[nextVal.length - 1];
        else
          prepStr += str[ci];
      }
      return prepStr;
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;
      var str = this.value;
      var firstNonZero = str.search(/[^0]/);
      if (firstNonZero === -1 && str.length <= this._matchFrom)
        return true;
      var _this$boundaries3 = this.boundaries(str), _this$boundaries4 = _slicedToArray(_this$boundaries3, 2), minstr = _this$boundaries4[0], maxstr = _this$boundaries4[1];
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_getPrototypeOf(MaskedRange2.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);
  return MaskedRange2;
}(MaskedPattern);
IMask.MaskedRange = MaskedRange;

// node_modules/imask/esm/masked/date.js
var MaskedDate = /* @__PURE__ */ function(_MaskedPattern) {
  _inherits(MaskedDate2, _MaskedPattern);
  var _super = _createSuper(MaskedDate2);
  function MaskedDate2(opts) {
    _classCallCheck(this, MaskedDate2);
    return _super.call(this, Object.assign({}, MaskedDate2.DEFAULTS, opts));
  }
  _createClass(MaskedDate2, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.mask === Date)
        delete opts.mask;
      if (opts.pattern)
        opts.mask = opts.pattern;
      var blocks = opts.blocks;
      opts.blocks = Object.assign({}, MaskedDate2.GET_DEFAULT_BLOCKS());
      if (opts.min)
        opts.blocks.Y.from = opts.min.getFullYear();
      if (opts.max)
        opts.blocks.Y.to = opts.max.getFullYear();
      if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
        opts.blocks.m.from = opts.min.getMonth() + 1;
        opts.blocks.m.to = opts.max.getMonth() + 1;
        if (opts.blocks.m.from === opts.blocks.m.to) {
          opts.blocks.d.from = opts.min.getDate();
          opts.blocks.d.to = opts.max.getDate();
        }
      }
      Object.assign(opts.blocks, blocks);
      Object.keys(opts.blocks).forEach(function(bk) {
        var b = opts.blocks[bk];
        if (!("autofix" in b))
          b.autofix = opts.autofix;
      });
      _get(_getPrototypeOf(MaskedDate2.prototype), "_update", this).call(this, opts);
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;
      var date = this.date;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return (_get2 = _get(_getPrototypeOf(MaskedDate2.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
    }
  }, {
    key: "isDateExist",
    value: function isDateExist(str) {
      return this.format(this.parse(str, this), this).indexOf(str) >= 0;
    }
  }, {
    key: "date",
    get: function get() {
      return this.typedValue;
    },
    set: function set2(date) {
      this.typedValue = date;
    }
  }, {
    key: "typedValue",
    get: function get() {
      return this.isComplete ? _get(_getPrototypeOf(MaskedDate2.prototype), "typedValue", this) : null;
    },
    set: function set2(value) {
      _set(_getPrototypeOf(MaskedDate2.prototype), "typedValue", value, this, true);
    }
  }]);
  return MaskedDate2;
}(MaskedPattern);
MaskedDate.DEFAULTS = {
  pattern: "d{.}`m{.}`Y",
  format: function format2(date) {
    var day = String(date.getDate()).padStart(2, "0");
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var year = date.getFullYear();
    return [day, month, year].join(".");
  },
  parse: function parse4(str) {
    var _str$split = str.split("."), _str$split2 = _slicedToArray(_str$split, 3), day = _str$split2[0], month = _str$split2[1], year = _str$split2[2];
    return new Date(year, month - 1, day);
  }
};
MaskedDate.GET_DEFAULT_BLOCKS = function() {
  return {
    d: {
      mask: MaskedRange,
      from: 1,
      to: 31,
      maxLength: 2
    },
    m: {
      mask: MaskedRange,
      from: 1,
      to: 12,
      maxLength: 2
    },
    Y: {
      mask: MaskedRange,
      from: 1900,
      to: 9999
    }
  };
};
IMask.MaskedDate = MaskedDate;

// node_modules/imask/esm/controls/mask-element.js
var MaskElement = /* @__PURE__ */ function() {
  function MaskElement2() {
    _classCallCheck(this, MaskElement2);
  }
  _createClass(MaskElement2, [{
    key: "selectionStart",
    get: function get() {
      var start;
      try {
        start = this._unsafeSelectionStart;
      } catch (e2) {
      }
      return start != null ? start : this.value.length;
    }
  }, {
    key: "selectionEnd",
    get: function get() {
      var end;
      try {
        end = this._unsafeSelectionEnd;
      } catch (e2) {
      }
      return end != null ? end : this.value.length;
    }
  }, {
    key: "select",
    value: function select(start, end) {
      if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd)
        return;
      try {
        this._unsafeSelect(start, end);
      } catch (e2) {
      }
    }
  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
    }
  }, {
    key: "isActive",
    get: function get() {
      return false;
    }
  }, {
    key: "bindEvents",
    value: function bindEvents(handlers) {
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
    }
  }]);
  return MaskElement2;
}();
IMask.MaskElement = MaskElement;

// node_modules/imask/esm/controls/html-mask-element.js
var HTMLMaskElement = /* @__PURE__ */ function(_MaskElement) {
  _inherits(HTMLMaskElement2, _MaskElement);
  var _super = _createSuper(HTMLMaskElement2);
  function HTMLMaskElement2(input) {
    var _this;
    _classCallCheck(this, HTMLMaskElement2);
    _this = _super.call(this);
    _this.input = input;
    _this._handlers = {};
    return _this;
  }
  _createClass(HTMLMaskElement2, [{
    key: "rootElement",
    get: function get() {
      return this.input.getRootNode ? this.input.getRootNode() : document;
    }
  }, {
    key: "isActive",
    get: function get() {
      return this.input === this.rootElement.activeElement;
    }
  }, {
    key: "_unsafeSelectionStart",
    get: function get() {
      return this.input.selectionStart;
    }
  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      return this.input.selectionEnd;
    }
  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
      this.input.setSelectionRange(start, end);
    }
  }, {
    key: "value",
    get: function get() {
      return this.input.value;
    },
    set: function set2(value) {
      this.input.value = value;
    }
  }, {
    key: "bindEvents",
    value: function bindEvents(handlers) {
      var _this2 = this;
      Object.keys(handlers).forEach(function(event) {
        return _this2._toggleEventHandler(HTMLMaskElement2.EVENTS_MAP[event], handlers[event]);
      });
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      var _this3 = this;
      Object.keys(this._handlers).forEach(function(event) {
        return _this3._toggleEventHandler(event);
      });
    }
  }, {
    key: "_toggleEventHandler",
    value: function _toggleEventHandler(event, handler) {
      if (this._handlers[event]) {
        this.input.removeEventListener(event, this._handlers[event]);
        delete this._handlers[event];
      }
      if (handler) {
        this.input.addEventListener(event, handler);
        this._handlers[event] = handler;
      }
    }
  }]);
  return HTMLMaskElement2;
}(MaskElement);
HTMLMaskElement.EVENTS_MAP = {
  selectionChange: "keydown",
  input: "input",
  drop: "drop",
  click: "click",
  focus: "focus",
  commit: "blur"
};
IMask.HTMLMaskElement = HTMLMaskElement;

// node_modules/imask/esm/controls/html-contenteditable-mask-element.js
var HTMLContenteditableMaskElement = /* @__PURE__ */ function(_HTMLMaskElement) {
  _inherits(HTMLContenteditableMaskElement2, _HTMLMaskElement);
  var _super = _createSuper(HTMLContenteditableMaskElement2);
  function HTMLContenteditableMaskElement2() {
    _classCallCheck(this, HTMLContenteditableMaskElement2);
    return _super.apply(this, arguments);
  }
  _createClass(HTMLContenteditableMaskElement2, [{
    key: "_unsafeSelectionStart",
    get: function get() {
      var root2 = this.rootElement;
      var selection = root2.getSelection && root2.getSelection();
      return selection && selection.anchorOffset;
    }
  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      var root2 = this.rootElement;
      var selection = root2.getSelection && root2.getSelection();
      return selection && this._unsafeSelectionStart + String(selection).length;
    }
  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
      if (!this.rootElement.createRange)
        return;
      var range = this.rootElement.createRange();
      range.setStart(this.input.firstChild || this.input, start);
      range.setEnd(this.input.lastChild || this.input, end);
      var root2 = this.rootElement;
      var selection = root2.getSelection && root2.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }, {
    key: "value",
    get: function get() {
      return this.input.textContent;
    },
    set: function set2(value) {
      this.input.textContent = value;
    }
  }]);
  return HTMLContenteditableMaskElement2;
}(HTMLMaskElement);
IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;

// node_modules/imask/esm/controls/input.js
var _excluded4 = ["mask"];
var InputMask = /* @__PURE__ */ function() {
  function InputMask2(el, opts) {
    _classCallCheck(this, InputMask2);
    this.el = el instanceof MaskElement ? el : el.isContentEditable && el.tagName !== "INPUT" && el.tagName !== "TEXTAREA" ? new HTMLContenteditableMaskElement(el) : new HTMLMaskElement(el);
    this.masked = createMask(opts);
    this._listeners = {};
    this._value = "";
    this._unmaskedValue = "";
    this._saveSelection = this._saveSelection.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onDrop = this._onDrop.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onClick = this._onClick.bind(this);
    this.alignCursor = this.alignCursor.bind(this);
    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
    this._bindEvents();
    this.updateValue();
    this._onChange();
  }
  _createClass(InputMask2, [{
    key: "mask",
    get: function get() {
      return this.masked.mask;
    },
    set: function set2(mask) {
      if (this.maskEquals(mask))
        return;
      if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
        this.masked.updateOptions({
          mask
        });
        return;
      }
      var masked = createMask({
        mask
      });
      masked.unmaskedValue = this.masked.unmaskedValue;
      this.masked = masked;
    }
  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      return mask == null || mask === this.masked.mask || mask === Date && this.masked instanceof MaskedDate;
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set2(str) {
      this.masked.value = str;
      this.updateControl();
      this.alignCursor();
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._unmaskedValue;
    },
    set: function set2(str) {
      this.masked.unmaskedValue = str;
      this.updateControl();
      this.alignCursor();
    }
  }, {
    key: "typedValue",
    get: function get() {
      return this.masked.typedValue;
    },
    set: function set2(val) {
      this.masked.typedValue = val;
      this.updateControl();
      this.alignCursor();
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      this.el.bindEvents({
        selectionChange: this._saveSelection,
        input: this._onInput,
        drop: this._onDrop,
        click: this._onClick,
        focus: this._onFocus,
        commit: this._onChange
      });
    }
  }, {
    key: "_unbindEvents",
    value: function _unbindEvents() {
      if (this.el)
        this.el.unbindEvents();
    }
  }, {
    key: "_fireEvent",
    value: function _fireEvent(ev) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var listeners2 = this._listeners[ev];
      if (!listeners2)
        return;
      listeners2.forEach(function(l) {
        return l.apply(void 0, args);
      });
    }
  }, {
    key: "selectionStart",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
    }
  }, {
    key: "cursorPos",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
    },
    set: function set2(pos) {
      if (!this.el || !this.el.isActive)
        return;
      this.el.select(pos, pos);
      this._saveSelection();
    }
  }, {
    key: "_saveSelection",
    value: function _saveSelection() {
      if (this.value !== this.el.value) {
        console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.");
      }
      this._selection = {
        start: this.selectionStart,
        end: this.cursorPos
      };
    }
  }, {
    key: "updateValue",
    value: function updateValue() {
      this.masked.value = this.el.value;
      this._value = this.masked.value;
    }
  }, {
    key: "updateControl",
    value: function updateControl() {
      var newUnmaskedValue = this.masked.unmaskedValue;
      var newValue = this.masked.value;
      var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
      this._unmaskedValue = newUnmaskedValue;
      this._value = newValue;
      if (this.el.value !== newValue)
        this.el.value = newValue;
      if (isChanged)
        this._fireChangeEvents();
    }
  }, {
    key: "updateOptions",
    value: function updateOptions(opts) {
      var mask = opts.mask, restOpts = _objectWithoutProperties(opts, _excluded4);
      var updateMask = !this.maskEquals(mask);
      var updateOpts = !objectIncludes(this.masked, restOpts);
      if (updateMask)
        this.mask = mask;
      if (updateOpts)
        this.masked.updateOptions(restOpts);
      if (updateMask || updateOpts)
        this.updateControl();
    }
  }, {
    key: "updateCursor",
    value: function updateCursor(cursorPos) {
      if (cursorPos == null)
        return;
      this.cursorPos = cursorPos;
      this._delayUpdateCursor(cursorPos);
    }
  }, {
    key: "_delayUpdateCursor",
    value: function _delayUpdateCursor(cursorPos) {
      var _this = this;
      this._abortUpdateCursor();
      this._changingCursorPos = cursorPos;
      this._cursorChanging = setTimeout(function() {
        if (!_this.el)
          return;
        _this.cursorPos = _this._changingCursorPos;
        _this._abortUpdateCursor();
      }, 10);
    }
  }, {
    key: "_fireChangeEvents",
    value: function _fireChangeEvents() {
      this._fireEvent("accept", this._inputEvent);
      if (this.masked.isComplete)
        this._fireEvent("complete", this._inputEvent);
    }
  }, {
    key: "_abortUpdateCursor",
    value: function _abortUpdateCursor() {
      if (this._cursorChanging) {
        clearTimeout(this._cursorChanging);
        delete this._cursorChanging;
      }
    }
  }, {
    key: "alignCursor",
    value: function alignCursor() {
      this.cursorPos = this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT);
    }
  }, {
    key: "alignCursorFriendly",
    value: function alignCursorFriendly() {
      if (this.selectionStart !== this.cursorPos)
        return;
      this.alignCursor();
    }
  }, {
    key: "on",
    value: function on2(ev, handler) {
      if (!this._listeners[ev])
        this._listeners[ev] = [];
      this._listeners[ev].push(handler);
      return this;
    }
  }, {
    key: "off",
    value: function off(ev, handler) {
      if (!this._listeners[ev])
        return this;
      if (!handler) {
        delete this._listeners[ev];
        return this;
      }
      var hIndex = this._listeners[ev].indexOf(handler);
      if (hIndex >= 0)
        this._listeners[ev].splice(hIndex, 1);
      return this;
    }
  }, {
    key: "_onInput",
    value: function _onInput(e2) {
      this._inputEvent = e2;
      this._abortUpdateCursor();
      if (!this._selection)
        return this.updateValue();
      var details = new ActionDetails(this.el.value, this.cursorPos, this.value, this._selection);
      var oldRawValue = this.masked.rawInputValue;
      var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset;
      var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
      var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
      this.updateControl();
      this.updateCursor(cursorPos);
      delete this._inputEvent;
    }
  }, {
    key: "_onChange",
    value: function _onChange() {
      if (this.value !== this.el.value) {
        this.updateValue();
      }
      this.masked.doCommit();
      this.updateControl();
      this._saveSelection();
    }
  }, {
    key: "_onDrop",
    value: function _onDrop(ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
  }, {
    key: "_onFocus",
    value: function _onFocus(ev) {
      this.alignCursorFriendly();
    }
  }, {
    key: "_onClick",
    value: function _onClick(ev) {
      this.alignCursorFriendly();
    }
  }, {
    key: "destroy",
    value: function destroy2() {
      this._unbindEvents();
      this._listeners.length = 0;
      delete this.el;
    }
  }]);
  return InputMask2;
}();
IMask.InputMask = InputMask;

// node_modules/imask/esm/masked/enum.js
var MaskedEnum = /* @__PURE__ */ function(_MaskedPattern) {
  _inherits(MaskedEnum2, _MaskedPattern);
  var _super = _createSuper(MaskedEnum2);
  function MaskedEnum2() {
    _classCallCheck(this, MaskedEnum2);
    return _super.apply(this, arguments);
  }
  _createClass(MaskedEnum2, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.enum)
        opts.mask = "*".repeat(opts.enum[0].length);
      _get(_getPrototypeOf(MaskedEnum2.prototype), "_update", this).call(this, opts);
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this = this, _get2;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return this.enum.some(function(e2) {
        return e2.indexOf(_this.unmaskedValue) >= 0;
      }) && (_get2 = _get(_getPrototypeOf(MaskedEnum2.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);
  return MaskedEnum2;
}(MaskedPattern);
IMask.MaskedEnum = MaskedEnum;

// node_modules/imask/esm/masked/number.js
var MaskedNumber = /* @__PURE__ */ function(_Masked) {
  _inherits(MaskedNumber2, _Masked);
  var _super = _createSuper(MaskedNumber2);
  function MaskedNumber2(opts) {
    _classCallCheck(this, MaskedNumber2);
    return _super.call(this, Object.assign({}, MaskedNumber2.DEFAULTS, opts));
  }
  _createClass(MaskedNumber2, [{
    key: "_update",
    value: function _update(opts) {
      _get(_getPrototypeOf(MaskedNumber2.prototype), "_update", this).call(this, opts);
      this._updateRegExps();
    }
  }, {
    key: "_updateRegExps",
    value: function _updateRegExps() {
      var start = "^" + (this.allowNegative ? "[+|\\-]?" : "");
      var midInput = "(0|([1-9]+\\d*))?";
      var mid = "\\d*";
      var end = (this.scale ? "(" + escapeRegExp(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
      this._numberRegExpInput = new RegExp(start + midInput + end);
      this._numberRegExp = new RegExp(start + mid + end);
      this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(escapeRegExp).join("") + "]", "g");
      this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), "g");
    }
  }, {
    key: "_removeThousandsSeparators",
    value: function _removeThousandsSeparators(value) {
      return value.replace(this._thousandsSeparatorRegExp, "");
    }
  }, {
    key: "_insertThousandsSeparators",
    value: function _insertThousandsSeparators(value) {
      var parts = value.split(this.radix);
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
      return parts.join(this.radix);
    }
  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var _get2;
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return (_get2 = _get(_getPrototypeOf(MaskedNumber2.prototype), "doPrepare", this)).call.apply(_get2, [this, this._removeThousandsSeparators(str.replace(this._mapToRadixRegExp, this.radix))].concat(args));
    }
  }, {
    key: "_separatorsCount",
    value: function _separatorsCount(to) {
      var extendOnSeparators = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var count = 0;
      for (var pos = 0; pos < to; ++pos) {
        if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
          ++count;
          if (extendOnSeparators)
            to += this.thousandsSeparator.length;
        }
      }
      return count;
    }
  }, {
    key: "_separatorsCountFromSlice",
    value: function _separatorsCountFromSlice() {
      var slice = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this._value;
      return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : void 0;
      var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);
      var _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2);
      fromPos = _this$_adjustRangeWit2[0];
      toPos = _this$_adjustRangeWit2[1];
      return this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber2.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
    }
  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!this.thousandsSeparator)
        return _get(_getPrototypeOf(MaskedNumber2.prototype), "_appendCharRaw", this).call(this, ch, flags);
      var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
      var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
      this._value = this._removeThousandsSeparators(this.value);
      var appendDetails = _get(_getPrototypeOf(MaskedNumber2.prototype), "_appendCharRaw", this).call(this, ch, flags);
      this._value = this._insertThousandsSeparators(this._value);
      var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
      appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
      appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
      return appendDetails;
    }
  }, {
    key: "_findSeparatorAround",
    value: function _findSeparatorAround(pos) {
      if (this.thousandsSeparator) {
        var searchFrom = pos - this.thousandsSeparator.length + 1;
        var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
        if (separatorPos <= pos)
          return separatorPos;
      }
      return -1;
    }
  }, {
    key: "_adjustRangeWithSeparators",
    value: function _adjustRangeWithSeparators(from, to) {
      var separatorAroundFromPos = this._findSeparatorAround(from);
      if (separatorAroundFromPos >= 0)
        from = separatorAroundFromPos;
      var separatorAroundToPos = this._findSeparatorAround(to);
      if (separatorAroundToPos >= 0)
        to = separatorAroundToPos + this.thousandsSeparator.length;
      return [from, to];
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);
      var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);
      fromPos = _this$_adjustRangeWit4[0];
      toPos = _this$_adjustRangeWit4[1];
      var valueBeforePos = this.value.slice(0, fromPos);
      var valueAfterPos = this.value.slice(toPos);
      var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
      this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
      return new ChangeDetails({
        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
      });
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      if (!this.thousandsSeparator)
        return cursorPos;
      switch (direction) {
        case DIRECTION.NONE:
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT: {
          var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
          if (separatorAtLeftPos >= 0) {
            var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
            if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
              return separatorAtLeftPos;
            }
          }
          break;
        }
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT: {
          var separatorAtRightPos = this._findSeparatorAround(cursorPos);
          if (separatorAtRightPos >= 0) {
            return separatorAtRightPos + this.thousandsSeparator.length;
          }
        }
      }
      return cursorPos;
    }
  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp;
      var valid = regexp.test(this._removeThousandsSeparators(this.value));
      if (valid) {
        var number = this.number;
        valid = valid && !isNaN(number) && (this.min == null || this.min >= 0 || this.min <= this.number) && (this.max == null || this.max <= 0 || this.number <= this.max);
      }
      return valid && _get(_getPrototypeOf(MaskedNumber2.prototype), "doValidate", this).call(this, flags);
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.value) {
        var number = this.number;
        var validnum = number;
        if (this.min != null)
          validnum = Math.max(validnum, this.min);
        if (this.max != null)
          validnum = Math.min(validnum, this.max);
        if (validnum !== number)
          this.unmaskedValue = String(validnum);
        var formatted = this.value;
        if (this.normalizeZeros)
          formatted = this._normalizeZeros(formatted);
        if (this.padFractionalZeros)
          formatted = this._padFractionalZeros(formatted);
        this._value = formatted;
      }
      _get(_getPrototypeOf(MaskedNumber2.prototype), "doCommit", this).call(this);
    }
  }, {
    key: "_normalizeZeros",
    value: function _normalizeZeros(value) {
      var parts = this._removeThousandsSeparators(value).split(this.radix);
      parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function(match, sign, zeros, num) {
        return sign + num;
      });
      if (value.length && !/\d$/.test(parts[0]))
        parts[0] = parts[0] + "0";
      if (parts.length > 1) {
        parts[1] = parts[1].replace(/0*$/, "");
        if (!parts[1].length)
          parts.length = 1;
      }
      return this._insertThousandsSeparators(parts.join(this.radix));
    }
  }, {
    key: "_padFractionalZeros",
    value: function _padFractionalZeros(value) {
      if (!value)
        return value;
      var parts = value.split(this.radix);
      if (parts.length < 2)
        parts.push("");
      parts[1] = parts[1].padEnd(this.scale, "0");
      return parts.join(this.radix);
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, ".");
    },
    set: function set2(unmaskedValue) {
      _set(_getPrototypeOf(MaskedNumber2.prototype), "unmaskedValue", unmaskedValue.replace(".", this.radix), this, true);
    }
  }, {
    key: "typedValue",
    get: function get() {
      return Number(this.unmaskedValue);
    },
    set: function set2(n2) {
      _set(_getPrototypeOf(MaskedNumber2.prototype), "unmaskedValue", String(n2), this, true);
    }
  }, {
    key: "number",
    get: function get() {
      return this.typedValue;
    },
    set: function set2(number) {
      this.typedValue = number;
    }
  }, {
    key: "allowNegative",
    get: function get() {
      return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
    }
  }]);
  return MaskedNumber2;
}(Masked);
MaskedNumber.DEFAULTS = {
  radix: ",",
  thousandsSeparator: "",
  mapToRadix: ["."],
  scale: 2,
  signed: false,
  normalizeZeros: true,
  padFractionalZeros: false
};
IMask.MaskedNumber = MaskedNumber;

// node_modules/imask/esm/masked/function.js
var MaskedFunction = /* @__PURE__ */ function(_Masked) {
  _inherits(MaskedFunction2, _Masked);
  var _super = _createSuper(MaskedFunction2);
  function MaskedFunction2() {
    _classCallCheck(this, MaskedFunction2);
    return _super.apply(this, arguments);
  }
  _createClass(MaskedFunction2, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.mask)
        opts.validate = opts.mask;
      _get(_getPrototypeOf(MaskedFunction2.prototype), "_update", this).call(this, opts);
    }
  }]);
  return MaskedFunction2;
}(Masked);
IMask.MaskedFunction = MaskedFunction;

// node_modules/imask/esm/masked/dynamic.js
var _excluded5 = ["compiledMasks", "currentMaskRef", "currentMask"];
var MaskedDynamic = /* @__PURE__ */ function(_Masked) {
  _inherits(MaskedDynamic2, _Masked);
  var _super = _createSuper(MaskedDynamic2);
  function MaskedDynamic2(opts) {
    var _this;
    _classCallCheck(this, MaskedDynamic2);
    _this = _super.call(this, Object.assign({}, MaskedDynamic2.DEFAULTS, opts));
    _this.currentMask = null;
    return _this;
  }
  _createClass(MaskedDynamic2, [{
    key: "_update",
    value: function _update(opts) {
      _get(_getPrototypeOf(MaskedDynamic2.prototype), "_update", this).call(this, opts);
      if ("mask" in opts) {
        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function(m) {
          return createMask(m);
        }) : [];
      }
    }
  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var details = this._applyDispatch(ch, flags);
      if (this.currentMask) {
        details.aggregate(this.currentMask._appendChar(ch, flags));
      }
      return details;
    }
  }, {
    key: "_applyDispatch",
    value: function _applyDispatch() {
      var appended = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
      var inputValue = this.rawInputValue;
      var insertValue = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._rawInputValue : inputValue;
      var tailValue = inputValue.slice(insertValue.length);
      var prevMask = this.currentMask;
      var details = new ChangeDetails();
      var prevMaskState = prevMask && prevMask.state;
      this.currentMask = this.doDispatch(appended, Object.assign({}, flags));
      if (this.currentMask) {
        if (this.currentMask !== prevMask) {
          this.currentMask.reset();
          if (insertValue) {
            var d = this.currentMask.append(insertValue, {
              raw: true
            });
            details.tailShift = d.inserted.length - prevValueBeforeTail.length;
          }
          if (tailValue) {
            details.tailShift += this.currentMask.append(tailValue, {
              raw: true,
              tail: true
            }).tailShift;
          }
        } else {
          this.currentMask.state = prevMaskState;
        }
      }
      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = this._applyDispatch.apply(this, arguments);
      if (this.currentMask) {
        details.aggregate(this.currentMask._appendPlaceholder());
      }
      return details;
    }
  }, {
    key: "doDispatch",
    value: function doDispatch(appended) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.dispatch(appended, this, flags);
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2, _this$currentMask;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return (_get2 = _get(_getPrototypeOf(MaskedDynamic2.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask = this.currentMask).doValidate.apply(_this$currentMask, args));
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.currentMask)
        this.currentMask.reset();
      this.compiledMasks.forEach(function(m) {
        return m.reset();
      });
    }
  }, {
    key: "value",
    get: function get() {
      return this.currentMask ? this.currentMask.value : "";
    },
    set: function set2(value) {
      _set(_getPrototypeOf(MaskedDynamic2.prototype), "value", value, this, true);
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.unmaskedValue : "";
    },
    set: function set2(unmaskedValue) {
      _set(_getPrototypeOf(MaskedDynamic2.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
  }, {
    key: "typedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.typedValue : "";
    },
    set: function set2(value) {
      var unmaskedValue = String(value);
      if (this.currentMask) {
        this.currentMask.typedValue = value;
        unmaskedValue = this.currentMask.unmaskedValue;
      }
      this.unmaskedValue = unmaskedValue;
    }
  }, {
    key: "isComplete",
    get: function get() {
      return !!this.currentMask && this.currentMask.isComplete;
    }
  }, {
    key: "remove",
    value: function remove() {
      var details = new ChangeDetails();
      if (this.currentMask) {
        var _this$currentMask2;
        details.aggregate((_this$currentMask2 = this.currentMask).remove.apply(_this$currentMask2, arguments)).aggregate(this._applyDispatch());
      }
      return details;
    }
  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, _get(_getPrototypeOf(MaskedDynamic2.prototype), "state", this), {
        _rawInputValue: this.rawInputValue,
        compiledMasks: this.compiledMasks.map(function(m) {
          return m.state;
        }),
        currentMaskRef: this.currentMask,
        currentMask: this.currentMask && this.currentMask.state
      });
    },
    set: function set2(state2) {
      var compiledMasks = state2.compiledMasks, currentMaskRef = state2.currentMaskRef, currentMask = state2.currentMask, maskedState = _objectWithoutProperties(state2, _excluded5);
      this.compiledMasks.forEach(function(m, mi) {
        return m.state = compiledMasks[mi];
      });
      if (currentMaskRef != null) {
        this.currentMask = currentMaskRef;
        this.currentMask.state = currentMask;
      }
      _set(_getPrototypeOf(MaskedDynamic2.prototype), "state", maskedState, this, true);
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var _this$currentMask3;
      return this.currentMask ? (_this$currentMask3 = this.currentMask).extractInput.apply(_this$currentMask3, arguments) : "";
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$currentMask4, _get3;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return this.currentMask ? (_this$currentMask4 = this.currentMask).extractTail.apply(_this$currentMask4, args) : (_get3 = _get(_getPrototypeOf(MaskedDynamic2.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.currentMask)
        this.currentMask.doCommit();
      _get(_getPrototypeOf(MaskedDynamic2.prototype), "doCommit", this).call(this);
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos() {
      var _this$currentMask5, _get4;
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return this.currentMask ? (_this$currentMask5 = this.currentMask).nearestInputPos.apply(_this$currentMask5, args) : (_get4 = _get(_getPrototypeOf(MaskedDynamic2.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
    }
  }, {
    key: "overwrite",
    get: function get() {
      return this.currentMask ? this.currentMask.overwrite : _get(_getPrototypeOf(MaskedDynamic2.prototype), "overwrite", this);
    },
    set: function set2(overwrite) {
      console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
    }
  }]);
  return MaskedDynamic2;
}(Masked);
MaskedDynamic.DEFAULTS = {
  dispatch: function dispatch(appended, masked, flags) {
    if (!masked.compiledMasks.length)
      return;
    var inputValue = masked.rawInputValue;
    var inputs = masked.compiledMasks.map(function(m, index) {
      m.reset();
      m.append(inputValue, {
        raw: true
      });
      m.append(appended, flags);
      var weight = m.rawInputValue.length;
      return {
        weight,
        index
      };
    });
    inputs.sort(function(i1, i2) {
      return i2.weight - i1.weight;
    });
    return masked.compiledMasks[inputs[0].index];
  }
};
IMask.MaskedDynamic = MaskedDynamic;

// node_modules/imask/esm/masked/pipe.js
var PIPE_TYPE = {
  MASKED: "value",
  UNMASKED: "unmaskedValue",
  TYPED: "typedValue"
};
function createPipe(mask) {
  var from = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : PIPE_TYPE.MASKED;
  var to = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : PIPE_TYPE.MASKED;
  var masked = createMask(mask);
  return function(value) {
    return masked.runIsolated(function(m) {
      m[from] = value;
      return m[to];
    });
  };
}
function pipe(value) {
  for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    pipeArgs[_key - 1] = arguments[_key];
  }
  return createPipe.apply(void 0, pipeArgs)(value);
}
IMask.PIPE_TYPE = PIPE_TYPE;
IMask.createPipe = createPipe;
IMask.pipe = pipe;

// node_modules/imask/esm/index.js
try {
  globalThis.IMask = IMask;
} catch (e2) {
}

// packages/forms/resources/js/components/text-input.js
var text_input_default = (Alpine) => {
  Alpine.data("textInputFormComponent", ({
    getMaskOptionsUsing,
    state: state2
  }) => {
    return {
      mask: null,
      state: state2,
      init: function() {
        if (!getMaskOptionsUsing) {
          return;
        }
        if (this.state) {
          this.$el.value = this.state?.valueOf();
        }
        this.mask = IMask(this.$el, getMaskOptionsUsing(IMask)).on("accept", () => {
          this.state = this.mask.unmaskedValue;
        });
        this.$watch("state", () => {
          this.mask.unmaskedValue = this.state?.valueOf();
        });
      }
    };
  });
};

// packages/forms/resources/js/index.js
var js_default = (Alpine) => {
  Alpine.plugin(date_time_picker_default);
  Alpine.plugin(file_upload_default);
  Alpine.plugin(markdown_editor_default);
  Alpine.plugin(multi_select_default);
  Alpine.plugin(rich_editor_default);
  Alpine.plugin(select_default);
  Alpine.plugin(tags_input_default);
  Alpine.plugin(text_input_default);
};
export {
  js_default as default
};
