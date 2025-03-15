select username from dba_users;

drop user johny;

select tablespace_name from dba_tablespaces;

create tablespace johny_tabspace datafile 'johny_tabspace.dat' size 10M autoextend on;

create temporary tablespace johny_tabspace_temp tempfile 'johny_tabspace_temp.dat' size 5M autoextend on;

create user johny identified by 1234 default tablespace johny_tabspace temporary tablespace johny_tabspace_temp;

grant create session to johny;
grant create table to johny;
grant unlimited tablespace to johny;

select * from session_privs;

create table johny_table (
	id int not null,
	text varchar2(1000),
	primary key (id)
);
