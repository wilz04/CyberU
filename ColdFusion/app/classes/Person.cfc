<cfcomponent accessors="true"><!-- extends=”myapp.components.mycomponent” -->
	
	<cfproperty type="numeric" name="id" default="0">
	<cfproperty type="boolean" name="enabled" hint="The user’s habilitation" />
	
	<cfset this.username="" />
	<cfset this.password="" />
	<cfset this.firstname="" />
	<cfset this.lastname="" />
	
	<cffunction access="public" returntype="Person" name="init" output="false">
		<cfargument type="string" name="username" required="yes" />
		<cfargument type="string" name="password" required="yes" />
		
		<cfset this.enabled=true />
		<cfset this.username=arguments.username />
		<cfset this.password=arguments.password />
		
		<cfreturn this />
		
		<cfset var q="" />
		
		<cfquery name="q">
			{call user_authenticate(
			<cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.username#">,
			<cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.password#">
			)}
		</cfquery>
		
		<cfif q.recordcount is 0>
			<cfset queryAddRow(q, 1) />
			<cfset querysetcell(q, "username", "anonymous", 1) />
			<cfset querysetcell(q, "id", "0", 1) />
		<cfelseif q.recordcount is 1>
			<cflogin>
				<cfloginuser name="#q.username#" password="#q.password#" roles="#q.roles#" />
			</cflogin>
		<cfelseif q.recordcount gt 1>
			<cfthrow message="Authentication query returned more than one record for user name #arguments.username#" />
		</cfif>
		
		<cfreturn this />
	</cffunction>
	
	<cffunction access="public" returntype="boolean" name="emptyTrash" roles="admin">
		<cfquery name="local.q">
			delete from Person where endtime is not null
		</cfquery>
		<cfreturn true />
	</cffunction>
	
</cfcomponent>
