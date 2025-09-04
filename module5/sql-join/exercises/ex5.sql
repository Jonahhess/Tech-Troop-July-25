select symptoms_family, count(symptoms_family) from patient
where disease = "cabbage disease"
group by symptoms_family
order by symptoms_family