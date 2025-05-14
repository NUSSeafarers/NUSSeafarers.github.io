const Quote = ({quoteText, author}) => {
	return (
		<div className="">
			{/* Quote */}
			<blockquote className="text-2xl italic font-semibold text-gray-700">
			{	quoteText}
			</blockquote>

			{/* Author Footer */}
			<div className="mt-8 mb-12 text-sm text-gray-500">
				— {author}
			</div>
		</div>
	)
};

export default Quote