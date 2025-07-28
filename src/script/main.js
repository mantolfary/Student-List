let students = [
  { name: "Sreng Chipor", grade: "A" },
  { name: "Eung Lyzhia", grade: "B" },
];

function displayStudents(filteredStudents = students) {
  const display = document.getElementById("studentsDisplay");
  display.innerHTML = "";
  filteredStudents.forEach((student, index) => {
    const card = document.createElement("div");
    card.className = "border-l-4 border-indigo-500 p-2 mb-2 rounded-xl bg-gray-50 shadow-md";
    card.innerHTML = `${index + 1}. ${student.name} <br> Grade: ${
      student.grade
    }`;
    display.appendChild(card);
  });
  document.getElementById(
    "totalStudents"
  ).textContent = `Total Students: ${filteredStudents.length}`;
}

document.getElementById("addStudent").addEventListener("click", () => {
  const name = document.getElementById("studentName").value;
  const grade = document.getElementById("studentGrade").value.toUpperCase();
  if (name && grade) {
    students.push({ name, grade });
    document.getElementById("studentName").value = "";
    document.getElementById("studentGrade").value = "";
    displayStudents();
  }
});

document.getElementById("filter").addEventListener("click", () => {
  const grade = document.getElementById("filterGrade").value.toUpperCase();
  const filtered = students.filter((student) => student.grade === grade);
  displayStudents(filtered);
});

document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("filterGrade").value = "";
  displayStudents();
});

displayStudents();
