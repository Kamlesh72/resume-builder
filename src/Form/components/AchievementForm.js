const AchievementForm = ({ handleAchievements, form }) => {
  return (
    <div>
      <div className="text-3xl font-semibold mb-5 underline">ACHIEVEMENTS</div>
      <div class="w-full bg-slate-500 p-5 my-5">
        {form.achievements.map((achievement, achieveIndex) => (
          <div class="relative z-0 w-full mb-6 group">
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              id={achieveIndex}
              type="text"
              name="points"
              value={achievement}
              onChange={handleAchievements}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementForm;
