USE sql_intro;

create table ethnicity(
    id integer primary key,
    name VARCHAR(20)
)

create table gender(
    id integer primary key,
    name VARCHAR(20)
)

create table symptoms(
    family integer primary key,
    fever boolean,
    blue_whelts BOOLEAN,
    low_bp BOOLEAN
)

create table disease(
    name VARCHAR(20) PRIMARY KEY,
    survival_rate float
)

create table patient(
    id integer AUTO_INCREMENT primary key,
    ethnicity INTEGER ,
    gender INTEGER,
    symptoms_family integer, 
    disease VARCHAR(20), 
    FOREIGN KEY (ethnicity) REFERENCES ethnicity(id),
    Foreign Key (gender) REFERENCES gender(id),
    Foreign Key (symptoms_family) REFERENCES symptoms(family),
    Foreign Key (disease) REFERENCES disease(name)
)

