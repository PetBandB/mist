/**
Gets the right IPC path

@module getIpcPath
*/

const log = require('../utils/logger').create('getIpcPath');


module.exports = function() {
    var p = require('path');
    var path = global.path.HOME;

    if(process.platform === 'darwin')
        path += '/Library/Expanse/gexp.ipc';

    if(process.platform === 'freebsd' ||
       process.platform === 'linux' ||
       process.platform === 'sunos')
        path += '/.expanse/gexp.ipc';

    if(process.platform === 'win32')
        path = '\\\\.\\pipe\\gexp.ipc';
    
    log.debug('CONNECT to IPC PATH: '+ path);

    return path;
};