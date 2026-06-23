import { CheckCircle2 } from "lucide-react";

const CHECKS = [
  "Government ID verified",
  "Background check (Garda Vetting) on file",
  "Trade credential verified",
  "Insurance certificate on file",
  "Email & phone verified",
  "Address verified",
];

export function VendorVerification() {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl mb-4">Verification &amp; trust</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {CHECKS.map((x) => (
          <div key={x} className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="size-4 text-success" />
            {x}
          </div>
        ))}
      </div>
    </section>
  );
}
