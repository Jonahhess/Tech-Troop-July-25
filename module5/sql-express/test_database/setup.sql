use sql_intro;
create table company(
    name VARCHAR(20)
)

create table student(
    s_id INTEGER PRIMARY KEY,
    s_name VARCHAR(20),
    is_brilliant BOOLEAN
);

create table teacher(
    t_id INTEGER PRIMARY KEY,
    t_name VARCHAR(20),
    is_tenured BOOLEAN
);

create table student_teacher(
    student_id INTEGER,
    teacher_id INTEGER,
    Foreign Key (student_id) REFERENCES student(s_id),
    Foreign Key (teacher_id) REFERENCES teacher(t_id)
)
