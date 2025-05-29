import fs from "fs";
import path from "path";

export default function handler(req, res) {

    console.log("Here!!");

    // Post Handler
  if (req.method === "POST") {
    const postPath = path.join(process.cwd(), "data", "test_posts.json");

    try {
        const newPost = req.body;
        const fileData = fs.readFileSync(postPath, "utf-8");
        const posts = JSON.parse(fileData);

        posts.push(newPost); // Add the new post to the beginning of the posts array
        fs.writeFileSync(postPath, JSON.stringify(posts, null, 2), "utf-8"); // Rewrite changes into JSON file and structure it similar to what it already is


        return res.status(200).json({ success: true });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to write post" });
    }
    } else {
    return res.status(405).json({ error: "Method not allowed" });
    }
}
