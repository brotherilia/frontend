"use strict";

module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);
  require("time-grunt")(grunt);

  grunt.initConfig({

    //*** Очистка ***//
    clean: {
      build: ["build"]
    },

    //*** Копирование ***//
    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "src/",
          src: [
            "fonts/**/*.{eot,ttf,woff,woff2}",
            "css/**/*.css",
            "js/**/*.js",
            "img/**/*.{jpg,png,gif,svg}",
            "tmp/ugc/**/*",
            "*.html",
            "favicon.png"
          ],
          dest: "build"
        }]
      },
      html: {
        files: [{
          expand: true,
          cwd: "src/",
          src: ["*.html","tmp/ugc/*.html"],
          dest: "build"
        }]
      },
      img: {
        files: [{
          expand: true,
          cwd: "src/",
          src: ["img/**/*.{jpg,png,gif,svg}","tmp/ugc/**/*.{png,jpg,gif,svg}"],
          dest: "build"
        }]
      },
      js: {
        files: [{
          expand: true,
          cwd: "src/",
          src: ["js/**/*.js"],
          dest: "build"
        }]
      }
    },

    //*** Минификация SVG ***//
    svgmin: {
      allsvg: {
        files: [{
          expand: true,
          src: ["build/img/**/*.svg"]
        }]
      }
    },

    //*** Сборка SVG-спрайта ***//
    svgstore: {
      options: {
        svg: {
          style: "display: none"
        }
      },
      sprite: {
        files: {
          "build/img/sprite.svg": ["build/img/sprite/*.svg"]
        }
      }
    },

    //*** Сборка и обработка HTML-файлов ***//
    processhtml: {
      target: {
        files: {
          "build/tmp/ugc/article__prj_technomart.html": ["build/tmp/ugc/article__prj_technomart.html"],
          "build/tmp/ugc/article__prj_sedona.html": ["build/tmp/ugc/article__prj_sedona.html"],
          "build/index.html": ["build/index.html"],
          "build/study.html": ["build/study.html"],
          "build/projects.html": ["build/projects.html"]
        }
      }
    },

    //*** Сборка CSS из LESS ***//
    less: {
      style: {
        files: {
          "build/css/style.css": "src/less/style.less"
        }
      }
    },

    //*** Обработка CSS: префиксование и "упаковка" медиа-запросов ***//
    postcss: {
      options: {
        processors: [
          require("autoprefixer")({browsers: [
            "last 2 versions",
            "> 1%"
          ]}),
          require("css-mqpacker")({
            sort: true
          })
        ]
      },
      style: {
        src: "build/css/style.css"
      }
    },

    //*** "Причесывание" CSS ***//
    csscomb: {
      style: {
        options: {
          config: "csscomb.json"
        },
        files: {
          "build/css/style.css": ["build/css/style.css"]
        }
      }
    },

    //*** Конкатенация CSS ***//
    concat: {
      css: {
        src: [ "build/css/normalize.css", "build/css/fonts.css", "build/css/style.css" ],
        dest: "build/css/style.css",
        options: {
          separator: "\n\r/***** CONCATENATION HERE! *****/\n\r"
        }
      }
    },

    //*** Минификация CSS ***//
    csso: {
      style: {
        options: {
          report: "gzip"
        },
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },

    //*** Минификация JS ***//
    uglify: {
      options: {
        mangle: false
      },
      scripts: {
        files: {
          "build/js/script.min.js": ["build/js/script.js"]
        }
      }
    },

    //*** Минификация графики ***//
    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png,jpg,gif}","build/tmp/ugc/**/*.{png,jpg,gif}"]
        }]
      }
    },

    //*** Локальный сервер с обновлением браузера ***//
    browserSync: {
      server: {
        bsFiles: {
          src: [
            "build/*.html",
            "build/css/*.css",
            "build/img/**/*.{jpg,png,gif,svg}",
            "build/tmp/ugc/**/*.{jpg,png,gif,svg}",
            "build/js/**/*.js"
          ]
        },
        options: {
          server: "build/",
          watchTask: true,
          notify: false,
          open: true,
          ui: false
        }
      }
    },

    //*** Отслеживание изменений в исходниках ***//
    watch: {
      html: {
        files: ["src/**/*.html","src/tmp/ugc/*.html"],
        tasks: ["copy:html","processhtml"],
        options: {spawn: false}
      },
      img: {
        files: ["src/img/**/*.{jpg,png,gif,svg}","src/tmp/ugc/**/*.{jpg,png,gif,svg}"],
        tasks: ["copy:img", "imagemin", "svg"],
        options: {spawn: false}
      },
      js: {
        files: ["src/js/**/*.js"],
        tasks: ["copy:js","uglify"],
        options: {spawn: false}
      },
      style: {
        files: ["src/less/**/*.less"],
        tasks: ["less", "postcss", "csscomb", "concat", "csso"],
        options: {spawn: false}
      }
    },

    //*** Отправка сборки в удаленную ветку "gh-pages" ***//
    "gh-pages": {
      options: {
        base: "build"
      },
      src: "**/*"
    },

    //*** Очистка директории на "боевом" сервере ***//
    secret: grunt.file.readJSON("authssh.json"),
    sshexec: {
      clean: {
        command: ["cd frontend.menshikov.su/www; rm -rf *"],
        options: {
          host: "<%= secret.host %>",
          username: "<%= secret.username %>",
          password: "<%= secret.password %>"
        }
      }
    },

    //*** Отправка сборки на "боевой" сервер ***//
    scp: {
      options: {
        host: "<%= secret.host %>",
        username: "<%= secret.username %>",
        password: "<%= secret.password %>",
      },
      masterhost: {
        files: [{
            cwd: "build/",
            src: "**/*",
            filter: "isFile",
            dest: "frontend.menshikov.su/www"
        }]
      }
    }
  });

  grunt.registerTask("serve", [
    "browserSync",
    "watch"
  ]);

  grunt.registerTask("css", [
    "less",
    "postcss",
    "csscomb",
    "concat",
    "csso"
  ]);

  grunt.registerTask("svg", [
    "svgmin",
    "svgstore"
  ]);

  grunt.registerTask("build", [
    "clean",
    "copy:build",
    "svg",
    "processhtml",
    "css",
    "uglify",
    "imagemin"
  ]);

  grunt.registerTask("deploy", [
    "sshexec",
    "scp"
  ]);
};
