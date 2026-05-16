import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h2 className="footer-tag">AI you can put into operations.</h2>
            <a href="mailto:hello@chittanshai.com" className="btn btn-ghost btn-sm">
              hello@chittanshai.com
            </a>
          </div>
          <div className="footer-col">
            <h4>Work</h4>
            <ul>
              <li><Link href="/#demos">Demos</Link></li>
              <li><Link href="/services">What we build</Link></li>
              <li><Link href="/case-studies">Case studies</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><a href="mailto:hello@chittanshai.com">Contact</a></li>
              <li><a href="mailto:careers@chittanshai.com">Careers</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Office</h4>
            <ul>
              <li>Gurgaon · Bengaluru</li>
              <li>Mon — Fri</li>
              <li>By appointment</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Chittansh AI Solutions Pvt Ltd</span>
          <span>v3.0 · ship the thing</span>
        </div>
      </div>
    </footer>
  );
}
