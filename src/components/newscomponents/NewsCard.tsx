import React from "react";

type NewsCardProps = {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  href?: string;
};

const NewsCard: React.FC<NewsCardProps> = ({ title, subtitle, imageSrc, href }) => {
  const Wrapper = href ? "a" : "div";

  return (
    <div className="max-w-xs text-center">
      <Wrapper
        href={href}
        className="block overflow-hidden rounded-xl shadow-md hover:shadow-lg transition duration-300"
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </Wrapper>
      <h3 className="mt-3 text-lg font-bold text-neutral-900">{title}</h3>
      {subtitle && (
        <p className="text-sm text-neutral-600">{subtitle}</p>
      )}
    </div>
  );
};

export default NewsCard;
