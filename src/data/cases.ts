import type { ScamCase } from "../types";

export const cases: ScamCase[] = [
  {
    id: "case-001",
    title: "Factory Sealed Camera, 86% Below Market",
    type: "eBay-style listing",
    dossier: "Marketplace Desk / Lot 43-A",
    visual: {
      kind: "listing",
      imageLabel: "Mirrorless camera kit",
      price: "$119.00",
      seller: "fresh-deals-warehouse",
      sellerScore: "2 reviews",
      shipping: "Ships after bank transfer confirmation",
      badge: "24 minutes left",
    },
    evidence: [
      "Price is dramatically below normal market value.",
      "Seller account is new with almost no history.",
      "Payment is pushed away from normal buyer protection.",
    ],
    correctLabel: "scam",
    explanation:
      "The extreme discount, new seller, and off-platform payment request are classic marketplace scam signals.",
  },
  {
    id: "case-002",
    title: "Used Office Chair, Local Pickup",
    type: "eBay-style listing",
    dossier: "Marketplace Desk / Lot 12-C",
    visual: {
      kind: "listing",
      imageLabel: "Grey ergonomic chair",
      price: "$64.00",
      seller: "northside-office-clearout",
      sellerScore: "418 reviews, 99.1%",
      shipping: "Local pickup or tracked courier",
      badge: "Pickup available",
    },
    evidence: [
      "Price is plausible for a used office chair.",
      "Seller has a long review history.",
      "Payment and delivery stay inside normal marketplace flows.",
    ],
    correctLabel: "not-scam",
    explanation:
      "This looks ordinary: reasonable price, normal pickup/shipping options, and a seller history that fits the item.",
  },
  {
    id: "case-003",
    title: "Municipal Refund Portal Closing Tonight",
    type: "Article preview",
    dossier: "Public Notice Review / Clip 09",
    visual: {
      kind: "article",
      source: "Civic Ledger Daily",
      headline: "Residents must claim surprise utility refunds before midnight",
      subhead:
        "A sponsored portal asks for card details to release a fictional city rebate.",
      temperature: "urgent",
    },
    evidence: [
      "Uses a tight deadline to force fast action.",
      "Requests card details to receive a refund.",
      "Claims government authority without a verifiable official domain.",
    ],
    correctLabel: "scam",
    explanation:
      "Refund scams often manufacture urgency and ask for sensitive payment details to 'release' money.",
  },
  {
    id: "case-004",
    title: "Independent Review of Refurbished Laptops",
    type: "Article preview",
    dossier: "Media Authenticity / Clip 21",
    visual: {
      kind: "article",
      source: "Neighborhood Tech Notes",
      headline: "We tested five refurbished laptops from local repair shops",
      subhead:
        "The piece compares warranties, battery health, and return windows without asking readers to log in.",
      temperature: "calm",
    },
    evidence: [
      "No request for credentials or payment.",
      "Tone is informational rather than urgent.",
      "Claims are specific and comparatively modest.",
    ],
    correctLabel: "not-scam",
    explanation:
      "Nothing here pressures the reader or requests sensitive information. It reads like normal consumer reporting.",
  },
  {
    id: "case-005",
    title: "Courier Needs a Re-Delivery Fee",
    type: "Message screenshot",
    dossier: "Inbox Fraud Unit / Thread 77",
    visual: {
      kind: "message",
      sender: "Parcel Desk Notice",
      channel: "SMS",
      message:
        "Your parcel is paused. Pay the 1.99 handling fee in 30 minutes or it returns to sender.",
      codeWord: "tiny fee",
    },
    evidence: [
      "Urgent countdown is used to rush the recipient.",
      "Small fee lowers suspicion while harvesting payment data.",
      "Sender is generic and not tied to a real order reference.",
    ],
    correctLabel: "scam",
    explanation:
      "Fake delivery-fee messages commonly use low amounts and short deadlines to collect card details.",
  },
  {
    id: "case-006",
    title: "Receipt for a Local Repair Deposit",
    type: "Invoice mockup",
    dossier: "Accounts Desk / Receipt 18",
    visual: {
      kind: "invoice",
      vendor: "Moss & Finch Bike Repair",
      amount: "$35.00",
      due: "Paid in shop",
      lineItems: ["Brake inspection deposit", "Receipt number BF-1042"],
    },
    evidence: [
      "Small deposit matches an in-person service.",
      "No pressure to change payment method.",
      "Includes a clear receipt number and local context.",
    ],
    correctLabel: "not-scam",
    explanation:
      "This fictional receipt has normal business context and no unusual request for credentials or off-platform payment.",
  },
  {
    id: "case-007",
    title: "Collector Console With 'Buyer Protection Later'",
    type: "eBay-style listing",
    dossier: "Marketplace Desk / Lot 88-Q",
    visual: {
      kind: "listing",
      imageLabel: "Retro game console bundle",
      price: "$210.00",
      seller: "retro-vault-direct",
      sellerScore: "37 reviews, 91%",
      shipping: "Message seller for private checkout discount",
      badge: "Private checkout",
    },
    evidence: [
      "Seller asks buyers to move to private checkout.",
      "The discount is conditional on losing platform protection.",
      "Seller score is mixed for a high-demand collectible.",
    ],
    correctLabel: "scam",
    explanation:
      "Moving the purchase outside the platform removes buyer protection and is a major red flag.",
  },
  {
    id: "case-008",
    title: "Museum Store Poster Reprint",
    type: "eBay-style listing",
    dossier: "Marketplace Desk / Lot 05-B",
    visual: {
      kind: "listing",
      imageLabel: "Botanical poster reprint",
      price: "$18.50",
      seller: "paper-archive-shop",
      sellerScore: "1,204 reviews, 99.7%",
      shipping: "Tracked economy shipping",
      badge: "Reprint disclosed",
    },
    evidence: [
      "The item is clearly described as a reprint.",
      "Price is believable for the product.",
      "Seller reputation and shipping method look normal.",
    ],
    correctLabel: "not-scam",
    explanation:
      "A clearly disclosed reprint at a plausible price from a stable seller is not inherently suspicious.",
  },
];
