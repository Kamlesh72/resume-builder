const HeaderForm = ({
  handleInfo,
  handleSocialLinks,
  deleteSocialLink,
  form,
}) => {
  return (
    <div>
      <div className="text-3xl font-semibold mb-5 underline">HEADER</div>
      <div class="w-full bg-slate-500 p-5 my-5">
        <div class="relative z-0 w-full mb-6 group">
          <input
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            type="text"
            name="username"
            value={form.username}
            onChange={handleInfo}
          />
        </div>

        {form.socialLinks.map((social, linkIndex) => (
          <div class="relative z-0 w-full mb-6 group">
            <div>{social.platform} :</div>
            <input
              class="inline-block py-2.5 px-0 w-11/12 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="text"
              name={social.platform}
              value={social.link}
              onChange={handleSocialLinks}
            />
            <button onClick={() => deleteSocialLink(linkIndex)}>X</button>
          </div>
        ))}
        <div class="relative z-0 w-full mb-6 group">
          Email:{" "}
          <input
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            type="email"
            name="email"
            value={form.email}
            onChange={handleInfo}
          />
        </div>
        <div class="relative z-0 w-full mb-6 group">
          Mobile:{" "}
          <input
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            type="text"
            name="number"
            value={form.number}
            onChange={handleInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderForm;
