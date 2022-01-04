import { useDispatch, useSelector } from "react-redux";
import AnnoCard from "../components/AnnoCard";
import Btn from "../components/Btn/Btn";
import Loader from "../components/Loader/Loader";
import { getNextAnnoPage } from "../services/store/actions/announcements";

export default function Announcements() {
  let dispatch = useDispatch();
  let { annons, lastAnnoPage, loading, currentAnnoPage, user } = useSelector(
    (state) => ({
      annons: state.anno.annons,
      lastAnnoPage: state.anno.lastAnnoPage,
      loading: state.anno.loading,
      currentAnnoPage: state.anno.currentAnnoPage,
      user: state.auth.user,
    })
  );

  return (
    <main className="wrapper pt-4 pb-24">
      <h2 className="text-center text-xl font-bold tracking-wide text-sky-600">
        Announcements
      </h2>
      <div className="grid auto-rows-max  gap-6 pt-5 mb-6">
        {annons.map((anno) => (
          <AnnoCard key={anno.id} anno={anno} userId={user.id} />
        ))}
      </div>
      {loading || lastAnnoPage === currentAnnoPage || (
        <div className="flex justify-center">
          <Btn onClick={() => dispatch(getNextAnnoPage())}>
            More Announcements
          </Btn>
        </div>
      )}
      {loading && <Loader />}
    </main>
  );
}
