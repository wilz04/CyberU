<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta charset="utf-8" />
		<title><cfoutput>#application.AP_TITLE#</cfoutput></title>
	</head>
	<body>
		
		<!-- form.username, form.password -->
		<!--- cfobject name="cfcPerson" component="#application.componentpath#Person" />
		<cfset cfcPerson = cfcPerson.init("wilz04", "1234") / --->
		
		<cfset session.cfcPerson = CreateObject("component", "#application.componentpath#Person").init("wilz04", "1234") />
		
		<cfoutput>
			<script>
				window.alert("Welcome back, #jsStringFormat(session.cfcPerson.username)#");
				window.alert("Welcome back, #jsStringFormat(application.ready)#");
			</script>
		</cfoutput>
		
		<!-- cfset session.cfcPerson.emptyTrash() / -->
	</body>
</html>
