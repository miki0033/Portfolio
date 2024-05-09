import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { useLanguageContext } from "../hook/useLanguageContext";

const Education = () => {
  const { LanguageState } = useLanguageContext();
  const formationList: Record<string, string>[] = LanguageState.messages
    .formationList as Record<string, string>[];

  return (
    <>
      <div
        id="formation"
        className="flex flex-row justify-evenly p-8 gap-4 rounded-md"
      >
        {formationList.map((formation, idx) => {
          return (
            <Card className="w-4/5 static" key={idx}>
              <CardHeader className="flex gap-3 static">
                <div className="flex flex-col">
                  <p className="text-md">{formation.graduation}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody className="flex flex-col gap-2 static">
                <p>{formation.place}</p>
                <p>{formation.date}</p>
                <p>{formation.description}</p>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Education;
