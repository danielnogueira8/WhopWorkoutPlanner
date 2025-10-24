"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useWhop } from "~/components/whop-context";

export default function Page() {
  const { access, experience } = useWhop();
  const router = useRouter();

  useEffect(() => {
    const isAdmin = (access as any).accessLevel === "owner" || (access as any).accessLevel === "admin";
    const target = isAdmin
      ? `/experiences/${experience.id}/dashboard`
      : `/experiences/${experience.id}/workouts`;
    router.replace(target as any);
  }, [(access as any).accessLevel, experience.id, router]);

  return null;
}
