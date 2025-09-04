select name, count(ethnicity) from patient
inner join ethnicity
on patient.ethnicity = ethnicity.id
where disease = "lettuce disease"
group by name