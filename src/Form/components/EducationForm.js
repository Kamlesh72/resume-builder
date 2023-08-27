const EducationForm = ({ handleEducation, form }) => {
  const { education } = form;
  return (
    <div>
      <div className="text-3xl font-semibold mb-5 underline">EDUCATION</div>

      {/* COLLEGE */}
      <div className=" font-semibold mb-3">COLLEGE</div>
      <div class="w-full bg-slate-500 p-5 my-5">
        <div class="relative z-0 w-full mb-6 group">
          <input
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            type="text"
            name="name"
            value={education.college.name}
            onChange={(e) => handleEducation(e, "college")}
          />
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="text"
              name="from"
              value={education.college.from}
              onChange={(e) => handleEducation(e, "college")}
            />
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="text"
              name="to"
              value={education.college.to}
              onChange={(e) => handleEducation(e, "college")}
            />
          </div>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            type="text"
            name="cgpa"
            value={education.college.cgpa}
            onChange={(e) => handleEducation(e, "college")}
          />
        </div>
      </div>

      {/* SCHOOL */}
      <div className=" font-semibold mb-3">SCHOOL</div>
      <div class="w-full bg-slate-500 p-5 my-5">
        <div class="relative z-0 w-full mb-6 group">
          <input
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            type="text"
            name="name"
            value={education.school.name}
            onChange={(e) => handleEducation(e, "school")}
          />
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="text"
              name="from"
              value={education.school.from}
              onChange={(e) => handleEducation(e, "school")}
            />
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="text"
              name="to"
              value={education.school.to}
              onChange={(e) => handleEducation(e, "school")}
            />
          </div>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            type="text"
            name="hscPercent"
            value={education.school.hscPercent}
            onChange={(e) => handleEducation(e, "school")}
          />
        </div>
      </div>
    </div>
  );
};

export default EducationForm;
