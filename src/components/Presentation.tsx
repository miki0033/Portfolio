import { useLanguageContext } from "../hook/useLanguageContext";
import { Image } from "@nextui-org/react";
import face from "../../public/face.jpeg";
const Presentation = () => {
  const { LanguageState } = useLanguageContext();

  return (
    <div id="presentation" className="flex md:flex-row flex-col m-8 mt-32">
      <div id="sx" className="static max-w-[300px] justify-center">
        <Image
          className="w-full static"
          removeWrapper={true}
          alt=""
          src={face}
        />
      </div>
      <div id="dx" className="flex flex-col items-center gap-2 m-8">
        <h1 className="font-bold ">{LanguageState.messages.about as string}</h1>
        <p key={LanguageState.locale}>
          {LanguageState.messages.presentation_text as string}
        </p>
      </div>
    </div>
  );
};

export default Presentation;
