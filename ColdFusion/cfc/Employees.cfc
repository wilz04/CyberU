<cfcomponent>
    <cfset this.id=-1 />
    
    <cffunction name="allemployees" access="public" output="false" returntype="query">
        <cfset var getNames="" />
        <cfquery name="getNames" datasource="cfdocexamples">
            select * from employee
        </cfquery>
    </cffunction>
    
    <cffunction name="namesalarycontract" access="public" output="false" returntype="query">
        <cfset var EmpList="" />
        <cfquery name="EmpList" datasource="cfdocexamples">
            select firstname, lastname, salary, contract from employee
        </cfquery>
    </cffunction>
    
    <cffunction name="fullname" access="public" output="false" returntype="query">
        <cfset var engquery="" />
        <cfquery name="engquery" datasource="cfdocexamples">
            select fullname as fullname from employee
        </cfquery>
    </cffunction>
    
    <cffunction name="bydept" access="public" output="false" returntype="query">
        <cfset var deptquery="" />
        <cfquery name="deptquery" datasource="cfdocexamples">
            select dept_id, firstname, lastname from employee order by dept_id
        </cfquery>
    </cffunction>
    
    <cffunction name="employeebyURLID" access="public" output="false" returntype="query">
        <cfargument name="id" required="yes" type="numeric">
        <cfset var GetRecordtoUpdate="" />
        <cfquery name="GetRecordtoUpdate" datasource="cfdocexamples">
            select * from employee where emp_id = #id#
        </cfquery>
    </cffunction>
    
    <cffunction name="deleteemployee" access="public" output="false" returntype="void">
        <cfargument name="id" required="yes" type="numeric">
        <cfset var DeleteEmployee="" />
        <cfquery name="DeleteEmployee" datasource="cfdocexamples">
            delete from employee where emp_id = #id#
        </cfquery>
    </cffunction>
    
    <cffunction name="distinctlocs"access="public" output="false" returntype="query">
        <cfset var GetDepartments="" />
        <cfquery name="GetDepartments" datasource="cfdocexamples">
            select distinct location from departmt
        </cfquery>
    </cffunction>
</cfcomponent>