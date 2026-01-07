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
        <form onSubmit={onSendEmail} className="flex max-w-100 flex-col">
          <div className="mb-2.5 flex flex-col">
            <label
              htmlFor="name"
              className="text-secondary text-xs font-medium uppercase"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="James Bond"
              required
              className="border-secondary text-primary focus:border-cyan rounded-lg border bg-transparent p-2.5 focus:outline-none"
            />
          </div>
          <div className="mb-2.5 flex flex-col">
            <label
              htmlFor="email"
              className="text-secondary text-xs font-medium uppercase"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="james@bond.com"
              required
              className="border-secondary text-primary focus:border-cyan rounded-lg border bg-transparent p-2.5 focus:outline-none"
            />
          </div>
          <div className="mb-2.5 flex flex-col">
            <label
              htmlFor="message"
              className="text-secondary text-xs font-medium uppercase"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="How can I help you?"
              rows="4"
              required
              className="border-secondary text-primary focus:border-cyan rounded-lg border bg-transparent p-2.5 focus:outline-none"
            />
          </div>
          <div className="mb-2.5 flex flex-col">
            <button
              type="submit"
              className="text-background hover:border-cyan hover:text-cyan focus:border-cyan focus:text-cyan mt-1.25 cursor-pointer rounded-lg border border-white bg-white p-2.5 transition-all duration-200 ease-in-out hover:bg-transparent focus:bg-transparent focus:outline-none"
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
