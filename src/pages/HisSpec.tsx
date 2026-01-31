import React from 'react';

const HisSpec: React.FC = () => {
  const modules = [
    {
      title: 'Patient & Clinical Core',
      items: [
        'Patient registration & master patient index (MPI)',
        'OPD, IPD, ER, Day‑care & Telehealth encounters',
        'EMR with allergies, diagnoses, vitals, clinical notes',
        'CPOE – computerized physician order entry',
        'Medication management & e‑prescriptions',
        'Care plans, care pathways & integrated care bundles',
      ],
    },
    {
      title: 'Diagnostics & Ancillaries',
      items: [
        'Laboratory Information System (LIS)',
        'Radiology Information System (RIS) & PACS viewer integration',
        'Pathology & microbiology workflows',
        'Point‑of‑care devices integration',
        'Specimen tracking and bar‑coding',
      ],
    },
    {
      title: 'Operations & Bed Management',
      items: [
        'Real‑time bed occupancy, transfers & housekeeping',
        'Operating theatre scheduling & utilisation analytics',
        'ICU flowsheets, ventilator & infusion pump data capture',
        'Emergency triage (ESI, CTAS etc.) with AI assistance',
        'Clinical alerts & early warning scores (NEWS, MEWS)',
      ],
    },
    {
      title: 'Revenue Cycle & Admin',
      items: [
        'Insurance & corporate billing with pre‑auth workflows',
        'Package billing, tariffs & discount rules',
        'Cashier, credit limits & revenue leakage controls',
        'Claims management and remittance advice posting',
        'AR, collection dashboards & ageing analysis',
      ],
    },
    {
      title: 'Inventory & Pharmacy',
      items: [
        'Central & sub‑store inventory with re‑order rules',
        'Pharmacy management – inpatient & outpatient',
        'Batch, expiry and cold‑chain tracking',
        'Narcotics control & access logging',
        'Integration with procurement & suppliers',
      ],
    },
    {
      title: 'Governance, Security & Interop',
      items: [
        'Role‑based access control & SSO',
        'Comprehensive audit trails & session logging',
        'Consent, privacy and record‑sharing policies',
        'FHIR / HL7v2 / DICOM integration gateway',
        'FHIR‑based APIs for third‑party apps & patient portal',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 px-4 py-6 sm:px-6 lg:px-12 lg:py-10">
      <div className="max-w-5xl mx-auto space-y-6">
        <header className="space-y-2">
          <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-300/80">Laravel Smart Hospital IMS Blueprint</p>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Logical Modules & Features</h1>
          <p className="text-sm text-slate-300 max-w-2xl">
            Use this as an architectural blueprint for your Laravel project. Each module can map to Laravel domains (bounded contexts) with its own controllers, models, policies, events and APIs powering the React 3D command center.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {modules.map((module) => (
            <article key={module.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 flex flex-col gap-2">
              <h2 className="text-sm font-semibold text-cyan-200 flex items-center justify-between">
                {module.title}
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </h2>
              <ul className="mt-1 space-y-1.5 text-[12px] text-slate-200">
                {module.items.map((item) => (
                  <li key={item} className="flex items-start gap-1.5">
                    <span className="mt-1 h-1 w-1 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="mt-4 grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] items-start">
          <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-4 space-y-2 text-sm">
            <h2 className="text-sm font-semibold text-cyan-200 flex items-center justify-between">
              Suggested Laravel Project Structure
              <span className="text-[11px] text-slate-400">Domain‑driven</span>
            </h2>
            <pre className="mt-1 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] p-3 overflow-x-auto leading-relaxed text-slate-200">
              <code>{`app/
  Domain/
    Patients/
      Models/Patient.php
      Actions/RegisterPatient.php
      Policies/PatientPolicy.php
    Encounters/
    Orders/
    Billing/
    Inventory/
    Diagnostics/
  Http/
    Controllers/
      Api/
        PatientsController.php
        EncountersController.php
  Providers/
    DomainServiceProvider.php

routes/
  api.php   // FHIR-style REST + JSON APIs
  web.php   // Admin & backoffice

config/
  his.php   // Feature flags, codes, clinical rules`}</code>
            </pre>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-[12px] space-y-2 text-slate-200">
            <h2 className="text-sm font-semibold text-cyan-200">Core Backend Capabilities</h2>
            <ul className="space-y-1.5">
              <li>• Multi‑tenant ready (per hospital / network)</li>
              <li>• Queue & event driven (appointments, orders, alerts)</li>
              <li>• Jobs for HL7/FHIR integration and scheduled syncs</li>
              <li>• API tokens / OAuth for mobile apps & partner systems</li>
              <li>• Comprehensive logging, audits & observability</li>
            </ul>
            <p className="pt-1 text-[11px] text-slate-400">
              You can now implement each feature step‑by‑step in Laravel and expose secure REST/FHIR endpoints consumed by this React front‑end.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HisSpec;
