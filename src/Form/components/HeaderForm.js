const HeaderForm = ({ handleHeader, handleSocialLinks, form }) => {
  const { header } = form;
  return (
    <div>
      <h1 className="font-bold uppercase text-2xl">HEADER</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          name="firstName"
          value={header.firstName}
          onChange={handleHeader}
          placeholder="First Name*"
        />
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          name="lastName"
          value={header.lastName}
          onChange={handleHeader}
          placeholder="Last Name*"
        />
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="email"
          name="email"
          value={header.email}
          onChange={handleHeader}
          placeholder="Email*"
        />
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="number"
          name="phone"
          value={header.phone}
          onChange={handleHeader}
          placeholder="Phone*"
        />

        {form.socialLinks.map((social, linkIndex) => (
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            value={social.link}
            placeholder={social.platform}
            onChange={(e) => handleSocialLinks(e, linkIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeaderForm;
