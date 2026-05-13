import type { ScamFamily, ScamFamilyId } from "../types";

export const scamFamilies: ScamFamily[] = [
  {
    id: "marketplace-authenticity",
    label: "Marketplace authenticity",
    description: "Listings where price, product truth, and seller behavior need a close look.",
  },
  {
    id: "trust-and-romance",
    label: "Trust and romance",
    description: "Personal messages that test whether warmth is being used as pressure.",
  },
  {
    id: "payment-handling",
    label: "Payment handling",
    description: "Requests that move money, accounts, or checkout flow into unusual territory.",
  },
  {
    id: "delivery-and-refunds",
    label: "Delivery and refunds",
    description: "Fees, refunds, and shipment notices where small details carry the signal.",
  },
  {
    id: "authority-and-notices",
    label: "Authority and notices",
    description: "Official-sounding alerts that should earn their badge before earning trust.",
  },
  {
    id: "local-services",
    label: "Local services",
    description: "Invoices, deposits, and small-business paperwork from the neighborhood desk.",
  },
];

export function getScamFamily(id: ScamFamilyId) {
  return scamFamilies.find((family) => family.id === id) ?? scamFamilies[0];
}
