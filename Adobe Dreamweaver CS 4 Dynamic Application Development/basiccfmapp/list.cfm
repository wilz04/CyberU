<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<cfoutput><title>#AP_TITLE#</title></cfoutput>
		<cfquery name="users" datasource="#DB_SCHEMA#">
			select * from v_users where _status = 1
		</cfquery>
	</head>
	<body>
		<h2>Listado</h2>
    <table border="0" cellspacing="2" cellpadding="2" align="center">
      <thead>
        <tr>
          <th width="160">User</th>
          <th width="160">Nombre</th>
          <th width="200">E-mail</th>
          <th width="160">Area</th>
          <th width="160">Nivel</th>
        </tr>
      </thead>
      <tbody>
        <cfoutput>
          <cfloop query="users">
            <tr>
              <td align="left">
                #users._username#
              </td>
              <td align="left">
                #users._firstname# #users._lastname#
              </td>
              <td align="left">
                <a href="mailto:#users._email#">#users._email#</a>
              </td>
              <td align="left">
                #users._area_name#
              </td>
              <td align="left">
                #users._level_name#
              </td>
            </tr>
          </cfloop>
        </cfoutput>
      </tbody>
    </table>
    <cfif users.recordCount eq 0>
      <div align="center">
        <br />
        <label>::: NO SE ENCONTRARON DATOS DISPONIBLES :::</label>
      </div>
    </cfif>
	</body>
</html>
