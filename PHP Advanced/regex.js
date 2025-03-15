function anyChar(str) {
	return /\S+/.test(str);
}

function anyWord(str) {
	return /\w+/.test(str);
}

function any3letters(str) {
	return /[a-z]{3}/i.test(str);
}

function any10Char(str) {
	if (/^\S{10}$/.test(str))
		return "Valid";
	else if (/\s/.test(str))
		return "Invalid space";
	else if (/^\S{11,}$/.test(str))
		return "Too long!";
	else
		return "Too short!";
}

function anyVar10(str) {
	if (/^[a-z$_]\w{9}$/i.test(str))
		return "Valid";
	else if (/^[^a-z$_]/i.test(str))
		return "First Char Invalid!";
	else if (/^[a-z$_]\W/i.test(str))
		return "Invalid Character!"
	else if (/^\w{11,}$/.test(str))
		return "Too long!";
	else
		return "Too short!";
}

function anyClass5(str) {
	if (/^[a-z][a-z0-9\-]{4,}$/i.test(str))
		return "Valid";
	else if (/^[^a-z]/i.test(str))
		return "First Char Not Alpha!";
	else if (/[^a-z0-9\-]/i.test(str))
		return "Invalid Character!";
	else
		return "Too short!";
	}
}

function any4Words(str) {
	return /(\b[a-z0-9]+\b.*){4,}/i.test(str);
}

function Three3lettered(str) {
	return /(\b[a-z0-9]{3,}\b.*){3,}/i.test(str);
}

function ssnExp1(data) {
	return /^\d{3}-\d{2}-\d{4}$/.test(data);
}

function ssnExp2(data) {
	return /^\d{3}-?\d{2}-?\d{4}$/.test(data);
}

function phoneExp1(data) {
	return /^\(\d{3}\) \d{3}-\d{4}$/.test(data);
}

function phoneExp2(data) {
	return /^\([1-9]\d{2}\)\s?\d{3}\-\d{4}$/.test(data);
}

function phoneExp3(data) {
	return /^\(?([1-9]\d{2})(\)?|[.-])?(\d{3})[.-]?(\d{4})$/.test(data);
}

function varTest(data) {
	if (/^[a-z$_][\w$]*$/i.test(data))
		return "Valid JavaScript Name";
	else if (/^[^a-z$_]/i.test(data))
		return "Invalid First Character!";
	else
		return "Invalid Character!";
}

function classTest(data) {
	if (/^[a-z][a-z0-9\-]*$/i.test(data))
		return "Valid Class Name";
	else if (/^[^a-z]/i.test(data))
		return "Invalid First Character!";
	else
		return "Invalid Character!";
}

function phpTest(data) {
	if (/^\$[\w]*$/i.test(data))
		return "Valid PHP/Perl Identifier";
	else if (/^[^$]/.test(data))
		return "Invalid First Character!";
	else
		return "Invalid Character!";
}

function validate_file(data){
	data = data.replace(/^\s|\s$/g, ""); //trims string
	return /^[a-z][\w]?\.(asp|html|htm|shtml|php)$/i.test(data)
}//eof - validate_file

function emailExp1(data) {
	return /^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9]+$/.test(data);
}

function emailExp2(data) {
	return /^[\w.\-]+@[\w\-]+\.[a-zA-Z0-9]+$/.test(data);
}

function emailExp3(data) {
	return /^([\w]+)(\.[\w]+)*@([\w\-]+)(\.[\w]{2,7})(\.[a-z]{2})?$/i.test(data);
}

function isValidDate(date_string, format) {
	var days = [0,31,28,31,30,31,30,31,31,30,31,30,31];
	var year, month, day, date_parts = null;
	var rtrn = false;
	var decisionTree = {
		'm/d/y':{
			're':/^(\d{1,2})[./-](\d{1,2})[./-](\d{2}|\d{4})$/,
			'month': 1,'day': 2, year: 3
		},
		'mm/dd/yy':{
			're':/^(\d{1,2})[./-](\d{1,2})[./-](\d{2})$/,
			'month': 1,'day': 2, year: 3
		},
		'mm/dd/yyyy':{
			're':/^(\d{1,2})[./-](\d{1,2})[./-](\d{4})$/,
			'month': 1,'day': 2, year: 3
		},
		'y/m/d':{
			're':/^(\d{2}|\d{4})[./-](\d{1,2})[./-](\d{1,2})$/,
			'month': 2,'day': 3, year: 1
		},
		'yy/mm/dd':{
			're':/^(\d{1,2})[./-](\d{1,2})[./-](\d{1,2})$/,
			'month': 2,'day': 3, year: 1
		},
		'yyyy/mm/dd':{
			're':/^(\d{4})[./-](\d{1,2})[./-](\d{1,2})$/,
			'month': 2,'day': 3, year: 1
		}
	};
	var test = decisionTree[format];
	if (test) {
		date_parts = date_string.match(test.re);
		if (date_parts) {
			year = date_parts[test.year] * 1;
			month = date_parts[test.month] * 1;
			day = date_parts[test.day] * 1;

			test = (month == 2 && 
				isLeapYear() && 
				29 || 
				days[month] || 0
			);

			rtrn = 1 <= day && day <= test;
		}
	}

	function isLeapYear() {
			return (year % 4 != 0 ? false : 
					( year % 100 != 0? true: 
					( year % 1000 != 0? false : true)));
	}
	return rtrn;
}//eof isValidDate
