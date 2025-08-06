interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
  className?: string;
}

const TeamMember = ({ name, role, image, bio, className = "" }: TeamMemberProps) => {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover shadow-md mb-4"
      />
      <h3 className="text-lg font-semibold text-neutral-900">{name}</h3>
      <p className="text-sm text-neutral-600">{role}</p>
      {bio && <p className="mt-2 text-sm text-neutral-500">{bio}</p>}
    </div>
  );
};

export default TeamMember;
