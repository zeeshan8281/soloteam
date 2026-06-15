import Link from "next/link";
import { Lead, FAQ, PageHead, PageNav } from "../components";

export const metadata = {
  title: "SoloTeam Docs — FAQ",
  description: "Common questions about SoloTeam.",
};

export default function FaqPage() {
  return (
    <article>
      <PageHead kicker="docs / faq" title="Frequently asked questions">
        <Lead>The questions people ask most, in one place.</Lead>
      </PageHead>

      <FAQ
        items={[
          [
            "Is this just ChatGPT with a system prompt?",
            <>No. Each agent has persistent <Link href="/docs/memory" className="text-accent">memory</Link> of your business that compounds over time, a real domain playbook, connected tools (Notion, Gmail, Calendar), and the ability to take approved actions. A chat session forgets you between tabs; your team doesn&apos;t.</>,
          ],
          [
            "Will an agent do something without my permission?",
            <>Never. Reading and advising are free; anything outbound — email, a published doc, a post — is drafted and waits for your <Link href="/docs/approvals" className="text-accent">approval</Link>.</>,
          ],
          [
            "Do I need API keys or any technical setup?",
            <>No. Connecting tools is a one-click browser login (see <Link href="/docs/connecting" className="text-accent">Connecting your tools</Link>). Inference runs on our keys — you never think about tokens or models.</>,
          ],
          [
            "Where do I talk to my agents?",
            "In Slack — they join as @mentionable members. A dedicated web workspace may come later, but Slack is the home for the pilot.",
          ],
          [
            "How is my data handled?",
            "Your business context is yours and isn't used to train models. Tool connections only access what you authorize, are stored per channel, and can be disconnected any time.",
          ],
          [
            "Can my whole team use it?",
            <>Yes — invite teammates to the channels, and add them as <Link href="/docs/approvals" className="text-accent">approvers</Link> where they should be able to approve actions. Each channel stays its own isolated workspace.</>,
          ],
          [
            "What does it cost?",
            <>Flat monthly tiers on our keys — no usage bills. See <Link href="/docs/pricing" className="text-accent">Pricing</Link>.</>,
          ],
          [
            "What's coming next?",
            <>More integrations (CRM, Linear, GitHub), installing into your own Slack workspace, and the @finance specialist. Track progress on the <Link href="/changelog" className="text-accent">changelog</Link>.</>,
          ],
        ]}
      />

      <PageNav
        prev={{ href: "/docs/troubleshooting", label: "Troubleshooting" }}
        next={{ href: "/docs/pricing", label: "Pricing" }}
      />
    </article>
  );
}
