const gulp = require('gulp')
const less = require('gulp-less')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const browserSync = require('browser-sync')
const bs = browserSync.create()

// 基础使用
const task1 = (cb) => {
  setTimeout(() => {
    console.log('任务一执行了')
  }, 1000);
  cb()
}

// 默认导出 不需要写任务名
const task2 = (cb) => {
  setTimeout(() => {
    console.log('任务二执行了')
  }, 1000);
  cb()
}

// 处理less文件
const style = () => {
  return gulp.src('src/style/main.less', { base: 'src' })
    // 转换less
    .pipe(less())
    // 压缩
    .pipe(cleanCSS())
    // 重命名
    .pipe(rename({
      'extname': '.min.css'
    }))
    // 写入
    .pipe(gulp.dest('dist'))
}

// 处理js文件
const script = () => {
  return gulp.src('src/script/index.js', { base: 'src' })
    .pipe(babel({
      presets: ['babel-preset-env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
}

// 处理html
const html = () => {
  return gulp.src('src/index.html', { base: 'src' })
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
}

const clean = () => {
  return del(['dist'])
}

const build = gulp.series(clean, gulp.parallel(style, script, html))

const serve = () => {

  // 监听文件的更改 执行对应的任务
  gulp.watch('src/index.html', html)

  bs.init({
    notify: false,
    // 热更新
    files: 'dist/**',
    server: {
      baseDir: 'dist',
      routes: {
        '/node_modules': 'node_modules'
      }
    }
  })
}

const dev = gulp.series(build, serve)

module.exports = {
  task1,
  default: task2,
  p: gulp.parallel(task1, task2),
  s: gulp.series(task1, task2),
  build,
  dev
}
