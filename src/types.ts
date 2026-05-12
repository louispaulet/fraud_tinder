export type Verdict = "scam" | "not-scam";

export type CaseVisual =
  | {
      kind: "listing";
      imageLabel: string;
      price: string;
      seller: string;
      sellerScore: string;
      shipping: string;
      badge: string;
    }
  | {
      kind: "article";
      source: string;
      headline: string;
      subhead: string;
      temperature: "calm" | "urgent";
    }
  | {
      kind: "message";
      sender: string;
      channel: string;
      message: string;
      codeWord: string;
    }
  | {
      kind: "invoice";
      vendor: string;
      amount: string;
      due: string;
      lineItems: string[];
    };

export type ScamCase = {
  id: string;
  title: string;
  type: string;
  dossier: string;
  visual: CaseVisual;
  evidence: string[];
  correctLabel: Verdict;
  explanation: string;
};

export type Decision = {
  caseId: string;
  selected: Verdict;
  correct: Verdict;
};
