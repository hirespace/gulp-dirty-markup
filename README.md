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