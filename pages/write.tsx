import { MenuLayout } from "../components/MenuLayout";
import { Footer } from "../components/MenuLayout";
import { useState } from "react";

export default function WriteBlog() {
  const [auth, setAuth] = useState(false);
  const [input, setInput] = useState("");

  const [postTitle, setPostTitleInput] = useState("");
  const [postSubtitle, setPostSubtitleInput] = useState("");
  const [postDesc, setPostDescInput] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === process.env.NEXT_PUBLIC_POST_PASSWORD) {
      setAuth(true);
    } else {
      alert("Incorrect password");
    }
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (postTitle && postSubtitle && postDesc) {
      // write to post.json

      try {
        // Await to see if it's properly written into
        const response = await fetch("/api/writePosts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: postTitle,
            subtitle: postSubtitle,
            content: postDesc,
            date: new Date().toISOString().split("T")[0],
          })
        });


        if (response.ok) {
          // Alert
          alert("Post saved");
          
          // Reset inputs
          setPostTitleInput("");
          setPostSubtitleInput("");
          setPostDescInput("");
        }
        else{
          alert("Failed save");
          console.log("Failure!!");
        }

      } catch(err) {
        console.error(err);
        alert("Error submitting post");
      }

    } else {
      alert("Invalid submission");
    }
  };






  return (
    <main className="min-h-screen bg-stone-900 text-white">
      <MenuLayout>
        <div className="w-full px-4 animate-fade-in">
          <div className="pt-20 flex flex-col items-center space-y-4">
          <h1 className="text-4xl font-bold font-mono text-white">Write A Post</h1>
          <h3 className={`font-bold font-mono ${ auth ? "text-green-400" : "text-white"}`}>
            {auth ? "Authenticated" : "Authentication required"}
          </h3>
          {!auth && (
              <>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 items-center">
                  <input type="password" value={input} onChange={(e) => setInput(e.target.value)} className="px-4 py-2 rounded bg-stone-800 text-white font-mono" placeholder="Enter password"/>
                  <button type="submit" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 font-mono">
                    Submit
                  </button>
                </form>
              </>
            )}

            {auth && (
              <div>
                {/* TBC */} 
                <section className="mt-2 w-full flex animate-fade-in">
                  <div className="bg-stone-400 p-4 rounded-lg w-full max-w-3xl text-white font-mono space-y-6">
                    <form onSubmit={handlePostSubmit} className="flex flex-col space-y-4 items-center">
                      <input type="text" value={postTitle} onChange={(e) => setPostTitleInput(e.target.value)} className="px-4 py-2 rounded bg-stone-800 text-white font-mono" placeholder="Title"/>
                      <input type="password" value={postSubtitle} onChange={(e) => setPostSubtitleInput(e.target.value)} className="px-4 py-2 rounded bg-stone-800 text-white font-mono" placeholder="Subtitle"/>
                      <textarea
                        value={postDesc}
                        onChange={(e) => setPostDescInput(e.target.value)}
                        className="w-full h-40 px-4 py-2 rounded bg-stone-800 text-white font-mono resize-none"
                        placeholder="Description"
                      />
                      <button type="submit" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 font-mono">
                        Submit
                      </button>
                    </form>
                  </div>
                </section>
              </div>
            )}


          </div>
        </div>

      </MenuLayout>
      <Footer></Footer>
    </main>
  );
}