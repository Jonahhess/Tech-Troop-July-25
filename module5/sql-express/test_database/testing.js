const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:1234@localhost/sql_intro");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const addStudent = async (s_id, s_name, is_brilliant) => {
  if (!s_id || !s_name || is_brilliant == null) {
    return -1;
  }
  const id = await sequelize.query(
    "INSERT INTO student VALUES (:s_id, :s_name, :is_brilliant) ",
    { replacements: { s_id, s_name, is_brilliant } }
  );

  return id;
};

const addTeacher = async (t_id, t_name, is_tenured) => {
  if ((!t_id, !t_name || is_tenured == null)) {
    return -1;
  }
  const id = await sequelize.query(
    "INSERT INTO teacher VALUES (:t_id, :t_name, :is_tenured) ",
    { replacements: { t_id, t_name, is_tenured } }
  );

  return id;
};
// addStudent(1, "Steve", false);
// addStudent(2, "Robert", true);

// addTeacher(3, "Rick", true);
// addTeacher(4, "Adam", false);

async function enrollStudents(s_name, t_name) {
  const s_id = await sequelize.query(
    "SELECT s_id from student where s_name = :s_name",
    { replacements: { s_name } }
  );

  const t_id = await sequelize.query(
    "SELECT t_id from teacher where t_name = :t_name",
    { replacements: { t_name } }
  );

  const enroll = await sequelize.query(
    "INSERT INTO student_teacher VALUES (:s_id, :t_id)",
    { replacements: { s_id: s_id[0][0].s_id, t_id: t_id[0][0].t_id } }
  );
  console.log(enroll);
}

// enrollStudents("Steve", "Rick");
