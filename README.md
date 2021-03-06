# gulp-dirty-markup
Gulp wrapper for the dirty markup node module

## Usage

`dirtymarkup(options)`

```js
var dirtymarkup = require('gulp-dirty-markup');

gulp.task('default', function() {
    gulp.src('html/*.html')
        .pipe(dirtymarkup({ indent: 'auto' }))
        .pipe(gulp.dest('./output'));
}
```

## Options
`indent`: Optional, defaults to auto. Options are `auto`, `block` or `none`.

`indent-size`: Optional, defaults to 4. Options are `'tabs'`, `2`, `4` or `8`.

`allow-proprietary-attributes`: Optional, no default. Set to `1` to allow.

`mode`: Optional, defaults to `html`. Options include `html` or 'css'.