var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getDefaultExportFromNamespaceIfPresent(n) {
  return n && Object.prototype.hasOwnProperty.call(n, "default") ? n["default"] : n;
}
function getDefaultExportFromNamespaceIfNotNamed(n) {
  return n && Object.prototype.hasOwnProperty.call(n, "default") && Object.keys(n).length === 1 ? n["default"] : n;
}
function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var cfb$1 = { exports: {} };
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var cfb = cfb$1.exports;
(function(module) {
  var Base64 = /* @__PURE__ */ function make_b64() {
    var map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    return {
      encode: function(input) {
        var o = "";
        var c1 = 0, c2 = 0, c3 = 0, e1 = 0, e2 = 0, e3 = 0, e4 = 0;
        for (var i = 0; i < input.length; ) {
          c1 = input.charCodeAt(i++);
          e1 = c1 >> 2;
          c2 = input.charCodeAt(i++);
          e2 = (c1 & 3) << 4 | c2 >> 4;
          c3 = input.charCodeAt(i++);
          e3 = (c2 & 15) << 2 | c3 >> 6;
          e4 = c3 & 63;
          if (isNaN(c2)) {
            e3 = e4 = 64;
          } else if (isNaN(c3)) {
            e4 = 64;
          }
          o += map.charAt(e1) + map.charAt(e2) + map.charAt(e3) + map.charAt(e4);
        }
        return o;
      },
      decode: function b64_decode(input) {
        var o = "";
        var c1 = 0, c2 = 0, c3 = 0, e1 = 0, e2 = 0, e3 = 0, e4 = 0;
        input = input.replace(/[^\w\+\/\=]/g, "");
        for (var i = 0; i < input.length; ) {
          e1 = map.indexOf(input.charAt(i++));
          e2 = map.indexOf(input.charAt(i++));
          c1 = e1 << 2 | e2 >> 4;
          o += String.fromCharCode(c1);
          e3 = map.indexOf(input.charAt(i++));
          c2 = (e2 & 15) << 4 | e3 >> 2;
          if (e3 !== 64) {
            o += String.fromCharCode(c2);
          }
          e4 = map.indexOf(input.charAt(i++));
          c3 = (e3 & 3) << 6 | e4;
          if (e4 !== 64) {
            o += String.fromCharCode(c3);
          }
        }
        return o;
      }
    };
  }();
  var has_buf = typeof Buffer !== "undefined" && typeof process !== "undefined" && typeof process.versions !== "undefined" && process.versions.node;
  var Buffer_from = function() {
  };
  if (typeof Buffer !== "undefined") {
    var nbfs = !Buffer.from;
    if (!nbfs) try {
      Buffer.from("foo", "utf8");
    } catch (e) {
      nbfs = true;
    }
    Buffer_from = nbfs ? function(buf, enc) {
      return enc ? new Buffer(buf, enc) : new Buffer(buf);
    } : Buffer.from.bind(Buffer);
    if (!Buffer.alloc) Buffer.alloc = function(n) {
      return new Buffer(n);
    };
    if (!Buffer.allocUnsafe) Buffer.allocUnsafe = function(n) {
      return new Buffer(n);
    };
  }
  function new_raw_buf(len) {
    return has_buf ? Buffer.alloc(len) : new Array(len);
  }
  function new_unsafe_buf(len) {
    return has_buf ? Buffer.allocUnsafe(len) : new Array(len);
  }
  var s2a = function s2a2(s) {
    if (has_buf) return Buffer_from(s, "binary");
    return s.split("").map(function(x) {
      return x.charCodeAt(0) & 255;
    });
  };
  var chr0 = /\u0000/g, chr1 = /[\u0001-\u0006]/g;
  var __toBuffer = function(bufs) {
    var x = [];
    for (var i = 0; i < bufs[0].length; ++i) {
      x.push.apply(x, bufs[0][i]);
    }
    return x;
  };
  var ___toBuffer = __toBuffer;
  var __utf16le = function(b, s, e) {
    var ss = [];
    for (var i = s; i < e; i += 2) ss.push(String.fromCharCode(__readUInt16LE(b, i)));
    return ss.join("").replace(chr0, "");
  };
  var ___utf16le = __utf16le;
  var __hexlify = function(b, s, l) {
    var ss = [];
    for (var i = s; i < s + l; ++i) ss.push(("0" + b[i].toString(16)).slice(-2));
    return ss.join("");
  };
  var ___hexlify = __hexlify;
  var __bconcat = function(bufs) {
    if (Array.isArray(bufs[0])) return [].concat.apply([], bufs);
    var maxlen = 0, i = 0;
    for (i = 0; i < bufs.length; ++i) maxlen += bufs[i].length;
    var o = new Uint8Array(maxlen);
    for (i = 0, maxlen = 0; i < bufs.length; maxlen += bufs[i].length, ++i) o.set(bufs[i], maxlen);
    return o;
  };
  var bconcat = __bconcat;
  if (has_buf) {
    __utf16le = function(b, s, e) {
      if (!Buffer.isBuffer(b)) return ___utf16le(b, s, e);
      return b.toString("utf16le", s, e).replace(chr0, "");
    };
    __hexlify = function(b, s, l) {
      return Buffer.isBuffer(b) ? b.toString("hex", s, s + l) : ___hexlify(b, s, l);
    };
    __toBuffer = function(bufs) {
      return bufs[0].length > 0 && Buffer.isBuffer(bufs[0][0]) ? Buffer.concat(bufs[0]) : ___toBuffer(bufs);
    };
    s2a = function(s) {
      return Buffer_from(s, "binary");
    };
    bconcat = function(bufs) {
      return Buffer.isBuffer(bufs[0]) ? Buffer.concat(bufs) : __bconcat(bufs);
    };
  }
  var __readUInt8 = function(b, idx) {
    return b[idx];
  };
  var __readUInt16LE = function(b, idx) {
    return b[idx + 1] * (1 << 8) + b[idx];
  };
  var __readInt16LE = function(b, idx) {
    var u = b[idx + 1] * (1 << 8) + b[idx];
    return u < 32768 ? u : (65535 - u + 1) * -1;
  };
  var __readUInt32LE = function(b, idx) {
    return b[idx + 3] * (1 << 24) + (b[idx + 2] << 16) + (b[idx + 1] << 8) + b[idx];
  };
  var __readInt32LE = function(b, idx) {
    return (b[idx + 3] << 24) + (b[idx + 2] << 16) + (b[idx + 1] << 8) + b[idx];
  };
  function ReadShift(size, t) {
    var oI, oS, type = 0;
    switch (size) {
      case 1:
        oI = __readUInt8(this, this.l);
        break;
      case 2:
        oI = (t !== "i" ? __readUInt16LE : __readInt16LE)(this, this.l);
        break;
      case 4:
        oI = __readInt32LE(this, this.l);
        break;
      case 16:
        type = 2;
        oS = __hexlify(this, this.l, size);
    }
    this.l += size;
    if (type === 0) return oI;
    return oS;
  }
  var __writeUInt32LE = function(b, val, idx) {
    b[idx] = val & 255;
    b[idx + 1] = val >>> 8 & 255;
    b[idx + 2] = val >>> 16 & 255;
    b[idx + 3] = val >>> 24 & 255;
  };
  var __writeInt32LE = function(b, val, idx) {
    b[idx] = val & 255;
    b[idx + 1] = val >> 8 & 255;
    b[idx + 2] = val >> 16 & 255;
    b[idx + 3] = val >> 24 & 255;
  };
  function WriteShift(t, val, f) {
    var size = 0, i = 0;
    switch (f) {
      case "hex":
        for (; i < t; ++i) {
          this[this.l++] = parseInt(val.slice(2 * i, 2 * i + 2), 16) || 0;
        }
        return this;
      case "utf16le":
        var end = this.l + t;
        for (i = 0; i < Math.min(val.length, t); ++i) {
          var cc = val.charCodeAt(i);
          this[this.l++] = cc & 255;
          this[this.l++] = cc >> 8;
        }
        while (this.l < end) this[this.l++] = 0;
        return this;
    }
    switch (t) {
      case 1:
        size = 1;
        this[this.l] = val & 255;
        break;
      case 2:
        size = 2;
        this[this.l] = val & 255;
        val >>>= 8;
        this[this.l + 1] = val & 255;
        break;
      case 4:
        size = 4;
        __writeUInt32LE(this, val, this.l);
        break;
      case -4:
        size = 4;
        __writeInt32LE(this, val, this.l);
        break;
    }
    this.l += size;
    return this;
  }
  function CheckField(hexstr, fld) {
    var m = __hexlify(this, this.l, hexstr.length >> 1);
    if (m !== hexstr) throw new Error(fld + "Expected " + hexstr + " saw " + m);
    this.l += hexstr.length >> 1;
  }
  function prep_blob(blob, pos) {
    blob.l = pos;
    blob.read_shift = ReadShift;
    blob.chk = CheckField;
    blob.write_shift = WriteShift;
  }
  function new_buf(sz) {
    var o = new_raw_buf(sz);
    prep_blob(o, 0);
    return o;
  }
  var CRC32;
  (function(factory) {
    factory(CRC32 = {});
  })(function(CRC322) {
    CRC322.version = "1.2.0";
    function signed_crc_table() {
      var c2 = 0, table = new Array(256);
      for (var n = 0; n != 256; ++n) {
        c2 = n;
        c2 = c2 & 1 ? -306674912 ^ c2 >>> 1 : c2 >>> 1;
        c2 = c2 & 1 ? -306674912 ^ c2 >>> 1 : c2 >>> 1;
        c2 = c2 & 1 ? -306674912 ^ c2 >>> 1 : c2 >>> 1;
        c2 = c2 & 1 ? -306674912 ^ c2 >>> 1 : c2 >>> 1;
        c2 = c2 & 1 ? -306674912 ^ c2 >>> 1 : c2 >>> 1;
        c2 = c2 & 1 ? -306674912 ^ c2 >>> 1 : c2 >>> 1;
        c2 = c2 & 1 ? -306674912 ^ c2 >>> 1 : c2 >>> 1;
        c2 = c2 & 1 ? -306674912 ^ c2 >>> 1 : c2 >>> 1;
        table[n] = c2;
      }
      return typeof Int32Array !== "undefined" ? new Int32Array(table) : table;
    }
    var T = signed_crc_table();
    function crc32_bstr(bstr, seed) {
      var C = seed ^ -1, L = bstr.length - 1;
      for (var i = 0; i < L; ) {
        C = C >>> 8 ^ T[(C ^ bstr.charCodeAt(i++)) & 255];
        C = C >>> 8 ^ T[(C ^ bstr.charCodeAt(i++)) & 255];
      }
      if (i === L) C = C >>> 8 ^ T[(C ^ bstr.charCodeAt(i)) & 255];
      return C ^ -1;
    }
    function crc32_buf(buf, seed) {
      if (buf.length > 1e4) return crc32_buf_8(buf, seed);
      var C = seed ^ -1, L = buf.length - 3;
      for (var i = 0; i < L; ) {
        C = C >>> 8 ^ T[(C ^ buf[i++]) & 255];
        C = C >>> 8 ^ T[(C ^ buf[i++]) & 255];
        C = C >>> 8 ^ T[(C ^ buf[i++]) & 255];
        C = C >>> 8 ^ T[(C ^ buf[i++]) & 255];
      }
      while (i < L + 3) C = C >>> 8 ^ T[(C ^ buf[i++]) & 255];
      return C ^ -1;
    }
    function crc32_buf_8(buf, seed) {
      var C = seed ^ -1, L = buf.length - 7;
      for (var i = 0; i < L; ) {
        C = C >>> 8 ^ T[(C ^ buf[i++]) & 255];
        C = C >>> 8 ^ T[(C ^ buf[i++]) & 255];
        C = C >>> 8 ^ T[(C ^ buf[i++]) & 255];
        C = C >>> 8 ^ T[(C ^ buf[i++]) & 255];
        C = C >>> 8 ^ T[(C ^ buf[i++]) & 255];
        C = C >>> 8 ^ T[(C ^ buf[i++]) & 255];
        C = C >>> 8 ^ T[(C ^ buf[i++]) & 255];
        C = C >>> 8 ^ T[(C ^ buf[i++]) & 255];
      }
      while (i < L + 7) C = C >>> 8 ^ T[(C ^ buf[i++]) & 255];
      return C ^ -1;
    }
    function crc32_str(str, seed) {
      var C = seed ^ -1;
      for (var i = 0, L = str.length, c2, d; i < L; ) {
        c2 = str.charCodeAt(i++);
        if (c2 < 128) {
          C = C >>> 8 ^ T[(C ^ c2) & 255];
        } else if (c2 < 2048) {
          C = C >>> 8 ^ T[(C ^ (192 | c2 >> 6 & 31)) & 255];
          C = C >>> 8 ^ T[(C ^ (128 | c2 & 63)) & 255];
        } else if (c2 >= 55296 && c2 < 57344) {
          c2 = (c2 & 1023) + 64;
          d = str.charCodeAt(i++) & 1023;
          C = C >>> 8 ^ T[(C ^ (240 | c2 >> 8 & 7)) & 255];
          C = C >>> 8 ^ T[(C ^ (128 | c2 >> 2 & 63)) & 255];
          C = C >>> 8 ^ T[(C ^ (128 | d >> 6 & 15 | (c2 & 3) << 4)) & 255];
          C = C >>> 8 ^ T[(C ^ (128 | d & 63)) & 255];
        } else {
          C = C >>> 8 ^ T[(C ^ (224 | c2 >> 12 & 15)) & 255];
          C = C >>> 8 ^ T[(C ^ (128 | c2 >> 6 & 63)) & 255];
          C = C >>> 8 ^ T[(C ^ (128 | c2 & 63)) & 255];
        }
      }
      return C ^ -1;
    }
    CRC322.table = T;
    CRC322.bstr = crc32_bstr;
    CRC322.buf = crc32_buf;
    CRC322.str = crc32_str;
  });
  var CFB = function _CFB() {
    var exports$1 = {};
    exports$1.version = "1.2.0";
    function namecmp(l, r) {
      var L = l.split("/"), R = r.split("/");
      for (var i2 = 0, c2 = 0, Z = Math.min(L.length, R.length); i2 < Z; ++i2) {
        if (c2 = L[i2].length - R[i2].length) return c2;
        if (L[i2] != R[i2]) return L[i2] < R[i2] ? -1 : 1;
      }
      return L.length - R.length;
    }
    function dirname(p) {
      if (p.charAt(p.length - 1) == "/") return p.slice(0, -1).indexOf("/") === -1 ? p : dirname(p.slice(0, -1));
      var c2 = p.lastIndexOf("/");
      return c2 === -1 ? p : p.slice(0, c2 + 1);
    }
    function filename(p) {
      if (p.charAt(p.length - 1) == "/") return filename(p.slice(0, -1));
      var c2 = p.lastIndexOf("/");
      return c2 === -1 ? p : p.slice(c2 + 1);
    }
    function write_dos_date(buf, date) {
      if (typeof date === "string") date = new Date(date);
      var hms = date.getHours();
      hms = hms << 6 | date.getMinutes();
      hms = hms << 5 | date.getSeconds() >>> 1;
      buf.write_shift(2, hms);
      var ymd = date.getFullYear() - 1980;
      ymd = ymd << 4 | date.getMonth() + 1;
      ymd = ymd << 5 | date.getDate();
      buf.write_shift(2, ymd);
    }
    function parse_dos_date(buf) {
      var hms = buf.read_shift(2) & 65535;
      var ymd = buf.read_shift(2) & 65535;
      var val = /* @__PURE__ */ new Date();
      var d = ymd & 31;
      ymd >>>= 5;
      var m = ymd & 15;
      ymd >>>= 4;
      val.setMilliseconds(0);
      val.setFullYear(ymd + 1980);
      val.setMonth(m - 1);
      val.setDate(d);
      var S = hms & 31;
      hms >>>= 5;
      var M = hms & 63;
      hms >>>= 6;
      val.setHours(hms);
      val.setMinutes(M);
      val.setSeconds(S << 1);
      return val;
    }
    function parse_extra_field(blob) {
      prep_blob(blob, 0);
      var o = {};
      var flags = 0;
      while (blob.l <= blob.length - 4) {
        var type = blob.read_shift(2);
        var sz = blob.read_shift(2), tgt = blob.l + sz;
        var p = {};
        switch (type) {
          case 21589:
            {
              flags = blob.read_shift(1);
              if (flags & 1) p.mtime = blob.read_shift(4);
              if (sz > 5) {
                if (flags & 2) p.atime = blob.read_shift(4);
                if (flags & 4) p.ctime = blob.read_shift(4);
              }
              if (p.mtime) p.mt = new Date(p.mtime * 1e3);
            }
            break;
        }
        blob.l = tgt;
        o[type] = p;
      }
      return o;
    }
    var fs;
    function get_fs() {
      return fs || (fs = require$$0);
    }
    function parse2(file, options) {
      if (file[0] == 80 && file[1] == 75) return parse_zip(file, options);
      if ((file[0] | 32) == 109 && (file[1] | 32) == 105) return parse_mad(file, options);
      if (file.length < 512) throw new Error("CFB file size " + file.length + " < 512");
      var mver = 3;
      var ssz = 512;
      var nmfs = 0;
      var difat_sec_cnt = 0;
      var dir_start = 0;
      var minifat_start = 0;
      var difat_start = 0;
      var fat_addrs = [];
      var blob = file.slice(0, 512);
      prep_blob(blob, 0);
      var mv = check_get_mver(blob);
      mver = mv[0];
      switch (mver) {
        case 3:
          ssz = 512;
          break;
        case 4:
          ssz = 4096;
          break;
        case 0:
          if (mv[1] == 0) return parse_zip(file, options);
        default:
          throw new Error("Major Version: Expected 3 or 4 saw " + mver);
      }
      if (ssz !== 512) {
        blob = file.slice(0, ssz);
        prep_blob(
          blob,
          28
          /* blob.l */
        );
      }
      var header = file.slice(0, ssz);
      check_shifts(blob, mver);
      var dir_cnt = blob.read_shift(4, "i");
      if (mver === 3 && dir_cnt !== 0) throw new Error("# Directory Sectors: Expected 0 saw " + dir_cnt);
      blob.l += 4;
      dir_start = blob.read_shift(4, "i");
      blob.l += 4;
      blob.chk("00100000", "Mini Stream Cutoff Size: ");
      minifat_start = blob.read_shift(4, "i");
      nmfs = blob.read_shift(4, "i");
      difat_start = blob.read_shift(4, "i");
      difat_sec_cnt = blob.read_shift(4, "i");
      for (var q2 = -1, j = 0; j < 109; ++j) {
        q2 = blob.read_shift(4, "i");
        if (q2 < 0) break;
        fat_addrs[j] = q2;
      }
      var sectors = sectorify(file, ssz);
      sleuth_fat(difat_start, difat_sec_cnt, sectors, ssz, fat_addrs);
      var sector_list = make_sector_list(sectors, dir_start, fat_addrs, ssz);
      sector_list[dir_start].name = "!Directory";
      if (nmfs > 0 && minifat_start !== ENDOFCHAIN) sector_list[minifat_start].name = "!MiniFAT";
      sector_list[fat_addrs[0]].name = "!FAT";
      sector_list.fat_addrs = fat_addrs;
      sector_list.ssz = ssz;
      var files = {}, Paths = [], FileIndex = [], FullPaths = [];
      read_directory(dir_start, sector_list, sectors, Paths, nmfs, files, FileIndex, minifat_start);
      build_full_paths(FileIndex, FullPaths, Paths);
      Paths.shift();
      var o = {
        FileIndex,
        FullPaths
      };
      if (options && options.raw) o.raw = { header, sectors };
      return o;
    }
    function check_get_mver(blob) {
      if (blob[blob.l] == 80 && blob[blob.l + 1] == 75) return [0, 0];
      blob.chk(HEADER_SIGNATURE, "Header Signature: ");
      blob.l += 16;
      var mver = blob.read_shift(2, "u");
      return [blob.read_shift(2, "u"), mver];
    }
    function check_shifts(blob, mver) {
      var shift = 9;
      blob.l += 2;
      switch (shift = blob.read_shift(2)) {
        case 9:
          if (mver != 3) throw new Error("Sector Shift: Expected 9 saw " + shift);
          break;
        case 12:
          if (mver != 4) throw new Error("Sector Shift: Expected 12 saw " + shift);
          break;
        default:
          throw new Error("Sector Shift: Expected 9 or 12 saw " + shift);
      }
      blob.chk("0600", "Mini Sector Shift: ");
      blob.chk("000000000000", "Reserved: ");
    }
    function sectorify(file, ssz) {
      var nsectors = Math.ceil(file.length / ssz) - 1;
      var sectors = [];
      for (var i2 = 1; i2 < nsectors; ++i2) sectors[i2 - 1] = file.slice(i2 * ssz, (i2 + 1) * ssz);
      sectors[nsectors - 1] = file.slice(nsectors * ssz);
      return sectors;
    }
    function build_full_paths(FI, FP, Paths) {
      var i2 = 0, L = 0, R = 0, C = 0, j = 0, pl = Paths.length;
      var dad = [], q2 = [];
      for (; i2 < pl; ++i2) {
        dad[i2] = q2[i2] = i2;
        FP[i2] = Paths[i2];
      }
      for (; j < q2.length; ++j) {
        i2 = q2[j];
        L = FI[i2].L;
        R = FI[i2].R;
        C = FI[i2].C;
        if (dad[i2] === i2) {
          if (L !== -1 && dad[L] !== L) dad[i2] = dad[L];
          if (R !== -1 && dad[R] !== R) dad[i2] = dad[R];
        }
        if (C !== -1) dad[C] = i2;
        if (L !== -1 && i2 != dad[i2]) {
          dad[L] = dad[i2];
          if (q2.lastIndexOf(L) < j) q2.push(L);
        }
        if (R !== -1 && i2 != dad[i2]) {
          dad[R] = dad[i2];
          if (q2.lastIndexOf(R) < j) q2.push(R);
        }
      }
      for (i2 = 1; i2 < pl; ++i2) if (dad[i2] === i2) {
        if (R !== -1 && dad[R] !== R) dad[i2] = dad[R];
        else if (L !== -1 && dad[L] !== L) dad[i2] = dad[L];
      }
      for (i2 = 1; i2 < pl; ++i2) {
        if (FI[i2].type === 0) continue;
        j = i2;
        if (j != dad[j]) do {
          j = dad[j];
          FP[i2] = FP[j] + "/" + FP[i2];
        } while (j !== 0 && -1 !== dad[j] && j != dad[j]);
        dad[i2] = -1;
      }
      FP[0] += "/";
      for (i2 = 1; i2 < pl; ++i2) {
        if (FI[i2].type !== 2) FP[i2] += "/";
      }
    }
    function get_mfat_entry(entry, payload, mini) {
      var start = entry.start, size = entry.size;
      var o = [];
      var idx = start;
      while (mini && size > 0 && idx >= 0) {
        o.push(payload.slice(idx * MSSZ, idx * MSSZ + MSSZ));
        size -= MSSZ;
        idx = __readInt32LE(mini, idx * 4);
      }
      if (o.length === 0) return new_buf(0);
      return bconcat(o).slice(0, entry.size);
    }
    function sleuth_fat(idx, cnt, sectors, ssz, fat_addrs) {
      var q2 = ENDOFCHAIN;
      if (idx === ENDOFCHAIN) {
        if (cnt !== 0) throw new Error("DIFAT chain shorter than expected");
      } else if (idx !== -1) {
        var sector = sectors[idx], m = (ssz >>> 2) - 1;
        if (!sector) return;
        for (var i2 = 0; i2 < m; ++i2) {
          if ((q2 = __readInt32LE(sector, i2 * 4)) === ENDOFCHAIN) break;
          fat_addrs.push(q2);
        }
        sleuth_fat(__readInt32LE(sector, ssz - 4), cnt - 1, sectors, ssz, fat_addrs);
      }
    }
    function get_sector_list(sectors, start, fat_addrs, ssz, chkd) {
      var buf = [], buf_chain = [];
      if (!chkd) chkd = [];
      var modulus = ssz - 1, j = 0, jj = 0;
      for (j = start; j >= 0; ) {
        chkd[j] = true;
        buf[buf.length] = j;
        buf_chain.push(sectors[j]);
        var addr = fat_addrs[Math.floor(j * 4 / ssz)];
        jj = j * 4 & modulus;
        if (ssz < 4 + jj) throw new Error("FAT boundary crossed: " + j + " 4 " + ssz);
        if (!sectors[addr]) break;
        j = __readInt32LE(sectors[addr], jj);
      }
      return { nodes: buf, data: __toBuffer([buf_chain]) };
    }
    function make_sector_list(sectors, dir_start, fat_addrs, ssz) {
      var sl = sectors.length, sector_list = [];
      var chkd = [], buf = [], buf_chain = [];
      var modulus = ssz - 1, i2 = 0, j = 0, k = 0, jj = 0;
      for (i2 = 0; i2 < sl; ++i2) {
        buf = [];
        k = i2 + dir_start;
        if (k >= sl) k -= sl;
        if (chkd[k]) continue;
        buf_chain = [];
        var seen = [];
        for (j = k; j >= 0; ) {
          seen[j] = true;
          chkd[j] = true;
          buf[buf.length] = j;
          buf_chain.push(sectors[j]);
          var addr = fat_addrs[Math.floor(j * 4 / ssz)];
          jj = j * 4 & modulus;
          if (ssz < 4 + jj) throw new Error("FAT boundary crossed: " + j + " 4 " + ssz);
          if (!sectors[addr]) break;
          j = __readInt32LE(sectors[addr], jj);
          if (seen[j]) break;
        }
        sector_list[k] = { nodes: buf, data: __toBuffer([buf_chain]) };
      }
      return sector_list;
    }
    function read_directory(dir_start, sector_list, sectors, Paths, nmfs, files, FileIndex, mini) {
      var minifat_store = 0, pl = Paths.length ? 2 : 0;
      var sector = sector_list[dir_start].data;
      var i2 = 0, namelen = 0, name;
      for (; i2 < sector.length; i2 += 128) {
        var blob = sector.slice(i2, i2 + 128);
        prep_blob(blob, 64);
        namelen = blob.read_shift(2);
        name = __utf16le(blob, 0, namelen - pl);
        Paths.push(name);
        var o = {
          name,
          type: blob.read_shift(1),
          color: blob.read_shift(1),
          L: blob.read_shift(4, "i"),
          R: blob.read_shift(4, "i"),
          C: blob.read_shift(4, "i"),
          clsid: blob.read_shift(16),
          state: blob.read_shift(4, "i"),
          start: 0,
          size: 0
        };
        var ctime = blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2);
        if (ctime !== 0) o.ct = read_date(blob, blob.l - 8);
        var mtime = blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2);
        if (mtime !== 0) o.mt = read_date(blob, blob.l - 8);
        o.start = blob.read_shift(4, "i");
        o.size = blob.read_shift(4, "i");
        if (o.size < 0 && o.start < 0) {
          o.size = o.type = 0;
          o.start = ENDOFCHAIN;
          o.name = "";
        }
        if (o.type === 5) {
          minifat_store = o.start;
          if (nmfs > 0 && minifat_store !== ENDOFCHAIN) sector_list[minifat_store].name = "!StreamData";
        } else if (o.size >= 4096) {
          o.storage = "fat";
          if (sector_list[o.start] === void 0) sector_list[o.start] = get_sector_list(sectors, o.start, sector_list.fat_addrs, sector_list.ssz);
          sector_list[o.start].name = o.name;
          o.content = sector_list[o.start].data.slice(0, o.size);
        } else {
          o.storage = "minifat";
          if (o.size < 0) o.size = 0;
          else if (minifat_store !== ENDOFCHAIN && o.start !== ENDOFCHAIN && sector_list[minifat_store]) {
            o.content = get_mfat_entry(o, sector_list[minifat_store].data, (sector_list[mini] || {}).data);
          }
        }
        if (o.content) prep_blob(o.content, 0);
        files[name] = o;
        FileIndex.push(o);
      }
    }
    function read_date(blob, offset) {
      return new Date((__readUInt32LE(blob, offset + 4) / 1e7 * Math.pow(2, 32) + __readUInt32LE(blob, offset) / 1e7 - 11644473600) * 1e3);
    }
    function read_file(filename2, options) {
      get_fs();
      return parse2(fs.readFileSync(filename2), options);
    }
    function read(blob, options) {
      switch (options && options.type || "base64") {
        case "file":
          return read_file(blob, options);
        case "base64":
          return parse2(s2a(Base64.decode(blob)), options);
        case "binary":
          return parse2(s2a(blob), options);
      }
      return parse2(blob, options);
    }
    function init_cfb(cfb2, opts) {
      var o = opts || {}, root = o.root || "Root Entry";
      if (!cfb2.FullPaths) cfb2.FullPaths = [];
      if (!cfb2.FileIndex) cfb2.FileIndex = [];
      if (cfb2.FullPaths.length !== cfb2.FileIndex.length) throw new Error("inconsistent CFB structure");
      if (cfb2.FullPaths.length === 0) {
        cfb2.FullPaths[0] = root + "/";
        cfb2.FileIndex[0] = { name: root, type: 5 };
      }
      if (o.CLSID) cfb2.FileIndex[0].clsid = o.CLSID;
      seed_cfb(cfb2);
    }
    function seed_cfb(cfb2) {
      var nm = "Sh33tJ5";
      if (CFB.find(cfb2, "/" + nm)) return;
      var p = new_buf(4);
      p[0] = 55;
      p[1] = p[3] = 50;
      p[2] = 54;
      cfb2.FileIndex.push({ name: nm, type: 2, content: p, size: 4, L: 69, R: 69, C: 69 });
      cfb2.FullPaths.push(cfb2.FullPaths[0] + nm);
      rebuild_cfb(cfb2);
    }
    function rebuild_cfb(cfb2, f) {
      init_cfb(cfb2);
      var gc = false, s = false;
      for (var i2 = cfb2.FullPaths.length - 1; i2 >= 0; --i2) {
        var _file = cfb2.FileIndex[i2];
        switch (_file.type) {
          case 0:
            if (s) gc = true;
            else {
              cfb2.FileIndex.pop();
              cfb2.FullPaths.pop();
            }
            break;
          case 1:
          case 2:
          case 5:
            s = true;
            if (isNaN(_file.R * _file.L * _file.C)) gc = true;
            if (_file.R > -1 && _file.L > -1 && _file.R == _file.L) gc = true;
            break;
          default:
            gc = true;
            break;
        }
      }
      if (!gc && !f) return;
      var now = new Date(1987, 1, 19), j = 0;
      var data = [];
      for (i2 = 0; i2 < cfb2.FullPaths.length; ++i2) {
        if (cfb2.FileIndex[i2].type === 0) continue;
        data.push([cfb2.FullPaths[i2], cfb2.FileIndex[i2]]);
      }
      for (i2 = 0; i2 < data.length; ++i2) {
        var dad = dirname(data[i2][0]);
        s = false;
        for (j = 0; j < data.length; ++j) if (data[j][0] === dad) s = true;
        if (!s) data.push([dad, {
          name: filename(dad).replace("/", ""),
          type: 1,
          clsid: HEADER_CLSID,
          ct: now,
          mt: now,
          content: null
        }]);
      }
      data.sort(function(x, y) {
        return namecmp(x[0], y[0]);
      });
      cfb2.FullPaths = [];
      cfb2.FileIndex = [];
      for (i2 = 0; i2 < data.length; ++i2) {
        cfb2.FullPaths[i2] = data[i2][0];
        cfb2.FileIndex[i2] = data[i2][1];
      }
      for (i2 = 0; i2 < data.length; ++i2) {
        var elt = cfb2.FileIndex[i2];
        var nm = cfb2.FullPaths[i2];
        elt.name = filename(nm).replace("/", "");
        elt.L = elt.R = elt.C = -(elt.color = 1);
        elt.size = elt.content ? elt.content.length : 0;
        elt.start = 0;
        elt.clsid = elt.clsid || HEADER_CLSID;
        if (i2 === 0) {
          elt.C = data.length > 1 ? 1 : -1;
          elt.size = 0;
          elt.type = 5;
        } else if (nm.slice(-1) == "/") {
          for (j = i2 + 1; j < data.length; ++j) if (dirname(cfb2.FullPaths[j]) == nm) break;
          elt.C = j >= data.length ? -1 : j;
          for (j = i2 + 1; j < data.length; ++j) if (dirname(cfb2.FullPaths[j]) == dirname(nm)) break;
          elt.R = j >= data.length ? -1 : j;
          elt.type = 1;
        } else {
          if (dirname(cfb2.FullPaths[i2 + 1] || "") == dirname(nm)) elt.R = i2 + 1;
          elt.type = 2;
        }
      }
    }
    function _write(cfb2, options) {
      var _opts = options || {};
      if (_opts.fileType == "mad") return write_mad(cfb2, _opts);
      rebuild_cfb(cfb2);
      switch (_opts.fileType) {
        case "zip":
          return write_zip(cfb2, _opts);
      }
      var L = function(cfb3) {
        var mini_size = 0, fat_size = 0;
        for (var i3 = 0; i3 < cfb3.FileIndex.length; ++i3) {
          var file2 = cfb3.FileIndex[i3];
          if (!file2.content) continue;
          var flen2 = file2.content.length;
          if (flen2 > 0) {
            if (flen2 < 4096) mini_size += flen2 + 63 >> 6;
            else fat_size += flen2 + 511 >> 9;
          }
        }
        var dir_cnt = cfb3.FullPaths.length + 3 >> 2;
        var mini_cnt = mini_size + 7 >> 3;
        var mfat_cnt = mini_size + 127 >> 7;
        var fat_base = mini_cnt + fat_size + dir_cnt + mfat_cnt;
        var fat_cnt = fat_base + 127 >> 7;
        var difat_cnt = fat_cnt <= 109 ? 0 : Math.ceil((fat_cnt - 109) / 127);
        while (fat_base + fat_cnt + difat_cnt + 127 >> 7 > fat_cnt) difat_cnt = ++fat_cnt <= 109 ? 0 : Math.ceil((fat_cnt - 109) / 127);
        var L2 = [1, difat_cnt, fat_cnt, mfat_cnt, dir_cnt, fat_size, mini_size, 0];
        cfb3.FileIndex[0].size = mini_size << 6;
        L2[7] = (cfb3.FileIndex[0].start = L2[0] + L2[1] + L2[2] + L2[3] + L2[4] + L2[5]) + (L2[6] + 7 >> 3);
        return L2;
      }(cfb2);
      var o = new_buf(L[7] << 9);
      var i2 = 0, T = 0;
      {
        for (i2 = 0; i2 < 8; ++i2) o.write_shift(1, HEADER_SIG[i2]);
        for (i2 = 0; i2 < 8; ++i2) o.write_shift(2, 0);
        o.write_shift(2, 62);
        o.write_shift(2, 3);
        o.write_shift(2, 65534);
        o.write_shift(2, 9);
        o.write_shift(2, 6);
        for (i2 = 0; i2 < 3; ++i2) o.write_shift(2, 0);
        o.write_shift(4, 0);
        o.write_shift(4, L[2]);
        o.write_shift(4, L[0] + L[1] + L[2] + L[3] - 1);
        o.write_shift(4, 0);
        o.write_shift(4, 1 << 12);
        o.write_shift(4, L[3] ? L[0] + L[1] + L[2] - 1 : ENDOFCHAIN);
        o.write_shift(4, L[3]);
        o.write_shift(-4, L[1] ? L[0] - 1 : ENDOFCHAIN);
        o.write_shift(4, L[1]);
        for (i2 = 0; i2 < 109; ++i2) o.write_shift(-4, i2 < L[2] ? L[1] + i2 : -1);
      }
      if (L[1]) {
        for (T = 0; T < L[1]; ++T) {
          for (; i2 < 236 + T * 127; ++i2) o.write_shift(-4, i2 < L[2] ? L[1] + i2 : -1);
          o.write_shift(-4, T === L[1] - 1 ? ENDOFCHAIN : T + 1);
        }
      }
      var chainit = function(w) {
        for (T += w; i2 < T - 1; ++i2) o.write_shift(-4, i2 + 1);
        if (w) {
          ++i2;
          o.write_shift(-4, ENDOFCHAIN);
        }
      };
      T = i2 = 0;
      for (T += L[1]; i2 < T; ++i2) o.write_shift(-4, consts.DIFSECT);
      for (T += L[2]; i2 < T; ++i2) o.write_shift(-4, consts.FATSECT);
      chainit(L[3]);
      chainit(L[4]);
      var j = 0, flen = 0;
      var file = cfb2.FileIndex[0];
      for (; j < cfb2.FileIndex.length; ++j) {
        file = cfb2.FileIndex[j];
        if (!file.content) continue;
        flen = file.content.length;
        if (flen < 4096) continue;
        file.start = T;
        chainit(flen + 511 >> 9);
      }
      chainit(L[6] + 7 >> 3);
      while (o.l & 511) o.write_shift(-4, consts.ENDOFCHAIN);
      T = i2 = 0;
      for (j = 0; j < cfb2.FileIndex.length; ++j) {
        file = cfb2.FileIndex[j];
        if (!file.content) continue;
        flen = file.content.length;
        if (!flen || flen >= 4096) continue;
        file.start = T;
        chainit(flen + 63 >> 6);
      }
      while (o.l & 511) o.write_shift(-4, consts.ENDOFCHAIN);
      for (i2 = 0; i2 < L[4] << 2; ++i2) {
        var nm = cfb2.FullPaths[i2];
        if (!nm || nm.length === 0) {
          for (j = 0; j < 17; ++j) o.write_shift(4, 0);
          for (j = 0; j < 3; ++j) o.write_shift(4, -1);
          for (j = 0; j < 12; ++j) o.write_shift(4, 0);
          continue;
        }
        file = cfb2.FileIndex[i2];
        if (i2 === 0) file.start = file.size ? file.start - 1 : ENDOFCHAIN;
        var _nm = i2 === 0 && _opts.root || file.name;
        flen = 2 * (_nm.length + 1);
        o.write_shift(64, _nm, "utf16le");
        o.write_shift(2, flen);
        o.write_shift(1, file.type);
        o.write_shift(1, file.color);
        o.write_shift(-4, file.L);
        o.write_shift(-4, file.R);
        o.write_shift(-4, file.C);
        if (!file.clsid) for (j = 0; j < 4; ++j) o.write_shift(4, 0);
        else o.write_shift(16, file.clsid, "hex");
        o.write_shift(4, file.state || 0);
        o.write_shift(4, 0);
        o.write_shift(4, 0);
        o.write_shift(4, 0);
        o.write_shift(4, 0);
        o.write_shift(4, file.start);
        o.write_shift(4, file.size);
        o.write_shift(4, 0);
      }
      for (i2 = 1; i2 < cfb2.FileIndex.length; ++i2) {
        file = cfb2.FileIndex[i2];
        if (file.size >= 4096) {
          o.l = file.start + 1 << 9;
          for (j = 0; j < file.size; ++j) o.write_shift(1, file.content[j]);
          for (; j & 511; ++j) o.write_shift(1, 0);
        }
      }
      for (i2 = 1; i2 < cfb2.FileIndex.length; ++i2) {
        file = cfb2.FileIndex[i2];
        if (file.size > 0 && file.size < 4096) {
          for (j = 0; j < file.size; ++j) o.write_shift(1, file.content[j]);
          for (; j & 63; ++j) o.write_shift(1, 0);
        }
      }
      while (o.l < o.length) o.write_shift(1, 0);
      return o;
    }
    function find(cfb2, path) {
      var UCFullPaths = cfb2.FullPaths.map(function(x) {
        return x.toUpperCase();
      });
      var UCPaths = UCFullPaths.map(function(x) {
        var y = x.split("/");
        return y[y.length - (x.slice(-1) == "/" ? 2 : 1)];
      });
      var k = false;
      if (path.charCodeAt(0) === 47) {
        k = true;
        path = UCFullPaths[0].slice(0, -1) + path;
      } else k = path.indexOf("/") !== -1;
      var UCPath = path.toUpperCase();
      var w = k === true ? UCFullPaths.indexOf(UCPath) : UCPaths.indexOf(UCPath);
      if (w !== -1) return cfb2.FileIndex[w];
      var m = !UCPath.match(chr1);
      UCPath = UCPath.replace(chr0, "");
      if (m) UCPath = UCPath.replace(chr1, "!");
      for (w = 0; w < UCFullPaths.length; ++w) {
        if ((m ? UCFullPaths[w].replace(chr1, "!") : UCFullPaths[w]).replace(chr0, "") == UCPath) return cfb2.FileIndex[w];
        if ((m ? UCPaths[w].replace(chr1, "!") : UCPaths[w]).replace(chr0, "") == UCPath) return cfb2.FileIndex[w];
      }
      return null;
    }
    var MSSZ = 64;
    var ENDOFCHAIN = -2;
    var HEADER_SIGNATURE = "d0cf11e0a1b11ae1";
    var HEADER_SIG = [208, 207, 17, 224, 161, 177, 26, 225];
    var HEADER_CLSID = "00000000000000000000000000000000";
    var consts = {
      /* 2.1 Compund File Sector Numbers and Types */
      MAXREGSECT: -6,
      DIFSECT: -4,
      FATSECT: -3,
      ENDOFCHAIN,
      FREESECT: -1,
      /* 2.2 Compound File Header */
      HEADER_SIGNATURE,
      HEADER_MINOR_VERSION: "3e00",
      MAXREGSID: -6,
      NOSTREAM: -1,
      HEADER_CLSID,
      /* 2.6.1 Compound File Directory Entry */
      EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
    };
    function write_file(cfb2, filename2, options) {
      get_fs();
      var o = _write(cfb2, options);
      fs.writeFileSync(filename2, o);
    }
    function a2s(o) {
      var out = new Array(o.length);
      for (var i2 = 0; i2 < o.length; ++i2) out[i2] = String.fromCharCode(o[i2]);
      return out.join("");
    }
    function write(cfb2, options) {
      var o = _write(cfb2, options);
      switch (options && options.type || "buffer") {
        case "file":
          get_fs();
          fs.writeFileSync(options.filename, o);
          return o;
        case "binary":
          return typeof o == "string" ? o : a2s(o);
        case "base64":
          return Base64.encode(typeof o == "string" ? o : a2s(o));
        case "buffer":
          if (has_buf) return Buffer.isBuffer(o) ? o : Buffer_from(o);
        case "array":
          return typeof o == "string" ? s2a(o) : o;
      }
      return o;
    }
    var _zlib;
    function use_zlib(zlib) {
      try {
        var InflateRaw = zlib.InflateRaw;
        var InflRaw = new InflateRaw();
        InflRaw._processChunk(new Uint8Array([3, 0]), InflRaw._finishFlushFlag);
        if (InflRaw.bytesRead) _zlib = zlib;
        else throw new Error("zlib does not expose bytesRead");
      } catch (e) {
        console.error("cannot use native zlib: " + (e.message || e));
      }
    }
    function _inflateRawSync(payload, usz) {
      if (!_zlib) return _inflate(payload, usz);
      var InflateRaw = _zlib.InflateRaw;
      var InflRaw = new InflateRaw();
      var out = InflRaw._processChunk(payload.slice(payload.l), InflRaw._finishFlushFlag);
      payload.l += InflRaw.bytesRead;
      return out;
    }
    function _deflateRawSync(payload) {
      return _zlib ? _zlib.deflateRawSync(payload) : _deflate(payload);
    }
    var CLEN_ORDER = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    var LEN_LN = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258];
    var DST_LN = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
    function bit_swap_8(n) {
      var t = (n << 1 | n << 11) & 139536 | (n << 5 | n << 15) & 558144;
      return (t >> 16 | t >> 8 | t) & 255;
    }
    var use_typed_arrays = typeof Uint8Array !== "undefined";
    var bitswap8 = use_typed_arrays ? new Uint8Array(1 << 8) : [];
    for (var q = 0; q < 1 << 8; ++q) bitswap8[q] = bit_swap_8(q);
    function bit_swap_n(n, b) {
      var rev = bitswap8[n & 255];
      if (b <= 8) return rev >>> 8 - b;
      rev = rev << 8 | bitswap8[n >> 8 & 255];
      if (b <= 16) return rev >>> 16 - b;
      rev = rev << 8 | bitswap8[n >> 16 & 255];
      return rev >>> 24 - b;
    }
    function read_bits_2(buf, bl) {
      var w = bl & 7, h = bl >>> 3;
      return (buf[h] | (w <= 6 ? 0 : buf[h + 1] << 8)) >>> w & 3;
    }
    function read_bits_3(buf, bl) {
      var w = bl & 7, h = bl >>> 3;
      return (buf[h] | (w <= 5 ? 0 : buf[h + 1] << 8)) >>> w & 7;
    }
    function read_bits_4(buf, bl) {
      var w = bl & 7, h = bl >>> 3;
      return (buf[h] | (w <= 4 ? 0 : buf[h + 1] << 8)) >>> w & 15;
    }
    function read_bits_5(buf, bl) {
      var w = bl & 7, h = bl >>> 3;
      return (buf[h] | (w <= 3 ? 0 : buf[h + 1] << 8)) >>> w & 31;
    }
    function read_bits_7(buf, bl) {
      var w = bl & 7, h = bl >>> 3;
      return (buf[h] | (w <= 1 ? 0 : buf[h + 1] << 8)) >>> w & 127;
    }
    function read_bits_n(buf, bl, n) {
      var w = bl & 7, h = bl >>> 3, f = (1 << n) - 1;
      var v = buf[h] >>> w;
      if (n < 8 - w) return v & f;
      v |= buf[h + 1] << 8 - w;
      if (n < 16 - w) return v & f;
      v |= buf[h + 2] << 16 - w;
      if (n < 24 - w) return v & f;
      v |= buf[h + 3] << 24 - w;
      return v & f;
    }
    function realloc(b, sz) {
      var L = b.length, M = 2 * L > sz ? 2 * L : sz + 5, i2 = 0;
      if (L >= sz) return b;
      if (has_buf) {
        var o = new_unsafe_buf(M);
        if (b.copy) b.copy(o);
        else for (; i2 < b.length; ++i2) o[i2] = b[i2];
        return o;
      } else if (use_typed_arrays) {
        var a = new Uint8Array(M);
        if (a.set) a.set(b);
        else for (; i2 < b.length; ++i2) a[i2] = b[i2];
        return a;
      }
      b.length = M;
      return b;
    }
    function zero_fill_array(n) {
      var o = new Array(n);
      for (var i2 = 0; i2 < n; ++i2) o[i2] = 0;
      return o;
    }
    var _deflate = /* @__PURE__ */ function() {
      var _deflateRaw = /* @__PURE__ */ function() {
        return function deflateRaw2(data, out) {
          var boff = 0;
          while (boff < data.length) {
            var L = Math.min(65535, data.length - boff);
            var h = boff + L == data.length;
            out.write_shift(1, +h);
            out.write_shift(2, L);
            out.write_shift(2, ~L & 65535);
            while (L-- > 0) out[out.l++] = data[boff++];
          }
          return out.l;
        };
      }();
      return function(data) {
        var buf = new_buf(50 + Math.floor(data.length * 1.1));
        var off = _deflateRaw(data, buf);
        return buf.slice(0, off);
      };
    }();
    function build_tree2(clens, cmap, MAX) {
      var maxlen = 1, w = 0, i2 = 0, j = 0, ccode = 0, L = clens.length;
      var bl_count = use_typed_arrays ? new Uint16Array(32) : zero_fill_array(32);
      for (i2 = 0; i2 < 32; ++i2) bl_count[i2] = 0;
      for (i2 = L; i2 < MAX; ++i2) clens[i2] = 0;
      L = clens.length;
      var ctree = use_typed_arrays ? new Uint16Array(L) : zero_fill_array(L);
      for (i2 = 0; i2 < L; ++i2) {
        bl_count[w = clens[i2]]++;
        if (maxlen < w) maxlen = w;
        ctree[i2] = 0;
      }
      bl_count[0] = 0;
      for (i2 = 1; i2 <= maxlen; ++i2) bl_count[i2 + 16] = ccode = ccode + bl_count[i2 - 1] << 1;
      for (i2 = 0; i2 < L; ++i2) {
        ccode = clens[i2];
        if (ccode != 0) ctree[i2] = bl_count[ccode + 16]++;
      }
      var cleni = 0;
      for (i2 = 0; i2 < L; ++i2) {
        cleni = clens[i2];
        if (cleni != 0) {
          ccode = bit_swap_n(ctree[i2], maxlen) >> maxlen - cleni;
          for (j = (1 << maxlen + 4 - cleni) - 1; j >= 0; --j)
            cmap[ccode | j << cleni] = cleni & 15 | i2 << 4;
        }
      }
      return maxlen;
    }
    var fix_lmap = use_typed_arrays ? new Uint16Array(512) : zero_fill_array(512);
    var fix_dmap = use_typed_arrays ? new Uint16Array(32) : zero_fill_array(32);
    if (!use_typed_arrays) {
      for (var i = 0; i < 512; ++i) fix_lmap[i] = 0;
      for (i = 0; i < 32; ++i) fix_dmap[i] = 0;
    }
    (function() {
      var dlens = [];
      var i2 = 0;
      for (; i2 < 32; i2++) dlens.push(5);
      build_tree2(dlens, fix_dmap, 32);
      var clens = [];
      i2 = 0;
      for (; i2 <= 143; i2++) clens.push(8);
      for (; i2 <= 255; i2++) clens.push(9);
      for (; i2 <= 279; i2++) clens.push(7);
      for (; i2 <= 287; i2++) clens.push(8);
      build_tree2(clens, fix_lmap, 288);
    })();
    var dyn_lmap = use_typed_arrays ? new Uint16Array(32768) : zero_fill_array(32768);
    var dyn_dmap = use_typed_arrays ? new Uint16Array(32768) : zero_fill_array(32768);
    var dyn_cmap = use_typed_arrays ? new Uint16Array(128) : zero_fill_array(128);
    var dyn_len_1 = 1, dyn_len_2 = 1;
    function dyn(data, boff) {
      var _HLIT = read_bits_5(data, boff) + 257;
      boff += 5;
      var _HDIST = read_bits_5(data, boff) + 1;
      boff += 5;
      var _HCLEN = read_bits_4(data, boff) + 4;
      boff += 4;
      var w = 0;
      var clens = use_typed_arrays ? new Uint8Array(19) : zero_fill_array(19);
      var ctree = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var maxlen = 1;
      var bl_count = use_typed_arrays ? new Uint8Array(8) : zero_fill_array(8);
      var next_code = use_typed_arrays ? new Uint8Array(8) : zero_fill_array(8);
      var L = clens.length;
      for (var i2 = 0; i2 < _HCLEN; ++i2) {
        clens[CLEN_ORDER[i2]] = w = read_bits_3(data, boff);
        if (maxlen < w) maxlen = w;
        bl_count[w]++;
        boff += 3;
      }
      var ccode = 0;
      bl_count[0] = 0;
      for (i2 = 1; i2 <= maxlen; ++i2) next_code[i2] = ccode = ccode + bl_count[i2 - 1] << 1;
      for (i2 = 0; i2 < L; ++i2) if ((ccode = clens[i2]) != 0) ctree[i2] = next_code[ccode]++;
      var cleni = 0;
      for (i2 = 0; i2 < L; ++i2) {
        cleni = clens[i2];
        if (cleni != 0) {
          ccode = bitswap8[ctree[i2]] >> 8 - cleni;
          for (var j = (1 << 7 - cleni) - 1; j >= 0; --j) dyn_cmap[ccode | j << cleni] = cleni & 7 | i2 << 3;
        }
      }
      var hcodes = [];
      maxlen = 1;
      for (; hcodes.length < _HLIT + _HDIST; ) {
        ccode = dyn_cmap[read_bits_7(data, boff)];
        boff += ccode & 7;
        switch (ccode >>>= 3) {
          case 16:
            w = 3 + read_bits_2(data, boff);
            boff += 2;
            ccode = hcodes[hcodes.length - 1];
            while (w-- > 0) hcodes.push(ccode);
            break;
          case 17:
            w = 3 + read_bits_3(data, boff);
            boff += 3;
            while (w-- > 0) hcodes.push(0);
            break;
          case 18:
            w = 11 + read_bits_7(data, boff);
            boff += 7;
            while (w-- > 0) hcodes.push(0);
            break;
          default:
            hcodes.push(ccode);
            if (maxlen < ccode) maxlen = ccode;
            break;
        }
      }
      var h1 = hcodes.slice(0, _HLIT), h2 = hcodes.slice(_HLIT);
      for (i2 = _HLIT; i2 < 286; ++i2) h1[i2] = 0;
      for (i2 = _HDIST; i2 < 30; ++i2) h2[i2] = 0;
      dyn_len_1 = build_tree2(h1, dyn_lmap, 286);
      dyn_len_2 = build_tree2(h2, dyn_dmap, 30);
      return boff;
    }
    function inflate2(data, usz) {
      if (data[0] == 3 && !(data[1] & 3)) {
        return [new_raw_buf(usz), 2];
      }
      var boff = 0;
      var header = 0;
      var outbuf = new_unsafe_buf(usz ? usz : 1 << 18);
      var woff = 0;
      var OL = outbuf.length >>> 0;
      var max_len_1 = 0, max_len_2 = 0;
      while ((header & 1) == 0) {
        header = read_bits_3(data, boff);
        boff += 3;
        if (header >>> 1 == 0) {
          if (boff & 7) boff += 8 - (boff & 7);
          var sz = data[boff >>> 3] | data[(boff >>> 3) + 1] << 8;
          boff += 32;
          if (!usz && OL < woff + sz) {
            outbuf = realloc(outbuf, woff + sz);
            OL = outbuf.length;
          }
          if (typeof data.copy === "function") {
            data.copy(outbuf, woff, boff >>> 3, (boff >>> 3) + sz);
            woff += sz;
            boff += 8 * sz;
          } else while (sz-- > 0) {
            outbuf[woff++] = data[boff >>> 3];
            boff += 8;
          }
          continue;
        } else if (header >>> 1 == 1) {
          max_len_1 = 9;
          max_len_2 = 5;
        } else {
          boff = dyn(data, boff);
          max_len_1 = dyn_len_1;
          max_len_2 = dyn_len_2;
        }
        if (!usz && OL < woff + 32767) {
          outbuf = realloc(outbuf, woff + 32767);
          OL = outbuf.length;
        }
        for (; ; ) {
          var bits = read_bits_n(data, boff, max_len_1);
          var code = header >>> 1 == 1 ? fix_lmap[bits] : dyn_lmap[bits];
          boff += code & 15;
          code >>>= 4;
          if ((code >>> 8 & 255) === 0) outbuf[woff++] = code;
          else if (code == 256) break;
          else {
            code -= 257;
            var len_eb = code < 8 ? 0 : code - 4 >> 2;
            if (len_eb > 5) len_eb = 0;
            var tgt = woff + LEN_LN[code];
            if (len_eb > 0) {
              tgt += read_bits_n(data, boff, len_eb);
              boff += len_eb;
            }
            bits = read_bits_n(data, boff, max_len_2);
            code = header >>> 1 == 1 ? fix_dmap[bits] : dyn_dmap[bits];
            boff += code & 15;
            code >>>= 4;
            var dst_eb = code < 4 ? 0 : code - 2 >> 1;
            var dst = DST_LN[code];
            if (dst_eb > 0) {
              dst += read_bits_n(data, boff, dst_eb);
              boff += dst_eb;
            }
            if (!usz && OL < tgt) {
              outbuf = realloc(outbuf, tgt);
              OL = outbuf.length;
            }
            while (woff < tgt) {
              outbuf[woff] = outbuf[woff - dst];
              ++woff;
            }
          }
        }
      }
      return [usz ? outbuf : outbuf.slice(0, woff), boff + 7 >>> 3];
    }
    function _inflate(payload, usz) {
      var data = payload.slice(payload.l || 0);
      var out = inflate2(data, usz);
      payload.l += out[1];
      return out[0];
    }
    function warn_or_throw(wrn, msg2) {
      if (wrn) {
        if (typeof console !== "undefined") console.error(msg2);
      } else throw new Error(msg2);
    }
    function parse_zip(file, options) {
      var blob = file;
      prep_blob(blob, 0);
      var FileIndex = [], FullPaths = [];
      var o = {
        FileIndex,
        FullPaths
      };
      init_cfb(o, { root: options.root });
      var i2 = blob.length - 4;
      while ((blob[i2] != 80 || blob[i2 + 1] != 75 || blob[i2 + 2] != 5 || blob[i2 + 3] != 6) && i2 >= 0) --i2;
      blob.l = i2 + 4;
      blob.l += 4;
      var fcnt = blob.read_shift(2);
      blob.l += 6;
      var start_cd = blob.read_shift(4);
      blob.l = start_cd;
      for (i2 = 0; i2 < fcnt; ++i2) {
        blob.l += 20;
        var csz = blob.read_shift(4);
        var usz = blob.read_shift(4);
        var namelen = blob.read_shift(2);
        var efsz = blob.read_shift(2);
        var fcsz = blob.read_shift(2);
        blob.l += 8;
        var offset = blob.read_shift(4);
        var EF = parse_extra_field(blob.slice(blob.l + namelen, blob.l + namelen + efsz));
        blob.l += namelen + efsz + fcsz;
        var L = blob.l;
        blob.l = offset + 4;
        parse_local_file(blob, csz, usz, o, EF);
        blob.l = L;
      }
      return o;
    }
    function parse_local_file(blob, csz, usz, o, EF) {
      blob.l += 2;
      var flags = blob.read_shift(2);
      var meth = blob.read_shift(2);
      var date = parse_dos_date(blob);
      if (flags & 8257) throw new Error("Unsupported ZIP encryption");
      var crc322 = blob.read_shift(4);
      var _csz = blob.read_shift(4);
      var _usz = blob.read_shift(4);
      var namelen = blob.read_shift(2);
      var efsz = blob.read_shift(2);
      var name = "";
      for (var i2 = 0; i2 < namelen; ++i2) name += String.fromCharCode(blob[blob.l++]);
      if (efsz) {
        var ef = parse_extra_field(blob.slice(blob.l, blob.l + efsz));
        if ((ef[21589] || {}).mt) date = ef[21589].mt;
        if (((EF || {})[21589] || {}).mt) date = EF[21589].mt;
      }
      blob.l += efsz;
      var data = blob.slice(blob.l, blob.l + _csz);
      switch (meth) {
        case 8:
          data = _inflateRawSync(blob, _usz);
          break;
        case 0:
          break;
        default:
          throw new Error("Unsupported ZIP Compression method " + meth);
      }
      var wrn = false;
      if (flags & 8) {
        crc322 = blob.read_shift(4);
        if (crc322 == 134695760) {
          crc322 = blob.read_shift(4);
          wrn = true;
        }
        _csz = blob.read_shift(4);
        _usz = blob.read_shift(4);
      }
      if (_csz != csz) warn_or_throw(wrn, "Bad compressed size: " + csz + " != " + _csz);
      if (_usz != usz) warn_or_throw(wrn, "Bad uncompressed size: " + usz + " != " + _usz);
      var _crc32 = CRC32.buf(data, 0);
      if (crc322 >> 0 != _crc32 >> 0) warn_or_throw(wrn, "Bad CRC32 checksum: " + crc322 + " != " + _crc32);
      cfb_add(o, name, data, { unsafe: true, mt: date });
    }
    function write_zip(cfb2, options) {
      var _opts = options || {};
      var out = [], cdirs = [];
      var o = new_buf(1);
      var method = _opts.compression ? 8 : 0, flags = 0;
      var desc = false;
      if (desc) flags |= 8;
      var i2 = 0, j = 0;
      var start_cd = 0, fcnt = 0;
      var root = cfb2.FullPaths[0], fp = root, fi = cfb2.FileIndex[0];
      var crcs = [];
      var sz_cd = 0;
      for (i2 = 1; i2 < cfb2.FullPaths.length; ++i2) {
        fp = cfb2.FullPaths[i2].slice(root.length);
        fi = cfb2.FileIndex[i2];
        if (!fi.size || !fi.content || fp == "Sh33tJ5") continue;
        var start = start_cd;
        var namebuf = new_buf(fp.length);
        for (j = 0; j < fp.length; ++j) namebuf.write_shift(1, fp.charCodeAt(j) & 127);
        namebuf = namebuf.slice(0, namebuf.l);
        crcs[fcnt] = CRC32.buf(fi.content, 0);
        var outbuf = fi.content;
        if (method == 8) outbuf = _deflateRawSync(outbuf);
        o = new_buf(30);
        o.write_shift(4, 67324752);
        o.write_shift(2, 20);
        o.write_shift(2, flags);
        o.write_shift(2, method);
        if (fi.mt) write_dos_date(o, fi.mt);
        else o.write_shift(4, 0);
        o.write_shift(-4, flags & 8 ? 0 : crcs[fcnt]);
        o.write_shift(4, flags & 8 ? 0 : outbuf.length);
        o.write_shift(4, flags & 8 ? 0 : fi.content.length);
        o.write_shift(2, namebuf.length);
        o.write_shift(2, 0);
        start_cd += o.length;
        out.push(o);
        start_cd += namebuf.length;
        out.push(namebuf);
        start_cd += outbuf.length;
        out.push(outbuf);
        if (flags & 8) {
          o = new_buf(12);
          o.write_shift(-4, crcs[fcnt]);
          o.write_shift(4, outbuf.length);
          o.write_shift(4, fi.content.length);
          start_cd += o.l;
          out.push(o);
        }
        o = new_buf(46);
        o.write_shift(4, 33639248);
        o.write_shift(2, 0);
        o.write_shift(2, 20);
        o.write_shift(2, flags);
        o.write_shift(2, method);
        o.write_shift(4, 0);
        o.write_shift(-4, crcs[fcnt]);
        o.write_shift(4, outbuf.length);
        o.write_shift(4, fi.content.length);
        o.write_shift(2, namebuf.length);
        o.write_shift(2, 0);
        o.write_shift(2, 0);
        o.write_shift(2, 0);
        o.write_shift(2, 0);
        o.write_shift(4, 0);
        o.write_shift(4, start);
        sz_cd += o.l;
        cdirs.push(o);
        sz_cd += namebuf.length;
        cdirs.push(namebuf);
        ++fcnt;
      }
      o = new_buf(22);
      o.write_shift(4, 101010256);
      o.write_shift(2, 0);
      o.write_shift(2, 0);
      o.write_shift(2, fcnt);
      o.write_shift(2, fcnt);
      o.write_shift(4, sz_cd);
      o.write_shift(4, start_cd);
      o.write_shift(2, 0);
      return bconcat([bconcat(out), bconcat(cdirs), o]);
    }
    var ContentTypeMap = {
      "htm": "text/html",
      "xml": "text/xml",
      "gif": "image/gif",
      "jpg": "image/jpeg",
      "png": "image/png",
      "mso": "application/x-mso",
      "thmx": "application/vnd.ms-officetheme",
      "sh33tj5": "application/octet-stream"
    };
    function get_content_type(fi, fp) {
      if (fi.ctype) return fi.ctype;
      var ext = fi.name || "", m = ext.match(/\.([^\.]+)$/);
      if (m && ContentTypeMap[m[1]]) return ContentTypeMap[m[1]];
      if (fp) {
        m = (ext = fp).match(/[\.\\]([^\.\\])+$/);
        if (m && ContentTypeMap[m[1]]) return ContentTypeMap[m[1]];
      }
      return "application/octet-stream";
    }
    function write_base64_76(bstr) {
      var data = Base64.encode(bstr);
      var o = [];
      for (var i2 = 0; i2 < data.length; i2 += 76) o.push(data.slice(i2, i2 + 76));
      return o.join("\r\n") + "\r\n";
    }
    function write_quoted_printable(text) {
      var encoded = text.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(c2) {
        var w = c2.charCodeAt(0).toString(16).toUpperCase();
        return "=" + (w.length == 1 ? "0" + w : w);
      });
      encoded = encoded.replace(/ $/mg, "=20").replace(/\t$/mg, "=09");
      if (encoded.charAt(0) == "\n") encoded = "=0D" + encoded.slice(1);
      encoded = encoded.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, "\n=0A").replace(/([^\r\n])\n/mg, "$1=0A");
      var o = [], split = encoded.split("\r\n");
      for (var si = 0; si < split.length; ++si) {
        var str = split[si];
        if (str.length == 0) {
          o.push("");
          continue;
        }
        for (var i2 = 0; i2 < str.length; ) {
          var end = 76;
          var tmp = str.slice(i2, i2 + end);
          if (tmp.charAt(end - 1) == "=") end--;
          else if (tmp.charAt(end - 2) == "=") end -= 2;
          else if (tmp.charAt(end - 3) == "=") end -= 3;
          tmp = str.slice(i2, i2 + end);
          i2 += end;
          if (i2 < str.length) tmp += "=";
          o.push(tmp);
        }
      }
      return o.join("\r\n");
    }
    function parse_quoted_printable(data) {
      var o = [];
      for (var di = 0; di < data.length; ++di) {
        var line = data[di];
        while (di <= data.length && line.charAt(line.length - 1) == "=") line = line.slice(0, line.length - 1) + data[++di];
        o.push(line);
      }
      for (var oi = 0; oi < o.length; ++oi) o[oi] = o[oi].replace(/=[0-9A-Fa-f]{2}/g, function($$) {
        return String.fromCharCode(parseInt($$.slice(1), 16));
      });
      return s2a(o.join("\r\n"));
    }
    function parse_mime(cfb2, data, root) {
      var fname = "", cte = "", ctype = "", fdata;
      var di = 0;
      for (; di < 10; ++di) {
        var line = data[di];
        if (!line || line.match(/^\s*$/)) break;
        var m = line.match(/^(.*?):\s*([^\s].*)$/);
        if (m) switch (m[1].toLowerCase()) {
          case "content-location":
            fname = m[2].trim();
            break;
          case "content-type":
            ctype = m[2].trim();
            break;
          case "content-transfer-encoding":
            cte = m[2].trim();
            break;
        }
      }
      ++di;
      switch (cte.toLowerCase()) {
        case "base64":
          fdata = s2a(Base64.decode(data.slice(di).join("")));
          break;
        case "quoted-printable":
          fdata = parse_quoted_printable(data.slice(di));
          break;
        default:
          throw new Error("Unsupported Content-Transfer-Encoding " + cte);
      }
      var file = cfb_add(cfb2, fname.slice(root.length), fdata, { unsafe: true });
      if (ctype) file.ctype = ctype;
    }
    function parse_mad(file, options) {
      if (a2s(file.slice(0, 13)).toLowerCase() != "mime-version:") throw new Error("Unsupported MAD header");
      var root = options && options.root || "";
      var data = (has_buf && Buffer.isBuffer(file) ? file.toString("binary") : a2s(file)).split("\r\n");
      var di = 0, row = "";
      for (di = 0; di < data.length; ++di) {
        row = data[di];
        if (!/^Content-Location:/i.test(row)) continue;
        row = row.slice(row.indexOf("file"));
        if (!root) root = row.slice(0, row.lastIndexOf("/") + 1);
        if (row.slice(0, root.length) == root) continue;
        while (root.length > 0) {
          root = root.slice(0, root.length - 1);
          root = root.slice(0, root.lastIndexOf("/") + 1);
          if (row.slice(0, root.length) == root) break;
        }
      }
      var mboundary = (data[1] || "").match(/boundary="(.*?)"/);
      if (!mboundary) throw new Error("MAD cannot find boundary");
      var boundary = "--" + (mboundary[1] || "");
      var FileIndex = [], FullPaths = [];
      var o = {
        FileIndex,
        FullPaths
      };
      init_cfb(o);
      var start_di, fcnt = 0;
      for (di = 0; di < data.length; ++di) {
        var line = data[di];
        if (line !== boundary && line !== boundary + "--") continue;
        if (fcnt++) parse_mime(o, data.slice(start_di, di), root);
        start_di = di;
      }
      return o;
    }
    function write_mad(cfb2, options) {
      var opts = options || {};
      var boundary = opts.boundary || "SheetJS";
      boundary = "------=" + boundary;
      var out = [
        "MIME-Version: 1.0",
        'Content-Type: multipart/related; boundary="' + boundary.slice(2) + '"',
        "",
        "",
        ""
      ];
      var root = cfb2.FullPaths[0], fp = root, fi = cfb2.FileIndex[0];
      for (var i2 = 1; i2 < cfb2.FullPaths.length; ++i2) {
        fp = cfb2.FullPaths[i2].slice(root.length);
        fi = cfb2.FileIndex[i2];
        if (!fi.size || !fi.content || fp == "Sh33tJ5") continue;
        fp = fp.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(c2) {
          return "_x" + c2.charCodeAt(0).toString(16) + "_";
        }).replace(/[\u0080-\uFFFF]/g, function(u) {
          return "_u" + u.charCodeAt(0).toString(16) + "_";
        });
        var ca = fi.content;
        var cstr = has_buf && Buffer.isBuffer(ca) ? ca.toString("binary") : a2s(ca);
        var dispcnt = 0, L = Math.min(1024, cstr.length), cc = 0;
        for (var csl = 0; csl <= L; ++csl) if ((cc = cstr.charCodeAt(csl)) >= 32 && cc < 128) ++dispcnt;
        var qp = dispcnt >= L * 4 / 5;
        out.push(boundary);
        out.push("Content-Location: " + (opts.root || "file:///C:/SheetJS/") + fp);
        out.push("Content-Transfer-Encoding: " + (qp ? "quoted-printable" : "base64"));
        out.push("Content-Type: " + get_content_type(fi, fp));
        out.push("");
        out.push(qp ? write_quoted_printable(cstr) : write_base64_76(cstr));
      }
      out.push(boundary + "--\r\n");
      return out.join("\r\n");
    }
    function cfb_new(opts) {
      var o = {};
      init_cfb(o, opts);
      return o;
    }
    function cfb_add(cfb2, name, content, opts) {
      var unsafe = opts && opts.unsafe;
      if (!unsafe) init_cfb(cfb2);
      var file = !unsafe && CFB.find(cfb2, name);
      if (!file) {
        var fpath = cfb2.FullPaths[0];
        if (name.slice(0, fpath.length) == fpath) fpath = name;
        else {
          if (fpath.slice(-1) != "/") fpath += "/";
          fpath = (fpath + name).replace("//", "/");
        }
        file = { name: filename(name), type: 2 };
        cfb2.FileIndex.push(file);
        cfb2.FullPaths.push(fpath);
        if (!unsafe) CFB.utils.cfb_gc(cfb2);
      }
      file.content = content;
      file.size = content ? content.length : 0;
      if (opts) {
        if (opts.CLSID) file.clsid = opts.CLSID;
        if (opts.mt) file.mt = opts.mt;
        if (opts.ct) file.ct = opts.ct;
      }
      return file;
    }
    function cfb_del(cfb2, name) {
      init_cfb(cfb2);
      var file = CFB.find(cfb2, name);
      if (file) {
        for (var j = 0; j < cfb2.FileIndex.length; ++j) if (cfb2.FileIndex[j] == file) {
          cfb2.FileIndex.splice(j, 1);
          cfb2.FullPaths.splice(j, 1);
          return true;
        }
      }
      return false;
    }
    function cfb_mov(cfb2, old_name, new_name) {
      init_cfb(cfb2);
      var file = CFB.find(cfb2, old_name);
      if (file) {
        for (var j = 0; j < cfb2.FileIndex.length; ++j) if (cfb2.FileIndex[j] == file) {
          cfb2.FileIndex[j].name = filename(new_name);
          cfb2.FullPaths[j] = new_name;
          return true;
        }
      }
      return false;
    }
    function cfb_gc(cfb2) {
      rebuild_cfb(cfb2, true);
    }
    exports$1.find = find;
    exports$1.read = read;
    exports$1.parse = parse2;
    exports$1.write = write;
    exports$1.writeFile = write_file;
    exports$1.utils = {
      cfb_new,
      cfb_add,
      cfb_del,
      cfb_mov,
      cfb_gc,
      ReadShift,
      CheckField,
      prep_blob,
      bconcat,
      use_zlib,
      _deflateRaw: _deflate,
      _inflateRaw: _inflate,
      consts
    };
    return exports$1;
  }();
  if (typeof commonjsRequire !== "undefined" && true && typeof DO_NOT_EXPORT_CFB === "undefined") {
    module.exports = CFB;
  }
})(cfb$1);
var cfbExports = cfb$1.exports;
const cfb_default = /* @__PURE__ */ getDefaultExportFromCjs(cfbExports);
var common$1 = {};
(function(exports$1) {
  "use strict";
  var TYPED_OK = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
  function _has(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }
  exports$1.assign = function(obj) {
    var sources = Array.prototype.slice.call(arguments, 1);
    while (sources.length) {
      var source = sources.shift();
      if (!source) {
        continue;
      }
      if (typeof source !== "object") {
        throw new TypeError(source + "must be non-object");
      }
      for (var p in source) {
        if (_has(source, p)) {
          obj[p] = source[p];
        }
      }
    }
    return obj;
  };
  exports$1.shrinkBuf = function(buf, size) {
    if (buf.length === size) {
      return buf;
    }
    if (buf.subarray) {
      return buf.subarray(0, size);
    }
    buf.length = size;
    return buf;
  };
  var fnTyped = {
    arraySet: function(dest, src, src_offs, len, dest_offs) {
      if (src.subarray && dest.subarray) {
        dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
        return;
      }
      for (var i = 0; i < len; i++) {
        dest[dest_offs + i] = src[src_offs + i];
      }
    },
    // Join array of chunks to single array.
    flattenChunks: function(chunks) {
      var i, l, len, pos, chunk, result;
      len = 0;
      for (i = 0, l = chunks.length; i < l; i++) {
        len += chunks[i].length;
      }
      result = new Uint8Array(len);
      pos = 0;
      for (i = 0, l = chunks.length; i < l; i++) {
        chunk = chunks[i];
        result.set(chunk, pos);
        pos += chunk.length;
      }
      return result;
    }
  };
  var fnUntyped = {
    arraySet: function(dest, src, src_offs, len, dest_offs) {
      for (var i = 0; i < len; i++) {
        dest[dest_offs + i] = src[src_offs + i];
      }
    },
    // Join array of chunks to single array.
    flattenChunks: function(chunks) {
      return [].concat.apply([], chunks);
    }
  };
  exports$1.setTyped = function(on) {
    if (on) {
      exports$1.Buf8 = Uint8Array;
      exports$1.Buf16 = Uint16Array;
      exports$1.Buf32 = Int32Array;
      exports$1.assign(exports$1, fnTyped);
    } else {
      exports$1.Buf8 = Array;
      exports$1.Buf16 = Array;
      exports$1.Buf32 = Array;
      exports$1.assign(exports$1, fnUntyped);
    }
  };
  exports$1.setTyped(TYPED_OK);
})(common$1);
const common = /* @__PURE__ */ getDefaultExportFromCjs(common$1);
var deflate$4 = {};
var deflate$3 = {};
var trees$1 = {};
"use strict";
var utils$6 = common$1;
var Z_FIXED$1 = 4;
var Z_BINARY = 0;
var Z_TEXT = 1;
var Z_UNKNOWN$1 = 2;
function zero$1(buf) {
  var len = buf.length;
  while (--len >= 0) {
    buf[len] = 0;
  }
}
var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES = 2;
var MIN_MATCH$1 = 3;
var MAX_MATCH$1 = 258;
var LENGTH_CODES$1 = 29;
var LITERALS$1 = 256;
var L_CODES$1 = LITERALS$1 + 1 + LENGTH_CODES$1;
var D_CODES$1 = 30;
var BL_CODES$1 = 19;
var HEAP_SIZE$1 = 2 * L_CODES$1 + 1;
var MAX_BITS$1 = 15;
var Buf_size = 16;
var MAX_BL_BITS = 7;
var END_BLOCK = 256;
var REP_3_6 = 16;
var REPZ_3_10 = 17;
var REPZ_11_138 = 18;
var extra_lbits = (
  /* extra bits for each length code */
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
);
var extra_dbits = (
  /* extra bits for each distance code */
  [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
);
var extra_blbits = (
  /* extra bits for each bit length code */
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
);
var bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
var DIST_CODE_LEN = 512;
var static_ltree = new Array((L_CODES$1 + 2) * 2);
zero$1(static_ltree);
var static_dtree = new Array(D_CODES$1 * 2);
zero$1(static_dtree);
var _dist_code = new Array(DIST_CODE_LEN);
zero$1(_dist_code);
var _length_code = new Array(MAX_MATCH$1 - MIN_MATCH$1 + 1);
zero$1(_length_code);
var base_length = new Array(LENGTH_CODES$1);
zero$1(base_length);
var base_dist = new Array(D_CODES$1);
zero$1(base_dist);
function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
  this.static_tree = static_tree;
  this.extra_bits = extra_bits;
  this.extra_base = extra_base;
  this.elems = elems;
  this.max_length = max_length;
  this.has_stree = static_tree && static_tree.length;
}
var static_l_desc;
var static_d_desc;
var static_bl_desc;
function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;
  this.max_code = 0;
  this.stat_desc = stat_desc;
}
function d_code(dist) {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
}
function put_short(s, w) {
  s.pending_buf[s.pending++] = w & 255;
  s.pending_buf[s.pending++] = w >>> 8 & 255;
}
function send_bits(s, value, length) {
  if (s.bi_valid > Buf_size - length) {
    s.bi_buf |= value << s.bi_valid & 65535;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> Buf_size - s.bi_valid;
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= value << s.bi_valid & 65535;
    s.bi_valid += length;
  }
}
function send_code(s, c2, tree) {
  send_bits(
    s,
    tree[c2 * 2],
    tree[c2 * 2 + 1]
    /*.Len*/
  );
}
function bi_reverse(code, len) {
  var res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
}
function bi_flush(s) {
  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;
  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 255;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
}
function gen_bitlen(s, desc) {
  var tree = desc.dyn_tree;
  var max_code = desc.max_code;
  var stree = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var extra = desc.stat_desc.extra_bits;
  var base = desc.stat_desc.extra_base;
  var max_length = desc.stat_desc.max_length;
  var h;
  var n, m;
  var bits;
  var xbits;
  var f;
  var overflow = 0;
  for (bits = 0; bits <= MAX_BITS$1; bits++) {
    s.bl_count[bits] = 0;
  }
  tree[s.heap[s.heap_max] * 2 + 1] = 0;
  for (h = s.heap_max + 1; h < HEAP_SIZE$1; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1] = bits;
    if (n > max_code) {
      continue;
    }
    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2];
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1] + xbits);
    }
  }
  if (overflow === 0) {
    return;
  }
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) {
      bits--;
    }
    s.bl_count[bits]--;
    s.bl_count[bits + 1] += 2;
    s.bl_count[max_length]--;
    overflow -= 2;
  } while (overflow > 0);
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) {
        continue;
      }
      if (tree[m * 2 + 1] !== bits) {
        s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
        tree[m * 2 + 1] = bits;
      }
      n--;
    }
  }
}
function gen_codes(tree, max_code, bl_count) {
  var next_code = new Array(MAX_BITS$1 + 1);
  var code = 0;
  var bits;
  var n;
  for (bits = 1; bits <= MAX_BITS$1; bits++) {
    next_code[bits] = code = code + bl_count[bits - 1] << 1;
  }
  for (n = 0; n <= max_code; n++) {
    var len = tree[n * 2 + 1];
    if (len === 0) {
      continue;
    }
    tree[n * 2] = bi_reverse(next_code[len]++, len);
  }
}
function tr_static_init() {
  var n;
  var bits;
  var length;
  var code;
  var dist;
  var bl_count = new Array(MAX_BITS$1 + 1);
  length = 0;
  for (code = 0; code < LENGTH_CODES$1 - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < 1 << extra_lbits[code]; n++) {
      _length_code[length++] = code;
    }
  }
  _length_code[length - 1] = code;
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < 1 << extra_dbits[code]; n++) {
      _dist_code[dist++] = code;
    }
  }
  dist >>= 7;
  for (; code < D_CODES$1; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < 1 << extra_dbits[code] - 7; n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  for (bits = 0; bits <= MAX_BITS$1; bits++) {
    bl_count[bits] = 0;
  }
  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1] = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1] = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1] = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1] = 8;
    n++;
    bl_count[8]++;
  }
  gen_codes(static_ltree, L_CODES$1 + 1, bl_count);
  for (n = 0; n < D_CODES$1; n++) {
    static_dtree[n * 2 + 1] = 5;
    static_dtree[n * 2] = bi_reverse(n, 5);
  }
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS$1 + 1, L_CODES$1, MAX_BITS$1);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES$1, MAX_BITS$1);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES$1, MAX_BL_BITS);
}
function init_block(s) {
  var n;
  for (n = 0; n < L_CODES$1; n++) {
    s.dyn_ltree[n * 2] = 0;
  }
  for (n = 0; n < D_CODES$1; n++) {
    s.dyn_dtree[n * 2] = 0;
  }
  for (n = 0; n < BL_CODES$1; n++) {
    s.bl_tree[n * 2] = 0;
  }
  s.dyn_ltree[END_BLOCK * 2] = 1;
  s.opt_len = s.static_len = 0;
  s.last_lit = s.matches = 0;
}
function bi_windup(s) {
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
}
function copy_block(s, buf, len, header) {
  bi_windup(s);
  if (header) {
    put_short(s, len);
    put_short(s, ~len);
  }
  utils$6.arraySet(s.pending_buf, s.window, buf, len, s.pending);
  s.pending += len;
}
function smaller(tree, n, m, depth) {
  var _n2 = n * 2;
  var _m2 = m * 2;
  return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m];
}
function pqdownheap(s, tree, k) {
  var v = s.heap[k];
  var j = k << 1;
  while (j <= s.heap_len) {
    if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    if (smaller(tree, v, s.heap[j], s.depth)) {
      break;
    }
    s.heap[k] = s.heap[j];
    k = j;
    j <<= 1;
  }
  s.heap[k] = v;
}
function compress_block(s, ltree, dtree) {
  var dist;
  var lc;
  var lx = 0;
  var code;
  var extra;
  if (s.last_lit !== 0) {
    do {
      dist = s.pending_buf[s.d_buf + lx * 2] << 8 | s.pending_buf[s.d_buf + lx * 2 + 1];
      lc = s.pending_buf[s.l_buf + lx];
      lx++;
      if (dist === 0) {
        send_code(s, lc, ltree);
      } else {
        code = _length_code[lc];
        send_code(s, code + LITERALS$1 + 1, ltree);
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);
        }
        dist--;
        code = d_code(dist);
        send_code(s, code, dtree);
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);
        }
      }
    } while (lx < s.last_lit);
  }
  send_code(s, END_BLOCK, ltree);
}
function build_tree(s, desc) {
  var tree = desc.dyn_tree;
  var stree = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var elems = desc.stat_desc.elems;
  var n, m;
  var max_code = -1;
  var node;
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE$1;
  for (n = 0; n < elems; n++) {
    if (tree[n * 2] !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;
    } else {
      tree[n * 2 + 1] = 0;
    }
  }
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
    tree[node * 2] = 1;
    s.depth[node] = 0;
    s.opt_len--;
    if (has_stree) {
      s.static_len -= stree[node * 2 + 1];
    }
  }
  desc.max_code = max_code;
  for (n = s.heap_len >> 1; n >= 1; n--) {
    pqdownheap(s, tree, n);
  }
  node = elems;
  do {
    n = s.heap[
      1
      /*SMALLEST*/
    ];
    s.heap[
      1
      /*SMALLEST*/
    ] = s.heap[s.heap_len--];
    pqdownheap(
      s,
      tree,
      1
      /*SMALLEST*/
    );
    m = s.heap[
      1
      /*SMALLEST*/
    ];
    s.heap[--s.heap_max] = n;
    s.heap[--s.heap_max] = m;
    tree[node * 2] = tree[n * 2] + tree[m * 2];
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1] = tree[m * 2 + 1] = node;
    s.heap[
      1
      /*SMALLEST*/
    ] = node++;
    pqdownheap(
      s,
      tree,
      1
      /*SMALLEST*/
    );
  } while (s.heap_len >= 2);
  s.heap[--s.heap_max] = s.heap[
    1
    /*SMALLEST*/
  ];
  gen_bitlen(s, desc);
  gen_codes(tree, max_code, s.bl_count);
}
function scan_tree(s, tree, max_code) {
  var n;
  var prevlen = -1;
  var curlen;
  var nextlen = tree[0 * 2 + 1];
  var count = 0;
  var max_count = 7;
  var min_count = 4;
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1] = 65535;
  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1];
    if (++count < max_count && curlen === nextlen) {
      continue;
    } else if (count < min_count) {
      s.bl_tree[curlen * 2] += count;
    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        s.bl_tree[curlen * 2]++;
      }
      s.bl_tree[REP_3_6 * 2]++;
    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2]++;
    } else {
      s.bl_tree[REPZ_11_138 * 2]++;
    }
    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;
    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}
function send_tree(s, tree, max_code) {
  var n;
  var prevlen = -1;
  var curlen;
  var nextlen = tree[0 * 2 + 1];
  var count = 0;
  var max_count = 7;
  var min_count = 4;
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1];
    if (++count < max_count && curlen === nextlen) {
      continue;
    } else if (count < min_count) {
      do {
        send_code(s, curlen, s.bl_tree);
      } while (--count !== 0);
    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);
    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);
    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }
    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;
    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}
function build_bl_tree(s) {
  var max_blindex;
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
  build_tree(s, s.bl_desc);
  for (max_blindex = BL_CODES$1 - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) {
      break;
    }
  }
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  return max_blindex;
}
function send_all_trees(s, lcodes, dcodes, blcodes) {
  var rank2;
  send_bits(s, lcodes - 257, 5);
  send_bits(s, dcodes - 1, 5);
  send_bits(s, blcodes - 4, 4);
  for (rank2 = 0; rank2 < blcodes; rank2++) {
    send_bits(s, s.bl_tree[bl_order[rank2] * 2 + 1], 3);
  }
  send_tree(s, s.dyn_ltree, lcodes - 1);
  send_tree(s, s.dyn_dtree, dcodes - 1);
}
function detect_data_type(s) {
  var black_mask = 4093624447;
  var n;
  for (n = 0; n <= 31; n++, black_mask >>>= 1) {
    if (black_mask & 1 && s.dyn_ltree[n * 2] !== 0) {
      return Z_BINARY;
    }
  }
  if (s.dyn_ltree[9 * 2] !== 0 || s.dyn_ltree[10 * 2] !== 0 || s.dyn_ltree[13 * 2] !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS$1; n++) {
    if (s.dyn_ltree[n * 2] !== 0) {
      return Z_TEXT;
    }
  }
  return Z_BINARY;
}
var static_init_done = false;
function _tr_init(s) {
  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }
  s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
  s.bi_buf = 0;
  s.bi_valid = 0;
  init_block(s);
}
function _tr_stored_block(s, buf, stored_len, last) {
  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
  copy_block(s, buf, stored_len, true);
}
function _tr_align(s) {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
}
function _tr_flush_block(s, buf, stored_len, last) {
  var opt_lenb, static_lenb;
  var max_blindex = 0;
  if (s.level > 0) {
    if (s.strm.data_type === Z_UNKNOWN$1) {
      s.strm.data_type = detect_data_type(s);
    }
    build_tree(s, s.l_desc);
    build_tree(s, s.d_desc);
    max_blindex = build_bl_tree(s);
    opt_lenb = s.opt_len + 3 + 7 >>> 3;
    static_lenb = s.static_len + 3 + 7 >>> 3;
    if (static_lenb <= opt_lenb) {
      opt_lenb = static_lenb;
    }
  } else {
    opt_lenb = static_lenb = stored_len + 5;
  }
  if (stored_len + 4 <= opt_lenb && buf !== -1) {
    _tr_stored_block(s, buf, stored_len, last);
  } else if (s.strategy === Z_FIXED$1 || static_lenb === opt_lenb) {
    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);
  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  init_block(s);
  if (last) {
    bi_windup(s);
  }
}
function _tr_tally(s, dist, lc) {
  s.pending_buf[s.d_buf + s.last_lit * 2] = dist >>> 8 & 255;
  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 255;
  s.pending_buf[s.l_buf + s.last_lit] = lc & 255;
  s.last_lit++;
  if (dist === 0) {
    s.dyn_ltree[lc * 2]++;
  } else {
    s.matches++;
    dist--;
    s.dyn_ltree[(_length_code[lc] + LITERALS$1 + 1) * 2]++;
    s.dyn_dtree[d_code(dist) * 2]++;
  }
  return s.last_lit === s.lit_bufsize - 1;
}
var _tr_init_1 = trees$1._tr_init = _tr_init;
var _tr_stored_block_1 = trees$1._tr_stored_block = _tr_stored_block;
var _tr_flush_block_1 = trees$1._tr_flush_block = _tr_flush_block;
var _tr_tally_1 = trees$1._tr_tally = _tr_tally;
var _tr_align_1 = trees$1._tr_align = _tr_align;
"use strict";
function adler32$2(adler, buf, len, pos) {
  var s1 = adler & 65535 | 0, s2 = adler >>> 16 & 65535 | 0, n = 0;
  while (len !== 0) {
    n = len > 2e3 ? 2e3 : len;
    len -= n;
    do {
      s1 = s1 + buf[pos++] | 0;
      s2 = s2 + s1 | 0;
    } while (--n);
    s1 %= 65521;
    s2 %= 65521;
  }
  return s1 | s2 << 16 | 0;
}
var adler32_1 = adler32$2;
const adler32_default = /* @__PURE__ */ getDefaultExportFromCjs(adler32_1);
"use strict";
function makeTable() {
  var c2, table = [];
  for (var n = 0; n < 256; n++) {
    c2 = n;
    for (var k = 0; k < 8; k++) {
      c2 = c2 & 1 ? 3988292384 ^ c2 >>> 1 : c2 >>> 1;
    }
    table[n] = c2;
  }
  return table;
}
var crcTable = makeTable();
function crc32$2(crc, buf, len, pos) {
  var t = crcTable, end = pos + len;
  crc ^= -1;
  for (var i = pos; i < end; i++) {
    crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 255];
  }
  return crc ^ -1;
}
var crc32_1 = crc32$2;
const crc32_default = /* @__PURE__ */ getDefaultExportFromCjs(crc32_1);
"use strict";
var messages = {
  2: "need dictionary",
  /* Z_NEED_DICT       2  */
  1: "stream end",
  /* Z_STREAM_END      1  */
  0: "",
  /* Z_OK              0  */
  "-1": "file error",
  /* Z_ERRNO         (-1) */
  "-2": "stream error",
  /* Z_STREAM_ERROR  (-2) */
  "-3": "data error",
  /* Z_DATA_ERROR    (-3) */
  "-4": "insufficient memory",
  /* Z_MEM_ERROR     (-4) */
  "-5": "buffer error",
  /* Z_BUF_ERROR     (-5) */
  "-6": "incompatible version"
  /* Z_VERSION_ERROR (-6) */
};
const messages_default = /* @__PURE__ */ getDefaultExportFromCjs(messages);
"use strict";
var utils$5 = common$1;
var trees = trees$1;
var adler32$1 = adler32_1;
var crc32$1 = crc32_1;
var msg$2 = messages;
var Z_NO_FLUSH$1 = 0;
var Z_PARTIAL_FLUSH = 1;
var Z_FULL_FLUSH = 3;
var Z_FINISH$2 = 4;
var Z_BLOCK$1 = 5;
var Z_OK$2 = 0;
var Z_STREAM_END$2 = 1;
var Z_STREAM_ERROR$1 = -2;
var Z_DATA_ERROR$1 = -3;
var Z_BUF_ERROR$1 = -5;
var Z_DEFAULT_COMPRESSION$1 = -1;
var Z_FILTERED = 1;
var Z_HUFFMAN_ONLY = 2;
var Z_RLE = 3;
var Z_FIXED = 4;
var Z_DEFAULT_STRATEGY$1 = 0;
var Z_UNKNOWN = 2;
var Z_DEFLATED$2 = 8;
var MAX_MEM_LEVEL = 9;
var MAX_WBITS$1 = 15;
var DEF_MEM_LEVEL = 8;
var LENGTH_CODES = 29;
var LITERALS = 256;
var L_CODES = LITERALS + 1 + LENGTH_CODES;
var D_CODES = 30;
var BL_CODES = 19;
var HEAP_SIZE = 2 * L_CODES + 1;
var MAX_BITS = 15;
var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
var PRESET_DICT = 32;
var INIT_STATE = 42;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;
var BS_NEED_MORE = 1;
var BS_BLOCK_DONE = 2;
var BS_FINISH_STARTED = 3;
var BS_FINISH_DONE = 4;
var OS_CODE = 3;
function err(strm, errorCode) {
  strm.msg = msg$2[errorCode];
  return errorCode;
}
function rank(f) {
  return (f << 1) - (f > 4 ? 9 : 0);
}
function zero(buf) {
  var len = buf.length;
  while (--len >= 0) {
    buf[len] = 0;
  }
}
function flush_pending(strm) {
  var s = strm.state;
  var len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) {
    return;
  }
  utils$5.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
}
function flush_block_only(s, last) {
  trees._tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
}
function put_byte(s, b) {
  s.pending_buf[s.pending++] = b;
}
function putShortMSB(s, b) {
  s.pending_buf[s.pending++] = b >>> 8 & 255;
  s.pending_buf[s.pending++] = b & 255;
}
function read_buf(strm, buf, start, size) {
  var len = strm.avail_in;
  if (len > size) {
    len = size;
  }
  if (len === 0) {
    return 0;
  }
  strm.avail_in -= len;
  utils$5.arraySet(buf, strm.input, strm.next_in, len, start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32$1(strm.adler, buf, len, start);
  } else if (strm.state.wrap === 2) {
    strm.adler = crc32$1(strm.adler, buf, len, start);
  }
  strm.next_in += len;
  strm.total_in += len;
  return len;
}
function longest_match(s, cur_match) {
  var chain_length = s.max_chain_length;
  var scan = s.strstart;
  var match;
  var len;
  var best_len = s.prev_length;
  var nice_match = s.nice_match;
  var limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0;
  var _win = s.window;
  var wmask = s.w_mask;
  var prev = s.prev;
  var strend = s.strstart + MAX_MATCH;
  var scan_end1 = _win[scan + best_len - 1];
  var scan_end = _win[scan + best_len];
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  if (nice_match > s.lookahead) {
    nice_match = s.lookahead;
  }
  do {
    match = cur_match;
    if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
      continue;
    }
    scan += 2;
    match++;
    do {
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;
    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1 = _win[scan + best_len - 1];
      scan_end = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
}
function fill_window(s) {
  var _w_size = s.w_size;
  var p, n, m, more, str;
  do {
    more = s.window_size - s.lookahead - s.strstart;
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
      utils$5.arraySet(s.window, s.window, _w_size, _w_size, 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      s.block_start -= _w_size;
      n = s.hash_size;
      p = n;
      do {
        m = s.head[--p];
        s.head[p] = m >= _w_size ? m - _w_size : 0;
      } while (--n);
      n = _w_size;
      p = n;
      do {
        m = s.prev[--p];
        s.prev[p] = m >= _w_size ? m - _w_size : 0;
      } while (--n);
      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;
    if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];
      s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + 1]) & s.hash_mask;
      while (s.insert) {
        s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
}
function deflate_stored(s, flush) {
  var max_block_size = 65535;
  if (max_block_size > s.pending_buf_size - 5) {
    max_block_size = s.pending_buf_size - 5;
  }
  for (; ; ) {
    if (s.lookahead <= 1) {
      fill_window(s);
      if (s.lookahead === 0 && flush === Z_NO_FLUSH$1) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break;
      }
    }
    s.strstart += s.lookahead;
    s.lookahead = 0;
    var max_start = s.block_start + max_block_size;
    if (s.strstart === 0 || s.strstart >= max_start) {
      s.lookahead = s.strstart - max_start;
      s.strstart = max_start;
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
    if (s.strstart - s.block_start >= s.w_size - MIN_LOOKAHEAD) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH$2) {
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s.strstart > s.block_start) {
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_NEED_MORE;
}
function deflate_fast(s, flush) {
  var hash_head;
  var bflush;
  for (; ; ) {
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$1) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break;
      }
    }
    hash_head = 0;
    if (s.lookahead >= MIN_MATCH) {
      s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
    }
    if (hash_head !== 0 && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
      s.match_length = longest_match(s, hash_head);
    }
    if (s.match_length >= MIN_MATCH) {
      bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
      s.lookahead -= s.match_length;
      if (s.match_length <= s.max_lazy_match && s.lookahead >= MIN_MATCH) {
        s.match_length--;
        do {
          s.strstart++;
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
        } while (--s.match_length !== 0);
        s.strstart++;
      } else {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + 1]) & s.hash_mask;
      }
    } else {
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH$2) {
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_BLOCK_DONE;
}
function deflate_slow(s, flush) {
  var hash_head;
  var bflush;
  var max_insert;
  for (; ; ) {
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$1) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break;
      }
    }
    hash_head = 0;
    if (s.lookahead >= MIN_MATCH) {
      s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
    }
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;
    if (hash_head !== 0 && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
      s.match_length = longest_match(s, hash_head);
      if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096)) {
        s.match_length = MIN_MATCH - 1;
      }
    }
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;
      if (bflush) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
    } else if (s.match_available) {
      bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
      if (bflush) {
        flush_block_only(s, false);
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  if (s.match_available) {
    bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH$2) {
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_BLOCK_DONE;
}
function deflate_rle(s, flush) {
  var bflush;
  var prev;
  var scan, strend;
  var _win = s.window;
  for (; ; ) {
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH$1) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break;
      }
    }
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
        } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
    }
    if (s.match_length >= MIN_MATCH) {
      bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);
      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH$2) {
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_BLOCK_DONE;
}
function deflate_huff(s, flush) {
  var bflush;
  for (; ; ) {
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH$1) {
          return BS_NEED_MORE;
        }
        break;
      }
    }
    s.match_length = 0;
    bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH$2) {
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_BLOCK_DONE;
}
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}
var configuration_table;
configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),
  /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),
  /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),
  /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),
  /* 3 */
  new Config(4, 4, 16, 16, deflate_slow),
  /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),
  /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),
  /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),
  /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),
  /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)
  /* 9 max compression */
];
function lm_init(s) {
  s.window_size = 2 * s.w_size;
  zero(s.head);
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;
  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
}
function DeflateState() {
  this.strm = null;
  this.status = 0;
  this.pending_buf = null;
  this.pending_buf_size = 0;
  this.pending_out = 0;
  this.pending = 0;
  this.wrap = 0;
  this.gzhead = null;
  this.gzindex = 0;
  this.method = Z_DEFLATED$2;
  this.last_flush = -1;
  this.w_size = 0;
  this.w_bits = 0;
  this.w_mask = 0;
  this.window = null;
  this.window_size = 0;
  this.prev = null;
  this.head = null;
  this.ins_h = 0;
  this.hash_size = 0;
  this.hash_bits = 0;
  this.hash_mask = 0;
  this.hash_shift = 0;
  this.block_start = 0;
  this.match_length = 0;
  this.prev_match = 0;
  this.match_available = 0;
  this.strstart = 0;
  this.match_start = 0;
  this.lookahead = 0;
  this.prev_length = 0;
  this.max_chain_length = 0;
  this.max_lazy_match = 0;
  this.level = 0;
  this.strategy = 0;
  this.good_match = 0;
  this.nice_match = 0;
  this.dyn_ltree = new utils$5.Buf16(HEAP_SIZE * 2);
  this.dyn_dtree = new utils$5.Buf16((2 * D_CODES + 1) * 2);
  this.bl_tree = new utils$5.Buf16((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);
  this.l_desc = null;
  this.d_desc = null;
  this.bl_desc = null;
  this.bl_count = new utils$5.Buf16(MAX_BITS + 1);
  this.heap = new utils$5.Buf16(2 * L_CODES + 1);
  zero(this.heap);
  this.heap_len = 0;
  this.heap_max = 0;
  this.depth = new utils$5.Buf16(2 * L_CODES + 1);
  zero(this.depth);
  this.l_buf = 0;
  this.lit_bufsize = 0;
  this.last_lit = 0;
  this.d_buf = 0;
  this.opt_len = 0;
  this.static_len = 0;
  this.matches = 0;
  this.insert = 0;
  this.bi_buf = 0;
  this.bi_valid = 0;
}
function deflateResetKeep(strm) {
  var s;
  if (!strm || !strm.state) {
    return err(strm, Z_STREAM_ERROR$1);
  }
  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;
  s = strm.state;
  s.pending = 0;
  s.pending_out = 0;
  if (s.wrap < 0) {
    s.wrap = -s.wrap;
  }
  s.status = s.wrap ? INIT_STATE : BUSY_STATE;
  strm.adler = s.wrap === 2 ? 0 : 1;
  s.last_flush = Z_NO_FLUSH$1;
  trees._tr_init(s);
  return Z_OK$2;
}
function deflateReset(strm) {
  var ret = deflateResetKeep(strm);
  if (ret === Z_OK$2) {
    lm_init(strm.state);
  }
  return ret;
}
function deflateSetHeader(strm, head) {
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR$1;
  }
  if (strm.state.wrap !== 2) {
    return Z_STREAM_ERROR$1;
  }
  strm.state.gzhead = head;
  return Z_OK$2;
}
function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
  if (!strm) {
    return Z_STREAM_ERROR$1;
  }
  var wrap = 1;
  if (level === Z_DEFAULT_COMPRESSION$1) {
    level = 6;
  }
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  } else if (windowBits > 15) {
    wrap = 2;
    windowBits -= 16;
  }
  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED$2 || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED) {
    return err(strm, Z_STREAM_ERROR$1);
  }
  if (windowBits === 8) {
    windowBits = 9;
  }
  var s = new DeflateState();
  strm.state = s;
  s.strm = strm;
  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;
  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
  s.window = new utils$5.Buf8(s.w_size * 2);
  s.head = new utils$5.Buf16(s.hash_size);
  s.prev = new utils$5.Buf16(s.w_size);
  s.lit_bufsize = 1 << memLevel + 6;
  s.pending_buf_size = s.lit_bufsize * 4;
  s.pending_buf = new utils$5.Buf8(s.pending_buf_size);
  s.d_buf = 1 * s.lit_bufsize;
  s.l_buf = (1 + 2) * s.lit_bufsize;
  s.level = level;
  s.strategy = strategy;
  s.method = method;
  return deflateReset(strm);
}
function deflateInit(strm, level) {
  return deflateInit2(strm, level, Z_DEFLATED$2, MAX_WBITS$1, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY$1);
}
function deflate$2(strm, flush) {
  var old_flush, s;
  var beg, val;
  if (!strm || !strm.state || flush > Z_BLOCK$1 || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR$1) : Z_STREAM_ERROR$1;
  }
  s = strm.state;
  if (!strm.output || !strm.input && strm.avail_in !== 0 || s.status === FINISH_STATE && flush !== Z_FINISH$2) {
    return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR$1 : Z_STREAM_ERROR$1);
  }
  s.strm = strm;
  old_flush = s.last_flush;
  s.last_flush = flush;
  if (s.status === INIT_STATE) {
    if (s.wrap === 2) {
      strm.adler = 0;
      put_byte(s, 31);
      put_byte(s, 139);
      put_byte(s, 8);
      if (!s.gzhead) {
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
        put_byte(s, OS_CODE);
        s.status = BUSY_STATE;
      } else {
        put_byte(
          s,
          (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16)
        );
        put_byte(s, s.gzhead.time & 255);
        put_byte(s, s.gzhead.time >> 8 & 255);
        put_byte(s, s.gzhead.time >> 16 & 255);
        put_byte(s, s.gzhead.time >> 24 & 255);
        put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
        put_byte(s, s.gzhead.os & 255);
        if (s.gzhead.extra && s.gzhead.extra.length) {
          put_byte(s, s.gzhead.extra.length & 255);
          put_byte(s, s.gzhead.extra.length >> 8 & 255);
        }
        if (s.gzhead.hcrc) {
          strm.adler = crc32$1(strm.adler, s.pending_buf, s.pending, 0);
        }
        s.gzindex = 0;
        s.status = EXTRA_STATE;
      }
    } else {
      var header = Z_DEFLATED$2 + (s.w_bits - 8 << 4) << 8;
      var level_flags = -1;
      if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
        level_flags = 0;
      } else if (s.level < 6) {
        level_flags = 1;
      } else if (s.level === 6) {
        level_flags = 2;
      } else {
        level_flags = 3;
      }
      header |= level_flags << 6;
      if (s.strstart !== 0) {
        header |= PRESET_DICT;
      }
      header += 31 - header % 31;
      s.status = BUSY_STATE;
      putShortMSB(s, header);
      if (s.strstart !== 0) {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 65535);
      }
      strm.adler = 1;
    }
  }
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra) {
      beg = s.pending;
      while (s.gzindex < (s.gzhead.extra.length & 65535)) {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32$1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            break;
          }
        }
        put_byte(s, s.gzhead.extra[s.gzindex] & 255);
        s.gzindex++;
      }
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32$1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (s.gzindex === s.gzhead.extra.length) {
        s.gzindex = 0;
        s.status = NAME_STATE;
      }
    } else {
      s.status = NAME_STATE;
    }
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name) {
      beg = s.pending;
      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32$1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 255;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32$1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.gzindex = 0;
        s.status = COMMENT_STATE;
      }
    } else {
      s.status = COMMENT_STATE;
    }
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment) {
      beg = s.pending;
      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32$1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 255;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32$1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.status = HCRC_STATE;
      }
    } else {
      s.status = HCRC_STATE;
    }
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
      }
      if (s.pending + 2 <= s.pending_buf_size) {
        put_byte(s, strm.adler & 255);
        put_byte(s, strm.adler >> 8 & 255);
        strm.adler = 0;
        s.status = BUSY_STATE;
      }
    } else {
      s.status = BUSY_STATE;
    }
  }
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      s.last_flush = -1;
      return Z_OK$2;
    }
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH$2) {
    return err(strm, Z_BUF_ERROR$1);
  }
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR$1);
  }
  if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH$1 && s.status !== FINISH_STATE) {
    var bstate = s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);
    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
      }
      return Z_OK$2;
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        trees._tr_align(s);
      } else if (flush !== Z_BLOCK$1) {
        trees._tr_stored_block(s, 0, 0, false);
        if (flush === Z_FULL_FLUSH) {
          zero(s.head);
          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        return Z_OK$2;
      }
    }
  }
  if (flush !== Z_FINISH$2) {
    return Z_OK$2;
  }
  if (s.wrap <= 0) {
    return Z_STREAM_END$2;
  }
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 255);
    put_byte(s, strm.adler >> 8 & 255);
    put_byte(s, strm.adler >> 16 & 255);
    put_byte(s, strm.adler >> 24 & 255);
    put_byte(s, strm.total_in & 255);
    put_byte(s, strm.total_in >> 8 & 255);
    put_byte(s, strm.total_in >> 16 & 255);
    put_byte(s, strm.total_in >> 24 & 255);
  } else {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 65535);
  }
  flush_pending(strm);
  if (s.wrap > 0) {
    s.wrap = -s.wrap;
  }
  return s.pending !== 0 ? Z_OK$2 : Z_STREAM_END$2;
}
function deflateEnd(strm) {
  var status;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR$1;
  }
  status = strm.state.status;
  if (status !== INIT_STATE && status !== EXTRA_STATE && status !== NAME_STATE && status !== COMMENT_STATE && status !== HCRC_STATE && status !== BUSY_STATE && status !== FINISH_STATE) {
    return err(strm, Z_STREAM_ERROR$1);
  }
  strm.state = null;
  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR$1) : Z_OK$2;
}
function deflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;
  var s;
  var str, n;
  var wrap;
  var avail;
  var next;
  var input;
  var tmpDict;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR$1;
  }
  s = strm.state;
  wrap = s.wrap;
  if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) {
    return Z_STREAM_ERROR$1;
  }
  if (wrap === 1) {
    strm.adler = adler32$1(strm.adler, dictionary, dictLength, 0);
  }
  s.wrap = 0;
  if (dictLength >= s.w_size) {
    if (wrap === 0) {
      zero(s.head);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    tmpDict = new utils$5.Buf8(s.w_size);
    utils$5.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  avail = strm.avail_in;
  next = strm.next_in;
  input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead >= MIN_MATCH) {
    str = s.strstart;
    n = s.lookahead - (MIN_MATCH - 1);
    do {
      s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
      s.prev[str & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = str;
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK$2;
}
var deflateInit_1 = deflate$3.deflateInit = deflateInit;
var deflateInit2_1 = deflate$3.deflateInit2 = deflateInit2;
var deflateReset_1 = deflate$3.deflateReset = deflateReset;
var deflateResetKeep_1 = deflate$3.deflateResetKeep = deflateResetKeep;
var deflateSetHeader_1 = deflate$3.deflateSetHeader = deflateSetHeader;
var deflate_2$1 = deflate$3.deflate = deflate$2;
var deflateEnd_1 = deflate$3.deflateEnd = deflateEnd;
var deflateSetDictionary_1 = deflate$3.deflateSetDictionary = deflateSetDictionary;
var deflateInfo = deflate$3.deflateInfo = "pako deflate (from Nodeca project)";
var strings$2 = {};
"use strict";
var utils$4 = common$1;
var STR_APPLY_OK = true;
var STR_APPLY_UIA_OK = true;
try {
  String.fromCharCode.apply(null, [0]);
} catch (__) {
  STR_APPLY_OK = false;
}
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch (__) {
  STR_APPLY_UIA_OK = false;
}
var _utf8len = new utils$4.Buf8(256);
for (var q = 0; q < 256; q++) {
  _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
}
_utf8len[254] = _utf8len[254] = 1;
var string2buf = strings$2.string2buf = function(str) {
  var buf, c2, c22, m_pos, i, str_len = str.length, buf_len = 0;
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c2 = str.charCodeAt(m_pos);
    if ((c2 & 64512) === 55296 && m_pos + 1 < str_len) {
      c22 = str.charCodeAt(m_pos + 1);
      if ((c22 & 64512) === 56320) {
        c2 = 65536 + (c2 - 55296 << 10) + (c22 - 56320);
        m_pos++;
      }
    }
    buf_len += c2 < 128 ? 1 : c2 < 2048 ? 2 : c2 < 65536 ? 3 : 4;
  }
  buf = new utils$4.Buf8(buf_len);
  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c2 = str.charCodeAt(m_pos);
    if ((c2 & 64512) === 55296 && m_pos + 1 < str_len) {
      c22 = str.charCodeAt(m_pos + 1);
      if ((c22 & 64512) === 56320) {
        c2 = 65536 + (c2 - 55296 << 10) + (c22 - 56320);
        m_pos++;
      }
    }
    if (c2 < 128) {
      buf[i++] = c2;
    } else if (c2 < 2048) {
      buf[i++] = 192 | c2 >>> 6;
      buf[i++] = 128 | c2 & 63;
    } else if (c2 < 65536) {
      buf[i++] = 224 | c2 >>> 12;
      buf[i++] = 128 | c2 >>> 6 & 63;
      buf[i++] = 128 | c2 & 63;
    } else {
      buf[i++] = 240 | c2 >>> 18;
      buf[i++] = 128 | c2 >>> 12 & 63;
      buf[i++] = 128 | c2 >>> 6 & 63;
      buf[i++] = 128 | c2 & 63;
    }
  }
  return buf;
};
function buf2binstring(buf, len) {
  if (len < 65534) {
    if (buf.subarray && STR_APPLY_UIA_OK || !buf.subarray && STR_APPLY_OK) {
      return String.fromCharCode.apply(null, utils$4.shrinkBuf(buf, len));
    }
  }
  var result = "";
  for (var i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
}
var buf2binstring_1 = strings$2.buf2binstring = function(buf) {
  return buf2binstring(buf, buf.length);
};
var binstring2buf = strings$2.binstring2buf = function(str) {
  var buf = new utils$4.Buf8(str.length);
  for (var i = 0, len = buf.length; i < len; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
};
var buf2string = strings$2.buf2string = function(buf, max) {
  var i, out, c2, c_len;
  var len = max || buf.length;
  var utf16buf = new Array(len * 2);
  for (out = 0, i = 0; i < len; ) {
    c2 = buf[i++];
    if (c2 < 128) {
      utf16buf[out++] = c2;
      continue;
    }
    c_len = _utf8len[c2];
    if (c_len > 4) {
      utf16buf[out++] = 65533;
      i += c_len - 1;
      continue;
    }
    c2 &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
    while (c_len > 1 && i < len) {
      c2 = c2 << 6 | buf[i++] & 63;
      c_len--;
    }
    if (c_len > 1) {
      utf16buf[out++] = 65533;
      continue;
    }
    if (c2 < 65536) {
      utf16buf[out++] = c2;
    } else {
      c2 -= 65536;
      utf16buf[out++] = 55296 | c2 >> 10 & 1023;
      utf16buf[out++] = 56320 | c2 & 1023;
    }
  }
  return buf2binstring(utf16buf, out);
};
var utf8border = strings$2.utf8border = function(buf, max) {
  var pos;
  max = max || buf.length;
  if (max > buf.length) {
    max = buf.length;
  }
  pos = max - 1;
  while (pos >= 0 && (buf[pos] & 192) === 128) {
    pos--;
  }
  if (pos < 0) {
    return max;
  }
  if (pos === 0) {
    return max;
  }
  return pos + _utf8len[buf[pos]] > max ? pos : max;
};
"use strict";
function ZStream$2() {
  this.input = null;
  this.next_in = 0;
  this.avail_in = 0;
  this.total_in = 0;
  this.output = null;
  this.next_out = 0;
  this.avail_out = 0;
  this.total_out = 0;
  this.msg = "";
  this.state = null;
  this.data_type = 2;
  this.adler = 0;
}
var zstream = ZStream$2;
const zstream_default = /* @__PURE__ */ getDefaultExportFromCjs(zstream);
"use strict";
var zlib_deflate = deflate$3;
var utils$3 = common$1;
var strings$1 = strings$2;
var msg$1 = messages;
var ZStream$1 = zstream;
var toString$1 = Object.prototype.toString;
var Z_NO_FLUSH = 0;
var Z_FINISH$1 = 4;
var Z_OK$1 = 0;
var Z_STREAM_END$1 = 1;
var Z_SYNC_FLUSH = 2;
var Z_DEFAULT_COMPRESSION = -1;
var Z_DEFAULT_STRATEGY = 0;
var Z_DEFLATED$1 = 8;
function Deflate(options) {
  if (!(this instanceof Deflate)) return new Deflate(options);
  this.options = utils$3.assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED$1,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY,
    to: ""
  }, options || {});
  var opt = this.options;
  if (opt.raw && opt.windowBits > 0) {
    opt.windowBits = -opt.windowBits;
  } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
    opt.windowBits += 16;
  }
  this.err = 0;
  this.msg = "";
  this.ended = false;
  this.chunks = [];
  this.strm = new ZStream$1();
  this.strm.avail_out = 0;
  var status = zlib_deflate.deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy
  );
  if (status !== Z_OK$1) {
    throw new Error(msg$1[status]);
  }
  if (opt.header) {
    zlib_deflate.deflateSetHeader(this.strm, opt.header);
  }
  if (opt.dictionary) {
    var dict;
    if (typeof opt.dictionary === "string") {
      dict = strings$1.string2buf(opt.dictionary);
    } else if (toString$1.call(opt.dictionary) === "[object ArrayBuffer]") {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }
    status = zlib_deflate.deflateSetDictionary(this.strm, dict);
    if (status !== Z_OK$1) {
      throw new Error(msg$1[status]);
    }
    this._dict_set = true;
  }
}
Deflate.prototype.push = function(data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var status, _mode;
  if (this.ended) {
    return false;
  }
  _mode = mode === ~~mode ? mode : mode === true ? Z_FINISH$1 : Z_NO_FLUSH;
  if (typeof data === "string") {
    strm.input = strings$1.string2buf(data);
  } else if (toString$1.call(data) === "[object ArrayBuffer]") {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }
  strm.next_in = 0;
  strm.avail_in = strm.input.length;
  do {
    if (strm.avail_out === 0) {
      strm.output = new utils$3.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    status = zlib_deflate.deflate(strm, _mode);
    if (status !== Z_STREAM_END$1 && status !== Z_OK$1) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }
    if (strm.avail_out === 0 || strm.avail_in === 0 && (_mode === Z_FINISH$1 || _mode === Z_SYNC_FLUSH)) {
      if (this.options.to === "string") {
        this.onData(strings$1.buf2binstring(utils$3.shrinkBuf(strm.output, strm.next_out)));
      } else {
        this.onData(utils$3.shrinkBuf(strm.output, strm.next_out));
      }
    }
  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END$1);
  if (_mode === Z_FINISH$1) {
    status = zlib_deflate.deflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === Z_OK$1;
  }
  if (_mode === Z_SYNC_FLUSH) {
    this.onEnd(Z_OK$1);
    strm.avail_out = 0;
    return true;
  }
  return true;
};
Deflate.prototype.onData = function(chunk) {
  this.chunks.push(chunk);
};
Deflate.prototype.onEnd = function(status) {
  if (status === Z_OK$1) {
    if (this.options.to === "string") {
      this.result = this.chunks.join("");
    } else {
      this.result = utils$3.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};
function deflate$1(input, options) {
  var deflator = new Deflate(options);
  deflator.push(input, true);
  if (deflator.err) {
    throw deflator.msg || msg$1[deflator.err];
  }
  return deflator.result;
}
function deflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return deflate$1(input, options);
}
function gzip(input, options) {
  options = options || {};
  options.gzip = true;
  return deflate$1(input, options);
}
var Deflate_1 = deflate$4.Deflate = Deflate;
var deflate_2 = deflate$4.deflate = deflate$1;
var deflateRaw_1 = deflate$4.deflateRaw = deflateRaw;
var gzip_1 = deflate$4.gzip = gzip;
var inflate$4 = {};
var inflate$3 = {};
"use strict";
var BAD$1 = 30;
var TYPE$1 = 12;
var inffast = function inflate_fast(strm, start) {
  var state;
  var _in;
  var last;
  var _out;
  var beg;
  var end;
  var dmax;
  var wsize;
  var whave;
  var wnext;
  var s_window;
  var hold;
  var bits;
  var lcode;
  var dcode;
  var lmask;
  var dmask;
  var here;
  var op;
  var len;
  var dist;
  var from;
  var from_source;
  var input, output;
  state = strm.state;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
  dmax = state.dmax;
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;
  top:
    do {
      if (bits < 15) {
        hold += input[_in++] << bits;
        bits += 8;
        hold += input[_in++] << bits;
        bits += 8;
      }
      here = lcode[hold & lmask];
      dolen:
        for (; ; ) {
          op = here >>> 24;
          hold >>>= op;
          bits -= op;
          op = here >>> 16 & 255;
          if (op === 0) {
            output[_out++] = here & 65535;
          } else if (op & 16) {
            len = here & 65535;
            op &= 15;
            if (op) {
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
              len += hold & (1 << op) - 1;
              hold >>>= op;
              bits -= op;
            }
            if (bits < 15) {
              hold += input[_in++] << bits;
              bits += 8;
              hold += input[_in++] << bits;
              bits += 8;
            }
            here = dcode[hold & dmask];
            dodist:
              for (; ; ) {
                op = here >>> 24;
                hold >>>= op;
                bits -= op;
                op = here >>> 16 & 255;
                if (op & 16) {
                  dist = here & 65535;
                  op &= 15;
                  if (bits < op) {
                    hold += input[_in++] << bits;
                    bits += 8;
                    if (bits < op) {
                      hold += input[_in++] << bits;
                      bits += 8;
                    }
                  }
                  dist += hold & (1 << op) - 1;
                  if (dist > dmax) {
                    strm.msg = "invalid distance too far back";
                    state.mode = BAD$1;
                    break top;
                  }
                  hold >>>= op;
                  bits -= op;
                  op = _out - beg;
                  if (dist > op) {
                    op = dist - op;
                    if (op > whave) {
                      if (state.sane) {
                        strm.msg = "invalid distance too far back";
                        state.mode = BAD$1;
                        break top;
                      }
                    }
                    from = 0;
                    from_source = s_window;
                    if (wnext === 0) {
                      from += wsize - op;
                      if (op < len) {
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = _out - dist;
                        from_source = output;
                      }
                    } else if (wnext < op) {
                      from += wsize + wnext - op;
                      op -= wnext;
                      if (op < len) {
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = 0;
                        if (wnext < len) {
                          op = wnext;
                          len -= op;
                          do {
                            output[_out++] = s_window[from++];
                          } while (--op);
                          from = _out - dist;
                          from_source = output;
                        }
                      }
                    } else {
                      from += wnext - op;
                      if (op < len) {
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = _out - dist;
                        from_source = output;
                      }
                    }
                    while (len > 2) {
                      output[_out++] = from_source[from++];
                      output[_out++] = from_source[from++];
                      output[_out++] = from_source[from++];
                      len -= 3;
                    }
                    if (len) {
                      output[_out++] = from_source[from++];
                      if (len > 1) {
                        output[_out++] = from_source[from++];
                      }
                    }
                  } else {
                    from = _out - dist;
                    do {
                      output[_out++] = output[from++];
                      output[_out++] = output[from++];
                      output[_out++] = output[from++];
                      len -= 3;
                    } while (len > 2);
                    if (len) {
                      output[_out++] = output[from++];
                      if (len > 1) {
                        output[_out++] = output[from++];
                      }
                    }
                  }
                } else if ((op & 64) === 0) {
                  here = dcode[(here & 65535) + (hold & (1 << op) - 1)];
                  continue dodist;
                } else {
                  strm.msg = "invalid distance code";
                  state.mode = BAD$1;
                  break top;
                }
                break;
              }
          } else if ((op & 64) === 0) {
            here = lcode[(here & 65535) + (hold & (1 << op) - 1)];
            continue dolen;
          } else if (op & 32) {
            state.mode = TYPE$1;
            break top;
          } else {
            strm.msg = "invalid literal/length code";
            state.mode = BAD$1;
            break top;
          }
          break;
        }
    } while (_in < last && _out < end);
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
  strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
  state.hold = hold;
  state.bits = bits;
  return;
};
const inffast_default = /* @__PURE__ */ getDefaultExportFromCjs(inffast);
"use strict";
var utils$2 = common$1;
var MAXBITS = 15;
var ENOUGH_LENS$1 = 852;
var ENOUGH_DISTS$1 = 592;
var CODES$1 = 0;
var LENS$1 = 1;
var DISTS$1 = 2;
var lbase = [
  /* Length codes 257..285 base */
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
];
var lext = [
  /* Length codes 257..285 extra */
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  72,
  78
];
var dbase = [
  /* Distance codes 0..29 base */
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577,
  0,
  0
];
var dext = [
  /* Distance codes 0..29 extra */
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
];
var inftrees = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
  var bits = opts.bits;
  var len = 0;
  var sym = 0;
  var min = 0, max = 0;
  var root = 0;
  var curr = 0;
  var drop = 0;
  var left = 0;
  var used = 0;
  var huff = 0;
  var incr;
  var fill;
  var low;
  var mask;
  var next;
  var base = null;
  var base_index = 0;
  var end;
  var count = new utils$2.Buf16(MAXBITS + 1);
  var offs = new utils$2.Buf16(MAXBITS + 1);
  var extra = null;
  var extra_index = 0;
  var here_bits, here_op, here_val;
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) {
      break;
    }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {
    table[table_index++] = 1 << 24 | 64 << 16 | 0;
    table[table_index++] = 1 << 24 | 64 << 16 | 0;
    opts.bits = 1;
    return 0;
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) {
      break;
    }
  }
  if (root < min) {
    root = min;
  }
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }
  }
  if (left > 0 && (type === CODES$1 || max !== 1)) {
    return -1;
  }
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }
  if (type === CODES$1) {
    base = extra = work;
    end = 19;
  } else if (type === LENS$1) {
    base = lbase;
    base_index -= 257;
    extra = lext;
    extra_index -= 257;
    end = 256;
  } else {
    base = dbase;
    extra = dext;
    end = -1;
  }
  huff = 0;
  sym = 0;
  len = min;
  next = table_index;
  curr = root;
  drop = 0;
  low = -1;
  used = 1 << root;
  mask = used - 1;
  if (type === LENS$1 && used > ENOUGH_LENS$1 || type === DISTS$1 && used > ENOUGH_DISTS$1) {
    return 1;
  }
  for (; ; ) {
    here_bits = len - drop;
    if (work[sym] < end) {
      here_op = 0;
      here_val = work[sym];
    } else if (work[sym] > end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base[base_index + work[sym]];
    } else {
      here_op = 32 + 64;
      here_val = 0;
    }
    incr = 1 << len - drop;
    fill = 1 << curr;
    min = fill;
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
    } while (fill !== 0);
    incr = 1 << len - 1;
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }
    sym++;
    if (--count[len] === 0) {
      if (len === max) {
        break;
      }
      len = lens[lens_index + work[sym]];
    }
    if (len > root && (huff & mask) !== low) {
      if (drop === 0) {
        drop = root;
      }
      next += min;
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) {
          break;
        }
        curr++;
        left <<= 1;
      }
      used += 1 << curr;
      if (type === LENS$1 && used > ENOUGH_LENS$1 || type === DISTS$1 && used > ENOUGH_DISTS$1) {
        return 1;
      }
      low = huff & mask;
      table[low] = root << 24 | curr << 16 | next - table_index | 0;
    }
  }
  if (huff !== 0) {
    table[next + huff] = len - drop << 24 | 64 << 16 | 0;
  }
  opts.bits = root;
  return 0;
};
const inftrees_default = /* @__PURE__ */ getDefaultExportFromCjs(inftrees);
"use strict";
var utils$1 = common$1;
var adler32 = adler32_1;
var crc32 = crc32_1;
var inflate_fast2 = inffast;
var inflate_table2 = inftrees;
var CODES = 0;
var LENS = 1;
var DISTS = 2;
var Z_FINISH = 4;
var Z_BLOCK = 5;
var Z_TREES = 6;
var Z_OK = 0;
var Z_STREAM_END = 1;
var Z_NEED_DICT = 2;
var Z_STREAM_ERROR = -2;
var Z_DATA_ERROR = -3;
var Z_MEM_ERROR = -4;
var Z_BUF_ERROR = -5;
var Z_DEFLATED = 8;
var HEAD = 1;
var FLAGS = 2;
var TIME = 3;
var OS = 4;
var EXLEN = 5;
var EXTRA = 6;
var NAME = 7;
var COMMENT = 8;
var HCRC = 9;
var DICTID = 10;
var DICT = 11;
var TYPE = 12;
var TYPEDO = 13;
var STORED = 14;
var COPY_ = 15;
var COPY = 16;
var TABLE = 17;
var LENLENS = 18;
var CODELENS = 19;
var LEN_ = 20;
var LEN = 21;
var LENEXT = 22;
var DIST = 23;
var DISTEXT = 24;
var MATCH = 25;
var LIT = 26;
var CHECK = 27;
var LENGTH = 28;
var DONE = 29;
var BAD = 30;
var MEM = 31;
var SYNC = 32;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
var MAX_WBITS = 15;
var DEF_WBITS = MAX_WBITS;
function zswap32(q) {
  return (q >>> 24 & 255) + (q >>> 8 & 65280) + ((q & 65280) << 8) + ((q & 255) << 24);
}
function InflateState() {
  this.mode = 0;
  this.last = false;
  this.wrap = 0;
  this.havedict = false;
  this.flags = 0;
  this.dmax = 0;
  this.check = 0;
  this.total = 0;
  this.head = null;
  this.wbits = 0;
  this.wsize = 0;
  this.whave = 0;
  this.wnext = 0;
  this.window = null;
  this.hold = 0;
  this.bits = 0;
  this.length = 0;
  this.offset = 0;
  this.extra = 0;
  this.lencode = null;
  this.distcode = null;
  this.lenbits = 0;
  this.distbits = 0;
  this.ncode = 0;
  this.nlen = 0;
  this.ndist = 0;
  this.have = 0;
  this.next = null;
  this.lens = new utils$1.Buf16(320);
  this.work = new utils$1.Buf16(288);
  this.lendyn = null;
  this.distdyn = null;
  this.sane = 0;
  this.back = 0;
  this.was = 0;
}
function inflateResetKeep(strm) {
  var state;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR;
  }
  state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = "";
  if (state.wrap) {
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null;
  state.hold = 0;
  state.bits = 0;
  state.lencode = state.lendyn = new utils$1.Buf32(ENOUGH_LENS);
  state.distcode = state.distdyn = new utils$1.Buf32(ENOUGH_DISTS);
  state.sane = 1;
  state.back = -1;
  return Z_OK;
}
function inflateReset(strm) {
  var state;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR;
  }
  state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);
}
function inflateReset2(strm, windowBits) {
  var wrap;
  var state;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR;
  }
  state = strm.state;
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  } else {
    wrap = (windowBits >> 4) + 1;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
}
function inflateInit2(strm, windowBits) {
  var ret;
  var state;
  if (!strm) {
    return Z_STREAM_ERROR;
  }
  state = new InflateState();
  strm.state = state;
  state.window = null;
  ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK) {
    strm.state = null;
  }
  return ret;
}
function inflateInit(strm) {
  return inflateInit2(strm, DEF_WBITS);
}
var virgin = true;
var lenfix, distfix;
function fixedtables(state) {
  if (virgin) {
    var sym;
    lenfix = new utils$1.Buf32(512);
    distfix = new utils$1.Buf32(32);
    sym = 0;
    while (sym < 144) {
      state.lens[sym++] = 8;
    }
    while (sym < 256) {
      state.lens[sym++] = 9;
    }
    while (sym < 280) {
      state.lens[sym++] = 7;
    }
    while (sym < 288) {
      state.lens[sym++] = 8;
    }
    inflate_table2(LENS, state.lens, 0, 288, lenfix, 0, state.work, { bits: 9 });
    sym = 0;
    while (sym < 32) {
      state.lens[sym++] = 5;
    }
    inflate_table2(DISTS, state.lens, 0, 32, distfix, 0, state.work, { bits: 5 });
    virgin = false;
  }
  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
}
function updatewindow(strm, src, end, copy) {
  var dist;
  var state = strm.state;
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;
    state.window = new utils$1.Buf8(state.wsize);
  }
  if (copy >= state.wsize) {
    utils$1.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  } else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    utils$1.arraySet(state.window, src, end - copy, dist, state.wnext);
    copy -= dist;
    if (copy) {
      utils$1.arraySet(state.window, src, end - copy, copy, 0);
      state.wnext = copy;
      state.whave = state.wsize;
    } else {
      state.wnext += dist;
      if (state.wnext === state.wsize) {
        state.wnext = 0;
      }
      if (state.whave < state.wsize) {
        state.whave += dist;
      }
    }
  }
  return 0;
}
function inflate$2(strm, flush) {
  var state;
  var input, output;
  var next;
  var put;
  var have, left;
  var hold;
  var bits;
  var _in, _out;
  var copy;
  var from;
  var from_source;
  var here = 0;
  var here_bits, here_op, here_val;
  var last_bits, last_op, last_val;
  var len;
  var ret;
  var hbuf = new utils$1.Buf8(4);
  var opts;
  var n;
  var order = (
    /* permutation of code lengths */
    [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
  );
  if (!strm || !strm.state || !strm.output || !strm.input && strm.avail_in !== 0) {
    return Z_STREAM_ERROR;
  }
  state = strm.state;
  if (state.mode === TYPE) {
    state.mode = TYPEDO;
  }
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  _in = have;
  _out = left;
  ret = Z_OK;
  inf_leave:
    for (; ; ) {
      switch (state.mode) {
        case HEAD:
          if (state.wrap === 0) {
            state.mode = TYPEDO;
            break;
          }
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if (state.wrap & 2 && hold === 35615) {
            state.check = 0;
            hbuf[0] = hold & 255;
            hbuf[1] = hold >>> 8 & 255;
            state.check = crc32(state.check, hbuf, 2, 0);
            hold = 0;
            bits = 0;
            state.mode = FLAGS;
            break;
          }
          state.flags = 0;
          if (state.head) {
            state.head.done = false;
          }
          if (!(state.wrap & 1) || /* check if zlib header allowed */
          (((hold & 255) << 8) + (hold >> 8)) % 31) {
            strm.msg = "incorrect header check";
            state.mode = BAD;
            break;
          }
          if ((hold & 15) !== Z_DEFLATED) {
            strm.msg = "unknown compression method";
            state.mode = BAD;
            break;
          }
          hold >>>= 4;
          bits -= 4;
          len = (hold & 15) + 8;
          if (state.wbits === 0) {
            state.wbits = len;
          } else if (len > state.wbits) {
            strm.msg = "invalid window size";
            state.mode = BAD;
            break;
          }
          state.dmax = 1 << len;
          strm.adler = state.check = 1;
          state.mode = hold & 512 ? DICTID : TYPE;
          hold = 0;
          bits = 0;
          break;
        case FLAGS:
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          state.flags = hold;
          if ((state.flags & 255) !== Z_DEFLATED) {
            strm.msg = "unknown compression method";
            state.mode = BAD;
            break;
          }
          if (state.flags & 57344) {
            strm.msg = "unknown header flags set";
            state.mode = BAD;
            break;
          }
          if (state.head) {
            state.head.text = hold >> 8 & 1;
          }
          if (state.flags & 512) {
            hbuf[0] = hold & 255;
            hbuf[1] = hold >>> 8 & 255;
            state.check = crc32(state.check, hbuf, 2, 0);
          }
          hold = 0;
          bits = 0;
          state.mode = TIME;
        case TIME:
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if (state.head) {
            state.head.time = hold;
          }
          if (state.flags & 512) {
            hbuf[0] = hold & 255;
            hbuf[1] = hold >>> 8 & 255;
            hbuf[2] = hold >>> 16 & 255;
            hbuf[3] = hold >>> 24 & 255;
            state.check = crc32(state.check, hbuf, 4, 0);
          }
          hold = 0;
          bits = 0;
          state.mode = OS;
        case OS:
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if (state.head) {
            state.head.xflags = hold & 255;
            state.head.os = hold >> 8;
          }
          if (state.flags & 512) {
            hbuf[0] = hold & 255;
            hbuf[1] = hold >>> 8 & 255;
            state.check = crc32(state.check, hbuf, 2, 0);
          }
          hold = 0;
          bits = 0;
          state.mode = EXLEN;
        case EXLEN:
          if (state.flags & 1024) {
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.length = hold;
            if (state.head) {
              state.head.extra_len = hold;
            }
            if (state.flags & 512) {
              hbuf[0] = hold & 255;
              hbuf[1] = hold >>> 8 & 255;
              state.check = crc32(state.check, hbuf, 2, 0);
            }
            hold = 0;
            bits = 0;
          } else if (state.head) {
            state.head.extra = null;
          }
          state.mode = EXTRA;
        case EXTRA:
          if (state.flags & 1024) {
            copy = state.length;
            if (copy > have) {
              copy = have;
            }
            if (copy) {
              if (state.head) {
                len = state.head.extra_len - state.length;
                if (!state.head.extra) {
                  state.head.extra = new Array(state.head.extra_len);
                }
                utils$1.arraySet(
                  state.head.extra,
                  input,
                  next,
                  // extra field is limited to 65536 bytes
                  // - no need for additional size check
                  copy,
                  /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                  len
                );
              }
              if (state.flags & 512) {
                state.check = crc32(state.check, input, copy, next);
              }
              have -= copy;
              next += copy;
              state.length -= copy;
            }
            if (state.length) {
              break inf_leave;
            }
          }
          state.length = 0;
          state.mode = NAME;
        case NAME:
          if (state.flags & 2048) {
            if (have === 0) {
              break inf_leave;
            }
            copy = 0;
            do {
              len = input[next + copy++];
              if (state.head && len && state.length < 65536) {
                state.head.name += String.fromCharCode(len);
              }
            } while (len && copy < have);
            if (state.flags & 512) {
              state.check = crc32(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            if (len) {
              break inf_leave;
            }
          } else if (state.head) {
            state.head.name = null;
          }
          state.length = 0;
          state.mode = COMMENT;
        case COMMENT:
          if (state.flags & 4096) {
            if (have === 0) {
              break inf_leave;
            }
            copy = 0;
            do {
              len = input[next + copy++];
              if (state.head && len && state.length < 65536) {
                state.head.comment += String.fromCharCode(len);
              }
            } while (len && copy < have);
            if (state.flags & 512) {
              state.check = crc32(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            if (len) {
              break inf_leave;
            }
          } else if (state.head) {
            state.head.comment = null;
          }
          state.mode = HCRC;
        case HCRC:
          if (state.flags & 512) {
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (hold !== (state.check & 65535)) {
              strm.msg = "header crc mismatch";
              state.mode = BAD;
              break;
            }
            hold = 0;
            bits = 0;
          }
          if (state.head) {
            state.head.hcrc = state.flags >> 9 & 1;
            state.head.done = true;
          }
          strm.adler = state.check = 0;
          state.mode = TYPE;
          break;
        case DICTID:
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          strm.adler = state.check = zswap32(hold);
          hold = 0;
          bits = 0;
          state.mode = DICT;
        case DICT:
          if (state.havedict === 0) {
            strm.next_out = put;
            strm.avail_out = left;
            strm.next_in = next;
            strm.avail_in = have;
            state.hold = hold;
            state.bits = bits;
            return Z_NEED_DICT;
          }
          strm.adler = state.check = 1;
          state.mode = TYPE;
        case TYPE:
          if (flush === Z_BLOCK || flush === Z_TREES) {
            break inf_leave;
          }
        case TYPEDO:
          if (state.last) {
            hold >>>= bits & 7;
            bits -= bits & 7;
            state.mode = CHECK;
            break;
          }
          while (bits < 3) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          state.last = hold & 1;
          hold >>>= 1;
          bits -= 1;
          switch (hold & 3) {
            case 0:
              state.mode = STORED;
              break;
            case 1:
              fixedtables(state);
              state.mode = LEN_;
              if (flush === Z_TREES) {
                hold >>>= 2;
                bits -= 2;
                break inf_leave;
              }
              break;
            case 2:
              state.mode = TABLE;
              break;
            case 3:
              strm.msg = "invalid block type";
              state.mode = BAD;
          }
          hold >>>= 2;
          bits -= 2;
          break;
        case STORED:
          hold >>>= bits & 7;
          bits -= bits & 7;
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if ((hold & 65535) !== (hold >>> 16 ^ 65535)) {
            strm.msg = "invalid stored block lengths";
            state.mode = BAD;
            break;
          }
          state.length = hold & 65535;
          hold = 0;
          bits = 0;
          state.mode = COPY_;
          if (flush === Z_TREES) {
            break inf_leave;
          }
        case COPY_:
          state.mode = COPY;
        case COPY:
          copy = state.length;
          if (copy) {
            if (copy > have) {
              copy = have;
            }
            if (copy > left) {
              copy = left;
            }
            if (copy === 0) {
              break inf_leave;
            }
            utils$1.arraySet(output, input, next, copy, put);
            have -= copy;
            next += copy;
            left -= copy;
            put += copy;
            state.length -= copy;
            break;
          }
          state.mode = TYPE;
          break;
        case TABLE:
          while (bits < 14) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          state.nlen = (hold & 31) + 257;
          hold >>>= 5;
          bits -= 5;
          state.ndist = (hold & 31) + 1;
          hold >>>= 5;
          bits -= 5;
          state.ncode = (hold & 15) + 4;
          hold >>>= 4;
          bits -= 4;
          if (state.nlen > 286 || state.ndist > 30) {
            strm.msg = "too many length or distance symbols";
            state.mode = BAD;
            break;
          }
          state.have = 0;
          state.mode = LENLENS;
        case LENLENS:
          while (state.have < state.ncode) {
            while (bits < 3) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.lens[order[state.have++]] = hold & 7;
            hold >>>= 3;
            bits -= 3;
          }
          while (state.have < 19) {
            state.lens[order[state.have++]] = 0;
          }
          state.lencode = state.lendyn;
          state.lenbits = 7;
          opts = { bits: state.lenbits };
          ret = inflate_table2(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
          state.lenbits = opts.bits;
          if (ret) {
            strm.msg = "invalid code lengths set";
            state.mode = BAD;
            break;
          }
          state.have = 0;
          state.mode = CODELENS;
        case CODELENS:
          while (state.have < state.nlen + state.ndist) {
            for (; ; ) {
              here = state.lencode[hold & (1 << state.lenbits) - 1];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (here_val < 16) {
              hold >>>= here_bits;
              bits -= here_bits;
              state.lens[state.have++] = here_val;
            } else {
              if (here_val === 16) {
                n = here_bits + 2;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= here_bits;
                bits -= here_bits;
                if (state.have === 0) {
                  strm.msg = "invalid bit length repeat";
                  state.mode = BAD;
                  break;
                }
                len = state.lens[state.have - 1];
                copy = 3 + (hold & 3);
                hold >>>= 2;
                bits -= 2;
              } else if (here_val === 17) {
                n = here_bits + 3;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= here_bits;
                bits -= here_bits;
                len = 0;
                copy = 3 + (hold & 7);
                hold >>>= 3;
                bits -= 3;
              } else {
                n = here_bits + 7;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= here_bits;
                bits -= here_bits;
                len = 0;
                copy = 11 + (hold & 127);
                hold >>>= 7;
                bits -= 7;
              }
              if (state.have + copy > state.nlen + state.ndist) {
                strm.msg = "invalid bit length repeat";
                state.mode = BAD;
                break;
              }
              while (copy--) {
                state.lens[state.have++] = len;
              }
            }
          }
          if (state.mode === BAD) {
            break;
          }
          if (state.lens[256] === 0) {
            strm.msg = "invalid code -- missing end-of-block";
            state.mode = BAD;
            break;
          }
          state.lenbits = 9;
          opts = { bits: state.lenbits };
          ret = inflate_table2(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
          state.lenbits = opts.bits;
          if (ret) {
            strm.msg = "invalid literal/lengths set";
            state.mode = BAD;
            break;
          }
          state.distbits = 6;
          state.distcode = state.distdyn;
          opts = { bits: state.distbits };
          ret = inflate_table2(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
          state.distbits = opts.bits;
          if (ret) {
            strm.msg = "invalid distances set";
            state.mode = BAD;
            break;
          }
          state.mode = LEN_;
          if (flush === Z_TREES) {
            break inf_leave;
          }
        case LEN_:
          state.mode = LEN;
        case LEN:
          if (have >= 6 && left >= 258) {
            strm.next_out = put;
            strm.avail_out = left;
            strm.next_in = next;
            strm.avail_in = have;
            state.hold = hold;
            state.bits = bits;
            inflate_fast2(strm, _out);
            put = strm.next_out;
            output = strm.output;
            left = strm.avail_out;
            next = strm.next_in;
            input = strm.input;
            have = strm.avail_in;
            hold = state.hold;
            bits = state.bits;
            if (state.mode === TYPE) {
              state.back = -1;
            }
            break;
          }
          state.back = 0;
          for (; ; ) {
            here = state.lencode[hold & (1 << state.lenbits) - 1];
            here_bits = here >>> 24;
            here_op = here >>> 16 & 255;
            here_val = here & 65535;
            if (here_bits <= bits) {
              break;
            }
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if (here_op && (here_op & 240) === 0) {
            last_bits = here_bits;
            last_op = here_op;
            last_val = here_val;
            for (; ; ) {
              here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (last_bits + here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            hold >>>= last_bits;
            bits -= last_bits;
            state.back += last_bits;
          }
          hold >>>= here_bits;
          bits -= here_bits;
          state.back += here_bits;
          state.length = here_val;
          if (here_op === 0) {
            state.mode = LIT;
            break;
          }
          if (here_op & 32) {
            state.back = -1;
            state.mode = TYPE;
            break;
          }
          if (here_op & 64) {
            strm.msg = "invalid literal/length code";
            state.mode = BAD;
            break;
          }
          state.extra = here_op & 15;
          state.mode = LENEXT;
        case LENEXT:
          if (state.extra) {
            n = state.extra;
            while (bits < n) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.length += hold & (1 << state.extra) - 1;
            hold >>>= state.extra;
            bits -= state.extra;
            state.back += state.extra;
          }
          state.was = state.length;
          state.mode = DIST;
        case DIST:
          for (; ; ) {
            here = state.distcode[hold & (1 << state.distbits) - 1];
            here_bits = here >>> 24;
            here_op = here >>> 16 & 255;
            here_val = here & 65535;
            if (here_bits <= bits) {
              break;
            }
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if ((here_op & 240) === 0) {
            last_bits = here_bits;
            last_op = here_op;
            last_val = here_val;
            for (; ; ) {
              here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (last_bits + here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            hold >>>= last_bits;
            bits -= last_bits;
            state.back += last_bits;
          }
          hold >>>= here_bits;
          bits -= here_bits;
          state.back += here_bits;
          if (here_op & 64) {
            strm.msg = "invalid distance code";
            state.mode = BAD;
            break;
          }
          state.offset = here_val;
          state.extra = here_op & 15;
          state.mode = DISTEXT;
        case DISTEXT:
          if (state.extra) {
            n = state.extra;
            while (bits < n) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.offset += hold & (1 << state.extra) - 1;
            hold >>>= state.extra;
            bits -= state.extra;
            state.back += state.extra;
          }
          if (state.offset > state.dmax) {
            strm.msg = "invalid distance too far back";
            state.mode = BAD;
            break;
          }
          state.mode = MATCH;
        case MATCH:
          if (left === 0) {
            break inf_leave;
          }
          copy = _out - left;
          if (state.offset > copy) {
            copy = state.offset - copy;
            if (copy > state.whave) {
              if (state.sane) {
                strm.msg = "invalid distance too far back";
                state.mode = BAD;
                break;
              }
            }
            if (copy > state.wnext) {
              copy -= state.wnext;
              from = state.wsize - copy;
            } else {
              from = state.wnext - copy;
            }
            if (copy > state.length) {
              copy = state.length;
            }
            from_source = state.window;
          } else {
            from_source = output;
            from = put - state.offset;
            copy = state.length;
          }
          if (copy > left) {
            copy = left;
          }
          left -= copy;
          state.length -= copy;
          do {
            output[put++] = from_source[from++];
          } while (--copy);
          if (state.length === 0) {
            state.mode = LEN;
          }
          break;
        case LIT:
          if (left === 0) {
            break inf_leave;
          }
          output[put++] = state.length;
          left--;
          state.mode = LEN;
          break;
        case CHECK:
          if (state.wrap) {
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold |= input[next++] << bits;
              bits += 8;
            }
            _out -= left;
            strm.total_out += _out;
            state.total += _out;
            if (_out) {
              strm.adler = state.check = /*UPDATE(state.check, put - _out, _out);*/
              state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out);
            }
            _out = left;
            if ((state.flags ? hold : zswap32(hold)) !== state.check) {
              strm.msg = "incorrect data check";
              state.mode = BAD;
              break;
            }
            hold = 0;
            bits = 0;
          }
          state.mode = LENGTH;
        case LENGTH:
          if (state.wrap && state.flags) {
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (hold !== (state.total & 4294967295)) {
              strm.msg = "incorrect length check";
              state.mode = BAD;
              break;
            }
            hold = 0;
            bits = 0;
          }
          state.mode = DONE;
        case DONE:
          ret = Z_STREAM_END;
          break inf_leave;
        case BAD:
          ret = Z_DATA_ERROR;
          break inf_leave;
        case MEM:
          return Z_MEM_ERROR;
        case SYNC:
        default:
          return Z_STREAM_ERROR;
      }
    }
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH)) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap && _out) {
    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
    state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out);
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if ((_in === 0 && _out === 0 || flush === Z_FINISH) && ret === Z_OK) {
    ret = Z_BUF_ERROR;
  }
  return ret;
}
function inflateEnd(strm) {
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR;
  }
  var state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK;
}
function inflateGetHeader(strm, head) {
  var state;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR;
  }
  state = strm.state;
  if ((state.wrap & 2) === 0) {
    return Z_STREAM_ERROR;
  }
  state.head = head;
  head.done = false;
  return Z_OK;
}
function inflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;
  var state;
  var dictid;
  var ret;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR;
  }
  state = strm.state;
  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR;
  }
  if (state.mode === DICT) {
    dictid = 1;
    dictid = adler32(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR;
    }
  }
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR;
  }
  state.havedict = 1;
  return Z_OK;
}
var inflateReset_1 = inflate$3.inflateReset = inflateReset;
var inflateReset2_1 = inflate$3.inflateReset2 = inflateReset2;
var inflateResetKeep_1 = inflate$3.inflateResetKeep = inflateResetKeep;
var inflateInit_1 = inflate$3.inflateInit = inflateInit;
var inflateInit2_1 = inflate$3.inflateInit2 = inflateInit2;
var inflate_2$1 = inflate$3.inflate = inflate$2;
var inflateEnd_1 = inflate$3.inflateEnd = inflateEnd;
var inflateGetHeader_1 = inflate$3.inflateGetHeader = inflateGetHeader;
var inflateSetDictionary_1 = inflate$3.inflateSetDictionary = inflateSetDictionary;
var inflateInfo = inflate$3.inflateInfo = "pako inflate (from Nodeca project)";
"use strict";
var constants$1 = {
  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  //Z_MEM_ERROR:     -4,
  Z_BUF_ERROR: -5,
  //Z_VERSION_ERROR: -6,
  /* compression levels */
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY: 0,
  Z_TEXT: 1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN: 2,
  /* The deflate compression method */
  Z_DEFLATED: 8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};
const constants_default = /* @__PURE__ */ getDefaultExportFromCjs(constants$1);
"use strict";
function GZheader$1() {
  this.text = 0;
  this.time = 0;
  this.xflags = 0;
  this.os = 0;
  this.extra = null;
  this.extra_len = 0;
  this.name = "";
  this.comment = "";
  this.hcrc = 0;
  this.done = false;
}
var gzheader = GZheader$1;
const gzheader_default = /* @__PURE__ */ getDefaultExportFromCjs(gzheader);
"use strict";
var zlib_inflate = inflate$3;
var utils = common$1;
var strings = strings$2;
var c = constants$1;
var msg = messages;
var ZStream = zstream;
var GZheader = gzheader;
var toString = Object.prototype.toString;
function Inflate(options) {
  if (!(this instanceof Inflate)) return new Inflate(options);
  this.options = utils.assign({
    chunkSize: 16384,
    windowBits: 0,
    to: ""
  }, options || {});
  var opt = this.options;
  if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) {
      opt.windowBits = -15;
    }
  }
  if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) {
    opt.windowBits += 32;
  }
  if (opt.windowBits > 15 && opt.windowBits < 48) {
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }
  this.err = 0;
  this.msg = "";
  this.ended = false;
  this.chunks = [];
  this.strm = new ZStream();
  this.strm.avail_out = 0;
  var status = zlib_inflate.inflateInit2(
    this.strm,
    opt.windowBits
  );
  if (status !== c.Z_OK) {
    throw new Error(msg[status]);
  }
  this.header = new GZheader();
  zlib_inflate.inflateGetHeader(this.strm, this.header);
  if (opt.dictionary) {
    if (typeof opt.dictionary === "string") {
      opt.dictionary = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
      opt.dictionary = new Uint8Array(opt.dictionary);
    }
    if (opt.raw) {
      status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);
      if (status !== c.Z_OK) {
        throw new Error(msg[status]);
      }
    }
  }
}
Inflate.prototype.push = function(data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var dictionary = this.options.dictionary;
  var status, _mode;
  var next_out_utf8, tail, utf8str;
  var allowBufError = false;
  if (this.ended) {
    return false;
  }
  _mode = mode === ~~mode ? mode : mode === true ? c.Z_FINISH : c.Z_NO_FLUSH;
  if (typeof data === "string") {
    strm.input = strings.binstring2buf(data);
  } else if (toString.call(data) === "[object ArrayBuffer]") {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }
  strm.next_in = 0;
  strm.avail_in = strm.input.length;
  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);
    if (status === c.Z_NEED_DICT && dictionary) {
      status = zlib_inflate.inflateSetDictionary(this.strm, dictionary);
    }
    if (status === c.Z_BUF_ERROR && allowBufError === true) {
      status = c.Z_OK;
      allowBufError = false;
    }
    if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }
    if (strm.next_out) {
      if (strm.avail_out === 0 || status === c.Z_STREAM_END || strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH)) {
        if (this.options.to === "string") {
          next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
          tail = strm.next_out - next_out_utf8;
          utf8str = strings.buf2string(strm.output, next_out_utf8);
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) {
            utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0);
          }
          this.onData(utf8str);
        } else {
          this.onData(utils.shrinkBuf(strm.output, strm.next_out));
        }
      }
    }
    if (strm.avail_in === 0 && strm.avail_out === 0) {
      allowBufError = true;
    }
  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);
  if (status === c.Z_STREAM_END) {
    _mode = c.Z_FINISH;
  }
  if (_mode === c.Z_FINISH) {
    status = zlib_inflate.inflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === c.Z_OK;
  }
  if (_mode === c.Z_SYNC_FLUSH) {
    this.onEnd(c.Z_OK);
    strm.avail_out = 0;
    return true;
  }
  return true;
};
Inflate.prototype.onData = function(chunk) {
  this.chunks.push(chunk);
};
Inflate.prototype.onEnd = function(status) {
  if (status === c.Z_OK) {
    if (this.options.to === "string") {
      this.result = this.chunks.join("");
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};
function inflate$1(input, options) {
  var inflator = new Inflate(options);
  inflator.push(input, true);
  if (inflator.err) {
    throw inflator.msg || msg[inflator.err];
  }
  return inflator.result;
}
function inflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return inflate$1(input, options);
}
var Inflate_1 = inflate$4.Inflate = Inflate;
var inflate_2 = inflate$4.inflate = inflate$1;
var inflateRaw_1 = inflate$4.inflateRaw = inflateRaw;
var ungzip = inflate$4.ungzip = inflate$1;
"use strict";
var assign = common$1.assign;
var deflate = deflate$4;
var inflate = inflate$4;
var constants = constants$1;
var pako = {};
assign(pako, deflate, inflate, constants);
var pako_1 = pako;
const index = /* @__PURE__ */ getDefaultExportFromCjs(pako_1);
class HWPDocument {
  constructor(header, info, sections) {
    this.header = header;
    this.info = info;
    this.sections = sections;
  }
}
class HWPHeader {
  constructor(version, signature, properties) {
    this.version = version;
    this.signature = signature;
    this.properties = properties;
  }
}
class HWPVersion {
  constructor(major, minor, build, revision) {
    this.major = major;
    this.minor = minor;
    this.build = build;
    this.revision = revision;
  }
  isCompatible(target) {
    return this.major === target.major && this.minor <= target.minor;
  }
  gte(target) {
    if (this.major > target.major) {
      return true;
    }
    if (this.major < target.major) {
      return false;
    }
    if (this.minor > target.minor) {
      return true;
    }
    if (this.minor < target.minor) {
      return false;
    }
    if (this.build > target.build) {
      return true;
    }
    if (this.build < target.build) {
      return false;
    }
    if (this.revision >= target.revision) {
      return true;
    }
    return false;
  }
  toString() {
    return `${this.major}.${this.minor}.${this.build}.${this.revision}`;
  }
  toJSON() {
    return this.toString();
  }
}
var FillType = /* @__PURE__ */ ((FillType2) => {
  FillType2[FillType2["None"] = 0] = "None";
  FillType2[FillType2["Single"] = 1] = "Single";
  FillType2[FillType2["Image"] = 2] = "Image";
  FillType2[FillType2["Gradation"] = 4] = "Gradation";
  return FillType2;
})(FillType || {});
const HWPTAG_BEGIN = 16;
var DocInfoTagID = ((DocInfoTagID2) => {
  DocInfoTagID2[DocInfoTagID2["HWPTAG_DOCUMENT_PROPERTIES"] = HWPTAG_BEGIN] = "HWPTAG_DOCUMENT_PROPERTIES";
  DocInfoTagID2[DocInfoTagID2["HWPTAG_ID_MAPPINGS"] = HWPTAG_BEGIN + 1] = "HWPTAG_ID_MAPPINGS";
  DocInfoTagID2[DocInfoTagID2["HWPTAG_BIN_DATA"] = HWPTAG_BEGIN + 2] = "HWPTAG_BIN_DATA";
  DocInfoTagID2[DocInfoTagID2["HWPTAG_FACE_NAME"] = HWPTAG_BEGIN + 3] = "HWPTAG_FACE_NAME";
  DocInfoTagID2[DocInfoTagID2["HWPTAG_BORDER_FILL"] = HWPTAG_BEGIN + 4] = "HWPTAG_BORDER_FILL";
  DocInfoTagID2[DocInfoTagID2["HWPTAG_CHAR_SHAPE"] = HWPTAG_BEGIN + 5] = "HWPTAG_CHAR_SHAPE";
  DocInfoTagID2[DocInfoTagID2["HWPTAG_TAB_DEF"] = HWPTAG_BEGIN + 6] = "HWPTAG_TAB_DEF";
  DocInfoTagID2[DocInfoTagID2["HWPTAG_NUMBERING"] = HWPTAG_BEGIN + 7] = "HWPTAG_NUMBERING";
  DocInfoTagID2[DocInfoTagID2["HWPTAG_BULLET"] = HWPTAG_BEGIN + 8] = "HWPTAG_BULLET";
  DocInfoTagID2[DocInfoTagID2["HWPTAG_PARA_SHAPE"] = HWPTAG_BEGIN + 9] = "HWPTAG_PARA_SHAPE";
  DocInfoTagID2[DocInfoTagID2["HWPTAG_STYLE"] = HWPTAG_BEGIN + 10] = "HWPTAG_STYLE";
  DocInfoTagID2[DocInfoTagID2["HWPTAG_DOC_DATA"] = HWPTAG_BEGIN + 11] = "HWPTAG_DOC_DATA";
  DocInfoTagID2[DocInfoTagID2["HWPTAG_DISTRIBUTE_DOC_DATA"] = HWPTAG_BEGIN + 12] = "HWPTAG_DISTRIBUTE_DOC_DATA";
  DocInfoTagID2[DocInfoTagID2["RESERVED"] = HWPTAG_BEGIN + 13] = "RESERVED";
  DocInfoTagID2[DocInfoTagID2["HWPTAG_COMPATIBLE_DOCUMENT"] = HWPTAG_BEGIN + 14] = "HWPTAG_COMPATIBLE_DOCUMENT";
  DocInfoTagID2[DocInfoTagID2["HWPTAG_LAYOUT_COMPATIBILITY"] = HWPTAG_BEGIN + 15] = "HWPTAG_LAYOUT_COMPATIBILITY";
  DocInfoTagID2[DocInfoTagID2["HWPTAG_TRACKCHANGE"] = HWPTAG_BEGIN + 16] = "HWPTAG_TRACKCHANGE";
  DocInfoTagID2[DocInfoTagID2["HWPTAG_MEMO_SHAPE"] = HWPTAG_BEGIN + 76] = "HWPTAG_MEMO_SHAPE";
  DocInfoTagID2[DocInfoTagID2["HWPTAG_FORBIDDEN_CHAR"] = HWPTAG_BEGIN + 78] = "HWPTAG_FORBIDDEN_CHAR";
  DocInfoTagID2[DocInfoTagID2["HWPTAG_TRACK_CHANGE"] = HWPTAG_BEGIN + 80] = "HWPTAG_TRACK_CHANGE";
  DocInfoTagID2[DocInfoTagID2["HWPTAG_TRACK_CHANGE_AUTHOR"] = HWPTAG_BEGIN + 81] = "HWPTAG_TRACK_CHANGE_AUTHOR";
  return DocInfoTagID2;
})(DocInfoTagID || {});
var SectionTagID = ((SectionTagID2) => {
  SectionTagID2[SectionTagID2["HWPTAG_PARA_HEADER"] = HWPTAG_BEGIN + 50] = "HWPTAG_PARA_HEADER";
  SectionTagID2[SectionTagID2["HWPTAG_PARA_TEXT"] = HWPTAG_BEGIN + 51] = "HWPTAG_PARA_TEXT";
  SectionTagID2[SectionTagID2["HWPTAG_PARA_CHAR_SHAPE"] = HWPTAG_BEGIN + 52] = "HWPTAG_PARA_CHAR_SHAPE";
  SectionTagID2[SectionTagID2["HWPTAG_PARA_LINE_SEG"] = HWPTAG_BEGIN + 53] = "HWPTAG_PARA_LINE_SEG";
  SectionTagID2[SectionTagID2["HWPTAG_PARA_RANGE_TAG"] = HWPTAG_BEGIN + 54] = "HWPTAG_PARA_RANGE_TAG";
  SectionTagID2[SectionTagID2["HWPTAG_CTRL_HEADER"] = HWPTAG_BEGIN + 55] = "HWPTAG_CTRL_HEADER";
  SectionTagID2[SectionTagID2["HWPTAG_LIST_HEADER"] = HWPTAG_BEGIN + 56] = "HWPTAG_LIST_HEADER";
  SectionTagID2[SectionTagID2["HWPTAG_PAGE_DEF"] = HWPTAG_BEGIN + 57] = "HWPTAG_PAGE_DEF";
  SectionTagID2[SectionTagID2["HWPTAG_FOOTNOTE_SHAPE"] = HWPTAG_BEGIN + 58] = "HWPTAG_FOOTNOTE_SHAPE";
  SectionTagID2[SectionTagID2["HWPTAG_PAGE_BORDER_FILL"] = HWPTAG_BEGIN + 59] = "HWPTAG_PAGE_BORDER_FILL";
  SectionTagID2[SectionTagID2["HWPTAG_SHAPE_COMPONENT"] = HWPTAG_BEGIN + 60] = "HWPTAG_SHAPE_COMPONENT";
  SectionTagID2[SectionTagID2["HWPTAG_TABLE"] = HWPTAG_BEGIN + 61] = "HWPTAG_TABLE";
  SectionTagID2[SectionTagID2["HWPTAG_SHAPE_COMPONENT_LINE"] = HWPTAG_BEGIN + 62] = "HWPTAG_SHAPE_COMPONENT_LINE";
  SectionTagID2[SectionTagID2["HWPTAG_SHAPE_COMPONENT_RECTANGLE"] = HWPTAG_BEGIN + 63] = "HWPTAG_SHAPE_COMPONENT_RECTANGLE";
  SectionTagID2[SectionTagID2["HWPTAG_SHAPE_COMPONENT_ELLIPSE"] = HWPTAG_BEGIN + 64] = "HWPTAG_SHAPE_COMPONENT_ELLIPSE";
  SectionTagID2[SectionTagID2["HWPTAG_SHAPE_COMPONENT_ARC"] = HWPTAG_BEGIN + 65] = "HWPTAG_SHAPE_COMPONENT_ARC";
  SectionTagID2[SectionTagID2["HWPTAG_SHAPE_COMPONENT_POLYGON"] = HWPTAG_BEGIN + 66] = "HWPTAG_SHAPE_COMPONENT_POLYGON";
  SectionTagID2[SectionTagID2["HWPTAG_SHAPE_COMPONENT_CURVE"] = HWPTAG_BEGIN + 67] = "HWPTAG_SHAPE_COMPONENT_CURVE";
  SectionTagID2[SectionTagID2["HWPTAG_SHAPE_COMPONENT_OLE"] = HWPTAG_BEGIN + 68] = "HWPTAG_SHAPE_COMPONENT_OLE";
  SectionTagID2[SectionTagID2["HWPTAG_SHAPE_COMPONENT_PICTURE"] = HWPTAG_BEGIN + 69] = "HWPTAG_SHAPE_COMPONENT_PICTURE";
  SectionTagID2[SectionTagID2["HWPTAG_SHAPE_COMPONENT_CONTAINER"] = HWPTAG_BEGIN + 70] = "HWPTAG_SHAPE_COMPONENT_CONTAINER";
  SectionTagID2[SectionTagID2["HWPTAG_CTRL_DATA"] = HWPTAG_BEGIN + 71] = "HWPTAG_CTRL_DATA";
  SectionTagID2[SectionTagID2["HWPTAG_EQEDIT"] = HWPTAG_BEGIN + 72] = "HWPTAG_EQEDIT";
  SectionTagID2[SectionTagID2["RESERVED"] = HWPTAG_BEGIN + 73] = "RESERVED";
  SectionTagID2[SectionTagID2["HWPTAG_SHAPE_COMPONENT_TEXTART"] = HWPTAG_BEGIN + 74] = "HWPTAG_SHAPE_COMPONENT_TEXTART";
  SectionTagID2[SectionTagID2["HWPTAG_FORM_OBJECT"] = HWPTAG_BEGIN + 75] = "HWPTAG_FORM_OBJECT";
  SectionTagID2[SectionTagID2["HWPTAG_MEMO_SHAPE"] = HWPTAG_BEGIN + 76] = "HWPTAG_MEMO_SHAPE";
  SectionTagID2[SectionTagID2["HWPTAG_MEMO_LIST"] = HWPTAG_BEGIN + 77] = "HWPTAG_MEMO_LIST";
  SectionTagID2[SectionTagID2["HWPTAG_CHART_DATA"] = HWPTAG_BEGIN + 79] = "HWPTAG_CHART_DATA";
  SectionTagID2[SectionTagID2["HWPTAG_VIDEO_DATA"] = HWPTAG_BEGIN + 82] = "HWPTAG_VIDEO_DATA";
  SectionTagID2[SectionTagID2["HWPTAG_SHAPE_COMPONENT_UNKNOWN"] = HWPTAG_BEGIN + 99] = "HWPTAG_SHAPE_COMPONENT_UNKNOWN";
  return SectionTagID2;
})(SectionTagID || {});
var BinDataType = /* @__PURE__ */ ((BinDataType2) => {
  BinDataType2[BinDataType2["LINK"] = 0] = "LINK";
  BinDataType2[BinDataType2["EMBEDDING"] = 1] = "EMBEDDING";
  BinDataType2[BinDataType2["STORAGE"] = 2] = "STORAGE";
  return BinDataType2;
})(BinDataType || {});
var BinDataCompress = /* @__PURE__ */ ((BinDataCompress2) => {
  BinDataCompress2[BinDataCompress2["DEFAULT"] = 0] = "DEFAULT";
  BinDataCompress2[BinDataCompress2["COMPRESS"] = 1] = "COMPRESS";
  BinDataCompress2[BinDataCompress2["NOT_COMPRESS"] = 2] = "NOT_COMPRESS";
  return BinDataCompress2;
})(BinDataCompress || {});
var BinDataStatus = /* @__PURE__ */ ((BinDataStatus2) => {
  BinDataStatus2[BinDataStatus2["INITIAL"] = 0] = "INITIAL";
  BinDataStatus2[BinDataStatus2["SUCCESS"] = 1] = "SUCCESS";
  BinDataStatus2[BinDataStatus2["ERROR"] = 2] = "ERROR";
  BinDataStatus2[BinDataStatus2["IGNORE"] = 3] = "IGNORE";
  return BinDataStatus2;
})(BinDataStatus || {});
class BinData {
  constructor(properties, extension, payload) {
    this.properties = properties;
    this.extension = extension;
    this.payload = payload;
  }
}
class ByteReader {
  constructor(buffer) {
    this.offsetByte = 0;
    this.view = new DataView(buffer);
  }
  readUInt32() {
    const result = this.view.getUint32(this.offsetByte, true);
    this.offsetByte += 4;
    return result;
  }
  readInt32() {
    const result = this.view.getInt32(this.offsetByte, true);
    this.offsetByte += 4;
    return result;
  }
  readInt16() {
    const result = this.view.getUint16(this.offsetByte, true);
    this.offsetByte += 2;
    return result;
  }
  readUInt16() {
    const result = this.view.getUint16(this.offsetByte, true);
    this.offsetByte += 2;
    return result;
  }
  readInt8() {
    const result = this.view.getInt8(this.offsetByte);
    this.offsetByte += 1;
    return result;
  }
  readUInt8() {
    const result = this.view.getUint8(this.offsetByte);
    this.offsetByte += 1;
    return result;
  }
  readRecord() {
    const value = this.readUInt32();
    const tagID = value & 1023;
    const level = value >> 10 & 1023;
    const size = value >> 20 & 4095;
    if (size === 4095) {
      return [tagID, level, this.readUInt32()];
    }
    return [tagID, level, size];
  }
  read(byte) {
    const result = this.view.buffer.slice(this.offsetByte, this.offsetByte + byte);
    this.offsetByte += byte;
    return result;
  }
  readString() {
    const length = this.readUInt16();
    const result = [];
    for (let i = 0; i < length; i += 1) {
      result.push(String.fromCharCode(this.readUInt16()));
    }
    return result.join("");
  }
  remainByte() {
    return this.view.byteLength - this.offsetByte;
  }
  skipByte(offset) {
    this.offsetByte += offset;
  }
  isEOF() {
    return this.view.byteLength <= this.offsetByte;
  }
}
function getBitValue(mask, start, end = start) {
  const target = mask >> start;
  let temp = 0;
  for (let index2 = 0; index2 <= end - start; index2 += 1) {
    temp <<= 1;
    temp += 1;
  }
  return target & temp;
}
function getRGB(colorRef) {
  return [
    getBitValue(colorRef, 0, 7),
    getBitValue(colorRef, 8, 15),
    getBitValue(colorRef, 16, 23)
  ];
}
function getFlag(bits, position) {
  const mask = 1 << position;
  return (bits & mask) === mask;
}
class CharShape {
  constructor(fontId, fontScale, fontSpacing, fontRatio, fontLocation, fontBaseSize, attr, shadow, shadow2, color, underLineColor, shadeColor, shadowColor) {
    this.fontBackgroundId = null;
    this.strikeColor = null;
    this.fontId = fontId;
    this.fontScale = fontScale;
    this.fontSpacing = fontSpacing;
    this.fontRatio = fontRatio;
    this.fontLocation = fontLocation;
    this.fontBaseSize = fontBaseSize / 100;
    this.attr = attr;
    this.shadow = getRGB(shadow);
    this.shadow2 = getRGB(shadow2);
    this.color = getRGB(color);
    this.underLineColor = getRGB(underLineColor);
    this.shadeColor = getRGB(shadeColor);
    this.shadowColor = getRGB(shadowColor);
  }
}
class StartingIndex {
  constructor() {
    this.page = 0;
    this.footnote = 0;
    this.endnote = 0;
    this.picture = 0;
    this.table = 0;
    this.equation = 0;
  }
}
class CaratLocation {
  constructor() {
    this.listId = 0;
    this.paragraphId = 0;
    this.charIndex = 0;
  }
}
class LayoutCompatibility {
  constructor() {
    this.char = 0;
    this.paragraph = 0;
    this.section = 0;
    this.object = 0;
    this.field = 0;
  }
}
class DocInfo {
  constructor() {
    this.sectionSize = 0;
    this.charShapes = [];
    this.fontFaces = [];
    this.binData = [];
    this.borderFills = [];
    this.paragraphShapes = [];
    this.startingIndex = new StartingIndex();
    this.caratLocation = new CaratLocation();
    this.compatibleDocument = 0;
    this.layoutCompatiblity = new LayoutCompatibility();
  }
  getCharShpe(index2) {
    return this.charShapes[index2];
  }
}
class FontFace {
  constructor() {
    this.name = "";
    this.alternative = "";
    this.default = "";
    this.panose = null;
  }
  getFontFamily() {
    const result = [`${this.name}`];
    if (this.alternative) {
      result.push(`"${this.alternative}"`);
    }
    if (this.default) {
      result.push(`"${this.default}"`);
    }
    if (this.panose) {
      const panoseFontFamily = this.panose.getFontFamily();
      result.push(panoseFontFamily);
    }
    return result.join(",");
  }
}
class ParagraphShape {
  constructor() {
    this.align = 0;
  }
}
class BorderFill {
  constructor(attribute, style) {
    this.backgroundColor = null;
    this.attribute = attribute;
    this.style = style;
  }
}
class Panose {
  constructor() {
    this.family = 0;
    this.serifStyle = 0;
    this.weight = 0;
    this.proportion = 0;
    this.contrast = 0;
    this.strokeVariation = 0;
    this.armStyle = 0;
    this.letterForm = 0;
    this.midline = 0;
    this.xHeight = 0;
  }
  getFontFamily() {
    if (this.family === 3) {
      return "cursive";
    }
    if (this.family === 2) {
      if (this.serifStyle > 1 && this.serifStyle < 11) {
        return "sans";
      }
      if (this.serifStyle > 10 && this.serifStyle < 14) {
        return "sans-serf";
      }
    }
    return "";
  }
}
const emptyArrayBuffer = new ArrayBuffer(0);
class HWPRecord {
  constructor(tagID, size, parentTagID, payload = emptyArrayBuffer) {
    this.children = [];
    this.tagID = tagID;
    this.size = size;
    this.parentTagID = parentTagID;
    this.payload = payload;
  }
}
function parseRecordTree(data) {
  const reader = new ByteReader(data.buffer);
  const root = new HWPRecord(0, 0, 0);
  while (!reader.isEOF()) {
    const [tagID, level, size] = reader.readRecord();
    let parent = root;
    const payload = reader.read(size);
    for (let i = 0; i < level; i += 1) {
      parent = parent.children.slice(-1).pop();
    }
    parent.children.push(new HWPRecord(tagID, size, parent.tagID, payload));
  }
  return root;
}
class DocInfoParser {
  constructor(header, data, container) {
    this.result = new DocInfo();
    this.visit = (record) => {
      switch (record.tagID) {
        case DocInfoTagID.HWPTAG_DOCUMENT_PROPERTIES: {
          this.visitDocumentPropertes(record);
          break;
        }
        case DocInfoTagID.HWPTAG_CHAR_SHAPE: {
          this.visitCharShape(record);
          break;
        }
        case DocInfoTagID.HWPTAG_FACE_NAME: {
          this.visitFaceName(record);
          break;
        }
        case DocInfoTagID.HWPTAG_BIN_DATA: {
          this.visitBinData(record);
          break;
        }
        case DocInfoTagID.HWPTAG_BORDER_FILL: {
          this.visitBorderFill(record);
          break;
        }
        case DocInfoTagID.HWPTAG_PARA_SHAPE: {
          this.visitParagraphShape(record);
          break;
        }
        case DocInfoTagID.HWPTAG_COMPATIBLE_DOCUMENT: {
          this.visitCompatibleDocument(record);
          break;
        }
        case DocInfoTagID.HWPTAG_LAYOUT_COMPATIBILITY: {
          this.visitLayoutCompatibility(record);
          break;
        }
        default:
          break;
      }
      record.children.forEach(this.visit);
    };
    this.header = header;
    this.record = parseRecordTree(data);
    this.container = container;
  }
  visitDocumentPropertes(record) {
    const reader = new ByteReader(record.payload);
    this.result.sectionSize = reader.readUInt16();
    this.result.startingIndex.page = reader.readUInt16();
    this.result.startingIndex.footnote = reader.readUInt16();
    this.result.startingIndex.endnote = reader.readUInt16();
    this.result.startingIndex.picture = reader.readUInt16();
    this.result.startingIndex.table = reader.readUInt16();
    this.result.startingIndex.equation = reader.readUInt16();
    this.result.caratLocation.listId = reader.readUInt32();
    this.result.caratLocation.paragraphId = reader.readUInt32();
    this.result.caratLocation.charIndex = reader.readUInt32();
  }
  visitCharShape(record) {
    const reader = new ByteReader(record.payload);
    const charShape = new CharShape(
      [
        reader.readUInt16(),
        reader.readUInt16(),
        reader.readUInt16(),
        reader.readUInt16(),
        reader.readUInt16(),
        reader.readUInt16(),
        reader.readUInt16()
      ],
      [
        reader.readUInt8(),
        reader.readUInt8(),
        reader.readUInt8(),
        reader.readUInt8(),
        reader.readUInt8(),
        reader.readUInt8(),
        reader.readUInt8()
      ],
      [
        reader.readInt8(),
        reader.readInt8(),
        reader.readInt8(),
        reader.readInt8(),
        reader.readInt8(),
        reader.readInt8(),
        reader.readInt8()
      ],
      [
        reader.readUInt8(),
        reader.readUInt8(),
        reader.readUInt8(),
        reader.readUInt8(),
        reader.readUInt8(),
        reader.readUInt8(),
        reader.readUInt8()
      ],
      [
        reader.readInt8(),
        reader.readInt8(),
        reader.readInt8(),
        reader.readInt8(),
        reader.readInt8(),
        reader.readInt8(),
        reader.readInt8()
      ],
      reader.readInt32(),
      reader.readUInt32(),
      reader.readUInt8(),
      reader.readUInt8(),
      reader.readUInt32(),
      reader.readUInt32(),
      reader.readUInt32(),
      reader.readUInt32()
    );
    if (record.size > 68) {
      charShape.fontBackgroundId = reader.readUInt16();
    }
    if (record.size > 70) {
      charShape.underLineColor = getRGB(reader.readInt32());
    }
    this.result.charShapes.push(charShape);
  }
  visitFaceName(record) {
    const reader = new ByteReader(record.payload);
    const attribute = reader.readUInt8();
    const hasAlternative = getFlag(attribute, 7);
    const hasAttribute = getFlag(attribute, 6);
    const hasDefault = getFlag(attribute, 5);
    const fontFace = new FontFace();
    fontFace.name = reader.readString();
    if (hasAlternative) {
      reader.skipByte(1);
      fontFace.alternative = reader.readString();
    }
    if (hasAttribute) {
      const panose = new Panose();
      panose.family = reader.readInt8();
      panose.serifStyle = reader.readInt8();
      panose.weight = reader.readInt8();
      panose.proportion = reader.readInt8();
      panose.contrast = reader.readInt8();
      panose.strokeVariation = reader.readInt8();
      panose.armStyle = reader.readInt8();
      panose.letterForm = reader.readInt8();
      panose.midline = reader.readInt8();
      panose.xHeight = reader.readInt8();
      fontFace.panose = panose;
    }
    if (hasDefault) {
      fontFace.default = reader.readString();
    }
    this.result.fontFaces.push(fontFace);
  }
  visitBinData(record) {
    const reader = new ByteReader(record.payload);
    const attribute = reader.readUInt16();
    const properties = {
      type: getBitValue(attribute, 0, 3),
      compress: getBitValue(attribute, 4, 5),
      status: getBitValue(attribute, 8, 9)
    };
    const id = reader.readUInt16();
    const extension = reader.readString();
    const path = `Root Entry/BinData/BIN${`${id.toString(16).toUpperCase()}`.padStart(4, "0")}.${extension}`;
    const payload = cfbExports.find(this.container, path).content;
    if (properties.compress === BinDataCompress.COMPRESS || properties.compress === BinDataCompress.DEFAULT && this.header.properties.compressed) {
      const data = pako_1.inflate(payload, { windowBits: -15 });
      this.result.binData.push(new BinData(properties, extension, data));
    } else {
      this.result.binData.push(new BinData(properties, extension, Uint8Array.from(payload)));
    }
  }
  visitBorderFill(record) {
    const reader = new ByteReader(record.payload);
    const borderFill = new BorderFill(
      reader.readUInt16(),
      {
        left: {
          type: reader.readUInt8(),
          width: reader.readUInt8(),
          color: getRGB(reader.readUInt32())
        },
        right: {
          type: reader.readUInt8(),
          width: reader.readUInt8(),
          color: getRGB(reader.readUInt32())
        },
        top: {
          type: reader.readUInt8(),
          width: reader.readUInt8(),
          color: getRGB(reader.readUInt32())
        },
        bottom: {
          type: reader.readUInt8(),
          width: reader.readUInt8(),
          color: getRGB(reader.readUInt32())
        }
      }
    );
    reader.skipByte(6);
    if (reader.readUInt32() === FillType.Single) {
      borderFill.backgroundColor = getRGB(reader.readUInt32());
    }
    this.result.borderFills.push(borderFill);
  }
  visitParagraphShape(record) {
    const reader = new ByteReader(record.payload);
    const attribute = reader.readUInt32();
    const shape = new ParagraphShape();
    shape.align = getBitValue(attribute, 2, 4);
    this.result.paragraphShapes.push(shape);
  }
  visitCompatibleDocument(record) {
    const reader = new ByteReader(record.payload);
    this.result.compatibleDocument = reader.readUInt32();
  }
  visitLayoutCompatibility(record) {
    const reader = new ByteReader(record.payload);
    this.result.layoutCompatiblity.char = reader.readUInt32();
    this.result.layoutCompatiblity.paragraph = reader.readUInt32();
    this.result.layoutCompatiblity.section = reader.readUInt32();
    this.result.layoutCompatiblity.object = reader.readUInt32();
    this.result.layoutCompatiblity.field = reader.readUInt32();
  }
  parse() {
    this.record.children.forEach(this.visit);
    return this.result;
  }
}
function makeCtrlID(first, second, third, fourth) {
  const firstCode = first.charCodeAt(0);
  const secondCode = second.charCodeAt(0);
  const thirdCode = third.charCodeAt(0);
  const fourthCode = fourth.charCodeAt(0);
  return firstCode << 24 | secondCode << 16 | thirdCode << 8 | fourthCode;
}
var CommonCtrlID = ((CommonCtrlID2) => {
  CommonCtrlID2[CommonCtrlID2["Table"] = makeCtrlID("t", "b", "l", " ")] = "Table";
  CommonCtrlID2[CommonCtrlID2["Line"] = makeCtrlID("$", "l", "i", "n")] = "Line";
  CommonCtrlID2[CommonCtrlID2["Rectangle"] = makeCtrlID("$", "r", "e", "c")] = "Rectangle";
  CommonCtrlID2[CommonCtrlID2["Ellipse"] = makeCtrlID("$", "e", "l", "l")] = "Ellipse";
  CommonCtrlID2[CommonCtrlID2["Arc"] = makeCtrlID("$", "a", "r", "c")] = "Arc";
  CommonCtrlID2[CommonCtrlID2["Polygon"] = makeCtrlID("$", "p", "o", "l")] = "Polygon";
  CommonCtrlID2[CommonCtrlID2["Curve"] = makeCtrlID("$", "c", "u", "r")] = "Curve";
  CommonCtrlID2[CommonCtrlID2["Equation"] = makeCtrlID("e", "q", "e", "d")] = "Equation";
  CommonCtrlID2[CommonCtrlID2["Picture"] = makeCtrlID("$", "p", "i", "c")] = "Picture";
  CommonCtrlID2[CommonCtrlID2["OLE"] = makeCtrlID("$", "o", "l", "e")] = "OLE";
  CommonCtrlID2[CommonCtrlID2["Connected"] = makeCtrlID("$", "c", "o", "n")] = "Connected";
  CommonCtrlID2[CommonCtrlID2["GenShapeObject"] = makeCtrlID("g", "s", "o", " ")] = "GenShapeObject";
  return CommonCtrlID2;
})(CommonCtrlID || {});
var OtherCtrlID = ((OtherCtrlID2) => {
  OtherCtrlID2[OtherCtrlID2["Section"] = makeCtrlID("s", "e", "c", "d")] = "Section";
  OtherCtrlID2[OtherCtrlID2["Column"] = makeCtrlID("c", "o", "l", "d")] = "Column";
  OtherCtrlID2[OtherCtrlID2["Header"] = makeCtrlID("h", "e", "a", "d")] = "Header";
  OtherCtrlID2[OtherCtrlID2["Footer"] = makeCtrlID("f", "o", "o", "t")] = "Footer";
  OtherCtrlID2[OtherCtrlID2["Footnote"] = makeCtrlID("f", "n", " ", " ")] = "Footnote";
  OtherCtrlID2[OtherCtrlID2["Endnote"] = makeCtrlID("e", "n", " ", " ")] = "Endnote";
  OtherCtrlID2[OtherCtrlID2["AutoNumber"] = makeCtrlID("a", "t", "n", "o")] = "AutoNumber";
  OtherCtrlID2[OtherCtrlID2["NewNumber"] = makeCtrlID("n", "w", "n", "o")] = "NewNumber";
  OtherCtrlID2[OtherCtrlID2["PageHide"] = makeCtrlID("p", "g", "h", "d")] = "PageHide";
  OtherCtrlID2[OtherCtrlID2["PageCT"] = makeCtrlID("p", "g", "c", "t")] = "PageCT";
  OtherCtrlID2[OtherCtrlID2["PageNumberPosition"] = makeCtrlID("p", "g", "n", "p")] = "PageNumberPosition";
  OtherCtrlID2[OtherCtrlID2["Indexmark"] = makeCtrlID("i", "d", "x", "m")] = "Indexmark";
  OtherCtrlID2[OtherCtrlID2["Bookmark"] = makeCtrlID("b", "o", "k", "m")] = "Bookmark";
  OtherCtrlID2[OtherCtrlID2["Overlapping"] = makeCtrlID("t", "c", "p", "s")] = "Overlapping";
  OtherCtrlID2[OtherCtrlID2["Comment"] = makeCtrlID("t", "d", "u", "t")] = "Comment";
  OtherCtrlID2[OtherCtrlID2["HiddenComment"] = makeCtrlID("t", "c", "m", "t")] = "HiddenComment";
  return OtherCtrlID2;
})(OtherCtrlID || {});
var FieldCtrlID = ((FieldCtrlID2) => {
  FieldCtrlID2[FieldCtrlID2["Unknown"] = makeCtrlID("%", "u", "n", "k")] = "Unknown";
  FieldCtrlID2[FieldCtrlID2["Date"] = makeCtrlID("$", "d", "t", "e")] = "Date";
  FieldCtrlID2[FieldCtrlID2["DocDate"] = makeCtrlID("%", "d", "d", "t")] = "DocDate";
  FieldCtrlID2[FieldCtrlID2["Path"] = makeCtrlID("%", "p", "a", "t")] = "Path";
  FieldCtrlID2[FieldCtrlID2["Bookmark"] = makeCtrlID("%", "b", "m", "k")] = "Bookmark";
  FieldCtrlID2[FieldCtrlID2["MailMerge"] = makeCtrlID("%", "m", "m", "g")] = "MailMerge";
  FieldCtrlID2[FieldCtrlID2["CrossRef"] = makeCtrlID("%", "x", "r", "f")] = "CrossRef";
  FieldCtrlID2[FieldCtrlID2["Formula"] = makeCtrlID("%", "f", "m", "u")] = "Formula";
  FieldCtrlID2[FieldCtrlID2["ClickHere"] = makeCtrlID("%", "c", "l", "k")] = "ClickHere";
  FieldCtrlID2[FieldCtrlID2["Summary"] = makeCtrlID("$", "s", "m", "r")] = "Summary";
  FieldCtrlID2[FieldCtrlID2["UserInfo"] = makeCtrlID("%", "u", "s", "r")] = "UserInfo";
  FieldCtrlID2[FieldCtrlID2["HyperLink"] = makeCtrlID("%", "h", "l", "k")] = "HyperLink";
  FieldCtrlID2[FieldCtrlID2["RevisionSign"] = makeCtrlID("%", "s", "i", "g")] = "RevisionSign";
  FieldCtrlID2[FieldCtrlID2["RevisionDelete"] = makeCtrlID("%", "%", "*", "d")] = "RevisionDelete";
  FieldCtrlID2[FieldCtrlID2["RevisionAttach"] = makeCtrlID("%", "%", "*", "a")] = "RevisionAttach";
  FieldCtrlID2[FieldCtrlID2["RevisionClipping"] = makeCtrlID("%", "%", "*", "C")] = "RevisionClipping";
  FieldCtrlID2[FieldCtrlID2["RevisionSawtooth"] = makeCtrlID("%", "%", "*", "S")] = "RevisionSawtooth";
  FieldCtrlID2[FieldCtrlID2["RevisionThinking"] = makeCtrlID("%", "%", "*", "T")] = "RevisionThinking";
  FieldCtrlID2[FieldCtrlID2["RevisionPraise"] = makeCtrlID("%", "%", "*", "P")] = "RevisionPraise";
  FieldCtrlID2[FieldCtrlID2["RevisionLine"] = makeCtrlID("%", "%", "*", "L")] = "RevisionLine";
  FieldCtrlID2[FieldCtrlID2["RevisionSimpleChange"] = makeCtrlID("%", "%", "*", "c")] = "RevisionSimpleChange";
  FieldCtrlID2[FieldCtrlID2["RevisionHyperLink"] = makeCtrlID("%", "%", "*", "h")] = "RevisionHyperLink";
  FieldCtrlID2[FieldCtrlID2["RevisionLineAttach"] = makeCtrlID("%", "%", "*", "A")] = "RevisionLineAttach";
  FieldCtrlID2[FieldCtrlID2["RevisionLineLink"] = makeCtrlID("%", "%", "*", "i")] = "RevisionLineLink";
  FieldCtrlID2[FieldCtrlID2["RevisionLineRansfer"] = makeCtrlID("%", "%", "*", "t")] = "RevisionLineRansfer";
  FieldCtrlID2[FieldCtrlID2["RevisionRightMove"] = makeCtrlID("%", "%", "*", "r")] = "RevisionRightMove";
  FieldCtrlID2[FieldCtrlID2["RevisionLeftMove"] = makeCtrlID("%", "%", "*", "l")] = "RevisionLeftMove";
  FieldCtrlID2[FieldCtrlID2["RevisionTransfer"] = makeCtrlID("%", "%", "*", "n")] = "RevisionTransfer";
  FieldCtrlID2[FieldCtrlID2["RevisionSimpleInsert"] = makeCtrlID("%", "%", "*", "e")] = "RevisionSimpleInsert";
  FieldCtrlID2[FieldCtrlID2["RevisionSplit"] = makeCtrlID("%", "s", "p", "l")] = "RevisionSplit";
  FieldCtrlID2[FieldCtrlID2["RevisionChange"] = makeCtrlID("%", "%", "m", "r")] = "RevisionChange";
  FieldCtrlID2[FieldCtrlID2["Memo"] = makeCtrlID("%", "%", "m", "e")] = "Memo";
  FieldCtrlID2[FieldCtrlID2["PrivateInfoSecurity"] = makeCtrlID("%", "c", "p", "r")] = "PrivateInfoSecurity";
  FieldCtrlID2[FieldCtrlID2["TableOfContents"] = makeCtrlID("%", "t", "o", "c")] = "TableOfContents";
  return FieldCtrlID2;
})(FieldCtrlID || {});
var VertRelTo = /* @__PURE__ */ ((VertRelTo2) => {
  VertRelTo2[VertRelTo2["Paper"] = 0] = "Paper";
  VertRelTo2[VertRelTo2["Page"] = 1] = "Page";
  VertRelTo2[VertRelTo2["Paragraph"] = 2] = "Paragraph";
  return VertRelTo2;
})(VertRelTo || {});
var HorzRelTo = /* @__PURE__ */ ((HorzRelTo2) => {
  HorzRelTo2[HorzRelTo2["Page"] = 0] = "Page";
  HorzRelTo2[HorzRelTo2["Column"] = 1] = "Column";
  HorzRelTo2[HorzRelTo2["Paragraph"] = 2] = "Paragraph";
  return HorzRelTo2;
})(HorzRelTo || {});
var WidthCriterion = /* @__PURE__ */ ((WidthCriterion2) => {
  WidthCriterion2[WidthCriterion2["Paper"] = 0] = "Paper";
  WidthCriterion2[WidthCriterion2["Page"] = 1] = "Page";
  WidthCriterion2[WidthCriterion2["Column"] = 2] = "Column";
  WidthCriterion2[WidthCriterion2["Paragraph"] = 3] = "Paragraph";
  WidthCriterion2[WidthCriterion2["Absolute"] = 4] = "Absolute";
  return WidthCriterion2;
})(WidthCriterion || {});
var HeightCriterion = /* @__PURE__ */ ((HeightCriterion2) => {
  HeightCriterion2[HeightCriterion2["Paper"] = 0] = "Paper";
  HeightCriterion2[HeightCriterion2["Page"] = 1] = "Page";
  HeightCriterion2[HeightCriterion2["Absolute"] = 2] = "Absolute";
  return HeightCriterion2;
})(HeightCriterion || {});
var TextFlowMethod = /* @__PURE__ */ ((TextFlowMethod2) => {
  TextFlowMethod2[TextFlowMethod2["Square"] = 0] = "Square";
  TextFlowMethod2[TextFlowMethod2["Tight"] = 1] = "Tight";
  TextFlowMethod2[TextFlowMethod2["Through"] = 2] = "Through";
  TextFlowMethod2[TextFlowMethod2["TopAndBottom"] = 3] = "TopAndBottom";
  TextFlowMethod2[TextFlowMethod2["BehindText"] = 4] = "BehindText";
  TextFlowMethod2[TextFlowMethod2["InFrontOfText"] = 5] = "InFrontOfText";
  return TextFlowMethod2;
})(TextFlowMethod || {});
var TextHorzArrange = /* @__PURE__ */ ((TextHorzArrange2) => {
  TextHorzArrange2[TextHorzArrange2["BothSides"] = 0] = "BothSides";
  TextHorzArrange2[TextHorzArrange2["LeftOnly"] = 1] = "LeftOnly";
  TextHorzArrange2[TextHorzArrange2["RightOnly"] = 2] = "RightOnly";
  TextHorzArrange2[TextHorzArrange2["LargestOnly"] = 3] = "LargestOnly";
  return TextHorzArrange2;
})(TextHorzArrange || {});
var ObjectType = /* @__PURE__ */ ((ObjectType2) => {
  ObjectType2[ObjectType2["None"] = 0] = "None";
  ObjectType2[ObjectType2["Figure"] = 1] = "Figure";
  ObjectType2[ObjectType2["Table"] = 2] = "Table";
  ObjectType2[ObjectType2["Equation"] = 3] = "Equation";
  return ObjectType2;
})(ObjectType || {});
class CommonAttribute {
  constructor() {
    this.isTextLike = false;
    this.isApplyLineSpace = false;
    this.vertRelTo = 0;
    this.vertRelativeArrange = 0;
    this.horzRelTo = 0;
    this.horzRelativeArrange = 0;
    this.isVertRelToParaLimit = false;
    this.isAllowOverlap = false;
    this.widthCriterion = 0;
    this.heightCriterion = 0;
    this.isProtectSize = false;
    this.textFlowMethod = 0;
    this.textHorzArrange = 0;
    this.objectType = 0;
  }
  setHorzRelTo(value) {
    if (value === 0 || value === 1) {
      this.horzRelTo = 0;
    }
    if (value === 2) {
      this.horzRelTo = 1;
    }
    if (value === 3) {
      this.horzRelTo = 2;
    }
  }
  getVertAlign() {
    if (this.vertRelativeArrange === 0) {
      if (this.vertRelTo === 0 || this.vertRelTo === 1) {
        return "top";
      }
      return "left";
    }
    if (this.vertRelativeArrange === 1) {
      if (this.vertRelTo === 0 || this.vertRelTo === 1) {
        return "center";
      }
    }
    if (this.vertRelativeArrange === 2) {
      if (this.vertRelTo === 0 || this.vertRelTo === 1) {
        return "bottom";
      }
      return "right";
    }
    if (this.vertRelativeArrange === 3) {
      if (this.vertRelTo === 0 || this.vertRelTo === 1) {
        return "inside";
      }
    }
    if (this.vertRelativeArrange === 4) {
      if (this.vertRelTo === 0 || this.vertRelTo === 1) {
        return "outside";
      }
    }
    return null;
  }
  getHorzAlign() {
    if (this.horzRelativeArrange === 0) {
      if (this.horzRelTo === 0) {
        return "top";
      }
      return "left";
    }
    if (this.horzRelativeArrange === 1) {
      if (this.horzRelTo === 0) {
        return "center";
      }
    }
    if (this.horzRelativeArrange === 2) {
      if (this.horzRelTo === 0) {
        return "bottom";
      }
      return "right";
    }
    if (this.horzRelativeArrange === 3) {
      if (this.horzRelTo === 0) {
        return "inside";
      }
    }
    if (this.horzRelativeArrange === 4) {
      if (this.horzRelTo === 0) {
        return "outside";
      }
    }
    return null;
  }
}
class CommonControl {
  constructor() {
    this.id = 0;
    this.attribute = new CommonAttribute();
    this.verticalOffset = 0;
    this.horizontalOffset = 0;
    this.width = 0;
    this.height = 0;
    this.zIndex = 0;
    this.margin = [0, 0, 0, 0];
    this.uid = 0;
    this.split = 0;
  }
}
class ShapeControl extends CommonControl {
  constructor() {
    super(...arguments);
    this.type = 0;
    this.info = null;
    this.content = [];
  }
}
class TableControl extends CommonControl {
  constructor() {
    super(...arguments);
    this.tableAttribute = 0;
    this.rowCount = 0;
    this.columnCount = 0;
    this.borderFillID = 0;
    this.content = [];
  }
  addRow(row, list) {
    if (!this.content[row]) {
      this.content[row] = [];
    }
    this.content[row].push(list);
  }
}
class Section {
  constructor() {
    this.width = 0;
    this.height = 0;
    this.paddingLeft = 0;
    this.paddingRight = 0;
    this.paddingTop = 0;
    this.paddingBottom = 0;
    this.headerPadding = 0;
    this.footerPadding = 0;
    this.content = [];
    this.orientation = 0;
    this.bookBindingMethod = 0;
  }
}
class Paragraph {
  constructor() {
    this.content = [];
    this.shapeBuffer = [];
    this.controls = [];
    this.lineSegments = [];
    this.shapeIndex = 0;
    this.aligns = 0;
    this.textSize = 0;
  }
  getShapeEndPos(index2) {
    if (index2 === this.shapeBuffer.length - 1) {
      return this.content.length - 1;
    }
    return this.shapeBuffer[index2 + 1].pos - 1;
  }
  getNextSize(index2) {
    const next = this.lineSegments[index2 + 1];
    if (!next) {
      return this.textSize;
    }
    return next.start;
  }
}
class ParagraphList {
  constructor(attribute, items) {
    this.items = [];
    this.attribute = attribute;
    this.items = items;
  }
}
var CharType = /* @__PURE__ */ ((CharType2) => {
  CharType2[CharType2["Char"] = 0] = "Char";
  CharType2[CharType2["Inline"] = 1] = "Inline";
  CharType2[CharType2["Extened"] = 2] = "Extened";
  return CharType2;
})(CharType || {});
class HWPChar {
  constructor(type, value) {
    this.type = type;
    this.value = value;
  }
}
class ShapePointer {
  constructor(pos, shapeIndex) {
    this.pos = 0;
    this.shapeIndex = 0;
    this.pos = pos;
    this.shapeIndex = shapeIndex;
  }
}
class LineSegment {
  constructor() {
    this.start = 0;
    this.y = 0;
    this.height = 0;
    this.textHeight = 0;
    this.baseLineGap = 0;
    this.lineSpacing = 0;
    this.startByte = 0;
    this.width = 0;
  }
}
class RecordReader {
  constructor(records) {
    this.records = records;
    this.cursor = 0;
  }
  hasNext() {
    return this.cursor < this.records.length;
  }
  current() {
    return this.records[this.cursor];
  }
  read() {
    const result = this.records[this.cursor];
    this.cursor += 1;
    return result;
  }
}
function isTable(control) {
  return control.id === CommonCtrlID.Table;
}
function isShape(control) {
  return control.id === CommonCtrlID.GenShapeObject;
}
function isPicture(control) {
  return control.type === CommonCtrlID.Picture;
}
var ColumnType = /* @__PURE__ */ ((ColumnType2) => {
  ColumnType2[ColumnType2["Normal"] = 0] = "Normal";
  ColumnType2[ColumnType2["Parallel"] = 1] = "Parallel";
  ColumnType2[ColumnType2["Justify"] = 2] = "Justify";
  return ColumnType2;
})(ColumnType || {});
var ColumnDirection = /* @__PURE__ */ ((ColumnDirection2) => {
  ColumnDirection2[ColumnDirection2["Left"] = 0] = "Left";
  ColumnDirection2[ColumnDirection2["Right"] = 1] = "Right";
  ColumnDirection2[ColumnDirection2["Justify"] = 2] = "Justify";
  return ColumnDirection2;
})(ColumnDirection || {});
class ColumnControl {
  constructor() {
    this.id = 0;
    this.type = 0;
    this.count = 0;
    this.direction = 0;
    this.isSameWidth = true;
    this.gap = 0;
    this.widths = [];
    this.borderStyle = 0;
    this.borderWidth = 0;
    this.borderColor = 0;
  }
}
class SectionParser {
  constructor(data) {
    this.content = [];
    this.record = parseRecordTree(data);
    this.result = new Section();
  }
  visitPageDef(record) {
    const reader = new ByteReader(record.payload);
    this.result.width = reader.readUInt32();
    this.result.height = reader.readUInt32();
    this.result.paddingLeft = reader.readUInt32();
    this.result.paddingRight = reader.readUInt32();
    this.result.paddingTop = reader.readUInt32();
    this.result.paddingBottom = reader.readUInt32();
    this.result.headerPadding = reader.readUInt32();
    this.result.footerPadding = reader.readUInt32();
    const property = reader.readUInt32();
    this.result.orientation = getBitValue(property, 0, 0);
    this.result.bookBindingMethod = getBitValue(property, 1, 2);
  }
  // TODO: (@hahnlee) mapper 패턴 사용하기
  visitParaText(record, paragraph) {
    const reader = new ByteReader(record.payload);
    let readByte = 0;
    while (readByte < record.size) {
      const charCode = reader.readUInt16();
      switch (charCode) {
        case 0:
        case 10:
        case 13: {
          paragraph.content.push(
            new HWPChar(CharType.Char, charCode)
          );
          paragraph.textSize += 1;
          readByte += 2;
          break;
        }
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 19:
        case 20: {
          paragraph.content.push(
            new HWPChar(CharType.Inline, charCode)
          );
          paragraph.textSize += 8;
          reader.skipByte(14);
          readByte += 16;
          break;
        }
        case 1:
        case 2:
        case 3:
        case 11:
        case 12:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 21:
        case 22:
        case 23: {
          paragraph.content.push(
            new HWPChar(CharType.Extened, charCode)
          );
          reader.skipByte(14);
          paragraph.textSize += 8;
          readByte += 16;
          break;
        }
        default: {
          paragraph.content.push(
            new HWPChar(CharType.Char, String.fromCharCode(charCode))
          );
          paragraph.textSize += 1;
          readByte += 2;
        }
      }
    }
  }
  visitCharShape(record, paragraph) {
    const reader = new ByteReader(record.payload);
    const shapePointer = new ShapePointer(
      reader.readUInt32(),
      reader.readUInt32()
    );
    paragraph.shapeBuffer.push(shapePointer);
  }
  visitCommonControl(reader, control) {
    const attribute = reader.readUInt32();
    control.attribute.isTextLike = getFlag(attribute, 0);
    control.attribute.isApplyLineSpace = getFlag(attribute, 2);
    control.attribute.vertRelTo = getBitValue(attribute, 3, 4);
    control.attribute.vertRelativeArrange = getBitValue(attribute, 5, 7);
    control.attribute.horzRelTo = getBitValue(attribute, 8, 9);
    control.attribute.horzRelativeArrange = getBitValue(attribute, 10, 12);
    control.attribute.isVertRelToParaLimit = getFlag(attribute, 13);
    control.attribute.isAllowOverlap = getFlag(attribute, 14);
    control.attribute.widthCriterion = getBitValue(attribute, 15, 17);
    control.attribute.heightCriterion = getBitValue(attribute, 18, 19);
    control.attribute.isProtectSize = getFlag(attribute, 20);
    control.attribute.textFlowMethod = getBitValue(attribute, 21, 23);
    control.attribute.textHorzArrange = getBitValue(attribute, 24, 25);
    control.attribute.objectType = getBitValue(attribute, 26, 28);
    control.verticalOffset = reader.readUInt32();
    control.horizontalOffset = reader.readUInt32();
    control.width = reader.readUInt32();
    control.height = reader.readUInt32();
    control.zIndex = reader.readUInt32();
    control.margin = [
      reader.readInt16(),
      reader.readInt16(),
      reader.readInt16(),
      reader.readInt16()
    ];
    control.uid = reader.readUInt32();
    control.split = reader.readInt32();
  }
  visitTableControl(reader) {
    const tableControl = new TableControl();
    tableControl.id = CommonCtrlID.Table;
    this.visitCommonControl(reader, tableControl);
    return tableControl;
  }
  getControl(reader) {
    const ctrlID = reader.readUInt32();
    if (ctrlID === CommonCtrlID.Table) {
      return this.visitTableControl(reader);
    }
    if (ctrlID === CommonCtrlID.GenShapeObject) {
      const shape = new ShapeControl();
      shape.id = ctrlID;
      this.visitCommonControl(reader, shape);
      return shape;
    }
    if (ctrlID === OtherCtrlID.Column) {
      const column = new ColumnControl();
      const attribute = reader.readUInt16();
      column.type = getBitValue(attribute, 0, 1);
      column.count = getBitValue(attribute, 2, 9);
      column.direction = getBitValue(attribute, 10, 11);
      column.isSameWidth = getFlag(attribute, 12);
      column.id = ctrlID;
      column.gap = reader.readUInt16();
      if (!column.isSameWidth) {
        const widths = [];
        for (let i = 0; i < column.count; i += 1) {
          widths.push(reader.readUInt16());
        }
        column.widths = widths;
      }
      reader.readUInt16();
      column.borderStyle = reader.readUInt8();
      column.borderWidth = reader.readUInt8();
      column.borderColor = reader.readUInt32();
      return column;
    }
    return {
      id: ctrlID
    };
  }
  visitControlHeader(record, paragraph) {
    const reader = new ByteReader(record.payload);
    const control = this.getControl(reader);
    const childrenReader = new RecordReader(record.children);
    while (childrenReader.hasNext()) {
      this.visit(childrenReader, paragraph, control);
    }
    paragraph.controls.push(control);
  }
  visitCellListHeader(reader) {
    const option = {
      column: reader.readUInt16(),
      row: reader.readUInt16(),
      colSpan: reader.readUInt16(),
      rowSpan: reader.readUInt16(),
      width: reader.readUInt32(),
      height: reader.readUInt32(),
      padding: [
        reader.readUInt16(),
        reader.readUInt16(),
        reader.readUInt16(),
        reader.readUInt16()
      ]
    };
    if (!reader.isEOF()) {
      option.borderFillID = reader.readUInt16() - 1;
    }
    return option;
  }
  visitListHeader(record, reader, control) {
    if (!control) {
      throw new Error(`Except: control, Recived: ${control}`);
    }
    const byteReader = new ByteReader(record.payload);
    const paragraphs = record.size === 30 ? byteReader.readInt16() : byteReader.readInt32();
    byteReader.readUInt32();
    const items = [];
    for (let i = 0; i < paragraphs; i += 1) {
      const next = reader.read();
      this.visitParagraphHeader(next, items, control);
    }
    if (record.parentTagID === SectionTagID.HWPTAG_CTRL_HEADER) {
      if (isTable(control)) {
        const options = this.visitCellListHeader(byteReader);
        const list = new ParagraphList(options, items);
        control.addRow(options.row, list);
      }
    }
    if (record.parentTagID === SectionTagID.HWPTAG_SHAPE_COMPONENT) {
      if (isShape(control)) {
        control.content.push(new ParagraphList(null, items));
      }
    }
  }
  visitTable(record, control) {
    const reader = new ByteReader(record.payload);
    if (!control) {
      throw new Error("Expect control");
    }
    if (control.id !== CommonCtrlID.Table) {
      throw new Error(`Expect: ${CommonCtrlID.Table}, Recived: ${control.id}`);
    }
    control.tableAttribute = reader.readUInt32();
    control.rowCount = reader.readUInt16();
    control.columnCount = reader.readUInt16();
    reader.skipByte(10 + 2 * control.rowCount);
    control.borderFillID = reader.readUInt16();
  }
  visitShapeComponent(record, paragraph, control) {
    const childrenReader = new RecordReader(record.children);
    while (childrenReader.hasNext()) {
      this.visit(childrenReader, paragraph, control);
    }
  }
  visitPicture(record, control) {
    if (!isShape(control)) {
      throw new Error("Control type not matched");
    }
    const reader = new ByteReader(record.payload);
    reader.skipByte(4 * 17 + 3);
    control.type = CommonCtrlID.Picture;
    control.info = {
      binID: reader.readUInt16() - 1
    };
  }
  visitLineSegment(record, paragraph) {
    const reader = new ByteReader(record.payload);
    while (!reader.isEOF()) {
      const lineSegment = new LineSegment();
      lineSegment.start = reader.readUInt32();
      lineSegment.y = reader.readInt32();
      lineSegment.height = reader.readInt32();
      lineSegment.textHeight = reader.readInt32();
      lineSegment.baseLineGap = reader.readInt32();
      lineSegment.lineSpacing = reader.readInt32();
      lineSegment.startByte = reader.readInt32();
      lineSegment.width = reader.readInt32();
      reader.readUInt32();
      paragraph.lineSegments.push(lineSegment);
    }
  }
  visit(reader, paragraph, control) {
    const record = reader.read();
    switch (record.tagID) {
      case SectionTagID.HWPTAG_LIST_HEADER: {
        this.visitListHeader(record, reader, control);
        break;
      }
      case SectionTagID.HWPTAG_PAGE_DEF: {
        this.visitPageDef(record);
        break;
      }
      case SectionTagID.HWPTAG_PARA_TEXT: {
        this.visitParaText(record, paragraph);
        break;
      }
      case SectionTagID.HWPTAG_PARA_CHAR_SHAPE: {
        this.visitCharShape(record, paragraph);
        break;
      }
      case SectionTagID.HWPTAG_CTRL_HEADER: {
        this.visitControlHeader(record, paragraph);
        break;
      }
      case SectionTagID.HWPTAG_TABLE: {
        this.visitTable(record, control);
        break;
      }
      case SectionTagID.HWPTAG_SHAPE_COMPONENT: {
        this.visitShapeComponent(record, paragraph, control);
        break;
      }
      case SectionTagID.HWPTAG_SHAPE_COMPONENT_PICTURE: {
        this.visitPicture(record, control);
        break;
      }
      case SectionTagID.HWPTAG_PARA_LINE_SEG: {
        this.visitLineSegment(record, paragraph);
        break;
      }
      default:
        break;
    }
  }
  visitParagraphHeader(record, content, control) {
    const result = new Paragraph();
    const reader = new ByteReader(record.payload);
    reader.skipByte(8);
    result.shapeIndex = reader.readUInt16();
    const childrenRecordReader = new RecordReader(record.children);
    while (childrenRecordReader.hasNext()) {
      this.visit(childrenRecordReader, result, control);
    }
    content.push(result);
  }
  traverse(record) {
    const reader = new RecordReader(record.children);
    while (reader.hasNext()) {
      this.visitParagraphHeader(reader.read(), this.content);
    }
  }
  parse() {
    this.traverse(this.record);
    this.result.content = this.content;
    return this.result;
  }
}
const FILE_HEADER_BYTES = 256;
const SUPPORTED_VERSION = new HWPVersion(5, 1, 0, 0);
const SIGNATURE = "HWP Document File";
function parseFileHeader(container) {
  const fileHeader = cfbExports.find(container, "FileHeader");
  if (!fileHeader) {
    throw new Error("Cannot find FileHeader");
  }
  const { content } = fileHeader;
  if (content.length !== FILE_HEADER_BYTES) {
    throw new Error(`FileHeader must be ${FILE_HEADER_BYTES} bytes, Received: ${content.length}`);
  }
  const signature = String.fromCharCode(...Array.from(content.slice(0, 17)));
  if (SIGNATURE !== signature) {
    throw new Error(`hwp file's signature should be ${SIGNATURE}. Received version: ${signature}`);
  }
  const [major, minor, build, revision] = Array.from(content.slice(32, 36)).reverse();
  const version = new HWPVersion(major, minor, build, revision);
  if (!version.isCompatible(SUPPORTED_VERSION)) {
    throw new Error(`hwp.js only support ${SUPPORTED_VERSION} format. Received version: ${version}`);
  }
  const reader = new ByteReader(Uint8Array.from(content).buffer);
  reader.skipByte(32 + 4);
  const data = reader.readUInt32();
  return new HWPHeader(version, signature, {
    compressed: Boolean(getBitValue(data, 0)),
    encrypted: Boolean(getBitValue(data, 1)),
    distribution: Boolean(getBitValue(data, 2)),
    script: Boolean(getBitValue(data, 3)),
    drm: Boolean(getBitValue(data, 4)),
    hasXmlTemplateStorage: Boolean(getBitValue(data, 5)),
    vcs: Boolean(getBitValue(data, 6)),
    hasElectronicSignatureInfomation: Boolean(getBitValue(data, 7)),
    certificateEncryption: Boolean(getBitValue(data, 8)),
    prepareSignature: Boolean(getBitValue(data, 9)),
    certificateDRM: Boolean(getBitValue(data, 10)),
    ccl: Boolean(getBitValue(data, 11)),
    mobile: Boolean(getBitValue(data, 12)),
    isPrivacySecurityDocument: Boolean(getBitValue(data, 13)),
    trackChanges: Boolean(getBitValue(data, 14)),
    kogl: Boolean(getBitValue(data, 15)),
    hasVideoControl: Boolean(getBitValue(data, 16)),
    hasOrderFieldControl: Boolean(getBitValue(data, 17))
  });
}
function parseDocInfo(container, header) {
  const docInfoEntry = cfbExports.find(container, "DocInfo");
  if (!docInfoEntry) {
    throw new Error("DocInfo not exist");
  }
  const content = docInfoEntry.content;
  if (header.properties.compressed) {
    const decodedContent = pako_1.inflate(content, { windowBits: -15 });
    return new DocInfoParser(header, decodedContent, container).parse();
  } else {
    return new DocInfoParser(header, Uint8Array.from(content), container).parse();
  }
}
function parseSection(container, header, sectionNumber) {
  const section = cfbExports.find(container, `Root Entry/BodyText/Section${sectionNumber}`);
  if (!section) {
    throw new Error("Section not exist");
  }
  const content = section.content;
  if (header.properties.compressed) {
    const decodedContent = pako_1.inflate(content, { windowBits: -15 });
    return new SectionParser(decodedContent).parse();
  } else {
    return new SectionParser(Uint8Array.from(content)).parse();
  }
}
function parse(input, options) {
  const container = cfbExports.read(input, options);
  const header = parseFileHeader(container);
  const docInfo = parseDocInfo(container, header);
  const sections = [];
  for (let i = 0; i < docInfo.sectionSize; i += 1) {
    sections.push(parseSection(container, header, i));
  }
  return new HWPDocument(header, docInfo, sections);
}
function splitTable(table, overflowColumns, currentHeight, contentHeight) {
  let targetHeight = currentHeight;
  let tableHeight = 0;
  let splitRowIndex = -1;
  let overflow = overflowColumns;
  const columns = [];
  const rowHeights = [];
  for (let i = 0; i < table.length; i += 1) {
    const row = table[i];
    const rowHeight = Math.min(...row.map((column) => column.attribute.height));
    rowHeights.push(rowHeight);
    tableHeight += rowHeight;
    if (targetHeight >= tableHeight) {
      columns.push(row);
    } else {
      splitRowIndex = i;
      break;
    }
  }
  for (let i = 0; i < overflow.length; i += 1) {
    const firstRow = columns[0];
    const column = overflow[i];
    if (column) {
      firstRow.splice(column.attribute.column, 0, column);
    }
  }
  overflow = [];
  columns.forEach((row, rowIndex) => {
    row.forEach((column) => {
      if (column.attribute.height > targetHeight) {
        const columnHeight = column.attribute.height;
        const columnRowSpan = column.attribute.rowSpan;
        const nextRowSpan = columnRowSpan - (splitRowIndex - rowIndex - 2);
        column.attribute.height = targetHeight;
        column.attribute.rowSpan = nextRowSpan;
        overflow[column.attribute.column] = new ParagraphList({
          ...column.attribute,
          row: 0,
          height: columnHeight - targetHeight,
          rowSpan: columnRowSpan - nextRowSpan
        }, []);
      }
    });
    targetHeight -= rowHeights[rowIndex];
  });
  if (splitRowIndex < 0) {
    return [columns];
  }
  const next = splitTable(
    table.slice(splitRowIndex),
    overflow,
    contentHeight,
    contentHeight
  );
  return [
    columns,
    ...next
  ];
}
class PageBuilder {
  constructor(section) {
    this.currentParagraph = new Paragraph();
    this.readIndex = 0;
    this.contentHeight = 0;
    this.currentHeight = 0;
    this.controlIndex = 0;
    this.startChatIndex = 0;
    this.endCharIndex = 0;
    this.shapeBufferIndex = 0;
    this.latestY = 0;
    this.result = [];
    this.visitParagraph = (paragraph) => {
      this.readIndex = 0;
      this.controlIndex = 0;
      this.startChatIndex = 0;
      this.endCharIndex = 0;
      this.shapeBufferIndex = 0;
      this.currentParagraph = new Paragraph();
      paragraph.lineSegments.forEach((lineSegment, index2) => {
        this.visitLine(lineSegment, index2, paragraph);
      });
      this.exitParagraph(paragraph);
    };
    this.section = section;
    this.currentSection = this.createSection();
    this.contentHeight = section.height - section.headerPadding - section.footerPadding - section.paddingTop - section.paddingBottom;
  }
  createSection() {
    const session = new Section();
    session.width = this.section.width;
    session.height = this.section.height;
    session.paddingTop = this.section.paddingTop;
    session.paddingRight = this.section.paddingRight;
    session.paddingBottom = this.section.paddingBottom;
    session.paddingLeft = this.section.paddingLeft;
    session.headerPadding = this.section.headerPadding;
    session.footerPadding = this.section.footerPadding;
    return session;
  }
  getLine(lineSegment, index2, paragraph) {
    const { start } = lineSegment;
    const nextSize = paragraph.getNextSize(index2);
    const line = [];
    let read = start;
    while (read < nextSize) {
      const char = paragraph.content[this.readIndex];
      if (char.type === CharType.Char) {
        read += 1;
      } else {
        read += 8;
      }
      line.push(char);
      this.readIndex += 1;
    }
    return line;
  }
  checkoutShpeBuffer(paragraph) {
    let endIndex = paragraph.getShapeEndPos(this.shapeBufferIndex);
    let startIndex = 0;
    while (this.endCharIndex <= endIndex && this.shapeBufferIndex < paragraph.shapeBuffer.length - 1) {
      endIndex = paragraph.getShapeEndPos(this.shapeBufferIndex);
      const shapeBuffer2 = paragraph.shapeBuffer[this.shapeBufferIndex];
      this.currentParagraph.shapeBuffer.push({
        shapeIndex: shapeBuffer2.shapeIndex,
        pos: startIndex
      });
      startIndex += endIndex - this.startChatIndex - startIndex;
      this.shapeBufferIndex += 1;
    }
    const shapeBuffer = paragraph.shapeBuffer[this.shapeBufferIndex];
    this.currentParagraph.shapeBuffer.push({
      shapeIndex: shapeBuffer.shapeIndex,
      pos: startIndex
    });
  }
  exitParagraph(paragraph) {
    this.checkoutShpeBuffer(paragraph);
    this.currentSection.content.push(this.currentParagraph);
  }
  exitPage(paragraph) {
    this.exitParagraph(paragraph);
    this.result.push(this.currentSection);
    this.currentSection = this.createSection();
    this.currentParagraph = new Paragraph();
    this.currentParagraph.shapeIndex = paragraph.shapeIndex;
    this.currentHeight = 0;
  }
  createTable(list, width) {
    const height = list.reduce((result, current) => {
      const columnHeight = Math.min(...current.map((c2) => c2.attribute.height));
      return result + columnHeight;
    }, 0);
    const control = new TableControl();
    control.id = CommonCtrlID.Table;
    control.width = width;
    control.height = height;
    control.content = list;
    control.rowCount = list.length;
    return control;
  }
  visitLine(lineSegment, index2, paragraph) {
    const line = this.getLine(lineSegment, index2, paragraph);
    if (lineSegment.y === 0 || lineSegment.y < this.latestY) {
      this.exitPage(paragraph);
      this.startChatIndex = this.endCharIndex;
      this.currentHeight = 0;
    }
    this.latestY = lineSegment.y;
    this.currentHeight += lineSegment.height + lineSegment.lineSpacing;
    line.forEach((content) => {
      if (content.type !== CharType.Extened) {
        this.currentParagraph.content.push(content);
        this.endCharIndex += 1;
        return;
      }
      const control = paragraph.controls[this.controlIndex];
      this.controlIndex += 1;
      if (!isTable(control)) {
        this.currentParagraph.content.push(content);
        this.currentParagraph.controls.push(control);
        this.endCharIndex += 1;
        return;
      }
      this.currentHeight -= lineSegment.height + lineSegment.lineSpacing;
      const tables = splitTable(
        control.content,
        [],
        this.contentHeight - this.currentHeight,
        this.contentHeight
      ).map((table) => this.createTable(table, control.width));
      tables.forEach((table, tableIndex) => {
        this.currentParagraph.content.push(content);
        this.currentParagraph.controls.push(table);
        if (tables.length > 1 && tableIndex !== tables.length - 1) {
          this.exitPage(paragraph);
          this.startChatIndex = this.endCharIndex;
        }
      });
      this.currentHeight += tables[tables.length - 1].height;
      this.endCharIndex += 1;
    });
  }
  build() {
    this.section.content.forEach(this.visitParagraph);
    this.result.shift();
    this.result.push(this.currentSection);
    return this.result;
  }
}
function parsePage(doc) {
  let sections = [];
  doc.sections.forEach((section) => {
    sections = sections.concat(new PageBuilder(section).build());
  });
  doc.sections = sections;
  return doc;
}
const hideFromPrintClass = "hwpjs-pe-no-print";
const preservePrintClass = "hwpjs-pe-preserve-print";
const preserveAncestorClass = "hwpjs-pe-preserve-ancestor";
const bodyElementName = "BODY";
function walkTree(element, callback) {
  let currentElement = element;
  callback(currentElement, true);
  currentElement = currentElement.parentElement;
  while (currentElement && currentElement.nodeName !== bodyElementName) {
    callback(currentElement, false);
    currentElement = currentElement.parentElement;
  }
}
function walkSiblings(element, callback) {
  let sibling = element.previousElementSibling;
  while (sibling) {
    callback(sibling, false);
    sibling = sibling.previousElementSibling;
  }
  sibling = element.nextElementSibling;
  while (sibling) {
    callback(sibling, false);
    sibling = sibling.nextElementSibling;
  }
}
function printFrame(elements) {
  const printStyle = `
    @page {
      margin: 0;
    }

    @media print {
      html, body {
        width: 100%;
        height: 100%;
        background-color: #FFF;
      }

      .${hideFromPrintClass} {
        display: none !important;
      }

      .${preserveAncestorClass} {
        display: block !important;
        margin: 0 !important;
        padding: 0 !important;
        border: none !important;
        box-shadow: none !important;
        overflow: visible !important;
      }

      .${preserveAncestorClass} > *  {
        box-shadow: none !important;
        overflow: visible !important;
      }

      .${preservePrintClass} {
        box-shadow: none !important;
        height: 100% !important;
        margin: 0 !important;
      }

      * {
        -webkit-print-color-adjust: exact !important;
        color-adjust: exact !important;
      }
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = printStyle;
  document.head.appendChild(styleSheet);
  const hide = (element) => {
    if (!element.classList.contains(preservePrintClass)) {
      element.classList.add(hideFromPrintClass);
    }
  };
  const preserve = (element, isStartingElement) => {
    element.classList.remove(hideFromPrintClass);
    element.classList.add(preservePrintClass);
    if (!isStartingElement) {
      element.classList.add(preserveAncestorClass);
    }
  };
  const clean = (element) => {
    element.classList.remove(hideFromPrintClass);
    element.classList.remove(preservePrintClass);
    element.classList.remove(preserveAncestorClass);
  };
  elements.forEach((i) => {
    walkTree(i, (element, isStartingElement) => {
      preserve(element, isStartingElement);
      walkSiblings(element, hide);
    });
  });
  window.print();
  elements.forEach((i) => {
    walkTree(i, (element) => {
      clean(element);
      walkSiblings(element, clean);
    });
  });
  styleSheet.remove();
}
class Header {
  constructor(view, content, pages) {
    this.modal = null;
    this.pageNumber = null;
    this.infoButton = null;
    this.printButton = null;
    this.handleModalClick = (event) => {
      if (event.currentTarget !== event.target) return;
      if (this.modal) {
        this.modal.style.display = "none";
      }
    };
    this.handleInfoButtionClick = () => {
      if (this.modal) {
        this.modal.style.display = "flex";
      }
    };
    this.handlePrintButtionClick = () => {
      printFrame(this.pages);
    };
    this.content = content;
    this.pages = pages;
    this.container = this.drawContainer(view);
    this.modal = this.drawModal(view);
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.isIntersecting && entry.target.parentElement) {
            const page = entry.target.getAttribute("data-page-number");
            const pageNumber = Number(page) + 1;
            this.updatePageNumber(pageNumber);
          }
        }
      });
    }, {
      root: this.content,
      rootMargin: "0px"
    });
    this.pages.forEach((page) => {
      this.observer.observe(page.querySelector(".hwpjs-observer"));
    });
    this.draw();
    if (!document.getElementById("hwpjs-header-css")) {
      const buttonStyle = `
      .hwpjs-header-control {
        transition: background .2s;
      }
      .hwpjs-header-control:hover {
        background: #DDD;
      }
      .hwpjs-header-control:active {
        background: #AAA;
      }
      `;
      const styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.id = "hwpjs-header-css";
      styleSheet.innerText = buttonStyle;
      document.head.appendChild(styleSheet);
    }
  }
  updatePageNumber(pageNumber) {
    if (this.pageNumber) {
      this.pageNumber.textContent = pageNumber.toString();
    }
  }
  distory() {
    var _a, _b, _c;
    this.pages.forEach((page) => {
      this.observer.unobserve(page);
    });
    (_a = this.modal) == null ? void 0 : _a.removeEventListener("click", this.handleModalClick);
    this.modal = null;
    (_b = this.infoButton) == null ? void 0 : _b.removeEventListener("click", this.handleInfoButtionClick);
    this.infoButton = null;
    (_c = this.printButton) == null ? void 0 : _c.removeEventListener("click", this.handleInfoButtionClick);
    this.printButton = null;
    this.pageNumber = null;
  }
  drawContainer(container) {
    const header = document.createElement("div");
    header.style.position = "absolute";
    header.style.zIndex = "1";
    header.style.top = "0";
    header.style.right = "0";
    header.style.left = "0";
    header.style.boxShadow = "0 1px 3px rgba(204, 204, 204, 1)";
    header.style.backgroundColor = "rgb(249, 249, 250)";
    header.style.height = "32px";
    const content = document.createElement("div");
    content.style.display = "flex";
    content.style.alignItems = "center";
    content.style.height = "100%";
    content.style.margin = "0 auto";
    content.style.maxWidth = "1000px";
    content.style.width = "100%";
    content.style.padding = "0 24px";
    header.appendChild(content);
    container.appendChild(header);
    return content;
  }
  drawModal(view) {
    const modal = document.createElement("div");
    modal.style.position = "absolute";
    modal.style.zIndex = "2";
    modal.style.top = "0";
    modal.style.right = "0";
    modal.style.bottom = "0";
    modal.style.left = "0";
    modal.style.background = "rgba(0, 0, 0, 0.7)";
    modal.style.display = "none";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.cursor = "pointer";
    const content = document.createElement("div");
    content.style.background = "#FFF";
    content.style.borderRadius = "5px";
    content.style.padding = "0 24px";
    content.style.cursor = "initial";
    content.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    const title = document.createElement("h1");
    const link = document.createElement("a");
    link.href = "https://github.com/hahnlee/hwp.js";
    link.textContent = "hwp.js";
    link.target = "_blink";
    link.rel = "noopener noreferrer";
    title.appendChild(link);
    const description = document.createElement("p");
    description.textContent = "본 제품은 한글과컴퓨터의 한/글 문서 파일(.hwp) 공개 문서를 참고하여 개발하였습니다.";
    const copyright = document.createElement("p");
    copyright.textContent = "Copyright 2020 Han Lee <hanlee.dev@gmail.com> and other contributors.";
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(copyright);
    modal.appendChild(content);
    view.appendChild(modal);
    modal.addEventListener("click", this.handleModalClick);
    return modal;
  }
  drawPageNumber() {
    this.pageNumber = document.createElement("span");
    this.pageNumber.textContent = "1";
    const totalPages = document.createElement("span");
    totalPages.textContent = `/${this.pages.length}쪽`;
    this.container.appendChild(this.pageNumber);
    this.container.appendChild(totalPages);
  }
  drawInfoIcon() {
    const buttion = document.createElement("div");
    buttion.style.marginLeft = "10px";
    buttion.style.cursor = "pointer";
    buttion.style.height = "100%";
    buttion.style.padding = "5px";
    buttion.classList.add("hwpjs-header-control");
    buttion.innerHTML = '<svg width="393" height="394" viewBox="0 0 393 394" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="hidden" style="height: 100%;width: auto;"><defs><clipPath id="hwpjs-header-info"><rect x="463" y="144" width="393" height="394"/></clipPath></defs><g clip-path="url(#--hwpjs-header-info)" transform="translate(-463 -144)"><path d="M640.245 292.076 640.245 471.79 678.755 471.79 678.755 292.076ZM640.245 209.21 640.245 247.602 678.755 247.602 678.755 209.21ZM463 144 856 144 856 537 463 537Z" fill-rule="evenodd"/></g></svg>';
    buttion.addEventListener("click", this.handleInfoButtionClick);
    this.container.appendChild(buttion);
    this.infoButton = buttion;
  }
  drawPrintIcon() {
    const buttion = document.createElement("div");
    buttion.style.cursor = "pointer";
    buttion.style.height = "100%";
    buttion.style.padding = "5px";
    buttion.classList.add("hwpjs-header-control");
    buttion.innerHTML = '<svg width="284" height="253" viewBox="0 0 284 253" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="hidden" style="height: 100%;width: auto;"><defs><clipPath id="hwpjs-header-print"><rect x="498" y="82" width="284" height="253"/></clipPath></defs><g clip-path="url(#--hwpjs-header-print)" transform="translate(-498 -82)"><rect x="559" y="93" width="162" height="231" stroke="#000000" stroke-width="20" stroke-miterlimit="8" fill="none"/><path d="M756.613 155.95C751.961 155.95 748.189 159.719 748.189 164.368 748.189 169.018 751.961 172.787 756.613 172.787 761.266 172.787 765.038 169.018 765.038 164.368 765.038 159.719 761.266 155.95 756.613 155.95ZM499 140 781 140 781 228.612 781 275 720.698 275 720.698 228.612 559.302 228.612 559.302 275 499 275 499 228.612Z" fill-rule="evenodd"/><path d="M588 286 647.556 286" stroke="#000000" stroke-width="20" stroke-miterlimit="8" fill="none" fill-rule="evenodd"/><path d="M588 254 670.667 254" stroke="#000000" stroke-width="20" stroke-miterlimit="8" fill="none" fill-rule="evenodd"/></g></svg>';
    buttion.style.marginLeft = "auto";
    buttion.addEventListener("click", this.handlePrintButtionClick);
    this.container.appendChild(buttion);
    this.printButton = buttion;
  }
  draw() {
    this.drawPageNumber();
    this.drawPrintIcon();
    this.drawInfoIcon();
  }
}
const BORDER_WIDTH = [
  "0.1mm",
  "0.12mm",
  "0.15mm",
  "0.2mm",
  "0.25mm",
  "0.3mm",
  "0.4mm",
  "0.5mm",
  "0.6mm",
  "0.7mm",
  "1.0mm",
  "1.5mm",
  "2.0mm",
  "3.0mm",
  "4.0mm",
  "5.0mm"
];
const BORDER_STYLE = {
  0: "none",
  1: "solid",
  2: "dashed",
  3: "dotted",
  8: "double"
};
const TEXT_ALIGN = {
  0: "justify",
  1: "left",
  2: "right",
  3: "center"
};
class HWPViewer {
  constructor(container, data, option = { type: "binary" }) {
    this.viewer = window.document.createElement("div");
    this.pages = [];
    this.header = null;
    this.container = container;
    this.hwpDocument = parsePage(parse(data, option));
    this.draw();
  }
  distory() {
    var _a, _b;
    this.pages = [];
    (_a = this.header) == null ? void 0 : _a.distory();
    (_b = this.viewer.parentElement) == null ? void 0 : _b.removeChild(this.viewer);
  }
  createPage(section, index2) {
    const page = document.createElement("div");
    page.style.boxShadow = "0 1px 3px 1px rgba(60,64,67,.15)";
    page.style.backgroundColor = "#FFF";
    page.style.margin = "0 auto";
    page.style.position = "relative";
    page.style.pageBreakAfter = "always";
    page.style.width = `${section.width / 7200}in`;
    page.style.height = `${section.height / 7200}in`;
    page.style.paddingTop = `${(section.paddingTop + section.headerPadding) / 7200}in`;
    page.style.paddingRight = `${section.paddingRight / 7200}in`;
    page.style.paddingBottom = `${section.paddingBottom / 7200}in`;
    page.style.paddingLeft = `${section.paddingLeft / 7200}in`;
    page.setAttribute("data-page-number", index2.toString());
    const observer = document.createElement("div");
    observer.style.height = "2px";
    observer.style.position = "absolute";
    observer.style.width = "100%";
    observer.style.top = "50%";
    observer.style.left = "0";
    observer.classList.add("hwpjs-observer");
    observer.setAttribute("data-page-number", index2.toString());
    page.appendChild(observer);
    this.pages.push(page);
    return page;
  }
  getRGBStyle(rgb) {
    const [red, green, blue] = rgb;
    return `rgb(${red}, ${green}, ${blue})`;
  }
  drawViewer() {
    this.viewer.style.backgroundColor = "#E8EAED";
    this.viewer.style.position = "relative";
    this.viewer.style.overflow = "hidden";
    this.viewer.style.width = "100%";
    this.viewer.style.height = "100%";
  }
  drawBorderFill(target, borderFillID) {
    if (borderFillID === void 0) {
      return;
    }
    const borderFill = this.hwpDocument.info.borderFills[borderFillID];
    target.style.borderTopColor = this.getRGBStyle(borderFill.style.top.color);
    target.style.borderRightColor = this.getRGBStyle(
      borderFill.style.right.color
    );
    target.style.borderBottomColor = this.getRGBStyle(
      borderFill.style.bottom.color
    );
    target.style.borderLeftColor = this.getRGBStyle(
      borderFill.style.left.color
    );
    target.style.borderTopWidth = BORDER_WIDTH[borderFill.style.top.width];
    target.style.borderRightWidth = BORDER_WIDTH[borderFill.style.right.width];
    target.style.borderBottomWidth = BORDER_WIDTH[borderFill.style.bottom.width];
    target.style.borderLeftWidth = BORDER_WIDTH[borderFill.style.left.width];
    target.style.borderTopStyle = BORDER_STYLE[borderFill.style.top.type];
    target.style.borderRightStyle = BORDER_STYLE[borderFill.style.right.type];
    target.style.borderBottomStyle = BORDER_STYLE[borderFill.style.bottom.type];
    target.style.borderLeftStyle = BORDER_STYLE[borderFill.style.left.type];
    if (borderFill.backgroundColor) {
      target.style.backgroundColor = this.getRGBStyle(
        borderFill.backgroundColor
      );
    }
  }
  drawColumn(container, paragraphList) {
    const column = document.createElement("td");
    const { width, height, colSpan, rowSpan, borderFillID } = paragraphList.attribute;
    column.style.width = `${width / 100}pt`;
    column.style.height = `${height / 100}pt`;
    column.colSpan = colSpan;
    column.rowSpan = rowSpan;
    this.drawBorderFill(column, borderFillID);
    paragraphList.items.forEach((paragraph) => {
      this.drawParagraph(column, paragraph);
    });
    container.appendChild(column);
  }
  drawTable(container, control) {
    const table = document.createElement("table");
    table.style.display = "inline-table";
    table.style.borderCollapse = "collapse";
    table.style.width = `${control.width / 100}pt`;
    table.style.height = `${control.height / 100}pt`;
    const tbody = document.createElement("tbody");
    for (let i = 0; i < control.rowCount; i += 1) {
      const tr = document.createElement("tr");
      control.content[i].forEach((paragraphList) => {
        this.drawColumn(tr, paragraphList);
      });
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    container.appendChild(table);
  }
  drawShape(container, control) {
    const shapeGroup = document.createElement("div");
    shapeGroup.style.width = `${control.width / 100}pt`;
    shapeGroup.style.height = `${control.height / 100}pt`;
    if (control.attribute.vertRelTo === 0) {
      shapeGroup.style.position = "absolute";
      shapeGroup.style.top = `${control.verticalOffset / 100}pt`;
      shapeGroup.style.left = `${control.horizontalOffset / 100}pt`;
    } else {
      shapeGroup.style.marginTop = `${control.verticalOffset / 100}pt`;
      shapeGroup.style.marginLeft = `${control.horizontalOffset / 100}pt`;
    }
    shapeGroup.style.zIndex = `${control.zIndex}`;
    shapeGroup.style.verticalAlign = "middle";
    shapeGroup.style.display = "inline-block";
    if (isPicture(control)) {
      const image = this.hwpDocument.info.binData[control.info.binID];
      const blob = new Blob([image.payload], {
        type: `images/${image.extension}`
      });
      const imageURL = window.URL.createObjectURL(blob);
      shapeGroup.style.backgroundImage = `url("${imageURL}")`;
      shapeGroup.style.backgroundRepeat = "no-repeat";
      shapeGroup.style.backgroundPosition = "center";
      shapeGroup.style.backgroundSize = "contain";
    }
    control.content.forEach((paragraphList) => {
      paragraphList.items.forEach((paragraph) => {
        this.drawParagraph(shapeGroup, paragraph);
      });
    });
    container.appendChild(shapeGroup);
  }
  drawControl(container, control) {
    if (isTable(control)) {
      this.drawTable(container, control);
      return;
    }
    if (isShape(control)) {
      this.drawShape(container, control);
    }
  }
  drawText(container, paragraph, shapePointer, endPos) {
    const range = paragraph.content.slice(shapePointer.pos, endPos + 1);
    const texts = [];
    let ctrlIndex = 0;
    range.forEach((hwpChar) => {
      if (typeof hwpChar.value === "string") {
        texts.push(hwpChar.value);
        return;
      }
      if (hwpChar.type === CharType.Extened) {
        const control = paragraph.controls[ctrlIndex];
        ctrlIndex += 1;
        this.drawControl(container, control);
      }
      if (hwpChar.value === 13) {
        texts.push("\n");
      }
    });
    const text = texts.join("");
    const span = document.createElement("div");
    span.textContent = text;
    const charShape = this.hwpDocument.info.getCharShpe(
      shapePointer.shapeIndex
    );
    if (charShape) {
      const { fontBaseSize, fontRatio, color, fontId } = charShape;
      const fontSize = fontBaseSize * (fontRatio[0] / 100);
      span.style.fontSize = `${fontSize}pt`;
      span.style.lineBreak = "anywhere";
      span.style.whiteSpace = "pre-wrap";
      span.style.color = this.getRGBStyle(color);
      const fontFace = this.hwpDocument.info.fontFaces[fontId[0]];
      span.style.fontFamily = fontFace.getFontFamily();
    }
    container.appendChild(span);
  }
  drawParagraph(container, paragraph) {
    const paragraphContainer = document.createElement("div");
    paragraphContainer.style.margin = "0";
    const shape = this.hwpDocument.info.paragraphShapes[paragraph.shapeIndex];
    paragraphContainer.style.textAlign = TEXT_ALIGN[shape.align];
    paragraph.shapeBuffer.forEach((shapePointer, index2) => {
      const endPos = paragraph.getShapeEndPos(index2);
      this.drawText(paragraphContainer, paragraph, shapePointer, endPos);
    });
    container.append(paragraphContainer);
  }
  drawSection(container, section, index2) {
    const page = this.createPage(section, index2);
    page.style.marginBottom = "20px";
    section.content.forEach((paragraph) => {
      this.drawParagraph(page, paragraph);
    });
    container.appendChild(page);
  }
  draw() {
    this.drawViewer();
    const content = document.createElement("div");
    content.style.height = "calc(100% - 32px)";
    content.style.padding = "24px";
    content.style.marginTop = "32px";
    content.style.overflow = "auto";
    content.style.position = "relative";
    content.style.zIndex = "0";
    this.hwpDocument.sections.forEach((section, index2) => {
      this.drawSection(content, section, index2);
    });
    this.header = new Header(this.viewer, this.container, this.pages);
    this.viewer.appendChild(content);
    this.container.appendChild(this.viewer);
  }
}

export function renderHwp(container, base64) {
    container.innerHTML = "";

    const binary = atob(base64);

    new HWPViewer(container, binary, {
        type: "binary",
    });
}

function fitToViewer() {
    const viewer = document.getElementById("viewer");
    const root = document.getElementById("scale-root");
    if (!viewer || !root || !root.firstElementChild) return false;

    const firstPage = root.firstElementChild;
    const rect = firstPage.getBoundingClientRect();
    const vw = viewer.clientWidth;

    if (!rect.width) return false;

    const scale = (vw - 16) / rect.width;

    // 🔑 핵심: transform ❌, zoom ✅
    root.style.zoom = scale;

    return true;
}


window.addEventListener("resize", () => {
    fitToViewer();
});

window.loadHwpFromBase64 = function (base64) {
    const viewer = document.getElementById("viewer");

    viewer.innerHTML = `
      <div id="scale-wrapper">
        <div id="scale-root"></div>
      </div>
    `;

    renderHwp(document.getElementById("scale-root"), base64);
    fitWhenReady();
};

