import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../services/store/actions/users";

export function useUserById(userId) {
  let dispatch = useDispatch();
  let { users, usersLoading } = useSelector((state) => ({
    users: state.users.users,
    usersLoading: state.users.usersLoading,
  }));
  let user = users.find((user) => user.id === userId);
  if (!user && !usersLoading) {
    dispatch(getUserById(userId));
  }
  return user;
}
