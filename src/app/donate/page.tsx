"use client";

import DonateHero from "./donatehero";
import DonateOptions from "./donateoptions";
import BankTransfer from "./banktransfer";
import InKind from "./inkind";
import FAQ from "./faq";


export default function DonatePage() {
  return (
    <main>
      <DonateHero />
      <DonateOptions />
      <BankTransfer />
      <InKind />
       <FAQ />
    </main>
  );
}
