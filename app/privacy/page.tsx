import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/sections/header';
import { SiteFooter } from '@/components/sections/footer';
import { portfolioData, siteUrl } from '@/data/portfolio-data';

const title = 'Privacy Policy';
const description =
  'Privacy Policy for Shishir Adhikari’s portfolio website — how personal information is handled when you visit or contact via this site.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: `${title} | ${portfolioData.personal.name}`,
    description,
    url: `${siteUrl}/privacy`,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: `${title} | ${portfolioData.personal.name}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const lastUpdated = 'July 24, 2026';

export default function PrivacyPolicyPage() {
  const { personal } = portfolioData;

  return (
    <>
      <SiteHeader />
      <main id='main-content' className='pb-20 pt-[120px]'>
        <article className='wrap max-w-[720px]'>
          <p className='mb-4 font-mono text-[13px] text-[var(--crimson)]'>
            Legal
          </p>
          <h1 className='mb-3 font-serif text-[clamp(32px,4vw,46px)] font-semibold leading-tight'>
            Privacy Policy
          </h1>
          <p className='mb-10 font-mono text-[12.5px] text-[var(--dim)]'>
            Last updated: {lastUpdated}
          </p>

          <div className='space-y-8 text-[15.5px] leading-relaxed text-[var(--dim)]'>
            <section>
              <h2 className='mb-3 font-serif text-2xl font-semibold text-[var(--text)]'>
                1. Introduction
              </h2>
              <p>
                This Privacy Policy explains how {personal.name} (&quot;I&quot;,
                &quot;me&quot;, or &quot;my&quot;) handles information when you
                visit{' '}
                <a
                  href={siteUrl}
                  className='text-[var(--crimson)] underline-offset-2 hover:underline'>
                  {personal.contact.website}
                </a>{' '}
                (the &quot;Site&quot;). This Site is a personal portfolio
                showcasing professional experience, skills, and projects. By
                using the Site, you agree to this policy.
              </p>
            </section>

            <section>
              <h2 className='mb-3 font-serif text-2xl font-semibold text-[var(--text)]'>
                2. Information I collect
              </h2>
              <p className='mb-3'>
                When you use the WhatsApp contact form on this Site, I collect:
              </p>
              <ul className='list-disc space-y-2 pl-5'>
                <li>
                  <strong className='font-medium text-[var(--text)]'>
                    Name, WhatsApp number, and message:
                  </strong>{' '}
                  used to deliver your inquiry through Meta&apos;s WhatsApp
                  Business (Cloud) API and continue the conversation on WhatsApp.
                </li>
                <li>
                  <strong className='font-medium text-[var(--text)]'>
                    Information you send on WhatsApp:
                  </strong>{' '}
                  replies and button choices in that chat, processed to send
                  automated option replies and so I can respond personally.
                </li>
                <li>
                  <strong className='font-medium text-[var(--text)]'>
                    Technical / server logs:
                  </strong>{' '}
                  hosting providers may record IP address, browser type, device
                  information, pages visited, and timestamps for security and
                  reliability.
                </li>
              </ul>
              <p className='mt-3'>
                If you email me or contact social profiles linked on the Site, I
                receive whatever you choose to share there.
              </p>
            </section>

            <section>
              <h2 className='mb-3 font-serif text-2xl font-semibold text-[var(--text)]'>
                3. How information is used
              </h2>
              <p className='mb-3'>Information is used only to:</p>
              <ul className='list-disc space-y-2 pl-5'>
                <li>Respond to inquiries about work, freelance, or collaboration</li>
                <li>
                  Send the automated WhatsApp welcome / options message and
                  follow-up replies
                </li>
                <li>Operate, secure, and improve the Site</li>
                <li>Comply with legal obligations if required</li>
              </ul>
              <p className='mt-3'>
                WhatsApp delivery is handled by Meta Platforms under their terms.
                I do not sell personal information. I do not use the Site to run
                advertising networks or sell visitor profiles.
              </p>
            </section>

            <section>
              <h2 className='mb-3 font-serif text-2xl font-semibold text-[var(--text)]'>
                4. Cookies and analytics
              </h2>
              <p>
                This Site does not intentionally set marketing cookies. Essential
                cookies or similar storage may be used by the hosting platform or
                browser for basic functionality. If analytics tools are added
                later, this policy will be updated to describe them.
              </p>
            </section>

            <section>
              <h2 className='mb-3 font-serif text-2xl font-semibold text-[var(--text)]'>
                5. Third-party links
              </h2>
              <p>
                The Site links to external projects, GitHub, LinkedIn, and other
                services. Those sites have their own privacy practices. I am not
                responsible for content or policies on third-party websites.
              </p>
            </section>

            <section>
              <h2 className='mb-3 font-serif text-2xl font-semibold text-[var(--text)]'>
                6. Data retention
              </h2>
              <p>
                Emails and messages you send are kept only as long as needed to
                respond and manage professional correspondence, unless a longer
                period is required by law. Server logs are retained according to
                the hosting provider’s defaults and security needs.
              </p>
            </section>

            <section>
              <h2 className='mb-3 font-serif text-2xl font-semibold text-[var(--text)]'>
                7. Your choices
              </h2>
              <p>
                You can choose not to contact me, and you can request that I
                delete correspondence you previously sent (subject to legal or
                legitimate record-keeping needs). For requests, use the contact
                details below.
              </p>
            </section>

            <section>
              <h2 className='mb-3 font-serif text-2xl font-semibold text-[var(--text)]'>
                8. Children’s privacy
              </h2>
              <p>
                This Site is intended for a general professional audience and is
                not directed at children under 13. I do not knowingly collect
                personal information from children.
              </p>
            </section>

            <section>
              <h2 className='mb-3 font-serif text-2xl font-semibold text-[var(--text)]'>
                9. Changes to this policy
              </h2>
              <p>
                I may update this Privacy Policy from time to time. The
                &quot;Last updated&quot; date at the top will change when
                revisions are published. Continued use of the Site after updates
                means you accept the revised policy.
              </p>
            </section>

            <section>
              <h2 className='mb-3 font-serif text-2xl font-semibold text-[var(--text)]'>
                10. Contact
              </h2>
              <p className='mb-3'>
                Questions about this Privacy Policy or your information:
              </p>
              <ul className='list-none space-y-1.5'>
                <li>
                  <span className='text-[var(--text)]'>Name:</span> {personal.name}
                </li>
                <li>
                  <span className='text-[var(--text)]'>Email:</span>{' '}
                  <a
                    href={`mailto:${personal.contact.email}`}
                    className='text-[var(--crimson)] underline-offset-2 hover:underline'>
                    {personal.contact.email}
                  </a>
                </li>
                <li>
                  <span className='text-[var(--text)]'>Location:</span>{' '}
                  {personal.contact.location}
                </li>
              </ul>
            </section>
          </div>

          <p className='mt-12 font-mono text-[13px]'>
            <Link
              href='/'
              className='text-[var(--crimson)] underline-offset-2 hover:underline'>
              ← Back to home
            </Link>
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
