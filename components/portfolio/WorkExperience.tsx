import { DATA } from '@/data/resume';
import { ResumeCard } from '../resume-card';


export default function WorkExperience() {
  return (
    <section id="work">
      <div className="relative p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl flex-col gap-y-3 bg-linear-to-br from-white/90 to-white/50 dark:from-gray-800/90 dark:to-gray-900/50 backdrop-blur-xl border border-white/30 dark:border-gray-700/40 shadow-2xl">
        <h2 className="text-xl font-bold py-2">Work Experience</h2>
        {DATA.work.map((work) => (
          <ResumeCard
              key={work.company}
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? 'Present'}`}
              description={work.description}
            />
        ))}
      </div>
    </section>
  );
}
