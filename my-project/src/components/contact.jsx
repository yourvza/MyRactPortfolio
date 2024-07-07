const Contact = () => {
  return (
    <div id="Contact" className="">
      <div className="p-4 lg:p-20 flex text-xl text-fuchsia-800 flex-col items-center justify-center">
        <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500>">
          Reach Out!
        </h1>
        <form action="" className="flex flex-col gap-2 lg:w-1/2">
          <div className="lg:flex gap-6">
            <input
              className="w-full lg:my-3 my-4 rounded-lg bg-slate-600 p-4 border-2 border-fuchsia-800 text-xl text-slate-900"
              placeholder="Name"
              type="text"
            />
            <input
              className="w-full lg:my-3 my-4 rounded-lg bg-slate-600 p-4 border-2 border-fuchsia-800 text-xl text-slate-900"
              placeholder="Email"
              type="text"
            />
          </div>
          <textarea
            className="w-full my-3 rounded-lg bg-slate-600 p-4 border-2 border-fuchsia-800 text-xl text-slate-900"
            placeholder="Write me a message!"
            name=""
            id=""
            cols="20"
            rows="10"
          ></textarea>
          <button
            className="neno button shadow-xl hover:shadow-lg hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden"
            type="submit"
          >
            {" "}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
