interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
  className?: string;
}

const TeamMember = ({
  name,
  role,
  image,
  bio,
  className = "",
}: TeamMemberProps) => {
  return (
    <div className={`flex flex-col items-center text-center w-64 ${className}`}>
      <div className="w-64 aspect-square rounded-full overflow-hidden shadow-md mb-4">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-neutral-900">{name}</h3>
        <p className="text-sm text-neutral-600">{role}</p>
        {bio && (
          <div className="px-4">
            <p className="mt-2 text-sm text-neutral-500 text-center">{bio}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
