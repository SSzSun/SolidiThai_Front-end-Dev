interface UsersProps {
  user: {
    id: number;
    id_card: number;
    name: string;
    last_name: string;
    username: string;
    student_level: string;
  };
}

export default function UserDetail({ user }: UsersProps) {
  return (
    <div className="p-2">
      <h3 className="text-xl font-bold mb-2">
        {user.name} {user.last_name}
      </h3>
      <div className="bg-gray-100 p-4 rounded shadow">
        <p className="mb-2">
          <b>ID:</b> {user.id}
        </p>
        <p className="mb-2">
          <b>ID Card:</b> {user.id_card}
        </p>
        <p className="mb-2">
          <b>Username:</b> {user.username}
        </p>
        <p className="mb-2">
          <b>Student Level:</b> {user.student_level}
        </p>
      </div>
    </div>
  );
}
