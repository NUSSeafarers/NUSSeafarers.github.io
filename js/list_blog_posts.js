async function loadBlogList() {
    try {
        // Fetch blog list JSON
        let response = await fetch("blog-posts/blog-posts.json");
        console.log(response)
        if (!response.ok) throw new Error("Failed to load blog list.");
        let blogPosts = await response.json();

        // Populate blog list
        // let listContainer = document.getElementById("blog-list");
        // listContainer.innerHTML = ""; // Clear existing content

        blogPosts.forEach(post => {
            let listItem = document.createElement("li");
            let link = document.createElement("a");
            link.href = `blog-template.html?post=${encodeURIComponent(post)}`;
            link.textContent = post.replace(/-/g, " ").replace(".md", ""); // Format title
            listItem.appendChild(link);
            // listContainer.appendChild(listItem);
        });

    } catch (error) {
        console.error("Error loading blog list:", error);
        // document.getElementById("blog-list").innerHTML = "<p>Failed to load blog posts.</p>";
    }
}

// Run function on page load
window.onload = loadBlogList;
