select id, disease.survival_rate from patient
inner join disease
on patient.disease = disease.name
order by id asc