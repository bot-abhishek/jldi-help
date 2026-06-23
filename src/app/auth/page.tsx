import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { AuthView } from "@/features/auth";

export const metadata: Metadata = {
  title: "Sign in — JaldiHelp",
};

export default function AuthPage() {
  return (
    <PageLayout>
      <AuthView />
    </PageLayout>
  );
}
