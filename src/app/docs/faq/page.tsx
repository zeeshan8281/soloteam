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
            "Is this another reporting dashboard?",
            <>No. Keep the project and reporting tools you already use. SoloTeam turns their surrounding Slack context into an approved client update and follow-through loop.</>,
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
            "Where does the workflow run?",
            "In Slack. The pilot starts in one client channel and adds approved connected sources only where the workflow needs them.",
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
            <>The assisted pilot is $99/month for up to five active client channels. See <Link href="/docs/pricing" className="text-accent">Pricing</Link>.</>,
          ],
          [
            "What's coming next?",
            <>The pilot is focused on reliable weekly updates and follow-through. Broader integrations and product surfaces wait until recurring use and paid renewal validate the workflow. Track releases on the <Link href="/changelog" className="text-accent">changelog</Link>.</>,
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
