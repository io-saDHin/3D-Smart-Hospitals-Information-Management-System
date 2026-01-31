import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      <header className="border-b border-cyan-500/40 bg-slate-950/80 backdrop-blur flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.7)]">
            <span className="text-xs font-black tracking-tight">HX</span>
          </div>
          <div>
            <div className="text-sm font-semibold tracking-tight">HelixCare OS</div>
            <div className="text-[10px] text-cyan-300/70 uppercase tracking-[0.18em]">Smart Hospital IMS</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-xs text-slate-300">
          <button className="hover:text-cyan-300 transition-colors">Command Center</button>
          <button className="hover:text-cyan-300 transition-colors">Patients</button>
          <button className="hover:text-cyan-300 transition-colors">Clinicians</button>
          <button className="hover:text-cyan-300 transition-colors">OR & ICU</button>
          <button className="hover:text-cyan-300 transition-colors">Analytics</button>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex text-[11px] rounded-full border border-cyan-400/40 px-3 py-1 text-cyan-200/90 hover:bg-cyan-500/10 transition-colors">
            AI Triage
          </button>
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-cyan-500/40 flex items-center justify-center text-[11px] font-semibold">
            AD
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        <section className="relative flex-1 p-6 lg:p-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 0 0, rgba(56,189,248,0.12), transparent 55%), radial-gradient(circle at 100% 0, rgba(16,185,129,0.16), transparent 55%)" }} />
          </div>

          <div className="relative z-10 max-w-xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-slate-900/60 px-3 py-1 text-[11px] text-cyan-200/90 backdrop-blur">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Real‑time Hospital Operating System
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
              Futuristic 3D Smart Hospital
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300">
                Command & Control
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300/80 max-w-lg">
              Monitor beds, staff, imaging, and emergencies in a single immersive 3D command surface. Built as a next‑gen Hospital Information Management System with AI triage, digital twins, and real‑time HL7/FHIR integration.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 px-5 py-2 text-xs font-semibold text-slate-950 shadow-[0_0_25px_rgba(45,212,191,0.6)] hover:shadow-[0_0_35px_rgba(34,211,238,0.8)] transition-shadow">
                Launch 3D Hospital Tower
              </button>
              <button className="rounded-full border border-slate-600/80 bg-slate-900/80 px-4 py-2 text-xs font-semibold text-slate-200 hover:border-cyan-400/70 hover:text-cyan-200 transition-colors">
                View HIS Feature Matrix
              </button>
            </div>

            <dl className="grid grid-cols-3 gap-4 max-w-md pt-2 text-[11px] text-slate-300/90">
              <div>
                <dt className="text-slate-400 text-[10px] uppercase tracking-[0.18em]">Beds</dt>
                <dd className="mt-1 text-sm font-semibold text-cyan-300">324 / 360</dd>
              </div>
              <div>
                <dt className="text-slate-400 text-[10px] uppercase tracking-[0.18em]">OR Utilization</dt>
                <dd className="mt-1 text-sm font-semibold text-emerald-300">87%</dd>
              </div>
              <div>
                <dt className="text-slate-400 text-[10px] uppercase tracking-[0.18em]">ED Wait</dt>
                <dd className="mt-1 text-sm font-semibold text-amber-300">12 min</dd>
              </div>
            </dl>
          </div>

          <div className="relative z-10 mt-10 lg:mt-0 lg:absolute lg:right-6 lg:inset-y-10 flex items-center justify-center">
            <div className="relative h-[340px] w-full max-w-md lg:h-[440px] lg:max-w-lg">
              <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-cyan-500/30 via-slate-900 to-emerald-500/20 border border-cyan-400/40 shadow-[0_0_45px_rgba(34,211,238,0.5)] [transform:rotateX(26deg)_rotateY(-20deg)] [transform-origin:bottom_center] perspective-[1200px] overflow-hidden">
                <div className="absolute inset-px rounded-[28px] bg-slate-950/90" />

                <div className="relative h-full w-full p-4 sm:p-5 flex flex-col gap-3 text-[10px] text-slate-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-xl bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center text-[9px] font-bold">
                        HX
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold tracking-tight">Vertical Hospital Stack</div>
                        <div className="text-[9px] text-slate-400">Ground Parking → 11th Floor</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[8px] text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      LIVE MODEL
                    </div>
                  </div>

                  <div className="relative flex-1 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 overflow-hidden border border-slate-700/80">
                    <div
                      className="absolute inset-0 opacity-70"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 0 0, rgba(56,189,248,0.5), transparent 55%), radial-gradient(circle at 100% 100%, rgba(16,185,129,0.55), transparent 55%)',
                      }}
                    />

                    <div className="relative h-full w-full p-3 flex flex-col gap-2">
                      <div className="flex items-center justify-between text-[9px] text-slate-200/90">
                        <span>3D Tower Overview</span>
                        <span className="px-1.5 py-0.5 rounded-full bg-slate-900/70 border border-cyan-400/40 text-[8px] text-cyan-200">
                          Floors G–11
                        </span>
                      </div>

                      <div className="relative flex-1 flex gap-3">
                        <div className="relative flex-1 flex flex-col justify-end">
                          {[...Array(12)].map((_, index) => {
                            const isGround = index === 0;
                            const floorNumber = 11 - (index - 1);
                            const label = isGround ? 'G - Parking & EMS Dock' : `${floorNumber}F`;
                            const severityColor = isGround
                              ? 'from-slate-800 to-slate-900 border-slate-700/80'
                              : floorNumber >= 9
                              ? 'from-cyan-500/50 to-emerald-400/50 border-emerald-300/60'
                              : floorNumber >= 5
                              ? 'from-cyan-500/30 to-sky-500/40 border-cyan-300/70'
                              : 'from-slate-800 to-slate-900 border-slate-700/80';

                            return (
                              <div
                                key={index}
                                className={`relative mb-1.5 h-6 rounded-lg bg-gradient-to-r ${severityColor} border shadow-[0_0_12px_rgba(34,211,238,0.45)] flex items-center justify-between px-2 text-[8px] text-slate-50`}
                              >
                                <div className="flex items-center gap-1.5">
                                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
                                  <span>{label}</span>
                                </div>
                                {!isGround && (
                                  <div className="flex items-center gap-1 text-[7px] text-slate-100/90">
                                    <span className="text-emerald-200 font-semibold">
                                      {floorNumber >= 9 ? 'ICU / OR' : floorNumber >= 6 ? 'Wards' : 'OPD / Admin'}
                                    </span>
                                    <span className="text-slate-400">·</span>
                                    <span className="text-cyan-200">{floorNumber * 8} beds</span>
                                  </div>
                                )}
                                {isGround && (
                                  <span className="text-[7px] text-slate-300">Parking · EMS · Logistics</span>
                                )}
                              </div>
                            );
                          })}
                        </div>

                        <div className="hidden sm:flex flex-col justify-between w-20 text-[8px] text-slate-200">
                          <div className="rounded-xl border border-cyan-400/60 bg-slate-950/80 px-2 py-1.5 flex flex-col gap-1 shadow-[0_0_15px_rgba(8,145,178,0.7)]">
                            <span className="text-[7px] text-cyan-200">Focus Floor</span>
                            <span className="text-[11px] font-semibold text-emerald-300">9F</span>
                            <span className="text-[7px] text-slate-400">ICU · Cardiac · OR</span>
                          </div>
                          <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 px-2 py-1.5 flex flex-col gap-1">
                            <span className="text-[7px] text-slate-400">Vertical Ops</span>
                            <span className="text-[9px] text-slate-200">Elevators synced with bed moves, OR slots and ICU capacity.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-[8px] text-slate-300/90">
                    <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 px-2 py-1.5 flex flex-col gap-0.5">
                      <span className="text-[7px] text-slate-400">Total Floors</span>
                      <span className="text-[11px] font-semibold text-cyan-300">G + 11</span>
                    </div>
                    <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 px-2 py-1.5 flex flex-col gap-0.5">
                      <span className="text-[7px] text-slate-400">Mode</span>
                      <span className="text-[11px] font-semibold text-emerald-300">3D Stack</span>
                    </div>
                    <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 px-2 py-1.5 flex flex-col gap-0.5">
                      <span className="text-[7px] text-slate-400">Elevator Trips</span>
                      <span className="text-[11px] font-semibold text-cyan-300">128 / hr</span>
                    </div>
                    <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 px-2 py-1.5 flex flex-col gap-0.5">
                      <span className="text-[7px] text-slate-400">Vertical ETA</span>
                      <span className="text-[11px] font-semibold text-emerald-300">≤ 45s</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="w-full lg:w-80 xl:w-96 border-t lg:border-t-0 lg:border-l border-cyan-500/20 bg-slate-950/95 backdrop-blur p-5 flex flex-col gap-4 overflow-y-auto text-[11px]">
          <div>
            <h2 className="text-xs font-semibold text-slate-100 tracking-tight flex items-center justify-between">
              Clinical Streams
              <span className="text-[10px] text-cyan-300/80 font-normal">FHIR • HL7 • DICOM</span>
            </h2>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {[
                ['Patient Registry', 'Master Index, demographics, merges & links'],
                ['EMR / EHR Core', 'Orders, results, notes, allergies, meds'],
                ['LIS / RIS / PACS', 'Lab, imaging and diagnostics orchestration'],
                ['OR & ICU', 'Surgical scheduling, anaesthesia, ICU flowsheets'],
                ['Bed Management', 'Occupancy, transfers, predicted discharges'],
                ['Revenue & Billing', 'Claims, tariffs, packages, approvals'],
              ].map(([title, body]) => (
                <div key={title} className="rounded-xl border border-slate-700/80 bg-slate-900/80 p-2.5 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-slate-100">{title}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <p className="text-[9px] text-slate-400 leading-snug">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800/80 pt-4">
            <h2 className="text-xs font-semibold text-slate-100 tracking-tight mb-2">Sample HIS Feature Map</h2>
            <ul className="space-y-1.5 text-[10px] text-slate-300/90">
              <li className="flex items-center justify-between">
                <span>Out‑patient & In‑patient Management</span>
                <span className="text-emerald-400 text-[9px]">Enabled</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Electronic Medical Records (EMR)</span>
                <span className="text-emerald-400 text-[9px]">Enabled</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Pharmacy & Inventory</span>
                <span className="text-emerald-400 text-[9px]">Enabled</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Laboratory Information System (LIS)</span>
                <span className="text-emerald-400 text-[9px]">Enabled</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Radiology & PACS</span>
                <span className="text-emerald-400 text-[9px]">Enabled</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Insurance & Billing</span>
                <span className="text-emerald-400 text-[9px]">Enabled</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Role‑based Access & Audit</span>
                <span className="text-emerald-400 text-[9px]">Enabled</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Interoperability Gateway</span>
                <span className="text-emerald-400 text-[9px]">Enabled</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-slate-800/80 pt-3 flex flex-col gap-2">
            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span>Environment</span>
              <span className="text-cyan-300">Vite + React + TS + Tailwind</span>
            </div>
            <p className="text-[9px] text-slate-500 leading-snug">
              This web layer can be wired to a Laravel‑based backend implementing your full Smart Hospital Information Management System: patients, encounters, orders, billing, inventory, workflows, alerts and analytics.
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Dashboard;
