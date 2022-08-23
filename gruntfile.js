module.exports = function(grunt){

    grunt.initConfig({


        uglify: {
            prod:{
                option:{
                    mangle: false,
                    banner: 'Desarrollado por mi ' + '<%= grunt.template.today("yyyy-mm-dd h:MM:ss") %>'
                },
                files:{
                    'web/js/script.min.js':[
                        'node_modules/swiper/swiper-bundle.js',
                        'node_modules/@fancyapps/ui/dist/fancybox.umd.js',
                        'desarrollo/js/script.js'
                    ]
                }
            }
        },


        'dart-sass': {
            dev:{
                options: {
					//outputStyle: 'compressed',
                    sourceMap: false
				},
                files:{
                    'web/css/estilo.css' : 'desarrollo/sass/main.scss'
                }
            },
            prod:{
                options: {
					outputStyle: 'compressed',
                    sourceMap: false
				},
                files:{
                    'web/css/estilo.css' : 'desarrollo/sass/main.scss',
                    'web/css/bootstrap.min.css' : 'node_modules/bootstrap/scss/bootstrap.scss',
                    'web/css/swiper.min.css' : 'node_modules/swiper/swiper-bundle.css',
                    'web/css/fancybox.min.css' : 'node_modules/@fancyapps/ui/src/Fancybox/Fancybox.scss'
                }
            }
        },

        watch:{
            scriptFiles:{
                files: ['desarrollo/js/script.js'],
                tasks: ['uglify:prod']
            },
            sassFiles:{
                files: 'desarrollo/sass/{,*/}*.{scss, sass}',
                tasks: ['dart-sass:dev']
            }
        },
        
        browserSync:{
            dev:{
                bsFiles:{
                    src:[
                        'web/js/*.js',
                        'web/css/*.css',
                        'web/*.html',
                        'web/*.php',
                        'web/*/*.html',
                        'web/*/*.php'
                    ]
                },
                options:{
                    watchTask:true,
                    proxy:'http://hostinahuel.local'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-dart-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['browserSync','dart-sass:dev','watch'])
    grunt.registerTask('produccion', ['uglify:prod','dart-sass:prod'])
};