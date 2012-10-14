exports.startParams =function StartParams() {
	this.port = process.env.PORT || process.env.VCAP_APP_PORT || 3000; 
};