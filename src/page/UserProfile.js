import { useSelector } from "react-redux";

export default function UserProfile() {
  let { user } = useSelector((state) => ({ user: state.auth.user }));
  return (
    <main className="wrapper pt-6">
      <div className="p-4 bg-white rounded-md shadow-md font-medium">
        <h2>
          User name:{" "}
          <span className="font-normal">
            {user?.firstname} {user?.lastname}
          </span>
        </h2>
        <p>
          Age: <span className="font-normal">{user.age} years</span>
        </p>
        <p>
          Email: <span className="font-normal">{user.email}</span>
        </p>
      </div>
    </main>
  );
}
