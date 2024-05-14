import flagIt from "../../public/flag_ita.png";
import flagEn from "../../public/flag_eng.png";
import { Switch } from "@nextui-org/react";
import { useState } from "react";
import Icon from "./Icon";
import Scroll_linked from "./Scroll_linked";
import { useLanguageContext } from "../hook/useLanguageContext";
import Sidebar from "./Sidebar";
import useMediaQuery from "@mui/material/useMediaQuery";
import ILink from "../interfaces/ILink";

const Header = () => {
  let languageState = false;
  const { LanguageState, updateLanguage } = useLanguageContext();

  if (LanguageState.locale == "en") {
    languageState = false;
  } else languageState = true;

  const [isSelected, setIsSelected] = useState(languageState);
  const mediaQuery = useMediaQuery("(min-width:576px)");
  const linkList = [
    {
      text: LanguageState.messages.presentation as string,
      href: "#presentation",
    },
    { text: LanguageState.messages.experience as string, href: "#experience" },
    { text: LanguageState.messages.project as string, href: "#project" },
    { text: LanguageState.messages.formation as string, href: "#formation" },
    { text: LanguageState.messages.contact as string, href: "#contact" },
  ];

  return (
    <>
      <div className="shadow-md shadow-black w-full fixed bg-secondary-100 z-20">
        <div
          className={`header flex flex-row w-full h-12 ${
            !mediaQuery ? "justify-between" : "justify-evenly"
          } text-2xl font-bold `}
        >
          {!mediaQuery ? (
            <>
              <Sidebar linkList={linkList} />
            </>
          ) : (
            <>
              {linkList.map((li: ILink, idx: number) => (
                <a href={li.href} key={idx}>
                  <p key={LanguageState.locale}>{li.text}</p>
                </a>
              ))}
            </>
          )}
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
        </div>
        <Scroll_linked />
      </div>
    </>
  );
};

export default Header;
