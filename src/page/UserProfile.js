import { useSelector } from "react-redux";

export default function UserProfile() {
  let { user } = useSelector((state) => ({ user: state.auth.user }));
  return (
    <main className="wrapper pb-24 pt-6">
      <h2>
        {user?.firstname} {user?.lastname}
      </h2>
      <p>{user.age}</p>
      <p>{user.email}</p>
    </main>
  );
}
