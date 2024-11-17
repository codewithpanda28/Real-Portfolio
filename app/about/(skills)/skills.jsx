import { Code2, Workflow, GanttChart, GitFork } from "lucide-react";

export default function Skills() {
  return (
    <section className="grid gap-8 md:gap-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold mt-3 text-black">
          Skills and Expertise
        </h2>
        <p className="text-muted-foreground max-w-[800px] mx-auto">
          Explore some skills I&apos;m proficient in to deliver high-quality
          solutions.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        <div className="flex flex-col items-center gap-2">
          <Code2 className="w-12 h-12" />
          <div className="font-medium">React.js & Next.js</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Workflow className="w-12 h-12" />
          <div className="font-medium">HTML5, CSS3, JavaScript</div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <GanttChart className="w-12 h-12" />
          <div className="font-medium">RESTFUL APIs integration</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <GitFork className="w-12 h-12" />
          <div className="font-medium">Git, GitHub</div>
        </div>
      </div>
    </section>
  );
}