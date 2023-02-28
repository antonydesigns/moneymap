import supabase from "../supabaseClient";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from("comments")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        navigate("/", { replace: true });
      }

      if (data) {
        setUsername(data.username);
        setComment(data.comment);
        console.log();
      }
    };

    fetchComments();
  }, []);

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
      .update({ username, comment })
      .eq("id", id)
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
    <div className="page update">
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
            className="mid rounded-lg border border-black bg-yellow-300 p-2 hover:bg-green-200"
          >
            Edit comment
          </button>
        </div>
        {formError && <p>{formError}</p>}
      </form>
    </div>
  );
}

export default Update;
