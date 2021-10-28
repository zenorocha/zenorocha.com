export default function Updates() {
  return <div>
    <div className="divider">
      <div className="top-divider"></div>
      <div className="icon-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-mail"><path className="icon-color-primary" d="M22 8.62V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.62l9.55 4.77a1 1 0 0 0 .9 0L22 8.62z"/><path className="icon-color-secondary" d="M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.38l-10 5z"/></svg>
      </div>
      <div className="bottom-divider"></div>
    </div>

    <div className="post-container">
      <h2 className="update-title">Stay up to date</h2>
      <p className="update-description">My email list is the best way to follow all the work I'm doing. Sign up below.</p>

      <form action="https://zenorocha.us4.list-manage.com/subscribe/post?u=f3eb54b0d52e9b0f83a8d26ee&amp;id=9ffdb97e70" method="post" className="form">
        <input name="EMAIL" placeholder="Your email address" id="mce-EMAIL" type="email" required />
        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" />
      </form>
    </div>
  </div>
}