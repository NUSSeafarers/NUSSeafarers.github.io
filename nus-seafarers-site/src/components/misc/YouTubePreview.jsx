const YouTubePreview = ({ videoId }) => {
    return (
      <figure className="w-full max-w-4xl mx-auto mt-12">
        <div className="relative w-full pb-[56.25%] overflow-hiddenshadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?start=0&showinfo=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </figure>
    );
  };
  
  export default YouTubePreview;
  