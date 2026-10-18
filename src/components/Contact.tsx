import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  AlertCircle, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, InstagramIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { personal, social } = portfolioData;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formState.name.trim() || formState.name.trim().length < 2) {
      errs.name = 'Please enter your name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim() || !emailRegex.test(formState.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formState.message.trim() || formState.message.trim().length < 10) {
      errs.message = 'Please enter a message with at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const emailSubject = encodeURIComponent(
      formState.subject.trim() 
        ? `[Portfolio Contact] ${formState.subject.trim()}` 
        : `[Portfolio Inquiry] Message from ${formState.name.trim()}`
    );
    const emailBody = encodeURIComponent(
      `Name: ${formState.name.trim()}\nEmail: ${formState.email.trim()}\n\nMessage:\n${formState.message.trim()}`
    );

    window.location.href = `mailto:${social.email}?subject=${emailSubject}&body=${emailBody}`;
    setFormSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(social.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-block font-mono text-xs uppercase tracking-wider text-[#315DDC] dark:text-[#91ACFF] mb-2">
            06 / Communication
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#17243B] dark:text-[#F8F7F4]">
            Contact & Placement Inquiries
          </h2>
          <p className="text-base text-[#59677C] dark:text-[#ACB9CE] mt-2 max-w-2xl">
            I am actively seeking 12-month industrial placement opportunities. Let's discuss how I can contribute to your engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-4">
            <div className="editorial-card rounded-md p-6 space-y-5">
              <div>
                <h3 className="text-base font-bold text-[#17243B] dark:text-[#F8F7F4] mb-1">
                  Direct Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-[#59677C] dark:text-[#ACB9CE] leading-relaxed">
                  Feel free to reach out directly via email, connect on LinkedIn, view my GitHub work, or follow my visual updates on Instagram.
                </p>
              </div>

              {/* Email Card */}
              <div className="p-3.5 rounded bg-[#F8F7F4] dark:bg-[#131F33] border border-[#DDE2EB] dark:border-[#30405B] space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#59677C] dark:text-[#ACB9CE] font-mono">
                    <Mail className="w-3.5 h-3.5 text-[#315DDC] dark:text-[#91ACFF]" />
                    <span>Email Address</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#315DDC] dark:text-[#91ACFF] hover:underline"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-[#315DDC] dark:text-[#91ACFF]" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <a 
                  href={`mailto:${social.email}`}
                  className="text-sm font-semibold text-[#17243B] dark:text-[#F8F7F4] hover:text-[#315DDC] dark:hover:text-[#91ACFF] transition-colors break-all block"
                >
                  {social.email}
                </a>
              </div>

              {/* LinkedIn, GitHub & Instagram */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded bg-[#F8F7F4] dark:bg-[#131F33] border border-[#DDE2EB] dark:border-[#30405B] hover:border-[#315DDC] dark:hover:border-[#91ACFF] transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-[#315DDC] dark:text-[#91ACFF]" />
                    <div>
                      <div className="text-[11px] font-mono text-[#59677C] dark:text-[#ACB9CE]">Network</div>
                      <div className="text-xs font-bold text-[#17243B] dark:text-[#F8F7F4]">LinkedIn</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3 h-3 text-[#59677C] dark:text-[#ACB9CE]" />
                </a>

                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded bg-[#F8F7F4] dark:bg-[#131F33] border border-[#DDE2EB] dark:border-[#30405B] hover:border-[#315DDC] dark:hover:border-[#91ACFF] transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-[#315DDC] dark:text-[#91ACFF]" />
                    <div>
                      <div className="text-[11px] font-mono text-[#59677C] dark:text-[#ACB9CE]">Source Code</div>
                      <div className="text-xs font-bold text-[#17243B] dark:text-[#F8F7F4]">GitHub</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3 h-3 text-[#59677C] dark:text-[#ACB9CE]" />
                </a>

                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded bg-[#F8F7F4] dark:bg-[#131F33] border border-[#DDE2EB] dark:border-[#30405B] hover:border-[#315DDC] dark:hover:border-[#91ACFF] transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <InstagramIcon className="w-4 h-4 text-[#315DDC] dark:text-[#91ACFF]" />
                    <div>
                      <div className="text-[11px] font-mono text-[#59677C] dark:text-[#ACB9CE]">Visual</div>
                      <div className="text-xs font-bold text-[#17243B] dark:text-[#F8F7F4]">Instagram</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3 h-3 text-[#59677C] dark:text-[#ACB9CE]" />
                </a>
              </div>

              {/* Location Card */}
              <div className="p-3.5 rounded bg-[#F8F7F4] dark:bg-[#131F33] border border-[#DDE2EB] dark:border-[#30405B] flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#315DDC] dark:text-[#91ACFF] flex-shrink-0" />
                <div>
                  <div className="text-[11px] font-mono text-[#59677C] dark:text-[#ACB9CE]">Location</div>
                  <div className="text-xs font-bold text-[#17243B] dark:text-[#F8F7F4]">{personal.location} (Open to UK relocation/hybrid)</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="editorial-card rounded-md p-6 sm:p-7 space-y-5">
              <h3 className="text-base font-bold text-[#17243B] dark:text-[#F8F7F4] flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#315DDC] dark:text-[#91ACFF]" />
                <span>Send a Message</span>
              </h3>
              
              {/* Form Delivery Honesty Disclaimer */}
              <div className="p-3.5 rounded bg-[#F8F7F4] dark:bg-[#131F33] border border-[#DDE2EB] dark:border-[#30405B] flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#315DDC] dark:text-[#91ACFF] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-[#59677C] dark:text-[#ACB9CE] leading-relaxed">
                  <strong className="text-[#17243B] dark:text-[#F8F7F4]">Notice:</strong> This portfolio runs directly in the browser without an unconfigured email backend. Submitting opens your default email client with your prefilled message addressed to Mohammad Kaif.
                </p>
              </div>

              {formSubmitted && (
                <div className="p-3.5 rounded bg-[#EDF1FF] dark:bg-[#1C2C4E] border border-[#315DDC]/30 dark:border-[#91ACFF]/40 text-[#315DDC] dark:text-[#91ACFF] text-xs flex items-start gap-2.5">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold">Message prepared!</strong> Your default email application should have launched. If it didn't open automatically, you can email directly at <span className="font-mono underline">{social.email}</span>.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#17243B] dark:text-[#F8F7F4] mb-1.5">
                      Your Name <span className="text-[#315DDC] dark:text-[#91ACFF]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className={`w-full px-3.5 py-2 rounded bg-[#FFFFFF] dark:bg-[#131F33] border ${
                        errors.name ? 'border-rose-500' : 'border-[#DDE2EB] dark:border-[#30405B]'
                      } text-[#17243B] dark:text-[#F8F7F4] text-sm focus:outline-none focus:border-[#315DDC] dark:focus:border-[#91ACFF] transition-colors`}
                    />
                    {errors.name && <p className="text-rose-600 dark:text-rose-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#17243B] dark:text-[#F8F7F4] mb-1.5">
                      Your Email <span className="text-[#315DDC] dark:text-[#91ACFF]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. recruiter@company.co.uk"
                      className={`w-full px-3.5 py-2 rounded bg-[#FFFFFF] dark:bg-[#131F33] border ${
                        errors.email ? 'border-rose-500' : 'border-[#DDE2EB] dark:border-[#30405B]'
                      } text-[#17243B] dark:text-[#F8F7F4] text-sm focus:outline-none focus:border-[#315DDC] dark:focus:border-[#91ACFF] transition-colors`}
                    />
                    {errors.email && <p className="text-rose-600 dark:text-rose-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#17243B] dark:text-[#F8F7F4] mb-1.5">
                    Subject / Placement Role
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. 12-Month Software Placement Opportunity"
                    className="w-full px-3.5 py-2 rounded bg-[#FFFFFF] dark:bg-[#131F33] border border-[#DDE2EB] dark:border-[#30405B] text-[#17243B] dark:text-[#F8F7F4] text-sm focus:outline-none focus:border-[#315DDC] dark:focus:border-[#91ACFF] transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#17243B] dark:text-[#F8F7F4] mb-1.5">
                    Message <span className="text-[#315DDC] dark:text-[#91ACFF]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Write your message or placement opportunity details here..."
                    className={`w-full px-3.5 py-2 rounded bg-[#FFFFFF] dark:bg-[#131F33] border ${
                      errors.message ? 'border-rose-500' : 'border-[#DDE2EB] dark:border-[#30405B]'
                    } text-[#17243B] dark:text-[#F8F7F4] text-sm focus:outline-none focus:border-[#315DDC] dark:focus:border-[#91ACFF] transition-colors resize-none`}
                  />
                  {errors.message && <p className="text-rose-600 dark:text-rose-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded bg-[#315DDC] hover:bg-[#2448B2] text-white font-medium text-xs tracking-wide uppercase font-mono transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send via Email Client</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
