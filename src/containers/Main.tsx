import { JobHistory } from "./JobHistory";
import { Skills } from "./Skills";
import { Projects } from './Projects';

export const Main = () => {
  return (
    <div className="main">
      <JobHistory />
      <br />
      <Skills />
      <br />
      <Projects />
      <br />
    </div>
  );
};
