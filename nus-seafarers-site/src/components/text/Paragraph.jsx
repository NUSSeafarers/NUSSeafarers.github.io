const Paragraph = ({ children, dropCap = false }) => {
  return (
    <p
      className={`text-[var(--text)] text-lg leading-relaxed mb-6 ${
        dropCap
          ? "first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-[0.8]"
          : ""
      }`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
