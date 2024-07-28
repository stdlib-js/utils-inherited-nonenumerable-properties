<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# inheritedNonEnumerableProperties

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an array of an object's inherited non-enumerable property names and [symbols][@stdlib/symbol/ctor].



<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
import inheritedNonEnumerableProperties from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherited-nonenumerable-properties@v0.2.0-deno/mod.js';
```

#### inheritedNonEnumerableProperties( obj\[, level] )

Returns an `array` of an object's inherited non-enumerable property names and [symbols][@stdlib/symbol/ctor].

<!-- eslint-disable id-length -->

```javascript
import defineProperty from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@deno/mod.js';

function Foo() {
    this.a = 'b';
    return this;
}

defineProperty( Foo.prototype, 'beep', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'boop'
});

var f = new Foo();
var props = inheritedNonEnumerableProperties( f );
// e.g., returns [ 'beep', ... ]
```

By default, the function walks an object's entire prototype chain. To limit the inheritance level, provide a `level` argument.

<!-- eslint-disable id-length -->

```javascript
import defineProperty from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@deno/mod.js';
import inherit from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@deno/mod.js';

function Bar() {
    return this;
}

defineProperty( Bar.prototype, 'boop', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'beep'
});

function Foo() {
    Bar.call( this );
    this.a = 'b';
    return this;
}

inherit( Foo, Bar );

defineProperty( Foo.prototype, 'beep', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'boop'
});

var f = new Foo();
var pros = inheritedNonEnumerableProperties( f, 1 );
// e.g., returns [ 'beep', ... ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Property order is not guaranteed, as `object` property enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s properties, thus allowing for deterministic extraction.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
import hasSymbolSupport from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-symbol-support@deno/mod.js';
import Symbol from 'https://cdn.jsdelivr.net/gh/stdlib-js/symbol-ctor@deno/mod.js';
import defineProperty from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@deno/mod.js';
import inheritedNonEnumerableProperties from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherited-nonenumerable-properties@v0.2.0-deno/mod.js';

var hasSymbols = hasSymbolSupport();
var props;
var obj;

function Foo() {
    this.beep = 'boop';
    this.a = {
        'b': 'c'
    };
    defineProperty( this, 'baz', {
        'configurable': false,
        'enumerable': false,
        'writable': true,
        'value': 'qux'
    });
    if ( hasSymbols ) {
        this[ Symbol( 'a' ) ] = 'b';
        defineProperty( this, 'beep', {
            'configurable': false,
            'enumerable': false,
            'writable': false,
            'value': 'boop'
        });
    }
    return this;
}

Foo.prototype.c = 'd';
defineProperty( Foo.prototype, 'bip', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'bop'
});
if ( hasSymbols ) {
    Foo.prototype[ Symbol( 'c' ) ] = 'd';
    defineProperty( Foo.prototype, Symbol( 'e' ), {
        'configurable': false,
        'enumerable': false,
        'writable': false,
        'value': 'f'
    });
}

obj = new Foo();
props = inheritedNonEnumerableProperties( obj );

console.log( props );
// e.g., => [ 'bip', ... ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-inherited-enumerable-properties`][@stdlib/utils/inherited-enumerable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils-inherited-nonenumerable-property-names`][@stdlib/utils/inherited-nonenumerable-property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited non-enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils-inherited-nonenumerable-property-symbols`][@stdlib/utils/inherited-nonenumerable-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited non-enumerable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils-inherited-keys`][@stdlib/utils/inherited-keys]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils-nonenumerable-properties`][@stdlib/utils/nonenumerable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's own non-enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils-nonenumerable-properties-in`][@stdlib/utils/nonenumerable-properties-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited non-enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils-properties`][@stdlib/utils/properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable and non-enumerable property names and symbols.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-inherited-nonenumerable-properties.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-inherited-nonenumerable-properties

[test-image]: https://github.com/stdlib-js/utils-inherited-nonenumerable-properties/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/utils-inherited-nonenumerable-properties/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-inherited-nonenumerable-properties/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-inherited-nonenumerable-properties?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-inherited-nonenumerable-properties.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-inherited-nonenumerable-properties/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-inherited-nonenumerable-properties/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-inherited-nonenumerable-properties/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-inherited-nonenumerable-properties/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-inherited-nonenumerable-properties/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-inherited-nonenumerable-properties/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-inherited-nonenumerable-properties/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-inherited-nonenumerable-properties/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-inherited-nonenumerable-properties/main/LICENSE

[ecma-262-for-in]: https://262.ecma-international.org/5.1/#sec-12.6.4

[@stdlib/symbol/ctor]: https://github.com/stdlib-js/symbol-ctor/tree/deno

<!-- <related-links> -->

[@stdlib/utils/inherited-enumerable-properties]: https://github.com/stdlib-js/utils-inherited-enumerable-properties/tree/deno

[@stdlib/utils/inherited-nonenumerable-property-names]: https://github.com/stdlib-js/utils-inherited-nonenumerable-property-names/tree/deno

[@stdlib/utils/inherited-nonenumerable-property-symbols]: https://github.com/stdlib-js/utils-inherited-nonenumerable-property-symbols/tree/deno

[@stdlib/utils/inherited-keys]: https://github.com/stdlib-js/utils-inherited-keys/tree/deno

[@stdlib/utils/nonenumerable-properties]: https://github.com/stdlib-js/utils-nonenumerable-properties/tree/deno

[@stdlib/utils/nonenumerable-properties-in]: https://github.com/stdlib-js/utils-nonenumerable-properties-in/tree/deno

[@stdlib/utils/properties]: https://github.com/stdlib-js/utils-properties/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
