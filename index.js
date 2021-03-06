var dirtymarkupPlugin = require('dirty-markup');
var through = require('through2');
var PluginError = require('gulp-util').PluginError;

var PLUGIN_NAME = 'gulp-dirty-markup';

function dirtymarkup(options) {
    return through.obj(function(file, enc, cb) {
        if (file.isNull()) {
            return callback(null, file);
        }

        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb(null, file);
        }

        if (file.isBuffer()) {
            var contents = file.contents.toString('utf8');
            options = options || {};
            options["code"] = contents;

            dirtymarkupPlugin(options, function (data) {
                if (data.status == 'success') {
                    file.contents = new Buffer(data.code);
                }

                return cb(null, file);
            });

        }
    });
}

module.exports = dirtymarkup;