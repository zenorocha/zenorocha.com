'use client';

import React from 'react';

import { Box } from '../../components/Box';
import Toast from '../../components/Toast';
import Base from '../../layouts/Base';

export default function Contact() {
  const description = `<strong>I love chatting</strong> with software engineers, tech founders, students, and creators. <strong>I'm a busy person</strong>, so I can't promise that I'll reply to your email right away, but I'll try my best to respond in a timely manner.`;
  const [isEmailSent, setIsEmailSent] = React.useState(undefined);
  const [showToast, setShowToast] = React.useState(false);

  const onSendEmail = async (e) => {
    e.preventDefault();

    try {
      const isProd = process.env.NODE_ENV === 'production';
      const base = isProd ? 'https://zenorocha.com' : 'http://localhost:3000';

      await fetch(`${base}/api/email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value
        })
      });

      setIsEmailSent(true);
      setShowToast(true);
    } catch (e) {
      console.error(e);
      setIsEmailSent(false);
      setShowToast(true);
    }
  };

  return (
    <Base
      title="Contact // Zeno Rocha"
      tagline="Emails. Emails. Emails."
      primaryColor="cyan"
      secondaryColor="green"
    >
      <Box>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <h2>Send me an email</h2>
        <form onSubmit={onSendEmail} className="flex max-w-[25rem] flex-col">
          <div className="mb-[0.625rem] flex flex-col">
            <label
              htmlFor="name"
              className="text-xs font-medium text-[var(--color-secondary)] uppercase"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="James Bond"
              required
              className="rounded-lg border border-[var(--color-secondary)] bg-transparent p-[0.625rem] text-[var(--color-primary)] focus:border-[var(--color-cyan)] focus:outline-none"
            />
          </div>
          <div className="mb-[0.625rem] flex flex-col">
            <label
              htmlFor="email"
              className="text-xs font-medium text-[var(--color-secondary)] uppercase"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="james@bond.com"
              required
              className="rounded-lg border border-[var(--color-secondary)] bg-transparent p-[0.625rem] text-[var(--color-primary)] focus:border-[var(--color-cyan)] focus:outline-none"
            />
          </div>
          <div className="mb-[0.625rem] flex flex-col">
            <label
              htmlFor="message"
              className="text-xs font-medium text-[var(--color-secondary)] uppercase"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="How can I help you?"
              rows="4"
              required
              className="rounded-lg border border-[var(--color-secondary)] bg-transparent p-[0.625rem] text-[var(--color-primary)] focus:border-[var(--color-cyan)] focus:outline-none"
            />
          </div>
          <div className="mb-[0.625rem] flex flex-col">
            <button
              type="submit"
              className="mt-[0.3125rem] cursor-pointer rounded-lg border border-white bg-white p-[0.625rem] text-[var(--color-background)] transition-all duration-200 ease-in-out hover:border-[var(--color-cyan)] hover:bg-transparent hover:text-[var(--color-cyan)] focus:border-[var(--color-cyan)] focus:bg-transparent focus:text-[var(--color-cyan)] focus:outline-none"
            >
              Send
            </button>
          </div>
        </form>
        <Toast
          title={isEmailSent ? 'Email sent :D' : 'Error :('}
          description={
            isEmailSent
              ? 'Thanks for taking the time to write it.'
              : 'Something wrong happened. Try again later.'
          }
          isSuccess={isEmailSent}
          showToast={showToast}
          setShowToast={setShowToast}
        />
      </Box>
    </Base>
  );
}
