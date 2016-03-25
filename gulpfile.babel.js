import Promise from 'bluebird';
import babel from 'gulp-babel';
import gulp from 'gulp';

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
      presets: ['es2015', 'stage-2']
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
		const fork = require('child_process').fork;
		const proc = fork("./firebase/scripts/deploy-firebase-rules", []);
	    proc.on('close', function (code) {
		    if (code === 0) {
		        resolve();
				} else {
		        reject(new Error("An error occurred while deploying firebase rules"));
		    }
		});
	});
}
