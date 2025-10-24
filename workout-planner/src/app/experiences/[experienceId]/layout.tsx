import { dehydrate } from "@tanstack/react-query";
import { WhopIframeSdkProvider } from "@whop/react";
import { WhopProvider } from "~/components/whop-context";
import {
  serverQueryClient,
  whopExperienceQuery,
  whopUserQuery,
} from "~/components/whop-context/whop-queries";
import { ExperienceSidebar } from "~/components/layout/ExperienceSidebar";

export const experimental_ppr = true;

export default async function ExperienceLayout({
  children,
  params,
}: LayoutProps<"/experience/[experienceId]">) {
  const { experienceId } = await params;

  serverQueryClient.prefetchQuery(whopExperienceQuery(experienceId));
  serverQueryClient.prefetchQuery(whopUserQuery(experienceId));

  return (
    <WhopIframeSdkProvider>
      <WhopProvider
        state={dehydrate(serverQueryClient)}
        experienceId={experienceId}
      >
        <div className="min-h-screen w-full flex">
          <ExperienceSidebar experienceId={experienceId} />
          <div className="flex-1">
            {children}
          </div>
        </div>
      </WhopProvider>
    </WhopIframeSdkProvider>
  );
}
