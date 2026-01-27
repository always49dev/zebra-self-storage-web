import { Metadata } from 'next';
import CareersHero from '@/components/careers/CareersHero';
import JobCard from '@/components/careers/JobCard';

export const metadata: Metadata = {
    title: 'Careers | Zebra Self Storage',
    description: 'Join the team at Zebra Self Storage. Explore our current job openings and learn more about life at Zebra.',
};

export default function CareersPage() {
    const jobs = [
        { title: 'Job role', location: 'Location' },
        { title: 'Job role', location: 'Location' },
        { title: 'Job role', location: 'Location' },
        { title: 'Job role', location: 'Location' },
        { title: 'Job role', location: 'Location' },
    ];

    return (
        <main className="min-h-screen bg-white pb-20">
            <CareersHero />

            <div className="container mx-auto px-4">
                <div className="max-w-4xl space-y-12">
                    {jobs.map((job, index) => (
                        <JobCard key={index} title={job.title} location={job.location} />
                    ))}
                </div>
            </div>
        </main>
    );
}
