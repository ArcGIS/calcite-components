import { c as rn } from "./_commonjsHelpers.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
var me = { exports: {} };
(function(r, o) {
  (function(a, l) {
    l(o);
  })(rn, function(a) {
    function l(e) {
      return e.text !== void 0 && e.text !== "" ? `'${e.type}' with value '${e.text}'` : `'${e.type}'`;
    }
    class u extends Error {
      constructor(t) {
        super(`No parslet found for token: ${l(t)}`), this.token = t, Object.setPrototypeOf(this, u.prototype);
      }
      getToken() {
        return this.token;
      }
    }
    class p extends Error {
      constructor(t) {
        super(`The parsing ended early. The next token was: ${l(t)}`), this.token = t, Object.setPrototypeOf(this, p.prototype);
      }
      getToken() {
        return this.token;
      }
    }
    class d extends Error {
      constructor(t, n) {
        let s = `Unexpected type: '${t.type}'.`;
        n !== void 0 && (s += ` Message: ${n}`), super(s), Object.setPrototypeOf(this, d.prototype);
      }
    }
    function T(e) {
      return (t) => t.startsWith(e) ? { type: e, text: e } : null;
    }
    function h(e) {
      let t = 0, n;
      const s = e[0];
      let i = !1;
      if (s !== "'" && s !== '"')
        return null;
      for (; t < e.length; ) {
        if (t++, n = e[t], !i && n === s) {
          t++;
          break;
        }
        i = !i && n === "\\";
      }
      if (n !== s)
        throw new Error("Unterminated String");
      return e.slice(0, t);
    }
    const S = /[$_\p{ID_Start}]|\\u\p{Hex_Digit}{4}|\\u\{0*(?:\p{Hex_Digit}{1,5}|10\p{Hex_Digit}{4})\}/u, E = /[$\-\p{ID_Continue}\u200C\u200D]|\\u\p{Hex_Digit}{4}|\\u\{0*(?:\p{Hex_Digit}{1,5}|10\p{Hex_Digit}{4})\}/u;
    function ee(e) {
      let t = e[0];
      if (!S.test(t))
        return null;
      let n = 1;
      do {
        if (t = e[n], !E.test(t))
          break;
        n++;
      } while (n < e.length);
      return e.slice(0, n);
    }
    const K = /^(NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity))/;
    function B(e) {
      var t, n;
      return (n = (t = K.exec(e)) === null || t === void 0 ? void 0 : t[0]) !== null && n !== void 0 ? n : null;
    }
    const C = (e) => {
      const t = ee(e);
      return t == null ? null : {
        type: "Identifier",
        text: t
      };
    };
    function P(e) {
      return (t) => {
        if (!t.startsWith(e))
          return null;
        const n = t[e.length];
        return n !== void 0 && E.test(n) ? null : {
          type: e,
          text: e
        };
      };
    }
    const te = (e) => {
      const t = h(e);
      return t == null ? null : {
        type: "StringValue",
        text: t
      };
    }, gt = (e) => e.length > 0 ? null : {
      type: "EOF",
      text: ""
    }, wt = (e) => {
      const t = B(e);
      return t === null ? null : {
        type: "Number",
        text: t
      };
    }, Nt = [
      gt,
      T("=>"),
      T("("),
      T(")"),
      T("{"),
      T("}"),
      T("["),
      T("]"),
      T("|"),
      T("&"),
      T("<"),
      T(">"),
      T(","),
      T(";"),
      T("*"),
      T("?"),
      T("!"),
      T("="),
      T(":"),
      T("..."),
      T("."),
      T("#"),
      T("~"),
      T("/"),
      T("@"),
      P("undefined"),
      P("null"),
      P("function"),
      P("this"),
      P("new"),
      P("module"),
      P("event"),
      P("external"),
      P("typeof"),
      P("keyof"),
      P("readonly"),
      P("import"),
      P("is"),
      P("in"),
      P("asserts"),
      wt,
      C,
      te
    ], Et = /^\s*\n\s*/;
    class $ {
      static create(t) {
        const n = this.read(t);
        t = n.text;
        const s = this.read(t);
        return t = s.text, new $(t, void 0, n.token, s.token);
      }
      constructor(t, n, s, i) {
        this.text = "", this.text = t, this.previous = n, this.current = s, this.next = i;
      }
      static read(t, n = !1) {
        n = n || Et.test(t), t = t.trim();
        for (const s of Nt) {
          const i = s(t);
          if (i !== null) {
            const y = Object.assign(Object.assign({}, i), { startOfLine: n });
            return t = t.slice(y.text.length), { text: t, token: y };
          }
        }
        throw new Error("Unexpected Token " + t);
      }
      advance() {
        const t = $.read(this.text);
        return new $(t.text, this.current, this.next, t.token);
      }
    }
    function w(e) {
      if (e === void 0)
        throw new Error("Unexpected undefined");
      if (e.type === "JsdocTypeKeyValue" || e.type === "JsdocTypeParameterList" || e.type === "JsdocTypeProperty" || e.type === "JsdocTypeReadonlyProperty" || e.type === "JsdocTypeObjectField" || e.type === "JsdocTypeJsdocObjectField" || e.type === "JsdocTypeIndexSignature" || e.type === "JsdocTypeMappedType")
        throw new d(e);
      return e;
    }
    function ne(e) {
      return e.type === "JsdocTypeKeyValue" ? Y(e) : w(e);
    }
    function Pt(e) {
      return e.type === "JsdocTypeName" ? e : Y(e);
    }
    function Y(e) {
      if (e.type !== "JsdocTypeKeyValue")
        throw new d(e);
      return e;
    }
    function bt(e) {
      var t;
      if (e.type === "JsdocTypeVariadic") {
        if (((t = e.element) === null || t === void 0 ? void 0 : t.type) === "JsdocTypeName")
          return e;
        throw new d(e);
      }
      if (e.type !== "JsdocTypeNumber" && e.type !== "JsdocTypeName")
        throw new d(e);
      return e;
    }
    function re(e) {
      return e.type === "JsdocTypeIndexSignature" || e.type === "JsdocTypeMappedType";
    }
    var m;
    (function(e) {
      e[e.ALL = 0] = "ALL", e[e.PARAMETER_LIST = 1] = "PARAMETER_LIST", e[e.OBJECT = 2] = "OBJECT", e[e.KEY_VALUE = 3] = "KEY_VALUE", e[e.INDEX_BRACKETS = 4] = "INDEX_BRACKETS", e[e.UNION = 5] = "UNION", e[e.INTERSECTION = 6] = "INTERSECTION", e[e.PREFIX = 7] = "PREFIX", e[e.INFIX = 8] = "INFIX", e[e.TUPLE = 9] = "TUPLE", e[e.SYMBOL = 10] = "SYMBOL", e[e.OPTIONAL = 11] = "OPTIONAL", e[e.NULLABLE = 12] = "NULLABLE", e[e.KEY_OF_TYPE_OF = 13] = "KEY_OF_TYPE_OF", e[e.FUNCTION = 14] = "FUNCTION", e[e.ARROW = 15] = "ARROW", e[e.ARRAY_BRACKETS = 16] = "ARRAY_BRACKETS", e[e.GENERIC = 17] = "GENERIC", e[e.NAME_PATH = 18] = "NAME_PATH", e[e.PARENTHESIS = 19] = "PARENTHESIS", e[e.SPECIAL_TYPES = 20] = "SPECIAL_TYPES";
    })(m || (m = {}));
    class j {
      constructor(t, n, s) {
        this.grammar = t, typeof n == "string" ? this._lexer = $.create(n) : this._lexer = n, this.baseParser = s;
      }
      get lexer() {
        return this._lexer;
      }
      /**
       * Parses a given string and throws an error if the parse ended before the end of the string.
       */
      parse() {
        const t = this.parseType(m.ALL);
        if (this.lexer.current.type !== "EOF")
          throw new p(this.lexer.current);
        return t;
      }
      /**
       * Parses with the current lexer and asserts that the result is a {@link RootResult}.
       */
      parseType(t) {
        return w(this.parseIntermediateType(t));
      }
      /**
       * The main parsing function. First it tries to parse the current state in the prefix step, and then it continues
       * to parse the state in the infix step.
       */
      parseIntermediateType(t) {
        const n = this.tryParslets(null, t);
        if (n === null)
          throw new u(this.lexer.current);
        return this.parseInfixIntermediateType(n, t);
      }
      /**
       * In the infix parsing step the parser continues to parse the current state with all parslets until none returns
       * a result.
       */
      parseInfixIntermediateType(t, n) {
        let s = this.tryParslets(t, n);
        for (; s !== null; )
          t = s, s = this.tryParslets(t, n);
        return t;
      }
      /**
       * Tries to parse the current state with all parslets in the grammar and returns the first non null result.
       */
      tryParslets(t, n) {
        for (const s of this.grammar) {
          const i = s(this, n, t);
          if (i !== null)
            return i;
        }
        return null;
      }
      /**
       * If the given type equals the current type of the {@link Lexer} advance the lexer. Return true if the lexer was
       * advanced.
       */
      consume(t) {
        return Array.isArray(t) || (t = [t]), t.includes(this.lexer.current.type) ? (this._lexer = this.lexer.advance(), !0) : !1;
      }
      acceptLexerState(t) {
        this._lexer = t.lexer;
      }
    }
    function be(e) {
      return e === "EOF" || e === "|" || e === "," || e === ")" || e === ">";
    }
    const oe = (e, t, n) => {
      const s = e.lexer.current.type, i = e.lexer.next.type;
      return n == null && s === "?" && !be(i) || n != null && s === "?" ? (e.consume("?"), n == null ? {
        type: "JsdocTypeNullable",
        element: e.parseType(m.NULLABLE),
        meta: {
          position: "prefix"
        }
      } : {
        type: "JsdocTypeNullable",
        element: w(n),
        meta: {
          position: "suffix"
        }
      }) : null;
    };
    function J(e) {
      const t = (n, s, i) => {
        const y = n.lexer.current.type, f = n.lexer.next.type;
        if (i === null) {
          if ("parsePrefix" in e && e.accept(y, f))
            return e.parsePrefix(n);
        } else if ("parseInfix" in e && e.precedence > s && e.accept(y, f))
          return e.parseInfix(n, i);
        return null;
      };
      return Object.defineProperty(t, "name", {
        value: e.name
      }), t;
    }
    const G = J({
      name: "optionalParslet",
      accept: (e) => e === "=",
      precedence: m.OPTIONAL,
      parsePrefix: (e) => (e.consume("="), {
        type: "JsdocTypeOptional",
        element: e.parseType(m.OPTIONAL),
        meta: {
          position: "prefix"
        }
      }),
      parseInfix: (e, t) => (e.consume("="), {
        type: "JsdocTypeOptional",
        element: w(t),
        meta: {
          position: "suffix"
        }
      })
    }), W = J({
      name: "numberParslet",
      accept: (e) => e === "Number",
      parsePrefix: (e) => {
        const t = parseFloat(e.lexer.current.text);
        return e.consume("Number"), {
          type: "JsdocTypeNumber",
          value: t
        };
      }
    }), xt = J({
      name: "parenthesisParslet",
      accept: (e) => e === "(",
      parsePrefix: (e) => {
        if (e.consume("("), e.consume(")"))
          return {
            type: "JsdocTypeParameterList",
            elements: []
          };
        const t = e.parseIntermediateType(m.ALL);
        if (!e.consume(")"))
          throw new Error("Unterminated parenthesis");
        return t.type === "JsdocTypeParameterList" ? t : t.type === "JsdocTypeKeyValue" ? {
          type: "JsdocTypeParameterList",
          elements: [t]
        } : {
          type: "JsdocTypeParenthesis",
          element: w(t)
        };
      }
    }), kt = J({
      name: "specialTypesParslet",
      accept: (e, t) => e === "?" && be(t) || e === "null" || e === "undefined" || e === "*",
      parsePrefix: (e) => {
        if (e.consume("null"))
          return {
            type: "JsdocTypeNull"
          };
        if (e.consume("undefined"))
          return {
            type: "JsdocTypeUndefined"
          };
        if (e.consume("*"))
          return {
            type: "JsdocTypeAny"
          };
        if (e.consume("?"))
          return {
            type: "JsdocTypeUnknown"
          };
        throw new Error("Unacceptable token: " + e.lexer.current.text);
      }
    }), St = J({
      name: "notNullableParslet",
      accept: (e) => e === "!",
      precedence: m.NULLABLE,
      parsePrefix: (e) => (e.consume("!"), {
        type: "JsdocTypeNotNullable",
        element: e.parseType(m.NULLABLE),
        meta: {
          position: "prefix"
        }
      }),
      parseInfix: (e, t) => (e.consume("!"), {
        type: "JsdocTypeNotNullable",
        element: w(t),
        meta: {
          position: "suffix"
        }
      })
    });
    function Ot({ allowTrailingComma: e }) {
      return J({
        name: "parameterListParslet",
        accept: (t) => t === ",",
        precedence: m.PARAMETER_LIST,
        parseInfix: (t, n) => {
          const s = [
            ne(n)
          ];
          t.consume(",");
          do
            try {
              const i = t.parseIntermediateType(m.PARAMETER_LIST);
              s.push(ne(i));
            } catch (i) {
              if (e && i instanceof u)
                break;
              throw i;
            }
          while (t.consume(","));
          if (s.length > 0 && s.slice(0, -1).some((i) => i.type === "JsdocTypeVariadic"))
            throw new Error("Only the last parameter may be a rest parameter");
          return {
            type: "JsdocTypeParameterList",
            elements: s
          };
        }
      });
    }
    const It = J({
      name: "genericParslet",
      accept: (e, t) => e === "<" || e === "." && t === "<",
      precedence: m.GENERIC,
      parseInfix: (e, t) => {
        const n = e.consume(".");
        e.consume("<");
        const s = [];
        do
          s.push(e.parseType(m.PARAMETER_LIST));
        while (e.consume(","));
        if (!e.consume(">"))
          throw new Error("Unterminated generic parameter list");
        return {
          type: "JsdocTypeGeneric",
          left: w(t),
          elements: s,
          meta: {
            brackets: "angle",
            dot: n
          }
        };
      }
    }), At = J({
      name: "unionParslet",
      accept: (e) => e === "|",
      precedence: m.UNION,
      parseInfix: (e, t) => {
        e.consume("|");
        const n = [];
        do
          n.push(e.parseType(m.UNION));
        while (e.consume("|"));
        return {
          type: "JsdocTypeUnion",
          elements: [w(t), ...n]
        };
      }
    }), se = [
      oe,
      G,
      W,
      xt,
      kt,
      St,
      Ot({
        allowTrailingComma: !0
      }),
      It,
      At,
      G
    ];
    function X({ allowSquareBracketsOnAnyType: e, allowJsdocNamePaths: t, pathGrammar: n }) {
      return function(i, y, f) {
        if (f == null || y >= m.NAME_PATH)
          return null;
        const g = i.lexer.current.type, k = i.lexer.next.type;
        if (!(g === "." && k !== "<" || g === "[" && (e || f.type === "JsdocTypeName") || t && (g === "~" || g === "#")))
          return null;
        let O, z = !1;
        i.consume(".") ? O = "property" : i.consume("[") ? (O = "property-brackets", z = !0) : i.consume("~") ? O = "inner" : (i.consume("#"), O = "instance");
        const Le = n !== null ? new j(n, i.lexer, i) : i, I = Le.parseIntermediateType(m.NAME_PATH);
        i.acceptLexerState(Le);
        let M;
        switch (I.type) {
          case "JsdocTypeName":
            M = {
              type: "JsdocTypeProperty",
              value: I.value,
              meta: {
                quote: void 0
              }
            };
            break;
          case "JsdocTypeNumber":
            M = {
              type: "JsdocTypeProperty",
              value: I.value.toString(10),
              meta: {
                quote: void 0
              }
            };
            break;
          case "JsdocTypeStringValue":
            M = {
              type: "JsdocTypeProperty",
              value: I.value,
              meta: {
                quote: I.meta.quote
              }
            };
            break;
          case "JsdocTypeSpecialNamePath":
            if (I.specialType === "event")
              M = I;
            else
              throw new d(I, "Type 'JsdocTypeSpecialNamePath' is only allowed with specialType 'event'");
            break;
          default:
            throw new d(I, "Expecting 'JsdocTypeName', 'JsdocTypeNumber', 'JsdocStringValue' or 'JsdocTypeSpecialNamePath'");
        }
        if (z && !i.consume("]")) {
          const Fe = i.lexer.current;
          throw new Error(`Unterminated square brackets. Next token is '${Fe.type}' with text '${Fe.text}'`);
        }
        return {
          type: "JsdocTypeNamePath",
          left: w(f),
          right: M,
          pathType: O
        };
      };
    }
    function A({ allowedAdditionalTokens: e }) {
      return J({
        name: "nameParslet",
        accept: (t) => t === "Identifier" || t === "this" || t === "new" || e.includes(t),
        parsePrefix: (t) => {
          const { type: n, text: s } = t.lexer.current;
          return t.consume(n), {
            type: "JsdocTypeName",
            value: s
          };
        }
      });
    }
    const D = J({
      name: "stringValueParslet",
      accept: (e) => e === "StringValue",
      parsePrefix: (e) => {
        const t = e.lexer.current.text;
        return e.consume("StringValue"), {
          type: "JsdocTypeStringValue",
          value: t.slice(1, -1),
          meta: {
            quote: t[0] === "'" ? "single" : "double"
          }
        };
      }
    });
    function H({ pathGrammar: e, allowedTypes: t }) {
      return J({
        name: "specialNamePathParslet",
        accept: (n) => t.includes(n),
        parsePrefix: (n) => {
          const s = n.lexer.current.type;
          if (n.consume(s), !n.consume(":"))
            return {
              type: "JsdocTypeName",
              value: s
            };
          let i, y = n.lexer.current;
          if (n.consume("StringValue"))
            i = {
              type: "JsdocTypeSpecialNamePath",
              value: y.text.slice(1, -1),
              specialType: s,
              meta: {
                quote: y.text[0] === "'" ? "single" : "double"
              }
            };
          else {
            let k = "";
            const b = ["Identifier", "@", "/"];
            for (; b.some((O) => n.consume(O)); )
              k += y.text, y = n.lexer.current;
            i = {
              type: "JsdocTypeSpecialNamePath",
              value: k,
              specialType: s,
              meta: {
                quote: void 0
              }
            };
          }
          const f = new j(e, n.lexer, n), g = f.parseInfixIntermediateType(i, m.ALL);
          return n.acceptLexerState(f), w(g);
        }
      });
    }
    const xe = [
      A({
        allowedAdditionalTokens: ["external", "module"]
      }),
      D,
      W,
      X({
        allowSquareBracketsOnAnyType: !1,
        allowJsdocNamePaths: !0,
        pathGrammar: null
      })
    ], V = [
      ...xe,
      H({
        allowedTypes: ["event"],
        pathGrammar: xe
      })
    ];
    function ae(e) {
      let t;
      if (e.type === "JsdocTypeParameterList")
        t = e.elements;
      else if (e.type === "JsdocTypeParenthesis")
        t = [e.element];
      else
        throw new d(e);
      return t.map((n) => ne(n));
    }
    function Rt(e) {
      const t = ae(e);
      if (t.some((n) => n.type === "JsdocTypeKeyValue"))
        throw new Error("No parameter should be named");
      return t;
    }
    function ie({ allowNamedParameters: e, allowNoReturnType: t, allowWithoutParenthesis: n, allowNewAsFunctionKeyword: s }) {
      return J({
        name: "functionParslet",
        accept: (i, y) => i === "function" || s && i === "new" && y === "(",
        parsePrefix: (i) => {
          const y = i.consume("new");
          i.consume("function");
          const f = i.lexer.current.type === "(";
          if (!f) {
            if (!n)
              throw new Error("function is missing parameter list");
            return {
              type: "JsdocTypeName",
              value: "function"
            };
          }
          let g = {
            type: "JsdocTypeFunction",
            parameters: [],
            arrow: !1,
            constructor: y,
            parenthesis: f
          };
          const k = i.parseIntermediateType(m.FUNCTION);
          if (e === void 0)
            g.parameters = Rt(k);
          else {
            if (y && k.type === "JsdocTypeFunction" && k.arrow)
              return g = k, g.constructor = !0, g;
            g.parameters = ae(k);
            for (const b of g.parameters)
              if (b.type === "JsdocTypeKeyValue" && !e.includes(b.key))
                throw new Error(`only allowed named parameters are ${e.join(", ")} but got ${b.type}`);
          }
          if (i.consume(":"))
            g.returnType = i.parseType(m.PREFIX);
          else if (!t)
            throw new Error("function is missing return type");
          return g;
        }
      });
    }
    function ce({ allowPostfix: e, allowEnclosingBrackets: t }) {
      return J({
        name: "variadicParslet",
        accept: (n) => n === "...",
        precedence: m.PREFIX,
        parsePrefix: (n) => {
          n.consume("...");
          const s = t && n.consume("[");
          try {
            const i = n.parseType(m.PREFIX);
            if (s && !n.consume("]"))
              throw new Error("Unterminated variadic type. Missing ']'");
            return {
              type: "JsdocTypeVariadic",
              element: w(i),
              meta: {
                position: "prefix",
                squareBrackets: s
              }
            };
          } catch (i) {
            if (i instanceof u) {
              if (s)
                throw new Error("Empty square brackets for variadic are not allowed.");
              return {
                type: "JsdocTypeVariadic",
                meta: {
                  position: void 0,
                  squareBrackets: !1
                }
              };
            } else
              throw i;
          }
        },
        parseInfix: e ? (n, s) => (n.consume("..."), {
          type: "JsdocTypeVariadic",
          element: w(s),
          meta: {
            position: "suffix",
            squareBrackets: !1
          }
        }) : void 0
      });
    }
    const ke = J({
      name: "symbolParslet",
      accept: (e) => e === "(",
      precedence: m.SYMBOL,
      parseInfix: (e, t) => {
        if (t.type !== "JsdocTypeName")
          throw new Error("Symbol expects a name on the left side. (Reacting on '(')");
        e.consume("(");
        const n = {
          type: "JsdocTypeSymbol",
          value: t.value
        };
        if (!e.consume(")")) {
          const s = e.parseIntermediateType(m.SYMBOL);
          if (n.element = bt(s), !e.consume(")"))
            throw new Error("Symbol does not end after value");
        }
        return n;
      }
    }), Se = J({
      name: "arrayBracketsParslet",
      precedence: m.ARRAY_BRACKETS,
      accept: (e, t) => e === "[" && t === "]",
      parseInfix: (e, t) => (e.consume("["), e.consume("]"), {
        type: "JsdocTypeGeneric",
        left: {
          type: "JsdocTypeName",
          value: "Array"
        },
        elements: [
          w(t)
        ],
        meta: {
          brackets: "square",
          dot: !1
        }
      })
    });
    function le({ objectFieldGrammar: e, allowKeyTypes: t }) {
      return J({
        name: "objectParslet",
        accept: (n) => n === "{",
        parsePrefix: (n) => {
          n.consume("{");
          const s = {
            type: "JsdocTypeObject",
            meta: {
              separator: "comma"
            },
            elements: []
          };
          if (!n.consume("}")) {
            let i;
            const y = new j(e, n.lexer, n);
            for (; ; ) {
              y.acceptLexerState(n);
              let f = y.parseIntermediateType(m.OBJECT);
              n.acceptLexerState(y), f === void 0 && t && (f = n.parseIntermediateType(m.OBJECT));
              let g = !1;
              if (f.type === "JsdocTypeNullable" && (g = !0, f = f.element), f.type === "JsdocTypeNumber" || f.type === "JsdocTypeName" || f.type === "JsdocTypeStringValue") {
                let b;
                f.type === "JsdocTypeStringValue" && (b = f.meta.quote), s.elements.push({
                  type: "JsdocTypeObjectField",
                  key: f.value.toString(),
                  right: void 0,
                  optional: g,
                  readonly: !1,
                  meta: {
                    quote: b
                  }
                });
              } else if (f.type === "JsdocTypeObjectField" || f.type === "JsdocTypeJsdocObjectField")
                s.elements.push(f);
              else
                throw new d(f);
              if (n.lexer.current.startOfLine)
                i = "linebreak";
              else if (n.consume(","))
                i = "comma";
              else if (n.consume(";"))
                i = "semicolon";
              else
                break;
              if (n.lexer.current.type === "}")
                break;
            }
            if (s.meta.separator = i ?? "comma", !n.consume("}"))
              throw new Error("Unterminated record type. Missing '}'");
          }
          return s;
        }
      });
    }
    function pe({ allowSquaredProperties: e, allowKeyTypes: t, allowReadonly: n, allowOptional: s }) {
      return J({
        name: "objectFieldParslet",
        precedence: m.KEY_VALUE,
        accept: (i) => i === ":",
        parseInfix: (i, y) => {
          var f;
          let g = !1, k = !1;
          s && y.type === "JsdocTypeNullable" && (g = !0, y = y.element), n && y.type === "JsdocTypeReadonlyProperty" && (k = !0, y = y.element);
          const b = (f = i.baseParser) !== null && f !== void 0 ? f : i;
          if (b.acceptLexerState(i), y.type === "JsdocTypeNumber" || y.type === "JsdocTypeName" || y.type === "JsdocTypeStringValue" || re(y)) {
            if (re(y) && !e)
              throw new d(y);
            b.consume(":");
            let O;
            y.type === "JsdocTypeStringValue" && (O = y.meta.quote);
            const z = b.parseType(m.KEY_VALUE);
            return i.acceptLexerState(b), {
              type: "JsdocTypeObjectField",
              key: re(y) ? y : y.value.toString(),
              right: z,
              optional: g,
              readonly: k,
              meta: {
                quote: O
              }
            };
          } else {
            if (!t)
              throw new d(y);
            b.consume(":");
            const O = b.parseType(m.KEY_VALUE);
            return i.acceptLexerState(b), {
              type: "JsdocTypeJsdocObjectField",
              left: w(y),
              right: O
            };
          }
        }
      });
    }
    function ue({ allowOptional: e, allowVariadic: t }) {
      return J({
        name: "keyValueParslet",
        precedence: m.KEY_VALUE,
        accept: (n) => n === ":",
        parseInfix: (n, s) => {
          let i = !1, y = !1;
          if (e && s.type === "JsdocTypeNullable" && (i = !0, s = s.element), t && s.type === "JsdocTypeVariadic" && s.element !== void 0 && (y = !0, s = s.element), s.type !== "JsdocTypeName")
            throw new d(s);
          n.consume(":");
          const f = n.parseType(m.KEY_VALUE);
          return {
            type: "JsdocTypeKeyValue",
            key: s.value,
            right: f,
            optional: i,
            variadic: y
          };
        }
      });
    }
    const Oe = [
      ...se,
      ie({
        allowWithoutParenthesis: !0,
        allowNamedParameters: ["this", "new"],
        allowNoReturnType: !0,
        allowNewAsFunctionKeyword: !1
      }),
      D,
      H({
        allowedTypes: ["module", "external", "event"],
        pathGrammar: V
      }),
      ce({
        allowEnclosingBrackets: !0,
        allowPostfix: !0
      }),
      A({
        allowedAdditionalTokens: ["keyof"]
      }),
      ke,
      Se,
      X({
        allowSquareBracketsOnAnyType: !1,
        allowJsdocNamePaths: !0,
        pathGrammar: V
      })
    ], vt = [
      ...Oe,
      le({
        // jsdoc syntax allows full types as keys, so we need to pull in the full grammar here
        // we leave out the object type deliberately
        objectFieldGrammar: [
          A({
            allowedAdditionalTokens: ["module", "in"]
          }),
          pe({
            allowSquaredProperties: !1,
            allowKeyTypes: !0,
            allowOptional: !1,
            allowReadonly: !1
          }),
          ...Oe
        ],
        allowKeyTypes: !0
      }),
      ue({
        allowOptional: !0,
        allowVariadic: !0
      })
    ], Ie = J({
      name: "typeOfParslet",
      accept: (e) => e === "typeof",
      parsePrefix: (e) => (e.consume("typeof"), {
        type: "JsdocTypeTypeof",
        element: w(e.parseType(m.KEY_OF_TYPE_OF))
      })
    }), _t = [
      A({
        allowedAdditionalTokens: ["module", "keyof", "event", "external", "in"]
      }),
      oe,
      G,
      D,
      W,
      pe({
        allowSquaredProperties: !1,
        allowKeyTypes: !1,
        allowOptional: !1,
        allowReadonly: !1
      })
    ], Lt = [
      ...se,
      le({
        allowKeyTypes: !1,
        objectFieldGrammar: _t
      }),
      A({
        allowedAdditionalTokens: ["event", "external", "in"]
      }),
      Ie,
      ie({
        allowWithoutParenthesis: !1,
        allowNamedParameters: ["this", "new"],
        allowNoReturnType: !0,
        allowNewAsFunctionKeyword: !1
      }),
      ce({
        allowEnclosingBrackets: !1,
        allowPostfix: !1
      }),
      // additional name parslet is needed for some special cases
      A({
        allowedAdditionalTokens: ["keyof"]
      }),
      H({
        allowedTypes: ["module"],
        pathGrammar: V
      }),
      X({
        allowSquareBracketsOnAnyType: !1,
        allowJsdocNamePaths: !0,
        pathGrammar: V
      }),
      ue({
        allowOptional: !1,
        allowVariadic: !1
      }),
      ke
    ], Ft = J({
      name: "assertsParslet",
      accept: (e) => e === "asserts",
      parsePrefix: (e) => {
        e.consume("asserts");
        const t = e.parseIntermediateType(m.SYMBOL);
        if (t.type !== "JsdocTypeName")
          throw new d(t, "A typescript asserts always has to have a name on the left side.");
        return e.consume("is"), {
          type: "JsdocTypeAsserts",
          left: t,
          right: w(e.parseIntermediateType(m.INFIX))
        };
      }
    });
    function Ut({ allowQuestionMark: e }) {
      return J({
        name: "tupleParslet",
        accept: (t) => t === "[",
        parsePrefix: (t) => {
          t.consume("[");
          const n = {
            type: "JsdocTypeTuple",
            elements: []
          };
          if (t.consume("]"))
            return n;
          const s = t.parseIntermediateType(m.ALL);
          if (s.type === "JsdocTypeParameterList" ? s.elements[0].type === "JsdocTypeKeyValue" ? n.elements = s.elements.map(Y) : n.elements = s.elements.map(w) : s.type === "JsdocTypeKeyValue" ? n.elements = [Y(s)] : n.elements = [w(s)], !t.consume("]"))
            throw new Error("Unterminated '['");
          if (!e && n.elements.some((i) => i.type === "JsdocTypeUnknown"))
            throw new Error("Question mark in tuple not allowed");
          return n;
        }
      });
    }
    const jt = J({
      name: "keyOfParslet",
      accept: (e) => e === "keyof",
      parsePrefix: (e) => (e.consume("keyof"), {
        type: "JsdocTypeKeyof",
        element: w(e.parseType(m.KEY_OF_TYPE_OF))
      })
    }), Vt = J({
      name: "importParslet",
      accept: (e) => e === "import",
      parsePrefix: (e) => {
        if (e.consume("import"), !e.consume("("))
          throw new Error("Missing parenthesis after import keyword");
        const t = e.parseType(m.PREFIX);
        if (t.type !== "JsdocTypeStringValue")
          throw new Error("Only string values are allowed as paths for imports");
        if (!e.consume(")"))
          throw new Error("Missing closing parenthesis after import keyword");
        return {
          type: "JsdocTypeImport",
          element: t
        };
      }
    }), Kt = J({
      name: "readonlyPropertyParslet",
      accept: (e) => e === "readonly",
      parsePrefix: (e) => (e.consume("readonly"), {
        type: "JsdocTypeReadonlyProperty",
        element: e.parseType(m.KEY_VALUE)
      })
    }), $t = J({
      name: "arrowFunctionParslet",
      precedence: m.ARROW,
      accept: (e) => e === "=>",
      parseInfix: (e, t) => (e.consume("=>"), {
        type: "JsdocTypeFunction",
        parameters: ae(t).map(Pt),
        arrow: !0,
        constructor: !1,
        parenthesis: !0,
        returnType: e.parseType(m.OBJECT)
      })
    }), Dt = J({
      name: "intersectionParslet",
      accept: (e) => e === "&",
      precedence: m.INTERSECTION,
      parseInfix: (e, t) => {
        e.consume("&");
        const n = [];
        do
          n.push(e.parseType(m.INTERSECTION));
        while (e.consume("&"));
        return {
          type: "JsdocTypeIntersection",
          elements: [w(t), ...n]
        };
      }
    }), qt = J({
      name: "predicateParslet",
      precedence: m.INFIX,
      accept: (e) => e === "is",
      parseInfix: (e, t) => {
        if (t.type !== "JsdocTypeName")
          throw new d(t, "A typescript predicate always has to have a name on the left side.");
        return e.consume("is"), {
          type: "JsdocTypePredicate",
          left: t,
          right: w(e.parseIntermediateType(m.INFIX))
        };
      }
    }), Mt = J({
      name: "objectSquareBracketPropertyParslet",
      accept: (e) => e === "[",
      parsePrefix: (e) => {
        if (e.baseParser === void 0)
          throw new Error("Only allowed inside object grammar");
        e.consume("[");
        const t = e.lexer.current.text;
        e.consume("Identifier");
        let n;
        if (e.consume(":")) {
          const s = e.baseParser;
          s.acceptLexerState(e), n = {
            type: "JsdocTypeIndexSignature",
            key: t,
            right: s.parseType(m.INDEX_BRACKETS)
          }, e.acceptLexerState(s);
        } else if (e.consume("in")) {
          const s = e.baseParser;
          s.acceptLexerState(e), n = {
            type: "JsdocTypeMappedType",
            key: t,
            right: s.parseType(m.ARRAY_BRACKETS)
          }, e.acceptLexerState(s);
        } else
          throw new Error("Missing ':' or 'in' inside square bracketed property.");
        if (!e.consume("]"))
          throw new Error("Unterminated square brackets");
        return n;
      }
    }), Bt = [
      Kt,
      A({
        allowedAdditionalTokens: ["module", "event", "keyof", "event", "external", "in"]
      }),
      oe,
      G,
      D,
      W,
      pe({
        allowSquaredProperties: !0,
        allowKeyTypes: !1,
        allowOptional: !0,
        allowReadonly: !0
      }),
      Mt
    ], Ct = [
      ...se,
      le({
        allowKeyTypes: !1,
        objectFieldGrammar: Bt
      }),
      Ie,
      jt,
      Vt,
      D,
      ie({
        allowWithoutParenthesis: !0,
        allowNoReturnType: !1,
        allowNamedParameters: ["this", "new", "args"],
        allowNewAsFunctionKeyword: !0
      }),
      Ut({
        allowQuestionMark: !1
      }),
      ce({
        allowEnclosingBrackets: !1,
        allowPostfix: !1
      }),
      Ft,
      A({
        allowedAdditionalTokens: ["event", "external", "in"]
      }),
      H({
        allowedTypes: ["module"],
        pathGrammar: V
      }),
      Se,
      $t,
      X({
        allowSquareBracketsOnAnyType: !0,
        allowJsdocNamePaths: !1,
        pathGrammar: V
      }),
      Dt,
      qt,
      ue({
        allowVariadic: !0,
        allowOptional: !0
      })
    ];
    function Ae(e, t) {
      switch (t) {
        case "closure":
          return new j(Lt, e).parse();
        case "jsdoc":
          return new j(vt, e).parse();
        case "typescript":
          return new j(Ct, e).parse();
      }
    }
    function Yt(e, t = ["typescript", "closure", "jsdoc"]) {
      let n;
      for (const s of t)
        try {
          return Ae(e, s);
        } catch (i) {
          n = i;
        }
      throw n;
    }
    function q(e, t) {
      const n = e[t.type];
      if (n === void 0)
        throw new Error(`In this set of transform rules exists no rule for type ${t.type}.`);
      return n(t, (s) => q(e, s));
    }
    function x(e) {
      throw new Error("This transform is not available. Are you trying the correct parsing mode?");
    }
    function Re(e) {
      const t = {
        params: []
      };
      for (const n of e.parameters)
        n.type === "JsdocTypeKeyValue" ? n.key === "this" ? t.this = n.right : n.key === "new" ? t.new = n.right : t.params.push(n) : t.params.push(n);
      return t;
    }
    function Q(e, t, n) {
      return e === "prefix" ? n + t : t + n;
    }
    function R(e, t) {
      switch (t) {
        case "double":
          return `"${e}"`;
        case "single":
          return `'${e}'`;
        case void 0:
          return e;
      }
    }
    function ve() {
      return {
        JsdocTypeParenthesis: (e, t) => `(${e.element !== void 0 ? t(e.element) : ""})`,
        JsdocTypeKeyof: (e, t) => `keyof ${t(e.element)}`,
        JsdocTypeFunction: (e, t) => {
          if (e.arrow) {
            if (e.returnType === void 0)
              throw new Error("Arrow function needs a return type.");
            let n = `(${e.parameters.map(t).join(", ")}) => ${t(e.returnType)}`;
            return e.constructor && (n = "new " + n), n;
          } else {
            let n = e.constructor ? "new" : "function";
            return e.parenthesis && (n += `(${e.parameters.map(t).join(", ")})`, e.returnType !== void 0 && (n += `: ${t(e.returnType)}`)), n;
          }
        },
        JsdocTypeName: (e) => e.value,
        JsdocTypeTuple: (e, t) => `[${e.elements.map(t).join(", ")}]`,
        JsdocTypeVariadic: (e, t) => e.meta.position === void 0 ? "..." : Q(e.meta.position, t(e.element), "..."),
        JsdocTypeNamePath: (e, t) => {
          const n = t(e.left), s = t(e.right);
          switch (e.pathType) {
            case "inner":
              return `${n}~${s}`;
            case "instance":
              return `${n}#${s}`;
            case "property":
              return `${n}.${s}`;
            case "property-brackets":
              return `${n}[${s}]`;
          }
        },
        JsdocTypeStringValue: (e) => R(e.value, e.meta.quote),
        JsdocTypeAny: () => "*",
        JsdocTypeGeneric: (e, t) => {
          if (e.meta.brackets === "square") {
            const n = e.elements[0], s = t(n);
            return n.type === "JsdocTypeUnion" || n.type === "JsdocTypeIntersection" ? `(${s})[]` : `${s}[]`;
          } else
            return `${t(e.left)}${e.meta.dot ? "." : ""}<${e.elements.map(t).join(", ")}>`;
        },
        JsdocTypeImport: (e, t) => `import(${t(e.element)})`,
        JsdocTypeObjectField: (e, t) => {
          let n = "";
          return e.readonly && (n += "readonly "), typeof e.key == "string" ? n += R(e.key, e.meta.quote) : n += t(e.key), e.optional && (n += "?"), e.right === void 0 ? n : n + `: ${t(e.right)}`;
        },
        JsdocTypeJsdocObjectField: (e, t) => `${t(e.left)}: ${t(e.right)}`,
        JsdocTypeKeyValue: (e, t) => {
          let n = e.key;
          return e.optional && (n += "?"), e.variadic && (n = "..." + n), e.right === void 0 ? n : n + `: ${t(e.right)}`;
        },
        JsdocTypeSpecialNamePath: (e) => `${e.specialType}:${R(e.value, e.meta.quote)}`,
        JsdocTypeNotNullable: (e, t) => Q(e.meta.position, t(e.element), "!"),
        JsdocTypeNull: () => "null",
        JsdocTypeNullable: (e, t) => Q(e.meta.position, t(e.element), "?"),
        JsdocTypeNumber: (e) => e.value.toString(),
        JsdocTypeObject: (e, t) => `{${e.elements.map(t).join((e.meta.separator === "comma" ? "," : ";") + " ")}}`,
        JsdocTypeOptional: (e, t) => Q(e.meta.position, t(e.element), "="),
        JsdocTypeSymbol: (e, t) => `${e.value}(${e.element !== void 0 ? t(e.element) : ""})`,
        JsdocTypeTypeof: (e, t) => `typeof ${t(e.element)}`,
        JsdocTypeUndefined: () => "undefined",
        JsdocTypeUnion: (e, t) => e.elements.map(t).join(" | "),
        JsdocTypeUnknown: () => "?",
        JsdocTypeIntersection: (e, t) => e.elements.map(t).join(" & "),
        JsdocTypeProperty: (e) => R(e.value, e.meta.quote),
        JsdocTypePredicate: (e, t) => `${t(e.left)} is ${t(e.right)}`,
        JsdocTypeIndexSignature: (e, t) => `[${e.key}: ${t(e.right)}]`,
        JsdocTypeMappedType: (e, t) => `[${e.key} in ${t(e.right)}]`,
        JsdocTypeAsserts: (e, t) => `asserts ${t(e.left)} is ${t(e.right)}`
      };
    }
    const Gt = ve();
    function Wt(e) {
      return q(Gt, e);
    }
    const Xt = [
      "null",
      "true",
      "false",
      "break",
      "case",
      "catch",
      "class",
      "const",
      "continue",
      "debugger",
      "default",
      "delete",
      "do",
      "else",
      "export",
      "extends",
      "finally",
      "for",
      "function",
      "if",
      "import",
      "in",
      "instanceof",
      "new",
      "return",
      "super",
      "switch",
      "this",
      "throw",
      "try",
      "typeof",
      "var",
      "void",
      "while",
      "with",
      "yield"
    ];
    function v(e) {
      const t = {
        type: "NameExpression",
        name: e
      };
      return Xt.includes(e) && (t.reservedWord = !0), t;
    }
    const Ht = {
      JsdocTypeOptional: (e, t) => {
        const n = t(e.element);
        return n.optional = !0, n;
      },
      JsdocTypeNullable: (e, t) => {
        const n = t(e.element);
        return n.nullable = !0, n;
      },
      JsdocTypeNotNullable: (e, t) => {
        const n = t(e.element);
        return n.nullable = !1, n;
      },
      JsdocTypeVariadic: (e, t) => {
        if (e.element === void 0)
          throw new Error("dots without value are not allowed in catharsis mode");
        const n = t(e.element);
        return n.repeatable = !0, n;
      },
      JsdocTypeAny: () => ({
        type: "AllLiteral"
      }),
      JsdocTypeNull: () => ({
        type: "NullLiteral"
      }),
      JsdocTypeStringValue: (e) => v(R(e.value, e.meta.quote)),
      JsdocTypeUndefined: () => ({
        type: "UndefinedLiteral"
      }),
      JsdocTypeUnknown: () => ({
        type: "UnknownLiteral"
      }),
      JsdocTypeFunction: (e, t) => {
        const n = Re(e), s = {
          type: "FunctionType",
          params: n.params.map(t)
        };
        return n.this !== void 0 && (s.this = t(n.this)), n.new !== void 0 && (s.new = t(n.new)), e.returnType !== void 0 && (s.result = t(e.returnType)), s;
      },
      JsdocTypeGeneric: (e, t) => ({
        type: "TypeApplication",
        applications: e.elements.map((n) => t(n)),
        expression: t(e.left)
      }),
      JsdocTypeSpecialNamePath: (e) => v(e.specialType + ":" + R(e.value, e.meta.quote)),
      JsdocTypeName: (e) => e.value !== "function" ? v(e.value) : {
        type: "FunctionType",
        params: []
      },
      JsdocTypeNumber: (e) => v(e.value.toString()),
      JsdocTypeObject: (e, t) => {
        const n = {
          type: "RecordType",
          fields: []
        };
        for (const s of e.elements)
          s.type !== "JsdocTypeObjectField" && s.type !== "JsdocTypeJsdocObjectField" ? n.fields.push({
            type: "FieldType",
            key: t(s),
            value: void 0
          }) : n.fields.push(t(s));
        return n;
      },
      JsdocTypeObjectField: (e, t) => {
        if (typeof e.key != "string")
          throw new Error("Index signatures and mapped types are not supported");
        return {
          type: "FieldType",
          key: v(R(e.key, e.meta.quote)),
          value: e.right === void 0 ? void 0 : t(e.right)
        };
      },
      JsdocTypeJsdocObjectField: (e, t) => ({
        type: "FieldType",
        key: t(e.left),
        value: t(e.right)
      }),
      JsdocTypeUnion: (e, t) => ({
        type: "TypeUnion",
        elements: e.elements.map((n) => t(n))
      }),
      JsdocTypeKeyValue: (e, t) => ({
        type: "FieldType",
        key: v(e.key),
        value: e.right === void 0 ? void 0 : t(e.right)
      }),
      JsdocTypeNamePath: (e, t) => {
        const n = t(e.left);
        let s;
        e.right.type === "JsdocTypeSpecialNamePath" ? s = t(e.right).name : s = R(e.right.value, e.right.meta.quote);
        const i = e.pathType === "inner" ? "~" : e.pathType === "instance" ? "#" : ".";
        return v(`${n.name}${i}${s}`);
      },
      JsdocTypeSymbol: (e) => {
        let t = "", n = e.element, s = !1;
        return n?.type === "JsdocTypeVariadic" && (n.meta.position === "prefix" ? t = "..." : s = !0, n = n.element), n?.type === "JsdocTypeName" ? t += n.value : n?.type === "JsdocTypeNumber" && (t += n.value.toString()), s && (t += "..."), v(`${e.value}(${t})`);
      },
      JsdocTypeParenthesis: (e, t) => t(w(e.element)),
      JsdocTypeMappedType: x,
      JsdocTypeIndexSignature: x,
      JsdocTypeImport: x,
      JsdocTypeKeyof: x,
      JsdocTypeTuple: x,
      JsdocTypeTypeof: x,
      JsdocTypeIntersection: x,
      JsdocTypeProperty: x,
      JsdocTypePredicate: x,
      JsdocTypeAsserts: x
    };
    function Qt(e) {
      return q(Ht, e);
    }
    function F(e) {
      switch (e) {
        case void 0:
          return "none";
        case "single":
          return "single";
        case "double":
          return "double";
      }
    }
    function zt(e) {
      switch (e) {
        case "inner":
          return "INNER_MEMBER";
        case "instance":
          return "INSTANCE_MEMBER";
        case "property":
          return "MEMBER";
        case "property-brackets":
          return "MEMBER";
      }
    }
    function ye(e, t) {
      return t.length === 2 ? {
        type: e,
        left: t[0],
        right: t[1]
      } : {
        type: e,
        left: t[0],
        right: ye(e, t.slice(1))
      };
    }
    const Zt = {
      JsdocTypeOptional: (e, t) => ({
        type: "OPTIONAL",
        value: t(e.element),
        meta: {
          syntax: e.meta.position === "prefix" ? "PREFIX_EQUAL_SIGN" : "SUFFIX_EQUALS_SIGN"
        }
      }),
      JsdocTypeNullable: (e, t) => ({
        type: "NULLABLE",
        value: t(e.element),
        meta: {
          syntax: e.meta.position === "prefix" ? "PREFIX_QUESTION_MARK" : "SUFFIX_QUESTION_MARK"
        }
      }),
      JsdocTypeNotNullable: (e, t) => ({
        type: "NOT_NULLABLE",
        value: t(e.element),
        meta: {
          syntax: e.meta.position === "prefix" ? "PREFIX_BANG" : "SUFFIX_BANG"
        }
      }),
      JsdocTypeVariadic: (e, t) => {
        const n = {
          type: "VARIADIC",
          meta: {
            syntax: e.meta.position === "prefix" ? "PREFIX_DOTS" : e.meta.position === "suffix" ? "SUFFIX_DOTS" : "ONLY_DOTS"
          }
        };
        return e.element !== void 0 && (n.value = t(e.element)), n;
      },
      JsdocTypeName: (e) => ({
        type: "NAME",
        name: e.value
      }),
      JsdocTypeTypeof: (e, t) => ({
        type: "TYPE_QUERY",
        name: t(e.element)
      }),
      JsdocTypeTuple: (e, t) => ({
        type: "TUPLE",
        entries: e.elements.map(t)
      }),
      JsdocTypeKeyof: (e, t) => ({
        type: "KEY_QUERY",
        value: t(e.element)
      }),
      JsdocTypeImport: (e) => ({
        type: "IMPORT",
        path: {
          type: "STRING_VALUE",
          quoteStyle: F(e.element.meta.quote),
          string: e.element.value
        }
      }),
      JsdocTypeUndefined: () => ({
        type: "NAME",
        name: "undefined"
      }),
      JsdocTypeAny: () => ({
        type: "ANY"
      }),
      JsdocTypeFunction: (e, t) => {
        const n = Re(e), s = {
          type: e.arrow ? "ARROW" : "FUNCTION",
          params: n.params.map((i) => {
            if (i.type === "JsdocTypeKeyValue") {
              if (i.right === void 0)
                throw new Error("Function parameter without ':' is not expected to be 'KEY_VALUE'");
              return {
                type: "NAMED_PARAMETER",
                name: i.key,
                typeName: t(i.right)
              };
            } else
              return t(i);
          }),
          new: null,
          returns: null
        };
        return n.this !== void 0 ? s.this = t(n.this) : e.arrow || (s.this = null), n.new !== void 0 && (s.new = t(n.new)), e.returnType !== void 0 && (s.returns = t(e.returnType)), s;
      },
      JsdocTypeGeneric: (e, t) => {
        const n = {
          type: "GENERIC",
          subject: t(e.left),
          objects: e.elements.map(t),
          meta: {
            syntax: e.meta.brackets === "square" ? "SQUARE_BRACKET" : e.meta.dot ? "ANGLE_BRACKET_WITH_DOT" : "ANGLE_BRACKET"
          }
        };
        return e.meta.brackets === "square" && e.elements[0].type === "JsdocTypeFunction" && !e.elements[0].parenthesis && (n.objects[0] = {
          type: "NAME",
          name: "function"
        }), n;
      },
      JsdocTypeObjectField: (e, t) => {
        if (typeof e.key != "string")
          throw new Error("Index signatures and mapped types are not supported");
        if (e.right === void 0)
          return {
            type: "RECORD_ENTRY",
            key: e.key,
            quoteStyle: F(e.meta.quote),
            value: null,
            readonly: !1
          };
        let n = t(e.right);
        return e.optional && (n = {
          type: "OPTIONAL",
          value: n,
          meta: {
            syntax: "SUFFIX_KEY_QUESTION_MARK"
          }
        }), {
          type: "RECORD_ENTRY",
          key: e.key.toString(),
          quoteStyle: F(e.meta.quote),
          value: n,
          readonly: !1
        };
      },
      JsdocTypeJsdocObjectField: () => {
        throw new Error("Keys may not be typed in jsdoctypeparser.");
      },
      JsdocTypeKeyValue: (e, t) => {
        if (e.right === void 0)
          return {
            type: "RECORD_ENTRY",
            key: e.key,
            quoteStyle: "none",
            value: null,
            readonly: !1
          };
        let n = t(e.right);
        return e.optional && (n = {
          type: "OPTIONAL",
          value: n,
          meta: {
            syntax: "SUFFIX_KEY_QUESTION_MARK"
          }
        }), {
          type: "RECORD_ENTRY",
          key: e.key,
          quoteStyle: "none",
          value: n,
          readonly: !1
        };
      },
      JsdocTypeObject: (e, t) => {
        const n = [];
        for (const s of e.elements)
          (s.type === "JsdocTypeObjectField" || s.type === "JsdocTypeJsdocObjectField") && n.push(t(s));
        return {
          type: "RECORD",
          entries: n
        };
      },
      JsdocTypeSpecialNamePath: (e) => {
        if (e.specialType !== "module")
          throw new Error(`jsdoctypeparser does not support type ${e.specialType} at this point.`);
        return {
          type: "MODULE",
          value: {
            type: "FILE_PATH",
            quoteStyle: F(e.meta.quote),
            path: e.value
          }
        };
      },
      JsdocTypeNamePath: (e, t) => {
        let n = !1, s, i;
        e.right.type === "JsdocTypeSpecialNamePath" && e.right.specialType === "event" ? (n = !0, s = e.right.value, i = F(e.right.meta.quote)) : (s = e.right.value, i = F(e.right.meta.quote));
        const y = {
          type: zt(e.pathType),
          owner: t(e.left),
          name: s,
          quoteStyle: i,
          hasEventPrefix: n
        };
        if (y.owner.type === "MODULE") {
          const f = y.owner;
          return y.owner = y.owner.value, f.value = y, f;
        } else
          return y;
      },
      JsdocTypeUnion: (e, t) => ye("UNION", e.elements.map(t)),
      JsdocTypeParenthesis: (e, t) => ({
        type: "PARENTHESIS",
        value: t(w(e.element))
      }),
      JsdocTypeNull: () => ({
        type: "NAME",
        name: "null"
      }),
      JsdocTypeUnknown: () => ({
        type: "UNKNOWN"
      }),
      JsdocTypeStringValue: (e) => ({
        type: "STRING_VALUE",
        quoteStyle: F(e.meta.quote),
        string: e.value
      }),
      JsdocTypeIntersection: (e, t) => ye("INTERSECTION", e.elements.map(t)),
      JsdocTypeNumber: (e) => ({
        type: "NUMBER_VALUE",
        number: e.value.toString()
      }),
      JsdocTypeSymbol: x,
      JsdocTypeProperty: x,
      JsdocTypePredicate: x,
      JsdocTypeMappedType: x,
      JsdocTypeIndexSignature: x,
      JsdocTypeAsserts: x
    };
    function en(e) {
      return q(Zt, e);
    }
    function tn() {
      return {
        JsdocTypeIntersection: (e, t) => ({
          type: "JsdocTypeIntersection",
          elements: e.elements.map(t)
        }),
        JsdocTypeGeneric: (e, t) => ({
          type: "JsdocTypeGeneric",
          left: t(e.left),
          elements: e.elements.map(t),
          meta: {
            dot: e.meta.dot,
            brackets: e.meta.brackets
          }
        }),
        JsdocTypeNullable: (e) => e,
        JsdocTypeUnion: (e, t) => ({
          type: "JsdocTypeUnion",
          elements: e.elements.map(t)
        }),
        JsdocTypeUnknown: (e) => e,
        JsdocTypeUndefined: (e) => e,
        JsdocTypeTypeof: (e, t) => ({
          type: "JsdocTypeTypeof",
          element: t(e.element)
        }),
        JsdocTypeSymbol: (e, t) => {
          const n = {
            type: "JsdocTypeSymbol",
            value: e.value
          };
          return e.element !== void 0 && (n.element = t(e.element)), n;
        },
        JsdocTypeOptional: (e, t) => ({
          type: "JsdocTypeOptional",
          element: t(e.element),
          meta: {
            position: e.meta.position
          }
        }),
        JsdocTypeObject: (e, t) => ({
          type: "JsdocTypeObject",
          meta: {
            separator: "comma"
          },
          elements: e.elements.map(t)
        }),
        JsdocTypeNumber: (e) => e,
        JsdocTypeNull: (e) => e,
        JsdocTypeNotNullable: (e, t) => ({
          type: "JsdocTypeNotNullable",
          element: t(e.element),
          meta: {
            position: e.meta.position
          }
        }),
        JsdocTypeSpecialNamePath: (e) => e,
        JsdocTypeObjectField: (e, t) => ({
          type: "JsdocTypeObjectField",
          key: e.key,
          right: e.right === void 0 ? void 0 : t(e.right),
          optional: e.optional,
          readonly: e.readonly,
          meta: e.meta
        }),
        JsdocTypeJsdocObjectField: (e, t) => ({
          type: "JsdocTypeJsdocObjectField",
          left: t(e.left),
          right: t(e.right)
        }),
        JsdocTypeKeyValue: (e, t) => ({
          type: "JsdocTypeKeyValue",
          key: e.key,
          right: e.right === void 0 ? void 0 : t(e.right),
          optional: e.optional,
          variadic: e.variadic
        }),
        JsdocTypeImport: (e, t) => ({
          type: "JsdocTypeImport",
          element: t(e.element)
        }),
        JsdocTypeAny: (e) => e,
        JsdocTypeStringValue: (e) => e,
        JsdocTypeNamePath: (e) => e,
        JsdocTypeVariadic: (e, t) => {
          const n = {
            type: "JsdocTypeVariadic",
            meta: {
              position: e.meta.position,
              squareBrackets: e.meta.squareBrackets
            }
          };
          return e.element !== void 0 && (n.element = t(e.element)), n;
        },
        JsdocTypeTuple: (e, t) => ({
          type: "JsdocTypeTuple",
          elements: e.elements.map(t)
        }),
        JsdocTypeName: (e) => e,
        JsdocTypeFunction: (e, t) => {
          const n = {
            type: "JsdocTypeFunction",
            arrow: e.arrow,
            parameters: e.parameters.map(t),
            constructor: e.constructor,
            parenthesis: e.parenthesis
          };
          return e.returnType !== void 0 && (n.returnType = t(e.returnType)), n;
        },
        JsdocTypeKeyof: (e, t) => ({
          type: "JsdocTypeKeyof",
          element: t(e.element)
        }),
        JsdocTypeParenthesis: (e, t) => ({
          type: "JsdocTypeParenthesis",
          element: t(e.element)
        }),
        JsdocTypeProperty: (e) => e,
        JsdocTypePredicate: (e, t) => ({
          type: "JsdocTypePredicate",
          left: t(e.left),
          right: t(e.right)
        }),
        JsdocTypeIndexSignature: (e, t) => ({
          type: "JsdocTypeIndexSignature",
          key: e.key,
          right: t(e.right)
        }),
        JsdocTypeMappedType: (e, t) => ({
          type: "JsdocTypeMappedType",
          key: e.key,
          right: t(e.right)
        }),
        JsdocTypeAsserts: (e, t) => ({
          type: "JsdocTypeAsserts",
          left: t(e.left),
          right: t(e.right)
        })
      };
    }
    const _e = {
      JsdocTypeAny: [],
      JsdocTypeFunction: ["parameters", "returnType"],
      JsdocTypeGeneric: ["left", "elements"],
      JsdocTypeImport: [],
      JsdocTypeIndexSignature: ["right"],
      JsdocTypeIntersection: ["elements"],
      JsdocTypeKeyof: ["element"],
      JsdocTypeKeyValue: ["right"],
      JsdocTypeMappedType: ["right"],
      JsdocTypeName: [],
      JsdocTypeNamePath: ["left", "right"],
      JsdocTypeNotNullable: ["element"],
      JsdocTypeNull: [],
      JsdocTypeNullable: ["element"],
      JsdocTypeNumber: [],
      JsdocTypeObject: ["elements"],
      JsdocTypeObjectField: ["right"],
      JsdocTypeJsdocObjectField: ["left", "right"],
      JsdocTypeOptional: ["element"],
      JsdocTypeParenthesis: ["element"],
      JsdocTypeSpecialNamePath: [],
      JsdocTypeStringValue: [],
      JsdocTypeSymbol: ["element"],
      JsdocTypeTuple: ["elements"],
      JsdocTypeTypeof: ["element"],
      JsdocTypeUndefined: [],
      JsdocTypeUnion: ["elements"],
      JsdocTypeUnknown: [],
      JsdocTypeVariadic: ["element"],
      JsdocTypeProperty: [],
      JsdocTypePredicate: ["left", "right"],
      JsdocTypeAsserts: ["left", "right"]
    };
    function de(e, t, n, s, i) {
      s?.(e, t, n);
      const y = _e[e.type];
      for (const f of y) {
        const g = e[f];
        if (g !== void 0)
          if (Array.isArray(g))
            for (const k of g)
              de(k, e, f, s, i);
          else
            de(g, e, f, s, i);
      }
      i?.(e, t, n);
    }
    function nn(e, t, n) {
      de(e, void 0, void 0, t, n);
    }
    a.catharsisTransform = Qt, a.identityTransformRules = tn, a.jtpTransform = en, a.parse = Ae, a.stringify = Wt, a.stringifyRules = ve, a.transform = q, a.traverse = nn, a.tryParse = Yt, a.visitorKeys = _e;
  });
})(me, me.exports);
var fe = me.exports, on = Object.defineProperty, c = (r, o) => on(r, "name", { value: o, configurable: !0 });
__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;
function sn(r, o) {
  let a = {}, l = Object.keys(r);
  for (let u = 0; u < l.length; u++) {
    let p = l[u], d = r[p];
    a[p] = o(d, p, r);
  }
  return a;
}
c(sn, "mapValues");
__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;
var an = ["null", "undefined"];
function Z(r) {
  return an.some((o) => o === r);
}
c(Z, "isDefaultValueBlacklisted");
var cn = /* @__PURE__ */ c((r) => {
  if (!r)
    return "";
  if (typeof r == "string")
    return r;
  throw new Error(`Description: expected string, got: ${JSON.stringify(r)}`);
}, "str");
function Te(r) {
  return !!r.__docgenInfo;
}
c(Te, "hasDocgen");
function ln(r) {
  return r != null && Object.keys(r).length > 0;
}
c(ln, "isValidDocgenSection");
function pn(r, o) {
  return Te(r) ? r.__docgenInfo[o] : null;
}
c(pn, "getDocgenSection");
function Ue(r) {
  return Te(r) ? cn(r.__docgenInfo.description) : "";
}
c(Ue, "getDocgenDescription");
var _;
(function(r) {
  r.start = "/**", r.nostart = "/***", r.delim = "*", r.end = "*/";
})(_ = _ || (_ = {}));
function je(r) {
  return /^\s+$/.test(r);
}
c(je, "isSpace");
function Ve(r) {
  let o = r.match(/\r+$/);
  return o == null ? ["", r] : [r.slice(-o[0].length), r.slice(0, -o[0].length)];
}
c(Ve, "splitCR");
function U(r) {
  let o = r.match(/^\s+/);
  return o == null ? ["", r] : [r.slice(0, o[0].length), r.slice(o[0].length)];
}
c(U, "splitSpace");
function Ke(r) {
  return r.split(/\n/);
}
c(Ke, "splitLines");
function $e(r = {}) {
  return Object.assign({ tag: "", name: "", type: "", optional: !1, description: "", problems: [], source: [] }, r);
}
c($e, "seedSpec");
function De(r = {}) {
  return Object.assign({
    start: "",
    delimiter: "",
    postDelimiter: "",
    tag: "",
    postTag: "",
    name: "",
    postName: "",
    type: "",
    postType: "",
    description: "",
    end: "",
    lineEnd: ""
  }, r);
}
c(De, "seedTokens");
var un = /^@\S+/;
function qe({ fence: r = "```" } = {}) {
  let o = Me(r), a = /* @__PURE__ */ c((l, u) => o(l) ? !u : u, "toggleFence");
  return /* @__PURE__ */ c(function(l) {
    let u = [[]], p = !1;
    for (let d of l)
      un.test(d.tokens.description) && !p ? u.push([d]) : u[u.length - 1].push(d), p = a(d.tokens.description, p);
    return u;
  }, "parseBlock");
}
c(qe, "getParser");
function Me(r) {
  return typeof r == "string" ? (o) => o.split(r).length % 2 === 0 : r;
}
c(Me, "getFencer");
function Be({ startLine: r = 0, markers: o = _ } = {}) {
  let a = null, l = r;
  return /* @__PURE__ */ c(function(u) {
    let p = u, d = De();
    if ([d.lineEnd, p] = Ve(p), [d.start, p] = U(p), a === null && p.startsWith(o.start) && !p.startsWith(o.nostart) && (a = [], d.delimiter = p.slice(0, o.start.length), p = p.slice(o.start.length), [d.postDelimiter, p] = U(p)), a === null)
      return l++, null;
    let T = p.trimRight().endsWith(o.end);
    if (d.delimiter === "" && p.startsWith(o.delim) && !p.startsWith(o.end) && (d.delimiter = o.delim, p = p.slice(o.delim.length), [
      d.postDelimiter,
      p
    ] = U(p)), T) {
      let h = p.trimRight();
      d.end = p.slice(h.length - o.end.length), p = h.slice(0, -o.end.length);
    }
    if (d.description = p, a.push({ number: l, source: u, tokens: d }), l++, T) {
      let h = a.slice();
      return a = null, h;
    }
    return null;
  }, "parseSource");
}
c(Be, "getParser");
function Ce({ tokenizers: r }) {
  return /* @__PURE__ */ c(function(o) {
    var a;
    let l = $e({ source: o });
    for (let u of r)
      if (l = u(l), !((a = l.problems[l.problems.length - 1]) === null || a === void 0) && a.critical)
        break;
    return l;
  }, "parseSpec");
}
c(Ce, "getParser");
function Ye() {
  return (r) => {
    let { tokens: o } = r.source[0], a = o.description.match(/\s*(@(\S+))(\s*)/);
    return a === null ? (r.problems.push({
      code: "spec:tag:prefix",
      message: 'tag should start with "@" symbol',
      line: r.source[0].number,
      critical: !0
    }), r) : (o.tag = a[1], o.postTag = a[3], o.description = o.description.slice(a[0].length), r.tag = a[2], r);
  };
}
c(Ye, "tagTokenizer");
function Ge(r = "compact") {
  let o = We(r);
  return (a) => {
    let l = 0, u = [];
    for (let [T, { tokens: h }] of a.source.entries()) {
      let S = "";
      if (T === 0 && h.description[0] !== "{")
        return a;
      for (let E of h.description)
        if (E === "{" && l++, E === "}" && l--, S += E, l === 0)
          break;
      if (u.push([h, S]), l === 0)
        break;
    }
    if (l !== 0)
      return a.problems.push({
        code: "spec:type:unpaired-curlies",
        message: "unpaired curlies",
        line: a.source[0].number,
        critical: !0
      }), a;
    let p = [], d = u[0][0].postDelimiter.length;
    for (let [T, [h, S]] of u.entries())
      h.type = S, T > 0 && (h.type = h.postDelimiter.slice(d) + S, h.postDelimiter = h.postDelimiter.slice(0, d)), [h.postType, h.description] = U(h.description.slice(S.length)), p.push(h.type);
    return p[0] = p[0].slice(1), p[p.length - 1] = p[p.length - 1].slice(0, -1), a.type = o(p), a;
  };
}
c(Ge, "typeTokenizer");
var yn = /* @__PURE__ */ c((r) => r.trim(), "trim");
function We(r) {
  return r === "compact" ? (o) => o.map(yn).join("") : r === "preserve" ? (o) => o.join(`
`) : r;
}
c(We, "getJoiner");
var dn = /* @__PURE__ */ c((r) => r && r.startsWith('"') && r.endsWith('"'), "isQuoted");
function Xe() {
  let r = /* @__PURE__ */ c((o, { tokens: a }, l) => a.type === "" ? o : l, "typeEnd");
  return (o) => {
    let { tokens: a } = o.source[o.source.reduce(r, 0)], l = a.description.trimLeft(), u = l.split('"');
    if (u.length > 1 && u[0] === "" && u.length % 2 === 1)
      return o.name = u[1], a.name = `"${u[1]}"`, [a.postName, a.description] = U(l.slice(a.name.length)), o;
    let p = 0, d = "", T = !1, h;
    for (let E of l) {
      if (p === 0 && je(E))
        break;
      E === "[" && p++, E === "]" && p--, d += E;
    }
    if (p !== 0)
      return o.problems.push({
        code: "spec:name:unpaired-brackets",
        message: "unpaired brackets",
        line: o.source[0].number,
        critical: !0
      }), o;
    let S = d;
    if (d[0] === "[" && d[d.length - 1] === "]") {
      T = !0, d = d.slice(1, -1);
      let E = d.split("=");
      if (d = E[0].trim(), E[1] !== void 0 && (h = E.slice(1).join("=").trim()), d === "")
        return o.problems.push({
          code: "spec:name:empty-name",
          message: "empty name",
          line: o.source[0].number,
          critical: !0
        }), o;
      if (h === "")
        return o.problems.push({
          code: "spec:name:empty-default",
          message: "empty default value",
          line: o.source[0].number,
          critical: !0
        }), o;
      if (!dn(h) && /=(?!>)/.test(h))
        return o.problems.push({
          code: "spec:name:invalid-default",
          message: "invalid default value syntax",
          line: o.source[0].number,
          critical: !0
        }), o;
    }
    return o.optional = T, o.name = d, a.name = S, h !== void 0 && (o.default = h), [a.postName, a.description] = U(l.slice(a.name.length)), o;
  };
}
c(Xe, "nameTokenizer");
function He(r = "compact", o = _) {
  let a = he(r);
  return (l) => (l.description = a(l.source, o), l);
}
c(He, "descriptionTokenizer");
function he(r) {
  return r === "compact" ? Qe : r === "preserve" ? ze : r;
}
c(he, "getJoiner");
function Qe(r, o = _) {
  return r.map(({ tokens: { description: a } }) => a.trim()).filter((a) => a !== "").join(" ");
}
c(Qe, "compactJoiner");
var mn = /* @__PURE__ */ c((r, { tokens: o }, a) => o.type === "" ? r : a, "lineNo"), fn = /* @__PURE__ */ c(({ tokens: r }) => (r.delimiter === "" ? r.start : r.postDelimiter.slice(1)) + r.description, "getDescription");
function ze(r, o = _) {
  if (r.length === 0)
    return "";
  r[0].tokens.description === "" && r[0].tokens.delimiter === o.start && (r = r.slice(1));
  let a = r[r.length - 1];
  return a !== void 0 && a.tokens.description === "" && a.tokens.end.endsWith(o.end) && (r = r.slice(0, -1)), r = r.slice(r.reduce(mn, 0)), r.map(fn).join(`
`);
}
c(ze, "preserveJoiner");
function Ze({ startLine: r = 0, fence: o = "```", spacing: a = "compact", markers: l = _, tokenizers: u = [
  Ye(),
  Ge(a),
  Xe(),
  He(a)
] } = {}) {
  if (r < 0 || r % 1 > 0)
    throw new Error("Invalid startLine");
  let p = Be({ startLine: r, markers: l }), d = qe({ fence: o }), T = Ce({ tokenizers: u }), h = he(a);
  return function(S) {
    let E = [];
    for (let ee of Ke(S)) {
      let K = p(ee);
      if (K === null)
        continue;
      let B = d(K), C = B.slice(1).map(T);
      E.push({
        description: h(B[0], l),
        tags: C,
        source: K,
        problems: C.reduce((P, te) => P.concat(te.problems), [])
      });
    }
    return E;
  };
}
c(Ze, "getParser");
function et(r) {
  return r.start + r.delimiter + r.postDelimiter + r.tag + r.postTag + r.type + r.postType + r.name + r.postName + r.description + r.end + r.lineEnd;
}
c(et, "join");
function Tn() {
  return (r) => r.source.map(({ tokens: o }) => et(o)).join(`
`);
}
c(Tn, "getStringifier");
function tt(r, o = {}) {
  return Ze(o)(r);
}
c(tt, "parse");
function nt(r) {
  return r != null && r.includes("@");
}
c(nt, "containsJsDoc");
function rt(r) {
  let o = `/**
` + (r ?? "").split(`
`).map((l) => ` * ${l}`).join(`
`) + `
*/`, a = tt(o, {
    spacing: "preserve"
  });
  if (!a || a.length === 0)
    throw new Error("Cannot parse JSDoc tags.");
  return a[0];
}
c(rt, "parse");
var hn = {
  tags: ["param", "arg", "argument", "returns", "ignore", "deprecated"]
}, Jn = /* @__PURE__ */ c((r, o = hn) => {
  if (!nt(r))
    return {
      includesJsDoc: !1,
      ignore: !1
    };
  let a = rt(r), l = ot(a, o.tags);
  return l.ignore ? {
    includesJsDoc: !0,
    ignore: !0
  } : {
    includesJsDoc: !0,
    ignore: !1,
    // Always use the parsed description to ensure JSDoc is removed from the description.
    description: a.description.trim(),
    extractedTags: l
  };
}, "parseJsDoc");
function ot(r, o) {
  let a = {
    params: null,
    deprecated: null,
    returns: null,
    ignore: !1
  };
  for (let l of r.tags)
    if (!(o !== void 0 && !o.includes(l.tag)))
      if (l.tag === "ignore") {
        a.ignore = !0;
        break;
      } else
        switch (l.tag) {
          case "param":
          case "arg":
          case "argument": {
            let u = at(l);
            u != null && (a.params == null && (a.params = []), a.params.push(u));
            break;
          }
          case "deprecated": {
            let u = it(l);
            u != null && (a.deprecated = u);
            break;
          }
          case "returns": {
            let u = ct(l);
            u != null && (a.returns = u);
            break;
          }
        }
  return a;
}
c(ot, "extractJsDocTags");
function st(r) {
  return r.replace(/[\.-]$/, "");
}
c(st, "normaliseParamName");
function at(r) {
  if (!r.name || r.name === "-")
    return null;
  let o = we(r.type);
  return {
    name: r.name,
    type: o,
    description: ge(r.description),
    getPrettyName: /* @__PURE__ */ c(() => st(r.name), "getPrettyName"),
    getTypeName: /* @__PURE__ */ c(() => o ? Ne(o) : null, "getTypeName")
  };
}
c(at, "extractParam");
function it(r) {
  return r.name ? Je(r.name, r.description) : null;
}
c(it, "extractDeprecated");
function Je(r, o) {
  let a = r === "" ? o : `${r} ${o}`;
  return ge(a);
}
c(Je, "joinNameAndDescription");
function ge(r) {
  let o = r.replace(/^- /g, "").trim();
  return o === "" ? null : o;
}
c(ge, "normaliseDescription");
function ct(r) {
  let o = we(r.type);
  return o ? {
    type: o,
    description: Je(r.name, r.description),
    getTypeName: /* @__PURE__ */ c(() => Ne(o), "getTypeName")
  } : null;
}
c(ct, "extractReturns");
var L = fe.stringifyRules(), gn = L.JsdocTypeObject;
L.JsdocTypeAny = () => "any";
L.JsdocTypeObject = (r, o) => `(${gn(r, o)})`;
L.JsdocTypeOptional = (r, o) => o(r.element);
L.JsdocTypeNullable = (r, o) => o(r.element);
L.JsdocTypeNotNullable = (r, o) => o(r.element);
L.JsdocTypeUnion = (r, o) => r.elements.map(o).join("|");
function we(r) {
  try {
    return fe.parse(r, "typescript");
  } catch {
    return null;
  }
}
c(we, "extractType");
function Ne(r) {
  return fe.transform(L, r);
}
c(Ne, "extractTypeName");
function Ee(r) {
  return r.length > 90;
}
c(Ee, "isTooLongForTypeSummary");
function lt(r) {
  return r.length > 50;
}
c(lt, "isTooLongForDefaultValueSummary");
function N(r, o) {
  return r === o ? { summary: r } : { summary: r, detail: o };
}
c(N, "createSummaryValue");
function wn(r, o) {
  if (r != null) {
    let { value: a } = r;
    if (!Z(a))
      return lt(a) ? N(o?.name, a) : N(a);
  }
  return null;
}
c(wn, "createDefaultValue");
function Pe({ name: r, value: o, elements: a, raw: l }) {
  return o ?? (a != null ? a.map(Pe).join(" | ") : l ?? r);
}
c(Pe, "generateUnionElement");
function pt({ name: r, raw: o, elements: a }) {
  return a != null ? N(a.map(Pe).join(" | ")) : o != null ? N(o.replace(/^\|\s*/, "")) : N(r);
}
c(pt, "generateUnion");
function ut({ type: r, raw: o }) {
  return o != null ? N(o) : N(r);
}
c(ut, "generateFuncSignature");
function yt({ type: r, raw: o }) {
  return o != null ? Ee(o) ? N(r, o) : N(o) : N(r);
}
c(yt, "generateObjectSignature");
function dt(r) {
  let { type: o } = r;
  return o === "object" ? yt(r) : ut(r);
}
c(dt, "generateSignature");
function mt({ name: r, raw: o }) {
  return o != null ? Ee(o) ? N(r, o) : N(o) : N(r);
}
c(mt, "generateDefault");
function Nn(r) {
  if (r == null)
    return null;
  switch (r.name) {
    case "union":
      return pt(r);
    case "signature":
      return dt(r);
    default:
      return mt(r);
  }
}
c(Nn, "createType");
function En({ defaultValue: r }) {
  if (r != null) {
    let { value: o } = r;
    if (!Z(o))
      return N(o);
  }
  return null;
}
c(En, "createDefaultValue");
function Pn({ tsType: r, required: o }) {
  if (r == null)
    return null;
  let a = r.name;
  return o || (a = a.replace(" | undefined", "")), N(
    ["Array", "Record", "signature"].includes(r.name) ? r.raw : a
  );
}
c(Pn, "createType");
function ft(r) {
  return r != null ? N(r.name) : null;
}
c(ft, "createType");
function Tt(r) {
  let { computed: o, func: a } = r;
  return typeof o > "u" && typeof a > "u";
}
c(Tt, "isReactDocgenTypescript");
function ht(r) {
  return r ? r.name === "string" ? !0 : r.name === "enum" ? Array.isArray(r.value) && r.value.every(
    ({ value: o }) => typeof o == "string" && o[0] === '"' && o[o.length - 1] === '"'
  ) : !1 : !1;
}
c(ht, "isStringValued");
function Jt(r, o) {
  if (r != null) {
    let { value: a } = r;
    if (!Z(a))
      return Tt(r) && ht(o) ? N(JSON.stringify(a)) : N(a);
  }
  return null;
}
c(Jt, "createDefaultValue");
function bn(r, o, a) {
  let { description: l, required: u, defaultValue: p } = a;
  return {
    name: r,
    type: ft(o),
    required: u,
    description: l,
    defaultValue: Jt(p, o)
  };
}
c(bn, "createBasicPropDef");
function xn(r, o) {
  if (o?.includesJsDoc) {
    let { description: a, extractedTags: l } = o;
    a != null && (r.description = o.description);
    let u = {
      ...l,
      params: l?.params?.map(
        (p) => ({
          name: p.getPrettyName(),
          description: p.description
        })
      )
    };
    Object.values(u).filter(Boolean).length > 0 && (r.jsDocTags = u);
  }
  return r;
}
c(xn, "applyJsDocResult");
function kn(r, o, a, l) {
  let u = Jn(o.description);
  return u.includesJsDoc && u.ignore ? null : {
    propDef: l(r, o, u),
    jsDocTags: u.extractedTags,
    docgenInfo: o,
    typeSystem: a
  };
}
c(kn, "extractProp");
function Sn(r) {
  return r != null ? Ue(r) : "";
}
c(Sn, "extractComponentDescription");
const { combineParameters: On } = __STORYBOOK_MODULE_PREVIEW_API__;
var vn = /* @__PURE__ */ c((r) => {
  let {
    component: o,
    argTypes: a,
    parameters: { docs: l = {} }
  } = r, { extractArgTypes: u } = l, p = u && o ? u(o) : {};
  return p ? On(p, a) : a;
}, "enhanceArgTypes"), In = "storybook/docs", _n = `${In}/snippet-rendered`, An = /* @__PURE__ */ ((r) => (r.AUTO = "auto", r.CODE = "code", r.DYNAMIC = "dynamic", r))(An || {});
export {
  vn as c,
  An as g,
  _n as y
};
