import { useLanguageContext } from "../hook/useLanguageContext";
import { Image } from "@nextui-org/react";
const Presentation = () => {
  const { LanguageState } = useLanguageContext();

  return (
    <div id="presentation" className="flex flex-row m-8">
      <div id="sx" className="static min-w-[300px]">
        <Image
          className="w-full static"
          removeWrapper={true}
          alt=""
          src="..\public\face.jpeg"
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
