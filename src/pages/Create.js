import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Create() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted");

    if (!username || !comment) {
      setFormError(
        "One or more fields are missing. Please fill them correctly."
      );
      return;
    }

    const { data, error } = await supabase
      .from("comments")
      .insert({ username, comment })
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      setFormError("");
      setUsername("");
      setComment("");
      navigate("/");
    }
  };

  return (
    <div className="page create">
      {formError && (
        <p className="pd-2 mt-5 rounded-lg border border-red-500 text-center text-red-500">
          {formError}
        </p>
      )}

      <form className="mt-5">
        <fieldset className="">
          <label htmlFor="username" className="">
            <p>Name:</p>
          </label>
          <input
            className="block w-full rounded-md border border-black p-1"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="comment" className="">
            <p className="p-1 pr-3">Comments:</p>
          </label>
          <textarea
            multiline="true"
            className="h-min-20 block w-full rounded-md border border-black p-1"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </fieldset>

        <div className="mid mt-10">
          <button
            onClick={handleSubmit}
            className="mid rounded-lg border border-black bg-green-400 p-2 hover:bg-green-200"
          >
            Post comment
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
