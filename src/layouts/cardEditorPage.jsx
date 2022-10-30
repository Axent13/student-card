import React from "react";
import CardEditor from "../components/cardEditor";

const CardEditorPage = () => {
  return <CardEditor {...localStorage} />;
};

export default CardEditorPage;
