<cfapplication name="basicapp" sessionmanagement="yes" sessiontimeout=#CreateTimeSpan(0, 0, 300, 0)#><!--- d, h, m, s --->
<cfscript>
	AP_TITLE = "My Page";
	DB_SCHEMA = "my_database";
	
	componentpath = "classes/";
	
	location = structNew();
	location.directory = listToArray(CGI.SCRIPT_NAME, "/");
	location.page = location.directory[arrayLen(location.directory)];
	
	Roll = structNew();
	Roll.MANAGER = 1;
	Roll.COWORKER = 2;
	Roll.DIRECTOR = 3;
	Roll.ADMIN = 4;
	
	Coin = structNew();
	Coin.US_DOLLAR = 1;
	Coin.CR_COLON = 2;
	
	application.ready = "x";
	
	function onSessionStart() {
		application.ready = "yes!";
	}
</cfscript>
<!-- cfcomponent>
	<cffunction name="onApplicationStart">
		<cfset super.onApplicationStart() />
		<cfreturn true />
	</cffunction>
</cfcomponent -->