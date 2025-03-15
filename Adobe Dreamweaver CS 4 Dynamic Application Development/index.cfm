<!--- http://127.0.0.1/CFIDE/administrator/index.cfm --->
<cfset PROJECT_ST="1" />
<cfset PROJECT_ND="2" />

<cfset msg="Hola Mundo" />

<cfset userSt=structNew() />
<cfset userSt.firstname="Wil" />
<cfset userSt.secondname="Castro" />

<cfset userNd=structNew() />
<cfset userNd.firstname="Tony" />
<cfset userNd.secondname="Castro" />

<cfset workgroup=arrayNew(1) />
<cfset workgroup[1]=userSt />
<cfset workgroup[2]=userNd />

<cfset jobs=arrayNew(2) />
<cfset jobs[PROJECT_ST][1]="Analizar" />
<cfset jobs[PROJECT_ST][2]="Dise&ntilde;ar" />
<cfset jobs[PROJECT_ND][1]="Buscar" />
<cfset jobs[PROJECT_ND][2]="Comprar" />

<cfif 1 gt -1>
	<cfoutput>#msg#<br/ ><span>Desea #jobs[PROJECT_ND][2]#?<span><br/ ></cfoutput>
<cfelseif 1 neq 1>

<cfelse>
	<cfoutput>Adios #userSt.firstname# y #userNd.firstname#</cfoutput>
</cfif>

<cfloop index="i" from="1" to="10" step="1">
	<cfoutput>#i# left</cfoutput><br />
</cfloop>

<cfloop condition="i lt 10">
	<span>No est&aacute; listo!</span>
</cfloop>

<cfset team="Manako, Steven" />
<cfloop index="x" list="#team#" delimiters=",">
  <cfoutput>#x#</cfoutput><br />
</cfloop>

<cfif len(team) gte 10>
  <span>El grupo es grande!</span><br />
 </cfif>
 