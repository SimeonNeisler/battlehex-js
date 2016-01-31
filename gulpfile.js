var Promise = require("bluebird");
var babel 	= require("gulp-babel");
var gulp 	= require("gulp");

gulp.task("default", ["babel"]);

gulp.task("babel", function(){
	console.log("babel task running.");
	return gulp.src([
		"!dist/**",
		"!gulpfile.js",
		"!node_modules/**",
		"**/*.js"
	])
	.pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task("deploy", function(){
	deployFirebaseRules().then(() =>{
		console.log("Firebase rules deployment finished.");
	}).catch((error) =>{
		console.log("Error occured");
		console.log(error);
	});
});

function deployFirebaseRules() {
	return new Promise((resolve, reject) => {
		var fork = require('child_process').fork;
		var proc = fork("./firebase/scripts/deploy-firebase-rules", []);
	    proc.on('close', function (code) {
		    if (code === 0) {
		        resolve();
			} else {
		        reject(new Error("An error occurred while deploying firebase rules"));    
		    }
		});
	});
}

