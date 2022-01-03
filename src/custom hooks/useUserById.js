import { useSelector } from "react-redux";

export function useUserById(userId) {
  let { users } = useSelector((state) => ({ users: state.users.users }));

  let user = users.find((user) => user.id === userId);
  return user;
}
