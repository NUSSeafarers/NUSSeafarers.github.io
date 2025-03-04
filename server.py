import http.server

class NoCacheHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Disable caching by setting cache-control headers
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

# Start server on port 8000
if __name__ == "__main__":
    server_address = ("", 8000)
    httpd = http.server.HTTPServer(server_address, NoCacheHTTPRequestHandler)
    print("Serving at http://localhost:8000 (no caching enabled)")
    httpd.serve_forever()
