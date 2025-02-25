async function loadMarkdown() {
    try {
        // Get the blog post filename from the URL query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const filename = urlParams.get("post");

        if (!filename) {
            document.getElementById("blog-content").innerHTML = "<p>No blog post specified.</p>";
            return;
        }

        // Fetch the Markdown file from the blog-posts directory
        let response = await fetch(`.blog-template.html?post=${filename}`);
        // let response = await fetch(`blog-posts/${filename}`);
        // let response = await fetch(`blog-posts/experiencing-krakatoa.md`);
        if (!response.ok) throw new Error(`Failed to load ${filename}`);
        let markdownText = await response.text();

        // Convert Markdown to HTML (Basic Parsing)
        let htmlContent = markdownText
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')   // # Heading 1
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')  // ## Heading 2
            .replace(/^### (.*$)/gim, '<h3>$1</h3>') // ### Heading 3
            .replace(/\*\*(.*?)\*\*/gim, '<b>$1</b>') // **Bold**
            .replace(/\*(.*?)\*/gim, '<i>$1</i>')     // *Italic*
            .replace(/`(.*?)`/gim, '<code>$1</code>') // `inline code`
            .replace(/!\[(.*?)\]\((.*?)\)/gim, '<img alt="$1" src="$2">') // ![alt](img.png)
            .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>') // [text](link)
            .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>') // > Blockquote
            .replace(/^- (.*$)/gim, '<li>$1</li>') // - List Item
            .replace(/\n/g, '<br>'); // Line breaks

        // Inject into the specified container
        document.getElementById("blog-content").innerHTML = htmlContent;
    } catch (error) {
        console.error("Error loading Markdown:", error);
        document.getElementById("blog-content").innerHTML = "<p>Failed to load content.</p>";
    }
}

// Run the function when the page loads
window.onload = loadMarkdown;
