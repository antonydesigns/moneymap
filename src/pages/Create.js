import { useState } from "react";

function Create() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="page create">
      <form onSubmit={handleSubmit} className="mt-5">
        <fieldset className="relative right-4">
          <div className="columns-2">
            <label htmlFor="username" className="text-right">
              <p className="p-1 pr-3">Name:</p>
            </label>
            <input
              className="block border border-black p-1"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mt-5 columns-2">
            <label htmlFor="comment" className="text-right">
              <p className="p-1 pr-3">Comments:</p>
            </label>
            <input
              className="block border border-black p-1"
              type="text"
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </fieldset>

        <div className="mid mt-10">
          <button className="mid rounded-lg border border-black p-2">
            Post comment
          </button>
        </div>
        {formError && <p>Error in the form</p>}
      </form>
    </div>
  );
}

export default Create;
