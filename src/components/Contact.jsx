const Contact = () => {
    return (
      <div name="contact"
        id="contact"
        className="w-full h-screen bg-[#ffffff] flex justify-center items-center p-4"
      >
        <form className="flex flex-col max-w-[600px] w-full">
          <div className="pb-8 ">
            <p className=" text-4xl font-bold inline border-b-4  border-[#a44747] text-[#eab5b5] ">
              Contact
            </p>
            <p className="text-[#a44747] py-4">
              Submit the form below or shoot me an email
            </p>
          </div>
          <input
            className="bg-[#efc9c9] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#efc9c9] "
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#efc9c9]  p-2"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="text-[#a44747] border-2 bg-[#efc9c9]   hover:border-[#a44747] px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  