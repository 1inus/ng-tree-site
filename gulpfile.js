var gulp = require('gulp');
var fileinclude  = require('gulp-file-include');
var htmlminify = require("gulp-html-minify");

gulp.task('fileinclude', function() {
	gulp.src('src/**/*.html')
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		/*.pipe(htmlminify()).on('error', function(err) {
			this.emit('end');
			console.log(err);
		})*/
		.pipe(gulp.dest(''));
});

gulp.task('watchHtml', function() {
	gulp.watch('src/**/*.html', function(){
		gulp.run('fileinclude');
	}); // Watch all the .less files, then run the less task
});

gulp.task('default', ['fileinclude', 'watchHtml']);