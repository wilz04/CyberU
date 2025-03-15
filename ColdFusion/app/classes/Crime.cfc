/**
* Copyright (c) 2010 Adobe Systems.
* @output false
* @hint Request data from the crime database
* @accessors true
* @page 47 (41)
**/
component extends=”utils”
{
	
	property type="string" name="key" required="yes" default="" hint="Google Maps Key";
	
	this.publicprop = ""; // create a public property
	
	public Crime function init(required String key)
	output="false"
	hint="perform initialization"
	{
		setKey(arguments.key);
		return (this);
	}
	
}