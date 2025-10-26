import { dehydrate } from "@tanstack/react-query";
import { WhopIframeSdkProvider } from "@whop/react";
import { WhopProvider } from "~/components/whop-context";
import {
  serverQueryClient,
  whopExperienceQuery,
  whopUserQuery,
} from "~/components/whop-context/whop-queries";
import { ExperienceSidebar } from "~/components/layout/ExperienceSidebar";
import { OnboardingProvider } from "~/components/onboarding/OnboardingTrigger";

export const experimental_ppr = true;

export default async function ExperienceLayout({
  children,
  params,
}: LayoutProps<"/experiences/[experienceId]">) {
  const { experienceId } = await params;

  serverQueryClient.prefetchQuery(whopExperienceQuery(experienceId));
  serverQueryClient.prefetchQuery(whopUserQuery(experienceId));

  return (
    <WhopIframeSdkProvider>
      <WhopProvider
        state={dehydrate(serverQueryClient)}
        experienceId={experienceId}
      >
        <OnboardingProvider>
          <div className="min-h-screen w-full flex">
            <ExperienceSidebar experienceId={experienceId} />
            <div className="flex-1 pb-16 md:pb-0">
              {children}
            </div>
          </div>
        </OnboardingProvider>
      </WhopProvider>
    </WhopIframeSdkProvider>
  );
}
