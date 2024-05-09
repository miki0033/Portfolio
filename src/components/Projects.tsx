import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";
import { useLanguageContext } from "../hook/useLanguageContext";

const Projects = () => {
  const { LanguageState } = useLanguageContext();
  /*const projectList = [
    { title: "Project1", text: "Project1", link: "http://github.com" },
    { title: "Project2", text: "Project2", link: "http://github.com" },
    { title: "Project3", text: "Project3", link: "http://github.com" },
  ];*/
  const projectList: Record<string, string>[] = LanguageState.messages
    .projectList as Record<string, string>[];

  return (
    <>
      <div
        id="project"
        className="slider-container flex flex-row h-[300px] justify-evenly p-8 gap-4 rounded-md"
      >
        {projectList.map((project, idx) => {
          return (
            <Card className="max-w-[400px] h-full" id={"slide" + idx} key={idx}>
              <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                  <p className="text-md">{project.title}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>{project.text}</p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link isExternal showAnchorIcon href={project.link}>
                  <p key={LanguageState.locale}>
                    {LanguageState.messages.sourceGitHub as string}
                  </p>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
