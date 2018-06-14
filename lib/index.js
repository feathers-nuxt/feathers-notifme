const Debug = require('debug');
const Proto = require('uberproto');
const NotifmeSdk = require('notifme-sdk')['default'];

const debug = Debug('feathers-notifme');

class Service {

	constructor (options) {
		debug('constructor', options);
    	this.notifier = new NotifmeSdk(options);
	}

	extend (obj) {
	    return Proto.extend(obj, this);
	}

	create(body, params, cb) {
	    debug('create', body, params);
	    return this.notifier.send(body);
	}
}


function init(options){
	return new Service(options);
}

init.Service = Service;

module.exports = init;