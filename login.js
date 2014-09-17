
/**
 * Login Class
 */
function Login() {
	// sessionId -> user map
	this.sessionMap = {
		99999 : { name: 'Foo', email: 'foo@bar.com' }
	};
}
/**
 * Say Hello {name} to the user
 */
Login.prototype.hello = function(sessionId) {
	//return 'Hello ' + this.sessionMap[sessionId].name + '\n';
       if(this.sessionMap[sessionId]==null)
{
	
	return 'Please Login.!';
}
else
{
	return 'Hello, ' + this.sessionMap[sessionId].name;
}
};

Login.prototype.getName = function(sessionId)
{
 return this.sessionMap[sessionId].name;
};

/**
 * Get Current Session id user email 
 */
Login.prototype.getEmail = function(sessionId)
{
 return this.sessionMap[sessionId].email;
};

/**
 * Check whether the given session id is valid (is in sessionMap) or not.
 */
Login.prototype.isLoggedIn = function(sessionId) {
	return sessionId in this.sessionMap;
};

/**
 * Create a new session id for the given user.
 */
Login.prototype.login = function(_name, _email) {
   /*
	* Generate unique session id and set it into sessionMap like foo@bar.com
	*/
	var sessionId = new Date().getTime();
	this.sessionMap[sessionId] = { name: _name, email: _email } 
	
	console.log('new session id ' + sessionId + ' for login::' + _email);
	
	return sessionId;
};



Login.prototype.RefreshSession = function(_sessionId)
{
	// Delete the session id from sessionMap 
	delete this.sessionMap[_sessionId];
	return "done";
};


/**
 * Logout from the server
 */ 
Login.prototype.logout = function(sessionId) {
	console.log('logout::' + sessionId);

       delete this.sessionMap[sessionId];
   /*
	* TODO: Remove the given sessionId from the sessionMap
	*/
};

// Export the Login class
module.exports = new Login();
