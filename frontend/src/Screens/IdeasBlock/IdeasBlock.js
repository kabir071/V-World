import React, {useEffect} from "react";
import { getIdeas } from "../../Actions/ideasBlock";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../../Components/Structure/Main";
import IdeaCard from "../../Components/Cards/IdeaCard";
import "./css/IdeasBlock.css";
import AddIdeaModal from "./AddIdeaModal";
import { setLoading } from "../../Actions/auth";

export default function IdeasBlock() {
  const dispatch = useDispatch();
  const ideas = useSelector((state) => state.ideas);
  useEffect(() => {
    dispatch(setLoading)
    // dispatch({ type: "SET_LOADING" })
    dispatch(getIdeas());
  }, [dispatch]);
  return (
    <MainLayout type="ideasBlock">
      <AddIdeaModal />
      <div className="ideas-main">
        {ideas.map((idea) => (
          <IdeaCard idea={idea} />
        ))}
      </div>
    </MainLayout>
  );
}
