import flagIt from "../../public/flag_ita.png";
import flagEn from "../../public/flag_eng.png";
import { Switch } from "@nextui-org/react";
import { useState } from "react";
import Icon from "./Icon";
import Scroll_linked from "./Scroll_linked";
import { useLanguageContext } from "../hook/useLanguageContext";

const Header = () => {
  let languageState = false;
  const { LanguageState, updateLanguage } = useLanguageContext();

  if (LanguageState.locale == "en") {
    languageState = false;
  } else languageState = true;

  const [isSelected, setIsSelected] = useState(languageState);
  return (
    <>
      <div className="shadow-md shadow-black w-full fixed bg-secondary-100 z-20">
        <div className="p-2 flex justify-end">
          <Switch
            defaultSelected
            size="lg"
            color={isSelected ? "success" : "danger"}
            isSelected={isSelected}
            onValueChange={(select: boolean) => {
              setIsSelected(select);
              updateLanguage();
            }}
            thumbIcon={({ isSelected }) =>
              isSelected ? <Icon image={flagIt} /> : <Icon image={flagEn} />
            }
          ></Switch>
        </div>
        <div className="header flex flex-row w-full h-12 justify-evenly text-2xl font-bold ">
          <a href="/#presentation">
            <p key={LanguageState.locale}>
              {LanguageState.messages.presentation as string}
            </p>
          </a>
          <a href="/#experience">
            <p key={LanguageState.locale}>
              {LanguageState.messages.experience as string}
            </p>
          </a>
          <a href="/#project">
            <p key={LanguageState.locale}>
              {LanguageState.messages.project as string}
            </p>
          </a>
          <a href="/#formation">
            <p key={LanguageState.locale}>
              {LanguageState.messages.formation as string}
            </p>
          </a>
          <a href="/#contact">
            <p key={LanguageState.locale}>
              {LanguageState.messages.contact as string}
            </p>
          </a>
        </div>
        <Scroll_linked />
      </div>
    </>
  );
};

export default Header;
