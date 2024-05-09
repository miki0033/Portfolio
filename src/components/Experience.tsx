import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { useLanguageContext } from "../hook/useLanguageContext";

const Experience = () => {
  const { LanguageState } = useLanguageContext();
  const experienceList: Record<string, string>[] = LanguageState.messages
    .experienceList as Record<string, string>[];

  return (
    <>
      <div
        id="experience"
        className="flex flex-col w-full items-center p-8 gap-4"
      >
        {experienceList.map((experience, idx) => {
          return (
            <Card className="w-4/5 static" key={idx}>
              <CardHeader className="flex gap-3 static z-0">
                <div className="flex flex-col">
                  <p className="text-md">{experience.place}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody className="flex flex-col gap-2 static">
                <p>{experience.role}</p>
                <p>{experience.date}</p>
                <p>{experience.description}</p>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
