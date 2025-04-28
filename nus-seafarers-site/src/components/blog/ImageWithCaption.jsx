const ImageWithCaption = ({ src, alt, caption }) => {
    return (
      <figure className="my-12 text-center">
        <img src={src} alt={alt} className="mx-auto rounded-lg shadow-md" />
        <figcaption className="mt-4 text-sm italic text-gray-500  mx-auto">
          {caption}
        </figcaption>
      </figure>
    );
  };
  
  export default ImageWithCaption;
  