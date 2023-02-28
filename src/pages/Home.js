import supabase from "../supabaseClient";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [fetchError, setFetchError] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from("comments")
        .select()
        .order("id", true);
      if (error) {
        setFetchError("Cannot fetch comments");
        setComments(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setComments(data);
      }
    };
    fetchComments();
  }, []);

  return (
    <div className="page home">
      <div className="result mid">
        {fetchError && <p>{fetchError}</p>} {/* if error exists */}
        {!comments && <p>Loading...</p>}
        {comments && (
          <table className="comments mt-5 table-auto">
            <thead>
              <tr>
                <th>Name</th>
                <th colSpan="2">Comment</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.username}</td>
                  <td className="border-r-0 text-left">
                    <span className="whitespace-pre-line">{entry.comment}</span>
                  </td>
                  <td className="border-l-0">
                    <Link
                      to={"/" + entry.id}
                      className="material-symbols-rounded border-black bg-yellow-300"
                    >
                      edit
                    </Link>
                    <button className="material-symbols-rounded border-black bg-red-500">
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Home;
