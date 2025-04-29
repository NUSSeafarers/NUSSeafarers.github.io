const PublishedText = ({ date, author }) => {
  if (!date) return null; // No date = don't render anything

  return (
    <div className="text-right text-[#002654] text-lg font-semibold mt-12 mb-12">
      Published on {date}
      {author && <> by {author}</>}
    </div>
  );
};

export default PublishedText;